package io.komune.registry.infra.brevo.config

import brevo.ApiClient
import brevo.ApiException
import brevoApi.ContactsApi
import brevoApi.TransactionalEmailsApi
import brevoModel.AddContactToList
import brevoModel.CreateContact
import brevoModel.SendSmtpEmail
import brevoModel.SendSmtpEmailAttachment
import brevoModel.SendSmtpEmailSender
import brevoModel.SendSmtpEmailTo
import brevoModel.UpdateContact
import io.komune.registry.api.commons.utils.parseJsonTo
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.infra.brevo.model.EmailAttachment
import io.komune.registry.infra.brevo.model.EmailContact
import s2.spring.utils.logger.Logger

class BrevoClient(
    private val config: BrevoConfig
) {
    private val emailClient: TransactionalEmailsApi
    private val contactClient: ContactsApi

    private val logger by Logger()

    init {
        val apiClient = ApiClient().apply {
            setApiKey(config.token)
        }
        emailClient = TransactionalEmailsApi(apiClient)
        contactClient = ContactsApi(apiClient)
    }

    fun sendEmail(
        templateId: Long,
        receivers: List<EmailContact>,
        payload: Any?,
        attachments: Collection<EmailAttachment>?
    ) = brevo<Unit> {
        SendSmtpEmail().apply {
            this.templateId = templateId

            sender = SendSmtpEmailSender().apply { email = config.from }

            to = receivers.mapIndexed { i, receiver ->
                SendSmtpEmailTo().apply {
                    email = if (config.debug.enable) {
                        if (i == 0) {
                            config.debug.email
                        } else {
                            val (identifier, domain) = config.debug.email.split('@')
                            val separator = if ('+' in identifier) "" else "+"
                            "$identifier$separator$i@$domain"
                        }
                    } else {
                        receiver.email
                    }
                    name = receiver.name
                }
            }

            params = payload

            attachment = attachments?.map {
                SendSmtpEmailAttachment().apply {
                    name = it.name
                    content = it.content
                }
            }

        }.let(emailClient::sendTransacEmail)
    }

    fun registerContact(identifier: String?, contact: BrevoContact) = brevo<Unit> {
        try {
            val existingContact = contactClient.getContactInfo(identifier ?: contact.email, null, null)
            UpdateContact().apply {
                attributes = contact.toJson().parseJsonTo<Map<String, String>>()
            }.let { contactClient.updateContact(existingContact.email,  it) }
        } catch (e: ApiException) {
            CreateContact().apply {
                email = contact.email
                attributes = contact.toJson().parseJsonTo<Map<String, String>>()
            }.let { contactClient.createContact(it) }
        }

        try {
            AddContactToList().apply {
                emails(listOf(contact.email))
            }.let { contactClient.addContactToList(config.contactList, it) }
        } catch (_: ApiException) {}
    }

    fun removeContact(email: String) = brevo<Unit> {
        try {
            contactClient.deleteContact(email)
        } catch (_: ApiException) {}
    }

    private fun <R> brevo(block: () -> R): R? {
        if (config.sandbox) {
            logger.info("Sandbox mode enabled. Call to Brevo aborted.")
            return null
        }

        return block()
    }
}

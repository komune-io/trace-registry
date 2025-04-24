package io.komune.registry.api.config.secret

import java.io.IOException
import java.nio.charset.StandardCharsets
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import org.springframework.boot.SpringApplication
import org.springframework.boot.env.EnvironmentPostProcessor
import org.springframework.core.Ordered
import org.springframework.core.env.ConfigurableEnvironment
import org.springframework.core.env.MapPropertySource
import org.springframework.util.FileCopyUtils

class DockerSecretEnvPostProcessor : EnvironmentPostProcessor, Ordered {

    companion object {
        private const val PROP_ENABLED = "docker.secret.enabled"
        private const val PROP_ENABLED_DEFAULT = true

        private const val PROP_PREFIX = "docker.secret.prefix"
        private const val PROD_PREFIX_DEFAULT = "docker_secret_"

        private const val PROP_PATH = "docker.secret.path"
        private const val PROP_PATH_DEFAULT = "/run/secrets"

        private const val PROP_TRIM = "docker.secret.trim"
        private const val PROP_TRIM_DEFAULT = true

        private const val PROP_PRINT_ERRORS = "docker.secret.print.errors"
        private const val PROP_PRINT_ERRORS_DEFAULT = true

        private const val PROP_PRINT_SECRETS = "docker.secret.print.secrets"
        private const val PROP_PRINT_SECRETS_DEFAULT = false
        private const val SECRET_MASK = "********"

        private const val PROP_PRINT_SECRETS_UNMASKED = "docker.secret.print.secrets.unmasked"
        private const val PROP_PRINT_SECRETS_UNMASKED_DEFAULT = false
    }

    override fun postProcessEnvironment(env: ConfigurableEnvironment, application: SpringApplication) {
        val enabled = env.getProperty(PROP_ENABLED, Boolean::class.java, PROP_ENABLED_DEFAULT)
        if (!enabled) {
            return
        }

        val prefix = env.getProperty(PROP_PREFIX, PROD_PREFIX_DEFAULT)
        val printErrors = env.getProperty(PROP_PRINT_ERRORS, Boolean::class.java, PROP_PRINT_ERRORS_DEFAULT)
        val path = env.getProperty(PROP_PATH, PROP_PATH_DEFAULT)
        val trim = env.getProperty(PROP_TRIM, Boolean::class.java, PROP_TRIM_DEFAULT)

        try {
            val dockerSecretsMap = getDockerSecretsMap(path, prefix, trim, printErrors)
            if (dockerSecretsMap.isEmpty()) {
                return
            }

            val printSecrets = env.getProperty(PROP_PRINT_SECRETS, Boolean::class.java, PROP_PRINT_SECRETS_DEFAULT)
            if (printSecrets) {
                printDockerSecrets(env, dockerSecretsMap)
            }

            val mps = MapPropertySource("Docker", dockerSecretsMap)
            env.propertySources.addLast(mps)
        } catch (e: IOException) {
            if (printErrors) {
                printOut("Invalid path '$path'. Check if it's a valid directory!")
            }
        }
    }

    private fun printDockerSecrets(env: ConfigurableEnvironment, dockerSecretsMap: Map<String, Any>) {
        val printUnmasked = env.getProperty(
            PROP_PRINT_SECRETS_UNMASKED,
            Boolean::class.java, PROP_PRINT_SECRETS_UNMASKED_DEFAULT
        )
        printOut("===========================")
        printOut("     Docker Properties     ")
        printOut("===========================")
        dockerSecretsMap.map { (key: String?, value: Any?) ->
            getMaskedSecretKeyPair(key, value, printUnmasked)
        }.sorted().forEach {
            message -> printOut(message)
        }
        printOut("===========================")
    }

    private fun getMaskedSecretKeyPair(key: String, value: Any, printUnmasked: Boolean): String {
        val strValue = value as String
        var maskedValue = "$key="
        maskedValue += if (!printUnmasked) {
            SECRET_MASK
        } else {
            strValue
        }
        return maskedValue
    }

    @Throws(IOException::class)
    private fun getDockerSecretsMap(
        path: String,
        prefix: String?,
        trim: Boolean,
        printErrors: Boolean
    ): Map<String, String> {
        val secretsDirectory = Paths.get(path)
        return Files.list(secretsDirectory)
            .use { stream ->
                stream.filter { Files.isRegularFile(it) }
                    .toList()
                    .associate { filePath ->
                        val key = "${prefix ?: ""}${filePath.toFile().name}"
                        val value = readFileContent(filePath, trim, printErrors)

                        key to value
                    }
            }
    }

    private fun readFileContent(filePath: Path, trim: Boolean, printErrors: Boolean): String {
        return try {
            val content = FileCopyUtils.copyToByteArray(filePath.toFile())
            val stringValue = String(content, StandardCharsets.UTF_8)
            if (trim) stringValue.trim { it <= ' ' } else stringValue
        } catch (e: IOException) {
            if (printErrors) {
                printOut("Content of ${filePath.toFile().path} not copied!")
            }
            ""
        }
    }

    private fun printOut(message: String) {
        println(javaClass.name + ": " + message)
    }

    override fun getOrder(): Int {
        return Ordered.LOWEST_PRECEDENCE
    }

}

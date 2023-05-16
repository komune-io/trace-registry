package city.smartb.registry.program.s2.asset.domain.model

/**
 * @d2 model
 * @order 110
 */
enum class TransactionType {
    /**
     * An issue transaction is the process of adding new assets or credits to a pool for a specific organization or user.
     * This transaction increases the credit balance of the asset pool,
     * and typically occurs when a project or organization generates new credits as a result of their activities,
     * such as reducing greenhouse gas emissions or implementing sustainable practices.
     */
    ISSUED,

    /**
     * A transfer transaction involves moving assets or credits from one account to another within the same pool.
     * This transaction updates the credit balances of both the sender and the recipient,
     * decreasing the sender's balance while increasing the recipient's balance.
     * Transfer transactions can occur for various reasons, such as selling credits or reallocating them within an organization.
     */
    TRANSFERRED,

    /**
     * A retire transaction is the process of permanently removing assets or credits from circulation within a pool.
     * This transaction decreases the credit balance of the owner and prevents the retired credits from being traded or used in the future.
     * Credits are often retired to meet compliance requirements, offset emissions, or demonstrate a commitment to environmental goals.
     */
    RETIRED,

    /**
     * An offset transaction is the process of using assets or credits within a pool to create a certificate
     * that demonstrates the reduction or removal of greenhouse gas emissions.
     * This transaction may involve retiring the credits and generating a certificate to provide evidence of the environmental impact.
     * Organizations can use offset transactions to showcase their sustainability efforts or meet regulatory requirements.
     */
    OFFSET
}

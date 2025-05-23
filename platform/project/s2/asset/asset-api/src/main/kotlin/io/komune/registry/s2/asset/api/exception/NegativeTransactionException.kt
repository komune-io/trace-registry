package io.komune.registry.s2.asset.api.exception

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import f2.spring.exception.F2HttpException
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class NegativeTransactionException(
    quantity: BigDecimal
): F2HttpException(
    status = HttpStatus.BAD_REQUEST,
    code = ExceptionCodes.Asset.NEGATIVE_TRANSACTION,
    message = "Cannot emit a transaction with a negative quantity ($quantity)",
    cause = null
)

package io.komune.registry.s2.asset.api.exception

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import f2.spring.exception.F2HttpException
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class NotEnoughAssetsException(
    transaction: BigDecimal,
    wallet: BigDecimal
): F2HttpException(
    status = HttpStatus.BAD_REQUEST,
    code = ExceptionCodes.notEnoughAssets(),
    message = "Not enough assets in the wallet ($wallet) to execute the transaction ($transaction).",
    cause = null
)

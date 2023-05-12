package city.smartb.registry.program.s2.asset.api.exception

import city.smartb.registry.program.api.commons.exception.ExceptionCodes
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import f2.spring.exception.F2HttpException
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

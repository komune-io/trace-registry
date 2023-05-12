package city.smartb.registry.program.s2.asset.api.exception

import city.smartb.registry.program.api.commons.exception.ExceptionCodes
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import f2.spring.exception.F2HttpException
import org.springframework.http.HttpStatus

class NegativeTransactionException(
    quantity: BigDecimal
): F2HttpException(
    status = HttpStatus.BAD_REQUEST,
    code = ExceptionCodes.negativeTransaction(),
    message = "Cannot emit a transaction with a negative quantity ($quantity)",
    cause = null
)

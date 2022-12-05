package city.smartb.registry.program.api.commons.exception

import org.springframework.boot.web.error.ErrorAttributeOptions
import org.springframework.boot.web.reactive.error.DefaultErrorAttributes
import org.springframework.web.reactive.function.server.ServerRequest

class F2ErrorAttributes: DefaultErrorAttributes() {
    override fun getErrorAttributes(request: ServerRequest, options: ErrorAttributeOptions): MutableMap<String, Any> {
        val attributes = super.getErrorAttributes(request, options.including(ErrorAttributeOptions.Include.MESSAGE))

        val error = getError(request)
        if (error is F2Exception) {
            attributes[F2Exception::code.name] = error.code
        }

        return attributes
    }
}

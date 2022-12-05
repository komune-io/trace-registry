package city.smartb.registry.program.f2.project.domain

import city.smartb.registry.program.f2.project.domain.query.ProjectGetFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectPageFunction

interface ProjectQueryApi {
    fun projectGet(): ProjectGetFunction
    fun projectPage(): ProjectPageFunction
}

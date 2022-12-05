package city.smartb.registry.program.api.commons.utils

import f2.dsl.cqrs.page.Page
import f2.dsl.cqrs.page.PageDTO

inline fun <T, reified R: Any> PageDTO<T>.mapNotNull(transform: (T) -> R?): PageDTO<R> = Page(
    items = items.mapNotNull(transform),
    total = total
)

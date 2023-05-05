package city.smartb.registry.program.infra.redis

import com.redis.om.spring.repository.RedisDocumentRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.NoRepositoryBean
import org.springframework.data.repository.PagingAndSortingRepository

@NoRepositoryBean
interface RedisRepository<ENTITY, ID>:
    CrudRepository<ENTITY, ID>,
    PagingAndSortingRepository<ENTITY, ID>,
    RedisDocumentRepository<ENTITY, ID>

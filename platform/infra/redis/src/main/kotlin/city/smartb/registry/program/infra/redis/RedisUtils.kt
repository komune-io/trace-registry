package city.smartb.registry.program.infra.redis

import org.springframework.data.redis.domain.geo.GeoLocation as RedisGeoLocation
import city.smartb.registry.program.api.commons.model.GeoLocation
import org.springframework.data.geo.Point

fun RedisGeoLocation<*>.toGeoLocation() = GeoLocation(
    lon = point.x,
    lat = point.y
)

fun GeoLocation.toRedisGeoLocation(name: String) = RedisGeoLocation(name, Point(lon, lat))

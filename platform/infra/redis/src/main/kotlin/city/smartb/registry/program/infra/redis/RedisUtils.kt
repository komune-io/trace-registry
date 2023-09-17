package city.smartb.registry.program.infra.redis

import city.smartb.registry.program.s2.commons.model.GeoLocation
import org.springframework.data.geo.Point
import org.springframework.data.redis.domain.geo.GeoLocation as RedisGeoLocation

fun RedisGeoLocation<*>.toGeoLocation() = GeoLocation(
    lon = point.x,
    lat = point.y
)

fun GeoLocation.toRedisGeoLocation(name: String) = RedisGeoLocation(name, Point(lon, lat))

package io.komune.registry.infra.redis

import io.komune.registry.s2.commons.model.GeoLocation
import org.springframework.data.geo.Point
import org.springframework.data.redis.domain.geo.GeoLocation as RedisGeoLocation

fun RedisGeoLocation<*>.toGeoLocation() = GeoLocation(
    lon = point.x,
    lat = point.y
)

fun GeoLocation.toRedisGeoLocation(name: String) = RedisGeoLocation(name, Point(lon, lat))

package io.komune.registry.test.control.core.cccev.unit.data

import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.control.core.cccev.unit.entity.DataUnitRepository
import io.komune.registry.control.core.cccev.unit.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitId
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionApiEntity

fun AssertionBdd.dataUnit(unitRepository: DataUnitRepository) = AssertionDataUnit(unitRepository)

class AssertionDataUnit(
    private val repository: DataUnitRepository
): AssertionApiEntity<DataUnit, DataUnitId, AssertionDataUnit.DataUnitAssert>() {

    override suspend fun findById(id: DataUnitId) = repository.findById(id)
    override suspend fun assertThat(entity: DataUnit) = DataUnitAssert(entity)

    inner class DataUnitAssert(
        private val unit: DataUnit
    ) {
        fun hasFields(
            id: DataUnitId = unit.id,
            name: String = unit.name,
            description: String = unit.description,
            notation: String? = unit.notation,
            type: DataUnitType = unit.type
        ) = also {
            Assertions.assertThat(unit.id).isEqualTo(id)
            Assertions.assertThat(unit.name).isEqualTo(name)
            Assertions.assertThat(unit.description).isEqualTo(description)
            Assertions.assertThat(unit.notation).isEqualTo(notation)
            Assertions.assertThat(unit.type).isEqualTo(type)
        }
    }
}

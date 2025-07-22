(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './cccev-requirement-domain.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./cccev-requirement-domain.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-f2-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-requirement-f2-domain'.");
    }
    if (typeof this['cccev-requirement-domain'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-f2-domain'. Its dependency 'cccev-requirement-domain' was not found. Please, check whether 'cccev-requirement-domain' is loaded prior to 'cccev-requirement-f2-domain'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-f2-domain'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'cccev-requirement-f2-domain'.");
    }
    root['cccev-requirement-f2-domain'] = factory(typeof this['cccev-requirement-f2-domain'] === 'undefined' ? {} : this['cccev-requirement-f2-domain'], this['kotlin-kotlin-stdlib-js-ir'], this['cccev-requirement-domain'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_city_smartb_cccev_requirement_domain, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var RequirementCreatedEventDTO = kotlin_city_smartb_cccev_requirement_domain.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.la;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var hashCode = kotlin_kotlin.$_$.r9;
  var equals = kotlin_kotlin.$_$.m9;
  var classMeta = kotlin_kotlin.$_$.k9;
  var emptyList = kotlin_kotlin.$_$.r6;
  var RequirementUpdateCommandDTO = kotlin_city_smartb_cccev_requirement_domain.$_$.c;
  var RequirementUpdatedEventDTO = kotlin_city_smartb_cccev_requirement_domain.$_$.e;
  var getKClass = kotlin_kotlin.$_$.f;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConstraintCreateCommandDTO, 'ConstraintCreateCommandDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ConstraintCreatedEventDTO, 'ConstraintCreatedEventDTO', interfaceMeta, undefined, [RequirementCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(ConstraintCreateCommandDTOBase, 'ConstraintCreateCommandDTOBase', classMeta, undefined, [ConstraintCreateCommandDTO], undefined, {0: $serializer_getInstance}, []);
  setMetadataFor(CriterionCreateCommandDTO, 'CriterionCreateCommandDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CriterionCreatedEventDTO, 'CriterionCreatedEventDTO', interfaceMeta, undefined, [RequirementCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_0, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(CriterionCreateCommandDTOBase, 'CriterionCreateCommandDTOBase', classMeta, undefined, [CriterionCreateCommandDTO], undefined, {0: $serializer_getInstance_0}, []);
  setMetadataFor(InformationRequirementCreateCommandDTO, 'InformationRequirementCreateCommandDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InformationRequirementCreatedEventDTO, 'InformationRequirementCreatedEventDTO', interfaceMeta, undefined, [RequirementCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_1, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(InformationRequirementCreateCommandDTOBase, 'InformationRequirementCreateCommandDTOBase', classMeta, undefined, [InformationRequirementCreateCommandDTO], undefined, {0: $serializer_getInstance_1}, []);
  setMetadataFor(RequirementCreateCommandDTO, 'RequirementCreateCommandDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RequirementCreatedEventDTO_0, 'RequirementCreatedEventDTO', interfaceMeta, undefined, [RequirementCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_2, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(RequirementCreateCommandDTOBase, 'RequirementCreateCommandDTOBase', classMeta, undefined, [RequirementCreateCommandDTO], undefined, {0: $serializer_getInstance_2}, []);
  setMetadataFor(RequirementUpdateCommandDTO_0, 'RequirementUpdateCommandDTO', interfaceMeta, undefined, [RequirementUpdateCommandDTO], undefined, undefined, []);
  setMetadataFor(RequirementUpdatedEventDTO_0, 'RequirementUpdatedEventDTO', interfaceMeta, undefined, [RequirementUpdatedEventDTO], undefined, undefined, []);
  setMetadataFor(RequirementDTO, 'RequirementDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GetRequirementListQueryDTO, 'GetRequirementListQueryDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GetRequirementListQueryResultDTO, 'GetRequirementListQueryResultDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GetRequirementListQuery, 'GetRequirementListQuery', classMeta, undefined, [GetRequirementListQueryDTO], undefined, undefined, []);
  setMetadataFor(GetRequirementListQueryResult, 'GetRequirementListQueryResult', classMeta, undefined, [GetRequirementListQueryResultDTO], undefined, undefined, []);
  setMetadataFor(GetRequirementQueryDTO, 'GetRequirementQueryDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GetRequirementQueryResultDTO, 'GetRequirementQueryResultDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GetRequirementQuery, 'GetRequirementQuery', classMeta, undefined, [GetRequirementQueryDTO], undefined, undefined, []);
  setMetadataFor(GetRequirementQueryResult, 'GetRequirementQueryResult', classMeta, undefined, [GetRequirementQueryResultDTO], undefined, undefined, []);
  setMetadataFor(RequirementGetQueryDTO, 'RequirementGetQueryDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RequirementGetResultDTO, 'RequirementGetResultDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_3, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(RequirementGetQueryDTOBase, 'RequirementGetQueryDTOBase', classMeta, undefined, [RequirementGetQueryDTO], undefined, {0: $serializer_getInstance_3}, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_4, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(RequirementGetResultDTOBase, 'RequirementGetResultDTOBase', classMeta, undefined, [RequirementGetResultDTO], undefined, {0: $serializer_getInstance_4}, []);
  //endregion
  function ConstraintCreateCommandDTO() {
  }
  function ConstraintCreatedEventDTO() {
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.f2.requirement.domain.command.ConstraintCreateCommandDTOBase', this, 7);
    tmp0_serialDesc.pr('name', false);
    tmp0_serialDesc.pr('description', false);
    tmp0_serialDesc.pr('hasRequirement', false);
    tmp0_serialDesc.pr('hasConcept', false);
    tmp0_serialDesc.pr('hasEvidenceTypeList', false);
    tmp0_serialDesc.pr('isRequirementOf', false);
    tmp0_serialDesc.pr('hasQualifiedRelation', false);
    this.w2t_1 = tmp0_serialDesc;
  }
  $serializer.prototype.lh = function () {
    return this.w2t_1;
  };
  $serializer.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), get_nullable(new ArrayListSerializer(StringSerializer_getInstance())), get_nullable(new ArrayListSerializer(StringSerializer_getInstance()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.nh = function (decoder) {
    var tmp0_desc = this.w2t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.tk(tmp0_desc);
    if (tmp11_input.il()) {
      tmp4_local0 = tmp11_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.fl(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.hl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.fl(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.hl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.uk(tmp0_desc);
    return ConstraintCreateCommandDTOBase_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  $serializer.prototype.x2t = function (encoder, value) {
    var tmp0_desc = this.w2t_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.km(tmp0_desc, 0, StringSerializer_getInstance(), value.y2t_1);
    tmp1_output.km(tmp0_desc, 1, StringSerializer_getInstance(), value.z2t_1);
    tmp1_output.im(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), value.a2u_1);
    tmp1_output.im(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), value.b2u_1);
    tmp1_output.im(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), value.c2u_1);
    tmp1_output.km(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), value.d2u_1);
    tmp1_output.km(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), value.e2u_1);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer.prototype.mh = function (encoder, value) {
    return this.x2t(encoder, value instanceof ConstraintCreateCommandDTOBase ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ConstraintCreateCommandDTOBase_init_$Init$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen1))) {
      throwMissingFieldException(seen1, 127, $serializer_getInstance().w2t_1);
    }
    $this.y2t_1 = name;
    $this.z2t_1 = description;
    $this.a2u_1 = hasRequirement;
    $this.b2u_1 = hasConcept;
    $this.c2u_1 = hasEvidenceTypeList;
    $this.d2u_1 = isRequirementOf;
    $this.e2u_1 = hasQualifiedRelation;
    return $this;
  }
  function ConstraintCreateCommandDTOBase_init_$Create$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker) {
    return ConstraintCreateCommandDTOBase_init_$Init$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, Object.create(ConstraintCreateCommandDTOBase.prototype));
  }
  function ConstraintCreateCommandDTOBase(name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation) {
    Companion_getInstance();
    this.y2t_1 = name;
    this.z2t_1 = description;
    this.a2u_1 = hasRequirement;
    this.b2u_1 = hasConcept;
    this.c2u_1 = hasEvidenceTypeList;
    this.d2u_1 = isRequirementOf;
    this.e2u_1 = hasQualifiedRelation;
  }
  ConstraintCreateCommandDTOBase.prototype.gf = function () {
    return this.y2t_1;
  };
  ConstraintCreateCommandDTOBase.prototype.s2i = function () {
    return this.z2t_1;
  };
  ConstraintCreateCommandDTOBase.prototype.e2t = function () {
    return this.a2u_1;
  };
  ConstraintCreateCommandDTOBase.prototype.f2t = function () {
    return this.b2u_1;
  };
  ConstraintCreateCommandDTOBase.prototype.g2t = function () {
    return this.c2u_1;
  };
  ConstraintCreateCommandDTOBase.prototype.s2t = function (_set____db54di) {
    this.d2u_1 = _set____db54di;
  };
  ConstraintCreateCommandDTOBase.prototype.t2t = function () {
    return this.d2u_1;
  };
  ConstraintCreateCommandDTOBase.prototype.u2t = function (_set____db54di) {
    this.e2u_1 = _set____db54di;
  };
  ConstraintCreateCommandDTOBase.prototype.v2t = function () {
    return this.e2u_1;
  };
  ConstraintCreateCommandDTOBase.prototype.toString = function () {
    return 'ConstraintCreateCommandDTOBase(name=' + this.y2t_1 + ', description=' + this.z2t_1 + ', hasRequirement=' + this.a2u_1 + ', hasConcept=' + this.b2u_1 + ', hasEvidenceTypeList=' + this.c2u_1 + ', isRequirementOf=' + this.d2u_1 + ', hasQualifiedRelation=' + this.e2u_1 + ')';
  };
  ConstraintCreateCommandDTOBase.prototype.hashCode = function () {
    var result = this.y2t_1 == null ? 0 : getStringHashCode(this.y2t_1);
    result = imul(result, 31) + (this.z2t_1 == null ? 0 : getStringHashCode(this.z2t_1)) | 0;
    result = imul(result, 31) + hashCode(this.a2u_1) | 0;
    result = imul(result, 31) + hashCode(this.b2u_1) | 0;
    result = imul(result, 31) + hashCode(this.c2u_1) | 0;
    result = imul(result, 31) + (this.d2u_1 == null ? 0 : hashCode(this.d2u_1)) | 0;
    result = imul(result, 31) + (this.e2u_1 == null ? 0 : hashCode(this.e2u_1)) | 0;
    return result;
  };
  ConstraintCreateCommandDTOBase.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ConstraintCreateCommandDTOBase))
      return false;
    var tmp0_other_with_cast = other instanceof ConstraintCreateCommandDTOBase ? other : THROW_CCE();
    if (!(this.y2t_1 == tmp0_other_with_cast.y2t_1))
      return false;
    if (!(this.z2t_1 == tmp0_other_with_cast.z2t_1))
      return false;
    if (!equals(this.a2u_1, tmp0_other_with_cast.a2u_1))
      return false;
    if (!equals(this.b2u_1, tmp0_other_with_cast.b2u_1))
      return false;
    if (!equals(this.c2u_1, tmp0_other_with_cast.c2u_1))
      return false;
    if (!equals(this.d2u_1, tmp0_other_with_cast.d2u_1))
      return false;
    if (!equals(this.e2u_1, tmp0_other_with_cast.e2u_1))
      return false;
    return true;
  };
  Object.defineProperty(ConstraintCreateCommandDTOBase.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.gf();
    }
  });
  Object.defineProperty(ConstraintCreateCommandDTOBase.prototype, 'description', {
    configurable: true,
    get: function () {
      return this.s2i();
    }
  });
  Object.defineProperty(ConstraintCreateCommandDTOBase.prototype, 'hasRequirement', {
    configurable: true,
    get: function () {
      return this.e2t();
    }
  });
  Object.defineProperty(ConstraintCreateCommandDTOBase.prototype, 'hasConcept', {
    configurable: true,
    get: function () {
      return this.f2t();
    }
  });
  Object.defineProperty(ConstraintCreateCommandDTOBase.prototype, 'hasEvidenceTypeList', {
    configurable: true,
    get: function () {
      return this.g2t();
    }
  });
  Object.defineProperty(ConstraintCreateCommandDTOBase.prototype, 'isRequirementOf', {
    configurable: true,
    get: function () {
      return this.t2t();
    },
    set: function (value) {
      this.s2t(value);
    }
  });
  Object.defineProperty(ConstraintCreateCommandDTOBase.prototype, 'hasQualifiedRelation', {
    configurable: true,
    get: function () {
      return this.v2t();
    },
    set: function (value) {
      this.u2t(value);
    }
  });
  function CriterionCreateCommandDTO() {
  }
  function CriterionCreatedEventDTO() {
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.f2.requirement.domain.command.CriterionCreateCommandDTOBase', this, 7);
    tmp0_serialDesc.pr('name', false);
    tmp0_serialDesc.pr('description', false);
    tmp0_serialDesc.pr('hasRequirement', false);
    tmp0_serialDesc.pr('hasConcept', false);
    tmp0_serialDesc.pr('hasEvidenceTypeList', false);
    tmp0_serialDesc.pr('isRequirementOf', true);
    tmp0_serialDesc.pr('hasQualifiedRelation', true);
    this.f2u_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.lh = function () {
    return this.f2u_1;
  };
  $serializer_0.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), get_nullable(new ArrayListSerializer(StringSerializer_getInstance())), get_nullable(new ArrayListSerializer(StringSerializer_getInstance()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_0.prototype.nh = function (decoder) {
    var tmp0_desc = this.f2u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.tk(tmp0_desc);
    if (tmp11_input.il()) {
      tmp4_local0 = tmp11_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.fl(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.hl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.fl(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.hl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.uk(tmp0_desc);
    return CriterionCreateCommandDTOBase_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  $serializer_0.prototype.g2u = function (encoder, value) {
    var tmp0_desc = this.f2u_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.km(tmp0_desc, 0, StringSerializer_getInstance(), value.h2u_1);
    tmp1_output.km(tmp0_desc, 1, StringSerializer_getInstance(), value.i2u_1);
    tmp1_output.im(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), value.j2u_1);
    tmp1_output.im(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), value.k2u_1);
    tmp1_output.im(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), value.l2u_1);
    if (tmp1_output.om(tmp0_desc, 5) ? true : !equals(value.m2u_1, emptyList())) {
      tmp1_output.km(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), value.m2u_1);
    }
    if (tmp1_output.om(tmp0_desc, 6) ? true : !equals(value.n2u_1, emptyList())) {
      tmp1_output.km(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), value.n2u_1);
    }
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_0.prototype.mh = function (encoder, value) {
    return this.g2u(encoder, value instanceof CriterionCreateCommandDTOBase ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function CriterionCreateCommandDTOBase_init_$Init$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_0().f2u_1);
    }
    $this.h2u_1 = name;
    $this.i2u_1 = description;
    $this.j2u_1 = hasRequirement;
    $this.k2u_1 = hasConcept;
    $this.l2u_1 = hasEvidenceTypeList;
    if (0 === (seen1 & 32))
      $this.m2u_1 = emptyList();
    else
      $this.m2u_1 = isRequirementOf;
    if (0 === (seen1 & 64))
      $this.n2u_1 = emptyList();
    else
      $this.n2u_1 = hasQualifiedRelation;
    return $this;
  }
  function CriterionCreateCommandDTOBase_init_$Create$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker) {
    return CriterionCreateCommandDTOBase_init_$Init$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, Object.create(CriterionCreateCommandDTOBase.prototype));
  }
  function CriterionCreateCommandDTOBase(name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation) {
    Companion_getInstance_0();
    this.h2u_1 = name;
    this.i2u_1 = description;
    this.j2u_1 = hasRequirement;
    this.k2u_1 = hasConcept;
    this.l2u_1 = hasEvidenceTypeList;
    this.m2u_1 = isRequirementOf;
    this.n2u_1 = hasQualifiedRelation;
  }
  CriterionCreateCommandDTOBase.prototype.gf = function () {
    return this.h2u_1;
  };
  CriterionCreateCommandDTOBase.prototype.s2i = function () {
    return this.i2u_1;
  };
  CriterionCreateCommandDTOBase.prototype.e2t = function () {
    return this.j2u_1;
  };
  CriterionCreateCommandDTOBase.prototype.f2t = function () {
    return this.k2u_1;
  };
  CriterionCreateCommandDTOBase.prototype.g2t = function () {
    return this.l2u_1;
  };
  CriterionCreateCommandDTOBase.prototype.s2t = function (_set____db54di) {
    this.m2u_1 = _set____db54di;
  };
  CriterionCreateCommandDTOBase.prototype.t2t = function () {
    return this.m2u_1;
  };
  CriterionCreateCommandDTOBase.prototype.u2t = function (_set____db54di) {
    this.n2u_1 = _set____db54di;
  };
  CriterionCreateCommandDTOBase.prototype.v2t = function () {
    return this.n2u_1;
  };
  CriterionCreateCommandDTOBase.prototype.toString = function () {
    return 'CriterionCreateCommandDTOBase(name=' + this.h2u_1 + ', description=' + this.i2u_1 + ', hasRequirement=' + this.j2u_1 + ', hasConcept=' + this.k2u_1 + ', hasEvidenceTypeList=' + this.l2u_1 + ', isRequirementOf=' + this.m2u_1 + ', hasQualifiedRelation=' + this.n2u_1 + ')';
  };
  CriterionCreateCommandDTOBase.prototype.hashCode = function () {
    var result = this.h2u_1 == null ? 0 : getStringHashCode(this.h2u_1);
    result = imul(result, 31) + (this.i2u_1 == null ? 0 : getStringHashCode(this.i2u_1)) | 0;
    result = imul(result, 31) + hashCode(this.j2u_1) | 0;
    result = imul(result, 31) + hashCode(this.k2u_1) | 0;
    result = imul(result, 31) + hashCode(this.l2u_1) | 0;
    result = imul(result, 31) + (this.m2u_1 == null ? 0 : hashCode(this.m2u_1)) | 0;
    result = imul(result, 31) + (this.n2u_1 == null ? 0 : hashCode(this.n2u_1)) | 0;
    return result;
  };
  CriterionCreateCommandDTOBase.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CriterionCreateCommandDTOBase))
      return false;
    var tmp0_other_with_cast = other instanceof CriterionCreateCommandDTOBase ? other : THROW_CCE();
    if (!(this.h2u_1 == tmp0_other_with_cast.h2u_1))
      return false;
    if (!(this.i2u_1 == tmp0_other_with_cast.i2u_1))
      return false;
    if (!equals(this.j2u_1, tmp0_other_with_cast.j2u_1))
      return false;
    if (!equals(this.k2u_1, tmp0_other_with_cast.k2u_1))
      return false;
    if (!equals(this.l2u_1, tmp0_other_with_cast.l2u_1))
      return false;
    if (!equals(this.m2u_1, tmp0_other_with_cast.m2u_1))
      return false;
    if (!equals(this.n2u_1, tmp0_other_with_cast.n2u_1))
      return false;
    return true;
  };
  Object.defineProperty(CriterionCreateCommandDTOBase.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.gf();
    }
  });
  Object.defineProperty(CriterionCreateCommandDTOBase.prototype, 'description', {
    configurable: true,
    get: function () {
      return this.s2i();
    }
  });
  Object.defineProperty(CriterionCreateCommandDTOBase.prototype, 'hasRequirement', {
    configurable: true,
    get: function () {
      return this.e2t();
    }
  });
  Object.defineProperty(CriterionCreateCommandDTOBase.prototype, 'hasConcept', {
    configurable: true,
    get: function () {
      return this.f2t();
    }
  });
  Object.defineProperty(CriterionCreateCommandDTOBase.prototype, 'hasEvidenceTypeList', {
    configurable: true,
    get: function () {
      return this.g2t();
    }
  });
  Object.defineProperty(CriterionCreateCommandDTOBase.prototype, 'isRequirementOf', {
    configurable: true,
    get: function () {
      return this.t2t();
    },
    set: function (value) {
      this.s2t(value);
    }
  });
  Object.defineProperty(CriterionCreateCommandDTOBase.prototype, 'hasQualifiedRelation', {
    configurable: true,
    get: function () {
      return this.v2t();
    },
    set: function (value) {
      this.u2t(value);
    }
  });
  function InformationRequirementCreateCommandDTO() {
  }
  function InformationRequirementCreatedEventDTO() {
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.f2.requirement.domain.command.InformationRequirementCreateCommandDTOBase', this, 7);
    tmp0_serialDesc.pr('name', false);
    tmp0_serialDesc.pr('description', false);
    tmp0_serialDesc.pr('hasRequirement', false);
    tmp0_serialDesc.pr('hasConcept', false);
    tmp0_serialDesc.pr('hasEvidenceTypeList', false);
    tmp0_serialDesc.pr('isRequirementOf', true);
    tmp0_serialDesc.pr('hasQualifiedRelation', true);
    this.o2u_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.lh = function () {
    return this.o2u_1;
  };
  $serializer_1.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), get_nullable(new ArrayListSerializer(StringSerializer_getInstance())), get_nullable(new ArrayListSerializer(StringSerializer_getInstance()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_1.prototype.nh = function (decoder) {
    var tmp0_desc = this.o2u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.tk(tmp0_desc);
    if (tmp11_input.il()) {
      tmp4_local0 = tmp11_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.fl(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.hl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.fl(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.hl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.uk(tmp0_desc);
    return InformationRequirementCreateCommandDTOBase_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  $serializer_1.prototype.p2u = function (encoder, value) {
    var tmp0_desc = this.o2u_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.km(tmp0_desc, 0, StringSerializer_getInstance(), value.q2u_1);
    tmp1_output.km(tmp0_desc, 1, StringSerializer_getInstance(), value.r2u_1);
    tmp1_output.im(tmp0_desc, 2, new ArrayListSerializer(StringSerializer_getInstance()), value.s2u_1);
    tmp1_output.im(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), value.t2u_1);
    tmp1_output.im(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), value.u2u_1);
    if (tmp1_output.om(tmp0_desc, 5) ? true : !equals(value.v2u_1, emptyList())) {
      tmp1_output.km(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), value.v2u_1);
    }
    if (tmp1_output.om(tmp0_desc, 6) ? true : !equals(value.w2u_1, emptyList())) {
      tmp1_output.km(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), value.w2u_1);
    }
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_1.prototype.mh = function (encoder, value) {
    return this.p2u(encoder, value instanceof InformationRequirementCreateCommandDTOBase ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function InformationRequirementCreateCommandDTOBase_init_$Init$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_1().o2u_1);
    }
    $this.q2u_1 = name;
    $this.r2u_1 = description;
    $this.s2u_1 = hasRequirement;
    $this.t2u_1 = hasConcept;
    $this.u2u_1 = hasEvidenceTypeList;
    if (0 === (seen1 & 32))
      $this.v2u_1 = emptyList();
    else
      $this.v2u_1 = isRequirementOf;
    if (0 === (seen1 & 64))
      $this.w2u_1 = emptyList();
    else
      $this.w2u_1 = hasQualifiedRelation;
    return $this;
  }
  function InformationRequirementCreateCommandDTOBase_init_$Create$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker) {
    return InformationRequirementCreateCommandDTOBase_init_$Init$(seen1, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, Object.create(InformationRequirementCreateCommandDTOBase.prototype));
  }
  function InformationRequirementCreateCommandDTOBase(name, description, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation) {
    Companion_getInstance_1();
    this.q2u_1 = name;
    this.r2u_1 = description;
    this.s2u_1 = hasRequirement;
    this.t2u_1 = hasConcept;
    this.u2u_1 = hasEvidenceTypeList;
    this.v2u_1 = isRequirementOf;
    this.w2u_1 = hasQualifiedRelation;
  }
  InformationRequirementCreateCommandDTOBase.prototype.gf = function () {
    return this.q2u_1;
  };
  InformationRequirementCreateCommandDTOBase.prototype.s2i = function () {
    return this.r2u_1;
  };
  InformationRequirementCreateCommandDTOBase.prototype.e2t = function () {
    return this.s2u_1;
  };
  InformationRequirementCreateCommandDTOBase.prototype.f2t = function () {
    return this.t2u_1;
  };
  InformationRequirementCreateCommandDTOBase.prototype.g2t = function () {
    return this.u2u_1;
  };
  InformationRequirementCreateCommandDTOBase.prototype.s2t = function (_set____db54di) {
    this.v2u_1 = _set____db54di;
  };
  InformationRequirementCreateCommandDTOBase.prototype.t2t = function () {
    return this.v2u_1;
  };
  InformationRequirementCreateCommandDTOBase.prototype.u2t = function (_set____db54di) {
    this.w2u_1 = _set____db54di;
  };
  InformationRequirementCreateCommandDTOBase.prototype.v2t = function () {
    return this.w2u_1;
  };
  InformationRequirementCreateCommandDTOBase.prototype.toString = function () {
    return 'InformationRequirementCreateCommandDTOBase(name=' + this.q2u_1 + ', description=' + this.r2u_1 + ', hasRequirement=' + this.s2u_1 + ', hasConcept=' + this.t2u_1 + ', hasEvidenceTypeList=' + this.u2u_1 + ', isRequirementOf=' + this.v2u_1 + ', hasQualifiedRelation=' + this.w2u_1 + ')';
  };
  InformationRequirementCreateCommandDTOBase.prototype.hashCode = function () {
    var result = this.q2u_1 == null ? 0 : getStringHashCode(this.q2u_1);
    result = imul(result, 31) + (this.r2u_1 == null ? 0 : getStringHashCode(this.r2u_1)) | 0;
    result = imul(result, 31) + hashCode(this.s2u_1) | 0;
    result = imul(result, 31) + hashCode(this.t2u_1) | 0;
    result = imul(result, 31) + hashCode(this.u2u_1) | 0;
    result = imul(result, 31) + (this.v2u_1 == null ? 0 : hashCode(this.v2u_1)) | 0;
    result = imul(result, 31) + (this.w2u_1 == null ? 0 : hashCode(this.w2u_1)) | 0;
    return result;
  };
  InformationRequirementCreateCommandDTOBase.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InformationRequirementCreateCommandDTOBase))
      return false;
    var tmp0_other_with_cast = other instanceof InformationRequirementCreateCommandDTOBase ? other : THROW_CCE();
    if (!(this.q2u_1 == tmp0_other_with_cast.q2u_1))
      return false;
    if (!(this.r2u_1 == tmp0_other_with_cast.r2u_1))
      return false;
    if (!equals(this.s2u_1, tmp0_other_with_cast.s2u_1))
      return false;
    if (!equals(this.t2u_1, tmp0_other_with_cast.t2u_1))
      return false;
    if (!equals(this.u2u_1, tmp0_other_with_cast.u2u_1))
      return false;
    if (!equals(this.v2u_1, tmp0_other_with_cast.v2u_1))
      return false;
    if (!equals(this.w2u_1, tmp0_other_with_cast.w2u_1))
      return false;
    return true;
  };
  Object.defineProperty(InformationRequirementCreateCommandDTOBase.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.gf();
    }
  });
  Object.defineProperty(InformationRequirementCreateCommandDTOBase.prototype, 'description', {
    configurable: true,
    get: function () {
      return this.s2i();
    }
  });
  Object.defineProperty(InformationRequirementCreateCommandDTOBase.prototype, 'hasRequirement', {
    configurable: true,
    get: function () {
      return this.e2t();
    }
  });
  Object.defineProperty(InformationRequirementCreateCommandDTOBase.prototype, 'hasConcept', {
    configurable: true,
    get: function () {
      return this.f2t();
    }
  });
  Object.defineProperty(InformationRequirementCreateCommandDTOBase.prototype, 'hasEvidenceTypeList', {
    configurable: true,
    get: function () {
      return this.g2t();
    }
  });
  Object.defineProperty(InformationRequirementCreateCommandDTOBase.prototype, 'isRequirementOf', {
    configurable: true,
    get: function () {
      return this.t2t();
    },
    set: function (value) {
      this.s2t(value);
    }
  });
  Object.defineProperty(InformationRequirementCreateCommandDTOBase.prototype, 'hasQualifiedRelation', {
    configurable: true,
    get: function () {
      return this.v2t();
    },
    set: function (value) {
      this.u2t(value);
    }
  });
  function RequirementCreateCommandDTO() {
  }
  function RequirementCreatedEventDTO_0() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.f2.requirement.domain.command.RequirementCreateCommandDTOBase', this, 8);
    tmp0_serialDesc.pr('name', false);
    tmp0_serialDesc.pr('description', false);
    tmp0_serialDesc.pr('kind', false);
    tmp0_serialDesc.pr('hasRequirement', false);
    tmp0_serialDesc.pr('hasConcept', false);
    tmp0_serialDesc.pr('hasEvidenceTypeList', false);
    tmp0_serialDesc.pr('isRequirementOf', false);
    tmp0_serialDesc.pr('hasQualifiedRelation', false);
    this.x2u_1 = tmp0_serialDesc;
  }
  $serializer_2.prototype.lh = function () {
    return this.x2u_1;
  };
  $serializer_2.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), get_nullable(new ArrayListSerializer(StringSerializer_getInstance())), get_nullable(new ArrayListSerializer(StringSerializer_getInstance()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_2.prototype.nh = function (decoder) {
    var tmp0_desc = this.x2u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.tk(tmp0_desc);
    if (tmp12_input.il()) {
      tmp4_local0 = tmp12_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.dl(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.fl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.hl(tmp0_desc, 7, new ArrayListSerializer(StringSerializer_getInstance()), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.hl(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.dl(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.fl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.hl(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.hl(tmp0_desc, 7, new ArrayListSerializer(StringSerializer_getInstance()), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.uk(tmp0_desc);
    return RequirementCreateCommandDTOBase_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  $serializer_2.prototype.y2u = function (encoder, value) {
    var tmp0_desc = this.x2u_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.km(tmp0_desc, 0, StringSerializer_getInstance(), value.z2u_1);
    tmp1_output.km(tmp0_desc, 1, StringSerializer_getInstance(), value.a2v_1);
    tmp1_output.gm(tmp0_desc, 2, value.b2v_1);
    tmp1_output.im(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), value.c2v_1);
    tmp1_output.im(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), value.d2v_1);
    tmp1_output.im(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), value.e2v_1);
    tmp1_output.km(tmp0_desc, 6, new ArrayListSerializer(StringSerializer_getInstance()), value.f2v_1);
    tmp1_output.km(tmp0_desc, 7, new ArrayListSerializer(StringSerializer_getInstance()), value.g2v_1);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_2.prototype.mh = function (encoder, value) {
    return this.y2u(encoder, value instanceof RequirementCreateCommandDTOBase ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function RequirementCreateCommandDTOBase_init_$Init$(seen1, name, description, kind, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_2().x2u_1);
    }
    $this.z2u_1 = name;
    $this.a2v_1 = description;
    $this.b2v_1 = kind;
    $this.c2v_1 = hasRequirement;
    $this.d2v_1 = hasConcept;
    $this.e2v_1 = hasEvidenceTypeList;
    $this.f2v_1 = isRequirementOf;
    $this.g2v_1 = hasQualifiedRelation;
    return $this;
  }
  function RequirementCreateCommandDTOBase_init_$Create$(seen1, name, description, kind, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker) {
    return RequirementCreateCommandDTOBase_init_$Init$(seen1, name, description, kind, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation, serializationConstructorMarker, Object.create(RequirementCreateCommandDTOBase.prototype));
  }
  function RequirementCreateCommandDTOBase(name, description, kind, hasRequirement, hasConcept, hasEvidenceTypeList, isRequirementOf, hasQualifiedRelation) {
    Companion_getInstance_2();
    this.z2u_1 = name;
    this.a2v_1 = description;
    this.b2v_1 = kind;
    this.c2v_1 = hasRequirement;
    this.d2v_1 = hasConcept;
    this.e2v_1 = hasEvidenceTypeList;
    this.f2v_1 = isRequirementOf;
    this.g2v_1 = hasQualifiedRelation;
  }
  RequirementCreateCommandDTOBase.prototype.gf = function () {
    return this.z2u_1;
  };
  RequirementCreateCommandDTOBase.prototype.s2i = function () {
    return this.a2v_1;
  };
  RequirementCreateCommandDTOBase.prototype.ej = function () {
    return this.b2v_1;
  };
  RequirementCreateCommandDTOBase.prototype.e2t = function () {
    return this.c2v_1;
  };
  RequirementCreateCommandDTOBase.prototype.f2t = function () {
    return this.d2v_1;
  };
  RequirementCreateCommandDTOBase.prototype.g2t = function () {
    return this.e2v_1;
  };
  RequirementCreateCommandDTOBase.prototype.s2t = function (_set____db54di) {
    this.f2v_1 = _set____db54di;
  };
  RequirementCreateCommandDTOBase.prototype.t2t = function () {
    return this.f2v_1;
  };
  RequirementCreateCommandDTOBase.prototype.u2t = function (_set____db54di) {
    this.g2v_1 = _set____db54di;
  };
  RequirementCreateCommandDTOBase.prototype.v2t = function () {
    return this.g2v_1;
  };
  RequirementCreateCommandDTOBase.prototype.toString = function () {
    return 'RequirementCreateCommandDTOBase(name=' + this.z2u_1 + ', description=' + this.a2v_1 + ', kind=' + this.b2v_1 + ', hasRequirement=' + this.c2v_1 + ', hasConcept=' + this.d2v_1 + ', hasEvidenceTypeList=' + this.e2v_1 + ', isRequirementOf=' + this.f2v_1 + ', hasQualifiedRelation=' + this.g2v_1 + ')';
  };
  RequirementCreateCommandDTOBase.prototype.hashCode = function () {
    var result = this.z2u_1 == null ? 0 : getStringHashCode(this.z2u_1);
    result = imul(result, 31) + (this.a2v_1 == null ? 0 : getStringHashCode(this.a2v_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.b2v_1) | 0;
    result = imul(result, 31) + hashCode(this.c2v_1) | 0;
    result = imul(result, 31) + hashCode(this.d2v_1) | 0;
    result = imul(result, 31) + hashCode(this.e2v_1) | 0;
    result = imul(result, 31) + (this.f2v_1 == null ? 0 : hashCode(this.f2v_1)) | 0;
    result = imul(result, 31) + (this.g2v_1 == null ? 0 : hashCode(this.g2v_1)) | 0;
    return result;
  };
  RequirementCreateCommandDTOBase.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequirementCreateCommandDTOBase))
      return false;
    var tmp0_other_with_cast = other instanceof RequirementCreateCommandDTOBase ? other : THROW_CCE();
    if (!(this.z2u_1 == tmp0_other_with_cast.z2u_1))
      return false;
    if (!(this.a2v_1 == tmp0_other_with_cast.a2v_1))
      return false;
    if (!(this.b2v_1 === tmp0_other_with_cast.b2v_1))
      return false;
    if (!equals(this.c2v_1, tmp0_other_with_cast.c2v_1))
      return false;
    if (!equals(this.d2v_1, tmp0_other_with_cast.d2v_1))
      return false;
    if (!equals(this.e2v_1, tmp0_other_with_cast.e2v_1))
      return false;
    if (!equals(this.f2v_1, tmp0_other_with_cast.f2v_1))
      return false;
    if (!equals(this.g2v_1, tmp0_other_with_cast.g2v_1))
      return false;
    return true;
  };
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.gf();
    }
  });
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'description', {
    configurable: true,
    get: function () {
      return this.s2i();
    }
  });
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.ej();
    }
  });
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'hasRequirement', {
    configurable: true,
    get: function () {
      return this.e2t();
    }
  });
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'hasConcept', {
    configurable: true,
    get: function () {
      return this.f2t();
    }
  });
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'hasEvidenceTypeList', {
    configurable: true,
    get: function () {
      return this.g2t();
    }
  });
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'isRequirementOf', {
    configurable: true,
    get: function () {
      return this.t2t();
    },
    set: function (value) {
      this.s2t(value);
    }
  });
  Object.defineProperty(RequirementCreateCommandDTOBase.prototype, 'hasQualifiedRelation', {
    configurable: true,
    get: function () {
      return this.v2t();
    },
    set: function (value) {
      this.u2t(value);
    }
  });
  function RequirementUpdateCommandDTO_0() {
  }
  function RequirementUpdatedEventDTO_0() {
  }
  function RequirementDTO() {
  }
  function GetRequirementListQueryDTO() {
  }
  function GetRequirementListQueryResultDTO() {
  }
  function GetRequirementListQuery(parentId, conceptId, evidenceTypeId) {
    this.k2v_1 = parentId;
    this.l2v_1 = conceptId;
    this.m2v_1 = evidenceTypeId;
  }
  GetRequirementListQuery.prototype.h2v = function () {
    return this.k2v_1;
  };
  GetRequirementListQuery.prototype.i2v = function () {
    return this.l2v_1;
  };
  GetRequirementListQuery.prototype.k2s = function () {
    return this.m2v_1;
  };
  Object.defineProperty(GetRequirementListQuery.prototype, 'parentId', {
    configurable: true,
    get: function () {
      return this.h2v();
    }
  });
  Object.defineProperty(GetRequirementListQuery.prototype, 'conceptId', {
    configurable: true,
    get: function () {
      return this.i2v();
    }
  });
  Object.defineProperty(GetRequirementListQuery.prototype, 'evidenceTypeId', {
    configurable: true,
    get: function () {
      return this.k2s();
    }
  });
  function GetRequirementListQueryResult(requirements) {
    this.n2v_1 = requirements;
  }
  GetRequirementListQueryResult.prototype.j2v = function () {
    return this.n2v_1;
  };
  Object.defineProperty(GetRequirementListQueryResult.prototype, 'requirements', {
    configurable: true,
    get: function () {
      return this.j2v();
    }
  });
  function GetRequirementQueryDTO() {
  }
  function GetRequirementQueryResultDTO() {
  }
  function GetRequirementQuery(requirementId) {
    this.p2v_1 = requirementId;
  }
  GetRequirementQuery.prototype.o2v = function () {
    return this.p2v_1;
  };
  Object.defineProperty(GetRequirementQuery.prototype, 'requirementId', {
    configurable: true,
    get: function () {
      return this.o2v();
    }
  });
  function GetRequirementQueryResult(requirement) {
    this.q2v_1 = requirement;
  }
  GetRequirementQueryResult.prototype.r2s = function () {
    return this.q2v_1;
  };
  Object.defineProperty(GetRequirementQueryResult.prototype, 'requirement', {
    configurable: true,
    get: function () {
      return this.r2s();
    }
  });
  function RequirementGetQueryDTO() {
  }
  function RequirementGetResultDTO() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.f2.requirement.domain.query.RequirementGetQueryDTOBase', this, 1);
    tmp0_serialDesc.pr('id', false);
    this.r2v_1 = tmp0_serialDesc;
  }
  $serializer_3.prototype.lh = function () {
    return this.r2v_1;
  };
  $serializer_3.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_3.prototype.nh = function (decoder) {
    var tmp0_desc = this.r2v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.tk(tmp0_desc);
    if (tmp5_input.il()) {
      tmp4_local0 = tmp5_input.dl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.dl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.uk(tmp0_desc);
    return RequirementGetQueryDTOBase_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_3.prototype.s2v = function (encoder, value) {
    var tmp0_desc = this.r2v_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.t2v_1);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_3.prototype.mh = function (encoder, value) {
    return this.s2v(encoder, value instanceof RequirementGetQueryDTOBase ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function RequirementGetQueryDTOBase_init_$Init$(seen1, id, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().r2v_1);
    }
    $this.t2v_1 = id;
    return $this;
  }
  function RequirementGetQueryDTOBase_init_$Create$(seen1, id, serializationConstructorMarker) {
    return RequirementGetQueryDTOBase_init_$Init$(seen1, id, serializationConstructorMarker, Object.create(RequirementGetQueryDTOBase.prototype));
  }
  function RequirementGetQueryDTOBase(id) {
    Companion_getInstance_3();
    this.t2v_1 = id;
  }
  RequirementGetQueryDTOBase.prototype.t2j = function () {
    return this.t2v_1;
  };
  RequirementGetQueryDTOBase.prototype.toString = function () {
    return 'RequirementGetQueryDTOBase(id=' + this.t2v_1 + ')';
  };
  RequirementGetQueryDTOBase.prototype.hashCode = function () {
    return getStringHashCode(this.t2v_1);
  };
  RequirementGetQueryDTOBase.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequirementGetQueryDTOBase))
      return false;
    var tmp0_other_with_cast = other instanceof RequirementGetQueryDTOBase ? other : THROW_CCE();
    if (!(this.t2v_1 === tmp0_other_with_cast.t2v_1))
      return false;
    return true;
  };
  Object.defineProperty(RequirementGetQueryDTOBase.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.t2j();
    }
  });
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.f2.requirement.domain.query.RequirementGetResultDTOBase', this, 1);
    tmp0_serialDesc.pr('item', false);
    this.u2v_1 = tmp0_serialDesc;
  }
  $serializer_4.prototype.lh = function () {
    return this.u2v_1;
  };
  $serializer_4.prototype.rr = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp = getKClass(RequirementDTO);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_arrayOf = [get_nullable(PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2))];
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp0_arrayOf;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  $serializer_4.prototype.nh = function (decoder) {
    var tmp0_desc = this.u2v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.tk(tmp0_desc);
    if (tmp5_input.il()) {
      var tmp = getKClass(RequirementDTO);
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp4_local0 = tmp5_input.hl(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_0 = getKClass(RequirementDTO);
            var tmp$ret$5;
            // Inline function 'kotlin.arrayOf' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$3;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = [];
            tmp$ret$4 = tmp$ret$3;
            tmp$ret$5 = tmp$ret$4;

            tmp4_local0 = tmp5_input.hl(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$5), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.uk(tmp0_desc);
    return RequirementGetResultDTOBase_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_4.prototype.v2v = function (encoder, value) {
    var tmp0_desc = this.u2v_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    var tmp = getKClass(RequirementDTO);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp1_output.km(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), value.w2v_1);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_4.prototype.mh = function (encoder, value) {
    return this.v2v(encoder, value instanceof RequirementGetResultDTOBase ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function RequirementGetResultDTOBase_init_$Init$(seen1, item, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_4().u2v_1);
    }
    $this.w2v_1 = item;
    return $this;
  }
  function RequirementGetResultDTOBase_init_$Create$(seen1, item, serializationConstructorMarker) {
    return RequirementGetResultDTOBase_init_$Init$(seen1, item, serializationConstructorMarker, Object.create(RequirementGetResultDTOBase.prototype));
  }
  function RequirementGetResultDTOBase(item) {
    Companion_getInstance_4();
    this.w2v_1 = item;
  }
  RequirementGetResultDTOBase.prototype.n2l = function () {
    return this.w2v_1;
  };
  RequirementGetResultDTOBase.prototype.toString = function () {
    return 'RequirementGetResultDTOBase(item=' + this.w2v_1 + ')';
  };
  RequirementGetResultDTOBase.prototype.hashCode = function () {
    return this.w2v_1 == null ? 0 : hashCode(this.w2v_1);
  };
  RequirementGetResultDTOBase.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequirementGetResultDTOBase))
      return false;
    var tmp0_other_with_cast = other instanceof RequirementGetResultDTOBase ? other : THROW_CCE();
    if (!equals(this.w2v_1, tmp0_other_with_cast.w2v_1))
      return false;
    return true;
  };
  Object.defineProperty(RequirementGetResultDTOBase.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.n2l();
    }
  });
  //region block: post-declaration
  $serializer.prototype.sr = typeParametersSerializers;
  $serializer_0.prototype.sr = typeParametersSerializers;
  $serializer_1.prototype.sr = typeParametersSerializers;
  $serializer_2.prototype.sr = typeParametersSerializers;
  $serializer_3.prototype.sr = typeParametersSerializers;
  $serializer_4.prototype.sr = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$command = $cccev$f2$requirement$domain.command || ($cccev$f2$requirement$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$command = $cccev$f2$requirement$domain.command || ($cccev$f2$requirement$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$command = $cccev$f2$requirement$domain.command || ($cccev$f2$requirement$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$command = $cccev$f2$requirement$domain.command || ($cccev$f2$requirement$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$command = $cccev$f2$requirement$domain.command || ($cccev$f2$requirement$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$model = $cccev$f2$requirement$domain.model || ($cccev$f2$requirement$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$query = $cccev$f2$requirement$domain.query || ($cccev$f2$requirement$domain.query = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$query = $cccev$f2$requirement$domain.query || ($cccev$f2$requirement$domain.query = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$domain = $cccev$f2$requirement.domain || ($cccev$f2$requirement.domain = {});
    var $cccev$f2$requirement$domain$query = $cccev$f2$requirement$domain.query || ($cccev$f2$requirement$domain.query = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ConstraintCreateCommandDTOBase;
  _.$_$.b = CriterionCreateCommandDTOBase;
  _.$_$.c = InformationRequirementCreateCommandDTOBase;
  _.$_$.d = RequirementCreateCommandDTOBase;
  _.$_$.e = GetRequirementListQueryResult;
  _.$_$.f = GetRequirementListQuery;
  _.$_$.g = GetRequirementQueryResult;
  _.$_$.h = GetRequirementQuery;
  _.$_$.i = RequirementGetQueryDTOBase;
  _.$_$.j = RequirementGetResultDTOBase;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-requirement-f2-domain.js.map

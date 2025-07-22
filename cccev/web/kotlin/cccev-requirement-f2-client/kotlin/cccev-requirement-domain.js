(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './s2-s2-automate-dsl.js', './kotlin-kotlin-stdlib-js-ir.js', './f2-f2-dsl-cqrs.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./s2-s2-automate-dsl.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./f2-f2-dsl-cqrs.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['s2-s2-automate-dsl'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-domain'. Its dependency 's2-s2-automate-dsl' was not found. Please, check whether 's2-s2-automate-dsl' is loaded prior to 'cccev-requirement-domain'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-requirement-domain'.");
    }
    if (typeof this['f2-f2-dsl-cqrs'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-domain'. Its dependency 'f2-f2-dsl-cqrs' was not found. Please, check whether 'f2-f2-dsl-cqrs' is loaded prior to 'cccev-requirement-domain'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-domain'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'cccev-requirement-domain'.");
    }
    root['cccev-requirement-domain'] = factory(typeof this['cccev-requirement-domain'] === 'undefined' ? {} : this['cccev-requirement-domain'], this['s2-s2-automate-dsl'], this['kotlin-kotlin-stdlib-js-ir'], this['f2-f2-dsl-cqrs'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var S2InitCommand = kotlin_city_smartb_s2_s2_automate_dsl.$_$.c;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var S2Command = kotlin_city_smartb_s2_s2_automate_dsl.$_$.a;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.b;
  var WithId = kotlin_city_smartb_s2_s2_automate_dsl.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.la;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var classMeta = kotlin_kotlin.$_$.k9;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var hashCode = kotlin_kotlin.$_$.r9;
  var equals = kotlin_kotlin.$_$.m9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(RequirementInitCommand, 'RequirementInitCommand', interfaceMeta, undefined, [S2InitCommand], undefined, undefined, []);
  setMetadataFor(RequirementCommand, 'RequirementCommand', interfaceMeta, undefined, [S2Command], undefined, undefined, []);
  setMetadataFor(RequirementEvent, 'RequirementEvent', interfaceMeta, undefined, [Event, WithId], undefined, undefined, []);
  setMetadataFor(RequirementCreatedEventDTO, 'RequirementCreatedEventDTO', interfaceMeta, undefined, [RequirementEvent], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(RequirementCreatedEvent, 'RequirementCreatedEvent', classMeta, undefined, [RequirementCreatedEventDTO], undefined, {0: $serializer_getInstance}, []);
  setMetadataFor(RequirementUpdateCommandDTO, 'RequirementUpdateCommandDTO', interfaceMeta, undefined, [RequirementCommand], undefined, undefined, []);
  setMetadataFor(RequirementUpdatedEventDTO, 'RequirementUpdatedEventDTO', interfaceMeta, undefined, [RequirementEvent], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_0, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(RequirementUpdateCommand, 'RequirementUpdateCommand', classMeta, undefined, [RequirementUpdateCommandDTO], undefined, {0: $serializer_getInstance_0}, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_1, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(RequirementUpdatedEvent, 'RequirementUpdatedEvent', classMeta, undefined, [RequirementUpdatedEventDTO], undefined, {0: $serializer_getInstance_1}, []);
  //endregion
  function RequirementInitCommand() {
  }
  function RequirementCommand() {
  }
  function RequirementEvent() {
  }
  function RequirementCreatedEventDTO() {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.s2.requirement.domain.command.RequirementCreatedEvent', this, 1);
    tmp0_serialDesc.pr('id', false);
    this.b2t_1 = tmp0_serialDesc;
  }
  $serializer.prototype.lh = function () {
    return this.b2t_1;
  };
  $serializer.prototype.rr = function () {
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
  $serializer.prototype.nh = function (decoder) {
    var tmp0_desc = this.b2t_1;
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
    return RequirementCreatedEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.c2t = function (encoder, value) {
    var tmp0_desc = this.b2t_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.d2t_1);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer.prototype.mh = function (encoder, value) {
    return this.c2t(encoder, value instanceof RequirementCreatedEvent ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function RequirementCreatedEvent_init_$Init$(seen1, id, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().b2t_1);
    }
    $this.d2t_1 = id;
    return $this;
  }
  function RequirementCreatedEvent_init_$Create$(seen1, id, serializationConstructorMarker) {
    return RequirementCreatedEvent_init_$Init$(seen1, id, serializationConstructorMarker, Object.create(RequirementCreatedEvent.prototype));
  }
  function RequirementCreatedEvent(id) {
    Companion_getInstance();
    this.d2t_1 = id;
  }
  RequirementCreatedEvent.prototype.t2j = function () {
    return this.d2t_1;
  };
  RequirementCreatedEvent.prototype.toString = function () {
    return 'RequirementCreatedEvent(id=' + this.d2t_1 + ')';
  };
  RequirementCreatedEvent.prototype.hashCode = function () {
    return getStringHashCode(this.d2t_1);
  };
  RequirementCreatedEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequirementCreatedEvent))
      return false;
    var tmp0_other_with_cast = other instanceof RequirementCreatedEvent ? other : THROW_CCE();
    if (!(this.d2t_1 === tmp0_other_with_cast.d2t_1))
      return false;
    return true;
  };
  Object.defineProperty(RequirementCreatedEvent.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.t2j();
    }
  });
  function RequirementUpdateCommandDTO() {
  }
  function RequirementUpdatedEventDTO() {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.s2.requirement.domain.command.RequirementUpdateCommand', this, 6);
    tmp0_serialDesc.pr('id', false);
    tmp0_serialDesc.pr('name', false);
    tmp0_serialDesc.pr('description', false);
    tmp0_serialDesc.pr('hasRequirement', false);
    tmp0_serialDesc.pr('hasConcept', false);
    tmp0_serialDesc.pr('hasEvidenceTypeList', false);
    this.h2t_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.lh = function () {
    return this.h2t_1;
  };
  $serializer_0.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
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
    var tmp0_desc = this.h2t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.tk(tmp0_desc);
    if (tmp10_input.il()) {
      tmp4_local0 = tmp10_input.dl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.hl(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.fl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.dl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.hl(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.fl(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.fl(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.fl(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.uk(tmp0_desc);
    return RequirementUpdateCommand_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  $serializer_0.prototype.i2t = function (encoder, value) {
    var tmp0_desc = this.h2t_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.j2t_1);
    tmp1_output.km(tmp0_desc, 1, StringSerializer_getInstance(), value.k2t_1);
    tmp1_output.km(tmp0_desc, 2, StringSerializer_getInstance(), value.l2t_1);
    tmp1_output.im(tmp0_desc, 3, new ArrayListSerializer(StringSerializer_getInstance()), value.m2t_1);
    tmp1_output.im(tmp0_desc, 4, new ArrayListSerializer(StringSerializer_getInstance()), value.n2t_1);
    tmp1_output.im(tmp0_desc, 5, new ArrayListSerializer(StringSerializer_getInstance()), value.o2t_1);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_0.prototype.mh = function (encoder, value) {
    return this.i2t(encoder, value instanceof RequirementUpdateCommand ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function RequirementUpdateCommand_init_$Init$(seen1, id, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen1))) {
      throwMissingFieldException(seen1, 63, $serializer_getInstance_0().h2t_1);
    }
    $this.j2t_1 = id;
    $this.k2t_1 = name;
    $this.l2t_1 = description;
    $this.m2t_1 = hasRequirement;
    $this.n2t_1 = hasConcept;
    $this.o2t_1 = hasEvidenceTypeList;
    return $this;
  }
  function RequirementUpdateCommand_init_$Create$(seen1, id, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, serializationConstructorMarker) {
    return RequirementUpdateCommand_init_$Init$(seen1, id, name, description, hasRequirement, hasConcept, hasEvidenceTypeList, serializationConstructorMarker, Object.create(RequirementUpdateCommand.prototype));
  }
  function RequirementUpdateCommand(id, name, description, hasRequirement, hasConcept, hasEvidenceTypeList) {
    Companion_getInstance_0();
    this.j2t_1 = id;
    this.k2t_1 = name;
    this.l2t_1 = description;
    this.m2t_1 = hasRequirement;
    this.n2t_1 = hasConcept;
    this.o2t_1 = hasEvidenceTypeList;
  }
  RequirementUpdateCommand.prototype.t2j = function () {
    return this.j2t_1;
  };
  RequirementUpdateCommand.prototype.gf = function () {
    return this.k2t_1;
  };
  RequirementUpdateCommand.prototype.s2i = function () {
    return this.l2t_1;
  };
  RequirementUpdateCommand.prototype.e2t = function () {
    return this.m2t_1;
  };
  RequirementUpdateCommand.prototype.f2t = function () {
    return this.n2t_1;
  };
  RequirementUpdateCommand.prototype.g2t = function () {
    return this.o2t_1;
  };
  RequirementUpdateCommand.prototype.toString = function () {
    return 'RequirementUpdateCommand(id=' + this.j2t_1 + ', name=' + this.k2t_1 + ', description=' + this.l2t_1 + ', hasRequirement=' + this.m2t_1 + ', hasConcept=' + this.n2t_1 + ', hasEvidenceTypeList=' + this.o2t_1 + ')';
  };
  RequirementUpdateCommand.prototype.hashCode = function () {
    var result = getStringHashCode(this.j2t_1);
    result = imul(result, 31) + (this.k2t_1 == null ? 0 : getStringHashCode(this.k2t_1)) | 0;
    result = imul(result, 31) + (this.l2t_1 == null ? 0 : getStringHashCode(this.l2t_1)) | 0;
    result = imul(result, 31) + hashCode(this.m2t_1) | 0;
    result = imul(result, 31) + hashCode(this.n2t_1) | 0;
    result = imul(result, 31) + hashCode(this.o2t_1) | 0;
    return result;
  };
  RequirementUpdateCommand.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequirementUpdateCommand))
      return false;
    var tmp0_other_with_cast = other instanceof RequirementUpdateCommand ? other : THROW_CCE();
    if (!(this.j2t_1 === tmp0_other_with_cast.j2t_1))
      return false;
    if (!(this.k2t_1 == tmp0_other_with_cast.k2t_1))
      return false;
    if (!(this.l2t_1 == tmp0_other_with_cast.l2t_1))
      return false;
    if (!equals(this.m2t_1, tmp0_other_with_cast.m2t_1))
      return false;
    if (!equals(this.n2t_1, tmp0_other_with_cast.n2t_1))
      return false;
    if (!equals(this.o2t_1, tmp0_other_with_cast.o2t_1))
      return false;
    return true;
  };
  Object.defineProperty(RequirementUpdateCommand.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.t2j();
    }
  });
  Object.defineProperty(RequirementUpdateCommand.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.gf();
    }
  });
  Object.defineProperty(RequirementUpdateCommand.prototype, 'description', {
    configurable: true,
    get: function () {
      return this.s2i();
    }
  });
  Object.defineProperty(RequirementUpdateCommand.prototype, 'hasRequirement', {
    configurable: true,
    get: function () {
      return this.e2t();
    }
  });
  Object.defineProperty(RequirementUpdateCommand.prototype, 'hasConcept', {
    configurable: true,
    get: function () {
      return this.f2t();
    }
  });
  Object.defineProperty(RequirementUpdateCommand.prototype, 'hasEvidenceTypeList', {
    configurable: true,
    get: function () {
      return this.g2t();
    }
  });
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('cccev.s2.requirement.domain.command.RequirementUpdatedEvent', this, 1);
    tmp0_serialDesc.pr('id', false);
    this.p2t_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.lh = function () {
    return this.p2t_1;
  };
  $serializer_1.prototype.rr = function () {
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
  $serializer_1.prototype.nh = function (decoder) {
    var tmp0_desc = this.p2t_1;
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
    return RequirementUpdatedEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_1.prototype.q2t = function (encoder, value) {
    var tmp0_desc = this.p2t_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.r2t_1);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_1.prototype.mh = function (encoder, value) {
    return this.q2t(encoder, value instanceof RequirementUpdatedEvent ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function RequirementUpdatedEvent_init_$Init$(seen1, id, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_1().p2t_1);
    }
    $this.r2t_1 = id;
    return $this;
  }
  function RequirementUpdatedEvent_init_$Create$(seen1, id, serializationConstructorMarker) {
    return RequirementUpdatedEvent_init_$Init$(seen1, id, serializationConstructorMarker, Object.create(RequirementUpdatedEvent.prototype));
  }
  function RequirementUpdatedEvent(id) {
    Companion_getInstance_1();
    this.r2t_1 = id;
  }
  RequirementUpdatedEvent.prototype.t2j = function () {
    return this.r2t_1;
  };
  RequirementUpdatedEvent.prototype.toString = function () {
    return 'RequirementUpdatedEvent(id=' + this.r2t_1 + ')';
  };
  RequirementUpdatedEvent.prototype.hashCode = function () {
    return getStringHashCode(this.r2t_1);
  };
  RequirementUpdatedEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequirementUpdatedEvent))
      return false;
    var tmp0_other_with_cast = other instanceof RequirementUpdatedEvent ? other : THROW_CCE();
    if (!(this.r2t_1 === tmp0_other_with_cast.r2t_1))
      return false;
    return true;
  };
  Object.defineProperty(RequirementUpdatedEvent.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.t2j();
    }
  });
  //region block: post-declaration
  $serializer.prototype.sr = typeParametersSerializers;
  $serializer_0.prototype.sr = typeParametersSerializers;
  $serializer_1.prototype.sr = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$requirement = $cccev$s2.requirement || ($cccev$s2.requirement = {});
    var $cccev$s2$requirement$domain = $cccev$s2$requirement.domain || ($cccev$s2$requirement.domain = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$requirement = $cccev$s2.requirement || ($cccev$s2.requirement = {});
    var $cccev$s2$requirement$domain = $cccev$s2$requirement.domain || ($cccev$s2$requirement.domain = {});
    var $cccev$s2$requirement$domain$command = $cccev$s2$requirement$domain.command || ($cccev$s2$requirement$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$requirement = $cccev$s2.requirement || ($cccev$s2.requirement = {});
    var $cccev$s2$requirement$domain = $cccev$s2$requirement.domain || ($cccev$s2$requirement.domain = {});
    var $cccev$s2$requirement$domain$command = $cccev$s2$requirement$domain.command || ($cccev$s2$requirement$domain.command = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = RequirementCreatedEventDTO;
  _.$_$.b = RequirementCreatedEvent;
  _.$_$.c = RequirementUpdateCommandDTO;
  _.$_$.d = RequirementUpdateCommand;
  _.$_$.e = RequirementUpdatedEventDTO;
  _.$_$.f = RequirementUpdatedEvent;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-requirement-domain.js.map

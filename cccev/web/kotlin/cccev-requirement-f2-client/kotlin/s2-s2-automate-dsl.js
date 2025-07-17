(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './f2-f2-dsl-cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./f2-f2-dsl-cqrs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 's2-s2-automate-dsl'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 's2-s2-automate-dsl'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 's2-s2-automate-dsl'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 's2-s2-automate-dsl'.");
    }
    if (typeof this['f2-f2-dsl-cqrs'] === 'undefined') {
      throw new Error("Error loading module 's2-s2-automate-dsl'. Its dependency 'f2-f2-dsl-cqrs' was not found. Please, check whether 'f2-f2-dsl-cqrs' is loaded prior to 's2-s2-automate-dsl'.");
    }
    root['s2-s2-automate-dsl'] = factory(typeof this['s2-s2-automate-dsl'] === 'undefined' ? {} : this['s2-s2-automate-dsl'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['f2-f2-dsl-cqrs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_city_smartb_f2_f2_dsl_cqrs) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.la;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var getKClass = kotlin_kotlin.$_$.f;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a1;
  var copyToArray = kotlin_kotlin.$_$.n6;
  var classMeta = kotlin_kotlin.$_$.k9;
  var Command = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.a;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.b;
  var emptyList = kotlin_kotlin.$_$.r6;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ee;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Automate, 'Automate', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2Automate, 'S2Automate', classMeta, undefined, [Automate], undefined, {0: $serializer_getInstance}, []);
  setMetadataFor(S2InitCommand, 'S2InitCommand', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(WithId, 'WithId', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2Command, 'S2Command', interfaceMeta, undefined, [Command, WithId], undefined, undefined, []);
  setMetadataFor(S2Error, 'S2Error', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2ErrorBase, 'S2ErrorBase', classMeta, undefined, [S2Error], undefined, undefined, []);
  setMetadataFor(S2Event, 'S2Event', interfaceMeta, undefined, [Event, WithId], undefined, undefined, []);
  setMetadataFor(S2EventSuccess, 'S2EventSuccess', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(S2EventError, 'S2EventError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(S2Role, 'S2Role', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2State, 'S2State', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2SubMachine, 'S2SubMachine', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2InitTransition, 'S2InitTransition', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_0, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2Transition, 'S2Transition', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_0}, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_1, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2TransitionValue, 'S2TransitionValue', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_1}, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_2, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2RoleValue, 'S2RoleValue', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_2}, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_3, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2StateValue, 'S2StateValue', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_3}, []);
  setMetadataFor(S2AutomateBuilder, 'S2AutomateBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2SourcingAutomateBuilder, 'S2SourcingAutomateBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WithS2Id, 'WithS2Id', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WithS2State, 'WithS2State', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WithS2IdAndStatus, 'WithS2IdAndStatus', interfaceMeta, undefined, [WithS2Id, WithS2State], undefined, undefined, []);
  //endregion
  function Automate() {
  }
  function isInstance(_this__u8e3s4, $this, msg) {
    var msgAction = toValue(getKClassFromExpression(msg));
    return msgAction.name === _this__u8e3s4.name;
  }
  function isSame(_this__u8e3s4, $this, to) {
    var tmp0_safe_receiver = _this__u8e3s4;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.position) === to.position;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2Automate', this, 3);
    tmp0_serialDesc.pr('name', false);
    tmp0_serialDesc.pr('version', false);
    tmp0_serialDesc.pr('transitions', false);
    this.r2q_1 = tmp0_serialDesc;
  }
  $serializer.prototype.lh = function () {
    return this.r2q_1;
  };
  $serializer.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_0())];
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
    var tmp0_desc = this.r2q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.tk(tmp0_desc);
    if (tmp7_input.il()) {
      tmp4_local0 = tmp7_input.dl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.fl(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_0()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.dl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.hl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.fl(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_0()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.uk(tmp0_desc);
    return S2Automate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer.prototype.s2q = function (encoder, value) {
    var tmp0_desc = this.r2q_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.name);
    tmp1_output.km(tmp0_desc, 1, StringSerializer_getInstance(), value.version);
    tmp1_output.im(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_0()), value.transitions);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer.prototype.mh = function (encoder, value) {
    return this.s2q(encoder, value instanceof S2Automate ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function S2Automate_init_$Init$(seen1, name, version, transitions, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance().r2q_1);
    }
    $this.name = name;
    $this.version = version;
    $this.transitions = transitions;
    return $this;
  }
  function S2Automate_init_$Create$(seen1, name, version, transitions, serializationConstructorMarker) {
    return S2Automate_init_$Init$(seen1, name, version, transitions, serializationConstructorMarker, Object.create(S2Automate.prototype));
  }
  function S2Automate(name, version, transitions) {
    Companion_getInstance();
    this.name = name;
    this.version = version;
    this.transitions = transitions;
  }
  S2Automate.prototype.gf = function () {
    return this.name;
  };
  S2Automate.prototype.t2q = function () {
    return this.version;
  };
  S2Automate.prototype.b2n = function () {
    return this.transitions;
  };
  S2Automate.prototype.getAvailableTransitions = function (state) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.transitions;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var indexedObject = tmp0_filter;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 's2.dsl.automate.S2Automate.getAvailableTransitions.<anonymous>' call
      tmp$ret$0 = isSame(element.from, this, state);
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  S2Automate.prototype.isAvailableTransition = function (currentState, msg) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = this.getAvailableTransitions(currentState);
      var indexedObject = tmp0_any;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 's2.dsl.automate.S2Automate.isAvailableTransition.<anonymous>' call
        tmp$ret$0 = isInstance(element.action, this, msg);
        if (tmp$ret$0) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  S2Automate.prototype.isAvailableInitTransition = function (command) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = this.transitions;
      var indexedObject = tmp0_any;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 's2.dsl.automate.S2Automate.isAvailableInitTransition.<anonymous>' call
        tmp$ret$0 = element.from == null ? isInstance(element.action, this, command) : false;
        if (tmp$ret$0) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  S2Automate.prototype.isFinalState = function (state) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp0_isEmpty = this.getAvailableTransitions(state);
    tmp$ret$0 = tmp0_isEmpty.length === 0;
    return tmp$ret$0;
  };
  S2Automate.prototype.isSameState = function (from, to) {
    var tmp0_safe_receiver = from;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.position) === to.position;
  };
  function S2InitCommand() {
  }
  function S2Command() {
  }
  function S2Error() {
  }
  function S2ErrorBase(type, description, date, payload) {
    this.w2q_1 = type;
    this.x2q_1 = description;
    this.y2q_1 = date;
    this.z2q_1 = payload;
  }
  S2ErrorBase.prototype.d2j = function () {
    return this.w2q_1;
  };
  S2ErrorBase.prototype.s2i = function () {
    return this.x2q_1;
  };
  S2ErrorBase.prototype.u2q = function () {
    return this.y2q_1;
  };
  S2ErrorBase.prototype.v2q = function () {
    return this.z2q_1;
  };
  S2ErrorBase.prototype.toString = function () {
    return "S2ErrorBase(type='" + this.w2q_1 + "', description='" + this.x2q_1 + "', date='" + this.y2q_1 + "', payload=" + this.z2q_1 + ')';
  };
  Object.defineProperty(S2ErrorBase.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.d2j();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'description', {
    configurable: true,
    get: function () {
      return this.s2i();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'date', {
    configurable: true,
    get: function () {
      return this.u2q();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this.v2q();
    }
  });
  function S2Event() {
  }
  function S2EventSuccess(id, type, from, to) {
    this.id = id;
    this.type = type;
    this.from = from;
    this.to = to;
  }
  S2EventSuccess.prototype.t2j = function () {
    return this.id;
  };
  S2EventSuccess.prototype.d2j = function () {
    return this.type;
  };
  S2EventSuccess.prototype.w2o = function () {
    return this.from;
  };
  S2EventSuccess.prototype.x2o = function () {
    return this.to;
  };
  function S2EventError(id, type, from, to, error) {
    this.id = id;
    this.type = type;
    this.from = from;
    this.to = to;
    this.error = error;
  }
  S2EventError.prototype.t2j = function () {
    return this.id;
  };
  S2EventError.prototype.d2j = function () {
    return this.type;
  };
  S2EventError.prototype.w2o = function () {
    return this.from;
  };
  S2EventError.prototype.x2o = function () {
    return this.to;
  };
  S2EventError.prototype.g2k = function () {
    return this.error;
  };
  function S2Role() {
  }
  function S2State() {
  }
  function S2SubMachine_init_$Init$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      startsOn = emptyList();
    if (!(($mask0 & 4) === 0))
      endsOn = emptyList();
    if (!(($mask0 & 8) === 0))
      autostart = false;
    if (!(($mask0 & 16) === 0))
      blocking = false;
    if (!(($mask0 & 32) === 0))
      singleton = false;
    S2SubMachine.call($this, automate, startsOn, endsOn, autostart, blocking, singleton);
    return $this;
  }
  function S2SubMachine_init_$Create$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker) {
    return S2SubMachine_init_$Init$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker, Object.create(S2SubMachine.prototype));
  }
  function S2SubMachine(automate, startsOn, endsOn, autostart, blocking, singleton) {
    var startsOn_0 = startsOn === void 1 ? emptyList() : startsOn;
    var endsOn_0 = endsOn === void 1 ? emptyList() : endsOn;
    var autostart_0 = autostart === void 1 ? false : autostart;
    var blocking_0 = blocking === void 1 ? false : blocking;
    var singleton_0 = singleton === void 1 ? false : singleton;
    this.a2r_1 = automate;
    this.b2r_1 = startsOn_0;
    this.c2r_1 = endsOn_0;
    this.d2r_1 = autostart_0;
    this.e2r_1 = blocking_0;
    this.f2r_1 = singleton_0;
  }
  S2SubMachine.prototype.g2r = function () {
    return this.a2r_1;
  };
  S2SubMachine.prototype.h2r = function () {
    return this.b2r_1;
  };
  S2SubMachine.prototype.i2r = function () {
    return this.c2r_1;
  };
  S2SubMachine.prototype.j2r = function () {
    return this.d2r_1;
  };
  S2SubMachine.prototype.k2r = function () {
    return this.e2r_1;
  };
  S2SubMachine.prototype.l2r = function () {
    return this.f2r_1;
  };
  Object.defineProperty(S2SubMachine.prototype, 'automate', {
    configurable: true,
    get: function () {
      return this.g2r();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'startsOn', {
    configurable: true,
    get: function () {
      return this.h2r();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'endsOn', {
    configurable: true,
    get: function () {
      return this.i2r();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'autostart', {
    configurable: true,
    get: function () {
      return this.j2r();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'blocking', {
    configurable: true,
    get: function () {
      return this.k2r();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'singleton', {
    configurable: true,
    get: function () {
      return this.l2r();
    }
  });
  function S2InitTransition(to, role, action) {
    this.m2r_1 = to;
    this.n2r_1 = role;
    this.o2r_1 = action;
  }
  S2InitTransition.prototype.x2o = function () {
    return this.m2r_1;
  };
  S2InitTransition.prototype.y2o = function () {
    return this.n2r_1;
  };
  S2InitTransition.prototype.z2o = function () {
    return this.o2r_1;
  };
  Object.defineProperty(S2InitTransition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this.x2o();
    }
  });
  Object.defineProperty(S2InitTransition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this.y2o();
    }
  });
  Object.defineProperty(S2InitTransition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.z2o();
    }
  });
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.serializer = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2Transition', this, 5);
    tmp0_serialDesc.pr('from', false);
    tmp0_serialDesc.pr('to', false);
    tmp0_serialDesc.pr('role', false);
    tmp0_serialDesc.pr('action', false);
    tmp0_serialDesc.pr('result', false);
    this.p2r_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.lh = function () {
    return this.p2r_1;
  };
  $serializer_0.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable($serializer_getInstance_3()), $serializer_getInstance_3(), $serializer_getInstance_2(), $serializer_getInstance_1(), get_nullable($serializer_getInstance_1())];
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
    var tmp0_desc = this.p2r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.tk(tmp0_desc);
    if (tmp9_input.il()) {
      tmp4_local0 = tmp9_input.hl(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.fl(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.fl(tmp0_desc, 2, $serializer_getInstance_2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.fl(tmp0_desc, 3, $serializer_getInstance_1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.hl(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.hl(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.fl(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.fl(tmp0_desc, 2, $serializer_getInstance_2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.fl(tmp0_desc, 3, $serializer_getInstance_1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.hl(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.uk(tmp0_desc);
    return S2Transition_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer_0.prototype.q2r = function (encoder, value) {
    var tmp0_desc = this.p2r_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.km(tmp0_desc, 0, $serializer_getInstance_3(), value.from);
    tmp1_output.im(tmp0_desc, 1, $serializer_getInstance_3(), value.to);
    tmp1_output.im(tmp0_desc, 2, $serializer_getInstance_2(), value.role);
    tmp1_output.im(tmp0_desc, 3, $serializer_getInstance_1(), value.action);
    tmp1_output.km(tmp0_desc, 4, $serializer_getInstance_1(), value.result);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_0.prototype.mh = function (encoder, value) {
    return this.q2r(encoder, value instanceof S2Transition ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function S2Transition_init_$Init$(seen1, from, to, role, action, result, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_0().p2r_1);
    }
    $this.r2r_1 = from;
    $this.s2r_1 = to;
    $this.t2r_1 = role;
    $this.u2r_1 = action;
    $this.v2r_1 = result;
    return $this;
  }
  function S2Transition_init_$Create$(seen1, from, to, role, action, result, serializationConstructorMarker) {
    return S2Transition_init_$Init$(seen1, from, to, role, action, result, serializationConstructorMarker, Object.create(S2Transition.prototype));
  }
  function S2Transition(from, to, role, action, result) {
    Companion_getInstance_0();
    this.r2r_1 = from;
    this.s2r_1 = to;
    this.t2r_1 = role;
    this.u2r_1 = action;
    this.v2r_1 = result;
  }
  S2Transition.prototype.w2o = function () {
    return this.r2r_1;
  };
  S2Transition.prototype.x2o = function () {
    return this.s2r_1;
  };
  S2Transition.prototype.y2o = function () {
    return this.t2r_1;
  };
  S2Transition.prototype.z2o = function () {
    return this.u2r_1;
  };
  S2Transition.prototype.pg = function () {
    return this.v2r_1;
  };
  Object.defineProperty(S2Transition.prototype, 'from', {
    configurable: true,
    get: function () {
      return this.w2o();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this.x2o();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this.y2o();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.z2o();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'result', {
    configurable: true,
    get: function () {
      return this.pg();
    }
  });
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.serializer = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2TransitionValue', this, 1);
    tmp0_serialDesc.pr('name', false);
    this.w2r_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.lh = function () {
    return this.w2r_1;
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
    var tmp0_desc = this.w2r_1;
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
    return S2TransitionValue_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_1.prototype.x2r = function (encoder, value) {
    var tmp0_desc = this.w2r_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.name);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_1.prototype.mh = function (encoder, value) {
    return this.x2r(encoder, value instanceof S2TransitionValue ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function S2TransitionValue_init_$Init$(seen1, name, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_1().w2r_1);
    }
    $this.name = name;
    return $this;
  }
  function S2TransitionValue_init_$Create$(seen1, name, serializationConstructorMarker) {
    return S2TransitionValue_init_$Init$(seen1, name, serializationConstructorMarker, Object.create(S2TransitionValue.prototype));
  }
  function S2TransitionValue(name) {
    Companion_getInstance_1();
    this.name = name;
  }
  S2TransitionValue.prototype.gf = function () {
    return this.name;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.serializer = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2RoleValue', this, 1);
    tmp0_serialDesc.pr('name', false);
    this.y2r_1 = tmp0_serialDesc;
  }
  $serializer_2.prototype.lh = function () {
    return this.y2r_1;
  };
  $serializer_2.prototype.rr = function () {
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
  $serializer_2.prototype.nh = function (decoder) {
    var tmp0_desc = this.y2r_1;
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
    return S2RoleValue_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_2.prototype.z2r = function (encoder, value) {
    var tmp0_desc = this.y2r_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.name);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_2.prototype.mh = function (encoder, value) {
    return this.z2r(encoder, value instanceof S2RoleValue ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function S2RoleValue_init_$Init$(seen1, name, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().y2r_1);
    }
    $this.name = name;
    return $this;
  }
  function S2RoleValue_init_$Create$(seen1, name, serializationConstructorMarker) {
    return S2RoleValue_init_$Init$(seen1, name, serializationConstructorMarker, Object.create(S2RoleValue.prototype));
  }
  function S2RoleValue(name) {
    Companion_getInstance_2();
    this.name = name;
  }
  S2RoleValue.prototype.gf = function () {
    return this.name;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.serializer = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2StateValue', this, 2);
    tmp0_serialDesc.pr('name', false);
    tmp0_serialDesc.pr('position', false);
    this.a2s_1 = tmp0_serialDesc;
  }
  $serializer_3.prototype.lh = function () {
    return this.a2s_1;
  };
  $serializer_3.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), IntSerializer_getInstance()];
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
    var tmp0_desc = this.a2s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.tk(tmp0_desc);
    if (tmp6_input.il()) {
      tmp4_local0 = tmp6_input.dl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.yk(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.dl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.yk(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.uk(tmp0_desc);
    return S2StateValue_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_3.prototype.b2s = function (encoder, value) {
    var tmp0_desc = this.a2s_1;
    var tmp1_output = encoder.tk(tmp0_desc);
    tmp1_output.gm(tmp0_desc, 0, value.name);
    tmp1_output.bm(tmp0_desc, 1, value.position);
    tmp1_output.uk(tmp0_desc);
  };
  $serializer_3.prototype.mh = function (encoder, value) {
    return this.b2s(encoder, value instanceof S2StateValue ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function S2StateValue_init_$Init$(seen1, name, position, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_3().a2s_1);
    }
    $this.name = name;
    $this.position = position;
    return $this;
  }
  function S2StateValue_init_$Create$(seen1, name, position, serializationConstructorMarker) {
    return S2StateValue_init_$Init$(seen1, name, position, serializationConstructorMarker, Object.create(S2StateValue.prototype));
  }
  function S2StateValue(name, position) {
    Companion_getInstance_3();
    this.name = name;
    this.position = position;
  }
  S2StateValue.prototype.gf = function () {
    return this.name;
  };
  S2StateValue.prototype.bq = function () {
    return this.position;
  };
  function toValue(_this__u8e3s4) {
    return new S2TransitionValue(ensureNotNull(_this__u8e3s4.vc()));
  }
  function WithId() {
  }
  function s2(exec) {
    var builder = new S2AutomateBuilder();
    exec(builder);
    var tmp = builder.gf();
    var tmp_0 = builder.d2s_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.e2s_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return new S2Automate(tmp, tmp_0, tmp$ret$0);
  }
  function S2AutomateBuilder() {
    this.d2s_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.e2s_1 = tmp$ret$0;
  }
  S2AutomateBuilder.prototype.gf = function () {
    var tmp = this.c2s_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  };
  function s2Sourcing(exec) {
    var builder = new S2SourcingAutomateBuilder();
    exec(builder);
    var tmp = builder.gf();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.h2s_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return new S2Automate(tmp, builder.g2s_1, tmp$ret$0);
  }
  function S2SourcingAutomateBuilder() {
    this.g2s_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.h2s_1 = tmp$ret$0;
  }
  S2SourcingAutomateBuilder.prototype.gf = function () {
    var tmp = this.f2s_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  };
  function WithS2Id() {
  }
  function WithS2IdAndStatus() {
  }
  function WithS2State() {
  }
  //region block: post-declaration
  $serializer.prototype.sr = typeParametersSerializers;
  $serializer_0.prototype.sr = typeParametersSerializers;
  $serializer_1.prototype.sr = typeParametersSerializers;
  $serializer_2.prototype.sr = typeParametersSerializers;
  $serializer_3.prototype.sr = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2Automate = S2Automate;
    $s2$dsl$automate.S2Automate.S2Automate_init_$Create$ = S2Automate_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2Automate, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    Object.defineProperty($s2$dsl$automate.S2Automate, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2ErrorBase = S2ErrorBase;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2EventSuccess = S2EventSuccess;
    $s2$dsl$automate.S2EventError = S2EventError;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2SubMachine = S2SubMachine;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2InitTransition = S2InitTransition;
    $s2$dsl$automate.S2Transition = S2Transition;
    $s2$dsl$automate.S2Transition.S2Transition_init_$Create$ = S2Transition_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2Transition, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    Object.defineProperty($s2$dsl$automate.S2Transition, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_0
    });
    $s2$dsl$automate.S2TransitionValue = S2TransitionValue;
    $s2$dsl$automate.S2TransitionValue.S2TransitionValue_init_$Create$ = S2TransitionValue_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2TransitionValue, 'Companion', {
      configurable: true,
      get: Companion_getInstance_1
    });
    Object.defineProperty($s2$dsl$automate.S2TransitionValue, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_1
    });
    $s2$dsl$automate.S2RoleValue = S2RoleValue;
    $s2$dsl$automate.S2RoleValue.S2RoleValue_init_$Create$ = S2RoleValue_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2RoleValue, 'Companion', {
      configurable: true,
      get: Companion_getInstance_2
    });
    Object.defineProperty($s2$dsl$automate.S2RoleValue, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_2
    });
    $s2$dsl$automate.S2StateValue = S2StateValue;
    $s2$dsl$automate.S2StateValue.S2StateValue_init_$Create$ = S2StateValue_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2StateValue, 'Companion', {
      configurable: true,
      get: Companion_getInstance_3
    });
    Object.defineProperty($s2$dsl$automate.S2StateValue, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_3
    });
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$builder = $s2$dsl$automate.builder || ($s2$dsl$automate.builder = {});
    $s2$dsl$automate$builder.s2 = s2;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$builder = $s2$dsl$automate.builder || ($s2$dsl$automate.builder = {});
    $s2$dsl$automate$builder.s2Sourcing = s2Sourcing;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$model = $s2$dsl$automate.model || ($s2$dsl$automate.model = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$model = $s2$dsl$automate.model || ($s2$dsl$automate.model = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$model = $s2$dsl$automate.model || ($s2$dsl$automate.model = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = S2Command;
  _.$_$.b = S2Event;
  _.$_$.c = S2InitCommand;
  _.$_$.d = WithId;
  //endregion
  return _;
}));

//# sourceMappingURL=s2-s2-automate-dsl.js.map

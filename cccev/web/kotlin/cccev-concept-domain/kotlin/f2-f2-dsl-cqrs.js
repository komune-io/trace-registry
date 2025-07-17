(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-dsl-cqrs'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'f2-f2-dsl-cqrs'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-dsl-cqrs'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' is loaded prior to 'f2-f2-dsl-cqrs'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-dsl-cqrs'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'f2-f2-dsl-cqrs'.");
    }
    root['f2-f2-dsl-cqrs'] = factory(typeof this['f2-f2-dsl-cqrs'] === 'undefined' ? {} : this['f2-f2-dsl-cqrs'], this['kotlin-kotlin-stdlib-js-ir'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var setMetadataFor = kotlin_kotlin.$_$.b2;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.a2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var Unit_getInstance = kotlin_kotlin.$_$.t;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.k2;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var classMeta = kotlin_kotlin.$_$.r1;
  var captureStack = kotlin_kotlin.$_$.q1;
  var RuntimeException = kotlin_kotlin.$_$.j2;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.r;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var getKClass = kotlin_kotlin.$_$.b;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Message, 'Message', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Command, 'Command', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(Event, 'Event', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(Query, 'Query', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(F2ErrorDTO, 'F2ErrorDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(F2Error, 'F2Error', classMeta, undefined, [F2ErrorDTO], undefined, {0: $serializer_getInstance}, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(F2Exception, 'F2Exception', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(PageDTO, 'PageDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_0, '$serializer', classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Page, 'Page', classMeta, undefined, [PageDTO], undefined, {0: Companion_getInstance_1}, []);
  setMetadataFor(PageQueryDTO, 'PageQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(PageQueryResultDTO, 'PageQueryResultDTO', interfaceMeta, undefined, [Event, PageDTO], undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_1, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(PageQuery, 'PageQuery', classMeta, undefined, [PageQueryDTO], undefined, {0: $serializer_getInstance_0}, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_2, '$serializer', classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(PageQueryResult, 'PageQueryResult', classMeta, undefined, [PageQueryResultDTO], undefined, {0: Companion_getInstance_3}, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Pagination, 'Pagination', interfaceMeta, undefined, undefined, undefined, {0: Companion_getInstance_4}, []);
  setMetadataFor(OffsetPaginationDTO, 'OffsetPaginationDTO', interfaceMeta, undefined, [Pagination], undefined, undefined, []);
  setMetadataFor(PagePaginationDTO, 'PagePaginationDTO', interfaceMeta, undefined, [Pagination], undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_3, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(OffsetPagination, 'OffsetPagination', classMeta, undefined, [OffsetPaginationDTO], undefined, {0: $serializer_getInstance_1}, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_4, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(PagePagination, 'PagePagination', classMeta, undefined, [PagePaginationDTO], undefined, {0: $serializer_getInstance_2}, []);
  //endregion
  function Command() {
  }
  function Event() {
  }
  function Message() {
  }
  function Query() {
  }
  function F2ErrorDTO() {
  }
  function F2Error_init_$Init$(message, id, timestamp, code, requestId, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      id = null;
    if (!(($mask0 & 4) === 0))
      timestamp = System_getInstance().ld().toString();
    if (!(($mask0 & 8) === 0))
      code = 500;
    if (!(($mask0 & 16) === 0))
      requestId = null;
    F2Error.call($this, message, id, timestamp, code, requestId);
    return $this;
  }
  function F2Error_init_$Create$(message, id, timestamp, code, requestId, $mask0, $marker) {
    return F2Error_init_$Init$(message, id, timestamp, code, requestId, $mask0, $marker, Object.create(F2Error.prototype));
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.error.F2Error', this, 5);
    tmp0_serialDesc.fc('message', false);
    tmp0_serialDesc.fc('id', true);
    tmp0_serialDesc.fc('timestamp', true);
    tmp0_serialDesc.fc('code', true);
    tmp0_serialDesc.fc('requestId', true);
    this.wd_1 = tmp0_serialDesc;
  }
  $serializer.prototype.q8 = function () {
    return this.wd_1;
  };
  $serializer.prototype.cc = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.xc = function (decoder) {
    var tmp0_desc = this.wd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = null;
    var tmp9_input = decoder.yc(tmp0_desc);
    if (tmp9_input.oa()) {
      tmp4_local0 = tmp9_input.ra(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ta(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ra(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.qa(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ta(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.pa(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ra(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ta(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ra(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.qa(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ta(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.na(tmp0_desc);
    return F2Error_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer.prototype.xd = function (encoder, value) {
    var tmp0_desc = this.wd_1;
    var tmp1_output = encoder.yc(tmp0_desc);
    tmp1_output.wa(tmp0_desc, 0, value.message);
    if (tmp1_output.ua(tmp0_desc, 1) ? true : !(value.id == null)) {
      tmp1_output.ya(tmp0_desc, 1, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.ua(tmp0_desc, 2) ? true : !(value.timestamp === System_getInstance().ld().toString())) {
      tmp1_output.wa(tmp0_desc, 2, value.timestamp);
    }
    if (tmp1_output.ua(tmp0_desc, 3) ? true : !(value.code === 500)) {
      tmp1_output.va(tmp0_desc, 3, value.code);
    }
    if (tmp1_output.ua(tmp0_desc, 4) ? true : !(value.requestId == null)) {
      tmp1_output.ya(tmp0_desc, 4, StringSerializer_getInstance(), value.requestId);
    }
    tmp1_output.na(tmp0_desc);
  };
  $serializer.prototype.ad = function (encoder, value) {
    return this.xd(encoder, value instanceof F2Error ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function F2Error_init_$Init$_0(seen1, message, id, timestamp, code, requestId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().wd_1);
    }
    $this.yd_1 = message;
    if (0 === (seen1 & 2))
      $this.zd_1 = null;
    else
      $this.zd_1 = id;
    if (0 === (seen1 & 4))
      $this.ae_1 = System_getInstance().ld().toString();
    else
      $this.ae_1 = timestamp;
    if (0 === (seen1 & 8))
      $this.be_1 = 500;
    else
      $this.be_1 = code;
    if (0 === (seen1 & 16))
      $this.ce_1 = null;
    else
      $this.ce_1 = requestId;
    return $this;
  }
  function F2Error_init_$Create$_0(seen1, message, id, timestamp, code, requestId, serializationConstructorMarker) {
    return F2Error_init_$Init$_0(seen1, message, id, timestamp, code, requestId, serializationConstructorMarker, Object.create(F2Error.prototype));
  }
  function F2Error(message, id, timestamp, code, requestId) {
    Companion_getInstance();
    var id_0 = id === void 1 ? null : id;
    var timestamp_0 = timestamp === void 1 ? System_getInstance().ld().toString() : timestamp;
    var code_0 = code === void 1 ? 500 : code;
    var requestId_0 = requestId === void 1 ? null : requestId;
    this.yd_1 = message;
    this.zd_1 = id_0;
    this.ae_1 = timestamp_0;
    this.be_1 = code_0;
    this.ce_1 = requestId_0;
  }
  F2Error.prototype.o8 = function () {
    return this.yd_1;
  };
  F2Error.prototype.sd = function () {
    return this.zd_1;
  };
  F2Error.prototype.td = function () {
    return this.ae_1;
  };
  F2Error.prototype.ud = function () {
    return this.be_1;
  };
  F2Error.prototype.vd = function () {
    return this.ce_1;
  };
  F2Error.prototype.toString = function () {
    return "F2Error(timestamp='" + this.timestamp + "', code=" + this.code + ", requestId='" + this.requestId + "', message='" + this.message + "')";
  };
  Object.defineProperty(F2Error.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.o8();
    }
  });
  Object.defineProperty(F2Error.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.sd();
    }
  });
  Object.defineProperty(F2Error.prototype, 'timestamp', {
    configurable: true,
    get: function () {
      return this.td();
    }
  });
  Object.defineProperty(F2Error.prototype, 'code', {
    configurable: true,
    get: function () {
      return this.ud();
    }
  });
  Object.defineProperty(F2Error.prototype, 'requestId', {
    configurable: true,
    get: function () {
      return this.vd();
    }
  });
  function F2Exception_init_$Init$(error, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    F2Exception.call($this, error, cause);
    return $this;
  }
  function F2Exception_init_$Create$(error, cause, $mask0, $marker) {
    var tmp = F2Exception_init_$Init$(error, cause, $mask0, $marker, Object.create(F2Exception.prototype));
    captureStack(tmp, F2Exception_init_$Create$);
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.invoke = function (message, id, requestId, code, cause) {
    return this.de(message, id === void 1 ? '' : id, requestId === void 1 ? '' : requestId, code === void 1 ? 500 : code, cause === void 1 ? null : cause);
  };
  Companion_0.prototype.de = function (message, id, requestId, code, cause) {
    var tmp0_timestamp = System_getInstance().ld().toString();
    return new F2Exception(new F2Error(message, id, tmp0_timestamp, code, requestId), cause);
  };
  Companion_0.prototype.ee = function (message, id, requestId, code, cause, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      id = '';
    if (!(($mask0 & 4) === 0))
      requestId = '';
    if (!(($mask0 & 8) === 0))
      code = 500;
    if (!(($mask0 & 16) === 0))
      cause = null;
    return this.de(message, id, requestId, code, cause);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function F2Exception(error, cause) {
    Companion_getInstance_0();
    var cause_0 = cause === void 1 ? null : cause;
    RuntimeException_init_$Init$(error.message, cause_0, this);
    this.error = error;
    captureStack(this, F2Exception);
  }
  F2Exception.prototype.fe = function () {
    return this.error;
  };
  function PageDTO() {
  }
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_0.call($this);
    $this.je_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, Object.create($serializer_0.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.Page', null, 2);
    tmp0_serialDesc.fc('total', false);
    tmp0_serialDesc.fc('items', false);
    Companion_getInstance_1().ke_1 = tmp0_serialDesc;
  }
  Companion_1.prototype.serializer = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  Companion_1.prototype.le = function (typeParamsSerializers) {
    return this.serializer(typeParamsSerializers[0]);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_0() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.Page', this, 2);
    tmp0_serialDesc.fc('total', false);
    tmp0_serialDesc.fc('items', false);
    this.ie_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.q8 = function () {
    return this.ie_1;
  };
  $serializer_0.prototype.cc = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), new ArrayListSerializer(this.je_1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_0.prototype.xc = function (decoder) {
    var tmp0_desc = this.ie_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.yc(tmp0_desc);
    if (tmp6_input.oa()) {
      tmp4_local0 = tmp6_input.qa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.sa(tmp0_desc, 1, new ArrayListSerializer(this.je_1), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pa(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.qa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.sa(tmp0_desc, 1, new ArrayListSerializer(this.je_1), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.na(tmp0_desc);
    return Page_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_0.prototype.me = function (encoder, value) {
    var tmp0_desc = this.ie_1;
    var tmp1_output = encoder.yc(tmp0_desc);
    tmp1_output.va(tmp0_desc, 0, value.ne_1);
    tmp1_output.xa(tmp0_desc, 1, new ArrayListSerializer(this.je_1), value.oe_1);
    tmp1_output.na(tmp0_desc);
  };
  $serializer_0.prototype.ad = function (encoder, value) {
    return this.me(encoder, value instanceof Page ? value : THROW_CCE());
  };
  $serializer_0.prototype.dc = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.je_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function Page_init_$Init$(seen1, total, items, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, Companion_getInstance_1().ke_1);
    }
    $this.ne_1 = total;
    $this.oe_1 = items;
    return $this;
  }
  function Page_init_$Create$(seen1, total, items, serializationConstructorMarker) {
    return Page_init_$Init$(seen1, total, items, serializationConstructorMarker, Object.create(Page.prototype));
  }
  function Page(total, items) {
    Companion_getInstance_1();
    this.ne_1 = total;
    this.oe_1 = items;
  }
  Page.prototype.ge = function () {
    return this.ne_1;
  };
  Page.prototype.he = function () {
    return this.oe_1;
  };
  Object.defineProperty(Page.prototype, 'total', {
    configurable: true,
    get: function () {
      return this.ge();
    }
  });
  Object.defineProperty(Page.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.he();
    }
  });
  function PageQueryDTO() {
  }
  function PageQueryResultDTO() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.serializer = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PageQuery', this, 1);
    tmp0_serialDesc.fc('pagination', false);
    this.qe_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.q8 = function () {
    return this.qe_1;
  };
  $serializer_1.prototype.cc = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp = getKClass(OffsetPaginationDTO);
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
  $serializer_1.prototype.xc = function (decoder) {
    var tmp0_desc = this.qe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.yc(tmp0_desc);
    if (tmp5_input.oa()) {
      var tmp = getKClass(OffsetPaginationDTO);
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp4_local0 = tmp5_input.ta(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.pa(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_0 = getKClass(OffsetPaginationDTO);
            var tmp$ret$5;
            // Inline function 'kotlin.arrayOf' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$3;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = [];
            tmp$ret$4 = tmp$ret$3;
            tmp$ret$5 = tmp$ret$4;

            tmp4_local0 = tmp5_input.ta(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$5), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.na(tmp0_desc);
    return PageQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_1.prototype.re = function (encoder, value) {
    var tmp0_desc = this.qe_1;
    var tmp1_output = encoder.yc(tmp0_desc);
    var tmp = getKClass(OffsetPaginationDTO);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp1_output.ya(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), value.se_1);
    tmp1_output.na(tmp0_desc);
  };
  $serializer_1.prototype.ad = function (encoder, value) {
    return this.re(encoder, value instanceof PageQuery ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_1();
    return $serializer_instance_0;
  }
  function PageQuery_init_$Init$(seen1, pagination, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().qe_1);
    }
    $this.se_1 = pagination;
    return $this;
  }
  function PageQuery_init_$Create$(seen1, pagination, serializationConstructorMarker) {
    return PageQuery_init_$Init$(seen1, pagination, serializationConstructorMarker, Object.create(PageQuery.prototype));
  }
  function PageQuery(pagination) {
    Companion_getInstance_2();
    this.se_1 = pagination;
  }
  PageQuery.prototype.pe = function () {
    return this.se_1;
  };
  Object.defineProperty(PageQuery.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this.pe();
    }
  });
  function $serializer_init_$Init$_0(typeSerial0, $this) {
    $serializer_2.call($this);
    $this.ue_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$_0(typeSerial0) {
    return $serializer_init_$Init$_0(typeSerial0, Object.create($serializer_2.prototype));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PageQueryResult', null, 3);
    tmp0_serialDesc.fc('pagination', false);
    tmp0_serialDesc.fc('total', false);
    tmp0_serialDesc.fc('items', false);
    Companion_getInstance_3().ve_1 = tmp0_serialDesc;
  }
  Companion_3.prototype.serializer = function (typeSerial0) {
    return $serializer_init_$Create$_0(typeSerial0);
  };
  Companion_3.prototype.le = function (typeParamsSerializers) {
    return this.serializer(typeParamsSerializers[0]);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_2() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PageQueryResult', this, 3);
    tmp0_serialDesc.fc('pagination', false);
    tmp0_serialDesc.fc('total', false);
    tmp0_serialDesc.fc('items', false);
    this.te_1 = tmp0_serialDesc;
  }
  $serializer_2.prototype.q8 = function () {
    return this.te_1;
  };
  $serializer_2.prototype.cc = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable($serializer_getInstance_1()), IntSerializer_getInstance(), new ArrayListSerializer(this.ue_1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_2.prototype.xc = function (decoder) {
    var tmp0_desc = this.te_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.yc(tmp0_desc);
    if (tmp7_input.oa()) {
      tmp4_local0 = tmp7_input.ta(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.qa(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sa(tmp0_desc, 2, new ArrayListSerializer(this.ue_1), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.pa(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ta(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.qa(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sa(tmp0_desc, 2, new ArrayListSerializer(this.ue_1), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.na(tmp0_desc);
    return PageQueryResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_2.prototype.we = function (encoder, value) {
    var tmp0_desc = this.te_1;
    var tmp1_output = encoder.yc(tmp0_desc);
    tmp1_output.ya(tmp0_desc, 0, $serializer_getInstance_1(), value.xe_1);
    tmp1_output.va(tmp0_desc, 1, value.ye_1);
    tmp1_output.xa(tmp0_desc, 2, new ArrayListSerializer(this.ue_1), value.ze_1);
    tmp1_output.na(tmp0_desc);
  };
  $serializer_2.prototype.ad = function (encoder, value) {
    return this.we(encoder, value instanceof PageQueryResult ? value : THROW_CCE());
  };
  $serializer_2.prototype.dc = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.ue_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function PageQueryResult_init_$Init$(seen1, pagination, total, items, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, Companion_getInstance_3().ve_1);
    }
    $this.xe_1 = pagination;
    $this.ye_1 = total;
    $this.ze_1 = items;
    return $this;
  }
  function PageQueryResult_init_$Create$(seen1, pagination, total, items, serializationConstructorMarker) {
    return PageQueryResult_init_$Init$(seen1, pagination, total, items, serializationConstructorMarker, Object.create(PageQueryResult.prototype));
  }
  function PageQueryResult(pagination, total, items) {
    Companion_getInstance_3();
    this.xe_1 = pagination;
    this.ye_1 = total;
    this.ze_1 = items;
  }
  PageQueryResult.prototype.pe = function () {
    return this.xe_1;
  };
  PageQueryResult.prototype.ge = function () {
    return this.ye_1;
  };
  PageQueryResult.prototype.he = function () {
    return this.ze_1;
  };
  Object.defineProperty(PageQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this.pe();
    }
  });
  Object.defineProperty(PageQueryResult.prototype, 'total', {
    configurable: true,
    get: function () {
      return this.ge();
    }
  });
  Object.defineProperty(PageQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.he();
    }
  });
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.serializer = function () {
    var tmp = getKClass(Pagination);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [getKClass(OffsetPaginationDTO), getKClass(PagePaginationDTO)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = getKClass(OffsetPaginationDTO);
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = [];
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp_2 = PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$5);
    var tmp_3 = getKClass(PagePaginationDTO);
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = [];
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    var tmp1_arrayOf = [tmp_2, PolymorphicSerializer_init_$Create$(tmp_3, tmp$ret$8)];
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = tmp1_arrayOf;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_4 = tmp$ret$11;
    var tmp$ret$14;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = [];
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    return SealedClassSerializer_init_$Create$('f2.dsl.cqrs.page.Pagination', tmp, tmp_0, tmp_4, tmp$ret$14);
  };
  Companion_4.prototype.le = function (typeParamsSerializers) {
    return this.serializer();
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Pagination() {
    Companion_getInstance_4();
  }
  function OffsetPaginationDTO() {
  }
  function PagePaginationDTO() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.serializer = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_3() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.OffsetPagination', this, 2);
    tmp0_serialDesc.fc('offset', false);
    tmp0_serialDesc.fc('limit', false);
    this.df_1 = tmp0_serialDesc;
  }
  $serializer_3.prototype.q8 = function () {
    return this.df_1;
  };
  $serializer_3.prototype.cc = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), IntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_3.prototype.xc = function (decoder) {
    var tmp0_desc = this.df_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.yc(tmp0_desc);
    if (tmp6_input.oa()) {
      tmp4_local0 = tmp6_input.qa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.qa(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pa(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.qa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.qa(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.na(tmp0_desc);
    return OffsetPagination_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_3.prototype.ef = function (encoder, value) {
    var tmp0_desc = this.df_1;
    var tmp1_output = encoder.yc(tmp0_desc);
    tmp1_output.va(tmp0_desc, 0, value.ff_1);
    tmp1_output.va(tmp0_desc, 1, value.gf_1);
    tmp1_output.na(tmp0_desc);
  };
  $serializer_3.prototype.ad = function (encoder, value) {
    return this.ef(encoder, value instanceof OffsetPagination ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_3();
    return $serializer_instance_1;
  }
  function OffsetPagination_init_$Init$(seen1, offset, limit, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_1().df_1);
    }
    $this.ff_1 = offset;
    $this.gf_1 = limit;
    return $this;
  }
  function OffsetPagination_init_$Create$(seen1, offset, limit, serializationConstructorMarker) {
    return OffsetPagination_init_$Init$(seen1, offset, limit, serializationConstructorMarker, Object.create(OffsetPagination.prototype));
  }
  function OffsetPagination(offset, limit) {
    Companion_getInstance_5();
    this.ff_1 = offset;
    this.gf_1 = limit;
  }
  OffsetPagination.prototype.af = function () {
    return this.ff_1;
  };
  OffsetPagination.prototype.bf = function () {
    return this.gf_1;
  };
  Object.defineProperty(OffsetPagination.prototype, 'offset', {
    configurable: true,
    get: function () {
      return this.af();
    }
  });
  Object.defineProperty(OffsetPagination.prototype, 'limit', {
    configurable: true,
    get: function () {
      return this.bf();
    }
  });
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.serializer = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_4() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PagePagination', this, 2);
    tmp0_serialDesc.fc('page', false);
    tmp0_serialDesc.fc('size', false);
    this.hf_1 = tmp0_serialDesc;
  }
  $serializer_4.prototype.q8 = function () {
    return this.hf_1;
  };
  $serializer_4.prototype.cc = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_4.prototype.xc = function (decoder) {
    var tmp0_desc = this.hf_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.yc(tmp0_desc);
    if (tmp6_input.oa()) {
      tmp4_local0 = tmp6_input.ta(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ta(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.pa(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ta(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ta(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.na(tmp0_desc);
    return PagePagination_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_4.prototype.if = function (encoder, value) {
    var tmp0_desc = this.hf_1;
    var tmp1_output = encoder.yc(tmp0_desc);
    tmp1_output.ya(tmp0_desc, 0, IntSerializer_getInstance(), value.jf_1);
    tmp1_output.ya(tmp0_desc, 1, IntSerializer_getInstance(), value.kf_1);
    tmp1_output.na(tmp0_desc);
  };
  $serializer_4.prototype.ad = function (encoder, value) {
    return this.if(encoder, value instanceof PagePagination ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_4();
    return $serializer_instance_2;
  }
  function PagePagination_init_$Init$(seen1, page, size, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_2().hf_1);
    }
    $this.jf_1 = page;
    $this.kf_1 = size;
    return $this;
  }
  function PagePagination_init_$Create$(seen1, page, size, serializationConstructorMarker) {
    return PagePagination_init_$Init$(seen1, page, size, serializationConstructorMarker, Object.create(PagePagination.prototype));
  }
  function PagePagination(page, size) {
    Companion_getInstance_6();
    this.jf_1 = page;
    this.kf_1 = size;
  }
  PagePagination.prototype.cf = function () {
    return this.jf_1;
  };
  PagePagination.prototype.f = function () {
    return this.kf_1;
  };
  Object.defineProperty(PagePagination.prototype, 'page', {
    configurable: true,
    get: function () {
      return this.cf();
    }
  });
  Object.defineProperty(PagePagination.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.f();
    }
  });
  //region block: post-declaration
  $serializer.prototype.dc = typeParametersSerializers;
  $serializer_1.prototype.dc = typeParametersSerializers;
  $serializer_3.prototype.dc = typeParametersSerializers;
  $serializer_4.prototype.dc = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$error = $f2$dsl$cqrs.error || ($f2$dsl$cqrs.error = {});
    $f2$dsl$cqrs$error.F2Error = F2Error;
    $f2$dsl$cqrs$error.F2Error.F2Error_init_$Create$ = F2Error_init_$Create$_0;
    Object.defineProperty($f2$dsl$cqrs$error.F2Error, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    Object.defineProperty($f2$dsl$cqrs$error.F2Error, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$exception = $f2$dsl$cqrs.exception || ($f2$dsl$cqrs.exception = {});
    $f2$dsl$cqrs$exception.F2Exception = F2Exception;
    Object.defineProperty($f2$dsl$cqrs$exception.F2Exception, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.Page = Page;
    $f2$dsl$cqrs$page.Page.Page_init_$Create$ = Page_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.Page, 'Companion', {
      configurable: true,
      get: Companion_getInstance_1
    });
    $f2$dsl$cqrs$page.Page.$serializer = $serializer_0;
    $f2$dsl$cqrs$page.Page.$serializer.$serializer_init_$Create$ = $serializer_init_$Create$;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.PageQuery = PageQuery;
    $f2$dsl$cqrs$page.PageQuery.PageQuery_init_$Create$ = PageQuery_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.PageQuery, 'Companion', {
      configurable: true,
      get: Companion_getInstance_2
    });
    Object.defineProperty($f2$dsl$cqrs$page.PageQuery, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_0
    });
    $f2$dsl$cqrs$page.PageQueryResult = PageQueryResult;
    $f2$dsl$cqrs$page.PageQueryResult.PageQueryResult_init_$Create$ = PageQueryResult_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.PageQueryResult, 'Companion', {
      configurable: true,
      get: Companion_getInstance_3
    });
    $f2$dsl$cqrs$page.PageQueryResult.$serializer = $serializer_2;
    $f2$dsl$cqrs$page.PageQueryResult.$serializer.$serializer_init_$Create$ = $serializer_init_$Create$_0;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.OffsetPagination = OffsetPagination;
    $f2$dsl$cqrs$page.OffsetPagination.OffsetPagination_init_$Create$ = OffsetPagination_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.OffsetPagination, 'Companion', {
      configurable: true,
      get: Companion_getInstance_5
    });
    Object.defineProperty($f2$dsl$cqrs$page.OffsetPagination, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_1
    });
    $f2$dsl$cqrs$page.PagePagination = PagePagination;
    $f2$dsl$cqrs$page.PagePagination.PagePagination_init_$Create$ = PagePagination_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.PagePagination, 'Companion', {
      configurable: true,
      get: Companion_getInstance_6
    });
    Object.defineProperty($f2$dsl$cqrs$page.PagePagination, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_2
    });
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Command;
  _.$_$.b = Event;
  _.$_$.c = Query;
  //endregion
  return _;
}));

//# sourceMappingURL=f2-f2-dsl-cqrs.js.map

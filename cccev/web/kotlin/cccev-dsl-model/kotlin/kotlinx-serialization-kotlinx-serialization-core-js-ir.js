(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.a1;
  var setMetadataFor = kotlin_kotlin.$_$.d1;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.h;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.i;
  var IllegalArgumentException = kotlin_kotlin.$_$.g1;
  var captureStack = kotlin_kotlin.$_$.t;
  var classMeta = kotlin_kotlin.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.h1;
  var isInterface = kotlin_kotlin.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.l;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.i1;
  var getStringHashCode = kotlin_kotlin.$_$.y;
  var objectMeta = kotlin_kotlin.$_$.c1;
  var equals = kotlin_kotlin.$_$.v;
  var hashCode = kotlin_kotlin.$_$.z;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.g;
  var copyToArray = kotlin_kotlin.$_$.o;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.f;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d;
  var arrayIterator = kotlin_kotlin.$_$.r;
  var fillArrayVal = kotlin_kotlin.$_$.w;
  var booleanArray = kotlin_kotlin.$_$.s;
  var emptyMap = kotlin_kotlin.$_$.p;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.b;
  var lazy = kotlin_kotlin.$_$.j1;
  var contentEquals = kotlin_kotlin.$_$.m;
  var until = kotlin_kotlin.$_$.e1;
  var joinToString$default = kotlin_kotlin.$_$.c;
  var contentHashCode = kotlin_kotlin.$_$.n;
  var KProperty1 = kotlin_kotlin.$_$.f1;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.j;
  var get_indices = kotlin_kotlin.$_$.q;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  function get_isNullable() {
    return false;
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(elementDescriptors$1$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialKind, 'SerialKind', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind, undefined, undefined, undefined, []);
  function decodeSequentially() {
    return false;
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, undefined, undefined, 0, undefined, []);
  //endregion
  function KSerializer() {
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.f() === 1 ? "Field '" + missingFields.j2(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.n6_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.m6().o6()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.v6_1 = $this_elementDescriptors;
    this.u6_1 = $this_elementDescriptors.r6();
  }
  elementDescriptors$1$1.prototype.c = function () {
    return this.u6_1 > 0;
  };
  elementDescriptors$1$1.prototype.d = function () {
    var tmp = this.v6_1.r6();
    var tmp0_this = this;
    var tmp1 = tmp0_this.u6_1;
    tmp0_this.u6_1 = tmp1 - 1 | 0;
    return this.v6_1.t6(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.w6_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.b = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.w6_1);
    return tmp$ret$0;
  };
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).d4());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function CompositeDecoder() {
  }
  function CompositeEncoder() {
  }
  function CachedNames() {
  }
  function NullableSerializer(serializer) {
    this.e7_1 = serializer;
    this.f7_1 = new SerialDescriptorForNullable(this.e7_1.m6());
  }
  NullableSerializer.prototype.m6 = function () {
    return this.f7_1;
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.e7_1, other.e7_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.e7_1);
  };
  function SerialDescriptorForNullable(original) {
    this.g7_1 = original;
    this.h7_1 = this.g7_1.p6() + '?';
    this.i7_1 = cachedSerialNames(this.g7_1);
  }
  SerialDescriptorForNullable.prototype.r6 = function () {
    return this.g7_1.r6();
  };
  SerialDescriptorForNullable.prototype.q6 = function () {
    return this.g7_1.q6();
  };
  SerialDescriptorForNullable.prototype.t6 = function (index) {
    return this.g7_1.t6(index);
  };
  SerialDescriptorForNullable.prototype.s6 = function (index) {
    return this.g7_1.s6(index);
  };
  SerialDescriptorForNullable.prototype.p6 = function () {
    return this.h7_1;
  };
  SerialDescriptorForNullable.prototype.d7 = function () {
    return this.i7_1;
  };
  SerialDescriptorForNullable.prototype.o6 = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.g7_1, other.g7_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.g7_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.g7_1), 31);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.d7();
    var result = HashSet_init_$Create$(_this__u8e3s4.r6());
    var inductionVariable = 0;
    var last = _this__u8e3s4.r6();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.s6(i);
        result.e2(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.h();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.s6(i);
          missingFields.e2(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.p6());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.s7_1.r();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.u7_1.r();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.n7_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.n7_1[i];
        indices.y2(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.k7_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v7();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.k7_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w7();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.c()) {
          var item = tmp0_iterator.d();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.m6();
          tmp0_mapTo.e2(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.x7());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.s6(i) + ': ' + this$0.t6(i).p6();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.j7_1 = serialName;
    this.k7_1 = generatedSerializer;
    this.l7_1 = elementsCount;
    this.m7_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.l7_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.n7_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.l7_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.o7_1 = tmp$ret$2;
    this.p7_1 = null;
    this.q7_1 = booleanArray(this.l7_1);
    this.r7_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.s7_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.t7_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.u7_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.p6 = function () {
    return this.j7_1;
  };
  PluginGeneratedSerialDescriptor.prototype.r6 = function () {
    return this.l7_1;
  };
  PluginGeneratedSerialDescriptor.prototype.q6 = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.d7 = function () {
    return this.r7_1.c1();
  };
  PluginGeneratedSerialDescriptor.prototype.x7 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.t7_1.r();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.y7 = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.m7_1 = tmp0_this.m7_1 + 1 | 0;
    this.n7_1[tmp0_this.m7_1] = name;
    this.q7_1[this.m7_1] = isOptional;
    this.o7_1[this.m7_1] = null;
    if (this.m7_1 === (this.l7_1 - 1 | 0)) {
      this.r7_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.t6 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).m6();
  };
  PluginGeneratedSerialDescriptor.prototype.s6 = function (index) {
    return getChecked(this.n7_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.p6() === other.p6())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.x7(), tmp0__anonymous__q1qw7t.x7());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.r6() === other.r6())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.r6();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.t6(index).p6() === other.t6(index).p6())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.t6(index).q6(), other.t6(index).q6())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.l7_1);
    var tmp_0 = this.p6() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.p6());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.b();
    while (tmp0_iterator.c()) {
      var element = tmp0_iterator.d();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.p6();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.b();
    while (tmp0_iterator_0.c()) {
      var element_0 = tmp0_iterator_0.d();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.q6();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.x7();
    }, null);
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.z7_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.m6 = function () {
    return this.z7_1;
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.a8_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.m6 = function () {
    return this.a8_1;
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.b8_1 = serialName;
    this.c8_1 = kind;
  }
  PrimitiveSerialDescriptor.prototype.p6 = function () {
    return this.b8_1;
  };
  PrimitiveSerialDescriptor.prototype.q6 = function () {
    return this.c8_1;
  };
  PrimitiveSerialDescriptor.prototype.r6 = function () {
    return 0;
  };
  PrimitiveSerialDescriptor.prototype.s6 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.t6 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.b8_1 + ')';
  };
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  PluginGeneratedSerialDescriptor.prototype.o6 = get_isNullable;
  PrimitiveSerialDescriptor.prototype.o6 = get_isNullable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UnknownFieldException_init_$Create$;
  _.$_$.b = IntSerializer_getInstance;
  _.$_$.c = StringSerializer_getInstance;
  _.$_$.d = get_nullable;
  _.$_$.e = typeParametersSerializers;
  _.$_$.f = GeneratedSerializer;
  _.$_$.g = PluginGeneratedSerialDescriptor;
  _.$_$.h = throwMissingFieldException;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map

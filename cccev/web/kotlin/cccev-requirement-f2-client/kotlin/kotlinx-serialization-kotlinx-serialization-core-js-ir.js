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
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var asList = kotlin_kotlin.$_$.y5;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.x4;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var emptyList = kotlin_kotlin.$_$.r6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.zd;
  var classMeta = kotlin_kotlin.$_$.k9;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p9;
  var distinct = kotlin_kotlin.$_$.o6;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var Entry = kotlin_kotlin.$_$.p5;
  var isInterface = kotlin_kotlin.$_$.ba;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var zip = kotlin_kotlin.$_$.i8;
  var toMap = kotlin_kotlin.$_$.c8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toString = kotlin_kotlin.$_$.qa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var mapCapacity = kotlin_kotlin.$_$.j7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var Map = kotlin_kotlin.$_$.q5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var captureStack = kotlin_kotlin.$_$.e9;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.d2;
  var IllegalArgumentException = kotlin_kotlin.$_$.vc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z;
  var KClass = kotlin_kotlin.$_$.cb;
  var Triple = kotlin_kotlin.$_$.fd;
  var getKClass = kotlin_kotlin.$_$.f;
  var Pair = kotlin_kotlin.$_$.ad;
  var LinkedHashMap = kotlin_kotlin.$_$.m5;
  var MutableMap = kotlin_kotlin.$_$.t5;
  var HashMap = kotlin_kotlin.$_$.k5;
  var LinkedHashSet = kotlin_kotlin.$_$.n5;
  var MutableSet = kotlin_kotlin.$_$.u5;
  var Set = kotlin_kotlin.$_$.v5;
  var HashSet = kotlin_kotlin.$_$.l5;
  var ArrayList = kotlin_kotlin.$_$.i5;
  var MutableList = kotlin_kotlin.$_$.r5;
  var List = kotlin_kotlin.$_$.o5;
  var Collection = kotlin_kotlin.$_$.j5;
  var copyToArray = kotlin_kotlin.$_$.n6;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.c3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.e3;
  var isObject = kotlin_kotlin.$_$.da;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d3;
  var Result = kotlin_kotlin.$_$.bd;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var equals = kotlin_kotlin.$_$.m9;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var isBlank = kotlin_kotlin.$_$.mb;
  var toList = kotlin_kotlin.$_$.b8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var toHashSet = kotlin_kotlin.$_$.y7;
  var toBooleanArray = kotlin_kotlin.$_$.x7;
  var withIndex = kotlin_kotlin.$_$.h8;
  var to = kotlin_kotlin.$_$.ge;
  var lazy_0 = kotlin_kotlin.$_$.ae;
  var contentEquals = kotlin_kotlin.$_$.a6;
  var until = kotlin_kotlin.$_$.bb;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var objectMeta = kotlin_kotlin.$_$.la;
  var Long = kotlin_kotlin.$_$.xc;
  var Char = kotlin_kotlin.$_$.oc;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.s2;
  var Duration = kotlin_kotlin.$_$.nc;
  var Companion_getInstance = kotlin_kotlin.$_$.z4;
  var toIntOrNull = kotlin_kotlin.$_$.bc;
  var hashCode = kotlin_kotlin.$_$.r9;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.b1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.l1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.k1;
  var isArray = kotlin_kotlin.$_$.t9;
  var arrayIterator = kotlin_kotlin.$_$.c9;
  var step = kotlin_kotlin.$_$.ab;
  var getValue = kotlin_kotlin.$_$.z6;
  var longArray = kotlin_kotlin.$_$.ha;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b5;
  var get_lastIndex = kotlin_kotlin.$_$.c7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.sd;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.f1;
  var KTypeParameter = kotlin_kotlin.$_$.fb;
  var fillArrayVal = kotlin_kotlin.$_$.o9;
  var booleanArray = kotlin_kotlin.$_$.d9;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var contentHashCode = kotlin_kotlin.$_$.d6;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.a5;
  var isCharArray = kotlin_kotlin.$_$.w9;
  var charArray = kotlin_kotlin.$_$.g9;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.t4;
  var isDoubleArray = kotlin_kotlin.$_$.y9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.u4;
  var isFloatArray = kotlin_kotlin.$_$.z9;
  var isLongArray = kotlin_kotlin.$_$.ca;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.e4;
  var ULongArray = kotlin_kotlin.$_$.kd;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.a4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.c4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var isIntArray = kotlin_kotlin.$_$.aa;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.e5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.v3;
  var UIntArray = kotlin_kotlin.$_$.id;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.r3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.o3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.t3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.p3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.w4;
  var isShortArray = kotlin_kotlin.$_$.ea;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.g5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.n4;
  var UShortArray = kotlin_kotlin.$_$.md;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.j4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.g4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.l4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.h4;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.s4;
  var isByteArray = kotlin_kotlin.$_$.v9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.d5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.m3;
  var UByteArray = kotlin_kotlin.$_$.gd;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.j3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.f3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.k3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.g3;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.r4;
  var isBooleanArray = kotlin_kotlin.$_$.u9;
  var coerceAtLeast = kotlin_kotlin.$_$.ua;
  var copyOf = kotlin_kotlin.$_$.h6;
  var copyOf_0 = kotlin_kotlin.$_$.j6;
  var copyOf_1 = kotlin_kotlin.$_$.k6;
  var copyOf_2 = kotlin_kotlin.$_$.f6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.f4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.b4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.d4;
  var copyOf_3 = kotlin_kotlin.$_$.m6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.w3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.s3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.u3;
  var copyOf_4 = kotlin_kotlin.$_$.e6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.o4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.k4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.m4;
  var copyOf_5 = kotlin_kotlin.$_$.i6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.n3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.i3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.l3;
  var copyOf_6 = kotlin_kotlin.$_$.g6;
  var Unit = kotlin_kotlin.$_$.od;
  var trimIndent = kotlin_kotlin.$_$.lc;
  var equals_0 = kotlin_kotlin.$_$.kb;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var toString_0 = kotlin_kotlin.$_$.a3;
  var titlecase = kotlin_kotlin.$_$.xb;
  var isLowerCase = kotlin_kotlin.$_$.pb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.y4;
  var ULong = kotlin_kotlin.$_$.ld;
  var UInt = kotlin_kotlin.$_$.jd;
  var UShort = kotlin_kotlin.$_$.nd;
  var UByte = kotlin_kotlin.$_$.hd;
  var mapOf = kotlin_kotlin.$_$.k7;
  var lastOrNull = kotlin_kotlin.$_$.f7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.d7;
  var get_js = kotlin_kotlin.$_$.ga;
  var findAssociatedObject = kotlin_kotlin.$_$.d;
  var get_indices = kotlin_kotlin.$_$.b7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var get_indices_0 = kotlin_kotlin.$_$.a7;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.c5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var createFailure = kotlin_kotlin.$_$.td;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, undefined, [SerializationStrategy, DeserializationStrategy], undefined, undefined, []);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer, undefined, undefined, undefined, []);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BinaryFormat, 'BinaryFormat', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(elementDescriptors$1$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_0, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(SerialKind, 'SerialKind', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind, undefined, undefined, undefined, []);
  function decodeSerializableValue(deserializer) {
    return deserializer.nh(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.fl(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, undefined, [Decoder, CompositeDecoder], undefined, undefined, []);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.tk(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.mh(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.lh().xi();
    if (isNullabilitySupported) {
      return this.jm(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.nl();
    } else {
      this.mm();
      this.jm(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, undefined, [Encoder, CompositeEncoder], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor, undefined, undefined, undefined, []);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(InlinePrimitiveDescriptor$1, undefined, classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder, undefined, undefined, undefined, []);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, undefined, [Decoder, CompositeDecoder], undefined, undefined, []);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder, undefined, undefined, undefined, []);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, undefined, [Entry], undefined, undefined, []);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer, undefined, undefined, undefined, []);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule, undefined, undefined, undefined, []);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  function contextual(kClass, serializer) {
    return this.zz(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, undefined, undefined, 0, undefined, []);
  setMetadataFor(createCache$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(createParametrizedCache$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.ph_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, Object.create(PolymorphicSerializer.prototype));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_1(StringCompanionObject_getInstance()).lh();
      $this$buildSerialDescriptor.zh('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.oh_1.vc() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.zh('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.th_1 = this$0.ph_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.oh_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.oh_1 = baseClass;
    this.ph_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.qh_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.ai = function () {
    return this.oh_1;
  };
  PolymorphicSerializer.prototype.lh = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.qh_1.p();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.oh_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ci(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ai());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.bi(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ai());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.lh();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.ei_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, Object.create(SealedClassSerializer.prototype));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      var tmp0_forEach = distinct($subclassSerializers);
      var tmp0_iterator = tmp0_forEach.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var d = element.lh();
        var tmp = d.ii();
        $this$buildSerialDescriptor.zh(tmp, d, null, false, 12, null);
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_1(StringCompanionObject_getInstance()).lh();
      $this$buildSerialDescriptor.zh('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Sealed<' + this$0.di_1.vc() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor$default(tmp_0, tmp_1, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers), 4, null);
      $this$buildSerialDescriptor.zh('value', elementDescriptor, null, false, 12, null);
      $this$buildSerialDescriptor.th_1 = this$0.ei_1;
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0, $subclassSerializers) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers), 4, null);
    };
  }
  function _no_name_provided__qut3iv($tmp0_groupingBy) {
    this.ji_1 = $tmp0_groupingBy;
  }
  _no_name_provided__qut3iv.prototype.ki = function () {
    return this.ji_1.g();
  };
  _no_name_provided__qut3iv.prototype.li = function (element) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    tmp$ret$0 = element.p().lh().ii();
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.prototype.mi = function (element) {
    return this.li((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.di_1 = baseClass;
    this.ei_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.fi_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this, subclassSerializers));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.di_1.vc() + ' should be marked @Serializable');
    }
    this.gi_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.aggregate' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.groupingBy' call
    var tmp0_groupingBy = this.gi_1.n();
    tmp$ret$0 = new _no_name_provided__qut3iv(tmp0_groupingBy);
    var tmp1_aggregate = tmp$ret$0;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.aggregateTo' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    var tmp2_aggregateTo = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tmp1_aggregate.ki();
    tmp$ret$2 = tmp0_iterator;
    var tmp0_iterator_0 = tmp$ret$2;
    while (tmp0_iterator_0.h()) {
      var e = tmp0_iterator_0.i();
      var key = tmp1_aggregate.mi(e);
      var accumulator = tmp2_aggregateTo.y1(key);
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = accumulator == null ? !tmp2_aggregateTo.s1(key) : false;
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var tmp0_error = "Multiple sealed subclasses of '" + this.di_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.o() + "', '" + e.o() + "'");
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      tmp$ret$3 = e;
      var tmp1_set = tmp$ret$3;
      tmp2_aggregateTo.x2(key, tmp1_set);
    }
    tmp$ret$4 = tmp2_aggregateTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp3_mapValues = tmp$ret$5;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp3_mapValues.f()));
    var tmp$ret$8;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp3_mapValues.n();
    var tmp0_iterator_1 = tmp0_associateByTo.g();
    while (tmp0_iterator_1.h()) {
      var element = tmp0_iterator_1.i();
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$6 = element.o();
      var tmp_2 = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      tmp$ret$7 = element.p().p();
      tmp1_mapValuesTo.x2(tmp_2, tmp$ret$7);
    }
    tmp$ret$8 = tmp1_mapValuesTo;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp_1.hi_1 = tmp$ret$10;
  }
  SealedClassSerializer.prototype.ai = function () {
    return this.di_1;
  };
  SealedClassSerializer.prototype.lh = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.fi_1.p();
    return tmp$ret$0;
  };
  SealedClassSerializer.prototype.bi = function (decoder, klassName) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    var tmp0_get = this.hi_1;
    tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).y1(klassName);
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? AbstractPolymorphicSerializer.prototype.bi.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  SealedClassSerializer.prototype.ci = function (encoder, value) {
    var tmp0_elvis_lhs = this.gi_1.y1(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? AbstractPolymorphicSerializer.prototype.ci.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, SerializationStrategy) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.lh();
    }, null);
  }
  function StringFormat() {
  }
  function BinaryFormat() {
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
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
    MissingFieldException.call($this, missingFields, missingFields.f() === 1 ? "Field '" + missingFields.j(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.si_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        tmp$ret$0 = serializer(_this__u8e3s4, item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.g();
      while (tmp0_iterator_0.h()) {
        var item_0 = tmp0_iterator_0.i();
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$3 = tmp_0;
        tmp0_mapTo_0.a(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, types, serializers) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, types, serializers);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, typeArguments, serializers) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.j(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.j(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.j(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.j(0), serializers.j(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.j(0), serializers.j(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.j(0), serializers.j(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.j(0), serializers.j(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.j(0), serializers.j(1), serializers.j(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = typeArguments.j(0).hd();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.j(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.jd();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.id();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.p5_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.k()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      var cachedResult = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (failOnMissingTypeArgSerializer) {
        var tmp$ret$5;
        // Inline function 'kotlin.Result.getOrNull' call
        var tmp_1;
        if (_Result___get_isFailure__impl__jpiriv(cachedResult)) {
          tmp_1 = null;
        } else {
          var tmp_2 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        }
        tmp$ret$5 = tmp_1;
        tmp_0 = tmp$ret$5;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(cachedResult);
        var tmp_3;
        if (exception == null) {
          var tmp_4 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        } else {
          return null;
        }
        tmp$ret$6 = tmp_3;
        tmp_0 = tmp$ret$6;
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    var tmp0_safe_receiver = cachedSerializer;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var tmp_5;
    if (typeArguments.k()) {
      tmp_5 = _this__u8e3s4.ui(rootClass, null, 2, null);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp1_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, typeArguments, serializers);
      tmp_5 = tmp2_elvis_lhs == null ? _this__u8e3s4.ti(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_5;
    var tmp3_safe_receiver = contextualSerializer;
    var tmp_7;
    if (tmp3_safe_receiver == null) {
      tmp_7 = null;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$8 = (!(tmp3_safe_receiver == null) ? isInterface(tmp3_safe_receiver, KSerializer) : false) ? tmp3_safe_receiver : THROW_CCE();
      tmp_7 = tmp$ret$8;
    }
    var tmp4_safe_receiver = tmp_7;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_SERIALIZERS_CACHE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    init_properties_SerializersCache_kt_1gq1i1();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().vi(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$0 = (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, KSerializer) : false) ? tmp0_safe_receiver : THROW_CCE();
        tmp_0 = tmp$ret$0;
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().vi(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    init_properties_SerializersCache_kt_1gq1i1();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().wi(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().wi(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    init_properties_SerializersCache_kt_1gq1i1();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    init_properties_SerializersCache_kt_1gq1i1();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    init_properties_SerializersCache_kt_1gq1i1();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, types, serializers);
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    init_properties_SerializersCache_kt_1gq1i1();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, types, serializers);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function init_properties_SerializersCache_kt_1gq1i1() {
    if (properties_initialized_SerializersCache_kt_q8kf25) {
    } else {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.lh().xi()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.yi_1 = original;
    this.zi_1 = kClass;
    this.aj_1 = this.yi_1.ii() + '<' + this.zi_1.vc() + '>';
  }
  ContextDescriptor.prototype.bj = function () {
    return this.yi_1.bj();
  };
  ContextDescriptor.prototype.cj = function () {
    return this.yi_1.cj();
  };
  ContextDescriptor.prototype.dj = function () {
    return this.yi_1.dj();
  };
  ContextDescriptor.prototype.xi = function () {
    return this.yi_1.xi();
  };
  ContextDescriptor.prototype.ej = function () {
    return this.yi_1.ej();
  };
  ContextDescriptor.prototype.fj = function (index) {
    return this.yi_1.fj(index);
  };
  ContextDescriptor.prototype.gj = function (index) {
    return this.yi_1.gj(index);
  };
  ContextDescriptor.prototype.hj = function (name) {
    return this.yi_1.hj(name);
  };
  ContextDescriptor.prototype.ij = function (index) {
    return this.yi_1.ij(index);
  };
  ContextDescriptor.prototype.jj = function (index) {
    return this.yi_1.jj(index);
  };
  ContextDescriptor.prototype.ii = function () {
    return this.aj_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.yi_1, another.yi_1) ? another.zi_1.equals(this.zi_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.zi_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.aj_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.zi_1 + ', original: ' + this.yi_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.ui(tmp0_safe_receiver, null, 2, null);
      tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.lh();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.zi_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.kj_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.oj_1 = $this_elementDescriptors;
    this.nj_1 = $this_elementDescriptors.cj();
  }
  elementDescriptors$1$1.prototype.h = function () {
    return this.nj_1 > 0;
  };
  elementDescriptors$1$1.prototype.i = function () {
    var tmp = this.oj_1.cj();
    var tmp0_this = this;
    var tmp1 = tmp0_this.nj_1;
    tmp0_this.nj_1 = tmp1 - 1 | 0;
    return this.oj_1.gj(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.pj_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv_0.prototype.g = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.pj_1);
    return tmp$ret$0;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.uh_1.f(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.rh_1 = serialName;
    this.sh_1 = false;
    this.th_1 = emptyList();
    this.uh_1 = ArrayList_init_$Create$_0();
    this.vh_1 = HashSet_init_$Create$();
    this.wh_1 = ArrayList_init_$Create$_0();
    this.xh_1 = ArrayList_init_$Create$_0();
    this.yh_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.qj = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.vh_1.a(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.uh_1;
    tmp1_plusAssign.a(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.wh_1;
    tmp2_plusAssign.a(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.xh_1;
    tmp3_plusAssign.a(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.yh_1;
    tmp4_plusAssign.a(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.zh = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.qj(elementName, descriptor, annotations, isOptional);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.uh_1.f(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda;
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.ck_1.p();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.bk_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.ij(it) + ': ' + this$0.gj(it).ii();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.rj_1 = serialName;
    this.sj_1 = kind;
    this.tj_1 = elementsCount;
    this.uj_1 = builder.th_1;
    this.vj_1 = toHashSet(builder.uh_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.uh_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.wj_1 = tmp$ret$0;
    this.xj_1 = compactArray(builder.wh_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.xh_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.yj_1 = tmp$ret$1;
    this.zj_1 = toBooleanArray(builder.yh_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.wj_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.l2_1, item.k2_1);
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.ak_1 = toMap(tmp$ret$4);
    this.bk_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ck_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.ii = function () {
    return this.rj_1;
  };
  SerialDescriptorImpl.prototype.ej = function () {
    return this.sj_1;
  };
  SerialDescriptorImpl.prototype.cj = function () {
    return this.tj_1;
  };
  SerialDescriptorImpl.prototype.bj = function () {
    return this.uj_1;
  };
  SerialDescriptorImpl.prototype.dk = function () {
    return this.vj_1;
  };
  SerialDescriptorImpl.prototype.ij = function (index) {
    return getChecked(this.wj_1, index);
  };
  SerialDescriptorImpl.prototype.hj = function (name) {
    var tmp0_elvis_lhs = this.ak_1.y1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.fj = function (index) {
    return getChecked(this.yj_1, index);
  };
  SerialDescriptorImpl.prototype.gj = function (index) {
    return getChecked(this.xj_1, index);
  };
  SerialDescriptorImpl.prototype.jj = function (index) {
    return getChecked_0(this.zj_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ii() === other.ii())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.bk_1, tmp0__anonymous__q1qw7t.bk_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.cj() === other.cj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.cj();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gj(index).ii() === other.gj(index).ii())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gj(index).ej(), other.gj(index).ej())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.tj_1);
    var tmp_0 = this.rj_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).vc());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
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
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
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
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.ek = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.fk = function () {
    return true;
  };
  AbstractDecoder.prototype.gk = function () {
    return null;
  };
  AbstractDecoder.prototype.hk = function () {
    var tmp = this.ek();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.ik = function () {
    var tmp = this.ek();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.jk = function () {
    var tmp = this.ek();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.kk = function () {
    var tmp = this.ek();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.lk = function () {
    var tmp = this.ek();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.mk = function () {
    var tmp = this.ek();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.nk = function () {
    var tmp = this.ek();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.ok = function () {
    var tmp = this.ek();
    return tmp instanceof Char ? tmp.q5_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.pk = function () {
    var tmp = this.ek();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.qk = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.rk = function (deserializer, previousValue) {
    return this.sk(deserializer);
  };
  AbstractDecoder.prototype.tk = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.uk = function (descriptor) {
  };
  AbstractDecoder.prototype.vk = function (descriptor, index) {
    return this.hk();
  };
  AbstractDecoder.prototype.wk = function (descriptor, index) {
    return this.ik();
  };
  AbstractDecoder.prototype.xk = function (descriptor, index) {
    return this.jk();
  };
  AbstractDecoder.prototype.yk = function (descriptor, index) {
    return this.kk();
  };
  AbstractDecoder.prototype.zk = function (descriptor, index) {
    return this.lk();
  };
  AbstractDecoder.prototype.al = function (descriptor, index) {
    return this.mk();
  };
  AbstractDecoder.prototype.bl = function (descriptor, index) {
    return this.nk();
  };
  AbstractDecoder.prototype.cl = function (descriptor, index) {
    return this.ok();
  };
  AbstractDecoder.prototype.dl = function (descriptor, index) {
    return this.pk();
  };
  AbstractDecoder.prototype.el = function (descriptor, index) {
    return this.qk(descriptor.gj(index));
  };
  AbstractDecoder.prototype.fl = function (descriptor, index, deserializer, previousValue) {
    return this.rk(deserializer, previousValue);
  };
  AbstractDecoder.prototype.hl = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.lh().xi();
    return (isNullabilitySupported ? true : this.fk()) ? this.rk(deserializer, previousValue) : this.gk();
  };
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.tk = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.uk = function (descriptor) {
  };
  AbstractEncoder.prototype.ll = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.ml = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.nl = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.ol = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.pl = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.ql = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.rl = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.sl = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.tl = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.ul = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.vl = function (value) {
    return this.ml(new Char(value));
  };
  AbstractEncoder.prototype.wl = function (value) {
    return this.ml(value);
  };
  AbstractEncoder.prototype.xl = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.yl = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.ol(value);
    }
  };
  AbstractEncoder.prototype.zl = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.pl(value);
    }
  };
  AbstractEncoder.prototype.am = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.ql(value);
    }
  };
  AbstractEncoder.prototype.bm = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.rl(value);
    }
  };
  AbstractEncoder.prototype.cm = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.sl(value);
    }
  };
  AbstractEncoder.prototype.dm = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.tl(value);
    }
  };
  AbstractEncoder.prototype.em = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.ul(value);
    }
  };
  AbstractEncoder.prototype.fm = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.vl(value);
    }
  };
  AbstractEncoder.prototype.gm = function (descriptor, index, value) {
    if (this.ll(descriptor, index)) {
      this.wl(value);
    }
  };
  AbstractEncoder.prototype.hm = function (descriptor, index) {
    return this.ll(descriptor, index) ? this.xl(descriptor.gj(index)) : NoOpEncoder_getInstance();
  };
  AbstractEncoder.prototype.im = function (descriptor, index, serializer, value) {
    if (this.ll(descriptor, index)) {
      this.jm(serializer, value);
    }
  };
  AbstractEncoder.prototype.km = function (descriptor, index, serializer, value) {
    if (this.ll(descriptor, index)) {
      this.lm(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.pm_1 = -1;
    this.qm_1 = -3;
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.dl($this.lh(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.lh();
    return compositeDecoder.gl(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.mh = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.lh();
    var composite = encoder.tk(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.gm(this.lh(), 0, actualSerializer.lh().ii());
    var tmp = this.lh();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.im(tmp, 1, tmp$ret$0, value);
    composite.uk(tmp0_encodeStructure);
  };
  AbstractPolymorphicSerializer.prototype.nh = function (decoder) {
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.lh();
    var composite = decoder.tk(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.il()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.jl(this.lh());
        Companion_getInstance_7();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.dl(this.lh(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  var tmp$ret$1;
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                  var message = tmp$ret$1;
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              var tmp = this.lh();
              value = composite.gl(tmp, index, serializer, null, 8, null);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp_0 = tmp$ret$4;
      tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.uk(tmp0_decodeStructure);
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.bi = function (decoder, klassName) {
    return decoder.pi().rm(this.ai(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.ci = function (encoder, value) {
    return encoder.pi().sm(this.ai(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.vc();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.vc() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.tm_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  DurationSerializer.prototype.lh = function () {
    return this.tm_1;
  };
  DurationSerializer.prototype.um = function (encoder, value) {
    encoder.wl(Duration__toIsoString_impl_9h6wsm(value));
  };
  DurationSerializer.prototype.mh = function (encoder, value) {
    return this.um(encoder, value instanceof Duration ? value.n6_1 : THROW_CCE());
  };
  DurationSerializer.prototype.vm = function (decoder) {
    return Companion_getInstance().l6(decoder.pk());
  };
  DurationSerializer.prototype.nh = function (decoder) {
    return new Duration(this.vm(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.ii = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.ii = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.ii = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.ii = function () {
    return 'kotlin.Array';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.mn_1 = primitive.ii() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.ii = function () {
    return this.mn_1;
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.ym_1 = elementDescriptor;
    this.zm_1 = 1;
  }
  ListLikeDescriptor.prototype.ej = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.cj = function () {
    return this.zm_1;
  };
  ListLikeDescriptor.prototype.ij = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.hj = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.jj = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ii() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  ListLikeDescriptor.prototype.fj = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ii() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.gj = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ii() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ym_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ym_1, other.ym_1) ? this.ii() === other.ii() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.ym_1), 31) + getStringHashCode(this.ii()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.ii() + '(' + this.ym_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.en_1 = serialName;
    this.fn_1 = keyDescriptor;
    this.gn_1 = valueDescriptor;
    this.hn_1 = 2;
  }
  MapLikeDescriptor.prototype.ii = function () {
    return this.en_1;
  };
  MapLikeDescriptor.prototype.ej = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.cj = function () {
    return this.hn_1;
  };
  MapLikeDescriptor.prototype.ij = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.hj = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.jj = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ii() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  MapLikeDescriptor.prototype.fj = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ii() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.gj = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ii() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.fn_1;
        break;
      case 1:
        tmp = this.gn_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.ii() === other.ii()))
      return false;
    if (!equals(this.fn_1, other.fn_1))
      return false;
    if (!equals(this.gn_1, other.gn_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.ii());
    result = imul(31, result) + hashCode(this.fn_1) | 0;
    result = imul(31, result) + hashCode(this.gn_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.ii() + '(' + this.fn_1 + ', ' + this.gn_1 + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.on_1 = new ArrayListClassDesc(element.lh());
  }
  ArrayListSerializer.prototype.lh = function () {
    return this.on_1;
  };
  ArrayListSerializer.prototype.pn = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.qn = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  ArrayListSerializer.prototype.rn = function (_this__u8e3s4) {
    return this.qn(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.sn = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.tn = function (_this__u8e3s4) {
    return this.sn(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.un = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.un((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.wn = function (_this__u8e3s4, size) {
    return _this__u8e3s4.wa(size);
  };
  ArrayListSerializer.prototype.xn = function (_this__u8e3s4, size) {
    return this.wn(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.yn = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ArrayListSerializer.prototype.zn = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.yn(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ko_1 = new HashSetClassDesc(eSerializer.lh());
  }
  HashSetSerializer.prototype.lh = function () {
    return this.ko_1;
  };
  HashSetSerializer.prototype.pn = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.lo = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  HashSetSerializer.prototype.rn = function (_this__u8e3s4) {
    return this.lo(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.mo = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.tn = function (_this__u8e3s4) {
    return this.mo(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.no = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.no((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.oo = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.xn = function (_this__u8e3s4, size) {
    return this.oo(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.po = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  HashSetSerializer.prototype.zn = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.po(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ro_1 = new LinkedHashSetClassDesc(eSerializer.lh());
  }
  LinkedHashSetSerializer.prototype.lh = function () {
    return this.ro_1;
  };
  LinkedHashSetSerializer.prototype.pn = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.so = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  LinkedHashSetSerializer.prototype.rn = function (_this__u8e3s4) {
    return this.so(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.to = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.tn = function (_this__u8e3s4) {
    return this.to(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.no = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.no((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.uo = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.xn = function (_this__u8e3s4, size) {
    return this.uo(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.vo = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  LinkedHashSetSerializer.prototype.zn = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.vo(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.yo_1 = new HashMapClassDesc(kSerializer.lh(), vSerializer.lh());
  }
  HashMapSerializer.prototype.lh = function () {
    return this.yo_1;
  };
  HashMapSerializer.prototype.zo = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  HashMapSerializer.prototype.ap = function (_this__u8e3s4) {
    return this.zo((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.bp = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.n().g();
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.cp = function (_this__u8e3s4) {
    return this.bp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.pn = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.dp = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.f(), 2);
  };
  HashMapSerializer.prototype.rn = function (_this__u8e3s4) {
    return this.dp(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.ep = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.tn = function (_this__u8e3s4) {
    return this.ep(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.fp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.fp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.gp = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.xn = function (_this__u8e3s4, size) {
    return this.gp(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.lp_1 = new LinkedHashMapClassDesc(kSerializer.lh(), vSerializer.lh());
  }
  LinkedHashMapSerializer.prototype.lh = function () {
    return this.lp_1;
  };
  LinkedHashMapSerializer.prototype.zo = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  LinkedHashMapSerializer.prototype.ap = function (_this__u8e3s4) {
    return this.zo((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.bp = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.n().g();
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.cp = function (_this__u8e3s4) {
    return this.bp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.pn = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.mp = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.f(), 2);
  };
  LinkedHashMapSerializer.prototype.rn = function (_this__u8e3s4) {
    return this.mp(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.np = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.tn = function (_this__u8e3s4) {
    return this.np(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.fp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.fp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.op = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.xn = function (_this__u8e3s4, size) {
    return this.op(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.qp_1 = kClass;
    this.rp_1 = new ArrayClassDesc(eSerializer.lh());
  }
  ReferenceArraySerializer.prototype.lh = function () {
    return this.rp_1;
  };
  ReferenceArraySerializer.prototype.sp = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.ap = function (_this__u8e3s4) {
    return this.sp((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.tp = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.cp = function (_this__u8e3s4) {
    return this.tp((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.pn = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.up = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  ReferenceArraySerializer.prototype.rn = function (_this__u8e3s4) {
    return this.up(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.vp = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.qp_1);
  };
  ReferenceArraySerializer.prototype.tn = function (_this__u8e3s4) {
    return this.vp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.wp = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.vn = function (_this__u8e3s4) {
    return this.wp((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.xp = function (_this__u8e3s4, size) {
    return _this__u8e3s4.wa(size);
  };
  ReferenceArraySerializer.prototype.xn = function (_this__u8e3s4, size) {
    return this.xp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.yp = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ReferenceArraySerializer.prototype.zn = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.yp(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.bo = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  CollectionSerializer.prototype.ap = function (_this__u8e3s4) {
    return this.bo((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.co = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  CollectionSerializer.prototype.cp = function (_this__u8e3s4) {
    return this.co((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.hp_1 = keySerializer;
    this.ip_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.fo = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.r_1;
    var last = progression.s_1;
    var step_0 = progression.t_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.go(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.go = function (decoder, index, builder, checkIndex) {
    var tmp = this.lh();
    var key = decoder.gl(tmp, index, this.hp_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.jl(this.lh());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.s1(key)) {
      var tmp_3 = this.ip_1.lh().ej();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.fl(this.lh(), vIndex, this.ip_1, getValue(builder, key));
    } else {
      var tmp_4 = this.lh();
      tmp_1 = decoder.gl(tmp_4, vIndex, this.ip_1, null, 8, null);
    }
    var value = tmp_1;
    // Inline function 'kotlin.collections.set' call
    builder.x2(key, value);
  };
  MapLikeSerializer.prototype.eo = function (encoder, value) {
    var size = this.ap(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.lh();
    var composite = encoder.nm(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.cp(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.o();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.p();
      var v = tmp$ret$2;
      var tmp = this.lh();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.im(tmp, tmp0, this.hp_1, k);
      var tmp_0 = this.lh();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.im(tmp_0, tmp1, this.ip_1, v);
    }
    composite.uk(tmp0_encodeCollection);
  };
  MapLikeSerializer.prototype.mh = function (encoder, value) {
    return this.eo(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.do_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.eo = function (encoder, value) {
    var size = this.ap(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.lh();
    var composite = encoder.nm(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.cp(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.im(this.lh(), index, this.do_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.uk(tmp0_encodeCollection);
  };
  CollectionLikeSerializer.prototype.mh = function (encoder, value) {
    return this.eo(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.fo = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.go(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.go = function (decoder, index, builder, checkIndex) {
    var tmp = this.lh();
    this.zn(builder, index, decoder.gl(tmp, index, this.do_1, null, 8, null));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.kl($this.lh());
    $this.xn(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.io = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.vn(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.pn() : tmp1_elvis_lhs;
    var startIndex = this.rn(builder);
    var compositeDecoder = decoder.tk(this.lh());
    if (compositeDecoder.il()) {
      this.fo(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.jl(this.lh());
        Companion_getInstance_7();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.ho(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.uk(this.lh());
    return this.tn(builder);
  };
  AbstractCollectionSerializer.prototype.nh = function (decoder) {
    return this.io(decoder, null);
  };
  AbstractCollectionSerializer.prototype.ho = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    var tmp;
    if ($handler == null) {
      this.go(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.aq_1 = new PrimitiveArrayDescriptor(primitiveSerializer.lh());
  }
  PrimitiveArraySerializer.prototype.lh = function () {
    return this.aq_1;
  };
  PrimitiveArraySerializer.prototype.rn = function (_this__u8e3s4) {
    return _this__u8e3s4.bq();
  };
  PrimitiveArraySerializer.prototype.tn = function (_this__u8e3s4) {
    return _this__u8e3s4.cq();
  };
  PrimitiveArraySerializer.prototype.xn = function (_this__u8e3s4, size) {
    return _this__u8e3s4.wa(size);
  };
  PrimitiveArraySerializer.prototype.dq = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.cp = function (_this__u8e3s4) {
    return this.dq((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.zn = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.pn = function () {
    return this.vn(this.eq());
  };
  PrimitiveArraySerializer.prototype.gq = function (encoder, value) {
    var size = this.ap(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.aq_1;
    var composite = encoder.nm(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.fq(composite, value, size);
    composite.uk(tmp0_encodeCollection);
  };
  PrimitiveArraySerializer.prototype.mh = function (encoder, value) {
    return this.gq(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.eo = function (encoder, value) {
    return this.gq(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.nh = function (decoder) {
    return this.io(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.hq = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.bq() + 1 | 0;
    var tmp;
    if ($handler == null) {
      this.wa(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.iq_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).v6(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.mq_1[slot] = $this.mq_1[slot].tf((new Long(1, 0)).v6(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.mq_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.mq_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.sf());
          slotMarks = slotMarks.tf((new Long(1, 0)).v6(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.kq_1($this.jq_1, index)) {
            $this.mq_1[slot] = slotMarks;
            return index;
          }
        }
        $this.mq_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_7();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.jq_1 = descriptor;
    this.kq_1 = readIfAbsent;
    var elementsCount = this.jq_1.cj();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).v6(elementsCount);
      }
      tmp.lq_1 = tmp_0;
      this.mq_1 = Companion_getInstance_8().iq_1;
    } else {
      this.lq_1 = new Long(0, 0);
      this.mq_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.nq = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.lq_1 = this.lq_1.tf((new Long(1, 0)).v6(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.oq = function () {
    var elementsCount = this.jq_1.cj();
    while (!this.lq_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.lq_1.sf());
      this.lq_1 = this.lq_1.tf((new Long(1, 0)).v6(index));
      if (this.kq_1(this.jq_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_7();
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.br_1 = true;
  }
  InlineClassDescriptor.prototype.dj = function () {
    return this.br_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ii() === other.ii())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.br_1 ? contentEquals(this.or(), tmp0__anonymous__q1qw7t.or()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.cj() === other.cj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.cj();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gj(index).ii() === other.gj(index).ii())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gj(index).ej(), other.gj(index).ej())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.qr_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.rr = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.qr_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.lh = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.mh = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.nh = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.tr_1 = EmptySerializersModule_0();
  }
  NoOpEncoder.prototype.pi = function () {
    return this.tr_1;
  };
  NoOpEncoder.prototype.ml = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.nl = function () {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.ol = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.pl = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.ql = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.rl = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.sl = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.tl = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.ul = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.vl = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.wl = function (value) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function NullableSerializer(serializer) {
    this.ur_1 = serializer;
    this.vr_1 = new SerialDescriptorForNullable(this.ur_1.lh());
  }
  NullableSerializer.prototype.lh = function () {
    return this.vr_1;
  };
  NullableSerializer.prototype.wr = function (encoder, value) {
    if (!(value == null)) {
      encoder.mm();
      encoder.jm(this.ur_1, value);
    } else {
      encoder.nl();
    }
  };
  NullableSerializer.prototype.mh = function (encoder, value) {
    return this.wr(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.nh = function (decoder) {
    return decoder.fk() ? decoder.sk(this.ur_1) : decoder.gk();
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
    if (!equals(this.ur_1, other.ur_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.ur_1);
  };
  function SerialDescriptorForNullable(original) {
    this.kj_1 = original;
    this.lj_1 = this.kj_1.ii() + '?';
    this.mj_1 = cachedSerialNames(this.kj_1);
  }
  SerialDescriptorForNullable.prototype.bj = function () {
    return this.kj_1.bj();
  };
  SerialDescriptorForNullable.prototype.cj = function () {
    return this.kj_1.cj();
  };
  SerialDescriptorForNullable.prototype.dj = function () {
    return this.kj_1.dj();
  };
  SerialDescriptorForNullable.prototype.ej = function () {
    return this.kj_1.ej();
  };
  SerialDescriptorForNullable.prototype.fj = function (index) {
    return this.kj_1.fj(index);
  };
  SerialDescriptorForNullable.prototype.gj = function (index) {
    return this.kj_1.gj(index);
  };
  SerialDescriptorForNullable.prototype.hj = function (name) {
    return this.kj_1.hj(name);
  };
  SerialDescriptorForNullable.prototype.ij = function (index) {
    return this.kj_1.ij(index);
  };
  SerialDescriptorForNullable.prototype.jj = function (index) {
    return this.kj_1.jj(index);
  };
  SerialDescriptorForNullable.prototype.ii = function () {
    return this.lj_1;
  };
  SerialDescriptorForNullable.prototype.dk = function () {
    return this.mj_1;
  };
  SerialDescriptorForNullable.prototype.xi = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.kj_1, other.kj_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.kj_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.kj_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.th_1 = this$0.yr_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.xr_1 = objectInstance;
    this.yr_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.zr_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.lh = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_1();
    tmp$ret$0 = this.zr_1.p();
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.mh = function (encoder, value) {
    encoder.tk(this.lh()).uk(this.lh());
  };
  ObjectSerializer.prototype.nh = function (decoder) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.lh();
    var composite = decoder.tk(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.jl(this.lh());
      Companion_getInstance_7();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.uk(tmp0_decodeStructure);
    tmp$ret$1 = result;
    return this.xr_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.lh();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.dk();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.cj());
    var inductionVariable = 0;
    var last = _this__u8e3s4.cj();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.ij(i);
        result.a(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.hd();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
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
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.k();
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
  function serializerNotRegistered(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.vc() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.');
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
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.ij(i);
          missingFields.a(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ii());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.lr_1.p();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.nr_1.p();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.gr_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.gr_1[i];
        indices.x2(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.dr_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rr();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.dr_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sr();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.h()) {
          var item = tmp0_iterator.i();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.lh();
          tmp0_mapTo.a(tmp$ret$0);
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
      return hashCodeImpl(this$0, this$0.or());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.ij(i) + ': ' + this$0.gj(i).ii();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.cr_1 = serialName;
    this.dr_1 = generatedSerializer;
    this.er_1 = elementsCount;
    this.fr_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.er_1;
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
    tmp.gr_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.er_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.hr_1 = tmp$ret$2;
    this.ir_1 = null;
    this.jr_1 = booleanArray(this.er_1);
    this.kr_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.lr_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.mr_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.nr_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.ii = function () {
    return this.cr_1;
  };
  PluginGeneratedSerialDescriptor.prototype.cj = function () {
    return this.er_1;
  };
  PluginGeneratedSerialDescriptor.prototype.ej = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.bj = function () {
    var tmp0_elvis_lhs = this.ir_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.dk = function () {
    return this.kr_1.z1();
  };
  PluginGeneratedSerialDescriptor.prototype.or = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.mr_1.p();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.pr = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.fr_1 = tmp0_this.fr_1 + 1 | 0;
    this.gr_1[tmp0_this.fr_1] = name;
    this.jr_1[this.fr_1] = isOptional;
    this.hr_1[this.fr_1] = null;
    if (this.fr_1 === (this.er_1 - 1 | 0)) {
      this.kr_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.gj = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).lh();
  };
  PluginGeneratedSerialDescriptor.prototype.jj = function (index) {
    return getChecked_0(this.jr_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.fj = function (index) {
    var tmp0_elvis_lhs = getChecked(this.hr_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.ij = function (index) {
    return getChecked(this.gr_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.hj = function (name) {
    var tmp0_elvis_lhs = this.kr_1.y1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
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
      if (!(this.ii() === other.ii())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.or(), tmp0__anonymous__q1qw7t.or());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.cj() === other.cj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.cj();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gj(index).ii() === other.gj(index).ii())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gj(index).ej(), other.gj(index).ej())) {
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
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.er_1);
    var tmp_0 = this.ii() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ii());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.ii();
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
    var tmp0_iterator_0 = elementDescriptors.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.ej();
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
      return receiver.or();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
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
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_1()));
  }
  CharArraySerializer_0.prototype.ds = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.ds((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.es = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.es((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.eq = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.fs = function (decoder, index, builder, checkIndex) {
    builder.is(decoder.cl(this.aq_1, index));
  };
  CharArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.fs(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.js = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fm(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.js(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.ms = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.ms((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.ns = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.ns((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.eq = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.os = function (decoder, index, builder, checkIndex) {
    builder.rs(decoder.bl(this.aq_1, index));
  };
  DoubleArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.os(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.ss = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.em(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.ss(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.vs = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.vs((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.ws = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.ws((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.eq = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.xs = function (decoder, index, builder, checkIndex) {
    builder.at(decoder.al(this.aq_1, index));
  };
  FloatArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.xs(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.bt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.dm(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.bt(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.et = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.et((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.ft = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.ft((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.eq = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.gt = function (decoder, index, builder, checkIndex) {
    builder.jt(decoder.zk(this.aq_1, index));
  };
  LongArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.gt(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.kt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.cm(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.kt(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  ULongArraySerializer_0.prototype.nt = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  ULongArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.nt(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.t8_1 : THROW_CCE());
  };
  ULongArraySerializer_0.prototype.ot = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  ULongArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.ot(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.t8_1 : THROW_CCE());
  };
  ULongArraySerializer_0.prototype.pt = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  ULongArraySerializer_0.prototype.eq = function () {
    return new ULongArray(this.pt());
  };
  ULongArraySerializer_0.prototype.qt = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.el(this.aq_1, index).lk();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    builder.tt(tmp$ret$0);
  };
  ULongArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.qt(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ULongArraySerializer_0.prototype.ut = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.hm(this.aq_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = ULongArray__get_impl_pr71q9(content, i);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp.sl(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  ULongArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.ut(encoder, content instanceof ULongArray ? content.t8_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.xt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.xt((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.yt = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.yt((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.eq = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.zt = function (decoder, index, builder, checkIndex) {
    builder.cu(decoder.yk(this.aq_1, index));
  };
  IntArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.zt(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.du = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.bm(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.du(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_3()));
  }
  UIntArraySerializer_0.prototype.gu = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  UIntArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.gu(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.i8_1 : THROW_CCE());
  };
  UIntArraySerializer_0.prototype.hu = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  UIntArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.hu(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.i8_1 : THROW_CCE());
  };
  UIntArraySerializer_0.prototype.iu = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  UIntArraySerializer_0.prototype.eq = function () {
    return new UIntArray(this.iu());
  };
  UIntArraySerializer_0.prototype.ju = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.el(this.aq_1, index).kk();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    builder.mu(tmp$ret$0);
  };
  UIntArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.ju(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  UIntArraySerializer_0.prototype.nu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.hm(this.aq_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = UIntArray__get_impl_gp5kza(content, i);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp.rl(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  UIntArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.nu(encoder, content instanceof UIntArray ? content.i8_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.qu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.qu((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.ru = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.ru((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.eq = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.su = function (decoder, index, builder, checkIndex) {
    builder.vu(decoder.xk(this.aq_1, index));
  };
  ShortArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.su(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.wu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.am(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.wu(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_4()));
  }
  UShortArraySerializer_0.prototype.zu = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  UShortArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.zu(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.e9_1 : THROW_CCE());
  };
  UShortArraySerializer_0.prototype.av = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  UShortArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.av(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.e9_1 : THROW_CCE());
  };
  UShortArraySerializer_0.prototype.bv = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  UShortArraySerializer_0.prototype.eq = function () {
    return new UShortArray(this.bv());
  };
  UShortArraySerializer_0.prototype.cv = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.el(this.aq_1, index).jk();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    builder.fv(tmp$ret$0);
  };
  UShortArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.cv(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  UShortArraySerializer_0.prototype.gv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.hm(this.aq_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = UShortArray__get_impl_fnbhmx(content, i);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp.ql(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  UShortArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.gv(encoder, content instanceof UShortArray ? content.e9_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.jv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.jv((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.kv = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.eq = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.lv = function (decoder, index, builder, checkIndex) {
    builder.ov(decoder.wk(this.aq_1, index));
  };
  ByteArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.lv(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.pv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.zl(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.pv(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(Companion_getInstance_5()));
  }
  UByteArraySerializer_0.prototype.sv = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  UByteArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.sv(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.w7_1 : THROW_CCE());
  };
  UByteArraySerializer_0.prototype.tv = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  UByteArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.tv(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.w7_1 : THROW_CCE());
  };
  UByteArraySerializer_0.prototype.uv = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  UByteArraySerializer_0.prototype.eq = function () {
    return new UByteArray(this.uv());
  };
  UByteArraySerializer_0.prototype.vv = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.el(this.aq_1, index).ik();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    builder.yv(tmp$ret$0);
  };
  UByteArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.vv(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  UByteArraySerializer_0.prototype.zv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.hm(this.aq_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = UByteArray__get_impl_t5f3hv(content, i);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp.pl(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  UByteArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.zv(encoder, content instanceof UByteArray ? content.w7_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.cw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.ap = function (_this__u8e3s4) {
    return this.cw((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.dw = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.vn = function (_this__u8e3s4) {
    return this.dw((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.eq = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.ew = function (decoder, index, builder, checkIndex) {
    builder.hw(decoder.vk(this.aq_1, index));
  };
  BooleanArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.ew(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.iw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.yl(this.aq_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.fq = function (encoder, content, size) {
    return this.iw(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gs_1 = bufferWithData;
    this.hs_1 = bufferWithData.length;
    this.wa(10);
  }
  CharArrayBuilder.prototype.bq = function () {
    return this.hs_1;
  };
  CharArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.gs_1.length < requiredCapacity)
      this.gs_1 = copyOf(this.gs_1, coerceAtLeast(requiredCapacity, imul(this.gs_1.length, 2)));
  };
  CharArrayBuilder.prototype.is = function (c) {
    this.hq(0, 1, null);
    var tmp = this.gs_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.hs_1;
    tmp0_this.hs_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.cq = function () {
    return copyOf(this.gs_1, this.hs_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ps_1 = bufferWithData;
    this.qs_1 = bufferWithData.length;
    this.wa(10);
  }
  DoubleArrayBuilder.prototype.bq = function () {
    return this.qs_1;
  };
  DoubleArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.ps_1.length < requiredCapacity)
      this.ps_1 = copyOf_0(this.ps_1, coerceAtLeast(requiredCapacity, imul(this.ps_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.rs = function (c) {
    this.hq(0, 1, null);
    var tmp = this.ps_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.qs_1;
    tmp0_this.qs_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.cq = function () {
    return copyOf_0(this.ps_1, this.qs_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ys_1 = bufferWithData;
    this.zs_1 = bufferWithData.length;
    this.wa(10);
  }
  FloatArrayBuilder.prototype.bq = function () {
    return this.zs_1;
  };
  FloatArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.ys_1.length < requiredCapacity)
      this.ys_1 = copyOf_1(this.ys_1, coerceAtLeast(requiredCapacity, imul(this.ys_1.length, 2)));
  };
  FloatArrayBuilder.prototype.at = function (c) {
    this.hq(0, 1, null);
    var tmp = this.ys_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.zs_1;
    tmp0_this.zs_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.cq = function () {
    return copyOf_1(this.ys_1, this.zs_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ht_1 = bufferWithData;
    this.it_1 = bufferWithData.length;
    this.wa(10);
  }
  LongArrayBuilder.prototype.bq = function () {
    return this.it_1;
  };
  LongArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.ht_1.length < requiredCapacity)
      this.ht_1 = copyOf_2(this.ht_1, coerceAtLeast(requiredCapacity, imul(this.ht_1.length, 2)));
  };
  LongArrayBuilder.prototype.jt = function (c) {
    this.hq(0, 1, null);
    var tmp = this.ht_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.it_1;
    tmp0_this.it_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.cq = function () {
    return copyOf_2(this.ht_1, this.it_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rt_1 = bufferWithData;
    this.st_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.wa(10);
  }
  ULongArrayBuilder.prototype.bq = function () {
    return this.st_1;
  };
  ULongArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.rt_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.rt_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.rt_1), 2));
      tmp$ret$0 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
      tmp.rt_1 = tmp$ret$0;
    }
  };
  ULongArrayBuilder.prototype.tt = function (c) {
    this.hq(0, 1, null);
    var tmp = this.rt_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.st_1;
    tmp0_this.st_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  ULongArrayBuilder.prototype.jw = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.rt_1;
    var tmp1_copyOf = this.st_1;
    tmp$ret$0 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  ULongArrayBuilder.prototype.cq = function () {
    return new ULongArray(this.jw());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.au_1 = bufferWithData;
    this.bu_1 = bufferWithData.length;
    this.wa(10);
  }
  IntArrayBuilder.prototype.bq = function () {
    return this.bu_1;
  };
  IntArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.au_1.length < requiredCapacity)
      this.au_1 = copyOf_3(this.au_1, coerceAtLeast(requiredCapacity, imul(this.au_1.length, 2)));
  };
  IntArrayBuilder.prototype.cu = function (c) {
    this.hq(0, 1, null);
    var tmp = this.au_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.bu_1;
    tmp0_this.bu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.cq = function () {
    return copyOf_3(this.au_1, this.bu_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ku_1 = bufferWithData;
    this.lu_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.wa(10);
  }
  UIntArrayBuilder.prototype.bq = function () {
    return this.lu_1;
  };
  UIntArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.ku_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.ku_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.ku_1), 2));
      tmp$ret$0 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
      tmp.ku_1 = tmp$ret$0;
    }
  };
  UIntArrayBuilder.prototype.mu = function (c) {
    this.hq(0, 1, null);
    var tmp = this.ku_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.lu_1;
    tmp0_this.lu_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  UIntArrayBuilder.prototype.kw = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.ku_1;
    var tmp1_copyOf = this.lu_1;
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  UIntArrayBuilder.prototype.cq = function () {
    return new UIntArray(this.kw());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tu_1 = bufferWithData;
    this.uu_1 = bufferWithData.length;
    this.wa(10);
  }
  ShortArrayBuilder.prototype.bq = function () {
    return this.uu_1;
  };
  ShortArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.tu_1.length < requiredCapacity)
      this.tu_1 = copyOf_4(this.tu_1, coerceAtLeast(requiredCapacity, imul(this.tu_1.length, 2)));
  };
  ShortArrayBuilder.prototype.vu = function (c) {
    this.hq(0, 1, null);
    var tmp = this.tu_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.uu_1;
    tmp0_this.uu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.cq = function () {
    return copyOf_4(this.tu_1, this.uu_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.dv_1 = bufferWithData;
    this.ev_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.wa(10);
  }
  UShortArrayBuilder.prototype.bq = function () {
    return this.ev_1;
  };
  UShortArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.dv_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.dv_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.dv_1), 2));
      tmp$ret$0 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
      tmp.dv_1 = tmp$ret$0;
    }
  };
  UShortArrayBuilder.prototype.fv = function (c) {
    this.hq(0, 1, null);
    var tmp = this.dv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.ev_1;
    tmp0_this.ev_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  UShortArrayBuilder.prototype.lw = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.dv_1;
    var tmp1_copyOf = this.ev_1;
    tmp$ret$0 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  UShortArrayBuilder.prototype.cq = function () {
    return new UShortArray(this.lw());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.mv_1 = bufferWithData;
    this.nv_1 = bufferWithData.length;
    this.wa(10);
  }
  ByteArrayBuilder.prototype.bq = function () {
    return this.nv_1;
  };
  ByteArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.mv_1.length < requiredCapacity)
      this.mv_1 = copyOf_5(this.mv_1, coerceAtLeast(requiredCapacity, imul(this.mv_1.length, 2)));
  };
  ByteArrayBuilder.prototype.ov = function (c) {
    this.hq(0, 1, null);
    var tmp = this.mv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.nv_1;
    tmp0_this.nv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.cq = function () {
    return copyOf_5(this.mv_1, this.nv_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.wv_1 = bufferWithData;
    this.xv_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.wa(10);
  }
  UByteArrayBuilder.prototype.bq = function () {
    return this.xv_1;
  };
  UByteArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.wv_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.wv_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.wv_1), 2));
      tmp$ret$0 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
      tmp.wv_1 = tmp$ret$0;
    }
  };
  UByteArrayBuilder.prototype.yv = function (c) {
    this.hq(0, 1, null);
    var tmp = this.wv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.xv_1;
    tmp0_this.xv_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  UByteArrayBuilder.prototype.mw = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.wv_1;
    var tmp1_copyOf = this.xv_1;
    tmp$ret$0 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  UByteArrayBuilder.prototype.cq = function () {
    return new UByteArray(this.mw());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.fw_1 = bufferWithData;
    this.gw_1 = bufferWithData.length;
    this.wa(10);
  }
  BooleanArrayBuilder.prototype.bq = function () {
    return this.gw_1;
  };
  BooleanArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.fw_1.length < requiredCapacity)
      this.fw_1 = copyOf_6(this.fw_1, coerceAtLeast(requiredCapacity, imul(this.fw_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.hw = function (c) {
    this.hq(0, 1, null);
    var tmp = this.fw_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.gw_1;
    tmp0_this.gw_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.cq = function () {
    return copyOf_6(this.fw_1, this.gw_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().y1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.nw_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.lh = function () {
    return this.nw_1;
  };
  StringSerializer.prototype.ow = function (encoder, value) {
    return encoder.wl(value);
  };
  StringSerializer.prototype.mh = function (encoder, value) {
    return this.ow(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.nh = function (decoder) {
    return decoder.pk();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.pw_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.lh = function () {
    return this.pw_1;
  };
  CharSerializer.prototype.qw = function (encoder, value) {
    return encoder.vl(value);
  };
  CharSerializer.prototype.mh = function (encoder, value) {
    return this.qw(encoder, value instanceof Char ? value.q5_1 : THROW_CCE());
  };
  CharSerializer.prototype.rw = function (decoder) {
    return decoder.ok();
  };
  CharSerializer.prototype.nh = function (decoder) {
    return new Char(this.rw(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.sw_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.lh = function () {
    return this.sw_1;
  };
  DoubleSerializer.prototype.tw = function (encoder, value) {
    return encoder.ul(value);
  };
  DoubleSerializer.prototype.mh = function (encoder, value) {
    return this.tw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.nh = function (decoder) {
    return decoder.nk();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.uw_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.lh = function () {
    return this.uw_1;
  };
  FloatSerializer.prototype.vw = function (encoder, value) {
    return encoder.tl(value);
  };
  FloatSerializer.prototype.mh = function (encoder, value) {
    return this.vw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.nh = function (decoder) {
    return decoder.mk();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.ww_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.lh = function () {
    return this.ww_1;
  };
  LongSerializer.prototype.xw = function (encoder, value) {
    return encoder.sl(value);
  };
  LongSerializer.prototype.mh = function (encoder, value) {
    return this.xw(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.nh = function (decoder) {
    return decoder.lk();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.yw_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.lh = function () {
    return this.yw_1;
  };
  IntSerializer.prototype.zw = function (encoder, value) {
    return encoder.rl(value);
  };
  IntSerializer.prototype.mh = function (encoder, value) {
    return this.zw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.nh = function (decoder) {
    return decoder.kk();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.ax_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.lh = function () {
    return this.ax_1;
  };
  ShortSerializer.prototype.bx = function (encoder, value) {
    return encoder.ql(value);
  };
  ShortSerializer.prototype.mh = function (encoder, value) {
    return this.bx(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.nh = function (decoder) {
    return decoder.jk();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.cx_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.lh = function () {
    return this.cx_1;
  };
  ByteSerializer.prototype.dx = function (encoder, value) {
    return encoder.pl(value);
  };
  ByteSerializer.prototype.mh = function (encoder, value) {
    return this.dx(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.nh = function (decoder) {
    return decoder.ik();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.ex_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.lh = function () {
    return this.ex_1;
  };
  BooleanSerializer.prototype.fx = function (encoder, value) {
    return encoder.ol(value);
  };
  BooleanSerializer.prototype.mh = function (encoder, value) {
    return this.fx(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.nh = function (decoder) {
    return decoder.hk();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.gx_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.lh = function () {
    return this.gx_1.lh();
  };
  UnitSerializer.prototype.hx = function (decoder) {
    this.gx_1.nh(decoder);
  };
  UnitSerializer.prototype.nh = function (decoder) {
    this.hx(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.ix = function (encoder, value) {
    this.gx_1.mh(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.mh = function (encoder, value) {
    return this.ix(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.jx_1 = serialName;
    this.kx_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.ii = function () {
    return this.jx_1;
  };
  PrimitiveSerialDescriptor_0.prototype.ej = function () {
    return this.kx_1;
  };
  PrimitiveSerialDescriptor_0.prototype.cj = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.ij = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.hj = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.jj = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.gj = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.fj = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.jx_1 + ')';
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().z1();
    var tmp0_iterator = keys.g();
    while (tmp0_iterator.h()) {
      var primitive = tmp0_iterator.i();
      var simpleName = capitalize(ensureNotNull(primitive.vc()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
      var tmp_0 = toString(tmp$ret$1);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = _this__u8e3s4;
      tmp$ret$3 = tmp$ret$2.substring(1);
      tmp = tmp_0 + tmp$ret$3;
    } else {
      tmp = _this__u8e3s4;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().yd(), serializer_1(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_2(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().be(), CharArraySerializer()), to(PrimitiveClasses_getInstance().wd(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().he(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().vd(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ge(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().fe(), LongArraySerializer()), to(getKClass(ULong), serializer_6(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().ud(), serializer_7(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ee(), IntArraySerializer()), to(getKClass(UInt), serializer_8(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().td(), serializer_9(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().de(), ShortArraySerializer()), to(getKClass(UShort), serializer_10(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().sd(), serializer_11(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ce(), ByteArraySerializer()), to(getKClass(UByte), serializer_12(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().rd(), serializer_13(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ae(), BooleanArraySerializer()), to(getKClass(Unit), serializer_14(Unit_getInstance())), to(getKClass(Duration), serializer_15(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.nx = function (_this__u8e3s4, index) {
    return this.px(this.ox(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.px = function (nestedName) {
    var tmp0_elvis_lhs = this.sx();
    return this.tx(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.ox = function (desc, index) {
    return desc.ij(index);
  };
  NamedValueDecoder.prototype.tx = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(parentName) === 0;
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.gy(tag);
    var r = block();
    if (!$this.rx_1) {
      $this.hy();
    }
    $this.rx_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.rk($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.fk() ? this$0.rk($deserializer, $previousValue) : this$0.gk();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.qx_1 = tmp$ret$0;
    this.rx_1 = false;
  }
  TaggedDecoder.prototype.pi = function () {
    return EmptySerializersModule_0();
  };
  TaggedDecoder.prototype.ux = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.vx = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.wx = function (tag) {
    var tmp = this.ux(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.xx = function (tag) {
    var tmp = this.ux(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.yx = function (tag) {
    var tmp = this.ux(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.zx = function (tag) {
    var tmp = this.ux(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.ay = function (tag) {
    var tmp = this.ux(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.by = function (tag) {
    var tmp = this.ux(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.cy = function (tag) {
    var tmp = this.ux(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.dy = function (tag) {
    var tmp = this.ux(tag);
    return tmp instanceof Char ? tmp.q5_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.ey = function (tag) {
    var tmp = this.ux(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.fy = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.gy(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.rk = function (deserializer, previousValue) {
    return this.sk(deserializer);
  };
  TaggedDecoder.prototype.qk = function (descriptor) {
    return this.fy(this.hy(), descriptor);
  };
  TaggedDecoder.prototype.fk = function () {
    var tmp0_elvis_lhs = this.sx();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.vx(currentTag);
  };
  TaggedDecoder.prototype.gk = function () {
    return null;
  };
  TaggedDecoder.prototype.hk = function () {
    return this.wx(this.hy());
  };
  TaggedDecoder.prototype.ik = function () {
    return this.xx(this.hy());
  };
  TaggedDecoder.prototype.jk = function () {
    return this.yx(this.hy());
  };
  TaggedDecoder.prototype.kk = function () {
    return this.zx(this.hy());
  };
  TaggedDecoder.prototype.lk = function () {
    return this.ay(this.hy());
  };
  TaggedDecoder.prototype.mk = function () {
    return this.by(this.hy());
  };
  TaggedDecoder.prototype.nk = function () {
    return this.cy(this.hy());
  };
  TaggedDecoder.prototype.ok = function () {
    return this.dy(this.hy());
  };
  TaggedDecoder.prototype.pk = function () {
    return this.ey(this.hy());
  };
  TaggedDecoder.prototype.tk = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.uk = function (descriptor) {
  };
  TaggedDecoder.prototype.vk = function (descriptor, index) {
    return this.wx(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.wk = function (descriptor, index) {
    return this.xx(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.xk = function (descriptor, index) {
    return this.yx(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.yk = function (descriptor, index) {
    return this.zx(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.zk = function (descriptor, index) {
    return this.ay(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.al = function (descriptor, index) {
    return this.by(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.bl = function (descriptor, index) {
    return this.cy(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.cl = function (descriptor, index) {
    return this.dy(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.dl = function (descriptor, index) {
    return this.ey(this.nx(descriptor, index));
  };
  TaggedDecoder.prototype.el = function (descriptor, index) {
    return this.fy(this.nx(descriptor, index), descriptor.gj(index));
  };
  TaggedDecoder.prototype.fl = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.nx(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.hl = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.nx(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.sx = function () {
    return lastOrNull(this.qx_1);
  };
  TaggedDecoder.prototype.gy = function (name) {
    this.qx_1.a(name);
  };
  TaggedDecoder.prototype.hy = function () {
    var r = this.qx_1.y2(get_lastIndex_0(this.qx_1));
    this.rx_1 = true;
    return r;
  };
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.iy_1 = key;
    this.jy_1 = value;
  }
  MapEntry.prototype.o = function () {
    return this.iy_1;
  };
  MapEntry.prototype.p = function () {
    return this.jy_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.iy_1 + ', value=' + this.jy_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.iy_1 == null ? 0 : hashCode(this.iy_1);
    result = imul(result, 31) + (this.jy_1 == null ? 0 : hashCode(this.jy_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.iy_1, tmp0_other_with_cast.iy_1))
      return false;
    if (!equals(this.jy_1, tmp0_other_with_cast.jy_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.lh();
      $this$buildSerialDescriptor.zh('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.lh();
      $this$buildSerialDescriptor.zh('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.my_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.lh = function () {
    return this.my_1;
  };
  MapEntrySerializer_0.prototype.ny = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  MapEntrySerializer_0.prototype.oy = function (_this__u8e3s4) {
    return this.ny((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.py = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  MapEntrySerializer_0.prototype.qy = function (_this__u8e3s4) {
    return this.py((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.ry = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.lh();
      $this$buildClassSerialDescriptor.zh('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.lh();
      $this$buildClassSerialDescriptor.zh('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.xy_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.lh = function () {
    return this.xy_1;
  };
  PairSerializer_0.prototype.yy = function (_this__u8e3s4) {
    return _this__u8e3s4.t2_1;
  };
  PairSerializer_0.prototype.oy = function (_this__u8e3s4) {
    return this.yy(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.zy = function (_this__u8e3s4) {
    return _this__u8e3s4.u2_1;
  };
  PairSerializer_0.prototype.qy = function (_this__u8e3s4) {
    return this.zy(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.ry = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.gl($this.dz_1, 0, $this.az_1, null, 8, null);
    var b = composite.gl($this.dz_1, 1, $this.bz_1, null, 8, null);
    var c = composite.gl($this.dz_1, 2, $this.cz_1, null, 8, null);
    composite.uk($this.dz_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.jl($this.dz_1);
      Companion_getInstance_7();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.gl($this.dz_1, 0, $this.az_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.gl($this.dz_1, 1, $this.bz_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.gl($this.dz_1, 2, $this.cz_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.uk($this.dz_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.az_1.lh();
      $this$buildClassSerialDescriptor.zh('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.bz_1.lh();
      $this$buildClassSerialDescriptor.zh('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.cz_1.lh();
      $this$buildClassSerialDescriptor.zh('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.az_1 = aSerializer;
    this.bz_1 = bSerializer;
    this.cz_1 = cSerializer;
    var tmp = this;
    tmp.dz_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.lh = function () {
    return this.dz_1;
  };
  TripleSerializer_0.prototype.ez = function (encoder, value) {
    var structuredEncoder = encoder.tk(this.dz_1);
    structuredEncoder.im(this.dz_1, 0, this.az_1, value.k7_1);
    structuredEncoder.im(this.dz_1, 1, this.bz_1, value.l7_1);
    structuredEncoder.im(this.dz_1, 2, this.cz_1, value.m7_1);
    structuredEncoder.uk(this.dz_1);
  };
  TripleSerializer_0.prototype.mh = function (encoder, value) {
    return this.ez(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.nh = function (decoder) {
    var composite = decoder.tk(this.dz_1);
    if (composite.il()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.sy_1 = keySerializer;
    this.ty_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.uy = function (encoder, value) {
    var structuredEncoder = encoder.tk(this.lh());
    structuredEncoder.im(this.lh(), 0, this.sy_1, this.oy(value));
    structuredEncoder.im(this.lh(), 1, this.ty_1, this.qy(value));
    structuredEncoder.uk(this.lh());
  };
  KeyValueSerializer.prototype.mh = function (encoder, value) {
    return this.uy(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.nh = function (decoder) {
    var composite = decoder.tk(this.lh());
    if (composite.il()) {
      var tmp = this.lh();
      var key = composite.gl(tmp, 0, this.sy_1, null, 8, null);
      var tmp_0 = this.lh();
      var value = composite.gl(tmp_0, 1, this.ty_1, null, 8, null);
      return this.ry(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.jl(this.lh());
      Companion_getInstance_7();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.lh();
          key_0 = composite.gl(tmp_1, 0, this.sy_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.lh();
            value_0 = composite.gl(tmp_2, 1, this.ty_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.uk(this.lh());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.ry(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.fz_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_0()));
  }
  ULongSerializer.prototype.lh = function () {
    return this.fz_1;
  };
  ULongSerializer.prototype.gz = function (encoder, value) {
    var tmp = encoder.xl(this.fz_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.sl(tmp$ret$0);
  };
  ULongSerializer.prototype.mh = function (encoder, value) {
    return this.gz(encoder, value instanceof ULong ? value.o8_1 : THROW_CCE());
  };
  ULongSerializer.prototype.hz = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.qk(this.fz_1).lk();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    return tmp$ret$0;
  };
  ULongSerializer.prototype.nh = function (decoder) {
    return new ULong(this.hz(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.iz_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.lh = function () {
    return this.iz_1;
  };
  UIntSerializer.prototype.jz = function (encoder, value) {
    var tmp = encoder.xl(this.iz_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.rl(tmp$ret$0);
  };
  UIntSerializer.prototype.mh = function (encoder, value) {
    return this.jz(encoder, value instanceof UInt ? value.c8_1 : THROW_CCE());
  };
  UIntSerializer.prototype.kz = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.qk(this.iz_1).kk();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  UIntSerializer.prototype.nh = function (decoder) {
    return new UInt(this.kz(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.lz_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_9(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.lh = function () {
    return this.lz_1;
  };
  UShortSerializer.prototype.mz = function (encoder, value) {
    var tmp = encoder.xl(this.lz_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ql(tmp$ret$0);
  };
  UShortSerializer.prototype.mh = function (encoder, value) {
    return this.mz(encoder, value instanceof UShort ? value.z8_1 : THROW_CCE());
  };
  UShortSerializer.prototype.nz = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.qk(this.lz_1).jk();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    return tmp$ret$0;
  };
  UShortSerializer.prototype.nh = function (decoder) {
    return new UShort(this.nz(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.oz_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_11(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.lh = function () {
    return this.oz_1;
  };
  UByteSerializer.prototype.pz = function (encoder, value) {
    var tmp = encoder.xl(this.oz_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.pl(tmp$ret$0);
  };
  UByteSerializer.prototype.mh = function (encoder, value) {
    return this.pz(encoder, value instanceof UByte ? value.r7_1 : THROW_CCE());
  };
  UByteSerializer.prototype.qz = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.qk(this.oz_1).ik();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    return tmp$ret$0;
  };
  UByteSerializer.prototype.nh = function (decoder) {
    return new UByte(this.qz(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.ui = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.ti(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.sz_1 = class2ContextualFactory;
    this.tz_1 = polyBase2Serializers;
    this.uz_1 = polyBase2DefaultSerializerProvider;
    this.vz_1 = polyBase2NamedSerializers;
    this.wz_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.sm = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.tz_1.y1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.uz_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.rm = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.vz_1.y1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).y1(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.wz_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.ti = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.sz_1.y1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xz(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.rz = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.sz_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.n().g();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.o();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.p();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.a10_1;
        collector.b10(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.zz(kclass, serial.yz_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.tz_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.n().g();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.o();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.p();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.n().g();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.h()) {
        var element_1 = tmp0_iterator_1.i();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.o();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.p();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.c10(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.uz_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.n().g();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.h()) {
      var element_2 = tmp0_iterator_2.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.o();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.p();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.d10(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.wz_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.n().g();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.h()) {
      var element_3 = tmp0_iterator_3.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.o();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.p();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.e10(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.f10_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.f10_1.equals(tmp0_other_with_cast.f10_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.f10_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.f10_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.wc(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.vc() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().xd());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.as(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.g10_1 = $factory;
  }
  createCache$1.prototype.vi = function (key) {
    return this.g10_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.h10_1 = $factory;
  }
  createParametrizedCache$1.prototype.wi = function (key, types) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_6();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      tmp$ret$0 = this.h10_1(key, types);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_6();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  };
  //region block: post-declaration
  SerialDescriptorImpl.prototype.xi = get_isNullable;
  SerialDescriptorImpl.prototype.dj = get_isInline;
  AbstractDecoder.prototype.gl = decodeSerializableElement$default;
  AbstractDecoder.prototype.sk = decodeSerializableValue;
  AbstractDecoder.prototype.il = decodeSequentially;
  AbstractDecoder.prototype.kl = decodeCollectionSize;
  AbstractEncoder.prototype.mm = encodeNotNullMark;
  AbstractEncoder.prototype.nm = beginCollection;
  AbstractEncoder.prototype.jm = encodeSerializableValue;
  AbstractEncoder.prototype.lm = encodeNullableSerializableValue;
  AbstractEncoder.prototype.om = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype.xi = get_isNullable;
  ListLikeDescriptor.prototype.dj = get_isInline;
  ListLikeDescriptor.prototype.bj = get_annotations;
  ArrayListClassDesc.prototype.xi = get_isNullable;
  ArrayListClassDesc.prototype.dj = get_isInline;
  ArrayListClassDesc.prototype.bj = get_annotations;
  HashSetClassDesc.prototype.xi = get_isNullable;
  HashSetClassDesc.prototype.dj = get_isInline;
  HashSetClassDesc.prototype.bj = get_annotations;
  LinkedHashSetClassDesc.prototype.xi = get_isNullable;
  LinkedHashSetClassDesc.prototype.dj = get_isInline;
  LinkedHashSetClassDesc.prototype.bj = get_annotations;
  MapLikeDescriptor.prototype.xi = get_isNullable;
  MapLikeDescriptor.prototype.dj = get_isInline;
  MapLikeDescriptor.prototype.bj = get_annotations;
  HashMapClassDesc.prototype.xi = get_isNullable;
  HashMapClassDesc.prototype.dj = get_isInline;
  HashMapClassDesc.prototype.bj = get_annotations;
  LinkedHashMapClassDesc.prototype.xi = get_isNullable;
  LinkedHashMapClassDesc.prototype.dj = get_isInline;
  LinkedHashMapClassDesc.prototype.bj = get_annotations;
  ArrayClassDesc.prototype.xi = get_isNullable;
  ArrayClassDesc.prototype.dj = get_isInline;
  ArrayClassDesc.prototype.bj = get_annotations;
  PrimitiveArrayDescriptor.prototype.xi = get_isNullable;
  PrimitiveArrayDescriptor.prototype.dj = get_isInline;
  PrimitiveArrayDescriptor.prototype.bj = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.xi = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.dj = get_isInline;
  InlineClassDescriptor.prototype.xi = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.sr = typeParametersSerializers;
  NoOpEncoder.prototype.mm = encodeNotNullMark;
  NoOpEncoder.prototype.nm = beginCollection;
  NoOpEncoder.prototype.jm = encodeSerializableValue;
  NoOpEncoder.prototype.lm = encodeNullableSerializableValue;
  NoOpEncoder.prototype.om = shouldEncodeElementDefault;
  PrimitiveSerialDescriptor_0.prototype.xi = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.dj = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.bj = get_annotations;
  TaggedDecoder.prototype.gl = decodeSerializableElement$default;
  TaggedDecoder.prototype.sk = decodeSerializableValue;
  TaggedDecoder.prototype.il = decodeSequentially;
  TaggedDecoder.prototype.kl = decodeCollectionSize;
  NamedValueDecoder.prototype.sk = decodeSerializableValue;
  NamedValueDecoder.prototype.gl = decodeSerializableElement$default;
  NamedValueDecoder.prototype.il = decodeSequentially;
  NamedValueDecoder.prototype.kl = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = PolymorphicSerializer_init_$Create$;
  _.$_$.d = SealedClassSerializer_init_$Create$;
  _.$_$.e = SerializationException_init_$Init$;
  _.$_$.f = UnknownFieldException_init_$Create$;
  _.$_$.g = SEALED_getInstance;
  _.$_$.h = STRING_getInstance;
  _.$_$.i = CONTEXTUAL_getInstance;
  _.$_$.j = ENUM_getInstance;
  _.$_$.k = LIST_getInstance;
  _.$_$.l = MAP_getInstance;
  _.$_$.m = Companion_getInstance_7;
  _.$_$.n = IntSerializer_getInstance;
  _.$_$.o = StringSerializer_getInstance;
  _.$_$.p = ListSerializer;
  _.$_$.q = MapSerializer;
  _.$_$.r = SetSerializer;
  _.$_$.s = get_nullable;
  _.$_$.t = serializer_1;
  _.$_$.u = serializer_10;
  _.$_$.v = serializer_8;
  _.$_$.w = serializer_12;
  _.$_$.x = serializer_6;
  _.$_$.y = PolymorphicKind;
  _.$_$.z = PrimitiveKind;
  _.$_$.a1 = PrimitiveSerialDescriptor;
  _.$_$.b1 = get_annotations;
  _.$_$.c1 = get_isInline;
  _.$_$.d1 = get_isNullable;
  _.$_$.e1 = SerialDescriptor;
  _.$_$.f1 = ENUM;
  _.$_$.g1 = getContextualDescriptor;
  _.$_$.h1 = AbstractDecoder;
  _.$_$.i1 = AbstractEncoder;
  _.$_$.j1 = decodeCollectionSize;
  _.$_$.k1 = decodeSequentially;
  _.$_$.l1 = CompositeDecoder;
  _.$_$.m1 = CompositeEncoder;
  _.$_$.n1 = decodeSerializableValue;
  _.$_$.o1 = Decoder;
  _.$_$.p1 = beginCollection;
  _.$_$.q1 = encodeNotNullMark;
  _.$_$.r1 = encodeNullableSerializableValue;
  _.$_$.s1 = Encoder;
  _.$_$.t1 = AbstractPolymorphicSerializer;
  _.$_$.u1 = ArrayListSerializer;
  _.$_$.v1 = ElementMarker;
  _.$_$.w1 = typeParametersSerializers;
  _.$_$.x1 = GeneratedSerializer;
  _.$_$.y1 = NamedValueDecoder;
  _.$_$.z1 = PluginGeneratedSerialDescriptor;
  _.$_$.a2 = ReferenceArraySerializer;
  _.$_$.b2 = SerializerFactory;
  _.$_$.c2 = jsonCachedSerialNames;
  _.$_$.d2 = throwMissingFieldException;
  _.$_$.e2 = EmptySerializersModule_0;
  _.$_$.f2 = contextual;
  _.$_$.g2 = SerializersModuleCollector;
  _.$_$.h2 = BinaryFormat;
  _.$_$.i2 = DeserializationStrategy;
  _.$_$.j2 = KSerializer;
  _.$_$.k2 = MissingFieldException;
  _.$_$.l2 = SealedClassSerializer;
  _.$_$.m2 = SerializationException;
  _.$_$.n2 = StringFormat;
  _.$_$.o2 = findPolymorphicSerializer;
  _.$_$.p2 = serializerOrNull_0;
  _.$_$.q2 = serializer_0;
  _.$_$.r2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map

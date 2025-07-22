(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var objectMeta = kotlin_kotlin.$_$.la;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var classMeta = kotlin_kotlin.$_$.k9;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var toString = kotlin_kotlin.$_$.qa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var Char = kotlin_kotlin.$_$.oc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var equals = kotlin_kotlin.$_$.m9;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var hashCode = kotlin_kotlin.$_$.r9;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var List = kotlin_kotlin.$_$.o5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Map = kotlin_kotlin.$_$.q5;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.zd;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var toInt = kotlin_kotlin.$_$.cc;
  var toLong = kotlin_kotlin.$_$.ec;
  var toDouble = kotlin_kotlin.$_$.ac;
  var toLongOrNull = kotlin_kotlin.$_$.dc;
  var toDoubleOrNull = kotlin_kotlin.$_$.zb;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.x4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var toULongOrNull = kotlin_kotlin.$_$.ic;
  var Companion_getInstance = kotlin_kotlin.$_$.f5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y3;
  var ULong = kotlin_kotlin.$_$.ld;
  var isInterface = kotlin_kotlin.$_$.ba;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var lazy_0 = kotlin_kotlin.$_$.ae;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var KProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p9;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var toLong_0 = kotlin_kotlin.$_$.oa;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.o3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.q3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.z3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.f3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.h3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.g4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.i4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j9;
  var coerceAtLeast = kotlin_kotlin.$_$.ua;
  var coerceAtMost = kotlin_kotlin.$_$.wa;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a1;
  var singleOrNull = kotlin_kotlin.$_$.v7;
  var arrayIterator = kotlin_kotlin.$_$.c9;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var getValue = kotlin_kotlin.$_$.z6;
  var copyOf = kotlin_kotlin.$_$.l6;
  var copyOf_0 = kotlin_kotlin.$_$.m6;
  var fillArrayVal = kotlin_kotlin.$_$.o9;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.qc;
  var invoke = kotlin_kotlin.$_$.vd;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.rc;
  var Unit = kotlin_kotlin.$_$.od;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var getKClass = kotlin_kotlin.$_$.f;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var isObject = kotlin_kotlin.$_$.da;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var plus = kotlin_kotlin.$_$.ce;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.vc;
  var isFinite = kotlin_kotlin.$_$.xd;
  var isFinite_0 = kotlin_kotlin.$_$.wd;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toUInt = kotlin_kotlin.$_$.hc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.p3;
  var toULong = kotlin_kotlin.$_$.jc;
  var toUByte = kotlin_kotlin.$_$.gc;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.g3;
  var toUShort = kotlin_kotlin.$_$.kc;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.h4;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var toString_0 = kotlin_kotlin.$_$.a3;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.e5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.d5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.g5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var setOf = kotlin_kotlin.$_$.u7;
  var numberToChar = kotlin_kotlin.$_$.ia;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z2;
  var equals_0 = kotlin_kotlin.$_$.kb;
  var toByte = kotlin_kotlin.$_$.na;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.a2;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.s4;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.w4;
  var toShort = kotlin_kotlin.$_$.pa;
  var single = kotlin_kotlin.$_$.vb;
  var emptySet = kotlin_kotlin.$_$.t6;
  var plus_0 = kotlin_kotlin.$_$.n7;
  var toList = kotlin_kotlin.$_$.a8;
  var Enum = kotlin_kotlin.$_$.sc;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var last = kotlin_kotlin.$_$.g7;
  var removeLast = kotlin_kotlin.$_$.r7;
  var lastIndexOf$default = kotlin_kotlin.$_$.s;
  var Long = kotlin_kotlin.$_$.xc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.v2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.b5;
  var charArray = kotlin_kotlin.$_$.g9;
  var indexOf$default = kotlin_kotlin.$_$.r;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta, undefined, [StringFormat], undefined, undefined, []);
  setMetadataFor(Default, 'Default', objectMeta, Json, undefined, undefined, undefined, []);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json, undefined, undefined, undefined, []);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonNames, 'JsonNames', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, undefined, [Decoder, CompositeDecoder], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, undefined, undefined, undefined, {0: JsonElementSerializer_getInstance}, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], undefined, {0: JsonArraySerializer_getInstance}, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], undefined, {0: JsonObjectSerializer_getInstance}, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, []);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive, undefined, undefined, undefined, []);
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, []);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(defer$1, undefined, classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, undefined, [Encoder, CompositeEncoder], undefined, undefined, []);
  setMetadataFor(Composer, 'Composer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer, undefined, undefined, undefined, []);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer, undefined, undefined, undefined, []);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException, undefined, undefined, undefined, []);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException, undefined, undefined, undefined, []);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, undefined, [SerializersModuleCollector], undefined, undefined, []);
  setMetadataFor(Key, 'Key', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder], undefined, undefined, []);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder], undefined, undefined, []);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder], undefined, undefined, []);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder, undefined, undefined, undefined, []);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer, undefined, undefined, undefined, []);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.i10_1 = configuration;
    this.j10_1 = serializersModule;
    this.k10_1 = new DescriptorSchemaCache();
  }
  Json.prototype.pi = function () {
    return this.j10_1;
  };
  Json.prototype.ni = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.m10();
    }
  };
  Json.prototype.oi = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.lh(), null);
    var result = input.sk(deserializer);
    lexer.z10();
    return result;
  };
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.cq();
    return new JsonImpl(conf, builder.m11_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.a11_1 = json.i10_1.n11_1;
    this.b11_1 = json.i10_1.s11_1;
    this.c11_1 = json.i10_1.o11_1;
    this.d11_1 = json.i10_1.p11_1;
    this.e11_1 = json.i10_1.q11_1;
    this.f11_1 = json.i10_1.r11_1;
    this.g11_1 = json.i10_1.t11_1;
    this.h11_1 = json.i10_1.u11_1;
    this.i11_1 = json.i10_1.v11_1;
    this.j11_1 = json.i10_1.w11_1;
    this.k11_1 = json.i10_1.x11_1;
    this.l11_1 = json.i10_1.y11_1;
    this.m11_1 = json.pi();
  }
  JsonBuilder.prototype.cq = function () {
    if (this.i11_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.j11_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.f11_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.g11_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.g11_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.g11_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.g11_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.a11_1, this.c11_1, this.d11_1, this.e11_1, this.f11_1, this.b11_1, this.g11_1, this.h11_1, this.i11_1, this.j11_1, this.k11_1, this.l11_1);
  };
  function validateConfiguration($this) {
    if (equals($this.pi(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.i10_1.v11_1, $this.i10_1.w11_1);
    $this.pi().rz(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.n11_1 = encodeDefaults;
    this.o11_1 = ignoreUnknownKeys;
    this.p11_1 = isLenient;
    this.q11_1 = allowStructuredMapKeys;
    this.r11_1 = prettyPrint;
    this.s11_1 = explicitNulls;
    this.t11_1 = prettyPrintIndent;
    this.u11_1 = coerceInputValues;
    this.v11_1 = useArrayPolymorphism;
    this.w11_1 = classDiscriminator;
    this.x11_1 = allowSpecialFloatingPointValues;
    this.y11_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.n11_1 + ', ignoreUnknownKeys=' + this.o11_1 + ', isLenient=' + this.p11_1 + ', ' + ('allowStructuredMapKeys=' + this.q11_1 + ', prettyPrint=' + this.r11_1 + ', explicitNulls=' + this.s11_1 + ', ') + ("prettyPrintIndent='" + this.t11_1 + "', coerceInputValues=" + this.u11_1 + ', useArrayPolymorphism=' + this.v11_1 + ', ') + ("classDiscriminator='" + this.w11_1 + "', allowSpecialFloatingPointValues=" + this.x11_1 + ')');
  };
  function JsonDecoder() {
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonArray(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.b12_1 = content;
  }
  JsonArray.prototype.f = function () {
    return this.b12_1.f();
  };
  JsonArray.prototype.c12 = function (element) {
    return this.b12_1.b1(element);
  };
  JsonArray.prototype.b1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.c12(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.d12 = function (elements) {
    return this.b12_1.c1(elements);
  };
  JsonArray.prototype.c1 = function (elements) {
    return this.d12(elements);
  };
  JsonArray.prototype.j = function (index) {
    return this.b12_1.j(index);
  };
  JsonArray.prototype.k = function () {
    return this.b12_1.k();
  };
  JsonArray.prototype.g = function () {
    return this.b12_1.g();
  };
  JsonArray.prototype.m = function (index) {
    return this.b12_1.m(index);
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.b12_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.b12_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.b12_1, ',', '[', ']', 0, null, null, 56, null);
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.o();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.p();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.r5(_Char___init__impl__6a9atx(58));
    tmp0_apply.p6(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.e12_1 = content;
  }
  JsonObject.prototype.n = function () {
    return this.e12_1.n();
  };
  JsonObject.prototype.z1 = function () {
    return this.e12_1.z1();
  };
  JsonObject.prototype.f = function () {
    return this.e12_1.f();
  };
  JsonObject.prototype.a2 = function () {
    return this.e12_1.a2();
  };
  JsonObject.prototype.f12 = function (key) {
    return this.e12_1.s1(key);
  };
  JsonObject.prototype.s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.f12((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.g12 = function (key) {
    return this.e12_1.y1(key);
  };
  JsonObject.prototype.y1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.g12((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.k = function () {
    return this.e12_1.k();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.e12_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.e12_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.e12_1.n();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda, 24, null);
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    Companion_getInstance_8();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.h12();
  };
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.i12_1 = isString;
    this.j12_1 = toString(body);
  }
  JsonLiteral.prototype.h12 = function () {
    return this.j12_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.i12_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.j12_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.j12_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.i12_1 === other.i12_1))
      return false;
    if (!(this.j12_1 === other.j12_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.i12_1 | 0;
    result = imul(31, result) + getStringHashCode(this.j12_1) | 0;
    return result;
  };
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.k12_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.l12_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.h12 = function () {
    return this.k12_1;
  };
  JsonNull.prototype.m12 = function () {
    return this.l12_1.p();
  };
  JsonNull.prototype.as = function (typeParamsSerializers) {
    return this.m12();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.h12());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.h12());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.h12());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.h12();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.h12());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.h12();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.h12());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.h12());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.zh('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.zh('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.zh('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.zh('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.zh('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().n12_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().o12_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().p12_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().q12_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().r12_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.s12_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.lh = function () {
    return this.s12_1;
  };
  JsonElementSerializer.prototype.t12 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.jm(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.jm(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.jm(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.mh = function (encoder, value) {
    return this.t12(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.nh = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.a12();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.u12_1 = ListSerializer(JsonElementSerializer_getInstance()).lh();
    this.v12_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.bj = function () {
    return this.u12_1.bj();
  };
  JsonArrayDescriptor.prototype.cj = function () {
    return this.u12_1.cj();
  };
  JsonArrayDescriptor.prototype.dj = function () {
    return this.u12_1.dj();
  };
  JsonArrayDescriptor.prototype.xi = function () {
    return this.u12_1.xi();
  };
  JsonArrayDescriptor.prototype.ej = function () {
    return this.u12_1.ej();
  };
  JsonArrayDescriptor.prototype.fj = function (index) {
    return this.u12_1.fj(index);
  };
  JsonArrayDescriptor.prototype.gj = function (index) {
    return this.u12_1.gj(index);
  };
  JsonArrayDescriptor.prototype.hj = function (name) {
    return this.u12_1.hj(name);
  };
  JsonArrayDescriptor.prototype.ij = function (index) {
    return this.u12_1.ij(index);
  };
  JsonArrayDescriptor.prototype.jj = function (index) {
    return this.u12_1.jj(index);
  };
  JsonArrayDescriptor.prototype.ii = function () {
    return this.v12_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.r12_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.lh = function () {
    return this.r12_1;
  };
  JsonArraySerializer.prototype.w12 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).mh(encoder, value);
  };
  JsonArraySerializer.prototype.mh = function (encoder, value) {
    return this.w12(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.nh = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).nh(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.x12_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).lh();
    this.y12_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.bj = function () {
    return this.x12_1.bj();
  };
  JsonObjectDescriptor.prototype.cj = function () {
    return this.x12_1.cj();
  };
  JsonObjectDescriptor.prototype.dj = function () {
    return this.x12_1.dj();
  };
  JsonObjectDescriptor.prototype.xi = function () {
    return this.x12_1.xi();
  };
  JsonObjectDescriptor.prototype.ej = function () {
    return this.x12_1.ej();
  };
  JsonObjectDescriptor.prototype.fj = function (index) {
    return this.x12_1.fj(index);
  };
  JsonObjectDescriptor.prototype.gj = function (index) {
    return this.x12_1.gj(index);
  };
  JsonObjectDescriptor.prototype.hj = function (name) {
    return this.x12_1.hj(name);
  };
  JsonObjectDescriptor.prototype.ij = function (index) {
    return this.x12_1.ij(index);
  };
  JsonObjectDescriptor.prototype.jj = function (index) {
    return this.x12_1.jj(index);
  };
  JsonObjectDescriptor.prototype.ii = function () {
    return this.y12_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.q12_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.lh = function () {
    return this.q12_1;
  };
  JsonObjectSerializer.prototype.z12 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).mh(encoder, value);
  };
  JsonObjectSerializer.prototype.mh = function (encoder, value) {
    return this.z12(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.nh = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).nh(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.n12_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.lh = function () {
    return this.n12_1;
  };
  JsonPrimitiveSerializer.prototype.a13 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.jm(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.jm(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.mh = function (encoder, value) {
    return this.a13(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.nh = function (decoder) {
    var result = asJsonDecoder(decoder).a12();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.o12_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.lh = function () {
    return this.o12_1;
  };
  JsonNullSerializer.prototype.b13 = function (encoder, value) {
    verify(encoder);
    encoder.nl();
  };
  JsonNullSerializer.prototype.mh = function (encoder, value) {
    return this.b13(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.nh = function (decoder) {
    verify_0(decoder);
    if (decoder.fk()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.gk();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.p12_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.lh = function () {
    return this.p12_1;
  };
  JsonLiteralSerializer.prototype.c13 = function (encoder, value) {
    verify(encoder);
    if (value.i12_1) {
      return encoder.wl(value.j12_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.sl(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.j12_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.xl(serializer_0(Companion_getInstance()).lh());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.sl(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ul(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ol(tmp3_safe_receiver);
    }
    encoder.wl(value.j12_1);
  };
  JsonLiteralSerializer.prototype.mh = function (encoder, value) {
    return this.c13(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.nh = function (decoder) {
    var result = asJsonDecoder(decoder).a12();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.d13_1.p();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.d13_1 = lazy_0($deferred);
  }
  defer$1.prototype.ii = function () {
    return _get_original__l7ku1m(this).ii();
  };
  defer$1.prototype.ej = function () {
    return _get_original__l7ku1m(this).ej();
  };
  defer$1.prototype.cj = function () {
    return _get_original__l7ku1m(this).cj();
  };
  defer$1.prototype.ij = function (index) {
    return _get_original__l7ku1m(this).ij(index);
  };
  defer$1.prototype.hj = function (name) {
    return _get_original__l7ku1m(this).hj(name);
  };
  defer$1.prototype.fj = function (index) {
    return _get_original__l7ku1m(this).fj(index);
  };
  defer$1.prototype.gj = function (index) {
    return _get_original__l7ku1m(this).gj(index);
  };
  defer$1.prototype.jj = function (index) {
    return _get_original__l7ku1m(this).jj(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.e13_1 = writer;
    this.f13_1 = true;
  }
  Composer.prototype.g13 = function () {
    this.f13_1 = true;
  };
  Composer.prototype.h13 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.i13 = function () {
    this.f13_1 = false;
  };
  Composer.prototype.j13 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.k13 = function (v) {
    return this.e13_1.l13(v);
  };
  Composer.prototype.m13 = function (v) {
    return this.e13_1.n13(v);
  };
  Composer.prototype.o13 = function (v) {
    return this.e13_1.n13(v.toString());
  };
  Composer.prototype.p13 = function (v) {
    return this.e13_1.n13(v.toString());
  };
  Composer.prototype.q13 = function (v) {
    return this.e13_1.r13(toLong_0(v));
  };
  Composer.prototype.s13 = function (v) {
    return this.e13_1.r13(toLong_0(v));
  };
  Composer.prototype.t13 = function (v) {
    return this.e13_1.r13(toLong_0(v));
  };
  Composer.prototype.u13 = function (v) {
    return this.e13_1.r13(v);
  };
  Composer.prototype.v13 = function (v) {
    return this.e13_1.n13(v.toString());
  };
  Composer.prototype.w13 = function (value) {
    return this.e13_1.x13(value);
  };
  function Composer_0(sb, json) {
    return json.i10_1.r11_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.a14_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.t13 = function (v) {
    if (this.a14_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.w13(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.m13(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.u13 = function (v) {
    if (this.a14_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.w13(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.m13(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.q13 = function (v) {
    if (this.a14_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.w13(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.m13(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.s13 = function (v) {
    if (this.a14_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.w13(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.m13(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.d14_1 = json;
    this.e14_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.g13 = function () {
    this.f13_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.e14_1;
    tmp0_this.e14_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.h13 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.e14_1;
    tmp0_this.e14_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.i13 = function () {
    this.f13_1 = false;
    this.m13('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.e14_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.m13(this.d14_1.i10_1.t11_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.j13 = function () {
    this.k13(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.g14_1 = !descriptor.jj(index) ? descriptor.gj(index).xi() : false;
    return $this.g14_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.f14_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.g14_1 = false;
  }
  JsonElementMarker.prototype.nq = function (index) {
    this.f14_1.nq(index);
  };
  JsonElementMarker.prototype.oq = function () {
    return this.f14_1.oq();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.h14(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.ii() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ej() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.hj(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.i10_1.y11_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.j14(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.y1(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.cj();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.fj(i);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.a(element);
          }
        }
        tmp$ret$0 = tmp0_filterIsInstanceTo;
        tmp$ret$1 = tmp$ret$0;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k14_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.h()) {
            var element_0 = tmp0_iterator_0.i();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.cj());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).s1(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.ij(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.ij(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.x2(name, index);
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.n14_1, 2);
    $this.l14_1 = copyOf($this.l14_1, newSize);
    $this.m14_1 = copyOf_0($this.m14_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.l14_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPath.indicies.<anonymous>' call
      tmp$ret$1 = -1;
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.m14_1 = tmp_3;
    this.n14_1 = -1;
  }
  JsonPath.prototype.o14 = function (sd) {
    var tmp0_this = this;
    tmp0_this.n14_1 = tmp0_this.n14_1 + 1 | 0;
    var depth = tmp0_this.n14_1;
    if (depth === this.l14_1.length) {
      resize(this);
    }
    this.l14_1[depth] = sd;
  };
  JsonPath.prototype.p14 = function (index) {
    this.m14_1[this.n14_1] = index;
  };
  JsonPath.prototype.q14 = function (key) {
    var tmp;
    if (!(this.m14_1[this.n14_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.n14_1 = tmp0_this.n14_1 + 1 | 0;
      tmp = tmp0_this.n14_1 === this.l14_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.l14_1[this.n14_1] = key;
    this.m14_1[this.n14_1] = -2;
  };
  JsonPath.prototype.r14 = function () {
    if (this.m14_1[this.n14_1] === -2) {
      this.l14_1[this.n14_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.s14 = function () {
    var depth = this.n14_1;
    if (this.m14_1[depth] === -2) {
      this.m14_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.n14_1;
      tmp0_this.n14_1 = tmp1 - 1 | 0;
    }
    if (!(this.n14_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.n14_1;
      tmp2_this.n14_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.t14 = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.q6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.n14_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.l14_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ej(), LIST_getInstance())) {
            if (!(this.m14_1[index] === -1)) {
              tmp0_apply.q6('[');
              tmp0_apply.p6(this.m14_1[index]);
              tmp0_apply.q6(']');
            }
          } else {
            var idx = this.m14_1[index];
            if (idx >= 0) {
              tmp0_apply.q6('.');
              tmp0_apply.q6(element.ij(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.q6('[');
            tmp0_apply.q6("'");
            tmp0_apply.p6(element);
            tmp0_apply.q6("'");
            tmp0_apply.q6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.t14();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.jm(serializer, value);
  }
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.c15_1.f15(get_TC_BEGIN_OBJ());
    if ($this.c15_1.g15() === get_TC_COMMA()) {
      $this.c15_1.h14('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.c15_1.h15()) {
      var key = $this.d15_1 ? $this.c15_1.j15() : $this.c15_1.i15();
      $this.c15_1.f15(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.k15();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.x2(key, element);
      lastToken = $this.c15_1.l15();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.c15_1.h14('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.c15_1.f15(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.c15_1.h14('Unexpected trailing comma', 0, null, 6, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function readArray($this) {
    var lastToken = $this.c15_1.l15();
    if ($this.c15_1.g15() === get_TC_COMMA()) {
      $this.c15_1.h14('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.c15_1.h15()) {
      var element = $this.k15();
      result.a(element);
      lastToken = $this.c15_1.l15();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.c15_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.v10_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          var tmp = tmp$ret$1;
          tmp0_require.h14(tmp, tmp2_require, null, 4, null);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.c15_1.f15(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.c15_1.h14('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.d15_1 ? true : !isString) {
      tmp = $this.c15_1.j15();
    } else {
      tmp = $this.c15_1.i15();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.h16_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.m16 = function ($this$$receiver, it, $cont) {
    var tmp = this.n16($this$$receiver, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.m16(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.k16_1 = this.h16_1.c15_1.g15();
            if (this.k16_1 === get_TC_STRING()) {
              this.l16_1 = readValue(this.h16_1, true);
              this.dg_1 = 2;
              continue $sm;
            } else {
              if (this.k16_1 === get_TC_OTHER()) {
                this.l16_1 = readValue(this.h16_1, false);
                this.dg_1 = 2;
                continue $sm;
              } else {
                if (this.k16_1 === get_TC_BEGIN_OBJ()) {
                  this.dg_1 = 1;
                  suspendResult = readObject_0(this.i16_1, this.h16_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.k16_1 === get_TC_BEGIN_LIST()) {
                    this.l16_1 = readArray(this.h16_1);
                    this.dg_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.h16_1.c15_1.h14("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.l16_1 = suspendResult;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            return this.l16_1;
          case 3:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 3) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.n16 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.h16_1, completion);
    i.i16_1 = $this$$receiver;
    i.j16_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.m16($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u15_1 = _this__u8e3s4;
    this.v15_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.w15_1 = this.u15_1.c15_1.f15(get_TC_BEGIN_OBJ());
            if (this.u15_1.c15_1.g15() === get_TC_COMMA()) {
              this.u15_1.c15_1.h14('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.x15_1 = LinkedHashMap_init_$Create$();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (!this.u15_1.c15_1.h15()) {
              this.dg_1 = 4;
              continue $sm;
            }

            this.y15_1 = this.u15_1.d15_1 ? this.u15_1.c15_1.j15() : this.u15_1.c15_1.i15();
            this.u15_1.c15_1.f15(get_TC_COLON());
            ;
            this.dg_1 = 2;
            suspendResult = this.v15_1.w6(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.x15_1.x2(this.y15_1, element);
            ;
            this.w15_1 = this.u15_1.c15_1.l15();
            var tmp0_subject = this.w15_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.dg_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.dg_1 = 4;
                continue $sm;
              } else {
                this.u15_1.c15_1.h14('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.dg_1 = 1;
            continue $sm;
          case 4:
            if (this.w15_1 === get_TC_BEGIN_OBJ()) {
              this.u15_1.c15_1.f15(get_TC_END_OBJ());
            } else if (this.w15_1 === get_TC_COMMA()) {
              this.u15_1.c15_1.h14('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.x15_1);
          case 5:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 5) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.c15_1 = lexer;
    this.d15_1 = configuration.p11_1;
    this.e15_1 = 0;
  }
  JsonTreeReader.prototype.k15 = function () {
    var token = this.c15_1.g15();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.e15_1 = tmp0_this.e15_1 + 1 | 0;
      if (tmp0_this.e15_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.e15_1 = tmp1_this.e15_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.c15_1.h14(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.bj().g();
    while (tmp0_iterator.h()) {
      var annotation = tmp0_iterator.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.o16_1;
    }
    return json.i10_1.w11_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.z11().i10_1.v11_1;
    }
    if (tmp) {
      return deserializer.nh(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.lh(), _this__u8e3s4.z11());
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.a12();
    var tmp1_cast = deserializer.lh();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.ii() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.g12(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.h12();
    var tmp2_elvis_lhs = deserializer.bi(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.z11();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.lh()).b1(classDiscriminator)) {
      var baseName = serializer.lh().ii();
      var actualName = actualSerializer.lh().ii();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.ej();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.vc() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.p16_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.vc() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.cj();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.ij(i);
        if (name === $this.q16_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.p16_1 = useArrayPolymorphism;
    this.q16_1 = discriminator;
  }
  PolymorphismValidator.prototype.zz = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.c10 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.lh();
    checkKind_0(this, descriptor, actualClass);
    if (!this.p16_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.d10 = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.e10 = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.i14_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.r16 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.i14_1;
    var value_0 = tmp0_getOrPut.y1(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(1);
      var answer = tmp$ret$0;
      tmp0_getOrPut.x2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.x2(tmp2_set, tmp3_set);
  };
  DescriptorSchemaCache.prototype.j14 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.s16(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.r16(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.s16 = function (descriptor, key) {
    var tmp0_safe_receiver = this.i14_1.y1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.y1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.t16_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.t16_1 === unknownKey) {
      _this__u8e3s4.t16_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.jl(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.p10_1.g15() === get_TC_COMMA()) {
      $this.p10_1.h14('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.r10_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.r10_1 === -1)) {
        hasComma = $this.p10_1.v16();
      }
    } else {
      $this.p10_1.u16(get_COLON());
    }
    var tmp;
    if ($this.p10_1.h15()) {
      if (decodingKey) {
        if ($this.r10_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.p10_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.v10_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            var tmp_0 = tmp$ret$0;
            tmp0_require.h14(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.p10_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.v10_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            var tmp_1 = tmp$ret$1;
            tmp3_require.h14(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.r10_1 = tmp0_this.r10_1 + 1 | 0;
      tmp = tmp0_this.r10_1;
    } else {
      if (hasComma) {
        $this.p10_1.h14("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.n10_1;
      var tmp1_tryCoerceValue = descriptor.gj(index);
      var tmp;
      if (!tmp1_tryCoerceValue.xi()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.p10_1.w16();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.ej(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.p10_1.x16($this.t10_1.p11_1);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.p10_1.i15();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.p10_1.v16();
    while ($this.p10_1.h15()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.p10_1.u16(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.n10_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.t10_1.u11_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.p10_1.v16();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.u10_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.nq(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.p10_1.h14('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.u10_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.oq();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.t10_1.o11_1 ? true : trySkip($this.s10_1, $this, key)) {
      $this.p10_1.z16($this.t10_1.p11_1);
    } else {
      $this.p10_1.y16(key);
    }
    return $this.p10_1.v16();
  }
  function decodeListIndex($this) {
    var hasComma = $this.p10_1.v16();
    var tmp;
    if ($this.p10_1.h15()) {
      if (!($this.r10_1 === -1) ? !hasComma : false) {
        $this.p10_1.h14('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.r10_1 = tmp0_this.r10_1 + 1 | 0;
      tmp = tmp0_this.r10_1;
    } else {
      if (hasComma) {
        $this.p10_1.h14('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.t10_1.p11_1) {
      tmp = $this.p10_1.b17();
    } else {
      tmp = $this.p10_1.a17();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.n10_1 = json;
    this.o10_1 = mode;
    this.p10_1 = lexer;
    this.q10_1 = this.n10_1.pi();
    this.r10_1 = -1;
    this.s10_1 = discriminatorHolder;
    this.t10_1 = this.n10_1.i10_1;
    this.u10_1 = this.t10_1.s11_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.z11 = function () {
    return this.n10_1;
  };
  StreamingJsonDecoder.prototype.pi = function () {
    return this.q10_1;
  };
  StreamingJsonDecoder.prototype.a12 = function () {
    return (new JsonTreeReader(this.n10_1.i10_1, this.p10_1)).k15();
  };
  StreamingJsonDecoder.prototype.sk = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.n10_1.i10_1.v11_1;
      }
      if (tmp) {
        return deserializer.nh(this);
      }
      var discriminator = classDiscriminator(deserializer.lh(), this.n10_1);
      var type = this.p10_1.c17(discriminator, this.t10_1.p11_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.bi(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.s10_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.nh(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.si_1, plus($p.message, ' at path: ') + this.p10_1.w10_1.t14(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.tk = function (descriptor) {
    var newMode = switchMode(this.n10_1, descriptor);
    this.p10_1.w10_1.o14(descriptor);
    this.p10_1.u16(newMode.f17_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.y3_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.n10_1, newMode, this.p10_1, descriptor, this.s10_1);
        break;
      default:
        var tmp_0;
        if (this.o10_1.equals(newMode) ? this.n10_1.i10_1.s11_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.n10_1, newMode, this.p10_1, descriptor, this.s10_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.uk = function (descriptor) {
    if (this.n10_1.i10_1.o11_1 ? descriptor.cj() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.p10_1.u16(this.o10_1.g17_1);
    this.p10_1.w10_1.s14();
  };
  StreamingJsonDecoder.prototype.fk = function () {
    var tmp;
    var tmp0_safe_receiver = this.u10_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g14_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.p10_1.w16();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.gk = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.fl = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.o10_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.p10_1.w10_1.r14();
    }
    var value = AbstractDecoder.prototype.fl.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.p10_1.w10_1.q14(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.jl = function (descriptor) {
    var tmp0_subject = this.o10_1;
    var tmp0 = tmp0_subject.y3_1;
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.o10_1.equals(WriteMode_MAP_getInstance())) {
      this.p10_1.w10_1.p14(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.hk = function () {
    var tmp;
    if (this.t10_1.p11_1) {
      tmp = this.p10_1.i17();
    } else {
      tmp = this.p10_1.h17();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.ik = function () {
    var value = this.p10_1.j17();
    if (!value.equals(toLong_0(value.uf()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.p10_1.h14(tmp, 0, null, 6, null);
    }
    return value.uf();
  };
  StreamingJsonDecoder.prototype.jk = function () {
    var value = this.p10_1.j17();
    if (!value.equals(toLong_0(value.vf()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.p10_1.h14(tmp, 0, null, 6, null);
    }
    return value.vf();
  };
  StreamingJsonDecoder.prototype.kk = function () {
    var value = this.p10_1.j17();
    if (!value.equals(toLong_0(value.e4()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.p10_1.h14(tmp, 0, null, 6, null);
    }
    return value.e4();
  };
  StreamingJsonDecoder.prototype.lk = function () {
    return this.p10_1.j17();
  };
  StreamingJsonDecoder.prototype.mk = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.p10_1;
      var input = tmp0_parseString.j15();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.h14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.n10_1.i10_1.x11_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.p10_1, result);
  };
  StreamingJsonDecoder.prototype.nk = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.p10_1;
      var input = tmp0_parseString.j15();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.h14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.n10_1.i10_1.x11_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.p10_1, result);
  };
  StreamingJsonDecoder.prototype.ok = function () {
    var string = this.p10_1.j15();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.p10_1.h14(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.pk = function () {
    var tmp;
    if (this.t10_1.p11_1) {
      tmp = this.p10_1.b17();
    } else {
      tmp = this.p10_1.i15();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.qk = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.p10_1, this.n10_1) : AbstractDecoder.prototype.qk.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.k17_1 = lexer;
    this.l17_1 = json.pi();
  }
  JsonDecoderForUnsignedTypes.prototype.pi = function () {
    return this.l17_1;
  };
  JsonDecoderForUnsignedTypes.prototype.jl = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.kk = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.k17_1;
      var input = tmp0_parseString.j15();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.h14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.lk = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.k17_1;
      var input = tmp0_parseString.j15();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.h14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.ik = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.k17_1;
      var input = tmp0_parseString.j15();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.h14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.jk = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.k17_1;
      var input = tmp0_parseString.j15();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.h14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.u14_1.i13();
    $this.wl(ensureNotNull($this.b15_1));
    $this.u14_1.k13(get_COLON());
    $this.u14_1.j13();
    $this.wl(descriptor.ii());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.u14_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.u14_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.u14_1.e13_1, $this.a15_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.u14_1 = composer;
    this.v14_1 = json;
    this.w14_1 = mode;
    this.x14_1 = modeReuseCache;
    this.y14_1 = this.v14_1.pi();
    this.z14_1 = this.v14_1.i10_1;
    this.a15_1 = false;
    this.b15_1 = null;
    var i = this.w14_1.y3_1;
    if (!(this.x14_1 == null)) {
      if (!(this.x14_1[i] === null) ? true : !(this.x14_1[i] === this)) {
        this.x14_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.z11 = function () {
    return this.v14_1;
  };
  StreamingJsonEncoder.prototype.pi = function () {
    return this.y14_1;
  };
  StreamingJsonEncoder.prototype.om = function (descriptor, index) {
    return this.z14_1.n11_1;
  };
  StreamingJsonEncoder.prototype.jm = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.z11().i10_1.v11_1;
      }
      if (tmp) {
        serializer.mh(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.lh(), this.z11());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.lh().ej());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.b15_1 = baseClassDiscriminator;
      actualSerializer.mh(this, value);
    }
  };
  StreamingJsonEncoder.prototype.tk = function (descriptor) {
    var newMode = switchMode(this.v14_1, descriptor);
    if (!equals(new Char(newMode.f17_1), new Char(get_INVALID()))) {
      this.u14_1.k13(newMode.f17_1);
      this.u14_1.g13();
    }
    if (!(this.b15_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.b15_1 = null;
    }
    if (this.w14_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.x14_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.y3_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.u14_1, this.v14_1, newMode, this.x14_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.uk = function (descriptor) {
    if (!equals(new Char(this.w14_1.g17_1), new Char(get_INVALID()))) {
      this.u14_1.h13();
      this.u14_1.i13();
      this.u14_1.k13(this.w14_1.g17_1);
    }
  };
  StreamingJsonEncoder.prototype.ll = function (descriptor, index) {
    var tmp0_subject = this.w14_1;
    var tmp0 = tmp0_subject.y3_1;
    switch (tmp0) {
      case 1:
        if (!this.u14_1.f13_1) {
          this.u14_1.k13(get_COMMA());
        }

        this.u14_1.i13();
        ;
        break;
      case 2:
        if (!this.u14_1.f13_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.u14_1.k13(get_COMMA());
            this.u14_1.i13();
            tmp_0 = true;
          } else {
            this.u14_1.k13(get_COLON());
            this.u14_1.j13();
            tmp_0 = false;
          }
          tmp.a15_1 = tmp_0;
        } else {
          this.a15_1 = true;
          this.u14_1.i13();
        }

        break;
      case 3:
        if (index === 0)
          this.a15_1 = true;
        if (index === 1) {
          this.u14_1.k13(get_COMMA());
          this.u14_1.j13();
          this.a15_1 = false;
        }

        break;
      default:
        if (!this.u14_1.f13_1) {
          this.u14_1.k13(get_COMMA());
        }

        this.u14_1.i13();
        this.wl(descriptor.ij(index));
        this.u14_1.k13(get_COLON());
        this.u14_1.j13();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.km = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.z14_1.s11_1) {
      AbstractEncoder.prototype.km.call(this, descriptor, index, serializer, value);
    }
  };
  StreamingJsonEncoder.prototype.xl = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.v14_1, this.w14_1, null) : AbstractEncoder.prototype.xl.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.nl = function () {
    this.u14_1.m13(get_NULL());
  };
  StreamingJsonEncoder.prototype.ol = function (value) {
    if (this.a15_1) {
      this.wl(value.toString());
    } else {
      this.u14_1.v13(value);
    }
  };
  StreamingJsonEncoder.prototype.pl = function (value) {
    if (this.a15_1) {
      this.wl(value.toString());
    } else {
      this.u14_1.q13(value);
    }
  };
  StreamingJsonEncoder.prototype.ql = function (value) {
    if (this.a15_1) {
      this.wl(value.toString());
    } else {
      this.u14_1.s13(value);
    }
  };
  StreamingJsonEncoder.prototype.rl = function (value) {
    if (this.a15_1) {
      this.wl(value.toString());
    } else {
      this.u14_1.t13(value);
    }
  };
  StreamingJsonEncoder.prototype.sl = function (value) {
    if (this.a15_1) {
      this.wl(value.toString());
    } else {
      this.u14_1.u13(value);
    }
  };
  StreamingJsonEncoder.prototype.tl = function (value) {
    if (this.a15_1) {
      this.wl(value.toString());
    } else {
      this.u14_1.o13(value);
    }
    if (!this.z14_1.x11_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.u14_1.e13_1));
    }
  };
  StreamingJsonEncoder.prototype.ul = function (value) {
    if (this.a15_1) {
      this.wl(value.toString());
    } else {
      this.u14_1.p13(value);
    }
    if (!this.z14_1.x11_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.u14_1.e13_1));
    }
  };
  StreamingJsonEncoder.prototype.vl = function (value) {
    this.wl(toString_0(value));
  };
  StreamingJsonEncoder.prototype.wl = function (value) {
    return this.u14_1.w13(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.dj() ? get_unsignedNumberDescriptors().b1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).lh(), serializer_0(Companion_getInstance()).lh(), serializer_2(Companion_getInstance_2()).lh(), serializer_3(Companion_getInstance_3()).lh()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.r5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.ie(value, lastPos, i);
          _this__u8e3s4.q6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.ie(value, lastPos, value.length);
    } else {
      _this__u8e3s4.q6(value);
    }
    _this__u8e3s4.r5(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.sx();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.r17(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.p() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.o17_1 = json;
    this.p17_1 = value;
    this.q17_1 = this.z11().i10_1;
  }
  AbstractJsonTreeDecoder.prototype.z11 = function () {
    return this.o17_1;
  };
  AbstractJsonTreeDecoder.prototype.p = function () {
    return this.p17_1;
  };
  AbstractJsonTreeDecoder.prototype.pi = function () {
    return this.z11().pi();
  };
  AbstractJsonTreeDecoder.prototype.a12 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.sk = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.tx = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.tk = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.ej();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.z11();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.ii() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.z11();
        var keyDescriptor = carrierDescriptor(descriptor.gj(0), tmp0_selectMapMode.pi());
        var keyKind = keyDescriptor.ej();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.z11();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.ii() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.i10_1.q11_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.z11();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.ii() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.z11();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.ii() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.uk = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.fk = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.s17 = function (tag) {
    var currentElement = this.r17(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.t17 = function (tag) {
    return !(this.r17(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.vx = function (tag) {
    return this.t17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.u17 = function (tag) {
    var value = this.s17(tag);
    if (!this.z11().i10_1.p11_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.i12_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.wx = function (tag) {
    return this.u17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.v17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s17(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().MIN_VALUE;
        if (result <= ByteCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.xx = function (tag) {
    return this.v17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.w17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s17(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().MIN_VALUE;
        if (result <= ShortCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.yx = function (tag) {
    return this.w17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.x17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s17(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.zx = function (tag) {
    return this.x17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.y17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s17(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.ay = function (tag) {
    return this.y17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.z17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s17(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.z11().i10_1.x11_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.by = function (tag) {
    return this.z17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.a18 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s17(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.z11().i10_1.x11_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.cy = function (tag) {
    return this.a18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.b18 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s17(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.h12());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.dy = function (tag) {
    return this.b18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.c18 = function (tag) {
    var value = this.s17(tag);
    if (!this.z11().i10_1.p11_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.i12_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.h12();
  };
  AbstractJsonTreeDecoder.prototype.ey = function (tag) {
    return this.c18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.d18 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.s17(tag).h12()), this.z11()) : NamedValueDecoder.prototype.fy.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.fy = function (tag, inlineDescriptor) {
    return this.d18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.z11();
      var tmp1_tryCoerceValue = descriptor.gj(index);
      var tmp;
      if (!tmp1_tryCoerceValue.xi()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.r17(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.ej(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.r17(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.n18_1 = (!$this.z11().i10_1.s11_1 ? !descriptor.jj(index) : false) ? descriptor.gj(index).xi() : false;
    return $this.n18_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.j18_1 = value;
    this.k18_1 = polyDiscriminator;
    this.l18_1 = polyDescriptor;
    this.m18_1 = 0;
    this.n18_1 = false;
  }
  JsonTreeDecoder.prototype.p = function () {
    return this.j18_1;
  };
  JsonTreeDecoder.prototype.jl = function (descriptor) {
    while (this.m18_1 < descriptor.cj()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m18_1;
      tmp0_this.m18_1 = tmp1 + 1 | 0;
      var name = this.nx(descriptor, tmp1);
      var index = this.m18_1 - 1 | 0;
      this.n18_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.p();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).s1(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.q17_1.u11_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.fk = function () {
    return !this.n18_1 ? AbstractJsonTreeDecoder.prototype.fk.call(this) : false;
  };
  JsonTreeDecoder.prototype.ox = function (desc, index) {
    var mainName = desc.ij(index);
    if (!this.q17_1.y11_1)
      return mainName;
    if (this.p().z1().b1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.z11());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.j14(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.p().z1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.y1(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.r17 = function (tag) {
    return getValue(this.p(), tag);
  };
  JsonTreeDecoder.prototype.tk = function (descriptor) {
    if (descriptor === this.l18_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.tk.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.uk = function (descriptor) {
    var tmp;
    if (this.q17_1.o11_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ej();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.q17_1.y11_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.z11()).s16(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.p().z1().g();
    while (tmp1_iterator.h()) {
      var key = tmp1_iterator.i();
      if (!names.b1(key) ? !(key === this.k18_1) : false) {
        throw UnknownKeyException(key, this.p().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.t18_1 = value;
    this.u18_1 = this.t18_1.f();
    this.v18_1 = -1;
  }
  JsonTreeListDecoder.prototype.p = function () {
    return this.t18_1;
  };
  JsonTreeListDecoder.prototype.ox = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.r17 = function (tag) {
    return this.t18_1.j(toInt(tag));
  };
  JsonTreeListDecoder.prototype.jl = function (descriptor) {
    while (this.v18_1 < (this.u18_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.v18_1;
      tmp0_this.v18_1 = tmp1 + 1 | 0;
      return this.v18_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.g19_1 = value;
    this.h19_1 = toList(this.g19_1.z1());
    this.i19_1 = imul(this.h19_1.f(), 2);
    this.j19_1 = -1;
  }
  JsonTreeMapDecoder.prototype.p = function () {
    return this.g19_1;
  };
  JsonTreeMapDecoder.prototype.ox = function (desc, index) {
    var i = index / 2 | 0;
    return this.h19_1.j(i);
  };
  JsonTreeMapDecoder.prototype.jl = function (descriptor) {
    while (this.j19_1 < (this.i19_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.j19_1;
      tmp0_this.j19_1 = tmp1 + 1 | 0;
      return this.j19_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.r17 = function (tag) {
    return (this.j19_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.g19_1, tag);
  };
  JsonTreeMapDecoder.prototype.uk = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.lh())).sk(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.f17_1 = begin;
    this.g17_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ej();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.gj(0), _this__u8e3s4.pi());
          var keyKind = keyDescriptor.ej();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.i10_1.q11_1) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.ej(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.dj()) {
      tmp = carrierDescriptor(_this__u8e3s4.gj(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.k19(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.k19(lastPosition, currentPosition);
    var result = $this.y10_1.toString();
    $this.y10_1.ke(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.x10_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.x10_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.l19(), $this.v10_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.m19(currentPosition);
    if (currentPosition === -1) {
      $this.h14('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.l19();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.l19(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.h14(tmp_0, 0, null, 6, null);
    }
    $this.y10_1.r5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.v10_1 = startPos;
      $this.n19();
      if (($this.v10_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.h14('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.v10_1);
    }
    $this.y10_1.r5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.h14(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.m19(start);
    if (current >= charSequenceLength($this.l19()) ? true : current === -1) {
      $this.h14('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.l19();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.j15() + "'";
        $this.h14(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.l19()) - current | 0) < literalSuffix.length) {
      $this.h14('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.l19(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.j15() + "'";
          $this.h14(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.v10_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.v10_1 = 0;
    this.w10_1 = new JsonPath();
    this.x10_1 = null;
    this.y10_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.n19 = function () {
  };
  AbstractJsonLexer.prototype.o19 = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.z10 = function () {
    var nextToken = this.l15();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.l19(), this.v10_1 - 1 | 0)) + ' instead';
      this.h14(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.f15 = function (expected) {
    var token = this.l15();
    if (!(token === expected)) {
      this.p19(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.u16 = function (expected) {
    this.n19();
    var source = this.l19();
    var cpos = this.v10_1;
    $l$loop_0: while (true) {
      cpos = this.m19(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.v10_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.q19(expected);
    }
    this.v10_1 = cpos;
    this.q19(expected);
  };
  AbstractJsonLexer.prototype.q19 = function (expected) {
    var tmp0_this = this;
    tmp0_this.v10_1 = tmp0_this.v10_1 - 1 | 0;
    if ((this.v10_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.j15() === 'null' : false) {
      this.r19("Expected string literal but 'null' literal was found", this.v10_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.p19(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.p19 = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.v10_1 === charSequenceLength(this.l19()) ? true : this.v10_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.l19(), this.v10_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.v10_1 - 1 | 0;
    this.h14(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.g15 = function () {
    var source = this.l19();
    var cpos = this.v10_1;
    $l$loop_0: while (true) {
      cpos = this.m19(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.v10_1 = cpos;
      return charToTokenClass(ch);
    }
    this.v10_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.w16 = function () {
    var current = this.s19();
    current = this.m19(current);
    var len = charSequenceLength(this.l19()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.l19(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.l19(), current + 4 | 0)) === 0 : false)
      return true;
    this.v10_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.s19 = function () {
    var current = this.v10_1;
    $l$loop_0: while (true) {
      current = this.m19(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.l19(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.v10_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.x16 = function (isLenient) {
    var token = this.g15();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.j15();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.i15();
    }
    var string = tmp;
    this.x10_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.t19 = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.l19();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.i15 = function () {
    if (!(this.x10_1 == null)) {
      return takePeeked(this);
    }
    return this.a17();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.m19(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.h14('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.k19(lastPosition, currentPosition);
          currentPosition = this.m19(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.h14('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.t19(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.v10_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.b17 = function () {
    var result = this.j15();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.h14("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.j15 = function () {
    if (!(this.x10_1 == null)) {
      return takePeeked(this);
    }
    var current = this.s19();
    if (current >= charSequenceLength(this.l19()) ? true : current === -1) {
      var tmp = current;
      this.h14('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.l19(), current));
    if (token === 1) {
      return this.i15();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.l19(), current));
      this.h14(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.l19(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.l19())) {
        usedAppend = true;
        this.k19(this.v10_1, current);
        var eof = this.m19(current);
        if (eof === -1) {
          this.v10_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.t19(this.v10_1, current);
    } else {
      tmp_1 = decodedString(this, this.v10_1, current);
    }
    var result = tmp_1;
    this.v10_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.k19 = function (fromIndex, toIndex) {
    this.y10_1.ie(this.l19(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.z16 = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.g15();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.j15();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.g15();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.j15();
        } else {
          this.a17();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.v10_1, 'found ] instead of } at path: ' + this.w10_1, this.l19());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.v10_1, 'found } instead of ] at path: ' + this.w10_1, this.l19());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.h14('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.l15();
      if (tokenStack.f() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.l19() + "', currentPosition=" + this.v10_1 + ')';
  };
  AbstractJsonLexer.prototype.y16 = function (key) {
    var processed = this.t19(0, this.v10_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.r19("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.r19 = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(hint) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.w10_1.t14() + hintMessage, this.l19());
  };
  AbstractJsonLexer.prototype.h14 = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.v10_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.r19(message, position, hint);
  };
  AbstractJsonLexer.prototype.j17 = function () {
    var current = this.s19();
    current = this.m19(current);
    if (current >= charSequenceLength(this.l19()) ? true : current === -1) {
      this.h14('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.l19(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.l19())) {
        this.h14('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.l19(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.h14("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.l19()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.h14(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.u5(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.w5(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.x(new Long(0, 0)) > 0) {
        this.h14('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.h14('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.h14('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.l19(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.h14('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.v10_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.s5();
      } else {
        this.h14('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.h17 = function () {
    return consumeBoolean(this, this.s19());
  };
  AbstractJsonLexer.prototype.i17 = function () {
    var current = this.s19();
    if (current === charSequenceLength(this.l19())) {
      this.h14('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.l19(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.v10_1 === charSequenceLength(this.l19())) {
        this.h14('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.l19(), this.v10_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.h14('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.v10_1 = tmp0_this.v10_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().v19_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().u19_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.u19_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.v19_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.u19_1 = charArray(117);
    this.v19_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.a1a_1 = source;
  }
  StringJsonLexer.prototype.l19 = function () {
    return this.a1a_1;
  };
  StringJsonLexer.prototype.m19 = function (position) {
    return position < this.a1a_1.length ? position : -1;
  };
  StringJsonLexer.prototype.l15 = function () {
    var source = this.a1a_1;
    $l$loop: while (!(this.v10_1 === -1) ? this.v10_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.v10_1;
      tmp0_this.v10_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.v16 = function () {
    var current = this.s19();
    if (current === this.a1a_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.a1a_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.v10_1 = tmp0_this.v10_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.h15 = function () {
    var current = this.v10_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.a1a_1.length) {
      var c = charSequenceGet(this.a1a_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.v10_1 = current;
      return this.o19(c);
    }
    this.v10_1 = current;
    return false;
  };
  StringJsonLexer.prototype.s19 = function () {
    var current = this.v10_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.a1a_1.length) {
      var c = charSequenceGet(this.a1a_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.v10_1 = current;
    return current;
  };
  StringJsonLexer.prototype.u16 = function (expected) {
    if (this.v10_1 === -1) {
      this.q19(expected);
    }
    var source = this.a1a_1;
    $l$loop: while (this.v10_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.v10_1;
      tmp0_this.v10_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.q19(expected);
    }
    this.q19(expected);
  };
  StringJsonLexer.prototype.a17 = function () {
    this.u16(get_STRING());
    var current = this.v10_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.a1a_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.p19(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.a1a_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.a1a_1, this.v10_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.v10_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.a1a_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.c17 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.v10_1;
    try {
      if (!(this.l15() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.a17() : this.b17();
      if (firstKey === keyToMatch) {
        if (!(this.l15() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.i15() : this.b17();
        return result;
      }
      return null;
    }finally {
      this.v10_1 = positionSnapshot;
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.k10_1;
  }
  function JsonToStringWriter() {
    this.l10_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.r13 = function (value) {
    this.l10_1.p6(value);
  };
  JsonToStringWriter.prototype.l13 = function (char) {
    this.l10_1.r5(char);
  };
  JsonToStringWriter.prototype.n13 = function (text) {
    this.l10_1.q6(text);
  };
  JsonToStringWriter.prototype.x13 = function (text) {
    printQuoted(this.l10_1, text);
  };
  JsonToStringWriter.prototype.m10 = function () {
    this.l10_1.le();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.l10_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.xi = get_isNullable;
  defer$1.prototype.dj = get_isInline;
  defer$1.prototype.bj = get_annotations;
  PolymorphismValidator.prototype.b10 = contextual;
  StreamingJsonDecoder.prototype.gl = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.il = decodeSequentially;
  StreamingJsonDecoder.prototype.kl = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.sk = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.gl = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.il = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.kl = decodeCollectionSize;
  StreamingJsonEncoder.prototype.mm = encodeNotNullMark;
  StreamingJsonEncoder.prototype.nm = beginCollection;
  StreamingJsonEncoder.prototype.lm = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.gl = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.il = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.kl = decodeCollectionSize;
  JsonTreeDecoder.prototype.gl = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.il = decodeSequentially;
  JsonTreeDecoder.prototype.kl = decodeCollectionSize;
  JsonTreeListDecoder.prototype.gl = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.il = decodeSequentially;
  JsonTreeListDecoder.prototype.kl = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.gl = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.il = decodeSequentially;
  JsonTreeMapDecoder.prototype.kl = decodeCollectionSize;
  //endregion
  //region block: init
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map

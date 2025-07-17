(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ee;
  var toString = kotlin_kotlin.$_$.qa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var isInterface = kotlin_kotlin.$_$.ba;
  var ByteArrayContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.h1;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var getKClass = kotlin_kotlin.$_$.f;
  var Long = kotlin_kotlin.$_$.xc;
  var discard = kotlin_io_ktor_ktor_io.$_$.j1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.i;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.e;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Map = kotlin_kotlin.$_$.q5;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Set = kotlin_kotlin.$_$.v5;
  var firstOrNull = kotlin_kotlin.$_$.x6;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.x4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var isArray = kotlin_kotlin.$_$.t9;
  var List = kotlin_kotlin.$_$.o5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var filterNotNull = kotlin_kotlin.$_$.v6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var singleOrNull = kotlin_kotlin.$_$.v7;
  var Collection = kotlin_kotlin.$_$.j5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationParameters, 'SerializationParameters', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializationNegotiationParameters, 'SerializationNegotiationParameters', classMeta, SerializationParameters, undefined, undefined, undefined, []);
  setMetadataFor($serializeCOROUTINE$0, '$serializeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KotlinxSerializationBase, 'KotlinxSerializationBase', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(KotlinxSerializationConverter$serializationBase$1, undefined, classMeta, KotlinxSerializationBase, undefined, undefined, undefined, [1]);
  setMetadataFor($deserializeCOROUTINE$1, '$deserializeCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KotlinxSerializationConverter, 'KotlinxSerializationConverter', classMeta, undefined, [ContentConverter], undefined, undefined, [4, 3]);
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.v56_1 = format;
    this.w56_1 = value;
    this.x56_1 = typeInfo;
    this.y56_1 = charset;
    this.z56_1 = contentType;
  }
  SerializationNegotiationParameters.prototype.a57 = function () {
    return this.v56_1;
  };
  SerializationNegotiationParameters.prototype.p = function () {
    return this.w56_1;
  };
  SerializationNegotiationParameters.prototype.b57 = function () {
    return this.x56_1;
  };
  SerializationNegotiationParameters.prototype.c57 = function () {
    return this.y56_1;
  };
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r57_1 = _this__u8e3s4;
    this.s57_1 = parameters;
  }
  $serializeCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.eg_1 = 2;
            var tmp_0 = this;
            tmp_0.u57_1 = serializerFromTypeInfo(this.s57_1.b57(), this.r57_1.y57_1.pi());
            this.s57_1.h57_1 = this.u57_1;
            this.dg_1 = 1;
            suspendResult = this.r57_1.z57(this.s57_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t57_1 = suspendResult;
            this.eg_1 = 5;
            this.dg_1 = 3;
            continue $sm;
          case 2:
            this.eg_1 = 5;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof SerializationException) {
              this.v57_1 = this.gg_1;
              var tmp_2 = this;
              tmp_2.t57_1 = null;
              this.dg_1 = 3;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            this.eg_1 = 5;
            this.w57_1 = this.t57_1;
            if (!(this.w57_1 == null)) {
              return this.w57_1;
            }

            this.x57_1 = guessSerializer(this.s57_1.p(), this.r57_1.y57_1.pi());
            this.s57_1.h57_1 = this.x57_1;
            this.dg_1 = 4;
            suspendResult = this.r57_1.z57(this.s57_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
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
  function KotlinxSerializationBase(format) {
    this.y57_1 = format;
  }
  KotlinxSerializationBase.prototype.a58 = function (parameters, $cont) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function SerializationParameters(format, value, typeInfo, charset) {
    this.d57_1 = format;
    this.e57_1 = value;
    this.f57_1 = typeInfo;
    this.g57_1 = charset;
  }
  SerializationParameters.prototype.a57 = function () {
    return this.d57_1;
  };
  SerializationParameters.prototype.p = function () {
    return this.e57_1;
  };
  SerializationParameters.prototype.b57 = function () {
    return this.f57_1;
  };
  SerializationParameters.prototype.c57 = function () {
    return this.g57_1;
  };
  SerializationParameters.prototype.i57 = function () {
    var tmp = this.h57_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  function serialization(_this__u8e3s4, contentType, format) {
    var tmp = new KotlinxSerializationConverter(format);
    _this__u8e3s4.p41(contentType, tmp, null, 4, null);
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.ni(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      var tmp_0 = withCharsetIfNeeded(contentType, charset);
      tmp = TextContent_init_$Create$(content, tmp_0, null, 4, null);
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.qi(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = ByteArrayContent_init_$Create$(content_0, contentType, null, 4, null);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.c58_1 = this$0;
    KotlinxSerializationBase.call(this, this$0.d58_1);
  }
  KotlinxSerializationConverter$serializationBase$1.prototype.f58 = function (parameters, $cont) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).vc() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).vc());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.c58_1, parameters.i57(), parameters.a57(), parameters.p(), parameters.z56_1, parameters.c57());
  };
  KotlinxSerializationConverter$serializationBase$1.prototype.z57 = function (parameters, $cont) {
    return this.f58(parameters, $cont);
  };
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o58_1 = _this__u8e3s4;
    this.p58_1 = charset;
    this.q58_1 = typeInfo;
    this.r58_1 = content;
  }
  $deserializeCOROUTINE$1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.s58_1 = serializerFromTypeInfo(this.q58_1, this.o58_1.d58_1.pi());
            this.dg_1 = 1;
            suspendResult = this.r58_1.b33(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            this.eg_1 = 2;
            var tmp0_subject = this.o58_1.d58_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this.o58_1.d58_1.oi(this.s58_1, readText$default(contentPacket, this.p58_1, 0, 2, null));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this.o58_1.d58_1.ri(this.s58_1, readBytes$default(contentPacket, 0, 1, null));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this.o58_1.d58_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            this.eg_1 = 4;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              var cause = this.gg_1;
              throw new JsonConvertException('Illegal input', cause);
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            this.eg_1 = 4;
            return Unit_getInstance();
          case 4:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 4) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter(format) {
    this.d58_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.d58_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.d58_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.d58_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.e58_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  KotlinxSerializationConverter.prototype.t58 = function (contentType, charset, typeInfo, value, $cont) {
    return this.u58(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.q41 = function (contentType, charset, typeInfo, value, $cont) {
    return this.t58(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.u58 = function (contentType, charset, typeInfo, value, $cont) {
    return this.e58_1.a58(new SerializationNegotiationParameters(this.d58_1, value, typeInfo, charset, contentType), $cont);
  };
  KotlinxSerializationConverter.prototype.r41 = function (contentType, charset, typeInfo, value, $cont) {
    return this.u58(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.s41 = function (charset, typeInfo, content, $cont) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.a3h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.id().k() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.ui(typeInfo.y3g_1, null, 2, null);
      tmp_0 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.y3g_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp$ret$0 = guessSerializer(tmp1_safe_receiver, module_0);
            tmp$ret$1 = tmp$ret$0;
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
              var keySerializer = elementSerializer(value.z1(), module_0);
              var valueSerializer = elementSerializer(value.a2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp_1 = getKClassFromExpression(value);
              var tmp3_elvis_lhs = module_0.ui(tmp_1, null, 2, null);
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_2 = tmp;
    return isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.a3h_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jd()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.distinctBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp1_distinctBy.g();
    while (tmp0_iterator_0.h()) {
      var e = tmp0_iterator_0.i();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.lh().ii();
      var key = tmp$ret$3;
      if (set.a(key)) {
        list.a(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.f() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.g();
      while (tmp0_iterator_1.h()) {
        var item_0 = tmp0_iterator_1.i();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.lh().ii();
        tmp0_mapTo_0.a(tmp$ret$5);
      }
      tmp$ret$6 = tmp0_mapTo_0;
      tmp$ret$7 = tmp$ret$6;
      var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp2_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.lh().xi()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.g();
      while (tmp0_iterator_2.h()) {
        var element = tmp0_iterator_2.i();
        var tmp$ret$9;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$9 = element == null;
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-ir.js.map

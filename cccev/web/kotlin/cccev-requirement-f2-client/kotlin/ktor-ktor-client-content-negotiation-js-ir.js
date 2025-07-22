(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-serialization-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    root['ktor-ktor-client-content-negotiation-js-ir'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-serialization-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.j;
  var isObject = kotlin_kotlin.$_$.da;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.n;
  var contentType = kotlin_io_ktor_ktor_http.$_$.b1;
  var suitableCharset$default = kotlin_io_ktor_ktor_serialization.$_$.c;
  var plus = kotlin_kotlin.$_$.n7;
  var toMutableSet = kotlin_kotlin.$_$.e8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.d;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.o;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.f;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.h;
  var objectMeta = kotlin_kotlin.$_$.la;
  var toString = kotlin_kotlin.$_$.qa;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.l;
  var Collection = kotlin_kotlin.$_$.j5;
  var isInterface = kotlin_kotlin.$_$.ba;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.s;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.a1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Unit = kotlin_kotlin.$_$.od;
  var charset = kotlin_io_ktor_ktor_http.$_$.y;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.r;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var equals = kotlin_kotlin.$_$.m9;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.u1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.uc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.y4;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClass = kotlin_kotlin.$_$.f;
  var setOf = kotlin_kotlin.$_$.u7;
  var endsWith$default = kotlin_kotlin.$_$.o;
  var startsWith$default = kotlin_kotlin.$_$.w;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.l1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config, 'Config', classMeta, undefined, [Configuration], undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor($convertRequestCOROUTINE$0, '$convertRequestCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, undefined, undefined, undefined, undefined, [2, 4]);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function get_DefaultCommonIgnoredTypes() {
    init_properties_ContentNegotiation_kt_d83xzi();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.g54_1 = converter;
    this.h54_1 = contentTypeToSend;
    this.i54_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.j54_1 = $pattern;
  }
  ContentNegotiation$Config$defaultMatcher$1.prototype.k54 = function (contentType) {
    return contentType.d3j(this.j54_1);
  };
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.t54_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda.prototype.w44 = function ($this$intercept, it, $cont) {
    var tmp = this.x44($this$intercept, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ContentNegotiation$Plugin$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = this.t54_1.a55(this.u54_1.h3g_1, this.u54_1.k3f(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w54_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.w54_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = this.w54_1;
            }

            tmp_0.x54_1 = tmp_1;
            this.dg_1 = 2;
            suspendResult = this.u54_1.l3f(this.x54_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
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
  ContentNegotiation$Plugin$install$slambda.prototype.x44 = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.t54_1, completion);
    i.u54_1 = $this$intercept;
    i.v54_1 = it;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.w44($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.j55_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda_1.prototype.q45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.r45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.m55_1 = this.l55_1.v2();
            this.n55_1 = this.l55_1.w2();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.k55_1.h3g_1.d45());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.o55_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.k55_1.h3g_1.m48().l3n();
            tmp_2.p55_1 = suitableCharset$default(tmp_3, null, 1, null);
            this.dg_1 = 1;
            suspendResult = this.j55_1.t55(this.m55_1, this.n55_1, this.o55_1, this.p55_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q55_1 = suspendResult;
            var tmp_4 = this;
            var tmp_5;
            if (this.q55_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_5 = this.q55_1;
            }

            tmp_4.r55_1 = tmp_5;
            this.s55_1 = new HttpResponseContainer(this.m55_1, this.r55_1);
            this.dg_1 = 2;
            suspendResult = this.k55_1.l3f(this.s55_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
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
  ContentNegotiation$Plugin$install$slambda_1.prototype.r45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.j55_1, completion);
    i.k55_1 = $this$intercept;
    i.l55_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.q45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.u55_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.v55_1 = tmp$ret$0;
  }
  Config.prototype.o41 = function (contentType, converter, configuration) {
    var tmp0_subject = contentType;
    var matcher = tmp0_subject.equals(Application_getInstance().v3h_1) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.w55(contentType, converter, matcher, configuration);
  };
  Config.prototype.w55 = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    tmp$ret$0 = converter;
    var registration = new ConverterRegistration(tmp$ret$0, contentTypeToSend, contentTypeMatcher);
    this.v55_1.a(registration);
  };
  function Plugin() {
    Plugin_instance = this;
    this.x55_1 = new AttributeKey('ContentNegotiation');
  }
  Plugin.prototype.o = function () {
    return this.x55_1;
  };
  Plugin.prototype.y55 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new ContentNegotiation(config.v55_1, config.u55_1);
  };
  Plugin.prototype.h47 = function (block) {
    return this.y55(block);
  };
  Plugin.prototype.z55 = function (plugin, scope) {
    var tmp = Phases_getInstance().h4d_1;
    scope.c44_1.l3g(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().c47_1;
    scope.d44_1.l3g(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  Plugin.prototype.i47 = function (plugin, scope) {
    return this.z55(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.g54_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i56_1 = _this__u8e3s4;
    this.j56_1 = request;
    this.k56_1 = body;
  }
  $convertRequestCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            var tmp0_forEach = this.i56_1.y54_1;
            var tmp0_iterator = tmp0_forEach.g();
            while (tmp0_iterator.h()) {
              var element = tmp0_iterator.i();
              accept(this.j56_1, element.h54_1);
            }

            var tmp_0;
            var tmp_1 = this.k56_1;
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp1_any = this.i56_1.z54_1;
                var tmp_2;
                if (isInterface(tmp1_any, Collection)) {
                  tmp_2 = tmp1_any.k();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp1_any.g();
                while (tmp0_iterator_0.h()) {
                  var element_0 = tmp0_iterator_0.i();
                  if (element_0.wc(this.k56_1)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            }

            if (tmp_0)
              return null;
            var tmp_3 = this;
            var tmp0_elvis_lhs = contentType_0(this.j56_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.l56_1 = tmp_4;
            var tmp_5 = this.k56_1;
            if (tmp_5 instanceof Unit) {
              this.j56_1.e46_1.w3d(HttpHeaders_getInstance().a3k_1);
              return EmptyContent_getInstance();
            }

            var tmp_6 = this;
            var tmp2_filter = this.i56_1.y54_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp2_filter.g();
            while (tmp0_iterator_1.h()) {
              var element_1 = tmp0_iterator_1.i();
              if (element_1.i54_1.k54(this.l56_1)) {
                tmp0_filterTo.a(element_1);
              }
            }

            var tmp3_takeIf = tmp0_filterTo;
            var tmp_7;
            if (!tmp3_takeIf.k()) {
              tmp_7 = tmp3_takeIf;
            } else {
              tmp_7 = null;
            }

            var tmp1_elvis_lhs = tmp_7;
            var tmp_8;
            if (tmp1_elvis_lhs == null) {
              return null;
            } else {
              tmp_8 = tmp1_elvis_lhs;
            }

            tmp_6.m56_1 = tmp_8;
            if (this.j56_1.b4v() == null)
              return null;
            this.j56_1.e46_1.w3d(HttpHeaders_getInstance().a3k_1);
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.o56_1 = this.m56_1.g();
            this.dg_1 = 2;
            continue $sm;
          case 2:
            if (!this.o56_1.h()) {
              this.dg_1 = 5;
              continue $sm;
            }

            this.p56_1 = this.o56_1.i();
            this.dg_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.l56_1);
            var tmp_9 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().v37_1 : tmp0_elvis_lhs_0;
            var tmp_10 = ensureNotNull(this.j56_1.b4v());
            var tmp_11;
            if (!equals(this.k56_1, NullBody_getInstance())) {
              tmp_11 = this.k56_1;
            } else {
              tmp_11 = null;
            }

            suspendResult = this.p56_1.g54_1.r41(this.l56_1, tmp_9, tmp_10, tmp_11, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              this.n56_1 = result;
              this.dg_1 = 6;
              continue $sm;
            } else {
              this.dg_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.dg_1 = 2;
            continue $sm;
          case 5:
            this.n56_1 = null;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.n56_1;
            var tmp_12;
            if (tmp2_elvis_lhs == null) {
              var tmp_13 = "Can't convert " + toString(this.k56_1) + ' with contentType ' + this.l56_1 + ' using converters ';
              throw new ContentConverterException(tmp_13 + joinToString$default(this.m56_1, null, null, null, 0, null, ContentNegotiation$convertRequest$lambda, 31, null));
            } else {
              tmp_12 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_12;
            return serializedContent;
          case 7:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 7) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.y54_1 = registrations;
    this.z54_1 = ignoredTypes;
  }
  ContentNegotiation.prototype.a55 = function (request, body, $cont) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ContentNegotiation.prototype.t55 = function (info, body, responseContentType, charset, $cont) {
    if (!isInterface(body, ByteReadChannel))
      return null;
    if (this.z54_1.b1(info.y3g_1))
      return null;
    var tmp$ret$8;
    // Inline function 'kotlin.takeIf' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.y54_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
      tmp$ret$0 = element.i54_1.k54(responseContentType);
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_map = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator_0 = tmp1_map.g();
    while (tmp0_iterator_0.h()) {
      var item = tmp0_iterator_0.i();
      var tmp$ret$3;
      // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
      tmp$ret$3 = item.g54_1;
      tmp0_mapTo.a(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp2_takeIf = tmp$ret$5;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$7;
    // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$6 = !tmp2_takeIf.k();
    tmp$ret$7 = tmp$ret$6;
    if (tmp$ret$7) {
      tmp = tmp2_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$8 = tmp;
    var tmp0_elvis_lhs = tmp$ret$8;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var suitableConverters = tmp_0;
    return deserialize(suitableConverters, body, info, charset, $cont);
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function init_properties_ContentNegotiation_kt_d83xzi() {
    if (properties_initialized_ContentNegotiation_kt_1ayduy) {
    } else {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().ce(), PrimitiveClasses_getInstance().yd(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.prototype.k54 = function (contentType) {
    if (contentType.d3j(Application_getInstance().v3h_1)) {
      return true;
    }
    var value = contentType.c3j().toString();
    var tmp;
    if (startsWith$default(value, 'application/', false, 2, null)) {
      tmp = endsWith$default(value, '+json', false, 2, null);
    } else {
      tmp = false;
    }
    return tmp;
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    init_properties_DefaultIgnoredTypesJs_kt_b6fzr7();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function init_properties_DefaultIgnoredTypesJs_kt_b6fzr7() {
    if (properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    } else {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      DefaultIgnoredTypes = tmp$ret$0;
    }
  }
  //region block: post-declaration
  Config.prototype.p41 = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map

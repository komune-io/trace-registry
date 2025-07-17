(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    root['ktor-ktor-serialization-js-ir'] = factory(typeof this['ktor-ktor-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var captureStack = kotlin_kotlin.$_$.e9;
  var Exception = kotlin_kotlin.$_$.uc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.r;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.e1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var isInterface = kotlin_kotlin.$_$.ba;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var isObject = kotlin_kotlin.$_$.da;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ContentConvertException, 'ContentConvertException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(JsonConvertException, 'JsonConvertException', classMeta, ContentConvertException, undefined, undefined, undefined, []);
  function register$default(contentType, converter, configuration, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      configuration = Configuration$register$lambda;
    }
    var tmp;
    if ($handler == null) {
      this.o41(contentType, converter, configuration);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(contentType, converter, configuration);
    }
    return tmp;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function serialize(contentType, charset, typeInfo, value, $cont) {
    return this.r41(contentType, charset, typeInfo, value, $cont);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $cont) {
    return this.q41(contentType, charset, typeInfo, ensureNotNull(value), $cont);
  }
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, undefined, undefined, undefined, undefined, [4, 3]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(deserialize$o$collect$slambda, 'deserialize$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(deserialize$slambda, 'deserialize$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($deserializeCOROUTINE$0, '$deserializeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  //endregion
  function ContentConvertException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    ContentConvertException.call($this, message, cause);
    return $this;
  }
  function ContentConvertException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = ContentConvertException_init_$Init$(message, cause, $mask0, $marker, Object.create(ContentConvertException.prototype));
    captureStack(tmp, ContentConvertException_init_$Create$);
    return tmp;
  }
  function ContentConvertException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  function JsonConvertException(message, cause) {
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  function Configuration$register$lambda($this$null) {
    return Unit_getInstance();
  }
  function Configuration() {
  }
  function ContentConverter() {
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $cont) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharset$default(_this__u8e3s4, defaultCharset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultCharset = Charsets_getInstance().v37_1;
    return suitableCharset(_this__u8e3s4, defaultCharset);
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.g12(HttpHeaders_getInstance().j3j_1)).g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      var charset = tmp1_loop_parameter.v2();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().a3b(charset))
        return Companion_getInstance().z3a(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.f42_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.k1u = function (value, $cont) {
    return this.f42_1(value, $cont);
  };
  function deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.o42_1 = $collector;
    this.p42_1 = $charset;
    this.q42_1 = $typeInfo;
    this.r42_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$o$collect$slambda.prototype.u42 = function (value, $cont) {
    var tmp = this.v42(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  deserialize$o$collect$slambda.prototype.kh = function (p1, $cont) {
    return this.u42((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$o$collect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = this.s42_1.s41(this.p42_1, this.q42_1, this.r42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t42_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = this.o42_1.k1u(this.t42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  deserialize$o$collect$slambda.prototype.v42 = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.o42_1, this.p42_1, this.q42_1, this.r42_1, completion);
    i.s42_1 = value;
    return i;
  };
  function deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $cont) {
      return i.u42(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e43_1 = _this__u8e3s4;
    this.f43_1 = collector;
  }
  $collectCOROUTINE$1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0(this.f43_1, this.e43_1.h43_1, this.e43_1.i43_1, this.e43_1.j43_1, null);
            suspendResult = this.e43_1.g43_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 2) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv($tmp0_map, $charset, $typeInfo, $body) {
    this.g43_1 = $tmp0_map;
    this.h43_1 = $charset;
    this.i43_1 = $typeInfo;
    this.j43_1 = $body;
  }
  _no_name_provided__qut3iv.prototype.k43 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$1(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  _no_name_provided__qut3iv.prototype.w1t = function (collector, $cont) {
    return this.k43(collector, $cont);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.t43_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$slambda.prototype.v43 = function (it, $cont) {
    var tmp = this.yg(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  deserialize$slambda.prototype.kh = function (p1, $cont) {
    return this.v43((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        if (tmp === 0) {
          this.eg_1 = 1;
          return !(this.u43_1 == null) ? true : this.t43_1.b2y();
        } else if (tmp === 1) {
          throw this.gg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  deserialize$slambda.prototype.yg = function (it, completion) {
    var i = new deserialize$slambda(this.t43_1, completion);
    i.u43_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $cont) {
      return i.v43(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b42_1 = _this__u8e3s4;
    this.c42_1 = body;
    this.d42_1 = typeInfo;
    this.e42_1 = charset;
  }
  $deserializeCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp0_map = asFlow(this.b42_1);
            var tmp_0 = new _no_name_provided__qut3iv(tmp0_map, this.e42_1, this.d42_1, this.c42_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.c42_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1;
            if (!(result == null)) {
              tmp_1 = result;
            } else {
              if (!this.c42_1.b2y()) {
                tmp_1 = this.c42_1;
              } else {
                var tmp0_safe_receiver = this.d42_1.a3h_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jd()) === true) {
                  tmp_1 = NullBody_getInstance();
                } else {
                  var tmp_2 = 'No suitable converter found for ' + this.d42_1;
                  throw ContentConvertException_init_$Create$(tmp_2, null, 2, null);
                }
              }
            }

            return tmp_1;
          case 2:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 2) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = suitableCharset$default;
  _.$_$.d = Configuration;
  _.$_$.e = ContentConverter;
  _.$_$.f = JsonConvertException;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-js-ir.js.map

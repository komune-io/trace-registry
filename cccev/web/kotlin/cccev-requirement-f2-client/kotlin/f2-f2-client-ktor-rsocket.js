(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './rsocket-kotlin-rsocket-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-client-core-js-ir.js', './rsocket-kotlin-rsocket-ktor-client-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './f2-f2-dsl-function.js', './f2-f2-client-core.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./rsocket-kotlin-rsocket-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./rsocket-kotlin-rsocket-ktor-client-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./f2-f2-dsl-function.js'), require('./f2-f2-client-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['rsocket-kotlin-rsocket-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'rsocket-kotlin-rsocket-core-js-ir' was not found. Please, check whether 'rsocket-kotlin-rsocket-core-js-ir' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['rsocket-kotlin-rsocket-ktor-client-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'rsocket-kotlin-rsocket-ktor-client-js-ir' was not found. Please, check whether 'rsocket-kotlin-rsocket-ktor-client-js-ir' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['f2-f2-dsl-function'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'f2-f2-dsl-function' was not found. Please, check whether 'f2-f2-dsl-function' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['f2-f2-client-core'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'f2-f2-client-core' was not found. Please, check whether 'f2-f2-client-core' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-rsocket'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'f2-f2-client-ktor-rsocket'.");
    }
    root['f2-f2-client-ktor-rsocket'] = factory(typeof this['f2-f2-client-ktor-rsocket'] === 'undefined' ? {} : this['f2-f2-client-ktor-rsocket'], this['kotlin-kotlin-stdlib-js-ir'], this['rsocket-kotlin-rsocket-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-client-core-js-ir'], this['rsocket-kotlin-rsocket-ktor-client-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['f2-f2-dsl-function'], this['f2-f2-client-core'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_rsocket_kotlin_rsocket_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_client_core, kotlin_io_rsocket_kotlin_rsocket_ktor_client, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_f2_f2_client_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var Payload = kotlin_io_rsocket_kotlin_rsocket_core.$_$.g;
  var isInterface = kotlin_kotlin.$_$.ba;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var PayloadFromBuilder = kotlin_io_rsocket_kotlin_rsocket_core.$_$.e;
  var RoutingMetadata = kotlin_io_rsocket_kotlin_rsocket_core.$_$.c;
  var metadata = kotlin_io_rsocket_kotlin_rsocket_core.$_$.d;
  var data = kotlin_io_rsocket_kotlin_rsocket_core.$_$.h;
  var hashCode = kotlin_kotlin.$_$.r9;
  var equals = kotlin_kotlin.$_$.m9;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Plugin_getInstance_0 = kotlin_io_rsocket_kotlin_rsocket_ktor_client.$_$.b;
  var RSocketConnector = kotlin_io_rsocket_kotlin_rsocket_core.$_$.b;
  var PayloadMimeType = kotlin_io_rsocket_kotlin_rsocket_core.$_$.f;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.p;
  var getKClass = kotlin_kotlin.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.y4;
  var arrayOf = kotlin_kotlin.$_$.rd;
  var createKType = kotlin_kotlin.$_$.c;
  var createKTypeParameter = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var toList$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var copyToArray = kotlin_kotlin.$_$.n6;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var promise$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var F2Supplier = kotlin_city_smartb_f2_f2_dsl_function.$_$.c;
  var F2Function = kotlin_city_smartb_f2_f2_dsl_function.$_$.b;
  var F2Consumer = kotlin_city_smartb_f2_f2_dsl_function.$_$.a;
  var F2ClientType_RSOCKET_getInstance = kotlin_city_smartb_f2_f2_client_core.$_$.b;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var rSocket$default = kotlin_io_rsocket_kotlin_rsocket_ktor_client.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(RSocketClient$requestStream$o$collect$slambda, 'RSocketClient$requestStream$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$2, '$collectCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketClient, 'RSocketClient', classMeta, undefined, undefined, undefined, undefined, [2]);
  setMetadataFor(Response, 'Response', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RSocketClientBuilder, 'RSocketClientBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda, 'RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_0, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketF2Client$supplier$o$invoke$slambda, 'RSocketF2Client$supplier$o$invoke$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(RSocketF2Client$supplier$1, undefined, classMeta, undefined, [F2Supplier], undefined, undefined, []);
  setMetadataFor(RSocketF2Client$function$1, undefined, classMeta, undefined, [F2Function], undefined, undefined, []);
  setMetadataFor(RSocketF2Client$consumer$1, undefined, classMeta, undefined, [F2Consumer], undefined, undefined, []);
  setMetadataFor(RSocketF2Client, 'RSocketF2Client', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RSocketF2ClientBuilder$build$slambda, 'RSocketF2ClientBuilder$build$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketF2ClientBuilder, 'RSocketF2ClientBuilder', classMeta, undefined, undefined, undefined, undefined, [2]);
  //endregion
  function RSocketClient$requestStream$o$collect$slambda($collector, resultContinuation) {
    this.r6h_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketClient$requestStream$o$collect$slambda.prototype.s5t = function (value, $cont) {
    var tmp = this.t5t(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketClient$requestStream$o$collect$slambda.prototype.kh = function (p1, $cont) {
    return this.s5t((!(p1 == null) ? isInterface(p1, Payload) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketClient$requestStream$o$collect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = this.s6h_1.q5l();
            suspendResult = this.r6h_1.k1u(tmp_0.n37(0, 0, 3, null), this);
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
  RSocketClient$requestStream$o$collect$slambda.prototype.t5t = function (value, completion) {
    var i = new RSocketClient$requestStream$o$collect$slambda(this.r6h_1, completion);
    i.s6h_1 = value;
    return i;
  };
  function RSocketClient$requestStream$o$collect$slambda_0($collector, resultContinuation) {
    var i = new RSocketClient$requestStream$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.s5t(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b6i_1 = _this__u8e3s4;
    this.c6i_1 = collector;
  }
  $collectCOROUTINE$2.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = RSocketClient$requestStream$o$collect$slambda_0(this.c6i_1, null);
            suspendResult = this.b6i_1.d6i_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.e6i_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.k1u = function (value, $cont) {
    return this.e6i_1(value, $cont);
  };
  function _no_name_provided__qut3iv($tmp0_map) {
    this.d6i_1 = $tmp0_map;
  }
  _no_name_provided__qut3iv.prototype.f6i = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$2(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  _no_name_provided__qut3iv.prototype.w1t = function (collector, $cont) {
    return this.f6i(collector, $cont);
  };
  function RSocketClient(rSocket) {
    this.g6i_1 = rSocket;
  }
  RSocketClient.prototype.h6i = function (route, jsonBody) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.rsocket.kotlin.payload.buildPayload' call
      var builder = new PayloadFromBuilder();
      try {
        // Inline function 'f2.client.ktor.rsocket.RSocketClient.requestStream.<anonymous>' call
        metadata(builder, RoutingMetadata([route]));
        if (!(jsonBody == null)) {
          data(builder, jsonBody);
        } else {
          data(builder, '');
        }
        tmp$ret$0 = builder.cq();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.n2g();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    var payload = tmp$ret$0;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map = this.g6i_1.d5b(payload);
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$1 = new _no_name_provided__qut3iv(tmp0_map);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  RSocketClient.prototype.i6i = function (route, jsonBody, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      jsonBody = null;
    return this.h6i(route, jsonBody);
  };
  function Response(paylaod) {
    this.j6i_1 = paylaod;
  }
  Response.prototype.toString = function () {
    return 'Response(paylaod=' + this.j6i_1 + ')';
  };
  Response.prototype.hashCode = function () {
    return this.j6i_1 == null ? 0 : hashCode(this.j6i_1);
  };
  Response.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Response))
      return false;
    var tmp0_other_with_cast = other instanceof Response ? other : THROW_CCE();
    if (!equals(this.j6i_1, tmp0_other_with_cast.j6i_1))
      return false;
    return true;
  };
  function withRSocket(_this__u8e3s4) {
    var tmp = Plugin_getInstance();
    _this__u8e3s4.x46(tmp, null, 2, null);
    var tmp_0 = Plugin_getInstance_0();
    _this__u8e3s4.j47(tmp_0, withRSocket$lambda);
  }
  function withRSocket$lambda($this$install) {
    var tmp = $this$install;
    tmp.f6h_1 = RSocketConnector(withRSocket$lambda$lambda);
    return Unit_getInstance();
  }
  function withRSocket$lambda$lambda($this$RSocketConnector) {
    $this$RSocketConnector.i5j(withRSocket$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function withRSocket$lambda$lambda$lambda($this$connectionConfig) {
    $this$connectionConfig.e5j_1 = new PayloadMimeType('application/json', 'message/x.rsocket.routing.v0');
    return Unit_getInstance();
  }
  function RSocketClientBuilder$build$lambda($this$HttpClient) {
    withRSocket($this$HttpClient);
    return Unit_getInstance();
  }
  function RSocketClientBuilder() {
  }
  RSocketClientBuilder.prototype.cq = function () {
    var tmp = Js_getInstance();
    return HttpClient(tmp, RSocketClientBuilder$build$lambda);
  };
  function rsocketClientBuilder() {
    return new RSocketClientBuilder();
  }
  function RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda($collector, this$0, resultContinuation) {
    this.s6i_1 = $collector;
    this.t6i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda.prototype.v6i = function (value, $cont) {
    var tmp = this.w6i(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda.prototype.kh = function (p1, $cont) {
    return this.v6i((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp0_decodeFromString = this.t6i_1.z6i_1;
            var tmp1_serializer = tmp0_decodeFromString.pi();
            var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(Response), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('RESPONSE', arrayOf([createKType(PrimitiveClasses_getInstance().od(), arrayOf([]), true)]), 'invariant'), arrayOf([]), false))]), false));
            suspendResult = this.s6i_1.k1u(tmp0_decodeFromString.oi(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.u6i_1).j6i_1, this);
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
  RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda.prototype.w6i = function (value, completion) {
    var i = new RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda(this.s6i_1, this.t6i_1, completion);
    i.u6i_1 = value;
    return i;
  };
  function RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda($collector, this$0, resultContinuation);
    var l = function (value, $cont) {
      return i.v6i(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i6j_1 = _this__u8e3s4;
    this.j6j_1 = collector;
  }
  $collectCOROUTINE$3.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = RSocketF2Client$supplier$o$invoke$slambda$o$collect$slambda_0(this.j6j_1, this.i6j_1.l6j_1, null);
            suspendResult = this.i6j_1.k6j_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  $collectCOROUTINE$3.prototype['<set-state>'] = $collectCOROUTINE$3.prototype.kg;
  $collectCOROUTINE$3.prototype['<get-state>'] = $collectCOROUTINE$3.prototype.lg;
  $collectCOROUTINE$3.prototype['<set-exceptionState>'] = $collectCOROUTINE$3.prototype.mg;
  $collectCOROUTINE$3.prototype['<get-exceptionState>'] = $collectCOROUTINE$3.prototype.ng;
  $collectCOROUTINE$3.prototype['<set-result>'] = $collectCOROUTINE$3.prototype.og;
  $collectCOROUTINE$3.prototype['<get-result>'] = $collectCOROUTINE$3.prototype.pg;
  $collectCOROUTINE$3.prototype['<set-exception>'] = $collectCOROUTINE$3.prototype.qg;
  $collectCOROUTINE$3.prototype['<get-exception>'] = $collectCOROUTINE$3.prototype.rg;
  $collectCOROUTINE$3.prototype['<set-finallyPath>'] = $collectCOROUTINE$3.prototype.sg;
  $collectCOROUTINE$3.prototype['<get-finallyPath>'] = $collectCOROUTINE$3.prototype.tg;
  $collectCOROUTINE$3.prototype['<get-context>'] = $collectCOROUTINE$3.prototype.h3;
  function _no_name_provided__qut3iv_0($tmp0_map, this$0) {
    this.k6j_1 = $tmp0_map;
    this.l6j_1 = this$0;
  }
  _no_name_provided__qut3iv_0.prototype.m6j = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$3(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  _no_name_provided__qut3iv_0.prototype.w1t = function (collector, $cont) {
    return this.m6j(collector, $cont);
  };
  function RSocketF2Client$supplier$o$invoke$slambda(this$0, $route, resultContinuation) {
    this.v6j_1 = this$0;
    this.w6j_1 = $route;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketF2Client$supplier$o$invoke$slambda.prototype.x59 = function ($this$promise, $cont) {
    var tmp = this.b22($this$promise, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketF2Client$supplier$o$invoke$slambda.prototype.kh = function (p1, $cont) {
    return this.x59((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketF2Client$supplier$o$invoke$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp0_map = this.v6j_1.x6i_1.i6i(this.w6j_1, null, 2, null);
            var tmp_0 = new _no_name_provided__qut3iv_0(tmp0_map, this.v6j_1);
            suspendResult = toList$default(tmp_0, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_toTypedArray = suspendResult;
            return copyToArray(tmp1_toTypedArray);
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
  RSocketF2Client$supplier$o$invoke$slambda.prototype.b22 = function ($this$promise, completion) {
    var i = new RSocketF2Client$supplier$o$invoke$slambda(this.v6j_1, this.w6j_1, completion);
    i.x6j_1 = $this$promise;
    return i;
  };
  function RSocketF2Client$supplier$o$invoke$slambda_0(this$0, $route, resultContinuation) {
    var i = new RSocketF2Client$supplier$o$invoke$slambda(this$0, $route, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.x59($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.y6j_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.k1u = function (value, $cont) {
    return this.y6j_1(value, $cont);
  };
  function RSocketF2Client$supplier$1(this$0, $route) {
    this.z6j_1 = this$0;
    this.a6k_1 = $route;
  }
  RSocketF2Client$supplier$1.prototype.invoke = function () {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, RSocketF2Client$supplier$o$invoke$slambda_0(this.z6j_1, this.a6k_1, null), 3, null);
  };
  function RSocketF2Client$function$1(this$0, $queryTypeInfo, $route) {
    this.b6k_1 = this$0;
    this.c6k_1 = $queryTypeInfo;
    this.d6k_1 = $route;
  }
  function RSocketF2Client$consumer$1(this$0, $queryTypeInfo, $route) {
    this.e6k_1 = this$0;
    this.f6k_1 = $queryTypeInfo;
    this.g6k_1 = $route;
  }
  function RSocketF2Client$json$lambda($this$Json) {
    $this$Json.c11_1 = true;
    return Unit_getInstance();
  }
  function RSocketF2Client(rSocketClient) {
    this.x6i_1 = rSocketClient;
    this.y6i_1 = F2ClientType_RSOCKET_getInstance();
    var tmp = this;
    tmp.z6i_1 = Json$default(null, RSocketF2Client$json$lambda, 1, null);
  }
  RSocketF2Client.prototype.d2j = function () {
    return this.y6i_1;
  };
  RSocketF2Client.prototype.supplier = function (route, typeInfo) {
    return new RSocketF2Client$supplier$1(this, route);
  };
  RSocketF2Client.prototype.function = function (route, queryTypeInfo, responseTypeInfo) {
    return new RSocketF2Client$function$1(this, queryTypeInfo, route);
  };
  RSocketF2Client.prototype.consumer = function (route, queryTypeInfo) {
    return new RSocketF2Client$consumer$1(this, queryTypeInfo, route);
  };
  Object.defineProperty(RSocketF2Client.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.d2j();
    }
  });
  function RSocketF2ClientBuilder$build$slambda($url, $secure, resultContinuation) {
    this.p6k_1 = $url;
    this.q6k_1 = $secure;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketF2ClientBuilder$build$slambda.prototype.s6k = function ($this$promise, $cont) {
    var tmp = this.b22($this$promise, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketF2ClientBuilder$build$slambda.prototype.kh = function (p1, $cont) {
    return this.s6k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketF2ClientBuilder$build$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = rsocketClientBuilder().cq();
            suspendResult = rSocket$default(tmp_0, this.p6k_1, this.q6k_1, null, this, 4, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var rSocket = suspendResult;
            var client = new RSocketClient(rSocket);
            return new RSocketF2Client(client);
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
  RSocketF2ClientBuilder$build$slambda.prototype.b22 = function ($this$promise, completion) {
    var i = new RSocketF2ClientBuilder$build$slambda(this.p6k_1, this.q6k_1, completion);
    i.r6k_1 = $this$promise;
    return i;
  };
  function RSocketF2ClientBuilder$build$slambda_0($url, $secure, resultContinuation) {
    var i = new RSocketF2ClientBuilder$build$slambda($url, $secure, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.s6k($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketF2ClientBuilder() {
  }
  RSocketF2ClientBuilder.prototype.t6k = function (url, secure) {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, RSocketF2ClientBuilder$build$slambda_0(url, secure, null), 3, null);
  };
  function rSocketF2ClientBuilder() {
    return new RSocketF2ClientBuilder();
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$client = $f2.client || ($f2.client = {});
    var $f2$client$ktor = $f2$client.ktor || ($f2$client.ktor = {});
    var $f2$client$ktor$rsocket = $f2$client$ktor.rsocket || ($f2$client$ktor.rsocket = {});
    $f2$client$ktor$rsocket.RSocketF2Client = RSocketF2Client;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = rSocketF2ClientBuilder;
  //endregion
  return _;
}));

//# sourceMappingURL=f2-f2-client-ktor-rsocket.js.map

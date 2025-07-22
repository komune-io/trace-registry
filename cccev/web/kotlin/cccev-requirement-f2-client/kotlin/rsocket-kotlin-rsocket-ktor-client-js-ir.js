(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-client-core-js-ir.js', './rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir.js', './rsocket-kotlin-rsocket-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir.js'), require('./rsocket-kotlin-rsocket-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-ktor-client-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-ktor-client-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-ktor-client-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-ktor-client-js-ir'.");
    }
    if (typeof this['rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-ktor-client-js-ir'. Its dependency 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir' was not found. Please, check whether 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-ktor-client-js-ir'.");
    }
    if (typeof this['rsocket-kotlin-rsocket-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-ktor-client-js-ir'. Its dependency 'rsocket-kotlin-rsocket-core-js-ir' was not found. Please, check whether 'rsocket-kotlin-rsocket-core-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-ktor-client-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-ktor-client-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-ktor-client-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-ktor-client-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-ktor-client-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-ktor-client-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-ktor-client-js-ir'.");
    }
    root['rsocket-kotlin-rsocket-ktor-client-js-ir'] = factory(typeof this['rsocket-kotlin-rsocket-ktor-client-js-ir'] === 'undefined' ? {} : this['rsocket-kotlin-rsocket-ktor-client-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-client-core-js-ir'], this['rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'], this['rsocket-kotlin-rsocket-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_client_core, kotlin_io_rsocket_kotlin_rsocket_transport_ktor_websocket, kotlin_io_rsocket_kotlin_rsocket_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var webSocketSession = kotlin_io_ktor_ktor_client_core.$_$.b;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var WebSocketConnection = kotlin_io_rsocket_kotlin_rsocket_transport_ktor_websocket.$_$.a;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var ClientTransport = kotlin_io_rsocket_kotlin_rsocket_core.$_$.i;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.m;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.g1;
  var plugin = kotlin_io_ktor_ktor_client_core.$_$.j;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_io.$_$.s;
  var RSocketConnector$default = kotlin_io_rsocket_kotlin_rsocket_core.$_$.a;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.o;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.d;
  var pluginOrNull = kotlin_io_ktor_ktor_client_core.$_$.i;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.h;
  var objectMeta = kotlin_kotlin.$_$.la;
  //endregion
  //region block: pre-declaration
  setMetadataFor($connectCOROUTINE$1, '$connectCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KtorClientTransport, 'KtorClientTransport', classMeta, undefined, [ClientTransport], undefined, undefined, [0]);
  setMetadataFor($rSocketCOROUTINE$0, '$rSocketCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(RSocketSupport, 'RSocketSupport', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function rSocket(_this__u8e3s4, urlString, secure, request, $cont) {
    return rSocket_0(_this__u8e3s4, rSocket$lambda_0(request, secure, urlString), $cont);
  }
  function rSocket$default(_this__u8e3s4, urlString, secure, request, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      secure = false;
    if (!(($mask0 & 4) === 0)) {
      request = rSocket$lambda;
    }
    return rSocket(_this__u8e3s4, urlString, secure, request, $cont);
  }
  function rSocket_0(_this__u8e3s4, request, $cont) {
    var tmp = new $rSocketCOROUTINE$0(_this__u8e3s4, request, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function $connectCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y6g_1 = _this__u8e3s4;
  }
  $connectCOROUTINE$1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = webSocketSession(this.y6g_1.z6g_1, this.y6g_1.a6h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new WebSocketConnection(ARGUMENT, this.y6g_1.b6h_1);
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
  function KtorClientTransport(client, request, pool) {
    this.z6g_1 = client;
    this.a6h_1 = request;
    this.b6h_1 = pool;
  }
  KtorClientTransport.prototype.m1a = function () {
    return this.z6g_1.b44_1;
  };
  KtorClientTransport.prototype.z5h = function ($cont) {
    var tmp = new $connectCOROUTINE$1(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function rSocket$lambda($this$null) {
    return Unit_getInstance();
  }
  function rSocket$lambda$lambda($secure, $urlString) {
    return function ($this$url, it) {
      $this$url.q3q_1 = $secure ? Companion_getInstance().n3q_1 : Companion_getInstance().m3q_1;
      $this$url.s3q_1 = $this$url.q3q_1.b3r_1;
      takeFrom($this$url, $urlString);
      return Unit_getInstance();
    };
  }
  function rSocket$lambda_0($request, $secure, $urlString) {
    return function ($this$rSocket) {
      $this$rSocket.w4t(rSocket$lambda$lambda($secure, $urlString));
      $request($this$rSocket);
      return Unit_getInstance();
    };
  }
  function $rSocketCOROUTINE$0(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n6g_1 = _this__u8e3s4;
    this.o6g_1 = request;
  }
  $rSocketCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp_0 = this;
            tmp_0.p6g_1 = plugin(this.n6g_1, Plugin_getInstance_0());
            this.dg_1 = 1;
            suspendResult = this.p6g_1.c6h_1.i5i(new KtorClientTransport(this.n6g_1, this.o6g_1, this.p6g_1.d6h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function Config() {
    this.e6h_1 = Companion_getInstance_0().x2v_1;
    var tmp = this;
    tmp.f6h_1 = RSocketConnector$default(null, 1, null);
  }
  function Plugin() {
    Plugin_instance = this;
    this.g6h_1 = new AttributeKey('RSocket');
  }
  Plugin.prototype.o = function () {
    return this.g6h_1;
  };
  Plugin.prototype.h6h = function (block) {
    var tmp$ret$1;
    // Inline function 'kotlin.run' call
    var tmp0_run = new Config();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.ktor.client.Plugin.prepare.<anonymous>' call
    block(tmp0_run);
    tmp$ret$0 = new RSocketSupport(tmp0_run.f6h_1, tmp0_run.e6h_1);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Plugin.prototype.h47 = function (block) {
    return this.h6h(block);
  };
  Plugin.prototype.i6h = function (plugin, scope) {
    var tmp0_elvis_lhs = pluginOrNull(scope, Plugin_getInstance());
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('RSocket require WebSockets to work. You must install WebSockets plugin first.');
    } else
      tmp0_elvis_lhs;
  };
  Plugin.prototype.i47 = function (plugin, scope) {
    return this.i6h(plugin instanceof RSocketSupport ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance_0() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function RSocketSupport(connector, bufferPool) {
    Plugin_getInstance_0();
    this.c6h_1 = connector;
    this.d6h_1 = bufferPool;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = rSocket$default;
  _.$_$.b = Plugin_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=rsocket-kotlin-rsocket-ktor-client-js-ir.js.map

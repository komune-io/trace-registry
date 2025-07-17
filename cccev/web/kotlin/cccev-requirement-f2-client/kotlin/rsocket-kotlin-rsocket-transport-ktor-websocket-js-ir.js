(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-websockets-js-ir.js', './rsocket-kotlin-rsocket-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js'), require('./rsocket-kotlin-rsocket-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'.");
    }
    if (typeof this['ktor-ktor-websockets-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'. Its dependency 'ktor-ktor-websockets-js-ir' was not found. Please, check whether 'ktor-ktor-websockets-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'.");
    }
    if (typeof this['rsocket-kotlin-rsocket-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'. Its dependency 'rsocket-kotlin-rsocket-core-js-ir' was not found. Please, check whether 'rsocket-kotlin-rsocket-core-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'.");
    }
    root['rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'] = factory(typeof this['rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'] === 'undefined' ? {} : this['rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-websockets-js-ir'], this['rsocket-kotlin-rsocket-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_websockets, kotlin_io_rsocket_kotlin_rsocket_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.d1;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var send = kotlin_io_ktor_ktor_websockets.$_$.d;
  var Connection = kotlin_io_rsocket_kotlin_rsocket_core.$_$.j;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  //endregion
  //region block: pre-declaration
  setMetadataFor($receiveCOROUTINE$0, '$receiveCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketConnection, 'WebSocketConnection', classMeta, undefined, [Connection, CoroutineScope], undefined, undefined, [1, 0]);
  //endregion
  function WebSocketConnection$receive$lambda(it) {
    return Unit_getInstance();
  }
  function $receiveCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c6g_1 = _this__u8e3s4;
  }
  $receiveCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.c6g_1.d6g_1.p3t().u1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var frame = suspendResult;
            var tmp0_ByteReadPacket = frame.f3x_1;
            var tmp1_ByteReadPacket = tmp0_ByteReadPacket.length;
            return ByteReadPacket(tmp0_ByteReadPacket, 0, tmp1_ByteReadPacket, WebSocketConnection$receive$lambda);
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
  function WebSocketConnection(session, pool) {
    this.d6g_1 = session;
    this.e6g_1 = pool;
  }
  WebSocketConnection.prototype.f5a = function () {
    return this.e6g_1;
  };
  WebSocketConnection.prototype.m1a = function () {
    return this.d6g_1.m1a();
  };
  WebSocketConnection.prototype.g5a = function (packet, $cont) {
    return send(this.d6g_1, readBytes$default(packet, 0, 1, null), $cont);
  };
  WebSocketConnection.prototype.h5a = function ($cont) {
    var tmp = new $receiveCOROUTINE$0(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = WebSocketConnection;
  //endregion
  return _;
}));

//# sourceMappingURL=rsocket-kotlin-rsocket-transport-ktor-websocket-js-ir.js.map

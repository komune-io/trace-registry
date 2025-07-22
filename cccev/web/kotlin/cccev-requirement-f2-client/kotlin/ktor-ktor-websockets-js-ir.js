(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    root['ktor-ktor-websockets-js-ir'] = factory(typeof this['ktor-ktor-websockets-js-ir'] === 'undefined' ? {} : this['ktor-ktor-websockets-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var mapCapacity = kotlin_kotlin.$_$.j7;
  var coerceAtLeast = kotlin_kotlin.$_$.ua;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var objectMeta = kotlin_kotlin.$_$.la;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.sc;
  var classMeta = kotlin_kotlin.$_$.k9;
  var toString = kotlin_kotlin.$_$.qa;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.ba;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var Long = kotlin_kotlin.$_$.xc;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.j;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.f;
  var CancellationException = kotlin_kotlin.$_$.k8;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var IOException_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.p;
  var toLong = kotlin_kotlin.$_$.oa;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.i;
  var readShort = kotlin_io_ktor_ktor_io.$_$.n1;
  var Exception = kotlin_kotlin.$_$.uc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var get_lastIndex = kotlin_kotlin.$_$.e7;
  var compareTo = kotlin_kotlin.$_$.l9;
  var fillArrayVal = kotlin_kotlin.$_$.o9;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.r;
  var encodeToByteArray = kotlin_kotlin.$_$.jb;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.w;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.h;
  var Random = kotlin_kotlin.$_$.sa;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var hex = kotlin_io_ktor_ktor_utils.$_$.z;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var split$default = kotlin_kotlin.$_$.v;
  var first = kotlin_kotlin.$_$.y6;
  var isCharSequence = kotlin_kotlin.$_$.x9;
  var trim = kotlin_kotlin.$_$.mc;
  var drop = kotlin_kotlin.$_$.q6;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.q1;
  var writeText$default = kotlin_io_ktor_ktor_io.$_$.k;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.be;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Codes, 'Codes', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(CloseReason, 'CloseReason', classMeta, undefined, undefined, undefined, undefined, []);
  function send(frame, $cont) {
    return this.q3t().l1r(frame, $cont);
  }
  setMetadataFor(WebSocketSession, 'WebSocketSession', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, [1, 0]);
  setMetadataFor(DefaultWebSocketSession, 'DefaultWebSocketSession', interfaceMeta, undefined, [WebSocketSession], undefined, undefined, [1, 0]);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, 'DefaultWebSocketSessionImpl$runIncomingProcessor$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, 'DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, 'DefaultWebSocketSessionImpl$runOrCancelPinger$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($outgoingProcessorLoopCOROUTINE$0, '$outgoingProcessorLoopCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($sendCloseSequenceCOROUTINE$1, '$sendCloseSequenceCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($checkMaxFrameSizeCOROUTINE$2, '$checkMaxFrameSizeCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', classMeta, undefined, [DefaultWebSocketSession, WebSocketSession], undefined, undefined, [1, 0, 2]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FrameTooBigException, 'FrameTooBigException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FrameType, 'FrameType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ponger$slambda, 'ponger$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(pinger$slambda$slambda, 'pinger$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(pinger$slambda$slambda_1, 'pinger$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(pinger$slambda, 'pinger$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketExtensionHeader, 'WebSocketExtensionHeader', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($closeCOROUTINE$3, '$closeCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Frame, 'Frame', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Binary, 'Binary', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Text, 'Text', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Close, 'Close', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Ping, 'Ping', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Pong, 'Pong', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = values();
    var capacity = coerceAtLeast(mapCapacity(tmp0_associateBy.length), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var indexedObject = tmp0_associateBy;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.Companion.byCodeMap.<anonymous>' call
      tmp$ret$0 = element.f3t_1;
      tmp0_associateByTo.x2(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.g3t_1 = tmp$ret$2;
    this.h3t_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  Companion.prototype.i3t = function (code) {
    return this.g3t_1.y1(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_getInstance();
    Codes_entriesInitialized = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    Companion_getInstance();
  }
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.f3t_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, Object.create(CloseReason.prototype));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.f3t_1 = code;
  }
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.j3t_1 = code;
    this.k3t_1 = message;
  }
  CloseReason.prototype.l3t = function () {
    return Companion_getInstance().i3t(this.j3t_1);
  };
  CloseReason.prototype.toString = function () {
    var tmp0_elvis_lhs = this.l3t();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.j3t_1 : tmp0_elvis_lhs) + ', message=' + this.k3t_1 + ')';
  };
  CloseReason.prototype.hashCode = function () {
    var result = this.j3t_1;
    result = imul(result, 31) + getStringHashCode(this.k3t_1) | 0;
    return result;
  };
  CloseReason.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.j3t_1 === tmp0_other_with_cast.j3t_1))
      return false;
    if (!(this.k3t_1 === tmp0_other_with_cast.k3t_1))
      return false;
    return true;
  };
  function get_LOGGER() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingInterval, timeoutMillis) {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSession.<anonymous>' call
      tmp$ret$0 = 'Cannot wrap other DefaultWebSocketSession';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingInterval, timeoutMillis);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().s3(Dispatchers_getInstance().d1m_1);
    return launch$default($this, tmp, null, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null), 2, null);
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().s3(Dispatchers_getInstance().d1m_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $cont) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$0($this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function sendCloseSequence($this, reason, exception, $cont) {
    var tmp = new $sendCloseSequenceCOROUTINE$1($this, reason, exception, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function sendCloseSequence$default($this, reason, exception, $cont, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      exception = null;
    return sendCloseSequence($this, reason, exception, $cont);
  }
  function tryClose($this) {
    return $this.z3u_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.e3v_1;
    var tmp;
    if ($this.z3u_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (interval.x(new Long(0, 0)) > 0) {
      var tmp_0 = $this.u3u_1.q3t();
      var tmp_1 = $this.f3v_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.v3u_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o1r(null, 1, null);
    }
    var tmp1_safe_receiver = newPinger;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : new ChannelResult(tmp1_safe_receiver.m1r(Companion_getInstance_0().h3v_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.w1q_1);
    if ($this.z3u_1.kotlinx$atomicfu$value ? !(newPinger == null) : false) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $cont) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$2($this, packet, frame, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function processIncomingExtensions($this, frame) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = $this.u3v();
    var accumulator = frame;
    var tmp0_iterator = tmp0_fold.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processIncomingExtensions.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.v3v(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  }
  function processOutgoingExtensions($this, frame) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = $this.u3v();
    var accumulator = frame;
    var tmp0_iterator = tmp0_fold.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processOutgoingExtensions.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.w3v(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.h3v_1 = new Pong(new Int8Array(0), NonDisposableHandle_getInstance());
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.f3w_1 = this$0;
    this.g3w_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultWebSocketSessionImpl$runIncomingProcessor$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  DefaultWebSocketSessionImpl$runIncomingProcessor$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultWebSocketSessionImpl$runIncomingProcessor$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 37;
            this.i3w_1 = null;
            this.j3w_1 = false;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.eg_1 = 31;
            this.eg_1 = 30;
            var tmp_0 = this;
            tmp_0.m3w_1 = this.f3w_1.u3u_1.p3t();
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.o3w_1 = null;
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.dg_1 = 5;
            continue $sm;
          case 5:
            this.dg_1 = 6;
            continue $sm;
          case 6:
            this.eg_1 = 27;
            this.eg_1 = 26;
            this.r3w_1 = this.m3w_1.g();
            this.dg_1 = 7;
            continue $sm;
          case 7:
            this.dg_1 = 8;
            suspendResult = this.r3w_1.k1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.dg_1 = 24;
              continue $sm;
            }

            this.s3w_1 = this.r3w_1.i();
            this.dg_1 = 9;
            continue $sm;
          case 9:
            get_LOGGER().i3h('WebSocketSession(' + this.h3w_1 + ') receiving frame ' + this.s3w_1);
            this.u3w_1 = this.s3w_1;
            var tmp_1 = this.u3w_1;
            if (tmp_1 instanceof Close) {
              if (!this.f3w_1.q3t().k1r()) {
                this.dg_1 = 18;
                var tmp_2 = this.f3w_1.q3t();
                var tmp1_elvis_lhs = readReason(this.s3w_1);
                suspendResult = tmp_2.l1r(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 19;
                continue $sm;
              }
            } else {
              var tmp_3 = this.u3w_1;
              if (tmp_3 instanceof Pong) {
                this.v3w_1 = this.f3w_1.v3u_1.kotlinx$atomicfu$value;
                if (this.v3w_1 == null) {
                  this.w3w_1 = null;
                  this.dg_1 = 15;
                  continue $sm;
                } else {
                  this.dg_1 = 14;
                  suspendResult = this.v3w_1.l1r(this.s3w_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                var tmp_4 = this.u3w_1;
                if (tmp_4 instanceof Ping) {
                  this.dg_1 = 13;
                  suspendResult = this.g3w_1.l1r(this.s3w_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.dg_1 = 10;
                  suspendResult = checkMaxFrameSize(this.f3w_1, this.i3w_1, this.s3w_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

            break;
          case 10:
            if (!this.s3w_1.d3x_1) {
              if (this.i3w_1 == null) {
                var tmp_5 = this;
                tmp_5.i3w_1 = BytePacketBuilder_init_$Create$(null, 1, null);
              }
              var tmp_6 = ensureNotNull(this.i3w_1);
              writeFully$default(tmp_6, this.s3w_1.f3x_1, 0, 0, 6, null);
              this.t3w_1 = Unit_getInstance();
              this.dg_1 = 17;
              continue $sm;
            } else {
              this.dg_1 = 11;
              continue $sm;
            }

            break;
          case 11:
            var tmp_7 = this;
            var tmp3_safe_receiver = this.i3w_1;
            var tmp_8;
            if (tmp3_safe_receiver == null) {
              tmp_8 = null;
            } else {
              writeFully$default(tmp3_safe_receiver, this.s3w_1.f3x_1, 0, 0, 6, null);
              var tmp_9 = Companion_getInstance_2();
              var tmp_10 = tmp3_safe_receiver.cq();
              tmp_8 = tmp_9.l3x(true, this.s3w_1.e3x_1, readBytes$default(tmp_10, 0, 1, null), this.s3w_1.h3x_1, this.s3w_1.i3x_1, this.s3w_1.j3x_1);
            }

            var tmp4_elvis_lhs = tmp_8;
            tmp_7.x3w_1 = tmp4_elvis_lhs == null ? this.s3w_1 : tmp4_elvis_lhs;
            this.i3w_1 = null;
            this.dg_1 = 12;
            suspendResult = this.f3w_1.x3u_1.l1r(processIncomingExtensions(this.f3w_1, this.x3w_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            this.dg_1 = 16;
            continue $sm;
          case 13:
            this.dg_1 = 16;
            continue $sm;
          case 14:
            var tmp_11 = this;
            tmp_11.w3w_1 = Unit_getInstance();
            this.dg_1 = 15;
            continue $sm;
          case 15:
            ;
            this.dg_1 = 16;
            continue $sm;
          case 16:
            if (false) {
              this.dg_1 = 9;
              continue $sm;
            }

            this.dg_1 = 17;
            continue $sm;
          case 17:
            this.dg_1 = 7;
            continue $sm;
          case 18:
            this.dg_1 = 19;
            continue $sm;
          case 19:
            this.j3w_1 = true;
            this.q3w_1 = Unit_getInstance();
            this.dg_1 = 20;
            continue $sm;
          case 20:
            var tmp_12 = this;
            cancelConsumed(this.m3w_1, this.o3w_1);
            tmp_12.l3w_1 = Unit_getInstance();
            this.eg_1 = 37;
            this.dg_1 = 21;
            continue $sm;
          case 21:
            this.g3w_1.o1r(null, 1, null);
            ;
            var tmp0_safe_receiver = this.i3w_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.m10();
            }

            ;
            this.f3w_1.x3u_1.o1r(null, 1, null);
            ;
            if (!this.j3w_1) {
              this.dg_1 = 22;
              suspendResult = close(this.f3w_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 23;
              continue $sm;
            }

            break;
          case 22:
            this.dg_1 = 23;
            continue $sm;
          case 23:
            return Unit_getInstance();
          case 24:
            this.p3w_1 = Unit_getInstance();
            this.dg_1 = 25;
            var tmp_13 = this;
            continue $sm;
          case 25:
            var tmp_14 = this;
            cancelConsumed(this.m3w_1, this.o3w_1);
            tmp_14.n3w_1 = Unit_getInstance();
            this.dg_1 = 29;
            continue $sm;
          case 26:
            this.eg_1 = 27;
            var tmp_15 = this.gg_1;
            if (tmp_15 instanceof Error) {
              this.y3w_1 = this.gg_1;
              var tmp_16 = this;
              this.o3w_1 = this.y3w_1;
              throw this.y3w_1;
            } else {
              throw this.gg_1;
            }

            break;
          case 27:
            this.eg_1 = 30;
            this.z3w_1 = this.gg_1;
            cancelConsumed(this.m3w_1, this.o3w_1);
            ;
            throw this.z3w_1;
          case 28:
            cancelConsumed(this.m3w_1, this.o3w_1);
            ;
            if (false) {
              this.dg_1 = 3;
              continue $sm;
            }

            this.dg_1 = 29;
            continue $sm;
          case 29:
            this.k3w_1 = this.n3w_1;
            this.eg_1 = 37;
            this.dg_1 = 34;
            continue $sm;
          case 30:
            this.eg_1 = 31;
            var tmp_17 = this.gg_1;
            if (tmp_17 instanceof ClosedSendChannelException) {
              this.a3x_1 = this.gg_1;
              var tmp_18 = this;
              tmp_18.k3w_1 = Unit_getInstance();
              this.eg_1 = 37;
              this.dg_1 = 34;
              continue $sm;
            } else {
              var tmp_19 = this.gg_1;
              if (tmp_19 instanceof Error) {
                this.b3x_1 = this.gg_1;
                var tmp_20 = this;
                this.g3w_1.o1r(null, 1, null);
                this.f3w_1.x3u_1.a1r(this.b3x_1);
                tmp_20.k3w_1 = Unit_getInstance();
                this.eg_1 = 37;
                this.dg_1 = 34;
                continue $sm;
              } else {
                throw this.gg_1;
              }
            }

            break;
          case 31:
            this.eg_1 = 37;
            this.c3x_1 = this.gg_1;
            this.g3w_1.o1r(null, 1, null);
            ;
            var tmp0_safe_receiver_0 = this.i3w_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.m10();
            }

            ;
            this.f3w_1.x3u_1.o1r(null, 1, null);
            ;
            if (!this.j3w_1) {
              this.dg_1 = 32;
              suspendResult = close(this.f3w_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 33;
              continue $sm;
            }

            break;
          case 32:
            this.dg_1 = 33;
            continue $sm;
          case 33:
            throw this.c3x_1;
          case 34:
            this.g3w_1.o1r(null, 1, null);
            ;
            var tmp0_safe_receiver_1 = this.i3w_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.m10();
            }

            ;
            this.f3w_1.x3u_1.o1r(null, 1, null);
            ;
            if (!this.j3w_1) {
              this.dg_1 = 35;
              suspendResult = close(this.f3w_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 36;
              continue $sm;
            }

            break;
          case 35:
            this.dg_1 = 36;
            continue $sm;
          case 36:
            return Unit_getInstance();
          case 37:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 37) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  DefaultWebSocketSessionImpl$runIncomingProcessor$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.f3w_1, this.g3w_1, completion);
    i.h3w_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.u3x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 9;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 5;
            this.eg_1 = 3;
            this.dg_1 = 2;
            suspendResult = outgoingProcessorLoop(this.u3x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w3x_1 = suspendResult;
            this.eg_1 = 9;
            this.dg_1 = 7;
            continue $sm;
          case 3:
            this.eg_1 = 5;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              this.x3x_1 = this.gg_1;
              var tmp_1 = this;
              tmp_1.w3x_1 = Unit_getInstance();
              this.eg_1 = 9;
              this.dg_1 = 7;
              continue $sm;
            } else {
              var tmp_2 = this.gg_1;
              if (tmp_2 instanceof ClosedReceiveChannelException) {
                this.y3x_1 = this.gg_1;
                var tmp_3 = this;
                tmp_3.w3x_1 = Unit_getInstance();
                this.eg_1 = 9;
                this.dg_1 = 7;
                continue $sm;
              } else {
                var tmp_4 = this.gg_1;
                if (tmp_4 instanceof CancellationException) {
                  this.z3x_1 = this.gg_1;
                  var tmp_5 = this;
                  tmp_5.w3x_1 = Unit_getInstance();
                  this.eg_1 = 9;
                  this.dg_1 = 7;
                  continue $sm;
                } else {
                  var tmp_6 = this.gg_1;
                  if (tmp_6 instanceof ChannelIOException) {
                    this.a3y_1 = this.gg_1;
                    var tmp_7 = this;
                    tmp_7.w3x_1 = Unit_getInstance();
                    this.eg_1 = 9;
                    this.dg_1 = 7;
                    continue $sm;
                  } else {
                    var tmp_8 = this.gg_1;
                    if (tmp_8 instanceof Error) {
                      this.b3y_1 = this.gg_1;
                      this.u3x_1.y3u_1.t1b(CancellationException_init_$Create$('Failed to send frame', this.b3y_1));
                      this.dg_1 = 4;
                      suspendResult = closeExceptionally(this.u3x_1.u3u_1, this.b3y_1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.gg_1;
                    }
                  }
                }
              }
            }

            break;
          case 4:
            this.w3x_1 = suspendResult;
            this.eg_1 = 9;
            this.dg_1 = 7;
            continue $sm;
          case 5:
            this.eg_1 = 9;
            this.c3y_1 = this.gg_1;
            this.u3x_1.y3u_1.u1b(null, 1, null);
            this.dg_1 = 6;
            suspendResult = close$default(this.u3x_1.u3u_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.c3y_1;
          case 7:
            this.u3x_1.y3u_1.u1b(null, 1, null);
            this.dg_1 = 8;
            suspendResult = close$default(this.u3x_1.u3u_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 9) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.u3x_1, completion);
    i.v3x_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.l3y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultWebSocketSessionImpl$runOrCancelPinger$slambda.prototype.n3y = function (it, $cont) {
    var tmp = this.o3y(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  DefaultWebSocketSessionImpl$runOrCancelPinger$slambda.prototype.kh = function (p1, $cont) {
    return this.n3y(p1 instanceof CloseReason ? p1 : THROW_CCE(), $cont);
  };
  DefaultWebSocketSessionImpl$runOrCancelPinger$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = sendCloseSequence(this.l3y_1, this.m3y_1, IOException_init_$Create$('Ping timeout'), this);
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
  DefaultWebSocketSessionImpl$runOrCancelPinger$slambda.prototype.o3y = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.l3y_1, completion);
    i.m3y_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.n3y(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $outgoingProcessorLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b3u_1 = _this__u8e3s4;
  }
  $outgoingProcessorLoopCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            this.c3u_1 = this.b3u_1.y3u_1.g();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.dg_1 = 2;
            suspendResult = this.c3u_1.k1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.dg_1 = 6;
              continue $sm;
            }

            this.d3u_1 = this.c3u_1.i();
            get_LOGGER().i3h('Sending ' + this.d3u_1 + ' from session ' + this.b3u_1);
            this.e3u_1 = this.d3u_1;
            var tmp_0 = this.e3u_1;
            if (tmp_0 instanceof Close) {
              this.dg_1 = 3;
              var tmp_1 = readReason(this.d3u_1);
              suspendResult = sendCloseSequence$default(this.b3u_1, tmp_1, null, this, 4, null);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2;
              var tmp_3 = this.e3u_1;
              if (tmp_3 instanceof Text) {
                tmp_2 = true;
              } else {
                var tmp_4 = this.e3u_1;
                tmp_2 = tmp_4 instanceof Binary;
              }
              if (tmp_2) {
                this.f3u_1 = processOutgoingExtensions(this.b3u_1, this.d3u_1);
                this.dg_1 = 4;
                continue $sm;
              } else {
                this.f3u_1 = this.d3u_1;
                this.dg_1 = 4;
                continue $sm;
              }
            }

            break;
          case 3:
            this.dg_1 = 6;
            var tmp_5 = this;
            continue $sm;
          case 4:
            this.g3u_1 = this.f3u_1;
            this.dg_1 = 5;
            suspendResult = this.b3u_1.u3u_1.q3t().l1r(this.g3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.dg_1 = 1;
            continue $sm;
          case 6:
            return Unit_getInstance();
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
  function $sendCloseSequenceCOROUTINE$1(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p3u_1 = _this__u8e3s4;
    this.q3u_1 = reason;
    this.r3u_1 = exception;
  }
  $sendCloseSequenceCOROUTINE$1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            if (!tryClose(this.p3u_1))
              return Unit_getInstance();
            get_LOGGER().i3h('Sending Close Sequence for session ' + this.p3u_1 + ' with reason ' + this.q3u_1 + ' and exception ' + this.r3u_1);
            this.p3u_1.a3v_1.x1g();
            ;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.q3u_1;
            tmp_0.s3u_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 5;
            runOrCancelPinger(this.p3u_1);
            if (!(this.s3u_1.j3t_1 === Codes_CLOSED_ABNORMALLY_getInstance().f3t_1)) {
              this.dg_1 = 2;
              suspendResult = this.p3u_1.u3u_1.q3t().l1r(Close_init_$Create$(this.s3u_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.t3u_1 = Unit_getInstance();
            this.eg_1 = 6;
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.p3u_1.w3u_1.u1g(this.s3u_1);
            ;
            if (!(this.r3u_1 == null)) {
              this.p3u_1.y3u_1.a1r(this.r3u_1);
              this.p3u_1.x3u_1.a1r(this.r3u_1);
            }

            return Unit_getInstance();
          case 5:
            this.eg_1 = 6;
            var t = this.gg_1;
            this.p3u_1.w3u_1.u1g(this.s3u_1);
            ;
            if (!(this.r3u_1 == null)) {
              this.p3u_1.y3u_1.a1r(this.r3u_1);
              this.p3u_1.x3u_1.a1r(this.r3u_1);
            }

            throw t;
          case 6:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 6) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function $checkMaxFrameSizeCOROUTINE$2(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3v_1 = _this__u8e3s4;
    this.r3v_1 = packet;
    this.s3v_1 = frame;
  }
  $checkMaxFrameSizeCOROUTINE$2.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.s3v_1.f3x_1.length;
            var tmp0_safe_receiver = this.r3v_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f();
            tmp_0.t3v_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (toLong(this.t3v_1).x(this.q3v_1.o3t()) > 0) {
              var tmp2_safe_receiver = this.r3v_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.m10();
              }
              this.dg_1 = 2;
              suspendResult = close(this.q3v_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.t3v_1 + '. Max size is ' + toString(this.q3v_1.o3t())), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 1;
              continue $sm;
            }

            break;
          case 1:
            return Unit_getInstance();
          case 2:
            throw new FrameTooBigException(toLong(this.t3v_1));
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
  function DefaultWebSocketSessionImpl(raw, pingInterval, timeoutMillis) {
    Companion_getInstance_0();
    this.u3u_1 = raw;
    this.v3u_1 = atomic$ref$1(null);
    var tmp = this;
    tmp.w3u_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    tmp_0.x3u_1 = Channel$default(8, null, null, 6, null);
    var tmp_1 = this;
    tmp_1.y3u_1 = Channel$default(8, null, null, 6, null);
    this.z3u_1 = atomic$boolean$1(false);
    this.a3v_1 = Job(this.u3u_1.m1a().l3(Key_getInstance()));
    var tmp_2 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_2.b3v_1 = tmp$ret$0;
    this.c3v_1 = atomic$boolean$1(false);
    this.d3v_1 = this.u3u_1.m1a().s3(this.a3v_1).s3(new CoroutineName('ws-default'));
    this.e3v_1 = pingInterval;
    this.f3v_1 = timeoutMillis;
    this.g3v_1 = this.w3u_1;
  }
  DefaultWebSocketSessionImpl.prototype.p3t = function () {
    return this.x3u_1;
  };
  DefaultWebSocketSessionImpl.prototype.q3t = function () {
    return this.y3u_1;
  };
  DefaultWebSocketSessionImpl.prototype.u3v = function () {
    return this.b3v_1;
  };
  DefaultWebSocketSessionImpl.prototype.m1a = function () {
    return this.d3v_1;
  };
  DefaultWebSocketSessionImpl.prototype.n3t = function (value) {
    this.u3u_1.n3t(value);
  };
  DefaultWebSocketSessionImpl.prototype.o3t = function () {
    return this.u3u_1.o3t();
  };
  DefaultWebSocketSessionImpl.prototype.m3t = function (negotiatedExtensions) {
    if (!this.c3v_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'WebSocket session ' + this + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    var tmp = get_LOGGER();
    var tmp_0 = 'Starting default WebSocketSession(' + this + ') ';
    tmp.i3h(tmp_0 + ('with negotiated extensions: ' + joinToString$default(negotiatedExtensions, null, null, null, 0, null, null, 63, null)));
    this.b3v_1.l(negotiatedExtensions);
    runOrCancelPinger(this);
    runIncomingProcessor(this, ponger(this, this.q3t()));
    runOutgoingProcessor(this);
  };
  DefaultWebSocketSessionImpl.prototype.s3t = function ($cont) {
    return this.u3u_1.s3t($cont);
  };
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function init_properties_DefaultWebSocketSession_kt_vhpdcs() {
    if (properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
    } else {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
    }
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.i1e = function () {
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.f3x_1.length < 2) {
      return null;
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.websocket.readReason.<anonymous>' call
        writeFully$default(builder, _this__u8e3s4.f3x_1, 0, 0, 6, null);
        tmp$ret$0 = builder.cq();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.m10();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    var packet = tmp$ret$0;
    var code = readShort(packet);
    var message = packet.n37(0, 0, 3, null);
    return new CloseReason(code, message);
  }
  function FrameTooBigException(frameSize) {
    Exception_init_$Init$(this);
    this.p3y_1 = frameSize;
    captureStack(this, FrameTooBigException);
  }
  FrameTooBigException.prototype.z = function () {
    return 'Frame is too big: ' + toString(this.p3y_1);
  };
  Object.defineProperty(FrameTooBigException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.z();
    }
  });
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var tmp0_maxByOrNull = values_0();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = tmp0_maxByOrNull.length === 0;
      if (tmp$ret$0) {
        tmp$ret$1 = null;
        break $l$block_0;
      }
      var maxElem = tmp0_maxByOrNull[0];
      var lastIndex = get_lastIndex(tmp0_maxByOrNull);
      if (lastIndex === 0) {
        tmp$ret$1 = maxElem;
        break $l$block_0;
      }
      var tmp$ret$2;
      // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
      var tmp1__anonymous__uwfjfc = maxElem;
      tmp$ret$2 = tmp1__anonymous__uwfjfc.t3y_1;
      var maxValue = tmp$ret$2;
      var inductionVariable = 1;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = tmp0_maxByOrNull[i];
          var tmp$ret$3;
          // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
          tmp$ret$3 = e.t3y_1;
          var v = tmp$ret$3;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$1 = maxElem;
    }
    tmp.u3y_1 = ensureNotNull(tmp$ret$1).t3y_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.u3y_1 + 1 | 0;
    var tmp$ret$4;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$4 = fillArrayVal(Array(tmp_2), null);
    var tmp_3 = tmp$ret$4;
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$7;
      // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var tmp0_singleOrNull = values_0();
        var single = null;
        var found = false;
        var indexedObject = tmp0_singleOrNull;
        var inductionVariable_0 = 0;
        var last = indexedObject.length;
        while (inductionVariable_0 < last) {
          var element = indexedObject[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp$ret$5;
          // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
          tmp$ret$5 = element.t3y_1 === tmp_4;
          if (tmp$ret$5) {
            if (found) {
              tmp$ret$6 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$6 = null;
          break $l$block_2;
        }
        tmp$ret$6 = single;
      }
      tmp$ret$7 = tmp$ret$6;
      tmp_3[tmp_4] = tmp$ret$7;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.v3y_1 = tmp_3;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    FrameType_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_getInstance();
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_1();
  }
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.s3y_1 = controlFrame;
    this.t3y_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    init_properties_PingPong_kt_a6xpsg();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    init_properties_PingPong_kt_a6xpsg();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  function ponger(_this__u8e3s4, outgoing) {
    init_properties_PingPong_kt_a6xpsg();
    var channel = Channel$default(5, null, null, 6, null);
    var tmp = get_PongerCoroutineName();
    launch$default(_this__u8e3s4, tmp, null, ponger$slambda_0(channel, outgoing, null), 2, null);
    return channel;
  }
  function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
    init_properties_PingPong_kt_a6xpsg();
    var actorJob = Job$default(null, 1, null);
    Factory_getInstance();
    var channel = Channel$default(2147483647, null, null, 6, null);
    var tmp = actorJob.s3(get_PingerCoroutineName());
    launch$default(_this__u8e3s4, tmp, null, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null), 2, null);
    var tmp_0 = ensureNotNull(_this__u8e3s4.m1a().l3(Key_getInstance()));
    tmp_0.n1b(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.e3z_1 = $channel;
    this.f3z_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  ponger$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ponger$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ponger$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 14;
            this.eg_1 = 13;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.i3z_1 = null;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.eg_1 = 10;
            this.eg_1 = 9;
            this.k3z_1 = this.e3z_1.g();
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.dg_1 = 5;
            suspendResult = this.k3z_1.k1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.dg_1 = 7;
              continue $sm;
            }

            this.l3z_1 = this.k3z_1.i();
            get_LOGGER().i3h('Received ping message, sending pong message');
            this.dg_1 = 6;
            suspendResult = this.f3z_1.l1r(Pong_init_$Create$(this.l3z_1.f3x_1, null, 2, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.dg_1 = 4;
            continue $sm;
          case 7:
            this.j3z_1 = Unit_getInstance();
            this.dg_1 = 8;
            var tmp_0 = this;
            continue $sm;
          case 8:
            var tmp_1 = this;
            cancelConsumed(this.e3z_1, this.i3z_1);
            tmp_1.h3z_1 = Unit_getInstance();
            this.dg_1 = 12;
            continue $sm;
          case 9:
            this.eg_1 = 10;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof Error) {
              var e = this.gg_1;
              var tmp_3 = this;
              this.i3z_1 = e;
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 10:
            this.eg_1 = 13;
            var t = this.gg_1;
            cancelConsumed(this.e3z_1, this.i3z_1);
            ;
            throw t;
          case 11:
            cancelConsumed(this.e3z_1, this.i3z_1);
            ;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 12;
            continue $sm;
          case 12:
            this.eg_1 = 14;
            this.dg_1 = 15;
            continue $sm;
          case 13:
            this.eg_1 = 14;
            var tmp_4 = this.gg_1;
            if (tmp_4 instanceof ClosedSendChannelException) {
              var _ = this.gg_1;
              this.dg_1 = 15;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 14:
            throw this.gg_1;
          case 15:
            this.eg_1 = 14;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.eg_1 === 14) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  ponger$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new ponger$slambda(this.e3z_1, this.f3z_1, completion);
    i.g3z_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.u3z_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  pinger$slambda$slambda.prototype.a22 = function ($this$withTimeoutOrNull, $cont) {
    var tmp = this.b22($this$withTimeoutOrNull, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  pinger$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  pinger$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dg_1 = 4;
              continue $sm;
            }

            this.dg_1 = 2;
            suspendResult = this.u3z_1.u1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            this.dg_1 = 1;
            continue $sm;
          case 3:
            throw this.gg_1;
          case 4:
            return Unit_getInstance();
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
  pinger$slambda$slambda.prototype.b22 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.u3z_1, completion);
    i.v3z_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $cont) {
      return i.a22($this$withTimeoutOrNull, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.e40_1 = $outgoing;
    this.f40_1 = $pingMessage;
    this.g40_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  pinger$slambda$slambda_1.prototype.a22 = function ($this$withTimeoutOrNull, $cont) {
    var tmp = this.b22($this$withTimeoutOrNull, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  pinger$slambda$slambda_1.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  pinger$slambda$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            get_LOGGER().i3h('WebSocket Pinger: sending ping frame');
            this.dg_1 = 1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_toByteArray = Charsets_getInstance().w37_1;
              if (tmp0_toByteArray.equals(Charsets_getInstance().v37_1)) {
                tmp$ret$0 = encodeToByteArray(this.f40_1);
                break l$ret$1;
              }
              tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.z37(), this.f40_1, 0, this.f40_1.length);
            }
             while (false);
            suspendResult = this.e40_1.l1r(new Ping(tmp$ret$0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dg_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.dg_1 = 5;
              continue $sm;
            }

            this.dg_1 = 3;
            suspendResult = this.g40_1.u1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var msg = suspendResult;
            if (String$default(msg.f3x_1, 0, 0, Charsets_getInstance().w37_1, 6, null) === this.f40_1) {
              get_LOGGER().i3h('WebSocket Pinger: received valid pong frame ' + msg);
              this.dg_1 = 5;
              continue $sm;
            } else {
              this.dg_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            get_LOGGER().i3h('WebSocket Pinger: received invalid pong frame ' + msg + ', continue waiting');
            this.dg_1 = 2;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 6) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  pinger$slambda$slambda_1.prototype.b22 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.e40_1, this.f40_1, this.g40_1, completion);
    i.h40_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $cont) {
      return i.a22($this$withTimeoutOrNull, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.q40_1 = $periodMillis;
    this.r40_1 = $timeoutMillis;
    this.s40_1 = $onTimeout;
    this.t40_1 = $channel;
    this.u40_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  pinger$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  pinger$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  pinger$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 9;
            get_LOGGER().i3h('Starting WebSocket pinger coroutine with perioud ' + toString(this.q40_1) + ' ms and timeout ' + toString(this.r40_1) + ' ms');
            this.w40_1 = Random(getTimeMillis());
            this.x40_1 = new Int8Array(32);
            this.eg_1 = 7;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dg_1 = 6;
              continue $sm;
            }

            this.dg_1 = 2;
            suspendResult = withTimeoutOrNull(this.q40_1, pinger$slambda$slambda_0(this.t40_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            this.w40_1.c4(this.x40_1);
            ;
            this.y40_1 = '[ping ' + hex(this.x40_1) + ' ping]';
            this.dg_1 = 3;
            suspendResult = withTimeoutOrNull(this.r40_1, pinger$slambda$slambda_2(this.u40_1, this.y40_1, this.t40_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.z40_1 = suspendResult;
            get_LOGGER().i3h('WebSocket pinger has timed out');
            if (this.z40_1 == null) {
              this.dg_1 = 5;
              suspendResult = this.s40_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.dg_1 = 1;
            continue $sm;
          case 5:
            this.dg_1 = 6;
            continue $sm;
          case 6:
            this.eg_1 = 9;
            this.dg_1 = 8;
            continue $sm;
          case 7:
            this.eg_1 = 9;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.gg_1;
              this.dg_1 = 8;
              continue $sm;
            } else {
              var tmp_1 = this.gg_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.gg_1;
                this.dg_1 = 8;
                continue $sm;
              } else {
                var tmp_2 = this.gg_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.gg_1;
                  this.dg_1 = 8;
                  continue $sm;
                } else {
                  throw this.gg_1;
                }
              }
            }

            break;
          case 8:
            this.eg_1 = 9;
            return Unit_getInstance();
          case 9:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 9) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  pinger$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new pinger$slambda(this.q40_1, this.r40_1, this.s40_1, this.t40_1, this.u40_1, completion);
    i.v40_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.u1b(null, 1, null);
      return Unit_getInstance();
    };
  }
  var properties_initialized_PingPong_kt_fbfhmc;
  function init_properties_PingPong_kt_a6xpsg() {
    if (properties_initialized_PingPong_kt_fbfhmc) {
    } else {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.a41_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = [false, false, false];
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp_0.b41_1 = tmp$ret$3;
  }
  WebSocketExtensionsConfig.prototype.cq = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.a41_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.WebSocketExtensionsConfig.build.<anonymous>' call
      tmp$ret$0 = item();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function parametersToString($this) {
    var tmp;
    if ($this.d41_1.k()) {
      tmp = '';
    } else {
      tmp = ', ' + joinToString$default($this.d41_1, ',', null, null, 0, null, null, 62, null);
    }
    return tmp;
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.c41_1 = name;
    this.d41_1 = parameters;
  }
  WebSocketExtensionHeader.prototype.toString = function () {
    return this.c41_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = split$default(value, [','], false, 0, 6, null);
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$5;
      // Inline function 'io.ktor.websocket.parseWebSocketExtensions.<anonymous>' call
      var extension = split$default(item, [';'], false, 0, 6, null);
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      var tmp0_trim = first(extension);
      tmp$ret$0 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
      var name = tmp$ret$0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = drop(extension, 1);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.g();
      while (tmp0_iterator_0.h()) {
        var item_0 = tmp0_iterator_0.i();
        var tmp$ret$2;
        // Inline function 'io.ktor.websocket.parseWebSocketExtensions.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.text.trim' call
        tmp$ret$1 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        tmp$ret$2 = tmp$ret$1;
        tmp0_mapTo_0.a(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo_0;
      tmp$ret$4 = tmp$ret$3;
      var parameters = tmp$ret$4;
      tmp$ret$5 = new WebSocketExtensionHeader(name, parameters);
      tmp0_mapTo.a(tmp$ret$5);
    }
    tmp$ret$6 = tmp0_mapTo;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $cont) {
    var tmp = new $closeCOROUTINE$3(_this__u8e3s4, reason, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function close$default(_this__u8e3s4, reason, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      reason = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    return close(_this__u8e3s4, reason, $cont);
  }
  function closeExceptionally(_this__u8e3s4, cause, $cont) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $cont);
  }
  function send_0(_this__u8e3s4, content, $cont) {
    return _this__u8e3s4.r3t(Binary_init_$Create$(true, content), $cont);
  }
  function $closeCOROUTINE$3(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m41_1 = _this__u8e3s4;
    this.n41_1 = reason;
  }
  $closeCOROUTINE$3.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = this.m41_1.r3t(Close_init_$Create$(this.n41_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dg_1 = 2;
            suspendResult = this.m41_1.s3t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.eg_1 = 4;
            this.dg_1 = 5;
            continue $sm;
          case 3:
            this.eg_1 = 4;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var _ = this.gg_1;
              this.dg_1 = 5;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            throw this.gg_1;
          case 5:
            this.eg_1 = 4;
            return Unit_getInstance();
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
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, Object.create(Binary.prototype));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = Charsets_getInstance().v37_1;
      if (tmp0_toByteArray.equals(Charsets_getInstance().v37_1)) {
        tmp$ret$0 = encodeToByteArray(text);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.z37(), text, 0, text.length);
    }
    Text_init_$Init$(true, tmp$ret$0, $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, Object.create(Text.prototype));
  }
  function Close_init_$Init$(reason, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.websocket.Close.<init>.<anonymous>' call
        writeShort(builder, reason.j3t_1);
        writeText$default(builder, reason.k3t_1, 0, 0, null, 14, null);
        tmp$ret$0 = builder.cq();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.m10();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    Close_init_$Init$_0(tmp$ret$0, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, Object.create(Close.prototype));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readBytes$default(packet, 0, 1, null));
    return $this;
  }
  function Pong_init_$Init$(data, disposableHandle, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      disposableHandle = NonDisposableHandle_getInstance();
    Pong.call($this, data, disposableHandle);
    return $this;
  }
  function Pong_init_$Create$(data, disposableHandle, $mask0, $marker) {
    return Pong_init_$Init$(data, disposableHandle, $mask0, $marker, Object.create(Pong.prototype));
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Pong(data, disposableHandle) {
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.k3x_1 = new Int8Array(0);
  }
  Companion_2.prototype.l3x = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp0_subject = frameType;
    var tmp0 = tmp0_subject.y3_1;
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_getInstance());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_2();
    this.d3x_1 = fin;
    this.e3x_1 = frameType;
    this.f3x_1 = data;
    this.g3x_1 = disposableHandle;
    this.h3x_1 = rsv1;
    this.i3x_1 = rsv2;
    this.j3x_1 = rsv3;
  }
  Frame.prototype.toString = function () {
    return 'Frame ' + this.e3x_1 + ' (fin=' + this.d3x_1 + ', buffer len = ' + this.f3x_1.length + ')';
  };
  //region block: post-declaration
  DefaultWebSocketSessionImpl.prototype.r3t = send;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_INTERNAL_ERROR_getInstance;
  _.$_$.c = send;
  _.$_$.d = send_0;
  _.$_$.e = Binary_init_$Create$;
  _.$_$.f = Close_init_$Create$;
  _.$_$.g = Text_init_$Create$;
  _.$_$.h = Companion_getInstance;
  _.$_$.i = CloseReason;
  _.$_$.j = DefaultWebSocketSession_0;
  _.$_$.k = DefaultWebSocketSession;
  _.$_$.l = WebSocketExtensionsConfig;
  _.$_$.m = WebSocketSession;
  _.$_$.n = parseWebSocketExtensions;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets-js-ir.js.map

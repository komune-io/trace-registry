(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ktor-ktor-io-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ktor-ktor-io-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-core-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-core-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-core-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'rsocket-kotlin-rsocket-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'rsocket-kotlin-rsocket-core-js-ir'.");
    }
    root['rsocket-kotlin-rsocket-core-js-ir'] = factory(typeof this['rsocket-kotlin-rsocket-core-js-ir'] === 'undefined' ? {} : this['rsocket-kotlin-rsocket-core-js-ir'], this['ktor-ktor-io-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var clz32 = Math.clz32;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.s;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var classMeta = kotlin_kotlin.$_$.k9;
  var NotImplementedError = kotlin_kotlin.$_$.zc;
  var captureStack = kotlin_kotlin.$_$.e9;
  var objectMeta = kotlin_kotlin.$_$.la;
  var toString = kotlin_kotlin.$_$.qa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var extendThrowable = kotlin_kotlin.$_$.n9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.be;
  var Element = kotlin_kotlin.$_$.x8;
  var get = kotlin_kotlin.$_$.v8;
  var fold = kotlin_kotlin.$_$.u8;
  var minusKey = kotlin_kotlin.$_$.w8;
  var plus = kotlin_kotlin.$_$.y8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a1;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var isInterface = kotlin_kotlin.$_$.ba;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d2;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var fillArrayVal = kotlin_kotlin.$_$.o9;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Enum = kotlin_kotlin.$_$.sc;
  var writeInt = kotlin_io_ktor_ktor_io.$_$.o1;
  var writeText$default = kotlin_io_ktor_ktor_io.$_$.k;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var readInt = kotlin_io_ktor_ktor_io.$_$.l1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.c1;
  var toShort = kotlin_kotlin.$_$.pa;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.q1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.f1;
  var readShort = kotlin_io_ktor_ktor_io.$_$.n1;
  var addSuppressedInternal = kotlin_io_ktor_ktor_io.$_$.i1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var maxOrNull = kotlin_kotlin.$_$.l7;
  var KProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p9;
  var Long = kotlin_kotlin.$_$.xc;
  var coerceAtLeast = kotlin_kotlin.$_$.ta;
  var writeLong = kotlin_io_ktor_ktor_io.$_$.p1;
  var readLong = kotlin_io_ktor_ktor_io.$_$.m1;
  var encodeToByteArray = kotlin_kotlin.$_$.jb;
  var toByte = kotlin_kotlin.$_$.na;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.j;
  var readTextExactBytes$default = kotlin_io_ktor_ktor_io.$_$.h;
  var toString_0 = kotlin_kotlin.$_$.fc;
  var repeat = kotlin_kotlin.$_$.ub;
  var fill$default = kotlin_kotlin.$_$.j;
  var decodeToString = kotlin_kotlin.$_$.ib;
  var toCharArray = kotlin_kotlin.$_$.yb;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z2;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_io.$_$.t;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var _ChannelResult___get_holder__impl__pm9gzw = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ChannelResult__exceptionOrNull_impl_16ei30 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Failed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var toLong = kotlin_kotlin.$_$.oa;
  var NonCancellable_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var numberToInt = kotlin_kotlin.$_$.ja;
  var isArray = kotlin_kotlin.$_$.t9;
  var toList = kotlin_kotlin.$_$.a8;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var intercepted = kotlin_kotlin.$_$.n8;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.c5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var returnIfSuspended = kotlin_kotlin.$_$.i;
  var ensureActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.b5;
  var isObject = kotlin_kotlin.$_$.da;
  var SelectBuilderImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m2;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var ensureActive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j2;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_isActive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var hashCode = kotlin_kotlin.$_$.r9;
  var equals = kotlin_kotlin.$_$.m9;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var emitAll_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var retryWhen = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var catch_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var stateIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var toList_0 = kotlin_kotlin.$_$.b8;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.n;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.q4;
  var numberToLong = kotlin_kotlin.$_$.ka;
  //endregion
  //region block: pre-declaration
  function get_pool() {
    return Companion_getInstance().x2v_1;
  }
  setMetadataFor(Connection, 'Connection', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, [1, 0]);
  setMetadataFor($sendFrameCOROUTINE$0, '$sendFrameCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ConnectionConfig, 'ConnectionConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ConnectionAcceptorContext, 'ConnectionAcceptorContext', classMeta, undefined, undefined, undefined, undefined, []);
  function metadataPush(metadata, $cont) {
    metadata.n2g();
    notImplemented('Metadata Push');
  }
  function fireAndForget(payload, $cont) {
    payload.n2g();
    notImplemented('Fire and Forget');
  }
  function requestResponse(payload, $cont) {
    payload.n2g();
    notImplemented('Request Response');
  }
  function requestStream(payload) {
    payload.n2g();
    notImplemented('Request Stream');
  }
  function requestChannel(initPayload, payloads) {
    initPayload.n2g();
    notImplemented('Request Channel');
  }
  setMetadataFor(RSocket, 'RSocket', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, [1]);
  setMetadataFor(RSocketError, 'RSocketError', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(Setup, 'Setup', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(Invalid, 'Invalid', classMeta, Setup, undefined, undefined, undefined, []);
  setMetadataFor(Unsupported, 'Unsupported', classMeta, Setup, undefined, undefined, undefined, []);
  setMetadataFor(Rejected, 'Rejected', classMeta, Setup, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RejectedResume, 'RejectedResume', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(ConnectionError, 'ConnectionError', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(ConnectionClose, 'ConnectionClose', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(ApplicationError, 'ApplicationError', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(Rejected_0, 'Rejected', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(Canceled, 'Canceled', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(Invalid_0, 'Invalid', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(Custom, 'Custom', classMeta, RSocketError, undefined, undefined, undefined, []);
  setMetadataFor(ErrorCode, 'ErrorCode', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  function get_key() {
    return Key_getInstance_0();
  }
  setMetadataFor(RequestStrategy, 'RequestStrategy', interfaceMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(Element_0, 'Element', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(PrefetchStrategy, 'PrefetchStrategy', classMeta, undefined, [RequestStrategy], undefined, undefined, []);
  setMetadataFor(Interceptors, 'Interceptors', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InterceptorsBuilder, 'InterceptorsBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RSocketConnector$connect$slambda, 'RSocketConnector$connect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketConnector$connect$slambda_1, 'RSocketConnector$connect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [0]);
  setMetadataFor(RSocketConnector$connectOnce$slambda, 'RSocketConnector$connectOnce$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketConnector$connectOnce$slambda_1, 'RSocketConnector$connectOnce$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketConnector$connectOnce$slambda_3, 'RSocketConnector$connectOnce$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($connectCOROUTINE$2, '$connectCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($connectOnceCOROUTINE$3, '$connectOnceCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(RSocketConnector, 'RSocketConnector', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(EmptyRSocket, 'EmptyRSocket', classMeta, undefined, [RSocket], undefined, undefined, [1]);
  setMetadataFor(sam$io_rsocket_kotlin_ConnectionAcceptor$0, 'sam$io_rsocket_kotlin_ConnectionAcceptor$0', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(RSocketConnectorBuilder$Companion$defaultAcceptor$slambda, 'RSocketConnectorBuilder$Companion$defaultAcceptor$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ConnectionConfigBuilder, 'ConnectionConfigBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RSocketConnectorBuilder, 'RSocketConnectorBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WellKnownMimeType, 'WellKnownMimeType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Frame, 'Frame', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(CancelFrame, 'CancelFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(ErrorFrame, 'ErrorFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(ExtensionFrame, 'ExtensionFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Flags, 'Flags', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FrameType, 'FrameType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(KeepAliveFrame, 'KeepAliveFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(LeaseFrame, 'LeaseFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(MetadataPushFrame, 'MetadataPushFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(RequestFrame, 'RequestFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(RequestNFrame, 'RequestNFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(ResumeFrame, 'ResumeFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(ResumeOkFrame, 'ResumeOkFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(SetupFrame, 'SetupFrame', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Flags_0, 'Flags', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Version, 'Version', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FrameSender$sendCancel$slambda, 'FrameSender$sendCancel$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(FrameSender$sendError$slambda, 'FrameSender$sendError$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($sendFragmentedCOROUTINE$5, '$sendFragmentedCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(FrameSender, 'FrameSender', classMeta, undefined, undefined, undefined, undefined, [3, 1, 2, 4, 6]);
  setMetadataFor(IntMap, 'IntMap', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($markCOROUTINE$6, '$markCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($tickCOROUTINE$7, '$tickCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KeepAliveHandler, 'KeepAliveHandler', classMeta, undefined, undefined, undefined, undefined, [1, 0]);
  setMetadataFor($useRequestCOROUTINE$8, '$useRequestCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Limiter, 'Limiter', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor($receiveCOROUTINE$9, '$receiveCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(LoggingConnection, 'LoggingConnection', classMeta, undefined, [Connection], undefined, undefined, [1, 0]);
  setMetadataFor($receiveCOROUTINE$10, '$receiveCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Prioritizer, 'Prioritizer', classMeta, undefined, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(selectFrame$slambda, 'selectFrame$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($onRequestCOROUTINE$17, '$onRequestCOROUTINE$17', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(RequestFlowCollector, 'RequestFlowCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, RequestFlowCollector, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$16, '$collectCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(RSocketRequester$requestChannel$o$collect$slambda$slambda, 'RSocketRequester$requestChannel$o$collect$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($onRequestCOROUTINE$19, '$onRequestCOROUTINE$19', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(RSocketRequester$requestChannel$o$collect$slambda, 'RSocketRequester$requestChannel$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, undefined, classMeta, RequestFlowCollector, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$18, '$collectCOROUTINE$18', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(RequestFlow, 'RequestFlow', classMeta, undefined, undefined, undefined, undefined, [1, 3]);
  setMetadataFor(_no_name_provided__qut3iv_1, undefined, classMeta, RequestFlow, undefined, undefined, undefined, [3, 1]);
  setMetadataFor(_no_name_provided__qut3iv_2, undefined, classMeta, RequestFlow, undefined, undefined, undefined, [3, 1]);
  setMetadataFor($metadataPushCOROUTINE$11, '$metadataPushCOROUTINE$11', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($fireAndForgetCOROUTINE$12, '$fireAndForgetCOROUTINE$12', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($requestResponseCOROUTINE$13, '$requestResponseCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(RSocketRequester, 'RSocketRequester', classMeta, undefined, [RSocket], undefined, undefined, [1, 2, 3]);
  setMetadataFor(RSocketResponder$handleRequestStream$slambda$slambda, 'RSocketResponder$handleRequestStream$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($onRequestCOROUTINE$23, '$onRequestCOROUTINE$23', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_3, undefined, classMeta, RequestFlowCollector, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$22, '$collectCOROUTINE$22', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_4, undefined, classMeta, RequestFlow, undefined, undefined, undefined, [3, 1]);
  setMetadataFor(RSocketResponder$handleRequestChannel$slambda$slambda, 'RSocketResponder$handleRequestChannel$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(RSocketResponder$handleMetadataPush$slambda, 'RSocketResponder$handleMetadataPush$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketResponder$handleFireAndForget$slambda, 'RSocketResponder$handleFireAndForget$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketResponder$handleRequestResponse$slambda, 'RSocketResponder$handleRequestResponse$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketResponder$handleRequestStream$slambda, 'RSocketResponder$handleRequestStream$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketResponder$handleRequestChannel$slambda, 'RSocketResponder$handleRequestChannel$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(RSocketResponder, 'RSocketResponder', classMeta, undefined, [CoroutineScope], undefined, undefined, [3, 2]);
  setMetadataFor(ReconnectState, 'ReconnectState', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Connecting, 'Connecting', objectMeta, ReconnectState, undefined, undefined, undefined, []);
  setMetadataFor(Failed_0, 'Failed', classMeta, ReconnectState, undefined, undefined, undefined, []);
  setMetadataFor(Connected, 'Connected', classMeta, ReconnectState, undefined, undefined, undefined, []);
  setMetadataFor(ReconnectableRSocket$currentRSocket$o$collect$slambda, 'ReconnectableRSocket$currentRSocket$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$30, '$collectCOROUTINE$30', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_5, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(ReconnectableRSocket$requestStream$slambda, 'ReconnectableRSocket$requestStream$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ReconnectableRSocket$requestChannel$slambda, 'ReconnectableRSocket$requestChannel$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($currentRSocketCOROUTINE$25, '$currentRSocketCOROUTINE$25', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($currentRSocketCOROUTINE$26, '$currentRSocketCOROUTINE$26', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($metadataPushCOROUTINE$27, '$metadataPushCOROUTINE$27', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($fireAndForgetCOROUTINE$28, '$fireAndForgetCOROUTINE$28', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($requestResponseCOROUTINE$29, '$requestResponseCOROUTINE$29', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ReconnectableRSocket, 'ReconnectableRSocket', classMeta, undefined, [RSocket], undefined, undefined, [0, 1]);
  setMetadataFor(connectWithReconnect$slambda, 'connectWithReconnect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(connectWithReconnect$slambda_1, 'connectWithReconnect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [3]);
  setMetadataFor(connectWithReconnect$slambda_3, 'connectWithReconnect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(connectWithReconnect$slambda$slambda, 'connectWithReconnect$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(connectWithReconnect$slambda_5, 'connectWithReconnect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(restarting$slambda, 'restarting$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($connectWithReconnectCOROUTINE$24, '$connectWithReconnectCOROUTINE$24', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($collectCOROUTINE$31, '$collectCOROUTINE$31', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($emitCOROUTINE$32, '$emitCOROUTINE$32', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StreamId, 'StreamId', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StreamsStorage, 'StreamsStorage', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FrameHandler, 'FrameHandler', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(ResponderFrameHandler, 'ResponderFrameHandler', classMeta, FrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(RequesterFrameHandler, 'RequesterFrameHandler', classMeta, FrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(RequesterRequestChannelFrameHandler, 'RequesterRequestChannelFrameHandler', classMeta, RequesterFrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(RequesterRequestResponseFrameHandler, 'RequesterRequestResponseFrameHandler', classMeta, RequesterFrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(RequesterRequestStreamFrameHandler, 'RequesterRequestStreamFrameHandler', classMeta, RequesterFrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(ResponderFireAndForgetFrameHandler, 'ResponderFireAndForgetFrameHandler', classMeta, ResponderFrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(ResponderRequestChannelFrameHandler, 'ResponderRequestChannelFrameHandler', classMeta, ResponderFrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(ResponderRequestResponseFrameHandler, 'ResponderRequestResponseFrameHandler', classMeta, ResponderFrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(ResponderRequestStreamFrameHandler, 'ResponderRequestStreamFrameHandler', classMeta, ResponderFrameHandler, undefined, undefined, undefined, []);
  setMetadataFor(KeepAlive, 'KeepAlive', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LoggingLevel, 'LoggingLevel', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Reader, 'Reader', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoutingMetadata, 'RoutingMetadata', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  function copy() {
    var tmp = this.q5l().c37();
    var tmp0_safe_receiver = this.a5k();
    return new DefaultPayload(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c37());
  }
  function close() {
    this.q5l().n2g();
    var tmp0_safe_receiver = this.a5k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n2g();
    }
  }
  setMetadataFor(Payload, 'Payload', interfaceMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(DefaultPayload, 'DefaultPayload', classMeta, undefined, [Payload], undefined, undefined, []);
  setMetadataFor(PayloadFromBuilder, 'PayloadFromBuilder', classMeta, undefined, [Closeable, Payload], undefined, undefined, []);
  setMetadataFor(PayloadMimeType, 'PayloadMimeType', classMeta, undefined, undefined, undefined, undefined, []);
  function get_coroutineContext() {
    return EmptyCoroutineContext_getInstance();
  }
  setMetadataFor(ClientTransport, 'ClientTransport', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, [0]);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ConsoleLogger, 'ConsoleLogger', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function Connection() {
  }
  function sendFrame(_this__u8e3s4, frame, $cont) {
    var tmp = new $sendFrameCOROUTINE$0(_this__u8e3s4, frame, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function $sendFrameCOROUTINE$0(_this__u8e3s4, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q5a_1 = _this__u8e3s4;
    this.r5a_1 = frame;
  }
  $sendFrameCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.t5a_1 = this.r5a_1.u5a(this.q5a_1.f5a());
            this.eg_1 = 3;
            this.dg_1 = 2;
            suspendResult = this.q5a_1.g5a(this.t5a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s5a_1 = suspendResult;
            this.eg_1 = 4;
            this.dg_1 = 6;
            continue $sm;
          case 3:
            this.eg_1 = 4;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              var e = this.gg_1;
              this.t5a_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            throw this.gg_1;
          case 5:
            this.eg_1 = 4;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 6;
            continue $sm;
          case 6:
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
  function ConnectionConfig(keepAlive, payloadMimeType, setupPayload) {
    this.v5a_1 = keepAlive;
    this.w5a_1 = payloadMimeType;
    this.x5a_1 = setupPayload;
  }
  function ConnectionAcceptorContext(config, requester) {
    this.y5a_1 = config;
    this.z5a_1 = requester;
  }
  function RSocket() {
  }
  function notImplemented(operation) {
    throw new NotImplementedError(operation + ' is not implemented.');
  }
  function Invalid(message) {
    ErrorCode_getInstance();
    Setup.call(this, 1, message);
    captureStack(this, Invalid);
  }
  function Unsupported(message) {
    ErrorCode_getInstance();
    Setup.call(this, 2, message);
    captureStack(this, Unsupported);
  }
  function Rejected(message) {
    ErrorCode_getInstance();
    Setup.call(this, 3, message);
    captureStack(this, Rejected);
  }
  function Companion() {
    Companion_instance = this;
    this.f5b_1 = 769;
    this.g5b_1 = -2;
  }
  Companion.prototype.h5b = function (errorCode) {
    return 769 <= errorCode ? true : errorCode <= -2;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Setup(errorCode, message) {
    RSocketError.call(this, errorCode, message);
    captureStack(this, Setup);
  }
  function RejectedResume(message) {
    ErrorCode_getInstance();
    RSocketError.call(this, 4, message);
    captureStack(this, RejectedResume);
  }
  function ConnectionError(message) {
    ErrorCode_getInstance();
    RSocketError.call(this, 257, message);
    captureStack(this, ConnectionError);
  }
  function ConnectionClose(message) {
    ErrorCode_getInstance();
    RSocketError.call(this, 258, message);
    captureStack(this, ConnectionClose);
  }
  function ApplicationError(message) {
    ErrorCode_getInstance();
    RSocketError.call(this, 513, message);
    captureStack(this, ApplicationError);
  }
  function Rejected_0(message) {
    ErrorCode_getInstance();
    RSocketError.call(this, 514, message);
    captureStack(this, Rejected_0);
  }
  function Canceled(message) {
    ErrorCode_getInstance();
    RSocketError.call(this, 515, message);
    captureStack(this, Canceled);
  }
  function Invalid_0(message) {
    ErrorCode_getInstance();
    RSocketError.call(this, 516, message);
    captureStack(this, Invalid_0);
  }
  function Custom(errorCode, message) {
    Companion_getInstance_4();
    RSocketError.call(this, errorCode, message);
    // Inline function 'kotlin.require' call
    var tmp0_require = Companion_getInstance_4().h5b(errorCode);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.Custom.<anonymous>' call
      tmp$ret$0 = 'Allowed errorCode value should be in range [0x00000301-0xFFFFFFFE]';
      var message_0 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    captureStack(this, Custom);
  }
  function RSocketError(errorCode, message) {
    extendThrowable(this, message, void 1);
    this.i5b_1 = errorCode;
    captureStack(this, RSocketError);
  }
  function ErrorCode() {
    ErrorCode_instance = this;
    this.j5b_1 = 1;
    this.k5b_1 = 2;
    this.l5b_1 = 3;
    this.m5b_1 = 4;
    this.n5b_1 = 257;
    this.o5b_1 = 258;
    this.p5b_1 = 513;
    this.q5b_1 = 514;
    this.r5b_1 = 515;
    this.s5b_1 = 516;
    this.t5b_1 = 0;
    this.u5b_1 = -1;
    this.v5b_1 = 769;
    this.w5b_1 = -2;
  }
  var ErrorCode_instance;
  function ErrorCode_getInstance() {
    if (ErrorCode_instance == null)
      new ErrorCode();
    return ErrorCode_instance;
  }
  function RSocketError_0(streamId, errorCode, message) {
    var tmp0_subject = streamId;
    var tmp;
    if (tmp0_subject === 0) {
      var tmp1_subject = errorCode;
      var tmp_0;
      ErrorCode_getInstance();
      if (tmp1_subject === 1) {
        tmp_0 = new Invalid(message);
      } else {
        ErrorCode_getInstance();
        if (tmp1_subject === 2) {
          tmp_0 = new Unsupported(message);
        } else {
          ErrorCode_getInstance();
          if (tmp1_subject === 3) {
            tmp_0 = new Rejected(message);
          } else {
            ErrorCode_getInstance();
            if (tmp1_subject === 4) {
              tmp_0 = new RejectedResume(message);
            } else {
              ErrorCode_getInstance();
              if (tmp1_subject === 257) {
                tmp_0 = new ConnectionError(message);
              } else {
                ErrorCode_getInstance();
                if (tmp1_subject === 258) {
                  tmp_0 = new ConnectionClose(message);
                } else {
                  tmp_0 = IllegalArgumentException_init_$Create$('Invalid Error frame in Stream ID 0: ' + errorCode + " '%" + message + "'");
                }
              }
            }
          }
        }
      }
      tmp = tmp_0;
    } else {
      var tmp2_subject = errorCode;
      var tmp_1;
      ErrorCode_getInstance();
      if (tmp2_subject === 513) {
        tmp_1 = new ApplicationError(message);
      } else {
        ErrorCode_getInstance();
        if (tmp2_subject === 514) {
          tmp_1 = new Rejected_0(message);
        } else {
          ErrorCode_getInstance();
          if (tmp2_subject === 515) {
            tmp_1 = new Canceled(message);
          } else {
            ErrorCode_getInstance();
            if (tmp2_subject === 516) {
              tmp_1 = new Invalid_0(message);
            } else {
              var tmp3_subject = Companion_getInstance_4().h5b(errorCode);
              var tmp_2;
              switch (tmp3_subject) {
                case true:
                  tmp_2 = new Custom(errorCode, message);
                  break;
                case false:
                  tmp_2 = IllegalArgumentException_init_$Create$('Invalid Error frame in Stream ID ' + streamId + ': ' + errorCode + " '" + message + "'");
                  break;
                default:
                  noWhenBranchMatchedException();
                  break;
              }
              tmp_1 = tmp_2;
            }
          }
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function get_DefaultStrategy() {
    init_properties_RequestStrategy_kt_r3qjam();
    return DefaultStrategy;
  }
  var DefaultStrategy;
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function RequestStrategy() {
  }
  function Element_0(requestSize, requestOn) {
    this.y5b_1 = requestSize;
    this.z5b_1 = requestOn;
    this.a5c_1 = this.y5b_1;
  }
  Element_0.prototype.b5c = function ($cont) {
    return this.y5b_1;
  };
  Element_0.prototype.c5c = function ($cont) {
    var tmp0_this = this;
    tmp0_this.a5c_1 = tmp0_this.a5c_1 - 1 | 0;
    if (!(this.a5c_1 === this.z5b_1))
      return 0;
    var tmp1_this = this;
    tmp1_this.a5c_1 = tmp1_this.a5c_1 + this.y5b_1 | 0;
    return this.y5b_1;
  };
  function PrefetchStrategy(requestSize, requestOn) {
    this.d5c_1 = requestSize;
    this.e5c_1 = requestOn;
    // Inline function 'kotlin.require' call
    var containsUpper = this.d5c_1;
    var containsArg = this.e5c_1;
    var tmp0_require = 0 <= containsArg ? containsArg < containsUpper : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.PrefetchStrategy.<anonymous>' call
      tmp$ret$0 = 'requestSize and requestOn should be in relation: requestSize > requestOn >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  PrefetchStrategy.prototype.x5b = function () {
    return new Element_0(this.d5c_1, this.e5c_1);
  };
  function requestStrategy(_this__u8e3s4) {
    init_properties_RequestStrategy_kt_r3qjam();
    var tmp0_elvis_lhs = _this__u8e3s4.l3(Key_getInstance_0());
    return (tmp0_elvis_lhs == null ? get_DefaultStrategy() : tmp0_elvis_lhs).x5b();
  }
  var properties_initialized_RequestStrategy_kt_zgx1oy;
  function init_properties_RequestStrategy_kt_r3qjam() {
    if (properties_initialized_RequestStrategy_kt_zgx1oy) {
    } else {
      properties_initialized_RequestStrategy_kt_zgx1oy = true;
      DefaultStrategy = new PrefetchStrategy(64, 16);
    }
  }
  function Interceptors(requesters, responders, connections, acceptors) {
    this.f5c_1 = requesters;
    this.g5c_1 = responders;
    this.h5c_1 = connections;
    this.i5c_1 = acceptors;
  }
  Interceptors.prototype.j5c = function (requester) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = this.f5c_1;
    var accumulator = requester;
    var tmp0_iterator = tmp0_fold.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.core.Interceptors.wrapRequester.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.k5c(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  };
  Interceptors.prototype.l5c = function (responder) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = this.g5c_1;
    var accumulator = responder;
    var tmp0_iterator = tmp0_fold.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.core.Interceptors.wrapResponder.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.k5c(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  };
  Interceptors.prototype.m5c = function (connection) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = this.h5c_1;
    var accumulator = connection;
    var tmp0_iterator = tmp0_fold.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.core.Interceptors.wrapConnection.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.k5c(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  };
  Interceptors.prototype.n5c = function (connection) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = this.i5c_1;
    var accumulator = connection;
    var tmp0_iterator = tmp0_fold.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.core.Interceptors.wrapAcceptor.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.k5c(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  };
  function InterceptorsBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.o5c_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.p5c_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.q5c_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_2.r5c_1 = tmp$ret$3;
  }
  InterceptorsBuilder.prototype.cq = function () {
    return new Interceptors(this.o5c_1, this.p5c_1, this.q5c_1, this.r5c_1);
  };
  function connectOnce($this, transport, $cont) {
    var tmp = new $connectOnceCOROUTINE$3($this, transport, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function wrapConnection(_this__u8e3s4, $this) {
    return logging($this.x5d_1.m5c(_this__u8e3s4), $this.v5d_1.b5e('io.rsocket.kotlin.frame'));
  }
  function RSocketConnector$connect$slambda(this$0, $transport, resultContinuation) {
    this.k5e_1 = this$0;
    this.l5e_1 = $transport;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketConnector$connect$slambda.prototype.n5e = function ($this$withContext, $cont) {
    var tmp = this.b22($this$withContext, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketConnector$connect$slambda.prototype.kh = function (p1, $cont) {
    return this.n5e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketConnector$connect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = connectOnce(this.k5e_1, this.l5e_1, this);
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
  RSocketConnector$connect$slambda.prototype.b22 = function ($this$withContext, completion) {
    var i = new RSocketConnector$connect$slambda(this.k5e_1, this.l5e_1, completion);
    i.m5e_1 = $this$withContext;
    return i;
  };
  function RSocketConnector$connect$slambda_0(this$0, $transport, resultContinuation) {
    var i = new RSocketConnector$connect$slambda(this$0, $transport, resultContinuation);
    var l = function ($this$withContext, $cont) {
      return i.n5e($this$withContext, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketConnector$connect$slambda_1(this$0, $transport, resultContinuation) {
    this.w5e_1 = this$0;
    this.x5e_1 = $transport;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketConnector$connect$slambda_1.prototype.y5e = function ($cont) {
    var tmp = this.xg($cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketConnector$connect$slambda_1.prototype.z5e = function ($cont) {
    return this.y5e($cont);
  };
  RSocketConnector$connect$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = connectOnce(this.w5e_1, this.x5e_1, this);
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
  RSocketConnector$connect$slambda_1.prototype.xg = function (completion) {
    var i = new RSocketConnector$connect$slambda_1(this.w5e_1, this.x5e_1, completion);
    return i;
  };
  function RSocketConnector$connect$slambda_2(this$0, $transport, resultContinuation) {
    var i = new RSocketConnector$connect$slambda_1(this$0, $transport, resultContinuation);
    var l = function ($cont) {
      return i.y5e($cont);
    };
    l.$arity = 0;
    return l;
  }
  function RSocketConnector$connectOnce$lambda($prioritizer, $streamsStorage, $connectionConfig) {
    return function (it) {
      $prioritizer.c5f(it);
      $streamsStorage.h5f(it);
      $connectionConfig.x5a_1.n2g();
      return Unit_getInstance();
    };
  }
  function RSocketConnector$connectOnce$lambda_0($connection) {
    return function (it) {
      cancel($connection, 'Requester cancelled', it);
      return Unit_getInstance();
    };
  }
  function RSocketConnector$connectOnce$lambda_1($connection) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel($connection, 'Request handler failed', it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function RSocketConnector$connectOnce$lambda_2($requester, $requestHandler) {
    return function (it) {
      cancel($requester, 'Connection closed', it);
      cancel($requestHandler, 'Connection closed', it);
      return Unit_getInstance();
    };
  }
  function RSocketConnector$connectOnce$slambda($keepAliveHandler, resultContinuation) {
    this.q5f_1 = $keepAliveHandler;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketConnector$connectOnce$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketConnector$connectOnce$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketConnector$connectOnce$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.r5f_1)) {
              this.dg_1 = 3;
              continue $sm;
            }

            this.dg_1 = 2;
            suspendResult = this.q5f_1.v5f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 1;
            continue $sm;
          case 3:
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
  RSocketConnector$connectOnce$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketConnector$connectOnce$slambda(this.q5f_1, completion);
    i.r5f_1 = $this$launch;
    return i;
  };
  function RSocketConnector$connectOnce$slambda_0($keepAliveHandler, resultContinuation) {
    var i = new RSocketConnector$connectOnce$slambda($keepAliveHandler, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketConnector$connectOnce$slambda_1($connection, $prioritizer, resultContinuation) {
    this.e5g_1 = $connection;
    this.f5g_1 = $prioritizer;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketConnector$connectOnce$slambda_1.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketConnector$connectOnce$slambda_1.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketConnector$connectOnce$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.g5g_1)) {
              this.dg_1 = 4;
              continue $sm;
            }

            this.dg_1 = 2;
            suspendResult = this.f5g_1.i5g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h5g_1 = suspendResult;
            this.dg_1 = 3;
            suspendResult = sendFrame(this.e5g_1, this.h5g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.dg_1 = 1;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  RSocketConnector$connectOnce$slambda_1.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketConnector$connectOnce$slambda_1(this.e5g_1, this.f5g_1, completion);
    i.g5g_1 = $this$launch;
    return i;
  };
  function RSocketConnector$connectOnce$slambda_2($connection, $prioritizer, resultContinuation) {
    var i = new RSocketConnector$connectOnce$slambda_1($connection, $prioritizer, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketConnector$connectOnce$slambda_3($connection, $responder, $keepAliveHandler, $streamsStorage, resultContinuation) {
    this.r5g_1 = $connection;
    this.s5g_1 = $responder;
    this.t5g_1 = $keepAliveHandler;
    this.u5g_1 = $streamsStorage;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketConnector$connectOnce$slambda_3.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketConnector$connectOnce$slambda_3.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketConnector$connectOnce$slambda_3.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 11;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.v5g_1)) {
              this.dg_1 = 10;
              continue $sm;
            }

            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.r5g_1.h5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.x5g_1 = suspendResult;
            this.y5g_1 = readFrame(this.x5g_1, this.r5g_1.f5a());
            this.eg_1 = 7;
            this.z5g_1 = this.y5g_1.d5h();
            if (this.z5g_1 === 0) {
              this.b5h_1 = this.y5g_1;
              var tmp_0 = this.b5h_1;
              if (tmp_0 instanceof MetadataPushFrame) {
                this.c5h_1 = this.s5g_1.m5h(this.y5g_1.i5h_1);
                this.dg_1 = 5;
                continue $sm;
              } else {
                var tmp_1 = this.b5h_1;
                if (tmp_1 instanceof ErrorFrame) {
                  var tmp_2 = this;
                  cancel(this.r5g_1, 'Error frame received on 0 stream', this.y5g_1.h5h_1);
                  tmp_2.c5h_1 = Unit_getInstance();
                  this.dg_1 = 5;
                  continue $sm;
                } else {
                  var tmp_3 = this.b5h_1;
                  if (tmp_3 instanceof KeepAliveFrame) {
                    this.dg_1 = 4;
                    suspendResult = this.t5g_1.f5h(this.y5g_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    var tmp_4 = this.b5h_1;
                    if (tmp_4 instanceof LeaseFrame) {
                      var tmp_5 = this;
                      this.y5g_1.n2g();
                      var tmp0_also = Unit_getInstance();
                      throw IllegalStateException_init_$Create$("lease isn't implemented");
                    } else {
                      var tmp_6 = this;
                      this.y5g_1.n2g();
                      tmp_6.c5h_1 = Unit_getInstance();
                      this.dg_1 = 5;
                      continue $sm;
                    }
                  }
                }
              }
            } else {
              var tmp_7 = this;
              this.u5g_1.e5h(this.y5g_1, this.s5g_1);
              tmp_7.a5h_1 = Unit_getInstance();
              this.dg_1 = 6;
              continue $sm;
            }

            break;
          case 4:
            var tmp_8 = this;
            tmp_8.c5h_1 = Unit_getInstance();
            this.dg_1 = 5;
            continue $sm;
          case 5:
            this.a5h_1 = this.c5h_1;
            this.dg_1 = 6;
            continue $sm;
          case 6:
            this.w5g_1 = this.a5h_1;
            this.eg_1 = 11;
            this.dg_1 = 9;
            continue $sm;
          case 7:
            this.eg_1 = 11;
            var tmp_9 = this.gg_1;
            if (tmp_9 instanceof Error) {
              var e = this.gg_1;
              this.y5g_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 8:
            this.eg_1 = 11;
            if (false) {
              this.dg_1 = 2;
              continue $sm;
            }

            this.dg_1 = 9;
            continue $sm;
          case 9:
            ;
            this.dg_1 = 1;
            continue $sm;
          case 10:
            return Unit_getInstance();
          case 11:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 11) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  RSocketConnector$connectOnce$slambda_3.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketConnector$connectOnce$slambda_3(this.r5g_1, this.s5g_1, this.t5g_1, this.u5g_1, completion);
    i.v5g_1 = $this$launch;
    return i;
  };
  function RSocketConnector$connectOnce$slambda_4($connection, $responder, $keepAliveHandler, $streamsStorage, resultContinuation) {
    var i = new RSocketConnector$connectOnce$slambda_3($connection, $responder, $keepAliveHandler, $streamsStorage, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $connectCOROUTINE$2(_this__u8e3s4, transport, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v5h_1 = _this__u8e3s4;
    this.w5h_1 = transport;
  }
  $connectCOROUTINE$2.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.x5h_1 = this.v5h_1.a5e_1;
            if (this.x5h_1 == null) {
              this.dg_1 = 2;
              var tmp_0 = this.w5h_1.m1a();
              suspendResult = withContext(tmp_0, RSocketConnector$connect$slambda_0(this.v5h_1, this.w5h_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 1;
              var tmp_1 = this.w5h_1.m1a();
              var tmp_2 = this.v5h_1.v5d_1.b5e('io.rsocket.kotlin.connection');
              suspendResult = connectWithReconnect(tmp_1, tmp_2, RSocketConnector$connect$slambda_2(this.v5h_1, this.w5h_1, null), this.v5h_1.a5e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.y5h_1 = suspendResult;
            this.dg_1 = 3;
            continue $sm;
          case 2:
            this.y5h_1 = suspendResult;
            this.dg_1 = 3;
            continue $sm;
          case 3:
            return this.y5h_1;
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
  function $connectOnceCOROUTINE$3(_this__u8e3s4, transport, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a5d_1 = _this__u8e3s4;
    this.b5d_1 = transport;
  }
  $connectOnceCOROUTINE$3.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            this.dg_1 = 1;
            suspendResult = this.b5d_1.z5h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c5d_1 = suspendResult;
            this.d5d_1 = wrapConnection(this.c5d_1, this.a5d_1);
            var tmp_0 = this;
            var tmp_1;
            try {
              tmp_1 = this.a5d_1.y5d_1();
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                cancel(this.d5d_1, 'Connection config provider failed', $p);
                throw $p;
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            tmp_0.e5d_1 = tmp_1;
            this.f5d_1 = new SetupFrame(Companion_getInstance_8().a5i_1, false, this.e5d_1.v5a_1, null, this.e5d_1.w5a_1, this.e5d_1.x5a_1.c37());
            this.eg_1 = 4;
            var tmp_3 = this;
            tmp_3.g5d_1 = this.a5d_1.w5d_1;
            var tmp_4 = this;
            tmp_4.h5d_1 = this.a5d_1.x5d_1;
            var tmp_5 = this;
            tmp_5.i5d_1 = this.a5d_1.z5d_1;
            this.j5d_1 = new Prioritizer();
            this.k5d_1 = new FrameSender(this.j5d_1, this.d5d_1.f5a(), this.g5d_1);
            this.l5d_1 = new StreamsStorage(false, this.d5d_1.f5a());
            this.m5d_1 = new KeepAliveHandler(this.e5d_1.v5a_1, this.k5d_1);
            this.n5d_1 = SupervisorJob(this.d5d_1.m1a().l3(Key_getInstance()));
            this.o5d_1 = this.d5d_1.m1a().s3(this.n5d_1);
            this.n5d_1.n1b(RSocketConnector$connectOnce$lambda(this.j5d_1, this.l5d_1, this.e5d_1));
            ;
            this.p5d_1 = this.h5d_1.j5c(new RSocketRequester(this.o5d_1.s3(new CoroutineName('rSocket-requester')), this.k5d_1, this.l5d_1, this.d5d_1.f5a()));
            var tmp_6 = this;
            tmp_6.q5d_1 = this.h5d_1.n5c(this.i5d_1);
            this.dg_1 = 2;
            suspendResult = this.q5d_1.b5i(new ConnectionAcceptorContext(this.e5d_1, this.p5d_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r5d_1 = suspendResult;
            this.s5d_1 = this.h5d_1.l5c(this.r5d_1);
            this.t5d_1 = new RSocketResponder(this.o5d_1.s3(new CoroutineName('rSocket-responder')), this.k5d_1, this.s5d_1);
            var tmp0_safe_receiver = this.p5d_1.m1a().l3(Key_getInstance());
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.n1b(RSocketConnector$connectOnce$lambda_0(this.d5d_1));
            }

            ;
            var tmp1_safe_receiver = this.s5d_1.m1a().l3(Key_getInstance());
            if (tmp1_safe_receiver == null)
              null;
            else {
              tmp1_safe_receiver.n1b(RSocketConnector$connectOnce$lambda_1(this.d5d_1));
            }

            ;
            var tmp2_safe_receiver = this.d5d_1.m1a().l3(Key_getInstance());
            if (tmp2_safe_receiver == null)
              null;
            else {
              tmp2_safe_receiver.n1b(RSocketConnector$connectOnce$lambda_2(this.p5d_1, this.s5d_1));
            }

            ;
            var tmp_7 = plus_0(this.d5d_1, new CoroutineName('rSocket-connection-keep-alive'));
            launch$default(tmp_7, null, null, RSocketConnector$connectOnce$slambda_0(this.m5d_1, null), 3, null);
            ;
            var tmp_8 = plus_0(this.d5d_1, new CoroutineName('rSocket-connection-send'));
            launch$default(tmp_8, null, null, RSocketConnector$connectOnce$slambda_2(this.d5d_1, this.j5d_1, null), 3, null);
            ;
            var tmp_9 = plus_0(this.d5d_1, new CoroutineName('rSocket-connection-receive'));
            launch$default(tmp_9, null, null, RSocketConnector$connectOnce$slambda_4(this.d5d_1, this.t5d_1, this.m5d_1, this.l5d_1, null), 3, null);
            ;
            this.u5d_1 = this.p5d_1;
            this.dg_1 = 3;
            suspendResult = sendFrame(this.d5d_1, this.f5d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return this.u5d_1;
          case 4:
            this.eg_1 = 6;
            var tmp_10 = this.gg_1;
            if (tmp_10 instanceof Error) {
              var cause = this.gg_1;
              this.e5d_1.x5a_1.n2g();
              this.f5d_1.n2g();
              cancel(this.d5d_1, 'Connection establishment failed', cause);
              throw cause;
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            this.eg_1 = 6;
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
  function RSocketConnector(loggerFactory, maxFragmentSize, interceptors, connectionConfigProvider, acceptor, reconnectPredicate) {
    this.v5d_1 = loggerFactory;
    this.w5d_1 = maxFragmentSize;
    this.x5d_1 = interceptors;
    this.y5d_1 = connectionConfigProvider;
    this.z5d_1 = acceptor;
    this.a5e_1 = reconnectPredicate;
  }
  RSocketConnector.prototype.i5i = function (transport, $cont) {
    var tmp = new $connectCOROUTINE$2(this, transport, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function RSocketConnector_0(configure) {
    var builder = new RSocketConnectorBuilder();
    configure(builder);
    return builder.cq();
  }
  function RSocketConnector$default(configure, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      configure = RSocketConnector$lambda;
    }
    return RSocketConnector_0(configure);
  }
  function RSocketConnectorBuilder$ConnectionConfigBuilder$producer$lambda($keepAlive, $payloadMimeType, $setupPayload) {
    return function () {
      var tmp0_safe_receiver = $setupPayload;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      return new ConnectionConfig($keepAlive, $payloadMimeType, tmp1_elvis_lhs == null ? Companion_getInstance_10().p5i_1 : tmp1_elvis_lhs);
    };
  }
  function EmptyRSocket() {
    var tmp = this;
    tmp.q5i_1 = Job$default(null, 1, null);
  }
  EmptyRSocket.prototype.m1a = function () {
    return this.q5i_1;
  };
  function sam$io_rsocket_kotlin_ConnectionAcceptor$0(function_0) {
    this.r5i_1 = function_0;
  }
  sam$io_rsocket_kotlin_ConnectionAcceptor$0.prototype.b5i = function (_this__u8e3s4, $cont) {
    return this.r5i_1(_this__u8e3s4, $cont);
  };
  function RSocketConnectorBuilder$Companion$defaultAcceptor$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketConnectorBuilder$Companion$defaultAcceptor$slambda.prototype.b5j = function ($this$ConnectionAcceptor, $cont) {
    var tmp = this.c5j($this$ConnectionAcceptor, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketConnectorBuilder$Companion$defaultAcceptor$slambda.prototype.kh = function (p1, $cont) {
    return this.b5j(p1 instanceof ConnectionAcceptorContext ? p1 : THROW_CCE(), $cont);
  };
  RSocketConnectorBuilder$Companion$defaultAcceptor$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        if (tmp === 0) {
          this.eg_1 = 1;
          this.a5j_1.y5a_1.x5a_1.n2g();
          return new EmptyRSocket();
        } else if (tmp === 1) {
          throw this.gg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  RSocketConnectorBuilder$Companion$defaultAcceptor$slambda.prototype.c5j = function ($this$ConnectionAcceptor, completion) {
    var i = new RSocketConnectorBuilder$Companion$defaultAcceptor$slambda(completion);
    i.a5j_1 = $this$ConnectionAcceptor;
    return i;
  };
  function RSocketConnectorBuilder$Companion$defaultAcceptor$slambda_0(resultContinuation) {
    var i = new RSocketConnectorBuilder$Companion$defaultAcceptor$slambda(resultContinuation);
    var l = function ($this$ConnectionAcceptor, $cont) {
      return i.b5j($this$ConnectionAcceptor, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ConnectionConfigBuilder() {
    this.d5j_1 = get_DefaultKeepAlive();
    this.e5j_1 = get_DefaultPayloadMimeType();
    this.f5j_1 = null;
  }
  ConnectionConfigBuilder.prototype.g5j = function () {
    var keepAlive = this.d5j_1;
    var payloadMimeType = this.e5j_1;
    var setupPayload = this.f5j_1;
    return RSocketConnectorBuilder$ConnectionConfigBuilder$producer$lambda(keepAlive, payloadMimeType, setupPayload);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = RSocketConnectorBuilder$Companion$defaultAcceptor$slambda_0(null);
    tmp.h5j_1 = new sam$io_rsocket_kotlin_ConnectionAcceptor$0(tmp_0);
  }
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function RSocketConnectorBuilder() {
    Companion_getInstance_5();
    this.j5i_1 = get_DefaultLoggerFactory();
    this.k5i_1 = 0;
    this.l5i_1 = new ConnectionConfigBuilder();
    this.m5i_1 = new InterceptorsBuilder();
    this.n5i_1 = null;
    this.o5i_1 = null;
  }
  RSocketConnectorBuilder.prototype.i5j = function (configure) {
    configure(this.l5i_1);
  };
  RSocketConnectorBuilder.prototype.cq = function () {
    var tmp = this.j5i_1;
    var tmp_0 = this.k5i_1;
    var tmp_1 = this.m5i_1.cq();
    var tmp_2 = this.l5i_1.g5j();
    var tmp0_elvis_lhs = this.n5i_1;
    return new RSocketConnector(tmp, tmp_0, tmp_1, tmp_2, tmp0_elvis_lhs == null ? Companion_getInstance_5().h5j_1 : tmp0_elvis_lhs, this.o5i_1);
  };
  function RSocketConnector$lambda($this$null) {
    return Unit_getInstance();
  }
  var WellKnownMimeType_ApplicationAvro_instance;
  var WellKnownMimeType_ApplicationCbor_instance;
  var WellKnownMimeType_ApplicationGraphql_instance;
  var WellKnownMimeType_ApplicationGzip_instance;
  var WellKnownMimeType_ApplicationJavascript_instance;
  var WellKnownMimeType_ApplicationJson_instance;
  var WellKnownMimeType_ApplicationOctetStream_instance;
  var WellKnownMimeType_ApplicationPdf_instance;
  var WellKnownMimeType_ApplicationThrift_instance;
  var WellKnownMimeType_ApplicationProtoBuf_instance;
  var WellKnownMimeType_ApplicationXml_instance;
  var WellKnownMimeType_ApplicationZip_instance;
  var WellKnownMimeType_AudioAac_instance;
  var WellKnownMimeType_AudioMp3_instance;
  var WellKnownMimeType_AudioMp4_instance;
  var WellKnownMimeType_AudioMpeg3_instance;
  var WellKnownMimeType_AudioMpeg_instance;
  var WellKnownMimeType_AudioOgg_instance;
  var WellKnownMimeType_AudioOpus_instance;
  var WellKnownMimeType_AudioVorbis_instance;
  var WellKnownMimeType_ImageBmp_instance;
  var WellKnownMimeType_ImageGif_instance;
  var WellKnownMimeType_ImageHeicSequence_instance;
  var WellKnownMimeType_ImageHeic_instance;
  var WellKnownMimeType_ImageHeifSequence_instance;
  var WellKnownMimeType_ImageHeif_instance;
  var WellKnownMimeType_ImageJpeg_instance;
  var WellKnownMimeType_ImagePng_instance;
  var WellKnownMimeType_ImageTiff_instance;
  var WellKnownMimeType_MultipartMixed_instance;
  var WellKnownMimeType_TextCss_instance;
  var WellKnownMimeType_TextCsv_instance;
  var WellKnownMimeType_TextHtml_instance;
  var WellKnownMimeType_TextPlain_instance;
  var WellKnownMimeType_TextXml_instance;
  var WellKnownMimeType_VideoH264_instance;
  var WellKnownMimeType_VideoH265_instance;
  var WellKnownMimeType_VideoVp8_instance;
  var WellKnownMimeType_ApplicationHessian_instance;
  var WellKnownMimeType_ApplicationJavaObject_instance;
  var WellKnownMimeType_ApplicationCloudeventsJson_instance;
  var WellKnownMimeType_ApplicationCapnProto_instance;
  var WellKnownMimeType_ApplicationFlatBuffers_instance;
  var WellKnownMimeType_MessageRSocketMimeType_instance;
  var WellKnownMimeType_MessageRSocketAcceptMimeTypes_instance;
  var WellKnownMimeType_MessageRSocketAuthentication_instance;
  var WellKnownMimeType_MessageRSocketTracingZipkin_instance;
  var WellKnownMimeType_MessageRSocketRouting_instance;
  var WellKnownMimeType_MessageRSocketCompositeMetadata_instance;
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(128), null);
    tmp.j5j_1 = tmp$ret$0;
    this.k5j_1 = HashMap_init_$Create$(128);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = values();
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.rsocket.kotlin.core.Companion.<anonymous>' call
      Companion_getInstance_6().j5j_1[element.o5j_1] = element;
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = Companion_getInstance_6().k5j_1;
      var tmp1_set = element.n5j_1;
      tmp0_set.x2(tmp1_set, element);
    }
  }
  var Companion_instance_1;
  function Companion_getInstance_6() {
    WellKnownMimeType_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values() {
    return [WellKnownMimeType_ApplicationAvro_getInstance(), WellKnownMimeType_ApplicationCbor_getInstance(), WellKnownMimeType_ApplicationGraphql_getInstance(), WellKnownMimeType_ApplicationGzip_getInstance(), WellKnownMimeType_ApplicationJavascript_getInstance(), WellKnownMimeType_ApplicationJson_getInstance(), WellKnownMimeType_ApplicationOctetStream_getInstance(), WellKnownMimeType_ApplicationPdf_getInstance(), WellKnownMimeType_ApplicationThrift_getInstance(), WellKnownMimeType_ApplicationProtoBuf_getInstance(), WellKnownMimeType_ApplicationXml_getInstance(), WellKnownMimeType_ApplicationZip_getInstance(), WellKnownMimeType_AudioAac_getInstance(), WellKnownMimeType_AudioMp3_getInstance(), WellKnownMimeType_AudioMp4_getInstance(), WellKnownMimeType_AudioMpeg3_getInstance(), WellKnownMimeType_AudioMpeg_getInstance(), WellKnownMimeType_AudioOgg_getInstance(), WellKnownMimeType_AudioOpus_getInstance(), WellKnownMimeType_AudioVorbis_getInstance(), WellKnownMimeType_ImageBmp_getInstance(), WellKnownMimeType_ImageGif_getInstance(), WellKnownMimeType_ImageHeicSequence_getInstance(), WellKnownMimeType_ImageHeic_getInstance(), WellKnownMimeType_ImageHeifSequence_getInstance(), WellKnownMimeType_ImageHeif_getInstance(), WellKnownMimeType_ImageJpeg_getInstance(), WellKnownMimeType_ImagePng_getInstance(), WellKnownMimeType_ImageTiff_getInstance(), WellKnownMimeType_MultipartMixed_getInstance(), WellKnownMimeType_TextCss_getInstance(), WellKnownMimeType_TextCsv_getInstance(), WellKnownMimeType_TextHtml_getInstance(), WellKnownMimeType_TextPlain_getInstance(), WellKnownMimeType_TextXml_getInstance(), WellKnownMimeType_VideoH264_getInstance(), WellKnownMimeType_VideoH265_getInstance(), WellKnownMimeType_VideoVp8_getInstance(), WellKnownMimeType_ApplicationHessian_getInstance(), WellKnownMimeType_ApplicationJavaObject_getInstance(), WellKnownMimeType_ApplicationCloudeventsJson_getInstance(), WellKnownMimeType_ApplicationCapnProto_getInstance(), WellKnownMimeType_ApplicationFlatBuffers_getInstance(), WellKnownMimeType_MessageRSocketMimeType_getInstance(), WellKnownMimeType_MessageRSocketAcceptMimeTypes_getInstance(), WellKnownMimeType_MessageRSocketAuthentication_getInstance(), WellKnownMimeType_MessageRSocketTracingZipkin_getInstance(), WellKnownMimeType_MessageRSocketRouting_getInstance(), WellKnownMimeType_MessageRSocketCompositeMetadata_getInstance()];
  }
  var WellKnownMimeType_entriesInitialized;
  function WellKnownMimeType_initEntries() {
    if (WellKnownMimeType_entriesInitialized)
      return Unit_getInstance();
    WellKnownMimeType_entriesInitialized = true;
    WellKnownMimeType_ApplicationAvro_instance = new WellKnownMimeType('ApplicationAvro', 0, 'application/avro', 0);
    WellKnownMimeType_ApplicationCbor_instance = new WellKnownMimeType('ApplicationCbor', 1, 'application/cbor', 1);
    WellKnownMimeType_ApplicationGraphql_instance = new WellKnownMimeType('ApplicationGraphql', 2, 'application/graphql', 2);
    WellKnownMimeType_ApplicationGzip_instance = new WellKnownMimeType('ApplicationGzip', 3, 'application/gzip', 3);
    WellKnownMimeType_ApplicationJavascript_instance = new WellKnownMimeType('ApplicationJavascript', 4, 'application/javascript', 4);
    WellKnownMimeType_ApplicationJson_instance = new WellKnownMimeType('ApplicationJson', 5, 'application/json', 5);
    WellKnownMimeType_ApplicationOctetStream_instance = new WellKnownMimeType('ApplicationOctetStream', 6, 'application/octet-stream', 6);
    WellKnownMimeType_ApplicationPdf_instance = new WellKnownMimeType('ApplicationPdf', 7, 'application/pdf', 7);
    WellKnownMimeType_ApplicationThrift_instance = new WellKnownMimeType('ApplicationThrift', 8, 'application/vnd.apache.thrift.binary', 8);
    WellKnownMimeType_ApplicationProtoBuf_instance = new WellKnownMimeType('ApplicationProtoBuf', 9, 'application/vnd.google.protobuf', 9);
    WellKnownMimeType_ApplicationXml_instance = new WellKnownMimeType('ApplicationXml', 10, 'application/xml', 10);
    WellKnownMimeType_ApplicationZip_instance = new WellKnownMimeType('ApplicationZip', 11, 'application/zip', 11);
    WellKnownMimeType_AudioAac_instance = new WellKnownMimeType('AudioAac', 12, 'audio/aac', 12);
    WellKnownMimeType_AudioMp3_instance = new WellKnownMimeType('AudioMp3', 13, 'audio/mp3', 13);
    WellKnownMimeType_AudioMp4_instance = new WellKnownMimeType('AudioMp4', 14, 'audio/mp4', 14);
    WellKnownMimeType_AudioMpeg3_instance = new WellKnownMimeType('AudioMpeg3', 15, 'audio/mpeg3', 15);
    WellKnownMimeType_AudioMpeg_instance = new WellKnownMimeType('AudioMpeg', 16, 'audio/mpeg', 16);
    WellKnownMimeType_AudioOgg_instance = new WellKnownMimeType('AudioOgg', 17, 'audio/ogg', 17);
    WellKnownMimeType_AudioOpus_instance = new WellKnownMimeType('AudioOpus', 18, 'audio/opus', 18);
    WellKnownMimeType_AudioVorbis_instance = new WellKnownMimeType('AudioVorbis', 19, 'audio/vorbis', 19);
    WellKnownMimeType_ImageBmp_instance = new WellKnownMimeType('ImageBmp', 20, 'image/bmp', 20);
    WellKnownMimeType_ImageGif_instance = new WellKnownMimeType('ImageGif', 21, 'image/gif', 21);
    WellKnownMimeType_ImageHeicSequence_instance = new WellKnownMimeType('ImageHeicSequence', 22, 'image/heic-sequence', 22);
    WellKnownMimeType_ImageHeic_instance = new WellKnownMimeType('ImageHeic', 23, 'image/heic', 23);
    WellKnownMimeType_ImageHeifSequence_instance = new WellKnownMimeType('ImageHeifSequence', 24, 'image/heif-sequence', 24);
    WellKnownMimeType_ImageHeif_instance = new WellKnownMimeType('ImageHeif', 25, 'image/heif', 25);
    WellKnownMimeType_ImageJpeg_instance = new WellKnownMimeType('ImageJpeg', 26, 'image/jpeg', 26);
    WellKnownMimeType_ImagePng_instance = new WellKnownMimeType('ImagePng', 27, 'image/png', 27);
    WellKnownMimeType_ImageTiff_instance = new WellKnownMimeType('ImageTiff', 28, 'image/tiff', 28);
    WellKnownMimeType_MultipartMixed_instance = new WellKnownMimeType('MultipartMixed', 29, 'multipart/mixed', 29);
    WellKnownMimeType_TextCss_instance = new WellKnownMimeType('TextCss', 30, 'text/css', 30);
    WellKnownMimeType_TextCsv_instance = new WellKnownMimeType('TextCsv', 31, 'text/csv', 31);
    WellKnownMimeType_TextHtml_instance = new WellKnownMimeType('TextHtml', 32, 'text/html', 32);
    WellKnownMimeType_TextPlain_instance = new WellKnownMimeType('TextPlain', 33, 'text/plain', 33);
    WellKnownMimeType_TextXml_instance = new WellKnownMimeType('TextXml', 34, 'text/xml', 34);
    WellKnownMimeType_VideoH264_instance = new WellKnownMimeType('VideoH264', 35, 'video/H264', 35);
    WellKnownMimeType_VideoH265_instance = new WellKnownMimeType('VideoH265', 36, 'video/H265', 36);
    WellKnownMimeType_VideoVp8_instance = new WellKnownMimeType('VideoVp8', 37, 'video/VP8', 37);
    WellKnownMimeType_ApplicationHessian_instance = new WellKnownMimeType('ApplicationHessian', 38, 'application/x-hessian', 38);
    WellKnownMimeType_ApplicationJavaObject_instance = new WellKnownMimeType('ApplicationJavaObject', 39, 'application/x-java-object', 39);
    WellKnownMimeType_ApplicationCloudeventsJson_instance = new WellKnownMimeType('ApplicationCloudeventsJson', 40, 'application/cloudevents+json', 40);
    WellKnownMimeType_ApplicationCapnProto_instance = new WellKnownMimeType('ApplicationCapnProto', 41, 'application/x-capnp', 41);
    WellKnownMimeType_ApplicationFlatBuffers_instance = new WellKnownMimeType('ApplicationFlatBuffers', 42, 'application/x-flatbuffers', 42);
    WellKnownMimeType_MessageRSocketMimeType_instance = new WellKnownMimeType('MessageRSocketMimeType', 43, 'message/x.rsocket.mime-type.v0', 122);
    WellKnownMimeType_MessageRSocketAcceptMimeTypes_instance = new WellKnownMimeType('MessageRSocketAcceptMimeTypes', 44, 'message/x.rsocket.accept-mime-types.v0', 123);
    WellKnownMimeType_MessageRSocketAuthentication_instance = new WellKnownMimeType('MessageRSocketAuthentication', 45, 'message/x.rsocket.authentication.v0', 124);
    WellKnownMimeType_MessageRSocketTracingZipkin_instance = new WellKnownMimeType('MessageRSocketTracingZipkin', 46, 'message/x.rsocket.tracing-zipkin.v0', 125);
    WellKnownMimeType_MessageRSocketRouting_instance = new WellKnownMimeType('MessageRSocketRouting', 47, 'message/x.rsocket.routing.v0', 126);
    WellKnownMimeType_MessageRSocketCompositeMetadata_instance = new WellKnownMimeType('MessageRSocketCompositeMetadata', 48, 'message/x.rsocket.composite-metadata.v0', 127);
    Companion_getInstance_6();
  }
  function WellKnownMimeType(name, ordinal, text, identifier) {
    Enum.call(this, name, ordinal);
    this.n5j_1 = text;
    this.o5j_1 = identifier;
  }
  WellKnownMimeType.prototype.p5j = function () {
    return this.n5j_1;
  };
  WellKnownMimeType.prototype.toString = function () {
    return this.n5j_1;
  };
  function WellKnownMimeType_ApplicationAvro_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationAvro_instance;
  }
  function WellKnownMimeType_ApplicationCbor_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationCbor_instance;
  }
  function WellKnownMimeType_ApplicationGraphql_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationGraphql_instance;
  }
  function WellKnownMimeType_ApplicationGzip_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationGzip_instance;
  }
  function WellKnownMimeType_ApplicationJavascript_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationJavascript_instance;
  }
  function WellKnownMimeType_ApplicationJson_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationJson_instance;
  }
  function WellKnownMimeType_ApplicationOctetStream_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationOctetStream_instance;
  }
  function WellKnownMimeType_ApplicationPdf_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationPdf_instance;
  }
  function WellKnownMimeType_ApplicationThrift_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationThrift_instance;
  }
  function WellKnownMimeType_ApplicationProtoBuf_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationProtoBuf_instance;
  }
  function WellKnownMimeType_ApplicationXml_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationXml_instance;
  }
  function WellKnownMimeType_ApplicationZip_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationZip_instance;
  }
  function WellKnownMimeType_AudioAac_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioAac_instance;
  }
  function WellKnownMimeType_AudioMp3_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioMp3_instance;
  }
  function WellKnownMimeType_AudioMp4_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioMp4_instance;
  }
  function WellKnownMimeType_AudioMpeg3_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioMpeg3_instance;
  }
  function WellKnownMimeType_AudioMpeg_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioMpeg_instance;
  }
  function WellKnownMimeType_AudioOgg_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioOgg_instance;
  }
  function WellKnownMimeType_AudioOpus_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioOpus_instance;
  }
  function WellKnownMimeType_AudioVorbis_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_AudioVorbis_instance;
  }
  function WellKnownMimeType_ImageBmp_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageBmp_instance;
  }
  function WellKnownMimeType_ImageGif_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageGif_instance;
  }
  function WellKnownMimeType_ImageHeicSequence_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageHeicSequence_instance;
  }
  function WellKnownMimeType_ImageHeic_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageHeic_instance;
  }
  function WellKnownMimeType_ImageHeifSequence_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageHeifSequence_instance;
  }
  function WellKnownMimeType_ImageHeif_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageHeif_instance;
  }
  function WellKnownMimeType_ImageJpeg_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageJpeg_instance;
  }
  function WellKnownMimeType_ImagePng_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImagePng_instance;
  }
  function WellKnownMimeType_ImageTiff_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ImageTiff_instance;
  }
  function WellKnownMimeType_MultipartMixed_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_MultipartMixed_instance;
  }
  function WellKnownMimeType_TextCss_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_TextCss_instance;
  }
  function WellKnownMimeType_TextCsv_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_TextCsv_instance;
  }
  function WellKnownMimeType_TextHtml_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_TextHtml_instance;
  }
  function WellKnownMimeType_TextPlain_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_TextPlain_instance;
  }
  function WellKnownMimeType_TextXml_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_TextXml_instance;
  }
  function WellKnownMimeType_VideoH264_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_VideoH264_instance;
  }
  function WellKnownMimeType_VideoH265_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_VideoH265_instance;
  }
  function WellKnownMimeType_VideoVp8_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_VideoVp8_instance;
  }
  function WellKnownMimeType_ApplicationHessian_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationHessian_instance;
  }
  function WellKnownMimeType_ApplicationJavaObject_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationJavaObject_instance;
  }
  function WellKnownMimeType_ApplicationCloudeventsJson_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationCloudeventsJson_instance;
  }
  function WellKnownMimeType_ApplicationCapnProto_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationCapnProto_instance;
  }
  function WellKnownMimeType_ApplicationFlatBuffers_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_ApplicationFlatBuffers_instance;
  }
  function WellKnownMimeType_MessageRSocketMimeType_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_MessageRSocketMimeType_instance;
  }
  function WellKnownMimeType_MessageRSocketAcceptMimeTypes_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_MessageRSocketAcceptMimeTypes_instance;
  }
  function WellKnownMimeType_MessageRSocketAuthentication_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_MessageRSocketAuthentication_instance;
  }
  function WellKnownMimeType_MessageRSocketTracingZipkin_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_MessageRSocketTracingZipkin_instance;
  }
  function WellKnownMimeType_MessageRSocketRouting_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_MessageRSocketRouting_instance;
  }
  function WellKnownMimeType_MessageRSocketCompositeMetadata_getInstance() {
    WellKnownMimeType_initEntries();
    return WellKnownMimeType_MessageRSocketCompositeMetadata_instance;
  }
  function CancelFrame(streamId) {
    Frame.call(this);
    this.q5j_1 = streamId;
  }
  CancelFrame.prototype.d5h = function () {
    return this.q5j_1;
  };
  CancelFrame.prototype.d2j = function () {
    return FrameType_Cancel_getInstance();
  };
  CancelFrame.prototype.r5j = function () {
    return 0;
  };
  CancelFrame.prototype.n2g = function () {
    return Unit_getInstance();
  };
  CancelFrame.prototype.s5j = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  CancelFrame.prototype.t5j = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  CancelFrame.prototype.u5j = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  function ErrorFrame(streamId, throwable) {
    Frame.call(this);
    this.g5h_1 = streamId;
    this.h5h_1 = throwable;
  }
  ErrorFrame.prototype.d5h = function () {
    return this.g5h_1;
  };
  ErrorFrame.prototype.d2j = function () {
    return FrameType_Error_getInstance();
  };
  ErrorFrame.prototype.r5j = function () {
    return 0;
  };
  ErrorFrame.prototype.w5j = function () {
    var tmp = this.h5h_1;
    var tmp0_safe_receiver = tmp instanceof RSocketError ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i5b_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      ErrorCode_getInstance();
      tmp_0 = 513;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  ErrorFrame.prototype.n2g = function () {
    return Unit_getInstance();
  };
  ErrorFrame.prototype.s5j = function (_this__u8e3s4) {
    writeInt(_this__u8e3s4, this.w5j());
    var tmp0_elvis_lhs = this.h5h_1.message;
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    writeText$default(_this__u8e3s4, tmp, 0, 0, null, 14, null);
  };
  ErrorFrame.prototype.t5j = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  ErrorFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nError code: ').p6(this.w5j()).q6('[').q6(getKClassFromExpression(this.h5h_1).vc()).q6(']');
    if (!(this.h5h_1.message == null)) {
      _this__u8e3s4.q6(' Message: ').q6(this.h5h_1.message);
    }
  };
  function readError(_this__u8e3s4, streamId) {
    var errorCode = readInt(_this__u8e3s4);
    var message = _this__u8e3s4.n37(0, 0, 3, null);
    return new ErrorFrame(streamId, RSocketError_0(streamId, errorCode, message));
  }
  function ExtensionFrame(streamId, extendedType, payload) {
    Frame.call(this);
    this.x5j_1 = streamId;
    this.y5j_1 = extendedType;
    this.z5j_1 = payload;
  }
  ExtensionFrame.prototype.d5h = function () {
    return this.x5j_1;
  };
  ExtensionFrame.prototype.d2j = function () {
    return FrameType_Extension_getInstance();
  };
  ExtensionFrame.prototype.r5j = function () {
    var tmp;
    if (!(this.z5j_1.a5k() == null)) {
      Flags_getInstance_0();
      tmp = 256;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  ExtensionFrame.prototype.n2g = function () {
    this.z5j_1.n2g();
  };
  ExtensionFrame.prototype.s5j = function (_this__u8e3s4) {
    writeInt(_this__u8e3s4, this.y5j_1);
    writePayload(_this__u8e3s4, this.z5j_1);
  };
  ExtensionFrame.prototype.t5j = function (_this__u8e3s4) {
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(77), !(this.z5j_1.a5k() == null));
  };
  ExtensionFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nExtended type: ').p6(this.y5j_1);
    appendPayload(_this__u8e3s4, this.z5j_1);
  };
  function readExtension(_this__u8e3s4, pool, streamId, flags) {
    var extendedType = readInt(_this__u8e3s4);
    var payload = readPayload(_this__u8e3s4, pool, flags);
    return new ExtensionFrame(streamId, extendedType, payload);
  }
  function Frame() {
  }
  Frame.prototype.u5a = function (pool) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (this.d2j().i5k_1) {
      tmp = true;
    } else {
      var tmp_0 = this.r5j();
      Flags_getInstance_0();
      tmp = !check(tmp_0, 256);
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.frame.Frame.toPacket.<anonymous>' call
      tmp$ret$0 = 'bad value for metadata flag';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.rsocket.kotlin.frame.io.buildPacket' call
      var builder = new BytePacketBuilder(pool);
      try {
        // Inline function 'io.rsocket.kotlin.frame.Frame.toPacket.<anonymous>' call
        writeInt(builder, this.d5h());
        writeShort(builder, toShort(this.d2j().e5k_1 << 10 | this.r5j()));
        this.s5j(builder);
        tmp$ret$1 = builder.cq();
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
    return tmp$ret$1;
  };
  Frame.prototype.v5j = function (length) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.rsocket.kotlin.frame.Frame.dump.<anonymous>' call
    tmp0_apply.q6('\n').p6(this.d2j()).q6(' frame -> Stream Id: ').p6(this.d5h()).q6(' Length: ').p6(length);
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_0 = tmp0_apply.q6('\nFlags: 0b').q6(toBinaryString(this.r5j())).q6(' (');
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.rsocket.kotlin.frame.Frame.dump.<anonymous>.<anonymous>' call
    this.t5j(tmp0_apply_0);
    tmp$ret$0 = tmp0_apply_0;
    tmp$ret$0.q6(')');
    this.u5j(tmp0_apply);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1.toString();
    return tmp$ret$2;
  };
  Frame.prototype.b5k = function (_this__u8e3s4, flag, value) {
    _this__u8e3s4.r5(flag);
    if (value) {
      _this__u8e3s4.p6(1);
    } else {
      _this__u8e3s4.p6(0);
    }
  };
  function readFrame(_this__u8e3s4, pool) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.use' call
    var closed = false;
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.frame.readFrame.<anonymous>' call
      var streamId = readInt(_this__u8e3s4);
      var typeAndFlags = readShort(_this__u8e3s4) & 65535;
      var flags = typeAndFlags & 1023;
      var type = Companion_getInstance_7().l5k(typeAndFlags >> 10);
      var tmp0 = type.y3_1;
      var tmp_0;
      switch (tmp0) {
        case 1:
          tmp_0 = readSetup(_this__u8e3s4, pool, flags);
          break;
        case 13:
          tmp_0 = readResume(_this__u8e3s4, pool);
          break;
        case 14:
          tmp_0 = readResumeOk(_this__u8e3s4);
          break;
        case 4:
          tmp_0 = readMetadataPush(_this__u8e3s4, pool);
          break;
        case 2:
          tmp_0 = readLease(_this__u8e3s4, pool, flags);
          break;
        case 3:
          tmp_0 = readKeepAlive(_this__u8e3s4, pool, flags);
          break;
        case 10:
          tmp_0 = new CancelFrame(streamId);
          break;
        case 12:
          tmp_0 = readError(_this__u8e3s4, streamId);
          break;
        case 9:
          tmp_0 = readRequestN(_this__u8e3s4, streamId);
          break;
        case 15:
          tmp_0 = readExtension(_this__u8e3s4, pool, streamId, flags);
          break;
        case 11:
        case 5:
        case 6:
          tmp_0 = readRequest(_this__u8e3s4, pool, type, streamId, flags, false);
          break;
        case 7:
        case 8:
          tmp_0 = readRequest(_this__u8e3s4, pool, type, streamId, flags, true);
          break;
        case 0:
          throw IllegalStateException_init_$Create$('Reserved');
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp$ret$0 = tmp_0;
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        try {
          closed = true;
          _this__u8e3s4.n2g();
        } catch ($p) {
          if ($p instanceof Error) {
            addSuppressedInternal($p, $p);
          } else {
            throw $p;
          }
        }
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    finally {
      if (!closed) {
        _this__u8e3s4.n2g();
      }
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  }
  function FrameType_init_$Init$(name, ordinal, encodedType, flags, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0)) {
      Flags_getInstance();
      flags = 0;
    }
    FrameType.call($this, name, ordinal, encodedType, flags);
    return $this;
  }
  function FrameType_init_$Create$(name, ordinal, encodedType, flags, $mask0, $marker) {
    return FrameType_init_$Init$(name, ordinal, encodedType, flags, $mask0, $marker, Object.create(FrameType.prototype));
  }
  var FrameType_Reserved_instance;
  var FrameType_Setup_instance;
  var FrameType_Lease_instance;
  var FrameType_KeepAlive_instance;
  var FrameType_MetadataPush_instance;
  var FrameType_RequestFnF_instance;
  var FrameType_RequestResponse_instance;
  var FrameType_RequestStream_instance;
  var FrameType_RequestChannel_instance;
  var FrameType_RequestN_instance;
  var FrameType_Cancel_instance;
  var FrameType_Payload_instance;
  var FrameType_Error_instance;
  var FrameType_Resume_instance;
  var FrameType_ResumeOk_instance;
  var FrameType_Extension_instance;
  function Flags() {
    Flags_instance = this;
    this.m5k_1 = 0;
    this.n5k_1 = 1;
    this.o5k_1 = 2;
    this.p5k_1 = 4;
    this.q5k_1 = 8;
    this.r5k_1 = 16;
  }
  var Flags_instance;
  function Flags_getInstance() {
    FrameType_initEntries();
    if (Flags_instance == null)
      new Flags();
    return Flags_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = values_0();
    var tmp1_map = encodedType$factory();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.length);
    var indexedObject = tmp0_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_mapTo.a(tmp1_map(item));
    }
    tmp$ret$0 = tmp0_mapTo;
    tmp$ret$1 = tmp$ret$0;
    var tmp0_elvis_lhs = maxOrNull(tmp$ret$1);
    var maximumEncodedType = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp2_arrayOfNulls = maximumEncodedType + 1 | 0;
    tmp$ret$2 = fillArrayVal(Array(tmp2_arrayOfNulls), null);
    tmp.k5k_1 = tmp$ret$2;
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = values_0();
    var indexedObject_0 = tmp3_forEach;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject_0.length;
    while (inductionVariable_0 < last_0) {
      var element = indexedObject_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'io.rsocket.kotlin.frame.Companion.<anonymous>' call
      Companion_getInstance_7().k5k_1[element.e5k_1] = element;
    }
  }
  Companion_2.prototype.l5k = function (encodedType) {
    var tmp0_elvis_lhs = this.k5k_1[encodedType];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Frame type ' + encodedType + ' is unknown');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_7() {
    FrameType_initEntries();
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function values_0() {
    return [FrameType_Reserved_getInstance(), FrameType_Setup_getInstance(), FrameType_Lease_getInstance(), FrameType_KeepAlive_getInstance(), FrameType_MetadataPush_getInstance(), FrameType_RequestFnF_getInstance(), FrameType_RequestResponse_getInstance(), FrameType_RequestStream_getInstance(), FrameType_RequestChannel_getInstance(), FrameType_RequestN_getInstance(), FrameType_Cancel_getInstance(), FrameType_Payload_getInstance(), FrameType_Error_getInstance(), FrameType_Resume_getInstance(), FrameType_ResumeOk_getInstance(), FrameType_Extension_getInstance()];
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_getInstance();
    FrameType_entriesInitialized = true;
    FrameType_Reserved_instance = FrameType_init_$Create$('Reserved', 0, 0, 0, 8, null);
    Flags_getInstance();
    Flags_getInstance();
    FrameType_Setup_instance = new FrameType('Setup', 1, 1, 16 | 8);
    Flags_getInstance();
    FrameType_Lease_instance = new FrameType('Lease', 2, 2, 8);
    Flags_getInstance();
    FrameType_KeepAlive_instance = new FrameType('KeepAlive', 3, 3, 16);
    Flags_getInstance();
    FrameType_MetadataPush_instance = new FrameType('MetadataPush', 4, 12, 8);
    Flags_getInstance();
    Flags_getInstance();
    var tmp = 16 | 8;
    Flags_getInstance();
    var tmp_0 = tmp | 4;
    Flags_getInstance();
    FrameType_RequestFnF_instance = new FrameType('RequestFnF', 5, 5, tmp_0 | 2);
    Flags_getInstance();
    Flags_getInstance();
    var tmp_1 = 16 | 8;
    Flags_getInstance();
    var tmp_2 = tmp_1 | 4;
    Flags_getInstance();
    FrameType_RequestResponse_instance = new FrameType('RequestResponse', 6, 4, tmp_2 | 2);
    Flags_getInstance();
    Flags_getInstance();
    var tmp_3 = 8 | 16;
    Flags_getInstance();
    var tmp_4 = tmp_3 | 1;
    Flags_getInstance();
    var tmp_5 = tmp_4 | 4;
    Flags_getInstance();
    FrameType_RequestStream_instance = new FrameType('RequestStream', 7, 6, tmp_5 | 2);
    Flags_getInstance();
    Flags_getInstance();
    var tmp_6 = 8 | 16;
    Flags_getInstance();
    var tmp_7 = tmp_6 | 1;
    Flags_getInstance();
    var tmp_8 = tmp_7 | 4;
    Flags_getInstance();
    FrameType_RequestChannel_instance = new FrameType('RequestChannel', 8, 7, tmp_8 | 2);
    FrameType_RequestN_instance = FrameType_init_$Create$('RequestN', 9, 8, 0, 8, null);
    FrameType_Cancel_instance = FrameType_init_$Create$('Cancel', 10, 9, 0, 8, null);
    Flags_getInstance();
    Flags_getInstance();
    var tmp_9 = 16 | 8;
    Flags_getInstance();
    FrameType_Payload_instance = new FrameType('Payload', 11, 10, tmp_9 | 4);
    Flags_getInstance();
    FrameType_Error_instance = new FrameType('Error', 12, 11, 16);
    FrameType_Resume_instance = FrameType_init_$Create$('Resume', 13, 13, 0, 8, null);
    FrameType_ResumeOk_instance = FrameType_init_$Create$('ResumeOk', 14, 14, 0, 8, null);
    Flags_getInstance();
    Flags_getInstance();
    FrameType_Extension_instance = new FrameType('Extension', 15, 63, 16 | 8);
    Companion_getInstance_7();
  }
  function FrameType(name, ordinal, encodedType, flags) {
    Enum.call(this, name, ordinal);
    this.e5k_1 = encodedType;
    var tmp = this;
    Flags_getInstance();
    tmp.f5k_1 = check(flags, 1);
    var tmp_0 = this;
    Flags_getInstance();
    tmp_0.g5k_1 = check(flags, 2);
    var tmp_1 = this;
    Flags_getInstance();
    tmp_1.h5k_1 = check(flags, 4);
    var tmp_2 = this;
    Flags_getInstance();
    tmp_2.i5k_1 = check(flags, 8);
    var tmp_3 = this;
    Flags_getInstance();
    tmp_3.j5k_1 = check(flags, 16);
  }
  function FrameType_Reserved_getInstance() {
    FrameType_initEntries();
    return FrameType_Reserved_instance;
  }
  function FrameType_Setup_getInstance() {
    FrameType_initEntries();
    return FrameType_Setup_instance;
  }
  function FrameType_Lease_getInstance() {
    FrameType_initEntries();
    return FrameType_Lease_instance;
  }
  function FrameType_KeepAlive_getInstance() {
    FrameType_initEntries();
    return FrameType_KeepAlive_instance;
  }
  function FrameType_MetadataPush_getInstance() {
    FrameType_initEntries();
    return FrameType_MetadataPush_instance;
  }
  function FrameType_RequestFnF_getInstance() {
    FrameType_initEntries();
    return FrameType_RequestFnF_instance;
  }
  function FrameType_RequestResponse_getInstance() {
    FrameType_initEntries();
    return FrameType_RequestResponse_instance;
  }
  function FrameType_RequestStream_getInstance() {
    FrameType_initEntries();
    return FrameType_RequestStream_instance;
  }
  function FrameType_RequestChannel_getInstance() {
    FrameType_initEntries();
    return FrameType_RequestChannel_instance;
  }
  function FrameType_RequestN_getInstance() {
    FrameType_initEntries();
    return FrameType_RequestN_instance;
  }
  function FrameType_Cancel_getInstance() {
    FrameType_initEntries();
    return FrameType_Cancel_instance;
  }
  function FrameType_Payload_getInstance() {
    FrameType_initEntries();
    return FrameType_Payload_instance;
  }
  function FrameType_Error_getInstance() {
    FrameType_initEntries();
    return FrameType_Error_instance;
  }
  function FrameType_Resume_getInstance() {
    FrameType_initEntries();
    return FrameType_Resume_instance;
  }
  function FrameType_ResumeOk_getInstance() {
    FrameType_initEntries();
    return FrameType_ResumeOk_instance;
  }
  function FrameType_Extension_getInstance() {
    FrameType_initEntries();
    return FrameType_Extension_instance;
  }
  function encodedType$factory() {
    return getPropertyCallableRef('encodedType', 1, KProperty1, function (receiver) {
      return receiver.e5k_1;
    }, null);
  }
  function KeepAliveFrame(respond, lastPosition, data) {
    Frame.call(this);
    this.s5k_1 = respond;
    this.t5k_1 = lastPosition;
    this.u5k_1 = data;
  }
  KeepAliveFrame.prototype.d2j = function () {
    return FrameType_KeepAlive_getInstance();
  };
  KeepAliveFrame.prototype.d5h = function () {
    return 0;
  };
  KeepAliveFrame.prototype.r5j = function () {
    return this.s5k_1 ? 128 : 0;
  };
  KeepAliveFrame.prototype.n2g = function () {
    this.u5k_1.n2g();
  };
  KeepAliveFrame.prototype.s5j = function (_this__u8e3s4) {
    writeLong(_this__u8e3s4, coerceAtLeast(this.t5k_1, new Long(0, 0)));
    _this__u8e3s4.i33(this.u5k_1);
  };
  KeepAliveFrame.prototype.t5j = function (_this__u8e3s4) {
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(82), this.s5k_1);
  };
  KeepAliveFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nLast position: ').p6(this.t5k_1);
    appendPacket(_this__u8e3s4, 'Data', this.u5k_1);
  };
  function readKeepAlive(_this__u8e3s4, pool, flags) {
    var respond = check(flags, 128);
    var lastPosition = readLong(_this__u8e3s4);
    var data = readPacket_0(_this__u8e3s4, pool);
    return new KeepAliveFrame(respond, lastPosition, data);
  }
  function LeaseFrame(ttl, numberOfRequests, metadata) {
    Frame.call(this);
    this.v5k_1 = ttl;
    this.w5k_1 = numberOfRequests;
    this.x5k_1 = metadata;
  }
  LeaseFrame.prototype.d2j = function () {
    return FrameType_Lease_getInstance();
  };
  LeaseFrame.prototype.d5h = function () {
    return 0;
  };
  LeaseFrame.prototype.r5j = function () {
    var tmp;
    if (!(this.x5k_1 == null)) {
      Flags_getInstance_0();
      tmp = 256;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  LeaseFrame.prototype.n2g = function () {
    var tmp0_safe_receiver = this.x5k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n2g();
    }
  };
  LeaseFrame.prototype.s5j = function (_this__u8e3s4) {
    writeInt(_this__u8e3s4, this.v5k_1);
    writeInt(_this__u8e3s4, this.w5k_1);
    writeMetadata(_this__u8e3s4, this.x5k_1);
  };
  LeaseFrame.prototype.t5j = function (_this__u8e3s4) {
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(77), !(this.x5k_1 == null));
  };
  LeaseFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nNumber of requests: ').p6(this.w5k_1);
    if (!(this.x5k_1 == null)) {
      appendPacket(_this__u8e3s4, 'Metadata', this.x5k_1);
    }
  };
  function readLease(_this__u8e3s4, pool, flags) {
    var ttl = readInt(_this__u8e3s4);
    var numberOfRequests = readInt(_this__u8e3s4);
    var tmp;
    Flags_getInstance_0();
    if (check(flags, 256)) {
      tmp = readMetadata(_this__u8e3s4, pool);
    } else {
      tmp = null;
    }
    var metadata = tmp;
    return new LeaseFrame(ttl, numberOfRequests, metadata);
  }
  function MetadataPushFrame(metadata) {
    Frame.call(this);
    this.i5h_1 = metadata;
  }
  MetadataPushFrame.prototype.d2j = function () {
    return FrameType_MetadataPush_getInstance();
  };
  MetadataPushFrame.prototype.d5h = function () {
    return 0;
  };
  MetadataPushFrame.prototype.r5j = function () {
    Flags_getInstance_0();
    return 256;
  };
  MetadataPushFrame.prototype.n2g = function () {
    this.i5h_1.n2g();
  };
  MetadataPushFrame.prototype.s5j = function (_this__u8e3s4) {
    _this__u8e3s4.i33(this.i5h_1);
  };
  MetadataPushFrame.prototype.t5j = function (_this__u8e3s4) {
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(77), true);
  };
  MetadataPushFrame.prototype.u5j = function (_this__u8e3s4) {
    appendPacket(_this__u8e3s4, 'Metadata', this.i5h_1);
  };
  function readMetadataPush(_this__u8e3s4, pool) {
    return new MetadataPushFrame(readPacket_0(_this__u8e3s4, pool));
  }
  function RequestFrame(type, streamId, follows, complete, next, initialRequest, payload) {
    Frame.call(this);
    this.y5k_1 = type;
    this.z5k_1 = streamId;
    this.a5l_1 = follows;
    this.b5l_1 = complete;
    this.c5l_1 = next;
    this.d5l_1 = initialRequest;
    this.e5l_1 = payload;
  }
  RequestFrame.prototype.d2j = function () {
    return this.y5k_1;
  };
  RequestFrame.prototype.d5h = function () {
    return this.z5k_1;
  };
  RequestFrame.prototype.r5j = function () {
    var flags = 0;
    if (!(this.e5l_1.a5k() == null)) {
      var tmp = flags;
      Flags_getInstance_0();
      flags = tmp | 256;
    }
    if (this.a5l_1) {
      var tmp_0 = flags;
      Flags_getInstance_0();
      flags = tmp_0 | 128;
    }
    if (this.b5l_1) {
      var tmp_1 = flags;
      Flags_getInstance_0();
      flags = tmp_1 | 64;
    }
    if (this.c5l_1) {
      var tmp_2 = flags;
      Flags_getInstance_0();
      flags = tmp_2 | 32;
    }
    return flags;
  };
  RequestFrame.prototype.n2g = function () {
    this.e5l_1.n2g();
  };
  RequestFrame.prototype.s5j = function (_this__u8e3s4) {
    if (this.d5l_1 > 0) {
      writeInt(_this__u8e3s4, this.d5l_1);
    }
    writePayload(_this__u8e3s4, this.e5l_1);
  };
  RequestFrame.prototype.t5j = function (_this__u8e3s4) {
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(77), !(this.e5l_1.a5k() == null));
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(70), this.a5l_1);
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(67), this.b5l_1);
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(78), this.c5l_1);
  };
  RequestFrame.prototype.u5j = function (_this__u8e3s4) {
    if (this.d5l_1 > 0) {
      _this__u8e3s4.q6('\nInitial request: ').p6(this.d5l_1);
    }
    appendPayload(_this__u8e3s4, this.e5l_1);
  };
  function readRequest(_this__u8e3s4, pool, type, streamId, flags, withInitial) {
    Flags_getInstance_0();
    var fragmentFollows = check(flags, 128);
    Flags_getInstance_0();
    var complete = check(flags, 64);
    Flags_getInstance_0();
    var next = check(flags, 32);
    var initialRequest = withInitial ? readInt(_this__u8e3s4) : 0;
    var payload = readPayload(_this__u8e3s4, pool, flags);
    return new RequestFrame(type, streamId, fragmentFollows, complete, next, initialRequest, payload);
  }
  function RequestNFrame(streamId, requestN) {
    Frame.call(this);
    this.f5l_1 = streamId;
    this.g5l_1 = requestN;
  }
  RequestNFrame.prototype.d5h = function () {
    return this.f5l_1;
  };
  RequestNFrame.prototype.d2j = function () {
    return FrameType_RequestN_getInstance();
  };
  RequestNFrame.prototype.r5j = function () {
    return 0;
  };
  RequestNFrame.prototype.n2g = function () {
    return Unit_getInstance();
  };
  RequestNFrame.prototype.s5j = function (_this__u8e3s4) {
    writeInt(_this__u8e3s4, this.g5l_1);
  };
  RequestNFrame.prototype.t5j = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  RequestNFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nRequestN: ').p6(this.g5l_1);
  };
  function readRequestN(_this__u8e3s4, streamId) {
    var requestN = readInt(_this__u8e3s4);
    return new RequestNFrame(streamId, requestN);
  }
  function ResumeFrame(version, resumeToken, lastReceivedServerPosition, firstAvailableClientPosition) {
    Frame.call(this);
    this.h5l_1 = version;
    this.i5l_1 = resumeToken;
    this.j5l_1 = lastReceivedServerPosition;
    this.k5l_1 = firstAvailableClientPosition;
  }
  ResumeFrame.prototype.d2j = function () {
    return FrameType_Resume_getInstance();
  };
  ResumeFrame.prototype.d5h = function () {
    return 0;
  };
  ResumeFrame.prototype.r5j = function () {
    return 0;
  };
  ResumeFrame.prototype.n2g = function () {
    return Unit_getInstance();
  };
  ResumeFrame.prototype.s5j = function (_this__u8e3s4) {
    writeVersion(_this__u8e3s4, this.h5l_1);
    writeResumeToken(_this__u8e3s4, this.i5l_1);
    writeLong(_this__u8e3s4, this.j5l_1);
    writeLong(_this__u8e3s4, this.k5l_1);
  };
  ResumeFrame.prototype.t5j = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  ResumeFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nVersion: ').q6(this.h5l_1.toString()).q6('\n');
    _this__u8e3s4.q6('Last received server position: ').p6(this.j5l_1).q6('\n');
    _this__u8e3s4.q6('First available client position: ').p6(this.k5l_1);
    appendPacket(_this__u8e3s4, 'Resume token', this.i5l_1);
  };
  function readResume(_this__u8e3s4, pool) {
    var version = readVersion(_this__u8e3s4);
    var resumeToken = readResumeToken(_this__u8e3s4, pool);
    var lastReceivedServerPosition = readLong(_this__u8e3s4);
    var firstAvailableClientPosition = readLong(_this__u8e3s4);
    return new ResumeFrame(version, resumeToken, lastReceivedServerPosition, firstAvailableClientPosition);
  }
  function ResumeOkFrame(lastReceivedClientPosition) {
    Frame.call(this);
    this.l5l_1 = lastReceivedClientPosition;
  }
  ResumeOkFrame.prototype.d2j = function () {
    return FrameType_ResumeOk_getInstance();
  };
  ResumeOkFrame.prototype.d5h = function () {
    return 0;
  };
  ResumeOkFrame.prototype.r5j = function () {
    return 0;
  };
  ResumeOkFrame.prototype.n2g = function () {
    return Unit_getInstance();
  };
  ResumeOkFrame.prototype.s5j = function (_this__u8e3s4) {
    writeLong(_this__u8e3s4, this.l5l_1);
  };
  ResumeOkFrame.prototype.t5j = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  ResumeOkFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nLast received client position: ').p6(this.l5l_1);
  };
  function readResumeOk(_this__u8e3s4) {
    return new ResumeOkFrame(readLong(_this__u8e3s4));
  }
  function SetupFrame(version, honorLease, keepAlive, resumeToken, payloadMimeType, payload) {
    Frame.call(this);
    this.c5i_1 = version;
    this.d5i_1 = honorLease;
    this.e5i_1 = keepAlive;
    this.f5i_1 = resumeToken;
    this.g5i_1 = payloadMimeType;
    this.h5i_1 = payload;
  }
  SetupFrame.prototype.d2j = function () {
    return FrameType_Setup_getInstance();
  };
  SetupFrame.prototype.d5h = function () {
    return 0;
  };
  SetupFrame.prototype.r5j = function () {
    var flags = 0;
    if (this.d5i_1)
      flags = flags | 64;
    if (!(this.f5i_1 == null))
      flags = flags | 128;
    if (!(this.h5i_1.a5k() == null)) {
      var tmp = flags;
      Flags_getInstance_0();
      flags = tmp | 256;
    }
    return flags;
  };
  SetupFrame.prototype.n2g = function () {
    var tmp0_safe_receiver = this.f5i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n2g();
    }
    this.h5i_1.n2g();
  };
  SetupFrame.prototype.s5j = function (_this__u8e3s4) {
    writeVersion(_this__u8e3s4, this.c5i_1);
    writeInt(_this__u8e3s4, this.e5i_1.m5l_1);
    writeInt(_this__u8e3s4, this.e5i_1.n5l_1);
    writeResumeToken(_this__u8e3s4, this.f5i_1);
    writeStringMimeType(_this__u8e3s4, this.g5i_1.p5l_1);
    writeStringMimeType(_this__u8e3s4, this.g5i_1.o5l_1);
    writePayload(_this__u8e3s4, this.h5i_1);
  };
  SetupFrame.prototype.t5j = function (_this__u8e3s4) {
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(77), !(this.h5i_1.a5k() == null));
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(82), !(this.f5i_1 == null));
    this.b5k(_this__u8e3s4, _Char___init__impl__6a9atx(76), this.d5i_1);
  };
  SetupFrame.prototype.u5j = function (_this__u8e3s4) {
    _this__u8e3s4.q6('\nVersion: ').q6(this.c5i_1.toString()).q6(' Honor lease: ').je(this.d5i_1).q6('\n');
    _this__u8e3s4.q6('Keep alive: interval=').p6(this.e5i_1.m5l_1).q6(' ms,');
    _this__u8e3s4.q6('max lifetime=').p6(this.e5i_1.n5l_1).q6(' ms\n');
    _this__u8e3s4.q6('Data mime type: ').q6(this.g5i_1.o5l_1).q6('\n');
    _this__u8e3s4.q6('Metadata mime type: ').q6(this.g5i_1.p5l_1);
    appendPayload(_this__u8e3s4, this.h5i_1);
  };
  function writeStringMimeType(_this__u8e3s4, mimeType) {
    var bytes = encodeToByteArray(mimeType);
    _this__u8e3s4.k35(toByte(bytes.length));
    writeFully$default(_this__u8e3s4, bytes, 0, 0, 6, null);
  }
  function readSetup(_this__u8e3s4, pool, flags) {
    var version = readVersion(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.frame.readSetup.<anonymous>' call
    var interval = readInt(_this__u8e3s4);
    var maxLifetime = readInt(_this__u8e3s4);
    tmp$ret$0 = new KeepAlive(interval, maxLifetime);
    tmp$ret$1 = tmp$ret$0;
    var keepAlive = tmp$ret$1;
    var resumeToken = check(flags, 128) ? readResumeToken(_this__u8e3s4, pool) : null;
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.rsocket.kotlin.frame.readSetup.<anonymous>' call
    var metadata = readStringMimeType(_this__u8e3s4);
    var data = readStringMimeType(_this__u8e3s4);
    tmp$ret$2 = new PayloadMimeType(data, metadata);
    tmp$ret$3 = tmp$ret$2;
    var payloadMimeType = tmp$ret$3;
    var payload = readPayload(_this__u8e3s4, pool, flags);
    return new SetupFrame(version, check(flags, 64), keepAlive, resumeToken, payloadMimeType, payload);
  }
  function readStringMimeType(_this__u8e3s4) {
    var length = _this__u8e3s4.j35();
    return readTextExactBytes$default(_this__u8e3s4, length, null, 2, null);
  }
  function get_digits() {
    init_properties_Dump_kt_dmfk2i();
    return digits;
  }
  var digits;
  function toBinaryString(_this__u8e3s4) {
    init_properties_Dump_kt_dmfk2i();
    var string = toString_0(_this__u8e3s4, 2);
    return repeat('0', 9 - string.length | 0) + string;
  }
  function appendPayload(_this__u8e3s4, payload) {
    init_properties_Dump_kt_dmfk2i();
    var metadata = payload.a5k();
    if (!(metadata == null)) {
      appendPacket(_this__u8e3s4, 'Metadata', metadata);
    }
    appendPacket(_this__u8e3s4, 'Data', payload.q5l());
  }
  function appendPacket(_this__u8e3s4, tag, packet) {
    init_properties_Dump_kt_dmfk2i();
    _this__u8e3s4.q6('\n').q6(tag);
    if (packet.y30().x(new Long(0, 0)) > 0) {
      _this__u8e3s4.q6('(length=').p6(packet.y30()).q6('):');
      appendPacket_0(_this__u8e3s4, packet);
    } else {
      _this__u8e3s4.q6(': Empty');
    }
  }
  function appendPacket_0(_this__u8e3s4, packet) {
    init_properties_Dump_kt_dmfk2i();
    var rowIndex = {_v: 0};
    var byteIndex = {_v: 0};
    var bytes = new Int8Array(32);
    _this__u8e3s4.q6('\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n');
    _this__u8e3s4.q6('+--------+-------------------------------------------------+----------------+');
    appendPacket$appendRowIndex(rowIndex, _this__u8e3s4);
    var copy = packet.c37();
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.isNotEmpty' call
      tmp$ret$0 = !copy.k32();
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var byte = copy.j35();
      var b = byte & 255;
      var tmp0 = byteIndex._v;
      byteIndex._v = tmp0 + 1 | 0;
      bytes[tmp0] = byte;
      _this__u8e3s4.q6(' ');
      _this__u8e3s4.r5(get_digits()[b >> 4]);
      _this__u8e3s4.r5(get_digits()[b & 15]);
      if (byteIndex._v === 16) {
        appendPacket$appendBytesAsString(bytes, byteIndex, _this__u8e3s4);
        byteIndex._v = 0;
        fill$default(bytes, 0, 0, 0, 6, null);
        var tmp1 = rowIndex._v;
        rowIndex._v = tmp1 + 1 | 0;
        appendPacket$appendRowIndex(rowIndex, _this__u8e3s4);
      }
    }
    if (!(byteIndex._v === 0)) {
      appendPacket$appendBytesAsString(bytes, byteIndex, _this__u8e3s4);
    }
    _this__u8e3s4.q6('\n');
    _this__u8e3s4.q6('+--------+-------------------------------------------------+----------------+');
  }
  function appendPacket$appendBytesAsString(bytes, byteIndex, $this_appendPacket) {
    var string = decodeToString(bytes);
    if (byteIndex._v === 16) {
      $this_appendPacket.q6(' |').q6(string);
    } else {
      var leftSpace = repeat('   ', 16 - byteIndex._v | 0);
      var space = repeat(' ', 16 - byteIndex._v | 0);
      $this_appendPacket.q6(leftSpace).q6(' |').q6(string).q6(space);
    }
    $this_appendPacket.q6('|');
  }
  function appendPacket$appendRowIndex(rowIndex, $this_appendPacket) {
    var string = toString_0(rowIndex._v, 16);
    $this_appendPacket.q6('\n|').q6(repeat('0', 7 - string.length | 0)).q6(string).q6('0|');
  }
  var properties_initialized_Dump_kt_ysshme;
  function init_properties_Dump_kt_dmfk2i() {
    if (properties_initialized_Dump_kt_ysshme) {
    } else {
      properties_initialized_Dump_kt_ysshme = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function check(_this__u8e3s4, flag) {
    return (_this__u8e3s4 & flag) === flag;
  }
  function Flags_0() {
    Flags_instance_0 = this;
    this.r5l_1 = 512;
    this.s5l_1 = 256;
    this.t5l_1 = 128;
    this.u5l_1 = 64;
    this.v5l_1 = 32;
  }
  var Flags_instance_0;
  function Flags_getInstance_0() {
    if (Flags_instance_0 == null)
      new Flags_0();
    return Flags_instance_0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.a5i_1 = new Version(1, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_8() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Version(major, minor) {
    Companion_getInstance_8();
    this.w5l_1 = major;
    this.x5l_1 = minor;
  }
  Version.prototype.y5l = function () {
    return this.w5l_1 << 16 | this.x5l_1 & 65535;
  };
  Version.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Version) {
      tmp = this.y5l() === other.y5l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  Version.prototype.hashCode = function () {
    return this.y5l();
  };
  Version.prototype.toString = function () {
    return '' + this.w5l_1 + '.' + this.x5l_1;
  };
  function writeVersion(_this__u8e3s4, version) {
    writeInt(_this__u8e3s4, version.y5l());
  }
  function readVersion(_this__u8e3s4) {
    var value = readInt(_this__u8e3s4);
    return new Version(value >> 16 & 65535, value & 65535);
  }
  function writeLength(_this__u8e3s4, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (length & -16777216) === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.frame.io.writeLength.<anonymous>' call
      tmp$ret$0 = 'Length is larger than 24 bits';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    _this__u8e3s4.k35(toByte(length >> 16));
    _this__u8e3s4.k35(toByte(length >> 8));
    _this__u8e3s4.k35(toByte(length));
  }
  function readLength(_this__u8e3s4) {
    var b = (_this__u8e3s4.j35() & 255) << 16;
    var b1 = (_this__u8e3s4.j35() & 255) << 8;
    var b2 = _this__u8e3s4.j35() & 255;
    return b | b1 | b2;
  }
  function requireAscii(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'io.rsocket.kotlin.frame.io.requireAscii.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(element);
        tmp$ret$1 = tmp$ret$0 <= 127;
        if (!tmp$ret$1) {
          tmp$ret$2 = false;
          break $l$block;
        }
      }
      tmp$ret$2 = true;
    }
    var tmp0_require = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$3;
      // Inline function 'io.rsocket.kotlin.frame.io.requireAscii.<anonymous>' call
      tmp$ret$3 = 'String should be an ASCII encodded string';
      var message = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function writePayload(_this__u8e3s4, payload) {
    writeMetadata(_this__u8e3s4, payload.a5k());
    _this__u8e3s4.i33(payload.q5l());
  }
  function writeMetadata(_this__u8e3s4, metadata) {
    var tmp0_safe_receiver = metadata;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      writeLength(_this__u8e3s4, tmp0_safe_receiver.y30().e4());
      _this__u8e3s4.i33(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function readMetadata(_this__u8e3s4, pool) {
    var length = readLength(_this__u8e3s4);
    return readPacket(_this__u8e3s4, pool, length);
  }
  function readPayload(_this__u8e3s4, pool, flags) {
    var tmp;
    Flags_getInstance_0();
    if (check(flags, 256)) {
      tmp = readMetadata(_this__u8e3s4, pool);
    } else {
      tmp = null;
    }
    var metadata = tmp;
    var data = readPacket_0(_this__u8e3s4, pool);
    return Payload_0(data, metadata);
  }
  function writeResumeToken(_this__u8e3s4, resumeToken) {
    var tmp0_safe_receiver = resumeToken;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var length = tmp0_safe_receiver.y30();
      writeShort(_this__u8e3s4, length.vf());
      _this__u8e3s4.i33(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function readPacket(_this__u8e3s4, pool, length) {
    if (length === 0)
      return Companion_getInstance_0().o36_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.rsocket.kotlin.frame.io.buildPacket' call
      var builder = new BytePacketBuilder(pool);
      try {
        // Inline function 'io.rsocket.kotlin.frame.io.readPacket.<anonymous>' call
        builder.r36(_this__u8e3s4, length);
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
    return tmp$ret$0;
  }
  function readPacket_0(_this__u8e3s4, pool) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.isEmpty' call
    tmp$ret$0 = _this__u8e3s4.k32();
    if (tmp$ret$0)
      return Companion_getInstance_0().o36_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.rsocket.kotlin.frame.io.buildPacket' call
      var builder = new BytePacketBuilder(pool);
      try {
        // Inline function 'io.rsocket.kotlin.frame.io.readPacket.<anonymous>' call
        builder.i33(_this__u8e3s4);
        tmp$ret$1 = builder.cq();
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
    return tmp$ret$1;
  }
  function readResumeToken(_this__u8e3s4, pool) {
    var length = readShort(_this__u8e3s4) & 65535;
    return readPacket(_this__u8e3s4, pool, length);
  }
  function get_onUndeliveredCloseable() {
    init_properties_CloseOperations_kt_sgmp4g();
    return onUndeliveredCloseable;
  }
  var onUndeliveredCloseable;
  function SafeChannel(capacity) {
    init_properties_CloseOperations_kt_sgmp4g();
    return Channel$default(capacity, null, get_onUndeliveredCloseable(), 2, null);
  }
  function fullClose(_this__u8e3s4, cause) {
    init_properties_CloseOperations_kt_sgmp4g();
    _this__u8e3s4.a1r(cause);
    _this__u8e3s4.u1b(null, 1, null);
  }
  function safeTrySend(_this__u8e3s4, element) {
    init_properties_CloseOperations_kt_sgmp4g();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.onFailure' call
    var tmp0_onFailure = _this__u8e3s4.m1r(element);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(tmp0_onFailure);
    if (tmp instanceof Failed) {
      // Inline function 'io.rsocket.kotlin.internal.safeTrySend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = ChannelResult__exceptionOrNull_impl_16ei30(tmp0_onFailure);
      element.n2g();
    }
    tmp$ret$0 = tmp0_onFailure;
  }
  function Closeable$close$ref() {
    var l = function (p0) {
      p0.n2g();
      return Unit_getInstance();
    };
    l.callableName = 'close';
    return l;
  }
  var properties_initialized_CloseOperations_kt_k3g6q4;
  function init_properties_CloseOperations_kt_sgmp4g() {
    if (properties_initialized_CloseOperations_kt_k3g6q4) {
    } else {
      properties_initialized_CloseOperations_kt_k3g6q4 = true;
      onUndeliveredCloseable = Closeable$close$ref();
    }
  }
  function sendFragmented($this, type, streamId, payload, complete, next, initialRequest, $cont) {
    var tmp = new $sendFragmentedCOROUTINE$5($this, type, streamId, payload, complete, next, initialRequest, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function isFragmentable(_this__u8e3s4, $this, hasInitialRequest) {
    var tmp0_subject = $this.a5n_1;
    var tmp;
    if (tmp0_subject === 0) {
      tmp = false;
    } else {
      var meta = _this__u8e3s4.a5k();
      var tmp_0;
      if (meta == null) {
        var tmp_1 = _this__u8e3s4.q5l().y30();
        var tmp_2 = $this.a5n_1 - 9 | 0;
        var tmp_3;
        if (hasInitialRequest) {
          IntCompanionObject_getInstance();
          tmp_3 = 4;
        } else {
          tmp_3 = 0;
        }
        tmp_0 = tmp_1.x(toLong(tmp_2 - tmp_3 | 0)) > 0;
      } else {
        var tmp_4 = _this__u8e3s4.q5l().y30().v5(meta.y30());
        var tmp_5 = $this.a5n_1 - 12 | 0;
        var tmp_6;
        if (hasInitialRequest) {
          IntCompanionObject_getInstance();
          tmp_6 = 4;
        } else {
          tmp_6 = 0;
        }
        tmp_0 = tmp_4.x(toLong(tmp_5 - tmp_6 | 0)) > 0;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function FrameSender$sendCancel$slambda(this$0, $id, resultContinuation) {
    this.j5n_1 = this$0;
    this.k5n_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  FrameSender$sendCancel$slambda.prototype.a22 = function ($this$withContext, $cont) {
    var tmp = this.b22($this$withContext, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  FrameSender$sendCancel$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FrameSender$sendCancel$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.j5n_1.y5m_1.m5n(new CancelFrame(this.k5n_1), this);
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
  FrameSender$sendCancel$slambda.prototype.b22 = function ($this$withContext, completion) {
    var i = new FrameSender$sendCancel$slambda(this.j5n_1, this.k5n_1, completion);
    i.l5n_1 = $this$withContext;
    return i;
  };
  function FrameSender$sendCancel$slambda_0(this$0, $id, resultContinuation) {
    var i = new FrameSender$sendCancel$slambda(this$0, $id, resultContinuation);
    var l = function ($this$withContext, $cont) {
      return i.a22($this$withContext, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FrameSender$sendError$slambda(this$0, $id, $throwable, resultContinuation) {
    this.v5n_1 = this$0;
    this.w5n_1 = $id;
    this.x5n_1 = $throwable;
    CoroutineImpl.call(this, resultContinuation);
  }
  FrameSender$sendError$slambda.prototype.a22 = function ($this$withContext, $cont) {
    var tmp = this.b22($this$withContext, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  FrameSender$sendError$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FrameSender$sendError$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.v5n_1.y5m_1.m5n(new ErrorFrame(this.w5n_1, this.x5n_1), this);
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
  FrameSender$sendError$slambda.prototype.b22 = function ($this$withContext, completion) {
    var i = new FrameSender$sendError$slambda(this.v5n_1, this.w5n_1, this.x5n_1, completion);
    i.y5n_1 = $this$withContext;
    return i;
  };
  function FrameSender$sendError$slambda_0(this$0, $id, $throwable, resultContinuation) {
    var i = new FrameSender$sendError$slambda(this$0, $id, $throwable, resultContinuation);
    var l = function ($this$withContext, $cont) {
      return i.a22($this$withContext, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $sendFragmentedCOROUTINE$5(_this__u8e3s4, type, streamId, payload, complete, next, initialRequest, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h5m_1 = _this__u8e3s4;
    this.i5m_1 = type;
    this.j5m_1 = streamId;
    this.k5m_1 = payload;
    this.l5m_1 = complete;
    this.m5m_1 = next;
    this.n5m_1 = initialRequest;
  }
  $sendFragmentedCOROUTINE$5.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            if (!isFragmentable(this.k5m_1, this.h5m_1, this.i5m_1.f5k_1)) {
              this.dg_1 = 5;
              suspendResult = this.h5m_1.y5m_1.m5n(new RequestFrame(this.i5m_1, this.j5m_1, false, this.l5m_1, this.m5m_1, this.n5m_1, this.k5m_1), this);
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
            this.o5m_1 = this.k5m_1.q5l();
            this.p5m_1 = this.k5m_1.a5k();
            var tmp_0 = this;
            var tmp_1 = this.h5m_1.a5n_1 - 9 | 0;
            var tmp_2;
            if (this.i5m_1.f5k_1) {
              IntCompanionObject_getInstance();
              tmp_2 = 4;
            } else {
              tmp_2 = 0;
            }

            tmp_0.q5m_1 = tmp_1 - tmp_2 | 0;
            this.r5m_1 = true;
            this.s5m_1 = this.q5m_1;
            if (!(this.p5m_1 == null))
              this.s5m_1 = this.s5m_1 - 3 | 0;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            var tmp_3 = this;
            var tmp_4;
            var tmp_5;
            if (!(this.p5m_1 == null)) {
              tmp_5 = !this.p5m_1.k32();
            } else {
              tmp_5 = false;
            }

            if (tmp_5) {
              if (!this.r5m_1)
                this.s5m_1 = this.s5m_1 - 3 | 0;
              var tmp0_min = this.p5m_1.y30().e4();
              var tmp1_min = this.s5m_1;
              var length = Math.min(tmp0_min, tmp1_min);
              this.s5m_1 = this.s5m_1 - length | 0;
              tmp_4 = readPacket(this.p5m_1, this.h5m_1.z5m_1, length);
            } else {
              tmp_4 = null;
            }

            tmp_3.t5m_1 = tmp_4;
            var tmp_6 = this;
            var tmp_7;
            var tmp_8;
            if (this.s5m_1 > 0) {
              tmp_8 = !this.o5m_1.k32();
            } else {
              tmp_8 = false;
            }

            if (tmp_8) {
              var tmp2_min = this.o5m_1.y30().e4();
              var tmp3_min = this.s5m_1;
              var length_0 = Math.min(tmp2_min, tmp3_min);
              this.s5m_1 = this.s5m_1 - length_0 | 0;
              tmp_7 = readPacket(this.o5m_1, this.h5m_1.z5m_1, length_0);
            } else {
              tmp_7 = Companion_getInstance_0().o36_1;
            }

            tmp_6.u5m_1 = tmp_7;
            this.v5m_1 = (this.r5m_1 ? this.i5m_1.g5k_1 : false) ? this.i5m_1 : FrameType_Payload_getInstance();
            this.w5m_1 = Payload_0(this.u5m_1, this.t5m_1);
            var tmp_9 = this;
            var tmp_10;
            var tmp_11;
            if (!(this.p5m_1 == null)) {
              tmp_11 = !this.p5m_1.k32();
            } else {
              tmp_11 = false;
            }

            if (tmp_11) {
              tmp_10 = true;
            } else {
              tmp_10 = !this.o5m_1.k32();
            }

            tmp_9.x5m_1 = tmp_10;
            this.dg_1 = 3;
            suspendResult = this.h5m_1.y5m_1.m5n(new RequestFrame(this.v5m_1, this.j5m_1, this.x5m_1, !this.x5m_1 ? this.l5m_1 : false, !this.v5m_1.g5k_1, this.n5m_1, this.w5m_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r5m_1 = false;
            this.s5m_1 = this.q5m_1;
            if (this.x5m_1) {
              this.dg_1 = 2;
              continue $sm;
            }

            this.dg_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  function FrameSender(prioritizer, pool, maxFragmentSize) {
    this.y5m_1 = prioritizer;
    this.z5m_1 = pool;
    this.a5n_1 = maxFragmentSize;
  }
  FrameSender.prototype.z5n = function (respond, lastPosition, data, $cont) {
    return this.y5m_1.m5n(new KeepAliveFrame(respond, lastPosition, data), $cont);
  };
  FrameSender.prototype.a5o = function (metadata, $cont) {
    return this.y5m_1.m5n(new MetadataPushFrame(metadata), $cont);
  };
  FrameSender.prototype.b5o = function (id, $cont) {
    var tmp = NonCancellable_getInstance();
    return withContext(tmp, FrameSender$sendCancel$slambda_0(this, id, null), $cont);
  };
  FrameSender.prototype.c5o = function (id, throwable, $cont) {
    var tmp = NonCancellable_getInstance();
    return withContext(tmp, FrameSender$sendError$slambda_0(this, id, throwable, null), $cont);
  };
  FrameSender.prototype.d5o = function (id, n, $cont) {
    return this.y5m_1.m5n(new RequestNFrame(id, n), $cont);
  };
  FrameSender.prototype.e5o = function (type, streamId, payload, initialRequest, $cont) {
    return sendFragmented(this, type, streamId, payload, false, false, initialRequest, $cont);
  };
  FrameSender.prototype.f5o = function (type, streamId, payload, initialRequest, $cont, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      initialRequest = 0;
    return this.e5o(type, streamId, payload, initialRequest, $cont);
  };
  FrameSender.prototype.g5o = function (streamId, payload, $cont) {
    return sendFragmented(this, FrameType_Payload_getInstance(), streamId, payload, false, true, 0, $cont);
  };
  FrameSender.prototype.h5o = function (streamId, payload, $cont) {
    return sendFragmented(this, FrameType_Payload_getInstance(), streamId, payload, true, true, 0, $cont);
  };
  FrameSender.prototype.i5o = function (streamId, $cont) {
    return sendFragmented(this, FrameType_Payload_getInstance(), streamId, Companion_getInstance_10().p5i_1, true, false, 0, $cont);
  };
  function IntMap_init_$Init$(initialCapacity, loadFactor, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      initialCapacity = 8;
    if (!(($mask0 & 2) === 0))
      loadFactor = 0.5;
    IntMap.call($this, initialCapacity, loadFactor);
    return $this;
  }
  function IntMap_init_$Create$(initialCapacity, loadFactor, $mask0, $marker) {
    return IntMap_init_$Init$(initialCapacity, loadFactor, $mask0, $marker, Object.create(IntMap.prototype));
  }
  function init($this) {
    $this.m5o_1 = $this.l5o_1 - 1 | 0;
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = $this.m5o_1;
    var tmp1_min = numberToInt($this.l5o_1 * $this.j5o_1);
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    tmp.n5o_1 = tmp$ret$0;
    $this.o5o_1 = new Int32Array($this.l5o_1);
    var tmp_0 = $this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp2_arrayOfNulls = $this.l5o_1;
    tmp$ret$1 = fillArrayVal(Array(tmp2_arrayOfNulls), null);
    var tmp_1 = tmp$ret$1;
    tmp_0.p5o_1 = isArray(tmp_1) ? tmp_1 : THROW_CCE();
  }
  function set($this, index, key, value) {
    $this.o5o_1[index] = key;
    $this.p5o_1[index] = value;
  }
  function clear($this, index) {
    return set($this, index, 0, null);
  }
  function hashIndex($this, key) {
    return key & $this.m5o_1;
  }
  function probeNext($this, index) {
    return (index + 1 | 0) & $this.m5o_1;
  }
  function indexOf($this, key) {
    var startIndex = hashIndex($this, key);
    var index = startIndex;
    while (true) {
      if ($this.p5o_1[index] == null)
        return -1;
      if ($this.o5o_1[index] === key)
        return index;
      index = probeNext($this, index);
      if (index === startIndex)
        return -1;
    }
  }
  function removeAt($this, index) {
    var tmp0_this = $this;
    tmp0_this.k5o_1 = tmp0_this.k5o_1 - 1 | 0;
    clear($this, index);
    var nextFree = index;
    var i = probeNext($this, index);
    var value = $this.p5o_1[i];
    while (!(value == null)) {
      var key = $this.o5o_1[i];
      var bucket = hashIndex($this, key);
      if ((i < bucket ? bucket <= nextFree ? true : nextFree <= i : false) ? true : bucket <= nextFree ? nextFree <= i : false) {
        set($this, nextFree, key, value);
        clear($this, i);
        nextFree = i;
      }
      i = probeNext($this, i);
      value = $this.p5o_1[i];
    }
    return !(nextFree === index);
  }
  function grow($this) {
    var tmp0_this = $this;
    tmp0_this.k5o_1 = tmp0_this.k5o_1 + 1 | 0;
    if ($this.k5o_1 <= $this.n5o_1)
      return Unit_getInstance();
    // Inline function 'kotlin.check' call
    var tmp0_check = !($this.l5o_1 === IntCompanionObject_getInstance().MAX_VALUE);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.internal.IntMap.grow.<anonymous>' call
      tmp$ret$0 = 'Max capacity reached at size=' + $this.k5o_1;
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    rehash($this);
  }
  function rehash($this) {
    var oldCapacity = $this.l5o_1;
    var oldValues = $this.p5o_1;
    var oldKeys = $this.o5o_1;
    $this.l5o_1 = $this.l5o_1 << 1;
    init($this);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < oldCapacity)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          // Inline function 'io.rsocket.kotlin.internal.IntMap.rehash.<anonymous>' call
          var tmp0_elvis_lhs = oldValues[index];
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var oldValue = tmp;
          var oldKey = oldKeys[index];
          var index_0 = hashIndex($this, oldKey);
          $l$loop: while (true) {
            if ($this.p5o_1[index_0] == null) {
              set($this, index_0, oldKey, oldValue);
              break $l$loop;
            }
            index_0 = probeNext($this, index_0);
          }
        }
      }
       while (inductionVariable < oldCapacity);
  }
  function IntMap(initialCapacity, loadFactor) {
    this.j5o_1 = loadFactor;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.j5o_1 > 0.0 ? this.j5o_1 <= 1.0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.internal.IntMap.<anonymous>' call
      tmp$ret$0 = 'loadFactor must be > 0 and <= 1';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.k5o_1 = 0;
    this.l5o_1 = safeFindNextPositivePowerOfTwo(initialCapacity);
    this.m5o_1 = this.l5o_1 - 1 | 0;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.m5o_1;
    var tmp1_min = numberToInt(this.l5o_1 * this.j5o_1);
    tmp$ret$1 = Math.min(tmp0_min, tmp1_min);
    tmp.n5o_1 = tmp$ret$1;
    this.o5o_1 = new Int32Array(this.l5o_1);
    var tmp_0 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.l5o_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var tmp_1 = tmp$ret$2;
    tmp_0.p5o_1 = isArray(tmp_1) ? tmp_1 : THROW_CCE();
  }
  IntMap.prototype.q5o = function (key) {
    return indexOf(this, key) >= 0;
  };
  IntMap.prototype.j = function (key) {
    var index = indexOf(this, key);
    if (index === -1)
      return null;
    return this.p5o_1[index];
  };
  IntMap.prototype.r5o = function (key) {
    var index = indexOf(this, key);
    if (index === -1)
      return null;
    var prev = this.p5o_1[index];
    removeAt(this, index);
    return prev;
  };
  IntMap.prototype.s5o = function (key, value) {
    var startIndex = hashIndex(this, key);
    var index = startIndex;
    while (true) {
      if (this.p5o_1[index] == null) {
        set(this, index, key, value);
        grow(this);
        return null;
      }
      if (this.o5o_1[index] === key) {
        var previousValue = this.p5o_1[index];
        this.p5o_1[index] = value;
        return previousValue;
      }
      index = probeNext(this, index);
      // Inline function 'kotlin.check' call
      var tmp0_check = !(index === startIndex);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'io.rsocket.kotlin.internal.IntMap.set.<anonymous>' call
        tmp$ret$0 = 'Unable to insert';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  IntMap.prototype.t9 = function () {
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.l5o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        clear(this, index);
      }
       while (inductionVariable < tmp0_repeat);
    this.k5o_1 = 0;
  };
  IntMap.prototype.t5o = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var list = tmp$ret$0;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.l5o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.rsocket.kotlin.internal.IntMap.values.<anonymous>' call
        var tmp0_safe_receiver = this.p5o_1[index];
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          tmp$ret$1 = list.a(tmp0_safe_receiver);
        }
      }
       while (inductionVariable < tmp0_repeat);
    return toList(list);
  };
  function safeFindNextPositivePowerOfTwo(value) {
    var tmp;
    if (value <= 0) {
      tmp = 1;
    } else if (value >= 1073741824) {
      tmp = 1073741824;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.countLeadingZeroBits' call
      var tmp0_countLeadingZeroBits = value - 1 | 0;
      tmp$ret$0 = clz32(tmp0_countLeadingZeroBits);
      tmp = 1 << (32 - tmp$ret$0 | 0);
    }
    return tmp;
  }
  function $markCOROUTINE$6(_this__u8e3s4, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c5p_1 = _this__u8e3s4;
    this.d5p_1 = frame;
  }
  $markCOROUTINE$6.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.c5p_1.u5f_1.kotlinx$atomicfu$value = currentMillis();
            if (this.d5p_1.s5k_1) {
              this.dg_1 = 1;
              suspendResult = this.c5p_1.t5f_1.z5n(false, new Long(0, 0), this.d5p_1.u5k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.dg_1 = 2;
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
  function $tickCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m5p_1 = _this__u8e3s4;
  }
  $tickCOROUTINE$7.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = delay(toLong(this.m5p_1.s5f_1.m5l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (currentMillis().w5(this.m5p_1.u5f_1.kotlinx$atomicfu$value).x(toLong(this.m5p_1.s5f_1.n5l_1)) >= 0)
              throw new ConnectionError('No keep-alive for ' + this.m5p_1.s5f_1.n5l_1 + ' ms');
            this.dg_1 = 2;
            suspendResult = this.m5p_1.t5f_1.z5n(true, new Long(0, 0), Companion_getInstance_0().o36_1, this);
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
  function KeepAliveHandler(keepAlive, sender) {
    this.s5f_1 = keepAlive;
    this.t5f_1 = sender;
    this.u5f_1 = atomic$long$1(currentMillis());
  }
  KeepAliveHandler.prototype.f5h = function (frame, $cont) {
    var tmp = new $markCOROUTINE$6(this, frame, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  KeepAliveHandler.prototype.v5f = function ($cont) {
    var tmp = new $tickCOROUTINE$7(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $useRequestCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v5p_1 = _this__u8e3s4;
  }
  $useRequestCOROUTINE$8.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (this.v5p_1.w5p_1.atomicfu$decrementAndGet$long().x(new Long(0, 0)) >= 0) {
              ensureActive(this.h3());
              this.dg_1 = 2;
              continue $sm;
            } else {
              this.dg_1 = 1;
              var tmp0__anonymous__q1qw7t = this;
              var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
              cancellable.t1f();
              if (this.v5p_1.w5p_1.kotlinx$atomicfu$value.x(new Long(0, 0)) >= 0 ? cancellable.n1a() : false) {
                var tmp0_success = Companion_getInstance_1();
                cancellable.i3(_Result___init__impl__xyqfz8(Unit_getInstance()));
              } else {
                this.v5p_1.x5p_1 = cancellable;
              }
              suspendResult = returnIfSuspended(cancellable.s1d(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.dg_1 = 2;
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
  function Limiter(initial) {
    this.w5p_1 = atomic$long$1(toLong(initial));
    this.x5p_1 = null;
  }
  Limiter.prototype.y5p = function (n) {
    if (n <= 0)
      return Unit_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var updatedRequests = this.w5p_1.kotlinx$atomicfu$value.v5(toLong(n));
    if (updatedRequests.x(new Long(0, 0)) < 0) {
      var tmp = this.w5p_1;
      Companion_getInstance_2();
      tmp.kotlinx$atomicfu$value = new Long(-1, 2147483647);
    } else {
      this.w5p_1.kotlinx$atomicfu$value = updatedRequests;
    }
    var tmp_0;
    var tmp0_safe_receiver = this.x5p_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1a()) === true) {
      var tmp1_safe_receiver = this.x5p_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_1();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.i3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
      }
      this.x5p_1 = null;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$2 = tmp_0;
  };
  Limiter.prototype.z5p = function ($cont) {
    var tmp = new $useRequestCOROUTINE$8(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function logging(_this__u8e3s4, logger) {
    return logger.a5q(LoggingLevel_DEBUG_getInstance()) ? new LoggingConnection(_this__u8e3s4, logger) : _this__u8e3s4;
  }
  function dumpFrameToString(_this__u8e3s4, $this) {
    var length = _this__u8e3s4.y30();
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.use' call
    var tmp0_use = _this__u8e3s4.c37();
    var closed = false;
    var tmp;
    try {
      var tmp$ret$2;
      // Inline function 'io.rsocket.kotlin.internal.LoggingConnection.dumpFrameToString.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.use' call
      var tmp0_use_0 = readFrame(tmp0_use, _this__u8e3s4.r30_1);
      var closed_0 = false;
      var tmp_0;
      try {
        var tmp$ret$0;
        // Inline function 'io.rsocket.kotlin.internal.LoggingConnection.dumpFrameToString.<anonymous>.<anonymous>' call
        tmp$ret$0 = tmp0_use_0.v5j(length);
        tmp_0 = tmp$ret$0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          try {
            closed_0 = true;
            tmp0_use_0.n2g();
          } catch ($p) {
            if ($p instanceof Error) {
              addSuppressedInternal($p, $p);
            } else {
              throw $p;
            }
          }
          throw $p;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      finally {
        if (!closed_0) {
          tmp0_use_0.n2g();
        }
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        try {
          closed = true;
          tmp0_use.n2g();
        } catch ($p) {
          if ($p instanceof Error) {
            addSuppressedInternal($p, $p);
          } else {
            throw $p;
          }
        }
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    finally {
      if (!closed) {
        tmp0_use.n2g();
      }
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  }
  function $receiveCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j5q_1 = _this__u8e3s4;
  }
  $receiveCOROUTINE$9.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.j5q_1.k5q_1.h5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var packet = suspendResult;
            var tmp1_debug = this.j5q_1.l5q_1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_log = LoggingLevel_DEBUG_getInstance();
              if (!tmp1_debug.a5q(tmp0_log)) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              var tmp_0;
              try {
                tmp_0 = 'Receive: ' + dumpFrameToString(packet, this.j5q_1);
              } catch ($p) {
                var tmp_1;
                if ($p instanceof Error) {
                  tmp_1 = 'Log message creation failed: ' + $p;
                } else {
                  throw $p;
                }
                tmp_0 = tmp_1;
              }
              var msg = tmp_0;
              tmp1_debug.m5q(tmp0_log, null, msg);
            }
             while (false);
            return packet;
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
  function LoggingConnection(delegate, logger) {
    this.k5q_1 = delegate;
    this.l5q_1 = logger;
  }
  LoggingConnection.prototype.m1a = function () {
    return this.k5q_1.m1a();
  };
  LoggingConnection.prototype.f5a = function () {
    return this.k5q_1.f5a();
  };
  LoggingConnection.prototype.g5a = function (packet, $cont) {
    // Inline function 'io.rsocket.kotlin.logging.debug' call
    var tmp1_debug = this.l5q_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.rsocket.kotlin.logging.log' call
      var tmp0_log = LoggingLevel_DEBUG_getInstance();
      if (!tmp1_debug.a5q(tmp0_log)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp;
      try {
        var tmp$ret$1;
        // Inline function 'io.rsocket.kotlin.internal.LoggingConnection.send.<anonymous>' call
        tmp$ret$1 = 'Send:    ' + dumpFrameToString(packet, this);
        tmp = tmp$ret$1;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = 'Log message creation failed: ' + $p;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var msg = tmp;
      tmp1_debug.m5q(tmp0_log, null, msg);
    }
    return this.k5q_1.g5a(packet, $cont);
  };
  LoggingConnection.prototype.h5a = function ($cont) {
    var tmp = new $receiveCOROUTINE$9(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function get_selectFrame() {
    init_properties_Prioritizer_kt_80sxfl();
    return selectFrame;
  }
  var selectFrame;
  function $receiveCOROUTINE$10(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v5q_1 = _this__u8e3s4;
  }
  $receiveCOROUTINE$10.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp0_onSuccess = this.v5q_1.a5f_1.x1q();
            var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(tmp0_onSuccess);
            if (!(tmp_0 instanceof Failed)) {
              var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(tmp0_onSuccess);
              var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
              return tmp1__anonymous__uwfjfc;
            }

            ;
            var tmp2_onSuccess = this.v5q_1.b5f_1.x1q();
            var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw(tmp2_onSuccess);
            if (!(tmp_2 instanceof Failed)) {
              var tmp_3 = _ChannelResult___get_holder__impl__pm9gzw(tmp2_onSuccess);
              var tmp3__anonymous__ufb84q = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
              return tmp3__anonymous__ufb84q;
            }

            ;
            this.dg_1 = 1;
            var tmp0__anonymous__q1qw7t = this;
            var scope = new SelectBuilderImpl(tmp0__anonymous__q1qw7t);
            try {
              scope.l2g(this.v5q_1.a5f_1.f1r(), get_selectFrame());
              scope.l2g(this.v5q_1.b5f_1.f1r(), get_selectFrame());
            } catch ($p) {
              if ($p instanceof Error) {
                scope.k2g($p);
              } else {
                throw $p;
              }
            }

            suspendResult = returnIfSuspended(scope.s1d(), this);
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
  function Prioritizer() {
    var tmp = this;
    Factory_getInstance();
    tmp.a5f_1 = SafeChannel(2147483647);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.b5f_1 = SafeChannel(2147483647);
  }
  Prioritizer.prototype.m5n = function (frame, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.h3();
    tmp$ret$1 = tmp$ret$0;
    ensureActive(tmp$ret$1);
    var channel = frame.d5h() === 0 ? this.a5f_1 : this.b5f_1;
    return channel.l1r(frame, $cont);
  };
  Prioritizer.prototype.i5g = function ($cont) {
    var tmp = new $receiveCOROUTINE$10(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  Prioritizer.prototype.c5f = function (error) {
    fullClose(this.a5f_1, error);
    fullClose(this.b5f_1, error);
  };
  function selectFrame$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  selectFrame$slambda.prototype.f5r = function (it, $cont) {
    var tmp = this.g5r(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  selectFrame$slambda.prototype.kh = function (p1, $cont) {
    return this.f5r(p1 instanceof Frame ? p1 : THROW_CCE(), $cont);
  };
  selectFrame$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        if (tmp === 0) {
          this.eg_1 = 1;
          return this.e5r_1;
        } else if (tmp === 1) {
          throw this.gg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  selectFrame$slambda.prototype.g5r = function (it, completion) {
    var i = new selectFrame$slambda(completion);
    i.e5r_1 = it;
    return i;
  };
  function selectFrame$slambda_0(resultContinuation) {
    var i = new selectFrame$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.f5r(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_Prioritizer_kt_yrnqlf;
  function init_properties_Prioritizer_kt_80sxfl() {
    if (properties_initialized_Prioritizer_kt_yrnqlf) {
    } else {
      properties_initialized_Prioritizer_kt_yrnqlf = true;
      selectFrame = selectFrame$slambda_0(null);
    }
  }
  function $onRequestCOROUTINE$17(_this__u8e3s4, n, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p5r_1 = _this__u8e3s4;
    this.q5r_1 = n;
  }
  $onRequestCOROUTINE$17.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (!this.p5r_1.x5r_1.s1q()) {
              this.dg_1 = 1;
              suspendResult = this.p5r_1.y5r_1.s5r_1.d5o(this.p5r_1.z5r_1, this.q5r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.dg_1 = 2;
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
  function _no_name_provided__qut3iv($collector, $strategy, $channel, this$0, $id) {
    this.x5r_1 = $channel;
    this.y5r_1 = this$0;
    this.z5r_1 = $id;
    RequestFlowCollector.call(this, $collector, $strategy);
  }
  _no_name_provided__qut3iv.prototype.a5s = function (n, $cont) {
    var tmp = new $onRequestCOROUTINE$17(this, n, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $collectCOROUTINE$16(_this__u8e3s4, collector, strategy, initialRequest, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m5s_1 = _this__u8e3s4;
    this.n5s_1 = collector;
    this.o5s_1 = strategy;
    this.p5s_1 = initialRequest;
  }
  $collectCOROUTINE$16.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 8;
            ensureActiveOrRelease(this.m5s_1.z5s_1, this.m5s_1.a5t_1);
            this.q5s_1 = this.m5s_1.z5s_1.t5r_1.b5t();
            var tmp_0 = this;
            Factory_getInstance();
            tmp_0.r5s_1 = SafeChannel(2147483647);
            this.s5s_1 = new RequesterRequestStreamFrameHandler(this.q5s_1, this.m5s_1.z5s_1.t5r_1, this.r5s_1, this.m5s_1.z5s_1.u5r_1);
            this.m5s_1.z5s_1.t5r_1.c5t(this.q5s_1, this.s5s_1);
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 5;
            this.dg_1 = 2;
            suspendResult = this.m5s_1.z5s_1.s5r_1.e5o(FrameType_RequestStream_getInstance(), this.q5s_1, this.m5s_1.a5t_1, this.p5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.u5s_1 = new _no_name_provided__qut3iv(this.n5s_1, this.o5s_1, this.r5s_1, this.m5s_1.z5s_1, this.q5s_1);
            this.dg_1 = 3;
            suspendResult = emitAll(this.u5s_1, this.r5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v5s_1 = suspendResult;
            this.s5s_1.d5t();
            this.t5s_1 = this.v5s_1;
            this.eg_1 = 8;
            this.dg_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            this.eg_1 = 8;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof Error) {
              this.w5s_1 = this.gg_1;
              this.m5s_1.a5t_1.n2g();
              this.x5s_1 = this.s5s_1.e5t(this.w5s_1);
              if (get_isActive(this.m5s_1.z5s_1) ? this.x5s_1 : false) {
                this.dg_1 = 6;
                suspendResult = this.m5s_1.z5s_1.s5r_1.b5o(this.q5s_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 7;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 6:
            this.dg_1 = 7;
            continue $sm;
          case 7:
            throw this.w5s_1;
          case 8:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 8) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function RSocketRequester$requestChannel$o$collect$slambda$slambda($limiter, this$0, $id, resultContinuation) {
    this.n5t_1 = $limiter;
    this.o5t_1 = this$0;
    this.p5t_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketRequester$requestChannel$o$collect$slambda$slambda.prototype.s5t = function (payload, $cont) {
    var tmp = this.t5t(payload, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketRequester$requestChannel$o$collect$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.s5t((!(p1 == null) ? isInterface(p1, Payload) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketRequester$requestChannel$o$collect$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 4;
            this.dg_1 = 2;
            suspendResult = this.n5t_1.z5p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.o5t_1.s5r_1.g5o(this.p5t_1, this.q5t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r5t_1 = suspendResult;
            this.eg_1 = 5;
            this.dg_1 = 7;
            continue $sm;
          case 4:
            this.eg_1 = 5;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              this.q5t_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            throw this.gg_1;
          case 6:
            this.eg_1 = 5;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
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
  RSocketRequester$requestChannel$o$collect$slambda$slambda.prototype.t5t = function (payload, completion) {
    var i = new RSocketRequester$requestChannel$o$collect$slambda$slambda(this.n5t_1, this.o5t_1, this.p5t_1, completion);
    i.q5t_1 = payload;
    return i;
  };
  function RSocketRequester$requestChannel$o$collect$slambda$slambda_0($limiter, this$0, $id, resultContinuation) {
    var i = new RSocketRequester$requestChannel$o$collect$slambda$slambda($limiter, this$0, $id, resultContinuation);
    var l = function (payload, $cont) {
      return i.s5t(payload, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $onRequestCOROUTINE$19(_this__u8e3s4, n, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c5u_1 = _this__u8e3s4;
    this.d5u_1 = n;
  }
  $onRequestCOROUTINE$19.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (!this.c5u_1.g5u_1.s1q()) {
              this.dg_1 = 1;
              suspendResult = this.c5u_1.h5u_1.s5r_1.d5o(this.c5u_1.i5u_1, this.d5u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.dg_1 = 2;
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
  function RSocketRequester$requestChannel$o$collect$slambda($payloads, this$0, $id, $handler, $limiter, resultContinuation) {
    this.r5u_1 = $payloads;
    this.s5u_1 = this$0;
    this.t5u_1 = $id;
    this.u5u_1 = $handler;
    this.v5u_1 = $limiter;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketRequester$requestChannel$o$collect$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketRequester$requestChannel$o$collect$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketRequester$requestChannel$o$collect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            this.eg_1 = 4;
            this.dg_1 = 1;
            var tmp_0 = RSocketRequester$requestChannel$o$collect$slambda$slambda_0(this.v5u_1, this.s5u_1, this.t5u_1, null);
            suspendResult = this.r5u_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dg_1 = 2;
            suspendResult = this.s5u_1.s5r_1.i5o(this.t5u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u5u_1.z5u();
            this.eg_1 = 7;
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.eg_1 = 7;
            return Unit_getInstance();
          case 4:
            this.eg_1 = 7;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              this.x5u_1 = this.gg_1;
              this.y5u_1 = this.u5u_1.a5v(this.x5u_1);
              if (get_isActive(this.s5u_1) ? this.y5u_1 : false) {
                this.dg_1 = 5;
                suspendResult = this.s5u_1.s5r_1.c5o(this.t5u_1, this.x5u_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 6;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            this.dg_1 = 6;
            continue $sm;
          case 6:
            throw this.x5u_1;
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
  RSocketRequester$requestChannel$o$collect$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketRequester$requestChannel$o$collect$slambda(this.r5u_1, this.s5u_1, this.t5u_1, this.u5u_1, this.v5u_1, completion);
    i.w5u_1 = $this$launch;
    return i;
  };
  function RSocketRequester$requestChannel$o$collect$slambda_0($payloads, this$0, $id, $handler, $limiter, resultContinuation) {
    var i = new RSocketRequester$requestChannel$o$collect$slambda($payloads, this$0, $id, $handler, $limiter, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($collector, $strategy, $channel, this$0, $id) {
    this.g5u_1 = $channel;
    this.h5u_1 = this$0;
    this.i5u_1 = $id;
    RequestFlowCollector.call(this, $collector, $strategy);
  }
  _no_name_provided__qut3iv_0.prototype.a5s = function (n, $cont) {
    var tmp = new $onRequestCOROUTINE$19(this, n, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $collectCOROUTINE$18(_this__u8e3s4, collector, strategy, initialRequest, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j5v_1 = _this__u8e3s4;
    this.k5v_1 = collector;
    this.l5v_1 = strategy;
    this.m5v_1 = initialRequest;
  }
  $collectCOROUTINE$18.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 8;
            ensureActiveOrRelease(this.j5v_1.y5v_1, this.j5v_1.z5v_1);
            this.n5v_1 = this.j5v_1.y5v_1.t5r_1.b5t();
            var tmp_0 = this;
            Factory_getInstance();
            tmp_0.o5v_1 = SafeChannel(2147483647);
            this.p5v_1 = new Limiter(0);
            this.q5v_1 = Job(get_job(this.j5v_1.y5v_1.r5r_1));
            this.r5v_1 = new RequesterRequestChannelFrameHandler(this.n5v_1, this.j5v_1.y5v_1.t5r_1, this.p5v_1, this.q5v_1, this.o5v_1, this.j5v_1.y5v_1.u5r_1);
            this.j5v_1.y5v_1.t5r_1.c5t(this.n5v_1, this.r5v_1);
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 5;
            this.dg_1 = 2;
            suspendResult = this.j5v_1.y5v_1.s5r_1.e5o(FrameType_RequestChannel_getInstance(), this.n5v_1, this.j5v_1.z5v_1, this.m5v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            launch$default(this.j5v_1.y5v_1, this.q5v_1, null, RSocketRequester$requestChannel$o$collect$slambda_0(this.j5v_1.a5w_1, this.j5v_1.y5v_1, this.n5v_1, this.r5v_1, this.p5v_1, null), 2, null);
            ;
            var tmp_1 = this;
            tmp_1.t5v_1 = new _no_name_provided__qut3iv_0(this.k5v_1, this.l5v_1, this.o5v_1, this.j5v_1.y5v_1, this.n5v_1);
            this.dg_1 = 3;
            suspendResult = emitAll(this.t5v_1, this.o5v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.u5v_1 = suspendResult;
            this.r5v_1.d5t();
            this.s5v_1 = this.u5v_1;
            this.eg_1 = 8;
            this.dg_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            this.eg_1 = 8;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof Error) {
              this.v5v_1 = this.gg_1;
              this.j5v_1.z5v_1.n2g();
              this.w5v_1 = this.r5v_1.e5t(this.v5v_1);
              if (get_isActive(this.j5v_1.y5v_1) ? this.w5v_1 : false) {
                this.dg_1 = 6;
                suspendResult = this.j5v_1.y5v_1.s5r_1.b5o(this.n5v_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 7;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 6:
            this.dg_1 = 7;
            continue $sm;
          case 7:
            throw this.v5v_1;
          case 8:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 8) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function ensureActiveOrRelease($this, closeable) {
    if (get_isActive($this))
      return Unit_getInstance();
    closeable.n2g();
    ensureActive_0($this);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.b5w_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.k1u = function (value, $cont) {
    return this.b5w_1(value, $cont);
  };
  function _no_name_provided__qut3iv_1(this$0, $payload) {
    this.z5s_1 = this$0;
    this.a5t_1 = $payload;
    RequestFlow.call(this);
  }
  _no_name_provided__qut3iv_1.prototype.c5w = function (collector, strategy, initialRequest, $cont) {
    var tmp = new $collectCOROUTINE$16(this, collector, strategy, initialRequest, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function _no_name_provided__qut3iv_2(this$0, $initPayload, $payloads) {
    this.y5v_1 = this$0;
    this.z5v_1 = $initPayload;
    this.a5w_1 = $payloads;
    RequestFlow.call(this);
  }
  _no_name_provided__qut3iv_2.prototype.c5w = function (collector, strategy, initialRequest, $cont) {
    var tmp = new $collectCOROUTINE$18(this, collector, strategy, initialRequest, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $metadataPushCOROUTINE$11(_this__u8e3s4, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n5w_1 = _this__u8e3s4;
    this.o5w_1 = metadata;
  }
  $metadataPushCOROUTINE$11.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            ensureActiveOrRelease(this.n5w_1, this.o5w_1);
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 3;
            this.dg_1 = 2;
            suspendResult = this.n5w_1.s5r_1.a5o(this.o5w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p5w_1 = suspendResult;
            this.eg_1 = 6;
            this.dg_1 = 5;
            continue $sm;
          case 3:
            this.eg_1 = 6;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              this.o5w_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            this.eg_1 = 6;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 5;
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
  function $fireAndForgetCOROUTINE$12(_this__u8e3s4, payload, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y5w_1 = _this__u8e3s4;
    this.z5w_1 = payload;
  }
  $fireAndForgetCOROUTINE$12.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            ensureActiveOrRelease(this.y5w_1, this.z5w_1);
            this.a5x_1 = this.y5w_1.t5r_1.b5t();
            this.eg_1 = 3;
            this.dg_1 = 1;
            var tmp_0 = FrameType_RequestFnF_getInstance();
            suspendResult = this.y5w_1.s5r_1.f5o(tmp_0, this.a5x_1, this.z5w_1, 0, this, 8, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eg_1 = 6;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.eg_1 = 6;
            return Unit_getInstance();
          case 3:
            this.eg_1 = 6;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              this.b5x_1 = this.gg_1;
              this.z5w_1.n2g();
              if (get_isActive(this.y5w_1)) {
                this.dg_1 = 4;
                suspendResult = this.y5w_1.s5r_1.b5o(this.a5x_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 5;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            this.dg_1 = 5;
            continue $sm;
          case 5:
            throw this.b5x_1;
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
  function $requestResponseCOROUTINE$13(_this__u8e3s4, payload, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k5x_1 = _this__u8e3s4;
    this.l5x_1 = payload;
  }
  $requestResponseCOROUTINE$13.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 8;
            ensureActiveOrRelease(this.k5x_1, this.l5x_1);
            this.m5x_1 = this.k5x_1.t5r_1.b5t();
            var tmp_0 = this;
            tmp_0.n5x_1 = CompletableDeferred$default(null, 1, null);
            this.o5x_1 = new RequesterRequestResponseFrameHandler(this.m5x_1, this.k5x_1.t5r_1, this.n5x_1, this.k5x_1.u5r_1);
            this.k5x_1.t5r_1.c5t(this.m5x_1, this.o5x_1);
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 5;
            this.dg_1 = 2;
            var tmp_1 = FrameType_RequestResponse_getInstance();
            suspendResult = this.k5x_1.s5r_1.f5o(tmp_1, this.m5x_1, this.l5x_1, 0, this, 8, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.n5x_1.e1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.q5x_1 = suspendResult;
            this.o5x_1.d5t();
            this.p5x_1 = this.q5x_1;
            this.eg_1 = 8;
            this.dg_1 = 4;
            continue $sm;
          case 4:
            return this.p5x_1;
          case 5:
            this.eg_1 = 8;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof Error) {
              this.r5x_1 = this.gg_1;
              this.l5x_1.n2g();
              this.s5x_1 = this.o5x_1.e5t(this.r5x_1);
              if (get_isActive(this.k5x_1) ? this.s5x_1 : false) {
                this.dg_1 = 6;
                suspendResult = this.k5x_1.s5r_1.b5o(this.m5x_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 7;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 6:
            this.dg_1 = 7;
            continue $sm;
          case 7:
            throw this.r5x_1;
          case 8:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 8) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function RSocketRequester(coroutineContext, sender, streamsStorage, pool) {
    this.r5r_1 = coroutineContext;
    this.s5r_1 = sender;
    this.t5r_1 = streamsStorage;
    this.u5r_1 = pool;
  }
  RSocketRequester.prototype.m1a = function () {
    return this.r5r_1;
  };
  RSocketRequester.prototype.a5b = function (metadata, $cont) {
    var tmp = new $metadataPushCOROUTINE$11(this, metadata, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketRequester.prototype.b5b = function (payload, $cont) {
    var tmp = new $fireAndForgetCOROUTINE$12(this, payload, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketRequester.prototype.c5b = function (payload, $cont) {
    var tmp = new $requestResponseCOROUTINE$13(this, payload, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketRequester.prototype.d5b = function (payload) {
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.internal.requestFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_1(this, payload);
    return tmp$ret$0;
  };
  RSocketRequester.prototype.e5b = function (initPayload, payloads) {
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.internal.requestFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_2(this, initPayload, payloads);
    return tmp$ret$0;
  };
  function RSocketResponder$handleRequestStream$slambda$slambda($tmp1_collectLimiting, this$0, $id, resultContinuation) {
    this.b5y_1 = $tmp1_collectLimiting;
    this.c5y_1 = this$0;
    this.d5y_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketResponder$handleRequestStream$slambda$slambda.prototype.s5t = function (payload, $cont) {
    var tmp = this.t5t(payload, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketResponder$handleRequestStream$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.s5t((!(p1 == null) ? isInterface(p1, Payload) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketResponder$handleRequestStream$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 4;
            this.dg_1 = 2;
            suspendResult = this.b5y_1.z5p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.c5y_1.k5h_1.g5o(this.d5y_1, this.e5y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f5y_1 = suspendResult;
            this.eg_1 = 5;
            this.dg_1 = 7;
            continue $sm;
          case 4:
            this.eg_1 = 5;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              this.e5y_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            throw this.gg_1;
          case 6:
            this.eg_1 = 5;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
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
  RSocketResponder$handleRequestStream$slambda$slambda.prototype.t5t = function (payload, completion) {
    var i = new RSocketResponder$handleRequestStream$slambda$slambda(this.b5y_1, this.c5y_1, this.d5y_1, completion);
    i.e5y_1 = payload;
    return i;
  };
  function RSocketResponder$handleRequestStream$slambda$slambda_0($tmp1_collectLimiting, this$0, $id, resultContinuation) {
    var i = new RSocketResponder$handleRequestStream$slambda$slambda($tmp1_collectLimiting, this$0, $id, resultContinuation);
    var l = function (payload, $cont) {
      return i.s5t(payload, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $onRequestCOROUTINE$23(_this__u8e3s4, n, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5y_1 = _this__u8e3s4;
    this.p5y_1 = n;
  }
  $onRequestCOROUTINE$23.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (!this.o5y_1.s5y_1.s1q()) {
              this.dg_1 = 1;
              suspendResult = this.o5y_1.t5y_1.k5h_1.d5o(this.o5y_1.u5y_1, this.p5y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.dg_1 = 2;
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
  function _no_name_provided__qut3iv_3($collector, $strategy, $tmp0_emitAllWithRequestN, this$0, $id) {
    this.s5y_1 = $tmp0_emitAllWithRequestN;
    this.t5y_1 = this$0;
    this.u5y_1 = $id;
    RequestFlowCollector.call(this, $collector, $strategy);
  }
  _no_name_provided__qut3iv_3.prototype.a5s = function (n, $cont) {
    var tmp = new $onRequestCOROUTINE$23(this, n, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $collectCOROUTINE$22(_this__u8e3s4, collector, strategy, initialRequest, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d5z_1 = _this__u8e3s4;
    this.e5z_1 = collector;
    this.f5z_1 = strategy;
    this.g5z_1 = initialRequest;
  }
  $collectCOROUTINE$22.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            this.eg_1 = 4;
            this.dg_1 = 1;
            suspendResult = this.d5z_1.m5z_1.k5h_1.d5o(this.d5z_1.n5z_1, this.g5z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.h5z_1 = this.d5z_1.o5z_1.x5z_1;
            var tmp_1 = this;
            tmp_1.i5z_1 = new _no_name_provided__qut3iv_3(this.e5z_1, this.f5z_1, this.h5z_1, this.d5z_1.m5z_1, this.d5z_1.n5z_1);
            this.dg_1 = 2;
            suspendResult = emitAll(this.i5z_1, this.h5z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d5z_1.o5z_1.d5t();
            this.eg_1 = 7;
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.eg_1 = 7;
            return Unit_getInstance();
          case 4:
            this.eg_1 = 7;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof Error) {
              this.j5z_1 = this.gg_1;
              this.k5z_1 = this.d5z_1.o5z_1.e5t(this.j5z_1);
              if (get_isActive(this.d5z_1.m5z_1) ? this.k5z_1 : false) {
                this.dg_1 = 5;
                suspendResult = this.d5z_1.m5z_1.k5h_1.b5o(this.d5z_1.n5z_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 6;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            this.dg_1 = 6;
            continue $sm;
          case 6:
            throw this.j5z_1;
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
  function _no_name_provided__qut3iv_4(this$0, $id, $handler) {
    this.m5z_1 = this$0;
    this.n5z_1 = $id;
    this.o5z_1 = $handler;
    RequestFlow.call(this);
  }
  _no_name_provided__qut3iv_4.prototype.c5w = function (collector, strategy, initialRequest, $cont) {
    var tmp = new $collectCOROUTINE$22(this, collector, strategy, initialRequest, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function RSocketResponder$handleRequestChannel$slambda$slambda($tmp1_collectLimiting, this$0, $id, resultContinuation) {
    this.g60_1 = $tmp1_collectLimiting;
    this.h60_1 = this$0;
    this.i60_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketResponder$handleRequestChannel$slambda$slambda.prototype.s5t = function (payload, $cont) {
    var tmp = this.t5t(payload, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketResponder$handleRequestChannel$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.s5t((!(p1 == null) ? isInterface(p1, Payload) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketResponder$handleRequestChannel$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 4;
            this.dg_1 = 2;
            suspendResult = this.g60_1.z5p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.h60_1.k5h_1.g5o(this.i60_1, this.j60_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.k60_1 = suspendResult;
            this.eg_1 = 5;
            this.dg_1 = 7;
            continue $sm;
          case 4:
            this.eg_1 = 5;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              this.j60_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            throw this.gg_1;
          case 6:
            this.eg_1 = 5;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
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
  RSocketResponder$handleRequestChannel$slambda$slambda.prototype.t5t = function (payload, completion) {
    var i = new RSocketResponder$handleRequestChannel$slambda$slambda(this.g60_1, this.h60_1, this.i60_1, completion);
    i.j60_1 = payload;
    return i;
  };
  function RSocketResponder$handleRequestChannel$slambda$slambda_0($tmp1_collectLimiting, this$0, $id, resultContinuation) {
    var i = new RSocketResponder$handleRequestChannel$slambda$slambda($tmp1_collectLimiting, this$0, $id, resultContinuation);
    var l = function (payload, $cont) {
      return i.s5t(payload, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function closeOnCompletion(_this__u8e3s4, $this, closeable) {
    _this__u8e3s4.n1b(RSocketResponder$closeOnCompletion$lambda(closeable));
    return _this__u8e3s4;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.l60_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.k1u = function (value, $cont) {
    return this.l60_1(value, $cont);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.m60_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.k1u = function (value, $cont) {
    return this.m60_1(value, $cont);
  };
  function RSocketResponder$handleMetadataPush$slambda(this$0, $metadata, resultContinuation) {
    this.v60_1 = this$0;
    this.w60_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketResponder$handleMetadataPush$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketResponder$handleMetadataPush$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketResponder$handleMetadataPush$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.v60_1.l5h_1.a5b(this.w60_1, this);
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
  RSocketResponder$handleMetadataPush$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketResponder$handleMetadataPush$slambda(this.v60_1, this.w60_1, completion);
    i.x60_1 = $this$launch;
    return i;
  };
  function RSocketResponder$handleMetadataPush$slambda_0(this$0, $metadata, resultContinuation) {
    var i = new RSocketResponder$handleMetadataPush$slambda(this$0, $metadata, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketResponder$handleFireAndForget$slambda(this$0, $payload, $handler, resultContinuation) {
    this.g61_1 = this$0;
    this.h61_1 = $payload;
    this.i61_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketResponder$handleFireAndForget$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketResponder$handleFireAndForget$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketResponder$handleFireAndForget$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 4;
            this.dg_1 = 2;
            suspendResult = this.g61_1.l5h_1.b5b(this.h61_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k61_1 = suspendResult;
            this.eg_1 = 5;
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.i61_1.z5u();
            ;
            return Unit_getInstance();
          case 4:
            this.eg_1 = 5;
            var t = this.gg_1;
            this.i61_1.z5u();
            ;
            throw t;
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
  RSocketResponder$handleFireAndForget$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketResponder$handleFireAndForget$slambda(this.g61_1, this.h61_1, this.i61_1, completion);
    i.j61_1 = $this$launch;
    return i;
  };
  function RSocketResponder$handleFireAndForget$slambda_0(this$0, $payload, $handler, resultContinuation) {
    var i = new RSocketResponder$handleFireAndForget$slambda(this$0, $payload, $handler, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketResponder$handleRequestResponse$slambda(this$0, $payload, $id, $handler, resultContinuation) {
    this.a62_1 = this$0;
    this.b62_1 = $payload;
    this.c62_1 = $id;
    this.d62_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketResponder$handleRequestResponse$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketResponder$handleRequestResponse$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketResponder$handleRequestResponse$slambda.prototype.wg = function () {
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
            this.eg_1 = 8;
            this.eg_1 = 4;
            this.dg_1 = 2;
            suspendResult = this.a62_1.l5h_1.c5b(this.b62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g62_1 = suspendResult;
            this.dg_1 = 3;
            suspendResult = this.a62_1.k5h_1.h5o(this.c62_1, this.g62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_0 = this;
            this.d62_1.z5u();
            tmp_0.f62_1 = Unit_getInstance();
            this.eg_1 = 9;
            this.dg_1 = 7;
            continue $sm;
          case 4:
            this.eg_1 = 8;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              this.h62_1 = this.gg_1;
              this.i62_1 = this.d62_1.a5v(this.h62_1);
              var tmp_2;
              if (get_isActive_0(this.h3())) {
                tmp_2 = this.i62_1;
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                this.dg_1 = 5;
                suspendResult = this.a62_1.k5h_1.c5o(this.c62_1, this.h62_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 6;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            this.dg_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this;
            throw this.h62_1;
          case 7:
            this.b62_1.n2g();
            ;
            return Unit_getInstance();
          case 8:
            this.eg_1 = 9;
            var t = this.gg_1;
            this.b62_1.n2g();
            ;
            throw t;
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
  RSocketResponder$handleRequestResponse$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketResponder$handleRequestResponse$slambda(this.a62_1, this.b62_1, this.c62_1, this.d62_1, completion);
    i.e62_1 = $this$launch;
    return i;
  };
  function RSocketResponder$handleRequestResponse$slambda_0(this$0, $payload, $id, $handler, resultContinuation) {
    var i = new RSocketResponder$handleRequestResponse$slambda(this$0, $payload, $id, $handler, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketResponder$handleRequestStream$slambda(this$0, $payload, $handler, $id, resultContinuation) {
    this.r62_1 = this$0;
    this.s62_1 = $payload;
    this.t62_1 = $handler;
    this.u62_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketResponder$handleRequestStream$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketResponder$handleRequestStream$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketResponder$handleRequestStream$slambda.prototype.wg = function () {
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
            this.eg_1 = 8;
            this.eg_1 = 4;
            var tmp_0 = this;
            tmp_0.x62_1 = this.r62_1.l5h_1.d5b(this.s62_1);
            var tmp_1 = this;
            tmp_1.y62_1 = this.t62_1.i63_1;
            this.dg_1 = 2;
            var tmp_2 = RSocketResponder$handleRequestStream$slambda$slambda_0(this.y62_1, this.r62_1, this.u62_1, null);
            suspendResult = this.x62_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.r62_1.k5h_1.i5o(this.u62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_3 = this;
            this.t62_1.z5u();
            tmp_3.w62_1 = Unit_getInstance();
            this.eg_1 = 9;
            this.dg_1 = 7;
            continue $sm;
          case 4:
            this.eg_1 = 8;
            var tmp_4 = this.gg_1;
            if (tmp_4 instanceof Error) {
              this.z62_1 = this.gg_1;
              this.a63_1 = this.t62_1.a5v(this.z62_1);
              var tmp_5;
              if (get_isActive_0(this.h3())) {
                tmp_5 = this.a63_1;
              } else {
                tmp_5 = false;
              }
              if (tmp_5) {
                this.dg_1 = 5;
                suspendResult = this.r62_1.k5h_1.c5o(this.u62_1, this.z62_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 6;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            this.dg_1 = 6;
            continue $sm;
          case 6:
            var tmp_6 = this;
            throw this.z62_1;
          case 7:
            this.s62_1.n2g();
            ;
            return Unit_getInstance();
          case 8:
            this.eg_1 = 9;
            var t = this.gg_1;
            this.s62_1.n2g();
            ;
            throw t;
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
  RSocketResponder$handleRequestStream$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketResponder$handleRequestStream$slambda(this.r62_1, this.s62_1, this.t62_1, this.u62_1, completion);
    i.v62_1 = $this$launch;
    return i;
  };
  function RSocketResponder$handleRequestStream$slambda_0(this$0, $payload, $handler, $id, resultContinuation) {
    var i = new RSocketResponder$handleRequestStream$slambda(this$0, $payload, $handler, $id, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketResponder$handleRequestChannel$slambda(this$0, $payload, $handler, $id, resultContinuation) {
    this.r63_1 = this$0;
    this.s63_1 = $payload;
    this.t63_1 = $handler;
    this.u63_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSocketResponder$handleRequestChannel$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RSocketResponder$handleRequestChannel$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSocketResponder$handleRequestChannel$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 9;
            var tmp_0 = this;
            tmp_0.w63_1 = new _no_name_provided__qut3iv_4(this.r63_1, this.u63_1, this.t63_1);
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 8;
            this.eg_1 = 4;
            var tmp_1 = this;
            tmp_1.y63_1 = this.r63_1.l5h_1.e5b(this.s63_1, this.w63_1);
            var tmp_2 = this;
            tmp_2.z63_1 = this.t63_1.w5z_1;
            this.dg_1 = 2;
            var tmp_3 = RSocketResponder$handleRequestChannel$slambda$slambda_0(this.z63_1, this.r63_1, this.u63_1, null);
            suspendResult = this.y63_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.r63_1.k5h_1.i5o(this.u63_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_4 = this;
            this.t63_1.z5u();
            tmp_4.x63_1 = Unit_getInstance();
            this.eg_1 = 9;
            this.dg_1 = 7;
            continue $sm;
          case 4:
            this.eg_1 = 8;
            var tmp_5 = this.gg_1;
            if (tmp_5 instanceof Error) {
              this.a64_1 = this.gg_1;
              this.b64_1 = this.t63_1.a5v(this.a64_1);
              var tmp_6;
              if (get_isActive_0(this.h3())) {
                tmp_6 = this.b64_1;
              } else {
                tmp_6 = false;
              }
              if (tmp_6) {
                this.dg_1 = 5;
                suspendResult = this.r63_1.k5h_1.c5o(this.u63_1, this.a64_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 6;
                continue $sm;
              }
            } else {
              throw this.gg_1;
            }

            break;
          case 5:
            this.dg_1 = 6;
            continue $sm;
          case 6:
            var tmp_7 = this;
            throw this.a64_1;
          case 7:
            this.s63_1.n2g();
            ;
            return Unit_getInstance();
          case 8:
            this.eg_1 = 9;
            var t = this.gg_1;
            this.s63_1.n2g();
            ;
            throw t;
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
  RSocketResponder$handleRequestChannel$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new RSocketResponder$handleRequestChannel$slambda(this.r63_1, this.s63_1, this.t63_1, this.u63_1, completion);
    i.v63_1 = $this$launch;
    return i;
  };
  function RSocketResponder$handleRequestChannel$slambda_0(this$0, $payload, $handler, $id, resultContinuation) {
    var i = new RSocketResponder$handleRequestChannel$slambda(this$0, $payload, $handler, $id, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSocketResponder$closeOnCompletion$lambda($closeable) {
    return function (it) {
      $closeable.n2g();
      return Unit_getInstance();
    };
  }
  function RSocketResponder(coroutineContext, sender, requestHandler) {
    this.j5h_1 = coroutineContext;
    this.k5h_1 = sender;
    this.l5h_1 = requestHandler;
  }
  RSocketResponder.prototype.m1a = function () {
    return this.j5h_1;
  };
  RSocketResponder.prototype.m5h = function (metadata) {
    return closeOnCompletion(launch$default(this, null, null, RSocketResponder$handleMetadataPush$slambda_0(this, metadata, null), 3, null), this, metadata);
  };
  RSocketResponder.prototype.c64 = function (payload, handler) {
    return closeOnCompletion(launch$default(this, null, null, RSocketResponder$handleFireAndForget$slambda_0(this, payload, handler, null), 3, null), this, payload);
  };
  RSocketResponder.prototype.d64 = function (payload, id, handler) {
    return closeOnCompletion(launch$default(this, null, null, RSocketResponder$handleRequestResponse$slambda_0(this, payload, id, handler, null), 3, null), this, payload);
  };
  RSocketResponder.prototype.e64 = function (payload, id, handler) {
    return closeOnCompletion(launch$default(this, null, null, RSocketResponder$handleRequestStream$slambda_0(this, payload, handler, id, null), 3, null), this, payload);
  };
  RSocketResponder.prototype.f64 = function (payload, id, handler) {
    return closeOnCompletion(launch$default(this, null, null, RSocketResponder$handleRequestChannel$slambda_0(this, payload, handler, id, null), 3, null), this, payload);
  };
  function connectWithReconnect(coroutineContext, logger, connect, predicate, $cont) {
    var tmp = new $connectWithReconnectCOROUTINE$24(coroutineContext, logger, connect, predicate, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function Connecting() {
    Connecting_instance = this;
    ReconnectState.call(this);
  }
  var Connecting_instance;
  function Connecting_getInstance() {
    if (Connecting_instance == null)
      new Connecting();
    return Connecting_instance;
  }
  function Failed_0(error) {
    ReconnectState.call(this);
    this.w64_1 = error;
  }
  Failed_0.prototype.toString = function () {
    return 'Failed(error=' + this.w64_1 + ')';
  };
  Failed_0.prototype.hashCode = function () {
    return hashCode(this.w64_1);
  };
  Failed_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Failed_0))
      return false;
    var tmp0_other_with_cast = other instanceof Failed_0 ? other : THROW_CCE();
    if (!equals(this.w64_1, tmp0_other_with_cast.w64_1))
      return false;
    return true;
  };
  function Connected(rSocket) {
    ReconnectState.call(this);
    this.x64_1 = rSocket;
  }
  Connected.prototype.toString = function () {
    return 'Connected(rSocket=' + this.x64_1 + ')';
  };
  Connected.prototype.hashCode = function () {
    return hashCode(this.x64_1);
  };
  Connected.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Connected))
      return false;
    var tmp0_other_with_cast = other instanceof Connected ? other : THROW_CCE();
    if (!equals(this.x64_1, tmp0_other_with_cast.x64_1))
      return false;
    return true;
  };
  function ReconnectState() {
  }
  function restarting(_this__u8e3s4) {
    return flow(restarting$slambda_0(_this__u8e3s4, null));
  }
  function ReconnectableRSocket$currentRSocket$o$collect$slambda(this$0, $collector, resultContinuation) {
    this.g65_1 = this$0;
    this.h65_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  ReconnectableRSocket$currentRSocket$o$collect$slambda.prototype.n65 = function (value, $cont) {
    var tmp = this.o65(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReconnectableRSocket$currentRSocket$o$collect$slambda.prototype.kh = function (p1, $cont) {
    return this.n65(p1 instanceof ReconnectState ? p1 : THROW_CCE(), $cont);
  };
  ReconnectableRSocket$currentRSocket$o$collect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.k65_1 = current(this.i65_1, this.g65_1);
            if (this.k65_1 == null) {
              this.j65_1 = Unit_getInstance();
              this.dg_1 = 4;
              var tmp_1 = this;
              continue $sm;
            } else {
              this.l65_1 = this.k65_1;
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.m65_1 = this.l65_1;
            this.dg_1 = 3;
            suspendResult = this.h65_1.k1u(this.m65_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.j65_1 = suspendResult;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  ReconnectableRSocket$currentRSocket$o$collect$slambda.prototype.o65 = function (value, completion) {
    var i = new ReconnectableRSocket$currentRSocket$o$collect$slambda(this.g65_1, this.h65_1, completion);
    i.i65_1 = value;
    return i;
  };
  function ReconnectableRSocket$currentRSocket$o$collect$slambda_0(this$0, $collector, resultContinuation) {
    var i = new ReconnectableRSocket$currentRSocket$o$collect$slambda(this$0, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.n65(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$30(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x65_1 = _this__u8e3s4;
    this.y65_1 = collector;
  }
  $collectCOROUTINE$30.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = ReconnectableRSocket$currentRSocket$o$collect$slambda_0(this.x65_1.a66_1, this.y65_1, null);
            suspendResult = this.x65_1.z65_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  function currentRSocket($this, closeable, $cont) {
    var tmp = new $currentRSocketCOROUTINE$26($this, closeable, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function current(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof Connected) {
      var tmp$ret$0;
      // Inline function 'kotlin.takeIf' call
      var tmp0_takeIf = _this__u8e3s4.x64_1;
      var tmp1_takeIf = isActive$factory();
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = tmp1_takeIf(tmp0_takeIf) ? tmp0_takeIf : null;
      tmp = tmp$ret$0;
    } else {
      if (tmp0_subject instanceof Failed_0) {
        throw _this__u8e3s4.w64_1;
      } else {
        if (equals(tmp0_subject, Connecting_getInstance())) {
          tmp = null;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.m66_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.k1u = function (value, $cont) {
    return this.m66_1(value, $cont);
  };
  function _no_name_provided__qut3iv_5($tmp0_mapNotNull, this$0) {
    this.z65_1 = $tmp0_mapNotNull;
    this.a66_1 = this$0;
  }
  _no_name_provided__qut3iv_5.prototype.n66 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$30(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  _no_name_provided__qut3iv_5.prototype.w1t = function (collector, $cont) {
    return this.n66(collector, $cont);
  };
  function ReconnectableRSocket$requestStream$slambda(this$0, $payload, resultContinuation) {
    this.w66_1 = this$0;
    this.x66_1 = $payload;
    CoroutineImpl.call(this, resultContinuation);
  }
  ReconnectableRSocket$requestStream$slambda.prototype.b67 = function ($this$flow, $cont) {
    var tmp = this.c67($this$flow, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReconnectableRSocket$requestStream$slambda.prototype.kh = function (p1, $cont) {
    return this.b67((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  ReconnectableRSocket$requestStream$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = currentRSocket(this.w66_1, this.x66_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z66_1 = suspendResult;
            this.a67_1 = this.z66_1.d5b(this.x66_1);
            this.dg_1 = 2;
            suspendResult = emitAll_0(this.y66_1, this.a67_1, this);
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
  ReconnectableRSocket$requestStream$slambda.prototype.c67 = function ($this$flow, completion) {
    var i = new ReconnectableRSocket$requestStream$slambda(this.w66_1, this.x66_1, completion);
    i.y66_1 = $this$flow;
    return i;
  };
  function ReconnectableRSocket$requestStream$slambda_0(this$0, $payload, resultContinuation) {
    var i = new ReconnectableRSocket$requestStream$slambda(this$0, $payload, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.b67($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ReconnectableRSocket$requestChannel$slambda(this$0, $initPayload, $payloads, resultContinuation) {
    this.l67_1 = this$0;
    this.m67_1 = $initPayload;
    this.n67_1 = $payloads;
    CoroutineImpl.call(this, resultContinuation);
  }
  ReconnectableRSocket$requestChannel$slambda.prototype.b67 = function ($this$flow, $cont) {
    var tmp = this.c67($this$flow, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReconnectableRSocket$requestChannel$slambda.prototype.kh = function (p1, $cont) {
    return this.b67((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  ReconnectableRSocket$requestChannel$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = currentRSocket(this.l67_1, this.m67_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p67_1 = suspendResult;
            this.q67_1 = this.p67_1.e5b(this.m67_1, this.n67_1);
            this.dg_1 = 2;
            suspendResult = emitAll_0(this.o67_1, this.q67_1, this);
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
  ReconnectableRSocket$requestChannel$slambda.prototype.c67 = function ($this$flow, completion) {
    var i = new ReconnectableRSocket$requestChannel$slambda(this.l67_1, this.m67_1, this.n67_1, completion);
    i.o67_1 = $this$flow;
    return i;
  };
  function ReconnectableRSocket$requestChannel$slambda_0(this$0, $initPayload, $payloads, resultContinuation) {
    var i = new ReconnectableRSocket$requestChannel$slambda(this$0, $initPayload, $payloads, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.b67($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $currentRSocketCOROUTINE$25(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z67_1 = _this__u8e3s4;
  }
  $currentRSocketCOROUTINE$25.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.a68_1 = current(this.z67_1.d68_1.p(), this.z67_1);
            if (this.a68_1 == null) {
              this.dg_1 = 1;
              var tmp0_mapNotNull = this.z67_1.d68_1;
              suspendResult = first(new _no_name_provided__qut3iv_5(tmp0_mapNotNull, this.z67_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.b68_1 = this.a68_1;
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.b68_1 = suspendResult;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            return this.b68_1;
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
  function $currentRSocketCOROUTINE$26(_this__u8e3s4, closeable, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j66_1 = _this__u8e3s4;
    this.k66_1 = closeable;
  }
  $currentRSocketCOROUTINE$26.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 3;
            this.dg_1 = 2;
            suspendResult = this.j66_1.e68(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l66_1 = suspendResult;
            this.eg_1 = 4;
            this.dg_1 = 6;
            continue $sm;
          case 3:
            this.eg_1 = 4;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              this.k66_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            throw this.gg_1;
          case 5:
            this.eg_1 = 4;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 6;
            continue $sm;
          case 6:
            return this.l66_1;
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
  function $metadataPushCOROUTINE$27(_this__u8e3s4, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n68_1 = _this__u8e3s4;
    this.o68_1 = metadata;
  }
  $metadataPushCOROUTINE$27.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = currentRSocket(this.n68_1, this.o68_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p68_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = this.p68_1.a5b(this.o68_1, this);
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
  function $fireAndForgetCOROUTINE$28(_this__u8e3s4, payload, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y68_1 = _this__u8e3s4;
    this.z68_1 = payload;
  }
  $fireAndForgetCOROUTINE$28.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = currentRSocket(this.y68_1, this.z68_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a69_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = this.a69_1.b5b(this.z68_1, this);
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
  function $requestResponseCOROUTINE$29(_this__u8e3s4, payload, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j69_1 = _this__u8e3s4;
    this.k69_1 = payload;
  }
  $requestResponseCOROUTINE$29.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = currentRSocket(this.j69_1, this.k69_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l69_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = this.l69_1.c5b(this.k69_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function ReconnectableRSocket(coroutineContext, state) {
    this.c68_1 = coroutineContext;
    this.d68_1 = state;
  }
  ReconnectableRSocket.prototype.m1a = function () {
    return this.c68_1;
  };
  ReconnectableRSocket.prototype.e68 = function ($cont) {
    var tmp = new $currentRSocketCOROUTINE$25(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReconnectableRSocket.prototype.a5b = function (metadata, $cont) {
    var tmp = new $metadataPushCOROUTINE$27(this, metadata, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReconnectableRSocket.prototype.b5b = function (payload, $cont) {
    var tmp = new $fireAndForgetCOROUTINE$28(this, payload, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReconnectableRSocket.prototype.c5b = function (payload, $cont) {
    var tmp = new $requestResponseCOROUTINE$29(this, payload, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReconnectableRSocket.prototype.d5b = function (payload) {
    return flow(ReconnectableRSocket$requestStream$slambda_0(this, payload, null));
  };
  ReconnectableRSocket.prototype.e5b = function (initPayload, payloads) {
    return flow(ReconnectableRSocket$requestChannel$slambda_0(this, initPayload, payloads, null));
  };
  function connectWithReconnect$slambda($connect, resultContinuation) {
    this.u69_1 = $connect;
    CoroutineImpl.call(this, resultContinuation);
  }
  connectWithReconnect$slambda.prototype.x69 = function ($this$flow, $cont) {
    var tmp = this.y69($this$flow, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  connectWithReconnect$slambda.prototype.kh = function (p1, $cont) {
    return this.x69((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  connectWithReconnect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            suspendResult = this.v69_1.k1u(Connecting_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dg_1 = 2;
            suspendResult = this.u69_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w69_1 = suspendResult;
            this.dg_1 = 3;
            suspendResult = this.v69_1.k1u(new Connected(this.w69_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
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
  connectWithReconnect$slambda.prototype.y69 = function ($this$flow, completion) {
    var i = new connectWithReconnect$slambda(this.u69_1, completion);
    i.v69_1 = $this$flow;
    return i;
  };
  function connectWithReconnect$slambda_0($connect, resultContinuation) {
    var i = new connectWithReconnect$slambda($connect, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.x69($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function connectWithReconnect$slambda_1($logger, $predicate, resultContinuation) {
    this.h6a_1 = $logger;
    this.i6a_1 = $predicate;
    CoroutineImpl.call(this, resultContinuation);
  }
  connectWithReconnect$slambda_1.prototype.m6a = function ($this$retryWhen, cause, attempt, $cont) {
    var tmp = this.n6a($this$retryWhen, cause, attempt, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  connectWithReconnect$slambda_1.prototype.o6a = function (p1, p2, p3, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof Error ? p2 : THROW_CCE();
    return this.m6a(tmp, tmp_0, p3 instanceof Long ? p3 : THROW_CCE(), $cont);
  };
  connectWithReconnect$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_log = LoggingLevel_DEBUG_getInstance();
              if (!this.h6a_1.a5q(tmp0_log)) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              var tmp_0;
              try {
                tmp_0 = 'Connection establishment failed, attempt: ' + toString(this.l6a_1) + '. Trying to reconnect...';
              } catch ($p) {
                var tmp_1;
                if ($p instanceof Error) {
                  tmp_1 = 'Log message creation failed: ' + $p;
                } else {
                  throw $p;
                }
                tmp_0 = tmp_1;
              }
              var msg = tmp_0;
              this.h6a_1.m5q(tmp0_log, this.k6a_1, msg);
            }
             while (false);
            this.dg_1 = 1;
            suspendResult = this.i6a_1(this.k6a_1, this.l6a_1, this);
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
  connectWithReconnect$slambda_1.prototype.n6a = function ($this$retryWhen, cause, attempt, completion) {
    var i = new connectWithReconnect$slambda_1(this.h6a_1, this.i6a_1, completion);
    i.j6a_1 = $this$retryWhen;
    i.k6a_1 = cause;
    i.l6a_1 = attempt;
    return i;
  };
  function connectWithReconnect$slambda_2($logger, $predicate, resultContinuation) {
    var i = new connectWithReconnect$slambda_1($logger, $predicate, resultContinuation);
    var l = function ($this$retryWhen, cause, attempt, $cont) {
      return i.m6a($this$retryWhen, cause, attempt, $cont);
    };
    l.$arity = 3;
    return l;
  }
  function connectWithReconnect$slambda_3($logger, resultContinuation) {
    this.x6a_1 = $logger;
    CoroutineImpl.call(this, resultContinuation);
  }
  connectWithReconnect$slambda_3.prototype.a6b = function ($this$catch, it, $cont) {
    var tmp = this.b6b($this$catch, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  connectWithReconnect$slambda_3.prototype.e7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.a6b(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $cont);
  };
  connectWithReconnect$slambda_3.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_log = LoggingLevel_DEBUG_getInstance();
              if (!this.x6a_1.a5q(tmp0_log)) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              var tmp_0;
              try {
                tmp_0 = 'Reconnection failed';
              } catch ($p) {
                var tmp_1;
                if ($p instanceof Error) {
                  tmp_1 = 'Log message creation failed: ' + $p;
                } else {
                  throw $p;
                }
                tmp_0 = tmp_1;
              }
              var msg = tmp_0;
              this.x6a_1.m5q(tmp0_log, this.z6a_1, msg);
            }
             while (false);
            this.dg_1 = 1;
            suspendResult = this.y6a_1.k1u(new Failed_0(this.z6a_1), this);
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
  connectWithReconnect$slambda_3.prototype.b6b = function ($this$catch, it, completion) {
    var i = new connectWithReconnect$slambda_3(this.x6a_1, completion);
    i.y6a_1 = $this$catch;
    i.z6a_1 = it;
    return i;
  };
  function connectWithReconnect$slambda_4($logger, resultContinuation) {
    var i = new connectWithReconnect$slambda_3($logger, resultContinuation);
    var l = function ($this$catch, it, $cont) {
      return i.a6b($this$catch, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.c6b_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_3.prototype.k1u = function (value, $cont) {
    return this.c6b_1(value, $cont);
  };
  function connectWithReconnect$slambda$slambda($this_flow, $logger, $child, resultContinuation) {
    this.l6b_1 = $this_flow;
    this.m6b_1 = $logger;
    this.n6b_1 = $child;
    CoroutineImpl.call(this, resultContinuation);
  }
  connectWithReconnect$slambda$slambda.prototype.n65 = function (value, $cont) {
    var tmp = this.o65(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  connectWithReconnect$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.n65(p1 instanceof ReconnectState ? p1 : THROW_CCE(), $cont);
  };
  connectWithReconnect$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            suspendResult = this.l6b_1.k1u(this.o6b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p6b_1 = this.o6b_1;
            var tmp_0 = this.p6b_1;
            if (tmp_0 instanceof Connected) {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_log = LoggingLevel_DEBUG_getInstance();
                if (!this.m6b_1.a5q(tmp0_log)) {
                  tmp$ret$0 = Unit_getInstance();
                  break l$ret$1;
                }
                var tmp_1;
                try {
                  tmp_1 = 'Connection established';
                } catch ($p) {
                  var tmp_2;
                  if ($p instanceof Error) {
                    tmp_2 = 'Log message creation failed: ' + $p;
                  } else {
                    throw $p;
                  }
                  tmp_1 = tmp_2;
                }
                var msg = tmp_1;
                this.m6b_1.m5q(tmp0_log, null, msg);
              }
               while (false);
              this.dg_1 = 2;
              suspendResult = get_job(this.o6b_1.x64_1.m1a()).q1b(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this.p6b_1;
              if (tmp_3 instanceof Failed_0) {
                cancel_0(this.n6b_1, 'Reconnect failed', this.o6b_1.w64_1);
                this.dg_1 = 3;
                continue $sm;
              } else {
                if (equals(this.p6b_1, Connecting_getInstance())) {
                  this.dg_1 = 3;
                  continue $sm;
                } else {
                  this.dg_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 2:
            var tmp$ret$2;
            l$ret$3: do {
              var tmp1_log = LoggingLevel_DEBUG_getInstance();
              if (!this.m6b_1.a5q(tmp1_log)) {
                tmp$ret$2 = Unit_getInstance();
                break l$ret$3;
              }
              var tmp_4;
              try {
                tmp_4 = 'Connection closed. Reconnecting...';
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = 'Log message creation failed: ' + $p;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              var msg_0 = tmp_4;
              this.m6b_1.m5q(tmp1_log, null, msg_0);
            }
             while (false);
            this.dg_1 = 3;
            continue $sm;
          case 3:
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
  connectWithReconnect$slambda$slambda.prototype.o65 = function (value, completion) {
    var i = new connectWithReconnect$slambda$slambda(this.l6b_1, this.m6b_1, this.n6b_1, completion);
    i.o6b_1 = value;
    return i;
  };
  function connectWithReconnect$slambda$slambda_0($this_flow, $logger, $child, resultContinuation) {
    var i = new connectWithReconnect$slambda$slambda($this_flow, $logger, $child, resultContinuation);
    var l = function (value, $cont) {
      return i.n65(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function connectWithReconnect$slambda_5($tmp0_transform, $logger, $child, resultContinuation) {
    this.y6b_1 = $tmp0_transform;
    this.z6b_1 = $logger;
    this.a6c_1 = $child;
    CoroutineImpl.call(this, resultContinuation);
  }
  connectWithReconnect$slambda_5.prototype.x69 = function ($this$flow, $cont) {
    var tmp = this.y69($this$flow, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  connectWithReconnect$slambda_5.prototype.kh = function (p1, $cont) {
    return this.x69((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  connectWithReconnect$slambda_5.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = connectWithReconnect$slambda$slambda_0(this.b6c_1, this.z6b_1, this.a6c_1, null);
            suspendResult = this.y6b_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
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
  connectWithReconnect$slambda_5.prototype.y69 = function ($this$flow, completion) {
    var i = new connectWithReconnect$slambda_5(this.y6b_1, this.z6b_1, this.a6c_1, completion);
    i.b6c_1 = $this$flow;
    return i;
  };
  function connectWithReconnect$slambda_6($tmp0_transform, $logger, $child, resultContinuation) {
    var i = new connectWithReconnect$slambda_5($tmp0_transform, $logger, $child, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.x69($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function restarting$slambda($this_restarting, resultContinuation) {
    this.k6c_1 = $this_restarting;
    CoroutineImpl.call(this, resultContinuation);
  }
  restarting$slambda.prototype.x69 = function ($this$flow, $cont) {
    var tmp = this.y69($this$flow, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  restarting$slambda.prototype.kh = function (p1, $cont) {
    return this.x69((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  restarting$slambda.prototype.wg = function () {
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
            suspendResult = emitAll_0(this.l6c_1, this.k6c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  restarting$slambda.prototype.y69 = function ($this$flow, completion) {
    var i = new restarting$slambda(this.k6c_1, completion);
    i.l6c_1 = $this$flow;
    return i;
  };
  function restarting$slambda_0($this_restarting, resultContinuation) {
    var i = new restarting$slambda($this_restarting, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.x69($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $connectWithReconnectCOROUTINE$24(coroutineContext, logger, connect, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o64_1 = coroutineContext;
    this.p64_1 = logger;
    this.q64_1 = connect;
    this.r64_1 = predicate;
  }
  $connectWithReconnectCOROUTINE$24.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.s64_1 = Job(this.o64_1.l3(Key_getInstance()));
            this.t64_1 = this.o64_1.s3(this.s64_1);
            var tmp_0 = this;
            var tmp_1 = flow(connectWithReconnect$slambda_0(this.q64_1, null));
            var tmp_2 = retryWhen(tmp_1, connectWithReconnect$slambda_2(this.p64_1, this.r64_1, null));
            var tmp0_transform = catch_0(tmp_2, connectWithReconnect$slambda_4(this.p64_1, null));
            tmp_0.u64_1 = stateIn(restarting(flow(connectWithReconnect$slambda_6(tmp0_transform, this.p64_1, this.s64_1, null))), CoroutineScope_0(this.t64_1), Companion_getInstance_3().g1y_1, Connecting_getInstance());
            var tmp_3 = this;
            tmp_3.v64_1 = new ReconnectableRSocket(this.t64_1, this.u64_1);
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.v64_1.e68(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.eg_1 = 3;
            this.dg_1 = 4;
            continue $sm;
          case 2:
            this.eg_1 = 3;
            var tmp_4 = this.gg_1;
            if (tmp_4 instanceof Error) {
              var error = this.gg_1;
              this.s64_1.u1b(null, 1, null);
              throw error;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            throw this.gg_1;
          case 4:
            this.eg_1 = 3;
            return this.v64_1;
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
  function isActive$factory() {
    return getPropertyCallableRef('isActive', 1, KProperty1, function (receiver) {
      return get_isActive(receiver);
    }, null);
  }
  function $collectCOROUTINE$31(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u6c_1 = _this__u8e3s4;
    this.v6c_1 = collector;
  }
  $collectCOROUTINE$31.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            var tmp0_check = !this.u6c_1.d5w_1.atomicfu$getAndSet(true);
            if (!tmp0_check) {
              var message = 'RequestFlow can be collected just once';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp_0 = this;
            tmp_0.w6c_1 = requestStrategy(this.h3());
            this.dg_1 = 1;
            suspendResult = this.w6c_1.b5c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x6c_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = this.u6c_1.c5w(this.v6c_1, this.w6c_1, this.x6c_1, this);
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
  function RequestFlow() {
    this.d5w_1 = atomic$boolean$1(false);
  }
  RequestFlow.prototype.e5w = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$31(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RequestFlow.prototype.w1t = function (collector, $cont) {
    return this.e5w(collector, $cont);
  };
  function $emitCOROUTINE$32(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g6d_1 = _this__u8e3s4;
    this.h6d_1 = value;
  }
  $emitCOROUTINE$32.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 6;
            this.dg_1 = 2;
            suspendResult = this.g6d_1.b5s_1.k1u(this.h6d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dg_1 = 3;
            suspendResult = this.g6d_1.c5s_1.c5c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.j6d_1 = suspendResult;
            if (this.j6d_1 > 0) {
              this.dg_1 = 4;
              suspendResult = this.g6d_1.a5s(this.j6d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.dg_1 = 5;
            continue $sm;
          case 5:
            this.i6d_1 = Unit_getInstance();
            this.eg_1 = 7;
            this.dg_1 = 9;
            continue $sm;
          case 6:
            this.eg_1 = 7;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              this.h6d_1.n2g();
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 7:
            throw this.gg_1;
          case 8:
            this.eg_1 = 7;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 9;
            continue $sm;
          case 9:
            return Unit_getInstance();
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
  function RequestFlowCollector(collector, strategy) {
    this.b5s_1 = collector;
    this.c5s_1 = strategy;
  }
  RequestFlowCollector.prototype.d5s = function (value, $cont) {
    var tmp = new $emitCOROUTINE$32(this, value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  RequestFlowCollector.prototype.k1u = function (value, $cont) {
    return this.d5s((!(value == null) ? isInterface(value, Payload) : false) ? value : THROW_CCE(), $cont);
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.k6d_1 = 2147483647;
  }
  Companion_4.prototype.l6d = function () {
    return new StreamId(-1);
  };
  Companion_4.prototype.m6d = function () {
    return new StreamId(0);
  };
  Companion_4.prototype.n6d = function (isServer) {
    return isServer ? this.m6d() : this.l6d();
  };
  var Companion_instance_4;
  function Companion_getInstance_9() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function StreamId(streamId) {
    Companion_getInstance_9();
    this.o6d_1 = atomic$int$1(streamId);
  }
  StreamId.prototype.p6d = function (streamIds) {
    var streamId;
    do {
      var tmp = this.o6d_1.atomicfu$addAndGet(2);
      Companion_getInstance_9();
      streamId = tmp & 2147483647;
    }
     while (streamId === 0 ? true : streamIds.q5o(streamId));
    return streamId;
  };
  function get_0($this, id) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.internal.StreamsStorage.get.<anonymous>' call
    tmp$ret$0 = $this.g5f_1.j(id);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function StreamsStorage(isServer, pool) {
    this.d5f_1 = isServer;
    this.e5f_1 = pool;
    this.f5f_1 = Companion_getInstance_9().n6d(this.d5f_1);
    var tmp = this;
    tmp.g5f_1 = IntMap_init_$Create$(0, 0.0, 3, null);
  }
  StreamsStorage.prototype.b5t = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.internal.StreamsStorage.nextId.<anonymous>' call
    tmp$ret$0 = this.f5f_1.p6d(this.g5f_1);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  StreamsStorage.prototype.c5t = function (id, handler) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.g5f_1.s5o(id, handler);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  StreamsStorage.prototype.r5o = function (id) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.internal.StreamsStorage.remove.<anonymous>' call
    tmp$ret$0 = this.g5f_1.r5o(id);
    tmp$ret$1 = tmp$ret$0;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.n2g();
      tmp$ret$2 = tmp0_safe_receiver;
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  StreamsStorage.prototype.q5o = function (id) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.internal.StreamsStorage.contains.<anonymous>' call
    tmp$ret$0 = this.g5f_1.q5o(id);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  StreamsStorage.prototype.h5f = function (error) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'io.rsocket.kotlin.internal.StreamsStorage.cleanup.<anonymous>' call
    var values = this.g5f_1.t5o();
    this.g5f_1.t9();
    tmp$ret$0 = values;
    tmp$ret$1 = tmp$ret$0;
    var values_0 = tmp$ret$1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = values_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.rsocket.kotlin.internal.StreamsStorage.cleanup.<anonymous>' call
      element.h5f(error);
      element.n2g();
    }
  };
  StreamsStorage.prototype.e5h = function (frame, responder) {
    var id = frame.d5h();
    var tmp0_subject = frame;
    if (tmp0_subject instanceof RequestNFrame) {
      var tmp1_safe_receiver = get_0(this, id);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.w6d(frame.g5l_1);
      }
    } else {
      if (tmp0_subject instanceof CancelFrame) {
        var tmp2_safe_receiver = get_0(this, id);
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.v6d();
        }
      } else {
        if (tmp0_subject instanceof ErrorFrame) {
          var tmp3_safe_receiver = get_0(this, id);
          if (tmp3_safe_receiver == null)
            null;
          else {
            tmp3_safe_receiver.u6d(frame.h5h_1);
          }
        } else {
          if (tmp0_subject instanceof RequestFrame)
            if (frame.d2j().equals(FrameType_Payload_getInstance())) {
              var tmp4_safe_receiver = get_0(this, id);
              var tmp;
              if (tmp4_safe_receiver == null) {
                tmp = null;
              } else {
                tmp4_safe_receiver.t6d(frame);
                tmp = Unit_getInstance();
              }
              var tmp5_elvis_lhs = tmp;
              if (tmp5_elvis_lhs == null) {
                frame.n2g();
              } else {
              }
            } else if (!!(this.d5f_1 ^ !((id % 2 | 0) === 0))) {
              frame.n2g();
            } else {
              var initialRequest = frame.d5l_1;
              var tmp6_subject = frame.d2j();
              var tmp0 = tmp6_subject.y3_1;
              var tmp_0;
              switch (tmp0) {
                case 5:
                  tmp_0 = new ResponderFireAndForgetFrameHandler(id, this, responder, this.e5f_1);
                  break;
                case 6:
                  tmp_0 = new ResponderRequestResponseFrameHandler(id, this, responder, this.e5f_1);
                  break;
                case 7:
                  tmp_0 = new ResponderRequestStreamFrameHandler(id, this, responder, initialRequest, this.e5f_1);
                  break;
                case 8:
                  tmp_0 = new ResponderRequestChannelFrameHandler(id, this, responder, initialRequest, this.e5f_1);
                  break;
                default:
                  throw IllegalStateException_init_$Create$('Wrong request frame type');
              }
              var handler = tmp_0;
              this.c5t(id, handler);
              handler.t6d(frame);
            }
           else {
            frame.n2g();
          }
        }
      }
    }
  };
  function handleNextFragment($this, frame) {
    $this.q6d_1.i33(frame.e5l_1.q5l());
    var meta = frame.e5l_1.a5k();
    if (meta == null)
    ;
    else {
      $this.s6d_1 = true;
      $this.r6d_1.i33(meta);
    }
    if (frame.a5l_1 ? !frame.b5l_1 : false)
      return Unit_getInstance();
    var payload = Payload_0($this.q6d_1.cq(), $this.s6d_1 ? $this.r6d_1.cq() : null);
    $this.s6d_1 = false;
    $this.x6d(payload);
  }
  function FrameHandler(pool) {
    this.q6d_1 = new BytePacketBuilder(pool);
    this.r6d_1 = new BytePacketBuilder(pool);
    this.s6d_1 = false;
  }
  FrameHandler.prototype.t6d = function (frame) {
    if (frame.c5l_1 ? true : frame.y5k_1.g5k_1) {
      handleNextFragment(this, frame);
    }
    if (frame.b5l_1) {
      this.y6d();
    }
  };
  FrameHandler.prototype.n2g = function () {
    this.q6d_1.n2g();
    this.r6d_1.n2g();
  };
  function ResponderFrameHandler(pool) {
    FrameHandler.call(this, pool);
    this.c6e_1 = null;
  }
  ResponderFrameHandler.prototype.x6d = function (payload) {
    if (this.c6e_1 == null)
      this.c6e_1 = this.d6e(payload);
    else {
      this.e6e(payload);
    }
  };
  ResponderFrameHandler.prototype.e6e = function (payload) {
  };
  ResponderFrameHandler.prototype.y6d = function () {
  };
  ResponderFrameHandler.prototype.u6d = function (cause) {
  };
  function RequesterFrameHandler(pool) {
    FrameHandler.call(this, pool);
  }
  RequesterFrameHandler.prototype.v6d = function () {
  };
  RequesterFrameHandler.prototype.w6d = function (n) {
  };
  function RequesterRequestChannelFrameHandler(id, streamsStorage, limiter, sender, channel, pool) {
    RequesterFrameHandler.call(this, pool);
    this.l6e_1 = id;
    this.m6e_1 = streamsStorage;
    this.n6e_1 = limiter;
    this.o6e_1 = sender;
    this.p6e_1 = channel;
  }
  RequesterRequestChannelFrameHandler.prototype.x6d = function (payload) {
    safeTrySend(this.p6e_1, payload);
  };
  RequesterRequestChannelFrameHandler.prototype.y6d = function () {
    this.p6e_1.o1r(null, 1, null);
  };
  RequesterRequestChannelFrameHandler.prototype.u6d = function (cause) {
    this.m6e_1.r5o(this.l6e_1);
    fullClose(this.p6e_1, cause);
    cancel_0(this.o6e_1, 'Request failed', cause);
  };
  RequesterRequestChannelFrameHandler.prototype.v6d = function () {
    cancel$default(this.o6e_1, 'Request cancelled', null, 2, null);
  };
  RequesterRequestChannelFrameHandler.prototype.w6d = function (n) {
    this.n6e_1.y5p(n);
  };
  RequesterRequestChannelFrameHandler.prototype.h5f = function (cause) {
    fullClose(this.p6e_1, cause);
    cancel_0(this.o6e_1, 'Connection closed', cause);
  };
  RequesterRequestChannelFrameHandler.prototype.d5t = function () {
    if (!this.o6e_1.n1a()) {
      this.m6e_1.r5o(this.l6e_1);
    }
  };
  RequesterRequestChannelFrameHandler.prototype.e5t = function (cause) {
    var isCancelled = !(this.m6e_1.r5o(this.l6e_1) == null);
    if (isCancelled) {
      cancel_0(this.o6e_1, 'Request cancelled', cause);
    }
    return isCancelled;
  };
  RequesterRequestChannelFrameHandler.prototype.z5u = function () {
    if (this.p6e_1.k1r()) {
      this.m6e_1.r5o(this.l6e_1);
    }
  };
  RequesterRequestChannelFrameHandler.prototype.a5v = function (cause) {
    if (this.o6e_1.h1b())
      return false;
    var isFailed = !(this.m6e_1.r5o(this.l6e_1) == null);
    if (isFailed) {
      fullClose(this.p6e_1, cause);
    }
    return isFailed;
  };
  function RequesterRequestResponseFrameHandler(id, streamsStorage, deferred, pool) {
    RequesterFrameHandler.call(this, pool);
    this.t6e_1 = id;
    this.u6e_1 = streamsStorage;
    this.v6e_1 = deferred;
  }
  RequesterRequestResponseFrameHandler.prototype.x6d = function (payload) {
    this.v6e_1.u1g(payload);
  };
  RequesterRequestResponseFrameHandler.prototype.y6d = function () {
  };
  RequesterRequestResponseFrameHandler.prototype.u6d = function (cause) {
    this.u6e_1.r5o(this.t6e_1);
    this.v6e_1.w1g(cause);
  };
  RequesterRequestResponseFrameHandler.prototype.h5f = function (cause) {
    cancel_0(this.v6e_1, 'Connection closed', cause);
  };
  RequesterRequestResponseFrameHandler.prototype.d5t = function () {
    this.u6e_1.r5o(this.t6e_1);
  };
  RequesterRequestResponseFrameHandler.prototype.e5t = function (cause) {
    return !(this.u6e_1.r5o(this.t6e_1) == null);
  };
  function RequesterRequestStreamFrameHandler(id, streamsStorage, channel, pool) {
    RequesterFrameHandler.call(this, pool);
    this.z6e_1 = id;
    this.a6f_1 = streamsStorage;
    this.b6f_1 = channel;
  }
  RequesterRequestStreamFrameHandler.prototype.x6d = function (payload) {
    safeTrySend(this.b6f_1, payload);
  };
  RequesterRequestStreamFrameHandler.prototype.y6d = function () {
    this.b6f_1.o1r(null, 1, null);
  };
  RequesterRequestStreamFrameHandler.prototype.u6d = function (cause) {
    this.a6f_1.r5o(this.z6e_1);
    fullClose(this.b6f_1, cause);
  };
  RequesterRequestStreamFrameHandler.prototype.h5f = function (cause) {
    fullClose(this.b6f_1, cause);
  };
  RequesterRequestStreamFrameHandler.prototype.d5t = function () {
    this.a6f_1.r5o(this.z6e_1);
  };
  RequesterRequestStreamFrameHandler.prototype.e5t = function (cause) {
    return !(this.a6f_1.r5o(this.z6e_1) == null);
  };
  function ResponderFireAndForgetFrameHandler(id, streamsStorage, responder, pool) {
    ResponderFrameHandler.call(this, pool);
    this.p61_1 = id;
    this.q61_1 = streamsStorage;
    this.r61_1 = responder;
  }
  ResponderFireAndForgetFrameHandler.prototype.d6e = function (payload) {
    return this.r61_1.c64(payload, this);
  };
  ResponderFireAndForgetFrameHandler.prototype.v6d = function () {
    this.q61_1.r5o(this.p61_1);
    var tmp0_safe_receiver = this.c6e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel$default(tmp0_safe_receiver, 'Request cancelled', null, 2, null);
    }
  };
  ResponderFireAndForgetFrameHandler.prototype.w6d = function (n) {
  };
  ResponderFireAndForgetFrameHandler.prototype.h5f = function (cause) {
  };
  ResponderFireAndForgetFrameHandler.prototype.z5u = function () {
    this.q61_1.r5o(this.p61_1);
  };
  ResponderFireAndForgetFrameHandler.prototype.a5v = function (cause) {
    return false;
  };
  function ResponderRequestChannelFrameHandler(id, streamsStorage, responder, initialRequest, pool) {
    ResponderFrameHandler.call(this, pool);
    this.t5z_1 = id;
    this.u5z_1 = streamsStorage;
    this.v5z_1 = responder;
    this.w5z_1 = new Limiter(initialRequest);
    var tmp = this;
    Factory_getInstance();
    tmp.x5z_1 = SafeChannel(2147483647);
  }
  ResponderRequestChannelFrameHandler.prototype.d6e = function (payload) {
    return this.v5z_1.f64(payload, this.t5z_1, this);
  };
  ResponderRequestChannelFrameHandler.prototype.e6e = function (payload) {
    safeTrySend(this.x5z_1, payload);
  };
  ResponderRequestChannelFrameHandler.prototype.y6d = function () {
    this.x5z_1.o1r(null, 1, null);
  };
  ResponderRequestChannelFrameHandler.prototype.u6d = function (cause) {
    this.u5z_1.r5o(this.t5z_1);
    fullClose(this.x5z_1, cause);
  };
  ResponderRequestChannelFrameHandler.prototype.v6d = function () {
    this.u5z_1.r5o(this.t5z_1);
    var cancelError = CancellationException_init_$Create$('Request cancelled');
    fullClose(this.x5z_1, cancelError);
    var tmp0_safe_receiver = this.c6e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1b(cancelError);
    }
  };
  ResponderRequestChannelFrameHandler.prototype.w6d = function (n) {
    this.w5z_1.y5p(n);
  };
  ResponderRequestChannelFrameHandler.prototype.h5f = function (cause) {
    fullClose(this.x5z_1, cause);
  };
  ResponderRequestChannelFrameHandler.prototype.z5u = function () {
    if (this.x5z_1.k1r()) {
      this.u5z_1.r5o(this.t5z_1);
    }
  };
  ResponderRequestChannelFrameHandler.prototype.a5v = function (cause) {
    var isFailed = !(this.u5z_1.r5o(this.t5z_1) == null);
    if (isFailed) {
      fullClose(this.x5z_1, cause);
    }
    return isFailed;
  };
  ResponderRequestChannelFrameHandler.prototype.d5t = function () {
    var job = ensureNotNull(this.c6e_1);
    if (!job.n1a()) {
      this.u5z_1.r5o(this.t5z_1);
    }
  };
  ResponderRequestChannelFrameHandler.prototype.e5t = function (cause) {
    var job = ensureNotNull(this.c6e_1);
    if (!this.u5z_1.q5o(this.t5z_1) ? job.n1a() : false) {
      cancel_0(job, 'Request handling failed [Error frame]', cause);
    }
    return !job.h1b();
  };
  function ResponderRequestResponseFrameHandler(id, streamsStorage, responder, pool) {
    ResponderFrameHandler.call(this, pool);
    this.g6f_1 = id;
    this.h6f_1 = streamsStorage;
    this.i6f_1 = responder;
  }
  ResponderRequestResponseFrameHandler.prototype.d6e = function (payload) {
    return this.i6f_1.d64(payload, this.g6f_1, this);
  };
  ResponderRequestResponseFrameHandler.prototype.v6d = function () {
    this.h6f_1.r5o(this.g6f_1);
    var tmp0_safe_receiver = this.c6e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel$default(tmp0_safe_receiver, 'Request cancelled', null, 2, null);
    }
  };
  ResponderRequestResponseFrameHandler.prototype.w6d = function (n) {
  };
  ResponderRequestResponseFrameHandler.prototype.h5f = function (cause) {
  };
  ResponderRequestResponseFrameHandler.prototype.z5u = function () {
    this.h6f_1.r5o(this.g6f_1);
  };
  ResponderRequestResponseFrameHandler.prototype.a5v = function (cause) {
    return !(this.h6f_1.r5o(this.g6f_1) == null);
  };
  function ResponderRequestStreamFrameHandler(id, streamsStorage, responder, initialRequest, pool) {
    ResponderFrameHandler.call(this, pool);
    this.f63_1 = id;
    this.g63_1 = streamsStorage;
    this.h63_1 = responder;
    this.i63_1 = new Limiter(initialRequest);
  }
  ResponderRequestStreamFrameHandler.prototype.d6e = function (payload) {
    return this.h63_1.e64(payload, this.f63_1, this);
  };
  ResponderRequestStreamFrameHandler.prototype.v6d = function () {
    this.g63_1.r5o(this.f63_1);
    var tmp0_safe_receiver = this.c6e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel$default(tmp0_safe_receiver, 'Request cancelled', null, 2, null);
    }
  };
  ResponderRequestStreamFrameHandler.prototype.w6d = function (n) {
    this.i63_1.y5p(n);
  };
  ResponderRequestStreamFrameHandler.prototype.h5f = function (cause) {
  };
  ResponderRequestStreamFrameHandler.prototype.z5u = function () {
    this.g63_1.r5o(this.f63_1);
  };
  ResponderRequestStreamFrameHandler.prototype.a5v = function (cause) {
    return !(this.g63_1.r5o(this.f63_1) == null);
  };
  function get_DefaultKeepAlive() {
    init_properties_KeepAlive_kt_9yy7h0();
    return DefaultKeepAlive;
  }
  var DefaultKeepAlive;
  function KeepAlive(intervalMillis, maxLifetimeMillis) {
    this.m5l_1 = intervalMillis;
    this.n5l_1 = maxLifetimeMillis;
  }
  var properties_initialized_KeepAlive_kt_6u4nbc;
  function init_properties_KeepAlive_kt_9yy7h0() {
    if (properties_initialized_KeepAlive_kt_6u4nbc) {
    } else {
      properties_initialized_KeepAlive_kt_6u4nbc = true;
      DefaultKeepAlive = new KeepAlive(20000, 90000);
    }
  }
  var LoggingLevel_TRACE_instance;
  var LoggingLevel_DEBUG_instance;
  var LoggingLevel_INFO_instance;
  var LoggingLevel_WARN_instance;
  var LoggingLevel_ERROR_instance;
  var LoggingLevel_entriesInitialized;
  function LoggingLevel_initEntries() {
    if (LoggingLevel_entriesInitialized)
      return Unit_getInstance();
    LoggingLevel_entriesInitialized = true;
    LoggingLevel_TRACE_instance = new LoggingLevel('TRACE', 0);
    LoggingLevel_DEBUG_instance = new LoggingLevel('DEBUG', 1);
    LoggingLevel_INFO_instance = new LoggingLevel('INFO', 2);
    LoggingLevel_WARN_instance = new LoggingLevel('WARN', 3);
    LoggingLevel_ERROR_instance = new LoggingLevel('ERROR', 4);
  }
  function LoggingLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LoggingLevel_DEBUG_getInstance() {
    LoggingLevel_initEntries();
    return LoggingLevel_DEBUG_instance;
  }
  function LoggingLevel_INFO_getInstance() {
    LoggingLevel_initEntries();
    return LoggingLevel_INFO_instance;
  }
  function metadata(_this__u8e3s4, metadata) {
    return _this__u8e3s4.j6f(toPacket$default(metadata, null, 1, null));
  }
  function toPacket(_this__u8e3s4, pool) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.rsocket.kotlin.frame.io.buildPacket' call
      var builder = new BytePacketBuilder(pool);
      try {
        // Inline function 'io.rsocket.kotlin.metadata.toPacket.<anonymous>' call
        _this__u8e3s4.s5j(builder);
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
    return tmp$ret$0;
  }
  function toPacket$default(_this__u8e3s4, pool, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      pool = Companion_getInstance().x2v_1;
    return toPacket(_this__u8e3s4, pool);
  }
  function Reader() {
    Reader_instance = this;
  }
  var Reader_instance;
  function Reader_getInstance() {
    if (Reader_instance == null)
      new Reader();
    return Reader_instance;
  }
  function RoutingMetadata(tags) {
    Reader_getInstance();
    this.k6f_1 = tags;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.k6f_1;
    var tmp0_iterator = tmp0_forEach.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.rsocket.kotlin.metadata.RoutingMetadata.<anonymous>' call
      // Inline function 'kotlin.require' call
      var containsArg = element.length;
      var tmp0_require = 1 <= containsArg ? containsArg <= 255 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'io.rsocket.kotlin.metadata.RoutingMetadata.<anonymous>.<anonymous>' call
        tmp$ret$0 = "Tag length must be in range 1..255 but was '" + element.length + "'";
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  RoutingMetadata.prototype.s5j = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.k6f_1;
    var tmp0_iterator = tmp0_forEach.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.rsocket.kotlin.metadata.RoutingMetadata.writeSelf.<anonymous>' call
      var bytes = encodeToByteArray(element);
      _this__u8e3s4.k35(toByte(bytes.length));
      writeFully$default(_this__u8e3s4, bytes, 0, 0, 6, null);
    }
  };
  RoutingMetadata.prototype.n2g = function () {
    return Unit_getInstance();
  };
  function RoutingMetadata_0(tags) {
    return new RoutingMetadata(toList_0(tags));
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_0().o36_1;
    tmp.p5i_1 = Payload$default(tmp_0, null, 2, null);
  }
  var Companion_instance_5;
  function Companion_getInstance_10() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Payload() {
  }
  function DefaultPayload(data, metadata) {
    this.l6f_1 = data;
    this.m6f_1 = metadata;
  }
  DefaultPayload.prototype.q5l = function () {
    return this.l6f_1;
  };
  DefaultPayload.prototype.a5k = function () {
    return this.m6f_1;
  };
  function Payload_0(data, metadata) {
    return new DefaultPayload(data, metadata);
  }
  function Payload$default(data, metadata, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      metadata = null;
    return Payload_0(data, metadata);
  }
  function PayloadFromBuilder() {
    this.n6f_1 = false;
    this.o6f_1 = false;
    this.p6f_1 = Companion_getInstance_0().o36_1;
    this.q6f_1 = null;
  }
  PayloadFromBuilder.prototype.q5l = function () {
    return this.p6f_1;
  };
  PayloadFromBuilder.prototype.a5k = function () {
    return this.q6f_1;
  };
  PayloadFromBuilder.prototype.r6f = function (value) {
    if (this.n6f_1) {
      value.n2g();
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Data already provided');
    }
    this.p6f_1 = value;
    this.n6f_1 = true;
  };
  PayloadFromBuilder.prototype.j6f = function (value) {
    if (this.o6f_1) {
      value.n2g();
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Metadata already provided');
    }
    this.q6f_1 = value;
    this.o6f_1 = true;
  };
  PayloadFromBuilder.prototype.cq = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.n6f_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.rsocket.kotlin.payload.PayloadFromBuilder.build.<anonymous>' call
      tmp$ret$0 = 'Data is required';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this;
  };
  function data(_this__u8e3s4, value) {
    var tmp$ret$1;
    // Inline function 'io.rsocket.kotlin.payload.data' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.rsocket.kotlin.payload.data.<anonymous>' call
        writeText$default(builder, value, 0, 0, null, 14, null);
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
    _this__u8e3s4.r6f(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  }
  function get_DefaultPayloadMimeType() {
    init_properties_PayloadMimeType_kt_w4shhk();
    return DefaultPayloadMimeType;
  }
  var DefaultPayloadMimeType;
  function PayloadMimeType(data, metadata) {
    this.o5l_1 = data;
    this.p5l_1 = metadata;
    requireAscii(this.o5l_1);
    requireAscii(this.p5l_1);
  }
  function PayloadMimeType_0(data, metadata) {
    init_properties_PayloadMimeType_kt_w4shhk();
    return new PayloadMimeType(data.p5j(), metadata.p5j());
  }
  var properties_initialized_PayloadMimeType_kt_uj5238;
  function init_properties_PayloadMimeType_kt_w4shhk() {
    if (properties_initialized_PayloadMimeType_kt_uj5238) {
    } else {
      properties_initialized_PayloadMimeType_kt_uj5238 = true;
      DefaultPayloadMimeType = PayloadMimeType_0(WellKnownMimeType_ApplicationOctetStream_getInstance(), WellKnownMimeType_ApplicationOctetStream_getInstance());
    }
  }
  function ClientTransport() {
  }
  function currentMillis() {
    return numberToLong(Date.now());
  }
  function get_DefaultLoggerFactory() {
    return Companion_getInstance_11();
  }
  function ConsoleLogger_init_$Init$(tag, minLevel, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      minLevel = LoggingLevel_INFO_getInstance();
    ConsoleLogger.call($this, tag, minLevel);
    return $this;
  }
  function ConsoleLogger_init_$Create$(tag, minLevel, $mask0, $marker) {
    return ConsoleLogger_init_$Init$(tag, minLevel, $mask0, $marker, Object.create(ConsoleLogger.prototype));
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.b5e = function (tag) {
    return ConsoleLogger_init_$Create$(tag, null, 2, null);
  };
  var Companion_instance_6;
  function Companion_getInstance_11() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ConsoleLogger(tag, minLevel) {
    Companion_getInstance_11();
    this.s6f_1 = tag;
    this.t6f_1 = minLevel;
  }
  ConsoleLogger.prototype.a5q = function (level) {
    return level.z3(this.t6f_1) >= 0;
  };
  ConsoleLogger.prototype.m5q = function (level, throwable, message) {
    var meta = '[' + level + '] (' + this.s6f_1 + ')';
    var tmp0_subject = level;
    var tmp0 = tmp0_subject.y3_1;
    switch (tmp0) {
      case 4:
        var tmp1_safe_receiver = throwable;
        var tmp;
        if (tmp1_safe_receiver == null) {
          tmp = null;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          console.error(meta, message, 'Error:', tmp1_safe_receiver);
          tmp$ret$0 = Unit_getInstance();
          tmp = Unit_getInstance();
        }

        var tmp2_elvis_lhs = tmp;
        if (tmp2_elvis_lhs == null) {
          console.error(meta, message);
        } else {
        }

        break;
      case 3:
        var tmp3_safe_receiver = throwable;
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          console.warn(meta, message, 'Error:', tmp3_safe_receiver);
          tmp$ret$1 = Unit_getInstance();
          tmp_0 = Unit_getInstance();
        }

        var tmp4_elvis_lhs = tmp_0;
        if (tmp4_elvis_lhs == null) {
          console.warn(meta, message);
        } else {
        }

        break;
      case 2:
        var tmp5_safe_receiver = throwable;
        var tmp_1;
        if (tmp5_safe_receiver == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          console.info(meta, message, 'Error:', tmp5_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = Unit_getInstance();
        }

        var tmp6_elvis_lhs = tmp_1;
        if (tmp6_elvis_lhs == null) {
          console.info(meta, message);
        } else {
        }

        break;
      case 1:
        var tmp7_safe_receiver = throwable;
        var tmp_2;
        if (tmp7_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          console.log(meta, message, 'Error:', tmp7_safe_receiver);
          tmp$ret$3 = Unit_getInstance();
          tmp_2 = Unit_getInstance();
        }

        var tmp8_elvis_lhs = tmp_2;
        if (tmp8_elvis_lhs == null) {
          console.log(meta, message);
        } else {
        }

        break;
      case 0:
        var tmp9_safe_receiver = throwable;
        var tmp_3;
        if (tmp9_safe_receiver == null) {
          tmp_3 = null;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          console.log(meta, message, 'Error:', tmp9_safe_receiver);
          tmp$ret$4 = Unit_getInstance();
          tmp_3 = Unit_getInstance();
        }

        var tmp10_elvis_lhs = tmp_3;
        if (tmp10_elvis_lhs == null) {
          console.log(meta, message);
        } else {
        }

        break;
    }
  };
  //region block: post-declaration
  PrefetchStrategy.prototype.o = get_key;
  PrefetchStrategy.prototype.l3 = get;
  PrefetchStrategy.prototype.r3 = fold;
  PrefetchStrategy.prototype.q3 = minusKey;
  PrefetchStrategy.prototype.s3 = plus;
  EmptyRSocket.prototype.a5b = metadataPush;
  EmptyRSocket.prototype.b5b = fireAndForget;
  EmptyRSocket.prototype.c5b = requestResponse;
  EmptyRSocket.prototype.d5b = requestStream;
  EmptyRSocket.prototype.e5b = requestChannel;
  DefaultPayload.prototype.c37 = copy;
  DefaultPayload.prototype.n2g = close;
  PayloadFromBuilder.prototype.n2g = close;
  PayloadFromBuilder.prototype.c37 = copy;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = RSocketConnector$default;
  _.$_$.b = RSocketConnector_0;
  _.$_$.c = RoutingMetadata_0;
  _.$_$.d = metadata;
  _.$_$.e = PayloadFromBuilder;
  _.$_$.f = PayloadMimeType;
  _.$_$.g = Payload;
  _.$_$.h = data;
  _.$_$.i = ClientTransport;
  _.$_$.j = Connection;
  //endregion
  return _;
}));

//# sourceMappingURL=rsocket-kotlin-rsocket-core-js-ir.js.map

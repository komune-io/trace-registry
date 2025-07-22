(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './ktor-ktor-events-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-websockets-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-events-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-events-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-events-js-ir' was not found. Please, check whether 'ktor-ktor-events-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-websockets-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-websockets-js-ir' was not found. Please, check whether 'ktor-ktor-websockets-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    root['ktor-ktor-client-core-js-ir'] = factory(typeof this['ktor-ktor-client-core-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['ktor-ktor-events-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-websockets-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.j;
  var isObject = kotlin_kotlin.$_$.da;
  var toString = kotlin_kotlin.$_$.qa;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.o;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.f1;
  var isInterface = kotlin_kotlin.$_$.ba;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.u1;
  var objectMeta = kotlin_kotlin.$_$.la;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var equals = kotlin_kotlin.$_$.m9;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ee;
  var IllegalStateException = kotlin_kotlin.$_$.wc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.e2;
  var captureStack = kotlin_kotlin.$_$.e9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.pd;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.x;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var trimMargin$default = kotlin_kotlin.$_$.y;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.t1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Long = kotlin_kotlin.$_$.xc;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.f2;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.v1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.q;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.be;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var writer = kotlin_io_ktor_ktor_io.$_$.x1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.r;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.u;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.o;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.p;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.n;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.y4;
  var arrayOf = kotlin_kotlin.$_$.rd;
  var createKType = kotlin_kotlin.$_$.c;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.n;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.s;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m2;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var emptySet = kotlin_kotlin.$_$.t6;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.u;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.c;
  var lazy = kotlin_kotlin.$_$.ae;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var KProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p9;
  var setOf = kotlin_kotlin.$_$.t7;
  var get = kotlin_kotlin.$_$.v8;
  var fold = kotlin_kotlin.$_$.u8;
  var minusKey = kotlin_kotlin.$_$.w8;
  var plus = kotlin_kotlin.$_$.y8;
  var Element = kotlin_kotlin.$_$.x8;
  var setOf_0 = kotlin_kotlin.$_$.u7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.k;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.z;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.v;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var toLong = kotlin_kotlin.$_$.oa;
  var toLong_0 = kotlin_kotlin.$_$.ec;
  var contentType = kotlin_io_ktor_ktor_http.$_$.a1;
  var isByteArray = kotlin_kotlin.$_$.v9;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b5;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var CancellationException = kotlin_kotlin.$_$.k8;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.w1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClass = kotlin_kotlin.$_$.f;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.m;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.g1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.e1;
  var Unit = kotlin_kotlin.$_$.od;
  var toString_0 = kotlin_kotlin.$_$.fe;
  var toInt = kotlin_kotlin.$_$.cc;
  var reversed = kotlin_kotlin.$_$.s7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.l1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.r;
  var charset = kotlin_io_ktor_ktor_http.$_$.y;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.i1;
  var compareValues = kotlin_kotlin.$_$.j8;
  var get_name = kotlin_io_ktor_ktor_io.$_$.y;
  var toList = kotlin_kotlin.$_$.z7;
  var sortedWith = kotlin_kotlin.$_$.w7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var roundToInt = kotlin_kotlin.$_$.ra;
  var firstOrNull = kotlin_kotlin.$_$.w6;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.x;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.i;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.w;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.g1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.c1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.v;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d2;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var get_lastIndex = kotlin_kotlin.$_$.d7;
  var downTo = kotlin_kotlin.$_$.ya;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.d1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var IOException = kotlin_io_ktor_ktor_io.$_$.r1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.o;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.m;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var encodeBase64 = kotlin_io_ktor_ktor_utils.$_$.w;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var emptyList = kotlin_kotlin.$_$.r6;
  var addAll = kotlin_kotlin.$_$.w5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.n;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.i;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.m;
  var ByteChannel$default = kotlin_io_ktor_ktor_io.$_$.l;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.d;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.f1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.v;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.b1;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.l;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.d;
  var hashCode = kotlin_kotlin.$_$.r9;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.s1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.h;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var intercepted = kotlin_kotlin.$_$.n8;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var extendThrowable = kotlin_kotlin.$_$.n9;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.c5;
  var createFailure = kotlin_kotlin.$_$.td;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var toTypedArray = kotlin_kotlin.$_$.g8;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.n;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.j;
  var readShort = kotlin_io_ktor_ktor_io.$_$.n1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var send = kotlin_io_ktor_ktor_websockets.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpClient$slambda, 'HttpClient$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpClient$slambda_1, 'HttpClient$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$0, '$executeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClient, 'HttpClient', classMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  setMetadataFor(HttpClientConfig, 'HttpClientConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($bodyNullableCOROUTINE$1, '$bodyNullableCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientCall, 'HttpClientCall', classMeta, undefined, [CoroutineScope], undefined, undefined, [0, 1]);
  setMetadataFor(DoubleReceiveException, 'DoubleReceiveException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(NoTransformationFoundException, 'NoTransformationFoundException', classMeta, UnsupportedOperationException, undefined, undefined, undefined, []);
  setMetadataFor($bodyCOROUTINE$3, '$bodyCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(SavedHttpCall, 'SavedHttpCall', classMeta, HttpClientCall, undefined, undefined, undefined, [0, 1]);
  function get_coroutineContext() {
    return this.a49().m1a();
  }
  setMetadataFor(HttpRequest_0, 'HttpRequest', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpRequest, 'SavedHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpResponse, 'SavedHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($saveCOROUTINE$4, '$saveCOROUTINE$4', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(UnsupportedContentTypeException, 'UnsupportedContentTypeException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ObservableContent$content$slambda, 'ObservableContent$content$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ObservableContent, 'ObservableContent', classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngine$install$slambda, 'HttpClientEngine$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpClientEngine$executeWithinCallContext$slambda, 'HttpClientEngine$executeWithinCallContext$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($executeWithinCallContextCOROUTINE$5, '$executeWithinCallContextCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().v46_1;
    client.e44_1.l3g(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  setMetadataFor(HttpClientEngine, 'HttpClientEngine', interfaceMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  setMetadataFor(ClientEngineClosedException, 'ClientEngineClosedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngineBase, 'HttpClientEngineBase', classMeta, undefined, [HttpClientEngine], undefined, undefined, [1]);
  setMetadataFor(HttpClientEngineConfig, 'HttpClientEngineConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KtorCallContextElement, 'KtorCallContextElement', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(HttpClientPlugin, 'HttpClientPlugin', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(BodyProgress$handle$slambda, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(BodyProgress$handle$slambda_1, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(BodyProgress, 'BodyProgress', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(RedirectResponseException, 'RedirectResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ClientRequestException, 'ClientRequestException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ServerResponseException, 'ServerResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(addDefaultResponseValidation$lambda$slambda, 'addDefaultResponseValidation$lambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$1$content$1, undefined, classMeta, ByteArrayContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$1$content$2, undefined, classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$slambda, 'defaultTransformers$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(defaultTransformers$slambda$slambda, 'defaultTransformers$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$slambda_1, 'defaultTransformers$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_1, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_3, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor($validateResponseCOROUTINE$6, '$validateResponseCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($processExceptionCOROUTINE$7, '$processExceptionCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpCallValidator, 'HttpCallValidator', classMeta, undefined, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequest$1, undefined, classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpPlainText$Plugin$install$slambda, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda_1, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config_0, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_0, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpPlainText, 'HttpPlainText', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRedirect$Plugin$install$slambda, 'HttpRedirect$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($handleCallCOROUTINE$8, '$handleCallCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_1, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_1, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, [4]);
  setMetadataFor(HttpRedirect, 'HttpRedirect', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle$Plugin$install$slambda, 'HttpRequestLifecycle$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Plugin_2, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle, 'HttpRequestLifecycle', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSend$Plugin$install$slambda, 'HttpSend$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$9, '$executeCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_2, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_3, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(Sender, 'Sender', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(InterceptedSender, 'InterceptedSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(DefaultSender, 'DefaultSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(HttpSend, 'HttpSend', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SendCountExceedException, 'SendCountExceedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpTimeout$Plugin$install$slambda$slambda, 'HttpTimeout$Plugin$install$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpTimeout$Plugin$install$slambda, 'HttpTimeout$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpTimeoutCapabilityConfiguration, 'HttpTimeoutCapabilityConfiguration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_4, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpTimeout, 'HttpTimeout', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestTimeoutException, 'HttpRequestTimeoutException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(DelegatedResponse, 'DelegatedResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor(DefaultClientWebSocketSession, 'DefaultClientWebSocketSession', classMeta, undefined, [WebSocketSession, DefaultWebSocketSession], undefined, undefined, [0, 1]);
  setMetadataFor(DelegatingClientWebSocketSession, 'DelegatingClientWebSocketSession', classMeta, undefined, [WebSocketSession], undefined, undefined, [0, 1]);
  setMetadataFor(ClientUpgradeContent, 'ClientUpgradeContent', classMeta, NoContent, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketContent, 'WebSocketContent', classMeta, ClientUpgradeContent, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketCapability, 'WebSocketCapability', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketException, 'WebSocketException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(WebSockets$Plugin$install$slambda, 'WebSockets$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(WebSockets$Plugin$install$slambda_1, 'WebSockets$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config_3, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_5, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(WebSockets, 'WebSockets', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketExtensionsCapability, 'WebSocketExtensionsCapability', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(webSocketSession$slambda, 'webSocketSession$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultHttpRequest, 'DefaultHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestBuilder, 'HttpRequestBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestData, 'HttpRequestData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponseData, 'HttpResponseData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Phases, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestPipeline, 'HttpRequestPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_0, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSendPipeline, 'HttpSendPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(DefaultHttpResponse, 'DefaultHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($bodyAsTextCOROUTINE$13, '$bodyAsTextCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Phases_1, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponsePipeline, 'HttpResponsePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_2, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpReceivePipeline, 'HttpReceivePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpResponseContainer, 'HttpResponseContainer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement$execute$slambda, 'HttpStatement$execute$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($executeCOROUTINE$14, '$executeCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeUnsafeCOROUTINE$15, '$executeUnsafeCOROUTINE$15', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($cleanupCOROUTINE$16, '$cleanupCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement, 'HttpStatement', classMeta, undefined, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(observable$slambda, 'observable$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpResponseReceiveFail, 'HttpResponseReceiveFail', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyContent, 'EmptyContent', objectMeta, NoContent, undefined, undefined, undefined, []);
  setMetadataFor(Js, 'Js', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsClientEngine$createWebSocket$headers_capturingHack$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($executeCOROUTINE$17, '$executeCOROUTINE$17', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeWebSocketRequestCOROUTINE$18, '$executeWebSocketRequestCOROUTINE$18', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(JsClientEngine, 'JsClientEngine', classMeta, HttpClientEngineBase, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(JsError, 'JsError', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(toRaw$slambda, 'toRaw$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($toRawCOROUTINE$19, '$toRawCOROUTINE$19', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(channelFromStream$slambda, 'channelFromStream$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(readBodyNode$slambda, 'readBodyNode$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(JsWebSocketSession$slambda, 'JsWebSocketSession$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(JsWebSocketSession, 'JsWebSocketSession', classMeta, undefined, [DefaultWebSocketSession], undefined, undefined, [0, 1]);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.y43_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel$default(this$0.w43_1, null, 1, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.s44_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.w44 = function ($this$intercept, call, $cont) {
    var tmp = this.x44($this$intercept, call, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpClient$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            var tmp_0 = this.u44_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.u44_1) + '(' + getKClassFromExpression(this.u44_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.dg_1 = 1;
            suspendResult = this.s44_1.f44_1.g3g(Unit_getInstance(), this.u44_1.d45(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v44_1 = suspendResult;
            this.u44_1.e45(this.v44_1);
            this.dg_1 = 2;
            suspendResult = this.t44_1.l3f(this.u44_1, this);
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
  HttpClient$slambda.prototype.x44 = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.s44_1, completion);
    i.t44_1 = $this$intercept;
    i.u44_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.w44($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_getInstance();
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.n45_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.q45 = function ($this$intercept, it, $cont) {
    var tmp = this.r45($this$intercept, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpClient$slambda_1.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.o45_1.m3f(this);
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
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var cause = this.gg_1;
              this.n45_1.i44_1.y3s(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.o45_1.h3g_1.d45(), cause));
              throw cause;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            throw this.gg_1;
          case 4:
            this.eg_1 = 3;
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
  HttpClient$slambda_1.prototype.r45 = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.n45_1, completion);
    i.o45_1 = $this$intercept;
    i.p45_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q45($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a46_1 = _this__u8e3s4;
    this.b46_1 = builder;
  }
  $executeCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.a46_1.i44_1.y3s(get_HttpRequestCreated(), this.b46_1);
            this.dg_1 = 1;
            suspendResult = this.a46_1.c44_1.g3g(this.b46_1, this.b46_1.f46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    this.w43_1 = engine;
    this.x43_1 = userConfig;
    this.y43_1 = false;
    this.z43_1 = atomic$boolean$1(false);
    this.a44_1 = Job(this.w43_1.m1a().l3(Key_getInstance()));
    this.b44_1 = this.w43_1.m1a().s3(this.a44_1);
    this.c44_1 = new HttpRequestPipeline(this.x43_1.p46_1);
    this.d44_1 = new HttpResponsePipeline(this.x43_1.p46_1);
    this.e44_1 = new HttpSendPipeline(this.x43_1.p46_1);
    this.f44_1 = new HttpReceivePipeline(this.x43_1.p46_1);
    this.g44_1 = Attributes(true);
    this.h44_1 = this.w43_1.q46();
    this.i44_1 = new Events();
    this.j44_1 = new HttpClientConfig();
    if (this.y43_1) {
      this.a44_1.n1b(HttpClient$lambda(this));
    }
    this.w43_1.r46(this);
    var tmp = Phases_getInstance_0().w46_1;
    this.e44_1.l3g(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.x43_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = Plugin_getInstance_2();
    this.j44_1.x46(tmp_0, null, 2, null);
    var tmp_1 = Plugin_getInstance();
    this.j44_1.x46(tmp_1, null, 2, null);
    if (tmp0_with.n46_1) {
      this.j44_1.y46('DefaultTransformers', HttpClient$lambda_0);
    }
    var tmp_2 = Plugin_getInstance_3();
    this.j44_1.x46(tmp_2, null, 2, null);
    var tmp_3 = Companion_getInstance_10();
    this.j44_1.x46(tmp_3, null, 2, null);
    if (tmp0_with.m46_1) {
      var tmp_4 = Plugin_getInstance_1();
      this.j44_1.x46(tmp_4, null, 2, null);
    }
    var tmp0_this = this;
    tmp0_this.j44_1.z46(tmp0_with);
    if (tmp0_with.n46_1) {
      var tmp_5 = Plugin_getInstance_0();
      this.j44_1.x46(tmp_5, null, 2, null);
    }
    addDefaultResponseValidation(this.j44_1);
    this.j44_1.r46(this);
    tmp$ret$0 = Unit_getInstance();
    var tmp_6 = Phases_getInstance_1().a47_1;
    this.d44_1.l3g(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.m1a = function () {
    return this.b44_1;
  };
  HttpClient.prototype.f47 = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpClient.prototype.n2g = function () {
    var success = this.z43_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.g44_1.x3b(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = installedFeatures.d3c();
    var tmp0_iterator = tmp0_forEach.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.client.HttpClient.close.<anonymous>' call
      var plugin = installedFeatures.x3b(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, Closeable)) {
        plugin.n2g();
      }
    }
    this.a44_1.x1g();
    if (this.y43_1) {
      this.w43_1.n2g();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.w43_1 + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var engine = engineFactory.g47(config.l46_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp = ensureNotNull(client.b44_1.l3(Key_getInstance()));
    tmp.n1b(HttpClient$lambda_1(engine));
    return client;
  }
  function HttpClient$lambda_1($engine) {
    return function (it) {
      $engine.n2g();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return Attributes(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.g44_1.c3c(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.j44_1.j46_1.y1($plugin.o()));
      var pluginData = $plugin.h47(config);
      $plugin.i47(pluginData, scope);
      attributes.a3c($plugin.o(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.i46_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.j46_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.k46_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.l46_1 = HttpClientConfig$engineConfig$lambda;
    this.m46_1 = true;
    this.n46_1 = true;
    this.o46_1 = false;
    this.p46_1 = PlatformUtils_getInstance().g3h_1;
  }
  HttpClientConfig.prototype.j47 = function (plugin, configure) {
    var previousConfigBlock = this.j46_1.y1(plugin.o());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.j46_1;
    var tmp1_set = plugin.o();
    tmp0_set.x2(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    if (this.i46_1.s1(plugin.o()))
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.i46_1;
    var tmp3_set = plugin.o();
    tmp2_set.x2(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
  };
  HttpClientConfig.prototype.x46 = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda;
    }
    return this.j47(plugin, configure);
  };
  HttpClientConfig.prototype.y46 = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.k46_1;
    tmp0_set.x2(key, block);
  };
  HttpClientConfig.prototype.r46 = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.i46_1.a2();
    var tmp0_iterator = tmp0_forEach.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
      tmp$ret$0 = client;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.k46_1.a2();
    var tmp0_iterator_0 = tmp1_forEach.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
      tmp$ret$1 = client;
    }
  };
  HttpClientConfig.prototype.z46 = function (other) {
    this.m46_1 = other.m46_1;
    this.n46_1 = other.n46_1;
    this.o46_1 = other.o46_1;
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.i46_1;
    var tmp1_plusAssign = other.i46_1;
    tmp0_plusAssign.ua(tmp1_plusAssign);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.j46_1;
    var tmp3_plusAssign = other.j46_1;
    tmp2_plusAssign.ua(tmp3_plusAssign);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp2_this.k46_1;
    var tmp5_plusAssign = other.k46_1;
    tmp4_plusAssign.ua(tmp5_plusAssign);
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.a45_1 = new DefaultHttpRequest($this, requestData);
    $this.b45_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.o47_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.r47().a3c(Companion_getInstance_8().s47_1, responseData.o47_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.s47_1 = new AttributeKey('CustomResponse');
  }
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b48_1 = _this__u8e3s4;
    this.c48_1 = info;
  }
  $bodyNullableCOROUTINE$1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 10;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.eg_1 = 9;
            this.eg_1 = 8;
            if (instanceOf(this.b48_1.d45(), this.c48_1.y3g_1)) {
              this.d48_1 = this.b48_1.d45();
              this.eg_1 = 10;
              this.dg_1 = 7;
              continue $sm;
            } else {
              this.dg_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (!this.b48_1.i48() ? !this.b48_1.z44_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.b48_1);
            }

            this.e48_1 = this.b48_1.r47().y3b(Companion_getInstance_8().s47_1);
            if (this.e48_1 == null) {
              this.dg_1 = 4;
              suspendResult = this.b48_1.j48(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f48_1 = this.e48_1;
              this.dg_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.f48_1 = suspendResult;
            this.dg_1 = 5;
            continue $sm;
          case 5:
            this.g48_1 = this.f48_1;
            this.h48_1 = new HttpResponseContainer(this.c48_1, this.g48_1);
            this.dg_1 = 6;
            suspendResult = this.b48_1.y44_1.d44_1.g3g(this.b48_1, this.h48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.l48_1;
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.c48_1.y3g_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.c48_1.y3g_1;
              throw new NoTransformationFoundException(this.b48_1.d45(), from, to);
            }

            this.d48_1 = result;
            this.eg_1 = 10;
            this.dg_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.d48_1;
            complete(this.b48_1.d45());
            ;
            return tmp_2;
          case 8:
            this.eg_1 = 9;
            var tmp_3 = this.gg_1;
            if (tmp_3 instanceof Error) {
              var cause = this.gg_1;
              var tmp_4 = this;
              cancel(this.b48_1.d45(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.gg_1;
            }

            break;
          case 9:
            this.eg_1 = 10;
            var t = this.gg_1;
            complete(this.b48_1.d45());
            ;
            throw t;
          case 10:
            throw this.gg_1;
          case 11:
            complete(this.b48_1.d45());
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.eg_1 === 10) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_8();
    this.y44_1 = client;
    this.z44_1 = atomic$boolean$1(false);
    this.c45_1 = false;
  }
  HttpClientCall.prototype.m1a = function () {
    return this.d45().m1a();
  };
  HttpClientCall.prototype.r47 = function () {
    return this.m48().r47();
  };
  HttpClientCall.prototype.m48 = function () {
    var tmp = this.a45_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.d45 = function () {
    var tmp = this.b45_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.i48 = function () {
    return this.c45_1;
  };
  HttpClientCall.prototype.j48 = function ($cont) {
    return this.d45().h12();
  };
  HttpClientCall.prototype.n48 = function (info, $cont) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.m48().q2m() + ', ' + this.d45().o2s() + ']';
  };
  HttpClientCall.prototype.e45 = function (response) {
    this.b45_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.o48_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.z = function () {
    return this.o48_1;
  };
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.z();
    }
  });
  function NoTransformationFoundException$message$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var key = _name_for_destructuring_parameter_0__wldtmu.v2();
    var value = _name_for_destructuring_parameter_0__wldtmu.w2();
    return key + ': ' + value + '\n';
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).q2m();
    var tmp_1 = response.o2s();
    var tmp_2 = flattenEntries(response.l3n());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda, 31, null) + '\n    ';
    tmp.p48_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.z = function () {
    return this.p48_1;
  };
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.z();
    }
  });
  function body(_this__u8e3s4, typeInfo, $cont) {
    var tmp = new $bodyCOROUTINE$3(_this__u8e3s4, typeInfo, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function $bodyCOROUTINE$3(_this__u8e3s4, typeInfo, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y48_1 = _this__u8e3s4;
    this.z48_1 = typeInfo;
  }
  $bodyCOROUTINE$3.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.y48_1.a49().n48(this.z48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$4(_this__u8e3s4, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.p49_1 = responseBody;
    this.a45_1 = new SavedHttpRequest(this, request);
    this.b45_1 = new SavedHttpResponse(this, this.p49_1, response);
    this.q49_1 = true;
  }
  SavedHttpCall.prototype.j48 = function ($cont) {
    return ByteReadChannel_0(this.p49_1);
  };
  SavedHttpCall.prototype.i48 = function () {
    return this.q49_1;
  };
  function SavedHttpRequest(call, origin) {
    this.r49_1 = call;
    this.s49_1 = origin;
  }
  SavedHttpRequest.prototype.a49 = function () {
    return this.r49_1;
  };
  SavedHttpRequest.prototype.r47 = function () {
    return this.s49_1.r47();
  };
  SavedHttpRequest.prototype.m1a = function () {
    return this.s49_1.m1a();
  };
  SavedHttpRequest.prototype.l3n = function () {
    return this.s49_1.l3n();
  };
  SavedHttpRequest.prototype.t49 = function () {
    return this.s49_1.t49();
  };
  SavedHttpRequest.prototype.q2m = function () {
    return this.s49_1.q2m();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.u49_1 = call;
    var tmp = this;
    tmp.v49_1 = Job$default(null, 1, null);
    this.w49_1 = origin.o2s();
    this.x49_1 = origin.t2q();
    this.y49_1 = origin.d4a();
    this.z49_1 = origin.e4a();
    this.a4a_1 = origin.l3n();
    this.b4a_1 = origin.m1a().s3(this.v49_1);
    this.c4a_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.a49 = function () {
    return this.u49_1;
  };
  SavedHttpResponse.prototype.o2s = function () {
    return this.w49_1;
  };
  SavedHttpResponse.prototype.t2q = function () {
    return this.x49_1;
  };
  SavedHttpResponse.prototype.d4a = function () {
    return this.y49_1;
  };
  SavedHttpResponse.prototype.e4a = function () {
    return this.z49_1;
  };
  SavedHttpResponse.prototype.l3n = function () {
    return this.a4a_1;
  };
  SavedHttpResponse.prototype.m1a = function () {
    return this.b4a_1;
  };
  SavedHttpResponse.prototype.h12 = function () {
    return this.c4a_1;
  };
  function $saveCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j49_1 = _this__u8e3s4;
  }
  $saveCOROUTINE$4.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = this.j49_1.d45().h12();
            suspendResult = tmp_0.b33(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this.j49_1.y44_1, this.j49_1.m48(), this.j49_1.d45(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.n4a_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.p4a = function ($this$writer, $cont) {
    var tmp = this.q4a($this$writer, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ObservableContent$content$slambda.prototype.kh = function (p1, $cont) {
    return this.p4a((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.n4a_1.q3s(this.o4a_1.k33(), this);
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
  ObservableContent$content$slambda.prototype.q4a = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.n4a_1, completion);
    i.o4a_1 = $this$writer;
    return i;
  };
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p4a($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.s4a_1 = callContext;
    this.t4a_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.l3s());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().t34();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.o3s();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.s4a_1, true, ObservableContent$content$slambda_0(delegate, null)).k33();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.u4a_1 = tmp_0;
    this.v4a_1 = delegate;
  }
  ObservableContent.prototype.j3s = function () {
    return this.v4a_1.j3s();
  };
  ObservableContent.prototype.k3s = function () {
    return this.v4a_1.k3s();
  };
  ObservableContent.prototype.l3n = function () {
    return this.v4a_1.l3n();
  };
  ObservableContent.prototype.o3s = function () {
    return observable(this.u4a_1, this.s4a_1, this.k3s(), this.t4a_1);
  };
  function get_CALL_COROUTINE() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.i44_1.y3s(get_HttpResponseCancelled(), $response);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.m1a().l3(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1a();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$5($this, requestData, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.o4b_1.g();
    while (tmp0_iterator.h()) {
      var requestedExtension = tmp0_iterator.i();
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.p4b().b1(requestedExtension);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        tmp$ret$0 = "Engine doesn't support " + requestedExtension;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.y4b_1 = $client;
    this.z4b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.w44 = function ($this$intercept, content, $cont) {
    var tmp = this.x44($this$intercept, content, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpClientEngine$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.h4c(this.a4c_1.h3g_1);
            ;
            var tmp0_subject = this.b4c_1;
            if (tmp0_subject == null) {
              tmp0_apply.f46_1 = NullBody_getInstance();
              var tmp_1 = JsType_getInstance();
              var tmp_2 = PrimitiveClasses_getInstance().od();
              var tmp_3;
              try {
                tmp_3 = createKType(PrimitiveClasses_getInstance().od(), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0_apply.i4c(typeInfoImpl(tmp_1, tmp_2, tmp_3));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.f46_1 = this.b4c_1;
                tmp0_apply.i4c(null);
              } else {
                tmp0_apply.f46_1 = this.b4c_1;
                var tmp_5 = JsType_getInstance();
                var tmp_6 = PrimitiveClasses_getInstance().od();
                var tmp_7;
                try {
                  tmp_7 = createKType(PrimitiveClasses_getInstance().od(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    tmp_8 = null;
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0_apply.i4c(typeInfoImpl(tmp_5, tmp_6, tmp_7));
              }
            }

            tmp_0.c4c_1 = tmp0_apply;
            this.y4b_1.i44_1.y3s(get_HttpRequestIsReadyForSending(), this.c4c_1);
            var tmp_9 = this;
            var tmp1_apply = this.c4c_1.cq();
            tmp1_apply.n4b_1.a3c(get_CLIENT_CONFIG(), this.y4b_1.j44_1);
            ;
            tmp_9.d4c_1 = tmp1_apply;
            validateHeaders(this.d4c_1);
            checkExtensions(this.z4b_1, this.d4c_1);
            this.dg_1 = 1;
            suspendResult = executeWithinCallContext(this.z4b_1, this.d4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e4c_1 = suspendResult;
            this.f4c_1 = HttpClientCall_init_$Create$(this.y4b_1, this.d4c_1, this.e4c_1);
            this.g4c_1 = this.f4c_1.d45();
            this.y4b_1.i44_1.y3s(get_HttpResponseReceived(), this.g4c_1);
            var tmp_10 = get_job(this.g4c_1.m1a());
            tmp_10.n1b(HttpClientEngine$install$slambda$lambda(this.y4b_1, this.g4c_1));
            ;
            this.dg_1 = 2;
            suspendResult = this.a4c_1.l3f(this.f4c_1, this);
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
  HttpClientEngine$install$slambda.prototype.x44 = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.y4b_1, this.z4b_1, completion);
    i.a4c_1 = $this$intercept;
    i.b4c_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.w44($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.r4c_1 = this$0;
    this.s4c_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.u4c = function ($this$async, $cont) {
    var tmp = this.b22($this$async, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.kh = function (p1, $cont) {
    return this.u4c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            if (_get_closed__iwkfs1(this.r4c_1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.dg_1 = 1;
            suspendResult = this.r4c_1.v4c(this.s4c_1, this);
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
  HttpClientEngine$executeWithinCallContext$slambda.prototype.b22 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.r4c_1, this.s4c_1, completion);
    i.t4c_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.u4c($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$5(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e4b_1 = _this__u8e3s4;
    this.f4b_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$5.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = createCallContext(this.e4b_1, this.f4b_1.m4b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g4b_1 = suspendResult;
            this.h4b_1 = this.g4b_1.s3(new KtorCallContextElement(this.g4b_1));
            this.dg_1 = 2;
            suspendResult = async$default(this.e4b_1, this.h4b_1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this.e4b_1, this.f4b_1, null), 2, null).e1d(this);
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.k4b_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = requestHeaders.l3d();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      tmp$ret$0 = HttpHeaders_getInstance().d3n_1.b1(element);
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !unsafeRequestHeaders.k();
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.m1a().s3(callJob).s3(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.h3();
      var tmp0_elvis_lhs = tmp$ret$0.l3(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.p1b(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.n1b(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.t1b(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.i1e();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function init_properties_HttpClientEngine_kt_umcrvf() {
    if (properties_initialized_HttpClientEngine_kt_5uiebb) {
    } else {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    ClientEngineClosedException.call($this, cause);
    return $this;
  }
  function ClientEngineClosedException_init_$Create$(cause, $mask0, $marker) {
    var tmp = ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, Object.create(ClientEngineClosedException.prototype));
    captureStack(tmp, ClientEngineClosedException_init_$Create$);
    return tmp;
  }
  function ClientEngineClosedException(cause) {
    IllegalStateException_init_$Init$_0('Client already closed', this);
    this.w4c_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.a1 = function () {
    return this.w4c_1;
  };
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.a1();
    }
  });
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).s3(this$0.x4c()).s3(new CoroutineName(this$0.y4c_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.x4c());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.y4c_1 = engineName;
    this.z4c_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.a4d_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.m1a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = coroutineContext$factory();
    tmp$ret$0 = this.a4d_1.p();
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.n2g = function () {
    if (!this.z4c_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.m1a().l3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.x1g();
    requestJob.n1b(HttpClientEngineBase$close$lambda(this));
  };
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher) {
        _this__u8e3s4.n2g();
      } else {
        if (isInterface(tmp0_subject, Closeable)) {
          _this__u8e3s4.n2g();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
      } else {
        throw $p;
      }
    }
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.m1a();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_4());
    }
  }
  function HttpClientEngineConfig() {
    this.b4d_1 = 4;
    this.c4d_1 = false;
    this.d4d_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    init_properties_Utils_kt_jyhfj1();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    init_properties_Utils_kt_jyhfj1();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_9();
    this.e4d_1 = callContext;
  }
  KtorCallContextElement.prototype.o = function () {
    return Companion_getInstance_9();
  };
  function callContext($cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.h3();
    return ensureNotNull(tmp$ret$0.l3(Companion_getInstance_9())).e4d_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    init_properties_Utils_kt_jyhfj1();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.n3d(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.g12(HttpHeaders_getInstance().g3m_1) == null ? content.l3n().g12(HttpHeaders_getInstance().g3m_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().g3m_1, get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.j3s();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.l3n().g12(HttpHeaders_getInstance().a3k_1) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.g12(HttpHeaders_getInstance().a3k_1) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.k3s();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.l3n().g12(HttpHeaders_getInstance().x3j_1) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.g12(HttpHeaders_getInstance().x3j_1) : tmp5_elvis_lhs;
    var tmp6_safe_receiver = type;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = block(HttpHeaders_getInstance().a3k_1, tmp6_safe_receiver);
    }
    var tmp7_safe_receiver = length;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = block(HttpHeaders_getInstance().x3j_1, tmp7_safe_receiver);
    }
  }
  function needUserAgent() {
    init_properties_Utils_kt_jyhfj1();
    return !PlatformUtils_getInstance().c3h_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.v3d($requestHeaders);
      $this$buildHeaders.v3d($content.l3n());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().x3j_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().a3k_1 === key) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (get_DATE_HEADERS().b1(key)) {
        var tmp0_iterator = values.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'io.ktor.client.engine.mergeHeaders.<anonymous>.<anonymous>' call
          $block(key, element);
        }
        tmp_1 = Unit_getInstance();
      } else {
        tmp_1 = $block(key, joinToString$default(values, ',', null, null, 0, null, null, 62, null));
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function init_properties_Utils_kt_jyhfj1() {
    if (properties_initialized_Utils_kt_xvi83j) {
    } else {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'Ktor client';
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().d3k_1, HttpHeaders_getInstance().j3k_1, HttpHeaders_getInstance().v3k_1, HttpHeaders_getInstance().q3k_1, HttpHeaders_getInstance().u3k_1]);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.c44_1.i3g(Phases_getInstance().i4d_1, observableContentPhase);
    scope.c44_1.l3g(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().m4d_1;
    scope.f44_1.l3g(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.n4d_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.o = function () {
    return this.n4d_1;
  };
  Plugin.prototype.o4d = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.h47 = function (block) {
    return this.o4d(block);
  };
  Plugin.prototype.p4d = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.i47 = function (plugin, scope) {
    return this.p4d(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda.prototype.w44 = function ($this$intercept, content, $cont) {
    var tmp = this.x44($this$intercept, content, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  BodyProgress$handle$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.y4d_1.h3g_1.h46_1.y3b(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.a4e_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.z4d_1;
            tmp_2.b4e_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.y4d_1.h3g_1.g46_1, this.a4e_1);
            this.dg_1 = 1;
            suspendResult = this.y4d_1.l3f(this.b4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  BodyProgress$handle$slambda.prototype.x44 = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.y4d_1 = $this$intercept;
    i.z4d_1 = content;
    return i;
  };
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.w44($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.o4e = function ($this$intercept, response, $cont) {
    var tmp = this.p4e($this$intercept, response, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  BodyProgress$handle$slambda_1.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.o4e(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.l4e_1.a49().m48().r47().y3b(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.m4e_1 = tmp_1;
            this.n4e_1 = withObservableDownload(this.l4e_1, this.m4e_1);
            this.dg_1 = 1;
            suspendResult = this.k4e_1.l3f(this.n4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  BodyProgress$handle$slambda_1.prototype.p4e = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.k4e_1 = $this$intercept;
    i.l4e_1 = response;
    return i;
  };
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.o4e($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.h12(), _this__u8e3s4.m1a(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4, observableByteChannel);
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function init_properties_BodyProgress_kt_2jnetn() {
    if (properties_initialized_BodyProgress_kt_pmfrhr) {
    } else {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.r4e_1 = 'Unhandled redirect: ' + response.a49().m48().t49().u3n_1 + ' ' + response.a49().m48().q2m() + '. ' + ('Status: ' + response.o2s() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.z = function () {
    return this.r4e_1;
  };
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.z();
    }
  });
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.t4e_1 = 'Client request(' + response.a49().m48().t49().u3n_1 + ' ' + response.a49().m48().q2m() + ') ' + ('invalid: ' + response.o2s() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.z = function () {
    return this.t4e_1;
  };
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.z();
    }
  });
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.v4e_1 = 'Server error(' + response.a49().m48().t49().u3n_1 + ' ' + response.a49().m48().q2m() + ': ' + ('' + response.o2s() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.z = function () {
    return this.v4e_1;
  };
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.z();
    }
  });
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.w4e_1 = response;
    captureStack(this, ResponseException);
  }
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.n4f = function (response, $cont) {
    var tmp = this.o4f(response, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.kh = function (p1, $cont) {
    return this.n4f(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.g4f_1 = this.f4f_1.a49().r47().x3b(get_ExpectSuccessAttributeKey());
            if (!this.g4f_1) {
              return Unit_getInstance();
            }

            this.h4f_1 = this.f4f_1.o2s().f3q_1;
            this.i4f_1 = this.f4f_1.a49();
            if (this.h4f_1 < 300 ? true : this.i4f_1.r47().z3b(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.dg_1 = 1;
            suspendResult = save(this.i4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j4f_1 = suspendResult;
            this.j4f_1.r47().a3c(get_ValidateMark(), Unit_getInstance());
            ;
            this.k4f_1 = this.j4f_1;
            this.l4f_1 = this.k4f_1.d45();
            this.eg_1 = 3;
            this.dg_1 = 2;
            suspendResult = bodyAsText$default(this.l4f_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m4f_1 = suspendResult;
            this.eg_1 = 5;
            this.dg_1 = 4;
            continue $sm;
          case 3:
            this.eg_1 = 5;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _ = this.gg_1;
              var tmp_1 = this;
              tmp_1.m4f_1 = '<body failed decoding>';
              this.dg_1 = 4;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            this.eg_1 = 5;
            var exceptionResponseText = this.m4f_1;
            var tmp0_subject = this.h4f_1;
            if (300 <= tmp0_subject ? tmp0_subject <= 399 : false)
              throw new RedirectResponseException(this.l4f_1, exceptionResponseText);
            else if (400 <= tmp0_subject ? tmp0_subject <= 499 : false)
              throw new ClientRequestException(this.l4f_1, exceptionResponseText);
            else if (500 <= tmp0_subject ? tmp0_subject <= 599 : false)
              throw new ServerResponseException(this.l4f_1, exceptionResponseText);
            else
              throw new ResponseException(this.l4f_1, exceptionResponseText);
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
  addDefaultResponseValidation$lambda$slambda.prototype.o4f = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.f4f_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.n4f(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.r4f_1 = $this_addDefaultResponseValidation.o46_1;
      $this$HttpResponseValidator.s4f(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
    }
  }
  function defaultTransformers(_this__u8e3s4) {
    var tmp = Phases_getInstance().i4d_1;
    _this__u8e3s4.c44_1.l3g(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().b47_1;
    _this__u8e3s4.d44_1.l3g(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.w4f_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.u4f_1 = tmp0_elvis_lhs == null ? Application_getInstance().y3h_1 : tmp0_elvis_lhs;
    this.v4f_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.j3s = function () {
    return this.u4f_1;
  };
  defaultTransformers$1$content$1.prototype.k3s = function () {
    return this.v4f_1;
  };
  defaultTransformers$1$content$1.prototype.l3s = function () {
    return this.w4f_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.a4g_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.h3g_1.e46_1.g12(HttpHeaders_getInstance().x3j_1);
    tmp.y4f_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.z4f_1 = tmp0_elvis_lhs == null ? Application_getInstance().y3h_1 : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.k3s = function () {
    return this.y4f_1;
  };
  defaultTransformers$1$content$2.prototype.j3s = function () {
    return this.z4f_1;
  };
  defaultTransformers$1$content$2.prototype.o3s = function () {
    return this.a4g_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.w44 = function ($this$intercept, body, $cont) {
    var tmp = this.x44($this$intercept, body, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  defaultTransformers$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (this.j4g_1.h3g_1.e46_1.g12(HttpHeaders_getInstance().i3j_1) == null) {
              this.j4g_1.h3g_1.e46_1.u3d(HttpHeaders_getInstance().i3j_1, '*/*');
            }

            this.l4g_1 = contentType(this.j4g_1.h3g_1);
            var tmp_0 = this;
            var tmp0_subject = this.k4g_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.l4g_1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().p3i_1 : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.k4g_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.l4g_1, this.k4g_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.j4g_1, this.l4g_1, this.k4g_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.k4g_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.l4g_1, this.j4g_1.h3g_1, this.k4g_1);
                  }
                }
              }
            }

            tmp_0.m4g_1 = tmp_1;
            var tmp2_safe_receiver = this.m4g_1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j3s()) == null)) {
              this.j4g_1.h3g_1.e46_1.w3d(HttpHeaders_getInstance().a3k_1);
              this.dg_1 = 1;
              suspendResult = this.j4g_1.l3f(this.m4g_1, this);
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
            ;
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
  defaultTransformers$slambda.prototype.x44 = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.j4g_1 = $this$intercept;
    i.k4g_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.w44($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.v4g_1 = $body;
    this.w4g_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.p4a = function ($this$writer, $cont) {
    var tmp = this.q4a($this$writer, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  defaultTransformers$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.p4a((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.wg = function () {
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
            this.eg_1 = 3;
            this.dg_1 = 2;
            var tmp_0 = this.x4g_1.k33();
            Companion_getInstance_0();
            suspendResult = copyTo(this.v4g_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.y4g_1 = Unit_getInstance();
            this.eg_1 = 5;
            this.dg_1 = 6;
            continue $sm;
          case 3:
            this.eg_1 = 4;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.gg_1;
              var tmp_3 = this;
              cancel_0(this.w4g_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.gg_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.gg_1;
                var tmp_5 = this;
                cancel(this.w4g_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.gg_1;
              }
            }

            break;
          case 4:
            this.eg_1 = 5;
            var t = this.gg_1;
            complete(this.w4g_1);
            ;
            throw t;
          case 5:
            throw this.gg_1;
          case 6:
            complete(this.w4g_1);
            ;
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
  defaultTransformers$slambda$slambda.prototype.q4a = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.v4g_1, this.w4g_1, completion);
    i.x4g_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p4a($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.x1g();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.q45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.r45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  defaultTransformers$slambda_1.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 11;
            this.j4h_1 = this.i4h_1.v2();
            this.k4h_1 = this.i4h_1.w2();
            var tmp_0 = this.k4h_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.l4h_1 = this.h4h_1.h3g_1.d45();
            this.m4h_1 = this.j4h_1.y3g_1;
            if (this.m4h_1.equals(getKClass(Unit))) {
              cancel_1(this.k4h_1);
              this.dg_1 = 9;
              suspendResult = this.h4h_1.l3f(new HttpResponseContainer(this.j4h_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.m4h_1.equals(PrimitiveClasses_getInstance().ud())) {
                this.dg_1 = 7;
                suspendResult = this.k4h_1.b33(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.m4h_1.equals(getKClass(ByteReadPacket)) ? true : this.m4h_1.equals(getKClass(Input))) {
                  this.dg_1 = 5;
                  suspendResult = this.k4h_1.b33(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.m4h_1.equals(PrimitiveClasses_getInstance().ce())) {
                    this.dg_1 = 3;
                    suspendResult = toByteArray(this.k4h_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.m4h_1.equals(getKClass(ByteReadChannel))) {
                      this.n4h_1 = Job(this.l4h_1.m1a().l3(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this.l4h_1.m1a();
                      var tmp1_also = writer$default(this.h4h_1, tmp_2, false, defaultTransformers$slambda$slambda_0(this.k4h_1, this.l4h_1, null), 2, null);
                      tmp1_also.n1b(defaultTransformers$slambda$lambda(this.n4h_1));
                      tmp_1.o4h_1 = tmp1_also.k33();
                      this.dg_1 = 2;
                      suspendResult = this.h4h_1.l3f(new HttpResponseContainer(this.j4h_1, this.o4h_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.m4h_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.k4h_1);
                        this.dg_1 = 1;
                        suspendResult = this.h4h_1.l3f(new HttpResponseContainer(this.j4h_1, this.l4h_1.o2s()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.dg_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            ;
            this.dg_1 = 10;
            continue $sm;
          case 2:
            ;
            this.dg_1 = 10;
            continue $sm;
          case 3:
            this.p4h_1 = suspendResult;
            this.q4h_1 = contentLength(this.l4h_1);
            this.r4h_1 = !PlatformUtils_getInstance().c3h_1 ? this.l4h_1.l3n().g12(HttpHeaders_getInstance().v3j_1) == null : false;
            if ((this.r4h_1 ? !(this.q4h_1 == null) : false) ? this.q4h_1.x(new Long(0, 0)) > 0 : false) {
              var tmp0_check = this.p4h_1.length === this.q4h_1.e4();
              if (!tmp0_check) {
                var message = 'Expected ' + toString_0(this.q4h_1) + ', actual ' + this.p4h_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.dg_1 = 4;
            suspendResult = this.h4h_1.l3f(new HttpResponseContainer(this.j4h_1, this.p4h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            this.dg_1 = 10;
            continue $sm;
          case 5:
            this.s4h_1 = suspendResult;
            this.t4h_1 = new HttpResponseContainer(this.j4h_1, this.s4h_1);
            this.dg_1 = 6;
            suspendResult = this.h4h_1.l3f(this.t4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            ;
            this.dg_1 = 10;
            continue $sm;
          case 7:
            this.u4h_1 = suspendResult;
            var tmp_3 = this;
            tmp_3.v4h_1 = this.u4h_1.n37(0, 0, 3, null);
            this.w4h_1 = toInt(this.v4h_1);
            this.x4h_1 = new HttpResponseContainer(this.j4h_1, this.w4h_1);
            this.dg_1 = 8;
            suspendResult = this.h4h_1.l3f(this.x4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            ;
            this.dg_1 = 10;
            continue $sm;
          case 9:
            ;
            this.dg_1 = 10;
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
  defaultTransformers$slambda_1.prototype.r45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.h4h_1 = $this$intercept;
    i.i4h_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.q45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.a4i_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.j4i_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.w44 = function ($this$intercept, it, $cont) {
    var tmp = this.x44($this$intercept, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpCallValidator$Companion$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.eg_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.k4i_1.h3g_1.h46_1.c3c(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.j4i_1));
            ;
            this.dg_1 = 1;
            suspendResult = this.k4i_1.l3f(this.l4i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.eg_1 = 5;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.eg_1 = 5;
            return Unit_getInstance();
          case 3:
            this.eg_1 = 5;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              this.m4i_1 = this.gg_1;
              this.n4i_1 = unwrapCancellationException(this.m4i_1);
              this.dg_1 = 4;
              suspendResult = processException(this.j4i_1, this.n4i_1, HttpRequest(this.k4i_1.h3g_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            throw this.n4i_1;
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
  HttpCallValidator$Companion$install$slambda.prototype.x44 = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.j4i_1, completion);
    i.k4i_1 = $this$intercept;
    i.l4i_1 = it;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.w44($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.w4i_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.q45 = function ($this$intercept, container, $cont) {
    var tmp = this.r45($this$intercept, container, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = this.x4i_1.l3f(this.y4i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.eg_1 = 5;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.eg_1 = 5;
            return Unit_getInstance();
          case 3:
            this.eg_1 = 5;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              this.z4i_1 = this.gg_1;
              this.a4j_1 = unwrapCancellationException(this.z4i_1);
              this.dg_1 = 4;
              suspendResult = processException(this.w4i_1, this.a4j_1, this.x4i_1.h3g_1.m48(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            throw this.a4j_1;
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
  HttpCallValidator$Companion$install$slambda_1.prototype.r45 = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.w4i_1, completion);
    i.x4i_1 = $this$intercept;
    i.y4i_1 = container;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.q45($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.j4j_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.n4j = function ($this$intercept, request, $cont) {
    var tmp = this.o4j($this$intercept, request, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.e7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.n4j(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = this.k4j_1.f47(this.l4j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m4j_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = validateResponse(this.j4j_1, this.m4j_1.d45(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.m4j_1;
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
  HttpCallValidator$Companion$install$slambda_3.prototype.o4j = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.j4j_1, completion);
    i.k4j_1 = $this$intercept;
    i.l4j_1 = request;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.n4j($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$6($this, response, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$7($this, cause, request, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.p4f_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.q4f_1 = tmp$ret$1;
    this.r4f_1 = true;
  }
  Config.prototype.s4f = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.p4f_1;
    tmp0_plusAssign.a(block);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.r4k_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.o = function () {
    return this.r4k_1;
  };
  Companion_1.prototype.s4k = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.p4f_1), reversed(config.q4f_1), config.r4f_1);
  };
  Companion_1.prototype.h47 = function (block) {
    return this.s4k(block);
  };
  Companion_1.prototype.t4k = function (plugin_0, scope) {
    var tmp = Phases_getInstance().f4d_1;
    scope.c44_1.l3g(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.d44_1.k3g(Phases_getInstance_1().a47_1, BeforeReceive);
    scope.d44_1.l3g(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_3());
    tmp_0.w4k(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.i47 = function (plugin, scope) {
    return this.t4k(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$6(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x4j_1 = _this__u8e3s4;
    this.y4j_1 = response;
  }
  $validateResponseCOROUTINE$6.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            var tmp_0 = this;
            tmp_0.z4j_1 = this.x4j_1.y4h_1;
            this.a4k_1 = this.z4j_1.g();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (!this.a4k_1.h()) {
              this.dg_1 = 3;
              continue $sm;
            }

            this.b4k_1 = this.a4k_1.i();
            this.dg_1 = 2;
            suspendResult = this.b4k_1(this.y4j_1, this);
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
  function $processExceptionCOROUTINE$7(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k4k_1 = _this__u8e3s4;
    this.l4k_1 = cause;
    this.m4k_1 = request;
  }
  $processExceptionCOROUTINE$7.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            var tmp_0 = this;
            tmp_0.n4k_1 = this.k4k_1.z4h_1;
            this.o4k_1 = this.n4k_1.g();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (!this.o4k_1.h()) {
              this.dg_1 = 5;
              continue $sm;
            }

            this.p4k_1 = this.o4k_1.i();
            this.q4k_1 = this.p4k_1;
            var tmp_1 = this.q4k_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.dg_1 = 3;
              suspendResult = this.p4k_1.y4k_1(this.l4k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.q4k_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.dg_1 = 2;
                suspendResult = this.p4k_1.x4k_1(this.l4k_1, this.m4k_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 4;
                continue $sm;
              }
            }

            break;
          case 2:
            this.dg_1 = 4;
            continue $sm;
          case 3:
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.dg_1 = 1;
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
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_10();
    this.y4h_1 = responseValidators;
    this.z4h_1 = callExceptionHandlers;
    this.a4i_1 = expectSuccess;
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.j47(Companion_getInstance_10(), block);
  }
  function HttpRequest$1($builder) {
    this.d4l_1 = $builder;
    this.z4k_1 = $builder.d46_1;
    this.a4l_1 = $builder.c46_1.cq();
    this.b4l_1 = $builder.h46_1;
    this.c4l_1 = $builder.e46_1.cq();
  }
  HttpRequest$1.prototype.a49 = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.t49 = function () {
    return this.z4k_1;
  };
  HttpRequest$1.prototype.q2m = function () {
    return this.a4l_1;
  };
  HttpRequest$1.prototype.r47 = function () {
    return this.b4l_1;
  };
  HttpRequest$1.prototype.l3n = function () {
    return this.c4l_1;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    init_properties_HttpClientPlugin_kt_hdphw();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.o() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.g44_1.y3b(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y3b(plugin.o());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.m4l_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.w44 = function ($this$intercept, content, $cont) {
    var tmp = this.x44($this$intercept, content, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpPlainText$Plugin$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.m4l_1.t4l(this.n4l_1.h3g_1);
            var tmp_0 = this.o4l_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.p4l_1 = contentType(this.n4l_1.h3g_1);
            if (!(this.p4l_1 == null) ? !(this.p4l_1.z3i_1 === Text_getInstance().p3i_1.z3i_1) : false) {
              return Unit_getInstance();
            }

            this.dg_1 = 1;
            suspendResult = this.n4l_1.l3f(wrapContent(this.m4l_1, this.o4l_1, this.p4l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  HttpPlainText$Plugin$install$slambda.prototype.x44 = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.m4l_1, completion);
    i.n4l_1 = $this$intercept;
    i.o4l_1 = content;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.w44($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.c4m_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.q45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.r45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.f4m_1 = this.e4m_1.v2();
            this.g4m_1 = this.e4m_1.w2();
            var tmp_0;
            if (!this.f4m_1.y3g_1.equals(PrimitiveClasses_getInstance().yd())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.g4m_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.dg_1 = 1;
            suspendResult = this.g4m_1.b33(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h4m_1 = suspendResult;
            this.i4m_1 = this.c4m_1.j4m(this.d4m_1.h3g_1, this.h4m_1);
            this.dg_1 = 2;
            suspendResult = this.d4m_1.l3f(new HttpResponseContainer(this.f4m_1, this.i4m_1), this);
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
  HttpPlainText$Plugin$install$slambda_1.prototype.r45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.c4m_1, completion);
    i.d4m_1 = $this$intercept;
    i.e4m_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.q45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.k4m_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.l4m_1 = tmp$ret$1;
    this.m4m_1 = null;
    this.n4m_1 = Charsets_getInstance().v37_1;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.o4m_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.o = function () {
    return this.o4m_1;
  };
  Plugin_0.prototype.s4k = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_0();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return new HttpPlainText(config.k4m_1, config.l4m_1, config.m4m_1, config.n4m_1);
  };
  Plugin_0.prototype.h47 = function (block) {
    return this.s4k(block);
  };
  Plugin_0.prototype.p4m = function (plugin, scope) {
    var tmp = Phases_getInstance().i4d_1;
    scope.c44_1.l3g(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().c47_1;
    scope.d44_1.l3g(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.i47 = function (plugin, scope) {
    return this.p4m(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().p3i_1 : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.r4l_1 : tmp2_elvis_lhs;
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.q4m_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.re = function (a, b) {
    return this.q4m_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.re(a, b);
  };
  function HttpPlainText$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = b.u2_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = a.u2_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText$lambda_0(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = get_name(a);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = get_name(b);
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_0();
    this.q4l_1 = responseCharsetFallback;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = toList(charsetQuality);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    var withQuality = tmp$ret$1;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$2;
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      tmp$ret$2 = !charsetQuality.s1(element);
      if (tmp$ret$2) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$3 = tmp0_filterTo;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_sortedBy = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$6 = sortedWith(tmp1_sortedBy, tmp$ret$5);
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$12;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$7 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$7) {
        tmp0_apply.q6(',');
      }
      tmp0_apply.q6(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.g();
    while (tmp0_iterator_1.h()) {
      var element_1 = tmp0_iterator_1.i();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.v2();
      var quality = element_1.w2();
      var tmp$ret$8;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$8 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$8) {
        tmp0_apply.q6(',');
      }
      // Inline function 'kotlin.check' call
      var containsArg = quality;
      var tmp0_check = 0.0 <= containsArg ? containsArg <= 1.0 : false;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$9;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$9 = 'Check failed.';
        var message = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp$ret$10;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = 100 * quality;
      tmp$ret$10 = roundToInt(tmp1_roundToInt);
      var truncatedQuality = tmp$ret$10 / 100.0;
      tmp0_apply.q6(get_name(charset) + ';q=' + truncatedQuality);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$11 = charSequenceLength(tmp0_apply) === 0;
    if (tmp$ret$11) {
      tmp0_apply.q6(get_name(this.q4l_1));
    }
    tmp$ret$12 = tmp0_apply;
    tmp$ret$13 = tmp$ret$12.toString();
    tmp_1.s4l_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t2_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.r4l_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().v37_1 : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.j4m = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.d45());
    var actualCharset = tmp0_elvis_lhs == null ? this.q4l_1 : tmp0_elvis_lhs;
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.t4l = function (context) {
    if (!(context.e46_1.g12(HttpHeaders_getInstance().j3j_1) == null))
      return Unit_getInstance();
    context.e46_1.s3d(HttpHeaders_getInstance().j3j_1, this.s4l_1);
  };
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$8($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.s4n_1 = $plugin;
    this.t4n_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.n4j = function ($this$intercept, context, $cont) {
    var tmp = this.o4j($this$intercept, context, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpRedirect$Plugin$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.n4j(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = this.u4n_1.f47(this.v4n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w4n_1 = suspendResult;
            if (this.s4n_1.x4n_1 ? !get_ALLOWED_FOR_REDIRECT().b1(this.w4n_1.m48().t49()) : false) {
              return this.w4n_1;
            }

            this.dg_1 = 2;
            suspendResult = handleCall(this.u4n_1, Plugin_getInstance_1(), this.v4n_1, this.w4n_1, this.s4n_1.y4n_1, this.t4n_1, this);
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
  HttpRedirect$Plugin$install$slambda.prototype.o4j = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.s4n_1, this.t4n_1, completion);
    i.u4n_1 = $this$intercept;
    i.v4n_1 = context;
    return i;
  };
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.n4j($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$8(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4m_1 = _this__u8e3s4;
    this.a4n_1 = _this__u8e3s4_0;
    this.b4n_1 = context;
    this.c4n_1 = origin;
    this.d4n_1 = allowHttpsDowngrade;
    this.e4n_1 = client;
  }
  $handleCallCOROUTINE$8.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (!isRedirect(this.c4n_1.d45().o2s()))
              return this.c4n_1;
            this.f4n_1 = this.c4n_1;
            this.g4n_1 = this.b4n_1;
            this.h4n_1 = this.c4n_1.m48().q2m().c3r_1;
            this.i4n_1 = get_authority(this.c4n_1.m48().q2m());
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dg_1 = 4;
              continue $sm;
            }

            this.e4n_1.i44_1.y3s(this.z4m_1.a4o_1, this.f4n_1.d45());
            this.j4n_1 = this.f4n_1.d45().l3n().g12(HttpHeaders_getInstance().w3k_1);
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.h4c(this.g4n_1);
            ;
            tmp0_apply.c46_1.z3q_1.t9();
            var tmp0_safe_receiver = this.j4n_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(tmp0_apply.c46_1, tmp0_safe_receiver);
            }

            ;
            if ((!this.d4n_1 ? isSecure(this.h4n_1) : false) ? !isSecure(tmp0_apply.c46_1.q3q_1) : false) {
              return this.f4n_1;
            }

            if (!(this.i4n_1 === get_authority_0(tmp0_apply.c46_1))) {
              tmp0_apply.e46_1.w3d(HttpHeaders_getInstance().r3j_1);
            }

            tmp_0.g4n_1 = tmp0_apply;
            this.dg_1 = 2;
            suspendResult = this.a4n_1.f47(this.g4n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f4n_1 = suspendResult;
            if (!isRedirect(this.f4n_1.d45().o2s()))
              return this.f4n_1;
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
  function Config_1() {
    this.b4o_1 = true;
    this.c4o_1 = false;
  }
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.z4n_1 = new AttributeKey('HttpRedirect');
    this.a4o_1 = new EventDefinition();
  }
  Plugin_1.prototype.o = function () {
    return this.z4n_1;
  };
  Plugin_1.prototype.s4k = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpRedirect(config.b4o_1, config.c4o_1);
  };
  Plugin_1.prototype.h47 = function (block) {
    return this.s4k(block);
  };
  Plugin_1.prototype.d4o = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.w4k(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.i47 = function (plugin, scope) {
    return this.d4o(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.x4n_1 = checkHttpMethod;
    this.y4n_1 = allowHttpsDowngrade;
  }
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.f3q_1;
    return ((((tmp0_subject === Companion_getInstance_1().p3o_1.f3q_1 ? true : tmp0_subject === Companion_getInstance_1().q3o_1.f3q_1) ? true : tmp0_subject === Companion_getInstance_1().v3o_1.f3q_1) ? true : tmp0_subject === Companion_getInstance_1().w3o_1.f3q_1) ? true : tmp0_subject === Companion_getInstance_1().r3o_1.f3q_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().m3n_1, Companion_getInstance_2().r3n_1]);
    }
  }
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.m4o_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.w44 = function ($this$intercept, it, $cont) {
    var tmp = this.x44($this$intercept, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            this.p4o_1 = SupervisorJob(this.n4o_1.h3g_1.g46_1);
            attachToClientEngineJob(this.p4o_1, ensureNotNull(this.m4o_1.b44_1.l3(Key_getInstance())));
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 4;
            this.eg_1 = 3;
            this.n4o_1.h3g_1.g46_1 = this.p4o_1;
            this.dg_1 = 2;
            suspendResult = this.n4o_1.m3f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.q4o_1 = Unit_getInstance();
            this.eg_1 = 6;
            this.dg_1 = 5;
            continue $sm;
          case 3:
            this.eg_1 = 4;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              var cause = this.gg_1;
              var tmp_2 = this;
              this.p4o_1.w1g(cause);
              throw cause;
            } else {
              throw this.gg_1;
            }

            break;
          case 4:
            this.eg_1 = 6;
            var t = this.gg_1;
            this.p4o_1.x1g();
            ;
            throw t;
          case 5:
            this.p4o_1.x1g();
            ;
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
  HttpRequestLifecycle$Plugin$install$slambda.prototype.x44 = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.m4o_1, completion);
    i.n4o_1 = $this$intercept;
    i.o4o_1 = it;
    return i;
  };
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.w44($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.r4o_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.o = function () {
    return this.r4o_1;
  };
  Plugin_2.prototype.o4d = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.h47 = function (block) {
    return this.o4d(block);
  };
  Plugin_2.prototype.s4o = function (plugin, scope) {
    var tmp = Phases_getInstance().f4d_1;
    scope.c44_1.l3g(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.i47 = function (plugin, scope) {
    return this.s4o(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_2();
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    var handler = clientEngineJob.n1b(attachToClientEngineJob$lambda(requestJob));
    requestJob.n1b(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_getInstance();
      } else {
        $requestJob.x1g();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.i1e();
      return Unit_getInstance();
    };
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.b4p_1 = $plugin;
    this.c4p_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.w44 = function ($this$intercept, content, $cont) {
    var tmp = this.x44($this$intercept, content, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpSend$Plugin$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            var tmp_0 = this.e4p_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.e4p_1) + ', with Content-Type: ' + contentType(this.d4p_1.h3g_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0_setBody = this.d4p_1.h3g_1;
            var tmp1_setBody = this.e4p_1;
            var tmp0_subject = tmp1_setBody;
            if (tmp0_subject == null) {
              tmp0_setBody.f46_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(OutgoingContent);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_setBody.i4c(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_setBody.f46_1 = tmp1_setBody;
                tmp0_setBody.i4c(null);
              } else {
                tmp0_setBody.f46_1 = tmp1_setBody;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(OutgoingContent);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_setBody.i4c(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            this.f4p_1 = new DefaultSender(this.b4p_1.u4k_1, this.c4p_1);
            this.g4p_1 = this.f4p_1;
            var tmp2_forEach = downTo(get_lastIndex(this.b4p_1.v4k_1), 0);
            var inductionVariable = tmp2_forEach.r_1;
            var last = tmp2_forEach.s_1;
            var step = tmp2_forEach.t_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.b4p_1.v4k_1.j(element);
                this.g4p_1 = new InterceptedSender(interceptor, this.g4p_1);
              }
               while (!(element === last));
            this.dg_1 = 1;
            suspendResult = this.g4p_1.f47(this.d4p_1.h3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h4p_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = this.d4p_1.l3f(this.h4p_1, this);
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
  HttpSend$Plugin$install$slambda.prototype.x44 = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.b4p_1, this.c4p_1, completion);
    i.d4p_1 = $this$intercept;
    i.e4p_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.w44($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$9(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4p_1 = _this__u8e3s4;
    this.r4p_1 = requestBuilder;
  }
  $executeCOROUTINE$9.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp0_safe_receiver = this.q4p_1.v4p_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this.q4p_1.u4p_1 >= this.q4p_1.s4p_1) {
              throw new SendCountExceedException('Max send count ' + this.q4p_1.s4p_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.q4p_1;
            var tmp2 = tmp1_this.u4p_1;
            tmp1_this.u4p_1 = tmp2 + 1 | 0;
            ;
            this.dg_1 = 1;
            suspendResult = this.q4p_1.t4p_1.e44_1.g3g(this.r4p_1, this.r4p_1.f46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.q4p_1.v4p_1 = call;
            return call;
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
  function Config_2() {
    this.w4p_1 = 20;
  }
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.x4p_1 = new AttributeKey('HttpSend');
  }
  Plugin_3.prototype.o = function () {
    return this.x4p_1;
  };
  Plugin_3.prototype.s4k = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpSend(config.w4p_1);
  };
  Plugin_3.prototype.h47 = function (block) {
    return this.s4k(block);
  };
  Plugin_3.prototype.y4p = function (plugin, scope) {
    var tmp = Phases_getInstance().j4d_1;
    scope.c44_1.l3g(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_3.prototype.i47 = function (plugin, scope) {
    return this.y4p(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.z4p_1 = interceptor;
    this.a4q_1 = nextSender;
  }
  InterceptedSender.prototype.f47 = function (requestBuilder, $cont) {
    return this.z4p_1(this.a4q_1, requestBuilder, $cont);
  };
  function DefaultSender(maxSendCount, client) {
    this.s4p_1 = maxSendCount;
    this.t4p_1 = client;
    this.u4p_1 = 0;
    this.v4p_1 = null;
  }
  DefaultSender.prototype.f47 = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$9(this, requestBuilder, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance_3();
    this.u4k_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.v4k_1 = tmp$ret$0;
  }
  HttpSend.prototype.w4k = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.v4k_1;
    tmp0_plusAssign.a(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.e4q(requestTimeoutMillis);
    $this.f4q(connectTimeoutMillis);
    $this.g4q(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      requestTimeoutMillis = null;
    if (!(($mask0 & 2) === 0))
      connectTimeoutMillis = null;
    if (!(($mask0 & 4) === 0))
      socketTimeoutMillis = null;
    HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value == null ? true : value.x(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.HttpTimeoutCapabilityConfiguration.checkTimeoutValue.<anonymous>' call
      tmp$ret$0 = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.h4q_1 = new AttributeKey('TimeoutConfiguration');
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.q4q_1 = $requestTimeout;
    this.r4q_1 = $request;
    this.s4q_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = delay(this.q4q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.r4q_1);
            cancel_2(this.s4q_1, ensureNotNull(cause.message), cause);
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
  HttpTimeout$Plugin$install$slambda$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.q4q_1, this.r4q_1, this.s4q_1, completion);
    i.t4q_1 = $this$launch;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.u1b(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.c4r_1 = $plugin;
    this.d4r_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.n4j = function ($this$intercept, request, $cont) {
    var tmp = this.o4j($this$intercept, request, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpTimeout$Plugin$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.n4j(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.g4r_1 = isWebsocket(this.f4r_1.c46_1.q3q_1);
            var tmp_0;
            if (this.g4r_1) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.f4r_1.f46_1;
              tmp_0 = tmp_1 instanceof ClientUpgradeContent;
            }

            if (tmp_0) {
              this.dg_1 = 3;
              suspendResult = this.e4r_1.f47(this.f4r_1, this);
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
            this.h4r_1 = this.f4r_1.i4r(Plugin_getInstance_4());
            if (this.h4r_1 == null ? hasNotNullTimeouts(this.c4r_1) : false) {
              var tmp_2 = this;
              tmp_2.h4r_1 = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
              this.f4r_1.j4r(Plugin_getInstance_4(), this.h4r_1);
            }

            var tmp0_safe_receiver = this.h4r_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_elvis_lhs = tmp0_safe_receiver.k4r();
                tmp0_safe_receiver.f4q(tmp0_elvis_lhs == null ? this.c4r_1.m4r_1 : tmp0_elvis_lhs);
                var tmp1_elvis_lhs = tmp0_safe_receiver.o4r();
                tmp0_safe_receiver.g4q(tmp1_elvis_lhs == null ? this.c4r_1.n4r_1 : tmp1_elvis_lhs);
                var tmp2_elvis_lhs = tmp0_safe_receiver.p4r();
                tmp0_safe_receiver.e4q(tmp2_elvis_lhs == null ? this.c4r_1.l4r_1 : tmp2_elvis_lhs);
                var tmp3_elvis_lhs = tmp0_safe_receiver.p4r();
                var requestTimeout = tmp3_elvis_lhs == null ? this.c4r_1.l4r_1 : tmp3_elvis_lhs;
                var tmp_3;
                if (requestTimeout == null) {
                  tmp_3 = true;
                } else {
                  Plugin_getInstance_4();
                  tmp_3 = equals(requestTimeout, new Long(-1, 2147483647));
                }
                if (tmp_3) {
                  tmp$ret$0 = Unit_getInstance();
                  break l$ret$1;
                }
                var executionContext = this.f4r_1.g46_1;
                var killer = launch$default(this.d4r_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, this.f4r_1, executionContext, null), 3, null);
                var tmp_4 = this.f4r_1.g46_1;
                tmp_4.n1b(HttpTimeout$Plugin$install$slambda$lambda(killer));
              }
               while (false);
            }

            ;
            this.dg_1 = 2;
            suspendResult = this.e4r_1.f47(this.f4r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            return suspendResult;
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
  HttpTimeout$Plugin$install$slambda.prototype.o4j = function ($this$intercept, request, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.c4r_1, this.d4r_1, completion);
    i.e4r_1 = $this$intercept;
    i.f4r_1 = request;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.n4j($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  HttpTimeoutCapabilityConfiguration.prototype.e4q = function (value) {
    this.b4q_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.p4r = function () {
    return this.b4q_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.f4q = function (value) {
    this.c4q_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.k4r = function () {
    return this.c4q_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.g4q = function (value) {
    this.d4q_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.o4r = function () {
    return this.d4q_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.cq = function () {
    return new HttpTimeout(this.p4r(), this.k4r(), this.o4r());
  };
  HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof HttpTimeoutCapabilityConfiguration)
      other;
    else
      THROW_CCE();
    if (!equals(this.b4q_1, other.b4q_1))
      return false;
    if (!equals(this.c4q_1, other.c4q_1))
      return false;
    if (!equals(this.d4q_1, other.d4q_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.b4q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.c4q_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.d4q_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_11();
    this.b4q_1 = new Long(0, 0);
    this.c4q_1 = new Long(0, 0);
    this.d4q_1 = new Long(0, 0);
  }
  function hasNotNullTimeouts($this) {
    return (!($this.l4r_1 == null) ? true : !($this.m4r_1 == null)) ? true : !($this.n4r_1 == null);
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.q4r_1 = new AttributeKey('TimeoutPlugin');
    this.r4r_1 = new Long(-1, 2147483647);
  }
  Plugin_4.prototype.o = function () {
    return this.q4r_1;
  };
  Plugin_4.prototype.s4r = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.cq();
  };
  Plugin_4.prototype.h47 = function (block) {
    return this.s4r(block);
  };
  Plugin_4.prototype.t4r = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.w4k(HttpTimeout$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_4.prototype.i47 = function (plugin, scope) {
    return this.t4r(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_4();
    this.l4r_1 = requestTimeoutMillis;
    this.m4r_1 = connectTimeoutMillis;
    this.n4r_1 = socketTimeoutMillis;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.c46_1.y3r();
    var tmp0_safe_receiver = request.i4r(Plugin_getInstance_4());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p4r());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.a49(), content, _this__u8e3s4);
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.u4r_1 = call;
    this.v4r_1 = content;
    this.w4r_1 = origin;
    this.x4r_1 = this.w4r_1.m1a();
  }
  DelegatedResponse.prototype.a49 = function () {
    return this.u4r_1;
  };
  DelegatedResponse.prototype.h12 = function () {
    return this.v4r_1;
  };
  DelegatedResponse.prototype.m1a = function () {
    return this.x4r_1;
  };
  DelegatedResponse.prototype.o2s = function () {
    return this.w4r_1.o2s();
  };
  DelegatedResponse.prototype.t2q = function () {
    return this.w4r_1.t2q();
  };
  DelegatedResponse.prototype.d4a = function () {
    return this.w4r_1.d4a();
  };
  DelegatedResponse.prototype.e4a = function () {
    return this.w4r_1.e4a();
  };
  DelegatedResponse.prototype.l3n = function () {
    return this.w4r_1.l3n();
  };
  function DefaultClientWebSocketSession(call, delegate) {
    this.y4r_1 = call;
    this.z4r_1 = delegate;
  }
  DefaultClientWebSocketSession.prototype.m1a = function () {
    return this.z4r_1.m1a();
  };
  DefaultClientWebSocketSession.prototype.p3t = function () {
    return this.z4r_1.p3t();
  };
  DefaultClientWebSocketSession.prototype.n3t = function (_set____db54di) {
    this.z4r_1.n3t(_set____db54di);
  };
  DefaultClientWebSocketSession.prototype.o3t = function () {
    return this.z4r_1.o3t();
  };
  DefaultClientWebSocketSession.prototype.q3t = function () {
    return this.z4r_1.q3t();
  };
  DefaultClientWebSocketSession.prototype.s3t = function ($cont) {
    return this.z4r_1.s3t($cont);
  };
  DefaultClientWebSocketSession.prototype.r3t = function (frame, $cont) {
    return this.z4r_1.r3t(frame, $cont);
  };
  DefaultClientWebSocketSession.prototype.m3t = function (negotiatedExtensions) {
    this.z4r_1.m3t(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.a4s_1 = call;
    this.b4s_1 = session;
  }
  DelegatingClientWebSocketSession.prototype.m1a = function () {
    return this.b4s_1.m1a();
  };
  DelegatingClientWebSocketSession.prototype.p3t = function () {
    return this.b4s_1.p3t();
  };
  DelegatingClientWebSocketSession.prototype.n3t = function (_set____db54di) {
    this.b4s_1.n3t(_set____db54di);
  };
  DelegatingClientWebSocketSession.prototype.o3t = function () {
    return this.b4s_1.o3t();
  };
  DelegatingClientWebSocketSession.prototype.q3t = function () {
    return this.b4s_1.q3t();
  };
  DelegatingClientWebSocketSession.prototype.s3t = function ($cont) {
    return this.b4s_1.s3t($cont);
  };
  DelegatingClientWebSocketSession.prototype.r3t = function (frame, $cont) {
    return this.b4s_1.r3t(frame, $cont);
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.websocket.WebSocketContent.nonce.<anonymous>' call
    var nonce = generateNonce(16);
    tmp0_apply.q6(encodeBase64(nonce));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    tmp.e4s_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_0 = HeadersBuilder_init_$Create$(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.websocket.WebSocketContent.headers.<anonymous>' call
    tmp0_apply_0.u3d(HttpHeaders_getInstance().f3m_1, 'websocket');
    tmp0_apply_0.u3d(HttpHeaders_getInstance().t3j_1, 'upgrade');
    tmp0_apply_0.u3d(HttpHeaders_getInstance().u3l_1, this.e4s_1);
    tmp0_apply_0.u3d(HttpHeaders_getInstance().w3l_1, '13');
    tmp$ret$2 = tmp0_apply_0;
    tmp_0.f4s_1 = tmp$ret$2.cq();
  }
  WebSocketContent.prototype.l3n = function () {
    return this.f4s_1;
  };
  WebSocketContent.prototype.toString = function () {
    return 'WebSocketContent';
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    init_properties_WebSockets_kt_l0lmoi();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_LOGGER() {
    init_properties_WebSockets_kt_l0lmoi();
    return LOGGER;
  }
  var LOGGER;
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, WebSocketException);
  }
  function WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation) {
    this.o4s_1 = $extensionsSupported;
    this.p4s_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSockets$Plugin$install$slambda.prototype.w44 = function ($this$intercept, it, $cont) {
    var tmp = this.x44($this$intercept, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  WebSockets$Plugin$install$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.w44(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  WebSockets$Plugin$install$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            if (!isWebsocket(this.q4s_1.h3g_1.c46_1.q3q_1)) {
              get_LOGGER().i3h('Skipping WebSocket plugin for non-websocket request: ' + this.q4s_1.h3g_1.c46_1);
              return Unit_getInstance();
            }

            get_LOGGER().i3h('Sending WebSocket request ' + this.q4s_1.h3g_1.c46_1);
            this.q4s_1.h3g_1.j4r(WebSocketCapability_getInstance(), Unit_getInstance());
            if (this.o4s_1) {
              installExtensions(this.p4s_1, this.q4s_1.h3g_1);
            }

            this.dg_1 = 1;
            suspendResult = this.q4s_1.l3f(new WebSocketContent(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  WebSockets$Plugin$install$slambda.prototype.x44 = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.o4s_1, this.p4s_1, completion);
    i.q4s_1 = $this$intercept;
    i.r4s_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.w44($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.a4t_1 = $plugin;
    this.b4t_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSockets$Plugin$install$slambda_1.prototype.q45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.r45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  WebSockets$Plugin$install$slambda_1.prototype.e7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  WebSockets$Plugin$install$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.e4t_1 = this.d4t_1.v2();
            this.f4t_1 = this.d4t_1.w2();
            var tmp_0 = this.f4t_1;
            if (!isInterface(tmp_0, WebSocketSession)) {
              get_LOGGER().i3h('Skipping non-websocket response from ' + this.c4t_1.h3g_1.m48().q2m() + ': ' + toString(this.f4t_1));
              return Unit_getInstance();
            }

            get_LOGGER().i3h('Receive websocket session from ' + this.c4t_1.h3g_1.m48().q2m() + ': ' + toString(this.f4t_1));
            var tmp_1 = this;
            var tmp0_subject = this.e4t_1.y3g_1;
            var tmp_2;
            if (tmp0_subject.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.a4t_1.m4t(this.f4t_1);
              var clientSession = new DefaultClientWebSocketSession(this.c4t_1.h3g_1, defaultSession);
              var tmp_3;
              if (this.b4t_1) {
                tmp_3 = completeNegotiation(this.a4t_1, this.c4t_1.h3g_1);
              } else {
                tmp_3 = emptyList();
              }
              var negotiated = tmp_3;
              clientSession.m3t(negotiated);
              tmp_2 = clientSession;
            } else {
              tmp_2 = new DelegatingClientWebSocketSession(this.c4t_1.h3g_1, this.f4t_1);
            }

            tmp_1.g4t_1 = tmp_2;
            this.h4t_1 = new HttpResponseContainer(this.e4t_1, this.g4t_1);
            this.dg_1 = 1;
            suspendResult = this.c4t_1.l3f(this.h4t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  WebSockets$Plugin$install$slambda_1.prototype.r45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.a4t_1, this.b4t_1, completion);
    i.c4t_1 = $this$intercept;
    i.d4t_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.q45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function installExtensions($this, context) {
    var installed = $this.k4t_1.cq();
    context.h46_1.a3c(get_REQUEST_EXTENSIONS_KEY(), installed);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$();
    var tmp0_iterator = installed.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.websocket.WebSockets.installExtensions.<anonymous>' call
      tmp$ret$0 = element.n4t();
      var list = tmp$ret$0;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$1 = tmp0_flatMapTo;
    tmp$ret$2 = tmp$ret$1;
    var protocols = tmp$ret$2;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.d45().l3n().g12(HttpHeaders_getInstance().t3l_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.websocket.WebSockets.completeNegotiation.<anonymous>' call
      tmp$ret$0 = parseWebSocketExtensions(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.r47().x3b(get_REQUEST_EXTENSIONS_KEY());
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = clientExtensions.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$2;
      // Inline function 'io.ktor.client.plugins.websocket.WebSockets.completeNegotiation.<anonymous>' call
      tmp$ret$2 = element.o4t(serverExtensions);
      if (tmp$ret$2) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$3 = tmp0_filterTo;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function addNegotiatedProtocols($this, context, protocols) {
    if (protocols.k())
      return Unit_getInstance();
    var headerValue = joinToString$default(protocols, ';', null, null, 0, null, null, 62, null);
    header(context, HttpHeaders_getInstance().t3l_1, headerValue);
  }
  function Config_3() {
    this.p4t_1 = new WebSocketExtensionsConfig();
    this.q4t_1 = new Long(-1, -1);
    this.r4t_1 = toLong(IntCompanionObject_getInstance().MAX_VALUE);
    this.s4t_1 = null;
  }
  function Plugin_5() {
    Plugin_instance_5 = this;
    this.t4t_1 = new AttributeKey('Websocket');
  }
  Plugin_5.prototype.o = function () {
    return this.t4t_1;
  };
  Plugin_5.prototype.u4t = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_3();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new WebSockets(config.q4t_1, config.r4t_1, config.p4t_1, config.s4t_1);
  };
  Plugin_5.prototype.h47 = function (block) {
    return this.u4t(block);
  };
  Plugin_5.prototype.v4t = function (plugin, scope) {
    var extensionsSupported = scope.w43_1.p4b().b1(WebSocketExtensionsCapability_getInstance());
    var tmp = Phases_getInstance().i4d_1;
    scope.c44_1.l3g(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_1().c47_1;
    scope.d44_1.l3g(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  Plugin_5.prototype.i47 = function (plugin, scope) {
    return this.v4t(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_5;
  function Plugin_getInstance_5() {
    if (Plugin_instance_5 == null)
      new Plugin_5();
    return Plugin_instance_5;
  }
  function WebSockets(pingInterval, maxFrameSize, extensionsConfig, contentConverter) {
    Plugin_getInstance_5();
    this.i4t_1 = pingInterval;
    this.j4t_1 = maxFrameSize;
    this.k4t_1 = extensionsConfig;
    this.l4t_1 = contentConverter;
  }
  WebSockets.prototype.m4t = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.i4t_1;
    tmp$ret$0 = tmp0_times.u5(new Long(2, 0));
    var tmp1_also = DefaultWebSocketSession_0(session, this.i4t_1, tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.websocket.WebSockets.convertSessionToDefault.<anonymous>' call
    tmp1_also.n3t(this.j4t_1);
    tmp$ret$1 = tmp1_also;
    return tmp$ret$1;
  };
  function WebSocketExtensionsCapability() {
    WebSocketExtensionsCapability_instance = this;
  }
  WebSocketExtensionsCapability.prototype.toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  var WebSocketExtensionsCapability_instance;
  function WebSocketExtensionsCapability_getInstance() {
    if (WebSocketExtensionsCapability_instance == null)
      new WebSocketExtensionsCapability();
    return WebSocketExtensionsCapability_instance;
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function init_properties_WebSockets_kt_l0lmoi() {
    if (properties_initialized_WebSockets_kt_2t2hw2) {
    } else {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      REQUEST_EXTENSIONS_KEY = new AttributeKey('Websocket extensions');
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function webSocketSession(_this__u8e3s4, block, $cont) {
    plugin(_this__u8e3s4, Plugin_getInstance_5());
    var sessionDeferred = CompletableDeferred$default(null, 1, null);
    var tmp$ret$2;
    // Inline function 'io.ktor.client.request.prepareRequest' call
    var tmp$ret$1;
    // Inline function 'io.ktor.client.request.prepareRequest' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpRequestBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.websocket.webSocketSession.<anonymous>' call
    tmp0_apply.w4t(webSocketSession$lambda);
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var tmp1_prepareRequest = tmp$ret$0;
    tmp$ret$1 = new HttpStatement(tmp1_prepareRequest, _this__u8e3s4);
    tmp$ret$2 = tmp$ret$1;
    var statement = tmp$ret$2;
    launch$default(_this__u8e3s4, null, null, webSocketSession$slambda_0(statement, sessionDeferred, null), 3, null);
    return sessionDeferred.e1d($cont);
  }
  function webSocketSession$lambda($this$url, it) {
    $this$url.q3q_1 = Companion_getInstance_3().m3q_1;
    $this$url.s3q_1 = $this$url.q3q_1.b3r_1;
    return Unit_getInstance();
  }
  function webSocketSession$slambda$lambda($sessionCompleted) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $sessionCompleted.w1g(it);
        tmp = Unit_getInstance();
      } else {
        $sessionCompleted.u1g(Unit_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function webSocketSession$slambda($statement, $sessionDeferred, resultContinuation) {
    this.f4u_1 = $statement;
    this.g4u_1 = $sessionDeferred;
    CoroutineImpl.call(this, resultContinuation);
  }
  webSocketSession$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  webSocketSession$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  webSocketSession$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 19;
            this.eg_1 = 18;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.eg_1 = 14;
            this.dg_1 = 3;
            suspendResult = this.f4u_1.r4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.k4u_1 = suspendResult;
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.dg_1 = 5;
            continue $sm;
          case 5:
            this.eg_1 = 12;
            this.dg_1 = 6;
            var tmp_0 = this.k4u_1.a49();
            var tmp_1 = JsType_getInstance();
            var tmp_2 = getKClass(DefaultClientWebSocketSession);
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(DefaultClientWebSocketSession), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_0.n48(typeInfoImpl(tmp_1, tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_5 = this;
            tmp_5.m4u_1 = suspendResult instanceof DefaultClientWebSocketSession ? suspendResult : THROW_CCE();
            var tmp_6 = this;
            tmp_6.n4u_1 = CompletableDeferred$default(null, 1, null);
            this.g4u_1.u1g(this.m4u_1);
            ;
            var tmp_7 = this.m4u_1.q3t();
            tmp_7.p1r(webSocketSession$slambda$lambda(this.n4u_1));
            this.dg_1 = 7;
            suspendResult = this.n4u_1.e1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.l4u_1 = suspendResult;
            this.dg_1 = 8;
            var tmp_8 = this;
            continue $sm;
          case 8:
            this.dg_1 = 9;
            suspendResult = this.f4u_1.s4u(this.k4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.i4u_1 = suspendResult;
            this.dg_1 = 17;
            continue $sm;
          case 10:
            this.dg_1 = 11;
            suspendResult = this.f4u_1.s4u(this.k4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_9 = this;
            tmp_9.j4u_1 = Unit_getInstance();
            this.dg_1 = 16;
            continue $sm;
          case 12:
            this.eg_1 = 14;
            this.o4u_1 = this.gg_1;
            this.dg_1 = 13;
            suspendResult = this.f4u_1.s4u(this.k4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            throw this.o4u_1;
          case 14:
            this.eg_1 = 18;
            var tmp_10 = this.gg_1;
            if (tmp_10 instanceof CancellationException) {
              var cause = this.gg_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.gg_1;
            }

            break;
          case 15:
            this.eg_1 = 18;
            if (false) {
              this.dg_1 = 2;
              continue $sm;
            }

            this.dg_1 = 16;
            continue $sm;
          case 16:
            this.i4u_1 = this.j4u_1;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 17;
            continue $sm;
          case 17:
            this.eg_1 = 19;
            this.dg_1 = 20;
            continue $sm;
          case 18:
            this.eg_1 = 19;
            var tmp_11 = this.gg_1;
            if (tmp_11 instanceof Error) {
              var cause_0 = this.gg_1;
              this.g4u_1.w1g(cause_0);
              this.dg_1 = 20;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 19:
            throw this.gg_1;
          case 20:
            this.eg_1 = 19;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.eg_1 === 19) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  webSocketSession$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new webSocketSession$slambda(this.f4u_1, this.g4u_1, completion);
    i.h4u_1 = $this$launch;
    return i;
  };
  function webSocketSession$slambda_0($statement, $sessionDeferred, resultContinuation) {
    var i = new webSocketSession$slambda($statement, $sessionDeferred, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return ByteChannel$default(false, 1, null);
  }
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.u4u_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.v4u_1 = call;
    this.w4u_1 = data.j4b_1;
    this.x4u_1 = data.i4b_1;
    this.y4u_1 = data.l4b_1;
    this.z4u_1 = data.k4b_1;
    this.a4v_1 = data.n4b_1;
  }
  DefaultHttpRequest.prototype.a49 = function () {
    return this.v4u_1;
  };
  DefaultHttpRequest.prototype.m1a = function () {
    return this.a49().m1a();
  };
  DefaultHttpRequest.prototype.t49 = function () {
    return this.w4u_1;
  };
  DefaultHttpRequest.prototype.q2m = function () {
    return this.x4u_1;
  };
  DefaultHttpRequest.prototype.l3n = function () {
    return this.z4u_1;
  };
  DefaultHttpRequest.prototype.r47 = function () {
    return this.a4v_1;
  };
  function HttpRequest_0() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    return tmp$ret$0;
  }
  function HttpRequestBuilder() {
    Companion_getInstance_12();
    var tmp = this;
    tmp.c46_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.d46_1 = Companion_getInstance_2().m3n_1;
    var tmp_0 = this;
    tmp_0.e46_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.f46_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.g46_1 = SupervisorJob$default(null, 1, null);
    this.h46_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.l3n = function () {
    return this.e46_1;
  };
  HttpRequestBuilder.prototype.i4c = function (value) {
    if (!(value == null)) {
      this.h46_1.a3c(get_BodyTypeAttributeKey(), value);
    } else {
      this.h46_1.b3c(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.b4v = function () {
    return this.h46_1.y3b(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.w4t = function (block) {
    return block(this.c46_1, this.c46_1);
  };
  HttpRequestBuilder.prototype.cq = function () {
    var tmp = this.c46_1.cq();
    var tmp_0 = this.d46_1;
    var tmp_1 = this.e46_1.cq();
    var tmp_2 = this.f46_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.f46_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.g46_1, this.h46_1);
  };
  HttpRequestBuilder.prototype.h4c = function (builder) {
    this.g46_1 = builder.g46_1;
    return this.c4v(builder);
  };
  HttpRequestBuilder.prototype.c4v = function (builder) {
    this.d46_1 = builder.d46_1;
    this.f46_1 = builder.f46_1;
    this.i4c(builder.b4v());
    takeFrom_0(this.c46_1, builder.c46_1);
    this.c46_1.x3q_1 = this.c46_1.x3q_1;
    appendAll(this.e46_1, builder.e46_1);
    putAll(this.h46_1, builder.h46_1);
    return this;
  };
  HttpRequestBuilder.prototype.j4r = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.h46_1.c3c(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.x2(key, capability);
  };
  HttpRequestBuilder.prototype.i4r = function (key) {
    var tmp0_safe_receiver = this.h46_1.y3b(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.i4b_1 = url;
    this.j4b_1 = method;
    this.k4b_1 = headers;
    this.l4b_1 = body;
    this.m4b_1 = executionContext;
    this.n4b_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.n4b_1.y3b(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1();
    tmp.o4b_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.i4b_1 + ', method=' + this.j4b_1 + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.k47_1 = statusCode;
    this.l47_1 = requestTime;
    this.m47_1 = headers;
    this.n47_1 = version;
    this.o47_1 = body;
    this.p47_1 = callContext;
    var tmp = this;
    tmp.q47_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.k47_1 + ')';
  };
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.c46_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.l4b_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.f4d_1 = new PipelinePhase('Before');
    this.g4d_1 = new PipelinePhase('State');
    this.h4d_1 = new PipelinePhase('Transform');
    this.i4d_1 = new PipelinePhase('Render');
    this.j4d_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().f4d_1, Phases_getInstance().g4d_1, Phases_getInstance().h4d_1, Phases_getInstance().i4d_1, Phases_getInstance().j4d_1]);
    this.k4v_1 = developmentMode;
  }
  HttpRequestPipeline.prototype.f3g = function () {
    return this.k4v_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.s46_1 = new PipelinePhase('Before');
    this.t46_1 = new PipelinePhase('State');
    this.u46_1 = new PipelinePhase('Monitoring');
    this.v46_1 = new PipelinePhase('Engine');
    this.w46_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().s46_1, Phases_getInstance_0().t46_1, Phases_getInstance_0().u46_1, Phases_getInstance_0().v46_1, Phases_getInstance_0().w46_1]);
    this.s4v_1 = developmentMode;
  }
  HttpSendPipeline.prototype.f3g = function () {
    return this.s4v_1;
  };
  function get_BodyTypeAttributeKey() {
    init_properties_RequestBody_kt_hroiwt();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function init_properties_RequestBody_kt_hroiwt() {
    if (properties_initialized_RequestBody_kt_agyv1b) {
    } else {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.l3n().u3d(HttpHeaders_getInstance().i3j_1, contentType.toString());
  }
  function header(_this__u8e3s4, key, value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.l3n().u3d(key, toString(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
      tmp = Unit_getInstance();
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.t4v_1 = call;
    this.u4v_1 = responseData.p47_1;
    this.v4v_1 = responseData.k47_1;
    this.w4v_1 = responseData.n47_1;
    this.x4v_1 = responseData.l47_1;
    this.y4v_1 = responseData.q47_1;
    var tmp = this;
    var tmp_0 = responseData.o47_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.z4v_1 = tmp0_elvis_lhs == null ? Companion_getInstance().t34() : tmp0_elvis_lhs;
    this.a4w_1 = responseData.m47_1;
  }
  DefaultHttpResponse.prototype.a49 = function () {
    return this.t4v_1;
  };
  DefaultHttpResponse.prototype.m1a = function () {
    return this.u4v_1;
  };
  DefaultHttpResponse.prototype.o2s = function () {
    return this.v4v_1;
  };
  DefaultHttpResponse.prototype.t2q = function () {
    return this.w4v_1;
  };
  DefaultHttpResponse.prototype.d4a = function () {
    return this.x4v_1;
  };
  DefaultHttpResponse.prototype.e4a = function () {
    return this.y4v_1;
  };
  DefaultHttpResponse.prototype.h12 = function () {
    return this.z4v_1;
  };
  DefaultHttpResponse.prototype.l3n = function () {
    return this.a4w_1;
  };
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).q2m() + ', ' + this.o2s() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.a49().m48();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.m1a().l3(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.x1g();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$13(_this__u8e3s4, fallbackCharset, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().v37_1;
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$13(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j4w_1 = _this__u8e3s4;
    this.k4w_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$13.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.j4w_1);
            tmp_0.l4w_1 = tmp0_elvis_lhs == null ? this.k4w_1 : tmp0_elvis_lhs;
            this.m4w_1 = this.l4w_1.y37();
            this.dg_1 = 1;
            var tmp_1 = this.j4w_1.a49();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(Input);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Input), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.n48(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.m4w_1, input, 0, 2, null);
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
  function Phases_1() {
    Phases_instance_1 = this;
    this.a47_1 = new PipelinePhase('Receive');
    this.b47_1 = new PipelinePhase('Parse');
    this.c47_1 = new PipelinePhase('Transform');
    this.d47_1 = new PipelinePhase('State');
    this.e47_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().a47_1, Phases_getInstance_1().b47_1, Phases_getInstance_1().c47_1, Phases_getInstance_1().d47_1, Phases_getInstance_1().e47_1]);
    this.u4w_1 = developmentMode;
  }
  HttpResponsePipeline.prototype.f3g = function () {
    return this.u4w_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.k4d_1 = new PipelinePhase('Before');
    this.l4d_1 = new PipelinePhase('State');
    this.m4d_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().k4d_1, Phases_getInstance_2().l4d_1, Phases_getInstance_2().m4d_1]);
    this.c4x_1 = developmentMode;
  }
  HttpReceivePipeline.prototype.f3g = function () {
    return this.c4x_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.k48_1 = expectedType;
    this.l48_1 = response;
  }
  HttpResponseContainer.prototype.v2 = function () {
    return this.k48_1;
  };
  HttpResponseContainer.prototype.w2 = function () {
    return this.l48_1;
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.k48_1 + ', response=' + toString(this.l48_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.k48_1.hashCode();
    result = imul(result, 31) + hashCode(this.l48_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.k48_1.equals(tmp0_other_with_cast.k48_1))
      return false;
    if (!equals(this.l48_1, tmp0_other_with_cast.l48_1))
      return false;
    return true;
  };
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.p4u_1.h46_1.y3b(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          tmp0_filterIsInstanceTo.a(element);
        }
      }
      tmp$ret$0 = tmp0_filterIsInstanceTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp2_safe_receiver.g();
      while (tmp0_iterator_0.h()) {
        var element_0 = tmp0_iterator_0.i();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp0_requireNotNull = pluginOrNull($this.q4u_1, element_0);
          // Inline function 'kotlin.contracts.contract' call
          if (tmp0_requireNotNull == null) {
            var tmp$ret$2;
            // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
            var message = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            tmp$ret$3 = tmp0_requireNotNull;
            break $l$block;
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpStatement$execute$slambda.prototype.m4x = function (it, $cont) {
    var tmp = this.o4f(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpStatement$execute$slambda.prototype.kh = function (p1, $cont) {
    return this.m4x(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = save(this.l4x_1.a49(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.d45();
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
  HttpStatement$execute$slambda.prototype.o4f = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.l4x_1 = it;
    return i;
  };
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.m4x(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$14(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v4x_1 = _this__u8e3s4;
    this.w4x_1 = block;
  }
  $executeCOROUTINE$14.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 13;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 12;
            this.dg_1 = 2;
            suspendResult = this.v4x_1.r4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y4x_1 = suspendResult;
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.eg_1 = 10;
            this.dg_1 = 5;
            suspendResult = this.w4x_1(this.y4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.z4x_1 = suspendResult;
            this.dg_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.a4y_1 = this.z4x_1;
            this.dg_1 = 7;
            suspendResult = this.v4x_1.s4u(this.y4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.a4y_1;
          case 8:
            this.dg_1 = 9;
            suspendResult = this.v4x_1.s4u(this.y4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.x4x_1 = Unit_getInstance();
            this.eg_1 = 13;
            this.dg_1 = 15;
            continue $sm;
          case 10:
            this.eg_1 = 12;
            this.b4y_1 = this.gg_1;
            this.dg_1 = 11;
            suspendResult = this.v4x_1.s4u(this.y4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.b4y_1;
          case 12:
            this.eg_1 = 13;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.gg_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.gg_1;
            }

            break;
          case 13:
            throw this.gg_1;
          case 14:
            this.eg_1 = 13;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 15;
            continue $sm;
          case 15:
            return this.x4x_1;
        }
      } catch ($p) {
        if (this.eg_1 === 13) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function $executeUnsafeCOROUTINE$15(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k4y_1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$15.prototype.wg = function () {
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
            this.m4y_1 = (new HttpRequestBuilder()).h4c(this.k4y_1.p4u_1);
            this.dg_1 = 2;
            suspendResult = this.k4y_1.q4u_1.f47(this.m4y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.d45();
          case 3:
            this.eg_1 = 4;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.gg_1;
              throw unwrapCancellationException(cause);
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
            return this.l4y_1;
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
  function $cleanupCOROUTINE$16(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v4y_1 = _this__u8e3s4;
    this.w4y_1 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$16.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.w4y_1.m1a().l3(Key_getInstance()));
            tmp_0.x4y_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.x4y_1.x1g();
            ;
            this.eg_1 = 1;
            cancel_1(this.w4y_1.h12());
            ;
            this.eg_1 = 4;
            this.dg_1 = 2;
            continue $sm;
          case 1:
            this.eg_1 = 4;
            var tmp_2 = this.gg_1;
            if (tmp_2 instanceof Error) {
              this.y4y_1 = this.gg_1;
              this.dg_1 = 2;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 2:
            this.eg_1 = 4;
            this.dg_1 = 3;
            suspendResult = this.x4y_1.q1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
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
  function HttpStatement(builder, client) {
    this.p4u_1 = builder;
    this.q4u_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.z4y = function (block, $cont) {
    var tmp = new $executeCOROUTINE$14(this, block, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpStatement.prototype.a4z = function ($cont) {
    return this.z4y(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.r4u = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$15(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpStatement.prototype.s4u = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$16(this, _this__u8e3s4, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.p4u_1.c46_1.y3r() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).k33();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.j4z_1 = $contentLength;
    this.k4z_1 = $this_observable;
    this.l4z_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.p4a = function ($this$writer, $cont) {
    var tmp = this.q4a($this$writer, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  observable$slambda.prototype.kh = function (p1, $cont) {
    return this.p4a((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 15;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.o4z_1 = get_ByteArrayPool();
            this.p4z_1 = this.o4z_1.e34();
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.eg_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.j4z_1;
            tmp_1.r4z_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.s4z_1 = new Long(0, 0);
            this.dg_1 = 4;
            continue $sm;
          case 4:
            if (!!this.k4z_1.b2y()) {
              this.dg_1 = 8;
              continue $sm;
            }

            this.dg_1 = 5;
            suspendResult = readAvailable(this.k4z_1, this.p4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.t4z_1 = suspendResult;
            this.dg_1 = 6;
            suspendResult = this.m4z_1.k33().z32(this.p4z_1, 0, this.t4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp0_plus = this.s4z_1;
            tmp_2.s4z_1 = tmp0_plus.v5(toLong(this.t4z_1));
            this.dg_1 = 7;
            suspendResult = this.l4z_1(this.s4z_1, this.r4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.dg_1 = 4;
            continue $sm;
          case 8:
            this.u4z_1 = this.k4z_1.l2x();
            this.m4z_1.k33().a1r(this.u4z_1);
            ;
            if (this.u4z_1 == null ? this.s4z_1.equals(new Long(0, 0)) : false) {
              this.dg_1 = 9;
              suspendResult = this.l4z_1(this.s4z_1, this.r4z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 10;
              continue $sm;
            }

            break;
          case 9:
            this.dg_1 = 10;
            continue $sm;
          case 10:
            this.q4z_1 = Unit_getInstance();
            this.eg_1 = 15;
            this.dg_1 = 11;
            var tmp_3 = this;
            continue $sm;
          case 11:
            var tmp_4 = this;
            this.o4z_1.i36(this.p4z_1);
            tmp_4.n4z_1 = Unit_getInstance();
            this.dg_1 = 13;
            continue $sm;
          case 12:
            this.o4z_1.i36(this.p4z_1);
            ;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.eg_1 = 15;
            var t = this.gg_1;
            this.o4z_1.i36(this.p4z_1);
            ;
            throw t;
          case 15:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 15) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  observable$slambda.prototype.q4a = function ($this$writer, completion) {
    var i = new observable$slambda(this.j4z_1, this.k4z_1, this.l4z_1, completion);
    i.m4z_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p4a($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.v4z_1 = response;
    this.w4z_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function init_properties_ClientEvents_kt_kkxb6e() {
    if (properties_initialized_ClientEvents_kt_rdee4m) {
    } else {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.y4z_1 = new Long(0, 0);
  }
  EmptyContent.prototype.k3s = function () {
    return this.y4z_1;
  };
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.cq();
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.z4z = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.g47 = function (block) {
    return this.z4z(block);
  };
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().d3h_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.n3d(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$18($this, request, callContext, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$17(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w50_1 = _this__u8e3s4;
    this.x50_1 = data;
  }
  $executeCOROUTINE$17.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            this.dg_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y50_1 = suspendResult;
            this.z50_1 = this.x50_1.n4b_1.x3b(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.x50_1)) {
              this.dg_1 = 5;
              suspendResult = executeWebSocketRequest(this.w50_1, this.x50_1, this.y50_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var tmp_0 = this;
            tmp_0.a51_1 = GMTDate$default(null, 1, null);
            this.dg_1 = 3;
            suspendResult = toRaw(this.x50_1, this.z50_1, this.y50_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.b51_1 = suspendResult;
            this.dg_1 = 4;
            suspendResult = commonFetch(this.x50_1.i4b_1.toString(), this.b51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_4().w3n_1;
            var body = readBody(CoroutineScope_0(this.y50_1), rawResponse);
            return new HttpResponseData(status, this.a51_1, headers, version, body, this.y50_1);
          case 5:
            return suspendResult;
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
  function $executeWebSocketRequestCOROUTINE$18(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i50_1 = _this__u8e3s4;
    this.j50_1 = request;
    this.k50_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$18.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            var tmp_0 = this;
            tmp_0.l50_1 = GMTDate$default(null, 1, null);
            this.m50_1 = this.j50_1.i4b_1.toString();
            this.n50_1 = createWebSocket(this.i50_1, this.m50_1, this.j50_1.k4b_1);
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = awaitConnection(this.n50_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.eg_1 = 4;
            this.dg_1 = 3;
            continue $sm;
          case 2:
            this.eg_1 = 4;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              var cause = this.gg_1;
              cancel_3(this.k50_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.m50_1, cause));
              throw cause;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            this.eg_1 = 4;
            var session = new JsWebSocketSession(this.k50_1, this.n50_1);
            return new HttpResponseData(Companion_getInstance_1().g3o_1, this.l50_1, Companion_getInstance_5().f3j_1, Companion_getInstance_4().w3n_1, session, this.k50_1);
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
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.f51_1 = config;
    this.g51_1 = Dispatchers_getInstance().c1m_1;
    this.h51_1 = setOf_0([Plugin_getInstance_4(), WebSocketCapability_getInstance()]);
    // Inline function 'kotlin.check' call
    var tmp0_check = this.f51_1.d4d_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      tmp$ret$0 = 'Proxy unsupported in Js engine.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  JsClientEngine.prototype.q46 = function () {
    return this.f51_1;
  };
  JsClientEngine.prototype.x4c = function () {
    return this.g51_1;
  };
  JsClientEngine.prototype.p4b = function () {
    return this.h51_1;
  };
  JsClientEngine.prototype.v4c = function (data, $cont) {
    var tmp = new $executeCOROUTINE$17(this, data, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.h1b()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.d1e(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.s1d();
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp0_apply.q6(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    tmp$ret$3 = tmp0_apply;
    tmp$ret$4 = tmp$ret$3.toString();
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.i51_1 = origin;
    captureStack(this, JsError);
  }
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.u3d(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this_mapToKtor;
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_6();
        tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
        $cancellable.i3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = new WebSocketException(asString(event));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_6();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
        $cancellable.i3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $cont) {
    var tmp = new $toRawCOROUTINE$19(_this__u8e3s4, clientConfig, callContext, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function buildObject(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.f52_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.p4a = function ($this$writer, $cont) {
    var tmp = this.q4a($this$writer, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  toRaw$slambda.prototype.kh = function (p1, $cont) {
    return this.p4a((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.f52_1.q3s(this.g52_1.k33(), this);
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
  toRaw$slambda.prototype.q4a = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.f52_1, completion);
    i.g52_1 = $this$writer;
    return i;
  };
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p4a($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.j4b_1.u3n_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.m46_1) {
        var tmp$ret$2;
        // Inline function 'org.w3c.fetch.FOLLOW' call
        var tmp0__get_FOLLOW__lsxog0 = null;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'follow';
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        // Inline function 'org.w3c.fetch.MANUAL' call
        var tmp1__get_MANUAL__wgvzkm = null;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'manual';
        var tmp0_unsafeCast_0 = tmp$ret$3;
        tmp$ret$4 = tmp0_unsafeCast_0;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        tmp$ret$6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$19(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r51_1 = _this__u8e3s4;
    this.s51_1 = clientConfig;
    this.t51_1 = callContext;
  }
  $toRawCOROUTINE$19.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.u51_1 = {};
            mergeHeaders(this.r51_1.k4b_1, this.r51_1.l4b_1, toRaw$lambda(this.u51_1));
            this.v51_1 = this.r51_1.l4b_1;
            var tmp_0 = this.v51_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.w51_1 = this.v51_1.l3s();
              this.dg_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.v51_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.dg_1 = 2;
                var tmp_2 = this.v51_1.o3s();
                suspendResult = tmp_2.b33(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.v51_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  this.dg_1 = 1;
                  var tmp_4 = GlobalScope_getInstance();
                  var tmp_5 = writer$default(tmp_4, this.t51_1, false, toRaw$slambda_0(this.v51_1, null), 2, null).k33();
                  suspendResult = tmp_5.b33(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.w51_1 = null;
                  this.dg_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_6 = this;
            tmp_6.w51_1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.dg_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_7 = this;
            tmp_7.w51_1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.dg_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.w51_1;
            return buildObject(toRaw$lambda_0(this.r51_1, this.u51_1, this.s51_1, bodyBytes));
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
  function asByteArray(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0;
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().t34();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).k33();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    tmp$ret$0 = cancellable.s1d();
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.p52_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.p4a = function ($this$writer, $cont) {
    var tmp = this.q4a($this$writer, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  channelFromStream$slambda.prototype.kh = function (p1, $cont) {
    return this.p4a((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            this.r52_1 = this.p52_1.getReader();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dg_1 = 8;
              continue $sm;
            }

            this.eg_1 = 5;
            this.dg_1 = 2;
            suspendResult = readChunk(this.r52_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s52_1 = suspendResult;
            if (this.s52_1 == null) {
              this.eg_1 = 6;
              this.dg_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.t52_1 = this.s52_1;
              this.dg_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.u52_1 = this.t52_1;
            this.dg_1 = 4;
            suspendResult = writeFully(this.q52_1.k33(), asByteArray(this.u52_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.eg_1 = 6;
            this.dg_1 = 7;
            continue $sm;
          case 5:
            this.eg_1 = 6;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              var cause = this.gg_1;
              this.r52_1.cancel(cause);
              throw cause;
            } else {
              throw this.gg_1;
            }

            break;
          case 6:
            throw this.gg_1;
          case 7:
            this.eg_1 = 6;
            this.dg_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
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
  channelFromStream$slambda.prototype.q4a = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.p52_1, completion);
    i.q52_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p4a($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_6();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $cancellable.i3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_6();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      $cancellable.i3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.d1e(commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().c3h_1) {
      tmp = fetch(input, init);
    } else {
      tmp = jsRequireNodeFetch()(input, init);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    tmp$ret$0 = cancellable.s1d();
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().c3h_1) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().c3h_1) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      {
        throw Error_init_$Create$("Error loading module 'node-fetch': " + $p);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_6();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.i3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_6();
      var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      $cancellable.i3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).k33();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.m1r(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.a1r(cause);
      return $this_writer.k33().a1r(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.o1r(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.d53_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.p4a = function ($this$writer, $cont) {
    var tmp = this.q4a($this$writer, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  readBodyNode$slambda.prototype.kh = function (p1, $cont) {
    return this.p4a((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.d53_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.f53_1 = tmp_1;
            var tmp_2 = this;
            tmp_2.g53_1 = Channel$default(1, null, null, 6, null);
            this.f53_1.on('data', readBodyNode$slambda$lambda(this.g53_1, this.f53_1));
            this.f53_1.on('error', readBodyNode$slambda$lambda_0(this.g53_1, this.e53_1));
            this.f53_1.on('end', readBodyNode$slambda$lambda_1(this.g53_1));
            this.eg_1 = 5;
            this.h53_1 = this.g53_1.g();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.dg_1 = 2;
            suspendResult = this.h53_1.k1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.dg_1 = 4;
              continue $sm;
            }

            this.i53_1 = this.h53_1.i();
            this.dg_1 = 3;
            suspendResult = writeFully(this.e53_1.k33(), this.i53_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f53_1.resume();
            this.dg_1 = 1;
            continue $sm;
          case 4:
            this.eg_1 = 6;
            this.dg_1 = 7;
            continue $sm;
          case 5:
            this.eg_1 = 6;
            var tmp_3 = this.gg_1;
            if (tmp_3 instanceof Error) {
              var cause = this.gg_1;
              this.f53_1.destroy(cause);
              throw cause;
            } else {
              throw this.gg_1;
            }

            break;
          case 6:
            throw this.gg_1;
          case 7:
            this.eg_1 = 6;
            ;
            return Unit_getInstance();
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
  readBodyNode$slambda.prototype.q4a = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.d53_1, completion);
    i.e53_1 = $this$writer;
    return i;
  };
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p4a($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_7().i3t(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    tmp$ret$0 = tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0;
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = new Int8Array(data);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.l53_1.w1g(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.m53_1.m1r(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0.l53_1.w1g(cause);
      this$0.m53_1.a1r(cause);
      this$0.n53_1.u1b(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.l53_1.u1g(reason);
      this$0.m53_1.m1r(Close_init_$Create$(reason));
      this$0.m53_1.o1r(null, 1, null);
      this$0.n53_1.u1b(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.z53_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  JsWebSocketSession$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 10;
            var tmp_0 = this;
            tmp_0.b54_1 = this.z53_1.n53_1;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.d54_1 = null;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.eg_1 = 9;
            this.eg_1 = 8;
            this.f54_1 = this.b54_1.g();
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.dg_1 = 5;
            suspendResult = this.f54_1.k1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.dg_1 = 6;
              continue $sm;
            }

            var e = this.f54_1.i();
            var tmp0_subject = e.e3x_1;
            var tmp0 = tmp0_subject.y3_1;
            switch (tmp0) {
              case 0:
                var text = e.f3x_1;
                this.z53_1.k53_1.send(String$default(text, 0, 0, null, 14, null));
                ;
                break;
              case 1:
                var tmp_1 = e.f3x_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.z53_1.k53_1.send(frameData);
                ;
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    writeFully$default(builder, e.f3x_1, 0, 0, 6, null);
                    tmp$ret$0 = builder.cq();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.m10();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.n37(0, 0, 3, null);
                this.z53_1.l53_1.u1g(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.z53_1)) {
                  this.z53_1.k53_1.close();
                } else {
                  this.z53_1.k53_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.dg_1 = 4;
            continue $sm;
          case 6:
            this.e54_1 = Unit_getInstance();
            this.eg_1 = 10;
            this.dg_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            cancelConsumed(this.b54_1, this.d54_1);
            tmp_3.c54_1 = Unit_getInstance();
            this.dg_1 = 12;
            continue $sm;
          case 8:
            this.eg_1 = 9;
            var tmp_4 = this.gg_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.gg_1;
              var tmp_5 = this;
              this.d54_1 = e_0;
              throw e_0;
            } else {
              throw this.gg_1;
            }

            break;
          case 9:
            this.eg_1 = 10;
            var t = this.gg_1;
            cancelConsumed(this.b54_1, this.d54_1);
            ;
            throw t;
          case 10:
            throw this.gg_1;
          case 11:
            cancelConsumed(this.b54_1, this.d54_1);
            ;
            if (false) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.eg_1 === 10) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.z53_1, completion);
    i.a54_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.k53_1.close();
        tmp = Unit_getInstance();
      } else {
        this$0.k53_1.close(Codes_INTERNAL_ERROR_getInstance().f3t_1, 'Client failed');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.j53_1 = coroutineContext;
    this.k53_1 = websocket;
    var tmp = this;
    tmp.l53_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.m53_1 = Channel$default(2147483647, null, null, 6, null);
    var tmp_1 = this;
    Factory_getInstance();
    tmp_1.n53_1 = Channel$default(2147483647, null, null, 6, null);
    this.o53_1 = this.m53_1;
    this.p53_1 = this.n53_1;
    this.q53_1 = this.l53_1;
    var tmp$ret$2;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    var tmp0__get_ARRAYBUFFER__ua4cvm = null;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'arraybuffer';
    var tmp0_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    this.k53_1.binaryType = tmp$ret$2;
    this.k53_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.k53_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.k53_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.j53_1.l3(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n1b(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.m1a = function () {
    return this.j53_1;
  };
  JsWebSocketSession.prototype.p3t = function () {
    return this.o53_1;
  };
  JsWebSocketSession.prototype.q3t = function () {
    return this.p53_1;
  };
  JsWebSocketSession.prototype.n3t = function (_anonymous_parameter_0__qggqh8) {
    throw new WebSocketException('Max frame size switch is not supported in Js engine.');
  };
  JsWebSocketSession.prototype.o3t = function () {
    Companion_getInstance_0();
    return new Long(-1, 2147483647);
  };
  JsWebSocketSession.prototype.m3t = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    var tmp0_require = negotiatedExtensions.k();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.start.<anonymous>' call
      tmp$ret$0 = 'Extensions are not supported.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  JsWebSocketSession.prototype.s3t = function ($cont) {
    return Unit_getInstance();
  };
  function unwrapCancellationException(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  HttpClientEngineBase.prototype.p4b = get_supportedCapabilities;
  HttpClientEngineBase.prototype.r46 = install;
  KtorCallContextElement.prototype.l3 = get;
  KtorCallContextElement.prototype.r3 = fold;
  KtorCallContextElement.prototype.q3 = minusKey;
  KtorCallContextElement.prototype.s3 = plus;
  HttpRequest$1.prototype.m1a = get_coroutineContext;
  JsClientEngine.prototype.r46 = install;
  JsWebSocketSession.prototype.r3t = send;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = body;
  _.$_$.b = webSocketSession;
  _.$_$.c = Js_getInstance;
  _.$_$.d = Plugin_getInstance_5;
  _.$_$.e = Phases_getInstance;
  _.$_$.f = Phases_getInstance_1;
  _.$_$.g = EmptyContent_getInstance;
  _.$_$.h = HttpClientPlugin;
  _.$_$.i = pluginOrNull;
  _.$_$.j = plugin;
  _.$_$.k = HttpRequestBuilder;
  _.$_$.l = accept;
  _.$_$.m = url;
  _.$_$.n = HttpResponseContainer;
  _.$_$.o = HttpStatement;
  _.$_$.p = HttpClient_0;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map

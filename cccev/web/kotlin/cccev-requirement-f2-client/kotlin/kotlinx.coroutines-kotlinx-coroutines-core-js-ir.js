(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var isObject = kotlin_kotlin.$_$.da;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var plus = kotlin_kotlin.$_$.y8;
  var get = kotlin_kotlin.$_$.v8;
  var fold = kotlin_kotlin.$_$.u8;
  var minusKey = kotlin_kotlin.$_$.w8;
  var Continuation = kotlin_kotlin.$_$.t8;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.q4;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.m8;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var Key_getInstance = kotlin_kotlin.$_$.p4;
  var equals = kotlin_kotlin.$_$.m9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var intercepted = kotlin_kotlin.$_$.n8;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var isInterface = kotlin_kotlin.$_$.ba;
  var toString = kotlin_kotlin.$_$.fe;
  var toString_0 = kotlin_kotlin.$_$.qa;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.la;
  var hashCode = kotlin_kotlin.$_$.r9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.c3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.e3;
  var Companion_getInstance = kotlin_kotlin.$_$.c5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var createFailure = kotlin_kotlin.$_$.td;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.p8;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.o8;
  var get_0 = kotlin_kotlin.$_$.q8;
  var minusKey_0 = kotlin_kotlin.$_$.r8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.s8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var Enum = kotlin_kotlin.$_$.sc;
  var startCoroutine = kotlin_kotlin.$_$.a9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.be;
  var Long = kotlin_kotlin.$_$.xc;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b5;
  var RuntimeException = kotlin_kotlin.$_$.cd;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.n2;
  var captureStack = kotlin_kotlin.$_$.e9;
  var Error_0 = kotlin_kotlin.$_$.tc;
  var Error_init_$Init$ = kotlin_kotlin.$_$.u1;
  var Element = kotlin_kotlin.$_$.x8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ee;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z;
  var CancellationException = kotlin_kotlin.$_$.k8;
  var ArrayList = kotlin_kotlin.$_$.i5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var anyToString = kotlin_kotlin.$_$.b9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.pd;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.r2;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var returnIfSuspended = kotlin_kotlin.$_$.i;
  var isSuspendFunction = kotlin_kotlin.$_$.fa;
  var addSuppressed = kotlin_kotlin.$_$.qd;
  var fillArrayVal = kotlin_kotlin.$_$.o9;
  var fill = kotlin_kotlin.$_$.u6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var fill$default = kotlin_kotlin.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var NoSuchElementException = kotlin_kotlin.$_$.yc;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.l2;
  var IllegalStateException = kotlin_kotlin.$_$.wc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.f2;
  var Unit = kotlin_kotlin.$_$.od;
  var toLong = kotlin_kotlin.$_$.oa;
  var arrayIterator = kotlin_kotlin.$_$.c9;
  var copyOf = kotlin_kotlin.$_$.l6;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.de;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var coerceAtLeast = kotlin_kotlin.$_$.ua;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var arrayCopy = kotlin_kotlin.$_$.x5;
  var toLongOrNull = kotlin_kotlin.$_$.dc;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d3;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.p1;
  var coerceIn = kotlin_kotlin.$_$.xa;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.q2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.t1b(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.o1b(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, undefined, [Element], undefined, undefined, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, undefined, [Job, ParentJob], undefined, undefined, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], undefined, undefined, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor($awaitCOROUTINE$0, '$awaitCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], undefined, undefined, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, undefined, undefined, undefined, [0]);
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.y1d(value, idempotent) : $handler(value, idempotent);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted], undefined, undefined, []);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(RemoveOnCancel, 'RemoveOnCancel', classMeta, BeforeResumeCancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask, undefined, undefined, undefined, []);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation], undefined, undefined, []);
  setMetadataFor(Active, 'Active', objectMeta, undefined, [NotCompleted], undefined, undefined, []);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor($awaitCOROUTINE$1, '$awaitCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], undefined, undefined, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally, undefined, undefined, undefined, []);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor], undefined, undefined, []);
  setMetadataFor(Key_0, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key_1, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement, undefined, undefined, undefined, []);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum, undefined, undefined, undefined, []);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().h1h(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0, undefined, undefined, undefined, []);
  setMetadataFor(Key_2, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, undefined, [ChildHandle], undefined, undefined, []);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Empty, 'Empty', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete], undefined, undefined, []);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete], undefined, undefined, []);
  setMetadataFor(Finishing, 'Finishing', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl, undefined, undefined, undefined, []);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle], undefined, undefined, []);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(SelectAwaitOnCompletion, 'SelectAwaitOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], undefined, undefined, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(NonCancellable, 'NonCancellable', objectMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Job], undefined, undefined, [0]);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, undefined, undefined, undefined, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$2, '$withTimeoutOrNullCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(Key_3, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicDesc, 'AtomicDesc', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractAtomicDesc, 'AbstractAtomicDesc', classMeta, AtomicDesc, undefined, undefined, undefined, []);
  setMetadataFor(RemoveFirstDesc, 'RemoveFirstDesc', classMeta, AbstractAtomicDesc, undefined, undefined, undefined, []);
  setMetadataFor(TryPollDesc, 'TryPollDesc', classMeta, RemoveFirstDesc, undefined, undefined, undefined, []);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(Itr, 'Itr', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed], undefined, undefined, []);
  setMetadataFor(ReceiveElement, 'ReceiveElement', classMeta, Receive, undefined, undefined, undefined, []);
  setMetadataFor(ReceiveElementWithUndeliveredHandler, 'ReceiveElementWithUndeliveredHandler', classMeta, ReceiveElement, undefined, undefined, undefined, []);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive, undefined, undefined, undefined, []);
  setMetadataFor(ReceiveSelect, 'ReceiveSelect', classMeta, Receive, undefined, undefined, undefined, []);
  setMetadataFor(AbstractChannel$onReceive$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.a1r(cause) : $handler(cause);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, undefined, [SendChannel], undefined, undefined, [1]);
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.t1b(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, [AbstractSendChannel, SendChannel, ReceiveChannel], undefined, undefined, [0, 1]);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send, undefined, undefined, undefined, []);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed], undefined, undefined, []);
  setMetadataFor(SendElement, 'SendElement', classMeta, Send, undefined, undefined, undefined, []);
  setMetadataFor(SendElementWithUndeliveredHandler, 'SendElementWithUndeliveredHandler', classMeta, SendElement, undefined, undefined, undefined, []);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Factory, 'Factory', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Failed, 'Failed', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException, undefined, undefined, undefined, []);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], undefined, undefined, [0, 1]);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, undefined, [CoroutineScope, SendChannel], undefined, undefined, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], undefined, undefined, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_0, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($emitAllImplCOROUTINE$8, '$emitAllImplCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($collectCOROUTINE$9, '$collectCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta, undefined, undefined, undefined, undefined, []);
  function fuse$default(context, capacity, onBufferOverflow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0)) {
      Factory_getInstance();
      capacity = -3;
    }
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    return $handler == null ? this.z1x(context, capacity, onBufferOverflow) : $handler(context, capacity, onBufferOverflow);
  }
  setMetadataFor(FusibleFlow, 'FusibleFlow', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector, FusibleFlow], undefined, undefined, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SharingCommand, 'SharingCommand', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(StartedEagerly, 'StartedEagerly', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StartedLazily$command$slambda$slambda, 'StartedLazily$command$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(StartedLazily$command$slambda, 'StartedLazily$command$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(StartedLazily, 'StartedLazily', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StateFlow, 'StateFlow', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$11, '$collectCOROUTINE$11', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, StateFlow, FlowCollector, FusibleFlow], undefined, undefined, [1]);
  setMetadataFor(StateFlowSlot, 'StateFlowSlot', classMeta, AbstractSharedFlowSlot, undefined, undefined, undefined, [0]);
  setMetadataFor(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', classMeta, SharedFlowImpl, [StateFlow, SharedFlowImpl], undefined, undefined, [1]);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, undefined, [FusibleFlow], undefined, undefined, [1]);
  setMetadataFor(ChannelFlowOperator, 'ChannelFlowOperator', classMeta, ChannelFlow, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', classMeta, ChannelFlowOperator, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlowOperator$collectWithContextUndispatched$slambda, 'ChannelFlowOperator$collectWithContextUndispatched$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$12, '$collectCOROUTINE$12', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(UndispatchedContextCollector$emitRef$slambda, 'UndispatchedContextCollector$emitRef$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(UndispatchedContextCollector, 'UndispatchedContextCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(StackFrameContinuation, 'StackFrameContinuation', classMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ChannelFlowTransformLatest, 'ChannelFlowTransformLatest', classMeta, ChannelFlowOperator, undefined, undefined, undefined, [1]);
  setMetadataFor(NopCollector, 'NopCollector', objectMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(SendingCollector, 'SendingCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(DistinctFlowImpl$collect$slambda, 'DistinctFlowImpl$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(DistinctFlowImpl, 'DistinctFlowImpl', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$15, '$collectCOROUTINE$15', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_1, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$16, '$collectCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_2, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(catchImpl$slambda, 'catchImpl$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($catchImplCOROUTINE$14, '$catchImplCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(mapLatest$slambda, 'mapLatest$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(SharingConfig, 'SharingConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($collectCOROUTINE$20, '$collectCOROUTINE$20', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ReadonlyStateFlow, 'ReadonlyStateFlow', classMeta, undefined, [StateFlow, FusibleFlow], undefined, undefined, [1]);
  setMetadataFor($onSubscriptionCOROUTINE$21, '$onSubscriptionCOROUTINE$21', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1, 0]);
  setMetadataFor(launchSharing$slambda$slambda, 'launchSharing$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(launchSharing$slambda$slambda_1, 'launchSharing$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(launchSharing$slambda, 'launchSharing$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(toCollection$slambda, 'toCollection$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($toCollectionCOROUTINE$24, '$toCollectionCOROUTINE$24', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($emitCOROUTINE$28, '$emitCOROUTINE$28', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_3, undefined, classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_4, undefined, classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor($emitCOROUTINE$29, '$emitCOROUTINE$29', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_5, undefined, classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor($firstOrNullCOROUTINE$25, '$firstOrNullCOROUTINE$25', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($firstCOROUTINE$26, '$firstCOROUTINE$26', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($firstCOROUTINE$27, '$firstCOROUTINE$27', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicOp, 'AtomicOp', classMeta, OpDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation], undefined, undefined, []);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(Symbol, 'Symbol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SeqNumber, 'SeqNumber', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SelectOnCancelling, 'SelectOnCancelling', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(PairSelectOp, 'PairSelectOp', classMeta, OpDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(AtomicSelectOp, 'AtomicSelectOp', classMeta, AtomicOp, undefined, undefined, undefined, []);
  setMetadataFor(DisposeNode, 'DisposeNode', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(SelectBuilderImpl, 'SelectBuilderImpl', classMeta, LinkedListHead, [LinkedListHead, Continuation], undefined, undefined, []);
  setMetadataFor(CloseableCoroutineDispatcher, 'CloseableCoroutineDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, undefined, undefined, undefined, []);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], undefined, undefined, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue, undefined, undefined, undefined, []);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], undefined, undefined, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(ChildCancelledException, 'ChildCancelledException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PrepareOp, 'PrepareOp', classMeta, OpDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.i1a(parentContext.l3(Key_getInstance_3()));
    }
    this.l1a_1 = parentContext.s3(this);
  }
  AbstractCoroutine.prototype.h3 = function () {
    return this.l1a_1;
  };
  AbstractCoroutine.prototype.m1a = function () {
    return this.l1a_1;
  };
  AbstractCoroutine.prototype.n1a = function () {
    return JobSupport.prototype.n1a.call(this);
  };
  AbstractCoroutine.prototype.o1a = function (value) {
  };
  AbstractCoroutine.prototype.p1a = function (cause, handled) {
  };
  AbstractCoroutine.prototype.q1a = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.r1a = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.p1a(state.s1a_1, state.u1a());
    } else {
      this.o1a((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.i3 = function (result) {
    var state = this.v1a(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.w1a(state);
  };
  AbstractCoroutine.prototype.w1a = function (state) {
    return this.x1a(state);
  };
  AbstractCoroutine.prototype.y1a = function (exception) {
    handleCoroutineException(this.l1a_1, exception);
  };
  AbstractCoroutine.prototype.z1a = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.l1a_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.z1a.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.z1a.call(this);
  };
  AbstractCoroutine.prototype.a1b = function (start, receiver, block) {
    start.d1b(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.h1c() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.a1b(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.h1c() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.a1b(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.e1c = function (exception) {
    handleCoroutineException(this.l1a_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.o1c_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.j1b = function () {
    startCoroutineCancellable_0(this.o1c_1, this);
  };
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1c_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.x1c_1.y1c(this);
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.c1d = function () {
    var tmp = this.d1d();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  DeferredCoroutine.prototype.e1d = function ($cont) {
    var tmp = new $awaitCOROUTINE$0(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  DeferredCoroutine.prototype.f1d = function (select, block) {
    return this.g1d(select, block);
  };
  DeferredCoroutine.prototype.h1d = function (select, block) {
    return this.f1d(select, block);
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.m1d_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.j1b = function () {
    startCoroutineCancellable_0(this.m1d_1, this);
  };
  function withContext(context, block, $cont) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      var oldContext = tmp0__anonymous__q1qw7t.h3();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive_0(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, tmp0__anonymous__q1qw7t);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.l3(Key_getInstance()), oldContext.l3(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
      startCoroutineCancellable$default(block, coroutine_1, coroutine_1, null, 4, null);
      tmp$ret$0 = coroutine_1.s1d();
    }
    return tmp$ret$0;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.r1d_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.r1d_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.r1d_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.r1d_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.r1d_1 = atomic$int$1(0);
  }
  DispatchedCoroutine.prototype.x1a = function (state) {
    this.w1a(state);
  };
  DispatchedCoroutine.prototype.w1a = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    var tmp = intercepted(this.w1d_1);
    var tmp_0 = recoverResult(state, this.w1d_1);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  DispatchedCoroutine.prototype.s1d = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.lg());
    if (state instanceof CompletedExceptionally)
      throw state.s1a_1;
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.d1e(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.g1e_1 = handle;
  }
  DisposeOnCancel.prototype.h1e = function (cause) {
    return this.g1e_1.i1e();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.g1e_1 + ']';
  };
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.d1e(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.p1e();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.w1e();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.x1e_1 = node;
  }
  RemoveOnCancel.prototype.h1e = function (cause) {
    this.x1e_1.b1f();
  };
  RemoveOnCancel.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.x1e_1 + ']';
  };
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.lg();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.d1f_1)) {
      var tmp_0 = $this.r1e_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).c1f();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.r1e_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.e1f(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException($this.h3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.t1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.t1e_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.t1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.t1e_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.h3().l3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.p1b(true, false, tmp$ret$1, 2, null);
    $this.v1e_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.r1e_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1f($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.g1f();
    $this.h1f(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.u1e_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.m1f()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.i1f(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.s1a_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.u1e_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.d1f_1, onCancellation, idempotent);
          if (!$this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.q1f_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.g1f();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.r1e_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.s1e_1 = this.r1e_1.h3();
    this.t1e_1 = atomic$int$1(0);
    this.u1e_1 = atomic$ref$1(Active_getInstance());
    this.v1e_1 = null;
  }
  CancellableContinuationImpl.prototype.s1f = function () {
    return this.r1e_1;
  };
  CancellableContinuationImpl.prototype.h3 = function () {
    return this.s1e_1;
  };
  CancellableContinuationImpl.prototype.lg = function () {
    return this.u1e_1.kotlinx$atomicfu$value;
  };
  CancellableContinuationImpl.prototype.n1a = function () {
    var tmp = this.lg();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  CancellableContinuationImpl.prototype.g1b = function () {
    var tmp = this.lg();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.h1b = function () {
    var tmp = this.lg();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.t1f = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.g1b()) {
      handle.i1e();
      this.v1e_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.w1e = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.u1e_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.q1f_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.g1f();
      return false;
    }
    this.t1e_1.kotlinx$atomicfu$value = 0;
    this.u1e_1.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.u1f = function () {
    return this.lg();
  };
  CancellableContinuationImpl.prototype.v1f = function (takenState, cause) {
    var tmp0_loop = this.u1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.w1f();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.x1f(null, null, null, null, cause, 15, null);
            if (this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.y1f(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.h1f = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.u1e_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.z1f(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.d1f_1);
        return true;
      }
    }
  };
  CancellableContinuationImpl.prototype.a1g = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.h1f(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.z1f = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException(this.h3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.i1f = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.h3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.b1g = function (parent) {
    return parent.k1b();
  };
  CancellableContinuationImpl.prototype.s1d = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.v1e_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.lg();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.s1a_1, this);
    if (get_isCancellableMode(this.d1f_1)) {
      var job = this.h3().l3(Key_getInstance_3());
      if (!(job == null) ? !job.n1a() : false) {
        var cause = job.k1b();
        this.v1f(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.c1g(state);
  };
  CancellableContinuationImpl.prototype.i3 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.d1f_1;
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.f1e = function (value, onCancellation) {
    return resumeImpl(this, value, this.d1f_1, onCancellation);
  };
  CancellableContinuationImpl.prototype.d1e = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.u1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.d1g()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s1a_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.o1f_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.w1f()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.r1f_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.x1f(null, cancelHandler, null, null, null, 29, null);
              if (this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
              if (this.u1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.g1f = function () {
    var tmp0_elvis_lhs = this.v1e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.i1e();
    this.v1e_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.y1d = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.a1e = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.b1e = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.c1e = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.d1f_1);
  };
  CancellableContinuationImpl.prototype.e1e = function (_this__u8e3s4, value) {
    var tmp = this.r1e_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1e_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.d1f_1;
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.c1g = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.n1f_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.e1g = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.e1g.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.r1e_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.z1a() + '(' + toDebugString(this.r1e_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.z1a = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.n1f_1 = result;
    this.o1f_1 = cancelHandler;
    this.p1f_1 = onCancellation;
    this.q1f_1 = idempotentResume;
    this.r1f_1 = cancelCause;
  }
  CompletedContinuation.prototype.w1f = function () {
    return !(this.r1f_1 == null);
  };
  CompletedContinuation.prototype.y1f = function (cont, cause) {
    var tmp0_safe_receiver = this.o1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.z1f(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.p1f_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.i1f(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  CompletedContinuation.prototype.h1g = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.x1f = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.n1f_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.o1f_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.p1f_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.q1f_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.r1f_1;
    return this.h1g(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.n1f_1) + ', cancelHandler=' + this.o1f_1 + ', onCancellation=' + this.p1f_1 + ', idempotentResume=' + toString(this.q1f_1) + ', cancelCause=' + this.r1f_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.n1f_1 == null ? 0 : hashCode(this.n1f_1);
    result = imul(result, 31) + (this.o1f_1 == null ? 0 : hashCode(this.o1f_1)) | 0;
    result = imul(result, 31) + (this.p1f_1 == null ? 0 : hashCode(this.p1f_1)) | 0;
    result = imul(result, 31) + (this.q1f_1 == null ? 0 : hashCode(this.q1f_1)) | 0;
    result = imul(result, 31) + (this.r1f_1 == null ? 0 : hashCode(this.r1f_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.n1f_1, tmp0_other_with_cast.n1f_1))
      return false;
    if (!equals(this.o1f_1, tmp0_other_with_cast.o1f_1))
      return false;
    if (!equals(this.p1f_1, tmp0_other_with_cast.p1f_1))
      return false;
    if (!equals(this.q1f_1, tmp0_other_with_cast.q1f_1))
      return false;
    if (!equals(this.r1f_1, tmp0_other_with_cast.r1f_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.i1g_1 = handler;
  }
  InvokeOnCancel.prototype.h1e = function (cause) {
    this.i1g_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.i1g_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferred$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return CompletableDeferred(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1g_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.r1g_1.y1c(this);
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.i1a(parent);
  }
  CompletableDeferredImpl.prototype.s1b = function () {
    return true;
  };
  CompletableDeferredImpl.prototype.c1d = function () {
    var tmp = this.d1d();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CompletableDeferredImpl.prototype.e1d = function ($cont) {
    var tmp = new $awaitCOROUTINE$1(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  CompletableDeferredImpl.prototype.f1d = function (select, block) {
    return this.g1d(select, block);
  };
  CompletableDeferredImpl.prototype.h1d = function (select, block) {
    return this.f1d(select, block);
  };
  CompletableDeferredImpl.prototype.u1g = function (value) {
    return this.v1g(value);
  };
  CompletableDeferredImpl.prototype.w1g = function (exception) {
    return this.v1g(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.s1a_1 = cause;
    this.t1a_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.u1a = function () {
    return this.t1a_1.kotlinx$atomicfu$value;
  };
  CompletedExceptionally.prototype.d1g = function () {
    return this.t1a_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.s1a_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.l1f_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.m1f = function () {
    return this.l1f_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_1 = recoverStackTrace(exception, caller);
      tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.y1g_1 = result;
    this.z1g_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.y1g_1) + ', onCancellation=' + this.z1g_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.y1g_1 == null ? 0 : hashCode(this.y1g_1);
    result = imul(result, 31) + hashCode(this.z1g_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.y1g_1, tmp0_other_with_cast.y1g_1))
      return false;
    if (!equals(this.z1g_1, tmp0_other_with_cast.z1g_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.s1a_1, uCont);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp2_success = Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.b1h = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.j3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.k3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.m10();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.l3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.d1h(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.f1h_1 = name;
  }
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.f1h_1 + ')';
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this.f1h_1);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.f1h_1 === tmp0_other_with_cast.f1h_1))
      return false;
    return true;
  };
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.m1a().l3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.t1b(cause);
  }
  function cancel$default_1(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  function CoroutineScope() {
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.m1a = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.l3(Key_getInstance_3()) == null)) {
      tmp = context;
    } else {
      tmp = context.s3(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.m1a().l3(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1a();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function plus_0(_this__u8e3s4, context) {
    return new ContextScope(_this__u8e3s4.m1a().s3(context));
  }
  function ensureActive(_this__u8e3s4) {
    return ensureActive_0(_this__u8e3s4.m1a());
  }
  function coroutineScope(block, $cont) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var coroutine = new ScopeCoroutine(tmp0__anonymous__q1qw7t.h3(), tmp0__anonymous__q1qw7t);
    tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
    return tmp$ret$0;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.d1b = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.y3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.h1c = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function delay(timeMillis, $cont) {
    if (timeMillis.x(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.x(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.h3()).g1h(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.s1d();
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.l3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.j1h_1 = new Long(0, 0);
    this.k1h_1 = false;
    this.l1h_1 = null;
  }
  EventLoop.prototype.m1h = function () {
    var tmp0_elvis_lhs = this.l1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.q1h();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.f1g();
    return true;
  };
  EventLoop.prototype.r1h = function (task) {
    var tmp0_elvis_lhs = this.l1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.l1h_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.s1h(task);
  };
  EventLoop.prototype.t1h = function () {
    return this.j1h_1.x(delta(this, true)) >= 0;
  };
  EventLoop.prototype.u1h = function () {
    var tmp0_safe_receiver = this.l1h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1h();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.w1h = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.j1h_1 = tmp0_this.j1h_1.v5(delta(this, unconfined));
    if (!unconfined)
      this.k1h_1 = true;
  };
  EventLoop.prototype.x1h = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.j1h_1 = tmp0_this.j1h_1.w5(delta(this, unconfined));
    if (this.j1h_1.x(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.k1h_1) {
      this.y1h();
    }
  };
  EventLoop.prototype.y1h = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.z1h_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.a1i = function () {
    var tmp0_elvis_lhs = this.z1h_1.c1i();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().z1h_1.d1i(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.x1d = function () {
    return null;
  };
  NonDisposableHandle.prototype.i1e = function () {
  };
  NonDisposableHandle.prototype.x1b = function (cause) {
    return false;
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
  function ensureActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_1(tmp0_safe_receiver);
    }
  }
  function ensureActive_1(_this__u8e3s4) {
    if (!_this__u8e3s4.n1a())
      throw _this__u8e3s4.k1b();
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    return _this__u8e3s4.t1b(CancellationException_init_$Create$_0(message, cause));
  }
  function cancel$default_2(_this__u8e3s4, message, cause, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    return cancel_1(_this__u8e3s4, message, cause);
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.l3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = _this__u8e3s4.l3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1b(cause);
    }
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l3(Key_getInstance_3());
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1a()) === true;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCompletion(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.n1b(tmp$ret$1);
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.e1i_1 = isActive;
  }
  Empty.prototype.n1a = function () {
    return this.e1i_1;
  };
  Empty.prototype.f1i = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.e1i_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.n1a = function () {
    return true;
  };
  NodeList.prototype.f1i = function () {
    return this;
  };
  NodeList.prototype.j1i = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.q6('List{');
    tmp0_apply.q6(state);
    tmp0_apply.q6('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.y1e_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.q6(', ');
        }
        tmp0_apply.p6(tmp0__anonymous__q1qw7t);
      }
      cur = cur.y1e_1;
    }
    tmp0_apply.q6(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.j1i('Active') : LinkedListHead.prototype.toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.u1i = function () {
    var tmp = this.t1i_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.n1a = function () {
    return true;
  };
  JobNode.prototype.f1i = function () {
    return null;
  };
  JobNode.prototype.i1e = function () {
    return this.u1i().r1b(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.u1i()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.z1i_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.z1i_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1a_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.a1j();
    var exceptions = state.b1j(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.e1c(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).d1g();
      }
    }
    if (!wasCancelling) {
      $this.b1c(finalException);
    }
    $this.r1a(finalState);
    var casSuccess = $this.g1a_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.k()) {
      if (state.a1j()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.q1a() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.j(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.g();
        while (tmp0_iterator_0.h()) {
          var element_0 = tmp0_iterator_0.i();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.f() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.f());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.g();
    while (tmp0_iterator.h()) {
      var exception = tmp0_iterator.i();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.g1a_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.b1c(null);
    $this.r1a(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.f1b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.i1e();
      $this.e1b(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s1a_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.y1a(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.f1i();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.b1c(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.y1e_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.y1e_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.y1a(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.c1c())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.f1b();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.x1b(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.y1e_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.y1e_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.y1a(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.e1i_1)
        return 0;
      if (!$this.g1a_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.j1b();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.g1a_1.atomicfu$compareAndSet(state, state.c1j_1))
          return -1;
        $this.j1b();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.t1i_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.lg() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.n1i(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.e1i_1 ? list : new InactiveNodeList(list);
    $this.g1a_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.v1i(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.y1e_1;
    var list = tmp$ret$0;
    $this.g1a_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.lg();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.n1b(tmp$ret$1));
    tmp$ret$2 = cancellable.s1d();
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.lg();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.d1j();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.q1a() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).z1b();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.lg();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.e1j())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.a1j();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.f1j(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.g1j();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.w1i_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.n1a()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.f1i();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.g1a_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.d1j())
      return get_COMPLETING_ALREADY();
    finishing.h1j(true);
    if (!(finishing === state)) {
      if (!$this.g1a_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.a1j();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.f1j(tmp0_safe_receiver.s1a_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.g1j();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1a_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.f1i();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.m1j_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.p1b(false, false, tmp$ret$1, 1, null);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.x1a(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.a1f_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.z1e_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.y1e_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.a1f_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.a1j() ? 'Cancelling' : state.d1j() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.n1a() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.w1i_1 = list;
    this.x1i_1 = atomic$boolean$1(isCompleting);
    this.y1i_1 = atomic$ref$1(rootCause);
    this.z1i_1 = atomic$ref$1(null);
  }
  Finishing.prototype.f1i = function () {
    return this.w1i_1;
  };
  Finishing.prototype.h1j = function (value) {
    this.x1i_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.d1j = function () {
    return this.x1i_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.n1j = function (value) {
    this.y1i_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.g1j = function () {
    return this.y1i_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.e1j = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.a1j = function () {
    return !(this.g1j() == null);
  };
  Finishing.prototype.n1a = function () {
    return this.g1j() == null;
  };
  Finishing.prototype.b1j = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.g1j();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.da(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.f1j = function (exception) {
    var rootCause = this.g1j();
    if (rootCause == null) {
      this.n1j(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.a1j() + ', completing=' + this.d1j() + ', rootCause=' + this.g1j() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.w1i_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.s1j_1 = parent;
    this.t1j_1 = state;
    this.u1j_1 = child;
    this.v1j_1 = proposedUpdate;
  }
  ChildCompletion.prototype.h1e = function (cause) {
    continueCompleting(this.s1j_1, this.t1j_1, this.u1j_1, this.v1j_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.c1k_1 = job;
  }
  AwaitContinuation.prototype.b1g = function (parent) {
    var state = this.c1k_1.lg();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.g1j();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.s1a_1;
    return parent.k1b();
  };
  AwaitContinuation.prototype.z1a = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.t1f();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.n1b(tmp$ret$1));
    tmp$ret$2 = cont.s1d();
    return tmp$ret$2;
  }
  function JobSupport(active) {
    this.g1a_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.h1a_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.o = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype.e1b = function (value) {
    this.h1a_1.kotlinx$atomicfu$value = value;
  };
  JobSupport.prototype.f1b = function () {
    return this.h1a_1.kotlinx$atomicfu$value;
  };
  JobSupport.prototype.i1a = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.e1b(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.i1b();
    var handle = parent.a1c(this);
    this.e1b(handle);
    if (this.g1b()) {
      handle.i1e();
      this.e1b(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.lg = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.g1a_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.d1k(this);
    }
  };
  JobSupport.prototype.n1a = function () {
    var state = this.lg();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.n1a();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.g1b = function () {
    var tmp = this.lg();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.h1b = function () {
    var state = this.lg();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.a1j();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobSupport.prototype.i1b = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.lg();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.j1b = function () {
  };
  JobSupport.prototype.k1b = function () {
    var state = this.lg();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.g1j();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.l1b(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.m1b(state.s1a_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.l1b = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.q1a() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.m1b = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.l1b(_this__u8e3s4, message);
  };
  JobSupport.prototype.n1b = function (handler) {
    return this.o1b(false, true, handler);
  };
  JobSupport.prototype.o1b = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.lg();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.e1i_1) {
            if (this.g1a_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.f1i();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.g1j();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.d1j();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s1a_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.q1b = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.h3();
      ensureActive_0(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.r1b = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.lg();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.g1a_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.f1i() == null)) {
            node.b1f();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.s1b = function () {
    return false;
  };
  JobSupport.prototype.t1b = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.q1a() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.v1b(tmp);
  };
  JobSupport.prototype.q1a = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.v1b = function (cause) {
    this.y1b(cause);
  };
  JobSupport.prototype.w1b = function (parentJob) {
    this.y1b(parentJob);
  };
  JobSupport.prototype.x1b = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.y1b(cause) ? this.d1c() : false;
  };
  JobSupport.prototype.e1k = function (cause) {
    return this.y1b(cause);
  };
  JobSupport.prototype.y1b = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.s1b()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.x1a(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.z1b = function () {
    var state = this.lg();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.g1j();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.s1a_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.v1g = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.lg();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.x1a(finalState);
          return true;
        }
      }
    }
  };
  JobSupport.prototype.v1a = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.lg();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  JobSupport.prototype.a1c = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.p1b(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.y1a = function (exception) {
    throw exception;
  };
  JobSupport.prototype.b1c = function (cause) {
  };
  JobSupport.prototype.c1c = function () {
    return false;
  };
  JobSupport.prototype.d1c = function () {
    return true;
  };
  JobSupport.prototype.e1c = function (exception) {
    return false;
  };
  JobSupport.prototype.r1a = function (state) {
  };
  JobSupport.prototype.x1a = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.f1c() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.f1c = function () {
    return this.z1a() + '{' + stateString(this, this.lg()) + '}';
  };
  JobSupport.prototype.z1a = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.i1d = function () {
    var state = this.lg();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  JobSupport.prototype.d1d = function () {
    var state = this.lg();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.s1a_1;
    return unboxState(state);
  };
  JobSupport.prototype.y1c = function ($cont) {
    $l$loop: while (true) {
      var state = this.lg();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.s1a_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.prototype.g1d = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause1Internal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.lg();
      if (select.f1k())
        return Unit_getInstance();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        if (select.i1k()) {
          if (tmp0__anonymous__q1qw7t instanceof CompletedExceptionally) {
            select.h1k(tmp0__anonymous__q1qw7t.s1a_1);
          } else {
            var tmp = unboxState(tmp0__anonymous__q1qw7t);
            startCoroutineUnintercepted(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select.g1k());
          }
        }
        return Unit_getInstance();
      }
      if (startInternal(this, tmp0__anonymous__q1qw7t) === 0) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new SelectAwaitOnCompletion(select, block);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        select.j1k(this.n1b(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  JobSupport.prototype.g1c = function (select, block) {
    var state = this.lg();
    if (state instanceof CompletedExceptionally) {
      select.h1k(state.s1a_1);
    } else {
      var tmp = unboxState(state);
      var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp_1 = select.g1k();
      startCoroutineCancellable$default(block, tmp_0, tmp_1, null, 4, null);
    }
  };
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.c1j_1 = list;
  }
  InactiveNodeList.prototype.f1i = function () {
    return this.c1j_1;
  };
  InactiveNodeList.prototype.n1a = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.c1j_1.j1i('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.m1j_1 = childJob;
  }
  ChildHandleNode.prototype.x1d = function () {
    return this.u1i();
  };
  ChildHandleNode.prototype.h1e = function (cause) {
    return this.m1j_1.w1b(this.u1i());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  ChildHandleNode.prototype.x1b = function (cause) {
    return this.u1i().x1b(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.o1k_1 = handler;
    this.p1k_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.h1e = function (cause) {
    if (this.p1k_1.atomicfu$compareAndSet(0, 1))
      this.o1k_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.u1k_1 = handler;
  }
  InvokeOnCompletion.prototype.h1e = function (cause) {
    return this.u1k_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.z1k_1 = continuation;
  }
  ResumeOnCompletion.prototype.h1e = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.z1k_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.i3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1l_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.f1l_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.h1e = function (cause) {
    var state = this.u1i().lg();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.f1l_1;
      var tmp1_resumeWithException = state.s1a_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.i3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.f1l_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.i3(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function SelectAwaitOnCompletion(select, block) {
    JobNode.call(this);
    this.k1l_1 = select;
    this.l1l_1 = block;
  }
  SelectAwaitOnCompletion.prototype.h1e = function (cause) {
    if (this.k1l_1.i1k()) {
      this.u1i().g1c(this.k1l_1, this.l1l_1);
    }
  };
  SelectAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function IncompleteStateBox(state) {
    this.a1l_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.q1l_1 = child;
  }
  ChildContinuation.prototype.h1e = function (cause) {
    this.q1l_1.a1g(this.q1l_1.b1g(this.u1i()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function handlesException($this) {
    var tmp = $this.f1b();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1i();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.d1c())
        return true;
      var tmp_1 = parentJob.f1b();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.u1i();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.i1a(parent);
    this.t1l_1 = handlesException(this);
  }
  JobImpl.prototype.s1b = function () {
    return true;
  };
  JobImpl.prototype.d1c = function () {
    return this.t1l_1;
  };
  JobImpl.prototype.x1g = function () {
    return this.v1g(Unit_getInstance());
  };
  JobImpl.prototype.w1g = function (exception) {
    return this.v1g(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.y1l_1 = handle;
  }
  DisposeOnCompletion.prototype.h1e = function (cause) {
    return this.y1l_1.i1e();
  };
  DisposeOnCompletion.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.b1m();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.b1m = function () {
    var main = Dispatchers_getInstance().g1m();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.a1m();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function NonCancellable() {
    NonCancellable_instance = this;
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.i1m_1 = "NonCancellable can be used only as an argument for 'withContext', direct usages of its API are prohibited";
  }
  NonCancellable.prototype.n1a = function () {
    return true;
  };
  NonCancellable.prototype.h1b = function () {
    return false;
  };
  NonCancellable.prototype.i1b = function () {
    return false;
  };
  NonCancellable.prototype.q1b = function ($cont) {
    throw UnsupportedOperationException_init_$Create$('This job is always active');
  };
  NonCancellable.prototype.k1b = function () {
    throw IllegalStateException_init_$Create$('This job is always active');
  };
  NonCancellable.prototype.n1b = function (handler) {
    return NonDisposableHandle_getInstance();
  };
  NonCancellable.prototype.o1b = function (onCancelling, invokeImmediately, handler) {
    return NonDisposableHandle_getInstance();
  };
  NonCancellable.prototype.t1b = function (cause) {
  };
  NonCancellable.prototype.a1c = function (child) {
    return NonDisposableHandle_getInstance();
  };
  NonCancellable.prototype.toString = function () {
    return 'NonCancellable';
  };
  var NonCancellable_instance;
  function NonCancellable_getInstance() {
    if (NonCancellable_instance == null)
      new NonCancellable();
    return NonCancellable_instance;
  }
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.x1b = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    this.m1m_1 = coroutine;
    captureStack(this, TimeoutCancellationException);
  }
  function withTimeoutOrNull(timeMillis, block, $cont) {
    var tmp = new $withTimeoutOrNullCOROUTINE$2(timeMillis, block, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.h3(), uCont);
    this.c1n_1 = time;
  }
  TimeoutCoroutine.prototype.f1g = function () {
    this.e1k(TimeoutCancellationException_0(this.c1n_1, this));
  };
  TimeoutCoroutine.prototype.z1a = function () {
    return ScopeCoroutine.prototype.z1a.call(this) + '(timeMillis=' + toString_0(this.c1n_1) + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.w1d_1;
    var context = cont.h3();
    disposeOnCompletion(coroutine, get_delay(context).h1h(coroutine.c1n_1, coroutine, coroutine.l1a_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$2(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1m_1 = timeMillis;
    this.w1m_1 = block;
  }
  $withTimeoutOrNullCOROUTINE$2.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (this.v1m_1.x(new Long(0, 0)) <= 0)
              return null;
            this.x1m_1 = {_v: null};
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp0__anonymous__q1qw7t = this;
            var timeoutCoroutine = new TimeoutCoroutine(this.v1m_1, tmp0__anonymous__q1qw7t);
            this.x1m_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.w1m_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.eg_1 = 3;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.gg_1;
              if (e.m1m_1 === this.x1m_1._v) {
                return null;
              }
              throw e;
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
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.b1h = function (context) {
    return false;
  };
  Unconfined.prototype.c1h = function (context, block) {
    var yieldContext = context.l3(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.f1n_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_3();
    return Key_instance_3;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function get_ENQUEUE_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.j1n_1 == null))
        throw recoverStackTrace_0(result.k1n());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.l1n_1, receive)) {
          removeReceiveOnCancel($this.l1n_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.l1n_1.q1n();
        $this.m1n_1 = result;
        if (result instanceof Closed) {
          if (result.j1n_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.i3(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.k1n();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.i3(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.l1n_1.r1n_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.h3());
          }
          cancellable.f1e(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.s1d();
    return tmp$ret$5;
  }
  function receiveSuspend($this, receiveMode, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.r1n_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.r1n_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.q1n();
        if (result instanceof Closed) {
          receive.z1n(result);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.a1o((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.f1e(tmp_0, receive.e1o((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$1 = cancellable.s1d();
    return tmp$ret$1;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.f1o(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.g1o();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function TryPollDesc(queue) {
    RemoveFirstDesc.call(this, queue);
  }
  TryPollDesc.prototype.k1o = function (affected) {
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (!(tmp0_subject instanceof Send)) {
        tmp = get_POLL_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  TryPollDesc.prototype.l1o = function (prepareOp) {
    var tmp = prepareOp.m1o_1;
    var affected = tmp instanceof Send ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.s1o(prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  function registerSelectReceiveMode($this, select, receiveMode, block) {
    while (true) {
      if (select.f1k())
        return Unit_getInstance();
      if ($this.d1p()) {
        if (enqueueReceiveSelect($this, select, block, receiveMode))
          return Unit_getInstance();
      } else {
        var pollResult = $this.c1p(select);
        if (pollResult === get_ALREADY_SELECTED())
          return Unit_getInstance();
        else if (pollResult === get_POLL_FAILED()) {
        } else if (pollResult === get_RETRY_ATOMIC()) {
        } else {
          tryStartBlockUnintercepted(block, $this, select, receiveMode, pollResult);
        }
      }
    }
  }
  function tryStartBlockUnintercepted(_this__u8e3s4, $this, select, receiveMode, value) {
    var tmp0_subject = value;
    if (tmp0_subject instanceof Closed) {
      var tmp1_subject = receiveMode;
      if (tmp1_subject === 0) {
        throw recoverStackTrace_0(value.k1n());
      } else if (tmp1_subject === 1) {
        if (!select.i1k())
          return Unit_getInstance();
        startCoroutineUnintercepted(_this__u8e3s4, new ChannelResult(Companion_getInstance_1().g1p(value.j1n_1)), select.g1k());
      }
    } else {
      if (receiveMode === 1) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.toResult' call
        var tmp;
        if (value instanceof Closed) {
          tmp = Companion_getInstance_1().g1p(value.j1n_1);
        } else {
          var tmp_0 = Companion_getInstance_1();
          tmp = tmp_0.f1p((value == null ? true : isObject(value)) ? value : THROW_CCE());
        }
        tmp$ret$0 = tmp;
        startCoroutineUnintercepted(_this__u8e3s4, new ChannelResult(tmp$ret$0), select.g1k());
      } else {
        startCoroutineUnintercepted(_this__u8e3s4, value, select.g1k());
      }
    }
  }
  function enqueueReceiveSelect($this, select, block, receiveMode) {
    var node = new ReceiveSelect($this, select, block, receiveMode);
    var result = enqueueReceive($this, node);
    if (result) {
      select.j1k(node);
    }
    return result;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.d1e(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.i1p_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.h1p_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.h1e = function (cause) {
    if (this.h1p_1.b1f()) {
      this.i1p_1.j1p();
    }
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.h1p_1 + ']';
  };
  function Itr(channel) {
    this.l1n_1 = channel;
    this.m1n_1 = get_POLL_FAILED();
  }
  Itr.prototype.k1p = function ($cont) {
    if (!(this.m1n_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.m1n_1);
    this.m1n_1 = this.l1n_1.q1n();
    if (!(this.m1n_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.m1n_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.i = function () {
    var result = this.m1n_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.k1n());
    if (!(result === get_POLL_FAILED())) {
      this.m1n_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.x1n_1 = cont;
    this.y1n_1 = receiveMode;
  }
  ReceiveElement.prototype.a1o = function (value) {
    var tmp0_subject = this.y1n_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().f1p(value)) : value;
  };
  ReceiveElement.prototype.l1p = function (value, otherOp) {
    var tmp = this.a1o(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.x1n_1.a1e(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1o_1, this.e1o(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.m1p();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveElement.prototype.n1p = function (value) {
    return this.x1n_1.c1e(get_RESUME_TOKEN());
  };
  ReceiveElement.prototype.z1n = function (closed) {
    if (this.y1n_1 === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = this.x1n_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      tmp$ret$0 = Companion_getInstance_1().g1p(closed.j1n_1);
      var tmp1_resume = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp1_resume));
      tmp0_resume.i3(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp2_resumeWithException = this.x1n_1;
      var tmp3_resumeWithException = closed.k1n();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp3_resumeWithException));
      tmp2_resumeWithException.i3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.y1n_1 + ']';
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.u1p_1 = onUndeliveredElement;
  }
  ReceiveElementWithUndeliveredHandler.prototype.e1o = function (value) {
    return bindCancellationFun(this.u1p_1, value, this.x1n_1.h3());
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.y1p_1 = iterator;
    this.z1p_1 = cont;
  }
  ReceiveHasNext.prototype.l1p = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.z1p_1.a1e(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1o_1, this.e1o(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.m1p();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.n1p = function (value) {
    this.y1p_1.m1n_1 = value;
    this.z1p_1.c1e(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.z1n = function (closed) {
    var tmp;
    if (closed.j1n_1 == null) {
      tmp = this.z1p_1.z1d(false, null, 2, null);
    } else {
      tmp = this.z1p_1.b1e(closed.k1n());
    }
    var token = tmp;
    if (!(token == null)) {
      this.y1p_1.m1n_1 = closed;
      this.z1p_1.c1e(token);
    }
  };
  ReceiveHasNext.prototype.e1o = function (value) {
    var tmp0_safe_receiver = this.y1p_1.l1n_1.r1n_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.z1p_1.h3());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function ReceiveSelect(channel, select, block, receiveMode) {
    Receive.call(this);
    this.d1q_1 = channel;
    this.e1q_1 = select;
    this.f1q_1 = block;
    this.g1q_1 = receiveMode;
  }
  ReceiveSelect.prototype.l1p = function (value, otherOp) {
    var tmp = this.e1q_1.h1q(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  ReceiveSelect.prototype.n1p = function (value) {
    startCoroutineCancellable(this.f1q_1, this.g1q_1 === 1 ? new ChannelResult(Companion_getInstance_1().f1p(value)) : value, this.e1q_1.g1k(), this.e1o(value));
  };
  ReceiveSelect.prototype.z1n = function (closed) {
    if (!this.e1q_1.i1k())
      return Unit_getInstance();
    var tmp0_subject = this.g1q_1;
    if (tmp0_subject === 0) {
      this.e1q_1.h1k(closed.k1n());
    } else if (tmp0_subject === 1) {
      var tmp = new ChannelResult(Companion_getInstance_1().g1p(closed.j1n_1));
      var tmp_0 = this.e1q_1.g1k();
      startCoroutineCancellable$default(this.f1q_1, tmp, tmp_0, null, 4, null);
    }
  };
  ReceiveSelect.prototype.i1e = function () {
    if (this.b1f()) {
      this.d1q_1.j1p();
    }
  };
  ReceiveSelect.prototype.e1o = function (value) {
    var tmp0_safe_receiver = this.d1q_1.r1n_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.e1q_1.g1k().h3());
  };
  ReceiveSelect.prototype.toString = function () {
    return 'ReceiveSelect@' + get_hexAddress(this) + '[' + this.e1q_1 + ',receiveMode=' + this.g1q_1 + ']';
  };
  function AbstractChannel$onReceive$1(this$0) {
    this.i1q_1 = this$0;
  }
  AbstractChannel$onReceive$1.prototype.j1q = function (select, block) {
    registerSelectReceiveMode(this.i1q_1, select, 0, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  AbstractChannel$onReceive$1.prototype.h1d = function (select, block) {
    return this.j1q(select, block);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.q1n = function () {
    while (true) {
      var tmp0_elvis_lhs = this.m1q();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.s1o(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.n1q();
        return send.o1q();
      }
      send.p1q();
    }
  };
  AbstractChannel.prototype.c1p = function (select) {
    var pollOp = this.q1q();
    var failure = select.r1q(pollOp);
    if (!(failure == null))
      return failure;
    var send = pollOp.pg();
    send.n1q();
    return pollOp.pg().o1q();
  };
  AbstractChannel.prototype.s1q = function () {
    return !(this.t1q() == null) ? this.l1q() : false;
  };
  AbstractChannel.prototype.d1p = function () {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.s1n_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.y1e_1;
    var tmp_0 = tmp$ret$0;
    if (!(tmp_0 instanceof Send)) {
      tmp = this.l1q();
    } else {
      tmp = false;
    }
    return tmp;
  };
  AbstractChannel.prototype.u1q = function ($cont) {
    var result = this.q1n();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    return receiveSuspend(this, 0, $cont);
  };
  AbstractChannel.prototype.f1o = function (receive) {
    var tmp;
    if (this.k1q()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.s1n_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.z1e_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.n1i(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.s1n_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.z1e_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.l1q();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.n1i(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.v1q = function ($cont) {
    var result = this.q1n();
    if (!(result === get_POLL_FAILED())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp;
      if (result instanceof Closed) {
        tmp = Companion_getInstance_1().g1p(result.j1n_1);
      } else {
        var tmp_0 = Companion_getInstance_1();
        tmp = tmp_0.f1p((result == null ? true : isObject(result)) ? result : THROW_CCE());
      }
      tmp$ret$0 = tmp;
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $cont);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      return tmp_1;
    return new ChannelResult(tmp_1.w1q_1);
  };
  AbstractChannel.prototype.x1q = function () {
    var result = this.q1n();
    if (result === get_POLL_FAILED())
      return Companion_getInstance_1().y1q();
    if (result instanceof Closed)
      return Companion_getInstance_1().g1p(result.j1n_1);
    var tmp = Companion_getInstance_1();
    return tmp.f1p((result == null ? true : isObject(result)) ? result : THROW_CCE());
  };
  AbstractChannel.prototype.t1b = function (cause) {
    if (this.s1q())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.z1q(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.z1q = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.a1r(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.b1r(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.b1r = function (wasClosed) {
    var tmp0_elvis_lhs = this.c1r();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.z1e_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.b1f()) {
        previous.p1i();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.d1r(list, closed);
  };
  AbstractChannel.prototype.d1r = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.e1r(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.j(i);
              tmp1__anonymous__uwfjfc.e1r(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.g = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.q1q = function () {
    return new TryPollDesc(this.s1n_1);
  };
  AbstractChannel.prototype.f1r = function () {
    return new AbstractChannel$onReceive$1(this);
  };
  AbstractChannel.prototype.g1r = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = AbstractSendChannel.prototype.g1r.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.j1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.g1o = function () {
  };
  AbstractChannel.prototype.j1p = function () {
  };
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.s1n_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.y1e_1;
    var tmp_0 = tmp$ret$0;
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.i1r();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.s1r();
  }
  function sendSuspend($this, element, $cont) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendSuspend.<anonymous>' call
      loop: while (true) {
        if (_get_isFullImpl__v905xu($this)) {
          var send = $this.r1n_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.r1n_1);
          var enqueueResult = $this.n1r(send);
          if (enqueueResult == null) {
            removeOnCancellation(cancellable, send);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_2;
          } else {
            if (enqueueResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, enqueueResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              if (enqueueResult === get_ENQUEUE_FAILED()) {
              } else {
                if (enqueueResult instanceof Receive) {
                } else {
                  var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
        var offerResult = $this.j1r(element);
        if (offerResult === get_OFFER_SUCCESS()) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.i3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp$ret$0 = Unit_getInstance();
          break $l$block_2;
        } else {
          if (offerResult === get_OFFER_FAILED())
            continue loop;
          else {
            if (offerResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, offerResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              var tmp1_error = 'offerInternal returned ' + toString_0(offerResult);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.s1d();
    return tmp$ret$3;
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.s1r();
    var tmp0_safe_receiver = $this.r1n_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, sendException);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_safe_receiver));
      _this__u8e3s4.i3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    }
    var tmp$ret$4;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp$ret$3;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure_0 = Companion_getInstance();
    tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
    _this__u8e3s4.i3(tmp$ret$3);
    tmp$ret$4 = Unit_getInstance();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.t1n_1.kotlinx$atomicfu$value;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.t1n_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.z1e_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.b1f()) {
        previous.p1i();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.z1n(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.j(i);
              tmp2__anonymous__z9zvc9.z1n(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.q1r(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.s1n_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.y1e_1;
    var head = tmp$ret$0;
    if (head === $this.s1n_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.s1n_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.z1e_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.s1n_1;
    var cur = tmp0_forEach.y1e_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.y1e_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.w1r_1 = element;
  }
  SendBuffered.prototype.o1q = function () {
    return this.w1r_1;
  };
  SendBuffered.prototype.s1o = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  SendBuffered.prototype.n1q = function () {
  };
  SendBuffered.prototype.e1r = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.w1r_1 + ')';
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.r1n_1 = onUndeliveredElement;
    this.s1n_1 = new LinkedListHead();
    this.t1n_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.j1r = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.g1r();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.l1p(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.n1p(element);
        return receive.o1p();
      }
    }
  };
  AbstractSendChannel.prototype.c1r = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.s1n_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.z1e_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.t1q = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.s1n_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.y1e_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.m1q = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.s1n_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.y1e_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.o1i();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.x1r = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.s1n_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.z1e_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.n1i(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.k1r = function () {
    return !(this.c1r() == null);
  };
  AbstractSendChannel.prototype.l1r = function (element, $cont) {
    if (this.j1r(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    return sendSuspend(this, element, $cont);
  };
  AbstractSendChannel.prototype.m1r = function (element) {
    var result = this.j1r(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().f1p(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.c1r();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().y1q();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().g1p(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().g1p(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.n1r = function (send) {
    if (this.h1r()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.s1n_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.z1e_1;
        if (isInterface(tmp1__anonymous__uwfjfc, ReceiveOrClosed))
          return tmp1__anonymous__uwfjfc;
        tmp$ret$0 = true;
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.n1i(send);
        tmp$ret$1 = true;
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.s1n_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.z1e_1;
        if (isInterface(tmp3__anonymous__ufb84q, ReceiveOrClosed))
          return tmp3__anonymous__ufb84q;
        tmp$ret$2 = true;
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        tmp$ret$4 = this.i1r();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.n1i(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  AbstractSendChannel.prototype.a1r = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.s1n_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.z1e_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.n1i(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.s1n_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.z1e_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  AbstractSendChannel.prototype.p1r = function (handler) {
    if (!this.t1n_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.t1n_1.kotlinx$atomicfu$value;
      if (value === get_HANDLER_INVOKED()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this.c1r();
      if (!(closedToken == null) ? this.t1n_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
        handler(closedToken.j1n_1);
      }
    }
  };
  AbstractSendChannel.prototype.q1r = function (closed) {
  };
  AbstractSendChannel.prototype.g1r = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.s1n_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.y1e_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.o1i();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.r1r();
  };
  AbstractSendChannel.prototype.r1r = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.p1q = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.j1n_1 = closeCause;
  }
  Closed.prototype.s1r = function () {
    var tmp0_elvis_lhs = this.j1n_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.k1n = function () {
    var tmp0_elvis_lhs = this.j1n_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.o1p = function () {
    return this;
  };
  Closed.prototype.o1q = function () {
    return this;
  };
  Closed.prototype.s1o = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.n1q = function () {
  };
  Closed.prototype.l1p = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.n1p = function (value) {
  };
  Closed.prototype.e1r = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.j1n_1 + ']';
  };
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.o1p = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.prototype.e1o = function (value) {
    return null;
  };
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.b1s_1 = pollResult;
    this.c1s_1 = cont;
  }
  SendElement.prototype.o1q = function () {
    return this.b1s_1;
  };
  SendElement.prototype.s1o = function (otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.c1s_1.y1d(Unit_getInstance(), tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1o_1);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.m1p();
    }
    return get_RESUME_TOKEN();
  };
  SendElement.prototype.n1q = function () {
    return this.c1s_1.c1e(get_RESUME_TOKEN());
  };
  SendElement.prototype.e1r = function (closed) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp0_resumeWithException = this.c1s_1;
    var tmp1_resumeWithException = closed.s1r();
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
    tmp0_resumeWithException.i3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  SendElement.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.o1q() + ')';
  };
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.i1s_1 = onUndeliveredElement;
  }
  SendElementWithUndeliveredHandler.prototype.b1f = function () {
    if (!SendElement.prototype.b1f.call(this))
      return false;
    this.p1q();
    return true;
  };
  SendElementWithUndeliveredHandler.prototype.p1q = function () {
    callUndeliveredElement(this.i1s_1, this.o1q(), this.c1s_1.h3());
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.m1s_1) {
      $this.r1s_1.kotlinx$atomicfu$value = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.n1s_1;
    var tmp0 = tmp0_subject.y3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.m1s_1) {
      ensureCapacity($this, currentSize);
      $this.p1s_1[($this.q1s_1 + currentSize | 0) % $this.p1s_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.p1s_1[$this.q1s_1 % $this.p1s_1.length | 0] = null;
      $this.p1s_1[($this.q1s_1 + currentSize | 0) % $this.p1s_1.length | 0] = element;
      $this.q1s_1 = ($this.q1s_1 + 1 | 0) % $this.p1s_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.p1s_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.p1s_1.length, 2);
      var tmp1_min = $this.m1s_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.p1s_1[($this.q1s_1 + i | 0) % $this.p1s_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.p1s_1 = newBuffer;
      $this.q1s_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.m1s_1 = capacity;
    this.n1s_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.m1s_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.m1s_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.o1s_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.m1s_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    var tmp_0 = get_EMPTY();
    fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
    tmp$ret$3 = tmp2_apply;
    tmp.p1s_1 = tmp$ret$3;
    this.q1s_1 = 0;
    this.r1s_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.k1q = function () {
    return false;
  };
  ArrayChannel.prototype.l1q = function () {
    return this.r1s_1.kotlinx$atomicfu$value === 0;
  };
  ArrayChannel.prototype.h1r = function () {
    return false;
  };
  ArrayChannel.prototype.i1r = function () {
    return this.r1s_1.kotlinx$atomicfu$value === this.m1s_1 ? this.n1s_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  ArrayChannel.prototype.s1q = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.o1s_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.s1q.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.j1r = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.o1s_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.r1s_1.kotlinx$atomicfu$value;
      var tmp0_safe_receiver = this.c1r();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.g1r();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.r1s_1.kotlinx$atomicfu$value = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).l1p(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.r1s_1.kotlinx$atomicfu$value = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).n1p(element);
    return ensureNotNull(receive).o1p();
  };
  ArrayChannel.prototype.n1r = function (send) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.o1s_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueSend.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.n1r.call(this, send);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.q1n = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.o1s_1;
    var size = this.r1s_1.kotlinx$atomicfu$value;
    if (size === 0) {
      var tmp0_elvis_lhs = this.c1r();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.p1s_1[this.q1s_1];
    this.p1s_1[this.q1s_1] = null;
    this.r1s_1.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.m1s_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.m1q();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).s1o(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).o1q();
          break loop;
        }
        ensureNotNull(send).p1q();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.r1s_1.kotlinx$atomicfu$value = size;
      this.p1s_1[(this.q1s_1 + size | 0) % this.p1s_1.length | 0] = replacement;
    }
    this.q1s_1 = (this.q1s_1 + 1 | 0) % this.p1s_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).n1q();
    }
    return result;
  };
  ArrayChannel.prototype.c1p = function (select) {
    var send = null;
    var success = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.o1s_1;
    var size = this.r1s_1.kotlinx$atomicfu$value;
    if (size === 0) {
      var tmp0_elvis_lhs = this.c1r();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.p1s_1[this.q1s_1];
    this.p1s_1[this.q1s_1] = null;
    this.r1s_1.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.m1s_1) {
      loop: while (true) {
        var pollOp = this.q1q();
        var failure = select.r1q(pollOp);
        if (failure == null) {
          send = pollOp.pg();
          success = true;
          replacement = ensureNotNull(send).o1q();
          break loop;
        } else {
          if (failure === get_POLL_FAILED())
            break loop;
          else {
            if (failure === get_RETRY_ATOMIC()) {
            } else {
              if (failure === get_ALREADY_SELECTED()) {
                this.r1s_1.kotlinx$atomicfu$value = size;
                this.p1s_1[this.q1s_1] = result;
                return failure;
              } else {
                if (failure instanceof Closed) {
                  send = failure;
                  success = true;
                  replacement = failure;
                  break loop;
                } else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
    }
    var tmp;
    if (!(replacement === get_POLL_FAILED())) {
      tmp = !(replacement instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.r1s_1.kotlinx$atomicfu$value = size;
      this.p1s_1[(this.q1s_1 + size | 0) % this.p1s_1.length | 0] = replacement;
    } else {
      if (!select.i1k()) {
        this.r1s_1.kotlinx$atomicfu$value = size;
        this.p1s_1[this.q1s_1] = result;
        return get_ALREADY_SELECTED();
      }
    }
    this.q1s_1 = (this.q1s_1 + 1 | 0) % this.p1s_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (success) {
      ensureNotNull(send).n1q();
    }
    return result;
  };
  ArrayChannel.prototype.f1o = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.o1s_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.f1o.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.b1r = function (wasClosed) {
    var onUndeliveredElement = this.r1n_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.o1s_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.r1s_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.p1s_1[this.q1s_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.p1s_1[this.q1s_1] = get_EMPTY();
        this.q1s_1 = (this.q1s_1 + 1 | 0) % this.p1s_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.r1s_1.kotlinx$atomicfu$value = 0;
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.b1r.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ArrayChannel.prototype.r1r = function () {
    return '(buffer:capacity=' + this.m1s_1 + ',size=' + this.r1s_1.kotlinx$atomicfu$value + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.s1s_1 = 2147483647;
    this.t1s_1 = 0;
    this.u1s_1 = -1;
    this.v1s_1 = -2;
    this.w1s_1 = -3;
    this.x1s_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.y1s_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().y1s_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function ReceiveChannel() {
  }
  function SendChannel() {
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).z1s_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).z1s_1;
    // Inline function 'kotlin.error' call
    var tmp0_error = "Trying to call 'getOrThrow' on a failed channel result: " + toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1s_1;
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.z1s_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.z1s_1, other.z1s_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.z1s_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.z1s_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.e1p_1 = new Failed();
  }
  Companion.prototype.f1p = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.y1q = function () {
    return _ChannelResult___init__impl__siwsuf(this.e1p_1);
  };
  Companion.prototype.g1p = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.w1q_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.w1q_1 = holder;
  }
  ChannelResult.prototype.toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.w1q_1);
  };
  ChannelResult.prototype.hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.w1q_1);
  };
  ChannelResult.prototype.equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.w1q_1, other);
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.d1t_1 = _channel;
  }
  ChannelCoroutine.prototype.s1q = function () {
    return this.d1t_1.s1q();
  };
  ChannelCoroutine.prototype.k1r = function () {
    return this.d1t_1.k1r();
  };
  ChannelCoroutine.prototype.f1r = function () {
    return this.d1t_1.f1r();
  };
  ChannelCoroutine.prototype.a1r = function (cause) {
    return this.d1t_1.a1r(cause);
  };
  ChannelCoroutine.prototype.p1r = function (handler) {
    this.d1t_1.p1r(handler);
  };
  ChannelCoroutine.prototype.g = function () {
    return this.d1t_1.g();
  };
  ChannelCoroutine.prototype.u1q = function ($cont) {
    return this.d1t_1.u1q($cont);
  };
  ChannelCoroutine.prototype.v1q = function ($cont) {
    var tmp = this.d1t_1.v1q($cont);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return new ChannelResult(tmp.w1q_1);
  };
  ChannelCoroutine.prototype.l1r = function (element, $cont) {
    return this.d1t_1.l1r(element, $cont);
  };
  ChannelCoroutine.prototype.x1q = function () {
    return this.d1t_1.x1q();
  };
  ChannelCoroutine.prototype.m1r = function (element) {
    return this.d1t_1.m1r(element);
  };
  ChannelCoroutine.prototype.t1b = function (cause) {
    if (this.h1b())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.q1a() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.v1b(tmp);
  };
  ChannelCoroutine.prototype.v1b = function (cause) {
    var exception = this.m1b(cause, null, 1, null);
    this.d1t_1.t1b(exception);
    this.e1k(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.t1b(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.i1t_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.r1n_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.i1t_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.h1t_1 = new NoOpLock();
    this.i1t_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.k1q = function () {
    return false;
  };
  ConflatedChannel.prototype.l1q = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.h1t_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.i1t_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.h1r = function () {
    return false;
  };
  ConflatedChannel.prototype.i1r = function () {
    return false;
  };
  ConflatedChannel.prototype.j1r = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.h1t_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.c1r();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.i1t_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.g1r();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).l1p(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).n1p(element);
    return ensureNotNull(receive).o1p();
  };
  ConflatedChannel.prototype.q1n = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.h1t_1;
    if (this.i1t_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.c1r();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.i1t_1;
    this.i1t_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.c1p = function (select) {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.h1t_1;
    if (this.i1t_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.c1r();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    if (!select.i1k())
      return get_ALREADY_SELECTED();
    result = this.i1t_1;
    this.i1t_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.b1r = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.h1t_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.b1r.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ConflatedChannel.prototype.f1o = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.h1t_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.f1o.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.r1r = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.h1t_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.i1t_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.k1q = function () {
    return true;
  };
  LinkedListChannel.prototype.l1q = function () {
    return true;
  };
  LinkedListChannel.prototype.h1r = function () {
    return false;
  };
  LinkedListChannel.prototype.i1r = function () {
    return false;
  };
  LinkedListChannel.prototype.j1r = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.j1r.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.x1r(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.d1r = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.r1n_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.w1r_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.e1r(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.j(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.r1n_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.w1r_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.e1r(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    var channel = Channel$default(capacity, onBufferOverflow, null, 4, null);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.n1b(onCompletion);
    }
    coroutine.a1b(start, coroutine, block);
    return coroutine;
  }
  function produce$default(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      capacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 8) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    if (!(($mask0 & 16) === 0))
      onCompletion = null;
    return produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block);
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  ProducerCoroutine.prototype.n1a = function () {
    return ChannelCoroutine.prototype.n1a.call(this);
  };
  ProducerCoroutine.prototype.q1t = function (value) {
    this.d1t_1.o1r(null, 1, null);
  };
  ProducerCoroutine.prototype.o1a = function (value) {
    return this.q1t(value instanceof Unit ? value : THROW_CCE());
  };
  ProducerCoroutine.prototype.p1a = function (cause, handled) {
    var processed = this.d1t_1.a1r(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.l1a_1, cause);
    }
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.k1q = function () {
    return true;
  };
  RendezvousChannel.prototype.l1q = function () {
    return true;
  };
  RendezvousChannel.prototype.h1r = function () {
    return true;
  };
  RendezvousChannel.prototype.i1r = function () {
    return true;
  };
  function asFlow(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function flowOf(value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(value);
    return tmp$ret$0;
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.u1t_1 = block;
  }
  SafeFlow.prototype.v1t = function (collector, $cont) {
    return this.u1t_1(collector, $cont);
  };
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1u_1 = _this__u8e3s4;
    this.g1u_1 = collector;
  }
  $collectCOROUTINE$6.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.h1u_1 = this.f1u_1.j1u_1.g();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            if (!this.h1u_1.h()) {
              this.dg_1 = 3;
              continue $sm;
            }

            this.i1u_1 = this.h1u_1.i();
            this.dg_1 = 2;
            suspendResult = this.g1u_1.k1u(this.i1u_1, this);
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
  function _no_name_provided__qut3iv($this_asFlow) {
    this.j1u_1 = $this_asFlow;
  }
  _no_name_provided__qut3iv.prototype.w1t = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$6(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1u_1 = _this__u8e3s4;
    this.u1u_1 = collector;
  }
  $collectCOROUTINE$7.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.u1u_1.k1u(this.t1u_1.v1u_1, this);
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
  function _no_name_provided__qut3iv_0($value) {
    this.v1u_1 = $value;
  }
  _no_name_provided__qut3iv_0.prototype.w1t = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$7(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function emitAll(_this__u8e3s4, channel, $cont) {
    return emitAllImpl(_this__u8e3s4, channel, true, $cont);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $cont) {
    var tmp = new $emitAllImplCOROUTINE$8(_this__u8e3s4, channel, consume, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function $emitAllImplCOROUTINE$8(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1v_1 = _this__u8e3s4;
    this.f1v_1 = channel;
    this.g1v_1 = consume;
  }
  $emitAllImplCOROUTINE$8.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 11;
            ensureActive_2(this.e1v_1);
            this.h1v_1 = null;
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 9;
            this.eg_1 = 8;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.dg_1 = 7;
              continue $sm;
            }

            this.dg_1 = 3;
            suspendResult = this.f1v_1.v1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.dg_1 = 4;
            continue $sm;
          case 3:
            this.j1v_1 = suspendResult.w1q_1;
            suspendResult = new ChannelResult(this.j1v_1);
            this.dg_1 = 4;
            continue $sm;
          case 4:
            this.k1v_1 = suspendResult.w1q_1;
            if (_ChannelResult___get_isClosed__impl__mg7kuu(this.k1v_1)) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.k1v_1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              this.dg_1 = 7;
              continue $sm;
            } else {
              this.dg_1 = 5;
              continue $sm;
            }

            break;
          case 5:
            this.dg_1 = 6;
            suspendResult = this.e1v_1.k1u(ChannelResult__getOrThrow_impl_od1axs(this.k1v_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.dg_1 = 2;
            continue $sm;
          case 7:
            this.i1v_1 = Unit_getInstance();
            this.eg_1 = 11;
            this.dg_1 = 10;
            continue $sm;
          case 8:
            this.eg_1 = 9;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              var tmp_1 = this;
              this.h1v_1 = e;
              throw e;
            } else {
              throw this.gg_1;
            }

            break;
          case 9:
            this.eg_1 = 11;
            var t = this.gg_1;
            if (this.g1v_1) {
              cancelConsumed(this.f1v_1, this.h1v_1);
            }

            throw t;
          case 10:
            if (this.g1v_1) {
              cancelConsumed(this.f1v_1, this.h1v_1);
            }

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
  function $collectCOROUTINE$9(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1v_1 = _this__u8e3s4;
    this.u1v_1 = collector;
  }
  $collectCOROUTINE$9.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 5;
            var tmp_0 = this;
            tmp_0.v1v_1 = new SafeCollector(this.u1v_1, this.h3());
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 4;
            this.dg_1 = 2;
            suspendResult = this.t1v_1.v1t(this.v1v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w1v_1 = suspendResult;
            this.eg_1 = 5;
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.v1v_1.b1w();
            ;
            return Unit_getInstance();
          case 4:
            this.eg_1 = 5;
            var t = this.gg_1;
            this.v1v_1.b1w();
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
  function AbstractFlow() {
  }
  AbstractFlow.prototype.w1t = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$9(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    init_properties_SharedFlow_kt_5sqb47();
    return NO_VALUE;
  }
  var NO_VALUE;
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    init_properties_SharedFlow_kt_5sqb47();
    var tmp;
    var tmp_0;
    Factory_getInstance();
    if (capacity === 0) {
      tmp_0 = true;
    } else {
      Factory_getInstance();
      tmp_0 = capacity === -3;
    }
    if (tmp_0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = $this.l1w_1;
    var tmp1_minOf = $this.k1w_1;
    tmp$ret$0 = tmp0_minOf.x(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    return tmp$ret$0;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.m1w_1;
    tmp$ret$0 = tmp0_plus.v5(toLong(tmp1_plus));
    return tmp$ret$0.w5($this.k1w_1).e4();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.m1w_1 + $this.n1w_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.m1w_1;
    tmp$ret$0 = tmp0_plus.v5(toLong(tmp1_plus));
    return tmp$ret$0;
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.m1w_1;
    tmp$ret$0 = tmp0_plus.v5(toLong(tmp1_plus));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = $this.n1w_1;
    tmp$ret$1 = tmp2_plus.v5(toLong(tmp3_plus));
    return tmp$ret$1;
  }
  function tryEmitLocked($this, value) {
    if ($this.p1w_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.m1w_1 >= $this.h1w_1 ? $this.l1w_1.x($this.k1w_1) <= 0 : false) {
      var tmp0_subject = $this.i1w_1;
      var tmp0 = tmp0_subject.y3_1;
      switch (tmp0) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    var tmp1_this = $this;
    var tmp2 = tmp1_this.m1w_1;
    tmp1_this.m1w_1 = tmp2 + 1 | 0;
    if ($this.m1w_1 > $this.h1w_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.g1w_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = $this.k1w_1;
      tmp$ret$0 = tmp0_plus.v5(new Long(1, 0));
      updateBufferLocked($this, tmp$ret$0, $this.l1w_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.g1w_1 === 0)
      return true;
    enqueueLocked($this, value);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.m1w_1;
    tmp0_this.m1w_1 = tmp1 + 1 | 0;
    if ($this.m1w_1 > $this.g1w_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.m1w_1;
    tmp$ret$0 = tmp0_plus.v5(toLong(tmp1_plus));
    tmp.l1w_1 = tmp$ret$0;
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.j1w_1), _get_head__d7jo8b($this), null);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.m1w_1;
    tmp0_this.m1w_1 = tmp1 - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.v5(new Long(1, 0));
    var newHead = tmp$ret$0;
    if ($this.k1w_1.x(newHead) < 0)
      $this.k1w_1 = newHead;
    if ($this.l1w_1.x(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.p1w_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.o1w_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.s1w_1.x(new Long(0, 0)) >= 0 ? element.s1w_1.x(newHead) < 0 : false) {
              element.s1w_1 = newHead;
            }
          }
        }
      }
    }
    $this.l1w_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.j1w_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.v5(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    var tmp0_check = newSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      tmp$ret$0 = 'Buffer size overflow';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(newSize), null);
    var tmp1_also = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.j1w_1 = tmp1_also;
    tmp$ret$2 = tmp1_also;
    var newBuffer = tmp$ret$2;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = head.v5(toLong(i));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$4 = head.v5(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $cont) {
    var tmp$ret$9;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.i3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = _get_head__d7jo8b($this);
      var tmp1_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$3 = tmp0_plus.v5(toLong(tmp1_plus));
      var tmp2_also = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, tmp2_also);
      var tmp0_this = $this;
      var tmp1 = tmp0_this.n1w_1;
      tmp0_this.n1w_1 = tmp1 + 1 | 0;
      if ($this.h1w_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$4 = tmp2_also;
      tmp$ret$2 = tmp$ret$4;
    }
    tmp$ret$5 = tmp$ret$2;
    var emitter = tmp$ret$5;
    var tmp0_safe_receiver = emitter;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, tmp0_safe_receiver);
      tmp$ret$6 = Unit_getInstance();
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp2_safe_receiver = r;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp2_safe_receiver.i3(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
    tmp$ret$9 = cancellable.s1d();
    return tmp$ret$9;
  }
  function cancelEmitter($this, emitter) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (emitter.v1w_1.x(_get_head__d7jo8b($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.j1w_1);
    if (!(getBufferAt(buffer, emitter.v1w_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.v1w_1, get_NO_VALUE());
    cleanupTailLocked($this);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = newMinCollectorIndex.x(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    var newHead = tmp$ret$0;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.x(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.v5(new Long(1, 0));
        setBufferAt(ensureNotNull($this.j1w_1), index, null);
      }
       while (inductionVariable.x(newHead) < 0);
    $this.k1w_1 = newReplayIndex;
    $this.l1w_1 = newMinCollectorIndex;
    $this.m1w_1 = newBufferEndIndex.w5(newHead).e4();
    $this.n1w_1 = newQueueEndIndex.w5(newBufferEndIndex).e4();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.h1w_1 === 0 ? $this.n1w_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.j1w_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.n1w_1 > 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = _get_head__d7jo8b($this);
        var tmp1_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$0 = tmp0_plus.v5(toLong(tmp1_plus));
        var tmp2_minus = tmp$ret$0;
        tmp$ret$1 = tmp2_minus.w5(new Long(1, 0));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.n1w_1;
      tmp0_this.n1w_1 = tmp1 - 1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp3_plus = _get_head__d7jo8b($this);
      var tmp4_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$2 = tmp3_plus.v5(toLong(tmp4_plus));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.x(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.s1w_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = index.v5(new Long(1, 0));
      tmp_0.s1w_1 = tmp$ret$0;
      resumes = $this.y1w(oldIndex);
      tmp = newValue;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var value = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = resume;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.i3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.s1w_1;
    if (index.x(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.h1w_1 > 0)
      return new Long(-1, -1);
    if (index.x(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.n1w_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.j1w_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.w1w_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $cont) {
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.x(new Long(0, 0)) < 0) {
        slot.t1w_1 = cancellable;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.i3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      slot.t1w_1 = cancellable;
    }
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = cancellable.s1d();
    return tmp$ret$4;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.p1w_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.o1w_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            var tmp$ret$1;
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.t1w_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).x(new Long(0, 0)) < 0) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                var tmp$ret$2;
                // Inline function 'kotlin.comparisons.maxOf' call
                var tmp0_maxOf = imul(2, resumes.length);
                tmp$ret$2 = Math.max(2, tmp0_maxOf);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.t1w_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.u1w_1 = flow;
    this.v1w_1 = index;
    this.w1w_1 = value;
    this.x1w_1 = cont;
  }
  Emitter.prototype.i1e = function () {
    return cancelEmitter(this.u1w_1, this);
  };
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1x_1 = _this__u8e3s4;
    this.i1x_1 = collector;
  }
  $collectCOROUTINE$10.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 13;
            this.j1x_1 = this.h1x_1.n1x();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 12;
            var tmp_0 = this.i1x_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.dg_1 = 2;
              suspendResult = this.i1x_1.q1x(this);
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
            var tmp_1 = this;
            tmp_1.l1x_1 = this.h3().l3(Key_getInstance_3());
            this.dg_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.dg_1 = 10;
              continue $sm;
            }

            this.dg_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.dg_1 = 8;
              continue $sm;
            }

            this.m1x_1 = tryTakeValue(this.h1x_1, this.j1x_1);
            if (!(this.m1x_1 === get_NO_VALUE())) {
              this.dg_1 = 8;
              continue $sm;
            } else {
              this.dg_1 = 6;
              continue $sm;
            }

            break;
          case 6:
            this.dg_1 = 7;
            suspendResult = awaitValue(this.h1x_1, this.j1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.dg_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.l1x_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_1(tmp0_safe_receiver);
            }

            ;
            this.dg_1 = 9;
            var tmp_2 = this.m1x_1;
            suspendResult = this.i1x_1.k1u((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.dg_1 = 4;
            continue $sm;
          case 10:
            this.k1x_1 = Unit_getInstance();
            this.eg_1 = 13;
            this.dg_1 = 11;
            continue $sm;
          case 11:
            this.h1x_1.r1x(this.j1x_1);
            ;
            return Unit_getInstance();
          case 12:
            this.eg_1 = 13;
            var t = this.gg_1;
            this.h1x_1.r1x(this.j1x_1);
            ;
            throw t;
          case 13:
            throw this.gg_1;
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
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.g1w_1 = replay;
    this.h1w_1 = bufferCapacity;
    this.i1w_1 = onBufferOverflow;
    this.j1w_1 = null;
    this.k1w_1 = new Long(0, 0);
    this.l1w_1 = new Long(0, 0);
    this.m1w_1 = 0;
    this.n1w_1 = 0;
  }
  SharedFlowImpl.prototype.s1x = function () {
    var tmp = ensureNotNull(this.j1w_1);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.k1w_1;
    var tmp1_plus = _get_replaySize__dxgnb1(this);
    tmp$ret$0 = tmp0_plus.v5(toLong(tmp1_plus));
    var tmp2_minus = tmp$ret$0;
    tmp$ret$1 = tmp2_minus.w5(new Long(1, 0));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  SharedFlowImpl.prototype.t1x = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$10(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  SharedFlowImpl.prototype.w1t = function (collector, $cont) {
    return this.t1x(collector, $cont);
  };
  SharedFlowImpl.prototype.u1x = function (value) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var emitted = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.i3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    return emitted;
  };
  SharedFlowImpl.prototype.k1u = function (value, $cont) {
    if (this.u1x(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $cont);
  };
  SharedFlowImpl.prototype.v1x = function () {
    var index = this.k1w_1;
    if (index.x(this.l1w_1) < 0)
      this.l1w_1 = index;
    return index;
  };
  SharedFlowImpl.prototype.y1w = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.x(this.l1w_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.m1w_1;
    tmp$ret$0 = head.v5(toLong(tmp0_plus));
    var newMinCollectorIndex = tmp$ret$0;
    if (this.h1w_1 === 0 ? this.n1w_1 > 0 : false) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = tmp0.qf();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.p1w_1 === 0) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = this.o1w_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.s1w_1.x(new Long(0, 0)) >= 0 ? element.s1w_1.x(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.s1w_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.x(this.l1w_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.p1w_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.w5(newMinCollectorIndex).e4();
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = this.n1w_1;
      var tmp2_minOf = this.h1w_1 - newBufferSize0 | 0;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      tmp = tmp$ret$2;
    } else {
      tmp = this.n1w_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$3;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = newBufferEndIndex;
    var tmp4_plus = this.n1w_1;
    tmp$ret$3 = tmp3_plus.v5(toLong(tmp4_plus));
    var newQueueEndIndex = tmp$ret$3;
    if (maxResumeCount > 0) {
      var tmp$ret$4;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$4 = fillArrayVal(Array(maxResumeCount), null);
      resumes = tmp$ret$4;
      var resumeCount = 0;
      var buffer = ensureNotNull(this.j1w_1);
      var inductionVariable = newBufferEndIndex;
      if (inductionVariable.x(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.v5(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (emitter instanceof Emitter)
              emitter;
            else
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.x1w_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.w1w_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = tmp3.qf();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.x(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.w5(head).e4();
    if (this.p1w_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp$ret$7;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp8_maxOf = this.k1w_1;
    var tmp$ret$6;
    // Inline function 'kotlin.Long.minus' call
    var tmp6_minus = newBufferEndIndex;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp5_minOf = this.g1w_1;
    tmp$ret$5 = Math.min(tmp5_minOf, newBufferSize1);
    var tmp7_minus = tmp$ret$5;
    tmp$ret$6 = tmp6_minus.w5(toLong(tmp7_minus));
    var tmp9_maxOf = tmp$ret$6;
    tmp$ret$7 = tmp8_maxOf.x(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    var newReplayIndex = tmp$ret$7;
    if ((this.h1w_1 === 0 ? newReplayIndex.x(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.j1w_1), newReplayIndex), get_NO_VALUE()) : false) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = tmp4.qf();
      var tmp5 = newReplayIndex;
      newReplayIndex = tmp5.qf();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    var tmp$ret$9;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp10_isNotEmpty = resumes;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$8 = tmp10_isNotEmpty.length === 0;
    tmp$ret$9 = !tmp$ret$8;
    if (tmp$ret$9)
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  SharedFlowImpl.prototype.w1x = function () {
    return new SharedFlowSlot();
  };
  SharedFlowImpl.prototype.x1x = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  SharedFlowImpl.prototype.y1x = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    updateBufferLocked(this, _get_bufferEndIndex__d2rk18(this), this.l1w_1, _get_bufferEndIndex__d2rk18(this), _get_queueEndIndex__4m025l(this));
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  SharedFlowImpl.prototype.z1x = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.s1w_1 = new Long(-1, -1);
    this.t1w_1 = null;
  }
  SharedFlowSlot.prototype.c1y = function (flow) {
    if (this.s1w_1.x(new Long(0, 0)) >= 0)
      return false;
    this.s1w_1 = flow.v1x();
    return true;
  };
  SharedFlowSlot.prototype.d1y = function (flow) {
    return this.c1y(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.prototype.e1y = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.s1w_1;
    this.s1w_1 = new Long(-1, -1);
    this.t1w_1 = null;
    return flow.y1w(oldIndex);
  };
  SharedFlowSlot.prototype.f1y = function (flow) {
    return this.e1y(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.e4() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.e4() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function init_properties_SharedFlow_kt_5sqb47() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.g1y_1 = new StartedEagerly();
    this.h1y_1 = new StartedLazily();
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  var SharingCommand_START_instance;
  var SharingCommand_STOP_instance;
  var SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance;
  var SharingCommand_entriesInitialized;
  function SharingCommand_initEntries() {
    if (SharingCommand_entriesInitialized)
      return Unit_getInstance();
    SharingCommand_entriesInitialized = true;
    SharingCommand_START_instance = new SharingCommand('START', 0);
    SharingCommand_STOP_instance = new SharingCommand('STOP', 1);
    SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance = new SharingCommand('STOP_AND_RESET_REPLAY_CACHE', 2);
  }
  function SharingCommand(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StartedEagerly() {
  }
  StartedEagerly.prototype.i1y = function (subscriptionCount) {
    return flowOf(SharingCommand_START_getInstance());
  };
  StartedEagerly.prototype.toString = function () {
    return 'SharingStarted.Eagerly';
  };
  function StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation) {
    this.r1y_1 = $started;
    this.s1y_1 = $this_flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  StartedLazily$command$slambda$slambda.prototype.u1y = function (count, $cont) {
    var tmp = this.v1y(count, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  StartedLazily$command$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.u1y((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $cont);
  };
  StartedLazily$command$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            if (this.t1y_1 > 0 ? !this.r1y_1._v : false) {
              this.r1y_1._v = true;
              this.dg_1 = 1;
              suspendResult = this.s1y_1.k1u(SharingCommand_START_getInstance(), this);
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
  StartedLazily$command$slambda$slambda.prototype.v1y = function (count, completion) {
    var i = new StartedLazily$command$slambda$slambda(this.r1y_1, this.s1y_1, completion);
    i.t1y_1 = count;
    return i;
  };
  function StartedLazily$command$slambda$slambda_0($started, $this_flow, resultContinuation) {
    var i = new StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation);
    var l = function (count, $cont) {
      return i.u1y(count, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.w1y_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.k1u = function (value, $cont) {
    return this.w1y_1(value, $cont);
  };
  function StartedLazily$command$slambda($subscriptionCount, resultContinuation) {
    this.f1z_1 = $subscriptionCount;
    CoroutineImpl.call(this, resultContinuation);
  }
  StartedLazily$command$slambda.prototype.i1z = function ($this$flow, $cont) {
    var tmp = this.j1z($this$flow, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  StartedLazily$command$slambda.prototype.kh = function (p1, $cont) {
    return this.i1z((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  StartedLazily$command$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.h1z_1 = {_v: false};
            this.dg_1 = 1;
            var tmp_0 = StartedLazily$command$slambda$slambda_0(this.h1z_1, this.g1z_1, null);
            suspendResult = this.f1z_1.t1x(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  StartedLazily$command$slambda.prototype.j1z = function ($this$flow, completion) {
    var i = new StartedLazily$command$slambda(this.f1z_1, completion);
    i.g1z_1 = $this$flow;
    return i;
  };
  function StartedLazily$command$slambda_0($subscriptionCount, resultContinuation) {
    var i = new StartedLazily$command$slambda($subscriptionCount, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.i1z($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function StartedLazily() {
  }
  StartedLazily.prototype.i1y = function (subscriptionCount) {
    return flow(StartedLazily$command$slambda_0(subscriptionCount, null));
  };
  StartedLazily.prototype.toString = function () {
    return 'SharingStarted.Lazily';
  };
  function SharingCommand_START_getInstance() {
    SharingCommand_initEntries();
    return SharingCommand_START_instance;
  }
  function get_NONE() {
    init_properties_StateFlow_kt_6znnsl();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    init_properties_StateFlow_kt_6znnsl();
    return PENDING;
  }
  var PENDING;
  function StateFlow() {
  }
  function MutableStateFlow(value) {
    init_properties_StateFlow_kt_6znnsl();
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  }
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    init_properties_StateFlow_kt_6znnsl();
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    var tmp_0;
    if (0 <= capacity ? capacity <= 1 : false) {
      tmp_0 = true;
    } else {
      Factory_getInstance();
      tmp_0 = capacity === -2;
    }
    if (tmp_0) {
      tmp = onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.o1w_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this.o1z_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.o1z_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.p1z_1;
    if ((curSequence & 1) === 0) {
      var tmp0 = curSequence;
      curSequence = tmp0 + 1 | 0;
      $this.p1z_1 = curSequence;
    } else {
      $this.p1z_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.o1w_1;
    tmp$ret$0 = Unit_getInstance();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          var tmp0_safe_receiver_0 = element;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.r1z();
          }
        }
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.p1z_1 === curSequence) {
        $this.p1z_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.p1z_1;
      curSlots = $this.o1w_1;
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function $collectCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a20_1 = _this__u8e3s4;
    this.b20_1 = collector;
  }
  $collectCOROUTINE$11.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 12;
            this.c20_1 = this.a20_1.n1x();
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 11;
            var tmp_0 = this.b20_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.dg_1 = 2;
              suspendResult = this.b20_1.q1x(this);
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
            var tmp_1 = this;
            tmp_1.e20_1 = this.h3().l3(Key_getInstance_3());
            this.f20_1 = null;
            this.dg_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.dg_1 = 9;
              continue $sm;
            }

            this.g20_1 = this.a20_1.o1z_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.e20_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_1(tmp0_safe_receiver);
            }

            ;
            if (this.f20_1 == null ? true : !equals(this.f20_1, this.g20_1)) {
              this.dg_1 = 5;
              var tmp0_unbox = get_NULL();
              var tmp_2;
              if (this.g20_1 === tmp0_unbox) {
                tmp_2 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_3 = this.g20_1;
                tmp_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              }
              suspendResult = this.b20_1.k1u(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 6;
              continue $sm;
            }

            break;
          case 5:
            this.f20_1 = this.g20_1;
            this.dg_1 = 6;
            continue $sm;
          case 6:
            if (!this.c20_1.i20()) {
              this.dg_1 = 7;
              suspendResult = this.c20_1.h20(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 8;
              continue $sm;
            }

            break;
          case 7:
            this.dg_1 = 8;
            continue $sm;
          case 8:
            this.dg_1 = 4;
            continue $sm;
          case 9:
            this.d20_1 = Unit_getInstance();
            this.eg_1 = 12;
            this.dg_1 = 10;
            continue $sm;
          case 10:
            this.a20_1.r1x(this.c20_1);
            ;
            return Unit_getInstance();
          case 11:
            this.eg_1 = 12;
            var t = this.gg_1;
            this.a20_1.r1x(this.c20_1);
            ;
            throw t;
          case 12:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 12) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.o1z_1 = atomic$ref$1(initialState);
    this.p1z_1 = 0;
  }
  StateFlowImpl.prototype.j20 = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  };
  StateFlowImpl.prototype.p = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this.o1z_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  StateFlowImpl.prototype.u1x = function (value) {
    this.j20(value);
    return true;
  };
  StateFlowImpl.prototype.k1u = function (value, $cont) {
    this.j20(value);
    return Unit_getInstance();
  };
  StateFlowImpl.prototype.y1x = function () {
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  StateFlowImpl.prototype.t1x = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$11(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  StateFlowImpl.prototype.w1t = function (collector, $cont) {
    return this.t1x(collector, $cont);
  };
  StateFlowImpl.prototype.w1x = function () {
    return new StateFlowSlot();
  };
  StateFlowImpl.prototype.x1x = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  StateFlowImpl.prototype.z1x = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.q1z_1 = atomic$ref$1(null);
  }
  StateFlowSlot.prototype.k20 = function (flow) {
    if (!(this.q1z_1.kotlinx$atomicfu$value == null))
      return false;
    this.q1z_1.kotlinx$atomicfu$value = get_NONE();
    return true;
  };
  StateFlowSlot.prototype.d1y = function (flow) {
    return this.k20(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.l20 = function (flow) {
    this.q1z_1.kotlinx$atomicfu$value = null;
    return get_EMPTY_RESUMES();
  };
  StateFlowSlot.prototype.f1y = function (flow) {
    return this.l20(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.r1z = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.q1z_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc == null)
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_PENDING())
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_NONE()) {
        if (this.q1z_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this.q1z_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_NONE())) {
          var tmp$ret$1;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          tmp0_resume.i3(tmp$ret$0);
          tmp$ret$1 = Unit_getInstance();
          return Unit_getInstance();
        }
      }
    }
  };
  StateFlowSlot.prototype.i20 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureNotNull(this.q1z_1.atomicfu$getAndSet(get_NONE()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return tmp0_let === get_PENDING();
    return tmp$ret$0;
  };
  StateFlowSlot.prototype.h20 = function ($cont) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.q1z_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.i3(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    }
    tmp$ret$3 = cancellable.s1d();
    return tmp$ret$3;
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function init_properties_StateFlow_kt_6znnsl() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    init_properties_AbstractSharedFlow_kt_ejuukb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this.o1w_1 = null;
    this.p1w_1 = 0;
    this.q1w_1 = 0;
    this.r1w_1 = null;
  }
  AbstractSharedFlow.prototype.b1y = function () {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>' call
    var tmp0_elvis_lhs = this.r1w_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new SubscriptionCountStateFlow(this.p1w_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>.<anonymous>' call
      this.r1w_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  AbstractSharedFlow.prototype.n1x = function () {
    var subscriptionCount = null;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.o1w_1;
    var tmp;
    if (curSlots == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.x1x(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.o1w_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      var tmp_0;
      if (this.p1w_1 >= curSlots.length) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.o1w_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.q1w_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        var tmp2_also = this.w1x();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = tmp2_also;
        tmp$ret$2 = tmp2_also;
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).d1y(this))
        break $l$loop;
    }
    this.q1w_1 = index;
    var tmp2_this = this;
    var tmp3 = tmp2_this.p1w_1;
    tmp2_this.p1w_1 = tmp3 + 1 | 0;
    subscriptionCount = this.r1w_1;
    tmp$ret$3 = slot;
    tmp$ret$4 = tmp$ret$3;
    var slot_0 = tmp$ret$4;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.y20(1);
    return slot_0;
  };
  AbstractSharedFlow.prototype.r1x = function (slot) {
    var subscriptionCount = null;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.p1w_1;
    tmp0_this.p1w_1 = tmp1 - 1 | 0;
    subscriptionCount = this.r1w_1;
    if (this.p1w_1 === 0)
      this.q1w_1 = 0;
    tmp$ret$0 = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).f1y(this);
    tmp$ret$1 = tmp$ret$0;
    var resumes = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.i3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.y20(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, IntCompanionObject_getInstance().MAX_VALUE, BufferOverflow_DROP_OLDEST_getInstance());
    this.u1x(initialValue);
  }
  SubscriptionCountStateFlow.prototype.p = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.<get-value>.<anonymous>' call
    tmp$ret$0 = this.s1x();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SubscriptionCountStateFlow.prototype.y20 = function (delta) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.increment.<anonymous>' call
    tmp$ret$0 = this.u1x(this.s1x() + delta | 0);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function init_properties_AbstractSharedFlow_kt_ejuukb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.h21_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.j21 = function (it, $cont) {
    var tmp = this.k21(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.kh = function (p1, $cont) {
    return this.j21((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.h21_1.o21(this.i21_1, this);
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
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.k21 = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.h21_1, completion);
    i.i21_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.j21(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.x21_1 = $collector;
    this.y21_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$collect$slambda.prototype.a22 = function ($this$coroutineScope, $cont) {
    var tmp = this.b22($this$coroutineScope, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ChannelFlow$collect$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$collect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = emitAll(this.x21_1, this.y21_1.c22(this.z21_1), this);
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
  ChannelFlow$collect$slambda.prototype.b22 = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.x21_1, this.y21_1, completion);
    i.z21_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.a22($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.l21_1 = context;
    this.m21_1 = capacity;
    this.n21_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  ChannelFlow.prototype.d22 = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  ChannelFlow.prototype.e22 = function () {
    var tmp;
    Factory_getInstance();
    if (this.m21_1 === -3) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = this.m21_1;
    }
    return tmp;
  };
  ChannelFlow.prototype.f22 = function () {
    return null;
  };
  ChannelFlow.prototype.z1x = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.s3(this.l21_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      Factory_getInstance();
      if (this.m21_1 === -3) {
        tmp = capacity;
      } else {
        Factory_getInstance();
        if (capacity === -3) {
          tmp = this.m21_1;
        } else {
          Factory_getInstance();
          if (this.m21_1 === -2) {
            tmp = capacity;
          } else {
            Factory_getInstance();
            if (capacity === -2) {
              tmp = this.m21_1;
            } else {
              // Inline function 'kotlinx.coroutines.assert' call
              // Inline function 'kotlinx.coroutines.assert' call
              var sum = this.m21_1 + capacity | 0;
              var tmp_0;
              if (sum >= 0) {
                tmp_0 = sum;
              } else {
                Factory_getInstance();
                tmp_0 = 2147483647;
              }
              tmp = tmp_0;
            }
          }
        }
      }
      newCapacity = tmp;
      newOverflow = this.n21_1;
    }
    if ((equals(newContext, this.l21_1) ? newCapacity === this.m21_1 : false) ? newOverflow.equals(this.n21_1) : false)
      return this;
    return this.g22(newContext, newCapacity, newOverflow);
  };
  ChannelFlow.prototype.c22 = function (scope) {
    var tmp = this.e22();
    var tmp_0 = CoroutineStart_ATOMIC_getInstance();
    return produce$default(scope, this.l21_1, tmp, this.n21_1, tmp_0, null, this.d22(), 16, null);
  };
  ChannelFlow.prototype.w1t = function (collector, $cont) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $cont);
  };
  ChannelFlow.prototype.h22 = function () {
    return null;
  };
  ChannelFlow.prototype.toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.h22();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      tmp$ret$0 = props.a(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
    }
    if (!(this.l21_1 === EmptyCoroutineContext_getInstance())) {
      props.a('context=' + this.l21_1);
    }
    Factory_getInstance();
    if (!(this.m21_1 === -3)) {
      props.a('capacity=' + this.m21_1);
    }
    if (!this.n21_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.a('onBufferOverflow=' + this.n21_1);
    }
    var tmp = get_classSimpleName(this);
    return tmp + '[' + joinToString$default(props, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  function FusibleFlow() {
  }
  function ChannelFlowOperatorImpl_init_$Init$(flow, context, capacity, onBufferOverflow, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 4) === 0)) {
      Factory_getInstance();
      capacity = -3;
    }
    if (!(($mask0 & 8) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    ChannelFlowOperatorImpl.call($this, flow, context, capacity, onBufferOverflow);
    return $this;
  }
  function ChannelFlowOperatorImpl_init_$Create$(flow, context, capacity, onBufferOverflow, $mask0, $marker) {
    return ChannelFlowOperatorImpl_init_$Init$(flow, context, capacity, onBufferOverflow, $mask0, $marker, Object.create(ChannelFlowOperatorImpl.prototype));
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  ChannelFlowOperatorImpl.prototype.g22 = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.p22_1, context, capacity, onBufferOverflow);
  };
  ChannelFlowOperatorImpl.prototype.f22 = function () {
    return this.p22_1;
  };
  ChannelFlowOperatorImpl.prototype.q22 = function (collector, $cont) {
    return this.p22_1.w1t(collector, $cont);
  };
  function collectWithContextUndispatched($this, collector, newContext, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.h3();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched$default(newContext, originalContextCollector, null, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $cont, 4, null);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.z22_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.b23 = function (it, $cont) {
    var tmp = this.c23(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.kh = function (p1, $cont) {
    return this.b23((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.z22_1.q22(this.a23_1, this);
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
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.c23 = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.z22_1, completion);
    i.a23_1 = it;
    return i;
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.b23(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l23_1 = _this__u8e3s4;
    this.m23_1 = collector;
  }
  $collectCOROUTINE$12.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            Factory_getInstance();
            if (this.l23_1.m21_1 === -3) {
              var tmp_0 = this;
              tmp_0.n23_1 = this.h3();
              this.o23_1 = this.n23_1.s3(this.l23_1.l21_1);
              if (equals(this.o23_1, this.n23_1)) {
                this.dg_1 = 6;
                suspendResult = this.l23_1.q22(this.m23_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 1;
                continue $sm;
              }
            } else {
              this.dg_1 = 3;
              continue $sm;
            }

            break;
          case 1:
            if (equals(this.o23_1.l3(Key_getInstance()), this.n23_1.l3(Key_getInstance()))) {
              this.dg_1 = 5;
              suspendResult = collectWithContextUndispatched(this.l23_1, this.m23_1, this.o23_1, this);
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
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.dg_1 = 4;
            suspendResult = ChannelFlow.prototype.w1t.call(this.l23_1, this.m23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            return Unit_getInstance();
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
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.p22_1 = flow;
  }
  ChannelFlowOperator.prototype.o21 = function (scope, $cont) {
    return this.q22(new SendingCollector(scope), $cont);
  };
  ChannelFlowOperator.prototype.w1t = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$12(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ChannelFlowOperator.prototype.toString = function () {
    return '' + this.p22_1 + ' -> ' + ChannelFlow.prototype.toString.call(this);
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    var tmp_0;
    if (tmp0_subject instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $cont) {
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var tmp0_startCoroutineUninterceptedOrReturn = new StackFrameContinuation(tmp0__anonymous__q1qw7t, newContext);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = block;
    var a = tmp$ret$0;
    tmp$ret$1 = typeof a === 'function' ? a(value, tmp0_startCoroutineUninterceptedOrReturn) : block.kh(value, tmp0_startCoroutineUninterceptedOrReturn);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function withContextUndispatched$default(newContext, value, countOrElement, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      countOrElement = threadContextElements(newContext);
    return withContextUndispatched(newContext, value, countOrElement, block, $cont);
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.x23_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  UndispatchedContextCollector$emitRef$slambda.prototype.z23 = function (it, $cont) {
    var tmp = this.a24(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  UndispatchedContextCollector$emitRef$slambda.prototype.kh = function (p1, $cont) {
    return this.z23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  UndispatchedContextCollector$emitRef$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.x23_1.k1u(this.y23_1, this);
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
  UndispatchedContextCollector$emitRef$slambda.prototype.a24 = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.x23_1, completion);
    i.y23_1 = it;
    return i;
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $cont) {
      return i.z23(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.b24_1 = emitContext;
    this.c24_1 = threadContextElements(this.b24_1);
    var tmp = this;
    tmp.d24_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  UndispatchedContextCollector.prototype.k1u = function (value, $cont) {
    return withContextUndispatched(this.b24_1, value, this.c24_1, this.d24_1, $cont);
  };
  function StackFrameContinuation(uCont, context) {
    this.e24_1 = uCont;
    this.f24_1 = context;
  }
  StackFrameContinuation.prototype.h3 = function () {
    return this.f24_1;
  };
  StackFrameContinuation.prototype.i3 = function (result) {
    this.e24_1.i3(result);
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.g24_1 === owner))
      throw _this__u8e3s4;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation) {
    this.p24_1 = this$0;
    this.q24_1 = $collector;
    this.r24_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.p24_1.x24_1(this.q24_1, this.r24_1, this);
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
  ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this.p24_1, this.q24_1, this.r24_1, completion);
    i.s24_1 = $this$launch;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this$0, $collector, $value, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    this.g25_1 = $previousFlow;
    this.h25_1 = $this_coroutineScope;
    this.i25_1 = this$0;
    this.j25_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowTransformLatest$flowCollect$slambda$slambda.prototype.z23 = function (value, $cont) {
    var tmp = this.a24(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ChannelFlowTransformLatest$flowCollect$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.z23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowTransformLatest$flowCollect$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.l25_1 = this.g25_1._v;
            if (this.l25_1 == null) {
              this.m25_1 = null;
              this.dg_1 = 2;
              continue $sm;
            } else {
              this.l25_1.t1b(new ChildCancelledException());
              this.dg_1 = 1;
              suspendResult = this.l25_1.q1b(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.m25_1 = this.l25_1;
            this.dg_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
            this.g25_1._v = launch$default(this.h25_1, null, tmp_0, ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this.i25_1, this.j25_1, this.k25_1, null), 1, null);
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
  ChannelFlowTransformLatest$flowCollect$slambda$slambda.prototype.a24 = function (value, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda(this.g25_1, this.h25_1, this.i25_1, this.j25_1, completion);
    i.k25_1 = value;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda_0($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z23(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest_init_$Init$(transform, flow, context, capacity, onBufferOverflow, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 8) === 0)) {
      Factory_getInstance();
      capacity = -2;
    }
    if (!(($mask0 & 16) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    ChannelFlowTransformLatest.call($this, transform, flow, context, capacity, onBufferOverflow);
    return $this;
  }
  function ChannelFlowTransformLatest_init_$Create$(transform, flow, context, capacity, onBufferOverflow, $mask0, $marker) {
    return ChannelFlowTransformLatest_init_$Init$(transform, flow, context, capacity, onBufferOverflow, $mask0, $marker, Object.create(ChannelFlowTransformLatest.prototype));
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.n25_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.k1u = function (value, $cont) {
    return this.n25_1(value, $cont);
  };
  function ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation) {
    this.w25_1 = this$0;
    this.x25_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowTransformLatest$flowCollect$slambda.prototype.a22 = function ($this$coroutineScope, $cont) {
    var tmp = this.b22($this$coroutineScope, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ChannelFlowTransformLatest$flowCollect$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowTransformLatest$flowCollect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.z25_1 = {_v: null};
            this.dg_1 = 1;
            var tmp_0 = ChannelFlowTransformLatest$flowCollect$slambda$slambda_0(this.z25_1, this.y25_1, this.w25_1, this.x25_1, null);
            suspendResult = this.w25_1.p22_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  ChannelFlowTransformLatest$flowCollect$slambda.prototype.b22 = function ($this$coroutineScope, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this.w25_1, this.x25_1, completion);
    i.y25_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda_0(this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.a22($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest(transform, flow, context, capacity, onBufferOverflow) {
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
    this.x24_1 = transform;
  }
  ChannelFlowTransformLatest.prototype.g22 = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowTransformLatest(this.x24_1, this.p22_1, context, capacity, onBufferOverflow);
  };
  ChannelFlowTransformLatest.prototype.a26 = function (collector, $cont) {
    // Inline function 'kotlinx.coroutines.assert' call
    return coroutineScope(ChannelFlowTransformLatest$flowCollect$slambda_0(this, collector, null), $cont);
  };
  ChannelFlowTransformLatest.prototype.q22 = function (collector, $cont) {
    return this.a26(collector, $cont);
  };
  function NopCollector() {
    NopCollector_instance = this;
  }
  NopCollector.prototype.b26 = function (value, $cont) {
    return Unit_getInstance();
  };
  NopCollector.prototype.k1u = function (value, $cont) {
    return this.b26((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    if (NopCollector_instance == null)
      new NopCollector();
    return NopCollector_instance;
  }
  function get_NULL() {
    init_properties_NullSurrogate_kt_8d5lbx();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function init_properties_NullSurrogate_kt_8d5lbx() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.r3(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.z1v_1)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.y1v_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.x1d();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.o();
      var collectElement = $this_checkContext.y1v_1.l3(key);
      var tmp;
      if (!(key === Key_getInstance_3())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().MIN_VALUE : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.c26_1 = channel;
  }
  SendingCollector.prototype.k1u = function (value, $cont) {
    return this.c26_1.l1r(value, $cont);
  };
  function buffer(_this__u8e3s4, capacity, onBufferOverflow) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    if (capacity >= 0) {
      tmp_0 = true;
    } else {
      Factory_getInstance();
      tmp_0 = capacity === -2;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      Factory_getInstance();
      tmp = capacity === -1;
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      tmp$ret$0 = 'Buffer size should be non-negative, BUFFERED, or CONFLATED, but was ' + capacity;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    var tmp_1;
    Factory_getInstance();
    if (!(capacity === -1)) {
      tmp_1 = true;
    } else {
      tmp_1 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    }
    var tmp1_require = tmp_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      tmp$ret$1 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    var capacity_0 = capacity;
    var onBufferOverflow_0 = onBufferOverflow;
    var tmp_2 = capacity_0;
    Factory_getInstance();
    if (tmp_2 === -1) {
      capacity_0 = 0;
      onBufferOverflow_0 = BufferOverflow_DROP_OLDEST_getInstance();
    }
    var tmp0_subject = _this__u8e3s4;
    var tmp_3;
    if (isInterface(tmp0_subject, FusibleFlow)) {
      tmp_3 = _this__u8e3s4.a1y(null, capacity_0, onBufferOverflow_0, 1, null);
    } else {
      tmp_3 = ChannelFlowOperatorImpl_init_$Create$(_this__u8e3s4, null, capacity_0, onBufferOverflow_0, 2, null);
    }
    return tmp_3;
  }
  function buffer$default(_this__u8e3s4, capacity, onBufferOverflow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = -2;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    return buffer(_this__u8e3s4, capacity, onBufferOverflow);
  }
  function get_defaultKeySelector() {
    init_properties_Distinct_kt_yydxy6();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    init_properties_Distinct_kt_yydxy6();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function distinctUntilChanged(_this__u8e3s4) {
    init_properties_Distinct_kt_yydxy6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (isInterface(tmp0_subject, StateFlow)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = distinctUntilChangedBy(_this__u8e3s4, get_defaultKeySelector(), get_defaultAreEquivalent());
    }
    return tmp;
  }
  function distinctUntilChangedBy(_this__u8e3s4, keySelector, areEquivalent) {
    init_properties_Distinct_kt_yydxy6();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (_this__u8e3s4 instanceof DistinctFlowImpl) {
      tmp_1 = _this__u8e3s4.e26_1 === keySelector;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = _this__u8e3s4.f26_1 === areEquivalent;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new DistinctFlowImpl(_this__u8e3s4, keySelector, areEquivalent);
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.g26_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.k1u = function (value, $cont) {
    return this.g26_1(value, $cont);
  };
  function DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation) {
    this.p26_1 = this$0;
    this.q26_1 = $previousKey;
    this.r26_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  DistinctFlowImpl$collect$slambda.prototype.z23 = function (value, $cont) {
    var tmp = this.a24(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  DistinctFlowImpl$collect$slambda.prototype.kh = function (p1, $cont) {
    return this.z23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  DistinctFlowImpl$collect$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.t26_1 = this.p26_1.e26_1(this.s26_1);
            if (this.q26_1._v === get_NULL() ? true : !this.p26_1.f26_1(this.q26_1._v, this.t26_1)) {
              this.q26_1._v = this.t26_1;
              this.dg_1 = 1;
              suspendResult = this.r26_1.k1u(this.s26_1, this);
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
  DistinctFlowImpl$collect$slambda.prototype.a24 = function (value, completion) {
    var i = new DistinctFlowImpl$collect$slambda(this.p26_1, this.q26_1, this.r26_1, completion);
    i.s26_1 = value;
    return i;
  };
  function DistinctFlowImpl$collect$slambda_0(this$0, $previousKey, $collector, resultContinuation) {
    var i = new DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z23(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DistinctFlowImpl(upstream, keySelector, areEquivalent) {
    this.d26_1 = upstream;
    this.e26_1 = keySelector;
    this.f26_1 = areEquivalent;
  }
  DistinctFlowImpl.prototype.w1t = function (collector, $cont) {
    var previousKey = {_v: get_NULL()};
    var tmp = DistinctFlowImpl$collect$slambda_0(this, previousKey, collector, null);
    return this.d26_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp), $cont);
  };
  function defaultKeySelector$lambda(it) {
    init_properties_Distinct_kt_yydxy6();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    init_properties_Distinct_kt_yydxy6();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function init_properties_Distinct_kt_yydxy6() {
    if (properties_initialized_Distinct_kt_uy8c72) {
    } else {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function ensureActive_2(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.u26_1;
  }
  function ThrowingCollector() {
  }
  function catch_0(_this__u8e3s4, action) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_1(_this__u8e3s4, action);
    return tmp$ret$0;
  }
  function retryWhen(_this__u8e3s4, predicate) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_2(_this__u8e3s4, predicate);
    return tmp$ret$0;
  }
  function catchImpl(_this__u8e3s4, collector, $cont) {
    var tmp = new $catchImplCOROUTINE$14(_this__u8e3s4, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function isSameExceptionAs(_this__u8e3s4, other) {
    return !(other == null) ? equals(unwrap(other), unwrap(_this__u8e3s4)) : false;
  }
  function isCancellationCause(_this__u8e3s4, coroutineContext) {
    var job = coroutineContext.l3(Key_getInstance_3());
    if (job == null ? true : !job.h1b())
      return false;
    return isSameExceptionAs(_this__u8e3s4, job.k1b());
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.g27_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.k1u = function (value, $cont) {
    return this.g27_1(value, $cont);
  };
  function $collectCOROUTINE$15(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p27_1 = _this__u8e3s4;
    this.q27_1 = collector;
  }
  $collectCOROUTINE$15.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            suspendResult = catchImpl(this.p27_1.s27_1, this.q27_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r27_1 = suspendResult;
            if (!(this.r27_1 == null)) {
              this.dg_1 = 2;
              suspendResult = this.p27_1.t27_1(this.q27_1, this.r27_1, this);
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
  function _no_name_provided__qut3iv_1($this_catch, $action) {
    this.s27_1 = $this_catch;
    this.t27_1 = $action;
  }
  _no_name_provided__qut3iv_1.prototype.w1t = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$15(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $collectCOROUTINE$16(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c28_1 = _this__u8e3s4;
    this.d28_1 = collector;
  }
  $collectCOROUTINE$16.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            this.e28_1 = new Long(0, 0);
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.f28_1 = false;
            this.dg_1 = 2;
            suspendResult = catchImpl(this.c28_1.h28_1, this.d28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g28_1 = suspendResult;
            if (!(this.g28_1 == null)) {
              this.dg_1 = 3;
              suspendResult = this.c28_1.i28_1(this.d28_1, this.g28_1, this.e28_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dg_1 = 5;
              continue $sm;
            }

            break;
          case 3:
            if (suspendResult) {
              this.f28_1 = true;
              var tmp0 = this.e28_1;
              this.e28_1 = tmp0.qf();
              this.dg_1 = 4;
              continue $sm;
            } else {
              throw this.g28_1;
            }

            break;
          case 4:
            this.dg_1 = 5;
            continue $sm;
          case 5:
            if (this.f28_1) {
              this.dg_1 = 1;
              continue $sm;
            }

            this.dg_1 = 6;
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
  function _no_name_provided__qut3iv_2($this_retryWhen, $predicate) {
    this.h28_1 = $this_retryWhen;
    this.i28_1 = $predicate;
  }
  _no_name_provided__qut3iv_2.prototype.w1t = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$16(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function catchImpl$slambda($collector, $fromDownstream, resultContinuation) {
    this.r28_1 = $collector;
    this.s28_1 = $fromDownstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  catchImpl$slambda.prototype.z23 = function (it, $cont) {
    var tmp = this.a24(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  catchImpl$slambda.prototype.kh = function (p1, $cont) {
    return this.z23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  catchImpl$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.r28_1.k1u(this.t28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eg_1 = 3;
            this.dg_1 = 4;
            continue $sm;
          case 2:
            this.eg_1 = 3;
            var tmp_0 = this.gg_1;
            if (tmp_0 instanceof Error) {
              var e = this.gg_1;
              this.s28_1._v = e;
              throw e;
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
  catchImpl$slambda.prototype.a24 = function (it, completion) {
    var i = new catchImpl$slambda(this.r28_1, this.s28_1, completion);
    i.t28_1 = it;
    return i;
  };
  function catchImpl$slambda_0($collector, $fromDownstream, resultContinuation) {
    var i = new catchImpl$slambda($collector, $fromDownstream, resultContinuation);
    var l = function (it, $cont) {
      return i.z23(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $catchImplCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d27_1 = _this__u8e3s4;
    this.e27_1 = collector;
  }
  $catchImplCOROUTINE$14.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.f27_1 = {_v: null};
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = catchImpl$slambda_0(this.e27_1, this.f27_1, null);
            suspendResult = this.d27_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eg_1 = 3;
            this.dg_1 = 4;
            continue $sm;
          case 2:
            this.eg_1 = 3;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof Error) {
              var e = this.gg_1;
              var fromDownstream = this.f27_1._v;
              var tmp_2;
              if (isSameExceptionAs(e, fromDownstream)) {
                tmp_2 = true;
              } else {
                tmp_2 = isCancellationCause(e, this.h3());
              }
              if (tmp_2) {
                throw e;
              } else {
                if (fromDownstream == null) {
                  return e;
                }
                if (e instanceof CancellationException) {
                  addSuppressed(fromDownstream, e);
                  throw fromDownstream;
                } else {
                  addSuppressed(e, fromDownstream);
                  throw e;
                }
              }
              this.dg_1 = 4;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            throw this.gg_1;
          case 4:
            this.eg_1 = 3;
            return null;
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
  var DEFAULT_CONCURRENCY;
  function transformLatest(_this__u8e3s4, transform) {
    init_properties_Merge_kt_uorl8c();
    return ChannelFlowTransformLatest_init_$Create$(transform, _this__u8e3s4, null, 0, null, 28, null);
  }
  function mapLatest(_this__u8e3s4, transform) {
    init_properties_Merge_kt_uorl8c();
    return transformLatest(_this__u8e3s4, mapLatest$slambda_0(transform, null));
  }
  function mapLatest$slambda($transform, resultContinuation) {
    this.c29_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  mapLatest$slambda.prototype.g29 = function ($this$transformLatest, it, $cont) {
    var tmp = this.h29($this$transformLatest, it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  mapLatest$slambda.prototype.e7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.g29(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $cont);
  };
  mapLatest$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.dg_1 = 1;
            suspendResult = this.c29_1(this.e29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f29_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = this.d29_1.k1u(this.f29_1, this);
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
  mapLatest$slambda.prototype.h29 = function ($this$transformLatest, it, completion) {
    var i = new mapLatest$slambda(this.c29_1, completion);
    i.d29_1 = $this$transformLatest;
    i.e29_1 = it;
    return i;
  };
  function mapLatest$slambda_0($transform, resultContinuation) {
    var i = new mapLatest$slambda($transform, resultContinuation);
    var l = function ($this$transformLatest, it, $cont) {
      return i.g29($this$transformLatest, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_Merge_kt_dhn6vs;
  function init_properties_Merge_kt_uorl8c() {
    if (properties_initialized_Merge_kt_dhn6vs) {
    } else {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance().MAX_VALUE);
    }
  }
  function stateIn(_this__u8e3s4, scope, started, initialValue) {
    var config = configureSharing(_this__u8e3s4, 1);
    var state = MutableStateFlow(initialValue);
    var job = launchSharing(scope, config.l29_1, config.i29_1, state, started, initialValue);
    return new ReadonlyStateFlow(state, job);
  }
  function SharingConfig(upstream, extraBufferCapacity, onBufferOverflow, context) {
    this.i29_1 = upstream;
    this.j29_1 = extraBufferCapacity;
    this.k29_1 = onBufferOverflow;
    this.l29_1 = context;
  }
  function configureSharing(_this__u8e3s4, replay) {
    // Inline function 'kotlinx.coroutines.assert' call
    var defaultExtraCapacity = coerceAtLeast(replay, Factory_getInstance().y1s_1) - replay | 0;
    if (_this__u8e3s4 instanceof ChannelFlow) {
      var upstream = _this__u8e3s4.f22();
      if (!(upstream == null)) {
        var tmp0_subject = _this__u8e3s4.m21_1;
        var tmp;
        var tmp_0;
        var tmp_1;
        Factory_getInstance();
        if (tmp0_subject === -3) {
          tmp_1 = true;
        } else {
          Factory_getInstance();
          tmp_1 = tmp0_subject === -2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = tmp0_subject === 0;
        }
        if (tmp_0) {
          tmp = _this__u8e3s4.n21_1.equals(BufferOverflow_SUSPEND_getInstance()) ? _this__u8e3s4.m21_1 === 0 ? 0 : defaultExtraCapacity : replay === 0 ? 1 : 0;
        } else {
          tmp = _this__u8e3s4.m21_1;
        }
        return new SharingConfig(upstream, tmp, _this__u8e3s4.n21_1, _this__u8e3s4.l21_1);
      }
    }
    return new SharingConfig(_this__u8e3s4, defaultExtraCapacity, BufferOverflow_SUSPEND_getInstance(), EmptyCoroutineContext_getInstance());
  }
  function launchSharing(_this__u8e3s4, context, upstream, shared, started, initialValue) {
    var start = equals(started, Companion_getInstance_2().g1y_1) ? CoroutineStart_DEFAULT_getInstance() : CoroutineStart_UNDISPATCHED_getInstance();
    return launch(_this__u8e3s4, context, start, launchSharing$slambda_0(started, upstream, shared, initialValue, null));
  }
  function $collectCOROUTINE$20(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u29_1 = _this__u8e3s4;
    this.v29_1 = collector;
  }
  $collectCOROUTINE$20.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.u29_1.x29_1.t1x(this.v29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.w29_1 = job;
    this.x29_1 = flow;
  }
  ReadonlyStateFlow.prototype.p = function () {
    return this.x29_1.p();
  };
  ReadonlyStateFlow.prototype.t1x = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$20(this, collector, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  ReadonlyStateFlow.prototype.w1t = function (collector, $cont) {
    return this.t1x(collector, $cont);
  };
  ReadonlyStateFlow.prototype.z1x = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function $onSubscriptionCOROUTINE$21(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g2a_1 = _this__u8e3s4;
  }
  $onSubscriptionCOROUTINE$21.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 7;
            var tmp_0 = this;
            tmp_0.h2a_1 = new SafeCollector(this.g2a_1.o1x_1, this.h3());
            this.dg_1 = 1;
            continue $sm;
          case 1:
            this.eg_1 = 6;
            this.dg_1 = 2;
            suspendResult = this.g2a_1.p1x_1(this.h2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i2a_1 = suspendResult;
            this.eg_1 = 7;
            this.dg_1 = 3;
            continue $sm;
          case 3:
            this.h2a_1.b1w();
            ;
            var tmp_1 = this.g2a_1.o1x_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.dg_1 = 4;
              suspendResult = this.g2a_1.o1x_1.q1x(this);
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
            return Unit_getInstance();
          case 6:
            this.eg_1 = 7;
            var t = this.gg_1;
            this.h2a_1.b1w();
            ;
            throw t;
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
  function SubscribedFlowCollector() {
  }
  SubscribedFlowCollector.prototype.q1x = function ($cont) {
    var tmp = new $onSubscriptionCOROUTINE$21(this, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function launchSharing$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  launchSharing$slambda$slambda.prototype.s2a = function (it, $cont) {
    var tmp = this.v1y(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  launchSharing$slambda$slambda.prototype.kh = function (p1, $cont) {
    return this.s2a((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $cont);
  };
  launchSharing$slambda$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        if (tmp === 0) {
          this.eg_1 = 1;
          return this.r2a_1 > 0;
        } else if (tmp === 1) {
          throw this.gg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  launchSharing$slambda$slambda.prototype.v1y = function (it, completion) {
    var i = new launchSharing$slambda$slambda(completion);
    i.r2a_1 = it;
    return i;
  };
  function launchSharing$slambda$slambda_0(resultContinuation) {
    var i = new launchSharing$slambda$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.s2a(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation) {
    this.b2b_1 = $upstream;
    this.c2b_1 = $shared;
    this.d2b_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchSharing$slambda$slambda_1.prototype.h2b = function (it, $cont) {
    var tmp = this.i2b(it, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  launchSharing$slambda$slambda_1.prototype.kh = function (p1, $cont) {
    return this.h2b(p1 instanceof SharingCommand ? p1 : THROW_CCE(), $cont);
  };
  launchSharing$slambda$slambda_1.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.f2b_1 = this.e2b_1;
            this.g2b_1 = this.f2b_1.y3_1;
            if (this.g2b_1 === 0) {
              this.dg_1 = 1;
              suspendResult = this.b2b_1.w1t(this.c2b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.g2b_1 === 1) {
                this.dg_1 = 2;
                continue $sm;
              } else {
                if (this.g2b_1 === 2) {
                  if (this.d2b_1 === get_NO_VALUE()) {
                    this.c2b_1.y1x();
                  } else {
                    this.c2b_1.u1x(this.d2b_1);
                  }
                  this.dg_1 = 2;
                  continue $sm;
                } else {
                  this.dg_1 = 2;
                  continue $sm;
                }
              }
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
  launchSharing$slambda$slambda_1.prototype.i2b = function (it, completion) {
    var i = new launchSharing$slambda$slambda_1(this.b2b_1, this.c2b_1, this.d2b_1, completion);
    i.e2b_1 = it;
    return i;
  };
  function launchSharing$slambda$slambda_2($upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation);
    var l = function (it, $cont) {
      return i.h2b(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation) {
    this.r2b_1 = $started;
    this.s2b_1 = $upstream;
    this.t2b_1 = $shared;
    this.u2b_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchSharing$slambda.prototype.a22 = function ($this$launch, $cont) {
    var tmp = this.b22($this$launch, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  launchSharing$slambda.prototype.kh = function (p1, $cont) {
    return this.a22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  launchSharing$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 6;
            if (this.r2b_1 === Companion_getInstance_2().g1y_1) {
              this.dg_1 = 4;
              suspendResult = this.s2b_1.w1t(this.t2b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.r2b_1 === Companion_getInstance_2().h1y_1) {
                this.dg_1 = 2;
                var tmp_0 = this.t2b_1.b1y();
                suspendResult = first_0(tmp_0, launchSharing$slambda$slambda_0(null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dg_1 = 1;
                var tmp_1 = distinctUntilChanged(this.r2b_1.i1y(this.t2b_1.b1y()));
                suspendResult = collectLatest(tmp_1, launchSharing$slambda$slambda_2(this.s2b_1, this.t2b_1, this.u2b_1, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            this.dg_1 = 5;
            continue $sm;
          case 2:
            ;
            this.dg_1 = 3;
            suspendResult = this.s2b_1.w1t(this.t2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.dg_1 = 5;
            continue $sm;
          case 4:
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
  launchSharing$slambda.prototype.b22 = function ($this$launch, completion) {
    var i = new launchSharing$slambda(this.r2b_1, this.s2b_1, this.t2b_1, this.u2b_1, completion);
    i.v2b_1 = $this$launch;
    return i;
  };
  function launchSharing$slambda_0($started, $upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.a22($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function emitAll_0(_this__u8e3s4, flow, $cont) {
    ensureActive_2(_this__u8e3s4);
    return flow.w1t(_this__u8e3s4, $cont);
  }
  function collectLatest(_this__u8e3s4, action, $cont) {
    var tmp = mapLatest(_this__u8e3s4, action);
    return collect(buffer$default(tmp, 0, null, 2, null), $cont);
  }
  function collect(_this__u8e3s4, $cont) {
    return _this__u8e3s4.w1t(NopCollector_getInstance(), $cont);
  }
  function toList(_this__u8e3s4, destination, $cont) {
    return toCollection(_this__u8e3s4, destination, $cont);
  }
  function toList$default(_this__u8e3s4, destination, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      destination = ArrayList_init_$Create$_0();
    return toList(_this__u8e3s4, destination, $cont);
  }
  function toCollection(_this__u8e3s4, destination, $cont) {
    var tmp = new $toCollectionCOROUTINE$24(_this__u8e3s4, destination, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.g2c_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_3.prototype.k1u = function (value, $cont) {
    return this.g2c_1(value, $cont);
  };
  function toCollection$slambda($destination, resultContinuation) {
    this.p2c_1 = $destination;
    CoroutineImpl.call(this, resultContinuation);
  }
  toCollection$slambda.prototype.z23 = function (value, $cont) {
    var tmp = this.a24(value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  toCollection$slambda.prototype.kh = function (p1, $cont) {
    return this.z23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  toCollection$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        if (tmp === 0) {
          this.eg_1 = 1;
          this.p2c_1.a(this.q2c_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.gg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  toCollection$slambda.prototype.a24 = function (value, completion) {
    var i = new toCollection$slambda(this.p2c_1, completion);
    i.q2c_1 = value;
    return i;
  };
  function toCollection$slambda_0($destination, resultContinuation) {
    var i = new toCollection$slambda($destination, resultContinuation);
    var l = function (value, $cont) {
      return i.z23(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $toCollectionCOROUTINE$24(_this__u8e3s4, destination, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2c_1 = _this__u8e3s4;
    this.f2c_1 = destination;
  }
  $toCollectionCOROUTINE$24.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 2;
            this.dg_1 = 1;
            var tmp_0 = toCollection$slambda_0(this.f2c_1, null);
            suspendResult = this.e2c_1.w1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.f2c_1;
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
  function firstOrNull(_this__u8e3s4, predicate, $cont) {
    var tmp = new $firstOrNullCOROUTINE$25(_this__u8e3s4, predicate, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function first(_this__u8e3s4, $cont) {
    var tmp = new $firstCOROUTINE$26(_this__u8e3s4, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function first_0(_this__u8e3s4, predicate, $cont) {
    var tmp = new $firstCOROUTINE$27(_this__u8e3s4, predicate, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  }
  function $emitCOROUTINE$28(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i2e_1 = _this__u8e3s4;
    this.j2e_1 = value;
  }
  $emitCOROUTINE$28.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            suspendResult = this.i2e_1.l2e_1(this.j2e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this.i2e_1.m2e_1._v = this.j2e_1;
              tmp_0.k2e_1 = false;
              this.dg_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.k2e_1 = true;
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.k2e_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.i2e_1);
            } else {
              this.dg_1 = 3;
              continue $sm;
            }

            ;
            break;
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
  function _no_name_provided__qut3iv_3($predicate, $result) {
    this.l2e_1 = $predicate;
    this.m2e_1 = $result;
  }
  _no_name_provided__qut3iv_3.prototype.k1u = function (value, $cont) {
    var tmp = new $emitCOROUTINE$28(this, value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function _no_name_provided__qut3iv_4($result) {
    this.n2e_1 = $result;
  }
  _no_name_provided__qut3iv_4.prototype.k1u = function (value, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.first.<anonymous>' call
    this.n2e_1._v = value;
    tmp$ret$0 = false;
    if (!tmp$ret$0) {
      throw new AbortFlowException(this);
    }
    return Unit_getInstance();
  };
  function $emitCOROUTINE$29(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2e_1 = _this__u8e3s4;
    this.x2e_1 = value;
  }
  $emitCOROUTINE$29.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.dg_1 = 1;
            suspendResult = this.w2e_1.z2e_1(this.x2e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this.w2e_1.a2f_1._v = this.x2e_1;
              tmp_0.y2e_1 = false;
              this.dg_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.y2e_1 = true;
              this.dg_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.y2e_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.w2e_1);
            } else {
              this.dg_1 = 3;
              continue $sm;
            }

            ;
            break;
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
  function _no_name_provided__qut3iv_5($predicate, $result) {
    this.z2e_1 = $predicate;
    this.a2f_1 = $result;
  }
  _no_name_provided__qut3iv_5.prototype.k1u = function (value, $cont) {
    var tmp = new $emitCOROUTINE$29(this, value, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  function $firstOrNullCOROUTINE$25(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z2c_1 = _this__u8e3s4;
    this.a2d_1 = predicate;
  }
  $firstOrNullCOROUTINE$25.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 4;
            this.b2d_1 = {_v: null};
            var tmp_0 = this;
            tmp_0.c2d_1 = new _no_name_provided__qut3iv_3(this.a2d_1, this.b2d_1);
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.z2c_1.w1t(this.c2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eg_1 = 4;
            this.dg_1 = 3;
            continue $sm;
          case 2:
            this.eg_1 = 4;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.gg_1;
              checkOwnership(e, this.c2d_1);
              this.dg_1 = 3;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            this.eg_1 = 4;
            return this.b2d_1._v;
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
  function $firstCOROUTINE$26(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2d_1 = _this__u8e3s4;
  }
  $firstCOROUTINE$26.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.m2d_1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.n2d_1 = new _no_name_provided__qut3iv_4(this.m2d_1);
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.l2d_1.w1t(this.n2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eg_1 = 3;
            this.dg_1 = 4;
            continue $sm;
          case 2:
            this.eg_1 = 3;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.gg_1;
              checkOwnership(e, this.n2d_1);
              this.dg_1 = 4;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            throw this.gg_1;
          case 4:
            this.eg_1 = 3;
            if (this.m2d_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$('Expected at least one element');
            var tmp_2 = this.m2d_1._v;
            return (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
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
  function $firstCOROUTINE$27(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2d_1 = _this__u8e3s4;
    this.x2d_1 = predicate;
  }
  $firstCOROUTINE$27.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            this.y2d_1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.z2d_1 = new _no_name_provided__qut3iv_5(this.x2d_1, this.y2d_1);
            this.eg_1 = 2;
            this.dg_1 = 1;
            suspendResult = this.w2d_1.w1t(this.z2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eg_1 = 3;
            this.dg_1 = 4;
            continue $sm;
          case 2:
            this.eg_1 = 3;
            var tmp_1 = this.gg_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.gg_1;
              checkOwnership(e, this.z2d_1);
              this.dg_1 = 4;
              continue $sm;
            } else {
              throw this.gg_1;
            }

            break;
          case 3:
            throw this.gg_1;
          case 4:
            this.eg_1 = 3;
            if (this.y2d_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$('Expected at least one element matching the predicate ' + this.x2d_1);
            var tmp_2 = this.y2d_1._v;
            return (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
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
  function ensureCapacity_0($this) {
    var currentSize = $this.n1h_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.n1h_1;
    var tmp1_copyInto = $this.o1h_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.n1h_1;
    var tmp4_copyInto = $this.n1h_1.length - $this.o1h_1 | 0;
    var tmp5_copyInto = $this.o1h_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.n1h_1 = newElements;
    $this.o1h_1 = 0;
    $this.p1h_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.n1h_1 = tmp$ret$0;
    this.o1h_1 = 0;
    this.p1h_1 = 0;
  }
  ArrayQueue.prototype.v1h = function () {
    return this.o1h_1 === this.p1h_1;
  };
  ArrayQueue.prototype.s1h = function (element) {
    this.n1h_1[this.p1h_1] = element;
    this.p1h_1 = (this.p1h_1 + 1 | 0) & (this.n1h_1.length - 1 | 0);
    if (this.p1h_1 === this.o1h_1) {
      ensureCapacity_0(this);
    }
  };
  ArrayQueue.prototype.q1h = function () {
    if (this.o1h_1 === this.p1h_1)
      return null;
    var element = this.n1h_1[this.o1h_1];
    this.n1h_1[this.o1h_1] = null;
    this.o1h_1 = (this.o1h_1 + 1 | 0) & (this.n1h_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function get_NO_DECISION() {
    init_properties_Atomic_kt_3h20tt();
    return NO_DECISION;
  }
  var NO_DECISION;
  function get_RETRY_ATOMIC() {
    init_properties_Atomic_kt_3h20tt();
    return RETRY_ATOMIC;
  }
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  OpDescriptor.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  OpDescriptor.prototype.c2f = function (that) {
    var tmp0_elvis_lhs = this.b2f();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var thisOp = tmp;
    var tmp1_elvis_lhs = that.b2f();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var thatOp = tmp_0;
    return thisOp.e2f().x(thatOp.e2f()) < 0;
  };
  function AtomicOp() {
    OpDescriptor.call(this);
    this.d2f_1 = atomic$ref$1(get_NO_DECISION());
  }
  AtomicOp.prototype.e2f = function () {
    return new Long(0, 0);
  };
  AtomicOp.prototype.b2f = function () {
    return this;
  };
  AtomicOp.prototype.f2f = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this.d2f_1.kotlinx$atomicfu$value;
    if (!(current === get_NO_DECISION()))
      return current;
    if (this.d2f_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this.d2f_1.kotlinx$atomicfu$value;
  };
  AtomicOp.prototype.d1k = function (affected) {
    var decision = this.d2f_1.kotlinx$atomicfu$value;
    if (decision === get_NO_DECISION()) {
      decision = this.f2f(this.g2f((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.h2f((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  function AtomicDesc() {
  }
  var properties_initialized_Atomic_kt_vn225v;
  function init_properties_Atomic_kt_3h20tt() {
    if (properties_initialized_Atomic_kt_vn225v) {
    } else {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.k1e_1.b1h(tmp1_resumeCancellableWith.h3())) {
        tmp1_resumeCancellableWith.m1e_1 = state;
        tmp1_resumeCancellableWith.d1f_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.k1e_1.c1h(tmp1_resumeCancellableWith.h3(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().a1i();
          if (false ? eventLoop.u1h() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.t1h()) {
            tmp1_resumeCancellableWith.m1e_1 = state;
            tmp1_resumeCancellableWith.d1f_1 = tmp0_executeUnconfined;
            eventLoop.r1h(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.w1h(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.h3().l3(Key_getInstance_3());
                if (!(job == null) ? !job.n1a() : false) {
                  var cause = job.k1b();
                  tmp1_resumeCancellableWith.v1f(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.i3(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.l1e_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.n1e_1;
                tmp1_resumeCancellableWith.l1e_1.i3(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.m1h())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.g1g($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.x1h(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.i3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.o1e_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.k1e_1 = dispatcher;
    this.l1e_1 = continuation;
    this.m1e_1 = get_UNDEFINED();
    this.n1e_1 = threadContextElements(this.h3());
    this.o1e_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.h3 = function () {
    return this.l1e_1.h3();
  };
  DispatchedContinuation.prototype.c1f = function () {
    return !(this.o1e_1.kotlinx$atomicfu$value == null);
  };
  DispatchedContinuation.prototype.j2f = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.m10 = function () {
    this.j2f();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g1f();
    }
  };
  DispatchedContinuation.prototype.p1e = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === null) {
        this.o1e_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this.o1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.f1f = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.o1e_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.o1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  DispatchedContinuation.prototype.e1f = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1e_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.o1e_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.o1e_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  DispatchedContinuation.prototype.u1f = function () {
    var state = this.m1e_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.m1e_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.s1f = function () {
    return this;
  };
  DispatchedContinuation.prototype.i3 = function (result) {
    var context = this.l1e_1.h3();
    var state = toState$default(result, null, 1, null);
    if (this.k1e_1.b1h(context)) {
      this.m1e_1 = state;
      this.d1f_1 = get_MODE_ATOMIC();
      this.k1e_1.c1h(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().a1i();
        if (false ? eventLoop.u1h() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.t1h()) {
          this.m1e_1 = state;
          this.d1f_1 = tmp0_executeUnconfined;
          eventLoop.r1h(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.w1h(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.h3();
            var tmp1_withCoroutineContext = this.n1e_1;
            this.l1e_1.i3(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.m1h())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.g1g($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.x1h(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.v1f = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.z1g_1(cause);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.k1e_1 + ', ' + toDebugString(this.l1e_1) + ']';
  };
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.d1f_1 = resumeMode;
  }
  DispatchedTask.prototype.v1f = function (takenState, cause) {
  };
  DispatchedTask.prototype.c1g = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.e1g = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1a_1;
  };
  DispatchedTask.prototype.f1g = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.s1f();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.l1e_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.n1e_1;
      var context = continuation.h3();
      var state = this.u1f();
      var exception = this.e1g(state);
      var job = (exception == null ? get_isCancellableMode(this.d1f_1) : false) ? context.l3(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.n1a() : false) {
        var cause = job.k1b();
        this.v1f(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.i3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.i3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.c1g(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.i3(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.g1g(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.g1g = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.s1f().h3(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.s1f();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.d1f_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.k1e_1;
      var context = delegate.h3();
      if (dispatcher.b1h(context)) {
        dispatcher.c1h(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().a1i();
    if (eventLoop.t1h()) {
      eventLoop.r1h(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.w1h(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.s1f(), true);
        $l$loop: while (true) {
          if (!eventLoop.m1h())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.g1g($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.x1h(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.u1f();
    var exception = _this__u8e3s4.e1g(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      var tmp2_success = _this__u8e3s4.c1g(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.l1e_1;
      var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.n1e_1;
      tmp3_resumeUndispatchedWith.l1e_1.i3(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.i3(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function get_REMOVE_PREPARED() {
    init_properties_LockFreeLinkedList_common_kt_ecmrzd();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  var properties_initialized_LockFreeLinkedList_common_kt_b0cmf9;
  function init_properties_LockFreeLinkedList_common_kt_ecmrzd() {
    if (properties_initialized_LockFreeLinkedList_common_kt_b0cmf9) {
    } else {
      properties_initialized_LockFreeLinkedList_common_kt_b0cmf9 = true;
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
    }
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.k2f_1 = context;
  }
  ContextScope.prototype.m1a = function () {
    return this.k2f_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.k2f_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.w1d_1 = uCont;
  }
  ScopeCoroutine.prototype.c1c = function () {
    return true;
  };
  ScopeCoroutine.prototype.x1d = function () {
    var tmp0_safe_receiver = this.f1b();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1d();
  };
  ScopeCoroutine.prototype.x1a = function (state) {
    var tmp = intercepted(this.w1d_1);
    var tmp_0 = recoverResult(state, this.w1d_1);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  ScopeCoroutine.prototype.w1a = function (state) {
    this.w1d_1.i3(recoverResult(state, this.w1d_1));
  };
  function Symbol(symbol) {
    this.l2f_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.l2f_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).e4();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.x(parsed) <= 0 ? parsed.x(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.i3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
        tmp_2 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUnintercepted(_this__u8e3s4, receiver, completion) {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.kh(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$5;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.i3(tmp$ret$4);
          tmp$ret$5 = Unit_getInstance();
          tmp$ret$6 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.i3(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.h3();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.kh(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.i3(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.i3(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.kh(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.v1a(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.s1a_1;
        tmp$ret$4 = true;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.s1a_1, _this__u8e3s4.w1d_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.s1a_1, _this__u8e3s4.w1d_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.kh(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.v1a(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.s1a_1;
        var tmp_3;
        if (tmp0__anonymous__q1qw7t instanceof TimeoutCancellationException) {
          tmp_3 = tmp0__anonymous__q1qw7t.m1m_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        tmp$ret$4 = !tmp_3;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.s1a_1, _this__u8e3s4.w1d_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.s1a_1, _this__u8e3s4.w1d_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function get_NOT_SELECTED() {
    init_properties_Select_kt_rcehwi();
    return NOT_SELECTED;
  }
  var NOT_SELECTED;
  function get_ALREADY_SELECTED() {
    init_properties_Select_kt_rcehwi();
    return ALREADY_SELECTED;
  }
  var ALREADY_SELECTED;
  function get_UNDECIDED() {
    init_properties_Select_kt_rcehwi();
    return UNDECIDED;
  }
  var UNDECIDED;
  function get_RESUMED() {
    init_properties_Select_kt_rcehwi();
    return RESUMED;
  }
  var RESUMED;
  function get_selectOpSequenceNumber() {
    init_properties_Select_kt_rcehwi();
    return selectOpSequenceNumber;
  }
  var selectOpSequenceNumber;
  function SeqNumber() {
    this.m2f_1 = atomic$long$1(new Long(1, 0));
  }
  SeqNumber.prototype.i = function () {
    return this.m2f_1.atomicfu$incrementAndGet$long();
  };
  function prepareSelectOp($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.v2f_1.r2f_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.selects.AtomicSelectOp.prepareSelectOp.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === $this)
        return null;
      else {
        if (tmp1__anonymous__uwfjfc instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.d1k($this.v2f_1);
        } else {
          if (tmp1__anonymous__uwfjfc === get_NOT_SELECTED()) {
            if ($this.v2f_1.r2f_1.atomicfu$compareAndSet(get_NOT_SELECTED(), $this))
              return null;
          } else {
            return get_ALREADY_SELECTED();
          }
        }
      }
    }
  }
  function undoPrepare($this) {
    $this.v2f_1.r2f_1.atomicfu$compareAndSet($this, get_NOT_SELECTED());
  }
  function completeSelect($this, failure) {
    var selectSuccess = failure == null;
    var update = selectSuccess ? null : get_NOT_SELECTED();
    if ($this.v2f_1.r2f_1.atomicfu$compareAndSet($this, update)) {
      if (selectSuccess) {
        doAfterSelect($this.v2f_1);
      }
    }
  }
  function _set_parentHandle__bde57($this, value) {
    $this.t2f_1.kotlinx$atomicfu$value = value;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.t2f_1.kotlinx$atomicfu$value;
  }
  function initCancellability($this) {
    var tmp0_elvis_lhs = $this.h3().l3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new SelectOnCancelling($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var newRegistration = parent.p1b(true, false, tmp$ret$1, 2, null);
    _set_parentHandle__bde57($this, newRegistration);
    if ($this.f1k()) {
      newRegistration.i1e();
    }
  }
  function SelectOnCancelling($outer) {
    this.c2g_1 = $outer;
    JobCancellingNode.call(this);
  }
  SelectOnCancelling.prototype.h1e = function (cause) {
    if (this.c2g_1.i1k()) {
      this.c2g_1.h1k(this.u1i().k1b());
    }
  };
  SelectOnCancelling.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  function doAfterSelect($this) {
    var tmp0_safe_receiver = _get_parentHandle__f8dcex($this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i1e();
    }
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = $this.y1e_1;
    while (!equals(cur, $this)) {
      if (cur instanceof DisposeNode) {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doAfterSelect.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        tmp0__anonymous__q1qw7t.g2g_1.i1e();
      }
      cur = cur.y1e_1;
    }
  }
  function PairSelectOp(otherOp) {
    OpDescriptor.call(this);
    this.h2g_1 = otherOp;
  }
  PairSelectOp.prototype.d1k = function (affected) {
    var impl = affected instanceof SelectBuilderImpl ? affected : THROW_CCE();
    this.h2g_1.m1p();
    var decision = this.h2g_1.o1o_1.f2f(null);
    var update = decision == null ? this.h2g_1.n1o_1 : get_NOT_SELECTED();
    impl.r2f_1.atomicfu$compareAndSet(this, update);
    return decision;
  };
  PairSelectOp.prototype.b2f = function () {
    return this.h2g_1.o1o_1;
  };
  function AtomicSelectOp(impl, desc) {
    AtomicOp.call(this);
    this.v2f_1 = impl;
    this.w2f_1 = desc;
    this.x2f_1 = get_selectOpSequenceNumber().i();
    this.w2f_1.i2f_1 = this;
  }
  AtomicSelectOp.prototype.e2f = function () {
    return this.x2f_1;
  };
  AtomicSelectOp.prototype.i2g = function (affected) {
    if (affected == null) {
      var tmp0_safe_receiver = prepareSelectOp(this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    try {
      return this.w2f_1.a1p(this);
    } catch ($p) {
      if ($p instanceof Error) {
        if (affected == null) {
          undoPrepare(this);
        }
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  AtomicSelectOp.prototype.g2f = function (affected) {
    return this.i2g((affected == null ? true : isObject(affected)) ? affected : THROW_CCE());
  };
  AtomicSelectOp.prototype.j2g = function (affected, failure) {
    completeSelect(this, failure);
    this.w2f_1.b1p(this, failure);
  };
  AtomicSelectOp.prototype.h2f = function (affected, failure) {
    return this.j2g((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), failure);
  };
  AtomicSelectOp.prototype.toString = function () {
    return 'AtomicSelectOp(sequence=' + toString_0(this.x2f_1) + ')';
  };
  function DisposeNode(handle) {
    LinkedListNode.call(this);
    this.g2g_1 = handle;
  }
  function SelectBuilderImpl(uCont) {
    LinkedListHead.call(this);
    this.q2f_1 = uCont;
    this.r2f_1 = atomic$ref$1(get_NOT_SELECTED());
    this.s2f_1 = atomic$ref$1(get_UNDECIDED());
    this.t2f_1 = atomic$ref$1(null);
  }
  SelectBuilderImpl.prototype.h3 = function () {
    return this.q2f_1.h3();
  };
  SelectBuilderImpl.prototype.g1k = function () {
    return this;
  };
  SelectBuilderImpl.prototype.d7 = function (result) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume' call
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = this.s2f_1;
      while (true) {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (tmp1__anonymous__uwfjfc === get_UNDECIDED()) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeWith.<anonymous>' call
          tmp$ret$0 = toState$default(result, null, 1, null);
          var update = tmp$ret$0;
          if (this.s2f_1.atomicfu$compareAndSet(get_UNDECIDED(), update)) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else if (tmp1__anonymous__uwfjfc === get_COROUTINE_SUSPENDED()) {
          if (this.s2f_1.atomicfu$compareAndSet(get_COROUTINE_SUSPENDED(), get_RESUMED())) {
            // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeWith.<anonymous>' call
            if (_Result___get_isFailure__impl__jpiriv(result)) {
              // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
              var tmp0_resumeWithStackTrace = this.q2f_1;
              var tmp1_resumeWithStackTrace = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
              var tmp$ret$2;
              // Inline function 'kotlin.Companion.failure' call
              var tmp0_failure = Companion_getInstance();
              var tmp1_failure = recoverStackTrace(tmp1_resumeWithStackTrace, tmp0_resumeWithStackTrace);
              tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
              tmp0_resumeWithStackTrace.i3(tmp$ret$2);
            } else {
              this.q2f_1.i3(result);
            }
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else
          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  };
  SelectBuilderImpl.prototype.i3 = function (result) {
    return this.d7(result);
  };
  SelectBuilderImpl.prototype.h1k = function (exception) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume' call
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = this.s2f_1;
      while (true) {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (tmp1__anonymous__uwfjfc === get_UNDECIDED()) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeSelectWithException.<anonymous>' call
          var tmp = recoverStackTrace(exception, this.q2f_1);
          tmp$ret$0 = CompletedExceptionally_init_$Create$(tmp, false, 2, null);
          var update = tmp$ret$0;
          if (this.s2f_1.atomicfu$compareAndSet(get_UNDECIDED(), update)) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else if (tmp1__anonymous__uwfjfc === get_COROUTINE_SUSPENDED()) {
          if (this.s2f_1.atomicfu$compareAndSet(get_COROUTINE_SUSPENDED(), get_RESUMED())) {
            // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeSelectWithException.<anonymous>' call
            var tmp_0 = intercepted(this.q2f_1);
            var tmp$ret$2;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance();
            tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
            tmp_0.i3(tmp$ret$2);
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else
          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  };
  SelectBuilderImpl.prototype.s1d = function () {
    if (!this.f1k()) {
      initCancellability(this);
    }
    var result = this.s2f_1.kotlinx$atomicfu$value;
    if (result === get_UNDECIDED()) {
      if (this.s2f_1.atomicfu$compareAndSet(get_UNDECIDED(), get_COROUTINE_SUSPENDED()))
        return get_COROUTINE_SUSPENDED();
      result = this.s2f_1.kotlinx$atomicfu$value;
    }
    if (result === get_RESUMED())
      throw IllegalStateException_init_$Create$('Already resumed');
    else {
      if (result instanceof CompletedExceptionally)
        throw result.s1a_1;
      else {
        return result;
      }
    }
  };
  SelectBuilderImpl.prototype.k2g = function (e) {
    if (this.i1k()) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
      this.i3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      if (!(e instanceof CancellationException)) {
        var result = this.s1d();
        var tmp;
        if (!(result instanceof CompletedExceptionally)) {
          tmp = true;
        } else {
          tmp = !(unwrap(result.s1a_1) === unwrap(e));
        }
        if (tmp) {
          handleCoroutineException(this.h3(), e);
        }
      }
    }
  };
  SelectBuilderImpl.prototype.f1k = function () {
    var tmp0_loop = this.r2f_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.<get-isSelected>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === get_NOT_SELECTED())
        return false;
      else {
        if (tmp1__anonymous__uwfjfc instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.d1k(this);
        } else {
          return true;
        }
      }
    }
    return Unit_getInstance();
  };
  SelectBuilderImpl.prototype.j1k = function (handle) {
    var node = new DisposeNode(handle);
    if (!this.f1k()) {
      this.n1i(node);
      if (!this.f1k())
        return Unit_getInstance();
    }
    handle.i1e();
  };
  SelectBuilderImpl.prototype.i1k = function () {
    var result = this.h1q(null);
    var tmp;
    if (result === get_RESUME_TOKEN()) {
      tmp = true;
    } else if (result == null) {
      tmp = false;
    } else {
      var tmp0_error = 'Unexpected trySelectIdempotent result ' + toString(result);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
    return tmp;
  };
  SelectBuilderImpl.prototype.h1q = function (otherOp) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.r2f_1;
    while (true) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.trySelectOther.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (tmp1__anonymous__uwfjfc === get_NOT_SELECTED()) {
          if (otherOp == null) {
            if (!this.r2f_1.atomicfu$compareAndSet(get_NOT_SELECTED(), null)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
          } else {
            var pairSelectOp = new PairSelectOp(otherOp);
            if (!this.r2f_1.atomicfu$compareAndSet(get_NOT_SELECTED(), pairSelectOp)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            var decision = pairSelectOp.d1k(this);
            if (!(decision === null))
              return decision;
          }
          doAfterSelect(this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1__anonymous__uwfjfc instanceof OpDescriptor) {
            if (!(otherOp == null)) {
              var otherAtomicOp = otherOp.o1o_1;
              var tmp;
              if (otherAtomicOp instanceof AtomicSelectOp) {
                tmp = otherAtomicOp.v2f_1 === this;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlin.error' call
                throw IllegalStateException_init_$Create$('Cannot use matching select clauses on the same object');
              } else {
                if (otherAtomicOp.c2f(tmp1__anonymous__uwfjfc)) {
                  return get_RETRY_ATOMIC();
                }
              }
            }
            tmp1__anonymous__uwfjfc.d1k(this);
          } else {
            if (otherOp == null)
              return null;
            else {
              if (tmp1__anonymous__uwfjfc === otherOp.n1o_1)
                return get_RESUME_TOKEN();
              else {
                return null;
              }
            }
          }
        }
      }
    }
  };
  SelectBuilderImpl.prototype.r1q = function (desc) {
    return (new AtomicSelectOp(this, desc)).d1k(null);
  };
  SelectBuilderImpl.prototype.toString = function () {
    return 'SelectInstance(state=' + toString(this.r2f_1.kotlinx$atomicfu$value) + ', result=' + toString(this.s2f_1.kotlinx$atomicfu$value) + ')';
  };
  SelectBuilderImpl.prototype.l2g = function (_this__u8e3s4, block) {
    _this__u8e3s4.h1d(this, block);
  };
  var properties_initialized_Select_kt_7rpl36;
  function init_properties_Select_kt_rcehwi() {
    if (properties_initialized_Select_kt_7rpl36) {
    } else {
      properties_initialized_Select_kt_7rpl36 = true;
      NOT_SELECTED = new Symbol('NOT_SELECTED');
      ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
      UNDECIDED = new Symbol('UNDECIDED');
      RESUMED = new Symbol('RESUMED');
      selectOpSequenceNumber = new SeqNumber();
    }
  }
  function CloseableCoroutineDispatcher() {
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().c1m_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.m1a().s3(context);
    return (!(combined === Dispatchers_getInstance().c1m_1) ? combined.l3(Key_getInstance()) == null : false) ? combined.s3(Dispatchers_getInstance().c1m_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.s3(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  UndispatchedCoroutine.prototype.w1a = function (state) {
    return this.w1d_1.i3(recoverResult(state, this.w1d_1));
  };
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).vc();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.c1m_1 = createDefaultDispatcher();
    this.d1m_1 = Unconfined_getInstance();
    this.e1m_1 = new JsMainDispatcher(this.c1m_1, false);
    this.f1m_1 = null;
  }
  Dispatchers.prototype.g1m = function () {
    var tmp0_elvis_lhs = this.f1m_1;
    return tmp0_elvis_lhs == null ? this.e1m_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.t2g_1 = delegate;
    this.u2g_1 = invokeImmediately;
    this.v2g_1 = this.u2g_1 ? this : new JsMainDispatcher(this.t2g_1, true);
  }
  JsMainDispatcher.prototype.a1m = function () {
    return this.v2g_1;
  };
  JsMainDispatcher.prototype.b1h = function (context) {
    return !this.u2g_1;
  };
  JsMainDispatcher.prototype.c1h = function (context, block) {
    return this.t2g_1.c1h(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.b1m();
    return tmp0_elvis_lhs == null ? this.t2g_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.c1h = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this.a2h_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.a2h_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.a2h_1, this.a2h_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.a2h_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.d2h = function () {
    process.nextTick(this.m2h_1.j2h_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.d2h = function () {
    setTimeout(this.m2h_1.j2h_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.u2h();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.k2h_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.j2h_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.v2h = function () {
    this.k2h_1.d2h();
  };
  ScheduledMessageQueue.prototype.w2h = function () {
    setTimeout(this.j2h_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.f1g();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.e1e(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.m2h_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.c1h = function (context, block) {
    this.m2h_1.x2h(block);
  };
  SetTimeoutBasedDispatcher.prototype.h1h = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  SetTimeoutBasedDispatcher.prototype.g1h = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.d1e(tmp$ret$1);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.s2h_1 = 16;
    this.t2h_1 = false;
  }
  MessageQueue.prototype.x2h = function (element) {
    this.s1h(element);
    if (!this.t2h_1) {
      this.t2h_1 = true;
      this.v2h();
    }
  };
  MessageQueue.prototype.u2h = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.s2h_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.q1h();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.f1g();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.v1h()) {
        this.t2h_1 = false;
      } else {
        this.w2h();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).e4();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.y2h_1 = handle;
  }
  ClearTimeout.prototype.i1e = function () {
    clearTimeout(this.y2h_1);
  };
  ClearTimeout.prototype.h1e = function (cause) {
    this.i1e();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.h1e(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.y2h_1 + ']';
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.e1e(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.f1g();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.z2h_1 = this$0;
    this.a2i_1 = $handle;
  }
  WindowDispatcher$invokeOnTimeout$1.prototype.i1e = function () {
    this.z2h_1.c2i_1.clearTimeout(this.a2i_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.c2i_1 = window_0;
    this.d2i_1 = new WindowMessageQueue(this.c2i_1);
  }
  WindowDispatcher.prototype.c1h = function (context, block) {
    return this.d2i_1.x2h(block);
  };
  WindowDispatcher.prototype.g1h = function (timeMillis, continuation) {
    this.c2i_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.prototype.h1h = function (timeMillis, block, context) {
    var handle = this.c2i_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.j2i_1 ? event.data == this$0.k2i_1 : false) {
        event.stopPropagation();
        this$0.u2h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.u2h();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.j2i_1 = window_0;
    this.k2i_1 = 'dispatchCoroutine';
    this.j2i_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.v2h = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.w2h = function () {
    this.j2i_1.postMessage(this.k2i_1, '*');
  };
  function promise(_this__u8e3s4, context, start, block) {
    return asPromise(async(_this__u8e3s4, context, start, block));
  }
  function promise$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return promise(_this__u8e3s4, context, start, block);
  }
  function await_0(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.t1f();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    tmp$ret$0 = cancellable.s1d();
    return tmp$ret$0;
  }
  function asPromise(_this__u8e3s4) {
    var promise = new Promise(asPromise$lambda(_this__u8e3s4));
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = promise;
    tmp$ret$0.deferred = _this__u8e3s4;
    return promise;
  }
  function await$lambda($cancellable) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.i3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function await$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      $cancellable.i3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function asPromise$lambda$lambda($this_asPromise, $reject, $resolve) {
    return function (it) {
      var e = $this_asPromise.i1d();
      var tmp;
      if (!(e == null)) {
        tmp = $reject(e);
      } else {
        tmp = $resolve($this_asPromise.c1d());
      }
      return Unit_getInstance();
    };
  }
  function asPromise$lambda($this_asPromise) {
    return function (resolve, reject) {
      $this_asPromise.n1b(asPromise$lambda$lambda($this_asPromise, reject, resolve));
      return Unit_getInstance();
    };
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    this.g24_1 = owner;
    captureStack(this, AbortFlowException);
  }
  function ChildCancelledException() {
    CancellationException_init_$Init$('Child of the scoped flow was cancelled', this);
    captureStack(this, ChildCancelledException);
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.x1v_1 = collector;
    this.y1v_1 = collectContext;
    var tmp = this;
    tmp.z1v_1 = this.y1v_1.r3(0, SafeCollector$collectContextSize$lambda);
    this.a1w_1 = null;
  }
  SafeCollector.prototype.k1u = function (value, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.h3();
    tmp$ret$1 = tmp$ret$0;
    var currentContext = tmp$ret$1;
    ensureActive_0(currentContext);
    if (!(this.a1w_1 === currentContext)) {
      checkContext(this, currentContext);
      this.a1w_1 = currentContext;
    }
    return this.x1v_1.k1u(value, $cont);
  };
  SafeCollector.prototype.b1w = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.b1f = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.y1e_1 = this;
    this.z1e_1 = this;
    this.a1f_1 = false;
  }
  LinkedListNode.prototype.n1i = function (node) {
    var prev = this.z1e_1;
    node.y1e_1 = this;
    node.z1e_1 = prev;
    prev.y1e_1 = node;
    this.z1e_1 = node;
  };
  LinkedListNode.prototype.b1f = function () {
    return this.o1i();
  };
  LinkedListNode.prototype.o1i = function () {
    if (this.a1f_1)
      return false;
    var prev = this.z1e_1;
    var next = this.y1e_1;
    prev.y1e_1 = next;
    next.z1e_1 = prev;
    this.a1f_1 = true;
    return true;
  };
  LinkedListNode.prototype.v1i = function (node) {
    if (!(this.y1e_1 === this))
      return false;
    this.n1i(node);
    return true;
  };
  LinkedListNode.prototype.p1i = function () {
  };
  LinkedListNode.prototype.q1h = function () {
    var next = this.y1e_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    var tmp0_check = next.o1i();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      tmp$ret$0 = 'Should remove';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return next;
  };
  function PrepareOp(affected, desc, atomicOp) {
    OpDescriptor.call(this);
    this.m1o_1 = affected;
    this.n1o_1 = desc;
    this.o1o_1 = atomicOp;
  }
  PrepareOp.prototype.b2f = function () {
    return this.o1o_1;
  };
  PrepareOp.prototype.d1k = function (affected) {
    return null;
  };
  PrepareOp.prototype.m1p = function () {
  };
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  AbstractAtomicDesc.prototype.l1o = function (prepareOp) {
    this.x1o(prepareOp);
    return null;
  };
  AbstractAtomicDesc.prototype.a1p = function (op) {
    var affected = this.w1o();
    var failure = this.k1o(affected);
    if (!(failure == null))
      return failure;
    return this.l1o(new PrepareOp(affected, this, op));
  };
  AbstractAtomicDesc.prototype.b1p = function (op, failure) {
    return this.y1o();
  };
  AbstractAtomicDesc.prototype.k1o = function (affected) {
    return null;
  };
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.u1o_1 = queue;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.u1o_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.y1e_1;
    tmp.v1o_1 = tmp$ret$0;
  }
  RemoveFirstDesc.prototype.pg = function () {
    var tmp = this.w1o();
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  RemoveFirstDesc.prototype.w1o = function () {
    return this.v1o_1;
  };
  RemoveFirstDesc.prototype.x1o = function (prepareOp) {
  };
  RemoveFirstDesc.prototype.y1o = function () {
    this.u1o_1.q1h();
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.b1i_1 = null;
  }
  CommonThreadLocal.prototype.c1i = function () {
    var tmp = this.b1i_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.d1i = function (value) {
    this.b1i_1 = value;
  };
  //region block: post-declaration
  JobSupport.prototype.p1b = invokeOnCompletion$default;
  JobSupport.prototype.u1b = cancel$default;
  JobSupport.prototype.s3 = plus;
  JobSupport.prototype.l3 = get;
  JobSupport.prototype.r3 = fold;
  JobSupport.prototype.q3 = minusKey;
  AbstractCoroutine.prototype.p1b = invokeOnCompletion$default;
  AbstractCoroutine.prototype.u1b = cancel$default;
  AbstractCoroutine.prototype.s3 = plus;
  AbstractCoroutine.prototype.l3 = get;
  AbstractCoroutine.prototype.r3 = fold;
  AbstractCoroutine.prototype.q3 = minusKey;
  StandaloneCoroutine.prototype.p1b = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.u1b = cancel$default;
  StandaloneCoroutine.prototype.s3 = plus;
  StandaloneCoroutine.prototype.l3 = get;
  StandaloneCoroutine.prototype.r3 = fold;
  StandaloneCoroutine.prototype.q3 = minusKey;
  LazyStandaloneCoroutine.prototype.p1b = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.u1b = cancel$default;
  LazyStandaloneCoroutine.prototype.s3 = plus;
  LazyStandaloneCoroutine.prototype.l3 = get;
  LazyStandaloneCoroutine.prototype.r3 = fold;
  LazyStandaloneCoroutine.prototype.q3 = minusKey;
  DeferredCoroutine.prototype.p1b = invokeOnCompletion$default;
  DeferredCoroutine.prototype.u1b = cancel$default;
  DeferredCoroutine.prototype.s3 = plus;
  DeferredCoroutine.prototype.l3 = get;
  DeferredCoroutine.prototype.r3 = fold;
  DeferredCoroutine.prototype.q3 = minusKey;
  LazyDeferredCoroutine.prototype.p1b = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.u1b = cancel$default;
  LazyDeferredCoroutine.prototype.s3 = plus;
  LazyDeferredCoroutine.prototype.l3 = get;
  LazyDeferredCoroutine.prototype.r3 = fold;
  LazyDeferredCoroutine.prototype.q3 = minusKey;
  ScopeCoroutine.prototype.p1b = invokeOnCompletion$default;
  ScopeCoroutine.prototype.u1b = cancel$default;
  ScopeCoroutine.prototype.s3 = plus;
  ScopeCoroutine.prototype.l3 = get;
  ScopeCoroutine.prototype.r3 = fold;
  ScopeCoroutine.prototype.q3 = minusKey;
  DispatchedCoroutine.prototype.p1b = invokeOnCompletion$default;
  DispatchedCoroutine.prototype.u1b = cancel$default;
  DispatchedCoroutine.prototype.s3 = plus;
  DispatchedCoroutine.prototype.l3 = get;
  DispatchedCoroutine.prototype.r3 = fold;
  DispatchedCoroutine.prototype.q3 = minusKey;
  CancellableContinuationImpl.prototype.z1d = tryResume$default;
  CompletableDeferredImpl.prototype.p1b = invokeOnCompletion$default;
  CompletableDeferredImpl.prototype.u1b = cancel$default;
  CompletableDeferredImpl.prototype.s3 = plus;
  CompletableDeferredImpl.prototype.l3 = get;
  CompletableDeferredImpl.prototype.r3 = fold;
  CompletableDeferredImpl.prototype.q3 = minusKey;
  CoroutineDispatcher.prototype.l3 = get_0;
  CoroutineDispatcher.prototype.r3 = fold;
  CoroutineDispatcher.prototype.q3 = minusKey_0;
  CoroutineDispatcher.prototype.s3 = plus;
  CoroutineName.prototype.l3 = get;
  CoroutineName.prototype.r3 = fold;
  CoroutineName.prototype.q3 = minusKey;
  CoroutineName.prototype.s3 = plus;
  EventLoop.prototype.s3 = plus;
  EventLoop.prototype.l3 = get_0;
  EventLoop.prototype.r3 = fold;
  EventLoop.prototype.q3 = minusKey_0;
  AwaitContinuation.prototype.z1d = tryResume$default;
  JobImpl.prototype.p1b = invokeOnCompletion$default;
  JobImpl.prototype.u1b = cancel$default;
  JobImpl.prototype.s3 = plus;
  JobImpl.prototype.l3 = get;
  JobImpl.prototype.r3 = fold;
  JobImpl.prototype.q3 = minusKey;
  MainCoroutineDispatcher.prototype.s3 = plus;
  MainCoroutineDispatcher.prototype.l3 = get_0;
  MainCoroutineDispatcher.prototype.r3 = fold;
  MainCoroutineDispatcher.prototype.q3 = minusKey_0;
  NonCancellable.prototype.p1b = invokeOnCompletion$default;
  NonCancellable.prototype.u1b = cancel$default;
  NonCancellable.prototype.l3 = get;
  NonCancellable.prototype.r3 = fold;
  NonCancellable.prototype.q3 = minusKey;
  NonCancellable.prototype.s3 = plus;
  SupervisorJobImpl.prototype.p1b = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.u1b = cancel$default;
  SupervisorJobImpl.prototype.s3 = plus;
  SupervisorJobImpl.prototype.l3 = get;
  SupervisorJobImpl.prototype.r3 = fold;
  SupervisorJobImpl.prototype.q3 = minusKey;
  TimeoutCoroutine.prototype.p1b = invokeOnCompletion$default;
  TimeoutCoroutine.prototype.u1b = cancel$default;
  TimeoutCoroutine.prototype.s3 = plus;
  TimeoutCoroutine.prototype.l3 = get;
  TimeoutCoroutine.prototype.r3 = fold;
  TimeoutCoroutine.prototype.q3 = minusKey;
  Unconfined.prototype.s3 = plus;
  Unconfined.prototype.l3 = get_0;
  Unconfined.prototype.r3 = fold;
  Unconfined.prototype.q3 = minusKey_0;
  AbstractSendChannel.prototype.o1r = close$default;
  AbstractChannel.prototype.u1b = cancel$default_0;
  AbstractChannel.prototype.o1r = close$default;
  ArrayChannel.prototype.u1b = cancel$default_0;
  ArrayChannel.prototype.o1r = close$default;
  ChannelCoroutine.prototype.o1r = close$default;
  ChannelCoroutine.prototype.u1b = cancel$default;
  ChannelCoroutine.prototype.p1b = invokeOnCompletion$default;
  ChannelCoroutine.prototype.s3 = plus;
  ChannelCoroutine.prototype.l3 = get;
  ChannelCoroutine.prototype.r3 = fold;
  ChannelCoroutine.prototype.q3 = minusKey;
  ConflatedChannel.prototype.u1b = cancel$default_0;
  ConflatedChannel.prototype.o1r = close$default;
  LinkedListChannel.prototype.u1b = cancel$default_0;
  LinkedListChannel.prototype.o1r = close$default;
  ProducerCoroutine.prototype.o1r = close$default;
  ProducerCoroutine.prototype.u1b = cancel$default;
  ProducerCoroutine.prototype.p1b = invokeOnCompletion$default;
  ProducerCoroutine.prototype.s3 = plus;
  ProducerCoroutine.prototype.l3 = get;
  ProducerCoroutine.prototype.r3 = fold;
  ProducerCoroutine.prototype.q3 = minusKey;
  RendezvousChannel.prototype.u1b = cancel$default_0;
  RendezvousChannel.prototype.o1r = close$default;
  SharedFlowImpl.prototype.a1y = fuse$default;
  StateFlowImpl.prototype.a1y = fuse$default;
  SubscriptionCountStateFlow.prototype.a1y = fuse$default;
  ChannelFlow.prototype.a1y = fuse$default;
  ChannelFlowOperator.prototype.a1y = fuse$default;
  ChannelFlowOperatorImpl.prototype.a1y = fuse$default;
  ChannelFlowTransformLatest.prototype.a1y = fuse$default;
  ReadonlyStateFlow.prototype.a1y = fuse$default;
  UndispatchedCoroutine.prototype.p1b = invokeOnCompletion$default;
  UndispatchedCoroutine.prototype.u1b = cancel$default;
  UndispatchedCoroutine.prototype.s3 = plus;
  UndispatchedCoroutine.prototype.l3 = get;
  UndispatchedCoroutine.prototype.r3 = fold;
  UndispatchedCoroutine.prototype.q3 = minusKey;
  JsMainDispatcher.prototype.s3 = plus;
  JsMainDispatcher.prototype.l3 = get_0;
  JsMainDispatcher.prototype.r3 = fold;
  JsMainDispatcher.prototype.q3 = minusKey_0;
  UnconfinedEventLoop.prototype.s3 = plus;
  UnconfinedEventLoop.prototype.l3 = get_0;
  UnconfinedEventLoop.prototype.r3 = fold;
  UnconfinedEventLoop.prototype.q3 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.s3 = plus;
  SetTimeoutBasedDispatcher.prototype.l3 = get_0;
  SetTimeoutBasedDispatcher.prototype.r3 = fold;
  SetTimeoutBasedDispatcher.prototype.q3 = minusKey_0;
  NodeDispatcher.prototype.s3 = plus;
  NodeDispatcher.prototype.l3 = get_0;
  NodeDispatcher.prototype.r3 = fold;
  NodeDispatcher.prototype.q3 = minusKey_0;
  SetTimeoutDispatcher.prototype.s3 = plus;
  SetTimeoutDispatcher.prototype.l3 = get_0;
  SetTimeoutDispatcher.prototype.r3 = fold;
  SetTimeoutDispatcher.prototype.q3 = minusKey_0;
  WindowDispatcher.prototype.s3 = plus;
  WindowDispatcher.prototype.l3 = get_0;
  WindowDispatcher.prototype.r3 = fold;
  WindowDispatcher.prototype.q3 = minusKey_0;
  //endregion
  //region block: init
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = emitAll;
  _.$_$.c = emitAll_0;
  _.$_$.d = firstOrNull;
  _.$_$.e = first;
  _.$_$.f = await_0;
  _.$_$.g = delay;
  _.$_$.h = withContext;
  _.$_$.i = withTimeoutOrNull;
  _.$_$.j = toList$default;
  _.$_$.k = Channel$default;
  _.$_$.l = CompletableDeferred$default;
  _.$_$.m = cancel$default;
  _.$_$.n = invokeOnCompletion$default;
  _.$_$.o = Job$default;
  _.$_$.p = SupervisorJob$default;
  _.$_$.q = async$default;
  _.$_$.r = cancel$default_1;
  _.$_$.s = cancel$default_2;
  _.$_$.t = launch$default;
  _.$_$.u = promise$default;
  _.$_$.v = ChannelResult__exceptionOrNull_impl_16ei30;
  _.$_$.w = _ChannelResult___get_holder__impl__pm9gzw;
  _.$_$.x = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.y = Factory_getInstance;
  _.$_$.z = Companion_getInstance_2;
  _.$_$.a1 = Key_getInstance_0;
  _.$_$.b1 = Key_getInstance_1;
  _.$_$.c1 = Dispatchers_getInstance;
  _.$_$.d1 = GlobalScope_getInstance;
  _.$_$.e1 = Key_getInstance_3;
  _.$_$.f1 = NonCancellable_getInstance;
  _.$_$.g1 = Failed;
  _.$_$.h1 = ChannelResult;
  _.$_$.i1 = ClosedReceiveChannelException;
  _.$_$.j1 = ClosedSendChannelException;
  _.$_$.k1 = cancelConsumed;
  _.$_$.l1 = FlowCollector;
  _.$_$.m1 = asFlow;
  _.$_$.n1 = catch_0;
  _.$_$.o1 = flow;
  _.$_$.p1 = retryWhen;
  _.$_$.q1 = stateIn;
  _.$_$.r1 = LinkedListNode;
  _.$_$.s1 = recoverStackTrace;
  _.$_$.t1 = SelectBuilderImpl;
  _.$_$.u1 = CancellableContinuationImpl;
  _.$_$.v1 = CloseableCoroutineDispatcher;
  _.$_$.w1 = CompletableJob;
  _.$_$.x1 = CoroutineName;
  _.$_$.y1 = CoroutineScope_0;
  _.$_$.z1 = CoroutineScope;
  _.$_$.a2 = Job_0;
  _.$_$.b2 = Job;
  _.$_$.c2 = get_MODE_CANCELLABLE;
  _.$_$.d2 = SupervisorJob;
  _.$_$.e2 = cancel;
  _.$_$.f2 = cancel_2;
  _.$_$.g2 = cancel_0;
  _.$_$.h2 = cancel_1;
  _.$_$.i2 = ensureActive_0;
  _.$_$.j2 = ensureActive;
  _.$_$.k2 = get_isActive_0;
  _.$_$.l2 = get_isActive;
  _.$_$.m2 = get_job;
  _.$_$.n2 = launch;
  _.$_$.o2 = plus_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map

//region block: polyfills
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'verified-emission-reduction-registry-api-commons'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'verified-emission-reduction-registry-api-commons'.");
    }
    root['verified-emission-reduction-registry-api-commons'] = factory(typeof this['verified-emission-reduction-registry-api-commons'] === 'undefined' ? {} : this['verified-emission-reduction-registry-api-commons'], this['@js-joda/core']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  //endregion
  //region block: pre-declaration
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Collection, 'Collection', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCollection, 'AbstractCollection', classMeta, undefined, [Collection], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractMap$keys$1$iterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Set, 'Set', interfaceMeta, undefined, [Collection], undefined, undefined, []);
  setMetadataFor(AbstractSet, 'AbstractSet', classMeta, AbstractCollection, [AbstractCollection, Set], undefined, undefined, []);
  setMetadataFor(AbstractMap$keys$1, undefined, classMeta, AbstractSet, undefined, undefined, undefined, []);
  setMetadataFor(Map, 'Map', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractMap, 'AbstractMap', classMeta, undefined, [Map], undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyIterator, 'EmptyIterator', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(List, 'List', interfaceMeta, undefined, [Collection], undefined, undefined, []);
  setMetadataFor(EmptyList, 'EmptyList', objectMeta, undefined, [List], undefined, undefined, []);
  setMetadataFor(ArrayAsCollection, 'ArrayAsCollection', classMeta, undefined, [Collection], undefined, undefined, []);
  setMetadataFor(IndexedValue, 'IndexedValue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IndexingIterable, 'IndexingIterable', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IndexingIterator, 'IndexingIterator', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyMap, 'EmptyMap', objectMeta, undefined, [Map], undefined, undefined, []);
  setMetadataFor(IntIterator, 'IntIterator', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptySet, 'EmptySet', objectMeta, undefined, [Set], undefined, undefined, []);
  setMetadataFor(Continuation, 'Continuation', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  function plus(context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.t2(this, CoroutineContext$plus$lambda);
    }
    return tmp;
  }
  setMetadataFor(CoroutineContext, 'CoroutineContext', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function get(key) {
    var tmp;
    if (equals_0(this.x(), key)) {
      tmp = isInterface(this, Element) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function fold(initial, operation) {
    return operation(initial, this);
  }
  function minusKey(key) {
    return equals_0(this.x(), key) ? EmptyCoroutineContext_getInstance() : this;
  }
  setMetadataFor(Element, 'Element', interfaceMeta, undefined, [CoroutineContext], undefined, undefined, []);
  function releaseInterceptedContinuation(continuation) {
  }
  function get_0(key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.r2(this.x())) {
        var tmp_0 = key.q2(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  }
  function minusKey_0(key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return (key.r2(this.x()) ? !(key.q2(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
    }
    return Key_getInstance() === key ? EmptyCoroutineContext_getInstance() : this;
  }
  setMetadataFor(ContinuationInterceptor, 'ContinuationInterceptor', interfaceMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(EmptyCoroutineContext, 'EmptyCoroutineContext', objectMeta, undefined, [CoroutineContext], undefined, undefined, []);
  setMetadataFor(CombinedContext, 'CombinedContext', classMeta, undefined, [CoroutineContext], undefined, undefined, []);
  setMetadataFor(AbstractCoroutineContextKey, 'AbstractCoroutineContextKey', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCoroutineContextElement, 'AbstractCoroutineContextElement', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(Enum, 'Enum', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineSingletons, 'CoroutineSingletons', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IntProgression, 'IntProgression', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IntRange, 'IntRange', classMeta, IntProgression, undefined, undefined, undefined, []);
  setMetadataFor(IntProgressionIterator, 'IntProgressionIterator', classMeta, IntIterator, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelimitedRangesSequence$iterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelimitedRangesSequence, 'DelimitedRangesSequence', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LazyThreadSafetyMode, 'LazyThreadSafetyMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(UnsafeLazyImpl, 'UnsafeLazyImpl', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UNINITIALIZED_VALUE, 'UNINITIALIZED_VALUE', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Failure, 'Failure', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Error_0, 'Error', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(NotImplementedError, 'NotImplementedError', classMeta, Error_0, undefined, undefined, undefined, []);
  setMetadataFor(Pair, 'Pair', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharSequence, 'CharSequence', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Number_0, 'Number', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Unit, 'Unit', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IntCompanionObject, 'IntCompanionObject', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringCompanionObject, 'StringCompanionObject', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractMutableCollection, 'AbstractMutableCollection', classMeta, AbstractCollection, [AbstractCollection, Collection], undefined, undefined, []);
  setMetadataFor(IteratorImpl, 'IteratorImpl', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractMutableList, 'AbstractMutableList', classMeta, AbstractMutableCollection, [AbstractMutableCollection, List, Collection], undefined, undefined, []);
  setMetadataFor(AbstractMutableMap$keys$1$iterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Entry, 'Entry', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MutableEntry, 'MutableEntry', interfaceMeta, undefined, [Entry], undefined, undefined, []);
  setMetadataFor(SimpleEntry, 'SimpleEntry', classMeta, undefined, [MutableEntry], undefined, undefined, []);
  setMetadataFor(AbstractMutableSet, 'AbstractMutableSet', classMeta, AbstractMutableCollection, [AbstractMutableCollection, Set, Collection], undefined, undefined, []);
  setMetadataFor(AbstractEntrySet, 'AbstractEntrySet', classMeta, AbstractMutableSet, undefined, undefined, undefined, []);
  setMetadataFor(AbstractMutableMap$keys$1, undefined, classMeta, AbstractMutableSet, undefined, undefined, undefined, []);
  setMetadataFor(AbstractMutableMap, 'AbstractMutableMap', classMeta, AbstractMap, [AbstractMap, Map], undefined, undefined, []);
  setMetadataFor(ArrayList, 'ArrayList', classMeta, AbstractMutableList, [AbstractMutableList, List, Collection], undefined, undefined, []);
  setMetadataFor(HashCode, 'HashCode', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EntrySet, 'EntrySet', classMeta, AbstractEntrySet, undefined, undefined, undefined, []);
  setMetadataFor(HashMap, 'HashMap', classMeta, AbstractMutableMap, [AbstractMutableMap, Map], undefined, undefined, []);
  setMetadataFor(HashSet, 'HashSet', classMeta, AbstractMutableSet, [AbstractMutableSet, Set, Collection], undefined, undefined, []);
  setMetadataFor(InternalHashCodeMap$iterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  function createJsMap() {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  }
  setMetadataFor(InternalMap, 'InternalMap', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InternalHashCodeMap, 'InternalHashCodeMap', classMeta, undefined, [InternalMap], undefined, undefined, []);
  setMetadataFor(EntryIterator, 'EntryIterator', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChainEntry, 'ChainEntry', classMeta, SimpleEntry, undefined, undefined, undefined, []);
  setMetadataFor(EntrySet_0, 'EntrySet', classMeta, AbstractEntrySet, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashMap, 'LinkedHashMap', classMeta, HashMap, [HashMap, Map], undefined, undefined, []);
  setMetadataFor(Exception, 'Exception', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(RuntimeException, 'RuntimeException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(IllegalStateException, 'IllegalStateException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(CancellationException, 'CancellationException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(KClass, 'KClass', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KClassImpl, 'KClassImpl', classMeta, undefined, [KClass], undefined, undefined, []);
  setMetadataFor(PrimitiveKClassImpl, 'PrimitiveKClassImpl', classMeta, KClassImpl, undefined, undefined, undefined, []);
  setMetadataFor(NothingKClassImpl, 'NothingKClassImpl', objectMeta, KClassImpl, undefined, undefined, undefined, []);
  setMetadataFor(ErrorKClass, 'ErrorKClass', classMeta, undefined, [KClass], undefined, undefined, []);
  setMetadataFor(SimpleKClassImpl, 'SimpleKClassImpl', classMeta, KClassImpl, undefined, undefined, undefined, []);
  setMetadataFor(KProperty1, 'KProperty1', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveClasses, 'PrimitiveClasses', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringBuilder, 'StringBuilder', classMeta, undefined, [CharSequence], undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Char, 'Char', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BitMask, 'BitMask', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(arrayIterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_7, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Long, 'Long', classMeta, Number_0, undefined, undefined, undefined, []);
  setMetadataFor(InterfaceIdService, 'InterfaceIdService', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineImpl, 'CoroutineImpl', classMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', objectMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_0, undefined, classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(IllegalArgumentException, 'IllegalArgumentException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(NoSuchElementException, 'NoSuchElementException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(UnsupportedOperationException, 'UnsupportedOperationException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(IndexOutOfBoundsException, 'IndexOutOfBoundsException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(ArithmeticException, 'ArithmeticException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(NullPointerException, 'NullPointerException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(ClassCastException, 'ClassCastException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(UninitializedPropertyAccessException, 'UninitializedPropertyAccessException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(atomicfu$TraceBase, 'TraceBase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(None, 'None', objectMeta, atomicfu$TraceBase, undefined, undefined, undefined, []);
  setMetadataFor(AtomicRef, 'AtomicRef', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicBoolean, 'AtomicBoolean', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta, undefined, undefined, undefined, undefined, []);
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.vb(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, undefined, [Element], undefined, undefined, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, undefined, [Job, ParentJob], undefined, undefined, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], undefined, undefined, [0]);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], undefined, undefined, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask, undefined, undefined, undefined, []);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, Continuation], undefined, undefined, []);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key_0, 'Key', objectMeta, AbstractCoroutineContextKey, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor], undefined, undefined, []);
  setMetadataFor(Key_1, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum, undefined, undefined, undefined, []);
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
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle], undefined, undefined, []);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(Key_3, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation], undefined, undefined, []);
  setMetadataFor(Symbol, 'Symbol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, undefined, undefined, undefined, []);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue, undefined, undefined, undefined, []);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer, undefined, undefined, undefined, []);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  function get_isNullable() {
    return false;
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(elementDescriptors$1$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_2, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(SerialKind, 'SerialKind', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(SEALED_0, 'SEALED', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind, undefined, undefined, undefined, []);
  function decodeSequentially() {
    return false;
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule, undefined, undefined, undefined, []);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  function contextual(kClass, serializer) {
    return this.bn(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, undefined, undefined, 0, undefined, []);
  setMetadataFor(Json, 'Json', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Default, 'Default', objectMeta, Json, undefined, undefined, undefined, []);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json, undefined, undefined, undefined, []);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, undefined, [SerializersModuleCollector], undefined, undefined, []);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_8, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KotlinxSerializer, 'KotlinxSerializer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializerInitializer, 'SerializerInitializer', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(System, 'System', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_9, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Instant_0, 'Instant', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Message, 'Message', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Command, 'Command', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(Event, 'Event', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(Query, 'Query', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(F2ErrorDTO, 'F2ErrorDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_10, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(F2Error, 'F2Error', classMeta, undefined, [F2ErrorDTO], undefined, {0: $serializer_getInstance}, []);
  setMetadataFor(Companion_11, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(F2Exception, 'F2Exception', classMeta, RuntimeException, undefined, undefined, undefined, []);
  function and(match) {
    var tmp = listOf([this, match]);
    return AndMatch_init_$Create$(tmp, false, 2, null);
  }
  function or(match) {
    var tmp = listOf([this, match]);
    return OrMatch_init_$Create$(tmp, false, 2, null);
  }
  setMetadataFor(Match, 'Match', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AndMatch, 'AndMatch', classMeta, undefined, [Match], undefined, undefined, []);
  setMetadataFor(OrMatch, 'OrMatch', classMeta, undefined, [Match], undefined, undefined, []);
  setMetadataFor(SortDTO, 'SortDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PageDTO, 'PageDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_12, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_0, '$serializer', classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Page, 'Page', classMeta, undefined, [PageDTO], undefined, {0: Companion_getInstance_12}, []);
  setMetadataFor(PageQueryDTO, 'PageQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(PageQueryResultDTO, 'PageQueryResultDTO', interfaceMeta, undefined, [Event, PageDTO], undefined, undefined, []);
  setMetadataFor(Companion_13, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_1, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(PageQuery, 'PageQuery', classMeta, undefined, [PageQueryDTO], undefined, {0: $serializer_getInstance_0}, []);
  setMetadataFor(Companion_14, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_2, '$serializer', classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(PageQueryResult, 'PageQueryResult', classMeta, undefined, [PageQueryResultDTO], undefined, {0: Companion_getInstance_14}, []);
  setMetadataFor(Companion_15, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Pagination, 'Pagination', interfaceMeta, undefined, undefined, undefined, {0: Companion_getInstance_15}, []);
  setMetadataFor(OffsetPaginationDTO, 'OffsetPaginationDTO', interfaceMeta, undefined, [Pagination], undefined, undefined, []);
  setMetadataFor(PagePaginationDTO, 'PagePaginationDTO', interfaceMeta, undefined, [Pagination], undefined, undefined, []);
  setMetadataFor(Companion_16, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_3, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(OffsetPagination, 'OffsetPagination', classMeta, undefined, [OffsetPaginationDTO], undefined, {0: $serializer_getInstance_1}, []);
  setMetadataFor(Companion_17, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_4, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(PagePagination, 'PagePagination', classMeta, undefined, [PagePaginationDTO], undefined, {0: $serializer_getInstance_2}, []);
  setMetadataFor(AuthedUserDTO, 'AuthedUserDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Role, 'Role', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(AddressDTO, 'AddressDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientJs$doCall$slambda, 'ClientJs$doCall$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ClientJs, 'ClientJs', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AuthRealm, 'AuthRealm', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AuthRealmPassword, 'AuthRealmPassword', classMeta, AuthRealm, undefined, undefined, undefined, []);
  setMetadataFor(AuthRealmClientSecret, 'AuthRealmClientSecret', classMeta, AuthRealm, undefined, undefined, undefined, []);
  setMetadataFor(F2Function, 'F2Function', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(F2Supplier, 'F2Supplier', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(F2Consumer, 'F2Consumer', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KeycloakF2Message, 'KeycloakF2Message', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KeycloakF2Query, 'KeycloakF2Query', interfaceMeta, undefined, [Query, KeycloakF2Message], undefined, undefined, []);
  setMetadataFor(KeycloakF2Command, 'KeycloakF2Command', interfaceMeta, undefined, [Command, KeycloakF2Message], undefined, undefined, []);
  setMetadataFor(KeycloakF2Result, 'KeycloakF2Result', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(Role_0, 'RoleModel', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoleCompositesModel, 'RoleCompositesModel', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RolesCompositeModel, 'RolesCompositesModel', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoleCompositeGetQuery, 'RoleCompositeGetQuery', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(RoleCompositeGetResult, 'RoleCompositeGetResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoleCompositeObjType, 'RoleCompositeObjType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(RoleGetByIdQuery, 'RoleGetByIdQuery', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoleGetByIdResult, 'RoleGetByIdResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoleGetByNameQuery, 'RoleGetByNameQuery', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoleGetByNameResult, 'RoleGetByNameResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RolePageQuery, 'RolePageQuery', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RolePageResult, 'RolePageResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RoleAddCompositesCommand, 'RoleAddCompositesCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(RoleAddedCompositesEvent, 'RoleAddedCompositesEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(RoleCreateCommand, 'RoleCreateCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(RoleCreatedEvent, 'RoleCreatedEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(RoleUpdateCommand, 'RoleUpdateCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(RoleUpdatedEvent, 'RoleUpdatedEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(GroupCreateCommand, 'GroupCreateCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(GroupCreatedEvent, 'GroupCreatedEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(GroupDisableCommand, 'GroupDisableCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(GroupDisabledEvent, 'GroupDisabledEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(GroupSetAttributesCommand, 'GroupSetAttributesCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(GroupSetAttributesEvent, 'GroupSetAttributesEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(GroupUpdateCommand, 'GroupUpdateCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(GroupUpdatedEvent, 'GroupUpdatedEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(UserCreateCommand, 'UserCreateCommand', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserCreatedEvent, 'UserCreatedCommand', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserDeleteCommand, 'UserDeleteCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserDeletedEvent, 'UserDeletedEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserDisableCommand, 'UserDisableCommand', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserDisabledEvent, 'UserDisabledEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserEmailSendActionsCommand, 'UserEmailSendActionsCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserEmailSentActionsEvent, 'UserEmailSentActionsEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(UserJoinGroupCommand, 'UserJoinGroupCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserJoinedGroupEvent, 'UserJoinedGroupEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(UserRolesGrantCommand, 'UserRolesGrantCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserRolesGrantedEvent, 'UserRolesGrantedEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserRolesRevokeCommand, 'UserRolesRevokeCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserRolesRevokedEvent, 'UserRolesRevokedEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserRolesSetCommand, 'UserRolesSetCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserRolesSetEvent, 'UserRolesSetEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserSetAttributesCommand, 'UserSetAttributesCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserSetAttributesEvent, 'UserSetAttributesEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserUpdateEmailCommand, 'UserUpdateEmailCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserUpdatedEmailEvent, 'UserUpdatedEmailEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(UserUpdateCommand, 'UserUpdateCommand', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserUpdatedEvent, 'UserUpdatedEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserUpdatePasswordCommand, 'UserUpdatePasswordCommand', classMeta, undefined, [KeycloakF2Command], undefined, undefined, []);
  setMetadataFor(UserUpdatedPasswordEvent, 'UserUpdatedPasswordEvent', classMeta, undefined, [KeycloakF2Result], undefined, undefined, []);
  setMetadataFor(UserGetByEmailQuery, 'UserGetByEmailQuery', classMeta, undefined, [KeycloakF2Query], undefined, undefined, []);
  setMetadataFor(UserGetByEmailQueryResult, 'UserGetByEmailResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserGetByUsernameQuery, 'UserGetByUsernameQuery', classMeta, undefined, [KeycloakF2Query], undefined, undefined, []);
  setMetadataFor(UserGetByUsernameResult, 'UserGetByUsernameResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserGetQuery, 'UserGetQuery', classMeta, undefined, [KeycloakF2Query], undefined, undefined, []);
  setMetadataFor(UserGetResult, 'UserGetResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserGetGroupsQuery, 'UserGetGroupsQuery', classMeta, undefined, [KeycloakF2Query], undefined, undefined, []);
  setMetadataFor(UserGetGroupsResult, 'UserGetGroupsResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserGetRolesQuery, 'UserGetRolesQuery', classMeta, undefined, [KeycloakF2Query], undefined, undefined, []);
  setMetadataFor(UserGetRolesResult, 'UserGetRolesResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserPageQuery, 'UserPageQuery', classMeta, undefined, [KeycloakF2Query], undefined, undefined, []);
  setMetadataFor(UserPageResult, 'UserPageResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserGroup, 'UserGroup', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UserModel, 'UserModel', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientModel, 'ClientModel', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientGetByClientIdentifierQuery, 'ClientGetByClientIdentifierQuery', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(ClientGetByClientIdentifierResult, 'ClientGetByClientIdentifierResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(ClientGetQuery, 'ClientGetQuery', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(ClientGetResult, 'ClientGetResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(ClientGetSecretQuery, 'ClientGetSecretQuery', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientGetSecretResult, 'ClientGetSecretResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientGetServiceAccountQuery, 'ClientGetServiceAccountQuery', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(ClientGetServiceAccountResult, 'ClientGetServiceAccountResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(ClientPageQuery, 'ClientPageQuery', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(ClientPageResult, 'ClientPageResult', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(ClientCreateCommand, 'ClientCreateCommand', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(ClientCreatedEvent, 'ClientCreatedEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(ClientDeleteCommand, 'ClientDeleteCommand', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientDeletedEvent, 'ClientDeletedEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientGenerateSecretCommand, 'ClientGenerateSecretCommand', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientGeneratedSecretEvent, 'ClientGeneratedSecretEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientRealmManagementRolesGrantCommand, 'ClientRealmManagementRolesGrantCommand', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(ClientRealmManagementRolesGrantedEvent, 'ClientRealmManagementRolesGrantedEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(ClientServiceAccountRolesGrantCommand, 'ClientServiceAccountRolesGrantCommand', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(ClientServiceAccountRolesGrantedEvent, 'ClientServiceAccountRolesGrantedEvent', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(ClientUpdateUrisCommand, 'ClientUpdateUrisCommand', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientUpdatedUrisEvent, 'ClientUpdatedUrisEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OrganizationCreateCommandDTO, 'OrganizationCreateCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(OrganizationCreatedEventDTO, 'OrganizationCreatedEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationDeleteCommandDTO, 'OrganizationDeleteCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(OrganizationDeletedEventDTO, 'OrganizationDeletedEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationDisableCommandDTO, 'OrganizationDisableCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(OrganizationDisabledEventDTO, 'OrganizationDisabledEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationUpdateCommandDTO, 'OrganizationUpdateCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(OrganizationUpdatedResultDTO, 'OrganizationUpdatedResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationUploadLogoCommandDTO, 'OrganizationUploadLogoCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(OrganizationUploadedLogoEventDTO, 'OrganizationUploadedLogoEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationGetFromInseeQueryDTO, 'OrganizationGetFromInseeQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(OrganizationGetFromInseeResultDTO, 'OrganizationGetFromInseeResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationGetQueryDTO, 'OrganizationGetQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(OrganizationGetResultDTO, 'OrganizationGetResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationPageQueryDTO, 'OrganizationPageQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(OrganizationPageResultDTO, 'OrganizationPageResultDTO', interfaceMeta, undefined, [PageDTO], undefined, undefined, []);
  setMetadataFor(OrganizationRefListQueryDTO, 'OrganizationRefListQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(OrganizationRefListResultDTO, 'OrganizationRefListResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OrganizationDTO, 'OrganizationDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OrganizationRefDTO, 'OrganizationRefDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OrganizationPolicies, 'OrganizationPolicies', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UserCreateCommandDTO, 'UserCreateCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserCreatedEventDTO, 'UserCreatedEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserDeleteCommandDTO, 'UserDeleteCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserDeletedEventDTO, 'UserDeletedEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserDisableCommandDTO, 'UserDisableCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserDisabledEventDTO, 'UserDisabledEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserResetPasswordCommandDTO, 'UserResetPasswordCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserResetPasswordEventDTO, 'UserResetPasswordEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserUpdateEmailCommandDTO, 'UserUpdateEmailCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserUpdatedEmailEventDTO, 'UserUpdatedEmailEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserUpdateCommandDTO, 'UserUpdateCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserUpdatedEventDTO, 'UserUpdatedEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserUpdatePasswordCommandDTO, 'UserUpdatePasswordCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserUpdatedPasswordEventDTO, 'UserUpdatedPasswordEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserUploadLogoCommandDTO, 'UserUploadLogoCommandDTO', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(UserUploadedLogoEventDTO, 'UserUploadedLogoEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserExistsByEmailQueryDTO, 'UserExistsByEmailQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(UserExistsByEmailResultDTO, 'UserExistsByEmailResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserGetByEmailQueryDTO, 'UserGetByEmailQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(UserGetByEmailResultDTO, 'UserGetByEmailResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserGetQueryDTO, 'UserGetQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(UserGetResultDTO, 'UserGetResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserPageQueryDTO, 'UserPageQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(UserPageResultDTO, 'UserPageResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(UserDTO, 'UserDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UserPolicies, 'UserPolicies', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmChaincodeQueries, 'SsmChaincodeQueries', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmQueryDTO, 'SsmQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(SsmItemResultDTO, 'SsmItemResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(SsmItemsResultDTO, 'SsmItemsResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(BlockDTO, 'BlockDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Block, 'Block', classMeta, undefined, [BlockDTO], undefined, undefined, []);
  setMetadataFor(EnvelopeType, 'EnvelopeType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(IdentitiesInfoDTO, 'IdentitiesInfoDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IdentitiesInfo, 'IdentitiesInfo', classMeta, undefined, [IdentitiesInfoDTO], undefined, undefined, []);
  setMetadataFor(TransactionDTO, 'TransactionDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Transaction, 'Transaction', classMeta, undefined, [TransactionDTO], undefined, undefined, []);
  setMetadataFor(SsmChaincodePropertiesDTO, 'SsmChaincodePropertiesDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChaincodeSsmConfig, 'SsmChaincodeConfig', classMeta, undefined, [SsmChaincodePropertiesDTO], undefined, undefined, []);
  setMetadataFor(AgentDTO, 'AgentDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_18, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Agent, 'Agent', classMeta, undefined, [AgentDTO], undefined, undefined, []);
  setMetadataFor(ChaincodeDTO, 'ChaincodeDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Chaincode, 'Chaincode', classMeta, undefined, [ChaincodeDTO], undefined, undefined, []);
  setMetadataFor(SsmDTO, 'SsmDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Ssm, 'Ssm', classMeta, undefined, [SsmDTO], undefined, undefined, []);
  setMetadataFor(WithPrivate, 'WithPrivate', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmContextDTO, 'SsmContextDTO', interfaceMeta, undefined, [WithPrivate], undefined, undefined, []);
  setMetadataFor(SsmContext, 'SsmContext', classMeta, undefined, [SsmContextDTO], undefined, undefined, []);
  setMetadataFor(SsmGrantDTO, 'SsmGrantDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmGrant, 'SsmGrant', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CreditDTO, 'CreditDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Credit, 'Credit', classMeta, undefined, [CreditDTO], undefined, undefined, []);
  setMetadataFor(SsmSessionDTO, 'SsmSessionDTO', interfaceMeta, undefined, [WithPrivate], undefined, undefined, []);
  setMetadataFor(SsmSession, 'SsmSession', classMeta, undefined, [SsmSessionDTO], undefined, undefined, []);
  setMetadataFor(SsmSessionStateDTO, 'SsmSessionStateDTO', interfaceMeta, undefined, [SsmSessionDTO, WithPrivate], undefined, undefined, []);
  setMetadataFor(SsmSessionState, 'SsmSessionState', classMeta, undefined, [SsmSessionStateDTO], undefined, undefined, []);
  setMetadataFor(SsmSessionStateLogDTO, 'SsmSessionStateLogDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmSessionStateLog, 'SsmSessionStateLog', classMeta, undefined, [SsmSessionStateLogDTO], undefined, undefined, []);
  setMetadataFor(SsmTransitionDTO, 'SsmTransitionDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmTransition, 'SsmTransition', classMeta, undefined, [SsmTransitionDTO], undefined, undefined, []);
  setMetadataFor(ChaincodeUriDTO, 'ChaincodeUriDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_19, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChaincodeUri, 'ChaincodeUri', classMeta, undefined, [ChaincodeUriDTO], undefined, undefined, []);
  setMetadataFor(SsmUriDTO, 'SsmUriDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_20, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmUri, 'SsmUri', classMeta, undefined, [SsmUriDTO], undefined, undefined, []);
  setMetadataFor(SsmGetAdminQuery, 'SsmGetAdminQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetAdminResult, 'SsmGetAdminResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetQuery, 'SsmGetQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetResult, 'SsmGetResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetSessionLogsQuery, 'SsmGetSessionLogsQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetSessionLogsQueryResult, 'SsmGetSessionLogsQueryResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmGetSessionQuery, 'SsmGetSessionQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetSessionResult, 'SsmGetSessionResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetTransactionQuery, 'SsmGetTransactionQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetTransactionQueryResult, 'SsmGetTransactionQueryResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetUserQuery, 'SsmGetUserQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetUserResult, 'SsmGetUserResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListAdminQuery, 'SsmListAdminQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListAdminResult, 'SsmListAdminResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListSessionQuery, 'SsmListSessionQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListSessionResult, 'SsmListSessionResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListSsmQuery, 'SsmListSsmQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListSsmResult, 'SsmListSsmResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListUserQuery, 'SsmListUserQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListUserResult, 'SsmListUserResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  setMetadataFor(Automate, 'Automate', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_21, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_5, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2Automate, 'S2Automate', classMeta, undefined, [Automate], undefined, {0: $serializer_getInstance_3}, []);
  setMetadataFor(S2InitCommand, 'S2InitCommand', interfaceMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(WithId, 'WithId', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2Command, 'S2Command', interfaceMeta, undefined, [Command, WithId], undefined, undefined, []);
  setMetadataFor(S2Error, 'S2Error', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2ErrorBase, 'S2ErrorBase', classMeta, undefined, [S2Error], undefined, undefined, []);
  setMetadataFor(S2Event, 'S2Event', interfaceMeta, undefined, [Event, WithId], undefined, undefined, []);
  setMetadataFor(S2EventSuccess, 'S2EventSuccess', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(S2EventError, 'S2EventError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(S2Role, 'S2Role', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2State, 'S2State', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2SubMachine, 'S2SubMachine', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2InitTransition, 'S2InitTransition', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_22, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_6, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2Transition, 'S2Transition', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_4}, []);
  setMetadataFor(Companion_23, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_7, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2TransitionValue, 'S2TransitionValue', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_5}, []);
  setMetadataFor(Companion_24, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_8, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2RoleValue, 'S2RoleValue', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_6}, []);
  setMetadataFor(Companion_25, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_9, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(S2StateValue, 'S2StateValue', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_7}, []);
  setMetadataFor(S2AutomateBuilder, 'S2AutomateBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(S2SourcingAutomateBuilder, 'S2SourcingAutomateBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WithS2Id, 'WithS2Id', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WithS2State, 'WithS2State', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WithS2IdAndStatus, 'WithS2IdAndStatus', interfaceMeta, undefined, [WithS2Id, WithS2State], undefined, undefined, []);
  setMetadataFor(Decide, 'Decide', interfaceMeta, undefined, [F2Function], undefined, undefined, []);
  setMetadataFor(Roles, 'Roles', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ExceptionCodes, 'ExceptionCodes', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GeoLocationDTO, 'GeoLocationDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RedirectableRoutes, 'RedirectableRoutes', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function toList(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.length;
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this__u8e3s4[0]);
      default:
        return toMutableList(_this__u8e3s4);
    }
  }
  function withIndex(_this__u8e3s4) {
    return new IndexingIterable(withIndex$lambda(_this__u8e3s4));
  }
  function get_indices(_this__u8e3s4) {
    return new IntRange(0, get_lastIndex(_this__u8e3s4));
  }
  function indexOf(_this__u8e3s4, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__u8e3s4[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this__u8e3s4[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function toMutableList(_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asCollection(_this__u8e3s4));
  }
  function get_lastIndex(_this__u8e3s4) {
    return _this__u8e3s4.length - 1 | 0;
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform);
  }
  function contains(_this__u8e3s4, element) {
    return indexOf(_this__u8e3s4, element) >= 0;
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.a(prefix);
    var count = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.a(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.a(truncated);
    }
    buffer.a(postfix);
    return buffer;
  }
  function zip(_this__u8e3s4, other) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.zip' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = _this__u8e3s4.length;
    var tmp1_minOf = other.length;
    tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
    var size = tmp$ret$0;
    var list = ArrayList_init_$Create$_0(size);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.zip.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4[i];
        var tmp3__anonymous__ufb84q = other[i];
        tmp$ret$1 = to(tmp2__anonymous__z9zvc9, tmp3__anonymous__ufb84q);
        list.e(tmp$ret$1);
      }
       while (inductionVariable < size);
    tmp$ret$2 = list;
    return tmp$ret$2;
  }
  function withIndex$lambda($this_withIndex) {
    return function () {
      return arrayIterator($this_withIndex);
    };
  }
  function plus_0(_this__u8e3s4, element) {
    var result = ArrayList_init_$Create$_0(_this__u8e3s4.f() + 1 | 0);
    result.g(_this__u8e3s4);
    result.e(element);
    return result;
  }
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform);
  }
  function toHashSet(_this__u8e3s4) {
    return toCollection(_this__u8e3s4, HashSet_init_$Create$_0(mapCapacity(collectionSizeOrDefault(_this__u8e3s4, 12))));
  }
  function toBooleanArray(_this__u8e3s4) {
    var result = booleanArray(_this__u8e3s4.f());
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function first(_this__u8e3s4) {
    if (_this__u8e3s4.k())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this__u8e3s4.l(0);
  }
  function toCollection(_this__u8e3s4, destination) {
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      destination.e(item);
    }
    return destination;
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.a(prefix);
    var count = 0;
    var tmp0_iterator = _this__u8e3s4.h();
    $l$loop: while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.a(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.a(truncated);
    }
    buffer.a(postfix);
    return buffer;
  }
  function single(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    if (isInterface(tmp0_subject, List))
      return single_0(_this__u8e3s4);
    else {
      var iterator = _this__u8e3s4.h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$_0('Collection is empty.');
      var single = iterator.j();
      if (iterator.i())
        throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
      return single;
    }
  }
  function single_0(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.f();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this__u8e3s4.l(0);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function until(_this__u8e3s4, to) {
    if (to <= IntCompanionObject_getInstance().MIN_VALUE)
      return Companion_getInstance_2().m_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
  }
  function downTo(_this__u8e3s4, to) {
    return Companion_getInstance_3().n(_this__u8e3s4, to, -1);
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function coerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function coerceIn(_this__u8e3s4, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this__u8e3s4 < minimumValue)
      return minimumValue;
    if (_this__u8e3s4 > maximumValue)
      return maximumValue;
    return _this__u8e3s4;
  }
  function asIterable(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function _no_name_provided__qut3iv($this_asIterable) {
    this.o_1 = $this_asIterable;
  }
  _no_name_provided__qut3iv.prototype.h = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.sequences.asIterable.<anonymous>' call
    tmp$ret$0 = this.o_1.h();
    return tmp$ret$0;
  };
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_1(it);
    };
  }
  function AbstractCollection() {
  }
  AbstractCollection.prototype.p = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this.h();
      while (tmp0_iterator.i()) {
        var element_0 = tmp0_iterator.j();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
        tmp$ret$1 = equals_0(element_0, element);
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.q = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.p(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.k = function () {
    return this.f() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, AbstractCollection$toString$lambda(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl(this);
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.r = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.s = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.t = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  Companion.prototype.u = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.h();
    while (tmp0_iterator.i()) {
      var e = tmp0_iterator.j();
      var tmp = imul(31, hashCode_0);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion.prototype.v = function (c, other) {
    if (!(c.f() === other.f()))
      return false;
    var otherIterator = other.h();
    var tmp0_iterator = c.h();
    while (tmp0_iterator.i()) {
      var elem = tmp0_iterator.j();
      var elemOther = otherIterator.j();
      if (!equals_0(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AbstractMap$keys$1$iterator$1($entryIterator) {
    this.w_1 = $entryIterator;
  }
  AbstractMap$keys$1$iterator$1.prototype.i = function () {
    return this.w_1.i();
  };
  AbstractMap$keys$1$iterator$1.prototype.j = function () {
    return this.w_1.j().x();
  };
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_1(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = $this.y();
      var tmp0_iterator = tmp0_firstOrNull.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        var tmp$ret$0;
        // Inline function 'kotlin.collections.AbstractMap.implFindEntry.<anonymous>' call
        tmp$ret$0 = equals_0(element.x(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.z = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryHashCode.<anonymous>' call
    var tmp2_safe_receiver = e.x();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var tmp0_safe_receiver = e.a1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion_0.prototype.b1 = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryToString.<anonymous>' call
    tmp$ret$0 = toString_1(e.x()) + '=' + toString_1(e.a1());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion_0.prototype.c1 = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    return equals_0(e.x(), other.x()) ? equals_0(e.a1(), other.a1()) : false;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AbstractMap$keys$1(this$0) {
    this.d1_1 = this$0;
    AbstractSet.call(this);
  }
  AbstractMap$keys$1.prototype.e1 = function (element) {
    return this.d1_1.h1(element);
  };
  AbstractMap$keys$1.prototype.p = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMap$keys$1.prototype.h = function () {
    var entryIterator = this.d1_1.y().h();
    return new AbstractMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMap$keys$1.prototype.f = function () {
    return this.d1_1.f();
  };
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.i1(it);
    };
  }
  function AbstractMap() {
    Companion_getInstance_0();
    this.f1_1 = null;
    this.g1_1 = null;
  }
  AbstractMap.prototype.h1 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.j1 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    var key = entry.x();
    var value = entry.a1();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    tmp$ret$0 = (isInterface(this, Map) ? this : THROW_CCE()).k1(key);
    var ourValue = tmp$ret$0;
    if (!equals_0(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$1 = (isInterface(this, Map) ? this : THROW_CCE()).h1(key);
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map) : false))
      return false;
    if (!(this.f() === other.f()))
      return false;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp0_all = other.y();
      var tmp;
      if (isInterface(tmp0_all, Collection)) {
        tmp = tmp0_all.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_all.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractMap.equals.<anonymous>' call
        tmp$ret$1 = this.j1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.k1 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this.y());
  };
  AbstractMap.prototype.k = function () {
    return this.f() === 0;
  };
  AbstractMap.prototype.f = function () {
    return this.y().f();
  };
  AbstractMap.prototype.l1 = function () {
    if (this.f1_1 == null) {
      var tmp = this;
      tmp.f1_1 = new AbstractMap$keys$1(this);
    }
    return ensureNotNull(this.f1_1);
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this.y();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, AbstractMap$toString$lambda(this), 24, null);
  };
  AbstractMap.prototype.i1 = function (entry) {
    return toString(this, entry.x()) + '=' + toString(this, entry.a1());
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.m1 = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion_1.prototype.n1 = function (c, other) {
    if (!(c.f() === other.f()))
      return false;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsAll' call
    tmp$ret$0 = c.q(other);
    return tmp$ret$0;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AbstractSet() {
    Companion_getInstance_1();
    AbstractCollection.call(this);
  }
  AbstractSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_getInstance_1().n1(this, other);
  };
  AbstractSet.prototype.hashCode = function () {
    return Companion_getInstance_1().m1(this);
  };
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return _this__u8e3s4.f() - 1 | 0;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.i = function () {
    return false;
  };
  EmptyIterator.prototype.j = function () {
    throw NoSuchElementException_init_$Create$();
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.o1_1 = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.k();
    } else {
      tmp = false;
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype.f = function () {
    return 0;
  };
  EmptyList.prototype.k = function () {
    return true;
  };
  EmptyList.prototype.p1 = function (elements) {
    return elements.k();
  };
  EmptyList.prototype.q = function (elements) {
    return this.p1(elements);
  };
  EmptyList.prototype.l = function (index) {
    throw IndexOutOfBoundsException_init_$Create$("Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.h = function () {
    return EmptyIterator_getInstance();
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function asCollection(_this__u8e3s4) {
    return new ArrayAsCollection(_this__u8e3s4, false);
  }
  function ArrayAsCollection(values, isVarargs) {
    this.q1_1 = values;
    this.r1_1 = isVarargs;
  }
  ArrayAsCollection.prototype.f = function () {
    return this.q1_1.length;
  };
  ArrayAsCollection.prototype.k = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp0_isEmpty = this.q1_1;
    tmp$ret$0 = tmp0_isEmpty.length === 0;
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.s1 = function (element) {
    return contains(this.q1_1, element);
  };
  ArrayAsCollection.prototype.t1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.ArrayAsCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.s1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.q = function (elements) {
    return this.t1(elements);
  };
  ArrayAsCollection.prototype.h = function () {
    return arrayIterator(this.q1_1);
  };
  function IndexedValue(index, value) {
    this.u1_1 = index;
    this.v1_1 = value;
  }
  IndexedValue.prototype.toString = function () {
    return 'IndexedValue(index=' + this.u1_1 + ', value=' + this.v1_1 + ')';
  };
  IndexedValue.prototype.hashCode = function () {
    var result = this.u1_1;
    result = imul(result, 31) + (this.v1_1 == null ? 0 : hashCode(this.v1_1)) | 0;
    return result;
  };
  IndexedValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IndexedValue))
      return false;
    var tmp0_other_with_cast = other instanceof IndexedValue ? other : THROW_CCE();
    if (!(this.u1_1 === tmp0_other_with_cast.u1_1))
      return false;
    if (!equals_0(this.v1_1, tmp0_other_with_cast.v1_1))
      return false;
    return true;
  };
  function collectionSizeOrDefault(_this__u8e3s4, default_0) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.f();
    } else {
      tmp = default_0;
    }
    return tmp;
  }
  function IndexingIterable(iteratorFactory) {
    this.w1_1 = iteratorFactory;
  }
  IndexingIterable.prototype.h = function () {
    return new IndexingIterator(this.w1_1());
  };
  function IndexingIterator(iterator) {
    this.x1_1 = iterator;
    this.y1_1 = 0;
  }
  IndexingIterator.prototype.i = function () {
    return this.x1_1.i();
  };
  IndexingIterator.prototype.j = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1_1;
    tmp0_this.y1_1 = tmp1 + 1 | 0;
    return new IndexedValue(checkIndexOverflow(tmp1), this.x1_1.j());
  };
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map) ? tmp : THROW_CCE();
  }
  function toMap(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp0_subject = _this__u8e3s4.f();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyMap();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, List)) {
            tmp_0 = _this__u8e3s4.l(0);
          } else {
            tmp_0 = _this__u8e3s4.h().j();
          }

          tmp = mapOf(tmp_0);
          break;
        default:
          tmp = toMap_0(_this__u8e3s4, LinkedHashMap_init_$Create$_0(mapCapacity(_this__u8e3s4.f())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyMap(toMap_0(_this__u8e3s4, LinkedHashMap_init_$Create$()));
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this.z1_1 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map) : false) {
      tmp = other.k();
    } else {
      tmp = false;
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype.f = function () {
    return 0;
  };
  EmptyMap.prototype.k = function () {
    return true;
  };
  EmptyMap.prototype.a2 = function (key) {
    return false;
  };
  EmptyMap.prototype.h1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    return this.a2((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.b2 = function (key) {
    return null;
  };
  EmptyMap.prototype.k1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    return this.b2((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.y = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype.l1 = function () {
    return EmptySet_getInstance();
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function toMap_0(_this__u8e3s4, destination) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.toMap.<anonymous>' call
    putAll_0(destination, _this__u8e3s4);
    tmp$ret$0 = destination;
    return tmp$ret$0;
  }
  function optimizeReadOnlyMap(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.f();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        var tmp$ret$0;
        // Inline function 'kotlin.collections.toSingletonMapOrSelf' call
        tmp$ret$0 = _this__u8e3s4;

        tmp = tmp$ret$0;
        break;
      default:
        tmp = _this__u8e3s4;
        break;
    }
    return tmp;
  }
  function putAll(_this__u8e3s4, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.e2();
      var value = tmp1_loop_parameter.f2();
      _this__u8e3s4.g2(key, value);
    }
  }
  function putAll_0(_this__u8e3s4, pairs) {
    var tmp0_iterator = pairs.h();
    while (tmp0_iterator.i()) {
      var tmp1_loop_parameter = tmp0_iterator.j();
      var key = tmp1_loop_parameter.e2();
      var value = tmp1_loop_parameter.f2();
      _this__u8e3s4.g2(key, value);
    }
  }
  function hashMapOf(pairs) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HashMap_init_$Create$_1(mapCapacity(pairs.length));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.hashMapOf.<anonymous>' call
    putAll(tmp0_apply, pairs);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function IntIterator() {
  }
  IntIterator.prototype.j = function () {
    return this.h2();
  };
  function EmptySet() {
    EmptySet_instance = this;
    this.i2_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.k();
    } else {
      tmp = false;
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype.f = function () {
    return 0;
  };
  EmptySet.prototype.k = function () {
    return true;
  };
  EmptySet.prototype.p1 = function (elements) {
    return elements.k();
  };
  EmptySet.prototype.q = function (elements) {
    return this.p1(elements);
  };
  EmptySet.prototype.h = function () {
    return EmptyIterator_getInstance();
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function Continuation() {
  }
  function startCoroutine(_this__u8e3s4, receiver, completion) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance_4();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.k2(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
  }
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  function Element() {
  }
  function CoroutineContext$plus$lambda(acc, element) {
    var removed = acc.s2(element.x());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.n2(Key_getInstance());
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.s2(Key_getInstance());
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function CoroutineContext() {
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this.v2_1 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.n2 = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.t2 = function (initial, operation) {
    return initial;
  };
  EmptyCoroutineContext.prototype.u2 = function (context) {
    return context;
  };
  EmptyCoroutineContext.prototype.s2 = function (key) {
    return this;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function size($this) {
    var cur = $this;
    var size = 2;
    while (true) {
      var tmp = cur.w2_1;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      var tmp1 = size;
      size = tmp1 + 1 | 0;
    }
  }
  function contains_0($this, element) {
    return equals_0($this.n2(element.x()), element);
  }
  function containsAll($this, context) {
    var cur = context;
    while (true) {
      if (!contains_0($this, cur.x2_1))
        return false;
      var next = cur.w2_1;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        return contains_0($this, isInterface(next, Element) ? next : THROW_CCE());
      }
    }
  }
  function CombinedContext$toString$lambda(acc, element) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(acc) === 0;
    if (tmp$ret$0) {
      tmp = toString_2(element);
    } else {
      tmp = acc + ', ' + element;
    }
    return tmp;
  }
  function CombinedContext(left, element) {
    this.w2_1 = left;
    this.x2_1 = element;
  }
  CombinedContext.prototype.n2 = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur.x2_1.n2(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var next = cur.w2_1;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        return next.n2(key);
      }
    }
  };
  CombinedContext.prototype.t2 = function (initial, operation) {
    return operation(this.w2_1.t2(initial, operation), this.x2_1);
  };
  CombinedContext.prototype.s2 = function (key) {
    var tmp0_safe_receiver = this.x2_1.n2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return this.w2_1;
    }
    var newLeft = this.w2_1.s2(key);
    return newLeft === this.w2_1 ? this : newLeft === EmptyCoroutineContext_getInstance() ? this.x2_1 : new CombinedContext(newLeft, this.x2_1);
  };
  CombinedContext.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = containsAll(other, this);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CombinedContext.prototype.hashCode = function () {
    return hashCode(this.w2_1) + hashCode(this.x2_1) | 0;
  };
  CombinedContext.prototype.toString = function () {
    return '[' + this.t2('', CombinedContext$toString$lambda) + ']';
  };
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this.o2_1 = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey.p2_1;
    } else {
      tmp_0 = baseKey;
    }
    tmp.p2_1 = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.q2 = function (element) {
    return this.o2_1(element);
  };
  AbstractCoroutineContextKey.prototype.r2 = function (key) {
    return key === this ? true : this.p2_1 === key;
  };
  function AbstractCoroutineContextElement(key) {
    this.y2_1 = key;
  }
  AbstractCoroutineContextElement.prototype.x = function () {
    return this.y2_1;
  };
  function get_COROUTINE_SUSPENDED() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b | 0;
    return mod >= 0 ? mod : mod + b | 0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.m_1 = new IntRange(1, 0);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_2();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype.f3 = function () {
    return this.g3_1;
  };
  IntRange.prototype.j3 = function () {
    return this.h3_1;
  };
  IntRange.prototype.k = function () {
    return this.g3_1 > this.h3_1;
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.k() ? other.k() : false) ? true : this.g3_1 === other.g3_1 ? this.h3_1 === other.h3_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.k() ? -1 : imul(31, this.g3_1) + this.h3_1 | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this.g3_1 + '..' + this.h3_1;
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.k3_1 = step;
    this.l3_1 = last;
    this.m3_1 = this.k3_1 > 0 ? first <= last : first >= last;
    this.n3_1 = this.m3_1 ? first : this.l3_1;
  }
  IntProgressionIterator.prototype.i = function () {
    return this.m3_1;
  };
  IntProgressionIterator.prototype.h2 = function () {
    var value = this.n3_1;
    if (value === this.l3_1) {
      if (!this.m3_1)
        throw NoSuchElementException_init_$Create$();
      this.m3_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this.n3_1 = tmp0_this.n3_1 + this.k3_1 | 0;
    }
    return value;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.n = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_3();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance().MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.g3_1 = start;
    this.h3_1 = getProgressionLastElement(start, endInclusive, step);
    this.i3_1 = step;
  }
  IntProgression.prototype.h = function () {
    return new IntProgressionIterator(this.g3_1, this.h3_1, this.i3_1);
  };
  IntProgression.prototype.k = function () {
    return this.i3_1 > 0 ? this.g3_1 > this.h3_1 : this.g3_1 < this.h3_1;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.k() ? other.k() : false) ? true : (this.g3_1 === other.g3_1 ? this.h3_1 === other.h3_1 : false) ? this.i3_1 === other.i3_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.k() ? -1 : imul(31, imul(31, this.g3_1) + this.h3_1 | 0) + this.i3_1 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this.i3_1 > 0 ? '' + this.g3_1 + '..' + this.h3_1 + ' step ' + this.i3_1 : '' + this.g3_1 + ' downTo ' + this.h3_1 + ' step ' + (-this.i3_1 | 0);
  };
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.a(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.a(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.p3(element.o3_1);
        } else {
          _this__u8e3s4.a(toString_1(element));
        }
      }
    }
  }
  function equals(_this__u8e3s4, other, ignoreCase) {
    if (equals_0(new Char(_this__u8e3s4), new Char(other)))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this__u8e3s4);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (equals_0(new Char(thisUpper), new Char(otherUpper))) {
      tmp = true;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString_0(thisUpper);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      var tmp_0 = new Char(tmp$ret$3);
      var tmp$ret$7;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$6;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2_asDynamic = toString_0(otherUpper);
      tmp$ret$4 = tmp2_asDynamic;
      var tmp3_unsafeCast = tmp$ret$4.toLowerCase();
      tmp$ret$5 = tmp3_unsafeCast;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
      tmp = equals_0(tmp_0, new Char(tmp$ret$7));
    }
    return tmp;
  }
  function get_lastIndex_1(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function split(_this__u8e3s4, delimiters, ignoreCase, limit) {
    if (delimiters.length === 1) {
      var delimiter = delimiters[0];
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$0 = charSequenceLength(delimiter) === 0;
      if (!tmp$ret$0) {
        return split_0(_this__u8e3s4, delimiter, ignoreCase, limit);
      }
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = asIterable(rangesDelimitedBy$default(_this__u8e3s4, delimiters, 0, ignoreCase, limit, 2, null));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      var tmp$ret$1;
      // Inline function 'kotlin.text.split.<anonymous>' call
      tmp$ret$1 = substring(_this__u8e3s4, item);
      tmp0_mapTo.e(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function split$default(_this__u8e3s4, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return split(_this__u8e3s4, delimiters, ignoreCase, limit);
  }
  function split_0(_this__u8e3s4, delimiter, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var currentOffset = 0;
    var nextIndex = indexOf_0(_this__u8e3s4, delimiter, currentOffset, ignoreCase);
    if (nextIndex === -1 ? true : limit === 1) {
      return listOf_0(toString_2(_this__u8e3s4));
    }
    var isLimited = limit > 0;
    var result = ArrayList_init_$Create$_0(isLimited ? coerceAtMost(limit, 10) : 10);
    $l$loop: do {
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = currentOffset;
      var tmp1_substring = nextIndex;
      tmp$ret$0 = toString_2(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
      result.e(tmp$ret$0);
      currentOffset = nextIndex + delimiter.length | 0;
      if (isLimited ? result.f() === (limit - 1 | 0) : false)
        break $l$loop;
      nextIndex = indexOf_0(_this__u8e3s4, delimiter, currentOffset, ignoreCase);
    }
     while (!(nextIndex === -1));
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp2_substring = currentOffset;
    var tmp3_substring = charSequenceLength(_this__u8e3s4);
    tmp$ret$1 = toString_2(charSequenceSubSequence(_this__u8e3s4, tmp2_substring, tmp3_substring));
    result.e(tmp$ret$1);
    return result;
  }
  function substring(_this__u8e3s4, range) {
    return toString_2(charSequenceSubSequence(_this__u8e3s4, range.f3(), range.j3() + 1 | 0));
  }
  function rangesDelimitedBy(_this__u8e3s4, delimiters, startIndex, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this__u8e3s4, startIndex, limit, rangesDelimitedBy$lambda(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this__u8e3s4, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this__u8e3s4, delimiters, startIndex, ignoreCase, limit);
  }
  function regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this__u8e3s4) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this__u8e3s4, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function requireNonNegativeLimit(limit) {
    var tmp0_require = limit >= 0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.text.requireNonNegativeLimit.<anonymous>' call
      tmp$ret$0 = 'Limit must be non-negative, but was ' + limit;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    return tmp;
  }
  function indexOf_0(_this__u8e3s4, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this__u8e3s4);
      tmp = indexOf$default_0(_this__u8e3s4, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.nativeIndexOf' call
      var tmp0_nativeIndexOf = _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_nativeIndexOf;
      tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function indexOf$default(_this__u8e3s4, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_0(_this__u8e3s4, string, startIndex, ignoreCase);
  }
  function calcNext($this) {
    if ($this.s3_1 < 0) {
      $this.q3_1 = 0;
      $this.t3_1 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this.v3_1.y3_1 > 0) {
        var tmp0_this = $this;
        tmp0_this.u3_1 = tmp0_this.u3_1 + 1 | 0;
        tmp_0 = tmp0_this.u3_1 >= $this.v3_1.y3_1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        tmp = $this.s3_1 > charSequenceLength($this.v3_1.w3_1);
      }
      if (tmp) {
        $this.t3_1 = numberRangeToNumber($this.r3_1, get_lastIndex_1($this.v3_1.w3_1));
        $this.s3_1 = -1;
      } else {
        var match = $this.v3_1.z3_1($this.v3_1.w3_1, $this.s3_1);
        if (match == null) {
          $this.t3_1 = numberRangeToNumber($this.r3_1, get_lastIndex_1($this.v3_1.w3_1));
          $this.s3_1 = -1;
        } else {
          var tmp1_container = match;
          var index = tmp1_container.e2();
          var length = tmp1_container.f2();
          $this.t3_1 = until($this.r3_1, index);
          $this.r3_1 = index + length | 0;
          $this.s3_1 = $this.r3_1 + (length === 0 ? 1 : 0) | 0;
        }
      }
      $this.q3_1 = 1;
    }
  }
  function DelimitedRangesSequence$iterator$1(this$0) {
    this.v3_1 = this$0;
    this.q3_1 = -1;
    this.r3_1 = coerceIn(this$0.x3_1, 0, charSequenceLength(this$0.w3_1));
    this.s3_1 = this.r3_1;
    this.t3_1 = null;
    this.u3_1 = 0;
  }
  DelimitedRangesSequence$iterator$1.prototype.j = function () {
    if (this.q3_1 === -1) {
      calcNext(this);
    }
    if (this.q3_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.t3_1;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this.t3_1 = null;
    this.q3_1 = -1;
    return result;
  };
  DelimitedRangesSequence$iterator$1.prototype.i = function () {
    if (this.q3_1 === -1) {
      calcNext(this);
    }
    return this.q3_1 === 1;
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this.w3_1 = input;
    this.x3_1 = startIndex;
    this.y3_1 = limit;
    this.z3_1 = getNextMatch;
  }
  DelimitedRangesSequence.prototype.h = function () {
    return new DelimitedRangesSequence$iterator$1(this);
  };
  function findAnyOf(_this__u8e3s4, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings.f() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last) {
        tmp = indexOf$default(_this__u8e3s4, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this__u8e3s4, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this__u8e3s4)) : downTo(coerceAtMost(startIndex, get_lastIndex_1(_this__u8e3s4)), 0);
    if (typeof _this__u8e3s4 === 'string') {
      var inductionVariable = indices.g3_1;
      var last_0 = indices.h3_1;
      var step = indices.i3_1;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator = strings.h();
            while (tmp0_iterator.i()) {
              var element = tmp0_iterator.j();
              var tmp$ret$0;
              // Inline function 'kotlin.text.findAnyOf.<anonymous>' call
              tmp$ret$0 = regionMatches(element, 0, _this__u8e3s4, index_0, element.length, ignoreCase);
              if (tmp$ret$0) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
            tmp$ret$1 = null;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      var inductionVariable_0 = indices.g3_1;
      var last_1 = indices.h3_1;
      var step_0 = indices.i3_1;
      if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_0 | 0;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator_0 = strings.h();
            while (tmp0_iterator_0.i()) {
              var element_0 = tmp0_iterator_0.j();
              var tmp$ret$2;
              // Inline function 'kotlin.text.findAnyOf.<anonymous>' call
              tmp$ret$2 = regionMatchesImpl(element_0, 0, _this__u8e3s4, index_1, element_0.length, ignoreCase);
              if (tmp$ret$2) {
                tmp$ret$3 = element_0;
                break $l$block_0;
              }
            }
            tmp$ret$3 = null;
          }
          var matchingString_0 = tmp$ret$3;
          if (!(matchingString_0 == null))
            return to(index_1, matchingString_0);
        }
         while (!(index_1 === last_1));
    }
    return null;
  }
  function indexOf_1(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last) {
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__u8e3s4))) : downTo(coerceAtMost(startIndex, get_lastIndex_1(_this__u8e3s4)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this__u8e3s4 === 'string') {
      tmp = typeof other === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var inductionVariable = indices.g3_1;
      var last_0 = indices.h3_1;
      var step = indices.i3_1;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this__u8e3s4, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      var inductionVariable_0 = indices.g3_1;
      var last_1 = indices.h3_1;
      var step_0 = indices.i3_1;
      if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_0 | 0;
          if (regionMatchesImpl(other, 0, _this__u8e3s4, index_0, charSequenceLength(other), ignoreCase))
            return index_0;
        }
         while (!(index_0 === last_1));
    }
    return -1;
  }
  function indexOf$default_0(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last = false;
    return indexOf_1(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last);
  }
  function lastIndexOf(_this__u8e3s4, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this__u8e3s4, string, startIndex, 0, ignoreCase, true);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.nativeLastIndexOf' call
      var tmp0_nativeLastIndexOf = _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_nativeLastIndexOf;
      tmp$ret$1 = tmp$ret$0.lastIndexOf(string, startIndex);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function lastIndexOf$default(_this__u8e3s4, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = get_lastIndex_1(_this__u8e3s4);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this__u8e3s4, string, startIndex, ignoreCase);
  }
  function get_indices_0(_this__u8e3s4) {
    return numberRangeToNumber(0, charSequenceLength(_this__u8e3s4) - 1 | 0);
  }
  function rangesDelimitedBy$lambda($delimitersList, $ignoreCase) {
    return function ($this$$receiver, currentIndex) {
      var tmp0_safe_receiver = findAnyOf($this$$receiver, $delimitersList, currentIndex, $ignoreCase, false);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'kotlin.text.rangesDelimitedBy.<anonymous>.<anonymous>' call
        tmp$ret$0 = to(tmp0_safe_receiver.c2_1, tmp0_safe_receiver.d2_1.length);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return tmp;
    };
  }
  var LazyThreadSafetyMode_SYNCHRONIZED_instance;
  var LazyThreadSafetyMode_PUBLICATION_instance;
  var LazyThreadSafetyMode_NONE_instance;
  var LazyThreadSafetyMode_entriesInitialized;
  function LazyThreadSafetyMode_initEntries() {
    if (LazyThreadSafetyMode_entriesInitialized)
      return Unit_getInstance();
    LazyThreadSafetyMode_entriesInitialized = true;
    LazyThreadSafetyMode_SYNCHRONIZED_instance = new LazyThreadSafetyMode('SYNCHRONIZED', 0);
    LazyThreadSafetyMode_PUBLICATION_instance = new LazyThreadSafetyMode('PUBLICATION', 1);
    LazyThreadSafetyMode_NONE_instance = new LazyThreadSafetyMode('NONE', 2);
  }
  function LazyThreadSafetyMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function UnsafeLazyImpl(initializer) {
    this.a4_1 = initializer;
    this.b4_1 = UNINITIALIZED_VALUE_getInstance();
  }
  UnsafeLazyImpl.prototype.a1 = function () {
    if (this.b4_1 === UNINITIALIZED_VALUE_getInstance()) {
      this.b4_1 = ensureNotNull(this.a4_1)();
      this.a4_1 = null;
    }
    var tmp = this.b4_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  UnsafeLazyImpl.prototype.c4 = function () {
    return !(this.b4_1 === UNINITIALIZED_VALUE_getInstance());
  };
  UnsafeLazyImpl.prototype.toString = function () {
    return this.c4() ? toString_1(this.a1()) : 'Lazy value not initialized yet.';
  };
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this;
  }
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null)
      new UNINITIALIZED_VALUE();
    return UNINITIALIZED_VALUE_instance;
  }
  function LazyThreadSafetyMode_PUBLICATION_getInstance() {
    LazyThreadSafetyMode_initEntries();
    return LazyThreadSafetyMode_PUBLICATION_instance;
  }
  function _Result___init__impl__xyqfz8(value) {
    return value;
  }
  function _Result___get_value__impl__bjfvqg($this) {
    return $this;
  }
  function _Result___get_isFailure__impl__jpiriv($this) {
    var tmp = _Result___get_value__impl__bjfvqg($this);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl_p6xea9($this) {
    var tmp0_subject = _Result___get_value__impl__bjfvqg($this);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl__bjfvqg($this).d4_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Failure(exception) {
    this.d4_1 = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_0(this.d4_1, other.d4_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this.d4_1);
  };
  Failure.prototype.toString = function () {
    return 'Failure(' + this.d4_1 + ')';
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function NotImplementedError(message) {
    Error_init_$Init$(message, this);
    captureStack(this, NotImplementedError);
  }
  function Pair(first, second) {
    this.c2_1 = first;
    this.d2_1 = second;
  }
  Pair.prototype.toString = function () {
    return '(' + this.c2_1 + ', ' + this.d2_1 + ')';
  };
  Pair.prototype.e2 = function () {
    return this.c2_1;
  };
  Pair.prototype.f2 = function () {
    return this.d2_1;
  };
  Pair.prototype.hashCode = function () {
    var result = this.c2_1 == null ? 0 : hashCode(this.c2_1);
    result = imul(result, 31) + (this.d2_1 == null ? 0 : hashCode(this.d2_1)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this.c2_1, tmp0_other_with_cast.c2_1))
      return false;
    if (!equals_0(this.d2_1, tmp0_other_with_cast.d2_1))
      return false;
    return true;
  };
  function to(_this__u8e3s4, that) {
    return new Pair(_this__u8e3s4, that);
  }
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  function CharSequence() {
  }
  function Number_0() {
  }
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function IntCompanionObject() {
    IntCompanionObject_instance = this;
    this.MIN_VALUE = -2147483648;
    this.MAX_VALUE = 2147483647;
    this.SIZE_BYTES = 4;
    this.SIZE_BITS = 32;
  }
  IntCompanionObject.prototype.j4 = function () {
    return this.MIN_VALUE;
  };
  IntCompanionObject.prototype.k4 = function () {
    return this.MAX_VALUE;
  };
  IntCompanionObject.prototype.l4 = function () {
    return this.SIZE_BYTES;
  };
  IntCompanionObject.prototype.m4 = function () {
    return this.SIZE_BITS;
  };
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject();
    return IntCompanionObject_instance;
  }
  function StringCompanionObject() {
    StringCompanionObject_instance = this;
  }
  var StringCompanionObject_instance;
  function StringCompanionObject_getInstance() {
    if (StringCompanionObject_instance == null)
      new StringCompanionObject();
    return StringCompanionObject_instance;
  }
  function listOf_0(element) {
    return arrayListOf([element]);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function arrayCopy(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().t(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().t(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (isView(destination) ? isView(source) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = source;
      var subrange = tmp$ret$0.subarray(startIndex, endIndex);
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = destination;
      tmp$ret$1.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function mapOf(pair) {
    return hashMapOf([pair]);
  }
  function copyToArray(collection) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = collection;
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = collection;
      var tmp0_unsafeCast = tmp$ret$1.toArray();
      tmp$ret$2 = tmp0_unsafeCast;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = copyToArrayImpl(collection);
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_unsafeCast;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function copyToArrayImpl(collection) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    var array = tmp$ret$0;
    var iterator = collection.h();
    while (iterator.i()) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = array;
      tmp$ret$1.push(iterator.j());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.n4 = function () {
  };
  function IteratorImpl($outer) {
    this.q4_1 = $outer;
    this.o4_1 = 0;
    this.p4_1 = -1;
  }
  IteratorImpl.prototype.i = function () {
    return this.o4_1 < this.q4_1.f();
  };
  IteratorImpl.prototype.j = function () {
    if (!this.i())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this.o4_1;
    tmp0_this.o4_1 = tmp1 + 1 | 0;
    tmp.p4_1 = tmp1;
    return this.q4_1.l(this.p4_1);
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.r4_1 = 0;
  }
  AbstractMutableList.prototype.e = function (element) {
    this.n4();
    this.s4(this.f(), element);
    return true;
  };
  AbstractMutableList.prototype.h = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.p = function (element) {
    return this.t4(element) >= 0;
  };
  AbstractMutableList.prototype.t4 = function (element) {
    var inductionVariable = 0;
    var last = get_lastIndex_0(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.l(index), element)) {
          return index;
        }
      }
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    return Companion_getInstance().v(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().u(this);
  };
  function AbstractMutableMap$keys$1$iterator$1($entryIterator) {
    this.u4_1 = $entryIterator;
  }
  AbstractMutableMap$keys$1$iterator$1.prototype.i = function () {
    return this.u4_1.i();
  };
  AbstractMutableMap$keys$1$iterator$1.prototype.j = function () {
    return this.u4_1.j().x();
  };
  function SimpleEntry(key, value) {
    this.v4_1 = key;
    this.w4_1 = value;
  }
  SimpleEntry.prototype.x = function () {
    return this.v4_1;
  };
  SimpleEntry.prototype.a1 = function () {
    return this.w4_1;
  };
  SimpleEntry.prototype.x4 = function (newValue) {
    var oldValue = this.w4_1;
    this.w4_1 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().z(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().b1(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().c1(this, other);
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.p = function (element) {
    return this.y4(element);
  };
  function AbstractMutableMap$keys$1(this$0) {
    this.z4_1 = this$0;
    AbstractMutableSet.call(this);
  }
  AbstractMutableMap$keys$1.prototype.a5 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  AbstractMutableMap$keys$1.prototype.e = function (element) {
    return this.a5((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.e1 = function (element) {
    return this.z4_1.h1(element);
  };
  AbstractMutableMap$keys$1.prototype.p = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.h = function () {
    var entryIterator = this.z4_1.y().h();
    return new AbstractMutableMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMutableMap$keys$1.prototype.f = function () {
    return this.z4_1.f();
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.d5_1 = null;
    this.e5_1 = null;
  }
  AbstractMutableMap.prototype.l1 = function () {
    if (this.d5_1 == null) {
      var tmp = this;
      tmp.d5_1 = new AbstractMutableMap$keys$1(this);
    }
    return ensureNotNull(this.d5_1);
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_getInstance_1().n1(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().m1(this);
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(elements);
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
    Companion_getInstance().r(index, $this.f());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
    Companion_getInstance().s(index, $this.f());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this.c_1 = array;
    this.d_1 = false;
  }
  ArrayList.prototype.f = function () {
    return this.c_1.length;
  };
  ArrayList.prototype.l = function (index) {
    var tmp = this.c_1[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.e = function (element) {
    this.n4();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.c_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.r4_1;
    tmp0_this.r4_1 = tmp1 + 1 | 0;
    return true;
  };
  ArrayList.prototype.s4 = function (index, element) {
    this.n4();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.c_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.r4_1;
    tmp0_this.r4_1 = tmp1 + 1 | 0;
  };
  ArrayList.prototype.g = function (elements) {
    this.n4();
    if (elements.k())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.plus' call
    var tmp0_plus = tmp0_this.c_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(elements);
    var tmp1_plus = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_plus;
    tmp$ret$2 = tmp$ret$1.concat(tmp1_plus);
    tmp.c_1 = tmp$ret$2;
    var tmp1_this = this;
    var tmp2 = tmp1_this.r4_1;
    tmp1_this.r4_1 = tmp2 + 1 | 0;
    return true;
  };
  ArrayList.prototype.t4 = function (element) {
    return indexOf(this.c_1, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this.c_1);
  };
  ArrayList.prototype.f5 = function () {
    return [].slice.call(this.c_1);
  };
  ArrayList.prototype.toArray = function () {
    return this.f5();
  };
  ArrayList.prototype.n4 = function () {
    if (this.d_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.g5 = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.h5 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EntrySet($outer) {
    this.i5_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.j5 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.e = function (element) {
    return this.j5((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.y4 = function (element) {
    return this.i5_1.j1(element);
  };
  EntrySet.prototype.h = function () {
    return this.i5_1.o5_1.h();
  };
  EntrySet.prototype.f = function () {
    return this.i5_1.f();
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.o5_1 = internalMap;
    $this.p5_1 = internalMap.r5();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    // Inline function 'kotlin.require' call
    var tmp0_require = initialCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$0 = 'Negative initial capacity: ' + initialCapacity;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = loadFactor >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$1 = 'Non-positive load factor: ' + loadFactor;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_2(message_0));
    }
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_2(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_1(initialCapacity) {
    return HashMap_init_$Init$_2(initialCapacity, Object.create(HashMap.prototype));
  }
  HashMap.prototype.h1 = function (key) {
    return this.o5_1.e1(key);
  };
  HashMap.prototype.y = function () {
    if (this.q5_1 == null) {
      this.q5_1 = this.s5();
    }
    return ensureNotNull(this.q5_1);
  };
  HashMap.prototype.s5 = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.k1 = function (key) {
    return this.o5_1.k1(key);
  };
  HashMap.prototype.g2 = function (key, value) {
    return this.o5_1.g2(key, value);
  };
  HashMap.prototype.f = function () {
    return this.o5_1.f();
  };
  function HashMap() {
    this.q5_1 = null;
  }
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.t5_1 = HashMap_init_$Create$();
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.t5_1 = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_1(initialCapacity, $this) {
    HashSet_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_0(initialCapacity) {
    return HashSet_init_$Init$_1(initialCapacity, Object.create(HashSet.prototype));
  }
  HashSet.prototype.e = function (element) {
    var old = this.t5_1.g2(element, this);
    return old == null;
  };
  HashSet.prototype.p = function (element) {
    return this.t5_1.h1(element);
  };
  HashSet.prototype.k = function () {
    return this.t5_1.k();
  };
  HashSet.prototype.h = function () {
    return this.t5_1.l1().h();
  };
  HashSet.prototype.f = function () {
    return this.t5_1.f();
  };
  function HashSet() {
  }
  function computeNext($this) {
    if ($this.x5_1 != null ? $this.y5_1 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = $this.x5_1;
      tmp$ret$0 = tmp0_unsafeCast;
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this.z5_1 = tmp0_this.z5_1 + 1 | 0;
      if (tmp0_this.z5_1 < chainSize)
        return 0;
    }
    var tmp1_this = $this;
    tmp1_this.w5_1 = tmp1_this.w5_1 + 1 | 0;
    if (tmp1_this.w5_1 < $this.v5_1.length) {
      $this.x5_1 = $this.b6_1.d6_1[$this.v5_1[$this.w5_1]];
      var tmp = $this;
      var tmp_0 = $this.x5_1;
      tmp.y5_1 = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this.z5_1 = 0;
      return 0;
    } else {
      $this.x5_1 = null;
      return 1;
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this.c6_1.h5(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this.c6_1.g5(entry.x(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      var chain = chainOrEntry;
      return findEntryInChain(chain, $this, key);
    }
  }
  function findEntryInChain(_this__u8e3s4, $this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.InternalHashCodeMap.findEntryInChain.<anonymous>' call
        tmp$ret$0 = $this.c6_1.g5(element.x(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode) {
    var chainOrEntry = $this.d6_1[hashCode];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function InternalHashCodeMap$iterator$1(this$0) {
    this.b6_1 = this$0;
    this.u5_1 = -1;
    this.v5_1 = Object.keys(this$0.d6_1);
    this.w5_1 = -1;
    this.x5_1 = null;
    this.y5_1 = false;
    this.z5_1 = -1;
    this.a6_1 = null;
  }
  InternalHashCodeMap$iterator$1.prototype.i = function () {
    if (this.u5_1 === -1)
      this.u5_1 = computeNext(this);
    return this.u5_1 === 0;
  };
  InternalHashCodeMap$iterator$1.prototype.j = function () {
    if (!this.i())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this.y5_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.x5_1;
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0[this.z5_1];
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = this.x5_1;
      tmp$ret$1 = tmp1_unsafeCast;
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this.a6_1 = lastEntry;
    this.u5_1 = -1;
    return lastEntry;
  };
  function InternalHashCodeMap(equality) {
    this.c6_1 = equality;
    this.d6_1 = this.f6();
    this.e6_1 = 0;
  }
  InternalHashCodeMap.prototype.r5 = function () {
    return this.c6_1;
  };
  InternalHashCodeMap.prototype.f = function () {
    return this.e6_1;
  };
  InternalHashCodeMap.prototype.g2 = function (key, value) {
    var hashCode = this.c6_1.h5(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode);
    if (chainOrEntry == null) {
      this.d6_1[hashCode] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this.c6_1.g5(entry.x(), key)) {
          return entry.x4(value);
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [entry, new SimpleEntry(key, value)];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          this.d6_1[hashCode] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this.e6_1;
          tmp0_this.e6_1 = tmp1 + 1 | 0;
          return null;
        }
      } else {
        var chain = chainOrEntry;
        var entry_0 = findEntryInChain(chain, this, key);
        if (!(entry_0 == null)) {
          return entry_0.x4(value);
        }
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = chain;
        tmp$ret$3.push(new SimpleEntry(key, value));
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.e6_1;
    tmp2_this.e6_1 = tmp3 + 1 | 0;
    return null;
  };
  InternalHashCodeMap.prototype.e1 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.k1 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1();
  };
  InternalHashCodeMap.prototype.h = function () {
    return new InternalHashCodeMap$iterator$1(this);
  };
  function InternalMap() {
  }
  function EntryIterator($outer) {
    this.i6_1 = $outer;
    this.g6_1 = null;
    this.h6_1 = null;
    this.h6_1 = this.i6_1.t6_1.q6_1;
  }
  EntryIterator.prototype.i = function () {
    return !(this.h6_1 === null);
  };
  EntryIterator.prototype.j = function () {
    if (!this.i())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this.h6_1);
    this.g6_1 = current;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = current.w6_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.EntryIterator.next.<anonymous>' call
    tmp$ret$0 = !(tmp0_takeIf === this.i6_1.t6_1.q6_1);
    if (tmp$ret$0) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$1 = tmp_0;
    tmp.h6_1 = tmp$ret$1;
    return current;
  };
  function ChainEntry($outer, key, value) {
    this.y6_1 = $outer;
    SimpleEntry.call(this, key, value);
    this.w6_1 = null;
    this.x6_1 = null;
  }
  ChainEntry.prototype.x4 = function (newValue) {
    this.y6_1.n4();
    return SimpleEntry.prototype.x4.call(this, newValue);
  };
  function EntrySet_0($outer) {
    this.t6_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.j5 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.e = function (element) {
    return this.j5((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.y4 = function (element) {
    return this.t6_1.j1(element);
  };
  EntrySet_0.prototype.h = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype.f = function () {
    return this.t6_1.f();
  };
  function addToEnd(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = _this__u8e3s4.w6_1 == null ? _this__u8e3s4.x6_1 == null : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    }
    var _head = $this.q6_1;
    if (_head == null) {
      $this.q6_1 = _this__u8e3s4;
      _this__u8e3s4.w6_1 = _this__u8e3s4;
      _this__u8e3s4.x6_1 = _this__u8e3s4;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.checkNotNull' call
      var tmp1_checkNotNull = _head.x6_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_checkNotNull == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.checkNotNull.<anonymous>' call
          tmp$ret$1 = 'Required value was null.';
          var message_0 = tmp$ret$1;
          throw IllegalStateException_init_$Create$_0(toString_2(message_0));
        } else {
          tmp$ret$2 = tmp1_checkNotNull;
          break $l$block;
        }
      }
      tmp$ret$3 = tmp$ret$2;
      var _tail = tmp$ret$3;
      _this__u8e3s4.x6_1 = _tail;
      _this__u8e3s4.w6_1 = _head;
      _head.x6_1 = _this__u8e3s4;
      _tail.w6_1 = _this__u8e3s4;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this.r6_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this.r6_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.h1 = function (key) {
    return this.r6_1.h1(key);
  };
  LinkedHashMap.prototype.s5 = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.k1 = function (key) {
    var tmp0_safe_receiver = this.r6_1.k1(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1();
  };
  LinkedHashMap.prototype.g2 = function (key, value) {
    this.n4();
    var old = this.r6_1.k1(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this.r6_1.g2(key, newEntry);
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.x4(value);
    }
  };
  LinkedHashMap.prototype.f = function () {
    return this.r6_1.f();
  };
  LinkedHashMap.prototype.n4 = function () {
    if (this.s6_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this.q6_1 = null;
    this.s6_1 = false;
  }
  function CancellationException_init_$Init$(message, cause, $this) {
    IllegalStateException_init_$Init$_1(message, cause, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException() {
    captureStack(this, CancellationException);
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function KClass() {
  }
  function KClassImpl(jClass) {
    this.a7_1 = jClass;
  }
  KClassImpl.prototype.b7 = function () {
    return this.a7_1;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this.b7(), other.b7());
    } else {
      tmp = false;
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.z6();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return 'class ' + this.z6();
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.d7_1 = givenSimpleName;
    this.e7_1 = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return KClassImpl.prototype.equals.call(this, other) ? this.d7_1 === other.d7_1 : false;
  };
  PrimitiveKClassImpl.prototype.z6 = function () {
    return this.d7_1;
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.g7_1 = 'Nothing';
  }
  NothingKClassImpl.prototype.z6 = function () {
    return this.g7_1;
  };
  NothingKClassImpl.prototype.b7 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype.z6 = function () {
    throw IllegalStateException_init_$Create$_0('Unknown simpleName for ErrorKClass');
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = jClass;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    var tmp0_unsafeCast = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp.i7_1 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype.z6 = function () {
    return this.i7_1;
  };
  function KProperty1() {
  }
  function get_functionClasses() {
    init_properties_primitives_kt_rm1w5q();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda(it) {
    return isObject(it);
  }
  function PrimitiveClasses$numberClass$lambda(it) {
    return isNumber(it);
  }
  function PrimitiveClasses$booleanClass$lambda(it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  }
  function PrimitiveClasses$byteClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$shortClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$intClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$floatClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$doubleClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$arrayClass$lambda(it) {
    return !(it == null) ? isArray(it) : false;
  }
  function PrimitiveClasses$stringClass$lambda(it) {
    return !(it == null) ? typeof it === 'string' : false;
  }
  function PrimitiveClasses$throwableClass$lambda(it) {
    return it instanceof Error;
  }
  function PrimitiveClasses$booleanArrayClass$lambda(it) {
    return !(it == null) ? isBooleanArray(it) : false;
  }
  function PrimitiveClasses$charArrayClass$lambda(it) {
    return !(it == null) ? isCharArray(it) : false;
  }
  function PrimitiveClasses$byteArrayClass$lambda(it) {
    return !(it == null) ? isByteArray(it) : false;
  }
  function PrimitiveClasses$shortArrayClass$lambda(it) {
    return !(it == null) ? isShortArray(it) : false;
  }
  function PrimitiveClasses$intArrayClass$lambda(it) {
    return !(it == null) ? isIntArray(it) : false;
  }
  function PrimitiveClasses$longArrayClass$lambda(it) {
    return !(it == null) ? isLongArray(it) : false;
  }
  function PrimitiveClasses$floatArrayClass$lambda(it) {
    return !(it == null) ? isFloatArray(it) : false;
  }
  function PrimitiveClasses$doubleArrayClass$lambda(it) {
    return !(it == null) ? isDoubleArray(it) : false;
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = it;
        tmp = tmp$ret$0.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object;
    tmp$ret$0 = tmp0_unsafeCast;
    var tmp_0 = tmp$ret$0;
    tmp.anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_0 = Number;
    tmp$ret$1 = tmp0_unsafeCast_0;
    var tmp_2 = tmp$ret$1;
    tmp_1.numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
    this.nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_1 = Boolean;
    tmp$ret$2 = tmp0_unsafeCast_1;
    var tmp_4 = tmp$ret$2;
    tmp_3.booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
    var tmp_5 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_2 = Number;
    tmp$ret$3 = tmp0_unsafeCast_2;
    var tmp_6 = tmp$ret$3;
    tmp_5.byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
    var tmp_7 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_3 = Number;
    tmp$ret$4 = tmp0_unsafeCast_3;
    var tmp_8 = tmp$ret$4;
    tmp_7.shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
    var tmp_9 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_4 = Number;
    tmp$ret$5 = tmp0_unsafeCast_4;
    var tmp_10 = tmp$ret$5;
    tmp_9.intClass = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
    var tmp_11 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_5 = Number;
    tmp$ret$6 = tmp0_unsafeCast_5;
    var tmp_12 = tmp$ret$6;
    tmp_11.floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda);
    var tmp_13 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_6 = Number;
    tmp$ret$7 = tmp0_unsafeCast_6;
    var tmp_14 = tmp$ret$7;
    tmp_13.doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda);
    var tmp_15 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_7 = Array;
    tmp$ret$8 = tmp0_unsafeCast_7;
    var tmp_16 = tmp$ret$8;
    tmp_15.arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda);
    var tmp_17 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_8 = String;
    tmp$ret$9 = tmp0_unsafeCast_8;
    var tmp_18 = tmp$ret$9;
    tmp_17.stringClass = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda);
    var tmp_19 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_9 = Error;
    tmp$ret$10 = tmp0_unsafeCast_9;
    var tmp_20 = tmp$ret$10;
    tmp_19.throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda);
    var tmp_21 = this;
    var tmp$ret$11;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_10 = Array;
    tmp$ret$11 = tmp0_unsafeCast_10;
    var tmp_22 = tmp$ret$11;
    tmp_21.booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
    var tmp_23 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_11 = Uint16Array;
    tmp$ret$12 = tmp0_unsafeCast_11;
    var tmp_24 = tmp$ret$12;
    tmp_23.charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
    var tmp_25 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_12 = Int8Array;
    tmp$ret$13 = tmp0_unsafeCast_12;
    var tmp_26 = tmp$ret$13;
    tmp_25.byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
    var tmp_27 = this;
    var tmp$ret$14;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_13 = Int16Array;
    tmp$ret$14 = tmp0_unsafeCast_13;
    var tmp_28 = tmp$ret$14;
    tmp_27.shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
    var tmp_29 = this;
    var tmp$ret$15;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_14 = Int32Array;
    tmp$ret$15 = tmp0_unsafeCast_14;
    var tmp_30 = tmp$ret$15;
    tmp_29.intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
    var tmp_31 = this;
    var tmp$ret$16;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_15 = Array;
    tmp$ret$16 = tmp0_unsafeCast_15;
    var tmp_32 = tmp$ret$16;
    tmp_31.longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
    var tmp_33 = this;
    var tmp$ret$17;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_16 = Float32Array;
    tmp$ret$17 = tmp0_unsafeCast_16;
    var tmp_34 = tmp$ret$17;
    tmp_33.floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
    var tmp_35 = this;
    var tmp$ret$18;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_17 = Float64Array;
    tmp$ret$18 = tmp0_unsafeCast_17;
    var tmp_36 = tmp$ret$18;
    tmp_35.doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
  }
  PrimitiveClasses.prototype.j7 = function () {
    return this.anyClass;
  };
  PrimitiveClasses.prototype.k7 = function () {
    return this.numberClass;
  };
  PrimitiveClasses.prototype.l7 = function () {
    return this.nothingClass;
  };
  PrimitiveClasses.prototype.m7 = function () {
    return this.booleanClass;
  };
  PrimitiveClasses.prototype.n7 = function () {
    return this.byteClass;
  };
  PrimitiveClasses.prototype.o7 = function () {
    return this.shortClass;
  };
  PrimitiveClasses.prototype.p7 = function () {
    return this.intClass;
  };
  PrimitiveClasses.prototype.q7 = function () {
    return this.floatClass;
  };
  PrimitiveClasses.prototype.r7 = function () {
    return this.doubleClass;
  };
  PrimitiveClasses.prototype.s7 = function () {
    return this.arrayClass;
  };
  PrimitiveClasses.prototype.t7 = function () {
    return this.stringClass;
  };
  PrimitiveClasses.prototype.u7 = function () {
    return this.throwableClass;
  };
  PrimitiveClasses.prototype.v7 = function () {
    return this.booleanArrayClass;
  };
  PrimitiveClasses.prototype.w7 = function () {
    return this.charArrayClass;
  };
  PrimitiveClasses.prototype.x7 = function () {
    return this.byteArrayClass;
  };
  PrimitiveClasses.prototype.y7 = function () {
    return this.shortArrayClass;
  };
  PrimitiveClasses.prototype.z7 = function () {
    return this.intArrayClass;
  };
  PrimitiveClasses.prototype.a8 = function () {
    return this.longArrayClass;
  };
  PrimitiveClasses.prototype.b8 = function () {
    return this.floatArrayClass;
  };
  PrimitiveClasses.prototype.c8 = function () {
    return this.doubleArrayClass;
  };
  PrimitiveClasses.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlin.reflect.js.internal.PrimitiveClasses.functionClass.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = Function;
      tmp$ret$0 = tmp0_unsafeCast;
      var tmp_0 = tmp$ret$0;
      var tmp_1 = 'Function' + arity;
      var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_asDynamic = get_functionClasses();
      tmp$ret$1 = tmp1_asDynamic;
      tmp$ret$1[arity] = result;
      tmp$ret$2 = result;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function init_properties_primitives_kt_rm1w5q() {
    if (properties_initialized_primitives_kt_jle18u) {
    } else {
      properties_initialized_primitives_kt_jle18u = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      functionClasses = tmp$ret$0;
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = jClass;
      tmp$ret$1 = tmp$ret$0;
      tmp = getKClassM(tmp$ret$1);
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = jClass;
      tmp$ret$3 = tmp$ret$2;
      tmp = getKClass1(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = NothingKClassImpl_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp1_unsafeCast = new ErrorKClass();
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_unsafeCast;
        tmp$ret$3 = tmp$ret$2;

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = PrimitiveClasses_getInstance().stringClass;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = jClass;
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance().stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = jsBitwiseOr(e, 0);
        tmp$ret$0 = tmp0_asDynamic;

        if (tmp$ret$0 === e) {
          tmp_0 = PrimitiveClasses_getInstance().intClass;
        } else {
          tmp_0 = PrimitiveClasses_getInstance().doubleClass;
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance().booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = e;

        tmp = tmp_1.functionClass(tmp$ret$1.length);
        break;
      default:
        var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance().arrayClass;
                          } else {
                            var constructor = Object.getPrototypeOf(e).constructor;
                            var tmp_3;
                            if (constructor === Object) {
                              tmp_3 = PrimitiveClasses_getInstance().anyClass;
                            } else if (constructor === Error) {
                              tmp_3 = PrimitiveClasses_getInstance().throwableClass;
                            } else {
                              var jsClass = constructor;
                              tmp_3 = getKClass1(jsClass);
                            }
                            tmp_2 = tmp_3;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast = tmp;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this.d8_1 = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype.g4 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.d8_1;
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.h4 = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.getOrElse' call
    var tmp0_getOrElse = this.d8_1;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex_1(tmp0_getOrElse) : false) {
      tmp = charSequenceGet(tmp0_getOrElse, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this.g4() + '}');
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  StringBuilder.prototype.i4 = function (startIndex, endIndex) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.d8_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
    return tmp$ret$1;
  };
  StringBuilder.prototype.p3 = function (value) {
    var tmp0_this = this;
    tmp0_this.d8_1 = tmp0_this.d8_1 + new Char(value);
    return this;
  };
  StringBuilder.prototype.a = function (value) {
    var tmp0_this = this;
    tmp0_this.d8_1 = tmp0_this.d8_1 + toString_1(value);
    return this;
  };
  StringBuilder.prototype.e8 = function (value) {
    var tmp0_this = this;
    tmp0_this.d8_1 = tmp0_this.d8_1 + toString_1(value);
    return this;
  };
  StringBuilder.prototype.f8 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this.d8_1;
    var tmp1_elvis_lhs = value;
    tmp.d8_1 = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this.d8_1;
  };
  function uppercaseChar(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.uppercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString_0(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toUpperCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
  }
  function isWhitespace(_this__u8e3s4) {
    return isWhitespaceImpl(_this__u8e3s4);
  }
  function isBlank(_this__u8e3s4) {
    var tmp;
    if (charSequenceLength(_this__u8e3s4) === 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp0_all = get_indices_0(_this__u8e3s4);
        var tmp_0;
        if (isInterface(tmp0_all, Collection)) {
          tmp_0 = tmp0_all.k();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var inductionVariable = tmp0_all.g3_1;
        var last = tmp0_all.h3_1;
        if (inductionVariable <= last)
          do {
            var element = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            // Inline function 'kotlin.text.isBlank.<anonymous>' call
            tmp$ret$1 = isWhitespace(charSequenceGet(_this__u8e3s4, element));
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
           while (!(element === last));
        tmp$ret$0 = true;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    var tmp = _Char___init__impl__6a9atx(tmp$ret$0);
    return tmp;
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__compareTo_impl_ypi4mb_0($this, other) {
    var tmp = $this.o3_1;
    return Char__compareTo_impl_ypi4mb(tmp, other instanceof Char ? other.o3_1 : THROW_CCE());
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function Char__equals_impl_x6719k($this, other) {
    if (!(other instanceof Char))
      return false;
    return _get_value__a43j40($this) === _get_value__a43j40(other.o3_1);
  }
  function Char__hashCode_impl_otmys($this) {
    return _get_value__a43j40($this);
  }
  function toString_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = String.fromCharCode(_get_value__a43j40($this));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.g8_1 = _Char___init__impl__6a9atx(0);
    this.h8_1 = _Char___init__impl__6a9atx(65535);
    this.i8_1 = _Char___init__impl__6a9atx(55296);
    this.j8_1 = _Char___init__impl__6a9atx(56319);
    this.k8_1 = _Char___init__impl__6a9atx(56320);
    this.l8_1 = _Char___init__impl__6a9atx(57343);
    this.m8_1 = _Char___init__impl__6a9atx(55296);
    this.n8_1 = _Char___init__impl__6a9atx(57343);
    this.o8_1 = 2;
    this.p8_1 = 16;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Char(value) {
    Companion_getInstance_5();
    this.o3_1 = value;
  }
  Char.prototype.q8 = function (other) {
    return Char__compareTo_impl_ypi4mb(this.o3_1, other);
  };
  Char.prototype.r8 = function (other) {
    return Char__compareTo_impl_ypi4mb_0(this, other);
  };
  Char.prototype.equals = function (other) {
    return Char__equals_impl_x6719k(this.o3_1, other);
  };
  Char.prototype.hashCode = function () {
    return Char__hashCode_impl_otmys(this.o3_1);
  };
  Char.prototype.toString = function () {
    return toString_0(this.o3_1);
  };
  function List() {
  }
  function Set() {
  }
  function Entry() {
  }
  function Map() {
  }
  function MutableEntry() {
  }
  function Collection() {
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_6();
    this.z2_1 = name;
    this.a3_1 = ordinal;
  }
  Enum.prototype.s8 = function () {
    return this.z2_1;
  };
  Enum.prototype.t8 = function () {
    return this.a3_1;
  };
  Enum.prototype.b3 = function (other) {
    return compareTo(this.a3_1, other.a3_1);
  };
  Enum.prototype.r8 = function (other) {
    return this.b3(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this.z2_1;
  };
  function toString_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_2(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var indexedObject = interfaces;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var i = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp1_elvis_lhs = i.prototype.$imask$;
      var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.u8_1.length;
      }
      var iid = i.$metadata$.iid;
      var tmp2_safe_receiver = iid;
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.implement.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = [tmp2_safe_receiver];
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = new BitMask(tmp$ret$2);
        tmp$ret$4 = tmp$ret$3;
        tmp = tmp$ret$4;
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.u8_1.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    var tmp_0 = 0;
    var tmp_1 = maxSize;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$5;
      // Inline function 'kotlin.js.implement.<anonymous>' call
      tmp$ret$5 = masks.reduce(implement$lambda(tmp_3), 0);
      tmp_2[tmp_3] = tmp$ret$5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    var resultIntArray = tmp_2;
    var tmp$ret$6;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$6 = [];
    var result = new BitMask(tmp$ret$6);
    result.u8_1 = resultIntArray;
    return result;
  }
  function BitMask(activeBits) {
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.BitMask.intArray.<anonymous>' call
    var tmp_0;
    if (activeBits.length === 0) {
      tmp_0 = new Int32Array(0);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = Math;
      tmp$ret$0 = tmp0_asDynamic;
      var max = tmp$ret$0.max.apply(null, activeBits);
      var intArray = new Int32Array((max >> 5) + 1 | 0);
      var indexedObject = activeBits;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var activeBit = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var numberIndex = activeBit >> 5;
        var positionInNumber = activeBit & 31;
        var numberWithSettledBit = 1 << positionInNumber;
        intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
      }
      tmp_0 = intArray;
    }
    tmp$ret$1 = tmp_0;
    tmp$ret$2 = tmp$ret$1;
    tmp.u8_1 = tmp$ret$2;
  }
  BitMask.prototype.v8 = function (possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > this.u8_1.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((this.u8_1[numberIndex] & numberWithSettledBit) === 0);
  };
  function implement$lambda($tmp) {
    return function (acc, it) {
      return $tmp >= it.u8_1.length ? acc : acc | it.u8_1[$tmp];
    };
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new arrayIterator$1(array);
  }
  function booleanArray(size) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'withType' call
    var tmp0_withType = fillArrayVal(Array(size), false);
    tmp0_withType.$type$ = 'BooleanArray';
    tmp$ret$0 = tmp0_withType;
    var tmp1_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp1_unsafeCast;
    return tmp$ret$1;
  }
  function arrayIterator$1($array) {
    this.x8_1 = $array;
    this.w8_1 = 0;
  }
  arrayIterator$1.prototype.i = function () {
    return !(this.w8_1 === this.x8_1.length);
  };
  arrayIterator$1.prototype.j = function () {
    var tmp;
    if (!(this.w8_1 === this.x8_1.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.w8_1;
      tmp0_this.w8_1 = tmp1 + 1 | 0;
      tmp = this.x8_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this.w8_1);
    }
    return tmp;
  };
  function get_buf() {
    init_properties_bitUtils_kt_cxtw9i();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    init_properties_bitUtils_kt_cxtw9i();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    init_properties_bitUtils_kt_cxtw9i();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    init_properties_bitUtils_kt_cxtw9i();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    init_properties_bitUtils_kt_cxtw9i();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    init_properties_bitUtils_kt_cxtw9i();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = jsBitwiseOr(obj, 0);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function init_properties_bitUtils_kt_cxtw9i() {
    if (properties_initialized_bitUtils_kt_i2bo3e) {
    } else {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new Float64Array(get_buf());
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = new Float32Array(get_buf());
      var tmp$ret$0_0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_0 = tmp0_unsafeCast_0;
      tmp$ret$1_0 = tmp$ret$0_0;
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_1 = new Int32Array(get_buf());
      var tmp$ret$0_1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_1 = tmp0_unsafeCast_1;
      tmp$ret$1_1 = tmp$ret$0_1;
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0_2;
      // Inline function 'kotlin.js.lowIndex.<anonymous>' call
      get_bufFloat64()[0] = -1.0;
      tmp$ret$0_2 = !(get_bufInt32()[0] === 0) ? 1 : 0;
      tmp$ret$1_2 = tmp$ret$0_2;
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      // Inline function 'kotlin.Char' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.charCodeAt(index);
      tmp$ret$1 = tmp0_unsafeCast;
      var tmp1_Char = tmp$ret$1;
      var tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      Companion_getInstance_5();
      var tmp0__get_code__88qj9g = _Char___init__impl__6a9atx(0);
      tmp$ret$2 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      if (tmp1_Char < tmp$ret$2) {
        tmp_0 = true;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        Companion_getInstance_5();
        var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(65535);
        tmp$ret$3 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
        tmp_0 = tmp1_Char > tmp$ret$3;
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp1_Char);
      }
      tmp$ret$4 = numberToChar(tmp1_Char);
      tmp = tmp$ret$4;
    } else {
      tmp = a.h4(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.length;
      tmp$ret$1 = tmp0_unsafeCast;
      tmp = tmp$ret$1;
    } else {
      tmp = a.g4();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.substring(startIndex, endIndex);
      tmp$ret$1 = tmp0_unsafeCast;
      tmp = tmp$ret$1;
    } else {
      tmp = a.i4(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, arrayToString$lambda, 24, null);
  }
  function contentEqualsInternal(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var a = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = other;
    var b = tmp$ret$1;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals_0(a[i], b[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var a = tmp$ret$0;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function arrayToString$lambda(it) {
    return toString_2(it);
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.a9());
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 1;
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = 1;
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.r8(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj['kotlinHashCodeValue$'];
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function toString_2(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = o.toString();
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = 1;
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = 1;
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.unsafeCast' call
        tmp$ret$0 = obj;

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          tmp_0 = 0;
        }

        tmp = tmp_0;
        break;
      default:
        tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = str;
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = instance;
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('lateinit property ' + name + ' has not been initialized');
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function lazy(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function lazy_0(mode, initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.b9_1 = new Long(0, -2147483648);
    this.c9_1 = new Long(-1, 2147483647);
    this.d9_1 = 8;
    this.e9_1 = 64;
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Long(low, high) {
    Companion_getInstance_7();
    Number_0.call(this);
    this.y8_1 = low;
    this.z8_1 = high;
  }
  Long.prototype.f9 = function (other) {
    return compare(this, other);
  };
  Long.prototype.r8 = function (other) {
    return this.f9(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.g9 = function (other) {
    return add(this, other);
  };
  Long.prototype.h9 = function (other) {
    return subtract(this, other);
  };
  Long.prototype.i9 = function (other) {
    return divide(this, other);
  };
  Long.prototype.j9 = function () {
    return this.k9().g9(new Long(1, 0));
  };
  Long.prototype.k9 = function () {
    return new Long(~this.y8_1, ~this.z8_1);
  };
  Long.prototype.l9 = function () {
    return this.y8_1;
  };
  Long.prototype.a9 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.a9();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  function get_ZERO() {
    init_properties_longjs_kt_ttk8rv();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    init_properties_longjs_kt_ttk8rv();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    init_properties_longjs_kt_ttk8rv();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    init_properties_longjs_kt_ttk8rv();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    init_properties_longjs_kt_ttk8rv();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    init_properties_longjs_kt_ttk8rv();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    var a48 = _this__u8e3s4.z8_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.z8_1 & 65535;
    var a16 = _this__u8e3s4.y8_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.y8_1 & 65535;
    var b48 = other.z8_1 >>> 16 | 0;
    var b32 = other.z8_1 & 65535;
    var b16 = other.y8_1 >>> 16 | 0;
    var b00 = other.y8_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return add(_this__u8e3s4, other.j9());
  }
  function multiply(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.z8_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.z8_1 & 65535;
    var a16 = _this__u8e3s4.y8_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.y8_1 & 65535;
    var b48 = other.z8_1 >>> 16 | 0;
    var b32 = other.z8_1 & 65535;
    var b16 = other.y8_1 >>> 16 | 0;
    var b00 = other.y8_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.i9(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.i9(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).i9(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).i9(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.i9(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    init_properties_longjs_kt_ttk8rv();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.y8_1 << numBits_0, _this__u8e3s4.z8_1 << numBits_0 | (_this__u8e3s4.y8_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.y8_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    init_properties_longjs_kt_ttk8rv();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.y8_1 >>> numBits_0 | 0 | _this__u8e3s4.z8_1 << (32 - numBits_0 | 0), _this__u8e3s4.z8_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.z8_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.z8_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.z8_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function equalsLong(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.z8_1 === other.z8_1 ? _this__u8e3s4.y8_1 === other.y8_1 : false;
  }
  function hashCode_0(l) {
    init_properties_longjs_kt_ttk8rv();
    return l.y8_1 ^ l.z8_1;
  }
  function toStringImpl(_this__u8e3s4, radix) {
    init_properties_longjs_kt_ttk8rv();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.i9(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).l9();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = rem;
        var tmp0_unsafeCast = tmp$ret$0.toString(radix);
        tmp$ret$1 = tmp0_unsafeCast;
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.i9(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).l9();
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = intval;
      var tmp1_unsafeCast = tmp$ret$2.toString(radix);
      tmp$ret$3 = tmp1_unsafeCast;
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    init_properties_longjs_kt_ttk8rv();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.z8_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.z8_1 === 0 ? _this__u8e3s4.y8_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return (_this__u8e3s4.y8_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.j9();
  }
  function lessThan(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    init_properties_longjs_kt_ttk8rv();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.y8_1 >= 0 ? _this__u8e3s4.y8_1 : 4.294967296E9 + _this__u8e3s4.y8_1;
  }
  var properties_initialized_longjs_kt_5aju7t;
  function init_properties_longjs_kt_ttk8rv() {
    if (properties_initialized_longjs_kt_5aju7t) {
    } else {
      properties_initialized_longjs_kt_5aju7t = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.l9();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 16 >> 16;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = numberToInt(a);
    tmp$ret$0 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function get_propertyRefClassMetadataCache() {
    init_properties_reflectRuntime_kt_yf9l8h();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    init_properties_reflectRuntime_kt_yf9l8h();
    var undef = undefined;
    return classMeta(undef, undef, undef, undef);
  }
  function getPropertyCallableRef(name, paramCount, superType, getter, setter) {
    init_properties_reflectRuntime_kt_yf9l8h();
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter), getInterfaceMaskFor(getter, superType));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata, imask) {
    init_properties_reflectRuntime_kt_yf9l8h();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    obj.$imask$ = imask;
    return obj;
  }
  function getKPropMetadata(paramCount, setter) {
    init_properties_reflectRuntime_kt_yf9l8h();
    return get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
  }
  function getInterfaceMaskFor(obj, superType) {
    init_properties_reflectRuntime_kt_yf9l8h();
    var tmp0_elvis_lhs = obj.$imask$;
    return tmp0_elvis_lhs == null ? implement([superType]) : tmp0_elvis_lhs;
  }
  var properties_initialized_reflectRuntime_kt_inkhwd;
  function init_properties_reflectRuntime_kt_yf9l8h() {
    if (properties_initialized_reflectRuntime_kt_inkhwd) {
    } else {
      properties_initialized_reflectRuntime_kt_inkhwd = true;
      var tmp$ret$11;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp0_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_arrayOf;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$5;
      // Inline function 'kotlin.arrayOf' call
      var tmp1_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_arrayOf;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      var tmp$ret$8;
      // Inline function 'kotlin.arrayOf' call
      var tmp2_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp2_arrayOf;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      var tmp3_arrayOf = [tmp, tmp_0, tmp$ret$8];
      var tmp$ret$10;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$9 = tmp3_arrayOf;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      propertyRefClassMetadataCache = tmp$ret$11;
    }
  }
  function classMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('class', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function createMetadata(kind, name, associatedObjectKey, associatedObjects, suspendArity, iid) {
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undefined, iid: iid};
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Array.isArray(obj);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, associatedObjectKey, associatedObjects, suspendArity) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var metadata = metadataConstructor(name, associatedObjectKey, associatedObjects, suspendArity);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces.slice());
    }
  }
  function isInterface(obj, iface) {
    var tmp;
    if (obj.$imask$ != null) {
      tmp = isInterfaceImpl(obj, iface.$metadata$.iid);
    } else {
      tmp = verySlowIsInterfaceImpl(obj, iface);
    }
    return tmp;
  }
  function isInterfaceImpl(obj, iface) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj.$imask$;
    tmp$ret$0 = tmp0_unsafeCast;
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return mask.v8(iface);
  }
  function verySlowIsInterfaceImpl(obj, iface) {
    var tmp0_elvis_lhs = searchForMetadata(obj);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metadata = tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = metadata;
    var interfaces = tmp$ret$0.associatedObjectKey;
    var tmp_0;
    if (interfaces != null) {
      var tmp_1;
      if (interfaces.indexOf(iface) != -1) {
        tmp_1 = true;
      } else {
        tmp_1 = interfaces.some(verySlowIsInterfaceImpl$lambda(iface));
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      return true;
    }
    return verySlowIsInterfaceImpl(getPrototypeOf(obj), iface);
  }
  function searchForMetadata(obj) {
    if (obj == null) {
      return null;
    }
    var metadata = obj.$metadata$;
    var currentObject = getPrototypeOf(obj);
    while (metadata == null ? currentObject != null : false) {
      var currentConstructor = currentObject.constructor;
      metadata = currentConstructor.$metadata$;
      currentObject = getPrototypeOf(currentObject);
    }
    return metadata;
  }
  function getPrototypeOf(obj) {
    return Object.getPrototypeOf(obj);
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = obj;
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:
        return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, CharSequence);
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return jsInstanceOf(a, Uint16Array) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function interfaceMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('interface', name, associatedObjectKey, associatedObjects, suspendArity, generateInterfaceId(InterfaceIdService_getInstance()));
  }
  function generateInterfaceId(_this__u8e3s4) {
    var tmp0_this = _this__u8e3s4;
    tmp0_this.m9_1 = tmp0_this.m9_1 + 1 | 0;
    return _this__u8e3s4.m9_1;
  }
  function InterfaceIdService() {
    InterfaceIdService_instance = this;
    this.m9_1 = 0;
  }
  var InterfaceIdService_instance;
  function InterfaceIdService_getInstance() {
    if (InterfaceIdService_instance == null)
      new InterfaceIdService();
    return InterfaceIdService_instance;
  }
  function objectMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('object', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function verySlowIsInterfaceImpl$lambda($iface) {
    return function (x) {
      return verySlowIsInterfaceImpl(x, $iface);
    };
  }
  function asList(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    return new ArrayList(tmp$ret$1);
  }
  function contentEquals(_this__u8e3s4, other) {
    return contentEqualsInternal(_this__u8e3s4, other);
  }
  function contentHashCode(_this__u8e3s4) {
    return contentHashCodeInternal(_this__u8e3s4);
  }
  function contentEquals_0(_this__u8e3s4, other) {
    return contentEqualsInternal(_this__u8e3s4, other);
  }
  function contentHashCode_0(_this__u8e3s4) {
    return contentHashCodeInternal(_this__u8e3s4);
  }
  function isWhitespaceImpl(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(_this__u8e3s4);
    var ch = tmp$ret$0;
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function releaseIntercepted($this) {
    var intercepted = $this.u9_1;
    if (!(intercepted == null) ? !(intercepted === $this) : false) {
      ensureNotNull($this.j2().n2(Key_getInstance())).m2(intercepted);
    }
    $this.u9_1 = CompletedContinuation_getInstance();
  }
  function CoroutineImpl(resultContinuation) {
    this.n9_1 = resultContinuation;
    this.o9_1 = 0;
    this.p9_1 = 0;
    this.q9_1 = null;
    this.r9_1 = null;
    this.s9_1 = null;
    var tmp = this;
    var tmp0_safe_receiver = this.n9_1;
    tmp.t9_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    this.u9_1 = null;
  }
  CoroutineImpl.prototype.j2 = function () {
    return ensureNotNull(this.t9_1);
  };
  CoroutineImpl.prototype.v9 = function () {
    var tmp2_elvis_lhs = this.u9_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_safe_receiver = this.j2().n2(Key_getInstance());
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2(this);
      var tmp0_also = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.coroutines.CoroutineImpl.intercepted.<anonymous>' call
      this.u9_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl.prototype.w9 = function (result) {
    var current = this;
    var tmp$ret$0;
    // Inline function 'kotlin.Result.getOrNull' call
    var tmp;
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl__bjfvqg(result);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    var currentResult = tmp$ret$0;
    var currentException = Result__exceptionOrNull_impl_p6xea9(result);
    while (true) {
      var tmp$ret$6;
      // Inline function 'kotlin.with' call
      var tmp0_with = current;
      // Inline function 'kotlin.contracts.contract' call
      if (currentException == null) {
        tmp0_with.q9_1 = currentResult;
      } else {
        tmp0_with.o9_1 = tmp0_with.p9_1;
        tmp0_with.r9_1 = currentException;
      }
      try {
        var outcome = tmp0_with.x9();
        if (outcome === get_COROUTINE_SUSPENDED())
          return Unit_getInstance();
        currentResult = outcome;
        currentException = null;
      } catch ($p) {
        currentResult = null;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        tmp$ret$1 = $p;
        currentException = tmp$ret$1;
      }
      releaseIntercepted(tmp0_with);
      var completion = ensureNotNull(tmp0_with.n9_1);
      var tmp_1;
      if (completion instanceof CoroutineImpl) {
        current = completion;
        tmp_1 = Unit_getInstance();
      } else {
        if (!(currentException == null)) {
          var tmp$ret$3;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp0_resumeWithException = ensureNotNull(currentException);
          var tmp$ret$2;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_4();
          tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
          completion.k2(tmp$ret$2);
          tmp$ret$3 = Unit_getInstance();
        } else {
          var tmp$ret$5;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp1_resume = currentResult;
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance_4();
          tmp$ret$4 = _Result___init__impl__xyqfz8(tmp1_resume);
          completion.k2(tmp$ret$4);
          tmp$ret$5 = Unit_getInstance();
        }
        return Unit_getInstance();
      }
      tmp$ret$6 = tmp_1;
    }
  };
  CoroutineImpl.prototype.k2 = function (result) {
    return this.w9(result);
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype.j2 = function () {
    throw IllegalStateException_init_$Create$_0('This continuation is already complete');
  };
  CompletedContinuation.prototype.w9 = function (result) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$_0('This continuation is already complete');
  };
  CompletedContinuation.prototype.k2 = function (result) {
    return this.w9(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function intercepted(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CoroutineImpl ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v9();
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this__u8e3s4, receiver, completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.coroutines.intrinsics.createCoroutineFromSuspendFunction' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(completion, _this__u8e3s4, receiver);
    return tmp$ret$0;
  }
  function invokeSuspendSuperTypeWithReceiver(_this__u8e3s4, receiver, completion) {
    throw new NotImplementedError('It is intrinsic method');
  }
  function _no_name_provided__qut3iv_0($completion, $this_createCoroutineUnintercepted, $receiver) {
    this.ga_1 = $completion;
    this.ha_1 = $this_createCoroutineUnintercepted;
    this.ia_1 = $receiver;
    CoroutineImpl.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__qut3iv_0.prototype.x9 = function () {
    if (this.r9_1 != null)
      throw this.r9_1;
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.intrinsics.createCoroutineUnintercepted.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this.ha_1;
    var a = tmp$ret$0;
    tmp$ret$1 = typeof a === 'function' ? a(this.ia_1, this.ga_1) : this.ha_1.ja(this.ia_1, this.ga_1);
    return tmp$ret$1;
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function Error_init_$Init$(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Init$_0(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_1(message, cause) {
    var tmp = IllegalStateException_init_$Init$_1(message, cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_1);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = lhs_hack in rhs_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = lhs_hack | rhs_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = typeof value_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack];
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj_hack instanceof jsClass_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicRef.prototype.ka = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  AtomicRef.prototype.la = function () {
    return this.kotlinx$atomicfu$value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_1(this.kotlinx$atomicfu$value);
  };
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicBoolean.prototype.ma = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  AtomicBoolean.prototype.la = function () {
    return this.kotlinx$atomicfu$value;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicInt.prototype.na = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  AtomicInt.prototype.la = function () {
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value - 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.qa(parentContext.n2(Key_getInstance_2()));
    }
    this.ta_1 = parentContext.u2(this);
  }
  AbstractCoroutine.prototype.j2 = function () {
    return this.ta_1;
  };
  AbstractCoroutine.prototype.ua = function () {
    return this.ta_1;
  };
  AbstractCoroutine.prototype.va = function () {
    return JobSupport.prototype.va.call(this);
  };
  AbstractCoroutine.prototype.wa = function (value) {
  };
  AbstractCoroutine.prototype.xa = function (cause, handled) {
  };
  AbstractCoroutine.prototype.ya = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.za = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.xa(state.ab_1, state.cb());
    } else {
      this.wa((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.k2 = function (result) {
    var state = this.db(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.eb(state);
  };
  AbstractCoroutine.prototype.eb = function (state) {
    return this.fb(state);
  };
  AbstractCoroutine.prototype.gb = function (exception) {
    handleCoroutineException(this.ta_1, exception);
  };
  AbstractCoroutine.prototype.hb = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.ta_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.hb.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.hb.call(this);
  };
  AbstractCoroutine.prototype.ib = function (start, receiver, block) {
    start.lb(block, receiver, this);
  };
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.jc() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.ib(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.nc = function () {
    var tmp = this.oc();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.uc_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.rb = function () {
    startCoroutineCancellable_0(this.uc_1, this);
  };
  function CancellableContinuationImpl() {
  }
  CancellableContinuationImpl.prototype.xc = function () {
    var tmp0_elvis_lhs = this.wc_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.yc();
    this.wc_1 = NonDisposableHandle_getInstance();
  };
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
    this.ab_1 = cause;
    this.bb_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.cb = function () {
    return this.bb_1.kotlinx$atomicfu$value;
  };
  CompletedExceptionally.prototype.zc = function () {
    return this.bb_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.ab_1 + ']';
  };
  function toState(_this__u8e3s4, onCancellation) {
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
    return toState(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.ad_1 = result;
    this.bd_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString_1(this.ad_1) + ', onCancellation=' + this.bd_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.ad_1 == null ? 0 : hashCode(this.ad_1);
    result = imul(result, 31) + hashCode(this.bd_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals_0(this.ad_1, tmp0_other_with_cast.ad_1))
      return false;
    if (!equals_0(this.bd_1, tmp0_other_with_cast.bd_1))
      return false;
    return true;
  };
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance_0 = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance_0() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.dd = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.l2 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.m2 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.ld();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.n2(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.md(context, exception);
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
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_1() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
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
  function CoroutineScope() {
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.ua = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
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
  CoroutineStart.prototype.lb = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.a3_1;
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
  CoroutineStart.prototype.jc = function () {
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
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.od_1 = new Long(0, 0);
    this.pd_1 = false;
    this.qd_1 = null;
  }
  EventLoop.prototype.rd = function () {
    var tmp0_elvis_lhs = this.qd_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.vd();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.xd();
    return true;
  };
  EventLoop.prototype.yd = function (task) {
    var tmp0_elvis_lhs = this.qd_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.qd_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.zd(task);
  };
  EventLoop.prototype.ae = function () {
    return this.od_1.f9(delta(this, true)) >= 0;
  };
  EventLoop.prototype.be = function () {
    var tmp0_safe_receiver = this.qd_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ce();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.de = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.od_1 = tmp0_this.od_1.g9(delta(this, unconfined));
    if (!unconfined)
      this.pd_1 = true;
  };
  EventLoop.prototype.ee = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.od_1 = tmp0_this.od_1.h9(delta(this, unconfined));
    if (this.od_1.f9(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.pd_1) {
      this.fe();
    }
  };
  EventLoop.prototype.fe = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ge_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.he = function () {
    var tmp0_elvis_lhs = this.ge_1.je();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ge_1.ke(tmp0_also);
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
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$_0(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_2() {
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
  NonDisposableHandle.prototype.yc = function () {
  };
  NonDisposableHandle.prototype.ac = function (cause) {
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
    this.le_1 = isActive;
  }
  Empty.prototype.va = function () {
    return this.le_1;
  };
  Empty.prototype.me = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.le_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.va = function () {
    return true;
  };
  NodeList.prototype.me = function () {
    return this;
  };
  NodeList.prototype.qe = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.f8('List{');
    tmp0_apply.f8(state);
    tmp0_apply.f8('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.re_1;
    while (!equals_0(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.f8(', ');
        }
        tmp0_apply.e8(tmp0__anonymous__q1qw7t);
      }
      cur = cur.re_1;
    }
    tmp0_apply.f8(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.qe('Active') : LinkedListHead.prototype.toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.af = function () {
    var tmp = this.ze_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.va = function () {
    return true;
  };
  JobNode.prototype.me = function () {
    return null;
  };
  JobNode.prototype.yc = function () {
    return this.af().xb(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.af()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.gf_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.gf_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$_0(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ab_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.hf();
    var exceptions = state.if(proposedException);
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
      var handled = cancelParent($this, finalException) ? true : $this.hc(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).zc();
      }
    }
    if (!wasCancelling) {
      $this.ec(finalException);
    }
    $this.za(finalState);
    var casSuccess = $this.oa_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.k()) {
      if (state.hf()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.ya() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
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
    var first = exceptions.l(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.h();
        while (tmp0_iterator_0.i()) {
          var element_0 = tmp0_iterator_0.j();
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
    var tmp0_iterator = exceptions.h();
    while (tmp0_iterator.i()) {
      var exception = tmp0_iterator.j();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.e(unwrapped);
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
    if (!$this.oa_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.ec(null);
    $this.za(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.nb();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.yc();
      $this.mb(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ab_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.gb(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.me();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.ec(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.re_1;
    while (!equals_0(cur, list)) {
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
      cur = cur.re_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.gb(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.fc())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.nb();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.ac(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.re_1;
    while (!equals_0(cur, _this__u8e3s4)) {
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
      cur = cur.re_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.gb(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.le_1)
        return 0;
      if (!$this.oa_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.rb();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.oa_1.atomicfu$compareAndSet(state, state.jf_1))
          return -1;
        $this.rb();
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
    node.ze_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.ob() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.ue(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.le_1 ? list : new InactiveNodeList(list);
    $this.oa_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.cf(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.re_1;
    var list = tmp$ret$0;
    $this.oa_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.ob();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.kf();
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
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.ya() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).cc();
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
        var tmp0__anonymous__q1qw7t = $this.ob();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.lf())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.hf();
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
            tmp0__anonymous__q1qw7t.mf(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.nf();
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
            notifyCancelling($this, tmp0__anonymous__q1qw7t.df_1, tmp1_safe_receiver);
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
            if (tmp0__anonymous__q1qw7t.va()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString_1(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$_0(toString_2(tmp1_error));
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
    var tmp1_elvis_lhs = state.me();
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
          throw IllegalStateException_init_$Create$_0(toString_2(tmp0_error));
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
    if (!$this.oa_1.atomicfu$compareAndSet(state, cancelling))
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
    if (finishing.kf())
      return get_COMPLETING_ALREADY();
    finishing.of(true);
    if (!(finishing === state)) {
      if (!$this.oa_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.hf();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.mf(tmp0_safe_receiver.ab_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.nf();
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
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ab_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.me();
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
        var tmp = child_0.tf_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.wb(false, false, tmp$ret$1, 1, null);
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
    $this.fb(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.te_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.se_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.re_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.te_1;
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
      tmp = state.hf() ? 'Cancelling' : state.kf() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.va() ? 'Active' : 'New';
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
    this.df_1 = list;
    this.ef_1 = atomic$boolean$1(isCompleting);
    this.ff_1 = atomic$ref$1(rootCause);
    this.gf_1 = atomic$ref$1(null);
  }
  Finishing.prototype.me = function () {
    return this.df_1;
  };
  Finishing.prototype.of = function (value) {
    this.ef_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.kf = function () {
    return this.ef_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.uf = function (value) {
    this.ff_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.nf = function () {
    return this.ff_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.lf = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.hf = function () {
    return !(this.nf() == null);
  };
  Finishing.prototype.va = function () {
    return this.nf() == null;
  };
  Finishing.prototype.if = function (proposedException) {
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
        tmp0_also.e(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString_1(eh);
          throw IllegalStateException_init_$Create$_0(toString_2(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.nf();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.s4(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals_0(proposedException, rootCause) : false) {
      list.e(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.mf = function (exception) {
    var rootCause = this.nf();
    if (rootCause == null) {
      this.uf(exception);
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
        tmp0_apply.e(eh);
        tmp0_apply.e(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).e(exception);
        } else {
          var tmp1_error = 'State is ' + toString_1(eh);
          throw IllegalStateException_init_$Create$_0(toString_2(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.hf() + ', completing=' + this.kf() + ', rootCause=' + this.nf() + ', exceptions=' + toString_1(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.df_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.zf_1 = parent;
    this.ag_1 = state;
    this.bg_1 = child;
    this.cg_1 = proposedUpdate;
  }
  ChildCompletion.prototype.dg = function (cause) {
    continueCompleting(this.zf_1, this.ag_1, this.bg_1, this.cg_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.dg(cause);
  };
  function JobSupport(active) {
    this.oa_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.pa_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.x = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype.mb = function (value) {
    this.pa_1.kotlinx$atomicfu$value = value;
  };
  JobSupport.prototype.nb = function () {
    return this.pa_1.kotlinx$atomicfu$value;
  };
  JobSupport.prototype.qa = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.mb(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.qb();
    var handle = parent.dc(this);
    this.mb(handle);
    if (this.pb()) {
      handle.yc();
      this.mb(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.ob = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.oa_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.eg(this);
    }
  };
  JobSupport.prototype.va = function () {
    var state = this.ob();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.va();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.pb = function () {
    var tmp = this.ob();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.qb = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.ob();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.rb = function () {
  };
  JobSupport.prototype.sb = function () {
    var state = this.ob();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.nf();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.tb(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$_0(toString_2(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$_0(toString_2(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.ub(state.ab_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.tb = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.ya() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.ub = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.tb(_this__u8e3s4, message);
  };
  JobSupport.prototype.pc = function (handler) {
    return this.vb(false, true, handler);
  };
  JobSupport.prototype.vb = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.ob();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.le_1) {
            if (this.oa_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.me();
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
                rootCause = tmp0__anonymous__q1qw7t.nf();
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
                    tmp_2 = !tmp0__anonymous__q1qw7t.kf();
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
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ab_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.xb = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.ob();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.oa_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.me() == null)) {
            node.bf();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.yb = function () {
    return false;
  };
  JobSupport.prototype.ya = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.zb = function (parentJob) {
    this.bc(parentJob);
  };
  JobSupport.prototype.ac = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.bc(cause) ? this.gc() : false;
  };
  JobSupport.prototype.bc = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.yb()) {
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
      this.fb(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.cc = function () {
    var state = this.ob();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.nf();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.ab_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString_1(state);
          throw IllegalStateException_init_$Create$_0(toString_2(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.db = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.ob();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_1('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_1(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  JobSupport.prototype.dc = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.wb(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.gb = function (exception) {
    throw exception;
  };
  JobSupport.prototype.ec = function (cause) {
  };
  JobSupport.prototype.fc = function () {
    return false;
  };
  JobSupport.prototype.gc = function () {
    return true;
  };
  JobSupport.prototype.hc = function (exception) {
    return false;
  };
  JobSupport.prototype.za = function (state) {
  };
  JobSupport.prototype.fb = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.ic() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.ic = function () {
    return this.hb() + '{' + stateString(this, this.ob()) + '}';
  };
  JobSupport.prototype.hb = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.qc = function () {
    var state = this.ob();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  JobSupport.prototype.oc = function () {
    var state = this.ob();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.ab_1;
    return unboxState(state);
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
    this.jf_1 = list;
  }
  InactiveNodeList.prototype.me = function () {
    return this.jf_1;
  };
  InactiveNodeList.prototype.va = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.jf_1.qe('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.tf_1 = childJob;
  }
  ChildHandleNode.prototype.dg = function (cause) {
    return this.tf_1.zb(this.af());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.dg(cause);
  };
  ChildHandleNode.prototype.ac = function (cause) {
    return this.af().ac(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.jg_1 = handler;
    this.kg_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.dg = function (cause) {
    if (this.kg_1.atomicfu$compareAndSet(0, 1))
      this.jg_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.dg(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.pg_1 = handler;
  }
  InvokeOnCompletion.prototype.dg = function (cause) {
    return this.pg_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.dg(cause);
  };
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qg_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.qg_1 = state;
  }
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
    var tmp0_elvis_lhs = this.tg();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.tg = function () {
    var main = Dispatchers_getInstance().yg();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.sg();
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
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.dd = function (context) {
    return false;
  };
  Unconfined.prototype.ed = function (context, block) {
    var yieldContext = context.n2(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.bh_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$_0('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
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
  function Key_getInstance_3() {
    if (Key_instance_3 == null)
      new Key_3();
    return Key_instance_3;
  }
  function ensureCapacity($this) {
    var currentSize = $this.sd_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.sd_1;
    var tmp1_copyInto = $this.td_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.sd_1;
    var tmp4_copyInto = $this.sd_1.length - $this.td_1 | 0;
    var tmp5_copyInto = $this.td_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.sd_1 = newElements;
    $this.td_1 = 0;
    $this.ud_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.sd_1 = tmp$ret$0;
    this.td_1 = 0;
    this.ud_1 = 0;
  }
  ArrayQueue.prototype.ce = function () {
    return this.td_1 === this.ud_1;
  };
  ArrayQueue.prototype.zd = function (element) {
    this.sd_1[this.ud_1] = element;
    this.ud_1 = (this.ud_1 + 1 | 0) & (this.sd_1.length - 1 | 0);
    if (this.ud_1 === this.td_1) {
      ensureCapacity(this);
    }
  };
  ArrayQueue.prototype.vd = function () {
    if (this.td_1 === this.ud_1)
      return null;
    var element = this.sd_1[this.td_1];
    this.sd_1[this.td_1] = null;
    this.td_1 = (this.td_1 + 1 | 0) & (this.sd_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function OpDescriptor() {
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
      var state = toState(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.gd_1.dd(tmp1_resumeCancellableWith.j2())) {
        tmp1_resumeCancellableWith.id_1 = state;
        tmp1_resumeCancellableWith.wd_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.gd_1.ed(tmp1_resumeCancellableWith.j2(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().he();
          if (false ? eventLoop.be() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.ae()) {
            tmp1_resumeCancellableWith.id_1 = state;
            tmp1_resumeCancellableWith.wd_1 = tmp0_executeUnconfined;
            eventLoop.yd(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.de(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.j2().n2(Key_getInstance_2());
                if (!(job == null) ? !job.va() : false) {
                  var cause = job.sb();
                  tmp1_resumeCancellableWith.ch(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance_4();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.k2(tmp$ret$1);
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
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.hd_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.jd_1;
                tmp1_resumeCancellableWith.hd_1.k2(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.rd())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.dh($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.ee(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.k2(result);
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
    var tmp = $this.kd_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.gd_1 = dispatcher;
    this.hd_1 = continuation;
    this.id_1 = get_UNDEFINED();
    this.jd_1 = threadContextElements(this.j2());
    this.kd_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.j2 = function () {
    return this.hd_1.j2();
  };
  DispatchedContinuation.prototype.eh = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.kd_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.ld = function () {
    this.eh();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.xc();
    }
  };
  DispatchedContinuation.prototype.fh = function () {
    var state = this.id_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.id_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.gh = function () {
    return this;
  };
  DispatchedContinuation.prototype.k2 = function (result) {
    var context = this.hd_1.j2();
    var state = toState$default(result, null, 1, null);
    if (this.gd_1.dd(context)) {
      this.id_1 = state;
      this.wd_1 = get_MODE_ATOMIC();
      this.gd_1.ed(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().he();
        if (false ? eventLoop.be() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.ae()) {
          this.id_1 = state;
          this.wd_1 = tmp0_executeUnconfined;
          eventLoop.yd(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.de(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.j2();
            var tmp1_withCoroutineContext = this.jd_1;
            this.hd_1.k2(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.rd())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.dh($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.ee(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.ch = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.bd_1(cause);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.gd_1 + ', ' + toDebugString(this.hd_1) + ']';
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
    this.wd_1 = resumeMode;
  }
  DispatchedTask.prototype.ch = function (takenState, cause) {
  };
  DispatchedTask.prototype.hh = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.ih = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ab_1;
  };
  DispatchedTask.prototype.xd = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.gh();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.hd_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.jd_1;
      var context = continuation.j2();
      var state = this.fh();
      var exception = this.ih(state);
      var job = (exception == null ? get_isCancellableMode(this.wd_1) : false) ? context.n2(Key_getInstance_2()) : null;
      var tmp_0;
      if (!(job == null) ? !job.va() : false) {
        var cause = job.sb();
        this.ch(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_4();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.k2(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance_4();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.k2(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.hh(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance_4();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.k2(tmp$ret$3);
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
        var tmp0_success_0 = Companion_getInstance_4();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_4();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.dh(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.dh = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.gh().j2(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function Symbol(symbol) {
    this.jh_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.jh_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_4();
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
    var tmp0_failure = Companion_getInstance_4();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.k2(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_4();
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
        var tmp0_withCoroutineContext = completion.j2();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.ja(receiver, actualCompletion);
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
          var tmp0_failure = Companion_getInstance_4();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.k2(tmp$ret$6);
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
        var tmp0_success = Companion_getInstance_4();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.k2(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
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
  function toDebugString(_this__u8e3s4) {
    return toString_2(_this__u8e3s4);
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
    var combined = _this__u8e3s4.ua().u2(context);
    return (!(combined === Dispatchers_getInstance().ug_1) ? combined.n2(Key_getInstance()) == null : false) ? combined.u2(Dispatchers_getInstance().ug_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).z6();
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
    this.ug_1 = createDefaultDispatcher();
    this.vg_1 = Unconfined_getInstance();
    this.wg_1 = new JsMainDispatcher(this.ug_1, false);
    this.xg_1 = null;
  }
  Dispatchers.prototype.yg = function () {
    var tmp0_elvis_lhs = this.xg_1;
    return tmp0_elvis_lhs == null ? this.wg_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.lh_1 = delegate;
    this.mh_1 = invokeImmediately;
    this.nh_1 = this.mh_1 ? this : new JsMainDispatcher(this.lh_1, true);
  }
  JsMainDispatcher.prototype.sg = function () {
    return this.nh_1;
  };
  JsMainDispatcher.prototype.dd = function (context) {
    return !this.mh_1;
  };
  JsMainDispatcher.prototype.ed = function (context, block) {
    return this.lh_1.ed(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.tg();
    return tmp0_elvis_lhs == null ? this.lh_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.ed = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$_0('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.sh_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.sh_1;
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
        tmp_1 = equals_0(other.sh_1, this.sh_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals_0(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.sh_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.vh = function () {
    process.nextTick(this.ei_1.bi_1);
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
  SetTimeoutDispatcher.prototype.vh = function () {
    setTimeout(this.ei_1.bi_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.mi();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.ci_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.bi_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.ni = function () {
    this.ci_1.vh();
  };
  ScheduledMessageQueue.prototype.oi = function () {
    setTimeout(this.bi_1, 0);
  };
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.ei_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.ed = function (context, block) {
    this.ei_1.pi(block);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.ki_1 = 16;
    this.li_1 = false;
  }
  MessageQueue.prototype.pi = function (element) {
    this.zd(element);
    if (!this.li_1) {
      this.li_1 = true;
      this.ni();
    }
  };
  MessageQueue.prototype.mi = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.ki_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.vd();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.xd();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.ce()) {
        this.li_1 = false;
      } else {
        this.oi();
      }
    }
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.ri_1 = window_0;
    this.si_1 = new WindowMessageQueue(this.ri_1);
  }
  WindowDispatcher.prototype.ed = function (context, block) {
    return this.si_1.pi(block);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.yi_1 ? event.data == this$0.zi_1 : false) {
        event.stopPropagation();
        this$0.mi();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.mi();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.yi_1 = window_0;
    this.zi_1 = 'dispatchCoroutine';
    this.yi_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.ni = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.oi = function () {
    this.yi_1.postMessage(this.zi_1, '*');
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
  function asPromise(_this__u8e3s4) {
    var promise = new Promise(asPromise$lambda(_this__u8e3s4));
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = promise;
    tmp$ret$0.deferred = _this__u8e3s4;
    return promise;
  }
  function asPromise$lambda$lambda($this_asPromise, $reject, $resolve) {
    return function (it) {
      var e = $this_asPromise.qc();
      var tmp;
      if (!(e == null)) {
        tmp = $reject(e);
      } else {
        tmp = $resolve($this_asPromise.nc());
      }
      return Unit_getInstance();
    };
  }
  function asPromise$lambda($this_asPromise) {
    return function (resolve, reject) {
      $this_asPromise.pc(asPromise$lambda$lambda($this_asPromise, reject, resolve));
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
  function identitySet(expectedSize) {
    return HashSet_init_$Create$_0(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  function LinkedListNode() {
    this.re_1 = this;
    this.se_1 = this;
    this.te_1 = false;
  }
  LinkedListNode.prototype.ue = function (node) {
    var prev = this.se_1;
    node.re_1 = this;
    node.se_1 = prev;
    prev.re_1 = node;
    this.se_1 = node;
  };
  LinkedListNode.prototype.bf = function () {
    return this.ve();
  };
  LinkedListNode.prototype.ve = function () {
    if (this.te_1)
      return false;
    var prev = this.se_1;
    var next = this.re_1;
    prev.re_1 = next;
    next.se_1 = prev;
    this.te_1 = true;
    return true;
  };
  LinkedListNode.prototype.cf = function (node) {
    if (!(this.re_1 === this))
      return false;
    this.ue(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.ie_1 = null;
  }
  CommonThreadLocal.prototype.je = function () {
    var tmp = this.ie_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.ke = function (value) {
    this.ie_1 = value;
  };
  var PACKET_MAX_COPY_SIZE;
  var DISABLE_SFG;
  function get_serializersStore() {
    init_properties_DefaultJs_kt_5pqbey();
    return serializersStore;
  }
  var serializersStore;
  var properties_initialized_DefaultJs_kt_mit67a;
  function init_properties_DefaultJs_kt_5pqbey() {
    if (properties_initialized_DefaultJs_kt_mit67a) {
    } else {
      properties_initialized_DefaultJs_kt_mit67a = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      serializersStore = tmp$ret$0;
    }
  }
  function KSerializer() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.cj_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, Object.create(PolymorphicSerializer.prototype));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer(StringCompanionObject_getInstance()).aj();
      $this$buildSerialDescriptor.mj('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.bj_1.z6() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.mj('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.gj_1 = this$0.cj_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.bj_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.bj_1 = baseClass;
    this.cj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.dj_1 = lazy_0(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.aj = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.dj_1.a1();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.bj_1 + ')';
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.aj();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.oj_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, Object.create(SealedClassSerializer.prototype));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp0_forEach = this$0.rj_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.y().h();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$1 = element.x();
        var name = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$2 = element.a1();
        var serializer = tmp$ret$2;
        var tmp = serializer.aj();
        $this$buildSerialDescriptor.mj(name, tmp, null, false, 12, null);
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer(StringCompanionObject_getInstance()).aj();
      $this$buildSerialDescriptor.mj('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Sealed<' + this$0.nj_1.z6() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor$default(tmp_0, tmp_1, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0), 4, null);
      $this$buildSerialDescriptor.mj('value', elementDescriptor, null, false, 12, null);
      $this$buildSerialDescriptor.gj_1 = this$0.oj_1;
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function _no_name_provided__qut3iv_1($tmp0_groupingBy) {
    this.sj_1 = $tmp0_groupingBy;
  }
  _no_name_provided__qut3iv_1.prototype.tj = function () {
    return this.sj_1.h();
  };
  _no_name_provided__qut3iv_1.prototype.uj = function (element) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    tmp$ret$0 = element.a1().aj().vj();
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv_1.prototype.wj = function (element) {
    return this.uj((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.nj_1 = baseClass;
    this.oj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pj_1 = lazy_0(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.nj_1.z6() + ' should be marked @Serializable');
    }
    this.qj_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.aggregate' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.groupingBy' call
    var tmp0_groupingBy = this.qj_1.y();
    tmp$ret$0 = new _no_name_provided__qut3iv_1(tmp0_groupingBy);
    var tmp1_aggregate = tmp$ret$0;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.aggregateTo' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    var tmp2_aggregateTo = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tmp1_aggregate.tj();
    tmp$ret$2 = tmp0_iterator;
    var tmp0_iterator_0 = tmp$ret$2;
    while (tmp0_iterator_0.i()) {
      var e = tmp0_iterator_0.j();
      var key = tmp1_aggregate.wj(e);
      var accumulator = tmp2_aggregateTo.k1(key);
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = accumulator == null ? !tmp2_aggregateTo.h1(key) : false;
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var tmp0_error = "Multiple sealed subclasses of '" + this.nj_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.x() + "', '" + e.x() + "'");
        throw IllegalStateException_init_$Create$_0(toString_2(tmp0_error));
      }
      tmp$ret$3 = e;
      var tmp1_set = tmp$ret$3;
      tmp2_aggregateTo.g2(key, tmp1_set);
    }
    tmp$ret$4 = tmp2_aggregateTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp3_mapValues = tmp$ret$5;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp3_mapValues.f()));
    var tmp$ret$8;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp3_mapValues.y();
    var tmp0_iterator_1 = tmp0_associateByTo.h();
    while (tmp0_iterator_1.i()) {
      var element = tmp0_iterator_1.j();
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$6 = element.x();
      var tmp_2 = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      tmp$ret$7 = element.a1().a1();
      tmp1_mapValuesTo.g2(tmp_2, tmp$ret$7);
    }
    tmp$ret$8 = tmp1_mapValuesTo;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp_1.rj_1 = tmp$ret$10;
  }
  SealedClassSerializer.prototype.aj = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.pj_1.a1();
    return tmp$ret$0;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.aj();
    }, null);
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.f() === 1 ? "Field '" + missingFields.l(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.xj_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.aj().yj()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.zj_1 = original;
    this.ak_1 = kClass;
    this.bk_1 = this.zj_1.vj() + '<' + this.ak_1.z6() + '>';
  }
  ContextDescriptor.prototype.ck = function () {
    return this.zj_1.ck();
  };
  ContextDescriptor.prototype.yj = function () {
    return this.zj_1.yj();
  };
  ContextDescriptor.prototype.dk = function () {
    return this.zj_1.dk();
  };
  ContextDescriptor.prototype.ek = function (index) {
    return this.zj_1.ek(index);
  };
  ContextDescriptor.prototype.fk = function (index) {
    return this.zj_1.fk(index);
  };
  ContextDescriptor.prototype.vj = function () {
    return this.bk_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals_0(this.zj_1, another.zj_1) ? another.ak_1.equals(this.ak_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.ak_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.bk_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.ak_1 + ', original: ' + this.zj_1 + ')';
  };
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_2(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.hk_1 = $this_elementDescriptors;
    this.gk_1 = $this_elementDescriptors.ck();
  }
  elementDescriptors$1$1.prototype.i = function () {
    return this.gk_1 > 0;
  };
  elementDescriptors$1$1.prototype.j = function () {
    var tmp = this.hk_1.ck();
    var tmp0_this = this;
    var tmp1 = tmp0_this.gk_1;
    tmp0_this.gk_1 = tmp1 - 1 | 0;
    return this.hk_1.ek(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_2($this_elementDescriptors) {
    this.ik_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv_2.prototype.h = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.ik_1);
    return tmp$ret$0;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals_0(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString_2(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.hj_1.f(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ej_1 = serialName;
    this.fj_1 = false;
    this.gj_1 = emptyList();
    this.hj_1 = ArrayList_init_$Create$();
    this.ij_1 = HashSet_init_$Create$();
    this.jj_1 = ArrayList_init_$Create$();
    this.kj_1 = ArrayList_init_$Create$();
    this.lj_1 = ArrayList_init_$Create$();
  }
  ClassSerialDescriptorBuilder.prototype.jk = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.ij_1.e(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered in " + this.ej_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.hj_1;
    tmp1_plusAssign.e(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.jj_1;
    tmp2_plusAssign.e(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.kj_1;
    tmp3_plusAssign.e(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.lj_1;
    tmp4_plusAssign.e(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.mj = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.jk(elementName, descriptor, annotations, isOptional);
  };
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.vk_1.a1();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.uk_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.fk(it) + ': ' + this$0.ek(it).vj();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.kk_1 = serialName;
    this.lk_1 = kind;
    this.mk_1 = elementsCount;
    this.nk_1 = builder.gj_1;
    this.ok_1 = toHashSet(builder.hj_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.hj_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.pk_1 = tmp$ret$0;
    this.qk_1 = compactArray(builder.jj_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.kj_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.rk_1 = tmp$ret$1;
    this.sk_1 = toBooleanArray(builder.lj_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.pk_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.v1_1, item.u1_1);
      tmp0_mapTo.e(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.tk_1 = toMap(tmp$ret$4);
    this.uk_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.vk_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.vj = function () {
    return this.kk_1;
  };
  SerialDescriptorImpl.prototype.dk = function () {
    return this.lk_1;
  };
  SerialDescriptorImpl.prototype.ck = function () {
    return this.mk_1;
  };
  SerialDescriptorImpl.prototype.wk = function () {
    return this.ok_1;
  };
  SerialDescriptorImpl.prototype.fk = function (index) {
    return getChecked(this.pk_1, index);
  };
  SerialDescriptorImpl.prototype.ek = function (index) {
    return getChecked(this.qk_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vj() === other.vj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.uk_1, tmp0__anonymous__q1qw7t.uk_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ck();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ek(index).vj() === other.ek(index).vj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals_0(this.ek(index).dk(), other.ek(index).dk())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.mk_1);
    var tmp_0 = this.kk_1 + '(';
    return joinToString$default_0(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).z6());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED_0() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED_0();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function CompositeDecoder() {
  }
  function CompositeEncoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.vj = function () {
    return 'kotlin.collections.ArrayList';
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.vj = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.ll_1 = elementDescriptor;
    this.ml_1 = 1;
  }
  ListLikeDescriptor.prototype.dk = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.ck = function () {
    return this.ml_1;
  };
  ListLikeDescriptor.prototype.fk = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.ek = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.vj() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    return this.ll_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals_0(this.ll_1, other.ll_1) ? this.vj() === other.vj() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.ll_1), 31) + getStringHashCode(this.vj()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.vj() + '(' + this.ll_1 + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ql_1 = new ArrayListClassDesc(element.aj());
  }
  ArrayListSerializer.prototype.aj = function () {
    return this.ql_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.sl_1 = kClass;
    this.tl_1 = new ArrayClassDesc(eSerializer.aj());
  }
  ReferenceArraySerializer.prototype.aj = function () {
    return this.tl_1;
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ul_1 = elementSerializer;
  }
  function AbstractCollectionSerializer() {
  }
  function NullableSerializer(serializer) {
    this.vl_1 = serializer;
    this.wl_1 = new SerialDescriptorForNullable(this.vl_1.aj());
  }
  NullableSerializer.prototype.aj = function () {
    return this.wl_1;
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals_0(this.vl_1, other.vl_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.vl_1);
  };
  function SerialDescriptorForNullable(original) {
    this.xl_1 = original;
    this.yl_1 = this.xl_1.vj() + '?';
    this.zl_1 = cachedSerialNames(this.xl_1);
  }
  SerialDescriptorForNullable.prototype.ck = function () {
    return this.xl_1.ck();
  };
  SerialDescriptorForNullable.prototype.dk = function () {
    return this.xl_1.dk();
  };
  SerialDescriptorForNullable.prototype.ek = function (index) {
    return this.xl_1.ek(index);
  };
  SerialDescriptorForNullable.prototype.fk = function (index) {
    return this.xl_1.fk(index);
  };
  SerialDescriptorForNullable.prototype.vj = function () {
    return this.yl_1;
  };
  SerialDescriptorForNullable.prototype.wk = function () {
    return this.zl_1;
  };
  SerialDescriptorForNullable.prototype.yj = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals_0(this.xl_1, other.xl_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.xl_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.xl_1), 31);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.wk();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.ck());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ck();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.fk(i);
        result.e(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.k();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.fk(i);
          missingFields.e(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.vj());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.jm_1.a1();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.lm_1.a1();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.em_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.em_1[i];
        indices.g2(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bm_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mm();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bm_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nm();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.i()) {
          var item = tmp0_iterator.j();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.aj();
          tmp0_mapTo.e(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.om());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.fk(i) + ': ' + this$0.ek(i).vj();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.am_1 = serialName;
    this.bm_1 = generatedSerializer;
    this.cm_1 = elementsCount;
    this.dm_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.cm_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.em_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.cm_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.fm_1 = tmp$ret$2;
    this.gm_1 = null;
    this.hm_1 = booleanArray(this.cm_1);
    this.im_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.jm_1 = lazy_0(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.km_1 = lazy_0(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.lm_1 = lazy_0(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.vj = function () {
    return this.am_1;
  };
  PluginGeneratedSerialDescriptor.prototype.ck = function () {
    return this.cm_1;
  };
  PluginGeneratedSerialDescriptor.prototype.dk = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.wk = function () {
    return this.im_1.l1();
  };
  PluginGeneratedSerialDescriptor.prototype.om = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.km_1.a1();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.pm = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.dm_1 = tmp0_this.dm_1 + 1 | 0;
    this.em_1[tmp0_this.dm_1] = name;
    this.hm_1[this.dm_1] = isOptional;
    this.fm_1[this.dm_1] = null;
    if (this.dm_1 === (this.cm_1 - 1 | 0)) {
      this.im_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.ek = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).aj();
  };
  PluginGeneratedSerialDescriptor.prototype.fk = function (index) {
    return getChecked(this.em_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vj() === other.vj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.om(), tmp0__anonymous__q1qw7t.om());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ck();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ek(index).vj() === other.ek(index).vj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals_0(this.ek(index).dk(), other.ek(index).dk())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.cm_1);
    var tmp_0 = this.vj() + '(';
    return joinToString$default_0(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.vj());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.vj();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.h();
    while (tmp0_iterator_0.i()) {
      var element_0 = tmp0_iterator_0.j();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.dk();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.om();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.qm_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.aj = function () {
    return this.qm_1;
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.rm_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.aj = function () {
    return this.rm_1;
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$_0('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.sm_1 = serialName;
    this.tm_1 = kind;
  }
  PrimitiveSerialDescriptor.prototype.vj = function () {
    return this.sm_1;
  };
  PrimitiveSerialDescriptor.prototype.dk = function () {
    return this.tm_1;
  };
  PrimitiveSerialDescriptor.prototype.ck = function () {
    return 0;
  };
  PrimitiveSerialDescriptor.prototype.fk = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.ek = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.sm_1 + ')';
  };
  PrimitiveSerialDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.sm_1 === other.sm_1 ? equals_0(this.tm_1, other.tm_1) : false)
      return true;
    return false;
  };
  PrimitiveSerialDescriptor.prototype.hashCode = function () {
    return getStringHashCode(this.sm_1) + imul(31, this.tm_1.hashCode()) | 0;
  };
  function get_EmptySerializersModuleLegacyJs() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.vm_1 = class2ContextualFactory;
    this.wm_1 = polyBase2Serializers;
    this.xm_1 = polyBase2DefaultSerializerProvider;
    this.ym_1 = polyBase2NamedSerializers;
    this.zm_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.um = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.vm_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.y().h();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.x();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.a1();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.cn_1;
        collector.dn(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.bn(kclass, serial.an_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.wm_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.y().h();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.i()) {
      var element_0 = tmp0_iterator_0.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.x();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.a1();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.y().h();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.i()) {
        var element_1 = tmp0_iterator_1.j();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.x();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.a1();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.en(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.xm_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.y().h();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.i()) {
      var element_2 = tmp0_iterator_2.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.x();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.a1();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.fn(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.zm_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.y().h();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.i()) {
      var element_3 = tmp0_iterator_3.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.x();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.a1();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.gn(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, null, 8191, null), EmptySerializersModule_0());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.hn_1 = configuration;
    this.in_1 = serializersModule;
    this.jn_1 = new DescriptorSchemaCache();
  }
  Json.prototype.kn = function () {
    return this.in_1;
  };
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.zn();
    return new JsonImpl(conf, builder.yn_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.ln_1 = json.hn_1.ao_1;
    this.mn_1 = json.hn_1.fo_1;
    this.nn_1 = json.hn_1.bo_1;
    this.on_1 = json.hn_1.co_1;
    this.pn_1 = json.hn_1.do_1;
    this.qn_1 = json.hn_1.eo_1;
    this.rn_1 = json.hn_1.go_1;
    this.sn_1 = json.hn_1.ho_1;
    this.tn_1 = json.hn_1.io_1;
    this.un_1 = json.hn_1.jo_1;
    this.vn_1 = json.hn_1.ko_1;
    this.wn_1 = json.hn_1.lo_1;
    this.xn_1 = json.hn_1.mo_1;
    this.yn_1 = json.kn();
  }
  JsonBuilder.prototype.zn = function () {
    if (this.tn_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.un_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message));
      }
    }
    if (!this.qn_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.rn_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_2(message_0));
      }
    } else if (!(this.rn_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.rn_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals_0(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals_0(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals_0(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals_0(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.rn_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString_2(message_1));
      }
    }
    return new JsonConfiguration(this.ln_1, this.nn_1, this.on_1, this.pn_1, this.qn_1, this.mn_1, this.rn_1, this.sn_1, this.tn_1, this.un_1, this.vn_1, this.wn_1, this.xn_1);
  };
  function validateConfiguration($this) {
    if (equals_0($this.kn(), EmptySerializersModule_0()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.hn_1.io_1, $this.hn_1.jo_1);
    $this.kn().um(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    if (!(($mask0 & 4096) === 0))
      namingStrategy = null;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy) {
    this.ao_1 = encodeDefaults;
    this.bo_1 = ignoreUnknownKeys;
    this.co_1 = isLenient;
    this.do_1 = allowStructuredMapKeys;
    this.eo_1 = prettyPrint;
    this.fo_1 = explicitNulls;
    this.go_1 = prettyPrintIndent;
    this.ho_1 = coerceInputValues;
    this.io_1 = useArrayPolymorphism;
    this.jo_1 = classDiscriminator;
    this.ko_1 = allowSpecialFloatingPointValues;
    this.lo_1 = useAlternativeNames;
    this.mo_1 = namingStrategy;
  }
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.ao_1 + ', ignoreUnknownKeys=' + this.bo_1 + ', isLenient=' + this.co_1 + ', ' + ('allowStructuredMapKeys=' + this.do_1 + ', prettyPrint=' + this.eo_1 + ', explicitNulls=' + this.fo_1 + ', ') + ("prettyPrintIndent='" + this.go_1 + "', coerceInputValues=" + this.ho_1 + ', useArrayPolymorphism=' + this.io_1 + ', ') + ("classDiscriminator='" + this.jo_1 + "', allowSpecialFloatingPointValues=" + this.ko_1 + ', useAlternativeNames=' + this.lo_1 + ', ') + ('namingStrategy=' + this.mo_1 + ')');
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.dk();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals_0(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z6() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.no_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals_0(kind, LIST_getInstance()) ? true : equals_0(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z6() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ck();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.fk(i);
        if (name === $this.oo_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.no_1 = useArrayPolymorphism;
    this.oo_1 = discriminator;
  }
  PolymorphismValidator.prototype.bn = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.en = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.aj();
    checkKind(this, descriptor, actualClass);
    if (!this.no_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.fn = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.gn = function (baseClass, defaultDeserializerProvider) {
  };
  function DescriptorSchemaCache() {
    this.po_1 = createMapForCache(16);
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$_1(initialCapacity);
  }
  function KotlinxSerializer$Companion$DefaultJson$lambda($this$Json) {
    $this$Json.on_1 = false;
    $this$Json.nn_1 = false;
    $this$Json.vn_1 = true;
    $this$Json.tn_1 = false;
    return Unit_getInstance();
  }
  function KotlinxSerializer_init_$Init$(json, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      json = Companion_getInstance_8().qo_1;
    KotlinxSerializer.call($this, json);
    return $this;
  }
  function KotlinxSerializer_init_$Create$(json, $mask0, $marker) {
    return KotlinxSerializer_init_$Init$(json, $mask0, $marker, Object.create(KotlinxSerializer.prototype));
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    tmp.qo_1 = Json$default(null, KotlinxSerializer$Companion$DefaultJson$lambda, 1, null);
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function KotlinxSerializer(json) {
    Companion_getInstance_8();
    this.ro_1 = json;
  }
  var initializer;
  function SerializerInitializer() {
    SerializerInitializer_instance = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = get_serializersStore();
    var tmp1_plusAssign = KotlinxSerializer_init_$Create$(null, 1, null);
    tmp0_plusAssign.e(tmp1_plusAssign);
  }
  var SerializerInitializer_instance;
  function SerializerInitializer_getInstance() {
    if (SerializerInitializer_instance == null)
      new SerializerInitializer();
    return SerializerInitializer_instance;
  }
  function System() {
    System_instance = this;
  }
  System.prototype.so = function () {
    return Companion_getInstance_9().so();
  };
  var System_instance;
  function System_getInstance() {
    if (System_instance == null)
      new System();
    return System_instance;
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function Companion_9() {
    Companion_instance_9 = this;
    this.to_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.uo_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.vo_1 = new Instant_0(Instant.MIN);
    this.wo_1 = new Instant_0(Instant.MAX);
  }
  Companion_9.prototype.so = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Instant_0(value) {
    Companion_getInstance_9();
    this.xo_1 = value;
  }
  Instant_0.prototype.yo = function (other) {
    return numberToInt(this.xo_1.compareTo(other.xo_1));
  };
  Instant_0.prototype.r8 = function (other) {
    return this.yo(other instanceof Instant_0 ? other : THROW_CCE());
  };
  Instant_0.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals_0(this.xo_1, other.xo_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Instant_0.prototype.hashCode = function () {
    return numberToInt(this.xo_1.hashCode());
  };
  Instant_0.prototype.toString = function () {
    return this.xo_1.toString();
  };
  function Command() {
  }
  function Event() {
  }
  function Message() {
  }
  function Query() {
  }
  function F2ErrorDTO() {
  }
  function F2Error_init_$Init$(message, id, timestamp, code, requestId, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      id = null;
    if (!(($mask0 & 4) === 0))
      timestamp = System_getInstance().so().toString();
    if (!(($mask0 & 8) === 0))
      code = 500;
    if (!(($mask0 & 16) === 0))
      requestId = null;
    F2Error.call($this, message, id, timestamp, code, requestId);
    return $this;
  }
  function F2Error_init_$Create$(message, id, timestamp, code, requestId, $mask0, $marker) {
    return F2Error_init_$Init$(message, id, timestamp, code, requestId, $mask0, $marker, Object.create(F2Error.prototype));
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.prototype.serializer = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.error.F2Error', this, 5);
    tmp0_serialDesc.pm('message', false);
    tmp0_serialDesc.pm('id', true);
    tmp0_serialDesc.pm('timestamp', true);
    tmp0_serialDesc.pm('code', true);
    tmp0_serialDesc.pm('requestId', true);
    this.dp_1 = tmp0_serialDesc;
  }
  $serializer.prototype.aj = function () {
    return this.dp_1;
  };
  $serializer.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.ep = function (decoder) {
    var tmp0_desc = this.dp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = null;
    var tmp9_input = decoder.fp(tmp0_desc);
    if (tmp9_input.yk()) {
      tmp4_local0 = tmp9_input.bl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.dl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.bl(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.al(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.dl(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.bl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.dl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.bl(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.al(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.dl(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.xk(tmp0_desc);
    return F2Error_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer.prototype.gp = function (encoder, value) {
    var tmp0_desc = this.dp_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.gl(tmp0_desc, 0, value.message);
    if (tmp1_output.el(tmp0_desc, 1) ? true : !(value.id == null)) {
      tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.el(tmp0_desc, 2) ? true : !(value.timestamp === System_getInstance().so().toString())) {
      tmp1_output.gl(tmp0_desc, 2, value.timestamp);
    }
    if (tmp1_output.el(tmp0_desc, 3) ? true : !(value.code === 500)) {
      tmp1_output.fl(tmp0_desc, 3, value.code);
    }
    if (tmp1_output.el(tmp0_desc, 4) ? true : !(value.requestId == null)) {
      tmp1_output.il(tmp0_desc, 4, StringSerializer_getInstance(), value.requestId);
    }
    tmp1_output.xk(tmp0_desc);
  };
  $serializer.prototype.hp = function (encoder, value) {
    return this.gp(encoder, value instanceof F2Error ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function F2Error_init_$Init$_0(seen1, message, id, timestamp, code, requestId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().dp_1);
    }
    $this.ip_1 = message;
    if (0 === (seen1 & 2))
      $this.jp_1 = null;
    else
      $this.jp_1 = id;
    if (0 === (seen1 & 4))
      $this.kp_1 = System_getInstance().so().toString();
    else
      $this.kp_1 = timestamp;
    if (0 === (seen1 & 8))
      $this.lp_1 = 500;
    else
      $this.lp_1 = code;
    if (0 === (seen1 & 16))
      $this.mp_1 = null;
    else
      $this.mp_1 = requestId;
    return $this;
  }
  function F2Error_init_$Create$_0(seen1, message, id, timestamp, code, requestId, serializationConstructorMarker) {
    return F2Error_init_$Init$_0(seen1, message, id, timestamp, code, requestId, serializationConstructorMarker, Object.create(F2Error.prototype));
  }
  function F2Error(message, id, timestamp, code, requestId) {
    Companion_getInstance_10();
    var id_0 = id === void 1 ? null : id;
    var timestamp_0 = timestamp === void 1 ? System_getInstance().so().toString() : timestamp;
    var code_0 = code === void 1 ? 500 : code;
    var requestId_0 = requestId === void 1 ? null : requestId;
    this.ip_1 = message;
    this.jp_1 = id_0;
    this.kp_1 = timestamp_0;
    this.lp_1 = code_0;
    this.mp_1 = requestId_0;
  }
  F2Error.prototype.e4 = function () {
    return this.ip_1;
  };
  F2Error.prototype.zo = function () {
    return this.jp_1;
  };
  F2Error.prototype.ap = function () {
    return this.kp_1;
  };
  F2Error.prototype.bp = function () {
    return this.lp_1;
  };
  F2Error.prototype.cp = function () {
    return this.mp_1;
  };
  F2Error.prototype.toString = function () {
    return "F2Error(timestamp='" + this.timestamp + "', code=" + this.code + ", requestId='" + this.requestId + "', message='" + this.message + "')";
  };
  Object.defineProperty(F2Error.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.e4();
    }
  });
  Object.defineProperty(F2Error.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.zo();
    }
  });
  Object.defineProperty(F2Error.prototype, 'timestamp', {
    configurable: true,
    get: function () {
      return this.ap();
    }
  });
  Object.defineProperty(F2Error.prototype, 'code', {
    configurable: true,
    get: function () {
      return this.bp();
    }
  });
  Object.defineProperty(F2Error.prototype, 'requestId', {
    configurable: true,
    get: function () {
      return this.cp();
    }
  });
  function F2Exception_init_$Init$(error, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    F2Exception.call($this, error, cause);
    return $this;
  }
  function F2Exception_init_$Create$(error, cause, $mask0, $marker) {
    var tmp = F2Exception_init_$Init$(error, cause, $mask0, $marker, Object.create(F2Exception.prototype));
    captureStack(tmp, F2Exception_init_$Create$);
    return tmp;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  Companion_11.prototype.invoke = function (message, id, requestId, code, cause) {
    return this.np(message, id === void 1 ? '' : id, requestId === void 1 ? '' : requestId, code === void 1 ? 500 : code, cause === void 1 ? null : cause);
  };
  Companion_11.prototype.np = function (message, id, requestId, code, cause) {
    var tmp0_timestamp = System_getInstance().so().toString();
    return new F2Exception(new F2Error(message, id, tmp0_timestamp, code, requestId), cause);
  };
  Companion_11.prototype.op = function (message, id, requestId, code, cause, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      id = '';
    if (!(($mask0 & 4) === 0))
      requestId = '';
    if (!(($mask0 & 8) === 0))
      code = 500;
    if (!(($mask0 & 16) === 0))
      cause = null;
    return this.np(message, id, requestId, code, cause);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function F2Exception(error, cause) {
    Companion_getInstance_11();
    var cause_0 = cause === void 1 ? null : cause;
    RuntimeException_init_$Init$_1(error.message, cause_0, this);
    this.error = error;
    captureStack(this, F2Exception);
  }
  F2Exception.prototype.pp = function () {
    return this.error;
  };
  function Match() {
  }
  function AndMatch_init_$Init$(matches, negative, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      negative = false;
    AndMatch.call($this, matches, negative);
    return $this;
  }
  function AndMatch_init_$Create$(matches, negative, $mask0, $marker) {
    return AndMatch_init_$Init$(matches, negative, $mask0, $marker, Object.create(AndMatch.prototype));
  }
  function AndMatch(matches, negative) {
    this.rp_1 = matches;
    this.sp_1 = negative;
  }
  AndMatch.prototype.qp = function () {
    return this.sp_1;
  };
  AndMatch.prototype.map = function (transform) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.rp_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      var tmp$ret$0;
      // Inline function 'f2.dsl.cqrs.filter.AndMatch.map.<anonymous>' call
      tmp$ret$0 = item.map(transform);
      tmp0_mapTo.e(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new AndMatch(tmp$ret$2, this.sp_1);
  };
  AndMatch.prototype.not = function () {
    return this.tp(null, !this.sp_1, 1, null);
  };
  AndMatch.prototype.and = function (match) {
    var tmp = plus_0(this.rp_1, match);
    return this.tp(tmp, false, 2, null);
  };
  AndMatch.prototype.up = function (matches, negative) {
    return new AndMatch(matches, negative);
  };
  AndMatch.prototype.tp = function (matches, negative, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      matches = this.rp_1;
    if (!(($mask0 & 2) === 0))
      negative = this.sp_1;
    return this.up(matches, negative);
  };
  AndMatch.prototype.toString = function () {
    return 'AndMatch(matches=' + this.rp_1 + ', negative=' + this.sp_1 + ')';
  };
  AndMatch.prototype.hashCode = function () {
    var result = hashCode(this.rp_1);
    result = imul(result, 31) + (this.sp_1 | 0) | 0;
    return result;
  };
  AndMatch.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AndMatch))
      return false;
    var tmp0_other_with_cast = other instanceof AndMatch ? other : THROW_CCE();
    if (!equals_0(this.rp_1, tmp0_other_with_cast.rp_1))
      return false;
    if (!(this.sp_1 === tmp0_other_with_cast.sp_1))
      return false;
    return true;
  };
  Object.defineProperty(AndMatch.prototype, 'negative', {
    configurable: true,
    get: function () {
      return this.qp();
    }
  });
  function OrMatch_init_$Init$(matches, negative, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      negative = false;
    OrMatch.call($this, matches, negative);
    return $this;
  }
  function OrMatch_init_$Create$(matches, negative, $mask0, $marker) {
    return OrMatch_init_$Init$(matches, negative, $mask0, $marker, Object.create(OrMatch.prototype));
  }
  function OrMatch(matches, negative) {
    this.vp_1 = matches;
    this.wp_1 = negative;
  }
  OrMatch.prototype.qp = function () {
    return this.wp_1;
  };
  OrMatch.prototype.map = function (transform) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.vp_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      var tmp$ret$0;
      // Inline function 'f2.dsl.cqrs.filter.OrMatch.map.<anonymous>' call
      tmp$ret$0 = item.map(transform);
      tmp0_mapTo.e(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new OrMatch(tmp$ret$2, this.wp_1);
  };
  OrMatch.prototype.not = function () {
    return this.tp(null, !this.wp_1, 1, null);
  };
  OrMatch.prototype.or = function (match) {
    var tmp = plus_0(this.vp_1, match);
    return this.tp(tmp, false, 2, null);
  };
  OrMatch.prototype.up = function (matches, negative) {
    return new OrMatch(matches, negative);
  };
  OrMatch.prototype.tp = function (matches, negative, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      matches = this.vp_1;
    if (!(($mask0 & 2) === 0))
      negative = this.wp_1;
    return this.up(matches, negative);
  };
  OrMatch.prototype.toString = function () {
    return 'OrMatch(matches=' + this.vp_1 + ', negative=' + this.wp_1 + ')';
  };
  OrMatch.prototype.hashCode = function () {
    var result = hashCode(this.vp_1);
    result = imul(result, 31) + (this.wp_1 | 0) | 0;
    return result;
  };
  OrMatch.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrMatch))
      return false;
    var tmp0_other_with_cast = other instanceof OrMatch ? other : THROW_CCE();
    if (!equals_0(this.vp_1, tmp0_other_with_cast.vp_1))
      return false;
    if (!(this.wp_1 === tmp0_other_with_cast.wp_1))
      return false;
    return true;
  };
  Object.defineProperty(OrMatch.prototype, 'negative', {
    configurable: true,
    get: function () {
      return this.qp();
    }
  });
  function SortDTO() {
  }
  function PageDTO() {
  }
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_0.call($this);
    $this.dq_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, Object.create($serializer_0.prototype));
  }
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.Page', null, 2);
    tmp0_serialDesc.pm('total', false);
    tmp0_serialDesc.pm('items', false);
    Companion_getInstance_12().eq_1 = tmp0_serialDesc;
  }
  Companion_12.prototype.serializer = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  Companion_12.prototype.fq = function (typeParamsSerializers) {
    return this.serializer(typeParamsSerializers[0]);
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function $serializer_0() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.Page', this, 2);
    tmp0_serialDesc.pm('total', false);
    tmp0_serialDesc.pm('items', false);
    this.cq_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.aj = function () {
    return this.cq_1;
  };
  $serializer_0.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), new ArrayListSerializer(this.dq_1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_0.prototype.ep = function (decoder) {
    var tmp0_desc = this.cq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.fp(tmp0_desc);
    if (tmp6_input.yk()) {
      tmp4_local0 = tmp6_input.al(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.cl(tmp0_desc, 1, new ArrayListSerializer(this.dq_1), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.al(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.cl(tmp0_desc, 1, new ArrayListSerializer(this.dq_1), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.xk(tmp0_desc);
    return Page_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_0.prototype.gq = function (encoder, value) {
    var tmp0_desc = this.cq_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.fl(tmp0_desc, 0, value.hq_1);
    tmp1_output.hl(tmp0_desc, 1, new ArrayListSerializer(this.dq_1), value.iq_1);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_0.prototype.hp = function (encoder, value) {
    return this.gq(encoder, value instanceof Page ? value : THROW_CCE());
  };
  $serializer_0.prototype.nm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.dq_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function Page_init_$Init$(seen1, total, items, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, Companion_getInstance_12().eq_1);
    }
    $this.hq_1 = total;
    $this.iq_1 = items;
    return $this;
  }
  function Page_init_$Create$(seen1, total, items, serializationConstructorMarker) {
    return Page_init_$Init$(seen1, total, items, serializationConstructorMarker, Object.create(Page.prototype));
  }
  function Page(total, items) {
    Companion_getInstance_12();
    this.hq_1 = total;
    this.iq_1 = items;
  }
  Page.prototype.aq = function () {
    return this.hq_1;
  };
  Page.prototype.bq = function () {
    return this.iq_1;
  };
  Object.defineProperty(Page.prototype, 'total', {
    configurable: true,
    get: function () {
      return this.aq();
    }
  });
  Object.defineProperty(Page.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.bq();
    }
  });
  function PageQueryDTO() {
  }
  function PageQueryResultDTO() {
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  Companion_13.prototype.serializer = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function $serializer_1() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PageQuery', this, 1);
    tmp0_serialDesc.pm('pagination', false);
    this.kq_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.aj = function () {
    return this.kq_1;
  };
  $serializer_1.prototype.mm = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp = getKClass(OffsetPaginationDTO);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_arrayOf = [get_nullable(PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2))];
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp0_arrayOf;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  $serializer_1.prototype.ep = function (decoder) {
    var tmp0_desc = this.kq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.fp(tmp0_desc);
    if (tmp5_input.yk()) {
      var tmp = getKClass(OffsetPaginationDTO);
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp4_local0 = tmp5_input.dl(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_0 = getKClass(OffsetPaginationDTO);
            var tmp$ret$5;
            // Inline function 'kotlin.arrayOf' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$3;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = [];
            tmp$ret$4 = tmp$ret$3;
            tmp$ret$5 = tmp$ret$4;

            tmp4_local0 = tmp5_input.dl(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$5), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.xk(tmp0_desc);
    return PageQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_1.prototype.lq = function (encoder, value) {
    var tmp0_desc = this.kq_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    var tmp = getKClass(OffsetPaginationDTO);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp1_output.il(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), value.mq_1);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_1.prototype.hp = function (encoder, value) {
    return this.lq(encoder, value instanceof PageQuery ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_1();
    return $serializer_instance_0;
  }
  function PageQuery_init_$Init$(seen1, pagination, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().kq_1);
    }
    $this.mq_1 = pagination;
    return $this;
  }
  function PageQuery_init_$Create$(seen1, pagination, serializationConstructorMarker) {
    return PageQuery_init_$Init$(seen1, pagination, serializationConstructorMarker, Object.create(PageQuery.prototype));
  }
  function PageQuery(pagination) {
    Companion_getInstance_13();
    this.mq_1 = pagination;
  }
  PageQuery.prototype.jq = function () {
    return this.mq_1;
  };
  Object.defineProperty(PageQuery.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this.jq();
    }
  });
  function $serializer_init_$Init$_0(typeSerial0, $this) {
    $serializer_2.call($this);
    $this.oq_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$_0(typeSerial0) {
    return $serializer_init_$Init$_0(typeSerial0, Object.create($serializer_2.prototype));
  }
  function Companion_14() {
    Companion_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PageQueryResult', null, 3);
    tmp0_serialDesc.pm('pagination', false);
    tmp0_serialDesc.pm('total', false);
    tmp0_serialDesc.pm('items', false);
    Companion_getInstance_14().pq_1 = tmp0_serialDesc;
  }
  Companion_14.prototype.serializer = function (typeSerial0) {
    return $serializer_init_$Create$_0(typeSerial0);
  };
  Companion_14.prototype.fq = function (typeParamsSerializers) {
    return this.serializer(typeParamsSerializers[0]);
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function $serializer_2() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PageQueryResult', this, 3);
    tmp0_serialDesc.pm('pagination', false);
    tmp0_serialDesc.pm('total', false);
    tmp0_serialDesc.pm('items', false);
    this.nq_1 = tmp0_serialDesc;
  }
  $serializer_2.prototype.aj = function () {
    return this.nq_1;
  };
  $serializer_2.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable($serializer_getInstance_1()), IntSerializer_getInstance(), new ArrayListSerializer(this.oq_1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_2.prototype.ep = function (decoder) {
    var tmp0_desc = this.nq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.fp(tmp0_desc);
    if (tmp7_input.yk()) {
      tmp4_local0 = tmp7_input.dl(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.al(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.cl(tmp0_desc, 2, new ArrayListSerializer(this.oq_1), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.dl(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.al(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.cl(tmp0_desc, 2, new ArrayListSerializer(this.oq_1), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.xk(tmp0_desc);
    return PageQueryResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_2.prototype.qq = function (encoder, value) {
    var tmp0_desc = this.nq_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.il(tmp0_desc, 0, $serializer_getInstance_1(), value.rq_1);
    tmp1_output.fl(tmp0_desc, 1, value.sq_1);
    tmp1_output.hl(tmp0_desc, 2, new ArrayListSerializer(this.oq_1), value.tq_1);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_2.prototype.hp = function (encoder, value) {
    return this.qq(encoder, value instanceof PageQueryResult ? value : THROW_CCE());
  };
  $serializer_2.prototype.nm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.oq_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function PageQueryResult_init_$Init$(seen1, pagination, total, items, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, Companion_getInstance_14().pq_1);
    }
    $this.rq_1 = pagination;
    $this.sq_1 = total;
    $this.tq_1 = items;
    return $this;
  }
  function PageQueryResult_init_$Create$(seen1, pagination, total, items, serializationConstructorMarker) {
    return PageQueryResult_init_$Init$(seen1, pagination, total, items, serializationConstructorMarker, Object.create(PageQueryResult.prototype));
  }
  function PageQueryResult(pagination, total, items) {
    Companion_getInstance_14();
    this.rq_1 = pagination;
    this.sq_1 = total;
    this.tq_1 = items;
  }
  PageQueryResult.prototype.jq = function () {
    return this.rq_1;
  };
  PageQueryResult.prototype.aq = function () {
    return this.sq_1;
  };
  PageQueryResult.prototype.bq = function () {
    return this.tq_1;
  };
  Object.defineProperty(PageQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this.jq();
    }
  });
  Object.defineProperty(PageQueryResult.prototype, 'total', {
    configurable: true,
    get: function () {
      return this.aq();
    }
  });
  Object.defineProperty(PageQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.bq();
    }
  });
  function Companion_15() {
    Companion_instance_15 = this;
  }
  Companion_15.prototype.serializer = function () {
    var tmp = getKClass(Pagination);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [getKClass(OffsetPaginationDTO), getKClass(PagePaginationDTO)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = getKClass(OffsetPaginationDTO);
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = [];
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp_2 = PolymorphicSerializer_init_$Create$(tmp_1, tmp$ret$5);
    var tmp_3 = getKClass(PagePaginationDTO);
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = [];
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    var tmp1_arrayOf = [tmp_2, PolymorphicSerializer_init_$Create$(tmp_3, tmp$ret$8)];
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = tmp1_arrayOf;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_4 = tmp$ret$11;
    var tmp$ret$14;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = [];
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    return SealedClassSerializer_init_$Create$('f2.dsl.cqrs.page.Pagination', tmp, tmp_0, tmp_4, tmp$ret$14);
  };
  Companion_15.prototype.fq = function (typeParamsSerializers) {
    return this.serializer();
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Pagination() {
    Companion_getInstance_15();
  }
  function OffsetPaginationDTO() {
  }
  function PagePaginationDTO() {
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  Companion_16.prototype.serializer = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function $serializer_3() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.OffsetPagination', this, 2);
    tmp0_serialDesc.pm('offset', false);
    tmp0_serialDesc.pm('limit', false);
    this.xq_1 = tmp0_serialDesc;
  }
  $serializer_3.prototype.aj = function () {
    return this.xq_1;
  };
  $serializer_3.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), IntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_3.prototype.ep = function (decoder) {
    var tmp0_desc = this.xq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.fp(tmp0_desc);
    if (tmp6_input.yk()) {
      tmp4_local0 = tmp6_input.al(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.al(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.al(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.al(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.xk(tmp0_desc);
    return OffsetPagination_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_3.prototype.yq = function (encoder, value) {
    var tmp0_desc = this.xq_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.fl(tmp0_desc, 0, value.zq_1);
    tmp1_output.fl(tmp0_desc, 1, value.ar_1);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_3.prototype.hp = function (encoder, value) {
    return this.yq(encoder, value instanceof OffsetPagination ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_3();
    return $serializer_instance_1;
  }
  function OffsetPagination_init_$Init$(seen1, offset, limit, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_1().xq_1);
    }
    $this.zq_1 = offset;
    $this.ar_1 = limit;
    return $this;
  }
  function OffsetPagination_init_$Create$(seen1, offset, limit, serializationConstructorMarker) {
    return OffsetPagination_init_$Init$(seen1, offset, limit, serializationConstructorMarker, Object.create(OffsetPagination.prototype));
  }
  function OffsetPagination(offset, limit) {
    Companion_getInstance_16();
    this.zq_1 = offset;
    this.ar_1 = limit;
  }
  OffsetPagination.prototype.uq = function () {
    return this.zq_1;
  };
  OffsetPagination.prototype.vq = function () {
    return this.ar_1;
  };
  Object.defineProperty(OffsetPagination.prototype, 'offset', {
    configurable: true,
    get: function () {
      return this.uq();
    }
  });
  Object.defineProperty(OffsetPagination.prototype, 'limit', {
    configurable: true,
    get: function () {
      return this.vq();
    }
  });
  function Companion_17() {
    Companion_instance_17 = this;
  }
  Companion_17.prototype.serializer = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function $serializer_4() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('f2.dsl.cqrs.page.PagePagination', this, 2);
    tmp0_serialDesc.pm('page', false);
    tmp0_serialDesc.pm('size', false);
    this.br_1 = tmp0_serialDesc;
  }
  $serializer_4.prototype.aj = function () {
    return this.br_1;
  };
  $serializer_4.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_4.prototype.ep = function (decoder) {
    var tmp0_desc = this.br_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.fp(tmp0_desc);
    if (tmp6_input.yk()) {
      tmp4_local0 = tmp6_input.dl(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.dl(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.dl(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.dl(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.xk(tmp0_desc);
    return PagePagination_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_4.prototype.cr = function (encoder, value) {
    var tmp0_desc = this.br_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.il(tmp0_desc, 0, IntSerializer_getInstance(), value.dr_1);
    tmp1_output.il(tmp0_desc, 1, IntSerializer_getInstance(), value.er_1);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_4.prototype.hp = function (encoder, value) {
    return this.cr(encoder, value instanceof PagePagination ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_4();
    return $serializer_instance_2;
  }
  function PagePagination_init_$Init$(seen1, page, size, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_2().br_1);
    }
    $this.dr_1 = page;
    $this.er_1 = size;
    return $this;
  }
  function PagePagination_init_$Create$(seen1, page, size, serializationConstructorMarker) {
    return PagePagination_init_$Init$(seen1, page, size, serializationConstructorMarker, Object.create(PagePagination.prototype));
  }
  function PagePagination(page, size) {
    Companion_getInstance_17();
    this.dr_1 = page;
    this.er_1 = size;
  }
  PagePagination.prototype.wq = function () {
    return this.dr_1;
  };
  PagePagination.prototype.f = function () {
    return this.er_1;
  };
  Object.defineProperty(PagePagination.prototype, 'page', {
    configurable: true,
    get: function () {
      return this.wq();
    }
  });
  Object.defineProperty(PagePagination.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.f();
    }
  });
  function AuthedUserDTO() {
  }
  function hasRole(_this__u8e3s4, role) {
    return contains(_this__u8e3s4.roles, role.jr_1);
  }
  function hasOneOfRoles(_this__u8e3s4, roles) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = value$factory();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(roles.length);
      var indexedObject = roles;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        tmp0_mapTo.e(tmp0_map(item));
      }
      tmp$ret$0 = tmp0_mapTo;
      tmp$ret$1 = tmp$ret$0;
      var tmp1_any = tmp$ret$1;
      var tmp2_any = _this__u8e3s4.roles;
      var tmp;
      if (isInterface(tmp1_any, Collection)) {
        tmp = tmp1_any.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var tmp0_iterator = tmp1_any.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        if (contains(tmp2_any, element)) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    return tmp$ret$2;
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KProperty1, function (receiver) {
      return receiver.jr_1;
    }, null);
  }
  var Role_SUPER_ADMIN_instance;
  var Role_IM_USER_READ_instance;
  var Role_IM_USER_WRITE_instance;
  var Role_IM_ORGANIZATION_READ_instance;
  var Role_IM_ORGANIZATION_WRITE_instance;
  var Role_IM_APIKEY_READ_instance;
  var Role_IM_APIKEY_WRITE_instance;
  var Role_IM_ROLE_READ_instance;
  var Role_IM_ROLE_WRITE_instance;
  var Role_IM_MY_ORGANIZATION_WRITE_instance;
  var Role_entriesInitialized;
  function Role_initEntries() {
    if (Role_entriesInitialized)
      return Unit_getInstance();
    Role_entriesInitialized = true;
    Role_SUPER_ADMIN_instance = new Role('SUPER_ADMIN', 0, 'super_admin');
    Role_IM_USER_READ_instance = new Role('IM_USER_READ', 1, 'im_read_user');
    Role_IM_USER_WRITE_instance = new Role('IM_USER_WRITE', 2, 'im_write_user');
    Role_IM_ORGANIZATION_READ_instance = new Role('IM_ORGANIZATION_READ', 3, 'im_read_organization');
    Role_IM_ORGANIZATION_WRITE_instance = new Role('IM_ORGANIZATION_WRITE', 4, 'im_write_organization');
    Role_IM_APIKEY_READ_instance = new Role('IM_APIKEY_READ', 5, 'im_read_apikey');
    Role_IM_APIKEY_WRITE_instance = new Role('IM_APIKEY_WRITE', 6, 'im_write_apikey');
    Role_IM_ROLE_READ_instance = new Role('IM_ROLE_READ', 7, 'im_read_role');
    Role_IM_ROLE_WRITE_instance = new Role('IM_ROLE_WRITE', 8, 'im_write_role');
    Role_IM_MY_ORGANIZATION_WRITE_instance = new Role('IM_MY_ORGANIZATION_WRITE', 9, 'im_write_my_organization');
  }
  function Role(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.jr_1 = value;
  }
  function Role_IM_USER_READ_getInstance() {
    Role_initEntries();
    return Role_IM_USER_READ_instance;
  }
  function Role_IM_USER_WRITE_getInstance() {
    Role_initEntries();
    return Role_IM_USER_WRITE_instance;
  }
  function Role_IM_ORGANIZATION_READ_getInstance() {
    Role_initEntries();
    return Role_IM_ORGANIZATION_READ_instance;
  }
  function Role_IM_ORGANIZATION_WRITE_getInstance() {
    Role_initEntries();
    return Role_IM_ORGANIZATION_WRITE_instance;
  }
  function Role_IM_MY_ORGANIZATION_WRITE_getInstance() {
    Role_initEntries();
    return Role_IM_MY_ORGANIZATION_WRITE_instance;
  }
  function AddressDTO() {
  }
  function ClientJs$doCall$slambda($fnc, resultContinuation) {
    this.wr_1 = $fnc;
    CoroutineImpl.call(this, resultContinuation);
  }
  ClientJs$doCall$slambda.prototype.yr = function ($this$promise, $cont) {
    var tmp = this.zr($this$promise, $cont);
    tmp.q9_1 = Unit_getInstance();
    tmp.r9_1 = null;
    return tmp.x9();
  };
  ClientJs$doCall$slambda.prototype.ja = function (p1, $cont) {
    return this.yr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ClientJs$doCall$slambda.prototype.x9 = function () {
    var suspendResult = this.q9_1;
    $sm: do
      try {
        var tmp = this.o9_1;
        switch (tmp) {
          case 0:
            this.p9_1 = 2;
            this.o9_1 = 1;
            suspendResult = this.wr_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            return JSON.parse(JSON.stringify(result));
          case 2:
            throw this.r9_1;
        }
      } catch ($p) {
        if (this.p9_1 === 2) {
          throw $p;
        } else {
          this.o9_1 = this.p9_1;
          this.r9_1 = $p;
        }
      }
     while (true);
  };
  ClientJs$doCall$slambda.prototype.zr = function ($this$promise, completion) {
    var i = new ClientJs$doCall$slambda(this.wr_1, completion);
    i.xr_1 = $this$promise;
    return i;
  };
  function ClientJs$doCall$slambda_0($fnc, resultContinuation) {
    var i = new ClientJs$doCall$slambda($fnc, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.yr($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ClientJs() {
  }
  ClientJs.prototype.doCall = function (fnc) {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, ClientJs$doCall$slambda_0(fnc, null), 3, null);
  };
  function AuthRealm(serverUrl, realmId, clientId, redirectUrl) {
    this.as_1 = serverUrl;
    this.bs_1 = realmId;
    this.cs_1 = clientId;
    this.ds_1 = redirectUrl;
  }
  AuthRealm.prototype.es = function () {
    return this.as_1;
  };
  AuthRealm.prototype.fs = function () {
    return this.bs_1;
  };
  AuthRealm.prototype.gs = function () {
    return this.cs_1;
  };
  AuthRealm.prototype.hs = function () {
    return this.ds_1;
  };
  Object.defineProperty(AuthRealm.prototype, 'serverUrl', {
    configurable: true,
    get: function () {
      return this.es();
    }
  });
  Object.defineProperty(AuthRealm.prototype, 'realmId', {
    configurable: true,
    get: function () {
      return this.fs();
    }
  });
  Object.defineProperty(AuthRealm.prototype, 'clientId', {
    configurable: true,
    get: function () {
      return this.gs();
    }
  });
  Object.defineProperty(AuthRealm.prototype, 'redirectUrl', {
    configurable: true,
    get: function () {
      return this.hs();
    }
  });
  function AuthRealmPassword(serverUrl, realmId, redirectUrl, clientId, username, password) {
    AuthRealm.call(this, serverUrl, realmId, clientId, redirectUrl);
    this.ms_1 = serverUrl;
    this.ns_1 = realmId;
    this.os_1 = redirectUrl;
    this.ps_1 = clientId;
    this.username = username;
    this.password = password;
  }
  AuthRealmPassword.prototype.es = function () {
    return this.ms_1;
  };
  AuthRealmPassword.prototype.fs = function () {
    return this.ns_1;
  };
  AuthRealmPassword.prototype.hs = function () {
    return this.os_1;
  };
  AuthRealmPassword.prototype.gs = function () {
    return this.ps_1;
  };
  AuthRealmPassword.prototype.qs = function () {
    return this.username;
  };
  AuthRealmPassword.prototype.rs = function () {
    return this.password;
  };
  function AuthRealmClientSecret(serverUrl, realmId, clientId, redirectUrl, clientSecret) {
    AuthRealm.call(this, serverUrl, realmId, clientId, redirectUrl);
    this.ws_1 = serverUrl;
    this.xs_1 = realmId;
    this.ys_1 = clientId;
    this.zs_1 = redirectUrl;
    this.clientSecret = clientSecret;
  }
  AuthRealmClientSecret.prototype.es = function () {
    return this.ws_1;
  };
  AuthRealmClientSecret.prototype.fs = function () {
    return this.xs_1;
  };
  AuthRealmClientSecret.prototype.gs = function () {
    return this.ys_1;
  };
  AuthRealmClientSecret.prototype.hs = function () {
    return this.zs_1;
  };
  AuthRealmClientSecret.prototype.at = function () {
    return this.clientSecret;
  };
  function F2Function() {
  }
  function F2Supplier() {
  }
  function F2Consumer() {
  }
  function KeycloakF2Message() {
  }
  function KeycloakF2Query() {
  }
  function KeycloakF2Command() {
  }
  function KeycloakF2Result() {
  }
  function Role_0(id, name, description, isClientRole) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.isClientRole = isClientRole;
  }
  Role_0.prototype.zo = function () {
    return this.id;
  };
  Role_0.prototype.s8 = function () {
    return this.name;
  };
  Role_0.prototype.ct = function () {
    return this.description;
  };
  Role_0.prototype.dt = function () {
    return this.isClientRole;
  };
  function RoleCompositesModel(assignedRole, effectiveRoles) {
    this.assignedRole = assignedRole;
    this.effectiveRoles = effectiveRoles;
  }
  RoleCompositesModel.prototype.et = function () {
    return this.assignedRole;
  };
  RoleCompositesModel.prototype.ft = function () {
    return this.effectiveRoles;
  };
  function RolesCompositeModel(assignedRoles, effectiveRoles) {
    this.assignedRoles = assignedRoles;
    this.effectiveRoles = effectiveRoles;
  }
  RolesCompositeModel.prototype.gt = function () {
    return this.assignedRoles;
  };
  RolesCompositeModel.prototype.ft = function () {
    return this.effectiveRoles;
  };
  function RoleCompositeGetQuery(realmId, objId, objType, auth) {
    this.realmId = realmId;
    this.objId = objId;
    this.objType = objType;
    this.ht_1 = auth;
  }
  RoleCompositeGetQuery.prototype.fs = function () {
    return this.realmId;
  };
  RoleCompositeGetQuery.prototype.it = function () {
    return this.objId;
  };
  RoleCompositeGetQuery.prototype.jt = function () {
    return this.objType;
  };
  RoleCompositeGetQuery.prototype.bt = function () {
    return this.ht_1;
  };
  Object.defineProperty(RoleCompositeGetQuery.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function RoleCompositeGetResult(item) {
    this.item = item;
  }
  RoleCompositeGetResult.prototype.kt = function () {
    return this.item;
  };
  var RoleCompositeObjType_USER_instance;
  var RoleCompositeObjType_GROUP_instance;
  function values() {
    return [RoleCompositeObjType_USER_getInstance(), RoleCompositeObjType_GROUP_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'USER':
        return RoleCompositeObjType_USER_getInstance();
      case 'GROUP':
        return RoleCompositeObjType_GROUP_getInstance();
      default:
        RoleCompositeObjType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var RoleCompositeObjType_entriesInitialized;
  function RoleCompositeObjType_initEntries() {
    if (RoleCompositeObjType_entriesInitialized)
      return Unit_getInstance();
    RoleCompositeObjType_entriesInitialized = true;
    RoleCompositeObjType_USER_instance = new RoleCompositeObjType('USER', 0);
    RoleCompositeObjType_GROUP_instance = new RoleCompositeObjType('GROUP', 1);
  }
  function RoleCompositeObjType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Object.defineProperty(RoleCompositeObjType.prototype, 'name', {
    configurable: true,
    get: RoleCompositeObjType.prototype.s8
  });
  Object.defineProperty(RoleCompositeObjType.prototype, 'ordinal', {
    configurable: true,
    get: RoleCompositeObjType.prototype.t8
  });
  function RoleCompositeObjType_USER_getInstance() {
    RoleCompositeObjType_initEntries();
    return RoleCompositeObjType_USER_instance;
  }
  function RoleCompositeObjType_GROUP_getInstance() {
    RoleCompositeObjType_initEntries();
    return RoleCompositeObjType_GROUP_instance;
  }
  function RoleGetByIdQuery(realmId, id, auth) {
    this.realmId = realmId;
    this.id = id;
    this.auth = auth;
  }
  RoleGetByIdQuery.prototype.fs = function () {
    return this.realmId;
  };
  RoleGetByIdQuery.prototype.zo = function () {
    return this.id;
  };
  RoleGetByIdQuery.prototype.bt = function () {
    return this.auth;
  };
  function RoleGetByIdResult(item) {
    this.item = item;
  }
  RoleGetByIdResult.prototype.kt = function () {
    return this.item;
  };
  function RoleGetByNameQuery(realmId, auth, name) {
    this.realmId = realmId;
    this.auth = auth;
    this.name = name;
  }
  RoleGetByNameQuery.prototype.fs = function () {
    return this.realmId;
  };
  RoleGetByNameQuery.prototype.bt = function () {
    return this.auth;
  };
  RoleGetByNameQuery.prototype.s8 = function () {
    return this.name;
  };
  function RoleGetByNameResult(item) {
    this.item = item;
  }
  RoleGetByNameResult.prototype.kt = function () {
    return this.item;
  };
  function RolePageQuery(realmId, auth, page) {
    this.realmId = realmId;
    this.auth = auth;
    this.page = page;
  }
  RolePageQuery.prototype.fs = function () {
    return this.realmId;
  };
  RolePageQuery.prototype.bt = function () {
    return this.auth;
  };
  RolePageQuery.prototype.wq = function () {
    return this.page;
  };
  function RolePageResult(page) {
    this.page = page;
  }
  RolePageResult.prototype.wq = function () {
    return this.page;
  };
  function RoleAddCompositesCommand(roleName, composites, auth, realmId) {
    this.roleName = roleName;
    this.composites = composites;
    this.nt_1 = auth;
    this.realmId = realmId;
  }
  RoleAddCompositesCommand.prototype.ot = function () {
    return this.roleName;
  };
  RoleAddCompositesCommand.prototype.pt = function () {
    return this.composites;
  };
  RoleAddCompositesCommand.prototype.bt = function () {
    return this.nt_1;
  };
  RoleAddCompositesCommand.prototype.fs = function () {
    return this.realmId;
  };
  Object.defineProperty(RoleAddCompositesCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function RoleAddedCompositesEvent(id) {
    this.id = id;
  }
  RoleAddedCompositesEvent.prototype.zo = function () {
    return this.id;
  };
  function RoleCreateCommand(name, description, isClientRole, composites, auth, realmId) {
    this.name = name;
    this.description = description;
    this.isClientRole = isClientRole;
    this.composites = composites;
    this.qt_1 = auth;
    this.realmId = realmId;
  }
  RoleCreateCommand.prototype.s8 = function () {
    return this.name;
  };
  RoleCreateCommand.prototype.ct = function () {
    return this.description;
  };
  RoleCreateCommand.prototype.dt = function () {
    return this.isClientRole;
  };
  RoleCreateCommand.prototype.pt = function () {
    return this.composites;
  };
  RoleCreateCommand.prototype.bt = function () {
    return this.qt_1;
  };
  RoleCreateCommand.prototype.fs = function () {
    return this.realmId;
  };
  Object.defineProperty(RoleCreateCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function RoleCreatedEvent(id) {
    this.id = id;
  }
  RoleCreatedEvent.prototype.zo = function () {
    return this.id;
  };
  function RoleUpdateCommand(name, description, isClientRole, composites, auth, realmId) {
    this.name = name;
    this.description = description;
    this.isClientRole = isClientRole;
    this.composites = composites;
    this.rt_1 = auth;
    this.realmId = realmId;
  }
  RoleUpdateCommand.prototype.s8 = function () {
    return this.name;
  };
  RoleUpdateCommand.prototype.ct = function () {
    return this.description;
  };
  RoleUpdateCommand.prototype.dt = function () {
    return this.isClientRole;
  };
  RoleUpdateCommand.prototype.pt = function () {
    return this.composites;
  };
  RoleUpdateCommand.prototype.bt = function () {
    return this.rt_1;
  };
  RoleUpdateCommand.prototype.fs = function () {
    return this.realmId;
  };
  Object.defineProperty(RoleUpdateCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function RoleUpdatedEvent(id) {
    this.id = id;
  }
  RoleUpdatedEvent.prototype.zo = function () {
    return this.id;
  };
  function GroupCreateCommand(name, attributes, roles, auth, realmId, parentGroupId) {
    this.name = name;
    this.attributes = attributes;
    this.roles = roles;
    this.st_1 = auth;
    this.realmId = realmId;
    this.parentGroupId = parentGroupId;
  }
  GroupCreateCommand.prototype.s8 = function () {
    return this.name;
  };
  GroupCreateCommand.prototype.tt = function () {
    return this.attributes;
  };
  GroupCreateCommand.prototype.gr = function () {
    return this.roles;
  };
  GroupCreateCommand.prototype.bt = function () {
    return this.st_1;
  };
  GroupCreateCommand.prototype.fs = function () {
    return this.realmId;
  };
  GroupCreateCommand.prototype.ut = function () {
    return this.parentGroupId;
  };
  Object.defineProperty(GroupCreateCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function GroupCreatedEvent(id) {
    this.id = id;
  }
  GroupCreatedEvent.prototype.zo = function () {
    return this.id;
  };
  function GroupDisableCommand(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.vt_1 = auth;
  }
  GroupDisableCommand.prototype.zo = function () {
    return this.id;
  };
  GroupDisableCommand.prototype.fs = function () {
    return this.realmId;
  };
  GroupDisableCommand.prototype.bt = function () {
    return this.vt_1;
  };
  Object.defineProperty(GroupDisableCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function GroupDisabledEvent(id) {
    this.id = id;
  }
  GroupDisabledEvent.prototype.zo = function () {
    return this.id;
  };
  function GroupSetAttributesCommand(id, attributes, realmId, auth) {
    this.id = id;
    this.attributes = attributes;
    this.realmId = realmId;
    this.wt_1 = auth;
  }
  GroupSetAttributesCommand.prototype.zo = function () {
    return this.id;
  };
  GroupSetAttributesCommand.prototype.tt = function () {
    return this.attributes;
  };
  GroupSetAttributesCommand.prototype.fs = function () {
    return this.realmId;
  };
  GroupSetAttributesCommand.prototype.bt = function () {
    return this.wt_1;
  };
  Object.defineProperty(GroupSetAttributesCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function GroupSetAttributesEvent(id) {
    this.id = id;
  }
  GroupSetAttributesEvent.prototype.zo = function () {
    return this.id;
  };
  function GroupUpdateCommand(id, name, attributes, roles, auth, realmId) {
    this.id = id;
    this.name = name;
    this.attributes = attributes;
    this.roles = roles;
    this.xt_1 = auth;
    this.realmId = realmId;
  }
  GroupUpdateCommand.prototype.zo = function () {
    return this.id;
  };
  GroupUpdateCommand.prototype.s8 = function () {
    return this.name;
  };
  GroupUpdateCommand.prototype.tt = function () {
    return this.attributes;
  };
  GroupUpdateCommand.prototype.gr = function () {
    return this.roles;
  };
  GroupUpdateCommand.prototype.bt = function () {
    return this.xt_1;
  };
  GroupUpdateCommand.prototype.fs = function () {
    return this.realmId;
  };
  Object.defineProperty(GroupUpdateCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function GroupUpdatedEvent(id) {
    this.id = id;
  }
  GroupUpdatedEvent.prototype.zo = function () {
    return this.id;
  };
  function UserCreateCommand_init_$Init$(realmId, username, firstname, lastname, email, isEnable, isEmailVerified, attributes, auth, password, isPasswordTemporary, $mask0, $marker, $this) {
    if (!(($mask0 & 512) === 0))
      password = null;
    if (!(($mask0 & 1024) === 0))
      isPasswordTemporary = false;
    UserCreateCommand.call($this, realmId, username, firstname, lastname, email, isEnable, isEmailVerified, attributes, auth, password, isPasswordTemporary);
    return $this;
  }
  function UserCreateCommand_init_$Create$(realmId, username, firstname, lastname, email, isEnable, isEmailVerified, attributes, auth, password, isPasswordTemporary, $mask0, $marker) {
    return UserCreateCommand_init_$Init$(realmId, username, firstname, lastname, email, isEnable, isEmailVerified, attributes, auth, password, isPasswordTemporary, $mask0, $marker, Object.create(UserCreateCommand.prototype));
  }
  function UserCreateCommand(realmId, username, firstname, lastname, email, isEnable, isEmailVerified, attributes, auth, password, isPasswordTemporary) {
    var password_0 = password === void 1 ? null : password;
    var isPasswordTemporary_0 = isPasswordTemporary === void 1 ? false : isPasswordTemporary;
    this.realmId = realmId;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.isEnable = isEnable;
    this.isEmailVerified = isEmailVerified;
    this.attributes = attributes;
    this.auth = auth;
    this.password = password_0;
    this.isPasswordTemporary = isPasswordTemporary_0;
  }
  UserCreateCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserCreateCommand.prototype.qs = function () {
    return this.username;
  };
  UserCreateCommand.prototype.yt = function () {
    return this.firstname;
  };
  UserCreateCommand.prototype.zt = function () {
    return this.lastname;
  };
  UserCreateCommand.prototype.au = function () {
    return this.email;
  };
  UserCreateCommand.prototype.bu = function () {
    return this.isEnable;
  };
  UserCreateCommand.prototype.cu = function () {
    return this.isEmailVerified;
  };
  UserCreateCommand.prototype.tt = function () {
    return this.attributes;
  };
  UserCreateCommand.prototype.bt = function () {
    return this.auth;
  };
  UserCreateCommand.prototype.rs = function () {
    return this.password;
  };
  UserCreateCommand.prototype.du = function () {
    return this.isPasswordTemporary;
  };
  function UserCreatedEvent(id) {
    this.id = id;
  }
  UserCreatedEvent.prototype.zo = function () {
    return this.id;
  };
  function UserDeleteCommand(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.eu_1 = auth;
  }
  UserDeleteCommand.prototype.zo = function () {
    return this.id;
  };
  UserDeleteCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserDeleteCommand.prototype.bt = function () {
    return this.eu_1;
  };
  Object.defineProperty(UserDeleteCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserDeletedEvent(id) {
    this.id = id;
  }
  UserDeletedEvent.prototype.zo = function () {
    return this.id;
  };
  function UserDisableCommand(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.auth = auth;
  }
  UserDisableCommand.prototype.zo = function () {
    return this.id;
  };
  UserDisableCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserDisableCommand.prototype.bt = function () {
    return this.auth;
  };
  function UserDisabledEvent(id) {
    this.id = id;
  }
  UserDisabledEvent.prototype.zo = function () {
    return this.id;
  };
  function UserEmailSendActionsCommand(userId, clientId, redirectUri, actions, realmId, auth) {
    this.userId = userId;
    this.clientId = clientId;
    this.redirectUri = redirectUri;
    this.actions = actions;
    this.realmId = realmId;
    this.fu_1 = auth;
  }
  UserEmailSendActionsCommand.prototype.gu = function () {
    return this.userId;
  };
  UserEmailSendActionsCommand.prototype.gs = function () {
    return this.clientId;
  };
  UserEmailSendActionsCommand.prototype.hu = function () {
    return this.redirectUri;
  };
  UserEmailSendActionsCommand.prototype.iu = function () {
    return this.actions;
  };
  UserEmailSendActionsCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserEmailSendActionsCommand.prototype.bt = function () {
    return this.fu_1;
  };
  Object.defineProperty(UserEmailSendActionsCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserEmailSentActionsEvent(id) {
    this.id = id;
  }
  UserEmailSentActionsEvent.prototype.zo = function () {
    return this.id;
  };
  function UserJoinGroupCommand_init_$Init$(id, groupId, leaveOtherGroups, realmId, auth, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      leaveOtherGroups = false;
    UserJoinGroupCommand.call($this, id, groupId, leaveOtherGroups, realmId, auth);
    return $this;
  }
  function UserJoinGroupCommand_init_$Create$(id, groupId, leaveOtherGroups, realmId, auth, $mask0, $marker) {
    return UserJoinGroupCommand_init_$Init$(id, groupId, leaveOtherGroups, realmId, auth, $mask0, $marker, Object.create(UserJoinGroupCommand.prototype));
  }
  function UserJoinGroupCommand(id, groupId, leaveOtherGroups, realmId, auth) {
    var leaveOtherGroups_0 = leaveOtherGroups === void 1 ? false : leaveOtherGroups;
    this.id = id;
    this.groupId = groupId;
    this.leaveOtherGroups = leaveOtherGroups_0;
    this.realmId = realmId;
    this.ju_1 = auth;
  }
  UserJoinGroupCommand.prototype.zo = function () {
    return this.id;
  };
  UserJoinGroupCommand.prototype.ku = function () {
    return this.groupId;
  };
  UserJoinGroupCommand.prototype.lu = function () {
    return this.leaveOtherGroups;
  };
  UserJoinGroupCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserJoinGroupCommand.prototype.bt = function () {
    return this.ju_1;
  };
  Object.defineProperty(UserJoinGroupCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserJoinedGroupEvent(id, groupId, groupsLeft) {
    this.id = id;
    this.groupId = groupId;
    this.groupsLeft = groupsLeft;
  }
  UserJoinedGroupEvent.prototype.zo = function () {
    return this.id;
  };
  UserJoinedGroupEvent.prototype.ku = function () {
    return this.groupId;
  };
  UserJoinedGroupEvent.prototype.mu = function () {
    return this.groupsLeft;
  };
  function UserRolesGrantCommand_init_$Init$(id, roles, auth, realmId, clientId, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      realmId = auth.realmId;
    if (!(($mask0 & 16) === 0))
      clientId = null;
    UserRolesGrantCommand.call($this, id, roles, auth, realmId, clientId);
    return $this;
  }
  function UserRolesGrantCommand_init_$Create$(id, roles, auth, realmId, clientId, $mask0, $marker) {
    return UserRolesGrantCommand_init_$Init$(id, roles, auth, realmId, clientId, $mask0, $marker, Object.create(UserRolesGrantCommand.prototype));
  }
  function UserRolesGrantCommand(id, roles, auth, realmId, clientId) {
    var realmId_0 = realmId === void 1 ? auth.realmId : realmId;
    var clientId_0 = clientId === void 1 ? null : clientId;
    this.id = id;
    this.roles = roles;
    this.nu_1 = auth;
    this.realmId = realmId_0;
    this.clientId = clientId_0;
  }
  UserRolesGrantCommand.prototype.zo = function () {
    return this.id;
  };
  UserRolesGrantCommand.prototype.gr = function () {
    return this.roles;
  };
  UserRolesGrantCommand.prototype.bt = function () {
    return this.nu_1;
  };
  UserRolesGrantCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserRolesGrantCommand.prototype.gs = function () {
    return this.clientId;
  };
  Object.defineProperty(UserRolesGrantCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserRolesGrantedEvent(id) {
    this.id = id;
  }
  UserRolesGrantedEvent.prototype.zo = function () {
    return this.id;
  };
  function UserRolesRevokeCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      realmId = auth.realmId;
    UserRolesRevokeCommand.call($this, id, roles, auth, realmId);
    return $this;
  }
  function UserRolesRevokeCommand_init_$Create$(id, roles, auth, realmId, $mask0, $marker) {
    return UserRolesRevokeCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, Object.create(UserRolesRevokeCommand.prototype));
  }
  function UserRolesRevokeCommand(id, roles, auth, realmId) {
    var realmId_0 = realmId === void 1 ? auth.realmId : realmId;
    this.id = id;
    this.roles = roles;
    this.ou_1 = auth;
    this.realmId = realmId_0;
  }
  UserRolesRevokeCommand.prototype.zo = function () {
    return this.id;
  };
  UserRolesRevokeCommand.prototype.gr = function () {
    return this.roles;
  };
  UserRolesRevokeCommand.prototype.bt = function () {
    return this.ou_1;
  };
  UserRolesRevokeCommand.prototype.fs = function () {
    return this.realmId;
  };
  Object.defineProperty(UserRolesRevokeCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserRolesRevokedEvent(id) {
    this.id = id;
  }
  UserRolesRevokedEvent.prototype.zo = function () {
    return this.id;
  };
  function UserRolesSetCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      realmId = auth.realmId;
    UserRolesSetCommand.call($this, id, roles, auth, realmId);
    return $this;
  }
  function UserRolesSetCommand_init_$Create$(id, roles, auth, realmId, $mask0, $marker) {
    return UserRolesSetCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, Object.create(UserRolesSetCommand.prototype));
  }
  function UserRolesSetCommand(id, roles, auth, realmId) {
    var realmId_0 = realmId === void 1 ? auth.realmId : realmId;
    this.id = id;
    this.roles = roles;
    this.pu_1 = auth;
    this.realmId = realmId_0;
  }
  UserRolesSetCommand.prototype.zo = function () {
    return this.id;
  };
  UserRolesSetCommand.prototype.gr = function () {
    return this.roles;
  };
  UserRolesSetCommand.prototype.bt = function () {
    return this.pu_1;
  };
  UserRolesSetCommand.prototype.fs = function () {
    return this.realmId;
  };
  Object.defineProperty(UserRolesSetCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserRolesSetEvent(id) {
    this.id = id;
  }
  UserRolesSetEvent.prototype.zo = function () {
    return this.id;
  };
  function UserSetAttributesCommand(id, attributes, realmId, auth) {
    this.id = id;
    this.attributes = attributes;
    this.realmId = realmId;
    this.qu_1 = auth;
  }
  UserSetAttributesCommand.prototype.zo = function () {
    return this.id;
  };
  UserSetAttributesCommand.prototype.tt = function () {
    return this.attributes;
  };
  UserSetAttributesCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserSetAttributesCommand.prototype.bt = function () {
    return this.qu_1;
  };
  Object.defineProperty(UserSetAttributesCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserSetAttributesEvent(id) {
    this.id = id;
  }
  UserSetAttributesEvent.prototype.zo = function () {
    return this.id;
  };
  function UserUpdateEmailCommand_init_$Init$(userId, email, sendVerificationEmail, clientId, redirectUri, realmId, auth, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      clientId = null;
    if (!(($mask0 & 16) === 0))
      redirectUri = null;
    UserUpdateEmailCommand.call($this, userId, email, sendVerificationEmail, clientId, redirectUri, realmId, auth);
    return $this;
  }
  function UserUpdateEmailCommand_init_$Create$(userId, email, sendVerificationEmail, clientId, redirectUri, realmId, auth, $mask0, $marker) {
    return UserUpdateEmailCommand_init_$Init$(userId, email, sendVerificationEmail, clientId, redirectUri, realmId, auth, $mask0, $marker, Object.create(UserUpdateEmailCommand.prototype));
  }
  function UserUpdateEmailCommand(userId, email, sendVerificationEmail, clientId, redirectUri, realmId, auth) {
    var clientId_0 = clientId === void 1 ? null : clientId;
    var redirectUri_0 = redirectUri === void 1 ? null : redirectUri;
    this.userId = userId;
    this.email = email;
    this.sendVerificationEmail = sendVerificationEmail;
    this.clientId = clientId_0;
    this.redirectUri = redirectUri_0;
    this.realmId = realmId;
    this.ru_1 = auth;
  }
  UserUpdateEmailCommand.prototype.gu = function () {
    return this.userId;
  };
  UserUpdateEmailCommand.prototype.au = function () {
    return this.email;
  };
  UserUpdateEmailCommand.prototype.su = function () {
    return this.sendVerificationEmail;
  };
  UserUpdateEmailCommand.prototype.gs = function () {
    return this.clientId;
  };
  UserUpdateEmailCommand.prototype.hu = function () {
    return this.redirectUri;
  };
  UserUpdateEmailCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserUpdateEmailCommand.prototype.bt = function () {
    return this.ru_1;
  };
  Object.defineProperty(UserUpdateEmailCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserUpdatedEmailEvent(userId) {
    this.userId = userId;
  }
  UserUpdatedEmailEvent.prototype.gu = function () {
    return this.userId;
  };
  function UserUpdateCommand(userId, realmId, auth, firstname, lastname, attributes) {
    this.userId = userId;
    this.realmId = realmId;
    this.auth = auth;
    this.firstname = firstname;
    this.lastname = lastname;
    this.attributes = attributes;
  }
  UserUpdateCommand.prototype.gu = function () {
    return this.userId;
  };
  UserUpdateCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserUpdateCommand.prototype.bt = function () {
    return this.auth;
  };
  UserUpdateCommand.prototype.yt = function () {
    return this.firstname;
  };
  UserUpdateCommand.prototype.zt = function () {
    return this.lastname;
  };
  UserUpdateCommand.prototype.tt = function () {
    return this.attributes;
  };
  function UserUpdatedEvent(id) {
    this.id = id;
  }
  UserUpdatedEvent.prototype.zo = function () {
    return this.id;
  };
  function UserUpdatePasswordCommand(userId, password, realmId, auth) {
    this.userId = userId;
    this.password = password;
    this.realmId = realmId;
    this.tu_1 = auth;
  }
  UserUpdatePasswordCommand.prototype.gu = function () {
    return this.userId;
  };
  UserUpdatePasswordCommand.prototype.rs = function () {
    return this.password;
  };
  UserUpdatePasswordCommand.prototype.fs = function () {
    return this.realmId;
  };
  UserUpdatePasswordCommand.prototype.bt = function () {
    return this.tu_1;
  };
  Object.defineProperty(UserUpdatePasswordCommand.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserUpdatedPasswordEvent(userId) {
    this.userId = userId;
  }
  UserUpdatedPasswordEvent.prototype.gu = function () {
    return this.userId;
  };
  function UserGetByEmailQuery(email, realmId, auth) {
    this.email = email;
    this.realmId = realmId;
    this.uu_1 = auth;
  }
  UserGetByEmailQuery.prototype.au = function () {
    return this.email;
  };
  UserGetByEmailQuery.prototype.fs = function () {
    return this.realmId;
  };
  UserGetByEmailQuery.prototype.bt = function () {
    return this.uu_1;
  };
  Object.defineProperty(UserGetByEmailQuery.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserGetByEmailQueryResult(item) {
    this.item = item;
  }
  UserGetByEmailQueryResult.prototype.kt = function () {
    return this.item;
  };
  function UserGetByUsernameQuery(realmId, username, auth) {
    this.realmId = realmId;
    this.username = username;
    this.vu_1 = auth;
  }
  UserGetByUsernameQuery.prototype.fs = function () {
    return this.realmId;
  };
  UserGetByUsernameQuery.prototype.qs = function () {
    return this.username;
  };
  UserGetByUsernameQuery.prototype.bt = function () {
    return this.vu_1;
  };
  Object.defineProperty(UserGetByUsernameQuery.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserGetByUsernameResult(item) {
    this.item = item;
  }
  UserGetByUsernameResult.prototype.kt = function () {
    return this.item;
  };
  function UserGetQuery(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.wu_1 = auth;
  }
  UserGetQuery.prototype.zo = function () {
    return this.id;
  };
  UserGetQuery.prototype.fs = function () {
    return this.realmId;
  };
  UserGetQuery.prototype.bt = function () {
    return this.wu_1;
  };
  Object.defineProperty(UserGetQuery.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserGetResult(item) {
    this.item = item;
  }
  UserGetResult.prototype.kt = function () {
    return this.item;
  };
  function UserGetGroupsQuery(userId, realmId, auth) {
    this.userId = userId;
    this.realmId = realmId;
    this.xu_1 = auth;
  }
  UserGetGroupsQuery.prototype.gu = function () {
    return this.userId;
  };
  UserGetGroupsQuery.prototype.fs = function () {
    return this.realmId;
  };
  UserGetGroupsQuery.prototype.bt = function () {
    return this.xu_1;
  };
  Object.defineProperty(UserGetGroupsQuery.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserGetGroupsResult(items) {
    this.items = items;
  }
  UserGetGroupsResult.prototype.bq = function () {
    return this.items;
  };
  function UserGetRolesQuery(userId, realmId, auth) {
    this.userId = userId;
    this.realmId = realmId;
    this.yu_1 = auth;
  }
  UserGetRolesQuery.prototype.gu = function () {
    return this.userId;
  };
  UserGetRolesQuery.prototype.fs = function () {
    return this.realmId;
  };
  UserGetRolesQuery.prototype.bt = function () {
    return this.yu_1;
  };
  Object.defineProperty(UserGetRolesQuery.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserGetRolesResult(roles) {
    this.roles = roles;
  }
  UserGetRolesResult.prototype.gr = function () {
    return this.roles;
  };
  function UserPageQuery_init_$Init$(groupId, search, roles, attributes, withDisabled, page, realmId, auth, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      groupId = null;
    if (!(($mask0 & 2) === 0))
      search = null;
    if (!(($mask0 & 4) === 0))
      roles = null;
    if (!(($mask0 & 8) === 0))
      attributes = emptyMap();
    UserPageQuery.call($this, groupId, search, roles, attributes, withDisabled, page, realmId, auth);
    return $this;
  }
  function UserPageQuery_init_$Create$(groupId, search, roles, attributes, withDisabled, page, realmId, auth, $mask0, $marker) {
    return UserPageQuery_init_$Init$(groupId, search, roles, attributes, withDisabled, page, realmId, auth, $mask0, $marker, Object.create(UserPageQuery.prototype));
  }
  function UserPageQuery(groupId, search, roles, attributes, withDisabled, page, realmId, auth) {
    var groupId_0 = groupId === void 1 ? null : groupId;
    var search_0 = search === void 1 ? null : search;
    var roles_0 = roles === void 1 ? null : roles;
    var attributes_0 = attributes === void 1 ? emptyMap() : attributes;
    this.groupId = groupId_0;
    this.search = search_0;
    this.roles = roles_0;
    this.attributes = attributes_0;
    this.withDisabled = withDisabled;
    this.page = page;
    this.realmId = realmId;
    this.zu_1 = auth;
  }
  UserPageQuery.prototype.ku = function () {
    return this.groupId;
  };
  UserPageQuery.prototype.av = function () {
    return this.search;
  };
  UserPageQuery.prototype.gr = function () {
    return this.roles;
  };
  UserPageQuery.prototype.tt = function () {
    return this.attributes;
  };
  UserPageQuery.prototype.bv = function () {
    return this.withDisabled;
  };
  UserPageQuery.prototype.wq = function () {
    return this.page;
  };
  UserPageQuery.prototype.fs = function () {
    return this.realmId;
  };
  UserPageQuery.prototype.bt = function () {
    return this.zu_1;
  };
  Object.defineProperty(UserPageQuery.prototype, 'auth', {
    configurable: true,
    get: function () {
      return this.bt();
    }
  });
  function UserPageResult(items) {
    this.items = items;
  }
  UserPageResult.prototype.bq = function () {
    return this.items;
  };
  function UserGroup(id, name, roles) {
    this.id = id;
    this.name = name;
    this.roles = roles;
  }
  UserGroup.prototype.zo = function () {
    return this.id;
  };
  UserGroup.prototype.s8 = function () {
    return this.name;
  };
  UserGroup.prototype.gr = function () {
    return this.roles;
  };
  function UserModel(id, email, firstName, lastName, roles, attributes, enabled, creationDate) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
    this.attributes = attributes;
    this.enabled = enabled;
    this.creationDate = creationDate;
  }
  UserModel.prototype.zo = function () {
    return this.id;
  };
  UserModel.prototype.au = function () {
    return this.email;
  };
  UserModel.prototype.cv = function () {
    return this.firstName;
  };
  UserModel.prototype.dv = function () {
    return this.lastName;
  };
  UserModel.prototype.gr = function () {
    return this.roles;
  };
  UserModel.prototype.tt = function () {
    return this.attributes;
  };
  UserModel.prototype.ev = function () {
    return this.enabled;
  };
  UserModel.prototype.fv = function () {
    return this.creationDate;
  };
  function ClientModel(id, clientIdentifier) {
    this.id = id;
    this.clientIdentifier = clientIdentifier;
  }
  ClientModel.prototype.zo = function () {
    return this.id;
  };
  ClientModel.prototype.gv = function () {
    return this.clientIdentifier;
  };
  function ClientGetByClientIdentifierQuery(clientIdentifier, realmId, auth) {
    this.clientIdentifier = clientIdentifier;
    this.realmId = realmId;
    this.auth = auth;
  }
  ClientGetByClientIdentifierQuery.prototype.gv = function () {
    return this.clientIdentifier;
  };
  ClientGetByClientIdentifierQuery.prototype.fs = function () {
    return this.realmId;
  };
  ClientGetByClientIdentifierQuery.prototype.bt = function () {
    return this.auth;
  };
  function ClientGetByClientIdentifierResult(item) {
    this.item = item;
  }
  ClientGetByClientIdentifierResult.prototype.kt = function () {
    return this.item;
  };
  function ClientGetQuery(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.auth = auth;
  }
  ClientGetQuery.prototype.zo = function () {
    return this.id;
  };
  ClientGetQuery.prototype.fs = function () {
    return this.realmId;
  };
  ClientGetQuery.prototype.bt = function () {
    return this.auth;
  };
  function ClientGetResult(item) {
    this.item = item;
  }
  ClientGetResult.prototype.kt = function () {
    return this.item;
  };
  function ClientGetSecretQuery(clientId, realmId, auth) {
    this.clientId = clientId;
    this.realmId = realmId;
    this.auth = auth;
  }
  ClientGetSecretQuery.prototype.gs = function () {
    return this.clientId;
  };
  ClientGetSecretQuery.prototype.fs = function () {
    return this.realmId;
  };
  ClientGetSecretQuery.prototype.bt = function () {
    return this.auth;
  };
  function ClientGetSecretResult(secret) {
    this.secret = secret;
  }
  ClientGetSecretResult.prototype.hv = function () {
    return this.secret;
  };
  function ClientGetServiceAccountQuery(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.auth = auth;
  }
  ClientGetServiceAccountQuery.prototype.zo = function () {
    return this.id;
  };
  ClientGetServiceAccountQuery.prototype.fs = function () {
    return this.realmId;
  };
  ClientGetServiceAccountQuery.prototype.bt = function () {
    return this.auth;
  };
  function ClientGetServiceAccountResult(item) {
    this.item = item;
  }
  ClientGetServiceAccountResult.prototype.kt = function () {
    return this.item;
  };
  function ClientPageQuery(realmId, page, auth) {
    this.realmId = realmId;
    this.page = page;
    this.auth = auth;
  }
  ClientPageQuery.prototype.fs = function () {
    return this.realmId;
  };
  ClientPageQuery.prototype.wq = function () {
    return this.page;
  };
  ClientPageQuery.prototype.bt = function () {
    return this.auth;
  };
  function ClientPageResult(page) {
    this.page = page;
  }
  ClientPageResult.prototype.wq = function () {
    return this.page;
  };
  function ClientCreateCommand_init_$Init$(auth, realmId, clientIdentifier, secret, isPublicClient, isDirectAccessGrantsEnabled, isServiceAccountsEnabled, authorizationServicesEnabled, isStandardFlowEnabled, rootUrl, redirectUris, baseUrl, adminUrl, webOrigins, protocolMappers, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      secret = null;
    if (!(($mask0 & 16) === 0))
      isPublicClient = true;
    if (!(($mask0 & 32) === 0))
      isDirectAccessGrantsEnabled = true;
    if (!(($mask0 & 64) === 0))
      isServiceAccountsEnabled = true;
    if (!(($mask0 & 128) === 0))
      authorizationServicesEnabled = false;
    if (!(($mask0 & 256) === 0))
      isStandardFlowEnabled = false;
    if (!(($mask0 & 512) === 0))
      rootUrl = null;
    if (!(($mask0 & 1024) === 0))
      redirectUris = emptyList();
    if (!(($mask0 & 2048) === 0))
      baseUrl = '';
    if (!(($mask0 & 4096) === 0))
      adminUrl = '';
    if (!(($mask0 & 8192) === 0))
      webOrigins = emptyList();
    if (!(($mask0 & 16384) === 0))
      protocolMappers = emptyMap();
    ClientCreateCommand.call($this, auth, realmId, clientIdentifier, secret, isPublicClient, isDirectAccessGrantsEnabled, isServiceAccountsEnabled, authorizationServicesEnabled, isStandardFlowEnabled, rootUrl, redirectUris, baseUrl, adminUrl, webOrigins, protocolMappers);
    return $this;
  }
  function ClientCreateCommand_init_$Create$(auth, realmId, clientIdentifier, secret, isPublicClient, isDirectAccessGrantsEnabled, isServiceAccountsEnabled, authorizationServicesEnabled, isStandardFlowEnabled, rootUrl, redirectUris, baseUrl, adminUrl, webOrigins, protocolMappers, $mask0, $marker) {
    return ClientCreateCommand_init_$Init$(auth, realmId, clientIdentifier, secret, isPublicClient, isDirectAccessGrantsEnabled, isServiceAccountsEnabled, authorizationServicesEnabled, isStandardFlowEnabled, rootUrl, redirectUris, baseUrl, adminUrl, webOrigins, protocolMappers, $mask0, $marker, Object.create(ClientCreateCommand.prototype));
  }
  function ClientCreateCommand(auth, realmId, clientIdentifier, secret, isPublicClient, isDirectAccessGrantsEnabled, isServiceAccountsEnabled, authorizationServicesEnabled, isStandardFlowEnabled, rootUrl, redirectUris, baseUrl, adminUrl, webOrigins, protocolMappers) {
    var secret_0 = secret === void 1 ? null : secret;
    var isPublicClient_0 = isPublicClient === void 1 ? true : isPublicClient;
    var isDirectAccessGrantsEnabled_0 = isDirectAccessGrantsEnabled === void 1 ? true : isDirectAccessGrantsEnabled;
    var isServiceAccountsEnabled_0 = isServiceAccountsEnabled === void 1 ? true : isServiceAccountsEnabled;
    var authorizationServicesEnabled_0 = authorizationServicesEnabled === void 1 ? false : authorizationServicesEnabled;
    var isStandardFlowEnabled_0 = isStandardFlowEnabled === void 1 ? false : isStandardFlowEnabled;
    var rootUrl_0 = rootUrl === void 1 ? null : rootUrl;
    var redirectUris_0 = redirectUris === void 1 ? emptyList() : redirectUris;
    var baseUrl_0 = baseUrl === void 1 ? '' : baseUrl;
    var adminUrl_0 = adminUrl === void 1 ? '' : adminUrl;
    var webOrigins_0 = webOrigins === void 1 ? emptyList() : webOrigins;
    var protocolMappers_0 = protocolMappers === void 1 ? emptyMap() : protocolMappers;
    this.auth = auth;
    this.realmId = realmId;
    this.clientIdentifier = clientIdentifier;
    this.secret = secret_0;
    this.isPublicClient = isPublicClient_0;
    this.isDirectAccessGrantsEnabled = isDirectAccessGrantsEnabled_0;
    this.isServiceAccountsEnabled = isServiceAccountsEnabled_0;
    this.authorizationServicesEnabled = authorizationServicesEnabled_0;
    this.isStandardFlowEnabled = isStandardFlowEnabled_0;
    this.rootUrl = rootUrl_0;
    this.redirectUris = redirectUris_0;
    this.baseUrl = baseUrl_0;
    this.adminUrl = adminUrl_0;
    this.webOrigins = webOrigins_0;
    this.protocolMappers = protocolMappers_0;
  }
  ClientCreateCommand.prototype.bt = function () {
    return this.auth;
  };
  ClientCreateCommand.prototype.fs = function () {
    return this.realmId;
  };
  ClientCreateCommand.prototype.gv = function () {
    return this.clientIdentifier;
  };
  ClientCreateCommand.prototype.hv = function () {
    return this.secret;
  };
  ClientCreateCommand.prototype.iv = function () {
    return this.isPublicClient;
  };
  ClientCreateCommand.prototype.jv = function () {
    return this.isDirectAccessGrantsEnabled;
  };
  ClientCreateCommand.prototype.kv = function () {
    return this.isServiceAccountsEnabled;
  };
  ClientCreateCommand.prototype.lv = function () {
    return this.authorizationServicesEnabled;
  };
  ClientCreateCommand.prototype.mv = function () {
    return this.isStandardFlowEnabled;
  };
  ClientCreateCommand.prototype.nv = function () {
    return this.rootUrl;
  };
  ClientCreateCommand.prototype.ov = function () {
    return this.redirectUris;
  };
  ClientCreateCommand.prototype.pv = function () {
    return this.baseUrl;
  };
  ClientCreateCommand.prototype.qv = function () {
    return this.adminUrl;
  };
  ClientCreateCommand.prototype.rv = function () {
    return this.webOrigins;
  };
  ClientCreateCommand.prototype.sv = function () {
    return this.protocolMappers;
  };
  function ClientCreatedEvent(id) {
    this.id = id;
  }
  ClientCreatedEvent.prototype.zo = function () {
    return this.id;
  };
  function ClientDeleteCommand(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.auth = auth;
  }
  ClientDeleteCommand.prototype.zo = function () {
    return this.id;
  };
  ClientDeleteCommand.prototype.fs = function () {
    return this.realmId;
  };
  ClientDeleteCommand.prototype.bt = function () {
    return this.auth;
  };
  function ClientDeletedEvent(id) {
    this.id = id;
  }
  ClientDeletedEvent.prototype.zo = function () {
    return this.id;
  };
  function ClientGenerateSecretCommand(id, realmId, auth) {
    this.id = id;
    this.realmId = realmId;
    this.auth = auth;
  }
  ClientGenerateSecretCommand.prototype.zo = function () {
    return this.id;
  };
  ClientGenerateSecretCommand.prototype.fs = function () {
    return this.realmId;
  };
  ClientGenerateSecretCommand.prototype.bt = function () {
    return this.auth;
  };
  function ClientGeneratedSecretEvent(secret) {
    this.secret = secret;
  }
  ClientGeneratedSecretEvent.prototype.hv = function () {
    return this.secret;
  };
  function ClientRealmManagementRolesGrantCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      realmId = auth.realmId;
    ClientRealmManagementRolesGrantCommand.call($this, id, roles, auth, realmId);
    return $this;
  }
  function ClientRealmManagementRolesGrantCommand_init_$Create$(id, roles, auth, realmId, $mask0, $marker) {
    return ClientRealmManagementRolesGrantCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, Object.create(ClientRealmManagementRolesGrantCommand.prototype));
  }
  function ClientRealmManagementRolesGrantCommand(id, roles, auth, realmId) {
    var realmId_0 = realmId === void 1 ? auth.realmId : realmId;
    this.id = id;
    this.roles = roles;
    this.auth = auth;
    this.realmId = realmId_0;
  }
  ClientRealmManagementRolesGrantCommand.prototype.zo = function () {
    return this.id;
  };
  ClientRealmManagementRolesGrantCommand.prototype.gr = function () {
    return this.roles;
  };
  ClientRealmManagementRolesGrantCommand.prototype.bt = function () {
    return this.auth;
  };
  ClientRealmManagementRolesGrantCommand.prototype.fs = function () {
    return this.realmId;
  };
  function ClientRealmManagementRolesGrantedEvent(id) {
    this.id = id;
  }
  ClientRealmManagementRolesGrantedEvent.prototype.zo = function () {
    return this.id;
  };
  function ClientServiceAccountRolesGrantCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      realmId = auth.realmId;
    ClientServiceAccountRolesGrantCommand.call($this, id, roles, auth, realmId);
    return $this;
  }
  function ClientServiceAccountRolesGrantCommand_init_$Create$(id, roles, auth, realmId, $mask0, $marker) {
    return ClientServiceAccountRolesGrantCommand_init_$Init$(id, roles, auth, realmId, $mask0, $marker, Object.create(ClientServiceAccountRolesGrantCommand.prototype));
  }
  function ClientServiceAccountRolesGrantCommand(id, roles, auth, realmId) {
    var realmId_0 = realmId === void 1 ? auth.realmId : realmId;
    this.id = id;
    this.roles = roles;
    this.auth = auth;
    this.realmId = realmId_0;
  }
  ClientServiceAccountRolesGrantCommand.prototype.zo = function () {
    return this.id;
  };
  ClientServiceAccountRolesGrantCommand.prototype.gr = function () {
    return this.roles;
  };
  ClientServiceAccountRolesGrantCommand.prototype.bt = function () {
    return this.auth;
  };
  ClientServiceAccountRolesGrantCommand.prototype.fs = function () {
    return this.realmId;
  };
  function ClientServiceAccountRolesGrantedEvent(id) {
    this.id = id;
  }
  ClientServiceAccountRolesGrantedEvent.prototype.zo = function () {
    return this.id;
  };
  function ClientUpdateUrisCommand(id, realmId, auth, rootUrl, redirectUris, baseUrl) {
    this.id = id;
    this.realmId = realmId;
    this.auth = auth;
    this.rootUrl = rootUrl;
    this.redirectUris = redirectUris;
    this.baseUrl = baseUrl;
  }
  ClientUpdateUrisCommand.prototype.zo = function () {
    return this.id;
  };
  ClientUpdateUrisCommand.prototype.fs = function () {
    return this.realmId;
  };
  ClientUpdateUrisCommand.prototype.bt = function () {
    return this.auth;
  };
  ClientUpdateUrisCommand.prototype.nv = function () {
    return this.rootUrl;
  };
  ClientUpdateUrisCommand.prototype.ov = function () {
    return this.redirectUris;
  };
  ClientUpdateUrisCommand.prototype.pv = function () {
    return this.baseUrl;
  };
  function ClientUpdatedUrisEvent(id) {
    this.id = id;
  }
  ClientUpdatedUrisEvent.prototype.zo = function () {
    return this.id;
  };
  function OrganizationCreateCommandDTO() {
  }
  function OrganizationCreatedEventDTO() {
  }
  function OrganizationDeleteCommandDTO() {
  }
  function OrganizationDeletedEventDTO() {
  }
  function OrganizationDisableCommandDTO() {
  }
  function OrganizationDisabledEventDTO() {
  }
  function OrganizationUpdateCommandDTO() {
  }
  function OrganizationUpdatedResultDTO() {
  }
  function OrganizationUploadLogoCommandDTO() {
  }
  function OrganizationUploadedLogoEventDTO() {
  }
  function OrganizationGetFromInseeQueryDTO() {
  }
  function OrganizationGetFromInseeResultDTO() {
  }
  function OrganizationGetQueryDTO() {
  }
  function OrganizationGetResultDTO() {
  }
  function OrganizationPageQueryDTO() {
  }
  function OrganizationPageResultDTO() {
  }
  function OrganizationRefListQueryDTO() {
  }
  function OrganizationRefListResultDTO() {
  }
  function OrganizationDTO() {
  }
  function OrganizationRefDTO() {
  }
  function OrganizationPolicies() {
    OrganizationPolicies_instance = this;
  }
  OrganizationPolicies.prototype.canGet = function (authedUser, organizationId) {
    return hasRole(authedUser, Role_IM_ORGANIZATION_READ_getInstance()) ? true : authedUser.memberOf === organizationId;
  };
  OrganizationPolicies.prototype.canList = function (authedUser) {
    return hasRole(authedUser, Role_IM_ORGANIZATION_READ_getInstance());
  };
  OrganizationPolicies.prototype.checkRefList = function (authedUser) {
    return true;
  };
  OrganizationPolicies.prototype.canCreate = function (authedUser) {
    return hasRole(authedUser, Role_IM_ORGANIZATION_WRITE_getInstance());
  };
  OrganizationPolicies.prototype.canUpdate = function (authedUser, organizationId) {
    return hasRole(authedUser, Role_IM_ORGANIZATION_WRITE_getInstance()) ? true : hasRole(authedUser, Role_IM_MY_ORGANIZATION_WRITE_getInstance()) ? authedUser.memberOf === organizationId : false;
  };
  OrganizationPolicies.prototype.canDisable = function (authedUser, organizationId) {
    return hasRole(authedUser, Role_IM_ORGANIZATION_WRITE_getInstance());
  };
  OrganizationPolicies.prototype.canDelete = function (authedUser, organizationId) {
    return hasRole(authedUser, Role_IM_ORGANIZATION_WRITE_getInstance());
  };
  var OrganizationPolicies_instance;
  function OrganizationPolicies_getInstance() {
    if (OrganizationPolicies_instance == null)
      new OrganizationPolicies();
    return OrganizationPolicies_instance;
  }
  function UserCreateCommandDTO() {
  }
  function UserCreatedEventDTO() {
  }
  function UserDeleteCommandDTO() {
  }
  function UserDeletedEventDTO() {
  }
  function UserDisableCommandDTO() {
  }
  function UserDisabledEventDTO() {
  }
  function UserResetPasswordCommandDTO() {
  }
  function UserResetPasswordEventDTO() {
  }
  function UserUpdateEmailCommandDTO() {
  }
  function UserUpdatedEmailEventDTO() {
  }
  function UserUpdateCommandDTO() {
  }
  function UserUpdatedEventDTO() {
  }
  function UserUpdatePasswordCommandDTO() {
  }
  function UserUpdatedPasswordEventDTO() {
  }
  function UserUploadLogoCommandDTO() {
  }
  function UserUploadedLogoEventDTO() {
  }
  function UserExistsByEmailQueryDTO() {
  }
  function UserExistsByEmailResultDTO() {
  }
  function UserGetByEmailQueryDTO() {
  }
  function UserGetByEmailResultDTO() {
  }
  function UserGetQueryDTO() {
  }
  function UserGetResultDTO() {
  }
  function UserPageQueryDTO() {
  }
  function UserPageResultDTO() {
  }
  function UserDTO() {
  }
  function UserPolicies() {
    UserPolicies_instance = this;
  }
  UserPolicies.prototype.canGet = function (authedUser, user) {
    var tmp;
    var tmp_0;
    if (hasRole(authedUser, Role_IM_USER_READ_getInstance())) {
      tmp_0 = true;
    } else {
      var tmp_1 = authedUser.id;
      var tmp0_safe_receiver = user;
      tmp_0 = tmp_1 === (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.id);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      var tmp1_safe_receiver = user;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.memberOf;
      tmp = (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.id) == authedUser.memberOf;
    }
    return tmp;
  };
  UserPolicies.prototype.canPage = function (authedUser) {
    return hasOneOfRoles(authedUser, [Role_IM_USER_READ_getInstance()]);
  };
  UserPolicies.prototype.checkRefList = function (authedUser) {
    return true;
  };
  UserPolicies.prototype.canCreate = function (authedUser) {
    return hasRole(authedUser, Role_IM_USER_WRITE_getInstance());
  };
  UserPolicies.prototype.canUpdate = function (authedUser, userId) {
    return hasRole(authedUser, Role_IM_USER_WRITE_getInstance()) ? true : authedUser.id === userId;
  };
  UserPolicies.prototype.canDisable = function (authedUser, userId) {
    return hasRole(authedUser, Role_IM_USER_WRITE_getInstance());
  };
  UserPolicies.prototype.canDelete = function (authedUser, userId) {
    return hasRole(authedUser, Role_IM_USER_WRITE_getInstance());
  };
  var UserPolicies_instance;
  function UserPolicies_getInstance() {
    if (UserPolicies_instance == null)
      new UserPolicies();
    return UserPolicies_instance;
  }
  function SsmChaincodeQueries() {
  }
  function SsmQueryDTO() {
  }
  function SsmItemResultDTO() {
  }
  function SsmItemsResultDTO() {
  }
  function BlockDTO() {
  }
  function Block(blockId, previousHash, dataHash, transactions) {
    this.sw_1 = blockId;
    this.tw_1 = previousHash;
    this.uw_1 = dataHash;
    this.vw_1 = transactions;
  }
  Block.prototype.ow = function () {
    return this.sw_1;
  };
  Block.prototype.pw = function () {
    return this.tw_1;
  };
  Block.prototype.qw = function () {
    return this.uw_1;
  };
  Block.prototype.rw = function () {
    return this.vw_1;
  };
  Object.defineProperty(Block.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this.ow();
    }
  });
  Object.defineProperty(Block.prototype, 'previousHash', {
    configurable: true,
    get: function () {
      return this.pw();
    }
  });
  Object.defineProperty(Block.prototype, 'dataHash', {
    configurable: true,
    get: function () {
      return this.qw();
    }
  });
  Object.defineProperty(Block.prototype, 'transactions', {
    configurable: true,
    get: function () {
      return this.rw();
    }
  });
  var EnvelopeType_TRANSACTION_ENVELOPE_instance;
  var EnvelopeType_ENVELOPE_instance;
  function values_0() {
    return [EnvelopeType_TRANSACTION_ENVELOPE_getInstance(), EnvelopeType_ENVELOPE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TRANSACTION_ENVELOPE':
        return EnvelopeType_TRANSACTION_ENVELOPE_getInstance();
      case 'ENVELOPE':
        return EnvelopeType_ENVELOPE_getInstance();
      default:
        EnvelopeType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var EnvelopeType_entriesInitialized;
  function EnvelopeType_initEntries() {
    if (EnvelopeType_entriesInitialized)
      return Unit_getInstance();
    EnvelopeType_entriesInitialized = true;
    EnvelopeType_TRANSACTION_ENVELOPE_instance = new EnvelopeType('TRANSACTION_ENVELOPE', 0);
    EnvelopeType_ENVELOPE_instance = new EnvelopeType('ENVELOPE', 1);
  }
  function EnvelopeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Object.defineProperty(EnvelopeType.prototype, 'name', {
    configurable: true,
    get: EnvelopeType.prototype.s8
  });
  Object.defineProperty(EnvelopeType.prototype, 'ordinal', {
    configurable: true,
    get: EnvelopeType.prototype.t8
  });
  function EnvelopeType_TRANSACTION_ENVELOPE_getInstance() {
    EnvelopeType_initEntries();
    return EnvelopeType_TRANSACTION_ENVELOPE_instance;
  }
  function EnvelopeType_ENVELOPE_getInstance() {
    EnvelopeType_initEntries();
    return EnvelopeType_ENVELOPE_instance;
  }
  function IdentitiesInfoDTO() {
  }
  function IdentitiesInfo(id, mspid) {
    this.zw_1 = id;
    this.ax_1 = mspid;
  }
  IdentitiesInfo.prototype.zo = function () {
    return this.zw_1;
  };
  IdentitiesInfo.prototype.yw = function () {
    return this.ax_1;
  };
  Object.defineProperty(IdentitiesInfo.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.zo();
    }
  });
  Object.defineProperty(IdentitiesInfo.prototype, 'mspid', {
    configurable: true,
    get: function () {
      return this.yw();
    }
  });
  function TransactionDTO() {
  }
  function Transaction(transactionId, blockId, timestamp, isValid, channelId, creator, nonce, type, validationCode) {
    this.ix_1 = transactionId;
    this.jx_1 = blockId;
    this.kx_1 = timestamp;
    this.lx_1 = isValid;
    this.mx_1 = channelId;
    this.nx_1 = creator;
    this.ox_1 = nonce;
    this.px_1 = type;
    this.qx_1 = validationCode;
  }
  Transaction.prototype.bx = function () {
    return this.ix_1;
  };
  Transaction.prototype.ow = function () {
    return this.jx_1;
  };
  Transaction.prototype.ap = function () {
    return this.kx_1;
  };
  Transaction.prototype.cx = function () {
    return this.lx_1;
  };
  Transaction.prototype.dx = function () {
    return this.mx_1;
  };
  Transaction.prototype.ex = function () {
    return this.nx_1;
  };
  Transaction.prototype.fx = function () {
    return this.ox_1;
  };
  Transaction.prototype.gx = function () {
    return this.px_1;
  };
  Transaction.prototype.hx = function () {
    return this.qx_1;
  };
  Object.defineProperty(Transaction.prototype, 'transactionId', {
    configurable: true,
    get: function () {
      return this.bx();
    }
  });
  Object.defineProperty(Transaction.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this.ow();
    }
  });
  Object.defineProperty(Transaction.prototype, 'timestamp', {
    configurable: true,
    get: function () {
      return this.ap();
    }
  });
  Object.defineProperty(Transaction.prototype, 'isValid', {
    configurable: true,
    get: function () {
      return this.cx();
    }
  });
  Object.defineProperty(Transaction.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this.dx();
    }
  });
  Object.defineProperty(Transaction.prototype, 'creator', {
    configurable: true,
    get: function () {
      return this.ex();
    }
  });
  Object.defineProperty(Transaction.prototype, 'nonce', {
    configurable: true,
    get: function () {
      return this.fx();
    }
  });
  Object.defineProperty(Transaction.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.gx();
    }
  });
  Object.defineProperty(Transaction.prototype, 'validationCode', {
    configurable: true,
    get: function () {
      return this.hx();
    }
  });
  function SsmChaincodePropertiesDTO() {
  }
  function ChaincodeSsmConfig(url) {
    this.rx_1 = url;
  }
  ChaincodeSsmConfig.prototype.dw = function () {
    return this.rx_1;
  };
  Object.defineProperty(ChaincodeSsmConfig.prototype, 'url', {
    configurable: true,
    get: function () {
      return this.dw();
    }
  });
  function AgentDTO() {
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Agent(name, pub) {
    Companion_getInstance_18();
    this.tx_1 = name;
    this.ux_1 = pub;
  }
  Agent.prototype.s8 = function () {
    return this.tx_1;
  };
  Agent.prototype.sx = function () {
    return this.ux_1;
  };
  Agent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Agent)
      other;
    else
      THROW_CCE();
    if (!(this.tx_1 === other.tx_1))
      return false;
    if (!contentEquals_0(this.ux_1, other.ux_1))
      return false;
    return true;
  };
  Agent.prototype.hashCode = function () {
    var result = getStringHashCode(this.tx_1);
    result = imul(31, result) + contentHashCode_0(this.ux_1) | 0;
    return result;
  };
  Agent.prototype.component1 = function () {
    return this.tx_1;
  };
  Agent.prototype.component2 = function () {
    return this.ux_1;
  };
  Agent.prototype.copy = function (name, pub) {
    return this.vx(name === void 1 ? this.tx_1 : name, pub === void 1 ? this.ux_1 : pub);
  };
  Agent.prototype.vx = function (name, pub) {
    return new Agent(name, pub);
  };
  Agent.prototype.wx = function (name, pub, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.tx_1;
    if (!(($mask0 & 2) === 0))
      pub = this.ux_1;
    return this.vx(name, pub);
  };
  Agent.prototype.toString = function () {
    return 'Agent(name=' + this.tx_1 + ', pub=' + toString_2(this.ux_1) + ')';
  };
  Object.defineProperty(Agent.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.s8();
    }
  });
  Object.defineProperty(Agent.prototype, 'pub', {
    configurable: true,
    get: function () {
      return this.sx();
    }
  });
  function ChaincodeDTO() {
  }
  function Chaincode(id, channelId) {
    this.xx_1 = id;
    this.yx_1 = channelId;
  }
  Chaincode.prototype.zo = function () {
    return this.xx_1;
  };
  Chaincode.prototype.dx = function () {
    return this.yx_1;
  };
  Chaincode.prototype.component1 = function () {
    return this.xx_1;
  };
  Chaincode.prototype.component2 = function () {
    return this.yx_1;
  };
  Chaincode.prototype.copy = function (id, channelId) {
    return this.zx(id === void 1 ? this.xx_1 : id, channelId === void 1 ? this.yx_1 : channelId);
  };
  Chaincode.prototype.zx = function (id, channelId) {
    return new Chaincode(id, channelId);
  };
  Chaincode.prototype.ay = function (id, channelId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.xx_1;
    if (!(($mask0 & 2) === 0))
      channelId = this.yx_1;
    return this.zx(id, channelId);
  };
  Chaincode.prototype.toString = function () {
    return 'Chaincode(id=' + this.xx_1 + ', channelId=' + this.yx_1 + ')';
  };
  Chaincode.prototype.hashCode = function () {
    var result = getStringHashCode(this.xx_1);
    result = imul(result, 31) + getStringHashCode(this.yx_1) | 0;
    return result;
  };
  Chaincode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Chaincode))
      return false;
    var tmp0_other_with_cast = other instanceof Chaincode ? other : THROW_CCE();
    if (!(this.xx_1 === tmp0_other_with_cast.xx_1))
      return false;
    if (!(this.yx_1 === tmp0_other_with_cast.yx_1))
      return false;
    return true;
  };
  Object.defineProperty(Chaincode.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.zo();
    }
  });
  Object.defineProperty(Chaincode.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this.dx();
    }
  });
  function SsmDTO() {
  }
  function Ssm(name, transitions) {
    this.cy_1 = name;
    this.dy_1 = transitions;
  }
  Ssm.prototype.s8 = function () {
    return this.cy_1;
  };
  Ssm.prototype.by = function () {
    return this.dy_1;
  };
  Ssm.prototype.component1 = function () {
    return this.cy_1;
  };
  Ssm.prototype.component2 = function () {
    return this.dy_1;
  };
  Ssm.prototype.copy = function (name, transitions) {
    return this.ey(name === void 1 ? this.cy_1 : name, transitions === void 1 ? this.dy_1 : transitions);
  };
  Ssm.prototype.ey = function (name, transitions) {
    return new Ssm(name, transitions);
  };
  Ssm.prototype.fy = function (name, transitions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.cy_1;
    if (!(($mask0 & 2) === 0))
      transitions = this.dy_1;
    return this.ey(name, transitions);
  };
  Ssm.prototype.toString = function () {
    return 'Ssm(name=' + this.cy_1 + ', transitions=' + this.dy_1 + ')';
  };
  Ssm.prototype.hashCode = function () {
    var result = getStringHashCode(this.cy_1);
    result = imul(result, 31) + hashCode(this.dy_1) | 0;
    return result;
  };
  Ssm.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ssm))
      return false;
    var tmp0_other_with_cast = other instanceof Ssm ? other : THROW_CCE();
    if (!(this.cy_1 === tmp0_other_with_cast.cy_1))
      return false;
    if (!equals_0(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  Object.defineProperty(Ssm.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.s8();
    }
  });
  Object.defineProperty(Ssm.prototype, 'transitions', {
    configurable: true,
    get: function () {
      return this.by();
    }
  });
  function SsmContextDTO() {
  }
  function SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      private_0 = null;
    SsmContext.call($this, session, public_0, iteration, private_0);
    return $this;
  }
  function SsmContext_init_$Create$(session, public_0, iteration, private_0, $mask0, $marker) {
    return SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, Object.create(SsmContext.prototype));
  }
  function SsmContext(session, public_0, iteration, private_0) {
    var private_1 = private_0 === void 1 ? null : private_0;
    this.ky_1 = session;
    this.ly_1 = public_0;
    this.my_1 = iteration;
    this.ny_1 = private_1;
  }
  SsmContext.prototype.gy = function () {
    return this.ky_1;
  };
  SsmContext.prototype.hy = function () {
    return this.ly_1;
  };
  SsmContext.prototype.iy = function () {
    return this.my_1;
  };
  SsmContext.prototype.jy = function () {
    return this.ny_1;
  };
  SsmContext.prototype.component1 = function () {
    return this.ky_1;
  };
  SsmContext.prototype.component2 = function () {
    return this.ly_1;
  };
  SsmContext.prototype.component3 = function () {
    return this.my_1;
  };
  SsmContext.prototype.component4 = function () {
    return this.ny_1;
  };
  SsmContext.prototype.copy = function (session, public_0, iteration, private_0) {
    return this.oy(session === void 1 ? this.ky_1 : session, public_0 === void 1 ? this.ly_1 : public_0, iteration === void 1 ? this.my_1 : iteration, private_0 === void 1 ? this.ny_1 : private_0);
  };
  SsmContext.prototype.oy = function (session, public_0, iteration, private_0) {
    return new SsmContext(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.py = function (session, public_0, iteration, private_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      session = this.ky_1;
    if (!(($mask0 & 2) === 0))
      public_0 = this.ly_1;
    if (!(($mask0 & 4) === 0))
      iteration = this.my_1;
    if (!(($mask0 & 8) === 0))
      private_0 = this.ny_1;
    return this.oy(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.toString = function () {
    return 'SsmContext(session=' + this.ky_1 + ', public=' + this.ly_1 + ', iteration=' + this.my_1 + ', private=' + this.ny_1 + ')';
  };
  SsmContext.prototype.hashCode = function () {
    var result = getStringHashCode(this.ky_1);
    result = imul(result, 31) + getStringHashCode(this.ly_1) | 0;
    result = imul(result, 31) + this.my_1 | 0;
    result = imul(result, 31) + (this.ny_1 == null ? 0 : hashCode(this.ny_1)) | 0;
    return result;
  };
  SsmContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmContext))
      return false;
    var tmp0_other_with_cast = other instanceof SsmContext ? other : THROW_CCE();
    if (!(this.ky_1 === tmp0_other_with_cast.ky_1))
      return false;
    if (!(this.ly_1 === tmp0_other_with_cast.ly_1))
      return false;
    if (!(this.my_1 === tmp0_other_with_cast.my_1))
      return false;
    if (!equals_0(this.ny_1, tmp0_other_with_cast.ny_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmContext.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.gy();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.hy();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this.iy();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.jy();
    }
  });
  function SsmGrantDTO() {
  }
  function SsmGrant(user, iteration, credits) {
    this.user = user;
    this.iteration = iteration;
    this.credits = credits;
  }
  SsmGrant.prototype.qy = function () {
    return this.user;
  };
  SsmGrant.prototype.iy = function () {
    return this.iteration;
  };
  SsmGrant.prototype.ry = function () {
    return this.credits;
  };
  SsmGrant.prototype.component1 = function () {
    return this.user;
  };
  SsmGrant.prototype.component2 = function () {
    return this.iteration;
  };
  SsmGrant.prototype.component3 = function () {
    return this.credits;
  };
  SsmGrant.prototype.copy = function (user, iteration, credits) {
    return this.sy(user === void 1 ? this.user : user, iteration === void 1 ? this.iteration : iteration, credits === void 1 ? this.credits : credits);
  };
  SsmGrant.prototype.sy = function (user, iteration, credits) {
    return new SsmGrant(user, iteration, credits);
  };
  SsmGrant.prototype.ty = function (user, iteration, credits, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      user = this.user;
    if (!(($mask0 & 2) === 0))
      iteration = this.iteration;
    if (!(($mask0 & 4) === 0))
      credits = this.credits;
    return this.sy(user, iteration, credits);
  };
  SsmGrant.prototype.toString = function () {
    return 'SsmGrant(user=' + this.user + ', iteration=' + this.iteration + ', credits=' + this.credits + ')';
  };
  SsmGrant.prototype.hashCode = function () {
    var result = getStringHashCode(this.user);
    result = imul(result, 31) + this.iteration | 0;
    result = imul(result, 31) + hashCode(this.credits) | 0;
    return result;
  };
  SsmGrant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGrant))
      return false;
    var tmp0_other_with_cast = other instanceof SsmGrant ? other : THROW_CCE();
    if (!(this.user === tmp0_other_with_cast.user))
      return false;
    if (!(this.iteration === tmp0_other_with_cast.iteration))
      return false;
    if (!equals_0(this.credits, tmp0_other_with_cast.credits))
      return false;
    return true;
  };
  function CreditDTO() {
  }
  function Credit(amount) {
    this.vy_1 = amount;
  }
  Credit.prototype.uy = function () {
    return this.vy_1;
  };
  Credit.prototype.component1 = function () {
    return this.vy_1;
  };
  Credit.prototype.copy = function (amount) {
    return this.wy(amount === void 1 ? this.vy_1 : amount);
  };
  Credit.prototype.wy = function (amount) {
    return new Credit(amount);
  };
  Credit.prototype.xy = function (amount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      amount = this.vy_1;
    return this.wy(amount);
  };
  Credit.prototype.toString = function () {
    return 'Credit(amount=' + this.vy_1 + ')';
  };
  Credit.prototype.hashCode = function () {
    return this.vy_1;
  };
  Credit.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Credit))
      return false;
    var tmp0_other_with_cast = other instanceof Credit ? other : THROW_CCE();
    if (!(this.vy_1 === tmp0_other_with_cast.vy_1))
      return false;
    return true;
  };
  Object.defineProperty(Credit.prototype, 'amount', {
    configurable: true,
    get: function () {
      return this.uy();
    }
  });
  function SsmSessionDTO() {
  }
  function SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      private_0 = tmp$ret$0;
    }
    SsmSession.call($this, ssm, session, roles, public_0, private_0);
    return $this;
  }
  function SsmSession_init_$Create$(ssm, session, roles, public_0, private_0, $mask0, $marker) {
    return SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, Object.create(SsmSession.prototype));
  }
  function SsmSession(ssm, session, roles, public_0, private_0) {
    var tmp;
    if (private_0 === void 1) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this.zy_1 = ssm;
    this.az_1 = session;
    this.bz_1 = roles;
    this.cz_1 = public_0;
    this.dz_1 = private_1;
  }
  SsmSession.prototype.yy = function () {
    return this.zy_1;
  };
  SsmSession.prototype.gy = function () {
    return this.az_1;
  };
  SsmSession.prototype.gr = function () {
    return this.bz_1;
  };
  SsmSession.prototype.hy = function () {
    return this.cz_1;
  };
  SsmSession.prototype.jy = function () {
    return this.dz_1;
  };
  Object.defineProperty(SsmSession.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this.yy();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.gy();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this.gr();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.hy();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.jy();
    }
  });
  function SsmSessionStateDTO() {
  }
  function SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      private_0 = tmp$ret$0;
    }
    SsmSessionState.call($this, ssm, session, roles, public_0, private_0, origin, current, iteration);
    return $this;
  }
  function SsmSessionState_init_$Create$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker) {
    return SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, Object.create(SsmSessionState.prototype));
  }
  function SsmSessionState(ssm, session, roles, public_0, private_0, origin, current, iteration) {
    var tmp;
    if (private_0 === void 1) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this.gz_1 = ssm;
    this.hz_1 = session;
    this.iz_1 = roles;
    this.jz_1 = public_0;
    this.kz_1 = private_1;
    this.lz_1 = origin;
    this.mz_1 = current;
    this.nz_1 = iteration;
  }
  SsmSessionState.prototype.yy = function () {
    return this.gz_1;
  };
  SsmSessionState.prototype.gy = function () {
    return this.hz_1;
  };
  SsmSessionState.prototype.gr = function () {
    return this.iz_1;
  };
  SsmSessionState.prototype.hy = function () {
    return this.jz_1;
  };
  SsmSessionState.prototype.jy = function () {
    return this.kz_1;
  };
  SsmSessionState.prototype.ez = function () {
    return this.lz_1;
  };
  SsmSessionState.prototype.fz = function () {
    return this.mz_1;
  };
  SsmSessionState.prototype.iy = function () {
    return this.nz_1;
  };
  SsmSessionState.prototype.component1 = function () {
    return this.gz_1;
  };
  SsmSessionState.prototype.component2 = function () {
    return this.hz_1;
  };
  SsmSessionState.prototype.component3 = function () {
    return this.iz_1;
  };
  SsmSessionState.prototype.component4 = function () {
    return this.jz_1;
  };
  SsmSessionState.prototype.component5 = function () {
    return this.kz_1;
  };
  SsmSessionState.prototype.component6 = function () {
    return this.lz_1;
  };
  SsmSessionState.prototype.component7 = function () {
    return this.mz_1;
  };
  SsmSessionState.prototype.component8 = function () {
    return this.nz_1;
  };
  SsmSessionState.prototype.copy = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return this.oz(ssm === void 1 ? this.gz_1 : ssm, session === void 1 ? this.hz_1 : session, roles === void 1 ? this.iz_1 : roles, public_0 === void 1 ? this.jz_1 : public_0, private_0 === void 1 ? this.kz_1 : private_0, origin === void 1 ? this.lz_1 : origin, current === void 1 ? this.mz_1 : current, iteration === void 1 ? this.nz_1 : iteration);
  };
  SsmSessionState.prototype.oz = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return new SsmSessionState(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.pz = function (ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssm = this.gz_1;
    if (!(($mask0 & 2) === 0))
      session = this.hz_1;
    if (!(($mask0 & 4) === 0))
      roles = this.iz_1;
    if (!(($mask0 & 8) === 0))
      public_0 = this.jz_1;
    if (!(($mask0 & 16) === 0))
      private_0 = this.kz_1;
    if (!(($mask0 & 32) === 0))
      origin = this.lz_1;
    if (!(($mask0 & 64) === 0))
      current = this.mz_1;
    if (!(($mask0 & 128) === 0))
      iteration = this.nz_1;
    return this.oz(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.toString = function () {
    return 'SsmSessionState(ssm=' + this.gz_1 + ', session=' + this.hz_1 + ', roles=' + this.iz_1 + ', public=' + toString_1(this.jz_1) + ', private=' + this.kz_1 + ', origin=' + this.lz_1 + ', current=' + this.mz_1 + ', iteration=' + this.nz_1 + ')';
  };
  SsmSessionState.prototype.hashCode = function () {
    var result = this.gz_1 == null ? 0 : getStringHashCode(this.gz_1);
    result = imul(result, 31) + getStringHashCode(this.hz_1) | 0;
    result = imul(result, 31) + (this.iz_1 == null ? 0 : hashCode(this.iz_1)) | 0;
    result = imul(result, 31) + (this.jz_1 == null ? 0 : hashCode(this.jz_1)) | 0;
    result = imul(result, 31) + (this.kz_1 == null ? 0 : hashCode(this.kz_1)) | 0;
    result = imul(result, 31) + (this.lz_1 == null ? 0 : this.lz_1.hashCode()) | 0;
    result = imul(result, 31) + this.mz_1 | 0;
    result = imul(result, 31) + this.nz_1 | 0;
    return result;
  };
  SsmSessionState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionState))
      return false;
    var tmp0_other_with_cast = other instanceof SsmSessionState ? other : THROW_CCE();
    if (!(this.gz_1 == tmp0_other_with_cast.gz_1))
      return false;
    if (!(this.hz_1 === tmp0_other_with_cast.hz_1))
      return false;
    if (!equals_0(this.iz_1, tmp0_other_with_cast.iz_1))
      return false;
    if (!equals_0(this.jz_1, tmp0_other_with_cast.jz_1))
      return false;
    if (!equals_0(this.kz_1, tmp0_other_with_cast.kz_1))
      return false;
    if (!equals_0(this.lz_1, tmp0_other_with_cast.lz_1))
      return false;
    if (!(this.mz_1 === tmp0_other_with_cast.mz_1))
      return false;
    if (!(this.nz_1 === tmp0_other_with_cast.nz_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmSessionState.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this.yy();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.gy();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this.gr();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.hy();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.jy();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'origin', {
    configurable: true,
    get: function () {
      return this.ez();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'current', {
    configurable: true,
    get: function () {
      return this.fz();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this.iy();
    }
  });
  function SsmSessionStateLogDTO() {
  }
  function SsmSessionStateLog(txId, state) {
    this.rz_1 = txId;
    this.sz_1 = state;
  }
  SsmSessionStateLog.prototype.qz = function () {
    return this.rz_1;
  };
  SsmSessionStateLog.prototype.ob = function () {
    return this.sz_1;
  };
  SsmSessionStateLog.prototype.component1 = function () {
    return this.rz_1;
  };
  SsmSessionStateLog.prototype.component2 = function () {
    return this.sz_1;
  };
  SsmSessionStateLog.prototype.copy = function (txId, state) {
    return this.tz(txId === void 1 ? this.rz_1 : txId, state === void 1 ? this.sz_1 : state);
  };
  SsmSessionStateLog.prototype.tz = function (txId, state) {
    return new SsmSessionStateLog(txId, state);
  };
  SsmSessionStateLog.prototype.uz = function (txId, state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      txId = this.rz_1;
    if (!(($mask0 & 2) === 0))
      state = this.sz_1;
    return this.tz(txId, state);
  };
  SsmSessionStateLog.prototype.toString = function () {
    return 'SsmSessionStateLog(txId=' + this.rz_1 + ', state=' + this.sz_1 + ')';
  };
  SsmSessionStateLog.prototype.hashCode = function () {
    var result = getStringHashCode(this.rz_1);
    result = imul(result, 31) + this.sz_1.hashCode() | 0;
    return result;
  };
  SsmSessionStateLog.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionStateLog))
      return false;
    var tmp0_other_with_cast = other instanceof SsmSessionStateLog ? other : THROW_CCE();
    if (!(this.rz_1 === tmp0_other_with_cast.rz_1))
      return false;
    if (!this.sz_1.equals(tmp0_other_with_cast.sz_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmSessionStateLog.prototype, 'txId', {
    configurable: true,
    get: function () {
      return this.qz();
    }
  });
  Object.defineProperty(SsmSessionStateLog.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.ob();
    }
  });
  function SsmTransitionDTO() {
  }
  function SsmTransition(from, to, role, action) {
    this.yz_1 = from;
    this.zz_1 = to;
    this.a10_1 = role;
    this.b10_1 = action;
  }
  SsmTransition.prototype.vz = function () {
    return this.yz_1;
  };
  SsmTransition.prototype.wz = function () {
    return this.zz_1;
  };
  SsmTransition.prototype.ew = function () {
    return this.a10_1;
  };
  SsmTransition.prototype.xz = function () {
    return this.b10_1;
  };
  SsmTransition.prototype.component1 = function () {
    return this.yz_1;
  };
  SsmTransition.prototype.component2 = function () {
    return this.zz_1;
  };
  SsmTransition.prototype.component3 = function () {
    return this.a10_1;
  };
  SsmTransition.prototype.component4 = function () {
    return this.b10_1;
  };
  SsmTransition.prototype.copy = function (from, to, role, action) {
    return this.c10(from === void 1 ? this.yz_1 : from, to === void 1 ? this.zz_1 : to, role === void 1 ? this.a10_1 : role, action === void 1 ? this.b10_1 : action);
  };
  SsmTransition.prototype.c10 = function (from, to, role, action) {
    return new SsmTransition(from, to, role, action);
  };
  SsmTransition.prototype.d10 = function (from, to, role, action, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = this.yz_1;
    if (!(($mask0 & 2) === 0))
      to = this.zz_1;
    if (!(($mask0 & 4) === 0))
      role = this.a10_1;
    if (!(($mask0 & 8) === 0))
      action = this.b10_1;
    return this.c10(from, to, role, action);
  };
  SsmTransition.prototype.toString = function () {
    return 'SsmTransition(from=' + this.yz_1 + ', to=' + this.zz_1 + ', role=' + this.a10_1 + ', action=' + this.b10_1 + ')';
  };
  SsmTransition.prototype.hashCode = function () {
    var result = this.yz_1;
    result = imul(result, 31) + this.zz_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.a10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b10_1) | 0;
    return result;
  };
  SsmTransition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmTransition))
      return false;
    var tmp0_other_with_cast = other instanceof SsmTransition ? other : THROW_CCE();
    if (!(this.yz_1 === tmp0_other_with_cast.yz_1))
      return false;
    if (!(this.zz_1 === tmp0_other_with_cast.zz_1))
      return false;
    if (!(this.a10_1 === tmp0_other_with_cast.a10_1))
      return false;
    if (!(this.b10_1 === tmp0_other_with_cast.b10_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmTransition.prototype, 'from', {
    configurable: true,
    get: function () {
      return this.vz();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this.wz();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this.ew();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.xz();
    }
  });
  function WithPrivate() {
  }
  function ChaincodeUriDTO() {
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.PARTS = 3;
    this.PREFIX = 'chaincode';
  }
  Companion_19.prototype.f10 = function () {
    return this.PARTS;
  };
  Companion_19.prototype.g10 = function () {
    return this.PREFIX;
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function ChaincodeUri(uri) {
    Companion_getInstance_19();
    this.h10_1 = uri;
    var tmp = this;
    tmp.i10_1 = split$default(this.h10_1, [':'], false, 0, 6, null);
    // Inline function 'kotlin.require' call
    var tmp_0 = this.i10_1.f();
    Companion_getInstance_19();
    var tmp0_require = tmp_0 === 3;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.require' call
    var tmp_1 = first(this.i10_1);
    Companion_getInstance_19();
    var tmp1_require = tmp_1 === 'chaincode';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_2(message_0));
    }
  }
  ChaincodeUri.prototype.e10 = function () {
    return this.h10_1;
  };
  ChaincodeUri.prototype.dx = function () {
    return this.i10_1.l(1);
  };
  ChaincodeUri.prototype.j10 = function () {
    return this.i10_1.l(2);
  };
  Object.defineProperty(ChaincodeUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this.e10();
    }
  });
  Object.defineProperty(ChaincodeUri.prototype, 'channelId', {
    configurable: true,
    get: ChaincodeUri.prototype.dx
  });
  Object.defineProperty(ChaincodeUri.prototype, 'chaincodeId', {
    configurable: true,
    get: ChaincodeUri.prototype.j10
  });
  function from(_this__u8e3s4, channelId, chaincodeId) {
    return new ChaincodeUri('chaincode:' + channelId + ':' + chaincodeId);
  }
  function SsmUriDTO() {
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.PARTS = 4;
    this.PREFIX = 'ssm';
  }
  Companion_20.prototype.f10 = function () {
    return this.PARTS;
  };
  Companion_20.prototype.g10 = function () {
    return this.PREFIX;
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function SsmUri(uri) {
    Companion_getInstance_20();
    this.k10_1 = uri;
    var tmp = this;
    tmp.l10_1 = split$default(this.k10_1, [':'], false, 0, 6, null);
    // Inline function 'kotlin.require' call
    var tmp_0 = this.l10_1.f();
    Companion_getInstance_20();
    var tmp0_require = tmp_0 === 4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.require' call
    var tmp_1 = first(this.l10_1);
    Companion_getInstance_20();
    var tmp1_require = tmp_1 === 'ssm';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_2(message_0));
    }
  }
  SsmUri.prototype.e10 = function () {
    return this.k10_1;
  };
  SsmUri.prototype.dx = function () {
    return this.l10_1.l(1);
  };
  SsmUri.prototype.j10 = function () {
    return this.l10_1.l(2);
  };
  SsmUri.prototype.m10 = function () {
    return this.l10_1.l(3);
  };
  SsmUri.prototype.n10 = function () {
    return '1.0.0';
  };
  SsmUri.prototype.nw = function () {
    return from(Companion_getInstance_19(), this.channelId, this.chaincodeId);
  };
  SsmUri.prototype.component1 = function () {
    return this.k10_1;
  };
  SsmUri.prototype.copy = function (uri) {
    return this.o10(uri === void 1 ? this.k10_1 : uri);
  };
  SsmUri.prototype.o10 = function (uri) {
    return new SsmUri(uri);
  };
  SsmUri.prototype.p10 = function (uri, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      uri = this.k10_1;
    return this.o10(uri);
  };
  SsmUri.prototype.toString = function () {
    return 'SsmUri(uri=' + this.k10_1 + ')';
  };
  SsmUri.prototype.hashCode = function () {
    return getStringHashCode(this.k10_1);
  };
  SsmUri.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmUri))
      return false;
    var tmp0_other_with_cast = other instanceof SsmUri ? other : THROW_CCE();
    if (!(this.k10_1 === tmp0_other_with_cast.k10_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this.e10();
    }
  });
  Object.defineProperty(SsmUri.prototype, 'channelId', {
    configurable: true,
    get: SsmUri.prototype.dx
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmUri.prototype.j10
  });
  Object.defineProperty(SsmUri.prototype, 'ssmName', {
    configurable: true,
    get: SsmUri.prototype.m10
  });
  Object.defineProperty(SsmUri.prototype, 'ssmVersion', {
    configurable: true,
    get: SsmUri.prototype.n10
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeUri', {
    configurable: true,
    get: SsmUri.prototype.nw
  });
  function SsmGetAdminQuery(chaincodeUri, name) {
    this.q10_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetAdminQuery.prototype.nw = function () {
    return this.q10_1;
  };
  SsmGetAdminQuery.prototype.s8 = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmGetAdminResult(item) {
    this.r10_1 = item;
  }
  SsmGetAdminResult.prototype.kt = function () {
    return this.r10_1;
  };
  Object.defineProperty(SsmGetAdminResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.kt();
    }
  });
  function SsmGetQuery(chaincodeUri, name) {
    this.s10_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetQuery.prototype.nw = function () {
    return this.s10_1;
  };
  SsmGetQuery.prototype.s8 = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmGetResult(item) {
    this.t10_1 = item;
  }
  SsmGetResult.prototype.kt = function () {
    return this.t10_1;
  };
  Object.defineProperty(SsmGetResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.kt();
    }
  });
  function SsmGetSessionLogsQuery(chaincodeUri, ssmName, sessionName) {
    this.u10_1 = chaincodeUri;
    this.ssmName = ssmName;
    this.sessionName = sessionName;
  }
  SsmGetSessionLogsQuery.prototype.nw = function () {
    return this.u10_1;
  };
  SsmGetSessionLogsQuery.prototype.m10 = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQuery.prototype.v10 = function () {
    return this.sessionName;
  };
  Object.defineProperty(SsmGetSessionLogsQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmGetSessionLogsQueryResult(ssmName, sessionName, logs) {
    this.ssmName = ssmName;
    this.sessionName = sessionName;
    this.logs = logs;
  }
  SsmGetSessionLogsQueryResult.prototype.m10 = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQueryResult.prototype.v10 = function () {
    return this.sessionName;
  };
  SsmGetSessionLogsQueryResult.prototype.w10 = function () {
    return this.logs;
  };
  SsmGetSessionLogsQueryResult.prototype.component1 = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQueryResult.prototype.component2 = function () {
    return this.sessionName;
  };
  SsmGetSessionLogsQueryResult.prototype.component3 = function () {
    return this.logs;
  };
  SsmGetSessionLogsQueryResult.prototype.copy = function (ssmName, sessionName, logs) {
    return this.x10(ssmName === void 1 ? this.ssmName : ssmName, sessionName === void 1 ? this.sessionName : sessionName, logs === void 1 ? this.logs : logs);
  };
  SsmGetSessionLogsQueryResult.prototype.x10 = function (ssmName, sessionName, logs) {
    return new SsmGetSessionLogsQueryResult(ssmName, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult.prototype.y10 = function (ssmName, sessionName, logs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssmName = this.ssmName;
    if (!(($mask0 & 2) === 0))
      sessionName = this.sessionName;
    if (!(($mask0 & 4) === 0))
      logs = this.logs;
    return this.x10(ssmName, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult.prototype.toString = function () {
    return 'SsmGetSessionLogsQueryResult(ssmName=' + this.ssmName + ', sessionName=' + this.sessionName + ', logs=' + this.logs + ')';
  };
  SsmGetSessionLogsQueryResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.ssmName);
    result = imul(result, 31) + getStringHashCode(this.sessionName) | 0;
    result = imul(result, 31) + hashCode(this.logs) | 0;
    return result;
  };
  SsmGetSessionLogsQueryResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetSessionLogsQueryResult))
      return false;
    var tmp0_other_with_cast = other instanceof SsmGetSessionLogsQueryResult ? other : THROW_CCE();
    if (!(this.ssmName === tmp0_other_with_cast.ssmName))
      return false;
    if (!(this.sessionName === tmp0_other_with_cast.sessionName))
      return false;
    if (!equals_0(this.logs, tmp0_other_with_cast.logs))
      return false;
    return true;
  };
  function SsmGetSessionQuery(chaincodeUri, sessionName) {
    this.z10_1 = chaincodeUri;
    this.sessionName = sessionName;
  }
  SsmGetSessionQuery.prototype.nw = function () {
    return this.z10_1;
  };
  SsmGetSessionQuery.prototype.v10 = function () {
    return this.sessionName;
  };
  Object.defineProperty(SsmGetSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmGetSessionResult(item) {
    this.a11_1 = item;
  }
  SsmGetSessionResult.prototype.kt = function () {
    return this.a11_1;
  };
  Object.defineProperty(SsmGetSessionResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.kt();
    }
  });
  function SsmGetTransactionQuery(chaincodeUri, id) {
    this.b11_1 = chaincodeUri;
    this.id = id;
  }
  SsmGetTransactionQuery.prototype.nw = function () {
    return this.b11_1;
  };
  SsmGetTransactionQuery.prototype.zo = function () {
    return this.id;
  };
  SsmGetTransactionQuery.prototype.component1 = function () {
    return this.b11_1;
  };
  SsmGetTransactionQuery.prototype.component2 = function () {
    return this.id;
  };
  SsmGetTransactionQuery.prototype.copy = function (chaincodeUri, id) {
    return this.c11(chaincodeUri === void 1 ? this.b11_1 : chaincodeUri, id === void 1 ? this.id : id);
  };
  SsmGetTransactionQuery.prototype.c11 = function (chaincodeUri, id) {
    return new SsmGetTransactionQuery(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.d11 = function (chaincodeUri, id, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      chaincodeUri = this.b11_1;
    if (!(($mask0 & 2) === 0))
      id = this.id;
    return this.c11(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.toString = function () {
    return 'SsmGetTransactionQuery(chaincodeUri=' + this.b11_1 + ', id=' + this.id + ')';
  };
  SsmGetTransactionQuery.prototype.hashCode = function () {
    var result = hashCode(this.b11_1);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    return result;
  };
  SsmGetTransactionQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetTransactionQuery))
      return false;
    var tmp0_other_with_cast = other instanceof SsmGetTransactionQuery ? other : THROW_CCE();
    if (!equals_0(this.b11_1, tmp0_other_with_cast.b11_1))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    return true;
  };
  Object.defineProperty(SsmGetTransactionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmGetTransactionQueryResult(item) {
    this.e11_1 = item;
  }
  SsmGetTransactionQueryResult.prototype.kt = function () {
    return this.e11_1;
  };
  Object.defineProperty(SsmGetTransactionQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.kt();
    }
  });
  function SsmGetUserQuery(chaincodeUri, name) {
    this.f11_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetUserQuery.prototype.nw = function () {
    return this.f11_1;
  };
  SsmGetUserQuery.prototype.s8 = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmGetUserResult(item) {
    this.g11_1 = item;
  }
  SsmGetUserResult.prototype.kt = function () {
    return this.g11_1;
  };
  Object.defineProperty(SsmGetUserResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.kt();
    }
  });
  function SsmListAdminQuery(chaincodeUri) {
    this.h11_1 = chaincodeUri;
  }
  SsmListAdminQuery.prototype.nw = function () {
    return this.h11_1;
  };
  Object.defineProperty(SsmListAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmListAdminResult(items) {
    this.i11_1 = items;
  }
  SsmListAdminResult.prototype.bq = function () {
    return this.i11_1;
  };
  Object.defineProperty(SsmListAdminResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.bq();
    }
  });
  function SsmListSessionQuery(chaincodeUri) {
    this.j11_1 = chaincodeUri;
  }
  SsmListSessionQuery.prototype.nw = function () {
    return this.j11_1;
  };
  Object.defineProperty(SsmListSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmListSessionResult(items) {
    this.k11_1 = items;
  }
  SsmListSessionResult.prototype.bq = function () {
    return this.k11_1;
  };
  Object.defineProperty(SsmListSessionResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.bq();
    }
  });
  function SsmListSsmQuery(chaincodeUri) {
    this.l11_1 = chaincodeUri;
  }
  SsmListSsmQuery.prototype.nw = function () {
    return this.l11_1;
  };
  Object.defineProperty(SsmListSsmQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmListSsmResult(items) {
    this.m11_1 = items;
  }
  SsmListSsmResult.prototype.bq = function () {
    return this.m11_1;
  };
  Object.defineProperty(SsmListSsmResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.bq();
    }
  });
  function SsmListUserQuery(chaincodeUri) {
    this.n11_1 = chaincodeUri;
  }
  SsmListUserQuery.prototype.nw = function () {
    return this.n11_1;
  };
  Object.defineProperty(SsmListUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.nw();
    }
  });
  function SsmListUserResult(items) {
    this.o11_1 = items;
  }
  SsmListUserResult.prototype.bq = function () {
    return this.o11_1;
  };
  Object.defineProperty(SsmListUserResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.bq();
    }
  });
  function Automate() {
  }
  function isInstance(_this__u8e3s4, $this, msg) {
    var msgAction = toValue(getKClassFromExpression(msg));
    return msgAction.name === _this__u8e3s4.name;
  }
  function isSame(_this__u8e3s4, $this, to) {
    var tmp0_safe_receiver = _this__u8e3s4;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.position) === to.position;
  }
  function Companion_21() {
    Companion_instance_21 = this;
  }
  Companion_21.prototype.serializer = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function $serializer_5() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2Automate', this, 3);
    tmp0_serialDesc.pm('name', false);
    tmp0_serialDesc.pm('version', false);
    tmp0_serialDesc.pm('transitions', false);
    this.p11_1 = tmp0_serialDesc;
  }
  $serializer_5.prototype.aj = function () {
    return this.p11_1;
  };
  $serializer_5.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_4())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_5.prototype.ep = function (decoder) {
    var tmp0_desc = this.p11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.fp(tmp0_desc);
    if (tmp7_input.yk()) {
      tmp4_local0 = tmp7_input.bl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.dl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.cl(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_4()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.bl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.dl(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.cl(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_4()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.xk(tmp0_desc);
    return S2Automate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_5.prototype.q11 = function (encoder, value) {
    var tmp0_desc = this.p11_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.gl(tmp0_desc, 0, value.name);
    tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.version);
    tmp1_output.hl(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(S2Transition), $serializer_getInstance_4()), value.transitions);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_5.prototype.hp = function (encoder, value) {
    return this.q11(encoder, value instanceof S2Automate ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_5();
    return $serializer_instance_3;
  }
  function S2Automate_init_$Init$(seen1, name, version, transitions, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_3().p11_1);
    }
    $this.name = name;
    $this.version = version;
    $this.transitions = transitions;
    return $this;
  }
  function S2Automate_init_$Create$(seen1, name, version, transitions, serializationConstructorMarker) {
    return S2Automate_init_$Init$(seen1, name, version, transitions, serializationConstructorMarker, Object.create(S2Automate.prototype));
  }
  function S2Automate(name, version, transitions) {
    Companion_getInstance_21();
    this.name = name;
    this.version = version;
    this.transitions = transitions;
  }
  S2Automate.prototype.s8 = function () {
    return this.name;
  };
  S2Automate.prototype.r11 = function () {
    return this.version;
  };
  S2Automate.prototype.by = function () {
    return this.transitions;
  };
  S2Automate.prototype.getAvailableTransitions = function (state) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.transitions;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var indexedObject = tmp0_filter;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 's2.dsl.automate.S2Automate.getAvailableTransitions.<anonymous>' call
      tmp$ret$0 = isSame(element.from, this, state);
      if (tmp$ret$0) {
        tmp0_filterTo.e(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  S2Automate.prototype.isAvailableTransition = function (currentState, msg) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = this.getAvailableTransitions(currentState);
      var indexedObject = tmp0_any;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 's2.dsl.automate.S2Automate.isAvailableTransition.<anonymous>' call
        tmp$ret$0 = isInstance(element.action, this, msg);
        if (tmp$ret$0) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  S2Automate.prototype.isAvailableInitTransition = function (command) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = this.transitions;
      var indexedObject = tmp0_any;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 's2.dsl.automate.S2Automate.isAvailableInitTransition.<anonymous>' call
        tmp$ret$0 = element.from == null ? isInstance(element.action, this, command) : false;
        if (tmp$ret$0) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  S2Automate.prototype.isFinalState = function (state) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp0_isEmpty = this.getAvailableTransitions(state);
    tmp$ret$0 = tmp0_isEmpty.length === 0;
    return tmp$ret$0;
  };
  S2Automate.prototype.isSameState = function (from, to) {
    var tmp0_safe_receiver = from;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.position) === to.position;
  };
  function S2InitCommand() {
  }
  function S2Command() {
  }
  function S2Error() {
  }
  function S2ErrorBase(type, description, date, payload) {
    this.u11_1 = type;
    this.v11_1 = description;
    this.w11_1 = date;
    this.x11_1 = payload;
  }
  S2ErrorBase.prototype.gx = function () {
    return this.u11_1;
  };
  S2ErrorBase.prototype.ct = function () {
    return this.v11_1;
  };
  S2ErrorBase.prototype.s11 = function () {
    return this.w11_1;
  };
  S2ErrorBase.prototype.t11 = function () {
    return this.x11_1;
  };
  S2ErrorBase.prototype.toString = function () {
    return "S2ErrorBase(type='" + this.u11_1 + "', description='" + this.v11_1 + "', date='" + this.w11_1 + "', payload=" + this.x11_1 + ')';
  };
  Object.defineProperty(S2ErrorBase.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.gx();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'description', {
    configurable: true,
    get: function () {
      return this.ct();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'date', {
    configurable: true,
    get: function () {
      return this.s11();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this.t11();
    }
  });
  function S2Event() {
  }
  function S2EventSuccess(id, type, from, to) {
    this.id = id;
    this.type = type;
    this.from = from;
    this.to = to;
  }
  S2EventSuccess.prototype.zo = function () {
    return this.id;
  };
  S2EventSuccess.prototype.gx = function () {
    return this.type;
  };
  S2EventSuccess.prototype.vz = function () {
    return this.from;
  };
  S2EventSuccess.prototype.wz = function () {
    return this.to;
  };
  function S2EventError(id, type, from, to, error) {
    this.id = id;
    this.type = type;
    this.from = from;
    this.to = to;
    this.error = error;
  }
  S2EventError.prototype.zo = function () {
    return this.id;
  };
  S2EventError.prototype.gx = function () {
    return this.type;
  };
  S2EventError.prototype.vz = function () {
    return this.from;
  };
  S2EventError.prototype.wz = function () {
    return this.to;
  };
  S2EventError.prototype.pp = function () {
    return this.error;
  };
  function S2Role() {
  }
  function S2State() {
  }
  function S2SubMachine_init_$Init$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      startsOn = emptyList();
    if (!(($mask0 & 4) === 0))
      endsOn = emptyList();
    if (!(($mask0 & 8) === 0))
      autostart = false;
    if (!(($mask0 & 16) === 0))
      blocking = false;
    if (!(($mask0 & 32) === 0))
      singleton = false;
    S2SubMachine.call($this, automate, startsOn, endsOn, autostart, blocking, singleton);
    return $this;
  }
  function S2SubMachine_init_$Create$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker) {
    return S2SubMachine_init_$Init$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker, Object.create(S2SubMachine.prototype));
  }
  function S2SubMachine(automate, startsOn, endsOn, autostart, blocking, singleton) {
    var startsOn_0 = startsOn === void 1 ? emptyList() : startsOn;
    var endsOn_0 = endsOn === void 1 ? emptyList() : endsOn;
    var autostart_0 = autostart === void 1 ? false : autostart;
    var blocking_0 = blocking === void 1 ? false : blocking;
    var singleton_0 = singleton === void 1 ? false : singleton;
    this.z11_1 = automate;
    this.a12_1 = startsOn_0;
    this.b12_1 = endsOn_0;
    this.c12_1 = autostart_0;
    this.d12_1 = blocking_0;
    this.e12_1 = singleton_0;
  }
  S2SubMachine.prototype.f12 = function () {
    return this.z11_1;
  };
  S2SubMachine.prototype.g12 = function () {
    return this.a12_1;
  };
  S2SubMachine.prototype.h12 = function () {
    return this.b12_1;
  };
  S2SubMachine.prototype.i12 = function () {
    return this.c12_1;
  };
  S2SubMachine.prototype.j12 = function () {
    return this.d12_1;
  };
  S2SubMachine.prototype.k12 = function () {
    return this.e12_1;
  };
  Object.defineProperty(S2SubMachine.prototype, 'automate', {
    configurable: true,
    get: function () {
      return this.f12();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'startsOn', {
    configurable: true,
    get: function () {
      return this.g12();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'endsOn', {
    configurable: true,
    get: function () {
      return this.h12();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'autostart', {
    configurable: true,
    get: function () {
      return this.i12();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'blocking', {
    configurable: true,
    get: function () {
      return this.j12();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'singleton', {
    configurable: true,
    get: function () {
      return this.k12();
    }
  });
  function S2InitTransition(to, role, action) {
    this.l12_1 = to;
    this.m12_1 = role;
    this.n12_1 = action;
  }
  S2InitTransition.prototype.wz = function () {
    return this.l12_1;
  };
  S2InitTransition.prototype.ew = function () {
    return this.m12_1;
  };
  S2InitTransition.prototype.xz = function () {
    return this.n12_1;
  };
  Object.defineProperty(S2InitTransition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this.wz();
    }
  });
  Object.defineProperty(S2InitTransition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this.ew();
    }
  });
  Object.defineProperty(S2InitTransition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.xz();
    }
  });
  function Companion_22() {
    Companion_instance_22 = this;
  }
  Companion_22.prototype.serializer = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function $serializer_6() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2Transition', this, 5);
    tmp0_serialDesc.pm('from', false);
    tmp0_serialDesc.pm('to', false);
    tmp0_serialDesc.pm('role', false);
    tmp0_serialDesc.pm('action', false);
    tmp0_serialDesc.pm('result', false);
    this.o12_1 = tmp0_serialDesc;
  }
  $serializer_6.prototype.aj = function () {
    return this.o12_1;
  };
  $serializer_6.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [get_nullable($serializer_getInstance_7()), $serializer_getInstance_7(), $serializer_getInstance_6(), $serializer_getInstance_5(), get_nullable($serializer_getInstance_5())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_6.prototype.ep = function (decoder) {
    var tmp0_desc = this.o12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.fp(tmp0_desc);
    if (tmp9_input.yk()) {
      tmp4_local0 = tmp9_input.dl(tmp0_desc, 0, $serializer_getInstance_7(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.cl(tmp0_desc, 1, $serializer_getInstance_7(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.cl(tmp0_desc, 2, $serializer_getInstance_6(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.cl(tmp0_desc, 3, $serializer_getInstance_5(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.dl(tmp0_desc, 4, $serializer_getInstance_5(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.dl(tmp0_desc, 0, $serializer_getInstance_7(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.cl(tmp0_desc, 1, $serializer_getInstance_7(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.cl(tmp0_desc, 2, $serializer_getInstance_6(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.cl(tmp0_desc, 3, $serializer_getInstance_5(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.dl(tmp0_desc, 4, $serializer_getInstance_5(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.xk(tmp0_desc);
    return S2Transition_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer_6.prototype.p12 = function (encoder, value) {
    var tmp0_desc = this.o12_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.il(tmp0_desc, 0, $serializer_getInstance_7(), value.from);
    tmp1_output.hl(tmp0_desc, 1, $serializer_getInstance_7(), value.to);
    tmp1_output.hl(tmp0_desc, 2, $serializer_getInstance_6(), value.role);
    tmp1_output.hl(tmp0_desc, 3, $serializer_getInstance_5(), value.action);
    tmp1_output.il(tmp0_desc, 4, $serializer_getInstance_5(), value.result);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_6.prototype.hp = function (encoder, value) {
    return this.p12(encoder, value instanceof S2Transition ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_6();
    return $serializer_instance_4;
  }
  function S2Transition_init_$Init$(seen1, from, to, role, action, result, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_4().o12_1);
    }
    $this.q12_1 = from;
    $this.r12_1 = to;
    $this.s12_1 = role;
    $this.t12_1 = action;
    $this.u12_1 = result;
    return $this;
  }
  function S2Transition_init_$Create$(seen1, from, to, role, action, result, serializationConstructorMarker) {
    return S2Transition_init_$Init$(seen1, from, to, role, action, result, serializationConstructorMarker, Object.create(S2Transition.prototype));
  }
  function S2Transition(from, to, role, action, result) {
    Companion_getInstance_22();
    this.q12_1 = from;
    this.r12_1 = to;
    this.s12_1 = role;
    this.t12_1 = action;
    this.u12_1 = result;
  }
  S2Transition.prototype.vz = function () {
    return this.q12_1;
  };
  S2Transition.prototype.wz = function () {
    return this.r12_1;
  };
  S2Transition.prototype.ew = function () {
    return this.s12_1;
  };
  S2Transition.prototype.xz = function () {
    return this.t12_1;
  };
  S2Transition.prototype.v12 = function () {
    return this.u12_1;
  };
  Object.defineProperty(S2Transition.prototype, 'from', {
    configurable: true,
    get: function () {
      return this.vz();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this.wz();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this.ew();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.xz();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'result', {
    configurable: true,
    get: function () {
      return this.v12();
    }
  });
  function Companion_23() {
    Companion_instance_23 = this;
  }
  Companion_23.prototype.serializer = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function $serializer_7() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2TransitionValue', this, 1);
    tmp0_serialDesc.pm('name', false);
    this.w12_1 = tmp0_serialDesc;
  }
  $serializer_7.prototype.aj = function () {
    return this.w12_1;
  };
  $serializer_7.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_7.prototype.ep = function (decoder) {
    var tmp0_desc = this.w12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.fp(tmp0_desc);
    if (tmp5_input.yk()) {
      tmp4_local0 = tmp5_input.bl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.bl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.xk(tmp0_desc);
    return S2TransitionValue_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_7.prototype.x12 = function (encoder, value) {
    var tmp0_desc = this.w12_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.gl(tmp0_desc, 0, value.name);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_7.prototype.hp = function (encoder, value) {
    return this.x12(encoder, value instanceof S2TransitionValue ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_7();
    return $serializer_instance_5;
  }
  function S2TransitionValue_init_$Init$(seen1, name, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_5().w12_1);
    }
    $this.name = name;
    return $this;
  }
  function S2TransitionValue_init_$Create$(seen1, name, serializationConstructorMarker) {
    return S2TransitionValue_init_$Init$(seen1, name, serializationConstructorMarker, Object.create(S2TransitionValue.prototype));
  }
  function S2TransitionValue(name) {
    Companion_getInstance_23();
    this.name = name;
  }
  S2TransitionValue.prototype.s8 = function () {
    return this.name;
  };
  function Companion_24() {
    Companion_instance_24 = this;
  }
  Companion_24.prototype.serializer = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function $serializer_8() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2RoleValue', this, 1);
    tmp0_serialDesc.pm('name', false);
    this.y12_1 = tmp0_serialDesc;
  }
  $serializer_8.prototype.aj = function () {
    return this.y12_1;
  };
  $serializer_8.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_8.prototype.ep = function (decoder) {
    var tmp0_desc = this.y12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.fp(tmp0_desc);
    if (tmp5_input.yk()) {
      tmp4_local0 = tmp5_input.bl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.bl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.xk(tmp0_desc);
    return S2RoleValue_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_8.prototype.z12 = function (encoder, value) {
    var tmp0_desc = this.y12_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.gl(tmp0_desc, 0, value.name);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_8.prototype.hp = function (encoder, value) {
    return this.z12(encoder, value instanceof S2RoleValue ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_8();
    return $serializer_instance_6;
  }
  function S2RoleValue_init_$Init$(seen1, name, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_6().y12_1);
    }
    $this.name = name;
    return $this;
  }
  function S2RoleValue_init_$Create$(seen1, name, serializationConstructorMarker) {
    return S2RoleValue_init_$Init$(seen1, name, serializationConstructorMarker, Object.create(S2RoleValue.prototype));
  }
  function S2RoleValue(name) {
    Companion_getInstance_24();
    this.name = name;
  }
  S2RoleValue.prototype.s8 = function () {
    return this.name;
  };
  function Companion_25() {
    Companion_instance_25 = this;
  }
  Companion_25.prototype.serializer = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function $serializer_9() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('s2.dsl.automate.S2StateValue', this, 2);
    tmp0_serialDesc.pm('name', false);
    tmp0_serialDesc.pm('position', false);
    this.a13_1 = tmp0_serialDesc;
  }
  $serializer_9.prototype.aj = function () {
    return this.a13_1;
  };
  $serializer_9.prototype.mm = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), IntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_9.prototype.ep = function (decoder) {
    var tmp0_desc = this.a13_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.fp(tmp0_desc);
    if (tmp6_input.yk()) {
      tmp4_local0 = tmp6_input.bl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.al(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.zk(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.bl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.al(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.xk(tmp0_desc);
    return S2StateValue_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_9.prototype.b13 = function (encoder, value) {
    var tmp0_desc = this.a13_1;
    var tmp1_output = encoder.fp(tmp0_desc);
    tmp1_output.gl(tmp0_desc, 0, value.name);
    tmp1_output.fl(tmp0_desc, 1, value.position);
    tmp1_output.xk(tmp0_desc);
  };
  $serializer_9.prototype.hp = function (encoder, value) {
    return this.b13(encoder, value instanceof S2StateValue ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_9();
    return $serializer_instance_7;
  }
  function S2StateValue_init_$Init$(seen1, name, position, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_7().a13_1);
    }
    $this.name = name;
    $this.position = position;
    return $this;
  }
  function S2StateValue_init_$Create$(seen1, name, position, serializationConstructorMarker) {
    return S2StateValue_init_$Init$(seen1, name, position, serializationConstructorMarker, Object.create(S2StateValue.prototype));
  }
  function S2StateValue(name, position) {
    Companion_getInstance_25();
    this.name = name;
    this.position = position;
  }
  S2StateValue.prototype.s8 = function () {
    return this.name;
  };
  S2StateValue.prototype.y11 = function () {
    return this.position;
  };
  function toValue(_this__u8e3s4) {
    return new S2TransitionValue(ensureNotNull(_this__u8e3s4.z6()));
  }
  function WithId() {
  }
  function s2(exec) {
    var builder = new S2AutomateBuilder();
    exec(builder);
    var tmp = builder.s8();
    var tmp_0 = builder.d13_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.e13_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return new S2Automate(tmp, tmp_0, tmp$ret$0);
  }
  function S2AutomateBuilder() {
    this.d13_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.e13_1 = tmp$ret$0;
  }
  S2AutomateBuilder.prototype.s8 = function () {
    var tmp = this.c13_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  };
  function s2Sourcing(exec) {
    var builder = new S2SourcingAutomateBuilder();
    exec(builder);
    var tmp = builder.s8();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.h13_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return new S2Automate(tmp, builder.g13_1, tmp$ret$0);
  }
  function S2SourcingAutomateBuilder() {
    this.g13_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.h13_1 = tmp$ret$0;
  }
  S2SourcingAutomateBuilder.prototype.s8 = function () {
    var tmp = this.f13_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  };
  function WithS2Id() {
  }
  function WithS2IdAndStatus() {
  }
  function WithS2State() {
  }
  function Decide() {
  }
  function Roles() {
    Roles_instance = this;
    this.ORCHESTRATOR_ADMIN = 'tr_orchestrator_admin';
    this.ORCHESTRATOR_USER = 'tr_orchestrator_user';
    this.PROJECT_MANAGER_ADMIN = 'tr_project_manager_admin';
    this.PROJECT_MANAGER_USER = 'tr_project_manager_user';
    this.STAKEHOLDER_ADMIN = 'tr_stakeholder_admin';
    this.STAKEHOLDER_USER = 'tr_stakeholder_user';
  }
  Roles.prototype.i13 = function () {
    return this.ORCHESTRATOR_ADMIN;
  };
  Roles.prototype.j13 = function () {
    return this.ORCHESTRATOR_USER;
  };
  Roles.prototype.k13 = function () {
    return this.PROJECT_MANAGER_ADMIN;
  };
  Roles.prototype.l13 = function () {
    return this.PROJECT_MANAGER_USER;
  };
  Roles.prototype.m13 = function () {
    return this.STAKEHOLDER_ADMIN;
  };
  Roles.prototype.n13 = function () {
    return this.STAKEHOLDER_USER;
  };
  var Roles_instance;
  function Roles_getInstance() {
    if (Roles_instance == null)
      new Roles();
    return Roles_instance;
  }
  function ExceptionCodes() {
    ExceptionCodes_instance = this;
  }
  ExceptionCodes.prototype.negativeTransaction = function () {
    return 1000;
  };
  ExceptionCodes.prototype.notEnoughAssets = function () {
    return 1001;
  };
  ExceptionCodes.prototype.granularityTooSmall = function () {
    return 1002;
  };
  var ExceptionCodes_instance;
  function ExceptionCodes_getInstance() {
    if (ExceptionCodes_instance == null)
      new ExceptionCodes();
    return ExceptionCodes_instance;
  }
  function GeoLocationDTO() {
  }
  function RedirectableRoutes() {
    RedirectableRoutes_instance = this;
  }
  RedirectableRoutes.prototype.quotations = function () {
    return 'quotations';
  };
  RedirectableRoutes.prototype.projects = function () {
    return 'projects';
  };
  var RedirectableRoutes_instance;
  function RedirectableRoutes_getInstance() {
    if (RedirectableRoutes_instance == null)
      new RedirectableRoutes();
    return RedirectableRoutes_instance;
  }
  //region block: post-declaration
  CombinedContext.prototype.u2 = plus;
  AbstractCoroutineContextElement.prototype.n2 = get;
  AbstractCoroutineContextElement.prototype.t2 = fold;
  AbstractCoroutineContextElement.prototype.s2 = minusKey;
  AbstractCoroutineContextElement.prototype.u2 = plus;
  InternalHashCodeMap.prototype.f6 = createJsMap;
  JobSupport.prototype.wb = invokeOnCompletion$default;
  JobSupport.prototype.u2 = plus;
  JobSupport.prototype.n2 = get;
  JobSupport.prototype.t2 = fold;
  JobSupport.prototype.s2 = minusKey;
  AbstractCoroutine.prototype.wb = invokeOnCompletion$default;
  AbstractCoroutine.prototype.u2 = plus;
  AbstractCoroutine.prototype.n2 = get;
  AbstractCoroutine.prototype.t2 = fold;
  AbstractCoroutine.prototype.s2 = minusKey;
  DeferredCoroutine.prototype.wb = invokeOnCompletion$default;
  DeferredCoroutine.prototype.u2 = plus;
  DeferredCoroutine.prototype.n2 = get;
  DeferredCoroutine.prototype.t2 = fold;
  DeferredCoroutine.prototype.s2 = minusKey;
  LazyDeferredCoroutine.prototype.wb = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.u2 = plus;
  LazyDeferredCoroutine.prototype.n2 = get;
  LazyDeferredCoroutine.prototype.t2 = fold;
  LazyDeferredCoroutine.prototype.s2 = minusKey;
  CoroutineDispatcher.prototype.n2 = get_0;
  CoroutineDispatcher.prototype.t2 = fold;
  CoroutineDispatcher.prototype.s2 = minusKey_0;
  CoroutineDispatcher.prototype.u2 = plus;
  EventLoop.prototype.u2 = plus;
  EventLoop.prototype.n2 = get_0;
  EventLoop.prototype.t2 = fold;
  EventLoop.prototype.s2 = minusKey_0;
  MainCoroutineDispatcher.prototype.u2 = plus;
  MainCoroutineDispatcher.prototype.n2 = get_0;
  MainCoroutineDispatcher.prototype.t2 = fold;
  MainCoroutineDispatcher.prototype.s2 = minusKey_0;
  Unconfined.prototype.u2 = plus;
  Unconfined.prototype.n2 = get_0;
  Unconfined.prototype.t2 = fold;
  Unconfined.prototype.s2 = minusKey_0;
  JsMainDispatcher.prototype.u2 = plus;
  JsMainDispatcher.prototype.n2 = get_0;
  JsMainDispatcher.prototype.t2 = fold;
  JsMainDispatcher.prototype.s2 = minusKey_0;
  UnconfinedEventLoop.prototype.u2 = plus;
  UnconfinedEventLoop.prototype.n2 = get_0;
  UnconfinedEventLoop.prototype.t2 = fold;
  UnconfinedEventLoop.prototype.s2 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.u2 = plus;
  SetTimeoutBasedDispatcher.prototype.n2 = get_0;
  SetTimeoutBasedDispatcher.prototype.t2 = fold;
  SetTimeoutBasedDispatcher.prototype.s2 = minusKey_0;
  NodeDispatcher.prototype.u2 = plus;
  NodeDispatcher.prototype.n2 = get_0;
  NodeDispatcher.prototype.t2 = fold;
  NodeDispatcher.prototype.s2 = minusKey_0;
  SetTimeoutDispatcher.prototype.u2 = plus;
  SetTimeoutDispatcher.prototype.n2 = get_0;
  SetTimeoutDispatcher.prototype.t2 = fold;
  SetTimeoutDispatcher.prototype.s2 = minusKey_0;
  WindowDispatcher.prototype.u2 = plus;
  WindowDispatcher.prototype.n2 = get_0;
  WindowDispatcher.prototype.t2 = fold;
  WindowDispatcher.prototype.s2 = minusKey_0;
  SerialDescriptorImpl.prototype.yj = get_isNullable;
  ListLikeDescriptor.prototype.yj = get_isNullable;
  ArrayListClassDesc.prototype.yj = get_isNullable;
  ArrayClassDesc.prototype.yj = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.yj = get_isNullable;
  PrimitiveSerialDescriptor.prototype.yj = get_isNullable;
  PolymorphismValidator.prototype.dn = contextual;
  $serializer.prototype.nm = typeParametersSerializers;
  AndMatch.prototype.or = or;
  OrMatch.prototype.and = and;
  $serializer_1.prototype.nm = typeParametersSerializers;
  $serializer_3.prototype.nm = typeParametersSerializers;
  $serializer_4.prototype.nm = typeParametersSerializers;
  $serializer_5.prototype.nm = typeParametersSerializers;
  $serializer_6.prototype.nm = typeParametersSerializers;
  $serializer_7.prototype.nm = typeParametersSerializers;
  $serializer_8.prototype.nm = typeParametersSerializers;
  $serializer_9.prototype.nm = typeParametersSerializers;
  //endregion
  //region block: init
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  PACKET_MAX_COPY_SIZE = 200;
  DISABLE_SFG = false;
  initializer = SerializerInitializer_getInstance();
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$error = $f2$dsl$cqrs.error || ($f2$dsl$cqrs.error = {});
    $f2$dsl$cqrs$error.F2Error = F2Error;
    $f2$dsl$cqrs$error.F2Error.F2Error_init_$Create$ = F2Error_init_$Create$_0;
    Object.defineProperty($f2$dsl$cqrs$error.F2Error, 'Companion', {
      configurable: true,
      get: Companion_getInstance_10
    });
    Object.defineProperty($f2$dsl$cqrs$error.F2Error, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$exception = $f2$dsl$cqrs.exception || ($f2$dsl$cqrs.exception = {});
    $f2$dsl$cqrs$exception.F2Exception = F2Exception;
    Object.defineProperty($f2$dsl$cqrs$exception.F2Exception, 'Companion', {
      configurable: true,
      get: Companion_getInstance_11
    });
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$filter = $f2$dsl$cqrs.filter || ($f2$dsl$cqrs.filter = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$filter = $f2$dsl$cqrs.filter || ($f2$dsl$cqrs.filter = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.Page = Page;
    $f2$dsl$cqrs$page.Page.Page_init_$Create$ = Page_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.Page, 'Companion', {
      configurable: true,
      get: Companion_getInstance_12
    });
    $f2$dsl$cqrs$page.Page.$serializer = $serializer_0;
    $f2$dsl$cqrs$page.Page.$serializer.$serializer_init_$Create$ = $serializer_init_$Create$;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.PageQuery = PageQuery;
    $f2$dsl$cqrs$page.PageQuery.PageQuery_init_$Create$ = PageQuery_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.PageQuery, 'Companion', {
      configurable: true,
      get: Companion_getInstance_13
    });
    Object.defineProperty($f2$dsl$cqrs$page.PageQuery, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_0
    });
    $f2$dsl$cqrs$page.PageQueryResult = PageQueryResult;
    $f2$dsl$cqrs$page.PageQueryResult.PageQueryResult_init_$Create$ = PageQueryResult_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.PageQueryResult, 'Companion', {
      configurable: true,
      get: Companion_getInstance_14
    });
    $f2$dsl$cqrs$page.PageQueryResult.$serializer = $serializer_2;
    $f2$dsl$cqrs$page.PageQueryResult.$serializer.$serializer_init_$Create$ = $serializer_init_$Create$_0;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.OffsetPagination = OffsetPagination;
    $f2$dsl$cqrs$page.OffsetPagination.OffsetPagination_init_$Create$ = OffsetPagination_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.OffsetPagination, 'Companion', {
      configurable: true,
      get: Companion_getInstance_16
    });
    Object.defineProperty($f2$dsl$cqrs$page.OffsetPagination, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_1
    });
    $f2$dsl$cqrs$page.PagePagination = PagePagination;
    $f2$dsl$cqrs$page.PagePagination.PagePagination_init_$Create$ = PagePagination_init_$Create$;
    Object.defineProperty($f2$dsl$cqrs$page.PagePagination, 'Companion', {
      configurable: true,
      get: Companion_getInstance_17
    });
    Object.defineProperty($f2$dsl$cqrs$page.PagePagination, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_2
    });
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$commons = $city$smartb$im.commons || ($city$smartb$im.commons = {});
    var $city$smartb$im$commons$auth = $city$smartb$im$commons.auth || ($city$smartb$im$commons.auth = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$commons = $city$smartb$im.commons || ($city$smartb$im.commons = {});
    var $city$smartb$im$commons$model = $city$smartb$im$commons.model || ($city$smartb$im$commons.model = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$commons = $city$smartb$im.commons || ($city$smartb$im.commons = {});
    var $city$smartb$im$commons$http = $city$smartb$im$commons.http || ($city$smartb$im$commons.http = {});
    $city$smartb$im$commons$http.ClientJs = ClientJs;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$master = $i2$keycloak.master || ($i2$keycloak.master = {});
    var $i2$keycloak$master$domain = $i2$keycloak$master.domain || ($i2$keycloak$master.domain = {});
    $i2$keycloak$master$domain.AuthRealm = AuthRealm;
    $i2$keycloak$master$domain.AuthRealmPassword = AuthRealmPassword;
    $i2$keycloak$master$domain.AuthRealmClientSecret = AuthRealmClientSecret;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$fnc = $f2$dsl.fnc || ($f2$dsl.fnc = {});
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$commons = $i2$keycloak$f2.commons || ($i2$keycloak$f2.commons = {});
    var $i2$keycloak$f2$commons$domain = $i2$keycloak$f2$commons.domain || ($i2$keycloak$f2$commons.domain = {});
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    $i2$keycloak$f2$role$domain.Role = Role_0;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    $i2$keycloak$f2$role$domain.RoleCompositesModel = RoleCompositesModel;
    $i2$keycloak$f2$role$domain.RolesCompositeModel = RolesCompositeModel;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    var $i2$keycloak$f2$role$domain$features = $i2$keycloak$f2$role$domain.features || ($i2$keycloak$f2$role$domain.features = {});
    var $i2$keycloak$f2$role$domain$features$query = $i2$keycloak$f2$role$domain$features.query || ($i2$keycloak$f2$role$domain$features.query = {});
    $i2$keycloak$f2$role$domain$features$query.RoleCompositeGetQuery = RoleCompositeGetQuery;
    $i2$keycloak$f2$role$domain$features$query.RoleCompositeGetResult = RoleCompositeGetResult;
    $i2$keycloak$f2$role$domain$features$query.RoleCompositeObjType = RoleCompositeObjType;
    $i2$keycloak$f2$role$domain$features$query.RoleCompositeObjType.values = values;
    $i2$keycloak$f2$role$domain$features$query.RoleCompositeObjType.valueOf = valueOf;
    Object.defineProperty($i2$keycloak$f2$role$domain$features$query.RoleCompositeObjType, 'USER', {
      configurable: true,
      get: RoleCompositeObjType_USER_getInstance
    });
    Object.defineProperty($i2$keycloak$f2$role$domain$features$query.RoleCompositeObjType, 'GROUP', {
      configurable: true,
      get: RoleCompositeObjType_GROUP_getInstance
    });
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    var $i2$keycloak$f2$role$domain$features = $i2$keycloak$f2$role$domain.features || ($i2$keycloak$f2$role$domain.features = {});
    var $i2$keycloak$f2$role$domain$features$query = $i2$keycloak$f2$role$domain$features.query || ($i2$keycloak$f2$role$domain$features.query = {});
    $i2$keycloak$f2$role$domain$features$query.RoleGetByIdQuery = RoleGetByIdQuery;
    $i2$keycloak$f2$role$domain$features$query.RoleGetByIdResult = RoleGetByIdResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    var $i2$keycloak$f2$role$domain$features = $i2$keycloak$f2$role$domain.features || ($i2$keycloak$f2$role$domain.features = {});
    var $i2$keycloak$f2$role$domain$features$query = $i2$keycloak$f2$role$domain$features.query || ($i2$keycloak$f2$role$domain$features.query = {});
    $i2$keycloak$f2$role$domain$features$query.RoleGetByNameQuery = RoleGetByNameQuery;
    $i2$keycloak$f2$role$domain$features$query.RoleGetByNameResult = RoleGetByNameResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    var $i2$keycloak$f2$role$domain$features = $i2$keycloak$f2$role$domain.features || ($i2$keycloak$f2$role$domain.features = {});
    var $i2$keycloak$f2$role$domain$features$query = $i2$keycloak$f2$role$domain$features.query || ($i2$keycloak$f2$role$domain$features.query = {});
    $i2$keycloak$f2$role$domain$features$query.RolePageQuery = RolePageQuery;
    $i2$keycloak$f2$role$domain$features$query.RolePageResult = RolePageResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    var $i2$keycloak$f2$role$domain$features = $i2$keycloak$f2$role$domain.features || ($i2$keycloak$f2$role$domain.features = {});
    var $i2$keycloak$f2$role$domain$features$command = $i2$keycloak$f2$role$domain$features.command || ($i2$keycloak$f2$role$domain$features.command = {});
    $i2$keycloak$f2$role$domain$features$command.RoleAddCompositesCommand = RoleAddCompositesCommand;
    $i2$keycloak$f2$role$domain$features$command.RoleAddedCompositesEvent = RoleAddedCompositesEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    var $i2$keycloak$f2$role$domain$features = $i2$keycloak$f2$role$domain.features || ($i2$keycloak$f2$role$domain.features = {});
    var $i2$keycloak$f2$role$domain$features$command = $i2$keycloak$f2$role$domain$features.command || ($i2$keycloak$f2$role$domain$features.command = {});
    $i2$keycloak$f2$role$domain$features$command.RoleCreateCommand = RoleCreateCommand;
    $i2$keycloak$f2$role$domain$features$command.RoleCreatedEvent = RoleCreatedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$role = $i2$keycloak$f2.role || ($i2$keycloak$f2.role = {});
    var $i2$keycloak$f2$role$domain = $i2$keycloak$f2$role.domain || ($i2$keycloak$f2$role.domain = {});
    var $i2$keycloak$f2$role$domain$features = $i2$keycloak$f2$role$domain.features || ($i2$keycloak$f2$role$domain.features = {});
    var $i2$keycloak$f2$role$domain$features$command = $i2$keycloak$f2$role$domain$features.command || ($i2$keycloak$f2$role$domain$features.command = {});
    $i2$keycloak$f2$role$domain$features$command.RoleUpdateCommand = RoleUpdateCommand;
    $i2$keycloak$f2$role$domain$features$command.RoleUpdatedEvent = RoleUpdatedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$group = $i2$keycloak$f2.group || ($i2$keycloak$f2.group = {});
    var $i2$keycloak$f2$group$domain = $i2$keycloak$f2$group.domain || ($i2$keycloak$f2$group.domain = {});
    var $i2$keycloak$f2$group$domain$features = $i2$keycloak$f2$group$domain.features || ($i2$keycloak$f2$group$domain.features = {});
    var $i2$keycloak$f2$group$domain$features$command = $i2$keycloak$f2$group$domain$features.command || ($i2$keycloak$f2$group$domain$features.command = {});
    $i2$keycloak$f2$group$domain$features$command.GroupCreateCommand = GroupCreateCommand;
    $i2$keycloak$f2$group$domain$features$command.GroupCreatedEvent = GroupCreatedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$group = $i2$keycloak$f2.group || ($i2$keycloak$f2.group = {});
    var $i2$keycloak$f2$group$domain = $i2$keycloak$f2$group.domain || ($i2$keycloak$f2$group.domain = {});
    var $i2$keycloak$f2$group$domain$features = $i2$keycloak$f2$group$domain.features || ($i2$keycloak$f2$group$domain.features = {});
    var $i2$keycloak$f2$group$domain$features$command = $i2$keycloak$f2$group$domain$features.command || ($i2$keycloak$f2$group$domain$features.command = {});
    $i2$keycloak$f2$group$domain$features$command.GroupDisableCommand = GroupDisableCommand;
    $i2$keycloak$f2$group$domain$features$command.GroupDisabledEvent = GroupDisabledEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$group = $i2$keycloak$f2.group || ($i2$keycloak$f2.group = {});
    var $i2$keycloak$f2$group$domain = $i2$keycloak$f2$group.domain || ($i2$keycloak$f2$group.domain = {});
    var $i2$keycloak$f2$group$domain$features = $i2$keycloak$f2$group$domain.features || ($i2$keycloak$f2$group$domain.features = {});
    var $i2$keycloak$f2$group$domain$features$command = $i2$keycloak$f2$group$domain$features.command || ($i2$keycloak$f2$group$domain$features.command = {});
    $i2$keycloak$f2$group$domain$features$command.GroupSetAttributesCommand = GroupSetAttributesCommand;
    $i2$keycloak$f2$group$domain$features$command.GroupSetAttributesEvent = GroupSetAttributesEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$group = $i2$keycloak$f2.group || ($i2$keycloak$f2.group = {});
    var $i2$keycloak$f2$group$domain = $i2$keycloak$f2$group.domain || ($i2$keycloak$f2$group.domain = {});
    var $i2$keycloak$f2$group$domain$features = $i2$keycloak$f2$group$domain.features || ($i2$keycloak$f2$group$domain.features = {});
    var $i2$keycloak$f2$group$domain$features$command = $i2$keycloak$f2$group$domain$features.command || ($i2$keycloak$f2$group$domain$features.command = {});
    $i2$keycloak$f2$group$domain$features$command.GroupUpdateCommand = GroupUpdateCommand;
    $i2$keycloak$f2$group$domain$features$command.GroupUpdatedEvent = GroupUpdatedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserCreateCommand = UserCreateCommand;
    $i2$keycloak$f2$user$domain$features$command.UserCreatedEvent = UserCreatedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserDeleteCommand = UserDeleteCommand;
    $i2$keycloak$f2$user$domain$features$command.UserDeletedEvent = UserDeletedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserDisableCommand = UserDisableCommand;
    $i2$keycloak$f2$user$domain$features$command.UserDisabledEvent = UserDisabledEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserEmailSendActionsCommand = UserEmailSendActionsCommand;
    $i2$keycloak$f2$user$domain$features$command.UserEmailSentActionsEvent = UserEmailSentActionsEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserJoinGroupCommand = UserJoinGroupCommand;
    $i2$keycloak$f2$user$domain$features$command.UserJoinedGroupEvent = UserJoinedGroupEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserRolesGrantCommand = UserRolesGrantCommand;
    $i2$keycloak$f2$user$domain$features$command.UserRolesGrantedEvent = UserRolesGrantedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserRolesRevokeCommand = UserRolesRevokeCommand;
    $i2$keycloak$f2$user$domain$features$command.UserRolesRevokedEvent = UserRolesRevokedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserRolesSetCommand = UserRolesSetCommand;
    $i2$keycloak$f2$user$domain$features$command.UserRolesSetEvent = UserRolesSetEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserSetAttributesCommand = UserSetAttributesCommand;
    $i2$keycloak$f2$user$domain$features$command.UserSetAttributesEvent = UserSetAttributesEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserUpdateEmailCommand = UserUpdateEmailCommand;
    $i2$keycloak$f2$user$domain$features$command.UserUpdatedEmailEvent = UserUpdatedEmailEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserUpdateCommand = UserUpdateCommand;
    $i2$keycloak$f2$user$domain$features$command.UserUpdatedEvent = UserUpdatedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$command = $i2$keycloak$f2$user$domain$features.command || ($i2$keycloak$f2$user$domain$features.command = {});
    $i2$keycloak$f2$user$domain$features$command.UserUpdatePasswordCommand = UserUpdatePasswordCommand;
    $i2$keycloak$f2$user$domain$features$command.UserUpdatedPasswordEvent = UserUpdatedPasswordEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$query = $i2$keycloak$f2$user$domain$features.query || ($i2$keycloak$f2$user$domain$features.query = {});
    $i2$keycloak$f2$user$domain$features$query.UserGetByEmailQuery = UserGetByEmailQuery;
    $i2$keycloak$f2$user$domain$features$query.UserGetByEmailQueryResult = UserGetByEmailQueryResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$query = $i2$keycloak$f2$user$domain$features.query || ($i2$keycloak$f2$user$domain$features.query = {});
    $i2$keycloak$f2$user$domain$features$query.UserGetByUsernameQuery = UserGetByUsernameQuery;
    $i2$keycloak$f2$user$domain$features$query.UserGetByUsernameResult = UserGetByUsernameResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$query = $i2$keycloak$f2$user$domain$features.query || ($i2$keycloak$f2$user$domain$features.query = {});
    $i2$keycloak$f2$user$domain$features$query.UserGetQuery = UserGetQuery;
    $i2$keycloak$f2$user$domain$features$query.UserGetResult = UserGetResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$query = $i2$keycloak$f2$user$domain$features.query || ($i2$keycloak$f2$user$domain$features.query = {});
    $i2$keycloak$f2$user$domain$features$query.UserGetGroupsQuery = UserGetGroupsQuery;
    $i2$keycloak$f2$user$domain$features$query.UserGetGroupsResult = UserGetGroupsResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$query = $i2$keycloak$f2$user$domain$features.query || ($i2$keycloak$f2$user$domain$features.query = {});
    $i2$keycloak$f2$user$domain$features$query.UserGetRolesQuery = UserGetRolesQuery;
    $i2$keycloak$f2$user$domain$features$query.UserGetRolesResult = UserGetRolesResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$features = $i2$keycloak$f2$user$domain.features || ($i2$keycloak$f2$user$domain.features = {});
    var $i2$keycloak$f2$user$domain$features$query = $i2$keycloak$f2$user$domain$features.query || ($i2$keycloak$f2$user$domain$features.query = {});
    $i2$keycloak$f2$user$domain$features$query.UserPageQuery = UserPageQuery;
    $i2$keycloak$f2$user$domain$features$query.UserPageResult = UserPageResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$model = $i2$keycloak$f2$user$domain.model || ($i2$keycloak$f2$user$domain.model = {});
    $i2$keycloak$f2$user$domain$model.UserGroup = UserGroup;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$user = $i2$keycloak$f2.user || ($i2$keycloak$f2.user = {});
    var $i2$keycloak$f2$user$domain = $i2$keycloak$f2$user.domain || ($i2$keycloak$f2$user.domain = {});
    var $i2$keycloak$f2$user$domain$model = $i2$keycloak$f2$user$domain.model || ($i2$keycloak$f2$user$domain.model = {});
    $i2$keycloak$f2$user$domain$model.UserModel = UserModel;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    $i2$keycloak$f2$client$domain.ClientModel = ClientModel;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$query = $i2$keycloak$f2$client$domain$features.query || ($i2$keycloak$f2$client$domain$features.query = {});
    $i2$keycloak$f2$client$domain$features$query.ClientGetByClientIdentifierQuery = ClientGetByClientIdentifierQuery;
    $i2$keycloak$f2$client$domain$features$query.ClientGetByClientIdentifierResult = ClientGetByClientIdentifierResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$query = $i2$keycloak$f2$client$domain$features.query || ($i2$keycloak$f2$client$domain$features.query = {});
    $i2$keycloak$f2$client$domain$features$query.ClientGetQuery = ClientGetQuery;
    $i2$keycloak$f2$client$domain$features$query.ClientGetResult = ClientGetResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$query = $i2$keycloak$f2$client$domain$features.query || ($i2$keycloak$f2$client$domain$features.query = {});
    $i2$keycloak$f2$client$domain$features$query.ClientGetSecretQuery = ClientGetSecretQuery;
    $i2$keycloak$f2$client$domain$features$query.ClientGetSecretResult = ClientGetSecretResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$query = $i2$keycloak$f2$client$domain$features.query || ($i2$keycloak$f2$client$domain$features.query = {});
    $i2$keycloak$f2$client$domain$features$query.ClientGetServiceAccountQuery = ClientGetServiceAccountQuery;
    $i2$keycloak$f2$client$domain$features$query.ClientGetServiceAccountResult = ClientGetServiceAccountResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$query = $i2$keycloak$f2$client$domain$features.query || ($i2$keycloak$f2$client$domain$features.query = {});
    $i2$keycloak$f2$client$domain$features$query.ClientPageQuery = ClientPageQuery;
    $i2$keycloak$f2$client$domain$features$query.ClientPageResult = ClientPageResult;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$command = $i2$keycloak$f2$client$domain$features.command || ($i2$keycloak$f2$client$domain$features.command = {});
    $i2$keycloak$f2$client$domain$features$command.ClientCreateCommand = ClientCreateCommand;
    $i2$keycloak$f2$client$domain$features$command.ClientCreatedEvent = ClientCreatedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$command = $i2$keycloak$f2$client$domain$features.command || ($i2$keycloak$f2$client$domain$features.command = {});
    $i2$keycloak$f2$client$domain$features$command.ClientDeleteCommand = ClientDeleteCommand;
    $i2$keycloak$f2$client$domain$features$command.ClientDeletedEvent = ClientDeletedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$command = $i2$keycloak$f2$client$domain$features.command || ($i2$keycloak$f2$client$domain$features.command = {});
    $i2$keycloak$f2$client$domain$features$command.ClientGenerateSecretCommand = ClientGenerateSecretCommand;
    $i2$keycloak$f2$client$domain$features$command.ClientGeneratedSecretEvent = ClientGeneratedSecretEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$command = $i2$keycloak$f2$client$domain$features.command || ($i2$keycloak$f2$client$domain$features.command = {});
    $i2$keycloak$f2$client$domain$features$command.ClientRealmManagementRolesGrantCommand = ClientRealmManagementRolesGrantCommand;
    $i2$keycloak$f2$client$domain$features$command.ClientRealmManagementRolesGrantedEvent = ClientRealmManagementRolesGrantedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$command = $i2$keycloak$f2$client$domain$features.command || ($i2$keycloak$f2$client$domain$features.command = {});
    $i2$keycloak$f2$client$domain$features$command.ClientServiceAccountRolesGrantCommand = ClientServiceAccountRolesGrantCommand;
    $i2$keycloak$f2$client$domain$features$command.ClientServiceAccountRolesGrantedEvent = ClientServiceAccountRolesGrantedEvent;
    var $i2 = _.i2 || (_.i2 = {});
    var $i2$keycloak = $i2.keycloak || ($i2.keycloak = {});
    var $i2$keycloak$f2 = $i2$keycloak.f2 || ($i2$keycloak.f2 = {});
    var $i2$keycloak$f2$client = $i2$keycloak$f2.client || ($i2$keycloak$f2.client = {});
    var $i2$keycloak$f2$client$domain = $i2$keycloak$f2$client.domain || ($i2$keycloak$f2$client.domain = {});
    var $i2$keycloak$f2$client$domain$features = $i2$keycloak$f2$client$domain.features || ($i2$keycloak$f2$client$domain.features = {});
    var $i2$keycloak$f2$client$domain$features$command = $i2$keycloak$f2$client$domain$features.command || ($i2$keycloak$f2$client$domain$features.command = {});
    $i2$keycloak$f2$client$domain$features$command.ClientUpdateUrisCommand = ClientUpdateUrisCommand;
    $i2$keycloak$f2$client$domain$features$command.ClientUpdatedUrisEvent = ClientUpdatedUrisEvent;
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$command = $city$smartb$im$organization$domain$features.command || ($city$smartb$im$organization$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$command = $city$smartb$im$organization$domain$features.command || ($city$smartb$im$organization$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$command = $city$smartb$im$organization$domain$features.command || ($city$smartb$im$organization$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$command = $city$smartb$im$organization$domain$features.command || ($city$smartb$im$organization$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$command = $city$smartb$im$organization$domain$features.command || ($city$smartb$im$organization$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$query = $city$smartb$im$organization$domain$features.query || ($city$smartb$im$organization$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$query = $city$smartb$im$organization$domain$features.query || ($city$smartb$im$organization$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$query = $city$smartb$im$organization$domain$features.query || ($city$smartb$im$organization$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$features = $city$smartb$im$organization$domain.features || ($city$smartb$im$organization$domain.features = {});
    var $city$smartb$im$organization$domain$features$query = $city$smartb$im$organization$domain$features.query || ($city$smartb$im$organization$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$model = $city$smartb$im$organization$domain.model || ($city$smartb$im$organization$domain.model = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$model = $city$smartb$im$organization$domain.model || ($city$smartb$im$organization$domain.model = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$organization = $city$smartb$im.organization || ($city$smartb$im.organization = {});
    var $city$smartb$im$organization$domain = $city$smartb$im$organization.domain || ($city$smartb$im$organization.domain = {});
    var $city$smartb$im$organization$domain$policies = $city$smartb$im$organization$domain.policies || ($city$smartb$im$organization$domain.policies = {});
    Object.defineProperty($city$smartb$im$organization$domain$policies, 'OrganizationPolicies', {
      configurable: true,
      get: OrganizationPolicies_getInstance
    });
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$command = $city$smartb$im$user$domain$features.command || ($city$smartb$im$user$domain$features.command = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$query = $city$smartb$im$user$domain$features.query || ($city$smartb$im$user$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$query = $city$smartb$im$user$domain$features.query || ($city$smartb$im$user$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$query = $city$smartb$im$user$domain$features.query || ($city$smartb$im$user$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$features = $city$smartb$im$user$domain.features || ($city$smartb$im$user$domain.features = {});
    var $city$smartb$im$user$domain$features$query = $city$smartb$im$user$domain$features.query || ($city$smartb$im$user$domain$features.query = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$model = $city$smartb$im$user$domain.model || ($city$smartb$im$user$domain.model = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$im = $city$smartb.im || ($city$smartb.im = {});
    var $city$smartb$im$user = $city$smartb$im.user || ($city$smartb$im.user = {});
    var $city$smartb$im$user$domain = $city$smartb$im$user.domain || ($city$smartb$im$user.domain = {});
    var $city$smartb$im$user$domain$policies = $city$smartb$im$user$domain.policies || ($city$smartb$im$user$domain.policies = {});
    Object.defineProperty($city$smartb$im$user$domain$policies, 'UserPolicies', {
      configurable: true,
      get: UserPolicies_getInstance
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.Block = Block;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.EnvelopeType = EnvelopeType;
    $ssm$chaincode$dsl$blockchain.EnvelopeType.values = values_0;
    $ssm$chaincode$dsl$blockchain.EnvelopeType.valueOf = valueOf_0;
    Object.defineProperty($ssm$chaincode$dsl$blockchain.EnvelopeType, 'TRANSACTION_ENVELOPE', {
      configurable: true,
      get: EnvelopeType_TRANSACTION_ENVELOPE_getInstance
    });
    Object.defineProperty($ssm$chaincode$dsl$blockchain.EnvelopeType, 'ENVELOPE', {
      configurable: true,
      get: EnvelopeType_ENVELOPE_getInstance
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.IdentitiesInfo = IdentitiesInfo;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.Transaction = Transaction;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$config = $ssm$chaincode$dsl.config || ($ssm$chaincode$dsl.config = {});
    $ssm$chaincode$dsl$config.ChaincodeSsmConfig = ChaincodeSsmConfig;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.Agent = Agent;
    Object.defineProperty($ssm$chaincode$dsl$model.Agent, 'Companion', {
      configurable: true,
      get: Companion_getInstance_18
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.Chaincode = Chaincode;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.Ssm = Ssm;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmContext = SsmContext;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmGrant = SsmGrant;
    $ssm$chaincode$dsl$model.Credit = Credit;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmSession = SsmSession;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmSessionState = SsmSessionState;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmSessionStateLog = SsmSessionStateLog;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmTransition = SsmTransition;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    var $ssm$chaincode$dsl$model$uri = $ssm$chaincode$dsl$model.uri || ($ssm$chaincode$dsl$model.uri = {});
    $ssm$chaincode$dsl$model$uri.ChaincodeUri = ChaincodeUri;
    Object.defineProperty($ssm$chaincode$dsl$model$uri.ChaincodeUri, 'Companion', {
      configurable: true,
      get: Companion_getInstance_19
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    var $ssm$chaincode$dsl$model$uri = $ssm$chaincode$dsl$model.uri || ($ssm$chaincode$dsl$model.uri = {});
    $ssm$chaincode$dsl$model$uri.SsmUri = SsmUri;
    Object.defineProperty($ssm$chaincode$dsl$model$uri.SsmUri, 'Companion', {
      configurable: true,
      get: Companion_getInstance_20
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetAdminQuery = SsmGetAdminQuery;
    $ssm$chaincode$dsl$query.SsmGetAdminResult = SsmGetAdminResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetQuery = SsmGetQuery;
    $ssm$chaincode$dsl$query.SsmGetResult = SsmGetResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetSessionLogsQuery = SsmGetSessionLogsQuery;
    $ssm$chaincode$dsl$query.SsmGetSessionLogsQueryResult = SsmGetSessionLogsQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetSessionQuery = SsmGetSessionQuery;
    $ssm$chaincode$dsl$query.SsmGetSessionResult = SsmGetSessionResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetTransactionQuery = SsmGetTransactionQuery;
    $ssm$chaincode$dsl$query.SsmGetTransactionQueryResult = SsmGetTransactionQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetUserQuery = SsmGetUserQuery;
    $ssm$chaincode$dsl$query.SsmGetUserResult = SsmGetUserResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListAdminQuery = SsmListAdminQuery;
    $ssm$chaincode$dsl$query.SsmListAdminResult = SsmListAdminResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListSessionQuery = SsmListSessionQuery;
    $ssm$chaincode$dsl$query.SsmListSessionResult = SsmListSessionResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListSsmQuery = SsmListSsmQuery;
    $ssm$chaincode$dsl$query.SsmListSsmResult = SsmListSsmResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListUserQuery = SsmListUserQuery;
    $ssm$chaincode$dsl$query.SsmListUserResult = SsmListUserResult;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2Automate = S2Automate;
    $s2$dsl$automate.S2Automate.S2Automate_init_$Create$ = S2Automate_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2Automate, 'Companion', {
      configurable: true,
      get: Companion_getInstance_21
    });
    Object.defineProperty($s2$dsl$automate.S2Automate, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_3
    });
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2ErrorBase = S2ErrorBase;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2EventSuccess = S2EventSuccess;
    $s2$dsl$automate.S2EventError = S2EventError;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2SubMachine = S2SubMachine;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2InitTransition = S2InitTransition;
    $s2$dsl$automate.S2Transition = S2Transition;
    $s2$dsl$automate.S2Transition.S2Transition_init_$Create$ = S2Transition_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2Transition, 'Companion', {
      configurable: true,
      get: Companion_getInstance_22
    });
    Object.defineProperty($s2$dsl$automate.S2Transition, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_4
    });
    $s2$dsl$automate.S2TransitionValue = S2TransitionValue;
    $s2$dsl$automate.S2TransitionValue.S2TransitionValue_init_$Create$ = S2TransitionValue_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2TransitionValue, 'Companion', {
      configurable: true,
      get: Companion_getInstance_23
    });
    Object.defineProperty($s2$dsl$automate.S2TransitionValue, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_5
    });
    $s2$dsl$automate.S2RoleValue = S2RoleValue;
    $s2$dsl$automate.S2RoleValue.S2RoleValue_init_$Create$ = S2RoleValue_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2RoleValue, 'Companion', {
      configurable: true,
      get: Companion_getInstance_24
    });
    Object.defineProperty($s2$dsl$automate.S2RoleValue, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_6
    });
    $s2$dsl$automate.S2StateValue = S2StateValue;
    $s2$dsl$automate.S2StateValue.S2StateValue_init_$Create$ = S2StateValue_init_$Create$;
    Object.defineProperty($s2$dsl$automate.S2StateValue, 'Companion', {
      configurable: true,
      get: Companion_getInstance_25
    });
    Object.defineProperty($s2$dsl$automate.S2StateValue, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_7
    });
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$builder = $s2$dsl$automate.builder || ($s2$dsl$automate.builder = {});
    $s2$dsl$automate$builder.s2 = s2;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$builder = $s2$dsl$automate.builder || ($s2$dsl$automate.builder = {});
    $s2$dsl$automate$builder.s2Sourcing = s2Sourcing;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$model = $s2$dsl$automate.model || ($s2$dsl$automate.model = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$model = $s2$dsl$automate.model || ($s2$dsl$automate.model = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$model = $s2$dsl$automate.model || ($s2$dsl$automate.model = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$sourcing = $s2.sourcing || ($s2.sourcing = {});
    var $s2$sourcing$dsl = $s2$sourcing.dsl || ($s2$sourcing.dsl = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$registry = $city$smartb.registry || ($city$smartb.registry = {});
    var $city$smartb$registry$program = $city$smartb$registry.program || ($city$smartb$registry.program = {});
    var $city$smartb$registry$program$api = $city$smartb$registry$program.api || ($city$smartb$registry$program.api = {});
    var $city$smartb$registry$program$api$commons = $city$smartb$registry$program$api.commons || ($city$smartb$registry$program$api.commons = {});
    var $city$smartb$registry$program$api$commons$auth = $city$smartb$registry$program$api$commons.auth || ($city$smartb$registry$program$api$commons.auth = {});
    Object.defineProperty($city$smartb$registry$program$api$commons$auth, 'Roles', {
      configurable: true,
      get: Roles_getInstance
    });
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$registry = $city$smartb.registry || ($city$smartb.registry = {});
    var $city$smartb$registry$program = $city$smartb$registry.program || ($city$smartb$registry.program = {});
    var $city$smartb$registry$program$api = $city$smartb$registry$program.api || ($city$smartb$registry$program.api = {});
    var $city$smartb$registry$program$api$commons = $city$smartb$registry$program$api.commons || ($city$smartb$registry$program$api.commons = {});
    var $city$smartb$registry$program$api$commons$exception = $city$smartb$registry$program$api$commons.exception || ($city$smartb$registry$program$api$commons.exception = {});
    Object.defineProperty($city$smartb$registry$program$api$commons$exception, 'ExceptionCodes', {
      configurable: true,
      get: ExceptionCodes_getInstance
    });
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$registry = $city$smartb.registry || ($city$smartb.registry = {});
    var $city$smartb$registry$program = $city$smartb$registry.program || ($city$smartb$registry.program = {});
    var $city$smartb$registry$program$api = $city$smartb$registry$program.api || ($city$smartb$registry$program.api = {});
    var $city$smartb$registry$program$api$commons = $city$smartb$registry$program$api.commons || ($city$smartb$registry$program$api.commons = {});
    var $city$smartb$registry$program$api$commons$model = $city$smartb$registry$program$api$commons.model || ($city$smartb$registry$program$api$commons.model = {});
    var $city = _.city || (_.city = {});
    var $city$smartb = $city.smartb || ($city.smartb = {});
    var $city$smartb$registry = $city$smartb.registry || ($city$smartb.registry = {});
    var $city$smartb$registry$program = $city$smartb$registry.program || ($city$smartb$registry.program = {});
    var $city$smartb$registry$program$api = $city$smartb$registry$program.api || ($city$smartb$registry$program.api = {});
    var $city$smartb$registry$program$api$commons = $city$smartb$registry$program$api.commons || ($city$smartb$registry$program$api.commons = {});
    var $city$smartb$registry$program$api$commons$model = $city$smartb$registry$program$api$commons.model || ($city$smartb$registry$program$api$commons.model = {});
    Object.defineProperty($city$smartb$registry$program$api$commons$model, 'RedirectableRoutes', {
      configurable: true,
      get: RedirectableRoutes_getInstance
    });
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=verified-emission-reduction-registry-api-commons.js.map

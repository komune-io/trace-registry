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
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib-js-ir'] = factory(typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
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
  setMetadataFor(List, 'List', interfaceMeta, undefined, [Collection], undefined, undefined, []);
  setMetadataFor(EmptyList, 'EmptyList', objectMeta, undefined, [List], undefined, undefined, []);
  setMetadataFor(EmptyIterator, 'EmptyIterator', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ArrayAsCollection, 'ArrayAsCollection', classMeta, undefined, [Collection], undefined, undefined, []);
  setMetadataFor(IndexedValue, 'IndexedValue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IndexingIterable, 'IndexingIterable', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IndexingIterator, 'IndexingIterator', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyMap, 'EmptyMap', objectMeta, undefined, [Map], undefined, undefined, []);
  setMetadataFor(IntIterator, 'IntIterator', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptySet, 'EmptySet', objectMeta, undefined, [Set], undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IntProgression, 'IntProgression', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IntRange, 'IntRange', classMeta, IntProgression, undefined, undefined, undefined, []);
  setMetadataFor(IntProgressionIterator, 'IntProgressionIterator', classMeta, IntIterator, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelimitedRangesSequence$iterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelimitedRangesSequence, 'DelimitedRangesSequence', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Enum, 'Enum', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LazyThreadSafetyMode, 'LazyThreadSafetyMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(UnsafeLazyImpl, 'UnsafeLazyImpl', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UNINITIALIZED_VALUE, 'UNINITIALIZED_VALUE', objectMeta, undefined, undefined, undefined, undefined, []);
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
  setMetadataFor(LinkedHashSet, 'LinkedHashSet', classMeta, HashSet, [HashSet, Set, Collection], undefined, undefined, []);
  setMetadataFor(KClass, 'KClass', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KClassImpl, 'KClassImpl', classMeta, undefined, [KClass], undefined, undefined, []);
  setMetadataFor(PrimitiveKClassImpl, 'PrimitiveKClassImpl', classMeta, KClassImpl, undefined, undefined, undefined, []);
  setMetadataFor(NothingKClassImpl, 'NothingKClassImpl', objectMeta, KClassImpl, undefined, undefined, undefined, []);
  setMetadataFor(ErrorKClass, 'ErrorKClass', classMeta, undefined, [KClass], undefined, undefined, []);
  setMetadataFor(SimpleKClassImpl, 'SimpleKClassImpl', classMeta, KClassImpl, undefined, undefined, undefined, []);
  setMetadataFor(KProperty1, 'KProperty1', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveClasses, 'PrimitiveClasses', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringBuilder, 'StringBuilder', classMeta, undefined, [CharSequence], undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Char, 'Char', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BitMask, 'BitMask', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(arrayIterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Long, 'Long', classMeta, Number_0, undefined, undefined, undefined, []);
  setMetadataFor(Exception, 'Exception', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(RuntimeException, 'RuntimeException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(IllegalArgumentException, 'IllegalArgumentException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(IllegalStateException, 'IllegalStateException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(NoSuchElementException, 'NoSuchElementException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(IndexOutOfBoundsException, 'IndexOutOfBoundsException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(UnsupportedOperationException, 'UnsupportedOperationException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(ArithmeticException, 'ArithmeticException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(NullPointerException, 'NullPointerException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(ClassCastException, 'ClassCastException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(UninitializedPropertyAccessException, 'UninitializedPropertyAccessException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  //endregion
  function toList(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.length;
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__u8e3s4[0]);
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
  function toCollection(_this__u8e3s4, destination) {
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.a(item);
    }
    return destination;
  }
  function contains(_this__u8e3s4, element) {
    return indexOf(_this__u8e3s4, element) >= 0;
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
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.b(prefix);
    var count = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.b(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function distinct(_this__u8e3s4) {
    return toList_0(toMutableSet(_this__u8e3s4));
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
        list.a(tmp$ret$1);
      }
       while (inductionVariable < size);
    tmp$ret$2 = list;
    return tmp$ret$2;
  }
  function toMutableSet(_this__u8e3s4) {
    return toCollection(_this__u8e3s4, LinkedHashSet_init_$Create$(mapCapacity(_this__u8e3s4.length)));
  }
  function withIndex$lambda($this_withIndex) {
    return function () {
      return arrayIterator($this_withIndex);
    };
  }
  function toHashSet(_this__u8e3s4) {
    return toCollection_0(_this__u8e3s4, HashSet_init_$Create$_0(mapCapacity(collectionSizeOrDefault(_this__u8e3s4, 12))));
  }
  function toBooleanArray(_this__u8e3s4) {
    var result = booleanArray(_this__u8e3s4.f());
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
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
  function toList_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp0_subject = _this__u8e3s4.f();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, List)) {
            tmp_0 = _this__u8e3s4.j(0);
          } else {
            tmp_0 = _this__u8e3s4.g().i();
          }

          tmp = listOf(tmp_0);
          break;
        default:
          tmp = toMutableList_0(_this__u8e3s4);
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyList(toMutableList_1(_this__u8e3s4));
  }
  function first(_this__u8e3s4) {
    if (_this__u8e3s4.k())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this__u8e3s4.j(0);
  }
  function toCollection_0(_this__u8e3s4, destination) {
    var tmp0_iterator = _this__u8e3s4.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      destination.a(item);
    }
    return destination;
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.b(prefix);
    var count = 0;
    var tmp0_iterator = _this__u8e3s4.g();
    $l$loop: while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.b(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function toMutableList_0(_this__u8e3s4) {
    return ArrayList_init_$Create$_1(_this__u8e3s4);
  }
  function toMutableList_1(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection))
      return toMutableList_0(_this__u8e3s4);
    return toCollection_0(_this__u8e3s4, ArrayList_init_$Create$());
  }
  function single(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    if (isInterface(tmp0_subject, List))
      return single_0(_this__u8e3s4);
    else {
      var iterator = _this__u8e3s4.g();
      if (!iterator.h())
        throw NoSuchElementException_init_$Create$_0('Collection is empty.');
      var single = iterator.i();
      if (iterator.h())
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
        tmp = _this__u8e3s4.j(0);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function until(_this__u8e3s4, to) {
    if (to <= IntCompanionObject_getInstance().MIN_VALUE)
      return Companion_getInstance_2().l_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
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
  function downTo(_this__u8e3s4, to) {
    return Companion_getInstance_3().m(_this__u8e3s4, to, -1);
  }
  function asIterable(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function _no_name_provided__qut3iv($this_asIterable) {
    this.n_1 = $this_asIterable;
  }
  _no_name_provided__qut3iv.prototype.g = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.sequences.asIterable.<anonymous>' call
    tmp$ret$0 = this.n_1.g();
    return tmp$ret$0;
  };
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_1(it);
    };
  }
  function AbstractCollection() {
  }
  AbstractCollection.prototype.o = function (element) {
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
      var tmp0_iterator = this.g();
      while (tmp0_iterator.h()) {
        var element_0 = tmp0_iterator.i();
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
  AbstractCollection.prototype.p = function (elements) {
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
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.o(element);
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
  Companion.prototype.q = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.r = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.s = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.g();
    while (tmp0_iterator.h()) {
      var e = tmp0_iterator.i();
      var tmp = imul(31, hashCode_0);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion.prototype.t = function (c, other) {
    if (!(c.f() === other.f()))
      return false;
    var otherIterator = other.g();
    var tmp0_iterator = c.g();
    while (tmp0_iterator.h()) {
      var elem = tmp0_iterator.i();
      var elemOther = otherIterator.i();
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
    this.u_1 = $entryIterator;
  }
  AbstractMap$keys$1$iterator$1.prototype.h = function () {
    return this.u_1.h();
  };
  AbstractMap$keys$1$iterator$1.prototype.i = function () {
    return this.u_1.i().v();
  };
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_1(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = $this.w();
      var tmp0_iterator = tmp0_firstOrNull.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp$ret$0;
        // Inline function 'kotlin.collections.AbstractMap.implFindEntry.<anonymous>' call
        tmp$ret$0 = equals_0(element.v(), key);
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
  Companion_0.prototype.x = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryHashCode.<anonymous>' call
    var tmp2_safe_receiver = e.v();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var tmp0_safe_receiver = e.y();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion_0.prototype.z = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryToString.<anonymous>' call
    tmp$ret$0 = toString_1(e.v()) + '=' + toString_1(e.y());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion_0.prototype.a1 = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    return equals_0(e.v(), other.v()) ? equals_0(e.y(), other.y()) : false;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AbstractMap$keys$1(this$0) {
    this.b1_1 = this$0;
    AbstractSet.call(this);
  }
  AbstractMap$keys$1.prototype.c1 = function (element) {
    return this.b1_1.f1(element);
  };
  AbstractMap$keys$1.prototype.o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.c1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMap$keys$1.prototype.g = function () {
    var entryIterator = this.b1_1.w().g();
    return new AbstractMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMap$keys$1.prototype.f = function () {
    return this.b1_1.f();
  };
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.g1(it);
    };
  }
  function AbstractMap() {
    Companion_getInstance_0();
    this.d1_1 = null;
    this.e1_1 = null;
  }
  AbstractMap.prototype.f1 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.h1 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    var key = entry.v();
    var value = entry.y();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    tmp$ret$0 = (isInterface(this, Map) ? this : THROW_CCE()).i1(key);
    var ourValue = tmp$ret$0;
    if (!equals_0(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$1 = (isInterface(this, Map) ? this : THROW_CCE()).f1(key);
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
      var tmp0_all = other.w();
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
      var tmp0_iterator = tmp0_all.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractMap.equals.<anonymous>' call
        tmp$ret$1 = this.h1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.i1 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this.w());
  };
  AbstractMap.prototype.k = function () {
    return this.f() === 0;
  };
  AbstractMap.prototype.f = function () {
    return this.w().f();
  };
  AbstractMap.prototype.j1 = function () {
    if (this.d1_1 == null) {
      var tmp = this;
      tmp.d1_1 = new AbstractMap$keys$1(this);
    }
    return ensureNotNull(this.d1_1);
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this.w();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, AbstractMap$toString$lambda(this), 24, null);
  };
  AbstractMap.prototype.g1 = function (entry) {
    return toString(this, entry.v()) + '=' + toString(this, entry.y());
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.k1 = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion_1.prototype.l1 = function (c, other) {
    if (!(c.f() === other.f()))
      return false;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsAll' call
    tmp$ret$0 = c.p(other);
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
    return Companion_getInstance_1().l1(this, other);
  };
  AbstractSet.prototype.hashCode = function () {
    return Companion_getInstance_1().k1(this);
  };
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.m1_1 = new Long(-1478467534, -1720727600);
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
  EmptyList.prototype.n1 = function (elements) {
    return elements.k();
  };
  EmptyList.prototype.p = function (elements) {
    return this.n1(elements);
  };
  EmptyList.prototype.j = function (index) {
    throw IndexOutOfBoundsException_init_$Create$("Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.g = function () {
    return EmptyIterator_getInstance();
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.h = function () {
    return false;
  };
  EmptyIterator.prototype.i = function () {
    throw NoSuchElementException_init_$Create$();
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function optimizeReadOnlyList(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.f();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__u8e3s4.j(0));
      default:
        return _this__u8e3s4;
    }
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return _this__u8e3s4.f() - 1 | 0;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function asCollection(_this__u8e3s4) {
    return new ArrayAsCollection(_this__u8e3s4, false);
  }
  function ArrayAsCollection(values, isVarargs) {
    this.o1_1 = values;
    this.p1_1 = isVarargs;
  }
  ArrayAsCollection.prototype.f = function () {
    return this.o1_1.length;
  };
  ArrayAsCollection.prototype.k = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp0_isEmpty = this.o1_1;
    tmp$ret$0 = tmp0_isEmpty.length === 0;
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.q1 = function (element) {
    return contains(this.o1_1, element);
  };
  ArrayAsCollection.prototype.r1 = function (elements) {
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
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.ArrayAsCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.q1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.p = function (elements) {
    return this.r1(elements);
  };
  ArrayAsCollection.prototype.g = function () {
    return arrayIterator(this.o1_1);
  };
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function IndexedValue(index, value) {
    this.s1_1 = index;
    this.t1_1 = value;
  }
  IndexedValue.prototype.toString = function () {
    return 'IndexedValue(index=' + this.s1_1 + ', value=' + this.t1_1 + ')';
  };
  IndexedValue.prototype.hashCode = function () {
    var result = this.s1_1;
    result = imul(result, 31) + (this.t1_1 == null ? 0 : hashCode(this.t1_1)) | 0;
    return result;
  };
  IndexedValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IndexedValue))
      return false;
    var tmp0_other_with_cast = other instanceof IndexedValue ? other : THROW_CCE();
    if (!(this.s1_1 === tmp0_other_with_cast.s1_1))
      return false;
    if (!equals_0(this.t1_1, tmp0_other_with_cast.t1_1))
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
    this.u1_1 = iteratorFactory;
  }
  IndexingIterable.prototype.g = function () {
    return new IndexingIterator(this.u1_1());
  };
  function IndexingIterator(iterator) {
    this.v1_1 = iterator;
    this.w1_1 = 0;
  }
  IndexingIterator.prototype.h = function () {
    return this.v1_1.h();
  };
  IndexingIterator.prototype.i = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.w1_1;
    tmp0_this.w1_1 = tmp1 + 1 | 0;
    return new IndexedValue(checkIndexOverflow(tmp1), this.v1_1.i());
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
            tmp_0 = _this__u8e3s4.j(0);
          } else {
            tmp_0 = _this__u8e3s4.g().i();
          }

          tmp = mapOf(tmp_0);
          break;
        default:
          tmp = toMap_0(_this__u8e3s4, LinkedHashMap_init_$Create$_1(mapCapacity(_this__u8e3s4.f())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyMap(toMap_0(_this__u8e3s4, LinkedHashMap_init_$Create$()));
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this.x1_1 = new Long(-888910638, 1920087921);
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
  EmptyMap.prototype.y1 = function (key) {
    return false;
  };
  EmptyMap.prototype.f1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    return this.y1((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.z1 = function (key) {
    return null;
  };
  EmptyMap.prototype.i1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    return this.z1((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.w = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype.j1 = function () {
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
      var key = tmp1_loop_parameter.c2();
      var value = tmp1_loop_parameter.d2();
      _this__u8e3s4.e2(key, value);
    }
  }
  function putAll_0(_this__u8e3s4, pairs) {
    var tmp0_iterator = pairs.g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      var key = tmp1_loop_parameter.c2();
      var value = tmp1_loop_parameter.d2();
      _this__u8e3s4.e2(key, value);
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
  IntIterator.prototype.i = function () {
    return this.f2();
  };
  function EmptySet() {
    EmptySet_instance = this;
    this.g2_1 = new Long(1993859828, 793161749);
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
  EmptySet.prototype.n1 = function (elements) {
    return elements.k();
  };
  EmptySet.prototype.p = function (elements) {
    return this.n1(elements);
  };
  EmptySet.prototype.g = function () {
    return EmptyIterator_getInstance();
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
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
    this.l_1 = new IntRange(1, 0);
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
  IntRange.prototype.k2 = function () {
    return this.l2_1;
  };
  IntRange.prototype.o2 = function () {
    return this.m2_1;
  };
  IntRange.prototype.k = function () {
    return this.l2_1 > this.m2_1;
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.k() ? other.k() : false) ? true : this.l2_1 === other.l2_1 ? this.m2_1 === other.m2_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.k() ? -1 : imul(31, this.l2_1) + this.m2_1 | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this.l2_1 + '..' + this.m2_1;
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.p2_1 = step;
    this.q2_1 = last;
    this.r2_1 = this.p2_1 > 0 ? first <= last : first >= last;
    this.s2_1 = this.r2_1 ? first : this.q2_1;
  }
  IntProgressionIterator.prototype.h = function () {
    return this.r2_1;
  };
  IntProgressionIterator.prototype.f2 = function () {
    var value = this.s2_1;
    if (value === this.q2_1) {
      if (!this.r2_1)
        throw NoSuchElementException_init_$Create$();
      this.r2_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this.s2_1 = tmp0_this.s2_1 + this.p2_1 | 0;
    }
    return value;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.m = function (rangeStart, rangeEnd, step) {
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
    this.l2_1 = start;
    this.m2_1 = getProgressionLastElement(start, endInclusive, step);
    this.n2_1 = step;
  }
  IntProgression.prototype.g = function () {
    return new IntProgressionIterator(this.l2_1, this.m2_1, this.n2_1);
  };
  IntProgression.prototype.k = function () {
    return this.n2_1 > 0 ? this.l2_1 > this.m2_1 : this.l2_1 < this.m2_1;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.k() ? other.k() : false) ? true : (this.l2_1 === other.l2_1 ? this.m2_1 === other.m2_1 : false) ? this.n2_1 === other.n2_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.k() ? -1 : imul(31, imul(31, this.l2_1) + this.m2_1 | 0) + this.n2_1 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this.n2_1 > 0 ? '' + this.l2_1 + '..' + this.m2_1 + ' step ' + this.n2_1 : '' + this.l2_1 + ' downTo ' + this.m2_1 + ' step ' + (-this.n2_1 | 0);
  };
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.u2(element.t2_1);
        } else {
          _this__u8e3s4.b(toString_1(element));
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
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$1;
      // Inline function 'kotlin.text.split.<anonymous>' call
      tmp$ret$1 = substring(_this__u8e3s4, item);
      tmp0_mapTo.a(tmp$ret$1);
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
  function get_lastIndex_1(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function split_0(_this__u8e3s4, delimiter, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var currentOffset = 0;
    var nextIndex = indexOf_0(_this__u8e3s4, delimiter, currentOffset, ignoreCase);
    if (nextIndex === -1 ? true : limit === 1) {
      return listOf(toString_2(_this__u8e3s4));
    }
    var isLimited = limit > 0;
    var result = ArrayList_init_$Create$_0(isLimited ? coerceAtMost(limit, 10) : 10);
    $l$loop: do {
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = currentOffset;
      var tmp1_substring = nextIndex;
      tmp$ret$0 = toString_2(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
      result.a(tmp$ret$0);
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
    result.a(tmp$ret$1);
    return result;
  }
  function substring(_this__u8e3s4, range) {
    return toString_2(charSequenceSubSequence(_this__u8e3s4, range.k2(), range.o2() + 1 | 0));
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
    if ($this.x2_1 < 0) {
      $this.v2_1 = 0;
      $this.y2_1 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this.a3_1.d3_1 > 0) {
        var tmp0_this = $this;
        tmp0_this.z2_1 = tmp0_this.z2_1 + 1 | 0;
        tmp_0 = tmp0_this.z2_1 >= $this.a3_1.d3_1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        tmp = $this.x2_1 > charSequenceLength($this.a3_1.b3_1);
      }
      if (tmp) {
        $this.y2_1 = numberRangeToNumber($this.w2_1, get_lastIndex_1($this.a3_1.b3_1));
        $this.x2_1 = -1;
      } else {
        var match = $this.a3_1.e3_1($this.a3_1.b3_1, $this.x2_1);
        if (match == null) {
          $this.y2_1 = numberRangeToNumber($this.w2_1, get_lastIndex_1($this.a3_1.b3_1));
          $this.x2_1 = -1;
        } else {
          var tmp1_container = match;
          var index = tmp1_container.c2();
          var length = tmp1_container.d2();
          $this.y2_1 = until($this.w2_1, index);
          $this.w2_1 = index + length | 0;
          $this.x2_1 = $this.w2_1 + (length === 0 ? 1 : 0) | 0;
        }
      }
      $this.v2_1 = 1;
    }
  }
  function DelimitedRangesSequence$iterator$1(this$0) {
    this.a3_1 = this$0;
    this.v2_1 = -1;
    this.w2_1 = coerceIn(this$0.c3_1, 0, charSequenceLength(this$0.b3_1));
    this.x2_1 = this.w2_1;
    this.y2_1 = null;
    this.z2_1 = 0;
  }
  DelimitedRangesSequence$iterator$1.prototype.i = function () {
    if (this.v2_1 === -1) {
      calcNext(this);
    }
    if (this.v2_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.y2_1;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this.y2_1 = null;
    this.v2_1 = -1;
    return result;
  };
  DelimitedRangesSequence$iterator$1.prototype.h = function () {
    if (this.v2_1 === -1) {
      calcNext(this);
    }
    return this.v2_1 === 1;
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this.b3_1 = input;
    this.c3_1 = startIndex;
    this.d3_1 = limit;
    this.e3_1 = getNextMatch;
  }
  DelimitedRangesSequence.prototype.g = function () {
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
      var inductionVariable = indices.l2_1;
      var last_0 = indices.m2_1;
      var step = indices.n2_1;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator = strings.g();
            while (tmp0_iterator.h()) {
              var element = tmp0_iterator.i();
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
      var inductionVariable_0 = indices.l2_1;
      var last_1 = indices.m2_1;
      var step_0 = indices.n2_1;
      if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_0 | 0;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator_0 = strings.g();
            while (tmp0_iterator_0.h()) {
              var element_0 = tmp0_iterator_0.i();
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
      var inductionVariable = indices.l2_1;
      var last_0 = indices.m2_1;
      var step = indices.n2_1;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this__u8e3s4, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      var inductionVariable_0 = indices.l2_1;
      var last_1 = indices.m2_1;
      var step_0 = indices.n2_1;
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
        tmp$ret$0 = to(tmp0_safe_receiver.a2_1, tmp0_safe_receiver.b2_1.length);
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
    this.i3_1 = initializer;
    this.j3_1 = UNINITIALIZED_VALUE_getInstance();
  }
  UnsafeLazyImpl.prototype.y = function () {
    if (this.j3_1 === UNINITIALIZED_VALUE_getInstance()) {
      this.j3_1 = ensureNotNull(this.i3_1)();
      this.i3_1 = null;
    }
    var tmp = this.j3_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  UnsafeLazyImpl.prototype.k3 = function () {
    return !(this.j3_1 === UNINITIALIZED_VALUE_getInstance());
  };
  UnsafeLazyImpl.prototype.toString = function () {
    return this.k3() ? toString_1(this.y()) : 'Lazy value not initialized yet.';
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
  function Pair(first, second) {
    this.a2_1 = first;
    this.b2_1 = second;
  }
  Pair.prototype.toString = function () {
    return '(' + this.a2_1 + ', ' + this.b2_1 + ')';
  };
  Pair.prototype.c2 = function () {
    return this.a2_1;
  };
  Pair.prototype.d2 = function () {
    return this.b2_1;
  };
  Pair.prototype.hashCode = function () {
    var result = this.a2_1 == null ? 0 : hashCode(this.a2_1);
    result = imul(result, 31) + (this.b2_1 == null ? 0 : hashCode(this.b2_1)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this.a2_1, tmp0_other_with_cast.a2_1))
      return false;
    if (!equals_0(this.b2_1, tmp0_other_with_cast.b2_1))
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
  IntCompanionObject.prototype.o3 = function () {
    return this.MIN_VALUE;
  };
  IntCompanionObject.prototype.p3 = function () {
    return this.MAX_VALUE;
  };
  IntCompanionObject.prototype.q3 = function () {
    return this.SIZE_BYTES;
  };
  IntCompanionObject.prototype.r3 = function () {
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
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function mapOf(pair) {
    return hashMapOf([pair]);
  }
  function listOf(element) {
    return arrayListOf([element]);
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
    var iterator = collection.g();
    while (iterator.h()) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = array;
      tmp$ret$1.push(iterator.i());
    }
    return array;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.s3 = function () {
  };
  function IteratorImpl($outer) {
    this.v3_1 = $outer;
    this.t3_1 = 0;
    this.u3_1 = -1;
  }
  IteratorImpl.prototype.h = function () {
    return this.t3_1 < this.v3_1.f();
  };
  IteratorImpl.prototype.i = function () {
    if (!this.h())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this.t3_1;
    tmp0_this.t3_1 = tmp1 + 1 | 0;
    tmp.u3_1 = tmp1;
    return this.v3_1.j(this.u3_1);
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.w3_1 = 0;
  }
  AbstractMutableList.prototype.a = function (element) {
    this.s3();
    this.x3(this.f(), element);
    return true;
  };
  AbstractMutableList.prototype.g = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.o = function (element) {
    return this.y3(element) >= 0;
  };
  AbstractMutableList.prototype.y3 = function (element) {
    var inductionVariable = 0;
    var last = get_lastIndex_0(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.j(index), element)) {
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
    return Companion_getInstance().t(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().s(this);
  };
  function AbstractMutableMap$keys$1$iterator$1($entryIterator) {
    this.z3_1 = $entryIterator;
  }
  AbstractMutableMap$keys$1$iterator$1.prototype.h = function () {
    return this.z3_1.h();
  };
  AbstractMutableMap$keys$1$iterator$1.prototype.i = function () {
    return this.z3_1.i().v();
  };
  function SimpleEntry(key, value) {
    this.a4_1 = key;
    this.b4_1 = value;
  }
  SimpleEntry.prototype.v = function () {
    return this.a4_1;
  };
  SimpleEntry.prototype.y = function () {
    return this.b4_1;
  };
  SimpleEntry.prototype.c4 = function (newValue) {
    var oldValue = this.b4_1;
    this.b4_1 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().x(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().z(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().a1(this, other);
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.o = function (element) {
    return this.d4(element);
  };
  function AbstractMutableMap$keys$1(this$0) {
    this.e4_1 = this$0;
    AbstractMutableSet.call(this);
  }
  AbstractMutableMap$keys$1.prototype.f4 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  AbstractMutableMap$keys$1.prototype.a = function (element) {
    return this.f4((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.c1 = function (element) {
    return this.e4_1.f1(element);
  };
  AbstractMutableMap$keys$1.prototype.o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.c1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.g = function () {
    var entryIterator = this.e4_1.w().g();
    return new AbstractMutableMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMutableMap$keys$1.prototype.f = function () {
    return this.e4_1.f();
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.i4_1 = null;
    this.j4_1 = null;
  }
  AbstractMutableMap.prototype.j1 = function () {
    if (this.i4_1 == null) {
      var tmp = this;
      tmp.i4_1 = new AbstractMutableMap$keys$1(this);
    }
    return ensureNotNull(this.i4_1);
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_getInstance_1().l1(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().k1(this);
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
    Companion_getInstance().q(index, $this.f());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
    Companion_getInstance().r(index, $this.f());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this.d_1 = array;
    this.e_1 = false;
  }
  ArrayList.prototype.f = function () {
    return this.d_1.length;
  };
  ArrayList.prototype.j = function (index) {
    var tmp = this.d_1[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.a = function (element) {
    this.s3();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.d_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.w3_1;
    tmp0_this.w3_1 = tmp1 + 1 | 0;
    return true;
  };
  ArrayList.prototype.x3 = function (index, element) {
    this.s3();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.d_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.w3_1;
    tmp0_this.w3_1 = tmp1 + 1 | 0;
  };
  ArrayList.prototype.y3 = function (element) {
    return indexOf(this.d_1, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this.d_1);
  };
  ArrayList.prototype.k4 = function () {
    return [].slice.call(this.d_1);
  };
  ArrayList.prototype.toArray = function () {
    return this.k4();
  };
  ArrayList.prototype.s3 = function () {
    if (this.e_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.l4 = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.m4 = function (value) {
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
    this.n4_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.o4 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.a = function (element) {
    return this.o4((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.d4 = function (element) {
    return this.n4_1.h1(element);
  };
  EntrySet.prototype.g = function () {
    return this.n4_1.t4_1.g();
  };
  EntrySet.prototype.f = function () {
    return this.n4_1.f();
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.t4_1 = internalMap;
    $this.u4_1 = internalMap.w4();
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
  HashMap.prototype.f1 = function (key) {
    return this.t4_1.c1(key);
  };
  HashMap.prototype.w = function () {
    if (this.v4_1 == null) {
      this.v4_1 = this.x4();
    }
    return ensureNotNull(this.v4_1);
  };
  HashMap.prototype.x4 = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.i1 = function (key) {
    return this.t4_1.i1(key);
  };
  HashMap.prototype.e2 = function (key, value) {
    return this.t4_1.e2(key, value);
  };
  HashMap.prototype.f = function () {
    return this.t4_1.f();
  };
  function HashMap() {
    this.v4_1 = null;
  }
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.y4_1 = HashMap_init_$Create$();
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.y4_1 = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_1(initialCapacity, $this) {
    HashSet_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_0(initialCapacity) {
    return HashSet_init_$Init$_1(initialCapacity, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_2(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.y4_1 = map;
    return $this;
  }
  HashSet.prototype.a = function (element) {
    var old = this.y4_1.e2(element, this);
    return old == null;
  };
  HashSet.prototype.o = function (element) {
    return this.y4_1.f1(element);
  };
  HashSet.prototype.k = function () {
    return this.y4_1.k();
  };
  HashSet.prototype.g = function () {
    return this.y4_1.j1().g();
  };
  HashSet.prototype.f = function () {
    return this.y4_1.f();
  };
  function HashSet() {
  }
  function computeNext($this) {
    if ($this.c5_1 != null ? $this.d5_1 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = $this.c5_1;
      tmp$ret$0 = tmp0_unsafeCast;
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this.e5_1 = tmp0_this.e5_1 + 1 | 0;
      if (tmp0_this.e5_1 < chainSize)
        return 0;
    }
    var tmp1_this = $this;
    tmp1_this.b5_1 = tmp1_this.b5_1 + 1 | 0;
    if (tmp1_this.b5_1 < $this.a5_1.length) {
      $this.c5_1 = $this.g5_1.i5_1[$this.a5_1[$this.b5_1]];
      var tmp = $this;
      var tmp_0 = $this.c5_1;
      tmp.d5_1 = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this.e5_1 = 0;
      return 0;
    } else {
      $this.c5_1 = null;
      return 1;
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this.h5_1.m4(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this.h5_1.l4(entry.v(), key)) {
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
        tmp$ret$0 = $this.h5_1.l4(element.v(), key);
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
    var chainOrEntry = $this.i5_1[hashCode];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function InternalHashCodeMap$iterator$1(this$0) {
    this.g5_1 = this$0;
    this.z4_1 = -1;
    this.a5_1 = Object.keys(this$0.i5_1);
    this.b5_1 = -1;
    this.c5_1 = null;
    this.d5_1 = false;
    this.e5_1 = -1;
    this.f5_1 = null;
  }
  InternalHashCodeMap$iterator$1.prototype.h = function () {
    if (this.z4_1 === -1)
      this.z4_1 = computeNext(this);
    return this.z4_1 === 0;
  };
  InternalHashCodeMap$iterator$1.prototype.i = function () {
    if (!this.h())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this.d5_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.c5_1;
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0[this.e5_1];
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = this.c5_1;
      tmp$ret$1 = tmp1_unsafeCast;
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this.f5_1 = lastEntry;
    this.z4_1 = -1;
    return lastEntry;
  };
  function InternalHashCodeMap(equality) {
    this.h5_1 = equality;
    this.i5_1 = this.k5();
    this.j5_1 = 0;
  }
  InternalHashCodeMap.prototype.w4 = function () {
    return this.h5_1;
  };
  InternalHashCodeMap.prototype.f = function () {
    return this.j5_1;
  };
  InternalHashCodeMap.prototype.e2 = function (key, value) {
    var hashCode = this.h5_1.m4(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode);
    if (chainOrEntry == null) {
      this.i5_1[hashCode] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this.h5_1.l4(entry.v(), key)) {
          return entry.c4(value);
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
          this.i5_1[hashCode] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this.j5_1;
          tmp0_this.j5_1 = tmp1 + 1 | 0;
          return null;
        }
      } else {
        var chain = chainOrEntry;
        var entry_0 = findEntryInChain(chain, this, key);
        if (!(entry_0 == null)) {
          return entry_0.c4(value);
        }
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = chain;
        tmp$ret$3.push(new SimpleEntry(key, value));
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.j5_1;
    tmp2_this.j5_1 = tmp3 + 1 | 0;
    return null;
  };
  InternalHashCodeMap.prototype.c1 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.i1 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y();
  };
  InternalHashCodeMap.prototype.g = function () {
    return new InternalHashCodeMap$iterator$1(this);
  };
  function InternalMap() {
  }
  function EntryIterator($outer) {
    this.n5_1 = $outer;
    this.l5_1 = null;
    this.m5_1 = null;
    this.m5_1 = this.n5_1.y5_1.v5_1;
  }
  EntryIterator.prototype.h = function () {
    return !(this.m5_1 === null);
  };
  EntryIterator.prototype.i = function () {
    if (!this.h())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this.m5_1);
    this.l5_1 = current;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = current.b6_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.EntryIterator.next.<anonymous>' call
    tmp$ret$0 = !(tmp0_takeIf === this.n5_1.y5_1.v5_1);
    if (tmp$ret$0) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$1 = tmp_0;
    tmp.m5_1 = tmp$ret$1;
    return current;
  };
  function ChainEntry($outer, key, value) {
    this.d6_1 = $outer;
    SimpleEntry.call(this, key, value);
    this.b6_1 = null;
    this.c6_1 = null;
  }
  ChainEntry.prototype.c4 = function (newValue) {
    this.d6_1.s3();
    return SimpleEntry.prototype.c4.call(this, newValue);
  };
  function EntrySet_0($outer) {
    this.y5_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.o4 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.a = function (element) {
    return this.o4((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.d4 = function (element) {
    return this.y5_1.h1(element);
  };
  EntrySet_0.prototype.g = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype.f = function () {
    return this.y5_1.f();
  };
  function addToEnd(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = _this__u8e3s4.b6_1 == null ? _this__u8e3s4.c6_1 == null : false;
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
    var _head = $this.v5_1;
    if (_head == null) {
      $this.v5_1 = _this__u8e3s4;
      _this__u8e3s4.b6_1 = _this__u8e3s4;
      _this__u8e3s4.c6_1 = _this__u8e3s4;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.checkNotNull' call
      var tmp1_checkNotNull = _head.c6_1;
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
      _this__u8e3s4.c6_1 = _tail;
      _this__u8e3s4.b6_1 = _head;
      _head.c6_1 = _this__u8e3s4;
      _tail.b6_1 = _this__u8e3s4;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this.w5_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this.w5_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.f1 = function (key) {
    return this.w5_1.f1(key);
  };
  LinkedHashMap.prototype.x4 = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.i1 = function (key) {
    var tmp0_safe_receiver = this.w5_1.i1(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y();
  };
  LinkedHashMap.prototype.e2 = function (key, value) {
    this.s3();
    var old = this.w5_1.i1(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this.w5_1.e2(key, newEntry);
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.c4(value);
    }
  };
  LinkedHashMap.prototype.f = function () {
    return this.w5_1.f();
  };
  LinkedHashMap.prototype.s3 = function () {
    if (this.x5_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this.v5_1 = null;
    this.x5_1 = false;
  }
  function LinkedHashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_2(LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_0(initialCapacity, $this) {
    LinkedHashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$(initialCapacity) {
    return LinkedHashSet_init_$Init$_0(initialCapacity, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet() {
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function KClass() {
  }
  function KClassImpl(jClass) {
    this.f6_1 = jClass;
  }
  KClassImpl.prototype.g6 = function () {
    return this.f6_1;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this.g6(), other.g6());
    } else {
      tmp = false;
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.e6();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return 'class ' + this.e6();
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.i6_1 = givenSimpleName;
    this.j6_1 = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return KClassImpl.prototype.equals.call(this, other) ? this.i6_1 === other.i6_1 : false;
  };
  PrimitiveKClassImpl.prototype.e6 = function () {
    return this.i6_1;
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.l6_1 = 'Nothing';
  }
  NothingKClassImpl.prototype.e6 = function () {
    return this.l6_1;
  };
  NothingKClassImpl.prototype.g6 = function () {
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
  ErrorKClass.prototype.e6 = function () {
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
    tmp.n6_1 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype.e6 = function () {
    return this.n6_1;
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
  PrimitiveClasses.prototype.o6 = function () {
    return this.anyClass;
  };
  PrimitiveClasses.prototype.p6 = function () {
    return this.numberClass;
  };
  PrimitiveClasses.prototype.q6 = function () {
    return this.nothingClass;
  };
  PrimitiveClasses.prototype.r6 = function () {
    return this.booleanClass;
  };
  PrimitiveClasses.prototype.s6 = function () {
    return this.byteClass;
  };
  PrimitiveClasses.prototype.t6 = function () {
    return this.shortClass;
  };
  PrimitiveClasses.prototype.u6 = function () {
    return this.intClass;
  };
  PrimitiveClasses.prototype.v6 = function () {
    return this.floatClass;
  };
  PrimitiveClasses.prototype.w6 = function () {
    return this.doubleClass;
  };
  PrimitiveClasses.prototype.x6 = function () {
    return this.arrayClass;
  };
  PrimitiveClasses.prototype.y6 = function () {
    return this.stringClass;
  };
  PrimitiveClasses.prototype.z6 = function () {
    return this.throwableClass;
  };
  PrimitiveClasses.prototype.a7 = function () {
    return this.booleanArrayClass;
  };
  PrimitiveClasses.prototype.b7 = function () {
    return this.charArrayClass;
  };
  PrimitiveClasses.prototype.c7 = function () {
    return this.byteArrayClass;
  };
  PrimitiveClasses.prototype.d7 = function () {
    return this.shortArrayClass;
  };
  PrimitiveClasses.prototype.e7 = function () {
    return this.intArrayClass;
  };
  PrimitiveClasses.prototype.f7 = function () {
    return this.longArrayClass;
  };
  PrimitiveClasses.prototype.g7 = function () {
    return this.floatArrayClass;
  };
  PrimitiveClasses.prototype.h7 = function () {
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
    this.i7_1 = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype.l3 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.i7_1;
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.m3 = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.getOrElse' call
    var tmp0_getOrElse = this.i7_1;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex_1(tmp0_getOrElse) : false) {
      tmp = charSequenceGet(tmp0_getOrElse, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this.l3() + '}');
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  StringBuilder.prototype.n3 = function (startIndex, endIndex) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.i7_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
    return tmp$ret$1;
  };
  StringBuilder.prototype.u2 = function (value) {
    var tmp0_this = this;
    tmp0_this.i7_1 = tmp0_this.i7_1 + new Char(value);
    return this;
  };
  StringBuilder.prototype.b = function (value) {
    var tmp0_this = this;
    tmp0_this.i7_1 = tmp0_this.i7_1 + toString_1(value);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this.i7_1;
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
  function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
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
        var inductionVariable = tmp0_all.l2_1;
        var last = tmp0_all.m2_1;
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
    var tmp = $this.t2_1;
    return Char__compareTo_impl_ypi4mb(tmp, other instanceof Char ? other.t2_1 : THROW_CCE());
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function Char__equals_impl_x6719k($this, other) {
    if (!(other instanceof Char))
      return false;
    return _get_value__a43j40($this) === _get_value__a43j40(other.t2_1);
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
  function Companion_4() {
    Companion_instance_4 = this;
    this.j7_1 = _Char___init__impl__6a9atx(0);
    this.k7_1 = _Char___init__impl__6a9atx(65535);
    this.l7_1 = _Char___init__impl__6a9atx(55296);
    this.m7_1 = _Char___init__impl__6a9atx(56319);
    this.n7_1 = _Char___init__impl__6a9atx(56320);
    this.o7_1 = _Char___init__impl__6a9atx(57343);
    this.p7_1 = _Char___init__impl__6a9atx(55296);
    this.q7_1 = _Char___init__impl__6a9atx(57343);
    this.r7_1 = 2;
    this.s7_1 = 16;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Char(value) {
    Companion_getInstance_4();
    this.t2_1 = value;
  }
  Char.prototype.t7 = function (other) {
    return Char__compareTo_impl_ypi4mb(this.t2_1, other);
  };
  Char.prototype.u7 = function (other) {
    return Char__compareTo_impl_ypi4mb_0(this, other);
  };
  Char.prototype.equals = function (other) {
    return Char__equals_impl_x6719k(this.t2_1, other);
  };
  Char.prototype.hashCode = function () {
    return Char__hashCode_impl_otmys(this.t2_1);
  };
  Char.prototype.toString = function () {
    return toString_0(this.t2_1);
  };
  function List() {
  }
  function Set() {
  }
  function Entry() {
  }
  function Map() {
  }
  function Collection() {
  }
  function MutableEntry() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_5();
    this.f3_1 = name;
    this.g3_1 = ordinal;
  }
  Enum.prototype.v7 = function () {
    return this.f3_1;
  };
  Enum.prototype.w7 = function () {
    return this.g3_1;
  };
  Enum.prototype.h3 = function (other) {
    return compareTo(this.g3_1, other.g3_1);
  };
  Enum.prototype.u7 = function (other) {
    return this.h3(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this.f3_1;
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
        currentSize = imask.x7_1.length;
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
        currentSize = Math.max(currentSize, iidImask.x7_1.length);
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
    result.x7_1 = resultIntArray;
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
    tmp.x7_1 = tmp$ret$2;
  }
  BitMask.prototype.y7 = function (possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > this.x7_1.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((this.x7_1[numberIndex] & numberWithSettledBit) === 0);
  };
  function implement$lambda($tmp) {
    return function (acc, it) {
      return $tmp >= it.x7_1.length ? acc : acc | it.x7_1[$tmp];
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
    this.a8_1 = $array;
    this.z7_1 = 0;
  }
  arrayIterator$1.prototype.h = function () {
    return !(this.z7_1 === this.a8_1.length);
  };
  arrayIterator$1.prototype.i = function () {
    var tmp;
    if (!(this.z7_1 === this.a8_1.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.z7_1;
      tmp0_this.z7_1 = tmp1 + 1 | 0;
      tmp = this.a8_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this.z7_1);
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
      Companion_getInstance_4();
      var tmp0__get_code__88qj9g = _Char___init__impl__6a9atx(0);
      tmp$ret$2 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      if (tmp1_Char < tmp$ret$2) {
        tmp_0 = true;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        Companion_getInstance_4();
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
      tmp = a.m3(index);
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
      tmp = a.l3();
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
      tmp = a.n3(startIndex, endIndex);
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
            tmp_0 = doubleCompareTo(a, b.d8());
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
    return a.u7(b);
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
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('lateinit property ' + name + ' has not been initialized');
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function lazy(mode, initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function lazy_0(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.e8_1 = new Long(0, -2147483648);
    this.f8_1 = new Long(-1, 2147483647);
    this.g8_1 = 8;
    this.h8_1 = 64;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Long(low, high) {
    Companion_getInstance_6();
    Number_0.call(this);
    this.b8_1 = low;
    this.c8_1 = high;
  }
  Long.prototype.i8 = function (other) {
    return compare(this, other);
  };
  Long.prototype.u7 = function (other) {
    return this.i8(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.j8 = function (other) {
    return add(this, other);
  };
  Long.prototype.k8 = function (other) {
    return divide(this, other);
  };
  Long.prototype.l8 = function () {
    return this.m8().j8(new Long(1, 0));
  };
  Long.prototype.m8 = function () {
    return new Long(~this.b8_1, ~this.c8_1);
  };
  Long.prototype.n8 = function () {
    return this.b8_1;
  };
  Long.prototype.d8 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.d8();
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
    var a48 = _this__u8e3s4.c8_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.c8_1 & 65535;
    var a16 = _this__u8e3s4.b8_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.b8_1 & 65535;
    var b48 = other.c8_1 >>> 16 | 0;
    var b32 = other.c8_1 & 65535;
    var b16 = other.b8_1 >>> 16 | 0;
    var b00 = other.b8_1 & 65535;
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
    return add(_this__u8e3s4, other.l8());
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
    var a48 = _this__u8e3s4.c8_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.c8_1 & 65535;
    var a16 = _this__u8e3s4.b8_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.b8_1 & 65535;
    var b48 = other.c8_1 >>> 16 | 0;
    var b32 = other.c8_1 & 65535;
    var b16 = other.b8_1 >>> 16 | 0;
    var b00 = other.b8_1 & 65535;
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
        var approx = shiftLeft(halfThis.k8(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.k8(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).k8(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).k8(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.k8(negate(other)));
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
        return new Long(_this__u8e3s4.b8_1 << numBits_0, _this__u8e3s4.c8_1 << numBits_0 | (_this__u8e3s4.b8_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.b8_1 << (numBits_0 - 32 | 0));
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
        return new Long(_this__u8e3s4.b8_1 >>> numBits_0 | 0 | _this__u8e3s4.c8_1 << (32 - numBits_0 | 0), _this__u8e3s4.c8_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.c8_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.c8_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.c8_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function equalsLong(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.c8_1 === other.c8_1 ? _this__u8e3s4.b8_1 === other.b8_1 : false;
  }
  function hashCode_0(l) {
    init_properties_longjs_kt_ttk8rv();
    return l.b8_1 ^ l.c8_1;
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
        var div = _this__u8e3s4.k8(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).n8();
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
      var remDiv = rem_0.k8(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).n8();
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
    return _this__u8e3s4.c8_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.c8_1 === 0 ? _this__u8e3s4.b8_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return (_this__u8e3s4.b8_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.l8();
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
    return _this__u8e3s4.b8_1 >= 0 ? _this__u8e3s4.b8_1 : 4.294967296E9 + _this__u8e3s4.b8_1;
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
      tmp = a.n8();
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
  var iid;
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
    return mask.y7(iface);
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
    return createMetadata('interface', name, associatedObjectKey, associatedObjects, suspendArity, generateInterfaceId());
  }
  function generateInterfaceId() {
    if (iid == null) {
      iid = 1;
    } else {
      iid = iid + 1 | 0;
    }
    return iid;
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
  function RuntimeException() {
    captureStack(this, RuntimeException);
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
  //region block: post-declaration
  InternalHashCodeMap.prototype.k5 = createJsMap;
  //endregion
  //region block: init
  iid = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getKClassFromExpression;
  _.$_$.b = getKClass;
  _.$_$.c = LazyThreadSafetyMode_PUBLICATION_getInstance;
  _.$_$.d = joinToString$default_0;
  _.$_$.e = split$default;
  _.$_$.f = ArrayList_init_$Create$_0;
  _.$_$.g = ArrayList_init_$Create$;
  _.$_$.h = HashMap_init_$Create$;
  _.$_$.i = HashSet_init_$Create$_0;
  _.$_$.j = HashSet_init_$Create$;
  _.$_$.k = LinkedHashMap_init_$Create$_1;
  _.$_$.l = LinkedHashMap_init_$Create$;
  _.$_$.m = IllegalArgumentException_init_$Init$;
  _.$_$.n = IllegalArgumentException_init_$Create$;
  _.$_$.o = IllegalArgumentException_init_$Init$_0;
  _.$_$.p = IllegalStateException_init_$Create$_0;
  _.$_$.q = IndexOutOfBoundsException_init_$Create$;
  _.$_$.r = RuntimeException_init_$Init$_1;
  _.$_$.s = StringCompanionObject_getInstance;
  _.$_$.t = Unit_getInstance;
  _.$_$.u = Entry;
  _.$_$.v = asList;
  _.$_$.w = collectionSizeOrDefault;
  _.$_$.x = contentEquals;
  _.$_$.y = contentEquals_0;
  _.$_$.z = contentHashCode_0;
  _.$_$.a1 = contentHashCode;
  _.$_$.b1 = copyToArray;
  _.$_$.c1 = distinct;
  _.$_$.d1 = emptyList;
  _.$_$.e1 = emptyMap;
  _.$_$.f1 = first;
  _.$_$.g1 = get_indices;
  _.$_$.h1 = mapCapacity;
  _.$_$.i1 = toBooleanArray;
  _.$_$.j1 = toHashSet;
  _.$_$.k1 = toList;
  _.$_$.l1 = toMap;
  _.$_$.m1 = withIndex;
  _.$_$.n1 = zip;
  _.$_$.o1 = arrayIterator;
  _.$_$.p1 = booleanArray;
  _.$_$.q1 = captureStack;
  _.$_$.r1 = classMeta;
  _.$_$.s1 = equals_0;
  _.$_$.t1 = fillArrayVal;
  _.$_$.u1 = getPropertyCallableRef;
  _.$_$.v1 = getStringHashCode;
  _.$_$.w1 = hashCode;
  _.$_$.x1 = interfaceMeta;
  _.$_$.y1 = isInterface;
  _.$_$.z1 = numberToInt;
  _.$_$.a2 = objectMeta;
  _.$_$.b2 = setMetadataFor;
  _.$_$.c2 = toString_2;
  _.$_$.d2 = until;
  _.$_$.e2 = KProperty1;
  _.$_$.f2 = isBlank;
  _.$_$.g2 = Enum;
  _.$_$.h2 = IllegalArgumentException;
  _.$_$.i2 = Long;
  _.$_$.j2 = RuntimeException;
  _.$_$.k2 = THROW_CCE;
  _.$_$.l2 = THROW_ISE;
  _.$_$.m2 = ensureNotNull;
  _.$_$.n2 = lazy;
  _.$_$.o2 = lazy_0;
  _.$_$.p2 = throwUninitializedPropertyAccessException;
  _.$_$.q2 = toString_1;
  _.$_$.r2 = to;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib-js-ir.js.map

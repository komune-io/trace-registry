(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-dsl-function'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'f2-f2-dsl-function'.");
    }
    root['f2-f2-dsl-function'] = factory(typeof this['f2-f2-dsl-function'] === 'undefined' ? {} : this['f2-f2-dsl-function'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var classMeta = kotlin_kotlin.$_$.k9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(F2Function, 'F2Function', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(F2Supplier, 'F2Supplier', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(F2Consumer, 'F2Consumer', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(f2SupplierSingle$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function F2Function() {
  }
  function F2Supplier() {
  }
  function F2Consumer() {
  }
  function f2SupplierSingle(fnc) {
    return new f2SupplierSingle$1(fnc);
  }
  function f2SupplierSingle$1($fnc) {
    this.l2l_1 = $fnc;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$fnc = $f2$dsl.fnc || ($f2$dsl.fnc = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = F2Consumer;
  _.$_$.b = F2Function;
  _.$_$.c = F2Supplier;
  _.$_$.d = f2SupplierSingle;
  //endregion
  return _;
}));

//# sourceMappingURL=f2-f2-dsl-function.js.map

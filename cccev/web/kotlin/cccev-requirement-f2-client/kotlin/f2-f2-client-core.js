(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'f2-f2-client-core'.");
    }
    root['f2-f2-client-core'] = factory(typeof this['f2-f2-client-core'] === 'undefined' ? {} : this['f2-f2-client-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var Enum = kotlin_kotlin.$_$.sc;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  //endregion
  //region block: pre-declaration
  setMetadataFor(F2ClientType, 'F2ClientType', classMeta, Enum, undefined, undefined, undefined, []);
  //endregion
  var F2ClientType_HTTP_instance;
  var F2ClientType_RSOCKET_instance;
  var F2ClientType_entriesInitialized;
  function F2ClientType_initEntries() {
    if (F2ClientType_entriesInitialized)
      return Unit_getInstance();
    F2ClientType_entriesInitialized = true;
    F2ClientType_HTTP_instance = new F2ClientType('HTTP', 0);
    F2ClientType_RSOCKET_instance = new F2ClientType('RSOCKET', 1);
  }
  function F2ClientType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function F2ClientType_HTTP_getInstance() {
    F2ClientType_initEntries();
    return F2ClientType_HTTP_instance;
  }
  function F2ClientType_RSOCKET_getInstance() {
    F2ClientType_initEntries();
    return F2ClientType_RSOCKET_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$client = $f2.client || ($f2.client = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = F2ClientType_HTTP_getInstance;
  _.$_$.b = F2ClientType_RSOCKET_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=f2-f2-client-core.js.map

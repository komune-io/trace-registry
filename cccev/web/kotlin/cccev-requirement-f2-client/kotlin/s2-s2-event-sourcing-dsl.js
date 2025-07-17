(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './f2-f2-dsl-function.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./f2-f2-dsl-function.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['f2-f2-dsl-function'] === 'undefined') {
      throw new Error("Error loading module 's2-s2-event-sourcing-dsl'. Its dependency 'f2-f2-dsl-function' was not found. Please, check whether 'f2-f2-dsl-function' is loaded prior to 's2-s2-event-sourcing-dsl'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 's2-s2-event-sourcing-dsl'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 's2-s2-event-sourcing-dsl'.");
    }
    root['s2-s2-event-sourcing-dsl'] = factory(typeof this['s2-s2-event-sourcing-dsl'] === 'undefined' ? {} : this['s2-s2-event-sourcing-dsl'], this['f2-f2-dsl-function'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_city_smartb_f2_f2_dsl_function, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var F2Function = kotlin_city_smartb_f2_f2_dsl_function.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Decide, 'Decide', interfaceMeta, undefined, [F2Function], undefined, undefined, []);
  //endregion
  function Decide() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$sourcing = $s2.sourcing || ($s2.sourcing = {});
    var $s2$sourcing$dsl = $s2$sourcing.dsl || ($s2$sourcing.dsl = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=s2-s2-event-sourcing-dsl.js.map

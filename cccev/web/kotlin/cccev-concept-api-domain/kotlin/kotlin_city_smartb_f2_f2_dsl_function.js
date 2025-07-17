(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_city_smartb_f2_f2_dsl_function = factory(typeof kotlin_city_smartb_f2_f2_dsl_function === 'undefined' ? {} : kotlin_city_smartb_f2_f2_dsl_function);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function F2Function() {
  }
  F2Function.$metadata$ = {
    simpleName: 'F2Function',
    kind: 'interface',
    interfaces: []
  };
  function F2Supplier() {
  }
  F2Supplier.$metadata$ = {
    simpleName: 'F2Supplier',
    kind: 'interface',
    interfaces: []
  };
  function F2Consumer() {
  }
  F2Consumer.$metadata$ = {
    simpleName: 'F2Consumer',
    kind: 'interface',
    interfaces: []
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$fnc = $f2$dsl.fnc || ($f2$dsl.fnc = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_f2_f2_dsl_function.js.map
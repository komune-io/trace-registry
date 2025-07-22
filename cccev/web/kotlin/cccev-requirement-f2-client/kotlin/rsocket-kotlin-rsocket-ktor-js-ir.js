(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['rsocket-kotlin-rsocket-ktor-js-ir'] = factory(typeof this['rsocket-kotlin-rsocket-ktor-js-ir'] === 'undefined' ? {} : this['rsocket-kotlin-rsocket-ktor-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var dummy;
  //region block: init
  dummy = 0;
  //endregion
  return _;
}));

//# sourceMappingURL=rsocket-kotlin-rsocket-ktor-js-ir.js.map

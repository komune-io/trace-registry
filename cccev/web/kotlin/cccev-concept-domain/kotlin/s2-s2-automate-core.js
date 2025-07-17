(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['s2-s2-automate-core'] = factory(typeof this['s2-s2-automate-core'] === 'undefined' ? {} : this['s2-s2-automate-core']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=s2-s2-automate-core.js.map

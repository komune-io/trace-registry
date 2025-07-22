(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './cccev-dsl-model.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./cccev-dsl-model.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-f2-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-evidence-f2-domain'.");
    }
    if (typeof this['cccev-dsl-model'] === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-f2-domain'. Its dependency 'cccev-dsl-model' was not found. Please, check whether 'cccev-dsl-model' is loaded prior to 'cccev-evidence-f2-domain'.");
    }
    root['cccev-evidence-f2-domain'] = factory(typeof this['cccev-evidence-f2-domain'] === 'undefined' ? {} : this['cccev-evidence-f2-domain'], this['kotlin-kotlin-stdlib-js-ir'], this['cccev-dsl-model']);
  }
}(this, function (_, kotlin_kotlin, kotlin_city_smartb_cccev_dsl_model) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var setMetadataFor = kotlin_kotlin.$_$.b2;
  var EvidenceType = kotlin_city_smartb_cccev_dsl_model.$_$.b;
  var EvidenceTypeList = kotlin_city_smartb_cccev_dsl_model.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(GetEvidenceTypeListsQueryDTO, 'GetEvidenceTypeListsQueryDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GetEvidenceTypeListsQueryResultDTO, 'GetEvidenceTypeListsQueryResultDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EvidenceTypeDTO, 'EvidenceTypeDTO', interfaceMeta, undefined, [EvidenceType], undefined, undefined, []);
  setMetadataFor(EvidenceTypeListChoicesDTO, 'EvidenceTypeListChoicesDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EvidenceTypeListDTO, 'EvidenceTypeListDTO', interfaceMeta, undefined, [EvidenceTypeList], undefined, undefined, []);
  //endregion
  function GetEvidenceTypeListsQueryDTO() {
  }
  function GetEvidenceTypeListsQueryResultDTO() {
  }
  function EvidenceTypeDTO() {
  }
  function EvidenceTypeListChoicesDTO() {
  }
  function EvidenceTypeListDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$domain = $cccev$f2$evidence.domain || ($cccev$f2$evidence.domain = {});
    var $cccev$f2$evidence$domain$features = $cccev$f2$evidence$domain.features || ($cccev$f2$evidence$domain.features = {});
    var $cccev$f2$evidence$domain$features$query = $cccev$f2$evidence$domain$features.query || ($cccev$f2$evidence$domain$features.query = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$domain = $cccev$f2$evidence.domain || ($cccev$f2$evidence.domain = {});
    var $cccev$f2$evidence$domain$model = $cccev$f2$evidence$domain.model || ($cccev$f2$evidence$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$domain = $cccev$f2$evidence.domain || ($cccev$f2$evidence.domain = {});
    var $cccev$f2$evidence$domain$model = $cccev$f2$evidence$domain.model || ($cccev$f2$evidence$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$domain = $cccev$f2$evidence.domain || ($cccev$f2$evidence.domain = {});
    var $cccev$f2$evidence$domain$model = $cccev$f2$evidence$domain.model || ($cccev$f2$evidence$domain.model = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-evidence-f2-domain.js.map

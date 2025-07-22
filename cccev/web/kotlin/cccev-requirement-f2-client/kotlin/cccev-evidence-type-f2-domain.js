(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './cccev-evidence-type-domain.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./cccev-evidence-type-domain.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['cccev-evidence-type-domain'] === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-type-f2-domain'. Its dependency 'cccev-evidence-type-domain' was not found. Please, check whether 'cccev-evidence-type-domain' is loaded prior to 'cccev-evidence-type-f2-domain'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-type-f2-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-evidence-type-f2-domain'.");
    }
    root['cccev-evidence-type-f2-domain'] = factory(typeof this['cccev-evidence-type-f2-domain'] === 'undefined' ? {} : this['cccev-evidence-type-f2-domain'], this['cccev-evidence-type-domain'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_city_smartb_cccev_evidence_type_domain, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var EvidenceTypeListCreateCommandDTO = kotlin_city_smartb_cccev_evidence_type_domain.$_$.a;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var EvidenceTypeListCreatedEventDTO = kotlin_city_smartb_cccev_evidence_type_domain.$_$.b;
  var EvidenceTypeListUpdateCommandDTO = kotlin_city_smartb_cccev_evidence_type_domain.$_$.c;
  var EvidenceTypeListUpdatedEventDTO = kotlin_city_smartb_cccev_evidence_type_domain.$_$.d;
  var EvidenceTypeCreateCommandDTO = kotlin_city_smartb_cccev_evidence_type_domain.$_$.e;
  var EvidenceTypeCreatedEventDTO = kotlin_city_smartb_cccev_evidence_type_domain.$_$.f;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EvidenceTypeListCreateCommandDTO_0, 'EvidenceTypeListCreateCommandDTO', interfaceMeta, undefined, [EvidenceTypeListCreateCommandDTO], undefined, undefined, []);
  setMetadataFor(EvidenceTypeListCreatedEventDTO_0, 'EvidenceTypeListCreatedEventDTO', interfaceMeta, undefined, [EvidenceTypeListCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(EvidenceTypeListUpdateCommandDTO_0, 'EvidenceTypeListUpdateCommandDTO', interfaceMeta, undefined, [EvidenceTypeListUpdateCommandDTO], undefined, undefined, []);
  setMetadataFor(EvidenceTypeListUpdatedEventDTO_0, 'EvidenceTypeListUpdatedEventDTO', interfaceMeta, undefined, [EvidenceTypeListUpdatedEventDTO], undefined, undefined, []);
  setMetadataFor(EvidenceTypeCreateCommandDTO_0, 'EvidenceTypeCreateCommandDTO', interfaceMeta, undefined, [EvidenceTypeCreateCommandDTO], undefined, undefined, []);
  setMetadataFor(EvidenceTypeCreatedEventDTO_0, 'EvidenceTypeCreatedEventDTO', interfaceMeta, undefined, [EvidenceTypeCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(EvidenceTypeDTO, 'EvidenceTypeDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EvidenceTypeListDTO, 'EvidenceTypeListDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function EvidenceTypeListCreateCommandDTO_0() {
  }
  function EvidenceTypeListCreatedEventDTO_0() {
  }
  function EvidenceTypeListUpdateCommandDTO_0() {
  }
  function EvidenceTypeListUpdatedEventDTO_0() {
  }
  function EvidenceTypeCreateCommandDTO_0() {
  }
  function EvidenceTypeCreatedEventDTO_0() {
  }
  function EvidenceTypeDTO() {
  }
  function EvidenceTypeListDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$type = $cccev$f2$evidence.type || ($cccev$f2$evidence.type = {});
    var $cccev$f2$evidence$type$domain = $cccev$f2$evidence$type.domain || ($cccev$f2$evidence$type.domain = {});
    var $cccev$f2$evidence$type$domain$command = $cccev$f2$evidence$type$domain.command || ($cccev$f2$evidence$type$domain.command = {});
    var $cccev$f2$evidence$type$domain$command$list = $cccev$f2$evidence$type$domain$command.list || ($cccev$f2$evidence$type$domain$command.list = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$type = $cccev$f2$evidence.type || ($cccev$f2$evidence.type = {});
    var $cccev$f2$evidence$type$domain = $cccev$f2$evidence$type.domain || ($cccev$f2$evidence$type.domain = {});
    var $cccev$f2$evidence$type$domain$command = $cccev$f2$evidence$type$domain.command || ($cccev$f2$evidence$type$domain.command = {});
    var $cccev$f2$evidence$type$domain$command$list = $cccev$f2$evidence$type$domain$command.list || ($cccev$f2$evidence$type$domain$command.list = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$type = $cccev$f2$evidence.type || ($cccev$f2$evidence.type = {});
    var $cccev$f2$evidence$type$domain = $cccev$f2$evidence$type.domain || ($cccev$f2$evidence$type.domain = {});
    var $cccev$f2$evidence$type$domain$command = $cccev$f2$evidence$type$domain.command || ($cccev$f2$evidence$type$domain.command = {});
    var $cccev$f2$evidence$type$domain$command$type = $cccev$f2$evidence$type$domain$command.type || ($cccev$f2$evidence$type$domain$command.type = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$type = $cccev$f2$evidence.type || ($cccev$f2$evidence.type = {});
    var $cccev$f2$evidence$type$domain = $cccev$f2$evidence$type.domain || ($cccev$f2$evidence$type.domain = {});
    var $cccev$f2$evidence$type$domain$model = $cccev$f2$evidence$type$domain.model || ($cccev$f2$evidence$type$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$type = $cccev$f2$evidence.type || ($cccev$f2$evidence.type = {});
    var $cccev$f2$evidence$type$domain = $cccev$f2$evidence$type.domain || ($cccev$f2$evidence$type.domain = {});
    var $cccev$f2$evidence$type$domain$model = $cccev$f2$evidence$type$domain.model || ($cccev$f2$evidence$type$domain.model = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-evidence-type-f2-domain.js.map

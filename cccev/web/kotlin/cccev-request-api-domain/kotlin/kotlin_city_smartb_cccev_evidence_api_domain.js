(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_cccev_cccev_core_dsl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_cccev_cccev_core_dsl.js'));
  else {
    if (typeof kotlin_city_smartb_cccev_cccev_core_dsl === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_cccev_evidence_api_domain'. Its dependency 'kotlin_city_smartb_cccev_cccev_core_dsl' was not found. Please, check whether 'kotlin_city_smartb_cccev_cccev_core_dsl' is loaded prior to 'kotlin_city_smartb_cccev_evidence_api_domain'.");
    }
    root.kotlin_city_smartb_cccev_evidence_api_domain = factory(typeof kotlin_city_smartb_cccev_evidence_api_domain === 'undefined' ? {} : kotlin_city_smartb_cccev_evidence_api_domain, kotlin_city_smartb_cccev_cccev_core_dsl);
  }
}(this, function (_, kotlin_city_smartb_cccev_cccev_core_dsl) {
  //region block: imports
  var EvidenceType = kotlin_city_smartb_cccev_cccev_core_dsl.$crossModule$.EvidenceType;
  var EvidenceTypeList = kotlin_city_smartb_cccev_cccev_core_dsl.$crossModule$.EvidenceTypeList;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function GetEvidenceTypeListsQueryDTO() {
  }
  GetEvidenceTypeListsQueryDTO.$metadata$ = {
    simpleName: 'GetEvidenceTypeListsQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function GetEvidenceTypeListsQueryResultDTO() {
  }
  GetEvidenceTypeListsQueryResultDTO.$metadata$ = {
    simpleName: 'GetEvidenceTypeListsQueryResultDTO',
    kind: 'interface',
    interfaces: []
  };
  function EvidenceTypeDTO() {
  }
  EvidenceTypeDTO.$metadata$ = {
    simpleName: 'EvidenceTypeDTO',
    kind: 'interface',
    interfaces: [EvidenceType]
  };
  function EvidenceTypeListChoicesDTO() {
  }
  EvidenceTypeListChoicesDTO.$metadata$ = {
    simpleName: 'EvidenceTypeListChoicesDTO',
    kind: 'interface',
    interfaces: []
  };
  function EvidenceTypeListDTO() {
  }
  EvidenceTypeListDTO.$metadata$ = {
    simpleName: 'EvidenceTypeListDTO',
    kind: 'interface',
    interfaces: [EvidenceTypeList]
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$api = $cccev$f2$evidence.api || ($cccev$f2$evidence.api = {});
    var $cccev$f2$evidence$api$domain = $cccev$f2$evidence$api.domain || ($cccev$f2$evidence$api.domain = {});
    var $cccev$f2$evidence$api$domain$features = $cccev$f2$evidence$api$domain.features || ($cccev$f2$evidence$api$domain.features = {});
    var $cccev$f2$evidence$api$domain$features$query = $cccev$f2$evidence$api$domain$features.query || ($cccev$f2$evidence$api$domain$features.query = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$api = $cccev$f2$evidence.api || ($cccev$f2$evidence.api = {});
    var $cccev$f2$evidence$api$domain = $cccev$f2$evidence$api.domain || ($cccev$f2$evidence$api.domain = {});
    var $cccev$f2$evidence$api$domain$model = $cccev$f2$evidence$api$domain.model || ($cccev$f2$evidence$api$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$api = $cccev$f2$evidence.api || ($cccev$f2$evidence.api = {});
    var $cccev$f2$evidence$api$domain = $cccev$f2$evidence$api.domain || ($cccev$f2$evidence$api.domain = {});
    var $cccev$f2$evidence$api$domain$model = $cccev$f2$evidence$api$domain.model || ($cccev$f2$evidence$api$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$evidence = $cccev$f2.evidence || ($cccev$f2.evidence = {});
    var $cccev$f2$evidence$api = $cccev$f2$evidence.api || ($cccev$f2$evidence.api = {});
    var $cccev$f2$evidence$api$domain = $cccev$f2$evidence$api.domain || ($cccev$f2$evidence$api.domain = {});
    var $cccev$f2$evidence$api$domain$model = $cccev$f2$evidence$api$domain.model || ($cccev$f2$evidence$api$domain.model = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_cccev_evidence_api_domain.js.map
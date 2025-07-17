(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_cccev_cccev_core_dsl.js', './kotlin_city_smartb_f2_f2_dsl_cqrs.js', './kotlin_city_smartb_f2_f2_dsl_function.js', './kotlin_city_smartb_ssm_ssm_chaincode_dsl.js', './kotlin_city_smartb_s2_s2_automate_dsl.js', './kotlin_city_smartb_cccev_request_domain.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_cccev_cccev_core_dsl.js'), require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'), require('./kotlin_city_smartb_f2_f2_dsl_function.js'), require('./kotlin_city_smartb_ssm_ssm_chaincode_dsl.js'), require('./kotlin_city_smartb_s2_s2_automate_dsl.js'), require('./kotlin_city_smartb_cccev_request_domain.js'));
  else {
    if (typeof kotlin_city_smartb_cccev_cccev_core_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-api-domain'. Its dependency 'kotlin_city_smartb_cccev_cccev_core_dsl' was not found. Please, check whether 'kotlin_city_smartb_cccev_cccev_core_dsl' is loaded prior to 'cccev-evidence-api-domain'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-api-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'cccev-evidence-api-domain'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_function === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-api-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_function' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_function' is loaded prior to 'cccev-evidence-api-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_chaincode_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-api-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' is loaded prior to 'cccev-evidence-api-domain'.");
    }
    if (typeof kotlin_city_smartb_s2_s2_automate_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-api-domain'. Its dependency 'kotlin_city_smartb_s2_s2_automate_dsl' was not found. Please, check whether 'kotlin_city_smartb_s2_s2_automate_dsl' is loaded prior to 'cccev-evidence-api-domain'.");
    }
    if (typeof kotlin_city_smartb_cccev_request_domain === 'undefined') {
      throw new Error("Error loading module 'cccev-evidence-api-domain'. Its dependency 'kotlin_city_smartb_cccev_request_domain' was not found. Please, check whether 'kotlin_city_smartb_cccev_request_domain' is loaded prior to 'cccev-evidence-api-domain'.");
    }
    root['cccev-evidence-api-domain'] = factory(typeof this['cccev-evidence-api-domain'] === 'undefined' ? {} : this['cccev-evidence-api-domain'], kotlin_city_smartb_cccev_cccev_core_dsl, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_city_smartb_cccev_request_domain);
  }
}(this, function (_, kotlin_city_smartb_cccev_cccev_core_dsl, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_city_smartb_cccev_request_domain) {
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
  kotlin_city_smartb_cccev_cccev_core_dsl.$jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_cqrs.$jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_function.$jsExportAll$(_);
  kotlin_city_smartb_ssm_ssm_chaincode_dsl.$jsExportAll$(_);
  kotlin_city_smartb_s2_s2_automate_dsl.$jsExportAll$(_);
  kotlin_city_smartb_cccev_request_domain.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-evidence-api-domain.js.map
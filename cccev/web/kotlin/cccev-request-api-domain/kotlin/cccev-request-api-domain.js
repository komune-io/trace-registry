(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_cccev_cccev_core_dsl.js', './kotlin_city_smartb_f2_f2_dsl_cqrs.js', './kotlin_city_smartb_f2_f2_dsl_function.js', './kotlin_city_smartb_ssm_ssm_chaincode_dsl.js', './kotlin_city_smartb_s2_s2_automate_dsl.js', './kotlin_city_smartb_cccev_request_domain.js', './kotlin_city_smartb_cccev_evidence_api_domain.js', './kotlin_city_smartb_cccev_concept_api_domain.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_cccev_cccev_core_dsl.js'), require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'), require('./kotlin_city_smartb_f2_f2_dsl_function.js'), require('./kotlin_city_smartb_ssm_ssm_chaincode_dsl.js'), require('./kotlin_city_smartb_s2_s2_automate_dsl.js'), require('./kotlin_city_smartb_cccev_request_domain.js'), require('./kotlin_city_smartb_cccev_evidence_api_domain.js'), require('./kotlin_city_smartb_cccev_concept_api_domain.js'));
  else {
    if (typeof kotlin_city_smartb_cccev_cccev_core_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_cccev_cccev_core_dsl' was not found. Please, check whether 'kotlin_city_smartb_cccev_cccev_core_dsl' is loaded prior to 'cccev-request-api-domain'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'cccev-request-api-domain'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_function === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_function' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_function' is loaded prior to 'cccev-request-api-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_chaincode_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' is loaded prior to 'cccev-request-api-domain'.");
    }
    if (typeof kotlin_city_smartb_s2_s2_automate_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_s2_s2_automate_dsl' was not found. Please, check whether 'kotlin_city_smartb_s2_s2_automate_dsl' is loaded prior to 'cccev-request-api-domain'.");
    }
    if (typeof kotlin_city_smartb_cccev_request_domain === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_cccev_request_domain' was not found. Please, check whether 'kotlin_city_smartb_cccev_request_domain' is loaded prior to 'cccev-request-api-domain'.");
    }
    if (typeof kotlin_city_smartb_cccev_evidence_api_domain === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_cccev_evidence_api_domain' was not found. Please, check whether 'kotlin_city_smartb_cccev_evidence_api_domain' is loaded prior to 'cccev-request-api-domain'.");
    }
    if (typeof kotlin_city_smartb_cccev_concept_api_domain === 'undefined') {
      throw new Error("Error loading module 'cccev-request-api-domain'. Its dependency 'kotlin_city_smartb_cccev_concept_api_domain' was not found. Please, check whether 'kotlin_city_smartb_cccev_concept_api_domain' is loaded prior to 'cccev-request-api-domain'.");
    }
    root['cccev-request-api-domain'] = factory(typeof this['cccev-request-api-domain'] === 'undefined' ? {} : this['cccev-request-api-domain'], kotlin_city_smartb_cccev_cccev_core_dsl, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_city_smartb_cccev_request_domain, kotlin_city_smartb_cccev_evidence_api_domain, kotlin_city_smartb_cccev_concept_api_domain);
  }
}(this, function (_, kotlin_city_smartb_cccev_cccev_core_dsl, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_city_smartb_cccev_request_domain, kotlin_city_smartb_cccev_evidence_api_domain, kotlin_city_smartb_cccev_concept_api_domain) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function GetRequestScoreQueryDTO() {
  }
  GetRequestScoreQueryDTO.$metadata$ = {
    simpleName: 'GetRequestScoreQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function GetRequestScoreQueryResultDTO() {
  }
  GetRequestScoreQueryResultDTO.$metadata$ = {
    simpleName: 'GetRequestScoreQueryResultDTO',
    kind: 'interface',
    interfaces: []
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$request = $cccev$f2.request || ($cccev$f2.request = {});
    var $cccev$f2$request$api = $cccev$f2$request.api || ($cccev$f2$request.api = {});
    var $cccev$f2$request$api$domain = $cccev$f2$request$api.domain || ($cccev$f2$request$api.domain = {});
    var $cccev$f2$request$api$domain$features = $cccev$f2$request$api$domain.features || ($cccev$f2$request$api$domain.features = {});
    var $cccev$f2$request$api$domain$features$query = $cccev$f2$request$api$domain$features.query || ($cccev$f2$request$api$domain$features.query = {});
  }
  $jsExportAll$(_);
  kotlin_city_smartb_cccev_cccev_core_dsl.$jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_cqrs.$jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_function.$jsExportAll$(_);
  kotlin_city_smartb_ssm_ssm_chaincode_dsl.$jsExportAll$(_);
  kotlin_city_smartb_s2_s2_automate_dsl.$jsExportAll$(_);
  kotlin_city_smartb_cccev_request_domain.$jsExportAll$(_);
  kotlin_city_smartb_cccev_evidence_api_domain.$jsExportAll$(_);
  kotlin_city_smartb_cccev_concept_api_domain.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-request-api-domain.js.map
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_f2_f2_dsl_cqrs.js', './kotlin_city_smartb_f2_f2_dsl_function.js', './kotlin_city_smartb_ssm_ssm_chaincode_dsl.js', './kotlin_city_smartb_s2_s2_automate_dsl.js', './kotlin_city_smartb_cccev_cccev_core_dsl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'), require('./kotlin_city_smartb_f2_f2_dsl_function.js'), require('./kotlin_city_smartb_ssm_ssm_chaincode_dsl.js'), require('./kotlin_city_smartb_s2_s2_automate_dsl.js'), require('./kotlin_city_smartb_cccev_cccev_core_dsl.js'));
  else {
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-api-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'cccev-requirement-api-domain'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_function === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-api-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_function' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_function' is loaded prior to 'cccev-requirement-api-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_chaincode_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-api-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' is loaded prior to 'cccev-requirement-api-domain'.");
    }
    if (typeof kotlin_city_smartb_s2_s2_automate_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-api-domain'. Its dependency 'kotlin_city_smartb_s2_s2_automate_dsl' was not found. Please, check whether 'kotlin_city_smartb_s2_s2_automate_dsl' is loaded prior to 'cccev-requirement-api-domain'.");
    }
    if (typeof kotlin_city_smartb_cccev_cccev_core_dsl === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-api-domain'. Its dependency 'kotlin_city_smartb_cccev_cccev_core_dsl' was not found. Please, check whether 'kotlin_city_smartb_cccev_cccev_core_dsl' is loaded prior to 'cccev-requirement-api-domain'.");
    }
    root['cccev-requirement-api-domain'] = factory(typeof this['cccev-requirement-api-domain'] === 'undefined' ? {} : this['cccev-requirement-api-domain'], kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_city_smartb_cccev_cccev_core_dsl);
  }
}(this, function (_, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_city_smartb_cccev_cccev_core_dsl) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function GetRequirementListQueryDTO() {
  }
  GetRequirementListQueryDTO.$metadata$ = {
    simpleName: 'GetRequirementListQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function GetRequirementListQueryResultDTO() {
  }
  GetRequirementListQueryResultDTO.$metadata$ = {
    simpleName: 'GetRequirementListQueryResultDTO',
    kind: 'interface',
    interfaces: []
  };
  function GetRequirementQueryDTO() {
  }
  GetRequirementQueryDTO.$metadata$ = {
    simpleName: 'GetRequirementQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function GetRequirementQueryResultDTO() {
  }
  GetRequirementQueryResultDTO.$metadata$ = {
    simpleName: 'GetRequirementQueryResultDTO',
    kind: 'interface',
    interfaces: []
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$api = $cccev$f2$requirement.api || ($cccev$f2$requirement.api = {});
    var $cccev$f2$requirement$api$domain = $cccev$f2$requirement$api.domain || ($cccev$f2$requirement$api.domain = {});
    var $cccev$f2$requirement$api$domain$features = $cccev$f2$requirement$api$domain.features || ($cccev$f2$requirement$api$domain.features = {});
    var $cccev$f2$requirement$api$domain$features$query = $cccev$f2$requirement$api$domain$features.query || ($cccev$f2$requirement$api$domain$features.query = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$requirement = $cccev$f2.requirement || ($cccev$f2.requirement = {});
    var $cccev$f2$requirement$api = $cccev$f2$requirement.api || ($cccev$f2$requirement.api = {});
    var $cccev$f2$requirement$api$domain = $cccev$f2$requirement$api.domain || ($cccev$f2$requirement$api.domain = {});
    var $cccev$f2$requirement$api$domain$features = $cccev$f2$requirement$api$domain.features || ($cccev$f2$requirement$api$domain.features = {});
    var $cccev$f2$requirement$api$domain$features$query = $cccev$f2$requirement$api$domain$features.query || ($cccev$f2$requirement$api$domain$features.query = {});
  }
  $jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_cqrs.$jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_function.$jsExportAll$(_);
  kotlin_city_smartb_ssm_ssm_chaincode_dsl.$jsExportAll$(_);
  kotlin_city_smartb_s2_s2_automate_dsl.$jsExportAll$(_);
  kotlin_city_smartb_cccev_cccev_core_dsl.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-requirement-api-domain.js.map
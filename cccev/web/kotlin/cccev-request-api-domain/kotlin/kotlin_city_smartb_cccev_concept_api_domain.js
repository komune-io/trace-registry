(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_cccev_cccev_core_dsl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_cccev_cccev_core_dsl.js'));
  else {
    if (typeof kotlin_city_smartb_cccev_cccev_core_dsl === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_cccev_concept_api_domain'. Its dependency 'kotlin_city_smartb_cccev_cccev_core_dsl' was not found. Please, check whether 'kotlin_city_smartb_cccev_cccev_core_dsl' is loaded prior to 'kotlin_city_smartb_cccev_concept_api_domain'.");
    }
    root.kotlin_city_smartb_cccev_concept_api_domain = factory(typeof kotlin_city_smartb_cccev_concept_api_domain === 'undefined' ? {} : kotlin_city_smartb_cccev_concept_api_domain, kotlin_city_smartb_cccev_cccev_core_dsl);
  }
}(this, function (_, kotlin_city_smartb_cccev_cccev_core_dsl) {
  //region block: imports
  var InformationConcept = kotlin_city_smartb_cccev_cccev_core_dsl.$crossModule$.InformationConcept;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function GetInformationConceptsQueryDTO() {
  }
  GetInformationConceptsQueryDTO.$metadata$ = {
    simpleName: 'GetInformationConceptsQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function GetInformationConceptsQueryResultDTO() {
  }
  GetInformationConceptsQueryResultDTO.$metadata$ = {
    simpleName: 'GetInformationConceptsQueryResultDTO',
    kind: 'interface',
    interfaces: []
  };
  function InformationConceptDTO() {
  }
  InformationConceptDTO.$metadata$ = {
    simpleName: 'InformationConceptDTO',
    kind: 'interface',
    interfaces: [InformationConcept]
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$concept = $cccev$f2.concept || ($cccev$f2.concept = {});
    var $cccev$f2$concept$api = $cccev$f2$concept.api || ($cccev$f2$concept.api = {});
    var $cccev$f2$concept$api$domain = $cccev$f2$concept$api.domain || ($cccev$f2$concept$api.domain = {});
    var $cccev$f2$concept$api$domain$features = $cccev$f2$concept$api$domain.features || ($cccev$f2$concept$api$domain.features = {});
    var $cccev$f2$concept$api$domain$features$query = $cccev$f2$concept$api$domain$features.query || ($cccev$f2$concept$api$domain$features.query = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$concept = $cccev$f2.concept || ($cccev$f2.concept = {});
    var $cccev$f2$concept$api = $cccev$f2$concept.api || ($cccev$f2$concept.api = {});
    var $cccev$f2$concept$api$domain = $cccev$f2$concept$api.domain || ($cccev$f2$concept$api.domain = {});
    var $cccev$f2$concept$api$domain$model = $cccev$f2$concept$api$domain.model || ($cccev$f2$concept$api$domain.model = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_cccev_concept_api_domain.js.map
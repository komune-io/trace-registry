(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './cccev-concept-domain.js', './kotlin-kotlin-stdlib-js-ir.js', './cccev-dsl-model.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./cccev-concept-domain.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./cccev-dsl-model.js'));
  else {
    if (typeof this['cccev-concept-domain'] === 'undefined') {
      throw new Error("Error loading module 'cccev-concept-f2-domain'. Its dependency 'cccev-concept-domain' was not found. Please, check whether 'cccev-concept-domain' is loaded prior to 'cccev-concept-f2-domain'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-concept-f2-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-concept-f2-domain'.");
    }
    if (typeof this['cccev-dsl-model'] === 'undefined') {
      throw new Error("Error loading module 'cccev-concept-f2-domain'. Its dependency 'cccev-dsl-model' was not found. Please, check whether 'cccev-dsl-model' is loaded prior to 'cccev-concept-f2-domain'.");
    }
    root['cccev-concept-f2-domain'] = factory(typeof this['cccev-concept-f2-domain'] === 'undefined' ? {} : this['cccev-concept-f2-domain'], this['cccev-concept-domain'], this['kotlin-kotlin-stdlib-js-ir'], this['cccev-dsl-model']);
  }
}(this, function (_, kotlin_city_smartb_cccev_concept_domain, kotlin_kotlin, kotlin_city_smartb_cccev_dsl_model) {
  'use strict';
  //region block: imports
  var InformationConceptCreateCommandDTO = kotlin_city_smartb_cccev_concept_domain.$_$.a;
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var setMetadataFor = kotlin_kotlin.$_$.b2;
  var InformationConceptCreatedEventDTO = kotlin_city_smartb_cccev_concept_domain.$_$.b;
  var InformationConcept = kotlin_city_smartb_cccev_dsl_model.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(InformationConceptCreateCommandDTO_0, 'InformationConceptCreateCommandDTO', interfaceMeta, undefined, [InformationConceptCreateCommandDTO], undefined, undefined, []);
  setMetadataFor(InformationConceptCreatedEventDTO_0, 'InformationConceptCreatedEventDTO', interfaceMeta, undefined, [InformationConceptCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(InformationConceptDTO, 'InformationConceptDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RequestInformationConceptDTO, 'RequestInformationConceptDTO', interfaceMeta, undefined, [InformationConcept], undefined, undefined, []);
  setMetadataFor(GetInformationConceptsQueryDTO, 'GetInformationConceptsQueryDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GetInformationConceptsQueryResultDTO, 'GetInformationConceptsQueryResultDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InformationConceptGetQueryDTO, 'InformationConceptGetQueryDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InformationConceptGetResultDTO, 'InformationConceptGetResultDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function InformationConceptCreateCommandDTO_0() {
  }
  function InformationConceptCreatedEventDTO_0() {
  }
  function InformationConceptDTO() {
  }
  function RequestInformationConceptDTO() {
  }
  function GetInformationConceptsQueryDTO() {
  }
  function GetInformationConceptsQueryResultDTO() {
  }
  function InformationConceptGetQueryDTO() {
  }
  function InformationConceptGetResultDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$concept = $cccev$f2.concept || ($cccev$f2.concept = {});
    var $cccev$f2$concept$domain = $cccev$f2$concept.domain || ($cccev$f2$concept.domain = {});
    var $cccev$f2$concept$domain$command = $cccev$f2$concept$domain.command || ($cccev$f2$concept$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$concept = $cccev$f2.concept || ($cccev$f2.concept = {});
    var $cccev$f2$concept$domain = $cccev$f2$concept.domain || ($cccev$f2$concept.domain = {});
    var $cccev$f2$concept$domain$model = $cccev$f2$concept$domain.model || ($cccev$f2$concept$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$concept = $cccev$f2.concept || ($cccev$f2.concept = {});
    var $cccev$f2$concept$domain = $cccev$f2$concept.domain || ($cccev$f2$concept.domain = {});
    var $cccev$f2$concept$domain$model = $cccev$f2$concept$domain.model || ($cccev$f2$concept$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$concept = $cccev$f2.concept || ($cccev$f2.concept = {});
    var $cccev$f2$concept$domain = $cccev$f2$concept.domain || ($cccev$f2$concept.domain = {});
    var $cccev$f2$concept$domain$query = $cccev$f2$concept$domain.query || ($cccev$f2$concept$domain.query = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$concept = $cccev$f2.concept || ($cccev$f2.concept = {});
    var $cccev$f2$concept$domain = $cccev$f2$concept.domain || ($cccev$f2$concept.domain = {});
    var $cccev$f2$concept$domain$query = $cccev$f2$concept$domain.query || ($cccev$f2$concept$domain.query = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-concept-f2-domain.js.map

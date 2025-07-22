(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './s2-s2-automate-dsl.js', './kotlin-kotlin-stdlib-js-ir.js', './f2-f2-dsl-cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./s2-s2-automate-dsl.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./f2-f2-dsl-cqrs.js'));
  else {
    if (typeof this['s2-s2-automate-dsl'] === 'undefined') {
      throw new Error("Error loading module 'cccev-concept-domain'. Its dependency 's2-s2-automate-dsl' was not found. Please, check whether 's2-s2-automate-dsl' is loaded prior to 'cccev-concept-domain'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-concept-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-concept-domain'.");
    }
    if (typeof this['f2-f2-dsl-cqrs'] === 'undefined') {
      throw new Error("Error loading module 'cccev-concept-domain'. Its dependency 'f2-f2-dsl-cqrs' was not found. Please, check whether 'f2-f2-dsl-cqrs' is loaded prior to 'cccev-concept-domain'.");
    }
    root['cccev-concept-domain'] = factory(typeof this['cccev-concept-domain'] === 'undefined' ? {} : this['cccev-concept-domain'], this['s2-s2-automate-dsl'], this['kotlin-kotlin-stdlib-js-ir'], this['f2-f2-dsl-cqrs']);
  }
}(this, function (_, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs) {
  'use strict';
  //region block: imports
  var S2InitCommand = kotlin_city_smartb_s2_s2_automate_dsl.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var setMetadataFor = kotlin_kotlin.$_$.b2;
  var S2Command = kotlin_city_smartb_s2_s2_automate_dsl.$_$.a;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.b;
  var WithId = kotlin_city_smartb_s2_s2_automate_dsl.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(InformationConceptInitCommand, 'InformationConceptInitCommand', interfaceMeta, undefined, [S2InitCommand], undefined, undefined, []);
  setMetadataFor(InformationConceptCommand, 'InformationConceptCommand', interfaceMeta, undefined, [S2Command], undefined, undefined, []);
  setMetadataFor(InformationConceptEvent, 'InformationConceptEvent', interfaceMeta, undefined, [Event, WithId], undefined, undefined, []);
  setMetadataFor(InformationConceptCreateCommandDTO, 'InformationConceptCreateCommandDTO', interfaceMeta, undefined, [InformationConceptInitCommand], undefined, undefined, []);
  setMetadataFor(InformationConceptCreatedEventDTO, 'InformationConceptCreatedEventDTO', interfaceMeta, undefined, [InformationConceptEvent], undefined, undefined, []);
  //endregion
  function InformationConceptInitCommand() {
  }
  function InformationConceptCommand() {
  }
  function InformationConceptEvent() {
  }
  function InformationConceptCreateCommandDTO() {
  }
  function InformationConceptCreatedEventDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$concept = $cccev$s2.concept || ($cccev$s2.concept = {});
    var $cccev$s2$concept$domain = $cccev$s2$concept.domain || ($cccev$s2$concept.domain = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$concept = $cccev$s2.concept || ($cccev$s2.concept = {});
    var $cccev$s2$concept$domain = $cccev$s2$concept.domain || ($cccev$s2$concept.domain = {});
    var $cccev$s2$concept$domain$command = $cccev$s2$concept$domain.command || ($cccev$s2$concept$domain.command = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-concept-domain.js.map

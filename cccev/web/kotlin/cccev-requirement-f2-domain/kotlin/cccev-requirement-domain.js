(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './s2-s2-automate-dsl.js', './kotlin-kotlin-stdlib-js-ir.js', './f2-f2-dsl-cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./s2-s2-automate-dsl.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./f2-f2-dsl-cqrs.js'));
  else {
    if (typeof this['s2-s2-automate-dsl'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-domain'. Its dependency 's2-s2-automate-dsl' was not found. Please, check whether 's2-s2-automate-dsl' is loaded prior to 'cccev-requirement-domain'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-requirement-domain'.");
    }
    if (typeof this['f2-f2-dsl-cqrs'] === 'undefined') {
      throw new Error("Error loading module 'cccev-requirement-domain'. Its dependency 'f2-f2-dsl-cqrs' was not found. Please, check whether 'f2-f2-dsl-cqrs' is loaded prior to 'cccev-requirement-domain'.");
    }
    root['cccev-requirement-domain'] = factory(typeof this['cccev-requirement-domain'] === 'undefined' ? {} : this['cccev-requirement-domain'], this['s2-s2-automate-dsl'], this['kotlin-kotlin-stdlib-js-ir'], this['f2-f2-dsl-cqrs']);
  }
}(this, function (_, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs) {
  'use strict';
  //region block: imports
  var S2InitCommand = kotlin_city_smartb_s2_s2_automate_dsl.$_$.c;
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var setMetadataFor = kotlin_kotlin.$_$.b2;
  var S2Command = kotlin_city_smartb_s2_s2_automate_dsl.$_$.a;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.b;
  var WithId = kotlin_city_smartb_s2_s2_automate_dsl.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(RequirementInitCommand, 'RequirementInitCommand', interfaceMeta, undefined, [S2InitCommand], undefined, undefined, []);
  setMetadataFor(RequirementCommand, 'RequirementCommand', interfaceMeta, undefined, [S2Command], undefined, undefined, []);
  setMetadataFor(RequirementEvent, 'RequirementEvent', interfaceMeta, undefined, [Event, WithId], undefined, undefined, []);
  setMetadataFor(RequirementCreatedEventDTO, 'RequirementCreatedEventDTO', interfaceMeta, undefined, [RequirementEvent], undefined, undefined, []);
  setMetadataFor(RequirementUpdateCommandDTO, 'RequirementUpdateCommandDTO', interfaceMeta, undefined, [RequirementCommand], undefined, undefined, []);
  setMetadataFor(RequirementUpdatedEventDTO, 'RequirementUpdatedEventDTO', interfaceMeta, undefined, [RequirementEvent], undefined, undefined, []);
  //endregion
  function RequirementInitCommand() {
  }
  function RequirementCommand() {
  }
  function RequirementEvent() {
  }
  function RequirementCreatedEventDTO() {
  }
  function RequirementUpdateCommandDTO() {
  }
  function RequirementUpdatedEventDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$requirement = $cccev$s2.requirement || ($cccev$s2.requirement = {});
    var $cccev$s2$requirement$domain = $cccev$s2$requirement.domain || ($cccev$s2$requirement.domain = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$requirement = $cccev$s2.requirement || ($cccev$s2.requirement = {});
    var $cccev$s2$requirement$domain = $cccev$s2$requirement.domain || ($cccev$s2$requirement.domain = {});
    var $cccev$s2$requirement$domain$command = $cccev$s2$requirement$domain.command || ($cccev$s2$requirement$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$requirement = $cccev$s2.requirement || ($cccev$s2.requirement = {});
    var $cccev$s2$requirement$domain = $cccev$s2$requirement.domain || ($cccev$s2$requirement.domain = {});
    var $cccev$s2$requirement$domain$command = $cccev$s2$requirement$domain.command || ($cccev$s2$requirement$domain.command = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = RequirementCreatedEventDTO;
  _.$_$.b = RequirementUpdateCommandDTO;
  _.$_$.c = RequirementUpdatedEventDTO;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-requirement-domain.js.map

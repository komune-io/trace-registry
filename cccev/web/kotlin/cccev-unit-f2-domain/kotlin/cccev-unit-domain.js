(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './s2-s2-automate-dsl.js', './kotlin-kotlin-stdlib-js-ir.js', './f2-f2-dsl-cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./s2-s2-automate-dsl.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./f2-f2-dsl-cqrs.js'));
  else {
    if (typeof this['s2-s2-automate-dsl'] === 'undefined') {
      throw new Error("Error loading module 'cccev-unit-domain'. Its dependency 's2-s2-automate-dsl' was not found. Please, check whether 's2-s2-automate-dsl' is loaded prior to 'cccev-unit-domain'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-unit-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-unit-domain'.");
    }
    if (typeof this['f2-f2-dsl-cqrs'] === 'undefined') {
      throw new Error("Error loading module 'cccev-unit-domain'. Its dependency 'f2-f2-dsl-cqrs' was not found. Please, check whether 'f2-f2-dsl-cqrs' is loaded prior to 'cccev-unit-domain'.");
    }
    root['cccev-unit-domain'] = factory(typeof this['cccev-unit-domain'] === 'undefined' ? {} : this['cccev-unit-domain'], this['s2-s2-automate-dsl'], this['kotlin-kotlin-stdlib-js-ir'], this['f2-f2-dsl-cqrs']);
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
  var Unit_getInstance = kotlin_kotlin.$_$.t;
  var Enum = kotlin_kotlin.$_$.g2;
  var classMeta = kotlin_kotlin.$_$.r1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DataUnitInitCommand, 'DataUnitInitCommand', interfaceMeta, undefined, [S2InitCommand], undefined, undefined, []);
  setMetadataFor(DataUnitCommand, 'DataUnitCommand', interfaceMeta, undefined, [S2Command], undefined, undefined, []);
  setMetadataFor(DataUnitEvent, 'DataUnitEvent', interfaceMeta, undefined, [Event, WithId], undefined, undefined, []);
  setMetadataFor(DataUnitCreatedEventDTO, 'DataUnitCreatedEventDTO', interfaceMeta, undefined, [DataUnitEvent], undefined, undefined, []);
  setMetadataFor(DataUnitType, 'DataUnitType', classMeta, Enum, undefined, undefined, undefined, []);
  //endregion
  function DataUnitInitCommand() {
  }
  function DataUnitCommand() {
  }
  function DataUnitEvent() {
  }
  function DataUnitCreatedEventDTO() {
  }
  var DataUnitType_BOOLEAN_instance;
  var DataUnitType_DATE_instance;
  var DataUnitType_NUMBER_instance;
  var DataUnitType_STRING_instance;
  var DataUnitType_entriesInitialized;
  function DataUnitType_initEntries() {
    if (DataUnitType_entriesInitialized)
      return Unit_getInstance();
    DataUnitType_entriesInitialized = true;
    DataUnitType_BOOLEAN_instance = new DataUnitType('BOOLEAN', 0);
    DataUnitType_DATE_instance = new DataUnitType('DATE', 1);
    DataUnitType_NUMBER_instance = new DataUnitType('NUMBER', 2);
    DataUnitType_STRING_instance = new DataUnitType('STRING', 3);
  }
  function DataUnitType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DataUnitType_BOOLEAN_getInstance() {
    DataUnitType_initEntries();
    return DataUnitType_BOOLEAN_instance;
  }
  function DataUnitType_DATE_getInstance() {
    DataUnitType_initEntries();
    return DataUnitType_DATE_instance;
  }
  function DataUnitType_NUMBER_getInstance() {
    DataUnitType_initEntries();
    return DataUnitType_NUMBER_instance;
  }
  function DataUnitType_STRING_getInstance() {
    DataUnitType_initEntries();
    return DataUnitType_STRING_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$unit = $cccev$s2.unit || ($cccev$s2.unit = {});
    var $cccev$s2$unit$domain = $cccev$s2$unit.domain || ($cccev$s2$unit.domain = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$unit = $cccev$s2.unit || ($cccev$s2.unit = {});
    var $cccev$s2$unit$domain = $cccev$s2$unit.domain || ($cccev$s2$unit.domain = {});
    var $cccev$s2$unit$domain$command = $cccev$s2$unit$domain.command || ($cccev$s2$unit$domain.command = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = DataUnitCreatedEventDTO;
  _.$_$.b = DataUnitType_BOOLEAN_getInstance;
  _.$_$.c = DataUnitType_DATE_getInstance;
  _.$_$.d = DataUnitType_NUMBER_getInstance;
  _.$_$.e = DataUnitType_STRING_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-unit-domain.js.map

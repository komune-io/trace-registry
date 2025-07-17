(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './cccev-unit-domain.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./cccev-unit-domain.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-unit-f2-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-unit-f2-domain'.");
    }
    if (typeof this['cccev-unit-domain'] === 'undefined') {
      throw new Error("Error loading module 'cccev-unit-f2-domain'. Its dependency 'cccev-unit-domain' was not found. Please, check whether 'cccev-unit-domain' is loaded prior to 'cccev-unit-f2-domain'.");
    }
    root['cccev-unit-f2-domain'] = factory(typeof this['cccev-unit-f2-domain'] === 'undefined' ? {} : this['cccev-unit-f2-domain'], this['kotlin-kotlin-stdlib-js-ir'], this['cccev-unit-domain']);
  }
}(this, function (_, kotlin_kotlin, kotlin_city_smartb_cccev_unit_domain) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var DataUnitCreatedEventDTO = kotlin_city_smartb_cccev_unit_domain.$_$.a;
  var DataUnitType_BOOLEAN_getInstance = kotlin_city_smartb_cccev_unit_domain.$_$.b;
  var DataUnitType_DATE_getInstance = kotlin_city_smartb_cccev_unit_domain.$_$.c;
  var DataUnitType_NUMBER_getInstance = kotlin_city_smartb_cccev_unit_domain.$_$.d;
  var DataUnitType_STRING_getInstance = kotlin_city_smartb_cccev_unit_domain.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.la;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DataUnitCreateCommandDTO, 'DataUnitCreateCommandDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DataUnitCreatedEventDTO_0, 'DataUnitCreatedEventDTO', interfaceMeta, undefined, [DataUnitCreatedEventDTO], undefined, undefined, []);
  setMetadataFor(DataUnitDTO, 'DataUnitDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DataUnitTypeValues, 'DataUnitTypeValues', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DataUnitGetQueryDTO, 'DataUnitGetQueryDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DataUnitGetResultDTO, 'DataUnitGetResultDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function DataUnitCreateCommandDTO() {
  }
  function DataUnitCreatedEventDTO_0() {
  }
  function DataUnitDTO() {
  }
  function DataUnitTypeValues() {
    DataUnitTypeValues_instance = this;
  }
  DataUnitTypeValues.prototype.boolean = function () {
    return DataUnitType_BOOLEAN_getInstance().x3_1;
  };
  DataUnitTypeValues.prototype.date = function () {
    return DataUnitType_DATE_getInstance().x3_1;
  };
  DataUnitTypeValues.prototype.number = function () {
    return DataUnitType_NUMBER_getInstance().x3_1;
  };
  DataUnitTypeValues.prototype.string = function () {
    return DataUnitType_STRING_getInstance().x3_1;
  };
  var DataUnitTypeValues_instance;
  function DataUnitTypeValues_getInstance() {
    if (DataUnitTypeValues_instance == null)
      new DataUnitTypeValues();
    return DataUnitTypeValues_instance;
  }
  function DataUnitGetQueryDTO() {
  }
  function DataUnitGetResultDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$unit = $cccev$f2.unit || ($cccev$f2.unit = {});
    var $cccev$f2$unit$domain = $cccev$f2$unit.domain || ($cccev$f2$unit.domain = {});
    var $cccev$f2$unit$domain$command = $cccev$f2$unit$domain.command || ($cccev$f2$unit$domain.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$unit = $cccev$f2.unit || ($cccev$f2.unit = {});
    var $cccev$f2$unit$domain = $cccev$f2$unit.domain || ($cccev$f2$unit.domain = {});
    var $cccev$f2$unit$domain$model = $cccev$f2$unit$domain.model || ($cccev$f2$unit$domain.model = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$unit = $cccev$f2.unit || ($cccev$f2.unit = {});
    var $cccev$f2$unit$domain = $cccev$f2$unit.domain || ($cccev$f2$unit.domain = {});
    var $cccev$f2$unit$domain$model = $cccev$f2$unit$domain.model || ($cccev$f2$unit$domain.model = {});
    Object.defineProperty($cccev$f2$unit$domain$model, 'DataUnitTypeValues', {
      configurable: true,
      get: DataUnitTypeValues_getInstance
    });
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$f2 = $cccev.f2 || ($cccev.f2 = {});
    var $cccev$f2$unit = $cccev$f2.unit || ($cccev$f2.unit = {});
    var $cccev$f2$unit$domain = $cccev$f2$unit.domain || ($cccev$f2$unit.domain = {});
    var $cccev$f2$unit$domain$query = $cccev$f2$unit$domain.query || ($cccev$f2$unit$domain.query = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-unit-f2-domain.js.map

(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-cccev-core-dsl'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-cccev-core-dsl'.");
    }
    root['cccev-cccev-core-dsl'] = factory(typeof this['cccev-cccev-core-dsl'] === 'undefined' ? {} : this['cccev-cccev-core-dsl'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var setMetadataFor = kotlin_kotlin.$_$.a2;
  var classMeta = kotlin_kotlin.$_$.r1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Code, 'Code', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EvidenceDTO, 'EvidenceDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EvidenceTypeList, 'EvidenceTypeList', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EvidenceType, 'EvidenceType', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CoreLocationLocation, 'CoreLocationLocation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PeriodOfTime, 'PeriodOfTime', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InformationConcept, 'InformationConcept', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SupportedValueDTO, 'SupportedValueDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CUnitDTO, 'CUnitDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function Code() {
  }
  function EvidenceDTO() {
  }
  function EvidenceTypeList() {
  }
  function EvidenceType() {
  }
  function CoreLocationLocation() {
  }
  function PeriodOfTime_init_$Init$(duration, endTime, startTime, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      duration = null;
    if (!(($mask0 & 2) === 0))
      endTime = null;
    if (!(($mask0 & 4) === 0))
      startTime = null;
    PeriodOfTime.call($this, duration, endTime, startTime);
    return $this;
  }
  function PeriodOfTime_init_$Create$(duration, endTime, startTime, $mask0, $marker) {
    return PeriodOfTime_init_$Init$(duration, endTime, startTime, $mask0, $marker, Object.create(PeriodOfTime.prototype));
  }
  function PeriodOfTime(duration, endTime, startTime) {
    var duration_0 = duration === void 1 ? null : duration;
    var endTime_0 = endTime === void 1 ? null : endTime;
    var startTime_0 = startTime === void 1 ? null : startTime;
  }
  function InformationConcept() {
  }
  function SupportedValueDTO() {
  }
  function CUnitDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$core = $cccev.core || ($cccev.core = {});
    var $cccev$core$dsl = $cccev$core.dsl || ($cccev$core.dsl = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$core = $cccev.core || ($cccev.core = {});
    var $cccev$core$dsl = $cccev$core.dsl || ($cccev$core.dsl = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$core = $cccev.core || ($cccev.core = {});
    var $cccev$core$dsl = $cccev$core.dsl || ($cccev$core.dsl = {});
    $cccev$core$dsl.CoreLocationLocation = CoreLocationLocation;
    $cccev$core$dsl.PeriodOfTime = PeriodOfTime;
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$core = $cccev.core || ($cccev.core = {});
    var $cccev$core$dsl = $cccev$core.dsl || ($cccev$core.dsl = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$core = $cccev.core || ($cccev.core = {});
    var $cccev$core$dsl = $cccev$core.dsl || ($cccev$core.dsl = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$core = $cccev.core || ($cccev.core = {});
    var $cccev$core$dsl = $cccev$core.dsl || ($cccev$core.dsl = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = EvidenceTypeList;
  _.$_$.b = EvidenceType;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-cccev-core-dsl.js.map

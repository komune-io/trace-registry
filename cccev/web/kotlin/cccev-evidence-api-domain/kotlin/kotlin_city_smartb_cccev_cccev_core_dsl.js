(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_city_smartb_cccev_cccev_core_dsl = factory(typeof kotlin_city_smartb_cccev_cccev_core_dsl === 'undefined' ? {} : kotlin_city_smartb_cccev_cccev_core_dsl);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function Code() {
  }
  Code.$metadata$ = {
    simpleName: 'Code',
    kind: 'interface',
    interfaces: []
  };
  function EvidenceDTO() {
  }
  EvidenceDTO.$metadata$ = {
    simpleName: 'EvidenceDTO',
    kind: 'interface',
    interfaces: []
  };
  function EvidenceTypeList() {
  }
  EvidenceTypeList.$metadata$ = {
    simpleName: 'EvidenceTypeList',
    kind: 'interface',
    interfaces: []
  };
  function EvidenceType() {
  }
  EvidenceType.$metadata$ = {
    simpleName: 'EvidenceType',
    kind: 'interface',
    interfaces: []
  };
  function CoreLocationLocation() {
  }
  CoreLocationLocation.$metadata$ = {
    simpleName: 'CoreLocationLocation',
    kind: 'class',
    interfaces: []
  };
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
  PeriodOfTime.$metadata$ = {
    simpleName: 'PeriodOfTime',
    kind: 'class',
    interfaces: []
  };
  function InformationConcept() {
  }
  InformationConcept.$metadata$ = {
    simpleName: 'InformationConcept',
    kind: 'interface',
    interfaces: []
  };
  function SupportedValueDTO() {
  }
  SupportedValueDTO.$metadata$ = {
    simpleName: 'SupportedValueDTO',
    kind: 'interface',
    interfaces: []
  };
  function CUnitDTO() {
  }
  CUnitDTO.$metadata$ = {
    simpleName: 'CUnitDTO',
    kind: 'interface',
    interfaces: []
  };
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
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.EvidenceTypeList = EvidenceTypeList;
  _.$crossModule$.EvidenceType = EvidenceType;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_cccev_cccev_core_dsl.js.map
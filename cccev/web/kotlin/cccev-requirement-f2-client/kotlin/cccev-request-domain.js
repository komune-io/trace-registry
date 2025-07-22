(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './s2-s2-automate-dsl.js', './kotlin-kotlin-stdlib-js-ir.js', './f2-f2-dsl-cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./s2-s2-automate-dsl.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./f2-f2-dsl-cqrs.js'));
  else {
    if (typeof this['s2-s2-automate-dsl'] === 'undefined') {
      throw new Error("Error loading module 'cccev-request-domain'. Its dependency 's2-s2-automate-dsl' was not found. Please, check whether 's2-s2-automate-dsl' is loaded prior to 'cccev-request-domain'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cccev-request-domain'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cccev-request-domain'.");
    }
    if (typeof this['f2-f2-dsl-cqrs'] === 'undefined') {
      throw new Error("Error loading module 'cccev-request-domain'. Its dependency 'f2-f2-dsl-cqrs' was not found. Please, check whether 'f2-f2-dsl-cqrs' is loaded prior to 'cccev-request-domain'.");
    }
    root['cccev-request-domain'] = factory(typeof this['cccev-request-domain'] === 'undefined' ? {} : this['cccev-request-domain'], this['s2-s2-automate-dsl'], this['kotlin-kotlin-stdlib-js-ir'], this['f2-f2-dsl-cqrs']);
  }
}(this, function (_, kotlin_city_smartb_s2_s2_automate_dsl, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs) {
  'use strict';
  //region block: imports
  var S2Event = kotlin_city_smartb_s2_s2_automate_dsl.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var S2Command = kotlin_city_smartb_s2_s2_automate_dsl.$_$.a;
  var S2InitCommand = kotlin_city_smartb_s2_s2_automate_dsl.$_$.c;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.b;
  //endregion
  //region block: pre-declaration
  setMetadataFor(RequestEvent, 'RequestEvent', interfaceMeta, undefined, [S2Event], undefined, undefined, []);
  setMetadataFor(RequestCommand, 'RequestCommand', interfaceMeta, undefined, [S2Command], undefined, undefined, []);
  setMetadataFor(RequestAuditCommandDTO, 'RequestAuditCommandDTO', interfaceMeta, undefined, [RequestCommand], undefined, undefined, []);
  setMetadataFor(RequestAuditedEventDTO, 'RequestAuditedEventDTO', interfaceMeta, undefined, [RequestEvent], undefined, undefined, []);
  setMetadataFor(RequestEvidenceAddCommandDTO, 'RequestEvidenceAddCommandDTO', interfaceMeta, undefined, [RequestCommand], undefined, undefined, []);
  setMetadataFor(RequestEvidenceAddedEventDTO, 'RequestEvidenceAddedEventDTO', interfaceMeta, undefined, [RequestEvent], undefined, undefined, []);
  setMetadataFor(RequestEvidenceRemoveCommandDTO, 'RequestEvidenceRemoveCommandDTO', interfaceMeta, undefined, [RequestCommand], undefined, undefined, []);
  setMetadataFor(RequestEvidenceRemovedEventDTO, 'RequestEvidenceRemovedEventDTO', interfaceMeta, undefined, [RequestEvent], undefined, undefined, []);
  setMetadataFor(RequestInitCommandDTO, 'RequestInitCommandDTO', interfaceMeta, undefined, [S2InitCommand], undefined, undefined, []);
  setMetadataFor(RequestInitializedEventDTO, 'RequestInitializedEventDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(RequestRefuseCommandDTO, 'RequestRefuseCommandDTO', interfaceMeta, undefined, [RequestCommand], undefined, undefined, []);
  setMetadataFor(RequestRefusedEventDto, 'RequestRefusedEventDTO', interfaceMeta, undefined, [RequestEvent], undefined, undefined, []);
  setMetadataFor(RequestSendCommandDTO, 'RequestSendCommandDTO', interfaceMeta, undefined, [RequestCommand], undefined, undefined, []);
  setMetadataFor(RequestSentEventDto, 'RequestSentEventDTO', interfaceMeta, undefined, [RequestEvent], undefined, undefined, []);
  setMetadataFor(RequestSignCommandDTO, 'RequestSignCommandDTO', interfaceMeta, undefined, [RequestCommand], undefined, undefined, []);
  setMetadataFor(RequestSignedEventDto, 'RequestSignedEventDTO', interfaceMeta, undefined, [RequestEvent], undefined, undefined, []);
  setMetadataFor(RequestSupportedValueAddCommandDTO, 'RequestSupportedValueAddCommandDTO', interfaceMeta, undefined, [RequestCommand], undefined, undefined, []);
  setMetadataFor(RequestSupportedValueAddedEventDto, 'RequestSupportedValueAddedEventDTO', interfaceMeta, undefined, [RequestEvent], undefined, undefined, []);
  setMetadataFor(RequestDTO, 'RequestDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function RequestEvent() {
  }
  function RequestCommand() {
  }
  function RequestAuditCommandDTO() {
  }
  function RequestAuditedEventDTO() {
  }
  function RequestEvidenceAddCommandDTO() {
  }
  function RequestEvidenceAddedEventDTO() {
  }
  function RequestEvidenceRemoveCommandDTO() {
  }
  function RequestEvidenceRemovedEventDTO() {
  }
  function RequestInitCommandDTO() {
  }
  function RequestInitializedEventDTO() {
  }
  function RequestRefuseCommandDTO() {
  }
  function RequestRefusedEventDto() {
  }
  function RequestSendCommandDTO() {
  }
  function RequestSentEventDto() {
  }
  function RequestSignCommandDTO() {
  }
  function RequestSignedEventDto() {
  }
  function RequestSupportedValueAddCommandDTO() {
  }
  function RequestSupportedValueAddedEventDto() {
  }
  function RequestDTO() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$features = $cccev$s2$request$domain.features || ($cccev$s2$request$domain.features = {});
    var $cccev$s2$request$domain$features$command = $cccev$s2$request$domain$features.command || ($cccev$s2$request$domain$features.command = {});
    var $cccev = _.cccev || (_.cccev = {});
    var $cccev$s2 = $cccev.s2 || ($cccev.s2 = {});
    var $cccev$s2$request = $cccev$s2.request || ($cccev$s2.request = {});
    var $cccev$s2$request$domain = $cccev$s2$request.domain || ($cccev$s2$request.domain = {});
    var $cccev$s2$request$domain$model = $cccev$s2$request$domain.model || ($cccev$s2$request$domain.model = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=cccev-request-domain.js.map

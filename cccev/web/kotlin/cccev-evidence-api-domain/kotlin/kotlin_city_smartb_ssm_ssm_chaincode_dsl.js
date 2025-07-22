(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_f2_f2_dsl_cqrs.js', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'), require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_ssm_ssm_chaincode_dsl'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'kotlin_city_smartb_ssm_ssm_chaincode_dsl'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_ssm_ssm_chaincode_dsl'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_city_smartb_ssm_ssm_chaincode_dsl'.");
    }
    root.kotlin_city_smartb_ssm_ssm_chaincode_dsl = factory(typeof kotlin_city_smartb_ssm_ssm_chaincode_dsl === 'undefined' ? {} : kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_kotlin);
  }
}(this, function (_, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var Query = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.Query;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.Event;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var contentEquals = kotlin_kotlin.$crossModule$.contentEquals;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var contentHashCode = kotlin_kotlin.$crossModule$.contentHashCode;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var HashMap_init_$Create$ = kotlin_kotlin.$crossModule$.HashMap_init_$Create$;
  var toString_0 = kotlin_kotlin.$crossModule$.toString_1;
  var split$default = kotlin_kotlin.$crossModule$.split$default;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$;
  var first = kotlin_kotlin.$crossModule$.first;
  //endregion
  'use strict';
  //region block: pre-declaration
  EnvelopeType.prototype = Object.create(Enum.prototype);
  EnvelopeType.prototype.constructor = EnvelopeType;
  //endregion
  function SsmChaincodeQueries() {
  }
  SsmChaincodeQueries.$metadata$ = {
    simpleName: 'SsmChaincodeQueries',
    kind: 'interface',
    interfaces: []
  };
  function SsmQueryDTO() {
  }
  SsmQueryDTO.$metadata$ = {
    simpleName: 'SsmQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function SsmItemResultDTO() {
  }
  SsmItemResultDTO.$metadata$ = {
    simpleName: 'SsmItemResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function SsmItemsResultDTO() {
  }
  SsmItemsResultDTO.$metadata$ = {
    simpleName: 'SsmItemsResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function BlockDTO() {
  }
  BlockDTO.$metadata$ = {
    simpleName: 'BlockDTO',
    kind: 'interface',
    interfaces: []
  };
  function Block(blockId, previousHash, dataHash, transactions) {
    this.blockId_1 = blockId;
    this.previousHash_1 = previousHash;
    this.dataHash_1 = dataHash;
    this.transactions_1 = transactions;
  }
  Block.prototype._get_blockId__1461407113_o630y1_k$ = function () {
    return this.blockId_1;
  };
  Block.prototype._get_previousHash__3746588998_92hnei_k$ = function () {
    return this.previousHash_1;
  };
  Block.prototype._get_dataHash__1096661747_i4x9mb_k$ = function () {
    return this.dataHash_1;
  };
  Block.prototype._get_transactions__188093078_33zhjq_k$ = function () {
    return this.transactions_1;
  };
  Block.$metadata$ = {
    simpleName: 'Block',
    kind: 'class',
    interfaces: [BlockDTO]
  };
  Object.defineProperty(Block.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this._get_blockId__1461407113_o630y1_k$();
    }
  });
  Object.defineProperty(Block.prototype, 'previousHash', {
    configurable: true,
    get: function () {
      return this._get_previousHash__3746588998_92hnei_k$();
    }
  });
  Object.defineProperty(Block.prototype, 'dataHash', {
    configurable: true,
    get: function () {
      return this._get_dataHash__1096661747_i4x9mb_k$();
    }
  });
  Object.defineProperty(Block.prototype, 'transactions', {
    configurable: true,
    get: function () {
      return this._get_transactions__188093078_33zhjq_k$();
    }
  });
  var EnvelopeType_TRANSACTION_ENVELOPE_instance;
  var EnvelopeType_ENVELOPE_instance;
  function values() {
    return [EnvelopeType_TRANSACTION_ENVELOPE_getInstance(), EnvelopeType_ENVELOPE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'TRANSACTION_ENVELOPE':
        return EnvelopeType_TRANSACTION_ENVELOPE_getInstance();
      case 'ENVELOPE':
        return EnvelopeType_ENVELOPE_getInstance();
      default:
        EnvelopeType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var EnvelopeType_entriesInitialized;
  function EnvelopeType_initEntries() {
    if (EnvelopeType_entriesInitialized)
      return Unit_getInstance();
    EnvelopeType_entriesInitialized = true;
    EnvelopeType_TRANSACTION_ENVELOPE_instance = new EnvelopeType('TRANSACTION_ENVELOPE', 0);
    EnvelopeType_ENVELOPE_instance = new EnvelopeType('ENVELOPE', 1);
  }
  function EnvelopeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  EnvelopeType.$metadata$ = {
    simpleName: 'EnvelopeType',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(EnvelopeType.prototype, 'name', {
    configurable: true,
    get: EnvelopeType.prototype._get_name__804168992_das4rk_k$
  });
  Object.defineProperty(EnvelopeType.prototype, 'ordinal', {
    configurable: true,
    get: EnvelopeType.prototype._get_ordinal__3363892928_fec5kw_k$
  });
  function EnvelopeType_TRANSACTION_ENVELOPE_getInstance() {
    EnvelopeType_initEntries();
    return EnvelopeType_TRANSACTION_ENVELOPE_instance;
  }
  function EnvelopeType_ENVELOPE_getInstance() {
    EnvelopeType_initEntries();
    return EnvelopeType_ENVELOPE_instance;
  }
  function IdentitiesInfoDTO() {
  }
  IdentitiesInfoDTO.$metadata$ = {
    simpleName: 'IdentitiesInfoDTO',
    kind: 'interface',
    interfaces: []
  };
  function IdentitiesInfo(id, mspid) {
    this.id_1 = id;
    this.mspid_1 = mspid;
  }
  IdentitiesInfo.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  IdentitiesInfo.prototype._get_mspid__3442490956_e3jiyc_k$ = function () {
    return this.mspid_1;
  };
  IdentitiesInfo.$metadata$ = {
    simpleName: 'IdentitiesInfo',
    kind: 'class',
    interfaces: [IdentitiesInfoDTO]
  };
  Object.defineProperty(IdentitiesInfo.prototype, 'id', {
    configurable: true,
    get: function () {
      return this._get_id__1413120976_ndc34g_k$();
    }
  });
  Object.defineProperty(IdentitiesInfo.prototype, 'mspid', {
    configurable: true,
    get: function () {
      return this._get_mspid__3442490956_e3jiyc_k$();
    }
  });
  function TransactionDTO() {
  }
  TransactionDTO.$metadata$ = {
    simpleName: 'TransactionDTO',
    kind: 'interface',
    interfaces: []
  };
  function Transaction(transactionId, blockId, timestamp, isValid, channelId, creator, nonce, type, validationCode) {
    this.transactionId_1 = transactionId;
    this.blockId_1 = blockId;
    this.timestamp_1 = timestamp;
    this.isValid_1 = isValid;
    this.channelId_1 = channelId;
    this.creator_1 = creator;
    this.nonce_1 = nonce;
    this.type_1 = type;
    this.validationCode_1 = validationCode;
  }
  Transaction.prototype._get_transactionId__1535879000_pef7tk_k$ = function () {
    return this.transactionId_1;
  };
  Transaction.prototype._get_blockId__1461407113_o630y1_k$ = function () {
    return this.blockId_1;
  };
  Transaction.prototype._get_timestamp__401140731_6mtu63_k$ = function () {
    return this.timestamp_1;
  };
  Transaction.prototype._get_isValid__1976220767_wol9pb_k$ = function () {
    return this.isValid_1;
  };
  Transaction.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.channelId_1;
  };
  Transaction.prototype._get_creator__3946438757_5ri6cb_k$ = function () {
    return this.creator_1;
  };
  Transaction.prototype._get_nonce__3467360706_doqhby_k$ = function () {
    return this.nonce_1;
  };
  Transaction.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  Transaction.prototype._get_validationCode__3303709893_ge633v_k$ = function () {
    return this.validationCode_1;
  };
  Transaction.$metadata$ = {
    simpleName: 'Transaction',
    kind: 'class',
    interfaces: [TransactionDTO]
  };
  Object.defineProperty(Transaction.prototype, 'transactionId', {
    configurable: true,
    get: function () {
      return this._get_transactionId__1535879000_pef7tk_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this._get_blockId__1461407113_o630y1_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'timestamp', {
    configurable: true,
    get: function () {
      return this._get_timestamp__401140731_6mtu63_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'isValid', {
    configurable: true,
    get: function () {
      return this._get_isValid__1976220767_wol9pb_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this._get_channelId__1056362643_hgximr_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'creator', {
    configurable: true,
    get: function () {
      return this._get_creator__3946438757_5ri6cb_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'nonce', {
    configurable: true,
    get: function () {
      return this._get_nonce__3467360706_doqhby_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'type', {
    configurable: true,
    get: function () {
      return this._get_type__810427985_deia8h_k$();
    }
  });
  Object.defineProperty(Transaction.prototype, 'validationCode', {
    configurable: true,
    get: function () {
      return this._get_validationCode__3303709893_ge633v_k$();
    }
  });
  function SsmChaincodePropertiesDTO() {
  }
  SsmChaincodePropertiesDTO.$metadata$ = {
    simpleName: 'SsmChaincodePropertiesDTO',
    kind: 'interface',
    interfaces: []
  };
  function ChaincodeSsmConfig(url) {
    this.url_1 = url;
  }
  ChaincodeSsmConfig.prototype._get_url__857449730_e6i4g2_k$ = function () {
    return this.url_1;
  };
  ChaincodeSsmConfig.$metadata$ = {
    simpleName: 'ChaincodeSsmConfig',
    kind: 'class',
    interfaces: [SsmChaincodePropertiesDTO]
  };
  Object.defineProperty(ChaincodeSsmConfig.prototype, 'url', {
    configurable: true,
    get: function () {
      return this._get_url__857449730_e6i4g2_k$();
    }
  });
  function SsmAgentDTO() {
  }
  SsmAgentDTO.$metadata$ = {
    simpleName: 'SsmAgentDTO',
    kind: 'interface',
    interfaces: []
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SsmAgent(name, pub) {
    Companion_getInstance();
    this.name_1 = name;
    this.pub_1 = pub;
  }
  SsmAgent.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  SsmAgent.prototype._get_pub__857303348_e6ezhw_k$ = function () {
    return this.pub_1;
  };
  SsmAgent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof SsmAgent)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this.name_1 === other.name_1))
      return false;
    if (!contentEquals(this.pub_1, other.pub_1))
      return false;
    return true;
  };
  SsmAgent.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(31, result) + contentHashCode(this.pub_1) | 0;
    return result;
  };
  SsmAgent.prototype.component1 = function () {
    return this.name_1;
  };
  SsmAgent.prototype.component2 = function () {
    return this.pub_1;
  };
  SsmAgent.prototype.copy = function (name, pub) {
    return this.copy_2r30en_k$(name === void 1 ? this.name_1 : name, pub === void 1 ? this.pub_1 : pub);
  };
  SsmAgent.prototype.copy_2r30en_k$ = function (name, pub) {
    return new SsmAgent(name, pub);
  };
  SsmAgent.prototype.copy$default_moep0o_k$ = function (name, pub, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      pub = this.pub_1;
    return this.copy_2r30en_k$(name, pub);
  };
  SsmAgent.prototype.toString = function () {
    return 'Agent(name=' + this.name_1 + ', pub=' + toString(this.pub_1) + ')';
  };
  SsmAgent.$metadata$ = {
    simpleName: 'Agent',
    kind: 'class',
    interfaces: [SsmAgentDTO]
  };
  Object.defineProperty(SsmAgent.prototype, 'name', {
    configurable: true,
    get: function () {
      return this._get_name__804168992_das4rk_k$();
    }
  });
  Object.defineProperty(SsmAgent.prototype, 'pub', {
    configurable: true,
    get: function () {
      return this._get_pub__857303348_e6ezhw_k$();
    }
  });
  function ChaincodeDTO() {
  }
  ChaincodeDTO.$metadata$ = {
    simpleName: 'ChaincodeDTO',
    kind: 'interface',
    interfaces: []
  };
  function Chaincode(id, channelId) {
    this.id_1 = id;
    this.channelId_1 = channelId;
  }
  Chaincode.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  Chaincode.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.channelId_1;
  };
  Chaincode.prototype.component1 = function () {
    return this.id_1;
  };
  Chaincode.prototype.component2 = function () {
    return this.channelId_1;
  };
  Chaincode.prototype.copy = function (id, channelId) {
    return this.copy_jxa1ir_k$(id === void 1 ? this.id_1 : id, channelId === void 1 ? this.channelId_1 : channelId);
  };
  Chaincode.prototype.copy_jxa1ir_k$ = function (id, channelId) {
    return new Chaincode(id, channelId);
  };
  Chaincode.prototype.copy$default_jej4nk_k$ = function (id, channelId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.id_1;
    if (!(($mask0 & 2) === 0))
      channelId = this.channelId_1;
    return this.copy_jxa1ir_k$(id, channelId);
  };
  Chaincode.prototype.toString = function () {
    return 'Chaincode(id=' + this.id_1 + ', channelId=' + this.channelId_1 + ')';
  };
  Chaincode.prototype.hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.channelId_1) | 0;
    return result;
  };
  Chaincode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Chaincode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Chaincode ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.channelId_1 === tmp0_other_with_cast.channelId_1))
      return false;
    return true;
  };
  Chaincode.$metadata$ = {
    simpleName: 'Chaincode',
    kind: 'class',
    interfaces: [ChaincodeDTO]
  };
  Object.defineProperty(Chaincode.prototype, 'id', {
    configurable: true,
    get: function () {
      return this._get_id__1413120976_ndc34g_k$();
    }
  });
  Object.defineProperty(Chaincode.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this._get_channelId__1056362643_hgximr_k$();
    }
  });
  function SsmDTO() {
  }
  SsmDTO.$metadata$ = {
    simpleName: 'SsmDTO',
    kind: 'interface',
    interfaces: []
  };
  function Ssm(name, transitions) {
    this.name_1 = name;
    this.transitions_1 = transitions;
  }
  Ssm.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  Ssm.prototype._get_transitions__2595107731_s41w19_k$ = function () {
    return this.transitions_1;
  };
  Ssm.prototype.component1 = function () {
    return this.name_1;
  };
  Ssm.prototype.component2 = function () {
    return this.transitions_1;
  };
  Ssm.prototype.copy = function (name, transitions) {
    return this.copy_8ohflo_k$(name === void 1 ? this.name_1 : name, transitions === void 1 ? this.transitions_1 : transitions);
  };
  Ssm.prototype.copy_8ohflo_k$ = function (name, transitions) {
    return new Ssm(name, transitions);
  };
  Ssm.prototype.copy$default_cmpq8p_k$ = function (name, transitions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      transitions = this.transitions_1;
    return this.copy_8ohflo_k$(name, transitions);
  };
  Ssm.prototype.toString = function () {
    return 'Ssm(name=' + this.name_1 + ', transitions=' + this.transitions_1 + ')';
  };
  Ssm.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.transitions_1) | 0;
    return result;
  };
  Ssm.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ssm))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Ssm ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.transitions_1, tmp0_other_with_cast.transitions_1))
      return false;
    return true;
  };
  Ssm.$metadata$ = {
    simpleName: 'Ssm',
    kind: 'class',
    interfaces: [SsmDTO]
  };
  Object.defineProperty(Ssm.prototype, 'name', {
    configurable: true,
    get: function () {
      return this._get_name__804168992_das4rk_k$();
    }
  });
  Object.defineProperty(Ssm.prototype, 'transitions', {
    configurable: true,
    get: function () {
      return this._get_transitions__2595107731_s41w19_k$();
    }
  });
  function SsmContextDTO() {
  }
  SsmContextDTO.$metadata$ = {
    simpleName: 'SsmContextDTO',
    kind: 'interface',
    interfaces: [WithPrivate]
  };
  function SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      private_0 = null;
    SsmContext.call($this, session, public_0, iteration, private_0);
    return $this;
  }
  function SsmContext_init_$Create$(session, public_0, iteration, private_0, $mask0, $marker) {
    return SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, Object.create(SsmContext.prototype));
  }
  function SsmContext(session, public_0, iteration, private_0) {
    var private_1 = private_0 === void 1 ? null : private_0;
    this.session_1 = session;
    this.public_1 = public_0;
    this.iteration_1 = iteration;
    this.private_1 = private_1;
  }
  SsmContext.prototype._get_session__3531090747_cmsix1_k$ = function () {
    return this.session_1;
  };
  SsmContext.prototype._get_public__2049972674_xwi11e_k$ = function () {
    return this.public_1;
  };
  SsmContext.prototype._get_iteration__1235607316_kfncpg_k$ = function () {
    return this.iteration_1;
  };
  SsmContext.prototype._get_private__966518254_fzfu9a_k$ = function () {
    return this.private_1;
  };
  SsmContext.prototype.component1 = function () {
    return this.session_1;
  };
  SsmContext.prototype.component2 = function () {
    return this.public_1;
  };
  SsmContext.prototype.component3 = function () {
    return this.iteration_1;
  };
  SsmContext.prototype.component4 = function () {
    return this.private_1;
  };
  SsmContext.prototype.copy = function (session, public_0, iteration, private_0) {
    return this.copy_4uoklv_k$(session === void 1 ? this.session_1 : session, public_0 === void 1 ? this.public_1 : public_0, iteration === void 1 ? this.iteration_1 : iteration, private_0 === void 1 ? this.private_1 : private_0);
  };
  SsmContext.prototype.copy_4uoklv_k$ = function (session, public_0, iteration, private_0) {
    return new SsmContext(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.copy$default_50gfzq_k$ = function (session, public_0, iteration, private_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      session = this.session_1;
    if (!(($mask0 & 2) === 0))
      public_0 = this.public_1;
    if (!(($mask0 & 4) === 0))
      iteration = this.iteration_1;
    if (!(($mask0 & 8) === 0))
      private_0 = this.private_1;
    return this.copy_4uoklv_k$(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.toString = function () {
    return 'SsmContext(session=' + this.session_1 + ', public=' + this.public_1 + ', iteration=' + this.iteration_1 + ', private=' + this.private_1 + ')';
  };
  SsmContext.prototype.hashCode = function () {
    var result = getStringHashCode(this.session_1);
    result = imul(result, 31) + getStringHashCode(this.public_1) | 0;
    result = imul(result, 31) + this.iteration_1 | 0;
    result = imul(result, 31) + (this.private_1 == null ? 0 : hashCode(this.private_1)) | 0;
    return result;
  };
  SsmContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmContext))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmContext ? other : THROW_CCE();
    if (!(this.session_1 === tmp0_other_with_cast.session_1))
      return false;
    if (!(this.public_1 === tmp0_other_with_cast.public_1))
      return false;
    if (!(this.iteration_1 === tmp0_other_with_cast.iteration_1))
      return false;
    if (!equals(this.private_1, tmp0_other_with_cast.private_1))
      return false;
    return true;
  };
  SsmContext.$metadata$ = {
    simpleName: 'SsmContext',
    kind: 'class',
    interfaces: [SsmContextDTO]
  };
  Object.defineProperty(SsmContext.prototype, 'session', {
    configurable: true,
    get: function () {
      return this._get_session__3531090747_cmsix1_k$();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'public', {
    configurable: true,
    get: function () {
      return this._get_public__2049972674_xwi11e_k$();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this._get_iteration__1235607316_kfncpg_k$();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'private', {
    configurable: true,
    get: function () {
      return this._get_private__966518254_fzfu9a_k$();
    }
  });
  function SsmGrantDTO() {
  }
  SsmGrantDTO.$metadata$ = {
    simpleName: 'SsmGrantDTO',
    kind: 'interface',
    interfaces: []
  };
  function SsmGrant(user, iteration, credits) {
    this.user_1 = user;
    this.iteration_1 = iteration;
    this.credits_1 = credits;
  }
  SsmGrant.prototype._get_user__811162592_dey128_k$ = function () {
    return this.user_1;
  };
  SsmGrant.prototype._get_iteration__1235607316_kfncpg_k$ = function () {
    return this.iteration_1;
  };
  SsmGrant.prototype._get_credits__3948886455_5q1pop_k$ = function () {
    return this.credits_1;
  };
  SsmGrant.prototype.component1 = function () {
    return this.user_1;
  };
  SsmGrant.prototype.component2 = function () {
    return this.iteration_1;
  };
  SsmGrant.prototype.component3 = function () {
    return this.credits_1;
  };
  SsmGrant.prototype.copy = function (user, iteration, credits) {
    return this.copy_aa6q6b_k$(user === void 1 ? this.user_1 : user, iteration === void 1 ? this.iteration_1 : iteration, credits === void 1 ? this.credits_1 : credits);
  };
  SsmGrant.prototype.copy_aa6q6b_k$ = function (user, iteration, credits) {
    return new SsmGrant(user, iteration, credits);
  };
  SsmGrant.prototype.copy$default_g2xb0a_k$ = function (user, iteration, credits, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      user = this.user_1;
    if (!(($mask0 & 2) === 0))
      iteration = this.iteration_1;
    if (!(($mask0 & 4) === 0))
      credits = this.credits_1;
    return this.copy_aa6q6b_k$(user, iteration, credits);
  };
  SsmGrant.prototype.toString = function () {
    return 'SsmGrant(user=' + this.user_1 + ', iteration=' + this.iteration_1 + ', credits=' + this.credits_1 + ')';
  };
  SsmGrant.prototype.hashCode = function () {
    var result = getStringHashCode(this.user_1);
    result = imul(result, 31) + this.iteration_1 | 0;
    result = imul(result, 31) + hashCode(this.credits_1) | 0;
    return result;
  };
  SsmGrant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGrant))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGrant ? other : THROW_CCE();
    if (!(this.user_1 === tmp0_other_with_cast.user_1))
      return false;
    if (!(this.iteration_1 === tmp0_other_with_cast.iteration_1))
      return false;
    if (!equals(this.credits_1, tmp0_other_with_cast.credits_1))
      return false;
    return true;
  };
  SsmGrant.$metadata$ = {
    simpleName: 'SsmGrant',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGrant.prototype, 'user', {
    configurable: true,
    get: SsmGrant.prototype._get_user__811162592_dey128_k$
  });
  Object.defineProperty(SsmGrant.prototype, 'iteration', {
    configurable: true,
    get: SsmGrant.prototype._get_iteration__1235607316_kfncpg_k$
  });
  Object.defineProperty(SsmGrant.prototype, 'credits', {
    configurable: true,
    get: SsmGrant.prototype._get_credits__3948886455_5q1pop_k$
  });
  function CreditDTO() {
  }
  CreditDTO.$metadata$ = {
    simpleName: 'CreditDTO',
    kind: 'interface',
    interfaces: []
  };
  function Credit(amount) {
    this.amount_1 = amount;
  }
  Credit.prototype._get_amount__1405565363_n8u56b_k$ = function () {
    return this.amount_1;
  };
  Credit.prototype.component1 = function () {
    return this.amount_1;
  };
  Credit.prototype.copy = function (amount) {
    return this.copy_u8zkvg_k$(amount === void 1 ? this.amount_1 : amount);
  };
  Credit.prototype.copy_u8zkvg_k$ = function (amount) {
    return new Credit(amount);
  };
  Credit.prototype.copy$default_pqo5jh_k$ = function (amount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      amount = this.amount_1;
    return this.copy_u8zkvg_k$(amount);
  };
  Credit.prototype.toString = function () {
    return 'Credit(amount=' + this.amount_1 + ')';
  };
  Credit.prototype.hashCode = function () {
    return this.amount_1;
  };
  Credit.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Credit))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Credit ? other : THROW_CCE();
    if (!(this.amount_1 === tmp0_other_with_cast.amount_1))
      return false;
    return true;
  };
  Credit.$metadata$ = {
    simpleName: 'Credit',
    kind: 'class',
    interfaces: [CreditDTO]
  };
  Object.defineProperty(Credit.prototype, 'amount', {
    configurable: true,
    get: function () {
      return this._get_amount__1405565363_n8u56b_k$();
    }
  });
  function SsmSessionDTO() {
  }
  SsmSessionDTO.$metadata$ = {
    simpleName: 'SsmSessionDTO',
    kind: 'interface',
    interfaces: [WithPrivate]
  };
  function SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      private_0 = tmp$ret$0;
    }
    SsmSession.call($this, ssm, session, roles, public_0, private_0);
    return $this;
  }
  function SsmSession_init_$Create$(ssm, session, roles, public_0, private_0, $mask0, $marker) {
    return SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, Object.create(SsmSession.prototype));
  }
  function SsmSession(ssm, session, roles, public_0, private_0) {
    var tmp;
    if (private_0 === void 1) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this.ssm_1 = ssm;
    this.session_1 = session;
    this.roles_1 = roles;
    this.public_1 = public_0;
    this.private_1 = private_1;
  }
  SsmSession.prototype._get_ssm__857391140_e6gv8k_k$ = function () {
    return this.ssm_1;
  };
  SsmSession.prototype._get_session__3531090747_cmsix1_k$ = function () {
    return this.session_1;
  };
  SsmSession.prototype._get_roles__3581820084_bsl7ws_k$ = function () {
    return this.roles_1;
  };
  SsmSession.prototype._get_public__2049972674_xwi11e_k$ = function () {
    return this.public_1;
  };
  SsmSession.prototype._get_private__966518254_fzfu9a_k$ = function () {
    return this.private_1;
  };
  SsmSession.$metadata$ = {
    simpleName: 'SsmSession',
    kind: 'class',
    interfaces: [SsmSessionDTO]
  };
  Object.defineProperty(SsmSession.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this._get_ssm__857391140_e6gv8k_k$();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'session', {
    configurable: true,
    get: function () {
      return this._get_session__3531090747_cmsix1_k$();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this._get_roles__3581820084_bsl7ws_k$();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'public', {
    configurable: true,
    get: function () {
      return this._get_public__2049972674_xwi11e_k$();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'private', {
    configurable: true,
    get: function () {
      return this._get_private__966518254_fzfu9a_k$();
    }
  });
  function SsmSessionStateDTO() {
  }
  SsmSessionStateDTO.$metadata$ = {
    simpleName: 'SsmSessionStateDTO',
    kind: 'interface',
    interfaces: [SsmSessionDTO, WithPrivate]
  };
  function SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      private_0 = tmp$ret$0;
    }
    SsmSessionState.call($this, ssm, session, roles, public_0, private_0, origin, current, iteration);
    return $this;
  }
  function SsmSessionState_init_$Create$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker) {
    return SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, Object.create(SsmSessionState.prototype));
  }
  function SsmSessionState(ssm, session, roles, public_0, private_0, origin, current, iteration) {
    var tmp;
    if (private_0 === void 1) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this.ssm_1 = ssm;
    this.session_1 = session;
    this.roles_1 = roles;
    this.public_1 = public_0;
    this.private_1 = private_1;
    this.origin_1 = origin;
    this.current_1 = current;
    this.iteration_1 = iteration;
  }
  SsmSessionState.prototype._get_ssm__857391140_e6gv8k_k$ = function () {
    return this.ssm_1;
  };
  SsmSessionState.prototype._get_session__3531090747_cmsix1_k$ = function () {
    return this.session_1;
  };
  SsmSessionState.prototype._get_roles__3581820084_bsl7ws_k$ = function () {
    return this.roles_1;
  };
  SsmSessionState.prototype._get_public__2049972674_xwi11e_k$ = function () {
    return this.public_1;
  };
  SsmSessionState.prototype._get_private__966518254_fzfu9a_k$ = function () {
    return this.private_1;
  };
  SsmSessionState.prototype._get_origin__1082897573_hwq945_k$ = function () {
    return this.origin_1;
  };
  SsmSessionState.prototype._get_current__2701413560_qcrdxk_k$ = function () {
    return this.current_1;
  };
  SsmSessionState.prototype._get_iteration__1235607316_kfncpg_k$ = function () {
    return this.iteration_1;
  };
  SsmSessionState.prototype.component1 = function () {
    return this.ssm_1;
  };
  SsmSessionState.prototype.component2 = function () {
    return this.session_1;
  };
  SsmSessionState.prototype.component3 = function () {
    return this.roles_1;
  };
  SsmSessionState.prototype.component4 = function () {
    return this.public_1;
  };
  SsmSessionState.prototype.component5 = function () {
    return this.private_1;
  };
  SsmSessionState.prototype.component6 = function () {
    return this.origin_1;
  };
  SsmSessionState.prototype.component7 = function () {
    return this.current_1;
  };
  SsmSessionState.prototype.component8 = function () {
    return this.iteration_1;
  };
  SsmSessionState.prototype.copy = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return this.copy_153jfu_k$(ssm === void 1 ? this.ssm_1 : ssm, session === void 1 ? this.session_1 : session, roles === void 1 ? this.roles_1 : roles, public_0 === void 1 ? this.public_1 : public_0, private_0 === void 1 ? this.private_1 : private_0, origin === void 1 ? this.origin_1 : origin, current === void 1 ? this.current_1 : current, iteration === void 1 ? this.iteration_1 : iteration);
  };
  SsmSessionState.prototype.copy_153jfu_k$ = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return new SsmSessionState(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.copy$default_qgqxnk_k$ = function (ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssm = this.ssm_1;
    if (!(($mask0 & 2) === 0))
      session = this.session_1;
    if (!(($mask0 & 4) === 0))
      roles = this.roles_1;
    if (!(($mask0 & 8) === 0))
      public_0 = this.public_1;
    if (!(($mask0 & 16) === 0))
      private_0 = this.private_1;
    if (!(($mask0 & 32) === 0))
      origin = this.origin_1;
    if (!(($mask0 & 64) === 0))
      current = this.current_1;
    if (!(($mask0 & 128) === 0))
      iteration = this.iteration_1;
    return this.copy_153jfu_k$(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.toString = function () {
    return 'SsmSessionState(ssm=' + this.ssm_1 + ', session=' + this.session_1 + ', roles=' + this.roles_1 + ', public=' + toString_0(this.public_1) + ', private=' + this.private_1 + ', origin=' + this.origin_1 + ', current=' + this.current_1 + ', iteration=' + this.iteration_1 + ')';
  };
  SsmSessionState.prototype.hashCode = function () {
    var result = this.ssm_1 == null ? 0 : getStringHashCode(this.ssm_1);
    result = imul(result, 31) + getStringHashCode(this.session_1) | 0;
    result = imul(result, 31) + (this.roles_1 == null ? 0 : hashCode(this.roles_1)) | 0;
    result = imul(result, 31) + (this.public_1 == null ? 0 : hashCode(this.public_1)) | 0;
    result = imul(result, 31) + (this.private_1 == null ? 0 : hashCode(this.private_1)) | 0;
    result = imul(result, 31) + (this.origin_1 == null ? 0 : this.origin_1.hashCode()) | 0;
    result = imul(result, 31) + this.current_1 | 0;
    result = imul(result, 31) + this.iteration_1 | 0;
    return result;
  };
  SsmSessionState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionState))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmSessionState ? other : THROW_CCE();
    if (!(this.ssm_1 == tmp0_other_with_cast.ssm_1))
      return false;
    if (!(this.session_1 === tmp0_other_with_cast.session_1))
      return false;
    if (!equals(this.roles_1, tmp0_other_with_cast.roles_1))
      return false;
    if (!equals(this.public_1, tmp0_other_with_cast.public_1))
      return false;
    if (!equals(this.private_1, tmp0_other_with_cast.private_1))
      return false;
    if (!equals(this.origin_1, tmp0_other_with_cast.origin_1))
      return false;
    if (!(this.current_1 === tmp0_other_with_cast.current_1))
      return false;
    if (!(this.iteration_1 === tmp0_other_with_cast.iteration_1))
      return false;
    return true;
  };
  SsmSessionState.$metadata$ = {
    simpleName: 'SsmSessionState',
    kind: 'class',
    interfaces: [SsmSessionStateDTO]
  };
  Object.defineProperty(SsmSessionState.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this._get_ssm__857391140_e6gv8k_k$();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'session', {
    configurable: true,
    get: function () {
      return this._get_session__3531090747_cmsix1_k$();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this._get_roles__3581820084_bsl7ws_k$();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'public', {
    configurable: true,
    get: function () {
      return this._get_public__2049972674_xwi11e_k$();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'private', {
    configurable: true,
    get: function () {
      return this._get_private__966518254_fzfu9a_k$();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'origin', {
    configurable: true,
    get: function () {
      return this._get_origin__1082897573_hwq945_k$();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'current', {
    configurable: true,
    get: function () {
      return this._get_current__2701413560_qcrdxk_k$();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this._get_iteration__1235607316_kfncpg_k$();
    }
  });
  function SsmSessionStateLogDTO() {
  }
  SsmSessionStateLogDTO.$metadata$ = {
    simpleName: 'SsmSessionStateLogDTO',
    kind: 'interface',
    interfaces: []
  };
  function SsmSessionStateLog(txId, state) {
    this.txId_1 = txId;
    this.state_1 = state;
  }
  SsmSessionStateLog.prototype._get_txId__810360684_degub0_k$ = function () {
    return this.txId_1;
  };
  SsmSessionStateLog.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  SsmSessionStateLog.prototype.component1 = function () {
    return this.txId_1;
  };
  SsmSessionStateLog.prototype.component2 = function () {
    return this.state_1;
  };
  SsmSessionStateLog.prototype.copy = function (txId, state) {
    return this.copy_48zgue_k$(txId === void 1 ? this.txId_1 : txId, state === void 1 ? this.state_1 : state);
  };
  SsmSessionStateLog.prototype.copy_48zgue_k$ = function (txId, state) {
    return new SsmSessionStateLog(txId, state);
  };
  SsmSessionStateLog.prototype.copy$default_1mma6b_k$ = function (txId, state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      txId = this.txId_1;
    if (!(($mask0 & 2) === 0))
      state = this.state_1;
    return this.copy_48zgue_k$(txId, state);
  };
  SsmSessionStateLog.prototype.toString = function () {
    return 'SsmSessionStateLog(txId=' + this.txId_1 + ', state=' + this.state_1 + ')';
  };
  SsmSessionStateLog.prototype.hashCode = function () {
    var result = getStringHashCode(this.txId_1);
    result = imul(result, 31) + this.state_1.hashCode() | 0;
    return result;
  };
  SsmSessionStateLog.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionStateLog))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmSessionStateLog ? other : THROW_CCE();
    if (!(this.txId_1 === tmp0_other_with_cast.txId_1))
      return false;
    if (!this.state_1.equals(tmp0_other_with_cast.state_1))
      return false;
    return true;
  };
  SsmSessionStateLog.$metadata$ = {
    simpleName: 'SsmSessionStateLog',
    kind: 'class',
    interfaces: [SsmSessionStateLogDTO]
  };
  Object.defineProperty(SsmSessionStateLog.prototype, 'txId', {
    configurable: true,
    get: function () {
      return this._get_txId__810360684_degub0_k$();
    }
  });
  Object.defineProperty(SsmSessionStateLog.prototype, 'state', {
    configurable: true,
    get: function () {
      return this._get_state__3614753120_b8zcm8_k$();
    }
  });
  function SsmTransitionDTO() {
  }
  SsmTransitionDTO.$metadata$ = {
    simpleName: 'SsmTransitionDTO',
    kind: 'interface',
    interfaces: []
  };
  function SsmTransition(from, to, role, action) {
    this.from_1 = from;
    this.to_1 = to;
    this.role_1 = role;
    this.action_1 = action;
  }
  SsmTransition.prototype._get_from__797289441_d6oogx_k$ = function () {
    return this.from_1;
  };
  SsmTransition.prototype._get_to__1413131888_ndcbjk_k$ = function () {
    return this.to_1;
  };
  SsmTransition.prototype._get_role__808279189_dd887p_k$ = function () {
    return this.role_1;
  };
  SsmTransition.prototype._get_action__1123534741_ikx8yd_k$ = function () {
    return this.action_1;
  };
  SsmTransition.prototype.component1 = function () {
    return this.from_1;
  };
  SsmTransition.prototype.component2 = function () {
    return this.to_1;
  };
  SsmTransition.prototype.component3 = function () {
    return this.role_1;
  };
  SsmTransition.prototype.component4 = function () {
    return this.action_1;
  };
  SsmTransition.prototype.copy = function (from, to, role, action) {
    return this.copy_8azb59_k$(from === void 1 ? this.from_1 : from, to === void 1 ? this.to_1 : to, role === void 1 ? this.role_1 : role, action === void 1 ? this.action_1 : action);
  };
  SsmTransition.prototype.copy_8azb59_k$ = function (from, to, role, action) {
    return new SsmTransition(from, to, role, action);
  };
  SsmTransition.prototype.copy$default_ndmk34_k$ = function (from, to, role, action, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = this.from_1;
    if (!(($mask0 & 2) === 0))
      to = this.to_1;
    if (!(($mask0 & 4) === 0))
      role = this.role_1;
    if (!(($mask0 & 8) === 0))
      action = this.action_1;
    return this.copy_8azb59_k$(from, to, role, action);
  };
  SsmTransition.prototype.toString = function () {
    return 'SsmTransition(from=' + this.from_1 + ', to=' + this.to_1 + ', role=' + this.role_1 + ', action=' + this.action_1 + ')';
  };
  SsmTransition.prototype.hashCode = function () {
    var result = this.from_1;
    result = imul(result, 31) + this.to_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.role_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.action_1) | 0;
    return result;
  };
  SsmTransition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmTransition))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmTransition ? other : THROW_CCE();
    if (!(this.from_1 === tmp0_other_with_cast.from_1))
      return false;
    if (!(this.to_1 === tmp0_other_with_cast.to_1))
      return false;
    if (!(this.role_1 === tmp0_other_with_cast.role_1))
      return false;
    if (!(this.action_1 === tmp0_other_with_cast.action_1))
      return false;
    return true;
  };
  SsmTransition.$metadata$ = {
    simpleName: 'SsmTransition',
    kind: 'class',
    interfaces: [SsmTransitionDTO]
  };
  Object.defineProperty(SsmTransition.prototype, 'from', {
    configurable: true,
    get: function () {
      return this._get_from__797289441_d6oogx_k$();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this._get_to__1413131888_ndcbjk_k$();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this._get_role__808279189_dd887p_k$();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this._get_action__1123534741_ikx8yd_k$();
    }
  });
  function WithPrivate() {
  }
  WithPrivate.$metadata$ = {
    simpleName: 'WithPrivate',
    kind: 'interface',
    interfaces: []
  };
  function ChaincodeUriDTO() {
  }
  ChaincodeUriDTO.$metadata$ = {
    simpleName: 'ChaincodeUriDTO',
    kind: 'interface',
    interfaces: []
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.PARTS_1 = 3;
    this.PREFIX_1 = 'chaincode';
  }
  Companion_0.prototype._get_PARTS__2565155089_slvvn3_k$ = function () {
    return this.PARTS_1;
  };
  Companion_0.prototype._get_PREFIX__2684660409_qmqgqv_k$ = function () {
    return this.PREFIX_1;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_0.prototype, 'PARTS', {
    configurable: true,
    get: Companion_0.prototype._get_PARTS__2565155089_slvvn3_k$
  });
  Object.defineProperty(Companion_0.prototype, 'PREFIX', {
    configurable: true,
    get: Companion_0.prototype._get_PREFIX__2684660409_qmqgqv_k$
  });
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ChaincodeUri(uri) {
    Companion_getInstance_0();
    this.uri_1 = uri;
    var tmp = this;
    tmp.burst_1 = split$default(this.uri_1, [':'], false, 0, 6, null);
    {
      var tmp_0 = this.burst_1._get_size__809037418_ddoh9m_k$();
      Companion_getInstance_0();
      var tmp0_require_0 = tmp_0 === 3;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_1_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1));
        }
      }
    }
    {
      var tmp_1 = first(this.burst_1);
      Companion_getInstance_0();
      var tmp1_require_0 = tmp_1 === 'chaincode';
      {
      }
      {
        {
        }
        if (!tmp1_require_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Failed requirement.';
            break $l$block_0;
          }
          var message_1_1_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1_0));
        }
      }
    }
  }
  ChaincodeUri.prototype._get_uri__857449637_e6i4dh_k$ = function () {
    return this.uri_1;
  };
  ChaincodeUri.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.burst_1.get_fkrdnv_k$(1);
  };
  ChaincodeUri.prototype._get_chaincodeId__335414472_5jp3go_k$ = function () {
    return this.burst_1.get_fkrdnv_k$(2);
  };
  ChaincodeUri.$metadata$ = {
    simpleName: 'ChaincodeUri',
    kind: 'class',
    interfaces: [ChaincodeUriDTO]
  };
  Object.defineProperty(ChaincodeUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this._get_uri__857449637_e6i4dh_k$();
    }
  });
  Object.defineProperty(ChaincodeUri.prototype, 'channelId', {
    configurable: true,
    get: ChaincodeUri.prototype._get_channelId__1056362643_hgximr_k$
  });
  Object.defineProperty(ChaincodeUri.prototype, 'chaincodeId', {
    configurable: true,
    get: ChaincodeUri.prototype._get_chaincodeId__335414472_5jp3go_k$
  });
  function from(_this__1828080292, channelId, chaincodeId) {
    return new ChaincodeUri('chaincode:' + channelId + ':' + chaincodeId);
  }
  function SsmUriDTO() {
  }
  SsmUriDTO.$metadata$ = {
    simpleName: 'SsmUriDTO',
    kind: 'interface',
    interfaces: []
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.PARTS_1 = 4;
    this.PREFIX_1 = 'ssm';
  }
  Companion_1.prototype._get_PARTS__2565155089_slvvn3_k$ = function () {
    return this.PARTS_1;
  };
  Companion_1.prototype._get_PREFIX__2684660409_qmqgqv_k$ = function () {
    return this.PREFIX_1;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_1.prototype, 'PARTS', {
    configurable: true,
    get: Companion_1.prototype._get_PARTS__2565155089_slvvn3_k$
  });
  Object.defineProperty(Companion_1.prototype, 'PREFIX', {
    configurable: true,
    get: Companion_1.prototype._get_PREFIX__2684660409_qmqgqv_k$
  });
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SsmUri(uri) {
    Companion_getInstance_1();
    this.uri_1 = uri;
    var tmp = this;
    tmp.burst_1 = split$default(this.uri_1, [':'], false, 0, 6, null);
    {
      var tmp_0 = this.burst_1._get_size__809037418_ddoh9m_k$();
      Companion_getInstance_1();
      var tmp0_require_0 = tmp_0 === 4;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_1_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1));
        }
      }
    }
    {
      var tmp_1 = first(this.burst_1);
      Companion_getInstance_1();
      var tmp1_require_0 = tmp_1 === 'ssm';
      {
      }
      {
        {
        }
        if (!tmp1_require_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Failed requirement.';
            break $l$block_0;
          }
          var message_1_1_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1_0));
        }
      }
    }
  }
  SsmUri.prototype._get_uri__857449637_e6i4dh_k$ = function () {
    return this.uri_1;
  };
  SsmUri.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.burst_1.get_fkrdnv_k$(1);
  };
  SsmUri.prototype._get_chaincodeId__335414472_5jp3go_k$ = function () {
    return this.burst_1.get_fkrdnv_k$(2);
  };
  SsmUri.prototype._get_ssmName__2865054681_nnbzmv_k$ = function () {
    return this.burst_1.get_fkrdnv_k$(3);
  };
  SsmUri.prototype._get_ssmVersion__3723989984_9fy0ww_k$ = function () {
    return '1.0.0';
  };
  SsmUri.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return from(Companion_getInstance_0(), this.channelId, this.chaincodeId);
  };
  SsmUri.prototype.component1 = function () {
    return this.uri_1;
  };
  SsmUri.prototype.copy = function (uri) {
    return this.copy_3t26ic_k$(uri === void 1 ? this.uri_1 : uri);
  };
  SsmUri.prototype.copy_3t26ic_k$ = function (uri) {
    return new SsmUri(uri);
  };
  SsmUri.prototype.copy$default_q3pzg4_k$ = function (uri, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      uri = this.uri_1;
    return this.copy_3t26ic_k$(uri);
  };
  SsmUri.prototype.toString = function () {
    return 'SsmUri(uri=' + this.uri_1 + ')';
  };
  SsmUri.prototype.hashCode = function () {
    return getStringHashCode(this.uri_1);
  };
  SsmUri.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmUri))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmUri ? other : THROW_CCE();
    if (!(this.uri_1 === tmp0_other_with_cast.uri_1))
      return false;
    return true;
  };
  SsmUri.$metadata$ = {
    simpleName: 'SsmUri',
    kind: 'class',
    interfaces: [SsmUriDTO]
  };
  Object.defineProperty(SsmUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this._get_uri__857449637_e6i4dh_k$();
    }
  });
  Object.defineProperty(SsmUri.prototype, 'channelId', {
    configurable: true,
    get: SsmUri.prototype._get_channelId__1056362643_hgximr_k$
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmUri.prototype._get_chaincodeId__335414472_5jp3go_k$
  });
  Object.defineProperty(SsmUri.prototype, 'ssmName', {
    configurable: true,
    get: SsmUri.prototype._get_ssmName__2865054681_nnbzmv_k$
  });
  Object.defineProperty(SsmUri.prototype, 'ssmVersion', {
    configurable: true,
    get: SsmUri.prototype._get_ssmVersion__3723989984_9fy0ww_k$
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeUri', {
    configurable: true,
    get: SsmUri.prototype._get_chaincodeUri__1808286381_twlup9_k$
  });
  function SsmGetAdminQuery(chaincodeUri, name) {
    this.chaincodeUri_1 = chaincodeUri;
    this.name_1 = name;
  }
  SsmGetAdminQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmGetAdminQuery.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  SsmGetAdminQuery.$metadata$ = {
    simpleName: 'SsmGetAdminQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmGetAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(SsmGetAdminQuery.prototype, 'name', {
    configurable: true,
    get: SsmGetAdminQuery.prototype._get_name__804168992_das4rk_k$
  });
  function SsmGetAdminResult(item) {
    this.item_1 = item;
  }
  SsmGetAdminResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  SsmGetAdminResult.$metadata$ = {
    simpleName: 'SsmGetAdminResult',
    kind: 'class',
    interfaces: [SsmItemResultDTO]
  };
  Object.defineProperty(SsmGetAdminResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function SsmGetQuery(chaincodeUri, name) {
    this.chaincodeUri_1 = chaincodeUri;
    this.name_1 = name;
  }
  SsmGetQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmGetQuery.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  SsmGetQuery.$metadata$ = {
    simpleName: 'SsmGetQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmGetQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(SsmGetQuery.prototype, 'name', {
    configurable: true,
    get: SsmGetQuery.prototype._get_name__804168992_das4rk_k$
  });
  function SsmGetResult(item) {
    this.item_1 = item;
  }
  SsmGetResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  SsmGetResult.$metadata$ = {
    simpleName: 'SsmGetResult',
    kind: 'class',
    interfaces: [SsmItemResultDTO]
  };
  Object.defineProperty(SsmGetResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function SsmGetSessionLogsQuery(chaincodeUri, ssmName, sessionName) {
    this.chaincodeUri_1 = chaincodeUri;
    this.ssmName_1 = ssmName;
    this.sessionName_1 = sessionName;
  }
  SsmGetSessionLogsQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmGetSessionLogsQuery.prototype._get_ssmName__2865054681_nnbzmv_k$ = function () {
    return this.ssmName_1;
  };
  SsmGetSessionLogsQuery.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  SsmGetSessionLogsQuery.$metadata$ = {
    simpleName: 'SsmGetSessionLogsQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmGetSessionLogsQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(SsmGetSessionLogsQuery.prototype, 'ssmName', {
    configurable: true,
    get: SsmGetSessionLogsQuery.prototype._get_ssmName__2865054681_nnbzmv_k$
  });
  Object.defineProperty(SsmGetSessionLogsQuery.prototype, 'sessionName', {
    configurable: true,
    get: SsmGetSessionLogsQuery.prototype._get_sessionName__951667568_fqlje8_k$
  });
  function SsmGetSessionLogsQueryResult(ssmName, sessionName, logs) {
    this.ssmName_1 = ssmName;
    this.sessionName_1 = sessionName;
    this.logs_1 = logs;
  }
  SsmGetSessionLogsQueryResult.prototype._get_ssmName__2865054681_nnbzmv_k$ = function () {
    return this.ssmName_1;
  };
  SsmGetSessionLogsQueryResult.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  SsmGetSessionLogsQueryResult.prototype._get_logs__802733692_d9xda4_k$ = function () {
    return this.logs_1;
  };
  SsmGetSessionLogsQueryResult.prototype.component1 = function () {
    return this.ssmName_1;
  };
  SsmGetSessionLogsQueryResult.prototype.component2 = function () {
    return this.sessionName_1;
  };
  SsmGetSessionLogsQueryResult.prototype.component3 = function () {
    return this.logs_1;
  };
  SsmGetSessionLogsQueryResult.prototype.copy = function (ssmName, sessionName, logs) {
    return this.copy_50bbx9_k$(ssmName === void 1 ? this.ssmName_1 : ssmName, sessionName === void 1 ? this.sessionName_1 : sessionName, logs === void 1 ? this.logs_1 : logs);
  };
  SsmGetSessionLogsQueryResult.prototype.copy_50bbx9_k$ = function (ssmName, sessionName, logs) {
    return new SsmGetSessionLogsQueryResult(ssmName, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult.prototype.copy$default_gv1y51_k$ = function (ssmName, sessionName, logs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssmName = this.ssmName_1;
    if (!(($mask0 & 2) === 0))
      sessionName = this.sessionName_1;
    if (!(($mask0 & 4) === 0))
      logs = this.logs_1;
    return this.copy_50bbx9_k$(ssmName, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult.prototype.toString = function () {
    return 'SsmGetSessionLogsQueryResult(ssmName=' + this.ssmName_1 + ', sessionName=' + this.sessionName_1 + ', logs=' + this.logs_1 + ')';
  };
  SsmGetSessionLogsQueryResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.ssmName_1);
    result = imul(result, 31) + getStringHashCode(this.sessionName_1) | 0;
    result = imul(result, 31) + hashCode(this.logs_1) | 0;
    return result;
  };
  SsmGetSessionLogsQueryResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetSessionLogsQueryResult))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGetSessionLogsQueryResult ? other : THROW_CCE();
    if (!(this.ssmName_1 === tmp0_other_with_cast.ssmName_1))
      return false;
    if (!(this.sessionName_1 === tmp0_other_with_cast.sessionName_1))
      return false;
    if (!equals(this.logs_1, tmp0_other_with_cast.logs_1))
      return false;
    return true;
  };
  SsmGetSessionLogsQueryResult.$metadata$ = {
    simpleName: 'SsmGetSessionLogsQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionLogsQueryResult.prototype, 'ssmName', {
    configurable: true,
    get: SsmGetSessionLogsQueryResult.prototype._get_ssmName__2865054681_nnbzmv_k$
  });
  Object.defineProperty(SsmGetSessionLogsQueryResult.prototype, 'sessionName', {
    configurable: true,
    get: SsmGetSessionLogsQueryResult.prototype._get_sessionName__951667568_fqlje8_k$
  });
  Object.defineProperty(SsmGetSessionLogsQueryResult.prototype, 'logs', {
    configurable: true,
    get: SsmGetSessionLogsQueryResult.prototype._get_logs__802733692_d9xda4_k$
  });
  function SsmGetSessionQuery(chaincodeUri, sessionName) {
    this.chaincodeUri_1 = chaincodeUri;
    this.sessionName_1 = sessionName;
  }
  SsmGetSessionQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmGetSessionQuery.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  SsmGetSessionQuery.$metadata$ = {
    simpleName: 'SsmGetSessionQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmGetSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(SsmGetSessionQuery.prototype, 'sessionName', {
    configurable: true,
    get: SsmGetSessionQuery.prototype._get_sessionName__951667568_fqlje8_k$
  });
  function SsmGetSessionResult(item) {
    this.item_1 = item;
  }
  SsmGetSessionResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  SsmGetSessionResult.$metadata$ = {
    simpleName: 'SsmGetSessionResult',
    kind: 'class',
    interfaces: [SsmItemResultDTO]
  };
  Object.defineProperty(SsmGetSessionResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function SsmGetTransactionQuery(chaincodeUri, id) {
    this.chaincodeUri_1 = chaincodeUri;
    this.id_1 = id;
  }
  SsmGetTransactionQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmGetTransactionQuery.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  SsmGetTransactionQuery.prototype.component1 = function () {
    return this.chaincodeUri_1;
  };
  SsmGetTransactionQuery.prototype.component2 = function () {
    return this.id_1;
  };
  SsmGetTransactionQuery.prototype.copy = function (chaincodeUri, id) {
    return this.copy_w5098g_k$(chaincodeUri === void 1 ? this.chaincodeUri_1 : chaincodeUri, id === void 1 ? this.id_1 : id);
  };
  SsmGetTransactionQuery.prototype.copy_w5098g_k$ = function (chaincodeUri, id) {
    return new SsmGetTransactionQuery(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.copy$default_xgrf37_k$ = function (chaincodeUri, id, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      chaincodeUri = this.chaincodeUri_1;
    if (!(($mask0 & 2) === 0))
      id = this.id_1;
    return this.copy_w5098g_k$(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.toString = function () {
    return 'SsmGetTransactionQuery(chaincodeUri=' + this.chaincodeUri_1 + ', id=' + this.id_1 + ')';
  };
  SsmGetTransactionQuery.prototype.hashCode = function () {
    var result = hashCode(this.chaincodeUri_1);
    result = imul(result, 31) + getStringHashCode(this.id_1) | 0;
    return result;
  };
  SsmGetTransactionQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetTransactionQuery))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGetTransactionQuery ? other : THROW_CCE();
    if (!equals(this.chaincodeUri_1, tmp0_other_with_cast.chaincodeUri_1))
      return false;
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    return true;
  };
  SsmGetTransactionQuery.$metadata$ = {
    simpleName: 'SsmGetTransactionQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmGetTransactionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(SsmGetTransactionQuery.prototype, 'id', {
    configurable: true,
    get: SsmGetTransactionQuery.prototype._get_id__1413120976_ndc34g_k$
  });
  function SsmGetTransactionQueryResult(item) {
    this.item_1 = item;
  }
  SsmGetTransactionQueryResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  SsmGetTransactionQueryResult.$metadata$ = {
    simpleName: 'SsmGetTransactionQueryResult',
    kind: 'class',
    interfaces: [SsmItemResultDTO]
  };
  Object.defineProperty(SsmGetTransactionQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function SsmGetUserQuery(chaincodeUri, name) {
    this.chaincodeUri_1 = chaincodeUri;
    this.name_1 = name;
  }
  SsmGetUserQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmGetUserQuery.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  SsmGetUserQuery.$metadata$ = {
    simpleName: 'SsmGetUserQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmGetUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(SsmGetUserQuery.prototype, 'name', {
    configurable: true,
    get: SsmGetUserQuery.prototype._get_name__804168992_das4rk_k$
  });
  function SsmGetUserResult(item) {
    this.item_1 = item;
  }
  SsmGetUserResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  SsmGetUserResult.$metadata$ = {
    simpleName: 'SsmGetUserResult',
    kind: 'class',
    interfaces: [SsmItemResultDTO]
  };
  Object.defineProperty(SsmGetUserResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function SsmListAdminQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  SsmListAdminQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmListAdminQuery.$metadata$ = {
    simpleName: 'SsmListAdminQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmListAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  function SsmListAdminResult(items) {
    this.items_1 = items;
  }
  SsmListAdminResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  SsmListAdminResult.$metadata$ = {
    simpleName: 'SsmListAdminResult',
    kind: 'class',
    interfaces: [SsmItemsResultDTO]
  };
  Object.defineProperty(SsmListAdminResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function SsmListSessionQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  SsmListSessionQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmListSessionQuery.$metadata$ = {
    simpleName: 'SsmListSessionQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmListSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  function SsmListSessionResult(items) {
    this.items_1 = items;
  }
  SsmListSessionResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  SsmListSessionResult.$metadata$ = {
    simpleName: 'SsmListSessionResult',
    kind: 'class',
    interfaces: [SsmItemsResultDTO]
  };
  Object.defineProperty(SsmListSessionResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function SsmListSsmQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  SsmListSsmQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmListSsmQuery.$metadata$ = {
    simpleName: 'SsmListSsmQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmListSsmQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  function SsmListSsmResult(items) {
    this.items_1 = items;
  }
  SsmListSsmResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  SsmListSsmResult.$metadata$ = {
    simpleName: 'SsmListSsmResult',
    kind: 'class',
    interfaces: [SsmItemsResultDTO]
  };
  Object.defineProperty(SsmListSsmResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function SsmListUserQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  SsmListUserQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  SsmListUserQuery.$metadata$ = {
    simpleName: 'SsmListUserQuery',
    kind: 'class',
    interfaces: [SsmQueryDTO]
  };
  Object.defineProperty(SsmListUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  function SsmListUserResult(items) {
    this.items_1 = items;
  }
  SsmListUserResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  SsmListUserResult.$metadata$ = {
    simpleName: 'SsmListUserResult',
    kind: 'class',
    interfaces: [SsmItemsResultDTO]
  };
  Object.defineProperty(SsmListUserResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.Block = Block;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.EnvelopeType = EnvelopeType;
    $ssm$chaincode$dsl$blockchain.EnvelopeType.values = values;
    $ssm$chaincode$dsl$blockchain.EnvelopeType.valueOf = valueOf;
    Object.defineProperty($ssm$chaincode$dsl$blockchain.EnvelopeType, 'TRANSACTION_ENVELOPE', {
      configurable: true,
      get: EnvelopeType_TRANSACTION_ENVELOPE_getInstance
    });
    Object.defineProperty($ssm$chaincode$dsl$blockchain.EnvelopeType, 'ENVELOPE', {
      configurable: true,
      get: EnvelopeType_ENVELOPE_getInstance
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.IdentitiesInfo = IdentitiesInfo;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
    $ssm$chaincode$dsl$blockchain.Transaction = Transaction;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$config = $ssm$chaincode$dsl.config || ($ssm$chaincode$dsl.config = {});
    $ssm$chaincode$dsl$config.ChaincodeSsmConfig = ChaincodeSsmConfig;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmAgent = SsmAgent;
    Object.defineProperty($ssm$chaincode$dsl$model.SsmAgent, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.Chaincode = Chaincode;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.Ssm = Ssm;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmContext = SsmContext;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmGrant = SsmGrant;
    $ssm$chaincode$dsl$model.Credit = Credit;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmSession = SsmSession;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmSessionState = SsmSessionState;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmSessionStateLog = SsmSessionStateLog;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    $ssm$chaincode$dsl$model.SsmTransition = SsmTransition;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    var $ssm$chaincode$dsl$model$uri = $ssm$chaincode$dsl$model.uri || ($ssm$chaincode$dsl$model.uri = {});
    $ssm$chaincode$dsl$model$uri.ChaincodeUri = ChaincodeUri;
    Object.defineProperty($ssm$chaincode$dsl$model$uri.ChaincodeUri, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
    var $ssm$chaincode$dsl$model$uri = $ssm$chaincode$dsl$model.uri || ($ssm$chaincode$dsl$model.uri = {});
    $ssm$chaincode$dsl$model$uri.SsmUri = SsmUri;
    Object.defineProperty($ssm$chaincode$dsl$model$uri.SsmUri, 'Companion', {
      configurable: true,
      get: Companion_getInstance_1
    });
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetAdminQuery = SsmGetAdminQuery;
    $ssm$chaincode$dsl$query.SsmGetAdminResult = SsmGetAdminResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetQuery = SsmGetQuery;
    $ssm$chaincode$dsl$query.SsmGetResult = SsmGetResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetSessionLogsQuery = SsmGetSessionLogsQuery;
    $ssm$chaincode$dsl$query.SsmGetSessionLogsQueryResult = SsmGetSessionLogsQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetSessionQuery = SsmGetSessionQuery;
    $ssm$chaincode$dsl$query.SsmGetSessionResult = SsmGetSessionResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetTransactionQuery = SsmGetTransactionQuery;
    $ssm$chaincode$dsl$query.SsmGetTransactionQueryResult = SsmGetTransactionQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmGetUserQuery = SsmGetUserQuery;
    $ssm$chaincode$dsl$query.SsmGetUserResult = SsmGetUserResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListAdminQuery = SsmListAdminQuery;
    $ssm$chaincode$dsl$query.SsmListAdminResult = SsmListAdminResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListSessionQuery = SsmListSessionQuery;
    $ssm$chaincode$dsl$query.SsmListSessionResult = SsmListSessionResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListSsmQuery = SsmListSsmQuery;
    $ssm$chaincode$dsl$query.SsmListSsmResult = SsmListSsmResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
    var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
    var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
    $ssm$chaincode$dsl$query.SsmListUserQuery = SsmListUserQuery;
    $ssm$chaincode$dsl$query.SsmListUserResult = SsmListUserResult;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_ssm_ssm_chaincode_dsl.js.map
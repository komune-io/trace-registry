(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './f2-f2-dsl-cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./f2-f2-dsl-cqrs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ssm-ssm-chaincode-dsl'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ssm-ssm-chaincode-dsl'.");
    }
    if (typeof this['f2-f2-dsl-cqrs'] === 'undefined') {
      throw new Error("Error loading module 'ssm-ssm-chaincode-dsl'. Its dependency 'f2-f2-dsl-cqrs' was not found. Please, check whether 'f2-f2-dsl-cqrs' is loaded prior to 'ssm-ssm-chaincode-dsl'.");
    }
    root['ssm-ssm-chaincode-dsl'] = factory(typeof this['ssm-ssm-chaincode-dsl'] === 'undefined' ? {} : this['ssm-ssm-chaincode-dsl'], this['kotlin-kotlin-stdlib-js-ir'], this['f2-f2-dsl-cqrs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var setMetadataFor = kotlin_kotlin.$_$.b2;
  var Query = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.c;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.b;
  var classMeta = kotlin_kotlin.$_$.r1;
  var THROW_ISE = kotlin_kotlin.$_$.l2;
  var Unit_getInstance = kotlin_kotlin.$_$.t;
  var Enum = kotlin_kotlin.$_$.g2;
  var objectMeta = kotlin_kotlin.$_$.a2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.k2;
  var contentEquals = kotlin_kotlin.$_$.y;
  var getStringHashCode = kotlin_kotlin.$_$.v1;
  var contentHashCode = kotlin_kotlin.$_$.z;
  var toString = kotlin_kotlin.$_$.c2;
  var hashCode = kotlin_kotlin.$_$.w1;
  var equals = kotlin_kotlin.$_$.s1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var toString_0 = kotlin_kotlin.$_$.q2;
  var split$default = kotlin_kotlin.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n;
  var first = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SsmChaincodeQueries, 'SsmChaincodeQueries', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmQueryDTO, 'SsmQueryDTO', interfaceMeta, undefined, [Query], undefined, undefined, []);
  setMetadataFor(SsmItemResultDTO, 'SsmItemResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(SsmItemsResultDTO, 'SsmItemsResultDTO', interfaceMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(BlockDTO, 'BlockDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Block, 'Block', classMeta, undefined, [BlockDTO], undefined, undefined, []);
  setMetadataFor(EnvelopeType, 'EnvelopeType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(IdentitiesInfoDTO, 'IdentitiesInfoDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IdentitiesInfo, 'IdentitiesInfo', classMeta, undefined, [IdentitiesInfoDTO], undefined, undefined, []);
  setMetadataFor(TransactionDTO, 'TransactionDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Transaction, 'Transaction', classMeta, undefined, [TransactionDTO], undefined, undefined, []);
  setMetadataFor(SsmChaincodePropertiesDTO, 'SsmChaincodePropertiesDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChaincodeSsmConfig, 'SsmChaincodeConfig', classMeta, undefined, [SsmChaincodePropertiesDTO], undefined, undefined, []);
  setMetadataFor(AgentDTO, 'AgentDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Agent, 'Agent', classMeta, undefined, [AgentDTO], undefined, undefined, []);
  setMetadataFor(ChaincodeDTO, 'ChaincodeDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Chaincode, 'Chaincode', classMeta, undefined, [ChaincodeDTO], undefined, undefined, []);
  setMetadataFor(SsmDTO, 'SsmDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Ssm, 'Ssm', classMeta, undefined, [SsmDTO], undefined, undefined, []);
  setMetadataFor(WithPrivate, 'WithPrivate', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmContextDTO, 'SsmContextDTO', interfaceMeta, undefined, [WithPrivate], undefined, undefined, []);
  setMetadataFor(SsmContext, 'SsmContext', classMeta, undefined, [SsmContextDTO], undefined, undefined, []);
  setMetadataFor(SsmGrantDTO, 'SsmGrantDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmGrant, 'SsmGrant', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CreditDTO, 'CreditDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Credit, 'Credit', classMeta, undefined, [CreditDTO], undefined, undefined, []);
  setMetadataFor(SsmSessionDTO, 'SsmSessionDTO', interfaceMeta, undefined, [WithPrivate], undefined, undefined, []);
  setMetadataFor(SsmSession, 'SsmSession', classMeta, undefined, [SsmSessionDTO], undefined, undefined, []);
  setMetadataFor(SsmSessionStateDTO, 'SsmSessionStateDTO', interfaceMeta, undefined, [SsmSessionDTO, WithPrivate], undefined, undefined, []);
  setMetadataFor(SsmSessionState, 'SsmSessionState', classMeta, undefined, [SsmSessionStateDTO], undefined, undefined, []);
  setMetadataFor(SsmSessionStateLogDTO, 'SsmSessionStateLogDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmSessionStateLog, 'SsmSessionStateLog', classMeta, undefined, [SsmSessionStateLogDTO], undefined, undefined, []);
  setMetadataFor(SsmTransitionDTO, 'SsmTransitionDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmTransition, 'SsmTransition', classMeta, undefined, [SsmTransitionDTO], undefined, undefined, []);
  setMetadataFor(ChaincodeUriDTO, 'ChaincodeUriDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChaincodeUri, 'ChaincodeUri', classMeta, undefined, [ChaincodeUriDTO], undefined, undefined, []);
  setMetadataFor(SsmUriDTO, 'SsmUriDTO', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmUri, 'SsmUri', classMeta, undefined, [SsmUriDTO], undefined, undefined, []);
  setMetadataFor(SsmGetAdminQuery, 'SsmGetAdminQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetAdminResult, 'SsmGetAdminResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetQuery, 'SsmGetQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetResult, 'SsmGetResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetSessionLogsQuery, 'SsmGetSessionLogsQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetSessionLogsQueryResult, 'SsmGetSessionLogsQueryResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SsmGetSessionQuery, 'SsmGetSessionQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetSessionResult, 'SsmGetSessionResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetTransactionQuery, 'SsmGetTransactionQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetTransactionQueryResult, 'SsmGetTransactionQueryResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmGetUserQuery, 'SsmGetUserQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmGetUserResult, 'SsmGetUserResult', classMeta, undefined, [SsmItemResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListAdminQuery, 'SsmListAdminQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListAdminResult, 'SsmListAdminResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListSessionQuery, 'SsmListSessionQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListSessionResult, 'SsmListSessionResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListSsmQuery, 'SsmListSsmQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListSsmResult, 'SsmListSsmResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  setMetadataFor(SsmListUserQuery, 'SsmListUserQuery', classMeta, undefined, [SsmQueryDTO], undefined, undefined, []);
  setMetadataFor(SsmListUserResult, 'SsmListUserResult', classMeta, undefined, [SsmItemsResultDTO], undefined, undefined, []);
  //endregion
  function SsmChaincodeQueries() {
  }
  function SsmQueryDTO() {
  }
  function SsmItemResultDTO() {
  }
  function SsmItemsResultDTO() {
  }
  function BlockDTO() {
  }
  function Block(blockId, previousHash, dataHash, transactions) {
    this.rf_1 = blockId;
    this.sf_1 = previousHash;
    this.tf_1 = dataHash;
    this.uf_1 = transactions;
  }
  Block.prototype.nf = function () {
    return this.rf_1;
  };
  Block.prototype.of = function () {
    return this.sf_1;
  };
  Block.prototype.pf = function () {
    return this.tf_1;
  };
  Block.prototype.qf = function () {
    return this.uf_1;
  };
  Object.defineProperty(Block.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this.nf();
    }
  });
  Object.defineProperty(Block.prototype, 'previousHash', {
    configurable: true,
    get: function () {
      return this.of();
    }
  });
  Object.defineProperty(Block.prototype, 'dataHash', {
    configurable: true,
    get: function () {
      return this.pf();
    }
  });
  Object.defineProperty(Block.prototype, 'transactions', {
    configurable: true,
    get: function () {
      return this.qf();
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
  Object.defineProperty(EnvelopeType.prototype, 'name', {
    configurable: true,
    get: EnvelopeType.prototype.v7
  });
  Object.defineProperty(EnvelopeType.prototype, 'ordinal', {
    configurable: true,
    get: EnvelopeType.prototype.w7
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
  function IdentitiesInfo(id, mspid) {
    this.yf_1 = id;
    this.zf_1 = mspid;
  }
  IdentitiesInfo.prototype.sd = function () {
    return this.yf_1;
  };
  IdentitiesInfo.prototype.xf = function () {
    return this.zf_1;
  };
  Object.defineProperty(IdentitiesInfo.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.sd();
    }
  });
  Object.defineProperty(IdentitiesInfo.prototype, 'mspid', {
    configurable: true,
    get: function () {
      return this.xf();
    }
  });
  function TransactionDTO() {
  }
  function Transaction(transactionId, blockId, timestamp, isValid, channelId, creator, nonce, type, validationCode) {
    this.gg_1 = transactionId;
    this.hg_1 = blockId;
    this.ig_1 = timestamp;
    this.jg_1 = isValid;
    this.kg_1 = channelId;
    this.lg_1 = creator;
    this.mg_1 = nonce;
    this.ng_1 = type;
    this.og_1 = validationCode;
  }
  Transaction.prototype.ag = function () {
    return this.gg_1;
  };
  Transaction.prototype.nf = function () {
    return this.hg_1;
  };
  Transaction.prototype.td = function () {
    return this.ig_1;
  };
  Transaction.prototype.bg = function () {
    return this.jg_1;
  };
  Transaction.prototype.cg = function () {
    return this.kg_1;
  };
  Transaction.prototype.dg = function () {
    return this.lg_1;
  };
  Transaction.prototype.eg = function () {
    return this.mg_1;
  };
  Transaction.prototype.fd = function () {
    return this.ng_1;
  };
  Transaction.prototype.fg = function () {
    return this.og_1;
  };
  Object.defineProperty(Transaction.prototype, 'transactionId', {
    configurable: true,
    get: function () {
      return this.ag();
    }
  });
  Object.defineProperty(Transaction.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this.nf();
    }
  });
  Object.defineProperty(Transaction.prototype, 'timestamp', {
    configurable: true,
    get: function () {
      return this.td();
    }
  });
  Object.defineProperty(Transaction.prototype, 'isValid', {
    configurable: true,
    get: function () {
      return this.bg();
    }
  });
  Object.defineProperty(Transaction.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this.cg();
    }
  });
  Object.defineProperty(Transaction.prototype, 'creator', {
    configurable: true,
    get: function () {
      return this.dg();
    }
  });
  Object.defineProperty(Transaction.prototype, 'nonce', {
    configurable: true,
    get: function () {
      return this.eg();
    }
  });
  Object.defineProperty(Transaction.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.fd();
    }
  });
  Object.defineProperty(Transaction.prototype, 'validationCode', {
    configurable: true,
    get: function () {
      return this.fg();
    }
  });
  function SsmChaincodePropertiesDTO() {
  }
  function ChaincodeSsmConfig(url) {
    this.qg_1 = url;
  }
  ChaincodeSsmConfig.prototype.pg = function () {
    return this.qg_1;
  };
  Object.defineProperty(ChaincodeSsmConfig.prototype, 'url', {
    configurable: true,
    get: function () {
      return this.pg();
    }
  });
  function AgentDTO() {
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Agent(name, pub) {
    Companion_getInstance();
    this.sg_1 = name;
    this.tg_1 = pub;
  }
  Agent.prototype.v7 = function () {
    return this.sg_1;
  };
  Agent.prototype.rg = function () {
    return this.tg_1;
  };
  Agent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Agent)
      other;
    else
      THROW_CCE();
    if (!(this.sg_1 === other.sg_1))
      return false;
    if (!contentEquals(this.tg_1, other.tg_1))
      return false;
    return true;
  };
  Agent.prototype.hashCode = function () {
    var result = getStringHashCode(this.sg_1);
    result = imul(31, result) + contentHashCode(this.tg_1) | 0;
    return result;
  };
  Agent.prototype.component1 = function () {
    return this.sg_1;
  };
  Agent.prototype.component2 = function () {
    return this.tg_1;
  };
  Agent.prototype.copy = function (name, pub) {
    return this.ug(name === void 1 ? this.sg_1 : name, pub === void 1 ? this.tg_1 : pub);
  };
  Agent.prototype.ug = function (name, pub) {
    return new Agent(name, pub);
  };
  Agent.prototype.vg = function (name, pub, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.sg_1;
    if (!(($mask0 & 2) === 0))
      pub = this.tg_1;
    return this.ug(name, pub);
  };
  Agent.prototype.toString = function () {
    return 'Agent(name=' + this.sg_1 + ', pub=' + toString(this.tg_1) + ')';
  };
  Object.defineProperty(Agent.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.v7();
    }
  });
  Object.defineProperty(Agent.prototype, 'pub', {
    configurable: true,
    get: function () {
      return this.rg();
    }
  });
  function ChaincodeDTO() {
  }
  function Chaincode(id, channelId) {
    this.wg_1 = id;
    this.xg_1 = channelId;
  }
  Chaincode.prototype.sd = function () {
    return this.wg_1;
  };
  Chaincode.prototype.cg = function () {
    return this.xg_1;
  };
  Chaincode.prototype.component1 = function () {
    return this.wg_1;
  };
  Chaincode.prototype.component2 = function () {
    return this.xg_1;
  };
  Chaincode.prototype.copy = function (id, channelId) {
    return this.yg(id === void 1 ? this.wg_1 : id, channelId === void 1 ? this.xg_1 : channelId);
  };
  Chaincode.prototype.yg = function (id, channelId) {
    return new Chaincode(id, channelId);
  };
  Chaincode.prototype.zg = function (id, channelId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.wg_1;
    if (!(($mask0 & 2) === 0))
      channelId = this.xg_1;
    return this.yg(id, channelId);
  };
  Chaincode.prototype.toString = function () {
    return 'Chaincode(id=' + this.wg_1 + ', channelId=' + this.xg_1 + ')';
  };
  Chaincode.prototype.hashCode = function () {
    var result = getStringHashCode(this.wg_1);
    result = imul(result, 31) + getStringHashCode(this.xg_1) | 0;
    return result;
  };
  Chaincode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Chaincode))
      return false;
    var tmp0_other_with_cast = other instanceof Chaincode ? other : THROW_CCE();
    if (!(this.wg_1 === tmp0_other_with_cast.wg_1))
      return false;
    if (!(this.xg_1 === tmp0_other_with_cast.xg_1))
      return false;
    return true;
  };
  Object.defineProperty(Chaincode.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.sd();
    }
  });
  Object.defineProperty(Chaincode.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this.cg();
    }
  });
  function SsmDTO() {
  }
  function Ssm(name, transitions) {
    this.bh_1 = name;
    this.ch_1 = transitions;
  }
  Ssm.prototype.v7 = function () {
    return this.bh_1;
  };
  Ssm.prototype.ah = function () {
    return this.ch_1;
  };
  Ssm.prototype.component1 = function () {
    return this.bh_1;
  };
  Ssm.prototype.component2 = function () {
    return this.ch_1;
  };
  Ssm.prototype.copy = function (name, transitions) {
    return this.dh(name === void 1 ? this.bh_1 : name, transitions === void 1 ? this.ch_1 : transitions);
  };
  Ssm.prototype.dh = function (name, transitions) {
    return new Ssm(name, transitions);
  };
  Ssm.prototype.eh = function (name, transitions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.bh_1;
    if (!(($mask0 & 2) === 0))
      transitions = this.ch_1;
    return this.dh(name, transitions);
  };
  Ssm.prototype.toString = function () {
    return 'Ssm(name=' + this.bh_1 + ', transitions=' + this.ch_1 + ')';
  };
  Ssm.prototype.hashCode = function () {
    var result = getStringHashCode(this.bh_1);
    result = imul(result, 31) + hashCode(this.ch_1) | 0;
    return result;
  };
  Ssm.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ssm))
      return false;
    var tmp0_other_with_cast = other instanceof Ssm ? other : THROW_CCE();
    if (!(this.bh_1 === tmp0_other_with_cast.bh_1))
      return false;
    if (!equals(this.ch_1, tmp0_other_with_cast.ch_1))
      return false;
    return true;
  };
  Object.defineProperty(Ssm.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.v7();
    }
  });
  Object.defineProperty(Ssm.prototype, 'transitions', {
    configurable: true,
    get: function () {
      return this.ah();
    }
  });
  function SsmContextDTO() {
  }
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
    this.jh_1 = session;
    this.kh_1 = public_0;
    this.lh_1 = iteration;
    this.mh_1 = private_1;
  }
  SsmContext.prototype.fh = function () {
    return this.jh_1;
  };
  SsmContext.prototype.gh = function () {
    return this.kh_1;
  };
  SsmContext.prototype.hh = function () {
    return this.lh_1;
  };
  SsmContext.prototype.ih = function () {
    return this.mh_1;
  };
  SsmContext.prototype.component1 = function () {
    return this.jh_1;
  };
  SsmContext.prototype.component2 = function () {
    return this.kh_1;
  };
  SsmContext.prototype.component3 = function () {
    return this.lh_1;
  };
  SsmContext.prototype.component4 = function () {
    return this.mh_1;
  };
  SsmContext.prototype.copy = function (session, public_0, iteration, private_0) {
    return this.nh(session === void 1 ? this.jh_1 : session, public_0 === void 1 ? this.kh_1 : public_0, iteration === void 1 ? this.lh_1 : iteration, private_0 === void 1 ? this.mh_1 : private_0);
  };
  SsmContext.prototype.nh = function (session, public_0, iteration, private_0) {
    return new SsmContext(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.oh = function (session, public_0, iteration, private_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      session = this.jh_1;
    if (!(($mask0 & 2) === 0))
      public_0 = this.kh_1;
    if (!(($mask0 & 4) === 0))
      iteration = this.lh_1;
    if (!(($mask0 & 8) === 0))
      private_0 = this.mh_1;
    return this.nh(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.toString = function () {
    return 'SsmContext(session=' + this.jh_1 + ', public=' + this.kh_1 + ', iteration=' + this.lh_1 + ', private=' + this.mh_1 + ')';
  };
  SsmContext.prototype.hashCode = function () {
    var result = getStringHashCode(this.jh_1);
    result = imul(result, 31) + getStringHashCode(this.kh_1) | 0;
    result = imul(result, 31) + this.lh_1 | 0;
    result = imul(result, 31) + (this.mh_1 == null ? 0 : hashCode(this.mh_1)) | 0;
    return result;
  };
  SsmContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmContext))
      return false;
    var tmp0_other_with_cast = other instanceof SsmContext ? other : THROW_CCE();
    if (!(this.jh_1 === tmp0_other_with_cast.jh_1))
      return false;
    if (!(this.kh_1 === tmp0_other_with_cast.kh_1))
      return false;
    if (!(this.lh_1 === tmp0_other_with_cast.lh_1))
      return false;
    if (!equals(this.mh_1, tmp0_other_with_cast.mh_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmContext.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.fh();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.gh();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this.hh();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.ih();
    }
  });
  function SsmGrantDTO() {
  }
  function SsmGrant(user, iteration, credits) {
    this.user = user;
    this.iteration = iteration;
    this.credits = credits;
  }
  SsmGrant.prototype.ph = function () {
    return this.user;
  };
  SsmGrant.prototype.hh = function () {
    return this.iteration;
  };
  SsmGrant.prototype.qh = function () {
    return this.credits;
  };
  SsmGrant.prototype.component1 = function () {
    return this.user;
  };
  SsmGrant.prototype.component2 = function () {
    return this.iteration;
  };
  SsmGrant.prototype.component3 = function () {
    return this.credits;
  };
  SsmGrant.prototype.copy = function (user, iteration, credits) {
    return this.rh(user === void 1 ? this.user : user, iteration === void 1 ? this.iteration : iteration, credits === void 1 ? this.credits : credits);
  };
  SsmGrant.prototype.rh = function (user, iteration, credits) {
    return new SsmGrant(user, iteration, credits);
  };
  SsmGrant.prototype.sh = function (user, iteration, credits, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      user = this.user;
    if (!(($mask0 & 2) === 0))
      iteration = this.iteration;
    if (!(($mask0 & 4) === 0))
      credits = this.credits;
    return this.rh(user, iteration, credits);
  };
  SsmGrant.prototype.toString = function () {
    return 'SsmGrant(user=' + this.user + ', iteration=' + this.iteration + ', credits=' + this.credits + ')';
  };
  SsmGrant.prototype.hashCode = function () {
    var result = getStringHashCode(this.user);
    result = imul(result, 31) + this.iteration | 0;
    result = imul(result, 31) + hashCode(this.credits) | 0;
    return result;
  };
  SsmGrant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGrant))
      return false;
    var tmp0_other_with_cast = other instanceof SsmGrant ? other : THROW_CCE();
    if (!(this.user === tmp0_other_with_cast.user))
      return false;
    if (!(this.iteration === tmp0_other_with_cast.iteration))
      return false;
    if (!equals(this.credits, tmp0_other_with_cast.credits))
      return false;
    return true;
  };
  function CreditDTO() {
  }
  function Credit(amount) {
    this.uh_1 = amount;
  }
  Credit.prototype.th = function () {
    return this.uh_1;
  };
  Credit.prototype.component1 = function () {
    return this.uh_1;
  };
  Credit.prototype.copy = function (amount) {
    return this.vh(amount === void 1 ? this.uh_1 : amount);
  };
  Credit.prototype.vh = function (amount) {
    return new Credit(amount);
  };
  Credit.prototype.wh = function (amount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      amount = this.uh_1;
    return this.vh(amount);
  };
  Credit.prototype.toString = function () {
    return 'Credit(amount=' + this.uh_1 + ')';
  };
  Credit.prototype.hashCode = function () {
    return this.uh_1;
  };
  Credit.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Credit))
      return false;
    var tmp0_other_with_cast = other instanceof Credit ? other : THROW_CCE();
    if (!(this.uh_1 === tmp0_other_with_cast.uh_1))
      return false;
    return true;
  };
  Object.defineProperty(Credit.prototype, 'amount', {
    configurable: true,
    get: function () {
      return this.th();
    }
  });
  function SsmSessionDTO() {
  }
  function SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
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
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this.zh_1 = ssm;
    this.ai_1 = session;
    this.bi_1 = roles;
    this.ci_1 = public_0;
    this.di_1 = private_1;
  }
  SsmSession.prototype.xh = function () {
    return this.zh_1;
  };
  SsmSession.prototype.fh = function () {
    return this.ai_1;
  };
  SsmSession.prototype.yh = function () {
    return this.bi_1;
  };
  SsmSession.prototype.gh = function () {
    return this.ci_1;
  };
  SsmSession.prototype.ih = function () {
    return this.di_1;
  };
  Object.defineProperty(SsmSession.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this.xh();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.fh();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this.yh();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.gh();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.ih();
    }
  });
  function SsmSessionStateDTO() {
  }
  function SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
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
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this.gi_1 = ssm;
    this.hi_1 = session;
    this.ii_1 = roles;
    this.ji_1 = public_0;
    this.ki_1 = private_1;
    this.li_1 = origin;
    this.mi_1 = current;
    this.ni_1 = iteration;
  }
  SsmSessionState.prototype.xh = function () {
    return this.gi_1;
  };
  SsmSessionState.prototype.fh = function () {
    return this.hi_1;
  };
  SsmSessionState.prototype.yh = function () {
    return this.ii_1;
  };
  SsmSessionState.prototype.gh = function () {
    return this.ji_1;
  };
  SsmSessionState.prototype.ih = function () {
    return this.ki_1;
  };
  SsmSessionState.prototype.ei = function () {
    return this.li_1;
  };
  SsmSessionState.prototype.fi = function () {
    return this.mi_1;
  };
  SsmSessionState.prototype.hh = function () {
    return this.ni_1;
  };
  SsmSessionState.prototype.component1 = function () {
    return this.gi_1;
  };
  SsmSessionState.prototype.component2 = function () {
    return this.hi_1;
  };
  SsmSessionState.prototype.component3 = function () {
    return this.ii_1;
  };
  SsmSessionState.prototype.component4 = function () {
    return this.ji_1;
  };
  SsmSessionState.prototype.component5 = function () {
    return this.ki_1;
  };
  SsmSessionState.prototype.component6 = function () {
    return this.li_1;
  };
  SsmSessionState.prototype.component7 = function () {
    return this.mi_1;
  };
  SsmSessionState.prototype.component8 = function () {
    return this.ni_1;
  };
  SsmSessionState.prototype.copy = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return this.oi(ssm === void 1 ? this.gi_1 : ssm, session === void 1 ? this.hi_1 : session, roles === void 1 ? this.ii_1 : roles, public_0 === void 1 ? this.ji_1 : public_0, private_0 === void 1 ? this.ki_1 : private_0, origin === void 1 ? this.li_1 : origin, current === void 1 ? this.mi_1 : current, iteration === void 1 ? this.ni_1 : iteration);
  };
  SsmSessionState.prototype.oi = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return new SsmSessionState(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.pi = function (ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssm = this.gi_1;
    if (!(($mask0 & 2) === 0))
      session = this.hi_1;
    if (!(($mask0 & 4) === 0))
      roles = this.ii_1;
    if (!(($mask0 & 8) === 0))
      public_0 = this.ji_1;
    if (!(($mask0 & 16) === 0))
      private_0 = this.ki_1;
    if (!(($mask0 & 32) === 0))
      origin = this.li_1;
    if (!(($mask0 & 64) === 0))
      current = this.mi_1;
    if (!(($mask0 & 128) === 0))
      iteration = this.ni_1;
    return this.oi(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.toString = function () {
    return 'SsmSessionState(ssm=' + this.gi_1 + ', session=' + this.hi_1 + ', roles=' + this.ii_1 + ', public=' + toString_0(this.ji_1) + ', private=' + this.ki_1 + ', origin=' + this.li_1 + ', current=' + this.mi_1 + ', iteration=' + this.ni_1 + ')';
  };
  SsmSessionState.prototype.hashCode = function () {
    var result = this.gi_1 == null ? 0 : getStringHashCode(this.gi_1);
    result = imul(result, 31) + getStringHashCode(this.hi_1) | 0;
    result = imul(result, 31) + (this.ii_1 == null ? 0 : hashCode(this.ii_1)) | 0;
    result = imul(result, 31) + (this.ji_1 == null ? 0 : hashCode(this.ji_1)) | 0;
    result = imul(result, 31) + (this.ki_1 == null ? 0 : hashCode(this.ki_1)) | 0;
    result = imul(result, 31) + (this.li_1 == null ? 0 : this.li_1.hashCode()) | 0;
    result = imul(result, 31) + this.mi_1 | 0;
    result = imul(result, 31) + this.ni_1 | 0;
    return result;
  };
  SsmSessionState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionState))
      return false;
    var tmp0_other_with_cast = other instanceof SsmSessionState ? other : THROW_CCE();
    if (!(this.gi_1 == tmp0_other_with_cast.gi_1))
      return false;
    if (!(this.hi_1 === tmp0_other_with_cast.hi_1))
      return false;
    if (!equals(this.ii_1, tmp0_other_with_cast.ii_1))
      return false;
    if (!equals(this.ji_1, tmp0_other_with_cast.ji_1))
      return false;
    if (!equals(this.ki_1, tmp0_other_with_cast.ki_1))
      return false;
    if (!equals(this.li_1, tmp0_other_with_cast.li_1))
      return false;
    if (!(this.mi_1 === tmp0_other_with_cast.mi_1))
      return false;
    if (!(this.ni_1 === tmp0_other_with_cast.ni_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmSessionState.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this.xh();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.fh();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this.yh();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.gh();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.ih();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'origin', {
    configurable: true,
    get: function () {
      return this.ei();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'current', {
    configurable: true,
    get: function () {
      return this.fi();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this.hh();
    }
  });
  function SsmSessionStateLogDTO() {
  }
  function SsmSessionStateLog(txId, state) {
    this.si_1 = txId;
    this.ti_1 = state;
  }
  SsmSessionStateLog.prototype.qi = function () {
    return this.si_1;
  };
  SsmSessionStateLog.prototype.ri = function () {
    return this.ti_1;
  };
  SsmSessionStateLog.prototype.component1 = function () {
    return this.si_1;
  };
  SsmSessionStateLog.prototype.component2 = function () {
    return this.ti_1;
  };
  SsmSessionStateLog.prototype.copy = function (txId, state) {
    return this.ui(txId === void 1 ? this.si_1 : txId, state === void 1 ? this.ti_1 : state);
  };
  SsmSessionStateLog.prototype.ui = function (txId, state) {
    return new SsmSessionStateLog(txId, state);
  };
  SsmSessionStateLog.prototype.vi = function (txId, state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      txId = this.si_1;
    if (!(($mask0 & 2) === 0))
      state = this.ti_1;
    return this.ui(txId, state);
  };
  SsmSessionStateLog.prototype.toString = function () {
    return 'SsmSessionStateLog(txId=' + this.si_1 + ', state=' + this.ti_1 + ')';
  };
  SsmSessionStateLog.prototype.hashCode = function () {
    var result = getStringHashCode(this.si_1);
    result = imul(result, 31) + this.ti_1.hashCode() | 0;
    return result;
  };
  SsmSessionStateLog.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionStateLog))
      return false;
    var tmp0_other_with_cast = other instanceof SsmSessionStateLog ? other : THROW_CCE();
    if (!(this.si_1 === tmp0_other_with_cast.si_1))
      return false;
    if (!this.ti_1.equals(tmp0_other_with_cast.ti_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmSessionStateLog.prototype, 'txId', {
    configurable: true,
    get: function () {
      return this.qi();
    }
  });
  Object.defineProperty(SsmSessionStateLog.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.ri();
    }
  });
  function SsmTransitionDTO() {
  }
  function SsmTransition(from, to, role, action) {
    this.aj_1 = from;
    this.bj_1 = to;
    this.cj_1 = role;
    this.dj_1 = action;
  }
  SsmTransition.prototype.wi = function () {
    return this.aj_1;
  };
  SsmTransition.prototype.xi = function () {
    return this.bj_1;
  };
  SsmTransition.prototype.yi = function () {
    return this.cj_1;
  };
  SsmTransition.prototype.zi = function () {
    return this.dj_1;
  };
  SsmTransition.prototype.component1 = function () {
    return this.aj_1;
  };
  SsmTransition.prototype.component2 = function () {
    return this.bj_1;
  };
  SsmTransition.prototype.component3 = function () {
    return this.cj_1;
  };
  SsmTransition.prototype.component4 = function () {
    return this.dj_1;
  };
  SsmTransition.prototype.copy = function (from, to, role, action) {
    return this.ej(from === void 1 ? this.aj_1 : from, to === void 1 ? this.bj_1 : to, role === void 1 ? this.cj_1 : role, action === void 1 ? this.dj_1 : action);
  };
  SsmTransition.prototype.ej = function (from, to, role, action) {
    return new SsmTransition(from, to, role, action);
  };
  SsmTransition.prototype.fj = function (from, to, role, action, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = this.aj_1;
    if (!(($mask0 & 2) === 0))
      to = this.bj_1;
    if (!(($mask0 & 4) === 0))
      role = this.cj_1;
    if (!(($mask0 & 8) === 0))
      action = this.dj_1;
    return this.ej(from, to, role, action);
  };
  SsmTransition.prototype.toString = function () {
    return 'SsmTransition(from=' + this.aj_1 + ', to=' + this.bj_1 + ', role=' + this.cj_1 + ', action=' + this.dj_1 + ')';
  };
  SsmTransition.prototype.hashCode = function () {
    var result = this.aj_1;
    result = imul(result, 31) + this.bj_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.cj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.dj_1) | 0;
    return result;
  };
  SsmTransition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmTransition))
      return false;
    var tmp0_other_with_cast = other instanceof SsmTransition ? other : THROW_CCE();
    if (!(this.aj_1 === tmp0_other_with_cast.aj_1))
      return false;
    if (!(this.bj_1 === tmp0_other_with_cast.bj_1))
      return false;
    if (!(this.cj_1 === tmp0_other_with_cast.cj_1))
      return false;
    if (!(this.dj_1 === tmp0_other_with_cast.dj_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmTransition.prototype, 'from', {
    configurable: true,
    get: function () {
      return this.wi();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this.xi();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this.yi();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.zi();
    }
  });
  function WithPrivate() {
  }
  function ChaincodeUriDTO() {
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.PARTS = 3;
    this.PREFIX = 'chaincode';
  }
  Companion_0.prototype.hj = function () {
    return this.PARTS;
  };
  Companion_0.prototype.ij = function () {
    return this.PREFIX;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ChaincodeUri(uri) {
    Companion_getInstance_0();
    this.jj_1 = uri;
    var tmp = this;
    tmp.kj_1 = split$default(this.jj_1, [':'], false, 0, 6, null);
    // Inline function 'kotlin.require' call
    var tmp_0 = this.kj_1.f();
    Companion_getInstance_0();
    var tmp0_require = tmp_0 === 3;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp_1 = first(this.kj_1);
    Companion_getInstance_0();
    var tmp1_require = tmp_1 === 'chaincode';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  ChaincodeUri.prototype.gj = function () {
    return this.jj_1;
  };
  ChaincodeUri.prototype.cg = function () {
    return this.kj_1.j(1);
  };
  ChaincodeUri.prototype.lj = function () {
    return this.kj_1.j(2);
  };
  Object.defineProperty(ChaincodeUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this.gj();
    }
  });
  Object.defineProperty(ChaincodeUri.prototype, 'channelId', {
    configurable: true,
    get: ChaincodeUri.prototype.cg
  });
  Object.defineProperty(ChaincodeUri.prototype, 'chaincodeId', {
    configurable: true,
    get: ChaincodeUri.prototype.lj
  });
  function from(_this__u8e3s4, channelId, chaincodeId) {
    return new ChaincodeUri('chaincode:' + channelId + ':' + chaincodeId);
  }
  function SsmUriDTO() {
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.PARTS = 4;
    this.PREFIX = 'ssm';
  }
  Companion_1.prototype.hj = function () {
    return this.PARTS;
  };
  Companion_1.prototype.ij = function () {
    return this.PREFIX;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SsmUri(uri) {
    Companion_getInstance_1();
    this.mj_1 = uri;
    var tmp = this;
    tmp.nj_1 = split$default(this.mj_1, [':'], false, 0, 6, null);
    // Inline function 'kotlin.require' call
    var tmp_0 = this.nj_1.f();
    Companion_getInstance_1();
    var tmp0_require = tmp_0 === 4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp_1 = first(this.nj_1);
    Companion_getInstance_1();
    var tmp1_require = tmp_1 === 'ssm';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  SsmUri.prototype.gj = function () {
    return this.mj_1;
  };
  SsmUri.prototype.cg = function () {
    return this.nj_1.j(1);
  };
  SsmUri.prototype.lj = function () {
    return this.nj_1.j(2);
  };
  SsmUri.prototype.oj = function () {
    return this.nj_1.j(3);
  };
  SsmUri.prototype.pj = function () {
    return '1.0.0';
  };
  SsmUri.prototype.lf = function () {
    return from(Companion_getInstance_0(), this.channelId, this.chaincodeId);
  };
  SsmUri.prototype.component1 = function () {
    return this.mj_1;
  };
  SsmUri.prototype.copy = function (uri) {
    return this.qj(uri === void 1 ? this.mj_1 : uri);
  };
  SsmUri.prototype.qj = function (uri) {
    return new SsmUri(uri);
  };
  SsmUri.prototype.rj = function (uri, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      uri = this.mj_1;
    return this.qj(uri);
  };
  SsmUri.prototype.toString = function () {
    return 'SsmUri(uri=' + this.mj_1 + ')';
  };
  SsmUri.prototype.hashCode = function () {
    return getStringHashCode(this.mj_1);
  };
  SsmUri.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmUri))
      return false;
    var tmp0_other_with_cast = other instanceof SsmUri ? other : THROW_CCE();
    if (!(this.mj_1 === tmp0_other_with_cast.mj_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this.gj();
    }
  });
  Object.defineProperty(SsmUri.prototype, 'channelId', {
    configurable: true,
    get: SsmUri.prototype.cg
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmUri.prototype.lj
  });
  Object.defineProperty(SsmUri.prototype, 'ssmName', {
    configurable: true,
    get: SsmUri.prototype.oj
  });
  Object.defineProperty(SsmUri.prototype, 'ssmVersion', {
    configurable: true,
    get: SsmUri.prototype.pj
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeUri', {
    configurable: true,
    get: SsmUri.prototype.lf
  });
  function SsmGetAdminQuery(chaincodeUri, name) {
    this.sj_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetAdminQuery.prototype.lf = function () {
    return this.sj_1;
  };
  SsmGetAdminQuery.prototype.v7 = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmGetAdminResult(item) {
    this.tj_1 = item;
  }
  SsmGetAdminResult.prototype.mf = function () {
    return this.tj_1;
  };
  Object.defineProperty(SsmGetAdminResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.mf();
    }
  });
  function SsmGetQuery(chaincodeUri, name) {
    this.uj_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetQuery.prototype.lf = function () {
    return this.uj_1;
  };
  SsmGetQuery.prototype.v7 = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmGetResult(item) {
    this.vj_1 = item;
  }
  SsmGetResult.prototype.mf = function () {
    return this.vj_1;
  };
  Object.defineProperty(SsmGetResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.mf();
    }
  });
  function SsmGetSessionLogsQuery(chaincodeUri, ssmName, sessionName) {
    this.wj_1 = chaincodeUri;
    this.ssmName = ssmName;
    this.sessionName = sessionName;
  }
  SsmGetSessionLogsQuery.prototype.lf = function () {
    return this.wj_1;
  };
  SsmGetSessionLogsQuery.prototype.oj = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQuery.prototype.xj = function () {
    return this.sessionName;
  };
  Object.defineProperty(SsmGetSessionLogsQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmGetSessionLogsQueryResult(ssmName, sessionName, logs) {
    this.ssmName = ssmName;
    this.sessionName = sessionName;
    this.logs = logs;
  }
  SsmGetSessionLogsQueryResult.prototype.oj = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQueryResult.prototype.xj = function () {
    return this.sessionName;
  };
  SsmGetSessionLogsQueryResult.prototype.yj = function () {
    return this.logs;
  };
  SsmGetSessionLogsQueryResult.prototype.component1 = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQueryResult.prototype.component2 = function () {
    return this.sessionName;
  };
  SsmGetSessionLogsQueryResult.prototype.component3 = function () {
    return this.logs;
  };
  SsmGetSessionLogsQueryResult.prototype.copy = function (ssmName, sessionName, logs) {
    return this.zj(ssmName === void 1 ? this.ssmName : ssmName, sessionName === void 1 ? this.sessionName : sessionName, logs === void 1 ? this.logs : logs);
  };
  SsmGetSessionLogsQueryResult.prototype.zj = function (ssmName, sessionName, logs) {
    return new SsmGetSessionLogsQueryResult(ssmName, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult.prototype.ak = function (ssmName, sessionName, logs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssmName = this.ssmName;
    if (!(($mask0 & 2) === 0))
      sessionName = this.sessionName;
    if (!(($mask0 & 4) === 0))
      logs = this.logs;
    return this.zj(ssmName, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult.prototype.toString = function () {
    return 'SsmGetSessionLogsQueryResult(ssmName=' + this.ssmName + ', sessionName=' + this.sessionName + ', logs=' + this.logs + ')';
  };
  SsmGetSessionLogsQueryResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.ssmName);
    result = imul(result, 31) + getStringHashCode(this.sessionName) | 0;
    result = imul(result, 31) + hashCode(this.logs) | 0;
    return result;
  };
  SsmGetSessionLogsQueryResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetSessionLogsQueryResult))
      return false;
    var tmp0_other_with_cast = other instanceof SsmGetSessionLogsQueryResult ? other : THROW_CCE();
    if (!(this.ssmName === tmp0_other_with_cast.ssmName))
      return false;
    if (!(this.sessionName === tmp0_other_with_cast.sessionName))
      return false;
    if (!equals(this.logs, tmp0_other_with_cast.logs))
      return false;
    return true;
  };
  function SsmGetSessionQuery(chaincodeUri, sessionName) {
    this.bk_1 = chaincodeUri;
    this.sessionName = sessionName;
  }
  SsmGetSessionQuery.prototype.lf = function () {
    return this.bk_1;
  };
  SsmGetSessionQuery.prototype.xj = function () {
    return this.sessionName;
  };
  Object.defineProperty(SsmGetSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmGetSessionResult(item) {
    this.ck_1 = item;
  }
  SsmGetSessionResult.prototype.mf = function () {
    return this.ck_1;
  };
  Object.defineProperty(SsmGetSessionResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.mf();
    }
  });
  function SsmGetTransactionQuery(chaincodeUri, id) {
    this.dk_1 = chaincodeUri;
    this.id = id;
  }
  SsmGetTransactionQuery.prototype.lf = function () {
    return this.dk_1;
  };
  SsmGetTransactionQuery.prototype.sd = function () {
    return this.id;
  };
  SsmGetTransactionQuery.prototype.component1 = function () {
    return this.dk_1;
  };
  SsmGetTransactionQuery.prototype.component2 = function () {
    return this.id;
  };
  SsmGetTransactionQuery.prototype.copy = function (chaincodeUri, id) {
    return this.ek(chaincodeUri === void 1 ? this.dk_1 : chaincodeUri, id === void 1 ? this.id : id);
  };
  SsmGetTransactionQuery.prototype.ek = function (chaincodeUri, id) {
    return new SsmGetTransactionQuery(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.fk = function (chaincodeUri, id, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      chaincodeUri = this.dk_1;
    if (!(($mask0 & 2) === 0))
      id = this.id;
    return this.ek(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.toString = function () {
    return 'SsmGetTransactionQuery(chaincodeUri=' + this.dk_1 + ', id=' + this.id + ')';
  };
  SsmGetTransactionQuery.prototype.hashCode = function () {
    var result = hashCode(this.dk_1);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    return result;
  };
  SsmGetTransactionQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetTransactionQuery))
      return false;
    var tmp0_other_with_cast = other instanceof SsmGetTransactionQuery ? other : THROW_CCE();
    if (!equals(this.dk_1, tmp0_other_with_cast.dk_1))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    return true;
  };
  Object.defineProperty(SsmGetTransactionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmGetTransactionQueryResult(item) {
    this.gk_1 = item;
  }
  SsmGetTransactionQueryResult.prototype.mf = function () {
    return this.gk_1;
  };
  Object.defineProperty(SsmGetTransactionQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.mf();
    }
  });
  function SsmGetUserQuery(chaincodeUri, name) {
    this.hk_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetUserQuery.prototype.lf = function () {
    return this.hk_1;
  };
  SsmGetUserQuery.prototype.v7 = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmGetUserResult(item) {
    this.ik_1 = item;
  }
  SsmGetUserResult.prototype.mf = function () {
    return this.ik_1;
  };
  Object.defineProperty(SsmGetUserResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.mf();
    }
  });
  function SsmListAdminQuery(chaincodeUri) {
    this.jk_1 = chaincodeUri;
  }
  SsmListAdminQuery.prototype.lf = function () {
    return this.jk_1;
  };
  Object.defineProperty(SsmListAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmListAdminResult(items) {
    this.kk_1 = items;
  }
  SsmListAdminResult.prototype.he = function () {
    return this.kk_1;
  };
  Object.defineProperty(SsmListAdminResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.he();
    }
  });
  function SsmListSessionQuery(chaincodeUri) {
    this.lk_1 = chaincodeUri;
  }
  SsmListSessionQuery.prototype.lf = function () {
    return this.lk_1;
  };
  Object.defineProperty(SsmListSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmListSessionResult(items) {
    this.mk_1 = items;
  }
  SsmListSessionResult.prototype.he = function () {
    return this.mk_1;
  };
  Object.defineProperty(SsmListSessionResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.he();
    }
  });
  function SsmListSsmQuery(chaincodeUri) {
    this.nk_1 = chaincodeUri;
  }
  SsmListSsmQuery.prototype.lf = function () {
    return this.nk_1;
  };
  Object.defineProperty(SsmListSsmQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmListSsmResult(items) {
    this.ok_1 = items;
  }
  SsmListSsmResult.prototype.he = function () {
    return this.ok_1;
  };
  Object.defineProperty(SsmListSsmResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.he();
    }
  });
  function SsmListUserQuery(chaincodeUri) {
    this.pk_1 = chaincodeUri;
  }
  SsmListUserQuery.prototype.lf = function () {
    return this.pk_1;
  };
  Object.defineProperty(SsmListUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.lf();
    }
  });
  function SsmListUserResult(items) {
    this.qk_1 = items;
  }
  SsmListUserResult.prototype.he = function () {
    return this.qk_1;
  };
  Object.defineProperty(SsmListUserResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.he();
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
    $ssm$chaincode$dsl$model.Agent = Agent;
    Object.defineProperty($ssm$chaincode$dsl$model.Agent, 'Companion', {
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

//# sourceMappingURL=ssm-ssm-chaincode-dsl.js.map

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
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var Query = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.c;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$_$.b;
  var classMeta = kotlin_kotlin.$_$.k9;
  var THROW_ISE = kotlin_kotlin.$_$.ed;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var Enum = kotlin_kotlin.$_$.sc;
  var objectMeta = kotlin_kotlin.$_$.la;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var contentEquals = kotlin_kotlin.$_$.b6;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var contentHashCode = kotlin_kotlin.$_$.c6;
  var toString = kotlin_kotlin.$_$.qa;
  var hashCode = kotlin_kotlin.$_$.r9;
  var equals = kotlin_kotlin.$_$.m9;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var toString_0 = kotlin_kotlin.$_$.fe;
  var split$default = kotlin_kotlin.$_$.v;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var first = kotlin_kotlin.$_$.y6;
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
    this.s2l_1 = blockId;
    this.t2l_1 = previousHash;
    this.u2l_1 = dataHash;
    this.v2l_1 = transactions;
  }
  Block.prototype.o2l = function () {
    return this.s2l_1;
  };
  Block.prototype.p2l = function () {
    return this.t2l_1;
  };
  Block.prototype.q2l = function () {
    return this.u2l_1;
  };
  Block.prototype.r2l = function () {
    return this.v2l_1;
  };
  Object.defineProperty(Block.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this.o2l();
    }
  });
  Object.defineProperty(Block.prototype, 'previousHash', {
    configurable: true,
    get: function () {
      return this.p2l();
    }
  });
  Object.defineProperty(Block.prototype, 'dataHash', {
    configurable: true,
    get: function () {
      return this.q2l();
    }
  });
  Object.defineProperty(Block.prototype, 'transactions', {
    configurable: true,
    get: function () {
      return this.r2l();
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
    get: EnvelopeType.prototype.gf
  });
  Object.defineProperty(EnvelopeType.prototype, 'ordinal', {
    configurable: true,
    get: EnvelopeType.prototype.hf
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
    this.z2l_1 = id;
    this.a2m_1 = mspid;
  }
  IdentitiesInfo.prototype.t2j = function () {
    return this.z2l_1;
  };
  IdentitiesInfo.prototype.y2l = function () {
    return this.a2m_1;
  };
  Object.defineProperty(IdentitiesInfo.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.t2j();
    }
  });
  Object.defineProperty(IdentitiesInfo.prototype, 'mspid', {
    configurable: true,
    get: function () {
      return this.y2l();
    }
  });
  function TransactionDTO() {
  }
  function Transaction(transactionId, blockId, timestamp, isValid, channelId, creator, nonce, type, validationCode) {
    this.h2m_1 = transactionId;
    this.i2m_1 = blockId;
    this.j2m_1 = timestamp;
    this.k2m_1 = isValid;
    this.l2m_1 = channelId;
    this.m2m_1 = creator;
    this.n2m_1 = nonce;
    this.o2m_1 = type;
    this.p2m_1 = validationCode;
  }
  Transaction.prototype.b2m = function () {
    return this.h2m_1;
  };
  Transaction.prototype.o2l = function () {
    return this.i2m_1;
  };
  Transaction.prototype.u2j = function () {
    return this.j2m_1;
  };
  Transaction.prototype.c2m = function () {
    return this.k2m_1;
  };
  Transaction.prototype.d2m = function () {
    return this.l2m_1;
  };
  Transaction.prototype.e2m = function () {
    return this.m2m_1;
  };
  Transaction.prototype.f2m = function () {
    return this.n2m_1;
  };
  Transaction.prototype.d2j = function () {
    return this.o2m_1;
  };
  Transaction.prototype.g2m = function () {
    return this.p2m_1;
  };
  Object.defineProperty(Transaction.prototype, 'transactionId', {
    configurable: true,
    get: function () {
      return this.b2m();
    }
  });
  Object.defineProperty(Transaction.prototype, 'blockId', {
    configurable: true,
    get: function () {
      return this.o2l();
    }
  });
  Object.defineProperty(Transaction.prototype, 'timestamp', {
    configurable: true,
    get: function () {
      return this.u2j();
    }
  });
  Object.defineProperty(Transaction.prototype, 'isValid', {
    configurable: true,
    get: function () {
      return this.c2m();
    }
  });
  Object.defineProperty(Transaction.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this.d2m();
    }
  });
  Object.defineProperty(Transaction.prototype, 'creator', {
    configurable: true,
    get: function () {
      return this.e2m();
    }
  });
  Object.defineProperty(Transaction.prototype, 'nonce', {
    configurable: true,
    get: function () {
      return this.f2m();
    }
  });
  Object.defineProperty(Transaction.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.d2j();
    }
  });
  Object.defineProperty(Transaction.prototype, 'validationCode', {
    configurable: true,
    get: function () {
      return this.g2m();
    }
  });
  function SsmChaincodePropertiesDTO() {
  }
  function ChaincodeSsmConfig(url) {
    this.r2m_1 = url;
  }
  ChaincodeSsmConfig.prototype.q2m = function () {
    return this.r2m_1;
  };
  Object.defineProperty(ChaincodeSsmConfig.prototype, 'url', {
    configurable: true,
    get: function () {
      return this.q2m();
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
    this.t2m_1 = name;
    this.u2m_1 = pub;
  }
  Agent.prototype.gf = function () {
    return this.t2m_1;
  };
  Agent.prototype.s2m = function () {
    return this.u2m_1;
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
    if (!(this.t2m_1 === other.t2m_1))
      return false;
    if (!contentEquals(this.u2m_1, other.u2m_1))
      return false;
    return true;
  };
  Agent.prototype.hashCode = function () {
    var result = getStringHashCode(this.t2m_1);
    result = imul(31, result) + contentHashCode(this.u2m_1) | 0;
    return result;
  };
  Agent.prototype.component1 = function () {
    return this.t2m_1;
  };
  Agent.prototype.component2 = function () {
    return this.u2m_1;
  };
  Agent.prototype.copy = function (name, pub) {
    return this.v2m(name === void 1 ? this.t2m_1 : name, pub === void 1 ? this.u2m_1 : pub);
  };
  Agent.prototype.v2m = function (name, pub) {
    return new Agent(name, pub);
  };
  Agent.prototype.w2m = function (name, pub, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.t2m_1;
    if (!(($mask0 & 2) === 0))
      pub = this.u2m_1;
    return this.v2m(name, pub);
  };
  Agent.prototype.toString = function () {
    return 'Agent(name=' + this.t2m_1 + ', pub=' + toString(this.u2m_1) + ')';
  };
  Object.defineProperty(Agent.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.gf();
    }
  });
  Object.defineProperty(Agent.prototype, 'pub', {
    configurable: true,
    get: function () {
      return this.s2m();
    }
  });
  function ChaincodeDTO() {
  }
  function Chaincode(id, channelId) {
    this.x2m_1 = id;
    this.y2m_1 = channelId;
  }
  Chaincode.prototype.t2j = function () {
    return this.x2m_1;
  };
  Chaincode.prototype.d2m = function () {
    return this.y2m_1;
  };
  Chaincode.prototype.component1 = function () {
    return this.x2m_1;
  };
  Chaincode.prototype.component2 = function () {
    return this.y2m_1;
  };
  Chaincode.prototype.copy = function (id, channelId) {
    return this.z2m(id === void 1 ? this.x2m_1 : id, channelId === void 1 ? this.y2m_1 : channelId);
  };
  Chaincode.prototype.z2m = function (id, channelId) {
    return new Chaincode(id, channelId);
  };
  Chaincode.prototype.a2n = function (id, channelId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.x2m_1;
    if (!(($mask0 & 2) === 0))
      channelId = this.y2m_1;
    return this.z2m(id, channelId);
  };
  Chaincode.prototype.toString = function () {
    return 'Chaincode(id=' + this.x2m_1 + ', channelId=' + this.y2m_1 + ')';
  };
  Chaincode.prototype.hashCode = function () {
    var result = getStringHashCode(this.x2m_1);
    result = imul(result, 31) + getStringHashCode(this.y2m_1) | 0;
    return result;
  };
  Chaincode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Chaincode))
      return false;
    var tmp0_other_with_cast = other instanceof Chaincode ? other : THROW_CCE();
    if (!(this.x2m_1 === tmp0_other_with_cast.x2m_1))
      return false;
    if (!(this.y2m_1 === tmp0_other_with_cast.y2m_1))
      return false;
    return true;
  };
  Object.defineProperty(Chaincode.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.t2j();
    }
  });
  Object.defineProperty(Chaincode.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this.d2m();
    }
  });
  function SsmDTO() {
  }
  function Ssm(name, transitions) {
    this.c2n_1 = name;
    this.d2n_1 = transitions;
  }
  Ssm.prototype.gf = function () {
    return this.c2n_1;
  };
  Ssm.prototype.b2n = function () {
    return this.d2n_1;
  };
  Ssm.prototype.component1 = function () {
    return this.c2n_1;
  };
  Ssm.prototype.component2 = function () {
    return this.d2n_1;
  };
  Ssm.prototype.copy = function (name, transitions) {
    return this.e2n(name === void 1 ? this.c2n_1 : name, transitions === void 1 ? this.d2n_1 : transitions);
  };
  Ssm.prototype.e2n = function (name, transitions) {
    return new Ssm(name, transitions);
  };
  Ssm.prototype.f2n = function (name, transitions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.c2n_1;
    if (!(($mask0 & 2) === 0))
      transitions = this.d2n_1;
    return this.e2n(name, transitions);
  };
  Ssm.prototype.toString = function () {
    return 'Ssm(name=' + this.c2n_1 + ', transitions=' + this.d2n_1 + ')';
  };
  Ssm.prototype.hashCode = function () {
    var result = getStringHashCode(this.c2n_1);
    result = imul(result, 31) + hashCode(this.d2n_1) | 0;
    return result;
  };
  Ssm.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ssm))
      return false;
    var tmp0_other_with_cast = other instanceof Ssm ? other : THROW_CCE();
    if (!(this.c2n_1 === tmp0_other_with_cast.c2n_1))
      return false;
    if (!equals(this.d2n_1, tmp0_other_with_cast.d2n_1))
      return false;
    return true;
  };
  Object.defineProperty(Ssm.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.gf();
    }
  });
  Object.defineProperty(Ssm.prototype, 'transitions', {
    configurable: true,
    get: function () {
      return this.b2n();
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
    this.k2n_1 = session;
    this.l2n_1 = public_0;
    this.m2n_1 = iteration;
    this.n2n_1 = private_1;
  }
  SsmContext.prototype.g2n = function () {
    return this.k2n_1;
  };
  SsmContext.prototype.h2n = function () {
    return this.l2n_1;
  };
  SsmContext.prototype.i2n = function () {
    return this.m2n_1;
  };
  SsmContext.prototype.j2n = function () {
    return this.n2n_1;
  };
  SsmContext.prototype.component1 = function () {
    return this.k2n_1;
  };
  SsmContext.prototype.component2 = function () {
    return this.l2n_1;
  };
  SsmContext.prototype.component3 = function () {
    return this.m2n_1;
  };
  SsmContext.prototype.component4 = function () {
    return this.n2n_1;
  };
  SsmContext.prototype.copy = function (session, public_0, iteration, private_0) {
    return this.o2n(session === void 1 ? this.k2n_1 : session, public_0 === void 1 ? this.l2n_1 : public_0, iteration === void 1 ? this.m2n_1 : iteration, private_0 === void 1 ? this.n2n_1 : private_0);
  };
  SsmContext.prototype.o2n = function (session, public_0, iteration, private_0) {
    return new SsmContext(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.p2n = function (session, public_0, iteration, private_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      session = this.k2n_1;
    if (!(($mask0 & 2) === 0))
      public_0 = this.l2n_1;
    if (!(($mask0 & 4) === 0))
      iteration = this.m2n_1;
    if (!(($mask0 & 8) === 0))
      private_0 = this.n2n_1;
    return this.o2n(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.toString = function () {
    return 'SsmContext(session=' + this.k2n_1 + ', public=' + this.l2n_1 + ', iteration=' + this.m2n_1 + ', private=' + this.n2n_1 + ')';
  };
  SsmContext.prototype.hashCode = function () {
    var result = getStringHashCode(this.k2n_1);
    result = imul(result, 31) + getStringHashCode(this.l2n_1) | 0;
    result = imul(result, 31) + this.m2n_1 | 0;
    result = imul(result, 31) + (this.n2n_1 == null ? 0 : hashCode(this.n2n_1)) | 0;
    return result;
  };
  SsmContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmContext))
      return false;
    var tmp0_other_with_cast = other instanceof SsmContext ? other : THROW_CCE();
    if (!(this.k2n_1 === tmp0_other_with_cast.k2n_1))
      return false;
    if (!(this.l2n_1 === tmp0_other_with_cast.l2n_1))
      return false;
    if (!(this.m2n_1 === tmp0_other_with_cast.m2n_1))
      return false;
    if (!equals(this.n2n_1, tmp0_other_with_cast.n2n_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmContext.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.g2n();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.h2n();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this.i2n();
    }
  });
  Object.defineProperty(SsmContext.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.j2n();
    }
  });
  function SsmGrantDTO() {
  }
  function SsmGrant(user, iteration, credits) {
    this.user = user;
    this.iteration = iteration;
    this.credits = credits;
  }
  SsmGrant.prototype.q2n = function () {
    return this.user;
  };
  SsmGrant.prototype.i2n = function () {
    return this.iteration;
  };
  SsmGrant.prototype.r2n = function () {
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
    return this.s2n(user === void 1 ? this.user : user, iteration === void 1 ? this.iteration : iteration, credits === void 1 ? this.credits : credits);
  };
  SsmGrant.prototype.s2n = function (user, iteration, credits) {
    return new SsmGrant(user, iteration, credits);
  };
  SsmGrant.prototype.t2n = function (user, iteration, credits, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      user = this.user;
    if (!(($mask0 & 2) === 0))
      iteration = this.iteration;
    if (!(($mask0 & 4) === 0))
      credits = this.credits;
    return this.s2n(user, iteration, credits);
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
    this.v2n_1 = amount;
  }
  Credit.prototype.u2n = function () {
    return this.v2n_1;
  };
  Credit.prototype.component1 = function () {
    return this.v2n_1;
  };
  Credit.prototype.copy = function (amount) {
    return this.w2n(amount === void 1 ? this.v2n_1 : amount);
  };
  Credit.prototype.w2n = function (amount) {
    return new Credit(amount);
  };
  Credit.prototype.x2n = function (amount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      amount = this.v2n_1;
    return this.w2n(amount);
  };
  Credit.prototype.toString = function () {
    return 'Credit(amount=' + this.v2n_1 + ')';
  };
  Credit.prototype.hashCode = function () {
    return this.v2n_1;
  };
  Credit.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Credit))
      return false;
    var tmp0_other_with_cast = other instanceof Credit ? other : THROW_CCE();
    if (!(this.v2n_1 === tmp0_other_with_cast.v2n_1))
      return false;
    return true;
  };
  Object.defineProperty(Credit.prototype, 'amount', {
    configurable: true,
    get: function () {
      return this.u2n();
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
    this.a2o_1 = ssm;
    this.b2o_1 = session;
    this.c2o_1 = roles;
    this.d2o_1 = public_0;
    this.e2o_1 = private_1;
  }
  SsmSession.prototype.y2n = function () {
    return this.a2o_1;
  };
  SsmSession.prototype.g2n = function () {
    return this.b2o_1;
  };
  SsmSession.prototype.z2n = function () {
    return this.c2o_1;
  };
  SsmSession.prototype.h2n = function () {
    return this.d2o_1;
  };
  SsmSession.prototype.j2n = function () {
    return this.e2o_1;
  };
  Object.defineProperty(SsmSession.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this.y2n();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.g2n();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this.z2n();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.h2n();
    }
  });
  Object.defineProperty(SsmSession.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.j2n();
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
    this.h2o_1 = ssm;
    this.i2o_1 = session;
    this.j2o_1 = roles;
    this.k2o_1 = public_0;
    this.l2o_1 = private_1;
    this.m2o_1 = origin;
    this.n2o_1 = current;
    this.o2o_1 = iteration;
  }
  SsmSessionState.prototype.y2n = function () {
    return this.h2o_1;
  };
  SsmSessionState.prototype.g2n = function () {
    return this.i2o_1;
  };
  SsmSessionState.prototype.z2n = function () {
    return this.j2o_1;
  };
  SsmSessionState.prototype.h2n = function () {
    return this.k2o_1;
  };
  SsmSessionState.prototype.j2n = function () {
    return this.l2o_1;
  };
  SsmSessionState.prototype.f2o = function () {
    return this.m2o_1;
  };
  SsmSessionState.prototype.g2o = function () {
    return this.n2o_1;
  };
  SsmSessionState.prototype.i2n = function () {
    return this.o2o_1;
  };
  SsmSessionState.prototype.component1 = function () {
    return this.h2o_1;
  };
  SsmSessionState.prototype.component2 = function () {
    return this.i2o_1;
  };
  SsmSessionState.prototype.component3 = function () {
    return this.j2o_1;
  };
  SsmSessionState.prototype.component4 = function () {
    return this.k2o_1;
  };
  SsmSessionState.prototype.component5 = function () {
    return this.l2o_1;
  };
  SsmSessionState.prototype.component6 = function () {
    return this.m2o_1;
  };
  SsmSessionState.prototype.component7 = function () {
    return this.n2o_1;
  };
  SsmSessionState.prototype.component8 = function () {
    return this.o2o_1;
  };
  SsmSessionState.prototype.copy = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return this.p2o(ssm === void 1 ? this.h2o_1 : ssm, session === void 1 ? this.i2o_1 : session, roles === void 1 ? this.j2o_1 : roles, public_0 === void 1 ? this.k2o_1 : public_0, private_0 === void 1 ? this.l2o_1 : private_0, origin === void 1 ? this.m2o_1 : origin, current === void 1 ? this.n2o_1 : current, iteration === void 1 ? this.o2o_1 : iteration);
  };
  SsmSessionState.prototype.p2o = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return new SsmSessionState(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.q2o = function (ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssm = this.h2o_1;
    if (!(($mask0 & 2) === 0))
      session = this.i2o_1;
    if (!(($mask0 & 4) === 0))
      roles = this.j2o_1;
    if (!(($mask0 & 8) === 0))
      public_0 = this.k2o_1;
    if (!(($mask0 & 16) === 0))
      private_0 = this.l2o_1;
    if (!(($mask0 & 32) === 0))
      origin = this.m2o_1;
    if (!(($mask0 & 64) === 0))
      current = this.n2o_1;
    if (!(($mask0 & 128) === 0))
      iteration = this.o2o_1;
    return this.p2o(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState.prototype.toString = function () {
    return 'SsmSessionState(ssm=' + this.h2o_1 + ', session=' + this.i2o_1 + ', roles=' + this.j2o_1 + ', public=' + toString_0(this.k2o_1) + ', private=' + this.l2o_1 + ', origin=' + this.m2o_1 + ', current=' + this.n2o_1 + ', iteration=' + this.o2o_1 + ')';
  };
  SsmSessionState.prototype.hashCode = function () {
    var result = this.h2o_1 == null ? 0 : getStringHashCode(this.h2o_1);
    result = imul(result, 31) + getStringHashCode(this.i2o_1) | 0;
    result = imul(result, 31) + (this.j2o_1 == null ? 0 : hashCode(this.j2o_1)) | 0;
    result = imul(result, 31) + (this.k2o_1 == null ? 0 : hashCode(this.k2o_1)) | 0;
    result = imul(result, 31) + (this.l2o_1 == null ? 0 : hashCode(this.l2o_1)) | 0;
    result = imul(result, 31) + (this.m2o_1 == null ? 0 : this.m2o_1.hashCode()) | 0;
    result = imul(result, 31) + this.n2o_1 | 0;
    result = imul(result, 31) + this.o2o_1 | 0;
    return result;
  };
  SsmSessionState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionState))
      return false;
    var tmp0_other_with_cast = other instanceof SsmSessionState ? other : THROW_CCE();
    if (!(this.h2o_1 == tmp0_other_with_cast.h2o_1))
      return false;
    if (!(this.i2o_1 === tmp0_other_with_cast.i2o_1))
      return false;
    if (!equals(this.j2o_1, tmp0_other_with_cast.j2o_1))
      return false;
    if (!equals(this.k2o_1, tmp0_other_with_cast.k2o_1))
      return false;
    if (!equals(this.l2o_1, tmp0_other_with_cast.l2o_1))
      return false;
    if (!equals(this.m2o_1, tmp0_other_with_cast.m2o_1))
      return false;
    if (!(this.n2o_1 === tmp0_other_with_cast.n2o_1))
      return false;
    if (!(this.o2o_1 === tmp0_other_with_cast.o2o_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmSessionState.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this.y2n();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'session', {
    configurable: true,
    get: function () {
      return this.g2n();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this.z2n();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'public', {
    configurable: true,
    get: function () {
      return this.h2n();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'private', {
    configurable: true,
    get: function () {
      return this.j2n();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'origin', {
    configurable: true,
    get: function () {
      return this.f2o();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'current', {
    configurable: true,
    get: function () {
      return this.g2o();
    }
  });
  Object.defineProperty(SsmSessionState.prototype, 'iteration', {
    configurable: true,
    get: function () {
      return this.i2n();
    }
  });
  function SsmSessionStateLogDTO() {
  }
  function SsmSessionStateLog(txId, state) {
    this.s2o_1 = txId;
    this.t2o_1 = state;
  }
  SsmSessionStateLog.prototype.r2o = function () {
    return this.s2o_1;
  };
  SsmSessionStateLog.prototype.lg = function () {
    return this.t2o_1;
  };
  SsmSessionStateLog.prototype.component1 = function () {
    return this.s2o_1;
  };
  SsmSessionStateLog.prototype.component2 = function () {
    return this.t2o_1;
  };
  SsmSessionStateLog.prototype.copy = function (txId, state) {
    return this.u2o(txId === void 1 ? this.s2o_1 : txId, state === void 1 ? this.t2o_1 : state);
  };
  SsmSessionStateLog.prototype.u2o = function (txId, state) {
    return new SsmSessionStateLog(txId, state);
  };
  SsmSessionStateLog.prototype.v2o = function (txId, state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      txId = this.s2o_1;
    if (!(($mask0 & 2) === 0))
      state = this.t2o_1;
    return this.u2o(txId, state);
  };
  SsmSessionStateLog.prototype.toString = function () {
    return 'SsmSessionStateLog(txId=' + this.s2o_1 + ', state=' + this.t2o_1 + ')';
  };
  SsmSessionStateLog.prototype.hashCode = function () {
    var result = getStringHashCode(this.s2o_1);
    result = imul(result, 31) + this.t2o_1.hashCode() | 0;
    return result;
  };
  SsmSessionStateLog.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionStateLog))
      return false;
    var tmp0_other_with_cast = other instanceof SsmSessionStateLog ? other : THROW_CCE();
    if (!(this.s2o_1 === tmp0_other_with_cast.s2o_1))
      return false;
    if (!this.t2o_1.equals(tmp0_other_with_cast.t2o_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmSessionStateLog.prototype, 'txId', {
    configurable: true,
    get: function () {
      return this.r2o();
    }
  });
  Object.defineProperty(SsmSessionStateLog.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.lg();
    }
  });
  function SsmTransitionDTO() {
  }
  function SsmTransition(from, to, role, action) {
    this.a2p_1 = from;
    this.b2p_1 = to;
    this.c2p_1 = role;
    this.d2p_1 = action;
  }
  SsmTransition.prototype.w2o = function () {
    return this.a2p_1;
  };
  SsmTransition.prototype.x2o = function () {
    return this.b2p_1;
  };
  SsmTransition.prototype.y2o = function () {
    return this.c2p_1;
  };
  SsmTransition.prototype.z2o = function () {
    return this.d2p_1;
  };
  SsmTransition.prototype.component1 = function () {
    return this.a2p_1;
  };
  SsmTransition.prototype.component2 = function () {
    return this.b2p_1;
  };
  SsmTransition.prototype.component3 = function () {
    return this.c2p_1;
  };
  SsmTransition.prototype.component4 = function () {
    return this.d2p_1;
  };
  SsmTransition.prototype.copy = function (from, to, role, action) {
    return this.e2p(from === void 1 ? this.a2p_1 : from, to === void 1 ? this.b2p_1 : to, role === void 1 ? this.c2p_1 : role, action === void 1 ? this.d2p_1 : action);
  };
  SsmTransition.prototype.e2p = function (from, to, role, action) {
    return new SsmTransition(from, to, role, action);
  };
  SsmTransition.prototype.f2p = function (from, to, role, action, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = this.a2p_1;
    if (!(($mask0 & 2) === 0))
      to = this.b2p_1;
    if (!(($mask0 & 4) === 0))
      role = this.c2p_1;
    if (!(($mask0 & 8) === 0))
      action = this.d2p_1;
    return this.e2p(from, to, role, action);
  };
  SsmTransition.prototype.toString = function () {
    return 'SsmTransition(from=' + this.a2p_1 + ', to=' + this.b2p_1 + ', role=' + this.c2p_1 + ', action=' + this.d2p_1 + ')';
  };
  SsmTransition.prototype.hashCode = function () {
    var result = this.a2p_1;
    result = imul(result, 31) + this.b2p_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.c2p_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d2p_1) | 0;
    return result;
  };
  SsmTransition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmTransition))
      return false;
    var tmp0_other_with_cast = other instanceof SsmTransition ? other : THROW_CCE();
    if (!(this.a2p_1 === tmp0_other_with_cast.a2p_1))
      return false;
    if (!(this.b2p_1 === tmp0_other_with_cast.b2p_1))
      return false;
    if (!(this.c2p_1 === tmp0_other_with_cast.c2p_1))
      return false;
    if (!(this.d2p_1 === tmp0_other_with_cast.d2p_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmTransition.prototype, 'from', {
    configurable: true,
    get: function () {
      return this.w2o();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this.x2o();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this.y2o();
    }
  });
  Object.defineProperty(SsmTransition.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.z2o();
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
  Companion_0.prototype.h2p = function () {
    return this.PARTS;
  };
  Companion_0.prototype.i2p = function () {
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
    this.j2p_1 = uri;
    var tmp = this;
    tmp.k2p_1 = split$default(this.j2p_1, [':'], false, 0, 6, null);
    // Inline function 'kotlin.require' call
    var tmp_0 = this.k2p_1.f();
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
    var tmp_1 = first(this.k2p_1);
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
  ChaincodeUri.prototype.g2p = function () {
    return this.j2p_1;
  };
  ChaincodeUri.prototype.d2m = function () {
    return this.k2p_1.j(1);
  };
  ChaincodeUri.prototype.l2p = function () {
    return this.k2p_1.j(2);
  };
  Object.defineProperty(ChaincodeUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this.g2p();
    }
  });
  Object.defineProperty(ChaincodeUri.prototype, 'channelId', {
    configurable: true,
    get: ChaincodeUri.prototype.d2m
  });
  Object.defineProperty(ChaincodeUri.prototype, 'chaincodeId', {
    configurable: true,
    get: ChaincodeUri.prototype.l2p
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
  Companion_1.prototype.h2p = function () {
    return this.PARTS;
  };
  Companion_1.prototype.i2p = function () {
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
    this.m2p_1 = uri;
    var tmp = this;
    tmp.n2p_1 = split$default(this.m2p_1, [':'], false, 0, 6, null);
    // Inline function 'kotlin.require' call
    var tmp_0 = this.n2p_1.f();
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
    var tmp_1 = first(this.n2p_1);
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
  SsmUri.prototype.g2p = function () {
    return this.m2p_1;
  };
  SsmUri.prototype.d2m = function () {
    return this.n2p_1.j(1);
  };
  SsmUri.prototype.l2p = function () {
    return this.n2p_1.j(2);
  };
  SsmUri.prototype.o2p = function () {
    return this.n2p_1.j(3);
  };
  SsmUri.prototype.p2p = function () {
    return '1.0.0';
  };
  SsmUri.prototype.m2l = function () {
    return from(Companion_getInstance_0(), this.channelId, this.chaincodeId);
  };
  SsmUri.prototype.component1 = function () {
    return this.m2p_1;
  };
  SsmUri.prototype.copy = function (uri) {
    return this.q2p(uri === void 1 ? this.m2p_1 : uri);
  };
  SsmUri.prototype.q2p = function (uri) {
    return new SsmUri(uri);
  };
  SsmUri.prototype.r2p = function (uri, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      uri = this.m2p_1;
    return this.q2p(uri);
  };
  SsmUri.prototype.toString = function () {
    return 'SsmUri(uri=' + this.m2p_1 + ')';
  };
  SsmUri.prototype.hashCode = function () {
    return getStringHashCode(this.m2p_1);
  };
  SsmUri.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmUri))
      return false;
    var tmp0_other_with_cast = other instanceof SsmUri ? other : THROW_CCE();
    if (!(this.m2p_1 === tmp0_other_with_cast.m2p_1))
      return false;
    return true;
  };
  Object.defineProperty(SsmUri.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this.g2p();
    }
  });
  Object.defineProperty(SsmUri.prototype, 'channelId', {
    configurable: true,
    get: SsmUri.prototype.d2m
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmUri.prototype.l2p
  });
  Object.defineProperty(SsmUri.prototype, 'ssmName', {
    configurable: true,
    get: SsmUri.prototype.o2p
  });
  Object.defineProperty(SsmUri.prototype, 'ssmVersion', {
    configurable: true,
    get: SsmUri.prototype.p2p
  });
  Object.defineProperty(SsmUri.prototype, 'chaincodeUri', {
    configurable: true,
    get: SsmUri.prototype.m2l
  });
  function SsmGetAdminQuery(chaincodeUri, name) {
    this.s2p_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetAdminQuery.prototype.m2l = function () {
    return this.s2p_1;
  };
  SsmGetAdminQuery.prototype.gf = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmGetAdminResult(item) {
    this.t2p_1 = item;
  }
  SsmGetAdminResult.prototype.n2l = function () {
    return this.t2p_1;
  };
  Object.defineProperty(SsmGetAdminResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.n2l();
    }
  });
  function SsmGetQuery(chaincodeUri, name) {
    this.u2p_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetQuery.prototype.m2l = function () {
    return this.u2p_1;
  };
  SsmGetQuery.prototype.gf = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmGetResult(item) {
    this.v2p_1 = item;
  }
  SsmGetResult.prototype.n2l = function () {
    return this.v2p_1;
  };
  Object.defineProperty(SsmGetResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.n2l();
    }
  });
  function SsmGetSessionLogsQuery(chaincodeUri, ssmName, sessionName) {
    this.w2p_1 = chaincodeUri;
    this.ssmName = ssmName;
    this.sessionName = sessionName;
  }
  SsmGetSessionLogsQuery.prototype.m2l = function () {
    return this.w2p_1;
  };
  SsmGetSessionLogsQuery.prototype.o2p = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQuery.prototype.x2p = function () {
    return this.sessionName;
  };
  Object.defineProperty(SsmGetSessionLogsQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmGetSessionLogsQueryResult(ssmName, sessionName, logs) {
    this.ssmName = ssmName;
    this.sessionName = sessionName;
    this.logs = logs;
  }
  SsmGetSessionLogsQueryResult.prototype.o2p = function () {
    return this.ssmName;
  };
  SsmGetSessionLogsQueryResult.prototype.x2p = function () {
    return this.sessionName;
  };
  SsmGetSessionLogsQueryResult.prototype.y2p = function () {
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
    return this.z2p(ssmName === void 1 ? this.ssmName : ssmName, sessionName === void 1 ? this.sessionName : sessionName, logs === void 1 ? this.logs : logs);
  };
  SsmGetSessionLogsQueryResult.prototype.z2p = function (ssmName, sessionName, logs) {
    return new SsmGetSessionLogsQueryResult(ssmName, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult.prototype.a2q = function (ssmName, sessionName, logs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssmName = this.ssmName;
    if (!(($mask0 & 2) === 0))
      sessionName = this.sessionName;
    if (!(($mask0 & 4) === 0))
      logs = this.logs;
    return this.z2p(ssmName, sessionName, logs);
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
    this.b2q_1 = chaincodeUri;
    this.sessionName = sessionName;
  }
  SsmGetSessionQuery.prototype.m2l = function () {
    return this.b2q_1;
  };
  SsmGetSessionQuery.prototype.x2p = function () {
    return this.sessionName;
  };
  Object.defineProperty(SsmGetSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmGetSessionResult(item) {
    this.c2q_1 = item;
  }
  SsmGetSessionResult.prototype.n2l = function () {
    return this.c2q_1;
  };
  Object.defineProperty(SsmGetSessionResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.n2l();
    }
  });
  function SsmGetTransactionQuery(chaincodeUri, id) {
    this.d2q_1 = chaincodeUri;
    this.id = id;
  }
  SsmGetTransactionQuery.prototype.m2l = function () {
    return this.d2q_1;
  };
  SsmGetTransactionQuery.prototype.t2j = function () {
    return this.id;
  };
  SsmGetTransactionQuery.prototype.component1 = function () {
    return this.d2q_1;
  };
  SsmGetTransactionQuery.prototype.component2 = function () {
    return this.id;
  };
  SsmGetTransactionQuery.prototype.copy = function (chaincodeUri, id) {
    return this.e2q(chaincodeUri === void 1 ? this.d2q_1 : chaincodeUri, id === void 1 ? this.id : id);
  };
  SsmGetTransactionQuery.prototype.e2q = function (chaincodeUri, id) {
    return new SsmGetTransactionQuery(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.f2q = function (chaincodeUri, id, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      chaincodeUri = this.d2q_1;
    if (!(($mask0 & 2) === 0))
      id = this.id;
    return this.e2q(chaincodeUri, id);
  };
  SsmGetTransactionQuery.prototype.toString = function () {
    return 'SsmGetTransactionQuery(chaincodeUri=' + this.d2q_1 + ', id=' + this.id + ')';
  };
  SsmGetTransactionQuery.prototype.hashCode = function () {
    var result = hashCode(this.d2q_1);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    return result;
  };
  SsmGetTransactionQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetTransactionQuery))
      return false;
    var tmp0_other_with_cast = other instanceof SsmGetTransactionQuery ? other : THROW_CCE();
    if (!equals(this.d2q_1, tmp0_other_with_cast.d2q_1))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    return true;
  };
  Object.defineProperty(SsmGetTransactionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmGetTransactionQueryResult(item) {
    this.g2q_1 = item;
  }
  SsmGetTransactionQueryResult.prototype.n2l = function () {
    return this.g2q_1;
  };
  Object.defineProperty(SsmGetTransactionQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.n2l();
    }
  });
  function SsmGetUserQuery(chaincodeUri, name) {
    this.h2q_1 = chaincodeUri;
    this.name = name;
  }
  SsmGetUserQuery.prototype.m2l = function () {
    return this.h2q_1;
  };
  SsmGetUserQuery.prototype.gf = function () {
    return this.name;
  };
  Object.defineProperty(SsmGetUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmGetUserResult(item) {
    this.i2q_1 = item;
  }
  SsmGetUserResult.prototype.n2l = function () {
    return this.i2q_1;
  };
  Object.defineProperty(SsmGetUserResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this.n2l();
    }
  });
  function SsmListAdminQuery(chaincodeUri) {
    this.j2q_1 = chaincodeUri;
  }
  SsmListAdminQuery.prototype.m2l = function () {
    return this.j2q_1;
  };
  Object.defineProperty(SsmListAdminQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmListAdminResult(items) {
    this.k2q_1 = items;
  }
  SsmListAdminResult.prototype.i2k = function () {
    return this.k2q_1;
  };
  Object.defineProperty(SsmListAdminResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.i2k();
    }
  });
  function SsmListSessionQuery(chaincodeUri) {
    this.l2q_1 = chaincodeUri;
  }
  SsmListSessionQuery.prototype.m2l = function () {
    return this.l2q_1;
  };
  Object.defineProperty(SsmListSessionQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmListSessionResult(items) {
    this.m2q_1 = items;
  }
  SsmListSessionResult.prototype.i2k = function () {
    return this.m2q_1;
  };
  Object.defineProperty(SsmListSessionResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.i2k();
    }
  });
  function SsmListSsmQuery(chaincodeUri) {
    this.n2q_1 = chaincodeUri;
  }
  SsmListSsmQuery.prototype.m2l = function () {
    return this.n2q_1;
  };
  Object.defineProperty(SsmListSsmQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmListSsmResult(items) {
    this.o2q_1 = items;
  }
  SsmListSsmResult.prototype.i2k = function () {
    return this.o2q_1;
  };
  Object.defineProperty(SsmListSsmResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.i2k();
    }
  });
  function SsmListUserQuery(chaincodeUri) {
    this.p2q_1 = chaincodeUri;
  }
  SsmListUserQuery.prototype.m2l = function () {
    return this.p2q_1;
  };
  Object.defineProperty(SsmListUserQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this.m2l();
    }
  });
  function SsmListUserResult(items) {
    this.q2q_1 = items;
  }
  SsmListUserResult.prototype.i2k = function () {
    return this.q2q_1;
  };
  Object.defineProperty(SsmListUserResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this.i2k();
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

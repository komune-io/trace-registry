(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_city_smartb_f2_f2_dsl_cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_s2_s2_automate_dsl'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_city_smartb_s2_s2_automate_dsl'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_s2_s2_automate_dsl'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'kotlin_city_smartb_s2_s2_automate_dsl'.");
    }
    root.kotlin_city_smartb_s2_s2_automate_dsl = factory(typeof kotlin_city_smartb_s2_s2_automate_dsl === 'undefined' ? {} : kotlin_city_smartb_s2_s2_automate_dsl, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs);
  }
}(this, function (_, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs) {
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var Collection = kotlin_kotlin.$crossModule$.Collection;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var Command = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.Command;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.Event;
  var emptyList = kotlin_kotlin.$crossModule$.emptyList;
  var copyToArray = kotlin_kotlin.$crossModule$.copyToArray;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function Automate() {
  }
  Automate.$metadata$ = {
    simpleName: 'Automate',
    kind: 'interface',
    interfaces: []
  };
  function S2Automate(name, transitions, subMachines) {
    this.name_1 = name;
    this.transitions_1 = transitions;
    this.subMachines_1 = subMachines;
  }
  S2Automate.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  S2Automate.prototype._get_transitions__2595107731_s41w19_k$ = function () {
    return this.transitions_1;
  };
  S2Automate.prototype._get_subMachines__2305589157_wwf9zv_k$ = function () {
    return this.subMachines_1;
  };
  S2Automate.prototype.getAvailableTransitions_9zty64_k$ = function (state) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_filter_0 = this.transitions_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
        var indexedObject = tmp0_filter_0;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element_2_3 = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.isSameState_r3s8n2_k$(element_2_3.from, state);
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp0_filterTo_0_1.add_6wmvoe_k$(element_2_3);
            Unit_getInstance();
          } else {
          }
        }
        tmp$ret$1 = tmp0_filterTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  S2Automate.prototype.isAvailableTransition_6uolp3_k$ = function (currentState, msg) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_any_0 = this.getAvailableTransitions_9zty64_k$(currentState);
      var tmp;
      if (isInterface(tmp0_any_0, Collection)) {
        tmp = tmp0_any_0.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_any_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = element_2.msg.isInstance_6tn68w_k$(msg);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  S2Automate.prototype.isAvailableInitTransition_3ir5c0_k$ = function (command) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_any_0 = this.transitions_1;
      var indexedObject = tmp0_any_0;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = element_2.from == null ? element_2.msg.isInstance_6tn68w_k$(command) : false;
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = true;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = false;
      break $l$block_1;
    }
    return tmp$ret$1;
  };
  S2Automate.prototype.isFinalState_d1vezi_k$ = function (state) {
    return this.getAvailableTransitions_9zty64_k$(state).isEmpty_y1axqb_k$();
  };
  S2Automate.prototype.isSameState_r3s8n2_k$ = function (from, to) {
    var tmp0_safe_receiver = from;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.position) === to.position;
  };
  S2Automate.$metadata$ = {
    simpleName: 'S2Automate',
    kind: 'class',
    interfaces: [Automate]
  };
  Object.defineProperty(S2Automate.prototype, 'name', {
    configurable: true,
    get: S2Automate.prototype._get_name__804168992_das4rk_k$
  });
  Object.defineProperty(S2Automate.prototype, 'transitions', {
    configurable: true,
    get: S2Automate.prototype._get_transitions__2595107731_s41w19_k$
  });
  Object.defineProperty(S2Automate.prototype, 'subMachines', {
    configurable: true,
    get: S2Automate.prototype._get_subMachines__2305589157_wwf9zv_k$
  });
  function S2InitCommand() {
  }
  S2InitCommand.$metadata$ = {
    simpleName: 'S2InitCommand',
    kind: 'interface',
    interfaces: [Command]
  };
  function S2Command() {
  }
  S2Command.$metadata$ = {
    simpleName: 'S2Command',
    kind: 'interface',
    interfaces: [Command]
  };
  function S2ErrorBase(severity, type, description, date, payload) {
    this.severity_1 = severity;
    this.type_1 = type;
    this.description_1 = description;
    this.date_1 = date;
    this.payload_1 = payload;
  }
  S2ErrorBase.prototype._get_severity__64506990_12elwu_k$ = function () {
    return this.severity_1;
  };
  S2ErrorBase.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  S2ErrorBase.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return this.description_1;
  };
  S2ErrorBase.prototype._get_date__794940509_d5ac0t_k$ = function () {
    return this.date_1;
  };
  S2ErrorBase.prototype._get_payload__3508054851_d0i9j1_k$ = function () {
    return this.payload_1;
  };
  S2ErrorBase.prototype.toString = function () {
    return 'S2ErrorBase(severity=' + this.severity_1 + ", type='" + this.type_1 + "', description='" + this.description_1 + "', date='" + this.date_1 + "', payload=" + this.payload_1 + ')';
  };
  S2ErrorBase.$metadata$ = {
    simpleName: 'S2ErrorBase',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2ErrorBase.prototype, 'severity', {
    configurable: true,
    get: function () {
      return this._get_severity__64506990_12elwu_k$();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'type', {
    configurable: true,
    get: function () {
      return this._get_type__810427985_deia8h_k$();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'description', {
    configurable: true,
    get: function () {
      return this._get_description__4027823381_4f1tkb_k$();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'date', {
    configurable: true,
    get: function () {
      return this._get_date__794940509_d5ac0t_k$();
    }
  });
  Object.defineProperty(S2ErrorBase.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this._get_payload__3508054851_d0i9j1_k$();
    }
  });
  function S2Event() {
  }
  S2Event.$metadata$ = {
    simpleName: 'S2Event',
    kind: 'interface',
    interfaces: [Event]
  };
  function S2EventSuccess(id, type, from, to) {
    this.id_1 = id;
    this.type_1 = type;
    this.from_1 = from;
    this.to_1 = to;
  }
  S2EventSuccess.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  S2EventSuccess.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  S2EventSuccess.prototype._get_from__797289441_d6oogx_k$ = function () {
    return this.from_1;
  };
  S2EventSuccess.prototype._get_to__1413131888_ndcbjk_k$ = function () {
    return this.to_1;
  };
  S2EventSuccess.$metadata$ = {
    simpleName: 'S2EventSuccess',
    kind: 'class',
    interfaces: [Event]
  };
  Object.defineProperty(S2EventSuccess.prototype, 'id', {
    configurable: true,
    get: S2EventSuccess.prototype._get_id__1413120976_ndc34g_k$
  });
  Object.defineProperty(S2EventSuccess.prototype, 'type', {
    configurable: true,
    get: S2EventSuccess.prototype._get_type__810427985_deia8h_k$
  });
  Object.defineProperty(S2EventSuccess.prototype, 'from', {
    configurable: true,
    get: S2EventSuccess.prototype._get_from__797289441_d6oogx_k$
  });
  Object.defineProperty(S2EventSuccess.prototype, 'to', {
    configurable: true,
    get: S2EventSuccess.prototype._get_to__1413131888_ndcbjk_k$
  });
  function S2EventError(id, type, from, to, error) {
    this.id_1 = id;
    this.type_1 = type;
    this.from_1 = from;
    this.to_1 = to;
    this.error_1 = error;
  }
  S2EventError.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  S2EventError.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  S2EventError.prototype._get_from__797289441_d6oogx_k$ = function () {
    return this.from_1;
  };
  S2EventError.prototype._get_to__1413131888_ndcbjk_k$ = function () {
    return this.to_1;
  };
  S2EventError.prototype._get_error__3212600009_hwevxz_k$ = function () {
    return this.error_1;
  };
  S2EventError.$metadata$ = {
    simpleName: 'S2EventError',
    kind: 'class',
    interfaces: [Event]
  };
  Object.defineProperty(S2EventError.prototype, 'id', {
    configurable: true,
    get: S2EventError.prototype._get_id__1413120976_ndc34g_k$
  });
  Object.defineProperty(S2EventError.prototype, 'type', {
    configurable: true,
    get: S2EventError.prototype._get_type__810427985_deia8h_k$
  });
  Object.defineProperty(S2EventError.prototype, 'from', {
    configurable: true,
    get: S2EventError.prototype._get_from__797289441_d6oogx_k$
  });
  Object.defineProperty(S2EventError.prototype, 'to', {
    configurable: true,
    get: S2EventError.prototype._get_to__1413131888_ndcbjk_k$
  });
  Object.defineProperty(S2EventError.prototype, 'error', {
    configurable: true,
    get: S2EventError.prototype._get_error__3212600009_hwevxz_k$
  });
  function S2SubMachine_init_$Init$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      startsOn = emptyList();
    if (!(($mask0 & 4) === 0))
      endsOn = emptyList();
    if (!(($mask0 & 8) === 0))
      autostart = false;
    if (!(($mask0 & 16) === 0))
      blocking = false;
    if (!(($mask0 & 32) === 0))
      singleton = false;
    S2SubMachine.call($this, automate, startsOn, endsOn, autostart, blocking, singleton);
    return $this;
  }
  function S2SubMachine_init_$Create$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker) {
    return S2SubMachine_init_$Init$(automate, startsOn, endsOn, autostart, blocking, singleton, $mask0, $marker, Object.create(S2SubMachine.prototype));
  }
  function S2SubMachine(automate, startsOn, endsOn, autostart, blocking, singleton) {
    var startsOn_0 = startsOn === void 1 ? emptyList() : startsOn;
    var endsOn_0 = endsOn === void 1 ? emptyList() : endsOn;
    var autostart_0 = autostart === void 1 ? false : autostart;
    var blocking_0 = blocking === void 1 ? false : blocking;
    var singleton_0 = singleton === void 1 ? false : singleton;
    this.automate_1 = automate;
    this.startsOn_1 = startsOn_0;
    this.endsOn_1 = endsOn_0;
    this.autostart_1 = autostart_0;
    this.blocking_1 = blocking_0;
    this.singleton_1 = singleton_0;
  }
  S2SubMachine.prototype._get_automate__3155505431_iuemeh_k$ = function () {
    return this.automate_1;
  };
  S2SubMachine.prototype._get_startsOn__3648405435_aoy2bp_k$ = function () {
    return this.startsOn_1;
  };
  S2SubMachine.prototype._get_endsOn__678993652_b896us_k$ = function () {
    return this.endsOn_1;
  };
  S2SubMachine.prototype._get_autostart__3520157854_ctausi_k$ = function () {
    return this.autostart_1;
  };
  S2SubMachine.prototype._get_blocking__2354911798_w324ei_k$ = function () {
    return this.blocking_1;
  };
  S2SubMachine.prototype._get_singleton__3901782950_6i3aze_k$ = function () {
    return this.singleton_1;
  };
  S2SubMachine.$metadata$ = {
    simpleName: 'S2SubMachine',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2SubMachine.prototype, 'automate', {
    configurable: true,
    get: function () {
      return this._get_automate__3155505431_iuemeh_k$();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'startsOn', {
    configurable: true,
    get: function () {
      return this._get_startsOn__3648405435_aoy2bp_k$();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'endsOn', {
    configurable: true,
    get: function () {
      return this._get_endsOn__678993652_b896us_k$();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'autostart', {
    configurable: true,
    get: function () {
      return this._get_autostart__3520157854_ctausi_k$();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'blocking', {
    configurable: true,
    get: function () {
      return this._get_blocking__2354911798_w324ei_k$();
    }
  });
  Object.defineProperty(S2SubMachine.prototype, 'singleton', {
    configurable: true,
    get: function () {
      return this._get_singleton__3901782950_6i3aze_k$();
    }
  });
  function S2InitTransition(to, role, command) {
    this.to_1 = to;
    this.role_1 = role;
    this.command_1 = command;
  }
  S2InitTransition.prototype._get_to__1413131888_ndcbjk_k$ = function () {
    return this.to_1;
  };
  S2InitTransition.prototype._get_role__808279189_dd887p_k$ = function () {
    return this.role_1;
  };
  S2InitTransition.prototype._get_command__1523475750_p71deu_k$ = function () {
    return this.command_1;
  };
  S2InitTransition.$metadata$ = {
    simpleName: 'S2InitTransition',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2InitTransition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this._get_to__1413131888_ndcbjk_k$();
    }
  });
  Object.defineProperty(S2InitTransition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this._get_role__808279189_dd887p_k$();
    }
  });
  Object.defineProperty(S2InitTransition.prototype, 'command', {
    configurable: true,
    get: function () {
      return this._get_command__1523475750_p71deu_k$();
    }
  });
  function S2Transition(from, to, role, msg) {
    this.from_1 = from;
    this.to_1 = to;
    this.role_1 = role;
    this.msg_1 = msg;
  }
  S2Transition.prototype._get_from__797289441_d6oogx_k$ = function () {
    return this.from_1;
  };
  S2Transition.prototype._get_to__1413131888_ndcbjk_k$ = function () {
    return this.to_1;
  };
  S2Transition.prototype._get_role__808279189_dd887p_k$ = function () {
    return this.role_1;
  };
  S2Transition.prototype._get_msg__857212208_e6d168_k$ = function () {
    return this.msg_1;
  };
  S2Transition.$metadata$ = {
    simpleName: 'S2Transition',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2Transition.prototype, 'from', {
    configurable: true,
    get: function () {
      return this._get_from__797289441_d6oogx_k$();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'to', {
    configurable: true,
    get: function () {
      return this._get_to__1413131888_ndcbjk_k$();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'role', {
    configurable: true,
    get: function () {
      return this._get_role__808279189_dd887p_k$();
    }
  });
  Object.defineProperty(S2Transition.prototype, 'msg', {
    configurable: true,
    get: function () {
      return this._get_msg__857212208_e6d168_k$();
    }
  });
  function S2TransitionCommand(name, attributes) {
    this.name_1 = name;
    this.attributes_1 = attributes;
  }
  S2TransitionCommand.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  S2TransitionCommand.prototype._get_attributes__2098778644_ypk3ys_k$ = function () {
    return this.attributes_1;
  };
  S2TransitionCommand.$metadata$ = {
    simpleName: 'S2TransitionCommand',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2TransitionCommand.prototype, 'name', {
    configurable: true,
    get: function () {
      return this._get_name__804168992_das4rk_k$();
    }
  });
  Object.defineProperty(S2TransitionCommand.prototype, 'attributes', {
    configurable: true,
    get: function () {
      return this._get_attributes__2098778644_ypk3ys_k$();
    }
  });
  function S2TransitionCommandAttribute(name, type, optional) {
    this.name_1 = name;
    this.type_1 = type;
    this.optional_1 = optional;
  }
  S2TransitionCommandAttribute.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  S2TransitionCommandAttribute.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  S2TransitionCommandAttribute.prototype._get_optional__3327271019_g05385_k$ = function () {
    return this.optional_1;
  };
  S2TransitionCommandAttribute.$metadata$ = {
    simpleName: 'S2TransitionCommandAttribute',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2TransitionCommandAttribute.prototype, 'name', {
    configurable: true,
    get: function () {
      return this._get_name__804168992_das4rk_k$();
    }
  });
  Object.defineProperty(S2TransitionCommandAttribute.prototype, 'type', {
    configurable: true,
    get: function () {
      return this._get_type__810427985_deia8h_k$();
    }
  });
  Object.defineProperty(S2TransitionCommandAttribute.prototype, 'optional', {
    configurable: true,
    get: function () {
      return this._get_optional__3327271019_g05385_k$();
    }
  });
  function s2(exec) {
    var builder = new S2AutomateBuilder();
    exec(builder);
    var tmp = builder._get_name__804168992_das4rk_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_toTypedArray_0 = builder.transactions_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray_0);
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_toTypedArray_0 = builder.subMachines_1;
      tmp$ret$1 = copyToArray(tmp1_toTypedArray_0);
      break $l$block_0;
    }
    return new S2Automate(tmp, tmp_0, tmp$ret$1);
  }
  function S2AutomateBuilder() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp.transactions_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = ArrayList_init_$Create$();
      break $l$block_0;
    }
    tmp_0.subMachines_1 = tmp$ret$1;
  }
  S2AutomateBuilder.prototype._get_name__804168992_das4rk_k$ = function () {
    var tmp = this.name_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  };
  S2AutomateBuilder.$metadata$ = {
    simpleName: 'S2AutomateBuilder',
    kind: 'class',
    interfaces: []
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2Automate = S2Automate;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2ErrorBase = S2ErrorBase;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2EventSuccess = S2EventSuccess;
    $s2$dsl$automate.S2EventError = S2EventError;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2SubMachine = S2SubMachine;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    $s2$dsl$automate.S2InitTransition = S2InitTransition;
    $s2$dsl$automate.S2Transition = S2Transition;
    $s2$dsl$automate.S2TransitionCommand = S2TransitionCommand;
    $s2$dsl$automate.S2TransitionCommandAttribute = S2TransitionCommandAttribute;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2$dsl$automate$builder = $s2$dsl$automate.builder || ($s2$dsl$automate.builder = {});
    $s2$dsl$automate$builder.s2 = s2;
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
    var $s2 = _.s2 || (_.s2 = {});
    var $s2$dsl = $s2.dsl || ($s2.dsl = {});
    var $s2$dsl$automate = $s2$dsl.automate || ($s2$dsl.automate = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.S2Command = S2Command;
  _.$crossModule$.S2Event = S2Event;
  _.$crossModule$.S2InitCommand = S2InitCommand;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_s2_s2_automate_dsl.js.map
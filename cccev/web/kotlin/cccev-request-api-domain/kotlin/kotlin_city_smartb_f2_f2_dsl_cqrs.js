(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_f2_f2_dsl_cqrs'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_city_smartb_f2_f2_dsl_cqrs'.");
    }
    root.kotlin_city_smartb_f2_f2_dsl_cqrs = factory(typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined' ? {} : kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var Exception = kotlin_kotlin.$crossModule$.Exception;
  var Exception_init_$Init$ = kotlin_kotlin.$crossModule$.Exception_init_$Init$;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  //endregion
  'use strict';
  //region block: pre-declaration
  ErrorSeverityWarning.prototype = Object.create(ErrorSeverity.prototype);
  ErrorSeverityWarning.prototype.constructor = ErrorSeverityWarning;
  AlertSeverityError.prototype = Object.create(ErrorSeverity.prototype);
  AlertSeverityError.prototype.constructor = AlertSeverityError;
  F2Exception.prototype = Object.create(Exception.prototype);
  F2Exception.prototype.constructor = F2Exception;
  //endregion
  function Command() {
  }
  Command.$metadata$ = {
    simpleName: 'Command',
    kind: 'interface',
    interfaces: [Message]
  };
  function Event() {
  }
  Event.$metadata$ = {
    simpleName: 'Event',
    kind: 'interface',
    interfaces: [Message]
  };
  function Message() {
  }
  Message.$metadata$ = {
    simpleName: 'Message',
    kind: 'interface',
    interfaces: []
  };
  function Query() {
  }
  Query.$metadata$ = {
    simpleName: 'Query',
    kind: 'interface',
    interfaces: [Message]
  };
  function ErrorDTO() {
  }
  ErrorDTO.$metadata$ = {
    simpleName: 'ErrorDTO',
    kind: 'interface',
    interfaces: []
  };
  function Error_0(type, description, date, payload, severity) {
    this.type_1 = type;
    this.description_1 = description;
    this.date_1 = date;
    this.payload_1 = payload;
    this.severity_1 = severity;
  }
  Error_0.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  Error_0.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return this.description_1;
  };
  Error_0.prototype._get_date__794940509_d5ac0t_k$ = function () {
    return this.date_1;
  };
  Error_0.prototype._get_payload__3508054851_d0i9j1_k$ = function () {
    return this.payload_1;
  };
  Error_0.prototype._get_severity__64506990_12elwu_k$ = function () {
    return this.severity_1;
  };
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: [ErrorDTO]
  };
  Object.defineProperty(Error_0.prototype, 'type', {
    configurable: true,
    get: function () {
      return this._get_type__810427985_deia8h_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'description', {
    configurable: true,
    get: function () {
      return this._get_description__4027823381_4f1tkb_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'date', {
    configurable: true,
    get: function () {
      return this._get_date__794940509_d5ac0t_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this._get_payload__3508054851_d0i9j1_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'severity', {
    configurable: true,
    get: function () {
      return this._get_severity__64506990_12elwu_k$();
    }
  });
  function ErrorSeverity(severity) {
    this.severity_1 = severity;
  }
  ErrorSeverity.prototype._get_severity__64506990_12elwu_k$ = function () {
    return this.severity_1;
  };
  ErrorSeverity.$metadata$ = {
    simpleName: 'ErrorSeverity',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ErrorSeverity.prototype, 'severity', {
    configurable: true,
    get: ErrorSeverity.prototype._get_severity__64506990_12elwu_k$
  });
  function ErrorSeverityWarning() {
    ErrorSeverity.call(this, 'warning');
  }
  ErrorSeverityWarning.$metadata$ = {
    simpleName: 'ErrorSeverityWarning',
    kind: 'class',
    interfaces: []
  };
  function AlertSeverityError() {
    ErrorSeverity.call(this, 'error');
  }
  AlertSeverityError.$metadata$ = {
    simpleName: 'ErrorSeverityError',
    kind: 'class',
    interfaces: []
  };
  function F2Exception(id, error) {
    Exception_init_$Init$(error.description, this);
    this.id_1 = id;
    this.error_1 = error;
    captureStack(this, F2Exception);
  }
  F2Exception.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  F2Exception.prototype._get_error__3212600009_hwevxz_k$ = function () {
    return this.error_1;
  };
  F2Exception.$metadata$ = {
    simpleName: 'F2Exception',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(F2Exception.prototype, 'id', {
    configurable: true,
    get: F2Exception.prototype._get_id__1413120976_ndc34g_k$
  });
  Object.defineProperty(F2Exception.prototype, 'error', {
    configurable: true,
    get: F2Exception.prototype._get_error__3212600009_hwevxz_k$
  });
  function PageDTO() {
  }
  PageDTO.$metadata$ = {
    simpleName: 'PageDTO',
    kind: 'interface',
    interfaces: []
  };
  function Page(total, items) {
    this.total_1 = total;
    this.items_1 = items;
  }
  Page.prototype._get_total__3639312653_aucycz_k$ = function () {
    return this.total_1;
  };
  Page.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  Page.$metadata$ = {
    simpleName: 'Page',
    kind: 'class',
    interfaces: [PageDTO]
  };
  Object.defineProperty(Page.prototype, 'total', {
    configurable: true,
    get: function () {
      return this._get_total__3639312653_aucycz_k$();
    }
  });
  Object.defineProperty(Page.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function PageQueryDTO() {
  }
  PageQueryDTO.$metadata$ = {
    simpleName: 'PageQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function PageQueryResultDTO() {
  }
  PageQueryResultDTO.$metadata$ = {
    simpleName: 'PageQueryResultDTO',
    kind: 'interface',
    interfaces: [Event, PageDTO]
  };
  function PageQuery(pagination) {
    this.pagination_1 = pagination;
  }
  PageQuery.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  PageQuery.$metadata$ = {
    simpleName: 'PageQuery',
    kind: 'class',
    interfaces: [PageQueryDTO]
  };
  Object.defineProperty(PageQuery.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  function PageQueryResult(pagination, total, items) {
    this.pagination_1 = pagination;
    this.total_1 = total;
    this.items_1 = items;
  }
  PageQueryResult.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  PageQueryResult.prototype._get_total__3639312653_aucycz_k$ = function () {
    return this.total_1;
  };
  PageQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  PageQueryResult.$metadata$ = {
    simpleName: 'PageQueryResult',
    kind: 'class',
    interfaces: [PageQueryResultDTO]
  };
  Object.defineProperty(PageQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  Object.defineProperty(PageQueryResult.prototype, 'total', {
    configurable: true,
    get: function () {
      return this._get_total__3639312653_aucycz_k$();
    }
  });
  Object.defineProperty(PageQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function Pagination() {
  }
  Pagination.$metadata$ = {
    simpleName: 'Pagination',
    kind: 'interface',
    interfaces: []
  };
  function OffsetPaginationDTO() {
  }
  OffsetPaginationDTO.$metadata$ = {
    simpleName: 'OffsetPaginationDTO',
    kind: 'interface',
    interfaces: []
  };
  function OffsetPagination(offset, limit) {
    this.offset_1 = offset;
    this.limit_1 = limit;
  }
  OffsetPagination.prototype._get_offset__736931032_c6qzmg_k$ = function () {
    return this.offset_1;
  };
  OffsetPagination.prototype._get_limit__3404537718_eq4zuy_k$ = function () {
    return this.limit_1;
  };
  OffsetPagination.$metadata$ = {
    simpleName: 'OffsetPagination',
    kind: 'class',
    interfaces: [OffsetPaginationDTO, Pagination]
  };
  Object.defineProperty(OffsetPagination.prototype, 'offset', {
    configurable: true,
    get: function () {
      return this._get_offset__736931032_c6qzmg_k$();
    }
  });
  Object.defineProperty(OffsetPagination.prototype, 'limit', {
    configurable: true,
    get: function () {
      return this._get_limit__3404537718_eq4zuy_k$();
    }
  });
  function PagePaginationDTO() {
  }
  PagePaginationDTO.$metadata$ = {
    simpleName: 'PagePaginationDTO',
    kind: 'interface',
    interfaces: []
  };
  function PagePagination(page, size) {
    this.page_1 = page;
    this.size_1 = size;
  }
  PagePagination.prototype._get_page__806010268_dbvli4_k$ = function () {
    return this.page_1;
  };
  PagePagination.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  PagePagination.$metadata$ = {
    simpleName: 'PagePagination',
    kind: 'class',
    interfaces: [PagePaginationDTO, Pagination]
  };
  Object.defineProperty(PagePagination.prototype, 'page', {
    configurable: true,
    get: function () {
      return this._get_page__806010268_dbvli4_k$();
    }
  });
  Object.defineProperty(PagePagination.prototype, 'size', {
    configurable: true,
    get: function () {
      return this._get_size__809037418_ddoh9m_k$();
    }
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$error = $f2$dsl$cqrs.error || ($f2$dsl$cqrs.error = {});
    $f2$dsl$cqrs$error.Error = Error_0;
    $f2$dsl$cqrs$error.ErrorSeverity = ErrorSeverity;
    $f2$dsl$cqrs$error.ErrorSeverityWarning = ErrorSeverityWarning;
    $f2$dsl$cqrs$error.AlertSeverityError = AlertSeverityError;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$exception = $f2$dsl$cqrs.exception || ($f2$dsl$cqrs.exception = {});
    $f2$dsl$cqrs$exception.F2Exception = F2Exception;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.Page = Page;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.PageQuery = PageQuery;
    $f2$dsl$cqrs$page.PageQueryResult = PageQueryResult;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.OffsetPagination = OffsetPagination;
    $f2$dsl$cqrs$page.PagePagination = PagePagination;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Command = Command;
  _.$crossModule$.Event = Event;
  _.$crossModule$.Query = Query;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_f2_f2_dsl_cqrs.js.map
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './ktor-ktor-client-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-serialization-kotlinx-json-js-ir.js', './ktor-ktor-client-content-negotiation-js-ir.js', './ktor-ktor-http-js-ir.js', './f2-f2-dsl-function.js', './f2-f2-client-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./f2-f2-dsl-function.js'), require('./f2-f2-client-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'ktor-ktor-serialization-kotlinx-json-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json-js-ir' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'ktor-ktor-client-content-negotiation-js-ir' was not found. Please, check whether 'ktor-ktor-client-content-negotiation-js-ir' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['f2-f2-dsl-function'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'f2-f2-dsl-function' was not found. Please, check whether 'f2-f2-dsl-function' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    if (typeof this['f2-f2-client-core'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor-http'. Its dependency 'f2-f2-client-core' was not found. Please, check whether 'f2-f2-client-core' is loaded prior to 'f2-f2-client-ktor-http'.");
    }
    root['f2-f2-client-ktor-http'] = factory(typeof this['f2-f2-client-ktor-http'] === 'undefined' ? {} : this['f2-f2-client-ktor-http'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['ktor-ktor-client-content-negotiation-js-ir'], this['ktor-ktor-http-js-ir'], this['f2-f2-dsl-function'], this['f2-f2-client-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_client_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_http, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_f2_f2_client_core) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.p;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var isInterface = kotlin_kotlin.$_$.ba;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var json$default = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var promise$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.k;
  var url = kotlin_io_ktor_ktor_client_core.$_$.m;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.j;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.o;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var body = kotlin_io_ktor_ktor_client_core.$_$.a;
  var F2Supplier = kotlin_city_smartb_f2_f2_dsl_function.$_$.c;
  var F2Consumer = kotlin_city_smartb_f2_f2_dsl_function.$_$.a;
  var F2ClientType_HTTP_getInstance = kotlin_city_smartb_f2_f2_client_core.$_$.a;
  var NotImplementedError = kotlin_kotlin.$_$.zc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpClientBuilder$build$slambda, 'HttpClientBuilder$build$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpClientBuilder, 'HttpClientBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpF2Client$supplier$o$invoke$slambda, 'HttpF2Client$supplier$o$invoke$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpF2Client$supplier$1, undefined, classMeta, undefined, [F2Supplier], undefined, undefined, []);
  setMetadataFor(HttpF2Client$consumer$1, undefined, classMeta, undefined, [F2Consumer], undefined, undefined, []);
  setMetadataFor(HttpF2Client, 'HttpF2Client', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function get_F2DefaultJson() {
    init_properties_Json_kt_2ht5pu();
    return F2DefaultJson;
  }
  var F2DefaultJson;
  function F2DefaultJson$lambda($this$Json) {
    init_properties_Json_kt_2ht5pu();
    $this$Json.a11_1 = true;
    $this$Json.d11_1 = true;
    $this$Json.k11_1 = true;
    $this$Json.e11_1 = true;
    $this$Json.f11_1 = false;
    $this$Json.i11_1 = false;
    $this$Json.c11_1 = true;
    return Unit_getInstance();
  }
  var properties_initialized_Json_kt_iojru2;
  function init_properties_Json_kt_2ht5pu() {
    if (properties_initialized_Json_kt_iojru2) {
    } else {
      properties_initialized_Json_kt_iojru2 = true;
      F2DefaultJson = Json$default(null, F2DefaultJson$lambda, 1, null);
    }
  }
  function HttpClientBuilder_init_$Init$(json, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      json = get_F2DefaultJson();
    HttpClientBuilder.call($this, json);
    return $this;
  }
  function HttpClientBuilder_init_$Create$(json, $mask0, $marker) {
    return HttpClientBuilder_init_$Init$(json, $mask0, $marker, Object.create(HttpClientBuilder.prototype));
  }
  function httpClient($this, json) {
    var tmp = Js_getInstance();
    return HttpClient(tmp, HttpClientBuilder$httpClient$lambda(json));
  }
  function httpClient$default($this, json, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      json = get_F2DefaultJson();
    return httpClient($this, json);
  }
  function HttpClientBuilder$build$slambda($urlBase, this$0, resultContinuation) {
    this.d59_1 = $urlBase;
    this.e59_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientBuilder$build$slambda.prototype.g59 = function ($this$promise, $cont) {
    var tmp = this.b22($this$promise, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpClientBuilder$build$slambda.prototype.kh = function (p1, $cont) {
    return this.g59((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientBuilder$build$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        if (tmp === 0) {
          this.eg_1 = 1;
          return new HttpF2Client(this.d59_1, httpClient(this.e59_1, this.e59_1.h59_1));
        } else if (tmp === 1) {
          throw this.gg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  HttpClientBuilder$build$slambda.prototype.b22 = function ($this$promise, completion) {
    var i = new HttpClientBuilder$build$slambda(this.d59_1, this.e59_1, completion);
    i.f59_1 = $this$promise;
    return i;
  };
  function HttpClientBuilder$build$slambda_0($urlBase, this$0, resultContinuation) {
    var i = new HttpClientBuilder$build$slambda($urlBase, this$0, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.g59($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpClientBuilder$httpClient$lambda$lambda($json) {
    return function ($this$install) {
      json$default($this$install, $json, null, 2, null);
      return Unit_getInstance();
    };
  }
  function HttpClientBuilder$httpClient$lambda($json) {
    return function ($this$HttpClient) {
      var tmp = Plugin_getInstance();
      $this$HttpClient.j47(tmp, HttpClientBuilder$httpClient$lambda$lambda($json));
      return Unit_getInstance();
    };
  }
  function HttpClientBuilder(json) {
    var json_0 = json === void 1 ? get_F2DefaultJson() : json;
    this.h59_1 = json_0;
  }
  HttpClientBuilder.prototype.build = function (urlBase) {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, HttpClientBuilder$build$slambda_0(urlBase, this, null), 3, null);
  };
  function httpClientBuilder() {
    return HttpClientBuilder_init_$Create$(null, 1, null);
  }
  function HttpF2Client$supplier$o$invoke$slambda(this$0, $typeInfo, resultContinuation) {
    this.q59_1 = this$0;
    this.r59_1 = $typeInfo;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpF2Client$supplier$o$invoke$slambda.prototype.x59 = function ($this$promise, $cont) {
    var tmp = this.b22($this$promise, $cont);
    tmp.fg_1 = Unit_getInstance();
    tmp.gg_1 = null;
    return tmp.wg();
  };
  HttpF2Client$supplier$o$invoke$slambda.prototype.kh = function (p1, $cont) {
    return this.x59((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpF2Client$supplier$o$invoke$slambda.prototype.wg = function () {
    var suspendResult = this.fg_1;
    $sm: do
      try {
        var tmp = this.dg_1;
        switch (tmp) {
          case 0:
            this.eg_1 = 3;
            var tmp_0 = this;
            tmp_0.t59_1 = this.q59_1.z59_1;
            var tmp_1 = this;
            tmp_1.u59_1 = this.q59_1.y59_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.u59_1);
            ;
            tmp_2.v59_1 = tmp0_apply;
            this.v59_1.d46_1 = Companion_getInstance().m3n_1;
            this.dg_1 = 1;
            suspendResult = (new HttpStatement(this.v59_1, this.t59_1)).a4z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w59_1 = suspendResult;
            this.dg_1 = 2;
            suspendResult = body(this.w59_1, this.r59_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.gg_1;
        }
      } catch ($p) {
        if (this.eg_1 === 3) {
          throw $p;
        } else {
          this.dg_1 = this.eg_1;
          this.gg_1 = $p;
        }
      }
     while (true);
  };
  HttpF2Client$supplier$o$invoke$slambda.prototype.b22 = function ($this$promise, completion) {
    var i = new HttpF2Client$supplier$o$invoke$slambda(this.q59_1, this.r59_1, completion);
    i.s59_1 = $this$promise;
    return i;
  };
  function HttpF2Client$supplier$o$invoke$slambda_0(this$0, $typeInfo, resultContinuation) {
    var i = new HttpF2Client$supplier$o$invoke$slambda(this$0, $typeInfo, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.x59($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpF2Client$supplier$1(this$0, $typeInfo) {
    this.b5a_1 = this$0;
    this.c5a_1 = $typeInfo;
  }
  HttpF2Client$supplier$1.prototype.invoke = function () {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, HttpF2Client$supplier$o$invoke$slambda_0(this.b5a_1, this.c5a_1, null), 3, null);
  };
  function HttpF2Client$consumer$1(this$0, $queryTypeInfo) {
    this.d5a_1 = this$0;
    this.e5a_1 = $queryTypeInfo;
  }
  function HttpF2Client(urlBase, httpClient) {
    this.y59_1 = urlBase;
    this.z59_1 = httpClient;
    this.a5a_1 = F2ClientType_HTTP_getInstance();
  }
  HttpF2Client.prototype.d2j = function () {
    return this.a5a_1;
  };
  HttpF2Client.prototype.supplier = function (route, typeInfo) {
    return new HttpF2Client$supplier$1(this, typeInfo);
  };
  HttpF2Client.prototype.function = function (route, queryTypeInfo, responseTypeInfo) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  HttpF2Client.prototype.consumer = function (route, queryTypeInfo) {
    return new HttpF2Client$consumer$1(this, queryTypeInfo);
  };
  Object.defineProperty(HttpF2Client.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.d2j();
    }
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$client = $f2.client || ($f2.client = {});
    var $f2$client$ktor = $f2$client.ktor || ($f2$client.ktor = {});
    var $f2$client$ktor$http = $f2$client$ktor.http || ($f2$client$ktor.http = {});
    $f2$client$ktor$http.HttpClientBuilder = HttpClientBuilder;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = httpClientBuilder;
  //endregion
  return _;
}));

//# sourceMappingURL=f2-f2-client-ktor-http.js.map

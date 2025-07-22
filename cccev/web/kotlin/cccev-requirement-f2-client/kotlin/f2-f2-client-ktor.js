(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './f2-f2-client-ktor-rsocket.js', './f2-f2-client-ktor-http.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./f2-f2-client-ktor-rsocket.js'), require('./f2-f2-client-ktor-http.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'f2-f2-client-ktor'.");
    }
    if (typeof this['f2-f2-client-ktor-rsocket'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor'. Its dependency 'f2-f2-client-ktor-rsocket' was not found. Please, check whether 'f2-f2-client-ktor-rsocket' is loaded prior to 'f2-f2-client-ktor'.");
    }
    if (typeof this['f2-f2-client-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'f2-f2-client-ktor'. Its dependency 'f2-f2-client-ktor-http' was not found. Please, check whether 'f2-f2-client-ktor-http' is loaded prior to 'f2-f2-client-ktor'.");
    }
    root['f2-f2-client-ktor'] = factory(typeof this['f2-f2-client-ktor'] === 'undefined' ? {} : this['f2-f2-client-ktor'], this['kotlin-kotlin-stdlib-js-ir'], this['f2-f2-client-ktor-rsocket'], this['f2-f2-client-ktor-http']);
  }
}(this, function (_, kotlin_kotlin, kotlin_city_smartb_f2_f2_client_ktor_rsocket, kotlin_city_smartb_f2_f2_client_ktor_http) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.la;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var classMeta = kotlin_kotlin.$_$.k9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var rSocketF2ClientBuilder = kotlin_city_smartb_f2_f2_client_ktor_rsocket.$_$.a;
  var startsWith$default = kotlin_kotlin.$_$.w;
  var httpClientBuilder = kotlin_city_smartb_f2_f2_client_ktor_http.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(F2ClientBuilder, 'F2ClientBuilder', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Protocol, 'Protocol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HTTP, 'HTTP', objectMeta, Protocol, undefined, undefined, undefined, []);
  setMetadataFor(HTTPS, 'HTTPS', objectMeta, Protocol, undefined, undefined, undefined, []);
  setMetadataFor(WS, 'WS', objectMeta, Protocol, undefined, undefined, undefined, []);
  setMetadataFor(WSS, 'WSS', objectMeta, Protocol, undefined, undefined, undefined, []);
  setMetadataFor(TCP, 'TCP', objectMeta, Protocol, undefined, undefined, undefined, []);
  //endregion
  function F2ClientBuilder() {
    F2ClientBuilder_instance = this;
  }
  var F2ClientBuilder_instance;
  function F2ClientBuilder_getInstance() {
    if (F2ClientBuilder_instance == null)
      new F2ClientBuilder();
    return F2ClientBuilder_instance;
  }
  function Protocol() {
  }
  function HTTP() {
    HTTP_instance = this;
    Protocol.call(this);
  }
  var HTTP_instance;
  function HTTP_getInstance() {
    if (HTTP_instance == null)
      new HTTP();
    return HTTP_instance;
  }
  function HTTPS() {
    HTTPS_instance = this;
    Protocol.call(this);
  }
  var HTTPS_instance;
  function HTTPS_getInstance() {
    if (HTTPS_instance == null)
      new HTTPS();
    return HTTPS_instance;
  }
  function WS() {
    WS_instance = this;
    Protocol.call(this);
  }
  var WS_instance;
  function WS_getInstance() {
    if (WS_instance == null)
      new WS();
    return WS_instance;
  }
  function WSS() {
    WSS_instance = this;
    Protocol.call(this);
  }
  var WSS_instance;
  function WSS_getInstance() {
    if (WSS_instance == null)
      new WSS();
    return WSS_instance;
  }
  function TCP() {
    TCP_instance = this;
    Protocol.call(this);
  }
  var TCP_instance;
  function TCP_getInstance() {
    if (TCP_instance == null)
      new TCP();
    return TCP_instance;
  }
  function get(_this__u8e3s4, url) {
    var tmp;
    if (startsWith$default(url, 'http:', false, 2, null)) {
      tmp = httpClientBuilder().build(url);
    } else {
      if (startsWith$default(url, 'https:', false, 2, null)) {
        tmp = httpClientBuilder().build(url);
      } else {
        if (startsWith$default(url, 'tcp:', false, 2, null)) {
          tmp = rSocketF2ClientBuilder().t6k(url, false);
        } else {
          if (startsWith$default(url, 'ws:', false, 2, null)) {
            tmp = rSocketF2ClientBuilder().t6k(url, false);
          } else {
            if (startsWith$default(url, 'wss:', false, 2, null)) {
              tmp = rSocketF2ClientBuilder().t6k(url, false);
            } else {
              throw IllegalArgumentException_init_$Create$('Invalid Url[' + url + '] must start by one of http:, https:, tcp: ws: wss:');
            }
          }
        }
      }
    }
    return tmp;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$client = $f2.client || ($f2.client = {});
    var $f2$client$ktor = $f2$client.ktor || ($f2$client.ktor = {});
    $f2$client$ktor.Protocol = Protocol;
    Object.defineProperty($f2$client$ktor, 'HTTP', {
      configurable: true,
      get: HTTP_getInstance
    });
    Object.defineProperty($f2$client$ktor, 'HTTPS', {
      configurable: true,
      get: HTTPS_getInstance
    });
    Object.defineProperty($f2$client$ktor, 'WS', {
      configurable: true,
      get: WS_getInstance
    });
    Object.defineProperty($f2$client$ktor, 'WSS', {
      configurable: true,
      get: WSS_getInstance
    });
    Object.defineProperty($f2$client$ktor, 'TCP', {
      configurable: true,
      get: TCP_getInstance
    });
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = get;
  _.$_$.b = F2ClientBuilder_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=f2-f2-client-ktor.js.map

(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    root['ktor-ktor-http-js-ir'] = factory(typeof this['ktor-ktor-http-js-ir'] === 'undefined' ? {} : this['ktor-ktor-http-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.r;
  var encode$default = kotlin_io_ktor_ktor_io.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.h5;
  var prepareReadFirstHead = kotlin_io_ktor_ktor_io.$_$.a1;
  var prepareReadNextHead = kotlin_io_ktor_ktor_io.$_$.b1;
  var completeReadHead = kotlin_io_ktor_ktor_io.$_$.z;
  var charArray = kotlin_kotlin.$_$.g9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var concatToString = kotlin_kotlin.$_$.gb;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var Char = kotlin_kotlin.$_$.oc;
  var equals = kotlin_kotlin.$_$.m9;
  var toString = kotlin_kotlin.$_$.qa;
  var isSurrogate = kotlin_kotlin.$_$.qb;
  var encode = kotlin_io_ktor_ktor_io.$_$.x;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.x2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.w2;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j9;
  var toByte = kotlin_kotlin.$_$.na;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.h1;
  var Exception = kotlin_kotlin.$_$.uc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ma;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.v2;
  var numberToChar = kotlin_kotlin.$_$.ia;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.y2;
  var plus = kotlin_kotlin.$_$.o7;
  var plus_0 = kotlin_kotlin.$_$.p7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z2;
  var toSet = kotlin_kotlin.$_$.f8;
  var setOf = kotlin_kotlin.$_$.u7;
  var plus_1 = kotlin_kotlin.$_$.n7;
  var listOf = kotlin_kotlin.$_$.i7;
  var emptyList = kotlin_kotlin.$_$.r6;
  var equals_0 = kotlin_kotlin.$_$.kb;
  var Collection = kotlin_kotlin.$_$.j5;
  var isInterface = kotlin_kotlin.$_$.ba;
  var isBlank = kotlin_kotlin.$_$.mb;
  var last = kotlin_kotlin.$_$.g7;
  var indexOf$default = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var isCharSequence = kotlin_kotlin.$_$.x9;
  var trim = kotlin_kotlin.$_$.mc;
  var contains$default = kotlin_kotlin.$_$.n;
  var objectMeta = kotlin_kotlin.$_$.la;
  var plus_2 = kotlin_kotlin.$_$.q7;
  var getStringHashCode = kotlin_kotlin.$_$.q9;
  var hashCode = kotlin_kotlin.$_$.r9;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var IllegalArgumentException = kotlin_kotlin.$_$.vc;
  var get_name = kotlin_io_ktor_ktor_io.$_$.y;
  var get_lastIndex = kotlin_kotlin.$_$.d7;
  var last_0 = kotlin_kotlin.$_$.tb;
  var first = kotlin_kotlin.$_$.lb;
  var get_lastIndex_0 = kotlin_kotlin.$_$.sb;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.s;
  var emptySet = kotlin_kotlin.$_$.t6;
  var get = kotlin_io_ktor_ktor_utils.$_$.r;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.q;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.u;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.t;
  var toDoubleOrNull = kotlin_kotlin.$_$.zb;
  var rangeTo = kotlin_kotlin.$_$.za;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.zd;
  var to = kotlin_kotlin.$_$.ge;
  var sortedWith = kotlin_kotlin.$_$.w7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var compareValues = kotlin_kotlin.$_$.j8;
  var asList = kotlin_kotlin.$_$.y5;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.u2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var toLong = kotlin_kotlin.$_$.ec;
  var mapCapacity = kotlin_kotlin.$_$.j7;
  var coerceAtLeast = kotlin_kotlin.$_$.ua;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i1;
  var interfaceMeta = kotlin_kotlin.$_$.s9;
  var isWhitespace = kotlin_kotlin.$_$.rb;
  var startsWith$default = kotlin_kotlin.$_$.x;
  var charArrayOf = kotlin_kotlin.$_$.f9;
  var split$default = kotlin_kotlin.$_$.u;
  var toMutableList = kotlin_kotlin.$_$.d8;
  var first_0 = kotlin_kotlin.$_$.y6;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.c1;
  var indexOfAny$default = kotlin_kotlin.$_$.p;
  var dropLast = kotlin_kotlin.$_$.p6;
  var IllegalStateException = kotlin_kotlin.$_$.wc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.h2;
  var indexOf$default_0 = kotlin_kotlin.$_$.q;
  var toInt = kotlin_kotlin.$_$.cc;
  var listOf_0 = kotlin_kotlin.$_$.h7;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.d1;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.a1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.v;
  var startsWith$default_0 = kotlin_kotlin.$_$.w;
  var addAll = kotlin_kotlin.$_$.w5;
  var joinTo$default = kotlin_kotlin.$_$.m;
  var toString_0 = kotlin_kotlin.$_$.fe;
  var lazy_0 = kotlin_kotlin.$_$.ae;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p9;
  var toLong_0 = kotlin_kotlin.$_$.oa;
  var encodeToByteArray = kotlin_kotlin.$_$.jb;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.w;
  var take = kotlin_kotlin.$_$.wb;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  //endregion
  //region block: pre-declaration
  setMetadataFor(URLDecodeException, 'URLDecodeException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Application, 'Application', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Text, 'Text', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HeaderValueWithParameters, 'HeaderValueWithParameters', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentType, 'ContentType', classMeta, HeaderValueWithParameters, undefined, undefined, undefined, []);
  setMetadataFor(BadContentTypeFormatException, 'BadContentTypeFormatException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HeadersBuilder, 'HeadersBuilder', classMeta, StringValuesBuilderImpl, undefined, undefined, undefined, []);
  setMetadataFor(EmptyHeaders, 'EmptyHeaders', objectMeta, undefined, [StringValues], undefined, undefined, []);
  setMetadataFor(HeadersImpl, 'HeadersImpl', classMeta, StringValuesImpl, [StringValues, StringValuesImpl], undefined, undefined, []);
  setMetadataFor(HeaderValueParam, 'HeaderValueParam', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HeaderValue, 'HeaderValue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpHeaders, 'HttpHeaders', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IllegalHeaderNameException, 'IllegalHeaderNameException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(IllegalHeaderValueException, 'IllegalHeaderValueException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(UnsafeHeaderException, 'UnsafeHeaderException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpProtocolVersion, 'HttpProtocolVersion', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatusCode, 'HttpStatusCode', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Parameters, 'Parameters', interfaceMeta, undefined, [StringValues], undefined, undefined, []);
  setMetadataFor(EmptyParameters, 'EmptyParameters', objectMeta, undefined, [Parameters], undefined, undefined, []);
  setMetadataFor(ParametersBuilderImpl, 'ParametersBuilderImpl', classMeta, StringValuesBuilderImpl, undefined, undefined, undefined, []);
  setMetadataFor(ParametersImpl, 'ParametersImpl', classMeta, StringValuesImpl, [Parameters, StringValuesImpl], undefined, undefined, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(URLBuilder, 'URLBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(URLParserException, 'URLParserException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_7, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(URLProtocol, 'URLProtocol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_8, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Url_0, 'Url', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UrlDecodedParametersBuilder, 'UrlDecodedParametersBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OutgoingContent, 'OutgoingContent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayContent_0, 'ByteArrayContent', classMeta, OutgoingContent, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayContent, 'ByteArrayContent', classMeta, ByteArrayContent_0, undefined, undefined, undefined, []);
  setMetadataFor(NoContent, 'NoContent', classMeta, OutgoingContent, undefined, undefined, undefined, []);
  setMetadataFor(ReadChannelContent, 'ReadChannelContent', classMeta, OutgoingContent, undefined, undefined, undefined, []);
  setMetadataFor(WriteChannelContent, 'WriteChannelContent', classMeta, OutgoingContent, undefined, undefined, undefined, [1]);
  setMetadataFor(ProtocolUpgrade, 'ProtocolUpgrade', classMeta, OutgoingContent, undefined, undefined, undefined, [4]);
  setMetadataFor(NullBody, 'NullBody', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(TextContent, 'TextContent', classMeta, ByteArrayContent_0, undefined, undefined, undefined, []);
  //endregion
  function get_URL_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_SPECIAL_SYMBOLS() {
    init_properties_Codecs_kt_hjkt7n();
    return SPECIAL_SYMBOLS;
  }
  var SPECIAL_SYMBOLS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLParameter.<anonymous>' call
    var tmp = Charsets_getInstance().v37_1.z37();
    var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
    forEach_0(content, encodeURLParameter$lambda(tmp0_apply, spaceToPlus));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodeURLParameter$default(_this__u8e3s4, spaceToPlus, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      spaceToPlus = false;
    return encodeURLParameter(_this__u8e3s4, spaceToPlus);
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function decodeURLPart$default(_this__u8e3s4, start, end, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().v37_1;
    return decodeURLPart(_this__u8e3s4, start, end, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLQueryComponent.<anonymous>' call
    var tmp = charset.z37();
    var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, tmp0_apply, encodeFull));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodeURLQueryComponent$default(_this__u8e3s4, encodeFull, spaceToPlus, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      encodeFull = false;
    if (!(($mask0 & 2) === 0))
      spaceToPlus = false;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().v37_1;
    return encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset);
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function decodeURLQueryComponent$default(_this__u8e3s4, start, end, plusIsSpace, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      plusIsSpace = false;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().v37_1;
    return decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function forEach_0(_this__u8e3s4, block) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_1: do {
          var tmp$ret$2;
          // Inline function 'io.ktor.http.forEach.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          $l$loop: while (true) {
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.canRead' call
            tmp$ret$1 = tmp0__anonymous__q1qw7t.k2z_1 > tmp0__anonymous__q1qw7t.j2z_1;
            if (!tmp$ret$1) {
              break $l$loop;
            }
            block(tmp0__anonymous__q1qw7t.j35());
          }
          tmp$ret$2 = true;
          if (!tmp$ret$2) {
            break $l$loop_1;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_1;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
  }
  function percentEncode(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    var code = _this__u8e3s4 & 255;
    var array = charArray(3);
    array[0] = _Char___init__impl__6a9atx(37);
    array[1] = hexDigitToChar(code >> 4);
    array[2] = hexDigitToChar(code & 15);
    return concatToString(array);
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(37))) ? true : plusIsSpace ? equals(new Char(ch), new Char(_Char___init__impl__6a9atx(43))) : false) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    var tmp;
    if (start === 0 ? end === _this__u8e3s4.length : false) {
      tmp = toString(_this__u8e3s4);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$1 = tmp$ret$0.substring(start, end);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLPath.<anonymous>' call
    var charset = Charsets_getInstance().v37_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charSequenceGet(_this__u8e3s4, index);
      if (((!encodeSlash ? equals(new Char(current), new Char(_Char___init__impl__6a9atx(47))) : false) ? true : get_URL_ALPHABET_CHARS().b1(new Char(current))) ? true : get_VALID_PATH_PART().b1(new Char(current))) {
        tmp0_apply.r5(current);
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        continue $l$loop_0;
      }
      if (((equals(new Char(current), new Char(_Char___init__impl__6a9atx(37))) ? (index + 2 | 0) < _this__u8e3s4.length : false) ? get_HEX_ALPHABET().b1(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) : false) ? get_HEX_ALPHABET().b1(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0))) : false) {
        tmp0_apply.r5(current);
        tmp0_apply.r5(charSequenceGet(_this__u8e3s4, index + 1 | 0));
        tmp0_apply.r5(charSequenceGet(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.z37(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(tmp0_apply));
      index = index + symbolSize | 0;
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function hexDigitToChar(digit) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = digit;
    return (0 <= tmp0_subject ? tmp0_subject <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$_0(sbSize);
    if (prefixEnd > start) {
      sb.ie(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace ? equals(new Char(c), new Char(_Char___init__impl__6a9atx(43))) : false) {
        sb.r5(_Char___init__impl__6a9atx(32));
        var tmp0 = index;
        index = tmp0 + 1 | 0;
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(37)))) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end ? equals(new Char(charSequenceGet(_this__u8e3s4, index)), new Char(_Char___init__impl__6a9atx(37))) : false) {
          if ((index + 2 | 0) >= end) {
            var tmp$ret$0;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = index;
            var tmp1_substring = charSequenceLength(_this__u8e3s4);
            tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + _this__u8e3s4 + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 ? true : digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + _this__u8e3s4 + ', at ' + index);
          }
          var tmp = bytes;
          var tmp1 = count;
          count = tmp1 + 1 | 0;
          tmp[tmp1] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.q6(String_0(bytes, 0, count, charset));
      } else {
        sb.r5(c);
        var tmp2 = index;
        index = tmp2 + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  function charToHexDigit(c2) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = c2;
    return (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function encodeURLParameter$lambda($tmp0_apply, $spaceToPlus) {
    return function (it) {
      var tmp;
      if (get_URL_ALPHABET().b1(it) ? true : get_SPECIAL_SYMBOLS().b1(it)) {
        $tmp0_apply.r5(numberToChar(it));
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if ($spaceToPlus) {
          var tmp_1 = it;
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          tmp$ret$0 = 32;
          tmp_0 = tmp_1 === toByte(tmp$ret$0);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          $tmp0_apply.r5(_Char___init__impl__6a9atx(43));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.q6(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $tmp0_apply, $encodeFull) {
    return function (it) {
      var tmp;
      var tmp_0 = it;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 32;
      if (tmp_0 === toByte(tmp$ret$0)) {
        var tmp_1;
        if ($spaceToPlus) {
          $tmp0_apply.r5(_Char___init__impl__6a9atx(43));
          tmp_1 = Unit_getInstance();
        } else {
          $tmp0_apply.q6('%20');
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        if (get_URL_ALPHABET().b1(it) ? true : !$encodeFull ? get_URL_PROTOCOL_PART().b1(it) : false) {
          $tmp0_apply.r5(numberToChar(it));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.q6(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLPath$lambda($tmp0_apply) {
    return function (it) {
      $tmp0_apply.q6(percentEncode(it));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function init_properties_Codecs_kt_hjkt7n() {
    if (properties_initialized_Codecs_kt_hkj9s1) {
    } else {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i().q5_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.http.URL_ALPHABET.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(item);
        tmp$ret$1 = toByte(tmp$ret$0);
        tmp0_mapTo.a(tmp$ret$1);
      }
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      URL_ALPHABET = toSet(tmp$ret$3);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      var tmp$ret$3_0;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_0 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
      var tmp$ret$2_0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
      var tmp0_iterator_0 = tmp0_map_0.g();
      while (tmp0_iterator_0.h()) {
        var item_0 = tmp0_iterator_0.i().q5_1;
        var tmp$ret$1_0;
        // Inline function 'io.ktor.http.URL_PROTOCOL_PART.<anonymous>' call
        var tmp$ret$0_0;
        // Inline function 'kotlin.code' call
        tmp$ret$0_0 = Char__toInt_impl_vasixd(item_0);
        tmp$ret$1_0 = toByte(tmp$ret$0_0);
        tmp0_mapTo_0.a(tmp$ret$1_0);
      }
      tmp$ret$2_0 = tmp0_mapTo_0;
      tmp$ret$3_0 = tmp$ret$2_0;
      URL_PROTOCOL_PART = tmp$ret$3_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      var tmp$ret$3_1;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_1 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      var tmp$ret$2_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_1, 10));
      var tmp0_iterator_1 = tmp0_map_1.g();
      while (tmp0_iterator_1.h()) {
        var item_1 = tmp0_iterator_1.i().q5_1;
        var tmp$ret$1_1;
        // Inline function 'io.ktor.http.SPECIAL_SYMBOLS.<anonymous>' call
        var tmp$ret$0_1;
        // Inline function 'kotlin.code' call
        tmp$ret$0_1 = Char__toInt_impl_vasixd(item_1);
        tmp$ret$1_1 = toByte(tmp$ret$0_1);
        tmp0_mapTo_1.a(tmp$ret$1_1);
      }
      tmp$ret$2_1 = tmp0_mapTo_1;
      tmp$ret$3_1 = tmp$ret$2_1;
      SPECIAL_SYMBOLS = tmp$ret$3_1;
    }
  }
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, Object.create(ContentType.prototype));
  }
  function ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      parameters = emptyList();
    ContentType_init_$Init$(contentType, contentSubtype, parameters, $this);
    return $this;
  }
  function ContentType_init_$Create$_0(contentType, contentSubtype, parameters, $mask0, $marker) {
    return ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, Object.create(ContentType.prototype));
  }
  function hasParameter($this, name, value) {
    var tmp0_subject = $this.k3h_1.f();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = false;
        break;
      case 1:
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        var tmp0_let = $this.k3h_1.j(0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
        tmp$ret$0 = equals_0(tmp0_let.l3h_1, name, true) ? equals_0(tmp0_let.m3h_1, value, true) : false;
        tmp$ret$1 = tmp$ret$0;

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp1_any = $this.k3h_1;
          var tmp_0;
          if (isInterface(tmp1_any, Collection)) {
            tmp_0 = tmp1_any.k();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp1_any.g();
          while (tmp0_iterator.h()) {
            var element = tmp0_iterator.i();
            var tmp$ret$3;
            // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
            tmp$ret$3 = equals_0(element.l3h_1, name, true) ? equals_0(element.m3h_1, value, true) : false;
            if (tmp$ret$3) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.o3h_1 = ContentType_init_$Create$_0('*', '*', null, 4, null);
  }
  Companion.prototype.p2j = function (value) {
    if (isBlank(value))
      return this.o3h_1;
    var tmp$ret$10;
    // Inline function 'io.ktor.http.Companion.parse' call
    var tmp0_parse = Companion_getInstance_1();
    var headerValue = last(parseHeaderValue(value));
    var tmp$ret$9;
    // Inline function 'io.ktor.http.Companion.parse.<anonymous>' call
    var tmp1__anonymous__uwfjfc = headerValue.p3h_1;
    var tmp2__anonymous__z9zvc9 = headerValue.q3h_1;
    var tmp = _Char___init__impl__6a9atx(47);
    var slash = indexOf$default(tmp1__anonymous__uwfjfc, tmp, 0, false, 6, null);
    if (slash === -1) {
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim(isCharSequence(tmp1__anonymous__uwfjfc) ? tmp1__anonymous__uwfjfc : THROW_CCE()));
      if (tmp$ret$0 === '*')
        return Companion_getInstance_0().o3h_1;
      throw new BadContentTypeFormatException(value);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1__anonymous__uwfjfc;
    tmp$ret$2 = tmp$ret$1.substring(0, slash);
    var tmp0_trim = tmp$ret$2;
    tmp$ret$3 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    var type = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$4 = charSequenceLength(type) === 0;
    if (tmp$ret$4) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp$ret$7;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$6;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = slash + 1 | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp1__anonymous__uwfjfc;
    tmp$ret$6 = tmp$ret$5.substring(tmp1_substring);
    var tmp2_trim = tmp$ret$6;
    tmp$ret$7 = toString(trim(isCharSequence(tmp2_trim) ? tmp2_trim : THROW_CCE()));
    var subtype = tmp$ret$7;
    var tmp_0;
    var tmp_1 = _Char___init__impl__6a9atx(32);
    if (contains$default(type, tmp_1, false, 2, null)) {
      tmp_0 = true;
    } else {
      var tmp_2 = _Char___init__impl__6a9atx(32);
      tmp_0 = contains$default(subtype, tmp_2, false, 2, null);
    }
    if (tmp_0) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp_3;
    var tmp$ret$8;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$8 = charSequenceLength(subtype) === 0;
    if (tmp$ret$8) {
      tmp_3 = true;
    } else {
      var tmp_4 = _Char___init__impl__6a9atx(47);
      tmp_3 = contains$default(subtype, tmp_4, false, 2, null);
    }
    if (tmp_3) {
      throw new BadContentTypeFormatException(value);
    }
    tmp$ret$9 = ContentType_init_$Create$(type, subtype, tmp2__anonymous__z9zvc9);
    tmp$ret$10 = tmp$ret$9;
    return tmp$ret$10;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Application() {
    Application_instance = this;
    var tmp = this;
    tmp.s3h_1 = ContentType_init_$Create$_0('application', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.t3h_1 = ContentType_init_$Create$_0('application', 'atom+xml', null, 4, null);
    var tmp_1 = this;
    tmp_1.u3h_1 = ContentType_init_$Create$_0('application', 'cbor', null, 4, null);
    var tmp_2 = this;
    tmp_2.v3h_1 = ContentType_init_$Create$_0('application', 'json', null, 4, null);
    var tmp_3 = this;
    tmp_3.w3h_1 = ContentType_init_$Create$_0('application', 'hal+json', null, 4, null);
    var tmp_4 = this;
    tmp_4.x3h_1 = ContentType_init_$Create$_0('application', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.y3h_1 = ContentType_init_$Create$_0('application', 'octet-stream', null, 4, null);
    var tmp_6 = this;
    tmp_6.z3h_1 = ContentType_init_$Create$_0('application', 'font-woff', null, 4, null);
    var tmp_7 = this;
    tmp_7.a3i_1 = ContentType_init_$Create$_0('application', 'rss+xml', null, 4, null);
    var tmp_8 = this;
    tmp_8.b3i_1 = ContentType_init_$Create$_0('application', 'xml', null, 4, null);
    var tmp_9 = this;
    tmp_9.c3i_1 = ContentType_init_$Create$_0('application', 'xml-dtd', null, 4, null);
    var tmp_10 = this;
    tmp_10.d3i_1 = ContentType_init_$Create$_0('application', 'zip', null, 4, null);
    var tmp_11 = this;
    tmp_11.e3i_1 = ContentType_init_$Create$_0('application', 'gzip', null, 4, null);
    var tmp_12 = this;
    tmp_12.f3i_1 = ContentType_init_$Create$_0('application', 'x-www-form-urlencoded', null, 4, null);
    var tmp_13 = this;
    tmp_13.g3i_1 = ContentType_init_$Create$_0('application', 'pdf', null, 4, null);
    var tmp_14 = this;
    tmp_14.h3i_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', null, 4, null);
    var tmp_15 = this;
    tmp_15.i3i_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document', null, 4, null);
    var tmp_16 = this;
    tmp_16.j3i_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.presentationml.presentation', null, 4, null);
    var tmp_17 = this;
    tmp_17.k3i_1 = ContentType_init_$Create$_0('application', 'protobuf', null, 4, null);
    var tmp_18 = this;
    tmp_18.l3i_1 = ContentType_init_$Create$_0('application', 'wasm', null, 4, null);
    var tmp_19 = this;
    tmp_19.m3i_1 = ContentType_init_$Create$_0('application', 'problem+json', null, 4, null);
    var tmp_20 = this;
    tmp_20.n3i_1 = ContentType_init_$Create$_0('application', 'problem+xml', null, 4, null);
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    var tmp = this;
    tmp.o3i_1 = ContentType_init_$Create$_0('text', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.p3i_1 = ContentType_init_$Create$_0('text', 'plain', null, 4, null);
    var tmp_1 = this;
    tmp_1.q3i_1 = ContentType_init_$Create$_0('text', 'css', null, 4, null);
    var tmp_2 = this;
    tmp_2.r3i_1 = ContentType_init_$Create$_0('text', 'csv', null, 4, null);
    var tmp_3 = this;
    tmp_3.s3i_1 = ContentType_init_$Create$_0('text', 'html', null, 4, null);
    var tmp_4 = this;
    tmp_4.t3i_1 = ContentType_init_$Create$_0('text', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.u3i_1 = ContentType_init_$Create$_0('text', 'vcard', null, 4, null);
    var tmp_6 = this;
    tmp_6.v3i_1 = ContentType_init_$Create$_0('text', 'xml', null, 4, null);
    var tmp_7 = this;
    tmp_7.w3i_1 = ContentType_init_$Create$_0('text', 'event-stream', null, 4, null);
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_0();
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.z3i_1 = contentType;
    this.a3j_1 = contentSubtype;
  }
  ContentType.prototype.b3j = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.z3i_1, this.a3j_1, this.j3h_1, plus_2(this.k3h_1, HeaderValueParam_init_$Create$(name, value)));
  };
  ContentType.prototype.c3j = function () {
    var tmp;
    if (this.k3h_1.k()) {
      tmp = this;
    } else {
      tmp = ContentType_init_$Create$_0(this.z3i_1, this.a3j_1, null, 4, null);
    }
    return tmp;
  };
  ContentType.prototype.d3j = function (pattern) {
    if (!(pattern.z3i_1 === '*') ? !equals_0(pattern.z3i_1, this.z3i_1, true) : false) {
      return false;
    }
    if (!(pattern.a3j_1 === '*') ? !equals_0(pattern.a3j_1, this.a3j_1, true) : false) {
      return false;
    }
    var tmp0_iterator = pattern.k3h_1.g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      var patternName = tmp1_loop_parameter.v2();
      var patternValue = tmp1_loop_parameter.w2();
      var tmp2_subject = patternName;
      var tmp;
      if (tmp2_subject === '*') {
        var tmp3_subject = patternValue;
        var tmp_0;
        if (tmp3_subject === '*') {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp0_any = this.k3h_1;
            var tmp_1;
            if (isInterface(tmp0_any, Collection)) {
              tmp_1 = tmp0_any.k();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var tmp0_iterator_0 = tmp0_any.g();
            while (tmp0_iterator_0.h()) {
              var element = tmp0_iterator_0.i();
              var tmp$ret$1;
              // Inline function 'io.ktor.http.ContentType.match.<anonymous>' call
              tmp$ret$1 = equals_0(element.m3h_1, patternValue, true);
              if (tmp$ret$1) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp_0 = tmp$ret$0;
        }
        tmp = tmp_0;
      } else {
        var value = this.e3j(patternName);
        var tmp4_subject = patternValue;
        tmp = tmp4_subject === '*' ? !(value == null) : equals_0(value, patternValue, true);
      }
      var matches = tmp;
      if (!matches) {
        return false;
      }
    }
    return true;
  };
  ContentType.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this.z3i_1, other.z3i_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.a3j_1, other.a3j_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.k3h_1, other.k3h_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  ContentType.prototype.hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.z3i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_lowercase = this.a3j_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_lowercase;
    tmp$ret$3 = tmp$ret$2.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.k3h_1)) | 0;
    return result;
  };
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.e3j('charset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.charset.<anonymous>' call
      var tmp_0;
      try {
        tmp_0 = Companion_getInstance().z3a(tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof IllegalArgumentException) {
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.b3j('charset', get_name(charset));
  }
  function withCharsetIfNeeded(_this__u8e3s4, charset) {
    var tmp;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = _this__u8e3s4.z3i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    if (tmp$ret$1 === 'application') {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercase' call
      var tmp1_lowercase = _this__u8e3s4.a3j_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_lowercase;
      tmp$ret$3 = tmp$ret$2.toLowerCase();
      tmp_0 = tmp$ret$3 === 'json';
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.b3j('charset', get_name(charset));
    }
    return tmp;
  }
  function get_HeaderFieldValueSeparators() {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HeaderValueWithParameters(content, parameters) {
    Companion_getInstance_1();
    this.j3h_1 = content;
    this.k3h_1 = parameters;
  }
  HeaderValueWithParameters.prototype.e3j = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.k3h_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.k3h_1.j(index);
        if (equals_0(parameter.l3h_1, name, true)) {
          return parameter.m3h_1;
        }
      }
       while (!(index === last));
    return null;
  };
  HeaderValueWithParameters.prototype.toString = function () {
    var tmp;
    if (this.k3h_1.k()) {
      tmp = this.j3h_1;
    } else {
      var tmp_0 = this.j3h_1.length;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.sumOf' call
      var tmp0_sumOf = this.k3h_1;
      var sum = 0;
      var tmp0_iterator = tmp0_sumOf.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp_1 = sum;
        var tmp$ret$0;
        // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
        tmp$ret$0 = (element.l3h_1.length + element.m3h_1.length | 0) + 3 | 0;
        sum = tmp_1 + tmp$ret$0 | 0;
      }
      tmp$ret$1 = sum;
      var size = tmp_0 + tmp$ret$1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = StringBuilder_init_$Create$_0(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
      tmp1_apply.q6(this.j3h_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.k3h_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.k3h_1.j(index);
          tmp1_apply.q6('; ');
          tmp1_apply.q6(element_0.l3h_1);
          tmp1_apply.q6('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var tmp0_escapeIfNeededTo = element_0.m3h_1;
          if (needQuotes$accessor$vynnj(tmp0_escapeIfNeededTo)) {
            tmp1_apply.q6(quote(tmp0_escapeIfNeededTo));
          } else {
            tmp1_apply.q6(tmp0_escapeIfNeededTo);
          }
        }
         while (!(index === last));
      tmp$ret$2 = tmp1_apply;
      tmp = tmp$ret$2.toString();
    }
    return tmp;
  };
  function needQuotes(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) === 0;
    if (tmp$ret$0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (get_HeaderFieldValueSeparators().b1(new Char(charSequenceGet(_this__u8e3s4, index))))
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function quote(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.quote.<anonymous>' call
    quoteTo(_this__u8e3s4, tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function isQuoted(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!equals(new Char(first(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34))) ? true : !equals(new Char(last_0(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34)))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var tmp = _Char___init__impl__6a9atx(34);
      var tmp_0 = startIndex;
      var index = indexOf$default(_this__u8e3s4, tmp, tmp_0, false, 4, null);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (equals(new Char(charSequenceGet(_this__u8e3s4, slashIndex)), new Char(_Char___init__impl__6a9atx(92)))) {
        var tmp0 = slashesCount;
        slashesCount = tmp0 + 1 | 0;
        var tmp1 = slashIndex;
        slashIndex = tmp1 - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    out.q6('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, i);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(92)))) {
          out.q6('\\\\');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) {
          out.q6('\\n');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) {
          out.q6('\\r');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
          out.q6('\\t');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(34)))) {
          out.q6('\\"');
        } else {
          out.r5(ch);
        }
      }
       while (inductionVariable < last);
    out.q6('"');
  }
  function needQuotes$accessor$vynnj(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return needQuotes(_this__u8e3s4);
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function init_properties_HeaderValueWithParameters_kt_2dfzmo() {
    if (properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
    } else {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.f3j_1 = EmptyHeaders_getInstance();
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function HeadersBuilder_init_$Init$(size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    HeadersBuilder.call($this, size);
    return $this;
  }
  function HeadersBuilder_init_$Create$(size, $mask0, $marker) {
    return HeadersBuilder_init_$Init$(size, $mask0, $marker, Object.create(HeadersBuilder.prototype));
  }
  function HeadersBuilder(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  HeadersBuilder.prototype.cq = function () {
    return new HeadersImpl(this.p3d_1);
  };
  HeadersBuilder.prototype.q3d = function (name) {
    StringValuesBuilderImpl.prototype.q3d.call(this, name);
    HttpHeaders_getInstance().e3n(name);
  };
  HeadersBuilder.prototype.t3d = function (value) {
    StringValuesBuilderImpl.prototype.t3d.call(this, value);
    HttpHeaders_getInstance().f3n(value);
  };
  function EmptyHeaders() {
    EmptyHeaders_instance = this;
  }
  EmptyHeaders.prototype.j3d = function () {
    return true;
  };
  EmptyHeaders.prototype.k3d = function (name) {
    return null;
  };
  EmptyHeaders.prototype.l3d = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.m3d = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.toString = function () {
    return 'Headers ' + this.m3d();
  };
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    if (EmptyHeaders_instance == null)
      new EmptyHeaders();
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  HeadersImpl.prototype.toString = function () {
    return 'Headers ' + this.m3d();
  };
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, Object.create(HeaderValueParam.prototype));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.l3h_1 = name;
    this.m3h_1 = value;
    this.n3h_1 = escapeValue;
  }
  HeaderValueParam.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.l3h_1, this.l3h_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.m3h_1, this.m3h_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  HeaderValueParam.prototype.hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.l3h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_lowercase = this.m3h_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_lowercase;
    tmp$ret$3 = tmp$ret$2.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  HeaderValueParam.prototype.v2 = function () {
    return this.l3h_1;
  };
  HeaderValueParam.prototype.w2 = function () {
    return this.m3h_1;
  };
  HeaderValueParam.prototype.toString = function () {
    return 'HeaderValueParam(name=' + this.l3h_1 + ', value=' + this.m3h_1 + ', escapeValue=' + this.n3h_1 + ')';
  };
  function HeaderValue(value, params) {
    this.p3h_1 = value;
    this.q3h_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.q3h_1;
      var tmp0_iterator = tmp0_firstOrNull.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
        tmp$ret$0 = element.l3h_1 === 'q';
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m3h_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      var tmp$ret$2;
      // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
      tmp$ret$2 = rangeTo(0.0, 1.0).i2(tmp2_safe_receiver);
      if (tmp$ret$2) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp$ret$3 = tmp_1;
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.r3h_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  HeaderValue.prototype.v2 = function () {
    return this.p3h_1;
  };
  HeaderValue.prototype.toString = function () {
    return 'HeaderValue(value=' + this.p3h_1 + ', params=' + this.q3h_1 + ')';
  };
  HeaderValue.prototype.hashCode = function () {
    var result = getStringHashCode(this.p3h_1);
    result = imul(result, 31) + hashCode(this.q3h_1) | 0;
    return result;
  };
  HeaderValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.p3h_1 === tmp0_other_with_cast.p3h_1))
      return false;
    if (!equals(this.q3h_1, tmp0_other_with_cast.q3h_1))
      return false;
    return true;
  };
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda);
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda);
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        var tmp_0 = items.p();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.a(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59)))) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.p();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.a(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.h7() ? _this__u8e3s4.p() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0.substring(start, end);
    var tmp0_trim = tmp$ret$1;
    tmp$ret$2 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    return tmp$ret$2;
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(61)))) {
        var tmp1_container = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = tmp1_container.v2();
        var paramValue = tmp1_container.w2();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        var tmp2 = position;
        position = tmp2 + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (equals(new Char(charSequenceGet(value, start)), new Char(_Char___init__impl__6a9atx(34)))) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44))))
        return to(position, subtrim(value, start, position));
      else {
        var tmp1 = position;
        position = tmp1 + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(34))) ? nextIsSemicolonOrEnd(value, position) : false) {
        return to(position + 1 | 0, builder.toString());
      } else if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(92))) ? position < (get_lastIndex_0(value) - 2 | 0) : false) {
        builder.r5(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.r5(currentChar);
      var tmp0 = position;
      position = tmp0 + 1 | 0;
    }
    var tmp = position;
    var tmp$ret$0;
    // Inline function 'kotlin.text.plus' call
    var tmp0_plus = builder.toString();
    tmp$ret$0 = '"' + tmp0_plus;
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length ? equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(32))) : false) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length ? true : equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(59)));
  }
  function parseAndSortHeader(header) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = parseHeaderValue(header);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = parseAndSortHeader$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    return tmp$ret$1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.g3n_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.re = function (a, b) {
    return this.g3n_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.re(a, b);
  };
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(name) === 0;
    if (tmp$ret$0) {
      return Unit_getInstance();
    }
    $parameters.p().a(HeaderValueParam_init_$Create$(name, value));
  }
  function parseHeaderValue$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  }
  function parseHeaderValueItem$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  }
  function parseAndSortHeader$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    tmp$ret$0 = b.r3h_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    tmp$ret$1 = a.r3h_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.i3j_1 = 'Accept';
    this.j3j_1 = 'Accept-Charset';
    this.k3j_1 = 'Accept-Encoding';
    this.l3j_1 = 'Accept-Language';
    this.m3j_1 = 'Accept-Ranges';
    this.n3j_1 = 'Age';
    this.o3j_1 = 'Allow';
    this.p3j_1 = 'ALPN';
    this.q3j_1 = 'Authentication-Info';
    this.r3j_1 = 'Authorization';
    this.s3j_1 = 'Cache-Control';
    this.t3j_1 = 'Connection';
    this.u3j_1 = 'Content-Disposition';
    this.v3j_1 = 'Content-Encoding';
    this.w3j_1 = 'Content-Language';
    this.x3j_1 = 'Content-Length';
    this.y3j_1 = 'Content-Location';
    this.z3j_1 = 'Content-Range';
    this.a3k_1 = 'Content-Type';
    this.b3k_1 = 'Cookie';
    this.c3k_1 = 'DASL';
    this.d3k_1 = 'Date';
    this.e3k_1 = 'DAV';
    this.f3k_1 = 'Depth';
    this.g3k_1 = 'Destination';
    this.h3k_1 = 'ETag';
    this.i3k_1 = 'Expect';
    this.j3k_1 = 'Expires';
    this.k3k_1 = 'From';
    this.l3k_1 = 'Forwarded';
    this.m3k_1 = 'Host';
    this.n3k_1 = 'HTTP2-Settings';
    this.o3k_1 = 'If';
    this.p3k_1 = 'If-Match';
    this.q3k_1 = 'If-Modified-Since';
    this.r3k_1 = 'If-None-Match';
    this.s3k_1 = 'If-Range';
    this.t3k_1 = 'If-Schedule-Tag-Match';
    this.u3k_1 = 'If-Unmodified-Since';
    this.v3k_1 = 'Last-Modified';
    this.w3k_1 = 'Location';
    this.x3k_1 = 'Lock-Token';
    this.y3k_1 = 'Link';
    this.z3k_1 = 'Max-Forwards';
    this.a3l_1 = 'MIME-Version';
    this.b3l_1 = 'Ordering-Type';
    this.c3l_1 = 'Origin';
    this.d3l_1 = 'Overwrite';
    this.e3l_1 = 'Position';
    this.f3l_1 = 'Pragma';
    this.g3l_1 = 'Prefer';
    this.h3l_1 = 'Preference-Applied';
    this.i3l_1 = 'Proxy-Authenticate';
    this.j3l_1 = 'Proxy-Authentication-Info';
    this.k3l_1 = 'Proxy-Authorization';
    this.l3l_1 = 'Public-Key-Pins';
    this.m3l_1 = 'Public-Key-Pins-Report-Only';
    this.n3l_1 = 'Range';
    this.o3l_1 = 'Referer';
    this.p3l_1 = 'Retry-After';
    this.q3l_1 = 'Schedule-Reply';
    this.r3l_1 = 'Schedule-Tag';
    this.s3l_1 = 'Sec-WebSocket-Accept';
    this.t3l_1 = 'Sec-WebSocket-Extensions';
    this.u3l_1 = 'Sec-WebSocket-Key';
    this.v3l_1 = 'Sec-WebSocket-Protocol';
    this.w3l_1 = 'Sec-WebSocket-Version';
    this.x3l_1 = 'Server';
    this.y3l_1 = 'Set-Cookie';
    this.z3l_1 = 'SLUG';
    this.a3m_1 = 'Strict-Transport-Security';
    this.b3m_1 = 'TE';
    this.c3m_1 = 'Timeout';
    this.d3m_1 = 'Trailer';
    this.e3m_1 = 'Transfer-Encoding';
    this.f3m_1 = 'Upgrade';
    this.g3m_1 = 'User-Agent';
    this.h3m_1 = 'Vary';
    this.i3m_1 = 'Via';
    this.j3m_1 = 'Warning';
    this.k3m_1 = 'WWW-Authenticate';
    this.l3m_1 = 'Access-Control-Allow-Origin';
    this.m3m_1 = 'Access-Control-Allow-Methods';
    this.n3m_1 = 'Access-Control-Allow-Credentials';
    this.o3m_1 = 'Access-Control-Allow-Headers';
    this.p3m_1 = 'Access-Control-Request-Method';
    this.q3m_1 = 'Access-Control-Request-Headers';
    this.r3m_1 = 'Access-Control-Expose-Headers';
    this.s3m_1 = 'Access-Control-Max-Age';
    this.t3m_1 = 'X-Http-Method-Override';
    this.u3m_1 = 'X-Forwarded-Host';
    this.v3m_1 = 'X-Forwarded-Server';
    this.w3m_1 = 'X-Forwarded-Proto';
    this.x3m_1 = 'X-Forwarded-For';
    this.y3m_1 = 'X-Forwarded-Port';
    this.z3m_1 = 'X-Request-ID';
    this.a3n_1 = 'X-Correlation-ID';
    this.b3n_1 = 'X-Total-Count';
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.e3m_1, this.f3m_1];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.c3n_1 = tmp$ret$2;
    this.d3n_1 = asList(this.c3n_1);
  }
  HttpHeaders.prototype.e3n = function (name) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var indexedObject = name;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderName.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 ? true : isDelimiter(item)) {
        throw new IllegalHeaderNameException(name, tmp0__anonymous__q1qw7t);
      }
    }
  };
  HttpHeaders.prototype.f3n = function (value) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var indexedObject = value;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderValue.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0 ? !equals(new Char(item), new Char(_Char___init__impl__6a9atx(9))) : false) {
        throw new IllegalHeaderValueException(value, tmp0__anonymous__q1qw7t);
      }
    }
  };
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function isDelimiter(ch) {
    return contains$default('"(),/:;<=>?@[\\]{}', ch, false, 2, null);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + new Char(charSequenceGet(headerName, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(headerName, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.h3n_1 = headerName;
    this.i3n_1 = position;
    captureStack(this, IllegalHeaderNameException);
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + new Char(charSequenceGet(headerValue, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(headerValue, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.j3n_1 = headerValue;
    this.k3n_1 = position;
    captureStack(this, IllegalHeaderValueException);
  }
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l3n().g12(HttpHeaders_getInstance().a3k_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp$ret$0 = Companion_getInstance_0().p2j(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l3n().g12(HttpHeaders_getInstance().x3j_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_0(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l3n().g12(HttpHeaders_getInstance().a3k_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp$ret$0 = Companion_getInstance_0().p2j(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.m3n_1 = new HttpMethod('GET');
    this.n3n_1 = new HttpMethod('POST');
    this.o3n_1 = new HttpMethod('PUT');
    this.p3n_1 = new HttpMethod('PATCH');
    this.q3n_1 = new HttpMethod('DELETE');
    this.r3n_1 = new HttpMethod('HEAD');
    this.s3n_1 = new HttpMethod('OPTIONS');
    this.t3n_1 = listOf([this.m3n_1, this.n3n_1, this.o3n_1, this.p3n_1, this.q3n_1, this.r3n_1, this.s3n_1]);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.u3n_1 = value;
  }
  HttpMethod.prototype.toString = function () {
    return 'HttpMethod(value=' + this.u3n_1 + ')';
  };
  HttpMethod.prototype.hashCode = function () {
    return getStringHashCode(this.u3n_1);
  };
  HttpMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.u3n_1 === tmp0_other_with_cast.u3n_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.v3n_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.w3n_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.x3n_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.y3n_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.z3n_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.a3o_1 = name;
    this.b3o_1 = major;
    this.c3o_1 = minor;
  }
  HttpProtocolVersion.prototype.toString = function () {
    return this.a3o_1 + '/' + this.b3o_1 + '.' + this.c3o_1;
  };
  HttpProtocolVersion.prototype.hashCode = function () {
    var result = getStringHashCode(this.a3o_1);
    result = imul(result, 31) + this.b3o_1 | 0;
    result = imul(result, 31) + this.c3o_1 | 0;
    return result;
  };
  HttpProtocolVersion.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.a3o_1 === tmp0_other_with_cast.a3o_1))
      return false;
    if (!(this.b3o_1 === tmp0_other_with_cast.b3o_1))
      return false;
    if (!(this.c3o_1 === tmp0_other_with_cast.c3o_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.d3o_1 = new HttpStatusCode(100, 'Continue');
    this.e3o_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.f3o_1 = new HttpStatusCode(102, 'Processing');
    this.g3o_1 = new HttpStatusCode(200, 'OK');
    this.h3o_1 = new HttpStatusCode(201, 'Created');
    this.i3o_1 = new HttpStatusCode(202, 'Accepted');
    this.j3o_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.k3o_1 = new HttpStatusCode(204, 'No Content');
    this.l3o_1 = new HttpStatusCode(205, 'Reset Content');
    this.m3o_1 = new HttpStatusCode(206, 'Partial Content');
    this.n3o_1 = new HttpStatusCode(207, 'Multi-Status');
    this.o3o_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.p3o_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.q3o_1 = new HttpStatusCode(302, 'Found');
    this.r3o_1 = new HttpStatusCode(303, 'See Other');
    this.s3o_1 = new HttpStatusCode(304, 'Not Modified');
    this.t3o_1 = new HttpStatusCode(305, 'Use Proxy');
    this.u3o_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.v3o_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.w3o_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.x3o_1 = new HttpStatusCode(400, 'Bad Request');
    this.y3o_1 = new HttpStatusCode(401, 'Unauthorized');
    this.z3o_1 = new HttpStatusCode(402, 'Payment Required');
    this.a3p_1 = new HttpStatusCode(403, 'Forbidden');
    this.b3p_1 = new HttpStatusCode(404, 'Not Found');
    this.c3p_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.d3p_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.e3p_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.f3p_1 = new HttpStatusCode(408, 'Request Timeout');
    this.g3p_1 = new HttpStatusCode(409, 'Conflict');
    this.h3p_1 = new HttpStatusCode(410, 'Gone');
    this.i3p_1 = new HttpStatusCode(411, 'Length Required');
    this.j3p_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.k3p_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.l3p_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.m3p_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.n3p_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.o3p_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.p3p_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.q3p_1 = new HttpStatusCode(423, 'Locked');
    this.r3p_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.s3p_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.t3p_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.u3p_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.v3p_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.w3p_1 = new HttpStatusCode(501, 'Not Implemented');
    this.x3p_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.y3p_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.z3p_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.a3q_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.b3q_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.c3q_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.d3q_1 = allStatusCodes();
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = this.d3q_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.statusCodesMap.<anonymous>' call
      tmp$ret$0 = element.f3q_1;
      tmp0_associateByTo.x2(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.e3q_1 = tmp$ret$2;
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.f3q_1 = value;
    this.g3q_1 = description;
  }
  HttpStatusCode.prototype.toString = function () {
    return '' + this.f3q_1 + ' ' + this.g3q_1;
  };
  HttpStatusCode.prototype.equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.f3q_1 === this.f3q_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  HttpStatusCode.prototype.hashCode = function () {
    return this.f3q_1;
  };
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().d3o_1, Companion_getInstance_5().e3o_1, Companion_getInstance_5().f3o_1, Companion_getInstance_5().g3o_1, Companion_getInstance_5().h3o_1, Companion_getInstance_5().i3o_1, Companion_getInstance_5().j3o_1, Companion_getInstance_5().k3o_1, Companion_getInstance_5().l3o_1, Companion_getInstance_5().m3o_1, Companion_getInstance_5().n3o_1, Companion_getInstance_5().o3o_1, Companion_getInstance_5().p3o_1, Companion_getInstance_5().q3o_1, Companion_getInstance_5().r3o_1, Companion_getInstance_5().s3o_1, Companion_getInstance_5().t3o_1, Companion_getInstance_5().u3o_1, Companion_getInstance_5().v3o_1, Companion_getInstance_5().w3o_1, Companion_getInstance_5().x3o_1, Companion_getInstance_5().y3o_1, Companion_getInstance_5().z3o_1, Companion_getInstance_5().a3p_1, Companion_getInstance_5().b3p_1, Companion_getInstance_5().c3p_1, Companion_getInstance_5().d3p_1, Companion_getInstance_5().e3p_1, Companion_getInstance_5().f3p_1, Companion_getInstance_5().g3p_1, Companion_getInstance_5().h3p_1, Companion_getInstance_5().i3p_1, Companion_getInstance_5().j3p_1, Companion_getInstance_5().k3p_1, Companion_getInstance_5().l3p_1, Companion_getInstance_5().m3p_1, Companion_getInstance_5().n3p_1, Companion_getInstance_5().o3p_1, Companion_getInstance_5().p3p_1, Companion_getInstance_5().q3p_1, Companion_getInstance_5().r3p_1, Companion_getInstance_5().s3p_1, Companion_getInstance_5().t3p_1, Companion_getInstance_5().u3p_1, Companion_getInstance_5().v3p_1, Companion_getInstance_5().w3p_1, Companion_getInstance_5().x3p_1, Companion_getInstance_5().y3p_1, Companion_getInstance_5().z3p_1, Companion_getInstance_5().a3q_1, Companion_getInstance_5().b3q_1, Companion_getInstance_5().c3q_1]);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.h3q_1 = EmptyParameters_getInstance();
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Parameters() {
  }
  function ParametersBuilder(size) {
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilder$default(size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    return ParametersBuilder(size);
  }
  function EmptyParameters() {
    EmptyParameters_instance = this;
  }
  EmptyParameters.prototype.j3d = function () {
    return true;
  };
  EmptyParameters.prototype.k3d = function (name) {
    return null;
  };
  EmptyParameters.prototype.l3d = function () {
    return emptySet();
  };
  EmptyParameters.prototype.m3d = function () {
    return emptySet();
  };
  EmptyParameters.prototype.k = function () {
    return true;
  };
  EmptyParameters.prototype.toString = function () {
    return 'Parameters ' + this.m3d();
  };
  EmptyParameters.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.k();
    } else {
      tmp = false;
    }
    return tmp;
  };
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    if (EmptyParameters_instance == null)
      new EmptyParameters();
    return EmptyParameters_instance;
  }
  function ParametersBuilderImpl(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  ParametersBuilderImpl.prototype.cq = function () {
    return new ParametersImpl(this.p3d_1);
  };
  function ParametersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  ParametersImpl.prototype.toString = function () {
    return 'Parameters ' + this.m3d();
  };
  function parseQueryString(query, startIndex, limit, decode) {
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().h3q_1;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.http.Companion.build' call
      var tmp0_build = Companion_getInstance_6();
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.parseQueryString.<anonymous>' call
      parse(tmp0_apply, query, startIndex, limit, decode);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.cq();
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function parseQueryString$default(query, startIndex, limit, decode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      limit = 1000;
    if (!(($mask0 & 8) === 0))
      decode = true;
    return parseQueryString(query, startIndex, limit, decode);
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_getInstance();
        }
        var tmp1_subject = charSequenceGet(query, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(38)))) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          var tmp2 = count;
          count = tmp2 + 1 | 0;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(61)))) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_getInstance();
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var tmp;
        if (decode) {
          tmp = decodeURLQueryComponent$default(query, spaceNameIndex, spaceEndIndex, false, null, 12, null);
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = query;
          tmp$ret$1 = tmp$ret$0.substring(spaceNameIndex, spaceEndIndex);
          tmp = tmp$ret$1;
        }
        var name = tmp;
        _this__u8e3s4.r3d(name, emptyList());
      }
      return Unit_getInstance();
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var tmp_0;
      if (decode) {
        tmp_0 = decodeURLQueryComponent$default(query, spaceNameIndex_0, spaceEqualIndex, false, null, 12, null);
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = query;
        tmp$ret$3 = tmp$ret$2.substring(spaceNameIndex_0, spaceEqualIndex);
        tmp_0 = tmp$ret$3;
      }
      var name_0 = tmp_0;
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var tmp_1;
      if (decode) {
        tmp_1 = decodeURLQueryComponent$default(query, spaceValueIndex, spaceEndIndex_0, true, null, 8, null);
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = query;
        tmp$ret$5 = tmp$ret$4.substring(spaceValueIndex, spaceEndIndex_0);
        tmp_1 = tmp$ret$5;
      }
      var value = tmp_1;
      _this__u8e3s4.u3d(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end ? isWhitespace(charSequenceGet(query, spaceIndex)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start ? isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 - 1 | 0;
    }
    return spaceIndex;
  }
  function URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      protocol = Companion_getInstance_8().k3q_1;
    if (!(($mask0 & 2) === 0))
      host = '';
    if (!(($mask0 & 4) === 0))
      port = 0;
    if (!(($mask0 & 8) === 0))
      user = null;
    if (!(($mask0 & 16) === 0))
      password = null;
    if (!(($mask0 & 32) === 0))
      pathSegments = emptyList();
    if (!(($mask0 & 64) === 0))
      parameters = Companion_getInstance_6().h3q_1;
    if (!(($mask0 & 128) === 0))
      fragment = '';
    if (!(($mask0 & 256) === 0))
      trailingQuery = false;
    URLBuilder.call($this, protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery);
    return $this;
  }
  function URLBuilder_init_$Create$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker) {
    return URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, Object.create(URLBuilder.prototype));
  }
  function applyOrigin($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = $this.r3q_1;
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.q3q_1.a3r_1 === 'file';
    }
    if (tmp)
      return Unit_getInstance();
    $this.r3q_1 = Companion_getInstance_7().s3r_1.d3r_1;
    if ($this.q3q_1.equals(Companion_getInstance_8().k3q_1))
      $this.q3q_1 = Companion_getInstance_7().s3r_1.c3r_1;
    if ($this.s3q_1 === 0)
      $this.s3q_1 = Companion_getInstance_7().s3r_1.e3r_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.s3r_1 = Url(get_origin(this));
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_7();
    this.q3q_1 = protocol;
    this.r3q_1 = host;
    this.s3q_1 = port;
    this.t3q_1 = trailingQuery;
    var tmp = this;
    var tmp0_safe_receiver = user;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.u3q_1 = tmp_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_0 = password;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      tmp_2 = encodeURLParameter$default(tmp0_safe_receiver_0, false, 1, null);
    }
    tmp_1.v3q_1 = tmp_2;
    var tmp_3 = this;
    tmp_3.w3q_1 = encodeURLQueryComponent$default(fragment, false, false, null, 7, null);
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var tmp0_iterator = pathSegments.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.encodedPathSegments.<anonymous>' call
      tmp$ret$0 = encodeURLPathPart(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    tmp_4.x3q_1 = tmp$ret$2;
    this.y3q_1 = encodeParameters(parameters);
    this.z3q_1 = new UrlDecodedParametersBuilder(this.y3q_1);
  }
  URLBuilder.prototype.t3r = function (value) {
    var tmp = this;
    var tmp0_safe_receiver = value;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.u3q_1 = tmp_0;
  };
  URLBuilder.prototype.q2n = function () {
    var tmp0_safe_receiver = this.u3q_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.u3r = function () {
    var tmp0_safe_receiver = this.v3q_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.v3r = function () {
    var tmp = this.w3q_1;
    return decodeURLQueryComponent$default(tmp, 0, 0, false, null, 15, null);
  };
  URLBuilder.prototype.w3r = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.x3q_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.<get-pathSegments>.<anonymous>' call
      tmp$ret$0 = decodeURLPart$default(item, 0, 0, null, 7, null);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  URLBuilder.prototype.x3r = function (value) {
    this.y3q_1 = value;
    this.z3q_1 = new UrlDecodedParametersBuilder(value);
  };
  URLBuilder.prototype.y3r = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  URLBuilder.prototype.cq = function () {
    applyOrigin(this);
    return new Url_0(this.q3q_1, this.r3q_1, this.s3q_1, this.w3r(), this.z3q_1.cq(), this.v3r(), this.q2n(), this.u3r(), this.t3q_1, this.y3r());
  };
  function get_authority(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.q6(get_encodedUserAndPassword(_this__u8e3s4));
    tmp0_apply.q6(_this__u8e3s4.r3q_1);
    if (!(_this__u8e3s4.s3q_1 === 0) ? !(_this__u8e3s4.s3q_1 === _this__u8e3s4.q3q_1.b3r_1) : false) {
      tmp0_apply.q6(':');
      tmp0_apply.q6(_this__u8e3s4.s3q_1.toString());
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function get_DEFAULT_PORT() {
    return DEFAULT_PORT;
  }
  var DEFAULT_PORT;
  function appendTo(_this__u8e3s4, out) {
    out.b(_this__u8e3s4.q3q_1.a3r_1);
    var tmp0_subject = _this__u8e3s4.q3q_1.a3r_1;
    if (tmp0_subject === 'file') {
      appendFile(out, _this__u8e3s4.r3q_1, get_encodedPath(_this__u8e3s4));
      return out;
    } else if (tmp0_subject === 'mailto') {
      appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.r3q_1);
      return out;
    }
    out.b('://');
    out.b(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.y3q_1, _this__u8e3s4.t3q_1);
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.w3q_1;
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      out.r5(_Char___init__impl__6a9atx(35));
      out.b(_this__u8e3s4.w3q_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.u3q_1, _this__u8e3s4.v3q_1);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.b('://');
    _this__u8e3s4.b(host);
    var tmp = _Char___init__impl__6a9atx(47);
    if (!startsWith$default(encodedPath, tmp, false, 2, null)) {
      _this__u8e3s4.r5(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    var tmp = _this__u8e3s4;
    var tmp_0;
    if (isBlank(value)) {
      tmp_0 = emptyList();
    } else if (value === '/') {
      tmp_0 = get_ROOT_PATH();
    } else {
      var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(47)]);
      tmp_0 = toMutableList(split$default(value, tmp_1, false, 0, 6, null));
    }
    tmp.x3q_1 = tmp_0;
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.x3q_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.b(':');
    _this__u8e3s4.b(encodedUser);
    _this__u8e3s4.b(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.k())
      return '';
    if (_this__u8e3s4.f() === 1) {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = first_0(_this__u8e3s4);
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString$default(_this__u8e3s4, '/', null, null, 0, null, null, 62, null);
  }
  function get_ROOT_PATH() {
    init_properties_URLParser_kt_jyldy();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        throw new URLParserException(urlString, $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(urlString, index);
          tmp$ret$0 = !isWhitespace(tmp0__anonymous__q1qw7t);
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var tmp$ret$2;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp1__anonymous__uwfjfc = charSequenceGet(urlString, index_0);
          tmp$ret$2 = !isWhitespace(tmp1__anonymous__uwfjfc);
          if (tmp$ret$2) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp2_substring = startIndex;
      var tmp3_substring = startIndex + schemeLength | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = urlString;
      tmp$ret$5 = tmp$ret$4.substring(tmp2_substring, tmp3_substring);
      var scheme = tmp$ret$5;
      _this__u8e3s4.q3q_1 = Companion_getInstance_8().z3r(scheme);
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.q3q_1.a3r_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.q3q_1.a3r_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      var tmp4_require = slashCount === 0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp4_require) {
        var tmp$ret$6;
        // Inline function 'kotlin.require.<anonymous>' call
        tmp$ret$6 = 'Failed requirement.';
        var message = tmp$ret$6;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        var tmp$ret$8;
        // Inline function 'kotlin.takeIf' call
        var tmp = toCharArray('@/\\?#');
        var tmp_0 = startIndex;
        var tmp5_takeIf = indexOfAny$default(urlString, tmp, tmp_0, false, 4, null);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        var tmp$ret$7;
        // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
        tmp$ret$7 = tmp5_takeIf > 0;
        if (tmp$ret$7) {
          tmp_1 = tmp5_takeIf;
        } else {
          tmp_1 = null;
        }
        tmp$ret$8 = tmp_1;
        var tmp0_elvis_lhs = tmp$ret$8;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex ? equals(new Char(charSequenceGet(urlString, delimiter)), new Char(_Char___init__impl__6a9atx(64))) : false) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            var tmp_2 = _this__u8e3s4;
            var tmp$ret$10;
            // Inline function 'kotlin.text.substring' call
            var tmp6_substring = startIndex;
            var tmp$ret$9;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$9 = urlString;
            tmp$ret$10 = tmp$ret$9.substring(tmp6_substring, passwordIndex);
            tmp_2.u3q_1 = tmp$ret$10;
            var tmp_3 = _this__u8e3s4;
            var tmp$ret$12;
            // Inline function 'kotlin.text.substring' call
            var tmp7_substring = passwordIndex + 1 | 0;
            var tmp$ret$11;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$11 = urlString;
            tmp$ret$12 = tmp$ret$11.substring(tmp7_substring, delimiter);
            tmp_3.v3q_1 = tmp$ret$12;
          } else {
            var tmp_4 = _this__u8e3s4;
            var tmp$ret$14;
            // Inline function 'kotlin.text.substring' call
            var tmp8_substring = startIndex;
            var tmp$ret$13;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$13 = urlString;
            tmp$ret$14 = tmp$ret$13.substring(tmp8_substring, delimiter);
            tmp_4.u3q_1 = tmp$ret$14;
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.x3q_1 = equals(new Char(charSequenceGet(urlString, endIndex - 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_5 = _this__u8e3s4;
    var tmp_6;
    if (slashCount === 0) {
      tmp_6 = dropLast(_this__u8e3s4.x3q_1, 1);
    } else {
      tmp_6 = emptyList();
    }
    tmp_5.x3q_1 = tmp_6;
    var tmp$ret$16;
    // Inline function 'kotlin.takeIf' call
    var tmp_7 = toCharArray('?#');
    var tmp_8 = startIndex;
    var tmp9_takeIf = indexOfAny$default(urlString, tmp_7, tmp_8, false, 4, null);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_9;
    var tmp$ret$15;
    // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
    tmp$ret$15 = tmp9_takeIf > 0;
    if (tmp$ret$15) {
      tmp_9 = tmp9_takeIf;
    } else {
      tmp_9 = null;
    }
    tmp$ret$16 = tmp_9;
    var tmp1_elvis_lhs = tmp$ret$16;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      var tmp$ret$18;
      // Inline function 'kotlin.text.substring' call
      var tmp10_substring = startIndex;
      var tmp$ret$17;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$17 = urlString;
      tmp$ret$18 = tmp$ret$17.substring(tmp10_substring, pathEnd);
      var rawPath = tmp$ret$18;
      var tmp_10;
      var tmp_11;
      if (_this__u8e3s4.x3q_1.f() === 1) {
        var tmp$ret$19;
        // Inline function 'kotlin.text.isEmpty' call
        var tmp11_isEmpty = first_0(_this__u8e3s4.x3q_1);
        tmp$ret$19 = charSequenceLength(tmp11_isEmpty) === 0;
        tmp_11 = tmp$ret$19;
      } else {
        tmp_11 = false;
      }
      if (tmp_11) {
        tmp_10 = emptyList();
      } else {
        tmp_10 = _this__u8e3s4.x3q_1;
      }
      var basePath = tmp_10;
      var tmp_12;
      if (rawPath === '/') {
        tmp_12 = get_ROOT_PATH();
      } else {
        var tmp_13 = charArrayOf([_Char___init__impl__6a9atx(47)]);
        tmp_12 = split$default(rawPath, tmp_13, false, 0, 6, null);
      }
      var rawChunks = tmp_12;
      var tmp2_subject = slashCount;
      var relativePath = plus_0(tmp2_subject === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.x3q_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(63))) : false) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  function findScheme(urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charSequenceGet(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) ? !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false) : false) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charSequenceGet(urlString, current);
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(58)))) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if ((equals(new Char(char), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(63)))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(35))))
        return -1;
      if ((((((incorrectSchemePosition === -1 ? !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) : false) ? !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) : false) ? !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(46))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(43))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(45))) : false) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    init_properties_URLParser_kt_jyldy();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex) {
      if (!equals(new Char(charSequenceGet(urlString, startIndex + result | 0)), new Char(char)))
        break $l$loop;
      var tmp0 = result;
      result = tmp0 + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    init_properties_URLParser_kt_jyldy();
    var tmp0_subject = slashCount;
    switch (tmp0_subject) {
      case 2:
        var tmp = _Char___init__impl__6a9atx(47);
        var nextSlash = indexOf$default(urlString, tmp, startIndex, false, 4, null);
        if (nextSlash === -1 ? true : nextSlash === endIndex) {
          var tmp_0 = _this__u8e3s4;
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = urlString;
          tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
          tmp_0.r3q_1 = tmp$ret$1;
          return Unit_getInstance();
        }

        var tmp_1 = _this__u8e3s4;
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = urlString;
        tmp$ret$3 = tmp$ret$2.substring(startIndex, nextSlash);

        tmp_1.r3q_1 = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = urlString;
        tmp$ret$5 = tmp$ret$4.substring(nextSlash, endIndex);

        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        ;
        break;
      case 3:
        _this__u8e3s4.r3q_1 = '';
        var tmp$ret$7;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = urlString;
        tmp$ret$7 = tmp$ret$6.substring(startIndex, endIndex);

        set_encodedPath(_this__u8e3s4, '/' + tmp$ret$7);
        ;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var delimiter = indexOf$default_0(urlString, '@', startIndex, false, 4, null);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = urlString;
    tmp$ret$1 = tmp$ret$0.substring(startIndex, delimiter);
    var tmp = tmp$ret$1;
    _this__u8e3s4.t3r(decodeURLPart$default(tmp, 0, 0, null, 7, null));
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = delimiter + 1 | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(tmp0_substring, endIndex);
    tmp_0.r3q_1 = tmp$ret$3;
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_subject = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(91))))
          skip = true;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(93))))
          skip = false;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(58))))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = indexOfColonInHostPort(urlString, startIndex, endIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.fillHost.<anonymous>' call
    tmp$ret$0 = tmp0_takeIf > 0;
    if (tmp$ret$0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(startIndex, colonIndex);
    tmp_0.r3q_1 = tmp$ret$3;
    if ((colonIndex + 1 | 0) < endIndex) {
      var tmp_1 = _this__u8e3s4;
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = colonIndex + 1 | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = urlString;
      tmp$ret$5 = tmp$ret$4.substring(tmp1_substring, endIndex);
      tmp_1.s3q_1 = toInt(tmp$ret$5);
    } else {
      _this__u8e3s4.s3q_1 = get_DEFAULT_PORT();
    }
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.t3q_1 = true;
      return endIndex;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp = _Char___init__impl__6a9atx(35);
    var tmp_0 = startIndex + 1 | 0;
    var tmp0_takeIf = indexOf$default(urlString, tmp, tmp_0, false, 4, null);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.parseQuery.<anonymous>' call
    tmp$ret$0 = tmp0_takeIf > 0;
    if (tmp$ret$0) {
      tmp_1 = tmp0_takeIf;
    } else {
      tmp_1 = null;
    }
    tmp$ret$1 = tmp_1;
    var tmp0_elvis_lhs = tmp$ret$1;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = startIndex + 1 | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(tmp1_substring, fragmentStart);
    var tmp_2 = tmp$ret$3;
    var rawParameters = parseQueryString$default(tmp_2, 0, 0, false, 6, null);
    rawParameters.n3d(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(35))) : false) {
      var tmp = _this__u8e3s4;
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = startIndex + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = urlString;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, endIndex);
      tmp.w3q_1 = tmp$ret$1;
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.y3q_1.r3d(key, values);
      return Unit_getInstance();
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function init_properties_URLParser_kt_jyldy() {
    if (properties_initialized_URLParser_kt_hd1g6a) {
    } else {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.a3r_1 === 'ws' ? true : _this__u8e3s4.a3r_1 === 'wss';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.k3q_1 = new URLProtocol('http', 80);
    this.l3q_1 = new URLProtocol('https', 443);
    this.m3q_1 = new URLProtocol('ws', 80);
    this.n3q_1 = new URLProtocol('wss', 443);
    this.o3q_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = listOf([this.k3q_1, this.l3q_1, this.m3q_1, this.n3q_1, this.o3q_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.byName.<anonymous>' call
      tmp$ret$0 = element.a3r_1;
      tmp0_associateByTo.x2(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.p3q_1 = tmp$ret$2;
  }
  Companion_7.prototype.z3r = function (name) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = toLowerCasePreservingASCIIRules(name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.http.Companion.createOrDefault.<anonymous>' call
    var tmp0_elvis_lhs = Companion_getInstance_8().p3q_1.y1(tmp0_let);
    tmp$ret$0 = tmp0_elvis_lhs == null ? new URLProtocol(tmp0_let, get_DEFAULT_PORT()) : tmp0_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_8();
    this.a3r_1 = name;
    this.b3r_1 = defaultPort;
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var tmp0_all = this.a3r_1;
      var indexedObject = tmp0_all;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
        tmp$ret$0 = isLowerCase(element);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    var tmp1_require = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
      tmp$ret$2 = 'All characters should be lower case';
      var message = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  URLProtocol.prototype.toString = function () {
    return 'URLProtocol(name=' + this.a3r_1 + ', defaultPort=' + this.b3r_1 + ')';
  };
  URLProtocol.prototype.hashCode = function () {
    var result = getStringHashCode(this.a3r_1);
    result = imul(result, 31) + this.b3r_1 | 0;
    return result;
  };
  URLProtocol.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.a3r_1 === tmp0_other_with_cast.a3r_1))
      return false;
    if (!(this.b3r_1 === tmp0_other_with_cast.b3r_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.a3r_1 === 'https' ? true : _this__u8e3s4.a3r_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.q3q_1 = url.q3q_1;
    _this__u8e3s4.r3q_1 = url.r3q_1;
    _this__u8e3s4.s3q_1 = url.s3q_1;
    _this__u8e3s4.x3q_1 = url.x3q_1;
    _this__u8e3s4.u3q_1 = url.u3q_1;
    _this__u8e3s4.v3q_1 = url.v3q_1;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.takeFrom.<anonymous>' call
    appendAll(tmp0_apply, url.y3q_1);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.x3r(tmp$ret$0);
    _this__u8e3s4.w3q_1 = url.w3q_1;
    _this__u8e3s4.t3q_1 = url.t3q_1;
    return _this__u8e3s4;
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).cq();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(encodedPath);
    if (tmp$ret$0) {
      tmp = !startsWith$default_0(encodedPath, '/', false, 2, null);
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.r5(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b(encodedPath);
    if (!encodedQueryParameters.k() ? true : trailingQuery) {
      _this__u8e3s4.b('?');
    }
    var tmp$ret$8;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = encodedQueryParameters.m3d();
    var tmp$ret$7;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp$ret$6;
      // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.o();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.p();
      var value = tmp$ret$2;
      var tmp_0;
      if (value.k()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var tmp0_iterator_0 = value.g();
        while (tmp0_iterator_0.h()) {
          var item = tmp0_iterator_0.i();
          var tmp$ret$3;
          // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>.<anonymous>' call
          tmp$ret$3 = to(key, item);
          tmp0_mapTo.a(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo;
        tmp$ret$5 = tmp$ret$4;
        tmp_0 = tmp$ret$5;
      }
      tmp$ret$6 = tmp_0;
      var list = tmp$ret$6;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$7 = tmp0_flatMapTo;
    tmp$ret$8 = tmp$ret$7;
    var tmp_1 = tmp$ret$8;
    joinTo$default(tmp_1, _this__u8e3s4, '&', null, null, 0, null, appendUrlFullPath$lambda, 60, null);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_getInstance();
    }
    _this__u8e3s4.q6(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.r5(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.q6(encodedPassword);
    }
    _this__u8e3s4.q6('@');
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.d3r_1 + ':' + _this__u8e3s4.a3s();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null), urlString);
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.t2_1;
    var tmp;
    if (it.u2_1 == null) {
      tmp = key;
    } else {
      var value = toString_0(it.u2_1);
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Url$encodedPath$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.f3r_1.k()) {
        return '';
      }
      var tmp_0 = _Char___init__impl__6a9atx(47);
      var tmp_1 = this$0.c3r_1.a3r_1.length + 3 | 0;
      var pathStartIndex = indexOf$default(this$0.l3r_1, tmp_0, tmp_1, false, 4, null);
      var tmp_2;
      if (pathStartIndex === -1) {
        return '';
      }
      var tmp$ret$0;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var tmp_3 = tmp$ret$0;
      var pathEndIndex = indexOfAny$default(this$0.l3r_1, tmp_3, pathStartIndex, false, 4, null);
      var tmp_4;
      if (pathEndIndex === -1) {
        var tmp$ret$2;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.l3r_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp0_substring;
        tmp$ret$2 = tmp$ret$1.substring(pathStartIndex);
        return tmp$ret$2;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.l3r_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_substring;
      tmp$ret$4 = tmp$ret$3.substring(pathStartIndex, pathEndIndex);
      return tmp$ret$4;
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(63);
      var queryStart = indexOf$default(this$0.l3r_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (queryStart === 0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.l3r_1, tmp_1, queryStart, false, 4, null);
      var tmp_2;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.l3r_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(queryStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.l3r_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(queryStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(47);
      var tmp_0 = this$0.c3r_1.a3r_1.length + 3 | 0;
      var pathStart = indexOf$default(this$0.l3r_1, tmp, tmp_0, false, 4, null);
      var tmp_1;
      if (pathStart === -1) {
        return '';
      }
      var tmp_2 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.l3r_1, tmp_2, pathStart, false, 4, null);
      var tmp_3;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.l3r_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(pathStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.l3r_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(pathStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.i3r_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.i3r_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var usernameStart = this$0.c3r_1.a3r_1.length + 3 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var tmp_1 = tmp$ret$1;
      var usernameEnd = indexOfAny$default(this$0.l3r_1, tmp_1, usernameStart, false, 4, null);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.l3r_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(usernameStart, usernameEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.j3r_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.j3r_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(58);
      var tmp_2 = this$0.c3r_1.a3r_1.length + 3 | 0;
      var passwordStart = indexOf$default(this$0.l3r_1, tmp_1, tmp_2, false, 4, null) + 1 | 0;
      var tmp_3 = _Char___init__impl__6a9atx(64);
      var passwordEnd = indexOf$default(this$0.l3r_1, tmp_3, 0, false, 6, null);
      var tmp$ret$2;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.l3r_1;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_substring;
      tmp$ret$2 = tmp$ret$1.substring(passwordStart, passwordEnd);
      return tmp$ret$2;
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(35);
      var fragmentStart = indexOf$default(this$0.l3r_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (fragmentStart === 0) {
        return '';
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = this$0.l3r_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(fragmentStart);
      return tmp$ret$1;
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    Companion_getInstance_9();
    this.c3r_1 = protocol;
    this.d3r_1 = host;
    this.e3r_1 = specifiedPort;
    this.f3r_1 = pathSegments;
    this.g3r_1 = parameters;
    this.h3r_1 = fragment;
    this.i3r_1 = user;
    this.j3r_1 = password;
    this.k3r_1 = trailingQuery;
    this.l3r_1 = urlString;
    // Inline function 'kotlin.require' call
    var tmp;
    var containsArg = this.e3r_1;
    if (0 <= containsArg ? containsArg <= 65535 : false) {
      tmp = true;
    } else {
      tmp = this.e3r_1 === get_DEFAULT_PORT();
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Url.<anonymous>' call
      tmp$ret$0 = 'port must be between 0 and 65535, or ' + get_DEFAULT_PORT() + ' if not set';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_0 = this;
    tmp_0.m3r_1 = lazy_0(Url$encodedPath$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.n3r_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.o3r_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.p3r_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.q3r_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.r3r_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  Url_0.prototype.a3s = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.e3r_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.Url.<get-port>.<anonymous>' call
    tmp$ret$0 = tmp0_takeUnless === get_DEFAULT_PORT();
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? this.c3r_1.b3r_1 : tmp0_elvis_lhs;
  };
  Url_0.prototype.b3s = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedUser$factory();
    tmp$ret$0 = this.p3r_1.p();
    return tmp$ret$0;
  };
  Url_0.prototype.c3s = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedPassword$factory();
    tmp$ret$0 = this.q3r_1.p();
    return tmp$ret$0;
  };
  Url_0.prototype.toString = function () {
    return this.l3r_1;
  };
  Url_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Url_0)
      other;
    else
      THROW_CCE();
    if (!(this.l3r_1 === other.l3r_1))
      return false;
    return true;
  };
  Url_0.prototype.hashCode = function () {
    return getStringHashCode(this.l3r_1);
  };
  function get_authority_0(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.q6(get_encodedUserAndPassword_0(_this__u8e3s4));
    if (_this__u8e3s4.e3r_1 === get_DEFAULT_PORT() ? true : _this__u8e3s4.e3r_1 === _this__u8e3s4.c3r_1.b3r_1) {
      tmp0_apply.q6(_this__u8e3s4.d3r_1);
    } else {
      tmp0_apply.q6(get_hostWithPort(_this__u8e3s4));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.b3s(), _this__u8e3s4.c3s());
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.b3s();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.c3s();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.d3s_1 = encodedParametersBuilder;
    this.e3s_1 = this.d3s_1.j3d();
  }
  UrlDecodedParametersBuilder.prototype.cq = function () {
    return decodeParameters(this.d3s_1);
  };
  UrlDecodedParametersBuilder.prototype.j3d = function () {
    return this.e3s_1;
  };
  UrlDecodedParametersBuilder.prototype.k3d = function (name) {
    var tmp0_safe_receiver = this.d3s_1.k3d(encodeURLParameter$default(name, false, 1, null));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.getAll.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  UrlDecodedParametersBuilder.prototype.l3d = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.d3s_1.l3d();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.names.<anonymous>' call
      tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, false, null, 15, null);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return toSet(tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.k = function () {
    return this.d3s_1.k();
  };
  UrlDecodedParametersBuilder.prototype.m3d = function () {
    return decodeParameters(this.d3s_1).m3d();
  };
  UrlDecodedParametersBuilder.prototype.u3d = function (name, value) {
    return this.d3s_1.u3d(encodeURLParameter$default(name, false, 1, null), encodeURLParameterValue(value));
  };
  UrlDecodedParametersBuilder.prototype.r3d = function (name, values) {
    var tmp = encodeURLParameter$default(name, false, 1, null);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var tmp0_iterator = values.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.appendAll.<anonymous>' call
      tmp$ret$0 = encodeURLParameterValue(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return this.d3s_1.r3d(tmp, tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.t9 = function () {
    return this.d3s_1.t9();
  };
  function encodeParameters(parameters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeParameters.<anonymous>' call
    appendAllEncoded(tmp0_apply, parameters);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function decodeParameters(parameters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.decodeParameters.<anonymous>' call
    appendAllDecoded(tmp0_apply, parameters);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.cq();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.l3d();
    var tmp0_iterator = tmp0_forEach.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.k3d(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter$default(element, false, 1, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.g();
      while (tmp0_iterator_0.h()) {
        var item = tmp0_iterator_0.i();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = encodeURLParameterValue(item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      _this__u8e3s4.r3d(tmp, tmp$ret$2);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.l3d();
    var tmp0_iterator = tmp0_forEach.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.k3d(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent$default(element, 0, 0, false, null, 15, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.g();
      while (tmp0_iterator_0.h()) {
        var item = tmp0_iterator_0.i();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      _this__u8e3s4.r3d(tmp, tmp$ret$2);
    }
  }
  function ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      contentType = null;
    if (!(($mask0 & 4) === 0))
      status = null;
    ByteArrayContent.call($this, bytes, contentType, status);
    return $this;
  }
  function ByteArrayContent_init_$Create$(bytes, contentType, status, $mask0, $marker) {
    return ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, Object.create(ByteArrayContent.prototype));
  }
  function ByteArrayContent(bytes, contentType, status) {
    ByteArrayContent_0.call(this);
    this.g3s_1 = bytes;
    this.h3s_1 = contentType;
    this.i3s_1 = status;
  }
  ByteArrayContent.prototype.j3s = function () {
    return this.h3s_1;
  };
  ByteArrayContent.prototype.k3s = function () {
    return toLong_0(this.g3s_1.length);
  };
  ByteArrayContent.prototype.l3s = function () {
    return this.g3s_1;
  };
  function NoContent() {
    OutgoingContent.call(this);
  }
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  function WriteChannelContent() {
  }
  function ByteArrayContent_0() {
    OutgoingContent.call(this);
  }
  function ProtocolUpgrade() {
  }
  function OutgoingContent() {
    this.m3s_1 = null;
  }
  OutgoingContent.prototype.j3s = function () {
    return null;
  };
  OutgoingContent.prototype.k3s = function () {
    return null;
  };
  OutgoingContent.prototype.l3n = function () {
    return Companion_getInstance_2().f3j_1;
  };
  function NullBody() {
    NullBody_instance = this;
  }
  var NullBody_instance;
  function NullBody_getInstance() {
    if (NullBody_instance == null)
      new NullBody();
    return NullBody_instance;
  }
  function TextContent_init_$Init$(text, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      status = null;
    TextContent.call($this, text, contentType, status);
    return $this;
  }
  function TextContent_init_$Create$(text, contentType, status, $mask0, $marker) {
    return TextContent_init_$Init$(text, contentType, status, $mask0, $marker, Object.create(TextContent.prototype));
  }
  function TextContent(text, contentType, status) {
    ByteArrayContent_0.call(this);
    this.t3s_1 = text;
    this.u3s_1 = contentType;
    this.v3s_1 = status;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = this.t3s_1;
      var tmp0_elvis_lhs = charset(this.u3s_1);
      var tmp1_toByteArray = tmp0_elvis_lhs == null ? Charsets_getInstance().v37_1 : tmp0_elvis_lhs;
      if (tmp1_toByteArray.equals(Charsets_getInstance().v37_1)) {
        tmp$ret$0 = encodeToByteArray(tmp0_toByteArray);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp1_toByteArray.z37(), tmp0_toByteArray, 0, tmp0_toByteArray.length);
    }
    tmp.w3s_1 = tmp$ret$0;
  }
  TextContent.prototype.j3s = function () {
    return this.u3s_1;
  };
  TextContent.prototype.k3s = function () {
    return toLong_0(this.w3s_1.length);
  };
  TextContent.prototype.l3s = function () {
    return this.w3s_1;
  };
  TextContent.prototype.toString = function () {
    return 'TextContent[' + this.u3s_1 + '] "' + take(this.t3s_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    var tmp;
    if (PlatformUtils_getInstance().c3h_1) {
      var tmp_0 = function () {
        var origin = '';
        if (typeof window !== 'undefined') {
          origin = window.location.origin;
        } else {
          origin = self.location.origin;
        }
        return origin && origin != 'null' ? origin : 'http://localhost';
      }();
      tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    } else {
      tmp = 'http://localhost';
    }
    return tmp;
  }
  //region block: post-declaration
  EmptyHeaders.prototype.g12 = get;
  EmptyHeaders.prototype.n3d = forEach;
  EmptyParameters.prototype.n3d = forEach;
  //endregion
  //region block: init
  DEFAULT_PORT = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ByteArrayContent_init_$Create$;
  _.$_$.b = TextContent_init_$Create$;
  _.$_$.c = HeadersBuilder_init_$Create$;
  _.$_$.d = URLBuilder_init_$Create$;
  _.$_$.e = NullBody_getInstance;
  _.$_$.f = Application_getInstance;
  _.$_$.g = Text_getInstance;
  _.$_$.h = Companion_getInstance_2;
  _.$_$.i = HttpHeaders_getInstance;
  _.$_$.j = Companion_getInstance_3;
  _.$_$.k = Companion_getInstance_4;
  _.$_$.l = Companion_getInstance_5;
  _.$_$.m = Companion_getInstance_8;
  _.$_$.n = ByteArrayContent_0;
  _.$_$.o = NoContent;
  _.$_$.p = ProtocolUpgrade;
  _.$_$.q = ReadChannelContent;
  _.$_$.r = WriteChannelContent;
  _.$_$.s = OutgoingContent;
  _.$_$.t = HttpStatusCode;
  _.$_$.u = UnsafeHeaderException;
  _.$_$.v = get_authority;
  _.$_$.w = get_authority_0;
  _.$_$.x = charset_0;
  _.$_$.y = charset;
  _.$_$.z = contentLength;
  _.$_$.a1 = contentType;
  _.$_$.b1 = contentType_0;
  _.$_$.c1 = isSecure;
  _.$_$.d1 = isWebsocket;
  _.$_$.e1 = parseAndSortHeader;
  _.$_$.f1 = takeFrom_0;
  _.$_$.g1 = takeFrom;
  _.$_$.h1 = withCharsetIfNeeded;
  _.$_$.i1 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-js-ir.js.map

//
// Title: LiveSwitch for JavaScript
// Version: 1.13.1.54330
// Copyright Frozen Mountain Software 2011+
//
(function(name, dependencies, definition) {
    if (typeof exports === 'object') {
        for(var i = 0; i < dependencies.length; i++) {
            require('./' + dependencies[i]);
        }
        module.exports = definition();
    } else if (typeof define === 'function' && define.amd) {
        define(name, dependencies, definition);
    } else {
        this[name] = definition();
    }
}('fm.liveswitch.xirsys', ['fm.liveswitch'], function() {
if (typeof global !== 'undefined' && !global.window) { global.window = global; global.document = { cookie: '' }; }
if (typeof global !== 'undefined' && !global.navigator) { global.navigator = { userAgent: ' ' }; }
this['fm'] = this['fm'] || { };
(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v2;
            (function (v2) {
                /**
                A XirSys v2 client.
                */
                var Client = /** @class */ (function () {
                    function Client() {
                        fm.liveswitch.xirsys.v2.Client.fmliveswitchxirsysv2ClientInitialize();
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 3) {
                            var ident = __arguments[0];
                            var secret = __arguments[1];
                            var domain = __arguments[2];
                            // chained constructor: Client.call(this, ident, secret, domain, "default");
                            __arguments = new Array(4);
                            __arguments[0] = ident;
                            __arguments[1] = secret;
                            __arguments[2] = domain;
                            __arguments[3] = "default";
                            {
                                var ident_1 = __arguments[0];
                                var secret_1 = __arguments[1];
                                var domain_1 = __arguments[2];
                                var application = __arguments[3];
                                // chained constructor: Client.call(this, ident, secret, domain, application, "default");
                                __arguments = new Array(5);
                                __arguments[0] = ident_1;
                                __arguments[1] = secret_1;
                                __arguments[2] = domain_1;
                                __arguments[3] = application;
                                __arguments[4] = "default";
                                {
                                    var ident_2 = __arguments[0];
                                    var secret_2 = __arguments[1];
                                    var domain_2 = __arguments[2];
                                    var application_1 = __arguments[3];
                                    var room = __arguments[4];
                                    // chained constructor: Client.call(this, ident, secret, domain, application, room, true);
                                    __arguments = new Array(6);
                                    __arguments[0] = ident_2;
                                    __arguments[1] = secret_2;
                                    __arguments[2] = domain_2;
                                    __arguments[3] = application_1;
                                    __arguments[4] = room;
                                    __arguments[5] = true;
                                    {
                                        var ident_3 = __arguments[0];
                                        var secret_3 = __arguments[1];
                                        var domain_3 = __arguments[2];
                                        var application_2 = __arguments[3];
                                        var room_1 = __arguments[4];
                                        var secure = __arguments[5];
                                        //super();
                                        this.fmliveswitchxirsysv2ClientInit();
                                        this.setIdent(ident_3);
                                        this.setSecret(secret_3);
                                        this.setDomain(domain_3);
                                        this.setApplication(application_2);
                                        this.setRoom(room_1);
                                        this.setSecure(secure);
                                        this.setEndpoint(fm.liveswitch.xirsys.v2.Client.getDefaultEndpoint());
                                    }
                                }
                            }
                        }
                        else if (__arguments.length == 4) {
                            var ident = __arguments[0];
                            var secret = __arguments[1];
                            var domain = __arguments[2];
                            var application = __arguments[3];
                            // chained constructor: Client.call(this, ident, secret, domain, application, "default");
                            __arguments = new Array(5);
                            __arguments[0] = ident;
                            __arguments[1] = secret;
                            __arguments[2] = domain;
                            __arguments[3] = application;
                            __arguments[4] = "default";
                            {
                                var ident_4 = __arguments[0];
                                var secret_4 = __arguments[1];
                                var domain_4 = __arguments[2];
                                var application_3 = __arguments[3];
                                var room = __arguments[4];
                                // chained constructor: Client.call(this, ident, secret, domain, application, room, true);
                                __arguments = new Array(6);
                                __arguments[0] = ident_4;
                                __arguments[1] = secret_4;
                                __arguments[2] = domain_4;
                                __arguments[3] = application_3;
                                __arguments[4] = room;
                                __arguments[5] = true;
                                {
                                    var ident_5 = __arguments[0];
                                    var secret_5 = __arguments[1];
                                    var domain_5 = __arguments[2];
                                    var application_4 = __arguments[3];
                                    var room_2 = __arguments[4];
                                    var secure = __arguments[5];
                                    //super();
                                    this.fmliveswitchxirsysv2ClientInit();
                                    this.setIdent(ident_5);
                                    this.setSecret(secret_5);
                                    this.setDomain(domain_5);
                                    this.setApplication(application_4);
                                    this.setRoom(room_2);
                                    this.setSecure(secure);
                                    this.setEndpoint(fm.liveswitch.xirsys.v2.Client.getDefaultEndpoint());
                                }
                            }
                        }
                        else if (__arguments.length == 5) {
                            var ident = __arguments[0];
                            var secret = __arguments[1];
                            var domain = __arguments[2];
                            var application = __arguments[3];
                            var room = __arguments[4];
                            // chained constructor: Client.call(this, ident, secret, domain, application, room, true);
                            __arguments = new Array(6);
                            __arguments[0] = ident;
                            __arguments[1] = secret;
                            __arguments[2] = domain;
                            __arguments[3] = application;
                            __arguments[4] = room;
                            __arguments[5] = true;
                            {
                                var ident_6 = __arguments[0];
                                var secret_6 = __arguments[1];
                                var domain_6 = __arguments[2];
                                var application_5 = __arguments[3];
                                var room_3 = __arguments[4];
                                var secure = __arguments[5];
                                //super();
                                this.fmliveswitchxirsysv2ClientInit();
                                this.setIdent(ident_6);
                                this.setSecret(secret_6);
                                this.setDomain(domain_6);
                                this.setApplication(application_5);
                                this.setRoom(room_3);
                                this.setSecure(secure);
                                this.setEndpoint(fm.liveswitch.xirsys.v2.Client.getDefaultEndpoint());
                            }
                        }
                        else if (__arguments.length == 6) {
                            var ident = __arguments[0];
                            var secret = __arguments[1];
                            var domain = __arguments[2];
                            var application = __arguments[3];
                            var room = __arguments[4];
                            var secure = __arguments[5];
                            //super();
                            this.fmliveswitchxirsysv2ClientInit();
                            this.setIdent(ident);
                            this.setSecret(secret);
                            this.setDomain(domain);
                            this.setApplication(application);
                            this.setRoom(room);
                            this.setSecure(secure);
                            this.setEndpoint(fm.liveswitch.xirsys.v2.Client.getDefaultEndpoint());
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                    }
                    Client.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v2.Client]';
                    };
                    Client.prototype.fmliveswitchxirsysv2ClientInit = function () {
                        this._secure = false;
                    };
                    /**
                    Gets the default HTTP endpoint. Defaults to "https://service.xirsys.com/ice".
                    */
                    Client.getDefaultEndpoint = function () {
                        fm.liveswitch.xirsys.v2.Client.fmliveswitchxirsysv2ClientInitialize();
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v2.Client.fm_liveswitch_xirsys_v2_Client___defaultEndpoint;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the default HTTP endpoint. Defaults to "https://service.xirsys.com/ice".
                    */
                    Client.setDefaultEndpoint = function (value) {
                        fm.liveswitch.xirsys.v2.Client.fmliveswitchxirsysv2ClientInitialize();
                        if (arguments.length == 1) {
                            fm.liveswitch.xirsys.v2.Client.fm_liveswitch_xirsys_v2_Client___defaultEndpoint = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /** @hidden */
                    Client.prototype.doGetIceServers = function (promise) {
                        if (arguments.length == 1) {
                            var str = fm.liveswitch.HttpTransfer.addQueryToUrl(fm.liveswitch.HttpTransfer.addQueryToUrl(fm.liveswitch.HttpTransfer.addQueryToUrl(fm.liveswitch.HttpTransfer.addQueryToUrl(fm.liveswitch.HttpTransfer.addQueryToUrl(fm.liveswitch.HttpTransfer.addQueryToUrl(this.getEndpoint(), "ident", this.getIdent()), "secret", this.getSecret()), "domain", this.getDomain()), "application", this.getApplication()), "room", this.getRoom()), "secure", (this.getSecure() ? "1" : "0"));
                            var requestArgs = new fm.liveswitch.HttpRequestArgs();
                            requestArgs.setMethod(fm.liveswitch.HttpMethod.Get);
                            requestArgs.setUrl(str);
                            fm.liveswitch.HttpTransferFactory.getHttpTransfer().sendTextAsync(requestArgs, function (responseArgs) {
                                var response = fm.liveswitch.xirsys.v2.IceResponse.fromJson(responseArgs.getTextContent());
                                if ((fm.liveswitch.Global.equals(response, null))) {
                                    promise.reject(new fm.liveswitch.Exception("XirSys: null response"));
                                }
                                else {
                                    if ((!fm.liveswitch.Global.equals(response.getStatus(), 200))) {
                                        promise.reject(new fm.liveswitch.Exception(fm.liveswitch.StringExtensions.format("XirSys: {0} {1}", response.getStatus().toString(), response.getError())));
                                    }
                                    else {
                                        var list = new Array();
                                        for (var _i = 0, _a = response.getData().getIceServers(); _i < _a.length; _i++) {
                                            var server = _a[_i];
                                            if (((fm.liveswitch.Global.equals(server.getUsername(), null)) || (fm.liveswitch.Global.equals(server.getCredential(), null)))) {
                                                fm.liveswitch.ArrayExtensions.add(list, new fm.liveswitch.IceServer(server.getUrl()));
                                            }
                                            else {
                                                fm.liveswitch.ArrayExtensions.add(list, new fm.liveswitch.IceServer(server.getUrl(), server.getUsername(), server.getCredential()));
                                            }
                                        }
                                        promise.resolve(fm.liveswitch.ArrayExtensions.toArray(list));
                                    }
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "application" value. Defaults to "default".
                    */
                    Client.prototype.getApplication = function () {
                        if (arguments.length == 0) {
                            return this._application;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "domain" value.
                    */
                    Client.prototype.getDomain = function () {
                        if (arguments.length == 0) {
                            return this._domain;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the HTTP endpoint.
                    */
                    Client.prototype.getEndpoint = function () {
                        if (arguments.length == 0) {
                            return this._endpoint;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets an array of XirSys ICE servers.
                    */
                    Client.prototype.getIceServers = function () {
                        if (arguments.length == 0) {
                            var promise = new fm.liveswitch.Promise();
                            this.doGetIceServers(promise);
                            return promise;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "ident" value.
                    */
                    Client.prototype.getIdent = function () {
                        if (arguments.length == 0) {
                            return this._ident;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "room" value. Defaults to "default".
                    */
                    Client.prototype.getRoom = function () {
                        if (arguments.length == 0) {
                            return this._room;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "secret" value.
                    */
                    Client.prototype.getSecret = function () {
                        if (arguments.length == 0) {
                            return this._secret;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "secure" value. Defaults to `true`.
                    */
                    Client.prototype.getSecure = function () {
                        if (arguments.length == 0) {
                            return this._secure;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "application" value. Defaults to "default".
                    */
                    Client.prototype.setApplication = function (value) {
                        if (arguments.length == 1) {
                            this._application = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "domain" value.
                    */
                    Client.prototype.setDomain = function (value) {
                        if (arguments.length == 1) {
                            this._domain = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the HTTP endpoint.
                    */
                    Client.prototype.setEndpoint = function (value) {
                        if (arguments.length == 1) {
                            this._endpoint = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "ident" value.
                    */
                    Client.prototype.setIdent = function (value) {
                        if (arguments.length == 1) {
                            this._ident = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "room" value. Defaults to "default".
                    */
                    Client.prototype.setRoom = function (value) {
                        if (arguments.length == 1) {
                            this._room = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "secret" value.
                    */
                    Client.prototype.setSecret = function (value) {
                        if (arguments.length == 1) {
                            this._secret = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "secure" value. Defaults to `true`.
                    */
                    Client.prototype.setSecure = function (value) {
                        if (arguments.length == 1) {
                            this._secure = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /** @hidden */
                    Client.prototype.toFormData = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.StringExtensions.format("ident={0}&secret={1}&domain={2}&application={3}&room={4}&secure={5}", [this.getIdent(), this.getSecret(), this.getDomain(), this.getApplication(), this.getRoom(), (this.getSecure() ? "1" : "0")]);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /** @hidden */
                    Client.fmliveswitchxirsysv2ClientInitialize = function () {
                        if (!fm.liveswitch.xirsys.v2.Client.__fmliveswitchxirsysv2ClientInitialized && !fm.liveswitch.xirsys.v2.Client.__fmliveswitchxirsysv2ClientInitializing) {
                            fm.liveswitch.xirsys.v2.Client.__fmliveswitchxirsysv2ClientInitializing = true;
                            fm.liveswitch.xirsys.v2.Client.fm_liveswitch_xirsys_v2_Client___defaultEndpoint = "https://service.xirsys.com/ice";
                            fm.liveswitch.xirsys.v2.Client.__fmliveswitchxirsysv2ClientInitialized = true;
                            fm.liveswitch.xirsys.v2.Client.__fmliveswitchxirsysv2ClientInitializing = false;
                        }
                    };
                    /** @hidden */
                    Client.__fmliveswitchxirsysv2ClientInitialized = false;
                    /** @hidden */
                    Client.__fmliveswitchxirsysv2ClientInitializing = false;
                    return Client;
                }());
                v2.Client = Client;
            })(v2 = xirsys.v2 || (xirsys.v2 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v2;
            (function (v2) {
                /** @hidden */
                var IceResponse = /** @class */ (function () {
                    function IceResponse() {
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 0) {
                            //super();
                            this.fmliveswitchxirsysv2IceResponseInit();
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                    }
                    IceResponse.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v2.IceResponse]';
                    };
                    IceResponse.prototype.fmliveswitchxirsysv2IceResponseInit = function () {
                        this._status = 0;
                    };
                    IceResponse.fromJson = function (iceResponseJson) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.deserializeObject(iceResponseJson, function () {
                                return new fm.liveswitch.xirsys.v2.IceResponse();
                            }, function (iceResponse, name, valueJson) {
                                var str = name;
                                if ((!fm.liveswitch.Global.equals(str, null))) {
                                    if (!(fm.liveswitch.Global.equals(str, "p"))) {
                                        if ((fm.liveswitch.Global.equals(str, "s"))) {
                                            iceResponse.setStatus(fm.liveswitch.JsonSerializer.deserializeInteger(valueJson));
                                        }
                                        else {
                                            if ((fm.liveswitch.Global.equals(str, "e"))) {
                                                iceResponse.setError(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                            }
                                            else {
                                                if ((fm.liveswitch.Global.equals(str, "d"))) {
                                                    iceResponse.setData(fm.liveswitch.xirsys.v2.IceResponseData.fromJson(valueJson));
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        iceResponse.setPath(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                    }
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.toJson = function (iceResponse) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObject(iceResponse, function (ir, jsonObject) {
                                if ((!fm.liveswitch.Global.equals(iceResponse.getPath(), null))) {
                                    jsonObject["p"] = fm.liveswitch.JsonSerializer.serializeString(iceResponse.getPath());
                                }
                                if ((iceResponse.getStatus() != null)) {
                                    jsonObject["s"] = fm.liveswitch.JsonSerializer.serializeInteger(iceResponse.getStatus());
                                }
                                if ((!fm.liveswitch.Global.equals(iceResponse.getError(), null))) {
                                    jsonObject["e"] = fm.liveswitch.JsonSerializer.serializeString(iceResponse.getError());
                                }
                                if ((!fm.liveswitch.Global.equals(iceResponse.getData(), null))) {
                                    jsonObject["d"] = fm.liveswitch.xirsys.v2.IceResponseData.toJson(iceResponse.getData());
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.getData = function () {
                        if (arguments.length == 0) {
                            return this._data;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.getError = function () {
                        if (arguments.length == 0) {
                            return this._error;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.getPath = function () {
                        if (arguments.length == 0) {
                            return this._path;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.getStatus = function () {
                        if (arguments.length == 0) {
                            return this._status;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.setData = function (value) {
                        if (arguments.length == 1) {
                            this._data = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.setError = function (value) {
                        if (arguments.length == 1) {
                            this._error = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.setPath = function (value) {
                        if (arguments.length == 1) {
                            this._path = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.setStatus = function (value) {
                        if (arguments.length == 1) {
                            this._status = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponse.prototype.toJson = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v2.IceResponse.toJson(this);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    return IceResponse;
                }());
                v2.IceResponse = IceResponse;
            })(v2 = xirsys.v2 || (xirsys.v2 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v2;
            (function (v2) {
                /** @hidden */
                var IceResponseData = /** @class */ (function () {
                    function IceResponseData() {
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 0) {
                            //super();
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                    }
                    IceResponseData.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v2.IceResponseData]';
                    };
                    IceResponseData.fromJson = function (iceResponseDataJson) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.deserializeObject(iceResponseDataJson, function () {
                                return new fm.liveswitch.xirsys.v2.IceResponseData();
                            }, function (iceResponseData, name, valueJson) {
                                var str = name;
                                if (((!fm.liveswitch.Global.equals(str, null)) && (fm.liveswitch.Global.equals(str, "iceServers")))) {
                                    iceResponseData.setIceServers(fm.liveswitch.xirsys.v2.IceServer.fromJsonMultiple(valueJson));
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponseData.toJson = function (iceResponseData) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObject(iceResponseData, function (ird, jsonObject) {
                                if ((!fm.liveswitch.Global.equals(iceResponseData.getIceServers(), null))) {
                                    jsonObject["iceServers"] = fm.liveswitch.xirsys.v2.IceServer.toJsonMultiple(iceResponseData.getIceServers());
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponseData.prototype.getIceServers = function () {
                        if (arguments.length == 0) {
                            return this._iceServers;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponseData.prototype.setIceServers = function (value) {
                        if (arguments.length == 1) {
                            this._iceServers = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceResponseData.prototype.toJson = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v2.IceResponseData.toJson(this);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    return IceResponseData;
                }());
                v2.IceResponseData = IceResponseData;
            })(v2 = xirsys.v2 || (xirsys.v2 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v2;
            (function (v2) {
                /** @hidden */
                var IceServer = /** @class */ (function (_super) {
                    __extends(IceServer, _super);
                    function IceServer() {
                        var _this = this;
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 0) {
                            _this = _super.call(this) || this;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                        return _this;
                    }
                    IceServer.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v2.IceServer]' + ',' + _super.prototype.getTypeString.call(this);
                    };
                    IceServer.fromJson = function (iceServerJson) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.deserializeObjectFast(iceServerJson, function () {
                                return new fm.liveswitch.xirsys.v2.IceServer();
                            }, function (iceServer, name, valueJson) {
                                var str = name;
                                if ((!fm.liveswitch.Global.equals(str, null))) {
                                    if (!(fm.liveswitch.Global.equals(str, "username"))) {
                                        if ((fm.liveswitch.Global.equals(str, "url"))) {
                                            iceServer.setUrl(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                        }
                                        else {
                                            if ((fm.liveswitch.Global.equals(str, "credential"))) {
                                                iceServer.setCredential(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                            }
                                        }
                                    }
                                    else {
                                        iceServer.setUsername(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                    }
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.fromJsonMultiple = function (iceServersJson) {
                        if (arguments.length == 1) {
                            var list = fm.liveswitch.JsonSerializer.deserializeObjectArray(iceServersJson, fm.liveswitch.xirsys.v2.IceServer.fromJson.bind(fm.liveswitch.xirsys.v2.IceServer));
                            if ((fm.liveswitch.Global.equals(list, null))) {
                                return null;
                            }
                            return fm.liveswitch.ArrayExtensions.toArray(list);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.toJson = function (iceServer) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObjectFast(iceServer, function (iss, jsonObject) {
                                if ((!fm.liveswitch.Global.equals(iceServer.getUsername(), null))) {
                                    jsonObject["username"] = fm.liveswitch.JsonSerializer.serializeString(iceServer.getUsername());
                                }
                                if ((!fm.liveswitch.Global.equals(iceServer.getUrl(), null))) {
                                    jsonObject["url"] = fm.liveswitch.JsonSerializer.serializeString(iceServer.getUrl());
                                }
                                if ((!fm.liveswitch.Global.equals(iceServer.getCredential(), null))) {
                                    jsonObject["credential"] = fm.liveswitch.JsonSerializer.serializeString(iceServer.getCredential());
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.toJsonMultiple = function (iceServers) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObjectArray(iceServers, fm.liveswitch.xirsys.v2.IceServer.toJson.bind(fm.liveswitch.xirsys.v2.IceServer));
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.getCredential = function () {
                        if (arguments.length == 0) {
                            return this._credential;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.getUrl = function () {
                        if (arguments.length == 0) {
                            return this._url;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.getUsername = function () {
                        if (arguments.length == 0) {
                            return this._username;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.setCredential = function (value) {
                        if (arguments.length == 1) {
                            this._credential = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.setUrl = function (value) {
                        if (arguments.length == 1) {
                            this._url = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.setUsername = function (value) {
                        if (arguments.length == 1) {
                            this._username = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.toJson = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v2.IceServer.toJson(this);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    return IceServer;
                }(fm.liveswitch.Dynamic));
                v2.IceServer = IceServer;
            })(v2 = xirsys.v2 || (xirsys.v2 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v3;
            (function (v3) {
                /**
                A XirSys v3 client.
                */
                var Client = /** @class */ (function () {
                    function Client() {
                        fm.liveswitch.xirsys.v3.Client.fmliveswitchxirsysv3ClientInitialize();
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 3) {
                            var ident = __arguments[0];
                            var secret = __arguments[1];
                            var channel = __arguments[2];
                            // chained constructor: Client.call(this, ident, secret, channel, true);
                            __arguments = new Array(4);
                            __arguments[0] = ident;
                            __arguments[1] = secret;
                            __arguments[2] = channel;
                            __arguments[3] = true;
                            {
                                var ident_7 = __arguments[0];
                                var secret_7 = __arguments[1];
                                var channel_1 = __arguments[2];
                                var secure = __arguments[3];
                                //super();
                                this.fmliveswitchxirsysv3ClientInit();
                                this.setIdent(ident_7);
                                this.setSecret(secret_7);
                                this.setChannel(channel_1);
                                this.setSecure(secure);
                                this.setEndpoint(fm.liveswitch.xirsys.v3.Client.getDefaultEndpoint());
                            }
                        }
                        else if (__arguments.length == 4) {
                            var ident = __arguments[0];
                            var secret = __arguments[1];
                            var channel = __arguments[2];
                            var secure = __arguments[3];
                            //super();
                            this.fmliveswitchxirsysv3ClientInit();
                            this.setIdent(ident);
                            this.setSecret(secret);
                            this.setChannel(channel);
                            this.setSecure(secure);
                            this.setEndpoint(fm.liveswitch.xirsys.v3.Client.getDefaultEndpoint());
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                    }
                    Client.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v3.Client]';
                    };
                    Client.prototype.fmliveswitchxirsysv3ClientInit = function () {
                        this._secure = false;
                    };
                    /**
                    Gets the default HTTP endpoint. Defaults to "https://global.xirsys.net/_turn".
                    */
                    Client.getDefaultEndpoint = function () {
                        fm.liveswitch.xirsys.v3.Client.fmliveswitchxirsysv3ClientInitialize();
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v3.Client.fm_liveswitch_xirsys_v3_Client___defaultEndpoint;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the default HTTP endpoint. Defaults to "https://global.xirsys.net/_turn".
                    */
                    Client.setDefaultEndpoint = function (value) {
                        fm.liveswitch.xirsys.v3.Client.fmliveswitchxirsysv3ClientInitialize();
                        if (arguments.length == 1) {
                            fm.liveswitch.xirsys.v3.Client.fm_liveswitch_xirsys_v3_Client___defaultEndpoint = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /** @hidden */
                    Client.prototype.doGetIceServers = function (promise) {
                        if (arguments.length == 1) {
                            var str = (fm.liveswitch.StringExtensions.endsWith(this.getEndpoint(), "/") ? fm.liveswitch.StringExtensions.substring(this.getEndpoint(), 0, (fm.liveswitch.StringExtensions.getLength(this.getEndpoint()) - 1)) : this.getEndpoint());
                            var str2 = fm.liveswitch.StringExtensions.format("{0}/{1}", str, this.getChannel());
                            var args2 = new fm.liveswitch.HttpRequestArgs();
                            args2.setMethod(fm.liveswitch.HttpMethod.Put);
                            args2.setUrl(str2);
                            var requestArgs = args2;
                            requestArgs.getHeaders().set("Authorization", fm.liveswitch.StringExtensions.format("Basic {0}", fm.liveswitch.Base64.encode(fm.liveswitch.Utf8.encode(fm.liveswitch.StringExtensions.format("{0}:{1}", this.getIdent(), this.getSecret())))));
                            fm.liveswitch.HttpTransferFactory.getHttpTransfer().sendTextAsync(requestArgs, function (responseArgs) {
                                var response = fm.liveswitch.xirsys.v3.TurnResponse.fromJson(responseArgs.getTextContent());
                                if ((fm.liveswitch.Global.equals(response, null))) {
                                    promise.reject(new fm.liveswitch.Exception("XirSys: null response"));
                                }
                                else {
                                    if ((!fm.liveswitch.Global.equals(response.getStatus(), fm.liveswitch.xirsys.v3.TurnResponseStatus.getOK()))) {
                                        promise.reject(new fm.liveswitch.Exception(fm.liveswitch.StringExtensions.format("XirSys: {0} {1}", response.getStatus(), fm.liveswitch.JsonSerializer.deserializeString(response.getValueJson()))));
                                    }
                                    else {
                                        var data = fm.liveswitch.xirsys.v3.TurnResponseData.fromJson(response.getValueJson());
                                        if ((fm.liveswitch.Global.equals(data, null))) {
                                            promise.reject(new fm.liveswitch.Exception(fm.liveswitch.StringExtensions.format("XirSys: invalid value ({0})", response.getValueJson())));
                                        }
                                        else {
                                            var list = new Array();
                                            for (var _i = 0, _a = data.getIceServers(); _i < _a.length; _i++) {
                                                var server = _a[_i];
                                                if (((fm.liveswitch.Global.equals(server.getUsername(), null)) || (fm.liveswitch.Global.equals(server.getCredential(), null)))) {
                                                    fm.liveswitch.ArrayExtensions.add(list, new fm.liveswitch.IceServer(server.getUrl()));
                                                }
                                                else {
                                                    fm.liveswitch.ArrayExtensions.add(list, new fm.liveswitch.IceServer(server.getUrl(), server.getUsername(), server.getCredential()));
                                                }
                                            }
                                            promise.resolve(fm.liveswitch.ArrayExtensions.toArray(list));
                                        }
                                    }
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "channel" value.
                    */
                    Client.prototype.getChannel = function () {
                        if (arguments.length == 0) {
                            return this._channel;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the HTTP endpoint.
                    */
                    Client.prototype.getEndpoint = function () {
                        if (arguments.length == 0) {
                            return this._endpoint;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets an array of XirSys ICE servers.
                    */
                    Client.prototype.getIceServers = function () {
                        if (arguments.length == 0) {
                            var promise = new fm.liveswitch.Promise();
                            this.doGetIceServers(promise);
                            return promise;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "ident" value.
                    */
                    Client.prototype.getIdent = function () {
                        if (arguments.length == 0) {
                            return this._ident;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "secret" value.
                    */
                    Client.prototype.getSecret = function () {
                        if (arguments.length == 0) {
                            return this._secret;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Gets the "secure" value. Defaults to `true`.
                    */
                    Client.prototype.getSecure = function () {
                        if (arguments.length == 0) {
                            return this._secure;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "channel" value.
                    */
                    Client.prototype.setChannel = function (value) {
                        if (arguments.length == 1) {
                            this._channel = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the HTTP endpoint.
                    */
                    Client.prototype.setEndpoint = function (value) {
                        if (arguments.length == 1) {
                            this._endpoint = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "ident" value.
                    */
                    Client.prototype.setIdent = function (value) {
                        if (arguments.length == 1) {
                            this._ident = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "secret" value.
                    */
                    Client.prototype.setSecret = function (value) {
                        if (arguments.length == 1) {
                            this._secret = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /**
                    Sets the "secure" value. Defaults to `true`.
                    */
                    Client.prototype.setSecure = function (value) {
                        if (arguments.length == 1) {
                            this._secure = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    /** @hidden */
                    Client.fmliveswitchxirsysv3ClientInitialize = function () {
                        if (!fm.liveswitch.xirsys.v3.Client.__fmliveswitchxirsysv3ClientInitialized && !fm.liveswitch.xirsys.v3.Client.__fmliveswitchxirsysv3ClientInitializing) {
                            fm.liveswitch.xirsys.v3.Client.__fmliveswitchxirsysv3ClientInitializing = true;
                            fm.liveswitch.xirsys.v3.Client.fm_liveswitch_xirsys_v3_Client___defaultEndpoint = "https://global.xirsys.net/_turn";
                            fm.liveswitch.xirsys.v3.Client.__fmliveswitchxirsysv3ClientInitialized = true;
                            fm.liveswitch.xirsys.v3.Client.__fmliveswitchxirsysv3ClientInitializing = false;
                        }
                    };
                    /** @hidden */
                    Client.__fmliveswitchxirsysv3ClientInitialized = false;
                    /** @hidden */
                    Client.__fmliveswitchxirsysv3ClientInitializing = false;
                    return Client;
                }());
                v3.Client = Client;
            })(v3 = xirsys.v3 || (xirsys.v3 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v3;
            (function (v3) {
                /** @hidden */
                var IceServer = /** @class */ (function (_super) {
                    __extends(IceServer, _super);
                    function IceServer() {
                        var _this = this;
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 0) {
                            _this = _super.call(this) || this;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                        return _this;
                    }
                    IceServer.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v3.IceServer]' + ',' + _super.prototype.getTypeString.call(this);
                    };
                    IceServer.fromJson = function (iceServerJson) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.deserializeObjectFast(iceServerJson, function () {
                                return new fm.liveswitch.xirsys.v3.IceServer();
                            }, function (iceServer, name, valueJson) {
                                var str = name;
                                if ((!fm.liveswitch.Global.equals(str, null))) {
                                    if (!(fm.liveswitch.Global.equals(str, "username"))) {
                                        if ((fm.liveswitch.Global.equals(str, "url"))) {
                                            iceServer.setUrl(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                        }
                                        else {
                                            if ((fm.liveswitch.Global.equals(str, "credential"))) {
                                                iceServer.setCredential(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                            }
                                        }
                                    }
                                    else {
                                        iceServer.setUsername(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                    }
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.fromJsonMultiple = function (iceServersJson) {
                        if (arguments.length == 1) {
                            var list = fm.liveswitch.JsonSerializer.deserializeObjectArray(iceServersJson, fm.liveswitch.xirsys.v3.IceServer.fromJson.bind(fm.liveswitch.xirsys.v3.IceServer));
                            if ((fm.liveswitch.Global.equals(list, null))) {
                                return null;
                            }
                            return fm.liveswitch.ArrayExtensions.toArray(list);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.toJson = function (iceServer) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObjectFast(iceServer, function (iss, jsonObject) {
                                if ((!fm.liveswitch.Global.equals(iceServer.getUsername(), null))) {
                                    jsonObject["username"] = fm.liveswitch.JsonSerializer.serializeString(iceServer.getUsername());
                                }
                                if ((!fm.liveswitch.Global.equals(iceServer.getUrl(), null))) {
                                    jsonObject["url"] = fm.liveswitch.JsonSerializer.serializeString(iceServer.getUrl());
                                }
                                if ((!fm.liveswitch.Global.equals(iceServer.getCredential(), null))) {
                                    jsonObject["credential"] = fm.liveswitch.JsonSerializer.serializeString(iceServer.getCredential());
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.toJsonMultiple = function (iceServers) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObjectArray(iceServers, fm.liveswitch.xirsys.v3.IceServer.toJson.bind(fm.liveswitch.xirsys.v3.IceServer));
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.getCredential = function () {
                        if (arguments.length == 0) {
                            return this._credential;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.getUrl = function () {
                        if (arguments.length == 0) {
                            return this._url;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.getUsername = function () {
                        if (arguments.length == 0) {
                            return this._username;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.setCredential = function (value) {
                        if (arguments.length == 1) {
                            this._credential = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.setUrl = function (value) {
                        if (arguments.length == 1) {
                            this._url = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.setUsername = function (value) {
                        if (arguments.length == 1) {
                            this._username = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    IceServer.prototype.toJson = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v3.IceServer.toJson(this);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    return IceServer;
                }(fm.liveswitch.Dynamic));
                v3.IceServer = IceServer;
            })(v3 = xirsys.v3 || (xirsys.v3 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v3;
            (function (v3) {
                /** @hidden */
                var TurnResponse = /** @class */ (function () {
                    function TurnResponse() {
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 0) {
                            //super();
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                    }
                    TurnResponse.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v3.TurnResponse]';
                    };
                    TurnResponse.fromJson = function (turnResponseJson) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.deserializeObject(turnResponseJson, function () {
                                return new fm.liveswitch.xirsys.v3.TurnResponse();
                            }, function (turnResponse, name, valueJson) {
                                var str = name;
                                if ((!fm.liveswitch.Global.equals(str, null))) {
                                    if (!(fm.liveswitch.Global.equals(str, "v"))) {
                                        if ((fm.liveswitch.Global.equals(str, "s"))) {
                                            turnResponse.setStatus(fm.liveswitch.JsonSerializer.deserializeString(valueJson));
                                        }
                                    }
                                    else {
                                        turnResponse.setValueJson(fm.liveswitch.JsonSerializer.deserializeRaw(valueJson));
                                    }
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.toJson = function (turnResponse) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObject(turnResponse, function (gisr, jsonObject) {
                                if ((!fm.liveswitch.Global.equals(turnResponse.getValueJson(), null))) {
                                    jsonObject["v"] = fm.liveswitch.JsonSerializer.serializeRaw(turnResponse.getValueJson());
                                }
                                if ((!fm.liveswitch.Global.equals(turnResponse.getStatus(), null))) {
                                    jsonObject["s"] = fm.liveswitch.JsonSerializer.serializeString(turnResponse.getStatus());
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.prototype.getStatus = function () {
                        if (arguments.length == 0) {
                            return this._status;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.prototype.getValueJson = function () {
                        if (arguments.length == 0) {
                            return this._valueJson;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.prototype.setStatus = function (value) {
                        if (arguments.length == 1) {
                            this._status = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.prototype.setValueJson = function (value) {
                        if (arguments.length == 1) {
                            this._valueJson = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.prototype.toJson = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v3.TurnResponse.toJson(this);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.prototype.getValue = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.Json.deserialize(this.getValueJson.apply(this, arguments));
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponse.prototype.setValue = function (value) {
                        if (arguments.length == 1) {
                            arguments[arguments.length - 1] = fm.liveswitch.Json.serialize(arguments[arguments.length - 1]);
                            this.setValueJson.apply(this, arguments);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    return TurnResponse;
                }());
                v3.TurnResponse = TurnResponse;
            })(v3 = xirsys.v3 || (xirsys.v3 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v3;
            (function (v3) {
                /** @hidden */
                var TurnResponseData = /** @class */ (function () {
                    function TurnResponseData() {
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 0) {
                            //super();
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                    }
                    TurnResponseData.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v3.TurnResponseData]';
                    };
                    TurnResponseData.fromJson = function (turnResponseDataJson) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.deserializeObject(turnResponseDataJson, function () {
                                return new fm.liveswitch.xirsys.v3.TurnResponseData();
                            }, function (turnResponseData, name, valueJson) {
                                var str = name;
                                if (((!fm.liveswitch.Global.equals(str, null)) && (fm.liveswitch.Global.equals(str, "iceServers")))) {
                                    turnResponseData.setIceServers(fm.liveswitch.xirsys.v3.IceServer.fromJsonMultiple(valueJson));
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponseData.toJson = function (turnResponseData) {
                        if (arguments.length == 1) {
                            return fm.liveswitch.JsonSerializer.serializeObject(turnResponseData, function (ird, jsonObject) {
                                if ((!fm.liveswitch.Global.equals(turnResponseData.getIceServers(), null))) {
                                    jsonObject["iceServers"] = fm.liveswitch.xirsys.v3.IceServer.toJsonMultiple(turnResponseData.getIceServers());
                                }
                            });
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponseData.prototype.getIceServers = function () {
                        if (arguments.length == 0) {
                            return this._iceServers;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponseData.prototype.setIceServers = function (value) {
                        if (arguments.length == 1) {
                            this._iceServers = value;
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponseData.prototype.toJson = function () {
                        if (arguments.length == 0) {
                            return fm.liveswitch.xirsys.v3.TurnResponseData.toJson(this);
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    return TurnResponseData;
                }());
                v3.TurnResponseData = TurnResponseData;
            })(v3 = xirsys.v3 || (xirsys.v3 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v3;
            (function (v3) {
                /** @hidden */
                var TurnResponseStatus = /** @class */ (function () {
                    function TurnResponseStatus() {
                        var __arguments = new Array(arguments.length);
                        for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                            __arguments[__argumentIndex] = arguments[__argumentIndex];
                        }
                        if (__arguments.length == 0) {
                            //super();
                        }
                        else {
                            throw new fm.liveswitch.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                        }
                    }
                    TurnResponseStatus.prototype.getTypeString = function () {
                        return '[fm.liveswitch.xirsys.v3.TurnResponseStatus]';
                    };
                    TurnResponseStatus.getError = function () {
                        if (arguments.length == 0) {
                            return "error";
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    TurnResponseStatus.getOK = function () {
                        if (arguments.length == 0) {
                            return "ok";
                        }
                        else {
                            throw new fm.liveswitch.Exception('Method overload does not exist with specified parameter count/type combination.');
                        }
                    };
                    return TurnResponseStatus;
                }());
                v3.TurnResponseStatus = TurnResponseStatus;
            })(v3 = xirsys.v3 || (xirsys.v3 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));
/// <reference path="v2/Client.ts" />

(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v2;
            (function (v2) {
                fm.liveswitch.xirsys.v2.Client.fmliveswitchxirsysv2ClientInitialize();
            })(v2 = xirsys.v2 || (xirsys.v2 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));
/// <reference path="v3/Client.ts" />
(function (fm) {
    var liveswitch;
    (function (liveswitch) {
        var xirsys;
        (function (xirsys) {
            var v3;
            (function (v3) {
                fm.liveswitch.xirsys.v3.Client.fmliveswitchxirsysv3ClientInitialize();
            })(v3 = xirsys.v3 || (xirsys.v3 = {}));
        })(xirsys = liveswitch.xirsys || (liveswitch.xirsys = {}));
    })(liveswitch = fm.liveswitch || (fm.liveswitch = {}));
})(fm || (fm = {}));
return fm.liveswitch.xirsys;
}));

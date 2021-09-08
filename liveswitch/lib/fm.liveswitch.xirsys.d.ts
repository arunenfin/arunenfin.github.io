//
// Title: LiveSwitch for JavaScript
// Version: 1.13.1.54330
// Copyright Frozen Mountain Software 2011+
//
declare namespace fm.liveswitch.xirsys.v2 {
    /**
    A XirSys v2 client.
    */
    class Client {
        getTypeString(): string;
        /** @hidden */
        private _application;
        /** @hidden */
        private _domain;
        /** @hidden */
        private _endpoint;
        /** @hidden */
        private _ident;
        /** @hidden */
        private _room;
        /** @hidden */
        private _secret;
        /** @hidden */
        private _secure;
        /** @hidden */
        private static fm_liveswitch_xirsys_v2_Client___defaultEndpoint;
        private fmliveswitchxirsysv2ClientInit;
        /**
        Initializes a new instance of the [[fm.liveswitch.xirsys.v2.client]] class.
        @param ident The "ident" value.
        @param secret The "secret" value.
        @param domain The "domain" value.
        */
        constructor(ident: string, secret: string, domain: string);
        /**
        Initializes a new instance of the [[fm.liveswitch.xirsys.v2.client]] class.
        @param ident The "ident" value.
        @param secret The "secret" value.
        @param domain The "domain" value.
        @param application The "application" value.
        */
        constructor(ident: string, secret: string, domain: string, application: string);
        /**
        Initializes a new instance of the [[fm.liveswitch.xirsys.v2.client]] class.
        @param ident The "ident" value.
        @param secret The "secret" value.
        @param domain The "domain" value.
        @param application The "application" value.
        @param room The "room" value.
        */
        constructor(ident: string, secret: string, domain: string, application: string, room: string);
        /**
        Initializes a new instance of the [[fm.liveswitch.xirsys.v2.client]] class.
        @param ident The "ident" value.
        @param secret The "secret" value.
        @param domain The "domain" value.
        @param application The "application" value.
        @param room The "room" value.
        @param secure The "secure" value.
        */
        constructor(ident: string, secret: string, domain: string, application: string, room: string, secure: boolean);
        /**
        Gets the default HTTP endpoint. Defaults to "https://service.xirsys.com/ice".
        */
        static getDefaultEndpoint(): string;
        /**
        Sets the default HTTP endpoint. Defaults to "https://service.xirsys.com/ice".
        */
        static setDefaultEndpoint(value: string): void;
        /** @hidden */
        private doGetIceServers;
        /**
        Gets the "application" value. Defaults to "default".
        */
        getApplication(): string;
        /**
        Gets the "domain" value.
        */
        getDomain(): string;
        /**
        Gets the HTTP endpoint.
        */
        getEndpoint(): string;
        /**
        Gets an array of XirSys ICE servers.
        */
        getIceServers(): fm.liveswitch.Future<fm.liveswitch.IceServer[]>;
        /**
        Gets the "ident" value.
        */
        getIdent(): string;
        /**
        Gets the "room" value. Defaults to "default".
        */
        getRoom(): string;
        /**
        Gets the "secret" value.
        */
        getSecret(): string;
        /**
        Gets the "secure" value. Defaults to `true`.
        */
        getSecure(): boolean;
        /**
        Sets the "application" value. Defaults to "default".
        */
        setApplication(value: string): void;
        /**
        Sets the "domain" value.
        */
        setDomain(value: string): void;
        /**
        Sets the HTTP endpoint.
        */
        setEndpoint(value: string): void;
        /**
        Sets the "ident" value.
        */
        setIdent(value: string): void;
        /**
        Sets the "room" value. Defaults to "default".
        */
        setRoom(value: string): void;
        /**
        Sets the "secret" value.
        */
        setSecret(value: string): void;
        /**
        Sets the "secure" value. Defaults to `true`.
        */
        setSecure(value: boolean): void;
        /** @hidden */
        private toFormData;
        /** @hidden */
        private static __fmliveswitchxirsysv2ClientInitialized;
        /** @hidden */
        private static __fmliveswitchxirsysv2ClientInitializing;
        /** @hidden */
        static fmliveswitchxirsysv2ClientInitialize(): void;
    }
}
declare namespace fm.liveswitch.xirsys.v2 {
    /** @hidden */
    class IceResponse {
        getTypeString(): string;
        /** @hidden */
        private _data;
        /** @hidden */
        private _error;
        /** @hidden */
        private _path;
        /** @hidden */
        private _status;
        private fmliveswitchxirsysv2IceResponseInit;
        constructor();
        static fromJson(iceResponseJson: string): fm.liveswitch.xirsys.v2.IceResponse;
        static toJson(iceResponse: fm.liveswitch.xirsys.v2.IceResponse): string;
        getData(): fm.liveswitch.xirsys.v2.IceResponseData;
        getError(): string;
        getPath(): string;
        getStatus(): number;
        setData(value: fm.liveswitch.xirsys.v2.IceResponseData): void;
        setError(value: string): void;
        setPath(value: string): void;
        setStatus(value: number): void;
        toJson(): string;
    }
}
declare namespace fm.liveswitch.xirsys.v2 {
    /** @hidden */
    class IceResponseData {
        getTypeString(): string;
        /** @hidden */
        private _iceServers;
        constructor();
        static fromJson(iceResponseDataJson: string): fm.liveswitch.xirsys.v2.IceResponseData;
        static toJson(iceResponseData: fm.liveswitch.xirsys.v2.IceResponseData): string;
        getIceServers(): fm.liveswitch.xirsys.v2.IceServer[];
        setIceServers(value: fm.liveswitch.xirsys.v2.IceServer[]): void;
        toJson(): string;
    }
}
declare namespace fm.liveswitch.xirsys.v2 {
    /** @hidden */
    class IceServer extends fm.liveswitch.Dynamic {
        getTypeString(): string;
        /** @hidden */
        private _credential;
        /** @hidden */
        private _url;
        /** @hidden */
        private _username;
        constructor();
        static fromJson(iceServerJson: string): fm.liveswitch.xirsys.v2.IceServer;
        static fromJsonMultiple(iceServersJson: string): fm.liveswitch.xirsys.v2.IceServer[];
        static toJson(iceServer: fm.liveswitch.xirsys.v2.IceServer): string;
        static toJsonMultiple(iceServers: fm.liveswitch.xirsys.v2.IceServer[]): string;
        getCredential(): string;
        getUrl(): string;
        getUsername(): string;
        setCredential(value: string): void;
        setUrl(value: string): void;
        setUsername(value: string): void;
        toJson(): string;
    }
}
declare namespace fm.liveswitch.xirsys.v3 {
    /**
    A XirSys v3 client.
    */
    class Client {
        getTypeString(): string;
        /** @hidden */
        private _channel;
        /** @hidden */
        private _endpoint;
        /** @hidden */
        private _ident;
        /** @hidden */
        private _secret;
        /** @hidden */
        private _secure;
        /** @hidden */
        private static fm_liveswitch_xirsys_v3_Client___defaultEndpoint;
        private fmliveswitchxirsysv3ClientInit;
        /**
        Initializes a new instance of the [[fm.liveswitch.xirsys.v3.client]] class.
        @param ident The "ident" value.
        @param secret The "secret" value.
        @param channel The "channel" value.
        */
        constructor(ident: string, secret: string, channel: string);
        /**
        Initializes a new instance of the [[fm.liveswitch.xirsys.v3.client]] class.
        @param ident The "ident" value.
        @param secret The "secret" value.
        @param channel The "channel" value.
        @param secure The "secure" value.
        */
        constructor(ident: string, secret: string, channel: string, secure: boolean);
        /**
        Gets the default HTTP endpoint. Defaults to "https://global.xirsys.net/_turn".
        */
        static getDefaultEndpoint(): string;
        /**
        Sets the default HTTP endpoint. Defaults to "https://global.xirsys.net/_turn".
        */
        static setDefaultEndpoint(value: string): void;
        /** @hidden */
        private doGetIceServers;
        /**
        Gets the "channel" value.
        */
        getChannel(): string;
        /**
        Gets the HTTP endpoint.
        */
        getEndpoint(): string;
        /**
        Gets an array of XirSys ICE servers.
        */
        getIceServers(): fm.liveswitch.Future<fm.liveswitch.IceServer[]>;
        /**
        Gets the "ident" value.
        */
        getIdent(): string;
        /**
        Gets the "secret" value.
        */
        getSecret(): string;
        /**
        Gets the "secure" value. Defaults to `true`.
        */
        getSecure(): boolean;
        /**
        Sets the "channel" value.
        */
        setChannel(value: string): void;
        /**
        Sets the HTTP endpoint.
        */
        setEndpoint(value: string): void;
        /**
        Sets the "ident" value.
        */
        setIdent(value: string): void;
        /**
        Sets the "secret" value.
        */
        setSecret(value: string): void;
        /**
        Sets the "secure" value. Defaults to `true`.
        */
        setSecure(value: boolean): void;
        /** @hidden */
        private static __fmliveswitchxirsysv3ClientInitialized;
        /** @hidden */
        private static __fmliveswitchxirsysv3ClientInitializing;
        /** @hidden */
        static fmliveswitchxirsysv3ClientInitialize(): void;
    }
}
declare namespace fm.liveswitch.xirsys.v3 {
    /** @hidden */
    class IceServer extends fm.liveswitch.Dynamic {
        getTypeString(): string;
        /** @hidden */
        private _credential;
        /** @hidden */
        private _url;
        /** @hidden */
        private _username;
        constructor();
        static fromJson(iceServerJson: string): fm.liveswitch.xirsys.v3.IceServer;
        static fromJsonMultiple(iceServersJson: string): fm.liveswitch.xirsys.v3.IceServer[];
        static toJson(iceServer: fm.liveswitch.xirsys.v3.IceServer): string;
        static toJsonMultiple(iceServers: fm.liveswitch.xirsys.v3.IceServer[]): string;
        getCredential(): string;
        getUrl(): string;
        getUsername(): string;
        setCredential(value: string): void;
        setUrl(value: string): void;
        setUsername(value: string): void;
        toJson(): string;
    }
}
declare namespace fm.liveswitch.xirsys.v3 {
    /** @hidden */
    class TurnResponse {
        getTypeString(): string;
        /** @hidden */
        private _status;
        /** @hidden */
        private _valueJson;
        constructor();
        static fromJson(turnResponseJson: string): fm.liveswitch.xirsys.v3.TurnResponse;
        static toJson(turnResponse: fm.liveswitch.xirsys.v3.TurnResponse): string;
        getStatus(): string;
        getValueJson(): string;
        setStatus(value: string): void;
        setValueJson(value: string): void;
        toJson(): string;
        getValue(): any;
        setValue(value: any): void;
    }
}
declare namespace fm.liveswitch.xirsys.v3 {
    /** @hidden */
    class TurnResponseData {
        getTypeString(): string;
        /** @hidden */
        private _iceServers;
        constructor();
        static fromJson(turnResponseDataJson: string): fm.liveswitch.xirsys.v3.TurnResponseData;
        static toJson(turnResponseData: fm.liveswitch.xirsys.v3.TurnResponseData): string;
        getIceServers(): fm.liveswitch.xirsys.v3.IceServer[];
        setIceServers(value: fm.liveswitch.xirsys.v3.IceServer[]): void;
        toJson(): string;
    }
}
declare namespace fm.liveswitch.xirsys.v3 {
    /** @hidden */
    class TurnResponseStatus {
        getTypeString(): string;
        constructor();
        static getError(): string;
        static getOK(): string;
    }
}
declare namespace fm.liveswitch.xirsys.v2 {
}
declare namespace fm.liveswitch.xirsys.v3 {
}

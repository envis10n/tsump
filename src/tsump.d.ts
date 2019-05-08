declare interface IUMPHandshake {
    event: "ump:handshake";
    ref: string;
    payload: {
        client: string;
        version: string;
        ump_version: string;
        supports: string[];
    };
}

declare enum UMPHandshakeError {
    None = 0,
    Version = 1,
}

declare interface IUMPHandshakeResponse {
    event: "ump:handshake";
    ref: string;
    payload: {
        error?: UMPHandshakeError;
        supported: string[];
    };
}

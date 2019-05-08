# UMP Handshake

Client -> Server:

```ts
interface IUMPHandshake {
    event: "ump:handshake";
    ref: string;
    payload: {
        client: string;
        version: string;
        ump_version: string;
        supports: string[];
    };
}
```

Server -> Client:

```ts
enum UMPHandshakeError {
    None = 0,
    Version = 1,
    Supports = 2
}

interface IUMPHandshakeResponse {
    event: "ump:handshake";
    ref: string;
    payload: {
        error?: UMPHandshakeError;
        supported: string[];
    };
}
```

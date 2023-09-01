interface mod {
    name(): string;
    author(): string;
    version(): string;

    description(): string;
    detailed_description(): string;

    dependencies(): string[];
    requires_restart(): boolean;

    enabled(): boolean;
    enable(value: boolean): void;
}

type restore_fn = () => void;

declare const mod_api: {
    logger: {
        error(...args: any[]): void;
        debug(...args: any[]): void;
        info(...args: any[]): void;
        warn(...args: any[]): void;
        logs(): string[];
    },

    mods: {
        all(): mod[];
    },

    hooks: {
        detour(module: object, func: string, detour: (original: any, ...args: any[]) => any): restore_fn;
        intercept_require(module: string, callback: (module: object) => void): restore_fn;
    },
}
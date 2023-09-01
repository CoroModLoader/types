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
        /** @noSelf */
        error(...args: any[]): void;
        /** @noSelf */
        debug(...args: any[]): void;
        /** @noSelf */
        info(...args: any[]): void;
        /** @noSelf */
        warn(...args: any[]): void;
        /** @noSelf */
        logs(): string[];
    },

    mods: {
        /** @noSelf */
        all(): mod[];
    },

    hooks: {
        /** @noSelf */
        detour(module: object, func: string, detour: (original: any, ...args: any[]) => any): restore_fn;
        /** @noSelf */
        intercept_require(module: string, callback: (module: object) => void): restore_fn;
    },
}
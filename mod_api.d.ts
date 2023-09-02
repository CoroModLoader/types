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

type original_fn = (this: void, ...args: any[]) => any;

type restore_fn = (this: void) => void;
type intercept_fn = (this: void, module: any) => void;
type detour_fn = (this: void, original: original_fn, ...args: any[]) => any;

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
        detour(module: any, func: string, detour: detour_fn): restore_fn;
        /** @noSelf */
        intercept_require(module: string, callback: intercept_fn): restore_fn;
    },
}
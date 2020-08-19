import { InjectionToken } from '@angular/core';
import { StorageKey } from './internals';
export declare const enum StorageOption {
    LocalStorage = 0,
    SessionStorage = 1
}
export interface NgxsStoragePluginOptions {
    /**
     * Key for the state slice to store in the storage engine.
     */
    key?: undefined | StorageKey;
    /**
     * Storage engine to use. Deaults to localStorage but can provide
     *
     * sessionStorage or custom implementation of the StorageEngine interface
     */
    storage?: StorageOption;
    /**
     * Migration strategies.
     */
    migrations?: {
        /**
         * Version to key off.
         */
        version: number | string;
        /**
         * Method to migrate the previous state.
         */
        migrate: (state: any) => any;
        /**
         * Key to migrate.
         */
        key?: string;
        /**
         * Key for the version. Defaults to 'version'.
         */
        versionKey?: string;
    }[];
    /**
     * Serailizer for the object before its pushed into the engine.
     */
    serialize?(obj: any): string;
    /**
     * Deserializer for the object before its pulled out of the engine.
     */
    deserialize?(obj: any): any;
    /**
     * Method to alter object before serialization.
     */
    beforeSerialize?(obj: any, key: string): any;
    /**
     * Method to alter object after deserialization.
     */
    afterDeserialize?(obj: any, key: string): any;
}
export declare const NGXS_STORAGE_PLUGIN_OPTIONS: InjectionToken<unknown>;
export declare const STORAGE_ENGINE: InjectionToken<unknown>;
export interface StorageEngine {
    readonly length: number;
    getItem(key: string): any;
    setItem(key: string, val: any): void;
    removeItem(key: string): void;
    clear(): void;
}

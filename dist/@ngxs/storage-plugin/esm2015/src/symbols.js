/**
 * @fileoverview added by tsickle
 * Generated from: src/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @enum {number} */
const StorageOption = {
    LocalStorage: 0,
    SessionStorage: 1,
};
export { StorageOption };
/**
 * @record
 */
export function NgxsStoragePluginOptions() { }
if (false) {
    /**
     * Key for the state slice to store in the storage engine.
     * @type {?|undefined}
     */
    NgxsStoragePluginOptions.prototype.key;
    /**
     * Storage engine to use. Deaults to localStorage but can provide
     *
     * sessionStorage or custom implementation of the StorageEngine interface
     * @type {?|undefined}
     */
    NgxsStoragePluginOptions.prototype.storage;
    /**
     * Migration strategies.
     * @type {?|undefined}
     */
    NgxsStoragePluginOptions.prototype.migrations;
    /**
     * Serailizer for the object before its pushed into the engine.
     * @param {?} obj
     * @return {?}
     */
    NgxsStoragePluginOptions.prototype.serialize = function (obj) { };
    /**
     * Deserializer for the object before its pulled out of the engine.
     * @param {?} obj
     * @return {?}
     */
    NgxsStoragePluginOptions.prototype.deserialize = function (obj) { };
    /**
     * Method to alter object before serialization.
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    NgxsStoragePluginOptions.prototype.beforeSerialize = function (obj, key) { };
    /**
     * Method to alter object after deserialization.
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    NgxsStoragePluginOptions.prototype.afterDeserialize = function (obj, key) { };
}
/** @type {?} */
export const NGXS_STORAGE_PLUGIN_OPTIONS = new InjectionToken('NGXS_STORAGE_PLUGIN_OPTION');
/** @type {?} */
export const STORAGE_ENGINE = new InjectionToken('STORAGE_ENGINE');
/**
 * @record
 */
export function StorageEngine() { }
if (false) {
    /** @type {?} */
    StorageEngine.prototype.length;
    /**
     * @param {?} key
     * @return {?}
     */
    StorageEngine.prototype.getItem = function (key) { };
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    StorageEngine.prototype.setItem = function (key, val) { };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageEngine.prototype.removeItem = function (key) { };
    /**
     * @return {?}
     */
    StorageEngine.prototype.clear = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JhZ2UtcGx1Z2luL3NyYy9zeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJL0MsTUFBa0IsYUFBYTtJQUM3QixZQUFZLEdBQUE7SUFDWixjQUFjLEdBQUE7RUFDZjs7Ozs7QUFFRCw4Q0F5REM7Ozs7OztJQXJEQyx1Q0FBNkI7Ozs7Ozs7SUFPN0IsMkNBQXdCOzs7OztJQUt4Qiw4Q0FvQkk7Ozs7OztJQUtKLGtFQUE2Qjs7Ozs7O0lBSzdCLG9FQUE0Qjs7Ozs7OztJQUs1Qiw2RUFBNkM7Ozs7Ozs7SUFLN0MsOEVBQThDOzs7QUFHaEQsTUFBTSxPQUFPLDJCQUEyQixHQUFHLElBQUksY0FBYyxDQUFDLDRCQUE0QixDQUFDOztBQUUzRixNQUFNLE9BQU8sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDOzs7O0FBRWxFLG1DQU1DOzs7SUFMQywrQkFBd0I7Ozs7O0lBQ3hCLHFEQUEwQjs7Ozs7O0lBQzFCLDBEQUFxQzs7Ozs7SUFDckMsd0RBQThCOzs7O0lBQzlCLGdEQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmFnZUtleSB9IGZyb20gJy4vaW50ZXJuYWxzJztcblxuZXhwb3J0IGNvbnN0IGVudW0gU3RvcmFnZU9wdGlvbiB7XG4gIExvY2FsU3RvcmFnZSxcbiAgU2Vzc2lvblN0b3JhZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hzU3RvcmFnZVBsdWdpbk9wdGlvbnMge1xuICAvKipcbiAgICogS2V5IGZvciB0aGUgc3RhdGUgc2xpY2UgdG8gc3RvcmUgaW4gdGhlIHN0b3JhZ2UgZW5naW5lLlxuICAgKi9cbiAga2V5PzogdW5kZWZpbmVkIHwgU3RvcmFnZUtleTtcblxuICAvKipcbiAgICogU3RvcmFnZSBlbmdpbmUgdG8gdXNlLiBEZWF1bHRzIHRvIGxvY2FsU3RvcmFnZSBidXQgY2FuIHByb3ZpZGVcbiAgICpcbiAgICogc2Vzc2lvblN0b3JhZ2Ugb3IgY3VzdG9tIGltcGxlbWVudGF0aW9uIG9mIHRoZSBTdG9yYWdlRW5naW5lIGludGVyZmFjZVxuICAgKi9cbiAgc3RvcmFnZT86IFN0b3JhZ2VPcHRpb247XG5cbiAgLyoqXG4gICAqIE1pZ3JhdGlvbiBzdHJhdGVnaWVzLlxuICAgKi9cbiAgbWlncmF0aW9ucz86IHtcbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIHRvIGtleSBvZmYuXG4gICAgICovXG4gICAgdmVyc2lvbjogbnVtYmVyIHwgc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIG1pZ3JhdGUgdGhlIHByZXZpb3VzIHN0YXRlLlxuICAgICAqL1xuICAgIG1pZ3JhdGU6IChzdGF0ZTogYW55KSA9PiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBLZXkgdG8gbWlncmF0ZS5cbiAgICAgKi9cbiAgICBrZXk/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBLZXkgZm9yIHRoZSB2ZXJzaW9uLiBEZWZhdWx0cyB0byAndmVyc2lvbicuXG4gICAgICovXG4gICAgdmVyc2lvbktleT86IHN0cmluZztcbiAgfVtdO1xuXG4gIC8qKlxuICAgKiBTZXJhaWxpemVyIGZvciB0aGUgb2JqZWN0IGJlZm9yZSBpdHMgcHVzaGVkIGludG8gdGhlIGVuZ2luZS5cbiAgICovXG4gIHNlcmlhbGl6ZT8ob2JqOiBhbnkpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplciBmb3IgdGhlIG9iamVjdCBiZWZvcmUgaXRzIHB1bGxlZCBvdXQgb2YgdGhlIGVuZ2luZS5cbiAgICovXG4gIGRlc2VyaWFsaXplPyhvYmo6IGFueSk6IGFueTtcblxuICAvKipcbiAgICogTWV0aG9kIHRvIGFsdGVyIG9iamVjdCBiZWZvcmUgc2VyaWFsaXphdGlvbi5cbiAgICovXG4gIGJlZm9yZVNlcmlhbGl6ZT8ob2JqOiBhbnksIGtleTogc3RyaW5nKTogYW55O1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gYWx0ZXIgb2JqZWN0IGFmdGVyIGRlc2VyaWFsaXphdGlvbi5cbiAgICovXG4gIGFmdGVyRGVzZXJpYWxpemU/KG9iajogYW55LCBrZXk6IHN0cmluZyk6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IE5HWFNfU1RPUkFHRV9QTFVHSU5fT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkdYU19TVE9SQUdFX1BMVUdJTl9PUFRJT04nKTtcblxuZXhwb3J0IGNvbnN0IFNUT1JBR0VfRU5HSU5FID0gbmV3IEluamVjdGlvblRva2VuKCdTVE9SQUdFX0VOR0lORScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VFbmdpbmUge1xuICByZWFkb25seSBsZW5ndGg6IG51bWJlcjtcbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IGFueTtcbiAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsOiBhbnkpOiB2b2lkO1xuICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZDtcbiAgY2xlYXIoKTogdm9pZDtcbn1cbiJdfQ==
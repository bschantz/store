/**
 * @fileoverview added by tsickle
 * Generated from: src/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const HmrRuntime = {
    Status: "NGXS_HMR_LIFECYCLE_STATUS",
};
export { HmrRuntime };
/**
 * @record
 */
export function NgxsHmrSnapshot() { }
/**
 * @record
 * @template T
 */
export function NgxsHmrLifeCycle() { }
if (false) {
    /**
     * hmrNgxsStoreOnInit is called when the AppModule on init
     * @param {?} ctx - StateContext for the current app state from Store
     * @param {?} snapshot - previous state from Store after last hmr on destroy
     * @return {?}
     */
    NgxsHmrLifeCycle.prototype.hmrNgxsStoreOnInit = function (ctx, snapshot) { };
    /**
     * hmrNgxsStoreOnInit is called when the AppModule on destroy
     * @param {?} ctx - StateContext for the current app state from Store
     * @return {?}
     */
    NgxsHmrLifeCycle.prototype.hmrNgxsStoreBeforeOnDestroy = function (ctx) { };
}
/**
 * @record
 */
export function NgxsHmrOptions() { }
if (false) {
    /**
     * \@description
     * Clear logs after each refresh
     * (default: true)
     * @type {?|undefined}
     */
    NgxsHmrOptions.prototype.autoClearLogs;
    /**
     * \@description
     * Deferred time before loading the old state
     * (default: 100ms)
     * @type {?|undefined}
     */
    NgxsHmrOptions.prototype.deferTime;
}
/**
 * @record
 */
function WebpackHotModule() { }
if (false) {
    /** @type {?|undefined} */
    WebpackHotModule.prototype.hot;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2htci1wbHVnaW4vc3JjL3N5bWJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBa0IsVUFBVTtJQUMxQixNQUFNLDZCQUE4QjtFQUNyQzs7Ozs7QUFFRCxxQ0FFQzs7Ozs7QUFFRCxzQ0FhQzs7Ozs7Ozs7SUFQQyw2RUFBcUU7Ozs7OztJQU1yRSw0RUFBOEQ7Ozs7O0FBTWhFLG9DQWNDOzs7Ozs7OztJQVJDLHVDQUF3Qjs7Ozs7OztJQU94QixtQ0FBbUI7Ozs7O0FBSXJCLCtCQVFDOzs7SUFQQywrQkFNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IE5nTW9kdWxlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEhtclJ1bnRpbWUge1xuICBTdGF0dXMgPSAnTkdYU19ITVJfTElGRUNZQ0xFX1NUQVRVUydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hzSG1yU25hcHNob3Qge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4c0htckxpZmVDeWNsZTxUID0gTmd4c0htclNuYXBzaG90PiB7XG4gIC8qKlxuICAgKiBobXJOZ3hzU3RvcmVPbkluaXQgaXMgY2FsbGVkIHdoZW4gdGhlIEFwcE1vZHVsZSBvbiBpbml0XG4gICAqIEBwYXJhbSBjdHggLSBTdGF0ZUNvbnRleHQgZm9yIHRoZSBjdXJyZW50IGFwcCBzdGF0ZSBmcm9tIFN0b3JlXG4gICAqIEBwYXJhbSBzbmFwc2hvdCAtIHByZXZpb3VzIHN0YXRlIGZyb20gU3RvcmUgYWZ0ZXIgbGFzdCBobXIgb24gZGVzdHJveVxuICAgKi9cbiAgaG1yTmd4c1N0b3JlT25Jbml0KGN0eDogU3RhdGVDb250ZXh0PFQ+LCBzbmFwc2hvdDogUGFydGlhbDxUPik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIGhtck5neHNTdG9yZU9uSW5pdCBpcyBjYWxsZWQgd2hlbiB0aGUgQXBwTW9kdWxlIG9uIGRlc3Ryb3lcbiAgICogQHBhcmFtIGN0eCAtIFN0YXRlQ29udGV4dCBmb3IgdGhlIGN1cnJlbnQgYXBwIHN0YXRlIGZyb20gU3RvcmVcbiAgICovXG4gIGhtck5neHNTdG9yZUJlZm9yZU9uRGVzdHJveShjdHg6IFN0YXRlQ29udGV4dDxUPik6IFBhcnRpYWw8VD47XG59XG5cbmV4cG9ydCB0eXBlIEhtckNhbGxiYWNrPFQ+ID0gKGN0eDogU3RhdGVDb250ZXh0PFQ+LCBzdGF0ZTogUGFydGlhbDxUPikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEJvb3RzdHJhcE1vZHVsZUZuPFQgPSBhbnk+ID0gKCkgPT4gUHJvbWlzZTxOZ01vZHVsZVJlZjxUPj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4c0htck9wdGlvbnMge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIENsZWFyIGxvZ3MgYWZ0ZXIgZWFjaCByZWZyZXNoXG4gICAqIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgYXV0b0NsZWFyTG9ncz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBEZWZlcnJlZCB0aW1lIGJlZm9yZSBsb2FkaW5nIHRoZSBvbGQgc3RhdGVcbiAgICogKGRlZmF1bHQ6IDEwMG1zKVxuICAgKi9cbiAgZGVmZXJUaW1lPzogbnVtYmVyO1xufVxuXG50eXBlIE1vZHVsZUlkID0gc3RyaW5nIHwgbnVtYmVyO1xuaW50ZXJmYWNlIFdlYnBhY2tIb3RNb2R1bGUge1xuICBob3Q/OiB7XG4gICAgZGF0YTogYW55O1xuICAgIGFjY2VwdChkZXBlbmRlbmNpZXM6IHN0cmluZ1tdLCBjYWxsYmFjaz86ICh1cGRhdGVkRGVwZW5kZW5jaWVzOiBNb2R1bGVJZFtdKSA9PiB2b2lkKTogdm9pZDtcbiAgICBhY2NlcHQoZGVwZW5kZW5jeTogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpOiB2b2lkO1xuICAgIGFjY2VwdChlcnJIYW5kbGVyPzogKGVycjogRXJyb3IpID0+IHZvaWQpOiB2b2lkO1xuICAgIGRpc3Bvc2UoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkO1xuICB9O1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogYW55IC0gYmVjYXVzZSBuZWVkIHNldHVwXG4gKiBucG0gaSBAdHlwZXMvd2VicGFjay1lbnZcbiAqL1xuZXhwb3J0IHR5cGUgV2VicGFja01vZHVsZSA9IFdlYnBhY2tIb3RNb2R1bGUgfCBhbnk7XG4iXX0=
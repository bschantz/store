/**
 * @fileoverview added by tsickle
 * Generated from: src/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import { DispatchOutsideZoneNgxsExecutionStrategy } from './execution/dispatch-outside-zone-ngxs-execution-strategy';
/** @type {?} */
export const ROOT_STATE_TOKEN = new InjectionToken('ROOT_STATE_TOKEN');
/** @type {?} */
export const FEATURE_STATE_TOKEN = new InjectionToken('FEATURE_STATE_TOKEN');
/** @type {?} */
export const NGXS_PLUGINS = new InjectionToken('NGXS_PLUGINS');
/** @type {?} */
export const NG_TEST_MODE = new InjectionToken('NG_TEST_MODE');
/** @type {?} */
export const NG_DEV_MODE = new InjectionToken('NG_DEV_MODE');
/** @type {?} */
export const META_KEY = 'NGXS_META';
/** @type {?} */
export const META_OPTIONS_KEY = 'NGXS_OPTIONS_META';
/** @type {?} */
export const SELECTOR_META_KEY = 'NGXS_SELECTOR_META';
/**
 * The NGXS config settings.
 */
export class NgxsConfig {
    constructor() {
        /**
         * Defining the default state before module initialization
         * This is convenient if we need to create a define our own set of states.
         * @deprecated will be removed after v4
         * (default: {})
         */
        this.defaultsState = {};
        /**
         * Defining shared selector options
         */
        this.selectorOptions = {
            injectContainerState: true,
            // TODO: default is true in v3, will change in v4
            suppressErrors: true // TODO: default is true in v3, will change in v4
        };
        this.compatibility = {
            strictContentSecurityPolicy: false
        };
        this.executionStrategy = DispatchOutsideZoneNgxsExecutionStrategy;
    }
}
NgxsConfig.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsConfig.ctorParameters = () => [];
if (false) {
    /**
     * Run in development mode. This will add additional debugging features:
     * - Object.freeze on the state and actions to guarantee immutability
     * (default: false)
     * @type {?}
     */
    NgxsConfig.prototype.developmentMode;
    /** @type {?} */
    NgxsConfig.prototype.compatibility;
    /**
     * Determines the execution context to perform async operations inside. An implementation can be
     * provided to override the default behaviour where the async operations are run
     * outside Angular's zone but all observable behaviours of NGXS are run back inside Angular's zone.
     * These observable behaviours are from:
     *   `\@Select(...)`, `store.select(...)`, `actions.subscribe(...)` or `store.dispatch(...).subscribe(...)`
     * Every `zone.run` causes Angular to run change detection on the whole tree (`app.tick()`) so of your
     * application doesn't rely on zone.js running change detection then you can switch to the
     * `NoopNgxsExecutionStrategy` that doesn't interact with zones.
     * (default: null)
     * @type {?}
     */
    NgxsConfig.prototype.executionStrategy;
    /**
     * Defining the default state before module initialization
     * This is convenient if we need to create a define our own set of states.
     * @deprecated will be removed after v4
     * (default: {})
     * @type {?}
     */
    NgxsConfig.prototype.defaultsState;
    /**
     * Defining shared selector options
     * @type {?}
     */
    NgxsConfig.prototype.selectorOptions;
}
/**
 * State context provided to the actions in the state.
 * @record
 * @template T
 */
export function StateContext() { }
if (false) {
    /**
     * Get the current state.
     * @return {?}
     */
    StateContext.prototype.getState = function () { };
    /**
     * Reset the state to a new value.
     * @param {?} val
     * @return {?}
     */
    StateContext.prototype.setState = function (val) { };
    /**
     * Patch the existing state with the provided value.
     * @param {?} val
     * @return {?}
     */
    StateContext.prototype.patchState = function (val) { };
    /**
     * Dispatch a new action and return the dispatched observable.
     * @param {?} actions
     * @return {?}
     */
    StateContext.prototype.dispatch = function (actions) { };
}
/**
 * Plugin interface
 * @record
 */
export function NgxsPlugin() { }
if (false) {
    /**
     * Handle the state/action before its submitted to the state handlers.
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    NgxsPlugin.prototype.handle = function (state, action, next) { };
}
/**
 * Options that can be provided to the store.
 * @record
 * @template T
 */
export function StoreOptions() { }
if (false) {
    /**
     * Name of the state. Required.
     * @type {?}
     */
    StoreOptions.prototype.name;
    /**
     * Default values for the state. If not provided, uses empty object.
     * @type {?|undefined}
     */
    StoreOptions.prototype.defaults;
    /**
     * Sub states for the given state.
     * @type {?|undefined}
     */
    StoreOptions.prototype.children;
}
/**
 * Represents a basic change from a previous to a new value for a single state instance.
 * Passed as a value in a NgxsSimpleChanges object to the ngxsOnChanges hook.
 * @template T
 */
export class NgxsSimpleChange {
    /**
     * @param {?} previousValue
     * @param {?} currentValue
     * @param {?} firstChange
     */
    constructor(previousValue, currentValue, firstChange) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.firstChange = firstChange;
    }
}
if (false) {
    /** @type {?} */
    NgxsSimpleChange.prototype.previousValue;
    /** @type {?} */
    NgxsSimpleChange.prototype.currentValue;
    /** @type {?} */
    NgxsSimpleChange.prototype.firstChange;
}
/**
 * On init interface
 * @record
 */
export function NgxsOnInit() { }
if (false) {
    /**
     * @param {?=} ctx
     * @return {?}
     */
    NgxsOnInit.prototype.ngxsOnInit = function (ctx) { };
}
/**
 * On change interface
 * @record
 */
export function NgxsOnChanges() { }
if (false) {
    /**
     * @param {?} change
     * @return {?}
     */
    NgxsOnChanges.prototype.ngxsOnChanges = function (change) { };
}
/**
 * After bootstrap interface
 * @record
 */
export function NgxsAfterBootstrap() { }
if (false) {
    /**
     * @param {?=} ctx
     * @return {?}
     */
    NgxsAfterBootstrap.prototype.ngxsAfterBootstrap = function (ctx) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9zeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFNakUsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sMkRBQTJELENBQUM7O0FBR3JILE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBTSxrQkFBa0IsQ0FBQzs7QUFDM0UsTUFBTSxPQUFPLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFNLHFCQUFxQixDQUFDOztBQUNqRixNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQzs7QUFDOUQsTUFBTSxPQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBb0IsY0FBYyxDQUFDOztBQUNqRixNQUFNLE9BQU8sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFvQixhQUFhLENBQUM7O0FBRS9FLE1BQU0sT0FBTyxRQUFRLEdBQUcsV0FBVzs7QUFDbkMsTUFBTSxPQUFPLGdCQUFnQixHQUFHLG1CQUFtQjs7QUFDbkQsTUFBTSxPQUFPLGlCQUFpQixHQUFHLG9CQUFvQjs7OztBQVlyRCxNQUFNLE9BQU8sVUFBVTtJQTBDckI7Ozs7Ozs7UUFUQSxrQkFBYSxHQUFnQixFQUFFLENBQUM7Ozs7UUFJaEMsb0JBQWUsR0FBMEI7WUFDdkMsb0JBQW9CLEVBQUUsSUFBSTs7WUFDMUIsY0FBYyxFQUFFLElBQUksQ0FBQyxpREFBaUQ7U0FDdkUsQ0FBQztRQUdBLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsMkJBQTJCLEVBQUUsS0FBSztTQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHdDQUF3QyxDQUFDO0lBQ3BFLENBQUM7OztZQWhERixVQUFVOzs7Ozs7Ozs7OztJQU9ULHFDQUF5Qjs7SUFDekIsbUNBT0U7Ozs7Ozs7Ozs7Ozs7SUFZRix1Q0FBK0M7Ozs7Ozs7O0lBTy9DLG1DQUFnQzs7Ozs7SUFJaEMscUNBR0U7Ozs7Ozs7QUFlSixrQ0FvQkM7Ozs7OztJQWhCQyxrREFBYzs7Ozs7O0lBS2QscURBQXVDOzs7Ozs7SUFLdkMsdURBQStCOzs7Ozs7SUFLL0IseURBQWlEOzs7Ozs7QUFRbkQsZ0NBS0M7Ozs7Ozs7OztJQURDLGlFQUE2RDs7Ozs7OztBQU0vRCxrQ0FlQzs7Ozs7O0lBWEMsNEJBQTZCOzs7OztJQUs3QixnQ0FBYTs7Ozs7SUFLYixnQ0FBd0I7Ozs7Ozs7QUFPMUIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBQzNCLFlBQ2tCLGFBQWdCLEVBQ2hCLFlBQWUsRUFDZixXQUFvQjtRQUZwQixrQkFBYSxHQUFiLGFBQWEsQ0FBRztRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBRztRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBQ25DLENBQUM7Q0FDTDs7O0lBSkcseUNBQWdDOztJQUNoQyx3Q0FBK0I7O0lBQy9CLHVDQUFvQzs7Ozs7O0FBT3hDLGdDQUVDOzs7Ozs7SUFEQyxxREFBZ0Q7Ozs7OztBQU1sRCxtQ0FFQzs7Ozs7O0lBREMsOERBQThDOzs7Ozs7QUFNaEQsd0NBRUM7Ozs7OztJQURDLHFFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBsYWluT2JqZWN0LCBTdGF0ZUNsYXNzIH0gZnJvbSAnQG5neHMvc3RvcmUvaW50ZXJuYWxzJztcbmltcG9ydCB7IFNoYXJlZFNlbGVjdG9yT3B0aW9ucywgQ2FsbGJhY2sgfSBmcm9tICcuL2ludGVybmFsL2ludGVybmFscyc7XG5pbXBvcnQgeyBOZ3hzRXhlY3V0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL2V4ZWN1dGlvbi9zeW1ib2xzJztcbmltcG9ydCB7IERpc3BhdGNoT3V0c2lkZVpvbmVOZ3hzRXhlY3V0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL2V4ZWN1dGlvbi9kaXNwYXRjaC1vdXRzaWRlLXpvbmUtbmd4cy1leGVjdXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHsgU3RhdGVUb2tlbiB9IGZyb20gJy4vc3RhdGUtdG9rZW4vc3RhdGUtdG9rZW4nO1xuXG5leHBvcnQgY29uc3QgUk9PVF9TVEFURV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdST09UX1NUQVRFX1RPS0VOJyk7XG5leHBvcnQgY29uc3QgRkVBVFVSRV9TVEFURV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdGRUFUVVJFX1NUQVRFX1RPS0VOJyk7XG5leHBvcnQgY29uc3QgTkdYU19QTFVHSU5TID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hTX1BMVUdJTlMnKTtcbmV4cG9ydCBjb25zdCBOR19URVNUX01PREUgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q2FsbGJhY2s8Ym9vbGVhbj4+KCdOR19URVNUX01PREUnKTtcbmV4cG9ydCBjb25zdCBOR19ERVZfTU9ERSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDYWxsYmFjazxib29sZWFuPj4oJ05HX0RFVl9NT0RFJyk7XG5cbmV4cG9ydCBjb25zdCBNRVRBX0tFWSA9ICdOR1hTX01FVEEnO1xuZXhwb3J0IGNvbnN0IE1FVEFfT1BUSU9OU19LRVkgPSAnTkdYU19PUFRJT05TX01FVEEnO1xuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX01FVEFfS0VZID0gJ05HWFNfU0VMRUNUT1JfTUVUQSc7XG5cbmV4cG9ydCB0eXBlIE5neHNMaWZlQ3ljbGUgPSBQYXJ0aWFsPE5neHNPbkNoYW5nZXM+ICZcbiAgUGFydGlhbDxOZ3hzT25Jbml0PiAmXG4gIFBhcnRpYWw8Tmd4c0FmdGVyQm9vdHN0cmFwPjtcblxuZXhwb3J0IHR5cGUgTmd4c1BsdWdpbkZuID0gKHN0YXRlOiBhbnksIG11dGF0aW9uOiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pID0+IGFueTtcblxuLyoqXG4gKiBUaGUgTkdYUyBjb25maWcgc2V0dGluZ3MuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzQ29uZmlnIHtcbiAgLyoqXG4gICAqIFJ1biBpbiBkZXZlbG9wbWVudCBtb2RlLiBUaGlzIHdpbGwgYWRkIGFkZGl0aW9uYWwgZGVidWdnaW5nIGZlYXR1cmVzOlxuICAgKiAtIE9iamVjdC5mcmVlemUgb24gdGhlIHN0YXRlIGFuZCBhY3Rpb25zIHRvIGd1YXJhbnRlZSBpbW11dGFiaWxpdHlcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZGV2ZWxvcG1lbnRNb2RlOiBib29sZWFuO1xuICBjb21wYXRpYmlsaXR5OiB7XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBhIHN0cmljdCBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgICAgKiBUaGlzIHdpbGwgY2lyY3VtdmVudCBzb21lIG9wdGltaXNhdGlvbnMgdGhhdCB2aW9sYXRlIGEgc3RyaWN0IENTUCB0aHJvdWdoIHRoZSB1c2Ugb2YgYG5ldyBGdW5jdGlvbiguLi4pYC5cbiAgICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAgICovXG4gICAgc3RyaWN0Q29udGVudFNlY3VyaXR5UG9saWN5OiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgZXhlY3V0aW9uIGNvbnRleHQgdG8gcGVyZm9ybSBhc3luYyBvcGVyYXRpb25zIGluc2lkZS4gQW4gaW1wbGVtZW50YXRpb24gY2FuIGJlXG4gICAqIHByb3ZpZGVkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJlaGF2aW91ciB3aGVyZSB0aGUgYXN5bmMgb3BlcmF0aW9ucyBhcmUgcnVuXG4gICAqIG91dHNpZGUgQW5ndWxhcidzIHpvbmUgYnV0IGFsbCBvYnNlcnZhYmxlIGJlaGF2aW91cnMgb2YgTkdYUyBhcmUgcnVuIGJhY2sgaW5zaWRlIEFuZ3VsYXIncyB6b25lLlxuICAgKiBUaGVzZSBvYnNlcnZhYmxlIGJlaGF2aW91cnMgYXJlIGZyb206XG4gICAqICAgYEBTZWxlY3QoLi4uKWAsIGBzdG9yZS5zZWxlY3QoLi4uKWAsIGBhY3Rpb25zLnN1YnNjcmliZSguLi4pYCBvciBgc3RvcmUuZGlzcGF0Y2goLi4uKS5zdWJzY3JpYmUoLi4uKWBcbiAgICogRXZlcnkgYHpvbmUucnVuYCBjYXVzZXMgQW5ndWxhciB0byBydW4gY2hhbmdlIGRldGVjdGlvbiBvbiB0aGUgd2hvbGUgdHJlZSAoYGFwcC50aWNrKClgKSBzbyBvZiB5b3VyXG4gICAqIGFwcGxpY2F0aW9uIGRvZXNuJ3QgcmVseSBvbiB6b25lLmpzIHJ1bm5pbmcgY2hhbmdlIGRldGVjdGlvbiB0aGVuIHlvdSBjYW4gc3dpdGNoIHRvIHRoZVxuICAgKiBgTm9vcE5neHNFeGVjdXRpb25TdHJhdGVneWAgdGhhdCBkb2Vzbid0IGludGVyYWN0IHdpdGggem9uZXMuXG4gICAqIChkZWZhdWx0OiBudWxsKVxuICAgKi9cbiAgZXhlY3V0aW9uU3RyYXRlZ3k6IFR5cGU8Tmd4c0V4ZWN1dGlvblN0cmF0ZWd5PjtcbiAgLyoqXG4gICAqIERlZmluaW5nIHRoZSBkZWZhdWx0IHN0YXRlIGJlZm9yZSBtb2R1bGUgaW5pdGlhbGl6YXRpb25cbiAgICogVGhpcyBpcyBjb252ZW5pZW50IGlmIHdlIG5lZWQgdG8gY3JlYXRlIGEgZGVmaW5lIG91ciBvd24gc2V0IG9mIHN0YXRlcy5cbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIHY0XG4gICAqIChkZWZhdWx0OiB7fSlcbiAgICovXG4gIGRlZmF1bHRzU3RhdGU6IFBsYWluT2JqZWN0ID0ge307XG4gIC8qKlxuICAgKiBEZWZpbmluZyBzaGFyZWQgc2VsZWN0b3Igb3B0aW9uc1xuICAgKi9cbiAgc2VsZWN0b3JPcHRpb25zOiBTaGFyZWRTZWxlY3Rvck9wdGlvbnMgPSB7XG4gICAgaW5qZWN0Q29udGFpbmVyU3RhdGU6IHRydWUsIC8vIFRPRE86IGRlZmF1bHQgaXMgdHJ1ZSBpbiB2Mywgd2lsbCBjaGFuZ2UgaW4gdjRcbiAgICBzdXBwcmVzc0Vycm9yczogdHJ1ZSAvLyBUT0RPOiBkZWZhdWx0IGlzIHRydWUgaW4gdjMsIHdpbGwgY2hhbmdlIGluIHY0XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb21wYXRpYmlsaXR5ID0ge1xuICAgICAgc3RyaWN0Q29udGVudFNlY3VyaXR5UG9saWN5OiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5leGVjdXRpb25TdHJhdGVneSA9IERpc3BhdGNoT3V0c2lkZVpvbmVOZ3hzRXhlY3V0aW9uU3RyYXRlZ3k7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3RhdGVPcGVyYXRvcjxUPiA9IChleGlzdGluZzogUmVhZG9ubHk8VD4pID0+IFQ7XG5cbi8qKlxuICogU3RhdGUgY29udGV4dCBwcm92aWRlZCB0byB0aGUgYWN0aW9ucyBpbiB0aGUgc3RhdGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVDb250ZXh0PFQ+IHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICovXG4gIGdldFN0YXRlKCk6IFQ7XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzdGF0ZSB0byBhIG5ldyB2YWx1ZS5cbiAgICovXG4gIHNldFN0YXRlKHZhbDogVCB8IFN0YXRlT3BlcmF0b3I8VD4pOiBUO1xuXG4gIC8qKlxuICAgKiBQYXRjaCB0aGUgZXhpc3Rpbmcgc3RhdGUgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gICAqL1xuICBwYXRjaFN0YXRlKHZhbDogUGFydGlhbDxUPik6IFQ7XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGEgbmV3IGFjdGlvbiBhbmQgcmV0dXJuIHRoZSBkaXNwYXRjaGVkIG9ic2VydmFibGUuXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb25zOiBhbnkgfCBhbnlbXSk6IE9ic2VydmFibGU8dm9pZD47XG59XG5cbmV4cG9ydCB0eXBlIE5neHNOZXh0UGx1Z2luRm4gPSAoc3RhdGU6IGFueSwgbXV0YXRpb246IGFueSkgPT4gYW55O1xuXG4vKipcbiAqIFBsdWdpbiBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hzUGx1Z2luIHtcbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgc3RhdGUvYWN0aW9uIGJlZm9yZSBpdHMgc3VibWl0dGVkIHRvIHRoZSBzdGF0ZSBoYW5kbGVycy5cbiAgICovXG4gIGhhbmRsZShzdGF0ZTogYW55LCBhY3Rpb246IGFueSwgbmV4dDogTmd4c05leHRQbHVnaW5Gbik6IGFueTtcbn1cblxuLyoqXG4gKiBPcHRpb25zIHRoYXQgY2FuIGJlIHByb3ZpZGVkIHRvIHRoZSBzdG9yZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdG9yZU9wdGlvbnM8VD4ge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgc3RhdGUuIFJlcXVpcmVkLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nIHwgU3RhdGVUb2tlbjxUPjtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBzdGF0ZS4gSWYgbm90IHByb3ZpZGVkLCB1c2VzIGVtcHR5IG9iamVjdC5cbiAgICovXG4gIGRlZmF1bHRzPzogVDtcblxuICAvKipcbiAgICogU3ViIHN0YXRlcyBmb3IgdGhlIGdpdmVuIHN0YXRlLlxuICAgKi9cbiAgY2hpbGRyZW4/OiBTdGF0ZUNsYXNzW107XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJhc2ljIGNoYW5nZSBmcm9tIGEgcHJldmlvdXMgdG8gYSBuZXcgdmFsdWUgZm9yIGEgc2luZ2xlIHN0YXRlIGluc3RhbmNlLlxuICogUGFzc2VkIGFzIGEgdmFsdWUgaW4gYSBOZ3hzU2ltcGxlQ2hhbmdlcyBvYmplY3QgdG8gdGhlIG5neHNPbkNoYW5nZXMgaG9vay5cbiAqL1xuZXhwb3J0IGNsYXNzIE5neHNTaW1wbGVDaGFuZ2U8VCA9IGFueT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJldmlvdXNWYWx1ZTogVCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgY3VycmVudFZhbHVlOiBULFxuICAgIHB1YmxpYyByZWFkb25seSBmaXJzdENoYW5nZTogYm9vbGVhblxuICApIHt9XG59XG5cbi8qKlxuICogT24gaW5pdCBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hzT25Jbml0IHtcbiAgbmd4c09uSW5pdChjdHg/OiBTdGF0ZUNvbnRleHQ8YW55Pik6IHZvaWQgfCBhbnk7XG59XG5cbi8qKlxuICogT24gY2hhbmdlIGludGVyZmFjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neHNPbkNoYW5nZXMge1xuICBuZ3hzT25DaGFuZ2VzKGNoYW5nZTogTmd4c1NpbXBsZUNoYW5nZSk6IHZvaWQ7XG59XG5cbi8qKlxuICogQWZ0ZXIgYm9vdHN0cmFwIGludGVyZmFjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neHNBZnRlckJvb3RzdHJhcCB7XG4gIG5neHNBZnRlckJvb3RzdHJhcChjdHg/OiBTdGF0ZUNvbnRleHQ8YW55Pik6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIE5neHNNb2R1bGVPcHRpb25zID0gUGFydGlhbDxOZ3hzQ29uZmlnPjtcbiJdfQ==
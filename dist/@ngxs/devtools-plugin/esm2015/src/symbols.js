/**
 * @fileoverview added by tsickle
 * Generated from: src/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * Interface for the redux-devtools-extension API.
 * @record
 */
export function NgxsDevtoolsExtension() { }
if (false) {
    /**
     * @param {?} state
     * @return {?}
     */
    NgxsDevtoolsExtension.prototype.init = function (state) { };
    /**
     * @param {?} action
     * @param {?=} state
     * @return {?}
     */
    NgxsDevtoolsExtension.prototype.send = function (action, state) { };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxsDevtoolsExtension.prototype.subscribe = function (fn) { };
}
/**
 * @record
 */
export function NgxsDevtoolsAction() { }
if (false) {
    /** @type {?} */
    NgxsDevtoolsAction.prototype.type;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.payload;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.state;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.id;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.source;
}
/**
 * @record
 */
export function NgxsDevtoolsOptions() { }
if (false) {
    /**
     * The name of the extension
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.name;
    /**
     * Whether the dev tools is enabled or note. Useful for setting during production.
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.disabled;
    /**
     * Max number of entiries to keep.
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.maxAge;
    /**
     * Reformat actions before sending to dev tools
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.actionSanitizer;
    /**
     * Reformat state before sending to devtools
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.stateSanitizer;
}
/** @type {?} */
export const NGXS_DEVTOOLS_OPTIONS = new InjectionToken('NGXS_DEVTOOLS_OPTIONS');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2RldnRvb2xzLXBsdWdpbi9zcmMvc3ltYm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTS9DLDJDQUlDOzs7Ozs7SUFIQyw0REFBdUI7Ozs7OztJQUN2QixvRUFBcUM7Ozs7O0lBQ3JDLDhEQUFtRTs7Ozs7QUFHckUsd0NBTUM7OztJQUxDLGtDQUFhOztJQUNiLHFDQUFhOztJQUNiLG1DQUFXOztJQUNYLGdDQUFXOztJQUNYLG9DQUFlOzs7OztBQUdqQix5Q0F5QkM7Ozs7OztJQXJCQyxtQ0FBYzs7Ozs7SUFLZCx1Q0FBbUI7Ozs7O0lBS25CLHFDQUFnQjs7Ozs7SUFLaEIsOENBQXdDOzs7OztJQUt4Qyw2Q0FBc0M7OztBQUd4QyxNQUFNLE9BQU8scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQUMsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uIEFQSS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hzRGV2dG9vbHNFeHRlbnNpb24ge1xuICBpbml0KHN0YXRlOiBhbnkpOiB2b2lkO1xuICBzZW5kKGFjdGlvbjogYW55LCBzdGF0ZT86IGFueSk6IHZvaWQ7XG4gIHN1YnNjcmliZShmbjogKG1lc3NhZ2U6IE5neHNEZXZ0b29sc0FjdGlvbikgPT4gdm9pZCk6IFN1YnNjcmlwdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hzRGV2dG9vbHNBY3Rpb24ge1xuICB0eXBlOiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbiAgc3RhdGU6IGFueTtcbiAgaWQ6IG51bWJlcjtcbiAgc291cmNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4c0RldnRvb2xzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkZXYgdG9vbHMgaXMgZW5hYmxlZCBvciBub3RlLiBVc2VmdWwgZm9yIHNldHRpbmcgZHVyaW5nIHByb2R1Y3Rpb24uXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1heCBudW1iZXIgb2YgZW50aXJpZXMgdG8ga2VlcC5cbiAgICovXG4gIG1heEFnZT86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVmb3JtYXQgYWN0aW9ucyBiZWZvcmUgc2VuZGluZyB0byBkZXYgdG9vbHNcbiAgICovXG4gIGFjdGlvblNhbml0aXplcj86IChhY3Rpb246IGFueSkgPT4gdm9pZDtcblxuICAvKipcbiAgICogUmVmb3JtYXQgc3RhdGUgYmVmb3JlIHNlbmRpbmcgdG8gZGV2dG9vbHNcbiAgICovXG4gIHN0YXRlU2FuaXRpemVyPzogKHN0YXRlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOR1hTX0RFVlRPT0xTX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05HWFNfREVWVE9PTFNfT1BUSU9OUycpO1xuIl19
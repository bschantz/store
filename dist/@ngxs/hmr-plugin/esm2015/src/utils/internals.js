/**
 * @fileoverview added by tsickle
 * Generated from: src/utils/internals.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
export function setHmrReloadedTo(value) {
    if (window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */]) {
        window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */].hmrReloaded = value;
    }
}
/**
 * @return {?}
 */
export function markApplicationAsHmrReloaded() {
    window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */] = window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */] || {
        hmrReloaded: false
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaG1yLXBsdWdpbi9zcmMvdXRpbHMvaW50ZXJuYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFjO0lBQzdDLElBQUksTUFBTSwwQ0FBbUIsRUFBRTtRQUM3QixNQUFNLDBDQUFtQixDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDL0M7QUFDSCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLDRCQUE0QjtJQUMxQyxNQUFNLDBDQUFtQixHQUFHLE1BQU0sMENBQW1CLElBQUk7UUFDdkQsV0FBVyxFQUFFLEtBQUs7S0FDbkIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIbXJSdW50aW1lIH0gZnJvbSAnLi4vc3ltYm9scyc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRIbXJSZWxvYWRlZFRvKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gIGlmICh3aW5kb3dbSG1yUnVudGltZS5TdGF0dXNdKSB7XG4gICAgd2luZG93W0htclJ1bnRpbWUuU3RhdHVzXS5obXJSZWxvYWRlZCA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXBwbGljYXRpb25Bc0htclJlbG9hZGVkKCk6IHZvaWQge1xuICB3aW5kb3dbSG1yUnVudGltZS5TdGF0dXNdID0gd2luZG93W0htclJ1bnRpbWUuU3RhdHVzXSB8fCB7XG4gICAgaG1yUmVsb2FkZWQ6IGZhbHNlXG4gIH07XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * Generated from: src/host-environment/host-environment.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { NG_DEV_MODE, NG_TEST_MODE } from '../symbols';
export class HostEnvironment {
    /**
     * @param {?} isDevMode
     * @param {?} isTestMode
     */
    constructor(isDevMode, isTestMode) {
        this.isDevMode = isDevMode;
        this.isTestMode = isTestMode;
    }
}
HostEnvironment.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HostEnvironment.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NG_DEV_MODE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NG_TEST_MODE,] }] }
];
if (false) {
    /** @type {?} */
    HostEnvironment.prototype.isDevMode;
    /** @type {?} */
    HostEnvironment.prototype.isTestMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1lbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9ob3N0LWVudmlyb25tZW50L2hvc3QtZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUl2RCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFDMUIsWUFDOEIsU0FBNEIsRUFDM0IsVUFBNkI7UUFEOUIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFDekQsQ0FBQzs7O1lBTEwsVUFBVTs7Ozs0Q0FHTixNQUFNLFNBQUMsV0FBVzs0Q0FDbEIsTUFBTSxTQUFDLFlBQVk7Ozs7SUFEcEIsb0NBQXdEOztJQUN4RCxxQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX0RFVl9NT0RFLCBOR19URVNUX01PREUgfSBmcm9tICcuLi9zeW1ib2xzJztcbmltcG9ydCB7IENhbGxiYWNrIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhvc3RFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTkdfREVWX01PREUpIHB1YmxpYyBpc0Rldk1vZGU6IENhbGxiYWNrPGJvb2xlYW4+LFxuICAgIEBJbmplY3QoTkdfVEVTVF9NT0RFKSBwdWJsaWMgaXNUZXN0TW9kZTogQ2FsbGJhY2s8Ym9vbGVhbj5cbiAgKSB7fVxufVxuIl19
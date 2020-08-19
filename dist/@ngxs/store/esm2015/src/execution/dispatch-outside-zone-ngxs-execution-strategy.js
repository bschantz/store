/**
 * @fileoverview added by tsickle
 * Generated from: src/execution/dispatch-outside-zone-ngxs-execution-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../configs/messages.config';
export class DispatchOutsideZoneNgxsExecutionStrategy {
    /**
     * @param {?} _ngZone
     * @param {?} _platformId
     */
    constructor(_ngZone, _platformId) {
        this._ngZone = _ngZone;
        this._platformId = _platformId;
        this.verifyZoneIsNotNooped(this._ngZone);
    }
    /**
     * @template T
     * @param {?} func
     * @return {?}
     */
    enter(func) {
        if (isPlatformServer(this._platformId)) {
            return this.runInsideAngular(func);
        }
        return this.runOutsideAngular(func);
    }
    /**
     * @template T
     * @param {?} func
     * @return {?}
     */
    leave(func) {
        return this.runInsideAngular(func);
    }
    /**
     * @private
     * @template T
     * @param {?} func
     * @return {?}
     */
    runInsideAngular(func) {
        if (NgZone.isInAngularZone()) {
            return func();
        }
        return this._ngZone.run(func);
    }
    /**
     * @private
     * @template T
     * @param {?} func
     * @return {?}
     */
    runOutsideAngular(func) {
        if (NgZone.isInAngularZone()) {
            return this._ngZone.runOutsideAngular(func);
        }
        return func();
    }
    /**
     * @private
     * @param {?} ngZone
     * @return {?}
     */
    verifyZoneIsNotNooped(ngZone) {
        // `NoopNgZone` is not exposed publicly as it doesn't expect
        // to be used outside of the core Angular code, thus we just have
        // to check if the zone doesn't extend or instanceof `NgZone`
        if (ngZone instanceof NgZone) {
            return;
        }
        console.warn(CONFIG_MESSAGES[VALIDATION_CODE.ZONE_WARNING]());
    }
}
DispatchOutsideZoneNgxsExecutionStrategy.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DispatchOutsideZoneNgxsExecutionStrategy.ctorParameters = () => [
    { type: NgZone },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DispatchOutsideZoneNgxsExecutionStrategy.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    DispatchOutsideZoneNgxsExecutionStrategy.prototype._platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtb3V0c2lkZS16b25lLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL2V4ZWN1dGlvbi9kaXNwYXRjaC1vdXRzaWRlLXpvbmUtbmd4cy1leGVjdXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHOUUsTUFBTSxPQUFPLHdDQUF3Qzs7Ozs7SUFDbkQsWUFBb0IsT0FBZSxFQUErQixXQUFtQjtRQUFqRSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQStCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25GLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsS0FBSyxDQUFJLElBQWE7UUFDcEIsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUksSUFBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUksSUFBYTtRQUN2QyxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUM1QixPQUFPLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBSSxJQUFhO1FBQ3hDLElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsTUFBYztRQUMxQyw0REFBNEQ7UUFDNUQsaUVBQWlFO1FBQ2pFLDZEQUE2RDtRQUM3RCxJQUFJLE1BQU0sWUFBWSxNQUFNLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUF4Q0YsVUFBVTs7OztZQU5rQixNQUFNO3lDQVFLLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBQTVDLDJEQUF1Qjs7Ozs7SUFBRSwrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ3hzRXhlY3V0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgQ09ORklHX01FU1NBR0VTLCBWQUxJREFUSU9OX0NPREUgfSBmcm9tICcuLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaE91dHNpZGVab25lTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IGltcGxlbWVudHMgTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgX3BsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMudmVyaWZ5Wm9uZUlzTm90Tm9vcGVkKHRoaXMuX25nWm9uZSk7XG4gIH1cblxuICBlbnRlcjxUPihmdW5jOiAoKSA9PiBUKTogVCB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5fcGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bkluc2lkZUFuZ3VsYXIoZnVuYyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJ1bk91dHNpZGVBbmd1bGFyKGZ1bmMpO1xuICB9XG5cbiAgbGVhdmU8VD4oZnVuYzogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiB0aGlzLnJ1bkluc2lkZUFuZ3VsYXIoZnVuYyk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkluc2lkZUFuZ3VsYXI8VD4oZnVuYzogKCkgPT4gVCk6IFQge1xuICAgIGlmIChOZ1pvbmUuaXNJbkFuZ3VsYXJab25lKCkpIHtcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUucnVuKGZ1bmMpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5PdXRzaWRlQW5ndWxhcjxUPihmdW5jOiAoKSA9PiBUKTogVCB7XG4gICAgaWYgKE5nWm9uZS5pc0luQW5ndWxhclpvbmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcihmdW5jKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdmVyaWZ5Wm9uZUlzTm90Tm9vcGVkKG5nWm9uZTogTmdab25lKTogdm9pZCB7XG4gICAgLy8gYE5vb3BOZ1pvbmVgIGlzIG5vdCBleHBvc2VkIHB1YmxpY2x5IGFzIGl0IGRvZXNuJ3QgZXhwZWN0XG4gICAgLy8gdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBjb3JlIEFuZ3VsYXIgY29kZSwgdGh1cyB3ZSBqdXN0IGhhdmVcbiAgICAvLyB0byBjaGVjayBpZiB0aGUgem9uZSBkb2Vzbid0IGV4dGVuZCBvciBpbnN0YW5jZW9mIGBOZ1pvbmVgXG4gICAgaWYgKG5nWm9uZSBpbnN0YW5jZW9mIE5nWm9uZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUud2FybihDT05GSUdfTUVTU0FHRVNbVkFMSURBVElPTl9DT0RFLlpPTkVfV0FSTklOR10oKSk7XG4gIH1cbn1cbiJdfQ==
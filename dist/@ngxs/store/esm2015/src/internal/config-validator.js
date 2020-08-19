/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/config-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
import { NgxsConfig } from '../symbols';
import { HostEnvironment } from '../host-environment/host-environment';
export class ConfigValidator {
    /**
     * @param {?} _host
     * @param {?} _config
     */
    constructor(_host, _config) {
        this._host = _host;
        this._config = _config;
    }
    /**
     * @private
     * @return {?}
     */
    get isIncorrectProduction() {
        return !this._host.isDevMode() && this._config.developmentMode;
    }
    /**
     * @private
     * @return {?}
     */
    get isIncorrectDevelopment() {
        return this._host.isDevMode() && !this._config.developmentMode;
    }
    /**
     * @return {?}
     */
    verifyDevMode() {
        if (this._host.isTestMode()) {
            return;
        }
        if (this.isIncorrectProduction) {
            console.warn(MESSAGES[CODE.INCORRECT_PRODUCTION]());
        }
        else if (this.isIncorrectDevelopment) {
            console.warn(MESSAGES[CODE.INCORRECT_DEVELOPMENT]());
        }
    }
}
ConfigValidator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigValidator.ctorParameters = () => [
    { type: HostEnvironment },
    { type: NgxsConfig }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigValidator.prototype._host;
    /**
     * @type {?}
     * @private
     */
    ConfigValidator.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9pbnRlcm5hbC9jb25maWctdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsZUFBZSxJQUFJLFFBQVEsRUFDM0IsZUFBZSxJQUFJLElBQUksRUFDeEIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUd2RSxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFDMUIsWUFBb0IsS0FBc0IsRUFBVSxPQUFtQjtRQUFuRCxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDOzs7OztJQUUzRSxJQUFZLHFCQUFxQjtRQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELElBQVksc0JBQXNCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMzQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckQ7YUFBTSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7WUF0QkYsVUFBVTs7OztZQUZGLGVBQWU7WUFEZixVQUFVOzs7Ozs7O0lBS0wsZ0NBQThCOzs7OztJQUFFLGtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQ09ORklHX01FU1NBR0VTIGFzIE1FU1NBR0VTLFxuICBWQUxJREFUSU9OX0NPREUgYXMgQ09ERVxufSBmcm9tICcuLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XG5pbXBvcnQgeyBOZ3hzQ29uZmlnIH0gZnJvbSAnLi4vc3ltYm9scyc7XG5pbXBvcnQgeyBIb3N0RW52aXJvbm1lbnQgfSBmcm9tICcuLi9ob3N0LWVudmlyb25tZW50L2hvc3QtZW52aXJvbm1lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDogSG9zdEVudmlyb25tZW50LCBwcml2YXRlIF9jb25maWc6IE5neHNDb25maWcpIHt9XG5cbiAgcHJpdmF0ZSBnZXQgaXNJbmNvcnJlY3RQcm9kdWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5faG9zdC5pc0Rldk1vZGUoKSAmJiB0aGlzLl9jb25maWcuZGV2ZWxvcG1lbnRNb2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaXNJbmNvcnJlY3REZXZlbG9wbWVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdC5pc0Rldk1vZGUoKSAmJiAhdGhpcy5fY29uZmlnLmRldmVsb3BtZW50TW9kZTtcbiAgfVxuXG4gIHB1YmxpYyB2ZXJpZnlEZXZNb2RlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9ob3N0LmlzVGVzdE1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzSW5jb3JyZWN0UHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKE1FU1NBR0VTW0NPREUuSU5DT1JSRUNUX1BST0RVQ1RJT05dKCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0luY29ycmVjdERldmVsb3BtZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oTUVTU0FHRVNbQ09ERS5JTkNPUlJFQ1RfREVWRUxPUE1FTlRdKCkpO1xuICAgIH1cbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: src/storage.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { setValue, getValue, InitState, UpdateState, actionMatcher } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { STORAGE_ENGINE, NGXS_STORAGE_PLUGIN_OPTIONS } from './symbols';
import { DEFAULT_STATE_KEY } from './internals';
export class NgxsStoragePlugin {
    /**
     * @param {?} _options
     * @param {?} _engine
     * @param {?} _platformId
     */
    constructor(_options, _engine, _platformId) {
        this._options = _options;
        this._engine = _engine;
        this._platformId = _platformId;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    handle(state, event, next) {
        if (isPlatformServer(this._platformId) && this._engine === null) {
            return next(state, event);
        }
        // We cast to `string[]` here as we're sure that this option has been
        // transformed by the `storageOptionsFactory` function that provided token
        /** @type {?} */
        const keys = (/** @type {?} */ (this._options.key));
        /** @type {?} */
        const matches = actionMatcher(event);
        /** @type {?} */
        const isInitAction = matches(InitState) || matches(UpdateState);
        /** @type {?} */
        let hasMigration = false;
        if (isInitAction) {
            for (const key of keys) {
                /** @type {?} */
                const isMaster = key === DEFAULT_STATE_KEY;
                /** @type {?} */
                let val = this._engine.getItem((/** @type {?} */ (key)));
                if (val !== 'undefined' && typeof val !== 'undefined' && val !== null) {
                    try {
                        /** @type {?} */
                        const newVal = (/** @type {?} */ (this._options.deserialize))(val);
                        val = (/** @type {?} */ (this._options.afterDeserialize))(newVal, key);
                    }
                    catch (e) {
                        console.error('Error ocurred while deserializing the store value, falling back to empty object.');
                        val = {};
                    }
                    if (this._options.migrations) {
                        this._options.migrations.forEach((/**
                         * @param {?} strategy
                         * @return {?}
                         */
                        strategy => {
                            /** @type {?} */
                            const versionMatch = strategy.version === getValue(val, strategy.versionKey || 'version');
                            /** @type {?} */
                            const keyMatch = (!strategy.key && isMaster) || strategy.key === key;
                            if (versionMatch && keyMatch) {
                                val = strategy.migrate(val);
                                hasMigration = true;
                            }
                        }));
                    }
                    if (!isMaster) {
                        state = setValue(state, (/** @type {?} */ (key)), val);
                    }
                    else {
                        state = Object.assign(Object.assign({}, state), val);
                    }
                }
            }
        }
        return next(state, event).pipe(tap((/**
         * @param {?} nextState
         * @return {?}
         */
        nextState => {
            if (!isInitAction || (isInitAction && hasMigration)) {
                for (const key of keys) {
                    /** @type {?} */
                    let val = nextState;
                    if (key !== DEFAULT_STATE_KEY) {
                        val = getValue(nextState, (/** @type {?} */ (key)));
                    }
                    try {
                        /** @type {?} */
                        const newVal = (/** @type {?} */ (this._options.beforeSerialize))(val, key);
                        this._engine.setItem((/** @type {?} */ (key)), (/** @type {?} */ (this._options.serialize))(newVal));
                    }
                    catch (e) {
                        console.error('Error ocurred while serializing the store value, value not updated.');
                    }
                }
            }
        })));
    }
}
NgxsStoragePlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsStoragePlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_STORAGE_PLUGIN_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STORAGE_ENGINE,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsStoragePlugin.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxsStoragePlugin.prototype._engine;
    /**
     * @type {?}
     * @private
     */
    NgxsStoragePlugin.prototype._platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yYWdlLXBsdWdpbi9zcmMvc3RvcmFnZS5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxhQUFhLEVBRWQsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFHTCxjQUFjLEVBQ2QsMkJBQTJCLEVBQzVCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdoRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFDNUIsWUFDK0MsUUFBa0MsRUFDL0MsT0FBc0IsRUFDekIsV0FBbUI7UUFGSCxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUMvQyxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQy9DLENBQUM7Ozs7Ozs7SUFFSixNQUFNLENBQUMsS0FBVSxFQUFFLEtBQVUsRUFBRSxJQUFzQjtRQUNuRCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0I7Ozs7Y0FJSyxJQUFJLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQVk7O2NBQ3BDLE9BQU8sR0FBRyxhQUFhLENB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QUNGO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBL0VGLFVBQVU7Ozs7NENBR04sTUFBTSxTQUFDLDJCQUEyQjs0Q0FDbEMsTUFBTSxTQUFDLGNBQWM7eUNBQ3JCLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBRm5CLHFDQUErRTs7Ozs7SUFDL0Usb0NBQXNEOzs7OztJQUN0RCx3Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE5neHNQbHVnaW4sXG4gIHNldFZhbHVlLFxuICBnZXRWYWx1ZSxcbiAgSW5pdFN0YXRlLFxuICBVcGRhdGVTdGF0ZSxcbiAgYWN0aW9uTWF0Y2hlcixcbiAgTmd4c05leHRQbHVnaW5GblxufSBmcm9tICdAbmd4cy9zdG9yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFN0b3JhZ2VFbmdpbmUsXG4gIE5neHNTdG9yYWdlUGx1Z2luT3B0aW9ucyxcbiAgU1RPUkFHRV9FTkdJTkUsXG4gIE5HWFNfU1RPUkFHRV9QTFVHSU5fT1BUSU9OU1xufSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9TVEFURV9LRVkgfSBmcm9tICcuL2ludGVybmFscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzU3RvcmFnZVBsdWdpbiBpbXBsZW1lbnRzIE5neHNQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE5HWFNfU1RPUkFHRV9QTFVHSU5fT1BUSU9OUykgcHJpdmF0ZSBfb3B0aW9uczogTmd4c1N0b3JhZ2VQbHVnaW5PcHRpb25zLFxuICAgIEBJbmplY3QoU1RPUkFHRV9FTkdJTkUpIHByaXZhdGUgX2VuZ2luZTogU3RvcmFnZUVuZ2luZSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIF9wbGF0Zm9ybUlkOiBzdHJpbmdcbiAgKSB7fVxuXG4gIGhhbmRsZShzdGF0ZTogYW55LCBldmVudDogYW55LCBuZXh0OiBOZ3hzTmV4dFBsdWdpbkZuKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5fcGxhdGZvcm1JZCkgJiYgdGhpcy5fZW5naW5lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpO1xuICAgIH1cblxuICAgIC8vIFdlIGNhc3QgdG8gYHN0cmluZ1tdYCBoZXJlIGFzIHdlJ3JlIHN1cmUgdGhhdCB0aGlzIG9wdGlvbiBoYXMgYmVlblxuICAgIC8vIHRyYW5zZm9ybWVkIGJ5IHRoZSBgc3RvcmFnZU9wdGlvbnNGYWN0b3J5YCBmdW5jdGlvbiB0aGF0IHByb3ZpZGVkIHRva2VuXG4gICAgY29uc3Qga2V5cyA9IHRoaXMuX29wdGlvbnMua2V5IGFzIHN0cmluZ1tdO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBhY3Rpb25NYXRjaGVyKGV2ZW50KTtcbiAgICBjb25zdCBpc0luaXRBY3Rpb24gPSBtYXRjaGVzKEluaXRTdGF0ZSkgfHwgbWF0Y2hlcyhVcGRhdGVTdGF0ZSk7XG4gICAgbGV0IGhhc01pZ3JhdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGlzSW5pdEFjdGlvbikge1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBjb25zdCBpc01hc3RlciA9IGtleSA9PT0gREVGQVVMVF9TVEFURV9LRVk7XG4gICAgICAgIGxldCB2YWw6IGFueSA9IHRoaXMuX2VuZ2luZS5nZXRJdGVtKGtleSEpO1xuXG4gICAgICAgIGlmICh2YWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9vcHRpb25zLmRlc2VyaWFsaXplISh2YWwpO1xuICAgICAgICAgICAgdmFsID0gdGhpcy5fb3B0aW9ucy5hZnRlckRlc2VyaWFsaXplIShuZXdWYWwsIGtleSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ0Vycm9yIG9jdXJyZWQgd2hpbGUgZGVzZXJpYWxpemluZyB0aGUgc3RvcmUgdmFsdWUsIGZhbGxpbmcgYmFjayB0byBlbXB0eSBvYmplY3QuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhbCA9IHt9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm1pZ3JhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMubWlncmF0aW9ucy5mb3JFYWNoKHN0cmF0ZWd5ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbk1hdGNoID1cbiAgICAgICAgICAgICAgICBzdHJhdGVneS52ZXJzaW9uID09PSBnZXRWYWx1ZSh2YWwsIHN0cmF0ZWd5LnZlcnNpb25LZXkgfHwgJ3ZlcnNpb24nKTtcbiAgICAgICAgICAgICAgY29uc3Qga2V5TWF0Y2ggPSAoIXN0cmF0ZWd5LmtleSAmJiBpc01hc3RlcikgfHwgc3RyYXRlZ3kua2V5ID09PSBrZXk7XG4gICAgICAgICAgICAgIGlmICh2ZXJzaW9uTWF0Y2ggJiYga2V5TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBzdHJhdGVneS5taWdyYXRlKHZhbCk7XG4gICAgICAgICAgICAgICAgaGFzTWlncmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFpc01hc3Rlcikge1xuICAgICAgICAgICAgc3RhdGUgPSBzZXRWYWx1ZShzdGF0ZSwga2V5ISwgdmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi52YWwgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpLnBpcGUoXG4gICAgICB0YXAobmV4dFN0YXRlID0+IHtcbiAgICAgICAgaWYgKCFpc0luaXRBY3Rpb24gfHwgKGlzSW5pdEFjdGlvbiAmJiBoYXNNaWdyYXRpb24pKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgbGV0IHZhbCA9IG5leHRTdGF0ZTtcblxuICAgICAgICAgICAgaWYgKGtleSAhPT0gREVGQVVMVF9TVEFURV9LRVkpIHtcbiAgICAgICAgICAgICAgdmFsID0gZ2V0VmFsdWUobmV4dFN0YXRlLCBrZXkhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fb3B0aW9ucy5iZWZvcmVTZXJpYWxpemUhKHZhbCwga2V5KTtcbiAgICAgICAgICAgICAgdGhpcy5fZW5naW5lLnNldEl0ZW0oa2V5ISwgdGhpcy5fb3B0aW9ucy5zZXJpYWxpemUhKG5ld1ZhbCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICdFcnJvciBvY3VycmVkIHdoaWxlIHNlcmlhbGl6aW5nIHRoZSBzdG9yZSB2YWx1ZSwgdmFsdWUgbm90IHVwZGF0ZWQuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=
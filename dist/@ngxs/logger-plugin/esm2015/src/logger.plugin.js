/**
 * @fileoverview added by tsickle
 * Generated from: src/logger.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { Store } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ActionLogger } from './action-logger';
import { LogWriter } from './log-writer';
import { NGXS_LOGGER_PLUGIN_OPTIONS } from './symbols';
export class NgxsLoggerPlugin {
    /**
     * @param {?} _options
     * @param {?} _injector
     */
    constructor(_options, _injector) {
        this._options = _options;
        this._injector = _injector;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    handle(state, event, next) {
        if (this._options.disabled || !(/** @type {?} */ (this._options.filter))(event, state)) {
            return next(state, event);
        }
        this._logWriter = this._logWriter || new LogWriter(this._options);
        // Retrieve lazily to avoid cyclic dependency exception
        this._store = this._store || this._injector.get(Store);
        /** @type {?} */
        const actionLogger = new ActionLogger(event, this._store, this._logWriter);
        actionLogger.dispatched(state);
        return next(state, event).pipe(tap((/**
         * @param {?} nextState
         * @return {?}
         */
        nextState => {
            actionLogger.completed(nextState);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            actionLogger.errored(error);
            throw error;
        })));
    }
}
NgxsLoggerPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsLoggerPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_LOGGER_PLUGIN_OPTIONS,] }] },
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._store;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._logWriter;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvZ2dlci1wbHVnaW4vc3JjL2xvZ2dlci5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFnQyxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQTJCLDBCQUEwQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR2hGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBSTNCLFlBQzhDLFFBQWlDLEVBQ3JFLFNBQW1CO1FBRGlCLGFBQVEsR0FBUixRQUFRLENBQXlCO1FBQ3JFLGNBQVMsR0FBVCxTQUFTLENBQVU7SUFDMUIsQ0FBQzs7Ozs7OztJQUVKLE1BQU0sQ0FBQyxLQUFVLEVBQUUsS0FBVSxFQUFFLElBQXNCO1FBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNsRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQVEsS0FBSyxDQUFDLENBQUM7O2NBRXhELFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTFFLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDNUIsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixNQUFNLEtBQUssQ0FBQztRQUNkLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFoQ0YsVUFBVTs7Ozs0Q0FNTixNQUFNLFNBQUMsMEJBQTBCO1lBYlQsUUFBUTs7Ozs7OztJQVNuQyxrQ0FBc0I7Ozs7O0lBQ3RCLHNDQUE4Qjs7Ozs7SUFHNUIsb0NBQTZFOzs7OztJQUM3RSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hzTmV4dFBsdWdpbkZuLCBOZ3hzUGx1Z2luLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGlvbkxvZ2dlciB9IGZyb20gJy4vYWN0aW9uLWxvZ2dlcic7XG5pbXBvcnQgeyBMb2dXcml0ZXIgfSBmcm9tICcuL2xvZy13cml0ZXInO1xuaW1wb3J0IHsgTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMsIE5HWFNfTE9HR0VSX1BMVUdJTl9PUFRJT05TIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neHNMb2dnZXJQbHVnaW4gaW1wbGVtZW50cyBOZ3hzUGx1Z2luIHtcbiAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlO1xuICBwcml2YXRlIF9sb2dXcml0ZXI6IExvZ1dyaXRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE5HWFNfTE9HR0VSX1BMVUdJTl9PUFRJT05TKSBwcml2YXRlIF9vcHRpb25zOiBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9ucyxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGhhbmRsZShzdGF0ZTogYW55LCBldmVudDogYW55LCBuZXh0OiBOZ3hzTmV4dFBsdWdpbkZuKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuZGlzYWJsZWQgfHwgIXRoaXMuX29wdGlvbnMuZmlsdGVyIShldmVudCwgc3RhdGUpKSB7XG4gICAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX2xvZ1dyaXRlciA9IHRoaXMuX2xvZ1dyaXRlciB8fCBuZXcgTG9nV3JpdGVyKHRoaXMuX29wdGlvbnMpO1xuICAgIC8vIFJldHJpZXZlIGxhemlseSB0byBhdm9pZCBjeWNsaWMgZGVwZW5kZW5jeSBleGNlcHRpb25cbiAgICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlIHx8IHRoaXMuX2luamVjdG9yLmdldDxTdG9yZT4oU3RvcmUpO1xuXG4gICAgY29uc3QgYWN0aW9uTG9nZ2VyID0gbmV3IEFjdGlvbkxvZ2dlcihldmVudCwgdGhpcy5fc3RvcmUsIHRoaXMuX2xvZ1dyaXRlcik7XG5cbiAgICBhY3Rpb25Mb2dnZXIuZGlzcGF0Y2hlZChzdGF0ZSk7XG5cbiAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpLnBpcGUoXG4gICAgICB0YXAobmV4dFN0YXRlID0+IHtcbiAgICAgICAgYWN0aW9uTG9nZ2VyLmNvbXBsZXRlZChuZXh0U3RhdGUpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgYWN0aW9uTG9nZ2VyLmVycm9yZWQoZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19
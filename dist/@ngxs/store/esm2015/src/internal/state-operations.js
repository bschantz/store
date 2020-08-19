/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/state-operations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InternalDispatcher } from '../internal/dispatcher';
import { StateStream } from './state-stream';
import { NgxsConfig } from '../symbols';
import { deepFreeze } from '../utils/freeze';
import { ConfigValidator } from '../internal/config-validator';
/**
 * State Context factory class
 * @ignore
 */
export class InternalStateOperations {
    /**
     * @param {?} _stateStream
     * @param {?} _dispatcher
     * @param {?} _config
     * @param {?} configValidator
     */
    constructor(_stateStream, _dispatcher, _config, configValidator) {
        this._stateStream = _stateStream;
        this._dispatcher = _dispatcher;
        this._config = _config;
        configValidator.verifyDevMode();
    }
    /**
     * Returns the root state operators.
     * @return {?}
     */
    getRootStateOperations() {
        /** @type {?} */
        const rootStateOperations = {
            getState: (/**
             * @return {?}
             */
            () => this._stateStream.getValue()),
            setState: (/**
             * @param {?} newState
             * @return {?}
             */
            (newState) => this._stateStream.next(newState)),
            dispatch: (/**
             * @param {?} actionOrActions
             * @return {?}
             */
            (actionOrActions) => this._dispatcher.dispatch(actionOrActions))
        };
        if (this._config.developmentMode) {
            return this.ensureStateAndActionsAreImmutable(rootStateOperations);
        }
        return rootStateOperations;
    }
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    ensureStateAndActionsAreImmutable(root) {
        return {
            getState: (/**
             * @return {?}
             */
            () => root.getState()),
            setState: (/**
             * @param {?} value
             * @return {?}
             */
            value => {
                /** @type {?} */
                const frozenValue = deepFreeze(value);
                return root.setState(frozenValue);
            }),
            dispatch: (/**
             * @param {?} actions
             * @return {?}
             */
            actions => {
                return root.dispatch(actions);
            })
        };
    }
    /**
     * @param {?} results
     * @return {?}
     */
    setStateToTheCurrentWithNew(results) {
        /** @type {?} */
        const stateOperations = this.getRootStateOperations();
        // Get our current stream
        /** @type {?} */
        const currentState = stateOperations.getState();
        // Set the state to the current + new
        stateOperations.setState(Object.assign(Object.assign({}, currentState), results.defaults));
    }
}
InternalStateOperations.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InternalStateOperations.ctorParameters = () => [
    { type: StateStream },
    { type: InternalDispatcher },
    { type: NgxsConfig },
    { type: ConfigValidator }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._stateStream;
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._dispatcher;
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtb3BlcmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9pbnRlcm5hbC9zdGF0ZS1vcGVyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQU8vRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7O0lBQ2xDLFlBQ1UsWUFBeUIsRUFDekIsV0FBK0IsRUFDL0IsT0FBbUIsRUFDM0IsZUFBZ0M7UUFIeEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFHM0IsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBS0Qsc0JBQXNCOztjQUNkLG1CQUFtQixHQUFHO1lBQzFCLFFBQVE7OztZQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDNUMsUUFBUTs7OztZQUFFLENBQUMsUUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM3RCxRQUFROzs7O1lBQUUsQ0FBQyxlQUE0QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtTQUN2RjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNwRTtRQUVELE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRU8saUNBQWlDLENBQUMsSUFBMEI7UUFDbEUsT0FBTztZQUNMLFFBQVE7OztZQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUMvQixRQUFROzs7O1lBQUUsS0FBSyxDQUFDLEVBQUU7O3NCQUNWLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFBO1lBQ0QsUUFBUTs7OztZQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFBO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMkJBQTJCLENBQUMsT0FBMEI7O2NBQzlDLGVBQWUsR0FBeUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFOzs7Y0FHckUsWUFBWSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUU7UUFDL0MscUNBQXFDO1FBQ3JDLGVBQWUsQ0FBQyxRQUFRLGlDQUFNLFlBQVksR0FBSyxPQUFPLENBQUMsUUFBUSxFQUFHLENBQUM7SUFDckUsQ0FBQzs7O1lBaERGLFVBQVU7Ozs7WUFURixXQUFXO1lBRFgsa0JBQWtCO1lBRWxCLFVBQVU7WUFFVixlQUFlOzs7Ozs7O0lBU3BCLCtDQUFpQzs7Ozs7SUFDakMsOENBQXVDOzs7OztJQUN2QywwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0YXRlT3BlcmF0aW9ucywgU3RhdGVzQW5kRGVmYXVsdHMgfSBmcm9tICcuLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgSW50ZXJuYWxEaXNwYXRjaGVyIH0gZnJvbSAnLi4vaW50ZXJuYWwvZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdGF0ZVN0cmVhbSB9IGZyb20gJy4vc3RhdGUtc3RyZWFtJztcbmltcG9ydCB7IE5neHNDb25maWcgfSBmcm9tICcuLi9zeW1ib2xzJztcbmltcG9ydCB7IGRlZXBGcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xuaW1wb3J0IHsgQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vaW50ZXJuYWwvY29uZmlnLXZhbGlkYXRvcic7XG5cbi8qKlxuICogU3RhdGUgQ29udGV4dCBmYWN0b3J5IGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0YXRlU3RyZWFtOiBTdGF0ZVN0cmVhbSxcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBJbnRlcm5hbERpc3BhdGNoZXIsXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBOZ3hzQ29uZmlnLFxuICAgIGNvbmZpZ1ZhbGlkYXRvcjogQ29uZmlnVmFsaWRhdG9yXG4gICkge1xuICAgIGNvbmZpZ1ZhbGlkYXRvci52ZXJpZnlEZXZNb2RlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCBzdGF0ZSBvcGVyYXRvcnMuXG4gICAqL1xuICBnZXRSb290U3RhdGVPcGVyYXRpb25zKCk6IFN0YXRlT3BlcmF0aW9uczxhbnk+IHtcbiAgICBjb25zdCByb290U3RhdGVPcGVyYXRpb25zID0ge1xuICAgICAgZ2V0U3RhdGU6ICgpID0+IHRoaXMuX3N0YXRlU3RyZWFtLmdldFZhbHVlKCksXG4gICAgICBzZXRTdGF0ZTogKG5ld1N0YXRlOiBhbnkpID0+IHRoaXMuX3N0YXRlU3RyZWFtLm5leHQobmV3U3RhdGUpLFxuICAgICAgZGlzcGF0Y2g6IChhY3Rpb25PckFjdGlvbnM6IGFueSB8IGFueVtdKSA9PiB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbk9yQWN0aW9ucylcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kZXZlbG9wbWVudE1vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVuc3VyZVN0YXRlQW5kQWN0aW9uc0FyZUltbXV0YWJsZShyb290U3RhdGVPcGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdFN0YXRlT3BlcmF0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlU3RhdGVBbmRBY3Rpb25zQXJlSW1tdXRhYmxlKHJvb3Q6IFN0YXRlT3BlcmF0aW9uczxhbnk+KTogU3RhdGVPcGVyYXRpb25zPGFueT4ge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZTogKCkgPT4gcm9vdC5nZXRTdGF0ZSgpLFxuICAgICAgc2V0U3RhdGU6IHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgZnJvemVuVmFsdWUgPSBkZWVwRnJlZXplKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2V0U3RhdGUoZnJvemVuVmFsdWUpO1xuICAgICAgfSxcbiAgICAgIGRpc3BhdGNoOiBhY3Rpb25zID0+IHtcbiAgICAgICAgcmV0dXJuIHJvb3QuZGlzcGF0Y2goYWN0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHNldFN0YXRlVG9UaGVDdXJyZW50V2l0aE5ldyhyZXN1bHRzOiBTdGF0ZXNBbmREZWZhdWx0cyk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlT3BlcmF0aW9uczogU3RhdGVPcGVyYXRpb25zPGFueT4gPSB0aGlzLmdldFJvb3RTdGF0ZU9wZXJhdGlvbnMoKTtcblxuICAgIC8vIEdldCBvdXIgY3VycmVudCBzdHJlYW1cbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBzdGF0ZU9wZXJhdGlvbnMuZ2V0U3RhdGUoKTtcbiAgICAvLyBTZXQgdGhlIHN0YXRlIHRvIHRoZSBjdXJyZW50ICsgbmV3XG4gICAgc3RhdGVPcGVyYXRpb25zLnNldFN0YXRlKHsgLi4uY3VycmVudFN0YXRlLCAuLi5yZXN1bHRzLmRlZmF1bHRzIH0pO1xuICB9XG59XG4iXX0=
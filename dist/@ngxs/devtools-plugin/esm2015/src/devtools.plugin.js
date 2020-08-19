/**
 * @fileoverview added by tsickle
 * Generated from: src/devtools.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { getActionTypeFromInstance, Store } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { NGXS_DEVTOOLS_OPTIONS } from './symbols';
/**
 * Adds support for the Redux Devtools extension:
 * http://extension.remotedev.io/
 */
export class NgxsReduxDevtoolsPlugin {
    /**
     * @param {?} _options
     * @param {?} _injector
     */
    constructor(_options, _injector) {
        this._options = _options;
        this._injector = _injector;
        this.devtoolsExtension = null;
        this.windowObj = typeof window !== 'undefined' ? window : {};
        /** @type {?} */
        const globalDevtools = this.windowObj['__REDUX_DEVTOOLS_EXTENSION__'] || this.windowObj['devToolsExtension'];
        if (globalDevtools) {
            this.devtoolsExtension = (/** @type {?} */ (globalDevtools.connect(_options)));
            this.devtoolsExtension.subscribe((/**
             * @param {?} a
             * @return {?}
             */
            a => this.dispatched(a)));
        }
    }
    /**
     * Lazy get the store for circular dependency issues
     * @private
     * @return {?}
     */
    get store() {
        return this._injector.get(Store);
    }
    /**
     * Middleware handle function
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    handle(state, action, next) {
        /** @type {?} */
        const isDisabled = this._options && this._options.disabled;
        if (!this.devtoolsExtension || isDisabled) {
            return next(state, action);
        }
        return next(state, action).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            /** @type {?} */
            const newState = this.store.snapshot();
            this.sendToDevTools(state, action, newState);
            throw error;
        })), tap((/**
         * @param {?} newState
         * @return {?}
         */
        newState => {
            this.sendToDevTools(state, action, newState);
        })));
    }
    /**
     * @private
     * @param {?} state
     * @param {?} action
     * @param {?} newState
     * @return {?}
     */
    sendToDevTools(state, action, newState) {
        /** @type {?} */
        const type = getActionTypeFromInstance(action);
        // if init action, send initial state to dev tools
        /** @type {?} */
        const isInitAction = type === '@@INIT';
        if (isInitAction) {
            (/** @type {?} */ (this.devtoolsExtension)).init(state);
        }
        else {
            (/** @type {?} */ (this.devtoolsExtension)).send(Object.assign(Object.assign({}, action), { action: null, type }), newState);
        }
    }
    /**
     * Handle the action from the dev tools subscription
     * @param {?} action
     * @return {?}
     */
    dispatched(action) {
        if (action.type === 'DISPATCH') {
            if (action.payload.type === 'JUMP_TO_ACTION' ||
                action.payload.type === 'JUMP_TO_STATE') {
                /** @type {?} */
                const prevState = JSON.parse(action.state);
                this.store.reset(prevState);
            }
            else if (action.payload.type === 'TOGGLE_ACTION') {
                console.warn('Skip is not supported at this time.');
            }
            else if (action.payload.type === 'IMPORT_STATE') {
                const { actionsById, computedStates, currentStateIndex } = action.payload.nextLiftedState;
                (/** @type {?} */ (this.devtoolsExtension)).init(computedStates[0].state);
                Object.keys(actionsById)
                    .filter((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                actionId => actionId !== '0'))
                    .forEach((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                actionId => (/** @type {?} */ (this.devtoolsExtension)).send(actionsById[actionId], computedStates[actionId].state)));
                this.store.reset(computedStates[currentStateIndex].state);
            }
        }
        else if (action.type === 'ACTION') {
            /** @type {?} */
            const actionPayload = JSON.parse(action.payload);
            this.store.dispatch(actionPayload);
        }
    }
}
NgxsReduxDevtoolsPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsReduxDevtoolsPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_DEVTOOLS_OPTIONS,] }] },
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype.devtoolsExtension;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype.windowObj;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMucGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZGV2dG9vbHMtcGx1Z2luL3NyYy9kZXZ0b29scy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHlCQUF5QixFQUFnQyxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0YsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQ0wscUJBQXFCLEVBSXRCLE1BQU0sV0FBVyxDQUFDOzs7OztBQU9uQixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUlsQyxZQUN5QyxRQUE2QixFQUM1RCxTQUFtQjtRQURZLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzVELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFMWixzQkFBaUIsR0FBaUMsSUFBSSxDQUFDO1FBQ3ZELGNBQVMsR0FBUSxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztjQU10RSxjQUFjLEdBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZGLElBQUksY0FBYyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxtQkFBQSxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUF5QixDQUFDO1lBQ25GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7Ozs7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LENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDcEYsQ0FBQztnQkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzRDtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7a0JBQzdCLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUF2RkYsVUFBVTs7Ozs0Q0FNTixNQUFNLFNBQUMscUJBQXFCO1lBckJKLFFBQVE7Ozs7Ozs7SUFpQm5DLG9EQUF3RTs7Ozs7SUFDeEUsNENBQThFOzs7OztJQUc1RSwyQ0FBb0U7Ozs7O0lBQ3BFLDRDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UsIE5neHNOZXh0UGx1Z2luRm4sIE5neHNQbHVnaW4sIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBOR1hTX0RFVlRPT0xTX09QVElPTlMsXG4gIE5neHNEZXZ0b29sc0FjdGlvbixcbiAgTmd4c0RldnRvb2xzRXh0ZW5zaW9uLFxuICBOZ3hzRGV2dG9vbHNPcHRpb25zXG59IGZyb20gJy4vc3ltYm9scyc7XG5cbi8qKlxuICogQWRkcyBzdXBwb3J0IGZvciB0aGUgUmVkdXggRGV2dG9vbHMgZXh0ZW5zaW9uOlxuICogaHR0cDovL2V4dGVuc2lvbi5yZW1vdGVkZXYuaW8vXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzUmVkdXhEZXZ0b29sc1BsdWdpbiBpbXBsZW1lbnRzIE5neHNQbHVnaW4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGRldnRvb2xzRXh0ZW5zaW9uOiBOZ3hzRGV2dG9vbHNFeHRlbnNpb24gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByZWFkb25seSB3aW5kb3dPYmo6IGFueSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChOR1hTX0RFVlRPT0xTX09QVElPTlMpIHByaXZhdGUgX29wdGlvbnM6IE5neHNEZXZ0b29sc09wdGlvbnMsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIGNvbnN0IGdsb2JhbERldnRvb2xzID1cbiAgICAgIHRoaXMud2luZG93T2JqWydfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fJ10gfHwgdGhpcy53aW5kb3dPYmpbJ2RldlRvb2xzRXh0ZW5zaW9uJ107XG4gICAgaWYgKGdsb2JhbERldnRvb2xzKSB7XG4gICAgICB0aGlzLmRldnRvb2xzRXh0ZW5zaW9uID0gZ2xvYmFsRGV2dG9vbHMuY29ubmVjdChfb3B0aW9ucykgYXMgTmd4c0RldnRvb2xzRXh0ZW5zaW9uO1xuICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbi5zdWJzY3JpYmUoYSA9PiB0aGlzLmRpc3BhdGNoZWQoYSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMYXp5IGdldCB0aGUgc3RvcmUgZm9yIGNpcmN1bGFyIGRlcGVuZGVuY3kgaXNzdWVzXG4gICAqL1xuICBwcml2YXRlIGdldCBzdG9yZSgpOiBTdG9yZSB7XG4gICAgcmV0dXJuIHRoaXMuX2luamVjdG9yLmdldDxTdG9yZT4oU3RvcmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pZGRsZXdhcmUgaGFuZGxlIGZ1bmN0aW9uXG4gICAqL1xuICBoYW5kbGUoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmRpc2FibGVkO1xuICAgIGlmICghdGhpcy5kZXZ0b29sc0V4dGVuc2lvbiB8fCBpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbmV4dChzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChzdGF0ZSwgYWN0aW9uKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdGhpcy5zdG9yZS5zbmFwc2hvdCgpO1xuICAgICAgICB0aGlzLnNlbmRUb0RldlRvb2xzKHN0YXRlLCBhY3Rpb24sIG5ld1N0YXRlKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIHRhcChuZXdTdGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuc2VuZFRvRGV2VG9vbHMoc3RhdGUsIGFjdGlvbiwgbmV3U3RhdGUpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZW5kVG9EZXZUb29scyhzdGF0ZTogYW55LCBhY3Rpb246IGFueSwgbmV3U3RhdGU6IGFueSkge1xuICAgIGNvbnN0IHR5cGUgPSBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKGFjdGlvbik7XG4gICAgLy8gaWYgaW5pdCBhY3Rpb24sIHNlbmQgaW5pdGlhbCBzdGF0ZSB0byBkZXYgdG9vbHNcbiAgICBjb25zdCBpc0luaXRBY3Rpb24gPSB0eXBlID09PSAnQEBJTklUJztcbiAgICBpZiAoaXNJbml0QWN0aW9uKSB7XG4gICAgICB0aGlzLmRldnRvb2xzRXh0ZW5zaW9uIS5pbml0KHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbiEuc2VuZCh7IC4uLmFjdGlvbiwgYWN0aW9uOiBudWxsLCB0eXBlIH0sIG5ld1N0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHRoZSBhY3Rpb24gZnJvbSB0aGUgZGV2IHRvb2xzIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgZGlzcGF0Y2hlZChhY3Rpb246IE5neHNEZXZ0b29sc0FjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0RJU1BBVENIJykge1xuICAgICAgaWYgKFxuICAgICAgICBhY3Rpb24ucGF5bG9hZC50eXBlID09PSAnSlVNUF9UT19BQ1RJT04nIHx8XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkLnR5cGUgPT09ICdKVU1QX1RPX1NUQVRFJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHByZXZTdGF0ZSA9IEpTT04ucGFyc2UoYWN0aW9uLnN0YXRlKTtcbiAgICAgICAgdGhpcy5zdG9yZS5yZXNldChwcmV2U3RhdGUpO1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZC50eXBlID09PSAnVE9HR0xFX0FDVElPTicpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTa2lwIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhpcyB0aW1lLicpO1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZC50eXBlID09PSAnSU1QT1JUX1NUQVRFJykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgYWN0aW9uc0J5SWQsXG4gICAgICAgICAgY29tcHV0ZWRTdGF0ZXMsXG4gICAgICAgICAgY3VycmVudFN0YXRlSW5kZXhcbiAgICAgICAgfSA9IGFjdGlvbi5wYXlsb2FkLm5leHRMaWZ0ZWRTdGF0ZTtcbiAgICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbiEuaW5pdChjb21wdXRlZFN0YXRlc1swXS5zdGF0ZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnNCeUlkKVxuICAgICAgICAgIC5maWx0ZXIoYWN0aW9uSWQgPT4gYWN0aW9uSWQgIT09ICcwJylcbiAgICAgICAgICAuZm9yRWFjaChhY3Rpb25JZCA9PlxuICAgICAgICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbiEuc2VuZChhY3Rpb25zQnlJZFthY3Rpb25JZF0sIGNvbXB1dGVkU3RhdGVzW2FjdGlvbklkXS5zdGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB0aGlzLnN0b3JlLnJlc2V0KGNvbXB1dGVkU3RhdGVzW2N1cnJlbnRTdGF0ZUluZGV4XS5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FDVElPTicpIHtcbiAgICAgIGNvbnN0IGFjdGlvblBheWxvYWQgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uUGF5bG9hZCk7XG4gICAgfVxuICB9XG59XG4iXX0=
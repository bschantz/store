/**
 * @fileoverview added by tsickle
 * Generated from: src/router.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Public event api of the router
 */
export class Navigate {
    /**
     * @param {?} path
     * @param {?=} queryParams
     * @param {?=} extras
     */
    constructor(path, queryParams, extras) {
        this.path = path;
        this.queryParams = queryParams;
        this.extras = extras;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] Navigate';
    }
}
if (false) {
    /** @type {?} */
    Navigate.prototype.path;
    /** @type {?} */
    Navigate.prototype.queryParams;
    /** @type {?} */
    Navigate.prototype.extras;
}
/**
 *
 * Angular Routers internal state events
 *
 */
/**
 * An action dispatched when the router navigates.
 * @template T
 */
export class RouterNavigation {
    /**
     * @param {?} routerState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, event, trigger = 'none') {
        this.routerState = routerState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterNavigation';
    }
}
if (false) {
    /** @type {?} */
    RouterNavigation.prototype.routerState;
    /** @type {?} */
    RouterNavigation.prototype.event;
    /** @type {?} */
    RouterNavigation.prototype.trigger;
}
/**
 * An action dispatched when the router cancel navigation.
 * @template T, V
 */
export class RouterCancel {
    /**
     * @param {?} routerState
     * @param {?} storeState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, storeState, event, trigger = 'none') {
        this.routerState = routerState;
        this.storeState = storeState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterCancel';
    }
}
if (false) {
    /** @type {?} */
    RouterCancel.prototype.routerState;
    /** @type {?} */
    RouterCancel.prototype.storeState;
    /** @type {?} */
    RouterCancel.prototype.event;
    /** @type {?} */
    RouterCancel.prototype.trigger;
}
/**
 * An action dispatched when the router errors.
 * @template T, V
 */
export class RouterError {
    /**
     * @param {?} routerState
     * @param {?} storeState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, storeState, event, trigger = 'none') {
        this.routerState = routerState;
        this.storeState = storeState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterError';
    }
}
if (false) {
    /** @type {?} */
    RouterError.prototype.routerState;
    /** @type {?} */
    RouterError.prototype.storeState;
    /** @type {?} */
    RouterError.prototype.event;
    /** @type {?} */
    RouterError.prototype.trigger;
}
/**
 * An action dispatched when the `ResolveEnd` event is triggered.
 * @template T
 */
export class RouterDataResolved {
    /**
     * @param {?} routerState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, event, trigger = 'none') {
        this.routerState = routerState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterDataResolved';
    }
}
if (false) {
    /** @type {?} */
    RouterDataResolved.prototype.routerState;
    /** @type {?} */
    RouterDataResolved.prototype.event;
    /** @type {?} */
    RouterDataResolved.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9yb3V0ZXItcGx1Z2luL3NyYy9yb3V0ZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQWVBLE1BQU0sT0FBTyxRQUFROzs7Ozs7SUFLbkIsWUFDUyxJQUFXLEVBQ1gsV0FBb0IsRUFDcEIsTUFBeUI7UUFGekIsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNYLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQy9CLENBQUM7Ozs7SUFSSixNQUFNLEtBQUssSUFBSTtRQUNiLHNJQUFzSTtRQUN0SSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7Q0FNRjs7O0lBSkcsd0JBQWtCOztJQUNsQiwrQkFBMkI7O0lBQzNCLDBCQUFnQzs7Ozs7Ozs7Ozs7QUFhcEMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBSzNCLFlBQ1MsV0FBYyxFQUNkLEtBQXVCLEVBQ3ZCLFVBQXlCLE1BQU07UUFGL0IsZ0JBQVcsR0FBWCxXQUFXLENBQUc7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUNyQyxDQUFDOzs7O0lBUkosTUFBTSxLQUFLLElBQUk7UUFDYixzSUFBc0k7UUFDdEksT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0NBTUY7OztJQUpHLHVDQUFxQjs7SUFDckIsaUNBQThCOztJQUM5QixtQ0FBc0M7Ozs7OztBQU8xQyxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUt2QixZQUNTLFdBQWMsRUFDZCxVQUFhLEVBQ2IsS0FBdUIsRUFDdkIsVUFBeUIsTUFBTTtRQUgvQixnQkFBVyxHQUFYLFdBQVcsQ0FBRztRQUNkLGVBQVUsR0FBVixVQUFVLENBQUc7UUFDYixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUNyQyxDQUFDOzs7O0lBVEosTUFBTSxLQUFLLElBQUk7UUFDYixzSUFBc0k7UUFDdEksT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0NBT0Y7OztJQUxHLG1DQUFxQjs7SUFDckIsa0NBQW9COztJQUNwQiw2QkFBOEI7O0lBQzlCLCtCQUFzQzs7Ozs7O0FBTzFDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBS3RCLFlBQ1MsV0FBYyxFQUNkLFVBQWEsRUFDYixLQUFzQixFQUN0QixVQUF5QixNQUFNO1FBSC9CLGdCQUFXLEdBQVgsV0FBVyxDQUFHO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBRztRQUNiLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQ3JDLENBQUM7Ozs7SUFUSixNQUFNLEtBQUssSUFBSTtRQUNiLHNJQUFzSTtRQUN0SSxPQUFPLHNCQUFzQixDQUFDO0lBQ2hDLENBQUM7Q0FPRjs7O0lBTEcsa0NBQXFCOztJQUNyQixpQ0FBb0I7O0lBQ3BCLDRCQUE2Qjs7SUFDN0IsOEJBQXNDOzs7Ozs7QUFPMUMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBSzdCLFlBQ1MsV0FBYyxFQUNkLEtBQWlCLEVBQ2pCLFVBQXlCLE1BQU07UUFGL0IsZ0JBQVcsR0FBWCxXQUFXLENBQUc7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQ3JDLENBQUM7Ozs7SUFSSixNQUFNLEtBQUssSUFBSTtRQUNiLHNJQUFzSTtRQUN0SSxPQUFPLDZCQUE2QixDQUFDO0lBQ3ZDLENBQUM7Q0FNRjs7O0lBSkcseUNBQXFCOztJQUNyQixtQ0FBd0I7O0lBQ3hCLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgTmF2aWdhdGlvbkV4dHJhcyxcbiAgUGFyYW1zLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXNSZWNvZ25pemVkLFxuICBSZXNvbHZlRW5kXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJvdXRlclRyaWdnZXIgfSBmcm9tICcuL3JvdXRlci5zdGF0ZSc7XG5cbi8qKlxuICogUHVibGljIGV2ZW50IGFwaSBvZiB0aGUgcm91dGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZSB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAvLyBOT1RFOiBOb3QgbmVjZXNzYXJ5IHRvIGRlY2xhcmUgdGhlIHR5cGUgaW4gdGhpcyB3YXkgaW4geW91ciBjb2RlLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25neHMvc3RvcmUvcHVsbC82NDQjaXNzdWVjb21tZW50LTQzNjAwMzEzOFxuICAgIHJldHVybiAnW1JvdXRlcl0gTmF2aWdhdGUnO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXRoOiBhbnlbXSxcbiAgICBwdWJsaWMgcXVlcnlQYXJhbXM/OiBQYXJhbXMsXG4gICAgcHVibGljIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXNcbiAgKSB7fVxufVxuXG4vKipcbiAqXG4gKiBBbmd1bGFyIFJvdXRlcnMgaW50ZXJuYWwgc3RhdGUgZXZlbnRzXG4gKlxuICovXG5cbi8qKlxuICogQW4gYWN0aW9uIGRpc3BhdGNoZWQgd2hlbiB0aGUgcm91dGVyIG5hdmlnYXRlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlck5hdmlnYXRpb248VCA9IFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdbUm91dGVyXSBSb3V0ZXJOYXZpZ2F0aW9uJztcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyU3RhdGU6IFQsXG4gICAgcHVibGljIGV2ZW50OiBSb3V0ZXNSZWNvZ25pemVkLFxuICAgIHB1YmxpYyB0cmlnZ2VyOiBSb3V0ZXJUcmlnZ2VyID0gJ25vbmUnXG4gICkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gZGlzcGF0Y2hlZCB3aGVuIHRoZSByb3V0ZXIgY2FuY2VsIG5hdmlnYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXJDYW5jZWw8VCwgViA9IFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdbUm91dGVyXSBSb3V0ZXJDYW5jZWwnO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXJTdGF0ZTogVixcbiAgICBwdWJsaWMgc3RvcmVTdGF0ZTogVCxcbiAgICBwdWJsaWMgZXZlbnQ6IE5hdmlnYXRpb25DYW5jZWwsXG4gICAgcHVibGljIHRyaWdnZXI6IFJvdXRlclRyaWdnZXIgPSAnbm9uZSdcbiAgKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHJvdXRlciBlcnJvcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXJFcnJvcjxULCBWID0gUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgLy8gTk9URTogTm90IG5lY2Vzc2FyeSB0byBkZWNsYXJlIHRoZSB0eXBlIGluIHRoaXMgd2F5IGluIHlvdXIgY29kZS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3hzL3N0b3JlL3B1bGwvNjQ0I2lzc3VlY29tbWVudC00MzYwMDMxMzhcbiAgICByZXR1cm4gJ1tSb3V0ZXJdIFJvdXRlckVycm9yJztcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyU3RhdGU6IFYsXG4gICAgcHVibGljIHN0b3JlU3RhdGU6IFQsXG4gICAgcHVibGljIGV2ZW50OiBOYXZpZ2F0aW9uRXJyb3IsXG4gICAgcHVibGljIHRyaWdnZXI6IFJvdXRlclRyaWdnZXIgPSAnbm9uZSdcbiAgKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIGBSZXNvbHZlRW5kYCBldmVudCBpcyB0cmlnZ2VyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXJEYXRhUmVzb2x2ZWQ8VCA9IFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdbUm91dGVyXSBSb3V0ZXJEYXRhUmVzb2x2ZWQnO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXJTdGF0ZTogVCxcbiAgICBwdWJsaWMgZXZlbnQ6IFJlc29sdmVFbmQsXG4gICAgcHVibGljIHRyaWdnZXI6IFJvdXRlclRyaWdnZXIgPSAnbm9uZSdcbiAgKSB7fVxufVxuXG4vKipcbiAqIEFuIHVuaW9uIHR5cGUgb2Ygcm91dGVyIGFjdGlvbnMuXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlckFjdGlvbjxULCBWID0gUm91dGVyU3RhdGVTbmFwc2hvdD4gPVxuICB8IFJvdXRlck5hdmlnYXRpb248Vj5cbiAgfCBSb3V0ZXJDYW5jZWw8VCwgVj5cbiAgfCBSb3V0ZXJFcnJvcjxULCBWPlxuICB8IFJvdXRlckRhdGFSZXNvbHZlZDxWPjtcbiJdfQ==
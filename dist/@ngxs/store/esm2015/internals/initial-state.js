/**
 * @fileoverview added by tsickle
 * Generated from: initial-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const INITIAL_STATE_TOKEN = new InjectionToken('INITIAL_STATE_TOKEN');
export class InitialState {
    /**
     * @param {?} state
     * @return {?}
     */
    static set(state) {
        this.value = state;
    }
    /**
     * @return {?}
     */
    static pop() {
        /** @type {?} */
        const state = this.value;
        this.value = {};
        return state;
    }
}
InitialState.value = {};
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialState.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL2ludGVybmFscy9zcmMvaW5pdGlhbC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRy9DLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBTSxxQkFBcUIsQ0FBQztBQUVqRixNQUFNLE9BQU8sWUFBWTs7Ozs7SUFHaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFrQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLEdBQUc7O2NBQ1QsS0FBSyxHQUFnQixJQUFJLENBQUMsS0FBSztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O0FBVmMsa0JBQUssR0FBZ0IsRUFBRSxDQUFDOzs7Ozs7SUFBdkMsbUJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYWluT2JqZWN0IH0gZnJvbSAnLi9zeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignSU5JVElBTF9TVEFURV9UT0tFTicpO1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbFN0YXRlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgdmFsdWU6IFBsYWluT2JqZWN0ID0ge307XG5cbiAgcHVibGljIHN0YXRpYyBzZXQoc3RhdGU6IFBsYWluT2JqZWN0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHN0YXRlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwb3AoKTogUGxhaW5PYmplY3Qge1xuICAgIGNvbnN0IHN0YXRlOiBQbGFpbk9iamVjdCA9IHRoaXMudmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHt9O1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19
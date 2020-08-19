/**
 * @fileoverview added by tsickle
 * Generated from: src/actions/actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Init action
 */
export class InitState {
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '@@INIT';
    }
}
/**
 * Update action
 */
export class UpdateState {
    /**
     * @param {?=} addedStates
     */
    constructor(addedStates) {
        this.addedStates = addedStates;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '@@UPDATE_STATE';
    }
}
if (false) {
    /** @type {?} */
    UpdateState.prototype.addedStates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9hY3Rpb25zL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSxNQUFNLE9BQU8sU0FBUzs7OztJQUNwQixNQUFNLEtBQUssSUFBSTtRQUNiLHNJQUFzSTtRQUN0SSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7Ozs7QUFLRCxNQUFNLE9BQU8sV0FBVzs7OztJQU10QixZQUFtQixXQUF5QjtRQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUFHLENBQUM7Ozs7SUFMaEQsTUFBTSxLQUFLLElBQUk7UUFDYixzSUFBc0k7UUFDdEksT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0NBR0Y7OztJQURhLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWluT2JqZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUvaW50ZXJuYWxzJztcblxuLyoqXG4gKiBJbml0IGFjdGlvblxuICovXG5leHBvcnQgY2xhc3MgSW5pdFN0YXRlIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdAQElOSVQnO1xuICB9XG59XG5cbi8qKlxuICogVXBkYXRlIGFjdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXBkYXRlU3RhdGUge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgLy8gTk9URTogTm90IG5lY2Vzc2FyeSB0byBkZWNsYXJlIHRoZSB0eXBlIGluIHRoaXMgd2F5IGluIHlvdXIgY29kZS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3hzL3N0b3JlL3B1bGwvNjQ0I2lzc3VlY29tbWVudC00MzYwMDMxMzhcbiAgICByZXR1cm4gJ0BAVVBEQVRFX1NUQVRFJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhZGRlZFN0YXRlcz86IFBsYWluT2JqZWN0KSB7fVxufVxuIl19
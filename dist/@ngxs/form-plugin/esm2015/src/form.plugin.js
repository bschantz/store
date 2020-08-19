/**
 * @fileoverview added by tsickle
 * Generated from: src/form.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { getActionTypeFromInstance, getValue, setValue } from '@ngxs/store';
import { ResetForm, SetFormDirty, SetFormDisabled, SetFormEnabled, SetFormPristine, UpdateForm, UpdateFormDirty, UpdateFormErrors, UpdateFormStatus, UpdateFormValue } from './actions';
export class NgxsFormPlugin {
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    handle(state, event, next) {
        /** @type {?} */
        const type = getActionTypeFromInstance(event);
        /** @type {?} */
        let nextState = state;
        if (type === UpdateFormValue.type || type === UpdateForm.type || type === ResetForm.type) {
            const { value } = event.payload;
            /** @type {?} */
            const payloadValue = Array.isArray(value) ? value.slice() : Object.assign({}, value);
            /** @type {?} */
            const path = this.joinPathWithPropertyPath(event);
            nextState = setValue(nextState, path, payloadValue);
        }
        if (type === ResetForm.type) {
            /** @type {?} */
            const model = getValue(nextState, `${event.payload.path}.model`);
            nextState = setValue(nextState, `${event.payload.path}`, { model: model });
        }
        if (type === UpdateFormStatus.type || type === UpdateForm.type) {
            nextState = setValue(nextState, `${event.payload.path}.status`, event.payload.status);
        }
        if (type === UpdateFormErrors.type || type === UpdateForm.type) {
            nextState = setValue(nextState, `${event.payload.path}.errors`, Object.assign({}, event.payload.errors));
        }
        if (type === UpdateFormDirty.type || type === UpdateForm.type) {
            nextState = setValue(nextState, `${event.payload.path}.dirty`, event.payload.dirty);
        }
        if (type === SetFormDirty.type) {
            nextState = setValue(nextState, `${event.payload}.dirty`, true);
        }
        if (type === SetFormPristine.type) {
            nextState = setValue(nextState, `${event.payload}.dirty`, false);
        }
        if (type === SetFormDisabled.type) {
            nextState = setValue(nextState, `${event.payload}.disabled`, true);
        }
        if (type === SetFormEnabled.type) {
            nextState = setValue(nextState, `${event.payload}.disabled`, false);
        }
        return next(nextState, event);
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    joinPathWithPropertyPath({ payload }) {
        /** @type {?} */
        let path = `${payload.path}.model`;
        if (payload.propertyPath) {
            path += `.${payload.propertyPath}`;
        }
        return path;
    }
}
NgxsFormPlugin.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtLXBsdWdpbi9zcmMvZm9ybS5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsUUFBUSxFQUdSLFFBQVEsRUFDVCxNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsY0FBYyxFQUNkLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNoQixNQUFNLFdBQVcsQ0FBQztBQUduQixNQUFNLE9BQU8sY0FBYzs7Ozs7OztJQUN6QixNQUFNLENBQUMsS0FBVSxFQUFFLEtBQVUsRUFBRSxJQUFzQjs7Y0FDN0MsSUFBSSxHQUFHLHlCQUF5QixDQUFDLEtBQUssQ0FBQzs7WUFFekMsU0FBUyxHQUFHLEtBQUs7UUFFckIsSUFBSSxJQUFJLEtBQUssZUFBZSxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRTtrQkFDbEYsRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTzs7a0JBQ3pCLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQkFBTSxLQUFLLENBQUU7O2tCQUNsRSxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQztZQUNqRCxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFOztrQkFDckIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDO1lBQ2hFLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzVFO1FBRUQsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQzlELFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZGO1FBRUQsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQzlELFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsb0JBQ3pELEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUN2QixDQUFDO1NBQ0o7UUFFRCxJQUFJLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQzdELFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JGO1FBRUQsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRTtZQUM5QixTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksSUFBSSxLQUFLLGVBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDakMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxFQUFFO1lBQ2pDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxJQUFJLEtBQUssY0FBYyxDQUFDLElBQUksRUFBRTtZQUNoQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyx3QkFBd0IsQ0FBQyxFQUFFLE9BQU8sRUFBbUI7O1lBQ3ZELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLFFBQVE7UUFFbEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBNURGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlLFxuICBnZXRWYWx1ZSxcbiAgTmd4c05leHRQbHVnaW5GbixcbiAgTmd4c1BsdWdpbixcbiAgc2V0VmFsdWVcbn0gZnJvbSAnQG5neHMvc3RvcmUnO1xuaW1wb3J0IHtcbiAgUmVzZXRGb3JtLFxuICBTZXRGb3JtRGlydHksXG4gIFNldEZvcm1EaXNhYmxlZCxcbiAgU2V0Rm9ybUVuYWJsZWQsXG4gIFNldEZvcm1QcmlzdGluZSxcbiAgVXBkYXRlRm9ybSxcbiAgVXBkYXRlRm9ybURpcnR5LFxuICBVcGRhdGVGb3JtRXJyb3JzLFxuICBVcGRhdGVGb3JtU3RhdHVzLFxuICBVcGRhdGVGb3JtVmFsdWVcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neHNGb3JtUGx1Z2luIGltcGxlbWVudHMgTmd4c1BsdWdpbiB7XG4gIGhhbmRsZShzdGF0ZTogYW55LCBldmVudDogYW55LCBuZXh0OiBOZ3hzTmV4dFBsdWdpbkZuKSB7XG4gICAgY29uc3QgdHlwZSA9IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UoZXZlbnQpO1xuXG4gICAgbGV0IG5leHRTdGF0ZSA9IHN0YXRlO1xuXG4gICAgaWYgKHR5cGUgPT09IFVwZGF0ZUZvcm1WYWx1ZS50eXBlIHx8IHR5cGUgPT09IFVwZGF0ZUZvcm0udHlwZSB8fCB0eXBlID09PSBSZXNldEZvcm0udHlwZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQucGF5bG9hZDtcbiAgICAgIGNvbnN0IHBheWxvYWRWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuc2xpY2UoKSA6IHsgLi4udmFsdWUgfTtcbiAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmpvaW5QYXRoV2l0aFByb3BlcnR5UGF0aChldmVudCk7XG4gICAgICBuZXh0U3RhdGUgPSBzZXRWYWx1ZShuZXh0U3RhdGUsIHBhdGgsIHBheWxvYWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJlc2V0Rm9ybS50eXBlKSB7XG4gICAgICBjb25zdCBtb2RlbCA9IGdldFZhbHVlKG5leHRTdGF0ZSwgYCR7ZXZlbnQucGF5bG9hZC5wYXRofS5tb2RlbGApO1xuICAgICAgbmV4dFN0YXRlID0gc2V0VmFsdWUobmV4dFN0YXRlLCBgJHtldmVudC5wYXlsb2FkLnBhdGh9YCwgeyBtb2RlbDogbW9kZWwgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFVwZGF0ZUZvcm1TdGF0dXMudHlwZSB8fCB0eXBlID09PSBVcGRhdGVGb3JtLnR5cGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHNldFZhbHVlKG5leHRTdGF0ZSwgYCR7ZXZlbnQucGF5bG9hZC5wYXRofS5zdGF0dXNgLCBldmVudC5wYXlsb2FkLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFVwZGF0ZUZvcm1FcnJvcnMudHlwZSB8fCB0eXBlID09PSBVcGRhdGVGb3JtLnR5cGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHNldFZhbHVlKG5leHRTdGF0ZSwgYCR7ZXZlbnQucGF5bG9hZC5wYXRofS5lcnJvcnNgLCB7XG4gICAgICAgIC4uLmV2ZW50LnBheWxvYWQuZXJyb3JzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gVXBkYXRlRm9ybURpcnR5LnR5cGUgfHwgdHlwZSA9PT0gVXBkYXRlRm9ybS50eXBlKSB7XG4gICAgICBuZXh0U3RhdGUgPSBzZXRWYWx1ZShuZXh0U3RhdGUsIGAke2V2ZW50LnBheWxvYWQucGF0aH0uZGlydHlgLCBldmVudC5wYXlsb2FkLmRpcnR5KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gU2V0Rm9ybURpcnR5LnR5cGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHNldFZhbHVlKG5leHRTdGF0ZSwgYCR7ZXZlbnQucGF5bG9hZH0uZGlydHlgLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gU2V0Rm9ybVByaXN0aW5lLnR5cGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHNldFZhbHVlKG5leHRTdGF0ZSwgYCR7ZXZlbnQucGF5bG9hZH0uZGlydHlgLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFNldEZvcm1EaXNhYmxlZC50eXBlKSB7XG4gICAgICBuZXh0U3RhdGUgPSBzZXRWYWx1ZShuZXh0U3RhdGUsIGAke2V2ZW50LnBheWxvYWR9LmRpc2FibGVkYCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFNldEZvcm1FbmFibGVkLnR5cGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHNldFZhbHVlKG5leHRTdGF0ZSwgYCR7ZXZlbnQucGF5bG9hZH0uZGlzYWJsZWRgLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQobmV4dFN0YXRlLCBldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGpvaW5QYXRoV2l0aFByb3BlcnR5UGF0aCh7IHBheWxvYWQgfTogVXBkYXRlRm9ybVZhbHVlKTogc3RyaW5nIHtcbiAgICBsZXQgcGF0aCA9IGAke3BheWxvYWQucGF0aH0ubW9kZWxgO1xuXG4gICAgaWYgKHBheWxvYWQucHJvcGVydHlQYXRoKSB7XG4gICAgICBwYXRoICs9IGAuJHtwYXlsb2FkLnByb3BlcnR5UGF0aH1gO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG4iXX0=
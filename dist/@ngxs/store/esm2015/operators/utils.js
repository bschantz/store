/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function isStateOperator(value) {
    return typeof value === 'function';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isUndefined(value) {
    return typeof value === 'undefined';
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function isPredicate(value) {
    return typeof value === 'function';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNumber(value) {
    return typeof value === 'number';
}
/**
 * @param {?} index
 * @return {?}
 */
export function invalidIndex(index) {
    return Number.isNaN(index) || index === -1;
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function isNil(value) {
    return value === null || isUndefined(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9vcGVyYXRvcnMvc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxNQUFNLFVBQVUsZUFBZSxDQUFJLEtBQTJCO0lBQzVELE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3JDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFVO0lBQ3BDLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDO0FBQ3RDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUksS0FBc0M7SUFDbkUsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7QUFDckMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQVU7SUFDakMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7QUFDbkMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWE7SUFDeEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFJLEtBQTJCO0lBQ2xELE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5cbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vaW50ZXJuYWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhdGVPcGVyYXRvcjxUPih2YWx1ZTogVCB8IFN0YXRlT3BlcmF0b3I8VD4pOiB2YWx1ZSBpcyBTdGF0ZU9wZXJhdG9yPFQ+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyB1bmRlZmluZWQge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlZGljYXRlPFQ+KHZhbHVlOiBQcmVkaWNhdGU8VD4gfCBib29sZWFuIHwgbnVtYmVyKTogdmFsdWUgaXMgUHJlZGljYXRlPFQ+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4oaW5kZXgpIHx8IGluZGV4ID09PSAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmlsPFQ+KHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZhbHVlIGlzIG51bGwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgaXNVbmRlZmluZWQodmFsdWUpO1xufVxuXG5leHBvcnQgdHlwZSBSZXBhaXJUeXBlPFQ+ID0gVCBleHRlbmRzIHRydWUgPyBib29sZWFuIDogKFQgZXh0ZW5kcyBmYWxzZSA/IGJvb2xlYW4gOiBUKTtcbiJdfQ==
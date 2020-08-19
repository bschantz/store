/**
 * @fileoverview added by tsickle
 * Generated from: append.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} items - Specific items to append to the end of an array
 * @return {?}
 */
export function append(items) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function appendOperator(existing) {
        // If `items` is `undefined` or `null` or `[]` but `existing` is provided
        // just return `existing`
        /** @type {?} */
        const itemsNotProvidedButExistingIs = (!items || !items.length) && existing;
        if (itemsNotProvidedButExistingIs) {
            return (/** @type {?} */ (existing));
        }
        if (Array.isArray(existing)) {
            return existing.concat((/** @type {?} */ (items)));
        }
        // For example if some property is added dynamically
        // and didn't exist before thus it's not `ArrayLike`
        return (/** @type {?} */ (items));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvb3BlcmF0b3JzL3NyYy9hcHBlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE1BQU0sVUFBVSxNQUFNLENBQUksS0FBVTtJQUNsQzs7OztJQUFPLFNBQVMsY0FBYyxDQUFDLFFBQW1DOzs7O2NBRzFELDZCQUE2QixHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUTtRQUMzRSxJQUFJLDZCQUE2QixFQUFFO1lBQ2pDLE9BQU8sbUJBQUEsUUFBUSxFQUFtQixDQUFDO1NBQ3BDO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxLQUFLLEVBQW1CLENBQUMsQ0FBQztTQUNsRDtRQUVELG9EQUFvRDtRQUNwRCxvREFBb0Q7UUFDcEQsT0FBTyxtQkFBQSxLQUFLLEVBQW1CLENBQUM7SUFDbEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5pbXBvcnQgeyBSZXBhaXJUeXBlIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIGl0ZW1zIC0gU3BlY2lmaWMgaXRlbXMgdG8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgYW4gYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZDxUPihpdGVtczogVFtdKTogU3RhdGVPcGVyYXRvcjxSZXBhaXJUeXBlPFQ+W10+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFwcGVuZE9wZXJhdG9yKGV4aXN0aW5nOiBSZWFkb25seTxSZXBhaXJUeXBlPFQ+W10+KTogUmVwYWlyVHlwZTxUPltdIHtcbiAgICAvLyBJZiBgaXRlbXNgIGlzIGB1bmRlZmluZWRgIG9yIGBudWxsYCBvciBgW11gIGJ1dCBgZXhpc3RpbmdgIGlzIHByb3ZpZGVkXG4gICAgLy8ganVzdCByZXR1cm4gYGV4aXN0aW5nYFxuICAgIGNvbnN0IGl0ZW1zTm90UHJvdmlkZWRCdXRFeGlzdGluZ0lzID0gKCFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoKSAmJiBleGlzdGluZztcbiAgICBpZiAoaXRlbXNOb3RQcm92aWRlZEJ1dEV4aXN0aW5nSXMpIHtcbiAgICAgIHJldHVybiBleGlzdGluZyBhcyBSZXBhaXJUeXBlPFQ+W107XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmcuY29uY2F0KGl0ZW1zIGFzIFJlcGFpclR5cGU8VD5bXSk7XG4gICAgfVxuXG4gICAgLy8gRm9yIGV4YW1wbGUgaWYgc29tZSBwcm9wZXJ0eSBpcyBhZGRlZCBkeW5hbWljYWxseVxuICAgIC8vIGFuZCBkaWRuJ3QgZXhpc3QgYmVmb3JlIHRodXMgaXQncyBub3QgYEFycmF5TGlrZWBcbiAgICByZXR1cm4gaXRlbXMgYXMgUmVwYWlyVHlwZTxUPltdO1xuICB9O1xufVxuIl19
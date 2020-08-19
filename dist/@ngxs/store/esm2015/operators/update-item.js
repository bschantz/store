/**
 * @fileoverview added by tsickle
 * Generated from: update-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isStateOperator, isPredicate, isNumber, invalidIndex } from './utils';
/**
 * @template T
 * @param {?} selector - Index of item in the array or a predicate function
 * that can be provided in `Array.prototype.findIndex`
 * @param {?} operatorOrValue - New value under the `selector` index or a
 * function that can be applied to an existing value
 * @return {?}
 */
export function updateItem(selector, operatorOrValue) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function updateItemOperator(existing) {
        /** @type {?} */
        let index = -1;
        if (isPredicate(selector)) {
            index = existing.findIndex(selector);
        }
        else if (isNumber(selector)) {
            index = selector;
        }
        if (invalidIndex(index)) {
            return (/** @type {?} */ (existing));
        }
        /** @type {?} */
        let value = (/** @type {?} */ (null));
        // Need to check if the new item value will change the existing item value
        // then, only if it will change it then clone the array and set the item
        if (isStateOperator(operatorOrValue)) {
            value = operatorOrValue((/** @type {?} */ (existing[index])));
        }
        else {
            value = operatorOrValue;
        }
        // If the value hasn't been mutated
        // then we just return `existing` array
        if (value === existing[index]) {
            return (/** @type {?} */ (existing));
        }
        /** @type {?} */
        const clone = existing.slice();
        clone[index] = (/** @type {?} */ (value));
        return clone;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9vcGVyYXRvcnMvc3JjL3VwZGF0ZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBYyxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7O0FBUzNGLE1BQU0sVUFBVSxVQUFVLENBQ3hCLFFBQStCLEVBQy9CLGVBQXFDO0lBRXJDOzs7O0lBQU8sU0FBUyxrQkFBa0IsQ0FBQyxRQUFtQzs7WUFDaEUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pCLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNsQjtRQUVELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sbUJBQUEsUUFBUSxFQUFtQixDQUFDO1NBQ3BDOztZQUVHLEtBQUssR0FBTSxtQkFBQSxJQUFJLEVBQUM7UUFDcEIsMEVBQTBFO1FBQzFFLHdFQUF3RTtRQUN4RSxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNwQyxLQUFLLEdBQUcsZUFBZSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBZSxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLEtBQUssR0FBRyxlQUFlLENBQUM7U0FDekI7UUFFRCxtQ0FBbUM7UUFDbkMsdUNBQXVDO1FBQ3ZDLElBQUksS0FBSyxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLG1CQUFBLFFBQVEsRUFBbUIsQ0FBQztTQUNwQzs7Y0FFSyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsbUJBQUEsS0FBSyxFQUFpQixDQUFDO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5cbmltcG9ydCB7IGlzU3RhdGVPcGVyYXRvciwgaXNQcmVkaWNhdGUsIGlzTnVtYmVyLCBpbnZhbGlkSW5kZXgsIFJlcGFpclR5cGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vaW50ZXJuYWxzJztcblxuLyoqXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBJbmRleCBvZiBpdGVtIGluIHRoZSBhcnJheSBvciBhIHByZWRpY2F0ZSBmdW5jdGlvblxuICogdGhhdCBjYW4gYmUgcHJvdmlkZWQgaW4gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgXG4gKiBAcGFyYW0gb3BlcmF0b3JPclZhbHVlIC0gTmV3IHZhbHVlIHVuZGVyIHRoZSBgc2VsZWN0b3JgIGluZGV4IG9yIGFcbiAqIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYW4gZXhpc3RpbmcgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW08VD4oXG4gIHNlbGVjdG9yOiBudW1iZXIgfCBQcmVkaWNhdGU8VD4sXG4gIG9wZXJhdG9yT3JWYWx1ZTogVCB8IFN0YXRlT3BlcmF0b3I8VD5cbik6IFN0YXRlT3BlcmF0b3I8UmVwYWlyVHlwZTxUPltdPiB7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVJdGVtT3BlcmF0b3IoZXhpc3Rpbmc6IFJlYWRvbmx5PFJlcGFpclR5cGU8VD5bXT4pOiBSZXBhaXJUeXBlPFQ+W10ge1xuICAgIGxldCBpbmRleCA9IC0xO1xuXG4gICAgaWYgKGlzUHJlZGljYXRlKHNlbGVjdG9yKSkge1xuICAgICAgaW5kZXggPSBleGlzdGluZy5maW5kSW5kZXgoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoc2VsZWN0b3IpKSB7XG4gICAgICBpbmRleCA9IHNlbGVjdG9yO1xuICAgIH1cblxuICAgIGlmIChpbnZhbGlkSW5kZXgoaW5kZXgpKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmcgYXMgUmVwYWlyVHlwZTxUPltdO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZTogVCA9IG51bGwhO1xuICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgdGhlIG5ldyBpdGVtIHZhbHVlIHdpbGwgY2hhbmdlIHRoZSBleGlzdGluZyBpdGVtIHZhbHVlXG4gICAgLy8gdGhlbiwgb25seSBpZiBpdCB3aWxsIGNoYW5nZSBpdCB0aGVuIGNsb25lIHRoZSBhcnJheSBhbmQgc2V0IHRoZSBpdGVtXG4gICAgaWYgKGlzU3RhdGVPcGVyYXRvcihvcGVyYXRvck9yVmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IG9wZXJhdG9yT3JWYWx1ZShleGlzdGluZ1tpbmRleF0gYXMgUmVhZG9ubHk8VD4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IG9wZXJhdG9yT3JWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGJlZW4gbXV0YXRlZFxuICAgIC8vIHRoZW4gd2UganVzdCByZXR1cm4gYGV4aXN0aW5nYCBhcnJheVxuICAgIGlmICh2YWx1ZSA9PT0gZXhpc3RpbmdbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmcgYXMgUmVwYWlyVHlwZTxUPltdO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb25lID0gZXhpc3Rpbmcuc2xpY2UoKTtcbiAgICBjbG9uZVtpbmRleF0gPSB2YWx1ZSBhcyBSZXBhaXJUeXBlPFQ+O1xuICAgIHJldHVybiBjbG9uZTtcbiAgfTtcbn1cbiJdfQ==
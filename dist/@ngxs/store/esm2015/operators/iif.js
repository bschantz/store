/**
 * @fileoverview added by tsickle
 * Generated from: iif.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isStateOperator, isUndefined, isPredicate } from './utils';
/**
 * @template T
 * @param {?} operatorOrValue
 * @param {?=} existing
 * @return {?}
 */
function retrieveValue(operatorOrValue, existing) {
    // If state operator is a function
    // then call it with an original value
    if (isStateOperator(operatorOrValue)) {
        /** @type {?} */
        const value = operatorOrValue((/** @type {?} */ ((/** @type {?} */ (existing)))));
        return (/** @type {?} */ (value));
    }
    // If operator or value was not provided
    // e.g. `elseOperatorOrValue` is `undefined`
    // then we just return an original value
    if (isUndefined(operatorOrValue)) {
        return (/** @type {?} */ ((/** @type {?} */ (((/** @type {?} */ (existing)))))));
    }
    return (/** @type {?} */ (operatorOrValue));
}
/**
 * @template T
 * @param {?} condition - Condition can be a plain boolean value or a function,
 * that returns boolean, also this function can take a value as an argument
 * to which this state operator applies
 * @param {?} trueOperatorOrValue - Any value or a state operator
 * @param {?=} elseOperatorOrValue - Any value or a state operator
 * @return {?}
 */
export function iif(condition, trueOperatorOrValue, elseOperatorOrValue) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function iifOperator(existing) {
        // Convert the value to a boolean
        /** @type {?} */
        let result = !!condition;
        // but if it is a function then run it to get the result
        if (isPredicate(condition)) {
            result = condition(existing);
        }
        if (result) {
            return retrieveValue(trueOperatorOrValue, (/** @type {?} */ (existing)));
        }
        return retrieveValue((/** @type {?} */ (elseOperatorOrValue)), (/** @type {?} */ (existing)));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvb3BlcmF0b3JzL3NyYy9paWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWMsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7QUFHaEYsU0FBUyxhQUFhLENBQ3BCLGVBQXFDLEVBQ3JDLFFBQWtDO0lBRWxDLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUU7O2NBQzlCLEtBQUssR0FBRyxlQUFlLENBQUMsbUJBQUEsbUJBQUEsUUFBUSxFQUFDLEVBQWUsQ0FBQztRQUN2RCxPQUFPLG1CQUFBLEtBQUssRUFBaUIsQ0FBQztLQUMvQjtJQUVELHdDQUF3QztJQUN4Qyw0Q0FBNEM7SUFDNUMsd0NBQXdDO0lBQ3hDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sbUJBQUEsbUJBQUEsQ0FBQyxtQkFBSyxRQUFRLEVBQUEsQ0FBQyxFQUFDLEVBQWlCLENBQUM7S0FDMUM7SUFFRCxPQUFPLG1CQUFBLGVBQWUsRUFBaUIsQ0FBQztBQUMxQyxDQUFDOzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLEdBQUcsQ0FDakIsU0FBaUMsRUFDakMsbUJBQXlDLEVBQ3pDLG1CQUEwQztJQUUxQzs7OztJQUFPLFNBQVMsV0FBVyxDQUFDLFFBQWlDOzs7WUFFdkQsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBQ3hCLHdEQUF3RDtRQUN4RCxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQixNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLGFBQWEsQ0FBSSxtQkFBbUIsRUFBRSxtQkFBQSxRQUFRLEVBQWlCLENBQUMsQ0FBQztTQUN6RTtRQUVELE9BQU8sYUFBYSxDQUFJLG1CQUFBLG1CQUFtQixFQUFDLEVBQUUsbUJBQUEsUUFBUSxFQUFpQixDQUFDLENBQUM7SUFDM0UsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5cbmltcG9ydCB7IGlzU3RhdGVPcGVyYXRvciwgaXNVbmRlZmluZWQsIGlzUHJlZGljYXRlLCBSZXBhaXJUeXBlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL2ludGVybmFscyc7XG5cbmZ1bmN0aW9uIHJldHJpZXZlVmFsdWU8VD4oXG4gIG9wZXJhdG9yT3JWYWx1ZTogU3RhdGVPcGVyYXRvcjxUPiB8IFQsXG4gIGV4aXN0aW5nPzogUmVhZG9ubHk8UmVwYWlyVHlwZTxUPj5cbik6IFJlcGFpclR5cGU8VD4ge1xuICAvLyBJZiBzdGF0ZSBvcGVyYXRvciBpcyBhIGZ1bmN0aW9uXG4gIC8vIHRoZW4gY2FsbCBpdCB3aXRoIGFuIG9yaWdpbmFsIHZhbHVlXG4gIGlmIChpc1N0YXRlT3BlcmF0b3Iob3BlcmF0b3JPclZhbHVlKSkge1xuICAgIGNvbnN0IHZhbHVlID0gb3BlcmF0b3JPclZhbHVlKGV4aXN0aW5nISBhcyBSZWFkb25seTxUPik7XG4gICAgcmV0dXJuIHZhbHVlIGFzIFJlcGFpclR5cGU8VD47XG4gIH1cblxuICAvLyBJZiBvcGVyYXRvciBvciB2YWx1ZSB3YXMgbm90IHByb3ZpZGVkXG4gIC8vIGUuZy4gYGVsc2VPcGVyYXRvck9yVmFsdWVgIGlzIGB1bmRlZmluZWRgXG4gIC8vIHRoZW4gd2UganVzdCByZXR1cm4gYW4gb3JpZ2luYWwgdmFsdWVcbiAgaWYgKGlzVW5kZWZpbmVkKG9wZXJhdG9yT3JWYWx1ZSkpIHtcbiAgICByZXR1cm4gKDxhbnk+ZXhpc3RpbmcpISBhcyBSZXBhaXJUeXBlPFQ+O1xuICB9XG5cbiAgcmV0dXJuIG9wZXJhdG9yT3JWYWx1ZSBhcyBSZXBhaXJUeXBlPFQ+O1xufVxuXG4vKipcbiAqIEBwYXJhbSBjb25kaXRpb24gLSBDb25kaXRpb24gY2FuIGJlIGEgcGxhaW4gYm9vbGVhbiB2YWx1ZSBvciBhIGZ1bmN0aW9uLFxuICogdGhhdCByZXR1cm5zIGJvb2xlYW4sIGFsc28gdGhpcyBmdW5jdGlvbiBjYW4gdGFrZSBhIHZhbHVlIGFzIGFuIGFyZ3VtZW50XG4gKiB0byB3aGljaCB0aGlzIHN0YXRlIG9wZXJhdG9yIGFwcGxpZXNcbiAqIEBwYXJhbSB0cnVlT3BlcmF0b3JPclZhbHVlIC0gQW55IHZhbHVlIG9yIGEgc3RhdGUgb3BlcmF0b3JcbiAqIEBwYXJhbSBlbHNlT3BlcmF0b3JPclZhbHVlIC0gQW55IHZhbHVlIG9yIGEgc3RhdGUgb3BlcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlpZjxUPihcbiAgY29uZGl0aW9uOiBQcmVkaWNhdGU8VD4gfCBib29sZWFuLFxuICB0cnVlT3BlcmF0b3JPclZhbHVlOiBTdGF0ZU9wZXJhdG9yPFQ+IHwgVCxcbiAgZWxzZU9wZXJhdG9yT3JWYWx1ZT86IFN0YXRlT3BlcmF0b3I8VD4gfCBUXG4pOiBTdGF0ZU9wZXJhdG9yPFJlcGFpclR5cGU8VD4+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlpZk9wZXJhdG9yKGV4aXN0aW5nOiBSZWFkb25seTxSZXBhaXJUeXBlPFQ+Pik6IFJlcGFpclR5cGU8VD4ge1xuICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIGEgYm9vbGVhblxuICAgIGxldCByZXN1bHQgPSAhIWNvbmRpdGlvbjtcbiAgICAvLyBidXQgaWYgaXQgaXMgYSBmdW5jdGlvbiB0aGVuIHJ1biBpdCB0byBnZXQgdGhlIHJlc3VsdFxuICAgIGlmIChpc1ByZWRpY2F0ZShjb25kaXRpb24pKSB7XG4gICAgICByZXN1bHQgPSBjb25kaXRpb24oZXhpc3RpbmcpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXRyaWV2ZVZhbHVlPFQ+KHRydWVPcGVyYXRvck9yVmFsdWUsIGV4aXN0aW5nIGFzIFJlcGFpclR5cGU8VD4pO1xuICAgIH1cblxuICAgIHJldHVybiByZXRyaWV2ZVZhbHVlPFQ+KGVsc2VPcGVyYXRvck9yVmFsdWUhLCBleGlzdGluZyBhcyBSZXBhaXJUeXBlPFQ+KTtcbiAgfTtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: memoize.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function defaultEqualityCheck(a, b) {
    return a === b;
}
/**
 * @param {?} equalityCheck
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
        return false;
    }
    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    /** @type {?} */
    const length = prev.length;
    for (let i = 0; i < length; i++) {
        if (!equalityCheck(prev[i], next[i])) {
            return false;
        }
    }
    return true;
}
/**
 * Memoize a function on its last inputs only.
 * Originally from: https://github.com/reduxjs/reselect/blob/master/src/index.js
 *
 * @ignore
 * @template T
 * @param {?} func
 * @param {?=} equalityCheck
 * @return {?}
 */
export function memoize(func, equalityCheck = defaultEqualityCheck) {
    /** @type {?} */
    let lastArgs = null;
    /** @type {?} */
    let lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    /**
     * @return {?}
     */
    function memoized() {
        if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
            // apply arguments instead of spreading for performance.
            lastResult = ((/** @type {?} */ (func))).apply(null, arguments);
        }
        lastArgs = arguments;
        return lastResult;
    }
    ((/** @type {?} */ (memoized))).reset = (/**
     * @return {?}
     */
    function () {
        // The hidden (for now) ability to reset the memoization
        lastArgs = null;
        lastResult = null;
    });
    return (/** @type {?} */ (memoized));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL2ludGVybmFscy9zcmMvbWVtb2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBUyxvQkFBb0IsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUVELFNBQVMsMEJBQTBCLENBQ2pDLGFBQTBDLEVBQzFDLElBQXVCLEVBQ3ZCLElBQXVCO0lBRXZCLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNqRSxPQUFPLEtBQUssQ0FBQztLQUNkOzs7VUFHSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsSUFBTyxFQUNQLGFBQWEsR0FBRyxvQkFBb0I7O1FBRWhDLFFBQVEsR0FBc0IsSUFBSTs7UUFDbEMsVUFBVSxHQUFRLElBQUk7Ozs7O0lBRTFCLFNBQVMsUUFBUTtRQUNmLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ25FLHdEQUF3RDtZQUN4RCxVQUFVLEdBQUcsQ0FBQyxtQkFBVSxJQUFJLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxDQUFDLG1CQUFLLFFBQVEsRUFBQSxDQUFDLENBQUMsS0FBSzs7O0lBQUc7UUFDdEIsd0RBQXdEO1FBQ3hELFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDLENBQUEsQ0FBQztJQUNGLE9BQU8sbUJBQUEsUUFBUSxFQUFLLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRlZmF1bHRFcXVhbGl0eUNoZWNrKGE6IGFueSwgYjogYW55KSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuXG5mdW5jdGlvbiBhcmVBcmd1bWVudHNTaGFsbG93bHlFcXVhbChcbiAgZXF1YWxpdHlDaGVjazogKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuLFxuICBwcmV2OiBJQXJndW1lbnRzIHwgbnVsbCxcbiAgbmV4dDogSUFyZ3VtZW50cyB8IG51bGxcbikge1xuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXG4gIGNvbnN0IGxlbmd0aCA9IHByZXYubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFlcXVhbGl0eUNoZWNrKHByZXZbaV0sIG5leHRbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogTWVtb2l6ZSBhIGZ1bmN0aW9uIG9uIGl0cyBsYXN0IGlucHV0cyBvbmx5LlxuICogT3JpZ2luYWxseSBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcmVkdXhqcy9yZXNlbGVjdC9ibG9iL21hc3Rlci9zcmMvaW5kZXguanNcbiAqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZW1vaXplPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG4gIGZ1bmM6IFQsXG4gIGVxdWFsaXR5Q2hlY2sgPSBkZWZhdWx0RXF1YWxpdHlDaGVja1xuKTogVCB7XG4gIGxldCBsYXN0QXJnczogSUFyZ3VtZW50cyB8IG51bGwgPSBudWxsO1xuICBsZXQgbGFzdFJlc3VsdDogYW55ID0gbnVsbDtcbiAgLy8gd2UgcmVmZXJlbmNlIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyB0aGVtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgIGlmICghYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgbGFzdEFyZ3MsIGFyZ3VtZW50cykpIHtcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICBsYXN0UmVzdWx0ID0gKDxGdW5jdGlvbj5mdW5jKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9XG4gICg8YW55Pm1lbW9pemVkKS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRoZSBoaWRkZW4gKGZvciBub3cpIGFiaWxpdHkgdG8gcmVzZXQgdGhlIG1lbW9pemF0aW9uXG4gICAgbGFzdEFyZ3MgPSBudWxsO1xuICAgIGxhc3RSZXN1bHQgPSBudWxsO1xuICB9O1xuICByZXR1cm4gbWVtb2l6ZWQgYXMgVDtcbn1cbiJdfQ==
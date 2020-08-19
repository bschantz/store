/**
 * @fileoverview added by tsickle
 * Generated from: insert-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isNil } from './utils';
/**
 * @template T
 * @param {?} value - Value to insert
 * @param {?=} beforePosition
 * @return {?}
 */
export function insertItem(value, beforePosition) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function insertItemOperator(existing) {
        // Have to check explicitly for `null` and `undefined`
        // because `value` can be `0`, thus `!value` will return `true`
        if (isNil(value) && existing) {
            return (/** @type {?} */ (existing));
        }
        // Property may be dynamic and might not existed before
        if (!Array.isArray(existing)) {
            return [(/** @type {?} */ (value))];
        }
        /** @type {?} */
        const clone = existing.slice();
        /** @type {?} */
        let index = 0;
        // No need to call `isNumber`
        // as we are checking `> 0` not `>= 0`
        // everything except number will return false here
        if ((/** @type {?} */ (beforePosition)) > 0) {
            index = (/** @type {?} */ (beforePosition));
        }
        clone.splice(index, 0, (/** @type {?} */ (value)));
        return clone;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9vcGVyYXRvcnMvc3JjL2luc2VydC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLFNBQVMsQ0FBQzs7Ozs7OztBQU01QyxNQUFNLFVBQVUsVUFBVSxDQUN4QixLQUFRLEVBQ1IsY0FBdUI7SUFFdkI7Ozs7SUFBTyxTQUFTLGtCQUFrQixDQUFDLFFBQW1DO1FBQ3BFLHNEQUFzRDtRQUN0RCwrREFBK0Q7UUFDL0QsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxFQUFFO1lBQzVCLE9BQU8sbUJBQUEsUUFBUSxFQUFtQixDQUFDO1NBQ3BDO1FBRUQsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLEVBQWlCLENBQUMsQ0FBQztTQUNqQzs7Y0FFSyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRTs7WUFFMUIsS0FBSyxHQUFHLENBQUM7UUFFYiw2QkFBNkI7UUFDN0Isc0NBQXNDO1FBQ3RDLGtEQUFrRDtRQUNsRCxJQUFJLG1CQUFBLGNBQWMsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixLQUFLLEdBQUcsbUJBQUEsY0FBYyxFQUFDLENBQUM7U0FDekI7UUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUM7UUFDL0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVPcGVyYXRvciB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IGlzTmlsLCBSZXBhaXJUeXBlIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHZhbHVlIC0gVmFsdWUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0gW2JlZm9yZVBvc2l0aW9uXSAtICBTcGVjaWZpZWQgaW5kZXggdG8gaW5zZXJ0IHZhbHVlIGJlZm9yZSwgb3B0aW9uYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEl0ZW08VD4oXG4gIHZhbHVlOiBULFxuICBiZWZvcmVQb3NpdGlvbj86IG51bWJlclxuKTogU3RhdGVPcGVyYXRvcjxSZXBhaXJUeXBlPFQ+W10+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluc2VydEl0ZW1PcGVyYXRvcihleGlzdGluZzogUmVhZG9ubHk8UmVwYWlyVHlwZTxUPltdPik6IFJlcGFpclR5cGU8VD5bXSB7XG4gICAgLy8gSGF2ZSB0byBjaGVjayBleHBsaWNpdGx5IGZvciBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXG4gICAgLy8gYmVjYXVzZSBgdmFsdWVgIGNhbiBiZSBgMGAsIHRodXMgYCF2YWx1ZWAgd2lsbCByZXR1cm4gYHRydWVgXG4gICAgaWYgKGlzTmlsKHZhbHVlKSAmJiBleGlzdGluZykge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nIGFzIFJlcGFpclR5cGU8VD5bXTtcbiAgICB9XG5cbiAgICAvLyBQcm9wZXJ0eSBtYXkgYmUgZHluYW1pYyBhbmQgbWlnaHQgbm90IGV4aXN0ZWQgYmVmb3JlXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4aXN0aW5nKSkge1xuICAgICAgcmV0dXJuIFt2YWx1ZSBhcyBSZXBhaXJUeXBlPFQ+XTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9uZSA9IGV4aXN0aW5nLnNsaWNlKCk7XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgLy8gTm8gbmVlZCB0byBjYWxsIGBpc051bWJlcmBcbiAgICAvLyBhcyB3ZSBhcmUgY2hlY2tpbmcgYD4gMGAgbm90IGA+PSAwYFxuICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IG51bWJlciB3aWxsIHJldHVybiBmYWxzZSBoZXJlXG4gICAgaWYgKGJlZm9yZVBvc2l0aW9uISA+IDApIHtcbiAgICAgIGluZGV4ID0gYmVmb3JlUG9zaXRpb24hO1xuICAgIH1cblxuICAgIGNsb25lLnNwbGljZShpbmRleCwgMCwgdmFsdWUgYXMgUmVwYWlyVHlwZTxUPik7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9O1xufVxuIl19
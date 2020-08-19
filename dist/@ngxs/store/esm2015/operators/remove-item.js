/**
 * @fileoverview added by tsickle
 * Generated from: remove-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPredicate, isNumber, invalidIndex } from './utils';
/**
 * @template T
 * @param {?} selector - index or predicate to remove an item from an array by
 * @return {?}
 */
export function removeItem(selector) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function removeItemOperator(existing) {
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
        const clone = existing.slice();
        clone.splice(index, 1);
        return clone;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9vcGVyYXRvcnMvc3JjL3JlbW92ZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFjLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFLMUUsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsUUFBK0I7SUFFL0I7Ozs7SUFBTyxTQUFTLGtCQUFrQixDQUFDLFFBQW1DOztZQUNoRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxtQkFBQSxRQUFRLEVBQW1CLENBQUM7U0FDcEM7O2NBRUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVPcGVyYXRvciB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vaW50ZXJuYWxzJztcbmltcG9ydCB7IGlzUHJlZGljYXRlLCBpc051bWJlciwgaW52YWxpZEluZGV4LCBSZXBhaXJUeXBlIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHNlbGVjdG9yIC0gaW5kZXggb3IgcHJlZGljYXRlIHRvIHJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkgYnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW08VD4oXG4gIHNlbGVjdG9yOiBudW1iZXIgfCBQcmVkaWNhdGU8VD5cbik6IFN0YXRlT3BlcmF0b3I8UmVwYWlyVHlwZTxUPltdPiB7XG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmVJdGVtT3BlcmF0b3IoZXhpc3Rpbmc6IFJlYWRvbmx5PFJlcGFpclR5cGU8VD5bXT4pOiBSZXBhaXJUeXBlPFQ+W10ge1xuICAgIGxldCBpbmRleCA9IC0xO1xuXG4gICAgaWYgKGlzUHJlZGljYXRlKHNlbGVjdG9yKSkge1xuICAgICAgaW5kZXggPSBleGlzdGluZy5maW5kSW5kZXgoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoc2VsZWN0b3IpKSB7XG4gICAgICBpbmRleCA9IHNlbGVjdG9yO1xuICAgIH1cblxuICAgIGlmIChpbnZhbGlkSW5kZXgoaW5kZXgpKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmcgYXMgUmVwYWlyVHlwZTxUPltdO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb25lID0gZXhpc3Rpbmcuc2xpY2UoKTtcbiAgICBjbG9uZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfTtcbn1cbiJdfQ==
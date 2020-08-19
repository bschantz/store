/**
 * @fileoverview added by tsickle
 * Generated from: src/decorators/selector-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { selectorOptionsMetaAccessor } from '../utils/selector-utils';
/**
 * Decorator for setting selector options at a method or class level.
 * @param {?} options
 * @return {?}
 */
export function SelectorOptions(options) {
    return (/** @type {?} */ (((/**
     * @template T
     * @param {?} target
     * @param {?} methodName
     * @param {?} descriptor
     * @return {?}
     */
    function decorate(target, methodName, descriptor) {
        if (methodName) {
            // Method Decorator
            /** @type {?} */
            const originalFn = descriptor.value || ((/** @type {?} */ (descriptor))).originalFn;
            if (originalFn) {
                selectorOptionsMetaAccessor.defineOptions(originalFn, options);
            }
        }
        else {
            // Class Decorator
            selectorOptionsMetaAccessor.defineOptions(target, options);
        }
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3Itb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9kZWNvcmF0b3JzL3NlbGVjdG9yLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0FBS3RFLE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBOEI7SUFDNUQsT0FBTyxtQkFBa0M7Ozs7Ozs7SUFDdkMsU0FBUyxRQUFRLENBQ2YsTUFBVyxFQUNYLFVBQWtCLEVBQ2xCLFVBQXNDO1FBRXRDLElBQUksVUFBVSxFQUFFOzs7a0JBRVIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxtQkFBSyxVQUFVLEVBQUEsQ0FBQyxDQUFDLFVBQVU7WUFDbkUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsMkJBQTJCLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNoRTtTQUNGO2FBQU07WUFDTCxrQkFBa0I7WUFDbEIsMkJBQTJCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUMsRUFDRixFQUFBLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhcmVkU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcbmltcG9ydCB7IHNlbGVjdG9yT3B0aW9uc01ldGFBY2Nlc3NvciB9IGZyb20gJy4uL3V0aWxzL3NlbGVjdG9yLXV0aWxzJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgZm9yIHNldHRpbmcgc2VsZWN0b3Igb3B0aW9ucyBhdCBhIG1ldGhvZCBvciBjbGFzcyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdG9yT3B0aW9ucyhvcHRpb25zOiBTaGFyZWRTZWxlY3Rvck9wdGlvbnMpIHtcbiAgcmV0dXJuIDxDbGFzc0RlY29yYXRvciAmIE1ldGhvZERlY29yYXRvcj4oXG4gICAgZnVuY3Rpb24gZGVjb3JhdGU8VD4oXG4gICAgICB0YXJnZXQ6IGFueSxcbiAgICAgIG1ldGhvZE5hbWU6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPFQ+XG4gICAgKSB7XG4gICAgICBpZiAobWV0aG9kTmFtZSkge1xuICAgICAgICAvLyBNZXRob2QgRGVjb3JhdG9yXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRm4gPSBkZXNjcmlwdG9yLnZhbHVlIHx8ICg8YW55PmRlc2NyaXB0b3IpLm9yaWdpbmFsRm47XG4gICAgICAgIGlmIChvcmlnaW5hbEZuKSB7XG4gICAgICAgICAgc2VsZWN0b3JPcHRpb25zTWV0YUFjY2Vzc29yLmRlZmluZU9wdGlvbnMob3JpZ2luYWxGbiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENsYXNzIERlY29yYXRvclxuICAgICAgICBzZWxlY3Rvck9wdGlvbnNNZXRhQWNjZXNzb3IuZGVmaW5lT3B0aW9ucyh0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: angular.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getPlatform, COMPILER_OPTIONS } from '@angular/core';
import { memoize } from './memoize';
/**
 * @return {?}
 */
function _isAngularInTestMode() {
    /** @type {?} */
    const platformRef = getPlatform();
    if (!platformRef)
        return false;
    /** @type {?} */
    const compilerOptions = platformRef.injector.get(COMPILER_OPTIONS, null);
    if (!compilerOptions)
        return false;
    /** @type {?} */
    const isInTestMode = compilerOptions.some((/**
     * @param {?} item
     * @return {?}
     */
    (item) => {
        /** @type {?} */
        const providers = (item && item.providers) || [];
        return providers.some((/**
         * @param {?} provider
         * @return {?}
         */
        (provider) => {
            return ((provider && provider.provide && provider.provide.name === 'MockNgModuleResolver') ||
                false);
        }));
    }));
    return isInTestMode;
}
/** @type {?} */
export const isAngularInTestMode = memoize(_isAngularInTestMode);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL2ludGVybmFscy9zcmMvYW5ndWxhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFcEMsU0FBUyxvQkFBb0I7O1VBQ3JCLFdBQVcsR0FBdUIsV0FBVyxFQUFFO0lBQ3JELElBQUksQ0FBQyxXQUFXO1FBQUUsT0FBTyxLQUFLLENBQUM7O1VBQ3pCLGVBQWUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBTSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7SUFDN0UsSUFBSSxDQUFDLGVBQWU7UUFBRSxPQUFPLEtBQUssQ0FBQzs7VUFDN0IsWUFBWSxHQUFHLGVBQWUsQ0FBQyxJQUFJOzs7O0lBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7O2NBQzVELFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtRQUNoRCxPQUFPLFNBQVMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUN0QyxPQUFPLENBQ0wsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxzQkFBc0IsQ0FBQztnQkFDbEYsS0FBSyxDQUNOLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztJQUNGLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7O0FBRUQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBsYXRmb3JtLCBDT01QSUxFUl9PUFRJT05TLCBDb21waWxlck9wdGlvbnMsIFBsYXRmb3JtUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZW1vaXplIH0gZnJvbSAnLi9tZW1vaXplJztcblxuZnVuY3Rpb24gX2lzQW5ndWxhckluVGVzdE1vZGUoKSB7XG4gIGNvbnN0IHBsYXRmb3JtUmVmOiBQbGF0Zm9ybVJlZiB8IG51bGwgPSBnZXRQbGF0Zm9ybSgpO1xuICBpZiAoIXBsYXRmb3JtUmVmKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IHBsYXRmb3JtUmVmLmluamVjdG9yLmdldDxhbnk+KENPTVBJTEVSX09QVElPTlMsIG51bGwpO1xuICBpZiAoIWNvbXBpbGVyT3B0aW9ucykgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBpc0luVGVzdE1vZGUgPSBjb21waWxlck9wdGlvbnMuc29tZSgoaXRlbTogQ29tcGlsZXJPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gKGl0ZW0gJiYgaXRlbS5wcm92aWRlcnMpIHx8IFtdO1xuICAgIHJldHVybiBwcm92aWRlcnMuc29tZSgocHJvdmlkZXI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKHByb3ZpZGVyICYmIHByb3ZpZGVyLnByb3ZpZGUgJiYgcHJvdmlkZXIucHJvdmlkZS5uYW1lID09PSAnTW9ja05nTW9kdWxlUmVzb2x2ZXInKSB8fFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBpc0luVGVzdE1vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBpc0FuZ3VsYXJJblRlc3RNb2RlID0gbWVtb2l6ZShfaXNBbmd1bGFySW5UZXN0TW9kZSk7XG4iXX0=
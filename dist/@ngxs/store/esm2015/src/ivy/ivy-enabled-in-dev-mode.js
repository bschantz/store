/**
 * @fileoverview added by tsickle
 * Generated from: src/ivy/ivy-enabled-in-dev-mode.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
import { ReplaySubject } from 'rxjs';
/** @type {?} */
export const ivyEnabledInDevMode$ = new ReplaySubject(1);
/**
 * Ivy exposes helper functions to the global `window.ng` object.
 * Those functions are `getComponent, getContext,
 * getListeners, getViewComponent, getHostElement, getInjector,
 * getRootComponents, getDirectives, getDebugNode`
 * Previously, old view engine exposed `window.ng.coreTokens` and
 * `window.ng.probe` if an application was in development/production.
 * Ivy doesn't expose these functions in production. Developers will be able
 * to see warnings in both JIT/AOT modes, but only if an application
 * is in development.
 * @return {?}
 */
export function setIvyEnabledInDevMode() {
    try {
        // `try-catch` will also handle server-side rendering, as
        // `window is not defined` will not be thrown.
        /** @type {?} */
        const ng = ((/** @type {?} */ (window))).ng;
        /** @type {?} */
        const _viewEngineEnabled = !!ng.probe && !!ng.coreTokens;
        /** @type {?} */
        const _ivyEnabledInDevMode = !_viewEngineEnabled && isDevMode();
        ivyEnabledInDevMode$.next(_ivyEnabledInDevMode);
    }
    catch (_a) {
        ivyEnabledInDevMode$.next(false);
    }
    finally {
        ivyEnabledInDevMode$.complete();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZ5LWVuYWJsZWQtaW4tZGV2LW1vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvaXZ5L2l2eS1lbmFibGVkLWluLWRldi1tb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVyQyxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYWpFLE1BQU0sVUFBVSxzQkFBc0I7SUFDcEMsSUFBSTs7OztjQUdJLEVBQUUsR0FBRyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsRUFBRTs7Y0FDdkIsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVOztjQUNsRCxvQkFBb0IsR0FBRyxDQUFDLGtCQUFrQixJQUFJLFNBQVMsRUFBRTtRQUMvRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUNqRDtJQUFDLFdBQU07UUFDTixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7WUFBUztRQUNSLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY29uc3QgaXZ5RW5hYmxlZEluRGV2TW9kZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcblxuLyoqXG4gKiBJdnkgZXhwb3NlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHRoZSBnbG9iYWwgYHdpbmRvdy5uZ2Agb2JqZWN0LlxuICogVGhvc2UgZnVuY3Rpb25zIGFyZSBgZ2V0Q29tcG9uZW50LCBnZXRDb250ZXh0LFxuICogZ2V0TGlzdGVuZXJzLCBnZXRWaWV3Q29tcG9uZW50LCBnZXRIb3N0RWxlbWVudCwgZ2V0SW5qZWN0b3IsXG4gKiBnZXRSb290Q29tcG9uZW50cywgZ2V0RGlyZWN0aXZlcywgZ2V0RGVidWdOb2RlYFxuICogUHJldmlvdXNseSwgb2xkIHZpZXcgZW5naW5lIGV4cG9zZWQgYHdpbmRvdy5uZy5jb3JlVG9rZW5zYCBhbmRcbiAqIGB3aW5kb3cubmcucHJvYmVgIGlmIGFuIGFwcGxpY2F0aW9uIHdhcyBpbiBkZXZlbG9wbWVudC9wcm9kdWN0aW9uLlxuICogSXZ5IGRvZXNuJ3QgZXhwb3NlIHRoZXNlIGZ1bmN0aW9ucyBpbiBwcm9kdWN0aW9uLiBEZXZlbG9wZXJzIHdpbGwgYmUgYWJsZVxuICogdG8gc2VlIHdhcm5pbmdzIGluIGJvdGggSklUL0FPVCBtb2RlcywgYnV0IG9ubHkgaWYgYW4gYXBwbGljYXRpb25cbiAqIGlzIGluIGRldmVsb3BtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SXZ5RW5hYmxlZEluRGV2TW9kZSgpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICAvLyBgdHJ5LWNhdGNoYCB3aWxsIGFsc28gaGFuZGxlIHNlcnZlci1zaWRlIHJlbmRlcmluZywgYXNcbiAgICAvLyBgd2luZG93IGlzIG5vdCBkZWZpbmVkYCB3aWxsIG5vdCBiZSB0aHJvd24uXG4gICAgY29uc3QgbmcgPSAod2luZG93IGFzIGFueSkubmc7XG4gICAgY29uc3QgX3ZpZXdFbmdpbmVFbmFibGVkID0gISFuZy5wcm9iZSAmJiAhIW5nLmNvcmVUb2tlbnM7XG4gICAgY29uc3QgX2l2eUVuYWJsZWRJbkRldk1vZGUgPSAhX3ZpZXdFbmdpbmVFbmFibGVkICYmIGlzRGV2TW9kZSgpO1xuICAgIGl2eUVuYWJsZWRJbkRldk1vZGUkLm5leHQoX2l2eUVuYWJsZWRJbkRldk1vZGUpO1xuICB9IGNhdGNoIHtcbiAgICBpdnlFbmFibGVkSW5EZXZNb2RlJC5uZXh0KGZhbHNlKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpdnlFbmFibGVkSW5EZXZNb2RlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * Generated from: src/internals.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformServer } from '@angular/common';
import { StateToken } from '@ngxs/store';
/**
 * If the `key` option is not provided then the below constant
 * will be used as a default key
 * @type {?}
 */
export const DEFAULT_STATE_KEY = '@@STATE';
/**
 * This key is used to retrieve static metadatas on state classes.
 * This constant is taken from the core codebase
 * @type {?}
 */
const META_OPTIONS_KEY = 'NGXS_OPTIONS_META';
/**
 * @param {?} key
 * @return {?}
 */
function transformKeyOption(key) {
    if (!Array.isArray(key)) {
        key = [key];
    }
    return key.map((/**
     * @param {?} token
     * @return {?}
     */
    (token) => {
        if (typeof token === 'string') {
            return token;
        }
        else if (token instanceof StateToken) {
            return token.getName();
        }
        /** @type {?} */
        const options = ((/** @type {?} */ (token)))[META_OPTIONS_KEY];
        return options.name;
    }));
}
/**
 * @param {?} options
 * @return {?}
 */
export function storageOptionsFactory(options) {
    if (options !== undefined && options.key) {
        options.key = transformKeyOption(options.key);
    }
    return Object.assign({ key: [DEFAULT_STATE_KEY], storage: 0 /* LocalStorage */, serialize: JSON.stringify, deserialize: JSON.parse, beforeSerialize: (/**
         * @param {?} obj
         * @return {?}
         */
        obj => obj), afterDeserialize: (/**
         * @param {?} obj
         * @return {?}
         */
        obj => obj) }, options);
}
/**
 * @param {?} options
 * @param {?} platformId
 * @return {?}
 */
export function engineFactory(options, platformId) {
    if (isPlatformServer(platformId)) {
        return null;
    }
    if (options.storage === 0 /* LocalStorage */) {
        return localStorage;
    }
    else if (options.storage === 1 /* SessionStorage */) {
        return sessionStorage;
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmFnZS1wbHVnaW4vc3JjL2ludGVybmFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVF6QyxNQUFNLE9BQU8saUJBQWlCLEdBQUcsU0FBUzs7Ozs7O01BZ0JwQyxnQkFBZ0IsR0FBRyxtQkFBbUI7Ozs7O0FBRTVDLFNBQVMsa0JBQWtCLENBQUMsR0FBZTtJQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN2QixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNiO0lBRUQsT0FBTyxHQUFHLENBQUMsR0FBRzs7OztJQUFDLENBQUMsS0FBNEMsRUFBRSxFQUFFO1FBQzlELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLEtBQUssWUFBWSxVQUFVLEVBQUU7WUFDdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7O2NBRUssT0FBTyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsT0FBNkM7SUFFN0MsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7UUFDeEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0M7SUFFRCx1QkFDRSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUN4QixPQUFPLHdCQUNQLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFDdkIsZUFBZTs7OztRQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUMzQixnQkFBZ0I7Ozs7UUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FDekIsT0FBTyxFQUNWO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsT0FBaUMsRUFDakMsVUFBa0I7SUFFbEIsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyx5QkFBK0IsRUFBRTtRQUNsRCxPQUFPLFlBQVksQ0FBQztLQUNyQjtTQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sMkJBQWlDLEVBQUU7UUFDM0QsT0FBTyxjQUFjLENBQUM7S0FDdkI7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0YXRlQ2xhc3MgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgU3RhdGVUb2tlbiB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcblxuaW1wb3J0IHsgU3RvcmFnZU9wdGlvbiwgU3RvcmFnZUVuZ2luZSwgTmd4c1N0b3JhZ2VQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuLyoqXG4gKiBJZiB0aGUgYGtleWAgb3B0aW9uIGlzIG5vdCBwcm92aWRlZCB0aGVuIHRoZSBiZWxvdyBjb25zdGFudFxuICogd2lsbCBiZSB1c2VkIGFzIGEgZGVmYXVsdCBrZXlcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RBVEVfS0VZID0gJ0BAU1RBVEUnO1xuXG4vKipcbiAqIEludGVybmFsIHR5cGUgZGVmaW5pdGlvbiBmb3IgdGhlIGBrZXlgIG9wdGlvbiBwcm92aWRlZFxuICogaW4gdGhlIGBmb3JSb290YCBtZXRob2Qgd2hlbiBpbXBvcnRpbmcgbW9kdWxlXG4gKi9cbmV4cG9ydCB0eXBlIFN0b3JhZ2VLZXkgPVxuICB8IHN0cmluZ1xuICB8IFN0YXRlQ2xhc3NcbiAgfCBTdGF0ZVRva2VuPGFueT5cbiAgfCAoc3RyaW5nIHwgU3RhdGVDbGFzcyB8IFN0YXRlVG9rZW48YW55PilbXTtcblxuLyoqXG4gKiBUaGlzIGtleSBpcyB1c2VkIHRvIHJldHJpZXZlIHN0YXRpYyBtZXRhZGF0YXMgb24gc3RhdGUgY2xhc3Nlcy5cbiAqIFRoaXMgY29uc3RhbnQgaXMgdGFrZW4gZnJvbSB0aGUgY29yZSBjb2RlYmFzZVxuICovXG5jb25zdCBNRVRBX09QVElPTlNfS0VZID0gJ05HWFNfT1BUSU9OU19NRVRBJztcblxuZnVuY3Rpb24gdHJhbnNmb3JtS2V5T3B0aW9uKGtleTogU3RvcmFnZUtleSk6IHN0cmluZ1tdIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICBrZXkgPSBba2V5XTtcbiAgfVxuXG4gIHJldHVybiBrZXkubWFwKCh0b2tlbjogc3RyaW5nIHwgU3RhdGVDbGFzcyB8IFN0YXRlVG9rZW48YW55PikgPT4ge1xuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSBlbHNlIGlmICh0b2tlbiBpbnN0YW5jZW9mIFN0YXRlVG9rZW4pIHtcbiAgICAgIHJldHVybiB0b2tlbi5nZXROYW1lKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9ICh0b2tlbiBhcyBhbnkpW01FVEFfT1BUSU9OU19LRVldO1xuICAgIHJldHVybiBvcHRpb25zLm5hbWU7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZU9wdGlvbnNGYWN0b3J5KFxuICBvcHRpb25zOiBOZ3hzU3RvcmFnZVBsdWdpbk9wdGlvbnMgfCB1bmRlZmluZWRcbik6IE5neHNTdG9yYWdlUGx1Z2luT3B0aW9ucyB7XG4gIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5rZXkpIHtcbiAgICBvcHRpb25zLmtleSA9IHRyYW5zZm9ybUtleU9wdGlvbihvcHRpb25zLmtleSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGtleTogW0RFRkFVTFRfU1RBVEVfS0VZXSxcbiAgICBzdG9yYWdlOiBTdG9yYWdlT3B0aW9uLkxvY2FsU3RvcmFnZSxcbiAgICBzZXJpYWxpemU6IEpTT04uc3RyaW5naWZ5LFxuICAgIGRlc2VyaWFsaXplOiBKU09OLnBhcnNlLFxuICAgIGJlZm9yZVNlcmlhbGl6ZTogb2JqID0+IG9iaixcbiAgICBhZnRlckRlc2VyaWFsaXplOiBvYmogPT4gb2JqLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZ2luZUZhY3RvcnkoXG4gIG9wdGlvbnM6IE5neHNTdG9yYWdlUGx1Z2luT3B0aW9ucyxcbiAgcGxhdGZvcm1JZDogc3RyaW5nXG4pOiBTdG9yYWdlRW5naW5lIHwgbnVsbCB7XG4gIGlmIChpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAob3B0aW9ucy5zdG9yYWdlID09PSBTdG9yYWdlT3B0aW9uLkxvY2FsU3RvcmFnZSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5zdG9yYWdlID09PSBTdG9yYWdlT3B0aW9uLlNlc3Npb25TdG9yYWdlKSB7XG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=
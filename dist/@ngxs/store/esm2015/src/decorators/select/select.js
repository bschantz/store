/**
 * @fileoverview added by tsickle
 * Generated from: src/decorators/select/select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelectObservable, createSelectorFn } from './symbols';
/**
 * Decorator for selecting a slice of state from the store.
 * @template T
 * @param {?=} rawSelector
 * @param {...?} paths
 * @return {?}
 */
export function Select(rawSelector, ...paths) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        /** @type {?} */
        const name = key.toString();
        /** @type {?} */
        const selectorId = `__${name}__selector`;
        /** @type {?} */
        const selector = createSelectorFn(name, rawSelector, paths);
        Object.defineProperties(target, {
            [selectorId]: {
                writable: true,
                enumerable: false,
                configurable: true
            },
            [name]: {
                enumerable: true,
                configurable: true,
                /**
                 * @return {?}
                 */
                get() {
                    return this[selectorId] || (this[selectorId] = createSelectObservable(selector));
                }
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL2RlY29yYXRvcnMvc2VsZWN0L3NlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7O0FBS25GLE1BQU0sVUFBVSxNQUFNLENBQUksV0FBZSxFQUFFLEdBQUcsS0FBZTtJQUMzRDs7Ozs7SUFBTyxVQUFTLE1BQU0sRUFBRSxHQUFHOztjQUNuQixJQUFJLEdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRTs7Y0FDN0IsVUFBVSxHQUFHLEtBQUssSUFBSSxZQUFZOztjQUNsQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUM7UUFFM0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUM5QixDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixZQUFZLEVBQUUsSUFBSTthQUNuQjtZQUNELENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFlBQVksRUFBRSxJQUFJOzs7O2dCQUNsQixHQUFHO29CQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RPYnNlcnZhYmxlLCBjcmVhdGVTZWxlY3RvckZuLCBQcm9wZXJ0eVR5cGUgfSBmcm9tICcuL3N5bWJvbHMnO1xuXG4vKipcbiAqIERlY29yYXRvciBmb3Igc2VsZWN0aW5nIGEgc2xpY2Ugb2Ygc3RhdGUgZnJvbSB0aGUgc3RvcmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Q8VD4ocmF3U2VsZWN0b3I/OiBULCAuLi5wYXRoczogc3RyaW5nW10pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQsIGtleSk6IHZvaWQge1xuICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xuICAgIGNvbnN0IHNlbGVjdG9ySWQgPSBgX18ke25hbWV9X19zZWxlY3RvcmA7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvckZuKG5hbWUsIHJhd1NlbGVjdG9yLCBwYXRocyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcbiAgICAgIFtzZWxlY3RvcklkXToge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIFtuYW1lXToge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpOiBQcm9wZXJ0eVR5cGU8VD4ge1xuICAgICAgICAgIHJldHVybiB0aGlzW3NlbGVjdG9ySWRdIHx8ICh0aGlzW3NlbGVjdG9ySWRdID0gY3JlYXRlU2VsZWN0T2JzZXJ2YWJsZShzZWxlY3RvcikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iXX0=
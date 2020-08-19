/**
 * @fileoverview added by tsickle
 * Generated from: patch.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isStateOperator } from './utils';
/**
 * @template T
 * @param {?} patchObject
 * @return {?}
 */
export function patch(patchObject) {
    return (/**
     * @template U
     * @param {?} existing
     * @return {?}
     */
    function patchStateOperator(existing) {
        /** @type {?} */
        let clone = null;
        for (const k in patchObject) {
            /** @type {?} */
            const newValue = patchObject[k];
            /** @type {?} */
            const existingPropValue = existing[k];
            /** @type {?} */
            const newPropValue = isStateOperator(newValue)
                ? newValue((/** @type {?} */ (existingPropValue)))
                : newValue;
            if (newPropValue !== existingPropValue) {
                if (!clone) {
                    clone = Object.assign({}, ((/** @type {?} */ (existing))));
                }
                clone[k] = newPropValue;
            }
        }
        return clone || existing;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9vcGVyYXRvcnMvc3JjL3BhdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBVTFDLE1BQU0sVUFBVSxLQUFLLENBQUksV0FBeUI7SUFDaEQ7Ozs7O0lBQU8sU0FBUyxrQkFBa0IsQ0FBMkIsUUFBcUI7O1lBQzVFLEtBQUssR0FBRyxJQUFJO1FBQ2hCLEtBQUssTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFOztrQkFDckIsUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7O2tCQUN6QixpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDOztrQkFDL0IsWUFBWSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQUssaUJBQWlCLEVBQUEsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLFFBQVE7WUFDWixJQUFJLFlBQVksS0FBSyxpQkFBaUIsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDVixLQUFLLHFCQUFRLENBQUMsbUJBQUssUUFBUSxFQUFBLENBQUMsQ0FBRSxDQUFDO2lCQUNoQztnQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO2FBQ3pCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssSUFBSSxRQUFRLENBQUM7SUFDM0IsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5pbXBvcnQgeyBpc1N0YXRlT3BlcmF0b3IgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgUGF0Y2hTcGVjPFQ+ID0geyBbUCBpbiBrZXlvZiBUXT86IFRbUF0gfCBTdGF0ZU9wZXJhdG9yPE5vbk51bGxhYmxlPFRbUF0+PiB9O1xuXG50eXBlIFBhdGNoVmFsdWVzPFQ+ID0ge1xuICByZWFkb25seSBbUCBpbiBrZXlvZiBUXT86IFRbUF0gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGluZmVyIFIgPyBSIDogVFtQXTtcbn07XG5cbnR5cGUgUGF0Y2hPcGVyYXRvcjxUPiA9IDxVIGV4dGVuZHMgUGF0Y2hWYWx1ZXM8VD4+KGV4aXN0aW5nOiBSZWFkb25seTxVPikgPT4gVTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoPFQ+KHBhdGNoT2JqZWN0OiBQYXRjaFNwZWM8VD4pOiBQYXRjaE9wZXJhdG9yPFQ+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHBhdGNoU3RhdGVPcGVyYXRvcjxVIGV4dGVuZHMgUGF0Y2hWYWx1ZXM8VD4+KGV4aXN0aW5nOiBSZWFkb25seTxVPik6IFUge1xuICAgIGxldCBjbG9uZSA9IG51bGw7XG4gICAgZm9yIChjb25zdCBrIGluIHBhdGNoT2JqZWN0KSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHBhdGNoT2JqZWN0W2tdO1xuICAgICAgY29uc3QgZXhpc3RpbmdQcm9wVmFsdWUgPSBleGlzdGluZ1trXTtcbiAgICAgIGNvbnN0IG5ld1Byb3BWYWx1ZSA9IGlzU3RhdGVPcGVyYXRvcihuZXdWYWx1ZSlcbiAgICAgICAgPyBuZXdWYWx1ZSg8YW55PmV4aXN0aW5nUHJvcFZhbHVlKVxuICAgICAgICA6IG5ld1ZhbHVlO1xuICAgICAgaWYgKG5ld1Byb3BWYWx1ZSAhPT0gZXhpc3RpbmdQcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKCFjbG9uZSkge1xuICAgICAgICAgIGNsb25lID0geyAuLi4oPGFueT5leGlzdGluZykgfTtcbiAgICAgICAgfVxuICAgICAgICBjbG9uZVtrXSA9IG5ld1Byb3BWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsb25lIHx8IGV4aXN0aW5nO1xuICB9O1xufVxuIl19
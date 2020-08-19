/**
 * @fileoverview added by tsickle
 * Generated from: src/decorators/select/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../../configs/messages.config';
import { propGetter } from '../../internal/internals';
import { SelectFactory } from './select-factory';
/** @type {?} */
const DOLLAR_CHAR_CODE = 36;
/**
 * @template T
 * @param {?} selector
 * @return {?}
 */
export function createSelectObservable(selector) {
    if (!SelectFactory.store) {
        throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.SELECT_FACTORY_NOT_CONNECTED]());
    }
    return SelectFactory.store.select(selector);
}
/**
 * @param {?} name
 * @param {?=} rawSelector
 * @param {?=} paths
 * @return {?}
 */
export function createSelectorFn(name, rawSelector, paths = []) {
    rawSelector = !rawSelector ? removeDollarAtTheEnd(name) : rawSelector;
    if (typeof rawSelector === 'string') {
        /** @type {?} */
        const propsArray = paths.length
            ? [rawSelector, ...paths]
            : rawSelector.split('.');
        return propGetter(propsArray, (/** @type {?} */ (SelectFactory.config)));
    }
    return rawSelector;
}
/**
 * \@example If `foo$` => make it just `foo`
 * @param {?} name
 * @return {?}
 */
export function removeDollarAtTheEnd(name) {
    /** @type {?} */
    const lastCharIndex = name.length - 1;
    /** @type {?} */
    const dollarAtTheEnd = name.charCodeAt(lastCharIndex) === DOLLAR_CHAR_CODE;
    return dollarAtTheEnd ? name.slice(0, lastCharIndex) : name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9kZWNvcmF0b3JzL3NlbGVjdC9zeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztNQUkzQyxnQkFBZ0IsR0FBRyxFQUFFOzs7Ozs7QUFFM0IsTUFBTSxVQUFVLHNCQUFzQixDQUFVLFFBQWE7SUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xGO0lBRUQsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxXQUFpQixFQUFFLFFBQWtCLEVBQUU7SUFDcEYsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBRXRFLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFOztjQUM3QixVQUFVLEdBQWEsS0FBSyxDQUFDLE1BQU07WUFDdkMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxQixPQUFPLFVBQVUsQ0FBQyxVQUFVLEVBQUUsbUJBQUEsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7S0FDdEQ7SUFFRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsSUFBWTs7VUFDekMsYUFBYSxHQUFXLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7VUFDdkMsY0FBYyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssZ0JBQWdCO0lBQ25GLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENPTkZJR19NRVNTQUdFUywgVkFMSURBVElPTl9DT0RFIH0gZnJvbSAnLi4vLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xuaW1wb3J0IHsgcHJvcEdldHRlciB9IGZyb20gJy4uLy4uL2ludGVybmFsL2ludGVybmFscyc7XG5pbXBvcnQgeyBTZWxlY3RGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3QtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdGF0ZVRva2VuIH0gZnJvbSAnLi4vLi4vc3RhdGUtdG9rZW4vc3RhdGUtdG9rZW4nO1xuaW1wb3J0IHsgRXh0cmFjdFRva2VuVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlLXRva2VuL3N5bWJvbHMnO1xuXG5jb25zdCBET0xMQVJfQ0hBUl9DT0RFID0gMzY7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPYnNlcnZhYmxlPFQgPSBhbnk+KHNlbGVjdG9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKCFTZWxlY3RGYWN0b3J5LnN0b3JlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKENPTkZJR19NRVNTQUdFU1tWQUxJREFUSU9OX0NPREUuU0VMRUNUX0ZBQ1RPUllfTk9UX0NPTk5FQ1RFRF0oKSk7XG4gIH1cblxuICByZXR1cm4gU2VsZWN0RmFjdG9yeS5zdG9yZS5zZWxlY3Qoc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JGbihuYW1lOiBzdHJpbmcsIHJhd1NlbGVjdG9yPzogYW55LCBwYXRoczogc3RyaW5nW10gPSBbXSk6IGFueSB7XG4gIHJhd1NlbGVjdG9yID0gIXJhd1NlbGVjdG9yID8gcmVtb3ZlRG9sbGFyQXRUaGVFbmQobmFtZSkgOiByYXdTZWxlY3RvcjtcblxuICBpZiAodHlwZW9mIHJhd1NlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHByb3BzQXJyYXk6IHN0cmluZ1tdID0gcGF0aHMubGVuZ3RoXG4gICAgICA/IFtyYXdTZWxlY3RvciwgLi4ucGF0aHNdXG4gICAgICA6IHJhd1NlbGVjdG9yLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIHByb3BHZXR0ZXIocHJvcHNBcnJheSwgU2VsZWN0RmFjdG9yeS5jb25maWchKTtcbiAgfVxuXG4gIHJldHVybiByYXdTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBAZXhhbXBsZSBJZiBgZm9vJGAgPT4gbWFrZSBpdCBqdXN0IGBmb29gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEb2xsYXJBdFRoZUVuZChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBsYXN0Q2hhckluZGV4OiBudW1iZXIgPSBuYW1lLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGRvbGxhckF0VGhlRW5kOiBib29sZWFuID0gbmFtZS5jaGFyQ29kZUF0KGxhc3RDaGFySW5kZXgpID09PSBET0xMQVJfQ0hBUl9DT0RFO1xuICByZXR1cm4gZG9sbGFyQXRUaGVFbmQgPyBuYW1lLnNsaWNlKDAsIGxhc3RDaGFySW5kZXgpIDogbmFtZTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcGVydHlUeXBlPFQ+ID0gVCBleHRlbmRzIFN0YXRlVG9rZW48YW55PlxuICA/IE9ic2VydmFibGU8RXh0cmFjdFRva2VuVHlwZTxUPj5cbiAgOiBUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnlcbiAgPyBPYnNlcnZhYmxlPFJldHVyblR5cGU8VD4+XG4gIDogYW55O1xuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: src/utils/selector-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { memoize } from '@ngxs/store/internals';
import { ensureSelectorMetadata, getSelectorMetadata, getStoreMetadata } from '../internal/internals';
/** @type {?} */
const SELECTOR_OPTIONS_META_KEY = 'NGXS_SELECTOR_OPTIONS_META';
const ɵ0 = /**
 * @param {?} target
 * @return {?}
 */
(target) => {
    return (target && ((/** @type {?} */ (target)))[SELECTOR_OPTIONS_META_KEY]) || {};
}, ɵ1 = /**
 * @param {?} target
 * @param {?} options
 * @return {?}
 */
(target, options) => {
    if (!target)
        return;
    ((/** @type {?} */ (target)))[SELECTOR_OPTIONS_META_KEY] = options;
};
/** @type {?} */
export const selectorOptionsMetaAccessor = {
    getOptions: (ɵ0),
    defineOptions: (ɵ1)
};
/**
 * @record
 */
function CreationMetadata() { }
if (false) {
    /** @type {?} */
    CreationMetadata.prototype.containerClass;
    /** @type {?} */
    CreationMetadata.prototype.selectorName;
    /** @type {?|undefined} */
    CreationMetadata.prototype.getSelectorOptions;
}
/**
 * @record
 */
function RuntimeSelectorInfo() { }
if (false) {
    /** @type {?} */
    RuntimeSelectorInfo.prototype.selectorOptions;
    /** @type {?} */
    RuntimeSelectorInfo.prototype.argumentSelectorFunctions;
}
/**
 * Function for creating a selector
 * @template T
 * @param {?} selectors The selectors to use to create the arguments of this function
 * @param {?} originalFn The original function being made into a selector
 * @param {?=} creationMetadata
 * @return {?}
 */
export function createSelector(selectors, originalFn, creationMetadata) {
    /** @type {?} */
    const containerClass = creationMetadata && creationMetadata.containerClass;
    /** @type {?} */
    const wrappedFn = (/** @type {?} */ ((/**
     * @param {...?} args
     * @return {?}
     */
    function wrappedSelectorFn(...args) {
        /** @type {?} */
        const returnValue = originalFn.apply(containerClass, args);
        if (returnValue instanceof Function) {
            /** @type {?} */
            const innerMemoizedFn = memoize.apply(null, [returnValue]);
            return innerMemoizedFn;
        }
        return returnValue;
    })));
    /** @type {?} */
    const memoizedFn = memoize(wrappedFn);
    Object.setPrototypeOf(memoizedFn, originalFn);
    /** @type {?} */
    const selectorMetaData = setupSelectorMetadata(originalFn, creationMetadata);
    /** @type {?} */
    const makeRootSelector = (/**
     * @param {?} context
     * @return {?}
     */
    (context) => {
        const { argumentSelectorFunctions, selectorOptions } = getRuntimeSelectorInfo(context, selectorMetaData, selectors);
        return (/**
         * @param {?} rootState
         * @return {?}
         */
        function selectFromRoot(rootState) {
            // Determine arguments from the app state using the selectors
            /** @type {?} */
            const results = argumentSelectorFunctions.map((/**
             * @param {?} argFn
             * @return {?}
             */
            argFn => argFn(rootState)));
            // if the lambda tries to access a something on the
            // state that doesn't exist, it will throw a TypeError.
            // since this is quite usual behaviour, we simply return undefined if so.
            try {
                return memoizedFn(...results);
            }
            catch (ex) {
                if (ex instanceof TypeError && selectorOptions.suppressErrors) {
                    return undefined;
                }
                throw ex;
            }
        });
    });
    selectorMetaData.makeRootSelector = makeRootSelector;
    return memoizedFn;
}
/**
 * @template T
 * @param {?} originalFn
 * @param {?} creationMetadata
 * @return {?}
 */
function setupSelectorMetadata(originalFn, creationMetadata) {
    /** @type {?} */
    const selectorMetaData = ensureSelectorMetadata(originalFn);
    selectorMetaData.originalFn = originalFn;
    /** @type {?} */
    let getExplicitSelectorOptions = (/**
     * @return {?}
     */
    () => ({}));
    if (creationMetadata) {
        selectorMetaData.containerClass = creationMetadata.containerClass;
        selectorMetaData.selectorName = creationMetadata.selectorName;
        getExplicitSelectorOptions =
            creationMetadata.getSelectorOptions || getExplicitSelectorOptions;
    }
    /** @type {?} */
    const selectorMetaDataClone = Object.assign({}, selectorMetaData);
    selectorMetaData.getSelectorOptions = (/**
     * @return {?}
     */
    () => getLocalSelectorOptions(selectorMetaDataClone, getExplicitSelectorOptions()));
    return selectorMetaData;
}
/**
 * @param {?} context
 * @param {?} selectorMetaData
 * @param {?=} selectors
 * @return {?}
 */
function getRuntimeSelectorInfo(context, selectorMetaData, selectors = []) {
    /** @type {?} */
    const localSelectorOptions = selectorMetaData.getSelectorOptions();
    /** @type {?} */
    const selectorOptions = context.getSelectorOptions(localSelectorOptions);
    /** @type {?} */
    const selectorsToApply = getSelectorsToApply(selectors, selectorOptions, selectorMetaData.containerClass);
    /** @type {?} */
    const argumentSelectorFunctions = selectorsToApply.map((/**
     * @param {?} selector
     * @return {?}
     */
    selector => {
        /** @type {?} */
        const factory = getRootSelectorFactory(selector);
        return factory(context);
    }));
    return {
        selectorOptions,
        argumentSelectorFunctions
    };
}
/**
 * @param {?} selectorMetaData
 * @param {?} explicitOptions
 * @return {?}
 */
function getLocalSelectorOptions(selectorMetaData, explicitOptions) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (selectorOptionsMetaAccessor.getOptions(selectorMetaData.containerClass) || {})), (selectorOptionsMetaAccessor.getOptions(selectorMetaData.originalFn) || {})), (selectorMetaData.getSelectorOptions() || {})), explicitOptions);
}
/**
 * @param {?=} selectors
 * @param {?=} selectorOptions
 * @param {?=} containerClass
 * @return {?}
 */
function getSelectorsToApply(selectors = [], selectorOptions, containerClass) {
    /** @type {?} */
    const selectorsToApply = [];
    /** @type {?} */
    const canInjectContainerState = selectors.length === 0 || selectorOptions.injectContainerState;
    if (containerClass && canInjectContainerState) {
        // If we are on a state class, add it as the first selector parameter
        /** @type {?} */
        const metadata = getStoreMetadata(containerClass);
        if (metadata) {
            selectorsToApply.push(containerClass);
        }
    }
    if (selectors) {
        selectorsToApply.push(...selectors);
    }
    return selectorsToApply;
}
/**
 * This function gets the factory function to create the selector to get the selected slice from the app state
 * @ignore
 * @param {?} selector
 * @return {?}
 */
export function getRootSelectorFactory(selector) {
    /** @type {?} */
    const metadata = getSelectorMetadata(selector) || getStoreMetadata(selector);
    return (metadata && metadata.makeRootSelector) || ((/**
     * @return {?}
     */
    () => selector));
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvdXRpbHMvc2VsZWN0b3ItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBTWpCLE1BQU0sdUJBQXVCLENBQUM7O01BRXpCLHlCQUF5QixHQUFHLDRCQUE0Qjs7Ozs7QUFHaEQsQ0FBQyxNQUFXLEVBQXlCLEVBQUU7SUFDakQsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwRSxDQUFDOzs7OztBQUNjLENBQUMsTUFBVyxFQUFFLE9BQThCLEVBQUUsRUFBRTtJQUM3RCxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU87SUFDcEIsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ3JELENBQUM7O0FBUEgsTUFBTSxPQUFPLDJCQUEyQixHQUFHO0lBQ3pDLFVBQVUsTUFFVDtJQUNELGFBQWEsTUFHWjtDQUNGOzs7O0FBRUQsK0JBSUM7OztJQUhDLDBDQUFvQjs7SUFDcEIsd0NBQXFCOztJQUNyQiw4Q0FBaUQ7Ozs7O0FBR25ELGtDQUdDOzs7SUFGQyw4Q0FBdUM7O0lBQ3ZDLHdEQUFpRDs7Ozs7Ozs7OztBQVNuRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixTQUE0QixFQUM1QixVQUFhLEVBQ2IsZ0JBQW1DOztVQUU3QixjQUFjLEdBQUcsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsY0FBYzs7VUFDcEUsU0FBUyxHQUFHOzs7O0lBQUEsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLElB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UUFBUSxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQztBQUNyRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtb2l6ZSB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XG5cbmltcG9ydCB7XG4gIGVuc3VyZVNlbGVjdG9yTWV0YWRhdGEsXG4gIGdldFNlbGVjdG9yTWV0YWRhdGEsXG4gIGdldFN0b3JlTWV0YWRhdGEsXG4gIFNlbGVjdG9yTWV0YURhdGFNb2RlbCxcbiAgU2hhcmVkU2VsZWN0b3JPcHRpb25zLFxuICBSdW50aW1lU2VsZWN0b3JDb250ZXh0LFxuICBTZWxlY3RvckZhY3RvcnksXG4gIFNlbGVjdEZyb21Sb290U3RhdGVcbn0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcblxuY29uc3QgU0VMRUNUT1JfT1BUSU9OU19NRVRBX0tFWSA9ICdOR1hTX1NFTEVDVE9SX09QVElPTlNfTUVUQSc7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rvck9wdGlvbnNNZXRhQWNjZXNzb3IgPSB7XG4gIGdldE9wdGlvbnM6ICh0YXJnZXQ6IGFueSk6IFNoYXJlZFNlbGVjdG9yT3B0aW9ucyA9PiB7XG4gICAgcmV0dXJuICh0YXJnZXQgJiYgKDxhbnk+dGFyZ2V0KVtTRUxFQ1RPUl9PUFRJT05TX01FVEFfS0VZXSkgfHwge307XG4gIH0sXG4gIGRlZmluZU9wdGlvbnM6ICh0YXJnZXQ6IGFueSwgb3B0aW9uczogU2hhcmVkU2VsZWN0b3JPcHRpb25zKSA9PiB7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICAoPGFueT50YXJnZXQpW1NFTEVDVE9SX09QVElPTlNfTUVUQV9LRVldID0gb3B0aW9ucztcbiAgfVxufTtcblxuaW50ZXJmYWNlIENyZWF0aW9uTWV0YWRhdGEge1xuICBjb250YWluZXJDbGFzczogYW55O1xuICBzZWxlY3Rvck5hbWU6IHN0cmluZztcbiAgZ2V0U2VsZWN0b3JPcHRpb25zPzogKCkgPT4gU2hhcmVkU2VsZWN0b3JPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUnVudGltZVNlbGVjdG9ySW5mbyB7XG4gIHNlbGVjdG9yT3B0aW9uczogU2hhcmVkU2VsZWN0b3JPcHRpb25zO1xuICBhcmd1bWVudFNlbGVjdG9yRnVuY3Rpb25zOiBTZWxlY3RGcm9tUm9vdFN0YXRlW107XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgc2VsZWN0b3JcbiAqIEBwYXJhbSBzZWxlY3RvcnMgVGhlIHNlbGVjdG9ycyB0byB1c2UgdG8gY3JlYXRlIHRoZSBhcmd1bWVudHMgb2YgdGhpcyBmdW5jdGlvblxuICogQHBhcmFtIG9yaWdpbmFsRm4gVGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGJlaW5nIG1hZGUgaW50byBhIHNlbGVjdG9yXG4gKiBAcGFyYW0gY3JlYXRpb25NZXRhZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3I8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbiAgc2VsZWN0b3JzOiBhbnlbXSB8IHVuZGVmaW5lZCxcbiAgb3JpZ2luYWxGbjogVCxcbiAgY3JlYXRpb25NZXRhZGF0YT86IENyZWF0aW9uTWV0YWRhdGFcbikge1xuICBjb25zdCBjb250YWluZXJDbGFzcyA9IGNyZWF0aW9uTWV0YWRhdGEgJiYgY3JlYXRpb25NZXRhZGF0YS5jb250YWluZXJDbGFzcztcbiAgY29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gd3JhcHBlZFNlbGVjdG9yRm4oLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG9yaWdpbmFsRm4uYXBwbHkoY29udGFpbmVyQ2xhc3MsIGFyZ3MpO1xuICAgIGlmIChyZXR1cm5WYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBpbm5lck1lbW9pemVkRm4gPSBtZW1vaXplLmFwcGx5KG51bGwsIFtyZXR1cm5WYWx1ZV0pO1xuICAgICAgcmV0dXJuIGlubmVyTWVtb2l6ZWRGbjtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9IGFzIFQ7XG4gIGNvbnN0IG1lbW9pemVkRm4gPSBtZW1vaXplKHdyYXBwZWRGbik7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihtZW1vaXplZEZuLCBvcmlnaW5hbEZuKTtcblxuICBjb25zdCBzZWxlY3Rvck1ldGFEYXRhID0gc2V0dXBTZWxlY3Rvck1ldGFkYXRhPFQ+KG9yaWdpbmFsRm4sIGNyZWF0aW9uTWV0YWRhdGEpO1xuXG4gIGNvbnN0IG1ha2VSb290U2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSA9IChjb250ZXh0OiBSdW50aW1lU2VsZWN0b3JDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyBhcmd1bWVudFNlbGVjdG9yRnVuY3Rpb25zLCBzZWxlY3Rvck9wdGlvbnMgfSA9IGdldFJ1bnRpbWVTZWxlY3RvckluZm8oXG4gICAgICBjb250ZXh0LFxuICAgICAgc2VsZWN0b3JNZXRhRGF0YSxcbiAgICAgIHNlbGVjdG9yc1xuICAgICk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gc2VsZWN0RnJvbVJvb3Qocm9vdFN0YXRlOiBhbnkpIHtcbiAgICAgIC8vIERldGVybWluZSBhcmd1bWVudHMgZnJvbSB0aGUgYXBwIHN0YXRlIHVzaW5nIHRoZSBzZWxlY3RvcnNcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhcmd1bWVudFNlbGVjdG9yRnVuY3Rpb25zLm1hcChhcmdGbiA9PiBhcmdGbihyb290U3RhdGUpKTtcblxuICAgICAgLy8gaWYgdGhlIGxhbWJkYSB0cmllcyB0byBhY2Nlc3MgYSBzb21ldGhpbmcgb24gdGhlXG4gICAgICAvLyBzdGF0ZSB0aGF0IGRvZXNuJ3QgZXhpc3QsIGl0IHdpbGwgdGhyb3cgYSBUeXBlRXJyb3IuXG4gICAgICAvLyBzaW5jZSB0aGlzIGlzIHF1aXRlIHVzdWFsIGJlaGF2aW91ciwgd2Ugc2ltcGx5IHJldHVybiB1bmRlZmluZWQgaWYgc28uXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWRGbiguLi5yZXN1bHRzKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGlmIChleCBpbnN0YW5jZW9mIFR5cGVFcnJvciAmJiBzZWxlY3Rvck9wdGlvbnMuc3VwcHJlc3NFcnJvcnMpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXg7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBzZWxlY3Rvck1ldGFEYXRhLm1ha2VSb290U2VsZWN0b3IgPSBtYWtlUm9vdFNlbGVjdG9yO1xuXG4gIHJldHVybiBtZW1vaXplZEZuO1xufVxuXG5mdW5jdGlvbiBzZXR1cFNlbGVjdG9yTWV0YWRhdGE8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbiAgb3JpZ2luYWxGbjogVCxcbiAgY3JlYXRpb25NZXRhZGF0YTogQ3JlYXRpb25NZXRhZGF0YSB8IHVuZGVmaW5lZFxuKSB7XG4gIGNvbnN0IHNlbGVjdG9yTWV0YURhdGEgPSBlbnN1cmVTZWxlY3Rvck1ldGFkYXRhKG9yaWdpbmFsRm4pO1xuICBzZWxlY3Rvck1ldGFEYXRhLm9yaWdpbmFsRm4gPSBvcmlnaW5hbEZuO1xuICBsZXQgZ2V0RXhwbGljaXRTZWxlY3Rvck9wdGlvbnMgPSAoKSA9PiAoe30pO1xuICBpZiAoY3JlYXRpb25NZXRhZGF0YSkge1xuICAgIHNlbGVjdG9yTWV0YURhdGEuY29udGFpbmVyQ2xhc3MgPSBjcmVhdGlvbk1ldGFkYXRhLmNvbnRhaW5lckNsYXNzO1xuICAgIHNlbGVjdG9yTWV0YURhdGEuc2VsZWN0b3JOYW1lID0gY3JlYXRpb25NZXRhZGF0YS5zZWxlY3Rvck5hbWU7XG4gICAgZ2V0RXhwbGljaXRTZWxlY3Rvck9wdGlvbnMgPVxuICAgICAgY3JlYXRpb25NZXRhZGF0YS5nZXRTZWxlY3Rvck9wdGlvbnMgfHwgZ2V0RXhwbGljaXRTZWxlY3Rvck9wdGlvbnM7XG4gIH1cbiAgY29uc3Qgc2VsZWN0b3JNZXRhRGF0YUNsb25lID0geyAuLi5zZWxlY3Rvck1ldGFEYXRhIH07XG4gIHNlbGVjdG9yTWV0YURhdGEuZ2V0U2VsZWN0b3JPcHRpb25zID0gKCkgPT5cbiAgICBnZXRMb2NhbFNlbGVjdG9yT3B0aW9ucyhzZWxlY3Rvck1ldGFEYXRhQ2xvbmUsIGdldEV4cGxpY2l0U2VsZWN0b3JPcHRpb25zKCkpO1xuICByZXR1cm4gc2VsZWN0b3JNZXRhRGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0UnVudGltZVNlbGVjdG9ySW5mbyhcbiAgY29udGV4dDogUnVudGltZVNlbGVjdG9yQ29udGV4dCxcbiAgc2VsZWN0b3JNZXRhRGF0YTogU2VsZWN0b3JNZXRhRGF0YU1vZGVsLFxuICBzZWxlY3RvcnM6IGFueVtdIHwgdW5kZWZpbmVkID0gW11cbik6IFJ1bnRpbWVTZWxlY3RvckluZm8ge1xuICBjb25zdCBsb2NhbFNlbGVjdG9yT3B0aW9ucyA9IHNlbGVjdG9yTWV0YURhdGEuZ2V0U2VsZWN0b3JPcHRpb25zKCk7XG4gIGNvbnN0IHNlbGVjdG9yT3B0aW9ucyA9IGNvbnRleHQuZ2V0U2VsZWN0b3JPcHRpb25zKGxvY2FsU2VsZWN0b3JPcHRpb25zKTtcbiAgY29uc3Qgc2VsZWN0b3JzVG9BcHBseSA9IGdldFNlbGVjdG9yc1RvQXBwbHkoXG4gICAgc2VsZWN0b3JzLFxuICAgIHNlbGVjdG9yT3B0aW9ucyxcbiAgICBzZWxlY3Rvck1ldGFEYXRhLmNvbnRhaW5lckNsYXNzXG4gICk7XG5cbiAgY29uc3QgYXJndW1lbnRTZWxlY3RvckZ1bmN0aW9ucyA9IHNlbGVjdG9yc1RvQXBwbHkubWFwKHNlbGVjdG9yID0+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gZ2V0Um9vdFNlbGVjdG9yRmFjdG9yeShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGZhY3RvcnkoY29udGV4dCk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHNlbGVjdG9yT3B0aW9ucyxcbiAgICBhcmd1bWVudFNlbGVjdG9yRnVuY3Rpb25zXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU2VsZWN0b3JPcHRpb25zKFxuICBzZWxlY3Rvck1ldGFEYXRhOiBTZWxlY3Rvck1ldGFEYXRhTW9kZWwsXG4gIGV4cGxpY2l0T3B0aW9uczogU2hhcmVkU2VsZWN0b3JPcHRpb25zXG4pOiBTaGFyZWRTZWxlY3Rvck9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIC4uLihzZWxlY3Rvck9wdGlvbnNNZXRhQWNjZXNzb3IuZ2V0T3B0aW9ucyhzZWxlY3Rvck1ldGFEYXRhLmNvbnRhaW5lckNsYXNzKSB8fCB7fSksXG4gICAgLi4uKHNlbGVjdG9yT3B0aW9uc01ldGFBY2Nlc3Nvci5nZXRPcHRpb25zKHNlbGVjdG9yTWV0YURhdGEub3JpZ2luYWxGbikgfHwge30pLFxuICAgIC4uLihzZWxlY3Rvck1ldGFEYXRhLmdldFNlbGVjdG9yT3B0aW9ucygpIHx8IHt9KSxcbiAgICAuLi5leHBsaWNpdE9wdGlvbnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JzVG9BcHBseShcbiAgc2VsZWN0b3JzOiBhbnlbXSB8IHVuZGVmaW5lZCA9IFtdLFxuICBzZWxlY3Rvck9wdGlvbnM6IFNoYXJlZFNlbGVjdG9yT3B0aW9ucyxcbiAgY29udGFpbmVyQ2xhc3M6IGFueVxuKSB7XG4gIGNvbnN0IHNlbGVjdG9yc1RvQXBwbHkgPSBbXTtcbiAgY29uc3QgY2FuSW5qZWN0Q29udGFpbmVyU3RhdGUgPVxuICAgIHNlbGVjdG9ycy5sZW5ndGggPT09IDAgfHwgc2VsZWN0b3JPcHRpb25zLmluamVjdENvbnRhaW5lclN0YXRlO1xuICBpZiAoY29udGFpbmVyQ2xhc3MgJiYgY2FuSW5qZWN0Q29udGFpbmVyU3RhdGUpIHtcbiAgICAvLyBJZiB3ZSBhcmUgb24gYSBzdGF0ZSBjbGFzcywgYWRkIGl0IGFzIHRoZSBmaXJzdCBzZWxlY3RvciBwYXJhbWV0ZXJcbiAgICBjb25zdCBtZXRhZGF0YSA9IGdldFN0b3JlTWV0YWRhdGEoY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgc2VsZWN0b3JzVG9BcHBseS5wdXNoKGNvbnRhaW5lckNsYXNzKTtcbiAgICB9XG4gIH1cbiAgaWYgKHNlbGVjdG9ycykge1xuICAgIHNlbGVjdG9yc1RvQXBwbHkucHVzaCguLi5zZWxlY3RvcnMpO1xuICB9XG4gIHJldHVybiBzZWxlY3RvcnNUb0FwcGx5O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHNlbGVjdG9yIHRvIGdldCB0aGUgc2VsZWN0ZWQgc2xpY2UgZnJvbSB0aGUgYXBwIHN0YXRlXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290U2VsZWN0b3JGYWN0b3J5KHNlbGVjdG9yOiBhbnkpOiBTZWxlY3RvckZhY3Rvcnkge1xuICBjb25zdCBtZXRhZGF0YSA9IGdldFNlbGVjdG9yTWV0YWRhdGEoc2VsZWN0b3IpIHx8IGdldFN0b3JlTWV0YWRhdGEoc2VsZWN0b3IpO1xuICByZXR1cm4gKG1ldGFkYXRhICYmIG1ldGFkYXRhLm1ha2VSb290U2VsZWN0b3IpIHx8ICgoKSA9PiBzZWxlY3Rvcik7XG59XG4iXX0=
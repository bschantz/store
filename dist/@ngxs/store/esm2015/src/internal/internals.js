/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/internals.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { META_KEY, META_OPTIONS_KEY, NgxsSimpleChange, SELECTOR_META_KEY } from '../symbols';
import { getValue } from '../utils/utils';
/**
 * @record
 * @template T, U
 */
export function StateClassInternal() { }
if (false) {
    /* Skipping unnamed member:
    [META_KEY]?: MetaDataModel;*/
    /* Skipping unnamed member:
    [META_OPTIONS_KEY]?: StoreOptions<U>;*/
}
/**
 * @record
 * @template T
 */
export function StateOperations() { }
if (false) {
    /**
     * @return {?}
     */
    StateOperations.prototype.getState = function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    StateOperations.prototype.setState = function (val) { };
    /**
     * @param {?} actionOrActions
     * @return {?}
     */
    StateOperations.prototype.dispatch = function (actionOrActions) { };
}
/**
 * @record
 */
export function MetaDataModel() { }
if (false) {
    /** @type {?} */
    MetaDataModel.prototype.name;
    /** @type {?} */
    MetaDataModel.prototype.actions;
    /** @type {?} */
    MetaDataModel.prototype.defaults;
    /** @type {?} */
    MetaDataModel.prototype.path;
    /** @type {?} */
    MetaDataModel.prototype.makeRootSelector;
    /** @type {?|undefined} */
    MetaDataModel.prototype.children;
}
/**
 * @record
 */
export function RuntimeSelectorContext() { }
if (false) {
    /**
     * @param {?} key
     * @return {?}
     */
    RuntimeSelectorContext.prototype.getStateGetter = function (key) { };
    /**
     * @param {?=} localOptions
     * @return {?}
     */
    RuntimeSelectorContext.prototype.getSelectorOptions = function (localOptions) { };
}
/**
 * @record
 */
export function SharedSelectorOptions() { }
if (false) {
    /** @type {?|undefined} */
    SharedSelectorOptions.prototype.injectContainerState;
    /** @type {?|undefined} */
    SharedSelectorOptions.prototype.suppressErrors;
}
/**
 * @record
 */
export function SelectorMetaDataModel() { }
if (false) {
    /** @type {?} */
    SelectorMetaDataModel.prototype.makeRootSelector;
    /** @type {?} */
    SelectorMetaDataModel.prototype.originalFn;
    /** @type {?} */
    SelectorMetaDataModel.prototype.containerClass;
    /** @type {?} */
    SelectorMetaDataModel.prototype.selectorName;
    /** @type {?} */
    SelectorMetaDataModel.prototype.getSelectorOptions;
}
/**
 * @record
 */
export function MappedStore() { }
if (false) {
    /** @type {?} */
    MappedStore.prototype.name;
    /** @type {?} */
    MappedStore.prototype.isInitialised;
    /** @type {?} */
    MappedStore.prototype.actions;
    /** @type {?} */
    MappedStore.prototype.defaults;
    /** @type {?} */
    MappedStore.prototype.instance;
    /** @type {?} */
    MappedStore.prototype.path;
}
/**
 * @record
 */
export function StatesAndDefaults() { }
if (false) {
    /** @type {?} */
    StatesAndDefaults.prototype.defaults;
    /** @type {?} */
    StatesAndDefaults.prototype.states;
}
/**
 * @record
 * @template T
 */
export function RootStateDiff() { }
if (false) {
    /** @type {?} */
    RootStateDiff.prototype.currentAppState;
    /** @type {?} */
    RootStateDiff.prototype.newAppState;
}
/**
 * Ensures metadata is attached to the class and returns it.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function ensureStoreMetadata(target) {
    if (!target.hasOwnProperty(META_KEY)) {
        /** @type {?} */
        const defaultMetadata = {
            name: null,
            actions: {},
            defaults: {},
            path: null,
            /**
             * @param {?} context
             * @return {?}
             */
            makeRootSelector(context) {
                return context.getStateGetter(defaultMetadata.name);
            },
            children: []
        };
        Object.defineProperty(target, META_KEY, { value: defaultMetadata });
    }
    return getStoreMetadata(target);
}
/**
 * Get the metadata attached to the state class if it exists.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function getStoreMetadata(target) {
    return (/** @type {?} */ (target[META_KEY]));
}
/**
 * Ensures metadata is attached to the selector and returns it.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function ensureSelectorMetadata(target) {
    if (!target.hasOwnProperty(SELECTOR_META_KEY)) {
        /** @type {?} */
        const defaultMetadata = {
            makeRootSelector: null,
            originalFn: null,
            containerClass: null,
            selectorName: null,
            getSelectorOptions: (/**
             * @return {?}
             */
            () => ({}))
        };
        Object.defineProperty(target, SELECTOR_META_KEY, { value: defaultMetadata });
    }
    return getSelectorMetadata(target);
}
/**
 * Get the metadata attached to the selector if it exists.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function getSelectorMetadata(target) {
    return target[SELECTOR_META_KEY];
}
/**
 * Get a deeply nested value. Example:
 *
 *    getValue({ foo: bar: [] }, 'foo.bar') //=> []
 *
 * Note: This is not as fast as the `fastPropGetter` but is strict Content Security Policy compliant.
 * See perf hit: https://jsperf.com/fast-value-getter-given-path/1
 *
 * @ignore
 * @param {?} paths
 * @return {?}
 */
function compliantPropGetter(paths) {
    /** @type {?} */
    const copyOfPaths = paths.slice();
    return (/**
     * @param {?} obj
     * @return {?}
     */
    obj => copyOfPaths.reduce((/**
     * @param {?} acc
     * @param {?} part
     * @return {?}
     */
    (acc, part) => acc && acc[part]), obj));
}
/**
 * The generated function is faster than:
 * - pluck (Observable operator)
 * - memoize
 *
 * @ignore
 * @param {?} paths
 * @return {?}
 */
function fastPropGetter(paths) {
    /** @type {?} */
    const segments = paths;
    /** @type {?} */
    let seg = 'store.' + segments[0];
    /** @type {?} */
    let i = 0;
    /** @type {?} */
    const l = segments.length;
    /** @type {?} */
    let expr = seg;
    while (++i < l) {
        expr = expr + ' && ' + (seg = seg + '.' + segments[i]);
    }
    /** @type {?} */
    const fn = new Function('store', 'return ' + expr + ';');
    return (/** @type {?} */ (fn));
}
/**
 * Get a deeply nested value. Example:
 *
 *    getValue({ foo: bar: [] }, 'foo.bar') //=> []
 *
 * @ignore
 * @param {?} paths
 * @param {?} config
 * @return {?}
 */
export function propGetter(paths, config) {
    if (config && config.compatibility && config.compatibility.strictContentSecurityPolicy) {
        return compliantPropGetter(paths);
    }
    else {
        return fastPropGetter(paths);
    }
}
/**
 * Given an array of states, it will return a object graph. Example:
 *    const states = [
 *      Cart,
 *      CartSaved,
 *      CartSavedItems
 *    ]
 *
 * would return:
 *
 *  const graph = {
 *    cart: ['saved'],
 *    saved: ['items'],
 *    items: []
 *  };
 *
 * @ignore
 * @param {?} stateClasses
 * @return {?}
 */
export function buildGraph(stateClasses) {
    /** @type {?} */
    const findName = (/**
     * @param {?} stateClass
     * @return {?}
     */
    (stateClass) => {
        /** @type {?} */
        const meta = stateClasses.find((/**
         * @param {?} g
         * @return {?}
         */
        g => g === stateClass));
        if (!meta) {
            throw new Error(`Child state not found: ${stateClass}. \r\nYou may have forgotten to add states to module`);
        }
        return (/** @type {?} */ ((/** @type {?} */ (meta[META_KEY])).name));
    });
    return stateClasses.reduce((/**
     * @param {?} result
     * @param {?} stateClass
     * @return {?}
     */
    (result, stateClass) => {
        const { name, children } = (/** @type {?} */ (stateClass[META_KEY]));
        result[(/** @type {?} */ (name))] = (children || []).map(findName);
        return result;
    }), {});
}
/**
 * Given a states array, returns object graph
 * returning the name and state metadata. Example:
 *
 *  const graph = {
 *    cart: { metadata }
 *  };
 *
 * @ignore
 * @param {?} states
 * @return {?}
 */
export function nameToState(states) {
    return states.reduce((/**
     * @param {?} result
     * @param {?} stateClass
     * @return {?}
     */
    (result, stateClass) => {
        /** @type {?} */
        const meta = (/** @type {?} */ (stateClass[META_KEY]));
        result[(/** @type {?} */ (meta.name))] = stateClass;
        return result;
    }), {});
}
/**
 * Given a object relationship graph will return the full path
 * for the child items. Example:
 *
 *  const graph = {
 *    cart: ['saved'],
 *    saved: ['items'],
 *    items: []
 *  };
 *
 * would return:
 *
 *  const r = {
 *    cart: 'cart',
 *    saved: 'cart.saved',
 *    items: 'cart.saved.items'
 *  };
 *
 * @ignore
 * @param {?} obj
 * @param {?=} newObj
 * @return {?}
 */
export function findFullParentPath(obj, newObj = {}) {
    /** @type {?} */
    const visit = (/**
     * @param {?} child
     * @param {?} keyToFind
     * @return {?}
     */
    (child, keyToFind) => {
        for (const key in child) {
            if (child.hasOwnProperty(key) && child[key].indexOf(keyToFind) >= 0) {
                /** @type {?} */
                const parent = visit(child, key);
                return parent !== null ? `${parent}.${key}` : key;
            }
        }
        return null;
    });
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            /** @type {?} */
            const parent = visit(obj, key);
            newObj[key] = parent ? `${parent}.${key}` : key;
        }
    }
    return newObj;
}
/**
 * Given a object graph, it will return the items topologically sorted Example:
 *
 *  const graph = {
 *    cart: ['saved'],
 *    saved: ['items'],
 *    items: []
 *  };
 *
 * would return:
 *
 *  const results = [
 *    'items',
 *    'saved',
 *    'cart'
 *  ];
 *
 * @ignore
 * @param {?} graph
 * @return {?}
 */
export function topologicalSort(graph) {
    /** @type {?} */
    const sorted = [];
    /** @type {?} */
    const visited = {};
    /** @type {?} */
    const visit = (/**
     * @param {?} name
     * @param {?=} ancestors
     * @return {?}
     */
    (name, ancestors = []) => {
        if (!Array.isArray(ancestors)) {
            ancestors = [];
        }
        ancestors.push(name);
        visited[name] = true;
        graph[name].forEach((/**
         * @param {?} dep
         * @return {?}
         */
        (dep) => {
            if (ancestors.indexOf(dep) >= 0) {
                throw new Error(`Circular dependency '${dep}' is required by '${name}': ${ancestors.join(' -> ')}`);
            }
            if (visited[dep]) {
                return;
            }
            visit(dep, ancestors.slice(0));
        }));
        if (sorted.indexOf(name) < 0) {
            sorted.push(name);
        }
    });
    Object.keys(graph).forEach((/**
     * @param {?} k
     * @return {?}
     */
    k => visit(k)));
    return sorted.reverse();
}
/**
 * Returns if the parameter is a object or not.
 *
 * @ignore
 * @param {?} obj
 * @return {?}
 */
export function isObject(obj) {
    return (typeof obj === 'object' && obj !== null) || typeof obj === 'function';
}
/**
 * @template T
 * @param {?} mappedStore
 * @param {?} diff
 * @return {?}
 */
export function getStateDiffChanges(mappedStore, diff) {
    /** @type {?} */
    const previousValue = getValue(diff.currentAppState, mappedStore.path);
    /** @type {?} */
    const currentValue = getValue(diff.newAppState, mappedStore.path);
    return new NgxsSimpleChange(previousValue, currentValue, !mappedStore.isInitialised);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL2ludGVybmFsL2ludGVybmFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFDTCxRQUFRLEVBQ1IsZ0JBQWdCLEVBRWhCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFFbEIsTUFBTSxZQUFZLENBQUM7QUFFcEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUcxQyx3Q0FHQzs7Ozs7Ozs7Ozs7QUFLRCxxQ0FNQzs7Ozs7SUFMQyxxREFBYzs7Ozs7SUFFZCx3REFBb0I7Ozs7O0lBRXBCLG9FQUF5RDs7Ozs7QUFHM0QsbUNBT0M7OztJQU5DLDZCQUFvQjs7SUFDcEIsZ0NBQWdEOztJQUNoRCxpQ0FBYzs7SUFDZCw2QkFBb0I7O0lBQ3BCLHlDQUF5Qzs7SUFDekMsaUNBQWdDOzs7OztBQUdsQyw0Q0FHQzs7Ozs7O0lBRkMscUVBQThDOzs7OztJQUM5QyxrRkFBZ0Y7Ozs7O0FBTWxGLDJDQUdDOzs7SUFGQyxxREFBK0I7O0lBQy9CLCtDQUF5Qjs7Ozs7QUFHM0IsMkNBTUM7OztJQUxDLGlEQUF5Qzs7SUFDekMsMkNBQTRCOztJQUM1QiwrQ0FBb0I7O0lBQ3BCLDZDQUE0Qjs7SUFDNUIsbURBQWdEOzs7OztBQUdsRCxpQ0FPQzs7O0lBTkMsMkJBQWE7O0lBQ2Isb0NBQXVCOztJQUN2Qiw4QkFBZ0Q7O0lBQ2hELCtCQUFjOztJQUNkLCtCQUFjOztJQUNkLDJCQUFhOzs7OztBQUdmLHVDQUdDOzs7SUFGQyxxQ0FBYzs7SUFDZCxtQ0FBc0I7Ozs7OztBQUt4QixtQ0FHQzs7O0lBRkMsd0NBQW1COztJQUNuQixvQ0FBZTs7Ozs7Ozs7O0FBUWpCLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxNQUEwQjtJQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENB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SUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDO0FBQ2hGLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLFdBQXdCLEVBQ3hCLElBQXNCOztVQUVoQixhQUFhLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQzs7VUFDbkUsWUFBWSxHQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDcEUsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWluT2JqZWN0T2YsIFN0YXRlQ2xhc3MgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBNRVRBX0tFWSxcbiAgTUVUQV9PUFRJT05TX0tFWSxcbiAgTmd4c0NvbmZpZyxcbiAgTmd4c1NpbXBsZUNoYW5nZSxcbiAgU0VMRUNUT1JfTUVUQV9LRVksXG4gIFN0b3JlT3B0aW9uc1xufSBmcm9tICcuLi9zeW1ib2xzJztcbmltcG9ydCB7IEFjdGlvbkhhbmRsZXJNZXRhRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMvc3ltYm9scyc7XG5pbXBvcnQgeyBnZXRWYWx1ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuLy8gaW5zcGlyZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDM2NzQzODlcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVDbGFzc0ludGVybmFsPFQgPSBhbnksIFUgPSBhbnk+IGV4dGVuZHMgU3RhdGVDbGFzczxUPiB7XG4gIFtNRVRBX0tFWV0/OiBNZXRhRGF0YU1vZGVsO1xuICBbTUVUQV9PUFRJT05TX0tFWV0/OiBTdG9yZU9wdGlvbnM8VT47XG59XG5cbmV4cG9ydCB0eXBlIFN0YXRlS2V5R3JhcGggPSBQbGFpbk9iamVjdE9mPHN0cmluZ1tdPjtcbmV4cG9ydCB0eXBlIFN0YXRlc0J5TmFtZSA9IFBsYWluT2JqZWN0T2Y8U3RhdGVDbGFzc0ludGVybmFsPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZU9wZXJhdGlvbnM8VD4ge1xuICBnZXRTdGF0ZSgpOiBUO1xuXG4gIHNldFN0YXRlKHZhbDogVCk6IFQ7XG5cbiAgZGlzcGF0Y2goYWN0aW9uT3JBY3Rpb25zOiBhbnkgfCBhbnlbXSk6IE9ic2VydmFibGU8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YURhdGFNb2RlbCB7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gIGFjdGlvbnM6IFBsYWluT2JqZWN0T2Y8QWN0aW9uSGFuZGxlck1ldGFEYXRhW10+O1xuICBkZWZhdWx0czogYW55O1xuICBwYXRoOiBzdHJpbmcgfCBudWxsO1xuICBtYWtlUm9vdFNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnkgfCBudWxsO1xuICBjaGlsZHJlbj86IFN0YXRlQ2xhc3NJbnRlcm5hbFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJ1bnRpbWVTZWxlY3RvckNvbnRleHQge1xuICBnZXRTdGF0ZUdldHRlcihrZXk6IGFueSk6IChzdGF0ZTogYW55KSA9PiBhbnk7XG4gIGdldFNlbGVjdG9yT3B0aW9ucyhsb2NhbE9wdGlvbnM/OiBTaGFyZWRTZWxlY3Rvck9wdGlvbnMpOiBTaGFyZWRTZWxlY3Rvck9wdGlvbnM7XG59XG5cbmV4cG9ydCB0eXBlIFNlbGVjdEZyb21Sb290U3RhdGUgPSAocm9vdFN0YXRlOiBhbnkpID0+IGFueTtcbmV4cG9ydCB0eXBlIFNlbGVjdG9yRmFjdG9yeSA9IChydW50aW1lQ29udGV4dDogUnVudGltZVNlbGVjdG9yQ29udGV4dCkgPT4gU2VsZWN0RnJvbVJvb3RTdGF0ZTtcblxuZXhwb3J0IGludGVyZmFjZSBTaGFyZWRTZWxlY3Rvck9wdGlvbnMge1xuICBpbmplY3RDb250YWluZXJTdGF0ZT86IGJvb2xlYW47XG4gIHN1cHByZXNzRXJyb3JzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rvck1ldGFEYXRhTW9kZWwge1xuICBtYWtlUm9vdFNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnkgfCBudWxsO1xuICBvcmlnaW5hbEZuOiBGdW5jdGlvbiB8IG51bGw7XG4gIGNvbnRhaW5lckNsYXNzOiBhbnk7XG4gIHNlbGVjdG9yTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgZ2V0U2VsZWN0b3JPcHRpb25zOiAoKSA9PiBTaGFyZWRTZWxlY3Rvck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwcGVkU3RvcmUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzSW5pdGlhbGlzZWQ6IGJvb2xlYW47XG4gIGFjdGlvbnM6IFBsYWluT2JqZWN0T2Y8QWN0aW9uSGFuZGxlck1ldGFEYXRhW10+O1xuICBkZWZhdWx0czogYW55O1xuICBpbnN0YW5jZTogYW55O1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVzQW5kRGVmYXVsdHMge1xuICBkZWZhdWx0czogYW55O1xuICBzdGF0ZXM6IE1hcHBlZFN0b3JlW107XG59XG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrPFQgPSBhbnksIFYgPSBhbnk+ID0gKC4uLmFyZ3M6IFZbXSkgPT4gVDtcblxuZXhwb3J0IGludGVyZmFjZSBSb290U3RhdGVEaWZmPFQ+IHtcbiAgY3VycmVudEFwcFN0YXRlOiBUO1xuICBuZXdBcHBTdGF0ZTogVDtcbn1cblxuLyoqXG4gKiBFbnN1cmVzIG1ldGFkYXRhIGlzIGF0dGFjaGVkIHRvIHRoZSBjbGFzcyBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVTdG9yZU1ldGFkYXRhKHRhcmdldDogU3RhdGVDbGFzc0ludGVybmFsKTogTWV0YURhdGFNb2RlbCB7XG4gIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KE1FVEFfS0VZKSkge1xuICAgIGNvbnN0IGRlZmF1bHRNZXRhZGF0YTogTWV0YURhdGFNb2RlbCA9IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICBhY3Rpb25zOiB7fSxcbiAgICAgIGRlZmF1bHRzOiB7fSxcbiAgICAgIHBhdGg6IG51bGwsXG4gICAgICBtYWtlUm9vdFNlbGVjdG9yKGNvbnRleHQ6IFJ1bnRpbWVTZWxlY3RvckNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0U3RhdGVHZXR0ZXIoZGVmYXVsdE1ldGFkYXRhLm5hbWUpO1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBNRVRBX0tFWSwgeyB2YWx1ZTogZGVmYXVsdE1ldGFkYXRhIH0pO1xuICB9XG4gIHJldHVybiBnZXRTdG9yZU1ldGFkYXRhKHRhcmdldCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBtZXRhZGF0YSBhdHRhY2hlZCB0byB0aGUgc3RhdGUgY2xhc3MgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JlTWV0YWRhdGEodGFyZ2V0OiBTdGF0ZUNsYXNzSW50ZXJuYWwpOiBNZXRhRGF0YU1vZGVsIHtcbiAgcmV0dXJuIHRhcmdldFtNRVRBX0tFWV0hO1xufVxuXG4vKipcbiAqIEVuc3VyZXMgbWV0YWRhdGEgaXMgYXR0YWNoZWQgdG8gdGhlIHNlbGVjdG9yIGFuZCByZXR1cm5zIGl0LlxuICpcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVNlbGVjdG9yTWV0YWRhdGEodGFyZ2V0OiBGdW5jdGlvbik6IFNlbGVjdG9yTWV0YURhdGFNb2RlbCB7XG4gIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KFNFTEVDVE9SX01FVEFfS0VZKSkge1xuICAgIGNvbnN0IGRlZmF1bHRNZXRhZGF0YTogU2VsZWN0b3JNZXRhRGF0YU1vZGVsID0ge1xuICAgICAgbWFrZVJvb3RTZWxlY3RvcjogbnVsbCxcbiAgICAgIG9yaWdpbmFsRm46IG51bGwsXG4gICAgICBjb250YWluZXJDbGFzczogbnVsbCxcbiAgICAgIHNlbGVjdG9yTmFtZTogbnVsbCxcbiAgICAgIGdldFNlbGVjdG9yT3B0aW9uczogKCkgPT4gKHt9KVxuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBTRUxFQ1RPUl9NRVRBX0tFWSwgeyB2YWx1ZTogZGVmYXVsdE1ldGFkYXRhIH0pO1xuICB9XG5cbiAgcmV0dXJuIGdldFNlbGVjdG9yTWV0YWRhdGEodGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1ldGFkYXRhIGF0dGFjaGVkIHRvIHRoZSBzZWxlY3RvciBpZiBpdCBleGlzdHMuXG4gKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3JNZXRhZGF0YSh0YXJnZXQ6IGFueSk6IFNlbGVjdG9yTWV0YURhdGFNb2RlbCB7XG4gIHJldHVybiB0YXJnZXRbU0VMRUNUT1JfTUVUQV9LRVldO1xufVxuXG4vKipcbiAqIEdldCBhIGRlZXBseSBuZXN0ZWQgdmFsdWUuIEV4YW1wbGU6XG4gKlxuICogICAgZ2V0VmFsdWUoeyBmb286IGJhcjogW10gfSwgJ2Zvby5iYXInKSAvLz0+IFtdXG4gKlxuICogTm90ZTogVGhpcyBpcyBub3QgYXMgZmFzdCBhcyB0aGUgYGZhc3RQcm9wR2V0dGVyYCBidXQgaXMgc3RyaWN0IENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGNvbXBsaWFudC5cbiAqIFNlZSBwZXJmIGhpdDogaHR0cHM6Ly9qc3BlcmYuY29tL2Zhc3QtdmFsdWUtZ2V0dGVyLWdpdmVuLXBhdGgvMVxuICpcbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gY29tcGxpYW50UHJvcEdldHRlcihwYXRoczogc3RyaW5nW10pOiAoeDogYW55KSA9PiBhbnkge1xuICBjb25zdCBjb3B5T2ZQYXRocyA9IHBhdGhzLnNsaWNlKCk7XG4gIHJldHVybiBvYmogPT4gY29weU9mUGF0aHMucmVkdWNlKChhY2M6IGFueSwgcGFydDogc3RyaW5nKSA9PiBhY2MgJiYgYWNjW3BhcnRdLCBvYmopO1xufVxuXG4vKipcbiAqIFRoZSBnZW5lcmF0ZWQgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW46XG4gKiAtIHBsdWNrIChPYnNlcnZhYmxlIG9wZXJhdG9yKVxuICogLSBtZW1vaXplXG4gKlxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBmYXN0UHJvcEdldHRlcihwYXRoczogc3RyaW5nW10pOiAoeDogYW55KSA9PiBhbnkge1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGhzO1xuICBsZXQgc2VnID0gJ3N0b3JlLicgKyBzZWdtZW50c1swXTtcbiAgbGV0IGkgPSAwO1xuICBjb25zdCBsID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gIGxldCBleHByID0gc2VnO1xuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIGV4cHIgPSBleHByICsgJyAmJiAnICsgKHNlZyA9IHNlZyArICcuJyArIHNlZ21lbnRzW2ldKTtcbiAgfVxuXG4gIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKCdzdG9yZScsICdyZXR1cm4gJyArIGV4cHIgKyAnOycpO1xuXG4gIHJldHVybiA8KHg6IGFueSkgPT4gYW55PmZuO1xufVxuXG4vKipcbiAqIEdldCBhIGRlZXBseSBuZXN0ZWQgdmFsdWUuIEV4YW1wbGU6XG4gKlxuICogICAgZ2V0VmFsdWUoeyBmb286IGJhcjogW10gfSwgJ2Zvby5iYXInKSAvLz0+IFtdXG4gKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcEdldHRlcihwYXRoczogc3RyaW5nW10sIGNvbmZpZzogTmd4c0NvbmZpZykge1xuICBpZiAoY29uZmlnICYmIGNvbmZpZy5jb21wYXRpYmlsaXR5ICYmIGNvbmZpZy5jb21wYXRpYmlsaXR5LnN0cmljdENvbnRlbnRTZWN1cml0eVBvbGljeSkge1xuICAgIHJldHVybiBjb21wbGlhbnRQcm9wR2V0dGVyKHBhdGhzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFzdFByb3BHZXR0ZXIocGF0aHMpO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gYXJyYXkgb2Ygc3RhdGVzLCBpdCB3aWxsIHJldHVybiBhIG9iamVjdCBncmFwaC4gRXhhbXBsZTpcbiAqICAgIGNvbnN0IHN0YXRlcyA9IFtcbiAqICAgICAgQ2FydCxcbiAqICAgICAgQ2FydFNhdmVkLFxuICogICAgICBDYXJ0U2F2ZWRJdGVtc1xuICogICAgXVxuICpcbiAqIHdvdWxkIHJldHVybjpcbiAqXG4gKiAgY29uc3QgZ3JhcGggPSB7XG4gKiAgICBjYXJ0OiBbJ3NhdmVkJ10sXG4gKiAgICBzYXZlZDogWydpdGVtcyddLFxuICogICAgaXRlbXM6IFtdXG4gKiAgfTtcbiAqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEdyYXBoKHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW10pOiBTdGF0ZUtleUdyYXBoIHtcbiAgY29uc3QgZmluZE5hbWUgPSAoc3RhdGVDbGFzczogU3RhdGVDbGFzc0ludGVybmFsKSA9PiB7XG4gICAgY29uc3QgbWV0YSA9IHN0YXRlQ2xhc3Nlcy5maW5kKGcgPT4gZyA9PT0gc3RhdGVDbGFzcyk7XG4gICAgaWYgKCFtZXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBDaGlsZCBzdGF0ZSBub3QgZm91bmQ6ICR7c3RhdGVDbGFzc30uIFxcclxcbllvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gYWRkIHN0YXRlcyB0byBtb2R1bGVgXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhW01FVEFfS0VZXSEubmFtZSE7XG4gIH07XG5cbiAgcmV0dXJuIHN0YXRlQ2xhc3Nlcy5yZWR1Y2U8U3RhdGVLZXlHcmFwaD4oXG4gICAgKHJlc3VsdDogU3RhdGVLZXlHcmFwaCwgc3RhdGVDbGFzczogU3RhdGVDbGFzc0ludGVybmFsKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIGNoaWxkcmVuIH0gPSBzdGF0ZUNsYXNzW01FVEFfS0VZXSE7XG4gICAgICByZXN1bHRbbmFtZSFdID0gKGNoaWxkcmVuIHx8IFtdKS5tYXAoZmluZE5hbWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBzdGF0ZXMgYXJyYXksIHJldHVybnMgb2JqZWN0IGdyYXBoXG4gKiByZXR1cm5pbmcgdGhlIG5hbWUgYW5kIHN0YXRlIG1ldGFkYXRhLiBFeGFtcGxlOlxuICpcbiAqICBjb25zdCBncmFwaCA9IHtcbiAqICAgIGNhcnQ6IHsgbWV0YWRhdGEgfVxuICogIH07XG4gKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvU3RhdGUoc3RhdGVzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSk6IFBsYWluT2JqZWN0T2Y8U3RhdGVDbGFzc0ludGVybmFsPiB7XG4gIHJldHVybiBzdGF0ZXMucmVkdWNlPFBsYWluT2JqZWN0T2Y8U3RhdGVDbGFzc0ludGVybmFsPj4oXG4gICAgKHJlc3VsdDogUGxhaW5PYmplY3RPZjxTdGF0ZUNsYXNzSW50ZXJuYWw+LCBzdGF0ZUNsYXNzOiBTdGF0ZUNsYXNzSW50ZXJuYWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGEgPSBzdGF0ZUNsYXNzW01FVEFfS0VZXSE7XG4gICAgICByZXN1bHRbbWV0YS5uYW1lIV0gPSBzdGF0ZUNsYXNzO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBvYmplY3QgcmVsYXRpb25zaGlwIGdyYXBoIHdpbGwgcmV0dXJuIHRoZSBmdWxsIHBhdGhcbiAqIGZvciB0aGUgY2hpbGQgaXRlbXMuIEV4YW1wbGU6XG4gKlxuICogIGNvbnN0IGdyYXBoID0ge1xuICogICAgY2FydDogWydzYXZlZCddLFxuICogICAgc2F2ZWQ6IFsnaXRlbXMnXSxcbiAqICAgIGl0ZW1zOiBbXVxuICogIH07XG4gKlxuICogd291bGQgcmV0dXJuOlxuICpcbiAqICBjb25zdCByID0ge1xuICogICAgY2FydDogJ2NhcnQnLFxuICogICAgc2F2ZWQ6ICdjYXJ0LnNhdmVkJyxcbiAqICAgIGl0ZW1zOiAnY2FydC5zYXZlZC5pdGVtcydcbiAqICB9O1xuICpcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGdWxsUGFyZW50UGF0aChcbiAgb2JqOiBTdGF0ZUtleUdyYXBoLFxuICBuZXdPYmo6IFBsYWluT2JqZWN0T2Y8c3RyaW5nPiA9IHt9XG4pOiBQbGFpbk9iamVjdE9mPHN0cmluZz4ge1xuICBjb25zdCB2aXNpdCA9IChjaGlsZDogU3RhdGVLZXlHcmFwaCwga2V5VG9GaW5kOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLmhhc093blByb3BlcnR5KGtleSkgJiYgY2hpbGRba2V5XS5pbmRleE9mKGtleVRvRmluZCkgPj0gMCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB2aXNpdChjaGlsZCwga2V5KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IGAke3BhcmVudH0uJHtrZXl9YCA6IGtleTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB2aXNpdChvYmosIGtleSk7XG4gICAgICBuZXdPYmpba2V5XSA9IHBhcmVudCA/IGAke3BhcmVudH0uJHtrZXl9YCA6IGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgb2JqZWN0IGdyYXBoLCBpdCB3aWxsIHJldHVybiB0aGUgaXRlbXMgdG9wb2xvZ2ljYWxseSBzb3J0ZWQgRXhhbXBsZTpcbiAqXG4gKiAgY29uc3QgZ3JhcGggPSB7XG4gKiAgICBjYXJ0OiBbJ3NhdmVkJ10sXG4gKiAgICBzYXZlZDogWydpdGVtcyddLFxuICogICAgaXRlbXM6IFtdXG4gKiAgfTtcbiAqXG4gKiB3b3VsZCByZXR1cm46XG4gKlxuICogIGNvbnN0IHJlc3VsdHMgPSBbXG4gKiAgICAnaXRlbXMnLFxuICogICAgJ3NhdmVkJyxcbiAqICAgICdjYXJ0J1xuICogIF07XG4gKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9wb2xvZ2ljYWxTb3J0KGdyYXBoOiBTdGF0ZUtleUdyYXBoKTogc3RyaW5nW10ge1xuICBjb25zdCBzb3J0ZWQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHZpc2l0ZWQ6IFBsYWluT2JqZWN0T2Y8Ym9vbGVhbj4gPSB7fTtcblxuICBjb25zdCB2aXNpdCA9IChuYW1lOiBzdHJpbmcsIGFuY2VzdG9yczogc3RyaW5nW10gPSBbXSkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhbmNlc3RvcnMpKSB7XG4gICAgICBhbmNlc3RvcnMgPSBbXTtcbiAgICB9XG5cbiAgICBhbmNlc3RvcnMucHVzaChuYW1lKTtcbiAgICB2aXNpdGVkW25hbWVdID0gdHJ1ZTtcblxuICAgIGdyYXBoW25hbWVdLmZvckVhY2goKGRlcDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoYW5jZXN0b3JzLmluZGV4T2YoZGVwKSA+PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgZGVwZW5kZW5jeSAnJHtkZXB9JyBpcyByZXF1aXJlZCBieSAnJHtuYW1lfSc6ICR7YW5jZXN0b3JzLmpvaW4oJyAtPiAnKX1gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2aXNpdGVkW2RlcF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2aXNpdChkZXAsIGFuY2VzdG9ycy5zbGljZSgwKSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc29ydGVkLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBzb3J0ZWQucHVzaChuYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmtleXMoZ3JhcGgpLmZvckVhY2goayA9PiB2aXNpdChrKSk7XG5cbiAgcmV0dXJuIHNvcnRlZC5yZXZlcnNlKCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBpZiB0aGUgcGFyYW1ldGVyIGlzIGEgb2JqZWN0IG9yIG5vdC5cbiAqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmo6IGFueSkge1xuICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlRGlmZkNoYW5nZXM8VD4oXG4gIG1hcHBlZFN0b3JlOiBNYXBwZWRTdG9yZSxcbiAgZGlmZjogUm9vdFN0YXRlRGlmZjxUPlxuKTogTmd4c1NpbXBsZUNoYW5nZSB7XG4gIGNvbnN0IHByZXZpb3VzVmFsdWU6IFQgPSBnZXRWYWx1ZShkaWZmLmN1cnJlbnRBcHBTdGF0ZSwgbWFwcGVkU3RvcmUucGF0aCk7XG4gIGNvbnN0IGN1cnJlbnRWYWx1ZTogVCA9IGdldFZhbHVlKGRpZmYubmV3QXBwU3RhdGUsIG1hcHBlZFN0b3JlLnBhdGgpO1xuICByZXR1cm4gbmV3IE5neHNTaW1wbGVDaGFuZ2UocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlLCAhbWFwcGVkU3RvcmUuaXNJbml0aWFsaXNlZCk7XG59XG4iXX0=
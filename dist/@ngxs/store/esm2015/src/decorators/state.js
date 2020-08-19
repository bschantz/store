/**
 * @fileoverview added by tsickle
 * Generated from: src/decorators/state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureStoreMetadata } from '../internal/internals';
import { META_KEY, META_OPTIONS_KEY } from '../symbols';
import { StoreValidators } from '../utils/store-validators';
import { ensureStateClassIsInjectable } from '../ivy/ensure-state-class-is-injectable';
/**
 * @record
 * @template T
 */
function MutateMetaOptions() { }
if (false) {
    /** @type {?} */
    MutateMetaOptions.prototype.meta;
    /** @type {?} */
    MutateMetaOptions.prototype.inheritedStateClass;
    /** @type {?} */
    MutateMetaOptions.prototype.optionsWithInheritance;
}
/**
 * Decorates a class with ngxs state information.
 * @template T
 * @param {?} options
 * @return {?}
 */
export function State(options) {
    /**
     * @param {?} inheritedStateClass
     * @return {?}
     */
    function getStateOptions(inheritedStateClass) {
        /** @type {?} */
        const inheritanceOptions = inheritedStateClass[META_OPTIONS_KEY] || {};
        return (/** @type {?} */ (Object.assign(Object.assign({}, inheritanceOptions), options)));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function mutateMetaData(params) {
        const { meta, inheritedStateClass, optionsWithInheritance } = params;
        const { children, defaults, name } = optionsWithInheritance;
        /** @type {?} */
        const stateName = typeof name === 'string' ? name : (name && name.getName()) || null;
        StoreValidators.checkCorrectStateName(stateName);
        if (inheritedStateClass.hasOwnProperty(META_KEY)) {
            /** @type {?} */
            const inheritedMeta = inheritedStateClass[META_KEY] || {};
            meta.actions = Object.assign(Object.assign({}, meta.actions), inheritedMeta.actions);
        }
        meta.children = children;
        meta.defaults = defaults;
        meta.name = stateName;
    }
    return (/**
     * @param {?} target
     * @return {?}
     */
    (target) => {
        ensureStateClassIsInjectable(target);
        /** @type {?} */
        const stateClass = target;
        /** @type {?} */
        const meta = ensureStoreMetadata(stateClass);
        /** @type {?} */
        const inheritedStateClass = Object.getPrototypeOf(stateClass);
        /** @type {?} */
        const optionsWithInheritance = getStateOptions(inheritedStateClass);
        mutateMetaData({ meta, inheritedStateClass, optionsWithInheritance });
        stateClass[META_OPTIONS_KEY] = optionsWithInheritance;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvZGVjb3JhdG9ycy9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBcUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRixPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFnQixNQUFNLFlBQVksQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7O0FBRXZGLGdDQUlDOzs7SUFIQyxpQ0FBb0I7O0lBQ3BCLGdEQUF3Qzs7SUFDeEMsbURBQXdDOzs7Ozs7OztBQU0xQyxNQUFNLFVBQVUsS0FBSyxDQUFJLE9BQXdCOzs7OztJQUMvQyxTQUFTLGVBQWUsQ0FBQyxtQkFBdUM7O2NBQ3hELGtCQUFrQixHQUN0QixtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsT0FBTyxtREFBSyxrQkFBa0IsR0FBSyxPQUFPLEdBQXFCLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUE0QjtjQUM1QyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLE1BQU07Y0FDOUQsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLHNCQUFzQjs7Y0FDckQsU0FBUyxHQUNiLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxJQUFJO1FBQ3BFLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRCxJQUFJLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTs7a0JBQzFDLGFBQWEsR0FBMkIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNqRixJQUFJLENBQUMsT0FBTyxtQ0FBUSxJQUFJLENBQUMsT0FBTyxHQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUUsQ0FBQztTQUM5RDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztJQUFPLENBQUMsTUFBa0IsRUFBUSxFQUFFO1FBQ2xDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDOztjQUMvQixVQUFVLEdBQXVCLE1BQU07O2NBQ3ZDLElBQUksR0FBa0IsbUJBQW1CLENBQUMsVUFBVSxDQUFDOztjQUNyRCxtQkFBbUIsR0FBdUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7O2NBQzNFLHNCQUFzQixHQUFvQixlQUFlLENBQUMsbUJBQW1CLENBQUM7UUFDcEYsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztRQUN0RSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztJQUN4RCxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVDbGFzcyB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XG5cbmltcG9ydCB7IGVuc3VyZVN0b3JlTWV0YWRhdGEsIE1ldGFEYXRhTW9kZWwsIFN0YXRlQ2xhc3NJbnRlcm5hbCB9IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XG5pbXBvcnQgeyBNRVRBX0tFWSwgTUVUQV9PUFRJT05TX0tFWSwgU3RvcmVPcHRpb25zIH0gZnJvbSAnLi4vc3ltYm9scyc7XG5pbXBvcnQgeyBTdG9yZVZhbGlkYXRvcnMgfSBmcm9tICcuLi91dGlscy9zdG9yZS12YWxpZGF0b3JzJztcbmltcG9ydCB7IGVuc3VyZVN0YXRlQ2xhc3NJc0luamVjdGFibGUgfSBmcm9tICcuLi9pdnkvZW5zdXJlLXN0YXRlLWNsYXNzLWlzLWluamVjdGFibGUnO1xuXG5pbnRlcmZhY2UgTXV0YXRlTWV0YU9wdGlvbnM8VD4ge1xuICBtZXRhOiBNZXRhRGF0YU1vZGVsO1xuICBpbmhlcml0ZWRTdGF0ZUNsYXNzOiBTdGF0ZUNsYXNzSW50ZXJuYWw7XG4gIG9wdGlvbnNXaXRoSW5oZXJpdGFuY2U6IFN0b3JlT3B0aW9uczxUPjtcbn1cblxuLyoqXG4gKiBEZWNvcmF0ZXMgYSBjbGFzcyB3aXRoIG5neHMgc3RhdGUgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZTxUPihvcHRpb25zOiBTdG9yZU9wdGlvbnM8VD4pIHtcbiAgZnVuY3Rpb24gZ2V0U3RhdGVPcHRpb25zKGluaGVyaXRlZFN0YXRlQ2xhc3M6IFN0YXRlQ2xhc3NJbnRlcm5hbCk6IFN0b3JlT3B0aW9uczxUPiB7XG4gICAgY29uc3QgaW5oZXJpdGFuY2VPcHRpb25zOiBQYXJ0aWFsPFN0b3JlT3B0aW9uczxUPj4gPVxuICAgICAgaW5oZXJpdGVkU3RhdGVDbGFzc1tNRVRBX09QVElPTlNfS0VZXSB8fCB7fTtcbiAgICByZXR1cm4geyAuLi5pbmhlcml0YW5jZU9wdGlvbnMsIC4uLm9wdGlvbnMgfSBhcyBTdG9yZU9wdGlvbnM8VD47XG4gIH1cblxuICBmdW5jdGlvbiBtdXRhdGVNZXRhRGF0YShwYXJhbXM6IE11dGF0ZU1ldGFPcHRpb25zPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgeyBtZXRhLCBpbmhlcml0ZWRTdGF0ZUNsYXNzLCBvcHRpb25zV2l0aEluaGVyaXRhbmNlIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgZGVmYXVsdHMsIG5hbWUgfSA9IG9wdGlvbnNXaXRoSW5oZXJpdGFuY2U7XG4gICAgY29uc3Qgc3RhdGVOYW1lOiBzdHJpbmcgfCBudWxsID1cbiAgICAgIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyA/IG5hbWUgOiAobmFtZSAmJiBuYW1lLmdldE5hbWUoKSkgfHwgbnVsbDtcbiAgICBTdG9yZVZhbGlkYXRvcnMuY2hlY2tDb3JyZWN0U3RhdGVOYW1lKHN0YXRlTmFtZSk7XG5cbiAgICBpZiAoaW5oZXJpdGVkU3RhdGVDbGFzcy5oYXNPd25Qcm9wZXJ0eShNRVRBX0tFWSkpIHtcbiAgICAgIGNvbnN0IGluaGVyaXRlZE1ldGE6IFBhcnRpYWw8TWV0YURhdGFNb2RlbD4gPSBpbmhlcml0ZWRTdGF0ZUNsYXNzW01FVEFfS0VZXSB8fCB7fTtcbiAgICAgIG1ldGEuYWN0aW9ucyA9IHsgLi4ubWV0YS5hY3Rpb25zLCAuLi5pbmhlcml0ZWRNZXRhLmFjdGlvbnMgfTtcbiAgICB9XG5cbiAgICBtZXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgbWV0YS5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIG1ldGEubmFtZSA9IHN0YXRlTmFtZTtcbiAgfVxuXG4gIHJldHVybiAodGFyZ2V0OiBTdGF0ZUNsYXNzKTogdm9pZCA9PiB7XG4gICAgZW5zdXJlU3RhdGVDbGFzc0lzSW5qZWN0YWJsZSh0YXJnZXQpO1xuICAgIGNvbnN0IHN0YXRlQ2xhc3M6IFN0YXRlQ2xhc3NJbnRlcm5hbCA9IHRhcmdldDtcbiAgICBjb25zdCBtZXRhOiBNZXRhRGF0YU1vZGVsID0gZW5zdXJlU3RvcmVNZXRhZGF0YShzdGF0ZUNsYXNzKTtcbiAgICBjb25zdCBpbmhlcml0ZWRTdGF0ZUNsYXNzOiBTdGF0ZUNsYXNzSW50ZXJuYWwgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3RhdGVDbGFzcyk7XG4gICAgY29uc3Qgb3B0aW9uc1dpdGhJbmhlcml0YW5jZTogU3RvcmVPcHRpb25zPFQ+ID0gZ2V0U3RhdGVPcHRpb25zKGluaGVyaXRlZFN0YXRlQ2xhc3MpO1xuICAgIG11dGF0ZU1ldGFEYXRhKHsgbWV0YSwgaW5oZXJpdGVkU3RhdGVDbGFzcywgb3B0aW9uc1dpdGhJbmhlcml0YW5jZSB9KTtcbiAgICBzdGF0ZUNsYXNzW01FVEFfT1BUSU9OU19LRVldID0gb3B0aW9uc1dpdGhJbmhlcml0YW5jZTtcbiAgfTtcbn1cbiJdfQ==
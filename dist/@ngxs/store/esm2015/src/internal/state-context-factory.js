/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/state-context-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { getStateDiffChanges } from '../internal/internals';
import { setValue, getValue } from '../utils/utils';
import { InternalStateOperations } from '../internal/state-operations';
import { simplePatch } from './state-operators';
/**
 * State Context factory class
 * @ignore
 */
export class StateContextFactory {
    /**
     * @param {?} _internalStateOperations
     */
    constructor(_internalStateOperations) {
        this._internalStateOperations = _internalStateOperations;
    }
    /**
     * Create the state context
     * @template T
     * @param {?} mappedStore
     * @return {?}
     */
    createStateContext(mappedStore) {
        /** @type {?} */
        const root = this._internalStateOperations.getRootStateOperations();
        /**
         * @param {?} currentAppState
         * @return {?}
         */
        function getState(currentAppState) {
            return getValue(currentAppState, mappedStore.path);
        }
        /**
         * @param {?} currentAppState
         * @param {?} newValue
         * @return {?}
         */
        function setStateValue(currentAppState, newValue) {
            /** @type {?} */
            const newAppState = setValue(currentAppState, mappedStore.path, newValue);
            /** @type {?} */
            const instance = mappedStore.instance;
            if (instance.ngxsOnChanges) {
                /** @type {?} */
                const change = getStateDiffChanges(mappedStore, {
                    currentAppState,
                    newAppState
                });
                instance.ngxsOnChanges(change);
            }
            root.setState(newAppState);
            return newAppState;
            // In doing this refactoring I noticed that there is a 'bug' where the
            // application state is returned instead of this state slice.
            // This has worked this way since the beginning see:
            // https://github.com/ngxs/store/blame/324c667b4b7debd8eb979006c67ca0ae347d88cd/src/state-factory.ts
            // This needs to be fixed, but is a 'breaking' change.
            // I will do this fix in a subsequent PR and we can decide how to handle it.
        }
        /**
         * @param {?} currentAppState
         * @param {?} stateOperator
         * @return {?}
         */
        function setStateFromOperator(currentAppState, stateOperator) {
            /** @type {?} */
            const local = getState(currentAppState);
            /** @type {?} */
            const newValue = stateOperator(local);
            return setStateValue(currentAppState, newValue);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        function isStateOperator(value) {
            return typeof value === 'function';
        }
        return {
            /**
             * @return {?}
             */
            getState() {
                /** @type {?} */
                const currentAppState = root.getState();
                return getState(currentAppState);
            },
            /**
             * @param {?} val
             * @return {?}
             */
            patchState(val) {
                /** @type {?} */
                const currentAppState = root.getState();
                /** @type {?} */
                const patchOperator = simplePatch(val);
                return setStateFromOperator(currentAppState, patchOperator);
            },
            /**
             * @param {?} val
             * @return {?}
             */
            setState(val) {
                /** @type {?} */
                const currentAppState = root.getState();
                return isStateOperator(val)
                    ? setStateFromOperator(currentAppState, val)
                    : setStateValue(currentAppState, val);
            },
            /**
             * @param {?} actions
             * @return {?}
             */
            dispatch(actions) {
                return root.dispatch(actions);
            }
        };
    }
}
StateContextFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StateContextFactory.ctorParameters = () => [
    { type: InternalStateOperations }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StateContextFactory.prototype._internalStateOperations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtY29udGV4dC1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL2ludGVybmFsL3N0YXRlLWNvbnRleHQtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBT2hELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsWUFBb0Isd0JBQWlEO1FBQWpELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7SUFBRyxDQUFDOzs7Ozs7O0lBS3pFLGtCQUFrQixDQUFJLFdBQXdCOztjQUN0QyxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixFQUFFOzs7OztRQUVuRSxTQUFTLFFBQVEsQ0FBQyxlQUFvQjtZQUNwQyxPQUFPLFFBQVEsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7Ozs7OztRQUVELFNBQVMsYUFBYSxDQUFDLGVBQW9CLEVBQUUsUUFBVzs7a0JBQ2hELFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDOztrQkFDbkUsUUFBUSxHQUFrQixXQUFXLENBQUMsUUFBUTtZQUVwRCxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7O3NCQUNwQixNQUFNLEdBQXFCLG1CQUFtQixDQUFJLFdBQVcsRUFBRTtvQkFDbkUsZUFBZTtvQkFDZixXQUFXO2lCQUNaLENBQUM7Z0JBRUYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0IsT0FBTyxXQUFXLENBQUM7WUFDbkIsc0VBQXNFO1lBQ3RFLDZEQUE2RDtZQUM3RCxvREFBb0Q7WUFDcEQsb0dBQW9HO1lBQ3BHLHNEQUFzRDtZQUN0RCw0RUFBNEU7UUFDOUUsQ0FBQzs7Ozs7O1FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxlQUFvQixFQUFFLGFBQStCOztrQkFDM0UsS0FBSyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7O2tCQUNqQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLGFBQWEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7Ozs7UUFFRCxTQUFTLGVBQWUsQ0FBQyxLQUEyQjtZQUNsRCxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztRQUNyQyxDQUFDO1FBRUQsT0FBTzs7OztZQUNMLFFBQVE7O3NCQUNBLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2QyxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuQyxDQUFDOzs7OztZQUNELFVBQVUsQ0FBQyxHQUFlOztzQkFDbEIsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7O3NCQUNqQyxhQUFhLEdBQUcsV0FBVyxDQUFJLEdBQUcsQ0FBQztnQkFDekMsT0FBTyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDOUQsQ0FBQzs7Ozs7WUFDRCxRQUFRLENBQUMsR0FBeUI7O3NCQUMxQixlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkMsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDO29CQUN6QixDQUFDLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQzs7Ozs7WUFDRCxRQUFRLENBQUMsT0FBb0I7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQW5FRixVQUFVOzs7O1lBUEYsdUJBQXVCOzs7Ozs7O0lBU2xCLHVEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4c0xpZmVDeWNsZSwgTmd4c1NpbXBsZUNoYW5nZSwgU3RhdGVDb250ZXh0LCBTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9scyc7XG5pbXBvcnQgeyBnZXRTdGF0ZURpZmZDaGFuZ2VzLCBNYXBwZWRTdG9yZSB9IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XG5pbXBvcnQgeyBzZXRWYWx1ZSwgZ2V0VmFsdWUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyB9IGZyb20gJy4uL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMnO1xuaW1wb3J0IHsgc2ltcGxlUGF0Y2ggfSBmcm9tICcuL3N0YXRlLW9wZXJhdG9ycyc7XG5cbi8qKlxuICogU3RhdGUgQ29udGV4dCBmYWN0b3J5IGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZUNvbnRleHRGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnM6IEludGVybmFsU3RhdGVPcGVyYXRpb25zKSB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHN0YXRlIGNvbnRleHRcbiAgICovXG4gIGNyZWF0ZVN0YXRlQ29udGV4dDxUPihtYXBwZWRTdG9yZTogTWFwcGVkU3RvcmUpOiBTdGF0ZUNvbnRleHQ8VD4ge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9pbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5nZXRSb290U3RhdGVPcGVyYXRpb25zKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZShjdXJyZW50QXBwU3RhdGU6IGFueSk6IFQge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKGN1cnJlbnRBcHBTdGF0ZSwgbWFwcGVkU3RvcmUucGF0aCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdGVWYWx1ZShjdXJyZW50QXBwU3RhdGU6IGFueSwgbmV3VmFsdWU6IFQpOiBhbnkge1xuICAgICAgY29uc3QgbmV3QXBwU3RhdGUgPSBzZXRWYWx1ZShjdXJyZW50QXBwU3RhdGUsIG1hcHBlZFN0b3JlLnBhdGgsIG5ld1ZhbHVlKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlOiBOZ3hzTGlmZUN5Y2xlID0gbWFwcGVkU3RvcmUuaW5zdGFuY2U7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5uZ3hzT25DaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZTogTmd4c1NpbXBsZUNoYW5nZSA9IGdldFN0YXRlRGlmZkNoYW5nZXM8VD4obWFwcGVkU3RvcmUsIHtcbiAgICAgICAgICBjdXJyZW50QXBwU3RhdGUsXG4gICAgICAgICAgbmV3QXBwU3RhdGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5zdGFuY2Uubmd4c09uQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICByb290LnNldFN0YXRlKG5ld0FwcFN0YXRlKTtcbiAgICAgIHJldHVybiBuZXdBcHBTdGF0ZTtcbiAgICAgIC8vIEluIGRvaW5nIHRoaXMgcmVmYWN0b3JpbmcgSSBub3RpY2VkIHRoYXQgdGhlcmUgaXMgYSAnYnVnJyB3aGVyZSB0aGVcbiAgICAgIC8vIGFwcGxpY2F0aW9uIHN0YXRlIGlzIHJldHVybmVkIGluc3RlYWQgb2YgdGhpcyBzdGF0ZSBzbGljZS5cbiAgICAgIC8vIFRoaXMgaGFzIHdvcmtlZCB0aGlzIHdheSBzaW5jZSB0aGUgYmVnaW5uaW5nIHNlZTpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3hzL3N0b3JlL2JsYW1lLzMyNGM2NjdiNGI3ZGViZDhlYjk3OTAwNmM2N2NhMGFlMzQ3ZDg4Y2Qvc3JjL3N0YXRlLWZhY3RvcnkudHNcbiAgICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgZml4ZWQsIGJ1dCBpcyBhICdicmVha2luZycgY2hhbmdlLlxuICAgICAgLy8gSSB3aWxsIGRvIHRoaXMgZml4IGluIGEgc3Vic2VxdWVudCBQUiBhbmQgd2UgY2FuIGRlY2lkZSBob3cgdG8gaGFuZGxlIGl0LlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFN0YXRlRnJvbU9wZXJhdG9yKGN1cnJlbnRBcHBTdGF0ZTogYW55LCBzdGF0ZU9wZXJhdG9yOiBTdGF0ZU9wZXJhdG9yPFQ+KSB7XG4gICAgICBjb25zdCBsb2NhbCA9IGdldFN0YXRlKGN1cnJlbnRBcHBTdGF0ZSk7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHN0YXRlT3BlcmF0b3IobG9jYWwpO1xuICAgICAgcmV0dXJuIHNldFN0YXRlVmFsdWUoY3VycmVudEFwcFN0YXRlLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdGF0ZU9wZXJhdG9yKHZhbHVlOiBUIHwgU3RhdGVPcGVyYXRvcjxUPik6IHZhbHVlIGlzIFN0YXRlT3BlcmF0b3I8VD4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGUoKTogVCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBcHBTdGF0ZSA9IHJvb3QuZ2V0U3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKGN1cnJlbnRBcHBTdGF0ZSk7XG4gICAgICB9LFxuICAgICAgcGF0Y2hTdGF0ZSh2YWw6IFBhcnRpYWw8VD4pOiBUIHtcbiAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gcm9vdC5nZXRTdGF0ZSgpO1xuICAgICAgICBjb25zdCBwYXRjaE9wZXJhdG9yID0gc2ltcGxlUGF0Y2g8VD4odmFsKTtcbiAgICAgICAgcmV0dXJuIHNldFN0YXRlRnJvbU9wZXJhdG9yKGN1cnJlbnRBcHBTdGF0ZSwgcGF0Y2hPcGVyYXRvcik7XG4gICAgICB9LFxuICAgICAgc2V0U3RhdGUodmFsOiBUIHwgU3RhdGVPcGVyYXRvcjxUPik6IFQge1xuICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSByb290LmdldFN0YXRlKCk7XG4gICAgICAgIHJldHVybiBpc1N0YXRlT3BlcmF0b3IodmFsKVxuICAgICAgICAgID8gc2V0U3RhdGVGcm9tT3BlcmF0b3IoY3VycmVudEFwcFN0YXRlLCB2YWwpXG4gICAgICAgICAgOiBzZXRTdGF0ZVZhbHVlKGN1cnJlbnRBcHBTdGF0ZSwgdmFsKTtcbiAgICAgIH0sXG4gICAgICBkaXNwYXRjaChhY3Rpb25zOiBhbnkgfCBhbnlbXSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgICAgICByZXR1cm4gcm9vdC5kaXNwYXRjaChhY3Rpb25zKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=
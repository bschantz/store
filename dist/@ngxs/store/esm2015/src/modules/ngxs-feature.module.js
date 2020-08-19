/**
 * @fileoverview added by tsickle
 * Generated from: src/modules/ngxs-feature.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, Optional } from '@angular/core';
import { Store } from '../store';
import { InternalStateOperations } from '../internal/state-operations';
import { StateFactory } from '../internal/state-factory';
import { FEATURE_STATE_TOKEN } from '../symbols';
import { LifecycleStateManager } from '../internal/lifecycle-state-manager';
import { UpdateState } from '../actions/actions';
/**
 * Feature module
 * @ignore
 */
export class NgxsFeatureModule {
    /**
     * @param {?} _store
     * @param {?} internalStateOperations
     * @param {?} factory
     * @param {?=} states
     * @param {?=} lifecycleStateManager
     */
    constructor(_store, internalStateOperations, factory, states = [], lifecycleStateManager) {
        // Since FEATURE_STATE_TOKEN is a multi token, we need to
        // flatten it [[Feature1State, Feature2State], [Feature3State]]
        /** @type {?} */
        const flattenedStates = NgxsFeatureModule.flattenStates(states);
        // add stores to the state graph and return their defaults
        /** @type {?} */
        const results = factory.addAndReturnDefaults(flattenedStates);
        if (results.states.length) {
            internalStateOperations.setStateToTheCurrentWithNew(results);
            // dispatch the update action and invoke init and bootstrap functions after
            lifecycleStateManager.ngxsBootstrap(new UpdateState(results.defaults), results);
        }
    }
    /**
     * @private
     * @param {?=} states
     * @return {?}
     */
    static flattenStates(states = []) {
        return states.reduce((/**
         * @param {?} total
         * @param {?} values
         * @return {?}
         */
        (total, values) => total.concat(values)), []);
    }
}
NgxsFeatureModule.decorators = [
    { type: NgModule }
];
/** @nocollapse */
NgxsFeatureModule.ctorParameters = () => [
    { type: Store },
    { type: InternalStateOperations },
    { type: StateFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [FEATURE_STATE_TOKEN,] }] },
    { type: LifecycleStateManager }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4cy1mZWF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9tb2R1bGVzL25neHMtZmVhdHVyZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPakQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFDNUIsWUFDRSxNQUFhLEVBQ2IsdUJBQWdELEVBQ2hELE9BQXFCLEVBR3JCLFNBQWlDLEVBQUUsRUFDbkMscUJBQTRDOzs7O2NBSXRDLGVBQWUsR0FBeUIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7O2NBRy9FLE9BQU8sR0FBc0IsT0FBTyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUVoRixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pCLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTdELDJFQUEyRTtZQUMzRSxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFpQyxFQUFFO1FBQzlELE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7O1FBQ2xCLENBQUMsS0FBMkIsRUFBRSxNQUE0QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUNuRixFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQS9CRixRQUFROzs7O1lBWkEsS0FBSztZQUNMLHVCQUF1QjtZQUN2QixZQUFZO3dDQWdCaEIsUUFBUSxZQUNSLE1BQU0sU0FBQyxtQkFBbUI7WUFmdEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBOZ01vZHVsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyB9IGZyb20gJy4uL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vaW50ZXJuYWwvc3RhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBGRUFUVVJFX1NUQVRFX1RPS0VOIH0gZnJvbSAnLi4vc3ltYm9scyc7XG5pbXBvcnQgeyBMaWZlY3ljbGVTdGF0ZU1hbmFnZXIgfSBmcm9tICcuLi9pbnRlcm5hbC9saWZlY3ljbGUtc3RhdGUtbWFuYWdlcic7XG5pbXBvcnQgeyBTdGF0ZUNsYXNzSW50ZXJuYWwsIFN0YXRlc0FuZERlZmF1bHRzIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcbmltcG9ydCB7IFVwZGF0ZVN0YXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zJztcblxuLyoqXG4gKiBGZWF0dXJlIG1vZHVsZVxuICogQGlnbm9yZVxuICovXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIE5neHNGZWF0dXJlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgX3N0b3JlOiBTdG9yZSxcbiAgICBpbnRlcm5hbFN0YXRlT3BlcmF0aW9uczogSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMsXG4gICAgZmFjdG9yeTogU3RhdGVGYWN0b3J5LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChGRUFUVVJFX1NUQVRFX1RPS0VOKVxuICAgIHN0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW11bXSA9IFtdLFxuICAgIGxpZmVjeWNsZVN0YXRlTWFuYWdlcjogTGlmZWN5Y2xlU3RhdGVNYW5hZ2VyXG4gICkge1xuICAgIC8vIFNpbmNlIEZFQVRVUkVfU1RBVEVfVE9LRU4gaXMgYSBtdWx0aSB0b2tlbiwgd2UgbmVlZCB0b1xuICAgIC8vIGZsYXR0ZW4gaXQgW1tGZWF0dXJlMVN0YXRlLCBGZWF0dXJlMlN0YXRlXSwgW0ZlYXR1cmUzU3RhdGVdXVxuICAgIGNvbnN0IGZsYXR0ZW5lZFN0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW10gPSBOZ3hzRmVhdHVyZU1vZHVsZS5mbGF0dGVuU3RhdGVzKHN0YXRlcyk7XG5cbiAgICAvLyBhZGQgc3RvcmVzIHRvIHRoZSBzdGF0ZSBncmFwaCBhbmQgcmV0dXJuIHRoZWlyIGRlZmF1bHRzXG4gICAgY29uc3QgcmVzdWx0czogU3RhdGVzQW5kRGVmYXVsdHMgPSBmYWN0b3J5LmFkZEFuZFJldHVybkRlZmF1bHRzKGZsYXR0ZW5lZFN0YXRlcyk7XG5cbiAgICBpZiAocmVzdWx0cy5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICBpbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5zZXRTdGF0ZVRvVGhlQ3VycmVudFdpdGhOZXcocmVzdWx0cyk7XG5cbiAgICAgIC8vIGRpc3BhdGNoIHRoZSB1cGRhdGUgYWN0aW9uIGFuZCBpbnZva2UgaW5pdCBhbmQgYm9vdHN0cmFwIGZ1bmN0aW9ucyBhZnRlclxuICAgICAgbGlmZWN5Y2xlU3RhdGVNYW5hZ2VyLm5neHNCb290c3RyYXAobmV3IFVwZGF0ZVN0YXRlKHJlc3VsdHMuZGVmYXVsdHMpLCByZXN1bHRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuU3RhdGVzKHN0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW11bXSA9IFtdKTogU3RhdGVDbGFzc0ludGVybmFsW10ge1xuICAgIHJldHVybiBzdGF0ZXMucmVkdWNlKFxuICAgICAgKHRvdGFsOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSwgdmFsdWVzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSkgPT4gdG90YWwuY29uY2F0KHZhbHVlcyksXG4gICAgICBbXVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
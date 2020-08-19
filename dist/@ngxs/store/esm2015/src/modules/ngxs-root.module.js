/**
 * @fileoverview added by tsickle
 * Generated from: src/modules/ngxs-root.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, Optional } from '@angular/core';
import { StateFactory } from '../internal/state-factory';
import { InternalStateOperations } from '../internal/state-operations';
import { Store } from '../store';
import { SelectFactory } from '../decorators/select/select-factory';
import { ROOT_STATE_TOKEN } from '../symbols';
import { LifecycleStateManager } from '../internal/lifecycle-state-manager';
import { InitState } from '../actions/actions';
import { setIvyEnabledInDevMode } from '../ivy/ivy-enabled-in-dev-mode';
/**
 * Root module
 * @ignore
 */
export class NgxsRootModule {
    /**
     * @param {?} factory
     * @param {?} internalStateOperations
     * @param {?} _store
     * @param {?} _select
     * @param {?=} states
     * @param {?=} lifecycleStateManager
     */
    constructor(factory, internalStateOperations, _store, _select, states = [], lifecycleStateManager) {
        // Validate states on having the `@Injectable()` decorator in Ivy
        setIvyEnabledInDevMode();
        // Add stores to the state graph and return their defaults
        /** @type {?} */
        const results = factory.addAndReturnDefaults(states);
        internalStateOperations.setStateToTheCurrentWithNew(results);
        // Connect our actions stream
        factory.connectActionHandlers();
        // Dispatch the init action and invoke init and bootstrap functions after
        lifecycleStateManager.ngxsBootstrap(new InitState(), results);
    }
}
NgxsRootModule.decorators = [
    { type: NgModule }
];
/** @nocollapse */
NgxsRootModule.ctorParameters = () => [
    { type: StateFactory },
    { type: InternalStateOperations },
    { type: Store },
    { type: SelectFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ROOT_STATE_TOKEN,] }] },
    { type: LifecycleStateManager }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4cy1yb290Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9tb2R1bGVzL25neHMtcm9vdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBT3hFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7Ozs7SUFDekIsWUFDRSxPQUFxQixFQUNyQix1QkFBZ0QsRUFDaEQsTUFBYSxFQUNiLE9BQXNCLEVBR3RCLFNBQStCLEVBQUUsRUFDakMscUJBQTRDO1FBRTVDLGlFQUFpRTtRQUNqRSxzQkFBc0IsRUFBRSxDQUFDOzs7Y0FHbkIsT0FBTyxHQUFzQixPQUFPLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBRXZFLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdELDZCQUE2QjtRQUM3QixPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUVoQyx5RUFBeUU7UUFDekUscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksU0FBUyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7O1lBekJGLFFBQVE7Ozs7WUFkQSxZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLEtBQUs7WUFDTCxhQUFhO3dDQWtCakIsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7WUFoQm5CLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTmdNb2R1bGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0YXRlRmFjdG9yeSB9IGZyb20gJy4uL2ludGVybmFsL3N0YXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMgfSBmcm9tICcuLi9pbnRlcm5hbC9zdGF0ZS1vcGVyYXRpb25zJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgU2VsZWN0RmFjdG9yeSB9IGZyb20gJy4uL2RlY29yYXRvcnMvc2VsZWN0L3NlbGVjdC1mYWN0b3J5JztcbmltcG9ydCB7IFJPT1RfU1RBVEVfVE9LRU4gfSBmcm9tICcuLi9zeW1ib2xzJztcbmltcG9ydCB7IFN0YXRlQ2xhc3NJbnRlcm5hbCwgU3RhdGVzQW5kRGVmYXVsdHMgfSBmcm9tICcuLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgTGlmZWN5Y2xlU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi4vaW50ZXJuYWwvbGlmZWN5Y2xlLXN0YXRlLW1hbmFnZXInO1xuaW1wb3J0IHsgSW5pdFN0YXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zJztcbmltcG9ydCB7IHNldEl2eUVuYWJsZWRJbkRldk1vZGUgfSBmcm9tICcuLi9pdnkvaXZ5LWVuYWJsZWQtaW4tZGV2LW1vZGUnO1xuXG4vKipcbiAqIFJvb3QgbW9kdWxlXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTmd4c1Jvb3RNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBmYWN0b3J5OiBTdGF0ZUZhY3RvcnksXG4gICAgaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnM6IEludGVybmFsU3RhdGVPcGVyYXRpb25zLFxuICAgIF9zdG9yZTogU3RvcmUsXG4gICAgX3NlbGVjdDogU2VsZWN0RmFjdG9yeSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUk9PVF9TVEFURV9UT0tFTilcbiAgICBzdGF0ZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdID0gW10sXG4gICAgbGlmZWN5Y2xlU3RhdGVNYW5hZ2VyOiBMaWZlY3ljbGVTdGF0ZU1hbmFnZXJcbiAgKSB7XG4gICAgLy8gVmFsaWRhdGUgc3RhdGVzIG9uIGhhdmluZyB0aGUgYEBJbmplY3RhYmxlKClgIGRlY29yYXRvciBpbiBJdnlcbiAgICBzZXRJdnlFbmFibGVkSW5EZXZNb2RlKCk7XG5cbiAgICAvLyBBZGQgc3RvcmVzIHRvIHRoZSBzdGF0ZSBncmFwaCBhbmQgcmV0dXJuIHRoZWlyIGRlZmF1bHRzXG4gICAgY29uc3QgcmVzdWx0czogU3RhdGVzQW5kRGVmYXVsdHMgPSBmYWN0b3J5LmFkZEFuZFJldHVybkRlZmF1bHRzKHN0YXRlcyk7XG5cbiAgICBpbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5zZXRTdGF0ZVRvVGhlQ3VycmVudFdpdGhOZXcocmVzdWx0cyk7XG5cbiAgICAvLyBDb25uZWN0IG91ciBhY3Rpb25zIHN0cmVhbVxuICAgIGZhY3RvcnkuY29ubmVjdEFjdGlvbkhhbmRsZXJzKCk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgaW5pdCBhY3Rpb24gYW5kIGludm9rZSBpbml0IGFuZCBib290c3RyYXAgZnVuY3Rpb25zIGFmdGVyXG4gICAgbGlmZWN5Y2xlU3RhdGVNYW5hZ2VyLm5neHNCb290c3RyYXAobmV3IEluaXRTdGF0ZSgpLCByZXN1bHRzKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/lifecycle-state-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxsBootstrapper } from '@ngxs/store/internals';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { StateContextFactory } from './state-context-factory';
import { InternalStateOperations } from './state-operations';
import { getStateDiffChanges } from './internals';
export class LifecycleStateManager {
    /**
     * @param {?} internalStateOperations
     * @param {?} stateContextFactory
     * @param {?} bootstrapper
     */
    constructor(internalStateOperations, stateContextFactory, bootstrapper) {
        this.internalStateOperations = internalStateOperations;
        this.stateContextFactory = stateContextFactory;
        this.bootstrapper = bootstrapper;
    }
    /**
     * @template T
     * @param {?} action
     * @param {?} results
     * @return {?}
     */
    ngxsBootstrap(action, results) {
        this.internalStateOperations
            .getRootStateOperations()
            .dispatch(action)
            .pipe(filter((/**
         * @return {?}
         */
        () => !!results)), tap((/**
         * @return {?}
         */
        () => this.invokeInit((/** @type {?} */ (results)).states))), mergeMap((/**
         * @return {?}
         */
        () => this.bootstrapper.appBootstrapped$)), filter((/**
         * @param {?} appBootstrapped
         * @return {?}
         */
        appBootstrapped => !!appBootstrapped)))
            .subscribe((/**
         * @return {?}
         */
        () => this.invokeBootstrap((/** @type {?} */ (results)).states)));
    }
    /**
     * Invoke the init function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    invokeInit(mappedStores) {
        for (const mappedStore of mappedStores) {
            /** @type {?} */
            const instance = mappedStore.instance;
            if (instance.ngxsOnChanges) {
                /** @type {?} */
                const currentAppState = {};
                /** @type {?} */
                const newAppState = this.internalStateOperations
                    .getRootStateOperations()
                    .getState();
                /** @type {?} */
                const firstDiffChange = getStateDiffChanges(mappedStore, {
                    currentAppState,
                    newAppState
                });
                instance.ngxsOnChanges(firstDiffChange);
            }
            if (instance.ngxsOnInit) {
                instance.ngxsOnInit(this.getStateContext(mappedStore));
            }
            mappedStore.isInitialised = true;
        }
    }
    /**
     * Invoke the bootstrap function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    invokeBootstrap(mappedStores) {
        for (const mappedStore of mappedStores) {
            /** @type {?} */
            const instance = mappedStore.instance;
            if (instance.ngxsAfterBootstrap) {
                instance.ngxsAfterBootstrap(this.getStateContext(mappedStore));
            }
        }
    }
    /**
     * @private
     * @param {?} mappedStore
     * @return {?}
     */
    getStateContext(mappedStore) {
        return this.stateContextFactory.createStateContext(mappedStore);
    }
}
LifecycleStateManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LifecycleStateManager.ctorParameters = () => [
    { type: InternalStateOperations },
    { type: StateContextFactory },
    { type: NgxsBootstrapper }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LifecycleStateManager.prototype.internalStateOperations;
    /**
     * @type {?}
     * @private
     */
    LifecycleStateManager.prototype.stateContextFactory;
    /**
     * @type {?}
     * @private
     */
    LifecycleStateManager.prototype.bootstrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLXN0YXRlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvaW50ZXJuYWwvbGlmZWN5Y2xlLXN0YXRlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBa0MsTUFBTSxhQUFhLENBQUM7QUFJbEYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBQ2hDLFlBQ1UsdUJBQWdELEVBQ2hELG1CQUF3QyxFQUN4QyxZQUE4QjtRQUY5Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWtCO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFSixhQUFhLENBQUksTUFBUyxFQUFFLE9BQXNDO1FBQ2hFLElBQUksQ0FBQyx1QkFBdUI7YUFDekIsc0JBQXNCLEVBQUU7YUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQixJQUFJLENBQ0gsTUFBTTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxFQUN2QixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFBLE9BQU8sRUFBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQzNDLFFBQVE7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUMsRUFDbEQsTUFBTTs7OztRQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBQyxDQUM3QzthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQUEsT0FBTyxFQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFLRCxVQUFVLENBQUMsWUFBMkI7UUFDcEMsS0FBSyxNQUFNLFdBQVcsSUFBSSxZQUFZLEVBQUU7O2tCQUNoQyxRQUFRLEdBQWtCLFdBQVcsQ0FBQyxRQUFRO1lBRXBELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTs7c0JBQ3BCLGVBQWUsR0FBZ0IsRUFBRTs7c0JBQ2pDLFdBQVcsR0FBZ0IsSUFBSSxDQUFDLHVCQUF1QjtxQkFDMUQsc0JBQXNCLEVBQUU7cUJBQ3hCLFFBQVEsRUFBRTs7c0JBRVAsZUFBZSxHQUFxQixtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7b0JBQ3pFLGVBQWU7b0JBQ2YsV0FBVztpQkFDWixDQUFDO2dCQUVGLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDekM7WUFFRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFLRCxlQUFlLENBQUMsWUFBMkI7UUFDekMsS0FBSyxNQUFNLFdBQVcsSUFBSSxZQUFZLEVBQUU7O2tCQUNoQyxRQUFRLEdBQWtCLFdBQVcsQ0FBQyxRQUFRO1lBQ3BELElBQUksUUFBUSxDQUFDLGtCQUFrQixFQUFFO2dCQUMvQixRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsV0FBd0I7UUFDOUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBaEVGLFVBQVU7Ozs7WUFKRix1QkFBdUI7WUFEdkIsbUJBQW1CO1lBSG5CLGdCQUFnQjs7Ozs7OztJQVdyQix3REFBd0Q7Ozs7O0lBQ3hELG9EQUFnRDs7Ozs7SUFDaEQsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4c0Jvb3RzdHJhcHBlciwgUGxhaW5PYmplY3QgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHRGYWN0b3J5IH0gZnJvbSAnLi9zdGF0ZS1jb250ZXh0LWZhY3RvcnknO1xuaW1wb3J0IHsgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMgfSBmcm9tICcuL3N0YXRlLW9wZXJhdGlvbnMnO1xuaW1wb3J0IHsgZ2V0U3RhdGVEaWZmQ2hhbmdlcywgTWFwcGVkU3RvcmUsIFN0YXRlc0FuZERlZmF1bHRzIH0gZnJvbSAnLi9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgTmd4c0xpZmVDeWNsZSwgTmd4c1NpbXBsZUNoYW5nZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vc3ltYm9scyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaWZlY3ljbGVTdGF0ZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGludGVybmFsU3RhdGVPcGVyYXRpb25zOiBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyxcbiAgICBwcml2YXRlIHN0YXRlQ29udGV4dEZhY3Rvcnk6IFN0YXRlQ29udGV4dEZhY3RvcnksXG4gICAgcHJpdmF0ZSBib290c3RyYXBwZXI6IE5neHNCb290c3RyYXBwZXJcbiAgKSB7fVxuXG4gIG5neHNCb290c3RyYXA8VD4oYWN0aW9uOiBULCByZXN1bHRzOiBTdGF0ZXNBbmREZWZhdWx0cyB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnNcbiAgICAgIC5nZXRSb290U3RhdGVPcGVyYXRpb25zKClcbiAgICAgIC5kaXNwYXRjaChhY3Rpb24pXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhcmVzdWx0cyksXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLmludm9rZUluaXQocmVzdWx0cyEuc3RhdGVzKSksXG4gICAgICAgIG1lcmdlTWFwKCgpID0+IHRoaXMuYm9vdHN0cmFwcGVyLmFwcEJvb3RzdHJhcHBlZCQpLFxuICAgICAgICBmaWx0ZXIoYXBwQm9vdHN0cmFwcGVkID0+ICEhYXBwQm9vdHN0cmFwcGVkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludm9rZUJvb3RzdHJhcChyZXN1bHRzIS5zdGF0ZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgdGhlIGluaXQgZnVuY3Rpb24gb24gdGhlIHN0YXRlcy5cbiAgICovXG4gIGludm9rZUluaXQobWFwcGVkU3RvcmVzOiBNYXBwZWRTdG9yZVtdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBtYXBwZWRTdG9yZSBvZiBtYXBwZWRTdG9yZXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlOiBOZ3hzTGlmZUN5Y2xlID0gbWFwcGVkU3RvcmUuaW5zdGFuY2U7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5uZ3hzT25DaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBcHBTdGF0ZTogUGxhaW5PYmplY3QgPSB7fTtcbiAgICAgICAgY29uc3QgbmV3QXBwU3RhdGU6IFBsYWluT2JqZWN0ID0gdGhpcy5pbnRlcm5hbFN0YXRlT3BlcmF0aW9uc1xuICAgICAgICAgIC5nZXRSb290U3RhdGVPcGVyYXRpb25zKClcbiAgICAgICAgICAuZ2V0U3RhdGUoKTtcblxuICAgICAgICBjb25zdCBmaXJzdERpZmZDaGFuZ2U6IE5neHNTaW1wbGVDaGFuZ2UgPSBnZXRTdGF0ZURpZmZDaGFuZ2VzKG1hcHBlZFN0b3JlLCB7XG4gICAgICAgICAgY3VycmVudEFwcFN0YXRlLFxuICAgICAgICAgIG5ld0FwcFN0YXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluc3RhbmNlLm5neHNPbkNoYW5nZXMoZmlyc3REaWZmQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlLm5neHNPbkluaXQpIHtcbiAgICAgICAgaW5zdGFuY2Uubmd4c09uSW5pdCh0aGlzLmdldFN0YXRlQ29udGV4dChtYXBwZWRTdG9yZSkpO1xuICAgICAgfVxuXG4gICAgICBtYXBwZWRTdG9yZS5pc0luaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBib290c3RyYXAgZnVuY3Rpb24gb24gdGhlIHN0YXRlcy5cbiAgICovXG4gIGludm9rZUJvb3RzdHJhcChtYXBwZWRTdG9yZXM6IE1hcHBlZFN0b3JlW10pIHtcbiAgICBmb3IgKGNvbnN0IG1hcHBlZFN0b3JlIG9mIG1hcHBlZFN0b3Jlcykge1xuICAgICAgY29uc3QgaW5zdGFuY2U6IE5neHNMaWZlQ3ljbGUgPSBtYXBwZWRTdG9yZS5pbnN0YW5jZTtcbiAgICAgIGlmIChpbnN0YW5jZS5uZ3hzQWZ0ZXJCb290c3RyYXApIHtcbiAgICAgICAgaW5zdGFuY2Uubmd4c0FmdGVyQm9vdHN0cmFwKHRoaXMuZ2V0U3RhdGVDb250ZXh0KG1hcHBlZFN0b3JlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0ZUNvbnRleHQobWFwcGVkU3RvcmU6IE1hcHBlZFN0b3JlKTogU3RhdGVDb250ZXh0PGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlQ29udGV4dEZhY3RvcnkuY3JlYXRlU3RhdGVDb250ZXh0KG1hcHBlZFN0b3JlKTtcbiAgfVxufVxuIl19
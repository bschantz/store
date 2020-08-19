/**
 * @fileoverview added by tsickle
 * Generated from: src/decorators/select/select-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '../../store';
import { NgxsConfig } from '../../symbols';
/**
 * Allows the select decorator to get access to the DI store.
 * \@internal only use in \@Select decorator
 * @ignore
 */
export class SelectFactory {
    /**
     * @param {?} store
     * @param {?} config
     */
    constructor(store, config) {
        SelectFactory.store = store;
        SelectFactory.config = config;
    }
}
SelectFactory.store = null;
SelectFactory.config = null;
SelectFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectFactory.ctorParameters = () => [
    { type: Store },
    { type: NgxsConfig }
];
if (false) {
    /** @type {?} */
    SelectFactory.store;
    /** @type {?} */
    SelectFactory.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvZGVjb3JhdG9ycy9zZWxlY3Qvc2VsZWN0LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUTNDLE1BQU0sT0FBTyxhQUFhOzs7OztJQUl4QixZQUFZLEtBQVksRUFBRSxNQUFrQjtRQUMxQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDOztBQU5hLG1CQUFLLEdBQWlCLElBQUksQ0FBQztBQUMzQixvQkFBTSxHQUFzQixJQUFJLENBQUM7O1lBSGhELFVBQVU7Ozs7WUFSRixLQUFLO1lBQ0wsVUFBVTs7OztJQVNqQixvQkFBeUM7O0lBQ3pDLHFCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5pbXBvcnQgeyBOZ3hzQ29uZmlnIH0gZnJvbSAnLi4vLi4vc3ltYm9scyc7XG5cbi8qKlxuICogQWxsb3dzIHRoZSBzZWxlY3QgZGVjb3JhdG9yIHRvIGdldCBhY2Nlc3MgdG8gdGhlIERJIHN0b3JlLlxuICogQGludGVybmFsIG9ubHkgdXNlIGluIEBTZWxlY3QgZGVjb3JhdG9yXG4gKiBAaWdub3JlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBzdG9yZTogU3RvcmUgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHN0YXRpYyBjb25maWc6IE5neHNDb25maWcgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmUsIGNvbmZpZzogTmd4c0NvbmZpZykge1xuICAgIFNlbGVjdEZhY3Rvcnkuc3RvcmUgPSBzdG9yZTtcbiAgICBTZWxlY3RGYWN0b3J5LmNvbmZpZyA9IGNvbmZpZztcbiAgfVxufVxuIl19
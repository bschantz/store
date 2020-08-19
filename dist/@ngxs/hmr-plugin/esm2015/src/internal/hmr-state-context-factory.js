/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/hmr-state-context-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Store } from '@ngxs/store';
import { isStateOperator } from '@ngxs/store/operators';
/**
 * @template T, S
 */
export class HmrStateContextFactory {
    /**
     * @param {?} module
     */
    constructor(module) {
        /** @type {?} */
        const store = module.injector.get(Store, undefined);
        if (!store) {
            throw new Error('Store not found, maybe you forgot to import the NgxsModule');
        }
        this.store = store;
    }
    /**
     * \@description
     * must be taken out into  \@ngxs/store/internals
     * @return {?}
     */
    createStateContext() {
        return {
            dispatch: (/**
             * @param {?} actions
             * @return {?}
             */
            actions => (/** @type {?} */ (this.store)).dispatch(actions)),
            getState: (/**
             * @return {?}
             */
            () => (/** @type {?} */ ((/** @type {?} */ (this.store)).snapshot()))),
            setState: (/**
             * @param {?} val
             * @return {?}
             */
            val => {
                if (isStateOperator(val)) {
                    /** @type {?} */
                    const currentState = (/** @type {?} */ (this.store)).snapshot();
                    val = val(currentState);
                }
                (/** @type {?} */ (this.store)).reset(val);
                return (/** @type {?} */ (val));
            }),
            patchState: (/**
             * @param {?} val
             * @return {?}
             */
            val => {
                /** @type {?} */
                const currentState = (/** @type {?} */ (this.store)).snapshot();
                /** @type {?} */
                const newState = Object.assign(Object.assign({}, currentState), ((/** @type {?} */ (val))));
                (/** @type {?} */ (this.store)).reset(newState);
                return newState;
            })
        };
    }
}
if (false) {
    /** @type {?} */
    HmrStateContextFactory.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1yLXN0YXRlLWNvbnRleHQtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2htci1wbHVnaW4vc3JjL2ludGVybmFsL2htci1zdGF0ZS1jb250ZXh0LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWdCLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHeEQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUdqQyxZQUFZLE1BQXNCOztjQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQVEsS0FBSyxFQUFFLFNBQVMsQ0FBQztRQUUxRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1NBQy9FO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBTU0sa0JBQWtCO1FBQ3ZCLE9BQU87WUFDTCxRQUFROzs7O1lBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2xELFFBQVE7OztZQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFHLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBQSxDQUFBO1lBQ3pDLFFBQVE7Ozs7WUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDZCxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTs7MEJBQ2xCLFlBQVksR0FBRyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsUUFBUSxFQUFFO29CQUMzQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6QjtnQkFFRCxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLG1CQUFHLEdBQUcsRUFBQSxDQUFDO1lBQ2hCLENBQUMsQ0FBQTtZQUNELFVBQVU7Ozs7WUFBRSxHQUFHLENBQUMsRUFBRTs7c0JBQ1YsWUFBWSxHQUFHLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxRQUFRLEVBQUU7O3NCQUNyQyxRQUFRLG1DQUFRLFlBQVksR0FBSyxDQUFDLG1CQUFRLEdBQUcsRUFBQSxDQUFDLENBQUU7Z0JBQ3RELG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQXJDQyx1Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUNvbnRleHQsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuaW1wb3J0IHsgaXNTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnQG5neHMvc3RvcmUvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5nTW9kdWxlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIbXJTdGF0ZUNvbnRleHRGYWN0b3J5PFQsIFM+IHtcbiAgcHVibGljIHN0b3JlOiBTdG9yZTtcblxuICBjb25zdHJ1Y3Rvcihtb2R1bGU6IE5nTW9kdWxlUmVmPFQ+KSB7XG4gICAgY29uc3Qgc3RvcmUgPSBtb2R1bGUuaW5qZWN0b3IuZ2V0PFN0b3JlPihTdG9yZSwgdW5kZWZpbmVkKTtcblxuICAgIGlmICghc3RvcmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmUgbm90IGZvdW5kLCBtYXliZSB5b3UgZm9yZ290IHRvIGltcG9ydCB0aGUgTmd4c01vZHVsZScpO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogbXVzdCBiZSB0YWtlbiBvdXQgaW50byAgQG5neHMvc3RvcmUvaW50ZXJuYWxzXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlU3RhdGVDb250ZXh0KCk6IFN0YXRlQ29udGV4dDxTPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BhdGNoOiBhY3Rpb25zID0+IHRoaXMuc3RvcmUhLmRpc3BhdGNoKGFjdGlvbnMpLFxuICAgICAgZ2V0U3RhdGU6ICgpID0+IDxTPnRoaXMuc3RvcmUhLnNuYXBzaG90KCksXG4gICAgICBzZXRTdGF0ZTogdmFsID0+IHtcbiAgICAgICAgaWYgKGlzU3RhdGVPcGVyYXRvcih2YWwpKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5zdG9yZSEuc25hcHNob3QoKTtcbiAgICAgICAgICB2YWwgPSB2YWwoY3VycmVudFN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RvcmUhLnJlc2V0KHZhbCk7XG4gICAgICAgIHJldHVybiA8Uz52YWw7XG4gICAgICB9LFxuICAgICAgcGF0Y2hTdGF0ZTogdmFsID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5zdG9yZSEuc25hcHNob3QoKTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLmN1cnJlbnRTdGF0ZSwgLi4uKDxvYmplY3Q+dmFsKSB9O1xuICAgICAgICB0aGlzLnN0b3JlIS5yZXNldChuZXdTdGF0ZSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=
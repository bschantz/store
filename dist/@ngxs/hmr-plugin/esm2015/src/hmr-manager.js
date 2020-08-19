/**
 * @fileoverview added by tsickle
 * Generated from: src/hmr-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { ApplicationRef } from '@angular/core';
import { InitialState, NgxsBootstrapper } from '@ngxs/store/internals';
import { HmrStateContextFactory } from './internal/hmr-state-context-factory';
import { HmrOptionBuilder } from './internal/hmr-options-builder';
import { HmrInitAction } from './actions/hmr-init.action';
import { HmrLifecycle } from './internal/hmr-lifecycle';
/**
 * @template T, S
 */
export class HmrManager {
    /**
     * @param {?} options
     * @param {?} storage
     */
    constructor(options, storage) {
        this.storage = storage;
        this.optionsBuilder = new HmrOptionBuilder(options);
    }
    /**
     * @private
     * @return {?}
     */
    get applicationRef() {
        return this.ngModule.injector.get(ApplicationRef);
    }
    /**
     * @private
     * @return {?}
     */
    get bootstrap() {
        return this.ngModule.injector.get(NgxsBootstrapper);
    }
    /**
     * @param {?} bootstrapFn
     * @param {?} tick
     * @return {?}
     */
    hmrModule(bootstrapFn, tick) {
        return __awaiter(this, void 0, void 0, function* () {
            InitialState.set(this.storage.snapshot);
            this.ngModule = yield bootstrapFn();
            this.context = new HmrStateContextFactory(this.ngModule);
            this.lifecycle = this.createLifecycle();
            tick();
            InitialState.pop();
            return this.ngModule;
        });
    }
    /**
     * @return {?}
     */
    beforeModuleBootstrap() {
        this.lifecycle.hmrNgxsStoreOnInit((/**
         * @param {?} ctx
         * @param {?} state
         * @return {?}
         */
        (ctx, state) => {
            ctx.dispatch(new HmrInitAction(state));
        }));
    }
    /**
     * @return {?}
     */
    beforeModuleOnDestroy() {
        this.optionsBuilder.clearLogs();
        return this.lifecycle.hmrNgxsStoreBeforeOnDestroy();
    }
    /**
     * @return {?}
     */
    createNewModule() {
        /** @type {?} */
        const removeOldHosts = this.cloneHostsBeforeDestroy();
        this.removeNgStyles();
        this.ngModule.destroy();
        removeOldHosts();
    }
    /**
     * @private
     * @return {?}
     */
    createLifecycle() {
        return new HmrLifecycle(this.ngModule.instance, this.bootstrap, this.storage, this.context, this.optionsBuilder);
    }
    /**
     * @private
     * @return {?}
     */
    cloneHostsBeforeDestroy() {
        /** @type {?} */
        const elements = this.applicationRef.components.map((/**
         * @param {?} component
         * @return {?}
         */
        (component) => component.location.nativeElement));
        /** @type {?} */
        const removableList = elements.map((/**
         * @param {?} componentNode
         * @return {?}
         */
        (componentNode) => {
            /** @type {?} */
            const newNode = document.createElement(componentNode.tagName);
            /** @type {?} */
            const parentNode = (/** @type {?} */ (componentNode.parentNode));
            /** @type {?} */
            const currentDisplay = newNode.style.display;
            newNode.style.display = 'none';
            parentNode.insertBefore(newNode, componentNode);
            return (/**
             * @return {?}
             */
            () => {
                newNode.style.display = currentDisplay;
                try {
                    parentNode.removeChild(componentNode);
                }
                catch (_a) { }
            });
        }));
        return (/**
         * @return {?}
         */
        function removeOldHosts() {
            removableList.forEach((/**
             * @param {?} removeOldHost
             * @return {?}
             */
            (removeOldHost) => removeOldHost()));
        });
    }
    /**
     * @private
     * @return {?}
     */
    removeNgStyles() {
        /** @type {?} */
        const head = (/** @type {?} */ (document.head));
        /** @type {?} */
        const styles = Array.from((/** @type {?} */ (head)).querySelectorAll('style'));
        styles
            .filter((/**
         * @param {?} style
         * @return {?}
         */
        (style) => style.innerText.includes('_ng')))
            .map((/**
         * @param {?} style
         * @return {?}
         */
        (style) => (/** @type {?} */ (head)).removeChild(style)));
    }
}
if (false) {
    /** @type {?} */
    HmrManager.prototype.storage;
    /** @type {?} */
    HmrManager.prototype.context;
    /** @type {?} */
    HmrManager.prototype.lifecycle;
    /** @type {?} */
    HmrManager.prototype.optionsBuilder;
    /**
     * @type {?}
     * @private
     */
    HmrManager.prototype.ngModule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1yLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9obXItcGx1Z2luL3NyYy9obXItbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUl4RCxNQUFNLE9BQU8sVUFBVTs7Ozs7SUFPckIsWUFBWSxPQUF1QixFQUFFLE9BQXNCO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELElBQVksY0FBYztRQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELElBQVksU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVZLFNBQVMsQ0FDcEIsV0FBaUMsRUFDakMsSUFBZ0I7O1lBRWhCLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxH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QUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQzthQUNwRSxHQUFHOzs7O1FBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxtQkFBQSxJQUFJLEVBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0Y7OztJQWhHQyw2QkFBOEI7O0lBQzlCLDZCQUE2Qzs7SUFDN0MsK0JBQXFDOztJQUNyQyxvQ0FBd0M7Ozs7O0lBQ3hDLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZWYsIE5nTW9kdWxlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbml0aWFsU3RhdGUsIE5neHNCb290c3RyYXBwZXIgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xuXG5pbXBvcnQgeyBIbXJTdG9yYWdlIH0gZnJvbSAnLi9pbnRlcm5hbC9obXItc3RvcmFnZSc7XG5pbXBvcnQge1xuICBCb290c3RyYXBNb2R1bGVGbixcbiAgTmd4c0htckxpZmVDeWNsZSxcbiAgTmd4c0htck9wdGlvbnMsXG4gIE5neHNIbXJTbmFwc2hvdFxufSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgSG1yU3RhdGVDb250ZXh0RmFjdG9yeSB9IGZyb20gJy4vaW50ZXJuYWwvaG1yLXN0YXRlLWNvbnRleHQtZmFjdG9yeSc7XG5pbXBvcnQgeyBIbXJPcHRpb25CdWlsZGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9obXItb3B0aW9ucy1idWlsZGVyJztcbmltcG9ydCB7IEhtckluaXRBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMvaG1yLWluaXQuYWN0aW9uJztcbmltcG9ydCB7IEhtckxpZmVjeWNsZSB9IGZyb20gJy4vaW50ZXJuYWwvaG1yLWxpZmVjeWNsZSc7XG5cbnR5cGUgT2xkSG9zdFJlbW92ZXJGbiA9ICgpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBIbXJNYW5hZ2VyPFQgZXh0ZW5kcyBQYXJ0aWFsPE5neHNIbXJMaWZlQ3ljbGU8Uz4+LCBTID0gTmd4c0htclNuYXBzaG90PiB7XG4gIHB1YmxpYyBzdG9yYWdlOiBIbXJTdG9yYWdlPFM+O1xuICBwdWJsaWMgY29udGV4dDogSG1yU3RhdGVDb250ZXh0RmFjdG9yeTxULCBTPjtcbiAgcHVibGljIGxpZmVjeWNsZTogSG1yTGlmZWN5Y2xlPFQsIFM+O1xuICBwdWJsaWMgb3B0aW9uc0J1aWxkZXI6IEhtck9wdGlvbkJ1aWxkZXI7XG4gIHByaXZhdGUgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5neHNIbXJPcHRpb25zLCBzdG9yYWdlOiBIbXJTdG9yYWdlPFM+KSB7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLm9wdGlvbnNCdWlsZGVyID0gbmV3IEhtck9wdGlvbkJ1aWxkZXIob3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGdldCBhcHBsaWNhdGlvblJlZigpOiBBcHBsaWNhdGlvblJlZiB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2R1bGUuaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uUmVmKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGJvb3RzdHJhcCgpOiBOZ3hzQm9vdHN0cmFwcGVyIHtcbiAgICByZXR1cm4gdGhpcy5uZ01vZHVsZS5pbmplY3Rvci5nZXQoTmd4c0Jvb3RzdHJhcHBlcik7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaG1yTW9kdWxlKFxuICAgIGJvb3RzdHJhcEZuOiBCb290c3RyYXBNb2R1bGVGbjxUPixcbiAgICB0aWNrOiAoKSA9PiB2b2lkXG4gICk6IFByb21pc2U8TmdNb2R1bGVSZWY8VD4+IHtcbiAgICBJbml0aWFsU3RhdGUuc2V0KHRoaXMuc3RvcmFnZS5zbmFwc2hvdCk7XG4gICAgdGhpcy5uZ01vZHVsZSA9IGF3YWl0IGJvb3RzdHJhcEZuKCk7XG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IEhtclN0YXRlQ29udGV4dEZhY3RvcnkodGhpcy5uZ01vZHVsZSk7XG4gICAgdGhpcy5saWZlY3ljbGUgPSB0aGlzLmNyZWF0ZUxpZmVjeWNsZSgpO1xuXG4gICAgdGljaygpO1xuXG4gICAgSW5pdGlhbFN0YXRlLnBvcCgpO1xuICAgIHJldHVybiB0aGlzLm5nTW9kdWxlO1xuICB9XG5cbiAgcHVibGljIGJlZm9yZU1vZHVsZUJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpZmVjeWNsZS5obXJOZ3hzU3RvcmVPbkluaXQoKGN0eCwgc3RhdGUpID0+IHtcbiAgICAgIGN0eC5kaXNwYXRjaChuZXcgSG1ySW5pdEFjdGlvbihzdGF0ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGJlZm9yZU1vZHVsZU9uRGVzdHJveSgpOiBQYXJ0aWFsPFM+IHtcbiAgICB0aGlzLm9wdGlvbnNCdWlsZGVyLmNsZWFyTG9ncygpO1xuICAgIHJldHVybiB0aGlzLmxpZmVjeWNsZS5obXJOZ3hzU3RvcmVCZWZvcmVPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVOZXdNb2R1bGUoKTogdm9pZCB7XG4gICAgY29uc3QgcmVtb3ZlT2xkSG9zdHM6ICgpID0+IHZvaWQgPSB0aGlzLmNsb25lSG9zdHNCZWZvcmVEZXN0cm95KCk7XG4gICAgdGhpcy5yZW1vdmVOZ1N0eWxlcygpO1xuICAgIHRoaXMubmdNb2R1bGUuZGVzdHJveSgpO1xuICAgIHJlbW92ZU9sZEhvc3RzKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxpZmVjeWNsZSgpOiBIbXJMaWZlY3ljbGU8VCwgUz4ge1xuICAgIHJldHVybiBuZXcgSG1yTGlmZWN5Y2xlKFxuICAgICAgdGhpcy5uZ01vZHVsZS5pbnN0YW5jZSxcbiAgICAgIHRoaXMuYm9vdHN0cmFwLFxuICAgICAgdGhpcy5zdG9yYWdlLFxuICAgICAgdGhpcy5jb250ZXh0LFxuICAgICAgdGhpcy5vcHRpb25zQnVpbGRlclxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsb25lSG9zdHNCZWZvcmVEZXN0cm95KCk6ICgpID0+IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnRzOiBFbGVtZW50W10gPSB0aGlzLmFwcGxpY2F0aW9uUmVmLmNvbXBvbmVudHMubWFwKFxuICAgICAgKGNvbXBvbmVudDogQ29tcG9uZW50UmVmPEVsZW1lbnQ+KSA9PiBjb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudFxuICAgICk7XG5cbiAgICBjb25zdCByZW1vdmFibGVMaXN0OiBPbGRIb3N0UmVtb3ZlckZuW10gPSBlbGVtZW50cy5tYXAoKGNvbXBvbmVudE5vZGU6IEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudE5vZGUudGFnTmFtZSk7XG4gICAgICBjb25zdCBwYXJlbnROb2RlOiBOb2RlID0gY29tcG9uZW50Tm9kZS5wYXJlbnROb2RlIGFzIE5vZGU7XG4gICAgICBjb25zdCBjdXJyZW50RGlzcGxheTogc3RyaW5nIHwgbnVsbCA9IG5ld05vZGUuc3R5bGUuZGlzcGxheTtcblxuICAgICAgbmV3Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgY29tcG9uZW50Tm9kZSk7XG5cbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIG5ld05vZGUuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnREaXNwbGF5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29tcG9uZW50Tm9kZSk7XG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlT2xkSG9zdHMoKTogdm9pZCB7XG4gICAgICByZW1vdmFibGVMaXN0LmZvckVhY2goKHJlbW92ZU9sZEhvc3Q6IE9sZEhvc3RSZW1vdmVyRm4pID0+IHJlbW92ZU9sZEhvc3QoKSk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTmdTdHlsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgaGVhZDogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuaGVhZCE7XG4gICAgY29uc3Qgc3R5bGVzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBBcnJheS5mcm9tKGhlYWQhLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpO1xuXG4gICAgc3R5bGVzXG4gICAgICAuZmlsdGVyKChzdHlsZTogSFRNTFN0eWxlRWxlbWVudCkgPT4gc3R5bGUuaW5uZXJUZXh0LmluY2x1ZGVzKCdfbmcnKSlcbiAgICAgIC5tYXAoKHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50KSA9PiBoZWFkIS5yZW1vdmVDaGlsZChzdHlsZSkpO1xuICB9XG59XG4iXX0=
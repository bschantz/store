/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/hmr-lifecycle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HmrBeforeDestroyAction } from '../actions/hmr-before-destroy.action';
/**
 * @template T, S
 */
export class HmrLifecycle {
    /**
     * @param {?} ngAppModule
     * @param {?} bootstrap
     * @param {?} storage
     * @param {?} context
     * @param {?} options
     */
    constructor(ngAppModule, bootstrap, storage, context, options) {
        this.ngAppModule = ngAppModule;
        this.bootstrap = bootstrap;
        this.storage = storage;
        this.context = context;
        this.options = options;
    }
    /**
     * @param {?} hmrAfterOnInit
     * @return {?}
     */
    hmrNgxsStoreOnInit(hmrAfterOnInit) {
        /** @type {?} */
        let moduleHmrInit = this.getModuleHmrInitCallback();
        moduleHmrInit = moduleHmrInit.bind(this.ngAppModule);
        this.detectIvyWithJIT();
        this.stateEventLoop((/**
         * @param {?} ctx
         * @param {?} state
         * @return {?}
         */
        (ctx, state) => {
            moduleHmrInit(ctx, state);
            hmrAfterOnInit(ctx, state);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getModuleHmrInitCallback() {
        if (typeof this.ngAppModule.hmrNgxsStoreOnInit === 'function') {
            return this.ngAppModule.hmrNgxsStoreOnInit;
        }
        return (/**
         * @param {?} ctx
         * @param {?} state
         * @return {?}
         */
        function defaultModuleHmrInit(ctx, state) {
            ctx.patchState(state);
        });
    }
    /**
     * @return {?}
     */
    hmrNgxsStoreBeforeOnDestroy() {
        /** @type {?} */
        let state = {};
        /** @type {?} */
        const ctx = this.context.createStateContext();
        if (typeof this.ngAppModule.hmrNgxsStoreBeforeOnDestroy === 'function') {
            state = this.ngAppModule.hmrNgxsStoreBeforeOnDestroy(ctx);
        }
        else {
            state = ctx.getState();
        }
        ctx.dispatch(new HmrBeforeDestroyAction(state));
        return state;
    }
    /**
     * @private
     * @param {?} callback
     * @return {?}
     */
    stateEventLoop(callback) {
        if (!this.storage.hasData())
            return;
        /** @type {?} */
        const appBootstrapped$ = this.bootstrap.appBootstrapped$;
        /** @type {?} */
        const state$ = this.context.store.select((/**
         * @param {?} state
         * @return {?}
         */
        state => state));
        appBootstrapped$.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let eventId;
            /** @type {?} */
            const storeEventId = state$.subscribe((/**
             * @return {?}
             */
            () => {
                // setTimeout used for zone detection after set hmr state
                clearInterval(eventId);
                eventId = window.setTimeout((/**
                 * @return {?}
                 */
                () => {
                    // close check on the message queue
                    storeEventId.unsubscribe();
                    // if events are no longer running on the call stack,
                    // then we can update the state
                    callback(this.context.createStateContext(), (/** @type {?} */ (this.storage.snapshot)));
                }), this.options.deferTime);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    detectIvyWithJIT() {
        /** @type {?} */
        const jit = this.ngAppModule.constructor.hasOwnProperty('__annotations__');
        /** @type {?} */
        const ivy = this.ngAppModule.constructor.hasOwnProperty('ɵmod');
        if (jit && ivy) {
            throw new Error(`@ngxs/hmr-plugin doesn't work with JIT mode in Angular Ivy. Please use AOT mode.`);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HmrLifecycle.prototype.ngAppModule;
    /**
     * @type {?}
     * @private
     */
    HmrLifecycle.prototype.bootstrap;
    /**
     * @type {?}
     * @private
     */
    HmrLifecycle.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    HmrLifecycle.prototype.context;
    /**
     * @type {?}
     * @private
     */
    HmrLifecycle.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1yLWxpZmVjeWNsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2htci1wbHVnaW4vc3JjL2ludGVybmFsL2htci1saWZlY3ljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUc5RSxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFDdkIsWUFDVSxXQUFjLEVBQ2QsU0FBMkIsRUFDM0IsT0FBc0IsRUFDdEIsT0FBcUMsRUFDckMsT0FBeUI7UUFKekIsZ0JBQVcsR0FBWCxXQUFXLENBQUc7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBQ3JDLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQ2hDLENBQUM7Ozs7O0lBRUcsa0JBQWtCLENBQUMsY0FBOEI7O1lBQ2xELGFBQWEsR0FBbUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1FBQ25FLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYzs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFCLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHdCQUF3QjtRQUM5QixJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsS0FBSyxVQUFVLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO1NBQzVDO1FBQ0Q7Ozs7O1FBQU8sU0FBUyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsS0FBSztZQUM3QyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7SUFFTSwyQkFBMkI7O1lBQzVCLEtBQUssR0FBZSxFQUFFOztjQUNwQixHQUFHLEdBQW9CLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7UUFDOUQsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEtBQUssVUFBVSxFQUFFO1lBQ3RFLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsUUFBd0I7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTzs7Y0FFOUIsZ0JBQWdCLEdBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCOztjQUN2RSxNQUFNLEdBQW9CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBQztRQUV6RSxnQkFBZ0IsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7O2dCQUMxQixPQUFlOztrQkFDYixZQUFZLEdBQWlCLE1BQU0sQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3ZELHlEQUF5RDtnQkFDekQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QixPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVU7OztnQkFBQyxHQUFHLEVBQUU7b0JBQy9CLG1DQUFtQztvQkFDbkMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUMzQixxREFBcUQ7b0JBQ3JELCtCQUErQjtvQkFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBYyxDQUFDLENBQUM7Z0JBQ25GLENBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsRUFBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7O2NBQ2hCLEdBQUcsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7O2NBQzdFLEdBQUcsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQ3hFLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ2Isa0ZBQWtGLENBQ25GLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRjs7Ozs7O0lBdEVHLG1DQUFzQjs7Ozs7SUFDdEIsaUNBQW1DOzs7OztJQUNuQywrQkFBOEI7Ozs7O0lBQzlCLCtCQUE2Qzs7Ozs7SUFDN0MsK0JBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4c0Jvb3RzdHJhcHBlciB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcblxuaW1wb3J0IHsgSG1yT3B0aW9uQnVpbGRlciB9IGZyb20gJy4vaG1yLW9wdGlvbnMtYnVpbGRlcic7XG5pbXBvcnQgeyBIbXJDYWxsYmFjaywgTmd4c0htckxpZmVDeWNsZSB9IGZyb20gJy4uL3N5bWJvbHMnO1xuaW1wb3J0IHsgSG1yU3RhdGVDb250ZXh0RmFjdG9yeSB9IGZyb20gJy4vaG1yLXN0YXRlLWNvbnRleHQtZmFjdG9yeSc7XG5pbXBvcnQgeyBIbXJCZWZvcmVEZXN0cm95QWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9obXItYmVmb3JlLWRlc3Ryb3kuYWN0aW9uJztcbmltcG9ydCB7IEhtclN0b3JhZ2UgfSBmcm9tICcuL2htci1zdG9yYWdlJztcblxuZXhwb3J0IGNsYXNzIEhtckxpZmVjeWNsZTxUIGV4dGVuZHMgUGFydGlhbDxOZ3hzSG1yTGlmZUN5Y2xlPFM+PiwgUz4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nQXBwTW9kdWxlOiBULFxuICAgIHByaXZhdGUgYm9vdHN0cmFwOiBOZ3hzQm9vdHN0cmFwcGVyLFxuICAgIHByaXZhdGUgc3RvcmFnZTogSG1yU3RvcmFnZTxTPixcbiAgICBwcml2YXRlIGNvbnRleHQ6IEhtclN0YXRlQ29udGV4dEZhY3Rvcnk8VCwgUz4sXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBIbXJPcHRpb25CdWlsZGVyXG4gICkge31cblxuICBwdWJsaWMgaG1yTmd4c1N0b3JlT25Jbml0KGhtckFmdGVyT25Jbml0OiBIbXJDYWxsYmFjazxTPikge1xuICAgIGxldCBtb2R1bGVIbXJJbml0OiBIbXJDYWxsYmFjazxTPiA9IHRoaXMuZ2V0TW9kdWxlSG1ySW5pdENhbGxiYWNrKCk7XG4gICAgbW9kdWxlSG1ySW5pdCA9IG1vZHVsZUhtckluaXQuYmluZCh0aGlzLm5nQXBwTW9kdWxlKTtcbiAgICB0aGlzLmRldGVjdEl2eVdpdGhKSVQoKTtcbiAgICB0aGlzLnN0YXRlRXZlbnRMb29wKChjdHgsIHN0YXRlKSA9PiB7XG4gICAgICBtb2R1bGVIbXJJbml0KGN0eCwgc3RhdGUpO1xuICAgICAgaG1yQWZ0ZXJPbkluaXQoY3R4LCBzdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1vZHVsZUhtckluaXRDYWxsYmFjaygpOiBIbXJDYWxsYmFjazxTPiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm5nQXBwTW9kdWxlLmhtck5neHNTdG9yZU9uSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMubmdBcHBNb2R1bGUuaG1yTmd4c1N0b3JlT25Jbml0O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gZGVmYXVsdE1vZHVsZUhtckluaXQoY3R4LCBzdGF0ZSkge1xuICAgICAgY3R4LnBhdGNoU3RhdGUoc3RhdGUpO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgaG1yTmd4c1N0b3JlQmVmb3JlT25EZXN0cm95KCk6IFBhcnRpYWw8Uz4ge1xuICAgIGxldCBzdGF0ZTogUGFydGlhbDxTPiA9IHt9O1xuICAgIGNvbnN0IGN0eDogU3RhdGVDb250ZXh0PFM+ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVN0YXRlQ29udGV4dCgpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5uZ0FwcE1vZHVsZS5obXJOZ3hzU3RvcmVCZWZvcmVPbkRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN0YXRlID0gdGhpcy5uZ0FwcE1vZHVsZS5obXJOZ3hzU3RvcmVCZWZvcmVPbkRlc3Ryb3koY3R4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBjdHguZ2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBjdHguZGlzcGF0Y2gobmV3IEhtckJlZm9yZURlc3Ryb3lBY3Rpb24oc3RhdGUpKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBwcml2YXRlIHN0YXRlRXZlbnRMb29wKGNhbGxiYWNrOiBIbXJDYWxsYmFjazxTPik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdG9yYWdlLmhhc0RhdGEoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXBwQm9vdHN0cmFwcGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYm9vdHN0cmFwLmFwcEJvb3RzdHJhcHBlZCQ7XG4gICAgY29uc3Qgc3RhdGUkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmNvbnRleHQuc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlKTtcblxuICAgIGFwcEJvb3RzdHJhcHBlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGxldCBldmVudElkOiBudW1iZXI7XG4gICAgICBjb25zdCBzdG9yZUV2ZW50SWQ6IFN1YnNjcmlwdGlvbiA9IHN0YXRlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyBzZXRUaW1lb3V0IHVzZWQgZm9yIHpvbmUgZGV0ZWN0aW9uIGFmdGVyIHNldCBobXIgc3RhdGVcbiAgICAgICAgY2xlYXJJbnRlcnZhbChldmVudElkKTtcbiAgICAgICAgZXZlbnRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBjbG9zZSBjaGVjayBvbiB0aGUgbWVzc2FnZSBxdWV1ZVxuICAgICAgICAgIHN0b3JlRXZlbnRJZC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIC8vIGlmIGV2ZW50cyBhcmUgbm8gbG9uZ2VyIHJ1bm5pbmcgb24gdGhlIGNhbGwgc3RhY2ssXG4gICAgICAgICAgLy8gdGhlbiB3ZSBjYW4gdXBkYXRlIHRoZSBzdGF0ZVxuICAgICAgICAgIGNhbGxiYWNrKHRoaXMuY29udGV4dC5jcmVhdGVTdGF0ZUNvbnRleHQoKSwgdGhpcy5zdG9yYWdlLnNuYXBzaG90IGFzIFBhcnRpYWw8Uz4pO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuZGVmZXJUaW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXRlY3RJdnlXaXRoSklUKCk6IHZvaWQge1xuICAgIGNvbnN0IGppdDogYm9vbGVhbiA9IHRoaXMubmdBcHBNb2R1bGUuY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoJ19fYW5ub3RhdGlvbnNfXycpO1xuICAgIGNvbnN0IGl2eTogYm9vbGVhbiA9IHRoaXMubmdBcHBNb2R1bGUuY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoJ8m1bW9kJyk7XG4gICAgaWYgKGppdCAmJiBpdnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEBuZ3hzL2htci1wbHVnaW4gZG9lc24ndCB3b3JrIHdpdGggSklUIG1vZGUgaW4gQW5ndWxhciBJdnkuIFBsZWFzZSB1c2UgQU9UIG1vZGUuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
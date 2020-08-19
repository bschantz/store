/**
 * @fileoverview added by tsickle
 * Generated from: src/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_BOOTSTRAP_LISTENER, InjectionToken, isDevMode, NgModule } from '@angular/core';
import { INITIAL_STATE_TOKEN, InitialState, isAngularInTestMode, NGXS_STATE_CONTEXT_FACTORY, NGXS_STATE_FACTORY, NgxsBootstrapper } from '@ngxs/store/internals';
import { FEATURE_STATE_TOKEN, NG_DEV_MODE, NG_TEST_MODE, NgxsConfig, ROOT_STATE_TOKEN } from './symbols';
import { NGXS_EXECUTION_STRATEGY } from './execution/symbols';
import { StateFactory } from './internal/state-factory';
import { StateContextFactory } from './internal/state-context-factory';
import { Actions, InternalActions } from './actions-stream';
import { LifecycleStateManager } from './internal/lifecycle-state-manager';
import { InternalDispatchedActionResults, InternalDispatcher } from './internal/dispatcher';
import { InternalStateOperations } from './internal/state-operations';
import { Store } from './store';
import { SelectFactory } from './decorators/select/select-factory';
import { StateStream } from './internal/state-stream';
import { PluginManager } from './plugin-manager';
import { NgxsRootModule } from './modules/ngxs-root.module';
import { NgxsFeatureModule } from './modules/ngxs-feature.module';
import { DispatchOutsideZoneNgxsExecutionStrategy } from './execution/dispatch-outside-zone-ngxs-execution-strategy';
import { InternalNgxsExecutionStrategy } from './execution/internal-ngxs-execution-strategy';
import { HostEnvironment } from './host-environment/host-environment';
import { ConfigValidator } from './internal/config-validator';
/**
 * Ngxs Module
 */
export class NgxsModule {
    /**
     * Root module factory
     * @param {?=} states
     * @param {?=} options
     * @return {?}
     */
    static forRoot(states = [], options = {}) {
        return {
            ngModule: NgxsRootModule,
            providers: [
                StateFactory,
                StateContextFactory,
                Actions,
                InternalActions,
                NgxsBootstrapper,
                ConfigValidator,
                HostEnvironment,
                LifecycleStateManager,
                InternalDispatcher,
                InternalDispatchedActionResults,
                InternalStateOperations,
                InternalNgxsExecutionStrategy,
                Store,
                StateStream,
                SelectFactory,
                PluginManager,
                ...states,
                ...NgxsModule.ngxsTokenProviders(states, options)
            ]
        };
    }
    /**
     * Feature module factory
     * @param {?=} states
     * @return {?}
     */
    static forFeature(states = []) {
        return {
            ngModule: NgxsFeatureModule,
            providers: [
                StateFactory,
                PluginManager,
                ...states,
                {
                    provide: FEATURE_STATE_TOKEN,
                    multi: true,
                    useValue: states
                }
            ]
        };
    }
    /**
     * @private
     * @param {?} states
     * @param {?} options
     * @return {?}
     */
    static ngxsTokenProviders(states, options) {
        return [
            {
                provide: NG_TEST_MODE,
                useValue: isAngularInTestMode
            },
            {
                provide: NG_DEV_MODE,
                useValue: isDevMode
            },
            {
                provide: NGXS_EXECUTION_STRATEGY,
                useClass: options.executionStrategy || DispatchOutsideZoneNgxsExecutionStrategy
            },
            {
                provide: ROOT_STATE_TOKEN,
                useValue: states
            },
            {
                provide: NgxsModule.ROOT_OPTIONS,
                useValue: options
            },
            {
                provide: NgxsConfig,
                useFactory: NgxsModule.ngxsConfigFactory,
                deps: [NgxsModule.ROOT_OPTIONS]
            },
            {
                provide: APP_BOOTSTRAP_LISTENER,
                useFactory: NgxsModule.appBootstrapListenerFactory,
                multi: true,
                deps: [NgxsBootstrapper]
            },
            {
                provide: INITIAL_STATE_TOKEN,
                useFactory: NgxsModule.getInitialState
            },
            {
                provide: NGXS_STATE_CONTEXT_FACTORY,
                useExisting: StateContextFactory
            },
            {
                provide: NGXS_STATE_FACTORY,
                useExisting: StateFactory
            }
        ];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    static ngxsConfigFactory(options) {
        return Object.assign(new NgxsConfig(), options);
    }
    /**
     * @private
     * @param {?} bootstrapper
     * @return {?}
     */
    static appBootstrapListenerFactory(bootstrapper) {
        return (/**
         * @return {?}
         */
        () => bootstrapper.bootstrap());
    }
    /**
     * @private
     * @return {?}
     */
    static getInitialState() {
        return InitialState.pop();
    }
}
NgxsModule.ROOT_OPTIONS = new InjectionToken('ROOT_OPTIONS');
NgxsModule.decorators = [
    { type: NgModule }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsModule.ROOT_OPTIONS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsY0FBYyxFQUNkLFNBQVMsRUFFVCxRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBRWpCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsWUFBWSxFQUNaLFVBQVUsRUFFVixnQkFBZ0IsRUFDakIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0Is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SSxVQUFVLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsMkJBQTJCLENBQUMsWUFBOEI7UUFDdkU7OztRQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBQztJQUN4QyxDQUFDOzs7OztJQUVPLE1BQU0sQ0FBQyxlQUFlO1FBQzVCLE9BQU8sWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7O0FBbEh1Qix1QkFBWSxHQUFHLElBQUksY0FBYyxDQUFvQixjQUFjLENBQUMsQ0FBQzs7WUFGOUYsUUFBUTs7Ozs7OztJQUVQLHdCQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9CT09UU1RSQVBfTElTVEVORVIsXG4gIEluamVjdGlvblRva2VuLFxuICBpc0Rldk1vZGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIElOSVRJQUxfU1RBVEVfVE9LRU4sXG4gIEluaXRpYWxTdGF0ZSxcbiAgaXNBbmd1bGFySW5UZXN0TW9kZSxcbiAgTkdYU19TVEFURV9DT05URVhUX0ZBQ1RPUlksXG4gIE5HWFNfU1RBVEVfRkFDVE9SWSxcbiAgTmd4c0Jvb3RzdHJhcHBlcixcbiAgU3RhdGVDbGFzc1xufSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xuXG5pbXBvcnQge1xuICBGRUFUVVJFX1NUQVRFX1RPS0VOLFxuICBOR19ERVZfTU9ERSxcbiAgTkdfVEVTVF9NT0RFLFxuICBOZ3hzQ29uZmlnLFxuICBOZ3hzTW9kdWxlT3B0aW9ucyxcbiAgUk9PVF9TVEFURV9UT0tFTlxufSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgTkdYU19FWEVDVVRJT05fU1RSQVRFR1kgfSBmcm9tICcuL2V4ZWN1dGlvbi9zeW1ib2xzJztcbmltcG9ydCB7IFN0YXRlRmFjdG9yeSB9IGZyb20gJy4vaW50ZXJuYWwvc3RhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdGF0ZUNvbnRleHRGYWN0b3J5IH0gZnJvbSAnLi9pbnRlcm5hbC9zdGF0ZS1jb250ZXh0LWZhY3RvcnknO1xuaW1wb3J0IHsgQWN0aW9ucywgSW50ZXJuYWxBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zLXN0cmVhbSc7XG5pbXBvcnQgeyBMaWZlY3ljbGVTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL2ludGVybmFsL2xpZmVjeWNsZS1zdGF0ZS1tYW5hZ2VyJztcbmltcG9ydCB7IEludGVybmFsRGlzcGF0Y2hlZEFjdGlvblJlc3VsdHMsIEludGVybmFsRGlzcGF0Y2hlciB9IGZyb20gJy4vaW50ZXJuYWwvZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwvc3RhdGUtb3BlcmF0aW9ucyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgU2VsZWN0RmFjdG9yeSB9IGZyb20gJy4vZGVjb3JhdG9ycy9zZWxlY3Qvc2VsZWN0LWZhY3RvcnknO1xuaW1wb3J0IHsgU3RhdGVTdHJlYW0gfSBmcm9tICcuL2ludGVybmFsL3N0YXRlLXN0cmVhbSc7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyIH0gZnJvbSAnLi9wbHVnaW4tbWFuYWdlcic7XG5pbXBvcnQgeyBOZ3hzUm9vdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9uZ3hzLXJvb3QubW9kdWxlJztcbmltcG9ydCB7IE5neHNGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL25neHMtZmVhdHVyZS5tb2R1bGUnO1xuaW1wb3J0IHsgRGlzcGF0Y2hPdXRzaWRlWm9uZU5neHNFeGVjdXRpb25TdHJhdGVneSB9IGZyb20gJy4vZXhlY3V0aW9uL2Rpc3BhdGNoLW91dHNpZGUtem9uZS1uZ3hzLWV4ZWN1dGlvbi1zdHJhdGVneSc7XG5pbXBvcnQgeyBJbnRlcm5hbE5neHNFeGVjdXRpb25TdHJhdGVneSB9IGZyb20gJy4vZXhlY3V0aW9uL2ludGVybmFsLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IEhvc3RFbnZpcm9ubWVudCB9IGZyb20gJy4vaG9zdC1lbnZpcm9ubWVudC9ob3N0LWVudmlyb25tZW50JztcbmltcG9ydCB7IENvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vaW50ZXJuYWwvY29uZmlnLXZhbGlkYXRvcic7XG5cbi8qKlxuICogTmd4cyBNb2R1bGVcbiAqL1xuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzTW9kdWxlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUk9PVF9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPE5neHNNb2R1bGVPcHRpb25zPignUk9PVF9PUFRJT05TJyk7XG5cbiAgLyoqXG4gICAqIFJvb3QgbW9kdWxlIGZhY3RvcnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcbiAgICBzdGF0ZXM6IFN0YXRlQ2xhc3NbXSA9IFtdLFxuICAgIG9wdGlvbnM6IE5neHNNb2R1bGVPcHRpb25zID0ge31cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzUm9vdE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4c1Jvb3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3RhdGVGYWN0b3J5LFxuICAgICAgICBTdGF0ZUNvbnRleHRGYWN0b3J5LFxuICAgICAgICBBY3Rpb25zLFxuICAgICAgICBJbnRlcm5hbEFjdGlvbnMsXG4gICAgICAgIE5neHNCb290c3RyYXBwZXIsXG4gICAgICAgIENvbmZpZ1ZhbGlkYXRvcixcbiAgICAgICAgSG9zdEVudmlyb25tZW50LFxuICAgICAgICBMaWZlY3ljbGVTdGF0ZU1hbmFnZXIsXG4gICAgICAgIEludGVybmFsRGlzcGF0Y2hlcixcbiAgICAgICAgSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cyxcbiAgICAgICAgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMsXG4gICAgICAgIEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5LFxuICAgICAgICBTdG9yZSxcbiAgICAgICAgU3RhdGVTdHJlYW0sXG4gICAgICAgIFNlbGVjdEZhY3RvcnksXG4gICAgICAgIFBsdWdpbk1hbmFnZXIsXG4gICAgICAgIC4uLnN0YXRlcyxcbiAgICAgICAgLi4uTmd4c01vZHVsZS5uZ3hzVG9rZW5Qcm92aWRlcnMoc3RhdGVzLCBvcHRpb25zKVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZSBtb2R1bGUgZmFjdG9yeVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmb3JGZWF0dXJlKHN0YXRlczogU3RhdGVDbGFzc1tdID0gW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neHNGZWF0dXJlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hzRmVhdHVyZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTdGF0ZUZhY3RvcnksXG4gICAgICAgIFBsdWdpbk1hbmFnZXIsXG4gICAgICAgIC4uLnN0YXRlcyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEZFQVRVUkVfU1RBVEVfVE9LRU4sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlVmFsdWU6IHN0YXRlc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIG5neHNUb2tlblByb3ZpZGVycyhcbiAgICBzdGF0ZXM6IFN0YXRlQ2xhc3NbXSxcbiAgICBvcHRpb25zOiBOZ3hzTW9kdWxlT3B0aW9uc1xuICApOiBQcm92aWRlcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiBOR19URVNUX01PREUsXG4gICAgICAgIHVzZVZhbHVlOiBpc0FuZ3VsYXJJblRlc3RNb2RlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiBOR19ERVZfTU9ERSxcbiAgICAgICAgdXNlVmFsdWU6IGlzRGV2TW9kZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTkdYU19FWEVDVVRJT05fU1RSQVRFR1ksXG4gICAgICAgIHVzZUNsYXNzOiBvcHRpb25zLmV4ZWN1dGlvblN0cmF0ZWd5IHx8IERpc3BhdGNoT3V0c2lkZVpvbmVOZ3hzRXhlY3V0aW9uU3RyYXRlZ3lcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IFJPT1RfU1RBVEVfVE9LRU4sXG4gICAgICAgIHVzZVZhbHVlOiBzdGF0ZXNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IE5neHNNb2R1bGUuUk9PVF9PUFRJT05TLFxuICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTmd4c0NvbmZpZyxcbiAgICAgICAgdXNlRmFjdG9yeTogTmd4c01vZHVsZS5uZ3hzQ29uZmlnRmFjdG9yeSxcbiAgICAgICAgZGVwczogW05neHNNb2R1bGUuUk9PVF9PUFRJT05TXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogQVBQX0JPT1RTVFJBUF9MSVNURU5FUixcbiAgICAgICAgdXNlRmFjdG9yeTogTmd4c01vZHVsZS5hcHBCb290c3RyYXBMaXN0ZW5lckZhY3RvcnksXG4gICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICBkZXBzOiBbTmd4c0Jvb3RzdHJhcHBlcl1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IElOSVRJQUxfU1RBVEVfVE9LRU4sXG4gICAgICAgIHVzZUZhY3Rvcnk6IE5neHNNb2R1bGUuZ2V0SW5pdGlhbFN0YXRlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiBOR1hTX1NUQVRFX0NPTlRFWFRfRkFDVE9SWSxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IFN0YXRlQ29udGV4dEZhY3RvcnlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IE5HWFNfU1RBVEVfRkFDVE9SWSxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IFN0YXRlRmFjdG9yeVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBuZ3hzQ29uZmlnRmFjdG9yeShvcHRpb25zOiBOZ3hzTW9kdWxlT3B0aW9ucyk6IE5neHNDb25maWcge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBOZ3hzQ29uZmlnKCksIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwQm9vdHN0cmFwTGlzdGVuZXJGYWN0b3J5KGJvb3RzdHJhcHBlcjogTmd4c0Jvb3RzdHJhcHBlcik6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKCkgPT4gYm9vdHN0cmFwcGVyLmJvb3RzdHJhcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiBJbml0aWFsU3RhdGUucG9wKCk7XG4gIH1cbn1cbiJdfQ==
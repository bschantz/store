/**
 * @fileoverview added by tsickle
 * Generated from: src/devtools.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, InjectionToken } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { NGXS_DEVTOOLS_OPTIONS } from './symbols';
import { NgxsReduxDevtoolsPlugin } from './devtools.plugin';
/**
 * @param {?} options
 * @return {?}
 */
export function devtoolsOptionsFactory(options) {
    return Object.assign({ name: 'NGXS' }, options);
}
/** @type {?} */
export const USER_OPTIONS = new InjectionToken('USER_OPTIONS');
export class NgxsReduxDevtoolsPluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: NgxsReduxDevtoolsPluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsReduxDevtoolsPlugin,
                    multi: true
                },
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_DEVTOOLS_OPTIONS,
                    useFactory: devtoolsOptionsFactory,
                    deps: [USER_OPTIONS]
                }
            ]
        };
    }
}
NgxsReduxDevtoolsPluginModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZGV2dG9vbHMtcGx1Z2luL3NyYy9kZXZ0b29scy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzQyxPQUFPLEVBQXVCLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQUU1RCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsT0FBNEI7SUFDakUsdUJBQ0UsSUFBSSxFQUFFLE1BQU0sSUFDVCxPQUFPLEVBQ1Y7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDO0FBRzlELE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBNkI7UUFFN0IsT0FBTztZQUNMLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFVBQVUsRUFBRSxzQkFBc0I7b0JBQ2xDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDckI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4QkYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdYU19QTFVHSU5TIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuXG5pbXBvcnQgeyBOZ3hzRGV2dG9vbHNPcHRpb25zLCBOR1hTX0RFVlRPT0xTX09QVElPTlMgfSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgTmd4c1JlZHV4RGV2dG9vbHNQbHVnaW4gfSBmcm9tICcuL2RldnRvb2xzLnBsdWdpbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXZ0b29sc09wdGlvbnNGYWN0b3J5KG9wdGlvbnM6IE5neHNEZXZ0b29sc09wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTkdYUycsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgVVNFUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdVU0VSX09QVElPTlMnKTtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzUmVkdXhEZXZ0b29sc1BsdWdpbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIG9wdGlvbnM/OiBOZ3hzRGV2dG9vbHNPcHRpb25zXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4c1JlZHV4RGV2dG9vbHNQbHVnaW5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neHNSZWR1eERldnRvb2xzUGx1Z2luTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOR1hTX1BMVUdJTlMsXG4gICAgICAgICAgdXNlQ2xhc3M6IE5neHNSZWR1eERldnRvb2xzUGx1Z2luLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBVU0VSX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfREVWVE9PTFNfT1BUSU9OUyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBkZXZ0b29sc09wdGlvbnNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtVU0VSX09QVElPTlNdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
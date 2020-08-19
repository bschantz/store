/**
 * @fileoverview added by tsickle
 * Generated from: src/logger.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { NgxsLoggerPlugin } from './logger.plugin';
import { NGXS_LOGGER_PLUGIN_OPTIONS } from './symbols';
/** @type {?} */
export const USER_OPTIONS = new InjectionToken('LOGGER_USER_OPTIONS');
/**
 * @param {?} options
 * @return {?}
 */
export function loggerOptionsFactory(options) {
    /** @type {?} */
    const defaultLoggerOptions = {
        logger: console,
        collapsed: false,
        disabled: false,
        filter: (/**
         * @return {?}
         */
        () => true)
    };
    return Object.assign(Object.assign({}, defaultLoggerOptions), options);
}
export class NgxsLoggerPluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: NgxsLoggerPluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsLoggerPlugin,
                    multi: true
                },
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_LOGGER_PLUGIN_OPTIONS,
                    useFactory: loggerOptionsFactory,
                    deps: [USER_OPTIONS]
                }
            ]
        };
    }
}
NgxsLoggerPluginModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvZ2dlci1wbHVnaW4vc3JjL2xvZ2dlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQTJCLDBCQUEwQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUVoRixNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLHFCQUFxQixDQUFDOzs7OztBQUVyRSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsT0FBZ0M7O1VBQzdELG9CQUFvQixHQUE0QjtRQUNwRCxNQUFNLEVBQUUsT0FBTztRQUNmLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTTs7O1FBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFBO0tBQ25CO0lBRUQsdUNBQ0ssb0JBQW9CLEdBQ3BCLE9BQU8sRUFDVjtBQUNKLENBQUM7QUFHRCxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUNqQyxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWlDO1FBRWpDLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsMEJBQTBCO29CQUNuQyxVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3JCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBeEJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HWFNfUExVR0lOUyB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IE5neHNMb2dnZXJQbHVnaW4gfSBmcm9tICcuL2xvZ2dlci5wbHVnaW4nO1xuaW1wb3J0IHsgTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMsIE5HWFNfTE9HR0VSX1BMVUdJTl9PUFRJT05TIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignTE9HR0VSX1VTRVJfT1BUSU9OUycpO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9nZ2VyT3B0aW9uc0ZhY3Rvcnkob3B0aW9uczogTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdExvZ2dlck9wdGlvbnM6IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zID0ge1xuICAgIGxvZ2dlcjogY29uc29sZSxcbiAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWVcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRMb2dnZXJPcHRpb25zLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbn1cblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzTG9nZ2VyUGx1Z2luTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgb3B0aW9ucz86IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4c0xvZ2dlclBsdWdpbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4c0xvZ2dlclBsdWdpbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxuICAgICAgICAgIHVzZUNsYXNzOiBOZ3hzTG9nZ2VyUGx1Z2luLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBVU0VSX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfTE9HR0VSX1BMVUdJTl9PUFRJT05TLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGxvZ2dlck9wdGlvbnNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtVU0VSX09QVElPTlNdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
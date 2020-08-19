/**
 * @fileoverview added by tsickle
 * Generated from: src/storage.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, PLATFORM_ID, InjectionToken } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { STORAGE_ENGINE, NGXS_STORAGE_PLUGIN_OPTIONS } from './symbols';
import { NgxsStoragePlugin } from './storage.plugin';
import { storageOptionsFactory, engineFactory } from './internals';
/** @type {?} */
export const USER_OPTIONS = new InjectionToken('USER_OPTIONS');
export class NgxsStoragePluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: NgxsStoragePluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsStoragePlugin,
                    multi: true
                },
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_STORAGE_PLUGIN_OPTIONS,
                    useFactory: storageOptionsFactory,
                    deps: [USER_OPTIONS]
                },
                {
                    provide: STORAGE_ENGINE,
                    useFactory: engineFactory,
                    deps: [NGXS_STORAGE_PLUGIN_OPTIONS, PLATFORM_ID]
                }
            ]
        };
    }
}
NgxsStoragePluginModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yYWdlLXBsdWdpbi9zcmMvc3RvcmFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFM0MsT0FBTyxFQUVMLGNBQWMsRUFDZCwyQkFBMkIsRUFDNUIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFbkUsTUFBTSxPQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFHOUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFrQztRQUVsQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDJCQUEyQjtvQkFDcEMsVUFBVSxFQUFFLHFCQUFxQjtvQkFDakMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUNyQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLElBQUksRUFBRSxDQUFDLDJCQUEyQixFQUFFLFdBQVcsQ0FBQztpQkFDakQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUE3QkYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBQTEFURk9STV9JRCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HWFNfUExVR0lOUyB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcblxuaW1wb3J0IHtcbiAgTmd4c1N0b3JhZ2VQbHVnaW5PcHRpb25zLFxuICBTVE9SQUdFX0VOR0lORSxcbiAgTkdYU19TVE9SQUdFX1BMVUdJTl9PUFRJT05TXG59IGZyb20gJy4vc3ltYm9scyc7XG5pbXBvcnQgeyBOZ3hzU3RvcmFnZVBsdWdpbiB9IGZyb20gJy4vc3RvcmFnZS5wbHVnaW4nO1xuaW1wb3J0IHsgc3RvcmFnZU9wdGlvbnNGYWN0b3J5LCBlbmdpbmVGYWN0b3J5IH0gZnJvbSAnLi9pbnRlcm5hbHMnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdVU0VSX09QVElPTlMnKTtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzU3RvcmFnZVBsdWdpbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIG9wdGlvbnM/OiBOZ3hzU3RvcmFnZVBsdWdpbk9wdGlvbnNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzU3RvcmFnZVBsdWdpbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4c1N0b3JhZ2VQbHVnaW5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfUExVR0lOUyxcbiAgICAgICAgICB1c2VDbGFzczogTmd4c1N0b3JhZ2VQbHVnaW4sXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfT1BUSU9OUyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTkdYU19TVE9SQUdFX1BMVUdJTl9PUFRJT05TLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHN0b3JhZ2VPcHRpb25zRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbVVNFUl9PUFRJT05TXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU1RPUkFHRV9FTkdJTkUsXG4gICAgICAgICAgdXNlRmFjdG9yeTogZW5naW5lRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbTkdYU19TVE9SQUdFX1BMVUdJTl9PUFRJT05TLCBQTEFURk9STV9JRF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
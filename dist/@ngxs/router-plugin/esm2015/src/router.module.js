/**
 * @fileoverview added by tsickle
 * Generated from: src/router.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RouterState } from './router.state';
import { DefaultRouterStateSerializer, RouterStateSerializer } from './serializer';
export class NgxsRouterPluginModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxsRouterPluginModule,
            providers: [{ provide: RouterStateSerializer, useClass: DefaultRouterStateSerializer }]
        };
    }
}
NgxsRouterPluginModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgxsModule.forFeature([RouterState])]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci1wbHVnaW4vc3JjL3JvdXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLbkYsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxDQUFDO1NBQ3hGLENBQUM7SUFDSixDQUFDOzs7WUFURixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4c01vZHVsZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcblxuaW1wb3J0IHsgUm91dGVyU3RhdGUgfSBmcm9tICcuL3JvdXRlci5zdGF0ZSc7XG5pbXBvcnQgeyBEZWZhdWx0Um91dGVyU3RhdGVTZXJpYWxpemVyLCBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIgfSBmcm9tICcuL3NlcmlhbGl6ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtSb3V0ZXJTdGF0ZV0pXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzUm91dGVyUGx1Z2luTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIsIHVzZUNsYXNzOiBEZWZhdWx0Um91dGVyU3RhdGVTZXJpYWxpemVyIH1dXG4gICAgfTtcbiAgfVxufVxuIl19
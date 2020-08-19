/**
 * @fileoverview added by tsickle
 * Generated from: src/websocket.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';
import { WebSocketHandler } from './websocket-handler';
import { NGXS_WEBSOCKET_OPTIONS, noop } from './symbols';
/**
 * @param {?} options
 * @return {?}
 */
export function websocketOptionsFactory(options) {
    return Object.assign({ reconnectInterval: 5000, reconnectAttempts: 10, typeKey: 'type', /**
         * @param {?} e
         * @return {?}
         */
        deserializer(e) {
            return JSON.parse(e.data);
        },
        /**
         * @param {?} value
         * @return {?}
         */
        serializer(value) {
            return JSON.stringify(value);
        } }, options);
}
/** @type {?} */
export const USER_OPTIONS = new InjectionToken('USER_OPTIONS');
export class NgxsWebsocketPluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: NgxsWebsocketPluginModule,
            providers: [
                WebSocketHandler,
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_WEBSOCKET_OPTIONS,
                    useFactory: websocketOptionsFactory,
                    deps: [USER_OPTIONS]
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: noop,
                    deps: [WebSocketHandler],
                    multi: true
                }
            ]
        };
    }
}
NgxsWebsocketPluginModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3dlYnNvY2tldC1wbHVnaW4vc3JjL3dlYnNvY2tldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBOEIsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQUVyRixNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBbUM7SUFDekUsdUJBQ0UsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixpQkFBaUIsRUFBRSxFQUFFLEVBQ3JCLE9BQU8sRUFBRSxNQUFNOzs7O1FBQ2YsWUFBWSxDQUFDLENBQWU7WUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7OztRQUNELFVBQVUsQ0FBQyxLQUFVO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLElBQ0UsT0FBTyxFQUNWO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUc5RCxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUNwQyxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQW9DO1FBRXBDLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsVUFBVSxFQUFFLHVCQUF1QjtvQkFDbkMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUNyQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUN4QixLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTFCRixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV2ViU29ja2V0SGFuZGxlciB9IGZyb20gJy4vd2Vic29ja2V0LWhhbmRsZXInO1xuaW1wb3J0IHsgTmd4c1dlYnNvY2tldFBsdWdpbk9wdGlvbnMsIE5HWFNfV0VCU09DS0VUX09QVElPTlMsIG5vb3AgfSBmcm9tICcuL3N5bWJvbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Vic29ja2V0T3B0aW9uc0ZhY3Rvcnkob3B0aW9uczogTmd4c1dlYnNvY2tldFBsdWdpbk9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICByZWNvbm5lY3RJbnRlcnZhbDogNTAwMCxcbiAgICByZWNvbm5lY3RBdHRlbXB0czogMTAsXG4gICAgdHlwZUtleTogJ3R5cGUnLFxuICAgIGRlc2VyaWFsaXplcihlOiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgfSxcbiAgICBzZXJpYWxpemVyKHZhbHVlOiBhbnkpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfSxcbiAgICAuLi5vcHRpb25zXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBVU0VSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1VTRVJfT1BUSU9OUycpO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIE5neHNXZWJzb2NrZXRQbHVnaW5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zPzogTmd4c1dlYnNvY2tldFBsdWdpbk9wdGlvbnNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzV2Vic29ja2V0UGx1Z2luTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hzV2Vic29ja2V0UGx1Z2luTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFdlYlNvY2tldEhhbmRsZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBVU0VSX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfV0VCU09DS0VUX09QVElPTlMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogd2Vic29ja2V0T3B0aW9uc0ZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1VTRVJfT1BUSU9OU11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBub29wLFxuICAgICAgICAgIGRlcHM6IFtXZWJTb2NrZXRIYW5kbGVyXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: src/serializer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class RouterStateSerializer {
}
if (false) {
    /**
     * @abstract
     * @param {?} routerState
     * @return {?}
     */
    RouterStateSerializer.prototype.serialize = function (routerState) { };
}
/**
 * @record
 */
export function SerializedRouterStateSnapshot() { }
if (false) {
    /** @type {?} */
    SerializedRouterStateSnapshot.prototype.root;
    /** @type {?} */
    SerializedRouterStateSnapshot.prototype.url;
}
export class DefaultRouterStateSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        return {
            root: this.serializeRoute(routerState.root),
            url: routerState.url
        };
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    serializeRoute(route) {
        /** @type {?} */
        const children = route.children.map((/**
         * @param {?} c
         * @return {?}
         */
        c => this.serializeRoute(c)));
        return {
            url: route.url,
            params: route.params,
            queryParams: route.queryParams,
            fragment: route.fragment,
            data: route.data,
            outlet: route.outlet,
            component: null,
            routeConfig: null,
            root: (/** @type {?} */ (null)),
            parent: null,
            firstChild: children[0],
            children: children,
            pathFromRoot: (/** @type {?} */ (null)),
            paramMap: route.paramMap,
            queryParamMap: route.queryParamMap,
            toString: route.toString
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci1wbHVnaW4vc3JjL3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTSxPQUFnQixxQkFBcUI7Q0FFMUM7Ozs7Ozs7SUFEQyx1RUFBd0Q7Ozs7O0FBRzFELG1EQUdDOzs7SUFGQyw2Q0FBNkI7O0lBQzdCLDRDQUFZOztBQUdkLE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBRXZDLFNBQVMsQ0FBQyxXQUFnQztRQUN4QyxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMzQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUc7U0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUE2Qjs7Y0FDNUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUNoRSxPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixTQUFTLEVBQUUsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLElBQUksRUFBRSxtQkFBQSxJQUFJLEVBQU87WUFDakIsTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QixRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLEVBQUUsbUJBQUEsSUFBSSxFQUFPO1lBQ3pCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQ3pCLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJvdXRlclN0YXRlU2VyaWFsaXplcjxUPiB7XG4gIGFic3RyYWN0IHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICByb290OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50cyBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXI8U2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgc2VyaWFsaXplKHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICAgIHJldHVybiB7XG4gICAgICByb290OiB0aGlzLnNlcmlhbGl6ZVJvdXRlKHJvdXRlclN0YXRlLnJvb3QpLFxuICAgICAgdXJsOiByb3V0ZXJTdGF0ZS51cmxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Qge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcm91dGUuY2hpbGRyZW4ubWFwKGMgPT4gdGhpcy5zZXJpYWxpemVSb3V0ZShjKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogcm91dGUudXJsLFxuICAgICAgcGFyYW1zOiByb3V0ZS5wYXJhbXMsXG4gICAgICBxdWVyeVBhcmFtczogcm91dGUucXVlcnlQYXJhbXMsXG4gICAgICBmcmFnbWVudDogcm91dGUuZnJhZ21lbnQsXG4gICAgICBkYXRhOiByb3V0ZS5kYXRhLFxuICAgICAgb3V0bGV0OiByb3V0ZS5vdXRsZXQsXG4gICAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgICByb3V0ZUNvbmZpZzogbnVsbCxcbiAgICAgIHJvb3Q6IG51bGwgYXMgYW55LFxuICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgZmlyc3RDaGlsZDogY2hpbGRyZW5bMF0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBwYXRoRnJvbVJvb3Q6IG51bGwgYXMgYW55LFxuICAgICAgcGFyYW1NYXA6IHJvdXRlLnBhcmFtTWFwLFxuICAgICAgcXVlcnlQYXJhbU1hcDogcm91dGUucXVlcnlQYXJhbU1hcCxcbiAgICAgIHRvU3RyaW5nOiByb3V0ZS50b1N0cmluZ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==
var RouterState_1;
/**
 * @fileoverview added by tsickle
 * Generated from: src/router.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { NgZone, Injectable } from '@angular/core';
import { NavigationCancel, NavigationError, Router, RoutesRecognized, ResolveEnd, UrlSerializer, NavigationStart, NavigationEnd } from '@angular/router';
import { LocationStrategy, Location } from '@angular/common';
import { Action, Selector, State, Store } from '@ngxs/store';
import { isAngularInTestMode } from '@ngxs/store/internals';
import { first } from 'rxjs/operators';
import { Navigate, RouterCancel, RouterError, RouterNavigation, RouterDataResolved } from './router.actions';
import { RouterStateSerializer } from './serializer';
/**
 * @record
 * @template T
 */
export function RouterStateModel() { }
if (false) {
    /** @type {?|undefined} */
    RouterStateModel.prototype.state;
    /** @type {?|undefined} */
    RouterStateModel.prototype.navigationId;
    /** @type {?} */
    RouterStateModel.prototype.trigger;
}
let RouterState = RouterState_1 = class RouterState {
    /**
     * @param {?} _store
     * @param {?} _router
     * @param {?} _serializer
     * @param {?} _ngZone
     * @param {?} _urlSerializer
     * @param {?} _locationStrategy
     * @param {?} _location
     */
    constructor(_store, _router, _serializer, _ngZone, _urlSerializer, _locationStrategy, _location) {
        this._store = _store;
        this._router = _router;
        this._serializer = _serializer;
        this._ngZone = _ngZone;
        this._urlSerializer = _urlSerializer;
        this._locationStrategy = _locationStrategy;
        this._location = _location;
        /**
         * Determines how navigation was performed by the `RouterState` itself
         * or outside via `new Navigate(...)`
         */
        this._trigger = 'none';
        /**
         * That's the serialized state from the `Router` class
         */
        this._routerState = null;
        /**
         * That's the value of the `RouterState` state
         */
        this._storeState = null;
        this._lastRoutesRecognized = (/** @type {?} */ (null));
        this.setUpStoreListener();
        this.setUpRouterEventsListener();
        this.checkInitialNavigationOnce();
    }
    /**
     * @template T
     * @param {?} state
     * @return {?}
     */
    static state(state) {
        return state && state.state;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static url(state) {
        return state && state.state && state.state.url;
    }
    /**
     * @param {?} _
     * @param {?} action
     * @return {?}
     */
    navigate(_, action) {
        return this._ngZone.run((/**
         * @return {?}
         */
        () => this._router.navigate(action.path, Object.assign({ queryParams: action.queryParams }, action.extras))));
    }
    /**
     * @param {?} ctx
     * @param {?} action
     * @return {?}
     */
    angularRouterAction(ctx, action) {
        ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { trigger: action.trigger, state: action.routerState, navigationId: action.event.id }));
    }
    /**
     * @private
     * @return {?}
     */
    setUpStoreListener() {
        this._store.select(RouterState_1).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            this.navigateIfNeeded(state);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setUpRouterEventsListener() {
        this._router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationStart) {
                this.navigationStart();
            }
            else if (event instanceof RoutesRecognized) {
                this._lastRoutesRecognized = event;
            }
            else if (event instanceof ResolveEnd) {
                this.dispatchRouterDataResolved(event);
            }
            else if (event instanceof NavigationCancel) {
                this.dispatchRouterCancel(event);
                this.reset();
            }
            else if (event instanceof NavigationError) {
                this.dispatchRouterError(event);
                this.reset();
            }
            else if (event instanceof NavigationEnd) {
                this.navigationEnd();
                this.reset();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    navigationStart() {
        this._routerState = this._serializer.serialize(this._router.routerState.snapshot);
        if (this._trigger !== 'none') {
            this._storeState = this._store.selectSnapshot(RouterState_1);
        }
    }
    /**
     * @private
     * @return {?}
     */
    navigationEnd() {
        if (this.shouldDispatchRouterNavigation()) {
            this.dispatchRouterNavigation();
        }
    }
    /**
     * @private
     * @return {?}
     */
    shouldDispatchRouterNavigation() {
        if (!this._storeState)
            return true;
        return this._trigger !== 'store';
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    navigateIfNeeded(state) {
        /** @type {?} */
        const canSkipNavigation = !this._storeState ||
            !this._storeState.state ||
            !state ||
            state.trigger === 'router' ||
            this._router.url === this._storeState.state.url;
        if (canSkipNavigation) {
            return;
        }
        this._trigger = 'store';
        this._ngZone.run((/**
         * @return {?}
         */
        () => {
            this._router.navigateByUrl((/** @type {?} */ ((/** @type {?} */ (this._storeState)).state)).url);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    dispatchRouterNavigation() {
        /** @type {?} */
        const nextRouterState = this._serializer.serialize(this._lastRoutesRecognized.state);
        this.dispatchRouterAction(new RouterNavigation(nextRouterState, new RoutesRecognized(this._lastRoutesRecognized.id, this._lastRoutesRecognized.url, this._lastRoutesRecognized.urlAfterRedirects, nextRouterState), this._trigger));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dispatchRouterCancel(event) {
        this.dispatchRouterAction(new RouterCancel((/** @type {?} */ (this._routerState)), this._storeState, event, this._trigger));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dispatchRouterError(event) {
        this.dispatchRouterAction(new RouterError((/** @type {?} */ (this._routerState)), this._storeState, new NavigationError(event.id, event.url, `${event}`), this._trigger));
    }
    /**
     * @private
     * @template T
     * @param {?} action
     * @return {?}
     */
    dispatchRouterAction(action) {
        this._trigger = 'router';
        try {
            this._store.dispatch(action);
        }
        finally {
            this._trigger = 'none';
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dispatchRouterDataResolved(event) {
        /** @type {?} */
        const routerState = this._serializer.serialize(event.state);
        this.dispatchRouterAction(new RouterDataResolved(routerState, event, this._trigger));
    }
    /**
     * @private
     * @return {?}
     */
    reset() {
        this._trigger = 'none';
        this._storeState = null;
        this._routerState = null;
    }
    /**
     * No sense to mess up the `setUpRouterEventsListener` method as we have
     * to perform this check only once and unsubscribe after the first event
     * is triggered
     * @private
     * @return {?}
     */
    checkInitialNavigationOnce() {
        if (isAngularInTestMode()) {
            return;
        }
        this._router.events
            .pipe(first((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof RoutesRecognized)))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ url }) => {
            // `location.pathname` always equals manually entered URL in the address bar
            // e.g. `location.pathname === '/foo'`, but the `router` state has been initialized
            // with another URL (e.g. used in combination with `NgxsStoragePlugin`), thus the
            // `RouterNavigation` action will be dispatched and the user will be redirected to the
            // previously saved URL. We want to prevent such behavior, so we perform this check
            // `location.pathname` always equals manually entered URL in the address bar
            // e.g. `location.pathname === '/foo'`, but the `router` state has been initialized
            // with another URL (e.g. used in combination with `NgxsStoragePlugin`), thus the
            // `RouterNavigation` action will be dispatched and the user will be redirected to the
            // previously saved URL. We want to prevent such behavior, so we perform this check
            // `url` is a recognized URL by the Angular's router, while `currentUrl` is an actual URL
            // entered in the browser's address bar
            // `PathLocationStrategy.prototype.path()` returns a concatenation of
            // `PlatformLocation.pathname` and normalized `PlatformLocation.search`.
            // `Location.prototype.normalize` strips base href from the URL,
            // if `baseHref` (declared in angular.json) for example is `/en`
            // and the URL is `/test#anchor` - then `_locationStrategy.path(true)` will return `/en/test#anchor`,
            // but `/en/test#anchor` is not known to the Angular's router, so we have to strip `/en`
            // from the URL
            /** @type {?} */
            const currentUrl = this._location.normalize(this._locationStrategy.path(true));
            /** @type {?} */
            const currentUrlTree = this._urlSerializer.parse(currentUrl);
            // We need to serialize the URL because in that example `/test/?redirect=https://google.com/`
            // Angular will recognize it as `/test?redirect=https:%2F%2Fwww.google.com%2F`
            // so we have to run the `currentUrl` via the `UrlSerializer` that will encode characters
            /** @type {?} */
            const currentSerializedUrl = this._urlSerializer.serialize(currentUrlTree);
            // If URLs differ from each other - we've got to perform a redirect to the manually entered URL
            // in the address bar, as it must have a priority
            if (currentSerializedUrl !== url) {
                this._router.navigateByUrl(currentUrl);
            }
        }));
    }
};
RouterState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterState.ctorParameters = () => [
    { type: Store },
    { type: Router },
    { type: RouterStateSerializer },
    { type: NgZone },
    { type: UrlSerializer },
    { type: LocationStrategy },
    { type: Location }
];
__decorate([
    Action(Navigate),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Navigate]),
    __metadata("design:returntype", void 0)
], RouterState.prototype, "navigate", null);
__decorate([
    Action([RouterNavigation, RouterError, RouterCancel, RouterDataResolved]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RouterState.prototype, "angularRouterAction", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RouterState, "state", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], RouterState, "url", null);
RouterState = RouterState_1 = __decorate([
    State({
        name: 'router',
        defaults: {
            state: undefined,
            navigationId: undefined,
            trigger: 'none'
        }
    }),
    __metadata("design:paramtypes", [Store,
        Router,
        RouterStateSerializer,
        NgZone,
        UrlSerializer,
        LocationStrategy,
        Location])
], RouterState);
export { RouterState };
if (false) {
    /**
     * Determines how navigation was performed by the `RouterState` itself
     * or outside via `new Navigate(...)`
     * @type {?}
     * @private
     */
    RouterState.prototype._trigger;
    /**
     * That's the serialized state from the `Router` class
     * @type {?}
     * @private
     */
    RouterState.prototype._routerState;
    /**
     * That's the value of the `RouterState` state
     * @type {?}
     * @private
     */
    RouterState.prototype._storeState;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._lastRoutesRecognized;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._store;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._router;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._serializer;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._urlSerializer;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._locationStrategy;
    /**
     * @type {?}
     * @private
     */
    RouterState.prototype._location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyLXBsdWdpbi9zcmMvcm91dGVyLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixNQUFNLEVBRU4sZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixhQUFhLEVBQ2IsZUFBZSxFQUNmLGFBQWEsRUFDZCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUNMLFFBQVEsRUFFUixZQUFZLEVBQ1osV0FBVyxFQUNYLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbkIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBRXJELHNDQUlDOzs7SUFIQyxpQ0FBVTs7SUFDVix3Q0FBc0I7O0lBQ3RCLG1DQUF1Qjs7SUFjWixXQUFXLHlCQUFYLFdBQVc7Ozs7Ozs7Ozs7SUE2QnRCLFlBQ1UsTUFBYSxFQUNiLE9BQWUsRUFDZixXQUF1RCxFQUN2RCxPQUFlLEVBQ2YsY0FBNkIsRUFDN0IsaUJBQW1DLEVBQ25DLFNBQW1CO1FBTm5CLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ys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LGtDQUErRDs7Ozs7SUFDL0QsOEJBQXVCOzs7OztJQUN2QixxQ0FBcUM7Ozs7O0lBQ3JDLHdDQUEyQzs7Ozs7SUFDM0MsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIFJvdXRlcixcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVzUmVjb2duaXplZCxcbiAgUmVzb2x2ZUVuZCxcbiAgVXJsU2VyaWFsaXplcixcbiAgTmF2aWdhdGlvblN0YXJ0LFxuICBOYXZpZ2F0aW9uRW5kXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IGlzQW5ndWxhckluVGVzdE1vZGUgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIE5hdmlnYXRlLFxuICBSb3V0ZXJBY3Rpb24sXG4gIFJvdXRlckNhbmNlbCxcbiAgUm91dGVyRXJyb3IsXG4gIFJvdXRlck5hdmlnYXRpb24sXG4gIFJvdXRlckRhdGFSZXNvbHZlZFxufSBmcm9tICcuL3JvdXRlci5hY3Rpb25zJztcbmltcG9ydCB7IFJvdXRlclN0YXRlU2VyaWFsaXplciB9IGZyb20gJy4vc2VyaWFsaXplcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyU3RhdGVNb2RlbDxUID0gUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICBzdGF0ZT86IFQ7XG4gIG5hdmlnYXRpb25JZD86IG51bWJlcjtcbiAgdHJpZ2dlcjogUm91dGVyVHJpZ2dlcjtcbn1cblxuZXhwb3J0IHR5cGUgUm91dGVyVHJpZ2dlciA9ICdub25lJyB8ICdyb3V0ZXInIHwgJ3N0b3JlJztcblxuQFN0YXRlPFJvdXRlclN0YXRlTW9kZWw+KHtcbiAgbmFtZTogJ3JvdXRlcicsXG4gIGRlZmF1bHRzOiB7XG4gICAgc3RhdGU6IHVuZGVmaW5lZCxcbiAgICBuYXZpZ2F0aW9uSWQ6IHVuZGVmaW5lZCxcbiAgICB0cmlnZ2VyOiAnbm9uZSdcbiAgfVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJTdGF0ZSB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGhvdyBuYXZpZ2F0aW9uIHdhcyBwZXJmb3JtZWQgYnkgdGhlIGBSb3V0ZXJTdGF0ZWAgaXRzZWxmXG4gICAqIG9yIG91dHNpZGUgdmlhIGBuZXcgTmF2aWdhdGUoLi4uKWBcbiAgICovXG4gIHByaXZhdGUgX3RyaWdnZXI6IFJvdXRlclRyaWdnZXIgPSAnbm9uZSc7XG5cbiAgLyoqXG4gICAqIFRoYXQncyB0aGUgc2VyaWFsaXplZCBzdGF0ZSBmcm9tIHRoZSBgUm91dGVyYCBjbGFzc1xuICAgKi9cbiAgcHJpdmF0ZSBfcm91dGVyU3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhhdCdzIHRoZSB2YWx1ZSBvZiB0aGUgYFJvdXRlclN0YXRlYCBzdGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc3RvcmVTdGF0ZTogUm91dGVyU3RhdGVNb2RlbCB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgX2xhc3RSb3V0ZXNSZWNvZ25pemVkOiBSb3V0ZXNSZWNvZ25pemVkID0gbnVsbCE7XG5cbiAgQFNlbGVjdG9yKClcbiAgc3RhdGljIHN0YXRlPFQgPSBSb3V0ZXJTdGF0ZVNuYXBzaG90PihzdGF0ZTogUm91dGVyU3RhdGVNb2RlbDxUPikge1xuICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZS5zdGF0ZTtcbiAgfVxuXG4gIEBTZWxlY3RvcigpXG4gIHN0YXRpYyB1cmwoc3RhdGU6IFJvdXRlclN0YXRlTW9kZWwpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZS5zdGF0ZSAmJiBzdGF0ZS5zdGF0ZS51cmw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zdG9yZTogU3RvcmUsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfc2VyaWFsaXplcjogUm91dGVyU3RhdGVTZXJpYWxpemVyPFJvdXRlclN0YXRlU25hcHNob3Q+LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3VybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsXG4gICAgcHJpdmF0ZSBfbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSxcbiAgICBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb25cbiAgKSB7XG4gICAgdGhpcy5zZXRVcFN0b3JlTGlzdGVuZXIoKTtcbiAgICB0aGlzLnNldFVwUm91dGVyRXZlbnRzTGlzdGVuZXIoKTtcbiAgICB0aGlzLmNoZWNrSW5pdGlhbE5hdmlnYXRpb25PbmNlKCk7XG4gIH1cblxuICBAQWN0aW9uKE5hdmlnYXRlKVxuICBuYXZpZ2F0ZShfOiBTdGF0ZUNvbnRleHQ8Um91dGVyU3RhdGVNb2RlbD4sIGFjdGlvbjogTmF2aWdhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5fbmdab25lLnJ1bigoKSA9PlxuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKGFjdGlvbi5wYXRoLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBhY3Rpb24ucXVlcnlQYXJhbXMsXG4gICAgICAgIC4uLmFjdGlvbi5leHRyYXNcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBBY3Rpb24oW1JvdXRlck5hdmlnYXRpb24sIFJvdXRlckVycm9yLCBSb3V0ZXJDYW5jZWwsIFJvdXRlckRhdGFSZXNvbHZlZF0pXG4gIGFuZ3VsYXJSb3V0ZXJBY3Rpb24oXG4gICAgY3R4OiBTdGF0ZUNvbnRleHQ8Um91dGVyU3RhdGVNb2RlbD4sXG4gICAgYWN0aW9uOiBSb3V0ZXJBY3Rpb248Um91dGVyU3RhdGVNb2RlbCwgUm91dGVyU3RhdGVTbmFwc2hvdD5cbiAgKTogdm9pZCB7XG4gICAgY3R4LnNldFN0YXRlKHtcbiAgICAgIC4uLmN0eC5nZXRTdGF0ZSgpLFxuICAgICAgdHJpZ2dlcjogYWN0aW9uLnRyaWdnZXIsXG4gICAgICBzdGF0ZTogYWN0aW9uLnJvdXRlclN0YXRlLFxuICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24uZXZlbnQuaWRcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBTdG9yZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3JlLnNlbGVjdChSb3V0ZXJTdGF0ZSkuc3Vic2NyaWJlKChzdGF0ZTogUm91dGVyU3RhdGVNb2RlbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgdGhpcy5uYXZpZ2F0ZUlmTmVlZGVkKHN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBSb3V0ZXJFdmVudHNMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU3RhcnQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBSb3V0ZXNSZWNvZ25pemVkKSB7XG4gICAgICAgIHRoaXMuX2xhc3RSb3V0ZXNSZWNvZ25pemVkID0gZXZlbnQ7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgUmVzb2x2ZUVuZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoUm91dGVyRGF0YVJlc29sdmVkKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hSb3V0ZXJDYW5jZWwoZXZlbnQpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hSb3V0ZXJFcnJvcihldmVudCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkVuZCgpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG5hdmlnYXRpb25TdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3V0ZXJTdGF0ZSA9IHRoaXMuX3NlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMuX3JvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdCk7XG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlciAhPT0gJ25vbmUnKSB7XG4gICAgICB0aGlzLl9zdG9yZVN0YXRlID0gdGhpcy5fc3RvcmUuc2VsZWN0U25hcHNob3QoUm91dGVyU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbmF2aWdhdGlvbkVuZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGREaXNwYXRjaFJvdXRlck5hdmlnYXRpb24oKSkge1xuICAgICAgdGhpcy5kaXNwYXRjaFJvdXRlck5hdmlnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZERpc3BhdGNoUm91dGVyTmF2aWdhdGlvbigpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX3N0b3JlU3RhdGUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyICE9PSAnc3RvcmUnO1xuICB9XG5cbiAgcHJpdmF0ZSBuYXZpZ2F0ZUlmTmVlZGVkKHN0YXRlOiBSb3V0ZXJTdGF0ZU1vZGVsIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgY29uc3QgY2FuU2tpcE5hdmlnYXRpb24gPVxuICAgICAgIXRoaXMuX3N0b3JlU3RhdGUgfHxcbiAgICAgICF0aGlzLl9zdG9yZVN0YXRlLnN0YXRlIHx8XG4gICAgICAhc3RhdGUgfHxcbiAgICAgIHN0YXRlLnRyaWdnZXIgPT09ICdyb3V0ZXInIHx8XG4gICAgICB0aGlzLl9yb3V0ZXIudXJsID09PSB0aGlzLl9zdG9yZVN0YXRlLnN0YXRlLnVybDtcblxuICAgIGlmIChjYW5Ta2lwTmF2aWdhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3RyaWdnZXIgPSAnc3RvcmUnO1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5fc3RvcmVTdGF0ZSEuc3RhdGUhLnVybCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BhdGNoUm91dGVyTmF2aWdhdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0Um91dGVyU3RhdGUgPSB0aGlzLl9zZXJpYWxpemVyLnNlcmlhbGl6ZSh0aGlzLl9sYXN0Um91dGVzUmVjb2duaXplZC5zdGF0ZSk7XG5cbiAgICB0aGlzLmRpc3BhdGNoUm91dGVyQWN0aW9uKFxuICAgICAgbmV3IFJvdXRlck5hdmlnYXRpb24oXG4gICAgICAgIG5leHRSb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmV3IFJvdXRlc1JlY29nbml6ZWQoXG4gICAgICAgICAgdGhpcy5fbGFzdFJvdXRlc1JlY29nbml6ZWQuaWQsXG4gICAgICAgICAgdGhpcy5fbGFzdFJvdXRlc1JlY29nbml6ZWQudXJsLFxuICAgICAgICAgIHRoaXMuX2xhc3RSb3V0ZXNSZWNvZ25pemVkLnVybEFmdGVyUmVkaXJlY3RzLFxuICAgICAgICAgIG5leHRSb3V0ZXJTdGF0ZVxuICAgICAgICApLFxuICAgICAgICB0aGlzLl90cmlnZ2VyXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGF0Y2hSb3V0ZXJDYW5jZWwoZXZlbnQ6IE5hdmlnYXRpb25DYW5jZWwpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BhdGNoUm91dGVyQWN0aW9uKFxuICAgICAgbmV3IFJvdXRlckNhbmNlbCh0aGlzLl9yb3V0ZXJTdGF0ZSEsIHRoaXMuX3N0b3JlU3RhdGUsIGV2ZW50LCB0aGlzLl90cmlnZ2VyKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BhdGNoUm91dGVyRXJyb3IoZXZlbnQ6IE5hdmlnYXRpb25FcnJvcik6IHZvaWQge1xuICAgIHRoaXMuZGlzcGF0Y2hSb3V0ZXJBY3Rpb24oXG4gICAgICBuZXcgUm91dGVyRXJyb3IoXG4gICAgICAgIHRoaXMuX3JvdXRlclN0YXRlISxcbiAgICAgICAgdGhpcy5fc3RvcmVTdGF0ZSxcbiAgICAgICAgbmV3IE5hdmlnYXRpb25FcnJvcihldmVudC5pZCwgZXZlbnQudXJsLCBgJHtldmVudH1gKSxcbiAgICAgICAgdGhpcy5fdHJpZ2dlclxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BhdGNoUm91dGVyQWN0aW9uPFQ+KGFjdGlvbjogUm91dGVyQWN0aW9uPFQ+KTogdm9pZCB7XG4gICAgdGhpcy5fdHJpZ2dlciA9ICdyb3V0ZXInO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3RyaWdnZXIgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwYXRjaFJvdXRlckRhdGFSZXNvbHZlZChldmVudDogUmVzb2x2ZUVuZCk6IHZvaWQge1xuICAgIGNvbnN0IHJvdXRlclN0YXRlID0gdGhpcy5fc2VyaWFsaXplci5zZXJpYWxpemUoZXZlbnQuc3RhdGUpO1xuICAgIHRoaXMuZGlzcGF0Y2hSb3V0ZXJBY3Rpb24obmV3IFJvdXRlckRhdGFSZXNvbHZlZChyb3V0ZXJTdGF0ZSwgZXZlbnQsIHRoaXMuX3RyaWdnZXIpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdHJpZ2dlciA9ICdub25lJztcbiAgICB0aGlzLl9zdG9yZVN0YXRlID0gbnVsbDtcbiAgICB0aGlzLl9yb3V0ZXJTdGF0ZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogTm8gc2Vuc2UgdG8gbWVzcyB1cCB0aGUgYHNldFVwUm91dGVyRXZlbnRzTGlzdGVuZXJgIG1ldGhvZCBhcyB3ZSBoYXZlXG4gICAqIHRvIHBlcmZvcm0gdGhpcyBjaGVjayBvbmx5IG9uY2UgYW5kIHVuc3Vic2NyaWJlIGFmdGVyIHRoZSBmaXJzdCBldmVudFxuICAgKiBpcyB0cmlnZ2VyZWRcbiAgICovXG4gIHByaXZhdGUgY2hlY2tJbml0aWFsTmF2aWdhdGlvbk9uY2UoKTogdm9pZCB7XG4gICAgaWYgKGlzQW5ndWxhckluVGVzdE1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpcnN0KChldmVudCk6IGV2ZW50IGlzIFJvdXRlc1JlY29nbml6ZWQgPT4gZXZlbnQgaW5zdGFuY2VvZiBSb3V0ZXNSZWNvZ25pemVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgdXJsIH0pID0+IHtcbiAgICAgICAgLy8gYGxvY2F0aW9uLnBhdGhuYW1lYCBhbHdheXMgZXF1YWxzIG1hbnVhbGx5IGVudGVyZWQgVVJMIGluIHRoZSBhZGRyZXNzIGJhclxuICAgICAgICAvLyBlLmcuIGBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9mb28nYCwgYnV0IHRoZSBgcm91dGVyYCBzdGF0ZSBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgICAgICAvLyB3aXRoIGFub3RoZXIgVVJMIChlLmcuIHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBgTmd4c1N0b3JhZ2VQbHVnaW5gKSwgdGh1cyB0aGVcbiAgICAgICAgLy8gYFJvdXRlck5hdmlnYXRpb25gIGFjdGlvbiB3aWxsIGJlIGRpc3BhdGNoZWQgYW5kIHRoZSB1c2VyIHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGVcbiAgICAgICAgLy8gcHJldmlvdXNseSBzYXZlZCBVUkwuIFdlIHdhbnQgdG8gcHJldmVudCBzdWNoIGJlaGF2aW9yLCBzbyB3ZSBwZXJmb3JtIHRoaXMgY2hlY2tcblxuICAgICAgICAvLyBgdXJsYCBpcyBhIHJlY29nbml6ZWQgVVJMIGJ5IHRoZSBBbmd1bGFyJ3Mgcm91dGVyLCB3aGlsZSBgY3VycmVudFVybGAgaXMgYW4gYWN0dWFsIFVSTFxuICAgICAgICAvLyBlbnRlcmVkIGluIHRoZSBicm93c2VyJ3MgYWRkcmVzcyBiYXJcbiAgICAgICAgLy8gYFBhdGhMb2NhdGlvblN0cmF0ZWd5LnByb3RvdHlwZS5wYXRoKClgIHJldHVybnMgYSBjb25jYXRlbmF0aW9uIG9mXG4gICAgICAgIC8vIGBQbGF0Zm9ybUxvY2F0aW9uLnBhdGhuYW1lYCBhbmQgbm9ybWFsaXplZCBgUGxhdGZvcm1Mb2NhdGlvbi5zZWFyY2hgLlxuXG4gICAgICAgIC8vIGBMb2NhdGlvbi5wcm90b3R5cGUubm9ybWFsaXplYCBzdHJpcHMgYmFzZSBocmVmIGZyb20gdGhlIFVSTCxcbiAgICAgICAgLy8gaWYgYGJhc2VIcmVmYCAoZGVjbGFyZWQgaW4gYW5ndWxhci5qc29uKSBmb3IgZXhhbXBsZSBpcyBgL2VuYFxuICAgICAgICAvLyBhbmQgdGhlIFVSTCBpcyBgL3Rlc3QjYW5jaG9yYCAtIHRoZW4gYF9sb2NhdGlvblN0cmF0ZWd5LnBhdGgodHJ1ZSlgIHdpbGwgcmV0dXJuIGAvZW4vdGVzdCNhbmNob3JgLFxuICAgICAgICAvLyBidXQgYC9lbi90ZXN0I2FuY2hvcmAgaXMgbm90IGtub3duIHRvIHRoZSBBbmd1bGFyJ3Mgcm91dGVyLCBzbyB3ZSBoYXZlIHRvIHN0cmlwIGAvZW5gXG4gICAgICAgIC8vIGZyb20gdGhlIFVSTFxuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gdGhpcy5fbG9jYXRpb24ubm9ybWFsaXplKHRoaXMuX2xvY2F0aW9uU3RyYXRlZ3kucGF0aCh0cnVlKSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmxUcmVlID0gdGhpcy5fdXJsU2VyaWFsaXplci5wYXJzZShjdXJyZW50VXJsKTtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzZXJpYWxpemUgdGhlIFVSTCBiZWNhdXNlIGluIHRoYXQgZXhhbXBsZSBgL3Rlc3QvP3JlZGlyZWN0PWh0dHBzOi8vZ29vZ2xlLmNvbS9gXG4gICAgICAgIC8vIEFuZ3VsYXIgd2lsbCByZWNvZ25pemUgaXQgYXMgYC90ZXN0P3JlZGlyZWN0PWh0dHBzOiUyRiUyRnd3dy5nb29nbGUuY29tJTJGYFxuICAgICAgICAvLyBzbyB3ZSBoYXZlIHRvIHJ1biB0aGUgYGN1cnJlbnRVcmxgIHZpYSB0aGUgYFVybFNlcmlhbGl6ZXJgIHRoYXQgd2lsbCBlbmNvZGUgY2hhcmFjdGVyc1xuICAgICAgICBjb25zdCBjdXJyZW50U2VyaWFsaXplZFVybCA9IHRoaXMuX3VybFNlcmlhbGl6ZXIuc2VyaWFsaXplKGN1cnJlbnRVcmxUcmVlKTtcblxuICAgICAgICAvLyBJZiBVUkxzIGRpZmZlciBmcm9tIGVhY2ggb3RoZXIgLSB3ZSd2ZSBnb3QgdG8gcGVyZm9ybSBhIHJlZGlyZWN0IHRvIHRoZSBtYW51YWxseSBlbnRlcmVkIFVSTFxuICAgICAgICAvLyBpbiB0aGUgYWRkcmVzcyBiYXIsIGFzIGl0IG11c3QgaGF2ZSBhIHByaW9yaXR5XG4gICAgICAgIGlmIChjdXJyZW50U2VyaWFsaXplZFVybCAhPT0gdXJsKSB7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoY3VycmVudFVybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=
import { Injectable, NgZone, NgModule } from '@angular/core';
import { Store, Action, Selector, State, NgxsModule } from '@ngxs/store';
import { __decorate, __metadata } from 'tslib';
import { NavigationStart, RoutesRecognized, ResolveEnd, NavigationCancel, NavigationError, NavigationEnd, Router, UrlSerializer } from '@angular/router';
import { LocationStrategy, Location } from '@angular/common';
import { isAngularInTestMode } from '@ngxs/store/internals';
import { first } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/router.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Public event api of the router
 */
class Navigate {
    /**
     * @param {?} path
     * @param {?=} queryParams
     * @param {?=} extras
     */
    constructor(path, queryParams, extras) {
        this.path = path;
        this.queryParams = queryParams;
        this.extras = extras;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] Navigate';
    }
}
if (false) {
    /** @type {?} */
    Navigate.prototype.path;
    /** @type {?} */
    Navigate.prototype.queryParams;
    /** @type {?} */
    Navigate.prototype.extras;
}
/**
 *
 * Angular Routers internal state events
 *
 */
/**
 * An action dispatched when the router navigates.
 * @template T
 */
class RouterNavigation {
    /**
     * @param {?} routerState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, event, trigger = 'none') {
        this.routerState = routerState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterNavigation';
    }
}
if (false) {
    /** @type {?} */
    RouterNavigation.prototype.routerState;
    /** @type {?} */
    RouterNavigation.prototype.event;
    /** @type {?} */
    RouterNavigation.prototype.trigger;
}
/**
 * An action dispatched when the router cancel navigation.
 * @template T, V
 */
class RouterCancel {
    /**
     * @param {?} routerState
     * @param {?} storeState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, storeState, event, trigger = 'none') {
        this.routerState = routerState;
        this.storeState = storeState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterCancel';
    }
}
if (false) {
    /** @type {?} */
    RouterCancel.prototype.routerState;
    /** @type {?} */
    RouterCancel.prototype.storeState;
    /** @type {?} */
    RouterCancel.prototype.event;
    /** @type {?} */
    RouterCancel.prototype.trigger;
}
/**
 * An action dispatched when the router errors.
 * @template T, V
 */
class RouterError {
    /**
     * @param {?} routerState
     * @param {?} storeState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, storeState, event, trigger = 'none') {
        this.routerState = routerState;
        this.storeState = storeState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterError';
    }
}
if (false) {
    /** @type {?} */
    RouterError.prototype.routerState;
    /** @type {?} */
    RouterError.prototype.storeState;
    /** @type {?} */
    RouterError.prototype.event;
    /** @type {?} */
    RouterError.prototype.trigger;
}
/**
 * An action dispatched when the `ResolveEnd` event is triggered.
 * @template T
 */
class RouterDataResolved {
    /**
     * @param {?} routerState
     * @param {?} event
     * @param {?=} trigger
     */
    constructor(routerState, event, trigger = 'none') {
        this.routerState = routerState;
        this.event = event;
        this.trigger = trigger;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[Router] RouterDataResolved';
    }
}
if (false) {
    /** @type {?} */
    RouterDataResolved.prototype.routerState;
    /** @type {?} */
    RouterDataResolved.prototype.event;
    /** @type {?} */
    RouterDataResolved.prototype.trigger;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/serializer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class RouterStateSerializer {
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
function SerializedRouterStateSnapshot() { }
if (false) {
    /** @type {?} */
    SerializedRouterStateSnapshot.prototype.root;
    /** @type {?} */
    SerializedRouterStateSnapshot.prototype.url;
}
class DefaultRouterStateSerializer {
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

var RouterState_1;
/**
 * @record
 * @template T
 */
function RouterStateModel() { }
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/router.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxsRouterPluginModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngxs-router-plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DefaultRouterStateSerializer, Navigate, NgxsRouterPluginModule, RouterCancel, RouterDataResolved, RouterError, RouterNavigation, RouterState, RouterStateSerializer };
//# sourceMappingURL=ngxs-router-plugin.js.map
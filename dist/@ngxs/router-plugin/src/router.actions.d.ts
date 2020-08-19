import { NavigationCancel, NavigationError, NavigationExtras, Params, RouterStateSnapshot, RoutesRecognized, ResolveEnd } from '@angular/router';
import { RouterTrigger } from './router.state';
/**
 * Public event api of the router
 */
export declare class Navigate {
    path: any[];
    queryParams?: Params | undefined;
    extras?: NavigationExtras | undefined;
    static get type(): string;
    constructor(path: any[], queryParams?: Params | undefined, extras?: NavigationExtras | undefined);
}
/**
 *
 * Angular Routers internal state events
 *
 */
/**
 * An action dispatched when the router navigates.
 */
export declare class RouterNavigation<T = RouterStateSnapshot> {
    routerState: T;
    event: RoutesRecognized;
    trigger: RouterTrigger;
    static get type(): string;
    constructor(routerState: T, event: RoutesRecognized, trigger?: RouterTrigger);
}
/**
 * An action dispatched when the router cancel navigation.
 */
export declare class RouterCancel<T, V = RouterStateSnapshot> {
    routerState: V;
    storeState: T;
    event: NavigationCancel;
    trigger: RouterTrigger;
    static get type(): string;
    constructor(routerState: V, storeState: T, event: NavigationCancel, trigger?: RouterTrigger);
}
/**
 * An action dispatched when the router errors.
 */
export declare class RouterError<T, V = RouterStateSnapshot> {
    routerState: V;
    storeState: T;
    event: NavigationError;
    trigger: RouterTrigger;
    static get type(): string;
    constructor(routerState: V, storeState: T, event: NavigationError, trigger?: RouterTrigger);
}
/**
 * An action dispatched when the `ResolveEnd` event is triggered.
 */
export declare class RouterDataResolved<T = RouterStateSnapshot> {
    routerState: T;
    event: ResolveEnd;
    trigger: RouterTrigger;
    static get type(): string;
    constructor(routerState: T, event: ResolveEnd, trigger?: RouterTrigger);
}
/**
 * An union type of router actions.
 */
export declare type RouterAction<T, V = RouterStateSnapshot> = RouterNavigation<V> | RouterCancel<T, V> | RouterError<T, V> | RouterDataResolved<V>;

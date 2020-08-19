/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/state-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Optional, SkipSelf, Inject } from '@angular/core';
import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, defaultIfEmpty, filter, map, mergeMap, shareReplay, takeUntil } from 'rxjs/operators';
import { META_KEY, NgxsConfig } from '../symbols';
import { buildGraph, findFullParentPath, isObject, nameToState, propGetter, topologicalSort } from './internals';
import { getActionTypeFromInstance, getValue, setValue } from '../utils/utils';
import { ofActionDispatched } from '../operators/of-action';
import { InternalActions } from '../actions-stream';
import { InternalDispatchedActionResults } from '../internal/dispatcher';
import { StateContextFactory } from '../internal/state-context-factory';
import { StoreValidators } from '../utils/store-validators';
import { INITIAL_STATE_TOKEN, memoize } from '@ngxs/store/internals';
/**
 * State factory class
 * @ignore
 */
export class StateFactory {
    /**
     * @param {?} _injector
     * @param {?} _config
     * @param {?} _parentFactory
     * @param {?} _actions
     * @param {?} _actionResults
     * @param {?} _stateContextFactory
     * @param {?} _initialState
     */
    constructor(_injector, _config, _parentFactory, _actions, _actionResults, _stateContextFactory, _initialState) {
        this._injector = _injector;
        this._config = _config;
        this._parentFactory = _parentFactory;
        this._actions = _actions;
        this._actionResults = _actionResults;
        this._stateContextFactory = _stateContextFactory;
        this._initialState = _initialState;
        this._connected = false;
        this._states = [];
        this._statesByName = {};
        this._statePaths = {};
        this.getRuntimeSelectorContext = memoize((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const stateFactory = this;
            /** @type {?} */
            const context = this._parentFactory
                ? this._parentFactory.getRuntimeSelectorContext()
                : {
                    /**
                     * @param {?} key
                     * @return {?}
                     */
                    getStateGetter(key) {
                        /** @type {?} */
                        const path = stateFactory.statePaths[key];
                        return path ? propGetter(path.split('.'), stateFactory._config) : (/**
                         * @return {?}
                         */
                        () => undefined);
                    },
                    /**
                     * @param {?=} localOptions
                     * @return {?}
                     */
                    getSelectorOptions(localOptions) {
                        /** @type {?} */
                        const globalSelectorOptions = stateFactory._config.selectorOptions;
                        return Object.assign(Object.assign({}, globalSelectorOptions), (localOptions || {}));
                    }
                };
            return context;
        }));
    }
    /**
     * @return {?}
     */
    get states() {
        return this._parentFactory ? this._parentFactory.states : this._states;
    }
    /**
     * @return {?}
     */
    get statesByName() {
        return this._parentFactory ? this._parentFactory.statesByName : this._statesByName;
    }
    /**
     * @private
     * @return {?}
     */
    get statePaths() {
        return this._parentFactory ? this._parentFactory.statePaths : this._statePaths;
    }
    /**
     * @private
     * @param {?} defaults
     * @return {?}
     */
    static cloneDefaults(defaults) {
        /** @type {?} */
        let value = {};
        if (Array.isArray(defaults)) {
            value = defaults.slice();
        }
        else if (isObject(defaults)) {
            value = Object.assign({}, defaults);
        }
        else if (defaults === undefined) {
            value = {};
        }
        else {
            value = defaults;
        }
        return value;
    }
    /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    static checkStatesAreValid(stateClasses) {
        stateClasses.forEach(StoreValidators.getValidStateMeta);
    }
    /**
     * Add a new state to the global defs.
     * @param {?} stateClasses
     * @return {?}
     */
    add(stateClasses) {
        StateFactory.checkStatesAreValid(stateClasses);
        const { newStates } = this.addToStatesMap(stateClasses);
        if (!newStates.length)
            return [];
        /** @type {?} */
        const stateGraph = buildGraph(newStates);
        /** @type {?} */
        const sortedStates = topologicalSort(stateGraph);
        /** @type {?} */
        const paths = findFullParentPath(stateGraph);
        /** @type {?} */
        const nameGraph = nameToState(newStates);
        /** @type {?} */
        const bootstrappedStores = [];
        for (const name of sortedStates) {
            /** @type {?} */
            const stateClass = nameGraph[name];
            /** @type {?} */
            const path = paths[name];
            /** @type {?} */
            const meta = (/** @type {?} */ (stateClass[META_KEY]));
            this.addRuntimeInfoToMeta(meta, path);
            /** @type {?} */
            const stateMap = {
                name,
                path,
                isInitialised: false,
                actions: meta.actions,
                instance: this._injector.get(stateClass),
                defaults: StateFactory.cloneDefaults(meta.defaults)
            };
            // ensure our store hasn't already been added
            // but don't throw since it could be lazy
            // loaded from different paths
            if (!this.hasBeenMountedAndBootstrapped(name, path)) {
                bootstrappedStores.push(stateMap);
            }
            this.states.push(stateMap);
        }
        return bootstrappedStores;
    }
    /**
     * Add a set of states to the store and return the defaults
     * @param {?} stateClasses
     * @return {?}
     */
    addAndReturnDefaults(stateClasses) {
        /** @type {?} */
        const classes = stateClasses || [];
        /** @type {?} */
        const mappedStores = this.add(classes);
        /** @type {?} */
        const defaults = mappedStores.reduce((/**
         * @param {?} result
         * @param {?} mappedStore
         * @return {?}
         */
        (result, mappedStore) => setValue(result, mappedStore.path, mappedStore.defaults)), {});
        return { defaults, states: mappedStores };
    }
    /**
     * Bind the actions to the handlers
     * @return {?}
     */
    connectActionHandlers() {
        if (this._connected)
            return;
        this._actions
            .pipe(filter((/**
         * @param {?} ctx
         * @return {?}
         */
        (ctx) => ctx.status === "DISPATCHED" /* Dispatched */)), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ action }) => this.invokeActions(this._actions, (/** @type {?} */ (action))).pipe(map((/**
         * @return {?}
         */
        () => (/** @type {?} */ ({ action, status: "SUCCESSFUL" /* Successful */ })))), defaultIfEmpty((/** @type {?} */ ({ action, status: "CANCELED" /* Canceled */ }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of((/** @type {?} */ ({ action, status: "ERRORED" /* Errored */, error })))))))))
            .subscribe((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => this._actionResults.next(ctx)));
        this._connected = true;
    }
    /**
     * Invoke actions on the states.
     * @param {?} actions$
     * @param {?} action
     * @return {?}
     */
    invokeActions(actions$, action) {
        /** @type {?} */
        const type = (/** @type {?} */ (getActionTypeFromInstance(action)));
        /** @type {?} */
        const results = [];
        for (const metadata of this.states) {
            /** @type {?} */
            const actionMetas = metadata.actions[type];
            if (actionMetas) {
                for (const actionMeta of actionMetas) {
                    /** @type {?} */
                    const stateContext = this._stateContextFactory.createStateContext(metadata);
                    try {
                        /** @type {?} */
                        let result = metadata.instance[actionMeta.fn](stateContext, action);
                        if (result instanceof Promise) {
                            result = from(result);
                        }
                        if (result instanceof Observable) {
                            // If this observable has been completed w/o emitting
                            // any value then we wouldn't want to complete the whole chain
                            // of actions. Since if any observable completes then
                            // action will be canceled.
                            // For instance if any action handler would've had such statement:
                            // `handler(ctx) { return EMPTY; }`
                            // then the action will be canceled.
                            // See https://github.com/ngxs/store/issues/1568
                            result = result.pipe(defaultIfEmpty({}));
                            if (actionMeta.options.cancelUncompleted) {
                                // todo: ofActionDispatched should be used with action class
                                result = result.pipe(takeUntil(actions$.pipe(ofActionDispatched((/** @type {?} */ (action))))));
                            }
                        }
                        else {
                            result = of({}).pipe(shareReplay());
                        }
                        results.push(result);
                    }
                    catch (e) {
                        results.push(throwError(e));
                    }
                }
            }
        }
        if (!results.length) {
            results.push(of({}));
        }
        return forkJoin(results);
    }
    /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    addToStatesMap(stateClasses) {
        /** @type {?} */
        const newStates = [];
        /** @type {?} */
        const statesMap = this.statesByName;
        for (const stateClass of stateClasses) {
            /** @type {?} */
            const stateName = StoreValidators.checkStateNameIsUnique(stateClass, statesMap);
            /** @type {?} */
            const unmountedState = !statesMap[stateName];
            if (unmountedState) {
                newStates.push(stateClass);
                statesMap[stateName] = stateClass;
            }
        }
        return { newStates };
    }
    /**
     * @private
     * @param {?} meta
     * @param {?} path
     * @return {?}
     */
    addRuntimeInfoToMeta(meta, path) {
        this.statePaths[(/** @type {?} */ (meta.name))] = path;
        // TODO: v4 - we plan to get rid of the path property because it is non-deterministic
        // we can do this when we get rid of the incorrectly exposed getStoreMetadata
        // We will need to come up with an alternative in v4 because this is used by many plugins
        meta.path = path;
    }
    /**
     * \@description
     * the method checks if the state has already been added to the tree
     * and completed the life cycle
     * @private
     * @param {?} name
     * @param {?} path
     * @return {?}
     */
    hasBeenMountedAndBootstrapped(name, path) {
        /** @type {?} */
        const valueIsBootstrappedInInitialState = getValue(this._initialState, path) !== undefined;
        return this.statesByName[name] && valueIsBootstrappedInInitialState;
    }
}
StateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StateFactory.ctorParameters = () => [
    { type: Injector },
    { type: NgxsConfig },
    { type: StateFactory, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: InternalActions },
    { type: InternalDispatchedActionResults },
    { type: StateContextFactory },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INITIAL_STATE_TOKEN,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._connected;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._states;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._statesByName;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._statePaths;
    /** @type {?} */
    StateFactory.prototype.getRuntimeSelectorContext;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._config;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._parentFactory;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._actionResults;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._stateContextFactory;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._initialState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9pbnRlcm5hbC9zdGF0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixjQUFjLEVBQ2QsTUFBTSxFQUNOLEdBQUcsRUFDSCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sRUFDTCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLFFBQVEsRUFHUixXQUFXLEVBQ1gsVUFBVSxFQUtWLGVBQWUsRUFHaEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQStCLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQWlCLE9BQU8sRUFBRSxNQUFN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b250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCwgU2tpcFNlbGYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIGZyb20sIE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBkZWZhdWx0SWZFbXB0eSxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzaGFyZVJlcGxheSxcbiAgdGFrZVVudGlsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTUVUQV9LRVksIE5neHNDb25maWcgfSBmcm9tICcuLi9zeW1ib2xzJztcbmltcG9ydCB7XG4gIGJ1aWxkR3JhcGgsXG4gIGZpbmRGdWxsUGFyZW50UGF0aCxcbiAgaXNPYmplY3QsXG4gIE1hcHBlZFN0b3JlLFxuICBNZXRhRGF0YU1vZGVsLFxuICBuYW1lVG9TdGF0ZSxcbiAgcHJvcEdldHRlcixcbiAgU3RhdGVDbGFzc0ludGVybmFsLFxuICBTdGF0ZUtleUdyYXBoLFxuICBTdGF0ZXNBbmREZWZhdWx0cyxcbiAgU3RhdGVzQnlOYW1lLFxuICB0b3BvbG9naWNhbFNvcnQsXG4gIFJ1bnRpbWVTZWxlY3RvckNvbnRleHQsXG4gIFNoYXJlZFNlbGVjdG9yT3B0aW9uc1xufSBmcm9tICcuL2ludGVybmFscyc7XG5pbXBvcnQgeyBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlLCBnZXRWYWx1ZSwgc2V0VmFsdWUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBvZkFjdGlvbkRpc3BhdGNoZWQgfSBmcm9tICcuLi9vcGVyYXRvcnMvb2YtYWN0aW9uJztcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQsIEFjdGlvblN0YXR1cywgSW50ZXJuYWxBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy1zdHJlYW0nO1xuaW1wb3J0IHsgSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cyB9IGZyb20gJy4uL2ludGVybmFsL2Rpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0RmFjdG9yeSB9IGZyb20gJy4uL2ludGVybmFsL3N0YXRlLWNvbnRleHQtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdG9yZVZhbGlkYXRvcnMgfSBmcm9tICcuLi91dGlscy9zdG9yZS12YWxpZGF0b3JzJztcbmltcG9ydCB7IElOSVRJQUxfU1RBVEVfVE9LRU4sIFBsYWluT2JqZWN0T2YsIG1lbW9pemUgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xuXG4vKipcbiAqIFN0YXRlIGZhY3RvcnkgY2xhc3NcbiAqIEBpZ25vcmVcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRlRmFjdG9yeSB7XG4gIHByaXZhdGUgX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9jb25maWc6IE5neHNDb25maWcsXG4gICAgQE9wdGlvbmFsKClcbiAgICBAU2tpcFNlbGYoKVxuICAgIHByaXZhdGUgX3BhcmVudEZhY3Rvcnk6IFN0YXRlRmFjdG9yeSxcbiAgICBwcml2YXRlIF9hY3Rpb25zOiBJbnRlcm5hbEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBfYWN0aW9uUmVzdWx0czogSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cyxcbiAgICBwcml2YXRlIF9zdGF0ZUNvbnRleHRGYWN0b3J5OiBTdGF0ZUNvbnRleHRGYWN0b3J5LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChJTklUSUFMX1NUQVRFX1RPS0VOKVxuICAgIHByaXZhdGUgX2luaXRpYWxTdGF0ZTogYW55XG4gICkge31cblxuICBwcml2YXRlIF9zdGF0ZXM6IE1hcHBlZFN0b3JlW10gPSBbXTtcblxuICBwdWJsaWMgZ2V0IHN0YXRlcygpOiBNYXBwZWRTdG9yZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50RmFjdG9yeSA/IHRoaXMuX3BhcmVudEZhY3Rvcnkuc3RhdGVzIDogdGhpcy5fc3RhdGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGVzQnlOYW1lOiBTdGF0ZXNCeU5hbWUgPSB7fTtcblxuICBwdWJsaWMgZ2V0IHN0YXRlc0J5TmFtZSgpOiBTdGF0ZXNCeU5hbWUge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRGYWN0b3J5ID8gdGhpcy5fcGFyZW50RmFjdG9yeS5zdGF0ZXNCeU5hbWUgOiB0aGlzLl9zdGF0ZXNCeU5hbWU7XG4gIH1cblxuICBwcml2YXRlIF9zdGF0ZVBhdGhzOiBQbGFpbk9iamVjdE9mPHN0cmluZz4gPSB7fTtcblxuICBwcml2YXRlIGdldCBzdGF0ZVBhdGhzKCk6IFBsYWluT2JqZWN0T2Y8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZhY3RvcnkgPyB0aGlzLl9wYXJlbnRGYWN0b3J5LnN0YXRlUGF0aHMgOiB0aGlzLl9zdGF0ZVBhdGhzO1xuICB9XG5cbiAgcHVibGljIGdldFJ1bnRpbWVTZWxlY3RvckNvbnRleHQgPSBtZW1vaXplKCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZUZhY3RvcnkgPSB0aGlzO1xuICAgIGNvbnN0IGNvbnRleHQ6IFJ1bnRpbWVTZWxlY3RvckNvbnRleHQgPSB0aGlzLl9wYXJlbnRGYWN0b3J5XG4gICAgICA/IHRoaXMuX3BhcmVudEZhY3RvcnkuZ2V0UnVudGltZVNlbGVjdG9yQ29udGV4dCgpXG4gICAgICA6IHtcbiAgICAgICAgICBnZXRTdGF0ZUdldHRlcihrZXk6IHN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHN0YXRlRmFjdG9yeS5zdGF0ZVBhdGhzW2tleV07XG4gICAgICAgICAgICByZXR1cm4gcGF0aCA/IHByb3BHZXR0ZXIocGF0aC5zcGxpdCgnLicpLCBzdGF0ZUZhY3RvcnkuX2NvbmZpZykgOiAoKSA9PiB1bmRlZmluZWQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTZWxlY3Rvck9wdGlvbnMobG9jYWxPcHRpb25zPzogU2hhcmVkU2VsZWN0b3JPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBnbG9iYWxTZWxlY3Rvck9wdGlvbnMgPSBzdGF0ZUZhY3RvcnkuX2NvbmZpZy5zZWxlY3Rvck9wdGlvbnM7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5nbG9iYWxTZWxlY3Rvck9wdGlvbnMsXG4gICAgICAgICAgICAgIC4uLihsb2NhbE9wdGlvbnMgfHwge30pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2xvbmVEZWZhdWx0cyhkZWZhdWx0czogYW55KTogYW55IHtcbiAgICBsZXQgdmFsdWUgPSB7fTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZmF1bHRzKSkge1xuICAgICAgdmFsdWUgPSBkZWZhdWx0cy5zbGljZSgpO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZGVmYXVsdHMpKSB7XG4gICAgICB2YWx1ZSA9IHsgLi4uZGVmYXVsdHMgfTtcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tTdGF0ZXNBcmVWYWxpZChzdGF0ZUNsYXNzZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdKTogdm9pZCB7XG4gICAgc3RhdGVDbGFzc2VzLmZvckVhY2goU3RvcmVWYWxpZGF0b3JzLmdldFZhbGlkU3RhdGVNZXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgc3RhdGUgdG8gdGhlIGdsb2JhbCBkZWZzLlxuICAgKi9cbiAgYWRkKHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW10pOiBNYXBwZWRTdG9yZVtdIHtcbiAgICBTdGF0ZUZhY3RvcnkuY2hlY2tTdGF0ZXNBcmVWYWxpZChzdGF0ZUNsYXNzZXMpO1xuICAgIGNvbnN0IHsgbmV3U3RhdGVzIH0gPSB0aGlzLmFkZFRvU3RhdGVzTWFwKHN0YXRlQ2xhc3Nlcyk7XG4gICAgaWYgKCFuZXdTdGF0ZXMubGVuZ3RoKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBzdGF0ZUdyYXBoOiBTdGF0ZUtleUdyYXBoID0gYnVpbGRHcmFwaChuZXdTdGF0ZXMpO1xuICAgIGNvbnN0IHNvcnRlZFN0YXRlczogc3RyaW5nW10gPSB0b3BvbG9naWNhbFNvcnQoc3RhdGVHcmFwaCk7XG4gICAgY29uc3QgcGF0aHM6IFBsYWluT2JqZWN0T2Y8c3RyaW5nPiA9IGZpbmRGdWxsUGFyZW50UGF0aChzdGF0ZUdyYXBoKTtcbiAgICBjb25zdCBuYW1lR3JhcGg6IFBsYWluT2JqZWN0T2Y8U3RhdGVDbGFzc0ludGVybmFsPiA9IG5hbWVUb1N0YXRlKG5ld1N0YXRlcyk7XG4gICAgY29uc3QgYm9vdHN0cmFwcGVkU3RvcmVzOiBNYXBwZWRTdG9yZVtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2Ygc29ydGVkU3RhdGVzKSB7XG4gICAgICBjb25zdCBzdGF0ZUNsYXNzOiBTdGF0ZUNsYXNzSW50ZXJuYWwgPSBuYW1lR3JhcGhbbmFtZV07XG4gICAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSBwYXRoc1tuYW1lXTtcbiAgICAgIGNvbnN0IG1ldGE6IE1ldGFEYXRhTW9kZWwgPSBzdGF0ZUNsYXNzW01FVEFfS0VZXSE7XG5cbiAgICAgIHRoaXMuYWRkUnVudGltZUluZm9Ub01ldGEobWV0YSwgcGF0aCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlTWFwOiBNYXBwZWRTdG9yZSA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgaXNJbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgIGFjdGlvbnM6IG1ldGEuYWN0aW9ucyxcbiAgICAgICAgaW5zdGFuY2U6IHRoaXMuX2luamVjdG9yLmdldChzdGF0ZUNsYXNzKSxcbiAgICAgICAgZGVmYXVsdHM6IFN0YXRlRmFjdG9yeS5jbG9uZURlZmF1bHRzKG1ldGEuZGVmYXVsdHMpXG4gICAgICB9O1xuXG4gICAgICAvLyBlbnN1cmUgb3VyIHN0b3JlIGhhc24ndCBhbHJlYWR5IGJlZW4gYWRkZWRcbiAgICAgIC8vIGJ1dCBkb24ndCB0aHJvdyBzaW5jZSBpdCBjb3VsZCBiZSBsYXp5XG4gICAgICAvLyBsb2FkZWQgZnJvbSBkaWZmZXJlbnQgcGF0aHNcbiAgICAgIGlmICghdGhpcy5oYXNCZWVuTW91bnRlZEFuZEJvb3RzdHJhcHBlZChuYW1lLCBwYXRoKSkge1xuICAgICAgICBib290c3RyYXBwZWRTdG9yZXMucHVzaChzdGF0ZU1hcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGVzLnB1c2goc3RhdGVNYXApO1xuICAgIH1cblxuICAgIHJldHVybiBib290c3RyYXBwZWRTdG9yZXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgc2V0IG9mIHN0YXRlcyB0byB0aGUgc3RvcmUgYW5kIHJldHVybiB0aGUgZGVmYXVsdHNcbiAgICovXG4gIGFkZEFuZFJldHVybkRlZmF1bHRzKHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW10pOiBTdGF0ZXNBbmREZWZhdWx0cyB7XG4gICAgY29uc3QgY2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW10gPSBzdGF0ZUNsYXNzZXMgfHwgW107XG5cbiAgICBjb25zdCBtYXBwZWRTdG9yZXM6IE1hcHBlZFN0b3JlW10gPSB0aGlzLmFkZChjbGFzc2VzKTtcbiAgICBjb25zdCBkZWZhdWx0cyA9IG1hcHBlZFN0b3Jlcy5yZWR1Y2UoXG4gICAgICAocmVzdWx0OiBhbnksIG1hcHBlZFN0b3JlOiBNYXBwZWRTdG9yZSkgPT5cbiAgICAgICAgc2V0VmFsdWUocmVzdWx0LCBtYXBwZWRTdG9yZS5wYXRoLCBtYXBwZWRTdG9yZS5kZWZhdWx0cyksXG4gICAgICB7fVxuICAgICk7XG4gICAgcmV0dXJuIHsgZGVmYXVsdHMsIHN0YXRlczogbWFwcGVkU3RvcmVzIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgYWN0aW9ucyB0byB0aGUgaGFuZGxlcnNcbiAgICovXG4gIGNvbm5lY3RBY3Rpb25IYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy5fY29ubmVjdGVkKSByZXR1cm47XG4gICAgdGhpcy5fYWN0aW9uc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoY3R4OiBBY3Rpb25Db250ZXh0KSA9PiBjdHguc3RhdHVzID09PSBBY3Rpb25TdGF0dXMuRGlzcGF0Y2hlZCksXG4gICAgICAgIG1lcmdlTWFwKCh7IGFjdGlvbiB9KSA9PlxuICAgICAgICAgIHRoaXMuaW52b2tlQWN0aW9ucyh0aGlzLl9hY3Rpb25zLCBhY3Rpb24hKS5waXBlKFxuICAgICAgICAgICAgbWFwKCgpID0+IDxBY3Rpb25Db250ZXh0PnsgYWN0aW9uLCBzdGF0dXM6IEFjdGlvblN0YXR1cy5TdWNjZXNzZnVsIH0pLFxuICAgICAgICAgICAgZGVmYXVsdElmRW1wdHkoPEFjdGlvbkNvbnRleHQ+eyBhY3Rpb24sIHN0YXR1czogQWN0aW9uU3RhdHVzLkNhbmNlbGVkIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICBvZig8QWN0aW9uQ29udGV4dD57IGFjdGlvbiwgc3RhdHVzOiBBY3Rpb25TdGF0dXMuRXJyb3JlZCwgZXJyb3IgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoY3R4ID0+IHRoaXMuX2FjdGlvblJlc3VsdHMubmV4dChjdHgpKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhY3Rpb25zIG9uIHRoZSBzdGF0ZXMuXG4gICAqL1xuICBpbnZva2VBY3Rpb25zKGFjdGlvbnMkOiBJbnRlcm5hbEFjdGlvbnMsIGFjdGlvbjogYW55KSB7XG4gICAgY29uc3QgdHlwZSA9IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UoYWN0aW9uKSE7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBtZXRhZGF0YSBvZiB0aGlzLnN0YXRlcykge1xuICAgICAgY29uc3QgYWN0aW9uTWV0YXMgPSBtZXRhZGF0YS5hY3Rpb25zW3R5cGVdO1xuXG4gICAgICBpZiAoYWN0aW9uTWV0YXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpb25NZXRhIG9mIGFjdGlvbk1ldGFzKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVDb250ZXh0ID0gdGhpcy5fc3RhdGVDb250ZXh0RmFjdG9yeS5jcmVhdGVTdGF0ZUNvbnRleHQobWV0YWRhdGEpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbWV0YWRhdGEuaW5zdGFuY2VbYWN0aW9uTWV0YS5mbl0oc3RhdGVDb250ZXh0LCBhY3Rpb24pO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBmcm9tKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoaXMgb2JzZXJ2YWJsZSBoYXMgYmVlbiBjb21wbGV0ZWQgdy9vIGVtaXR0aW5nXG4gICAgICAgICAgICAgIC8vIGFueSB2YWx1ZSB0aGVuIHdlIHdvdWxkbid0IHdhbnQgdG8gY29tcGxldGUgdGhlIHdob2xlIGNoYWluXG4gICAgICAgICAgICAgIC8vIG9mIGFjdGlvbnMuIFNpbmNlIGlmIGFueSBvYnNlcnZhYmxlIGNvbXBsZXRlcyB0aGVuXG4gICAgICAgICAgICAgIC8vIGFjdGlvbiB3aWxsIGJlIGNhbmNlbGVkLlxuICAgICAgICAgICAgICAvLyBGb3IgaW5zdGFuY2UgaWYgYW55IGFjdGlvbiBoYW5kbGVyIHdvdWxkJ3ZlIGhhZCBzdWNoIHN0YXRlbWVudDpcbiAgICAgICAgICAgICAgLy8gYGhhbmRsZXIoY3R4KSB7IHJldHVybiBFTVBUWTsgfWBcbiAgICAgICAgICAgICAgLy8gdGhlbiB0aGUgYWN0aW9uIHdpbGwgYmUgY2FuY2VsZWQuXG4gICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9pc3N1ZXMvMTU2OFxuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucGlwZShkZWZhdWx0SWZFbXB0eSh7fSkpO1xuXG4gICAgICAgICAgICAgIGlmIChhY3Rpb25NZXRhLm9wdGlvbnMuY2FuY2VsVW5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBvZkFjdGlvbkRpc3BhdGNoZWQgc2hvdWxkIGJlIHVzZWQgd2l0aCBhY3Rpb24gY2xhc3NcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucGlwZShcbiAgICAgICAgICAgICAgICAgIHRha2VVbnRpbChhY3Rpb25zJC5waXBlKG9mQWN0aW9uRGlzcGF0Y2hlZChhY3Rpb24gYXMgYW55KSkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gb2Yoe30pLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aHJvd0Vycm9yKGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzLnB1c2gob2Yoe30pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ya0pvaW4ocmVzdWx0cyk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRvU3RhdGVzTWFwKFxuICAgIHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW11cbiAgKTogeyBuZXdTdGF0ZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdIH0ge1xuICAgIGNvbnN0IG5ld1N0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW10gPSBbXTtcbiAgICBjb25zdCBzdGF0ZXNNYXA6IFN0YXRlc0J5TmFtZSA9IHRoaXMuc3RhdGVzQnlOYW1lO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZUNsYXNzIG9mIHN0YXRlQ2xhc3Nlcykge1xuICAgICAgY29uc3Qgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdG9yZVZhbGlkYXRvcnMuY2hlY2tTdGF0ZU5hbWVJc1VuaXF1ZShzdGF0ZUNsYXNzLCBzdGF0ZXNNYXApO1xuICAgICAgY29uc3QgdW5tb3VudGVkU3RhdGUgPSAhc3RhdGVzTWFwW3N0YXRlTmFtZV07XG4gICAgICBpZiAodW5tb3VudGVkU3RhdGUpIHtcbiAgICAgICAgbmV3U3RhdGVzLnB1c2goc3RhdGVDbGFzcyk7XG4gICAgICAgIHN0YXRlc01hcFtzdGF0ZU5hbWVdID0gc3RhdGVDbGFzcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBuZXdTdGF0ZXMgfTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUnVudGltZUluZm9Ub01ldGEobWV0YTogTWV0YURhdGFNb2RlbCwgcGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZVBhdGhzW21ldGEubmFtZSFdID0gcGF0aDtcbiAgICAvLyBUT0RPOiB2NCAtIHdlIHBsYW4gdG8gZ2V0IHJpZCBvZiB0aGUgcGF0aCBwcm9wZXJ0eSBiZWNhdXNlIGl0IGlzIG5vbi1kZXRlcm1pbmlzdGljXG4gICAgLy8gd2UgY2FuIGRvIHRoaXMgd2hlbiB3ZSBnZXQgcmlkIG9mIHRoZSBpbmNvcnJlY3RseSBleHBvc2VkIGdldFN0b3JlTWV0YWRhdGFcbiAgICAvLyBXZSB3aWxsIG5lZWQgdG8gY29tZSB1cCB3aXRoIGFuIGFsdGVybmF0aXZlIGluIHY0IGJlY2F1c2UgdGhpcyBpcyB1c2VkIGJ5IG1hbnkgcGx1Z2luc1xuICAgIG1ldGEucGF0aCA9IHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIHRoZSBtZXRob2QgY2hlY2tzIGlmIHRoZSBzdGF0ZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSB0cmVlXG4gICAqIGFuZCBjb21wbGV0ZWQgdGhlIGxpZmUgY3ljbGVcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIHBhdGhcbiAgICovXG4gIHByaXZhdGUgaGFzQmVlbk1vdW50ZWRBbmRCb290c3RyYXBwZWQobmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZUlzQm9vdHN0cmFwcGVkSW5Jbml0aWFsU3RhdGU6IGJvb2xlYW4gPVxuICAgICAgZ2V0VmFsdWUodGhpcy5faW5pdGlhbFN0YXRlLCBwYXRoKSAhPT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLnN0YXRlc0J5TmFtZVtuYW1lXSAmJiB2YWx1ZUlzQm9vdHN0cmFwcGVkSW5Jbml0aWFsU3RhdGU7XG4gIH1cbn1cbiJdfQ==
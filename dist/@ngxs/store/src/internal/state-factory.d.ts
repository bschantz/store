import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxsConfig } from '../symbols';
import { MappedStore, StateClassInternal, StatesAndDefaults, StatesByName, RuntimeSelectorContext } from './internals';
import { InternalActions } from '../actions-stream';
import { InternalDispatchedActionResults } from '../internal/dispatcher';
import { StateContextFactory } from '../internal/state-context-factory';
/**
 * State factory class
 * @ignore
 */
export declare class StateFactory {
    private _injector;
    private _config;
    private _parentFactory;
    private _actions;
    private _actionResults;
    private _stateContextFactory;
    private _initialState;
    private _connected;
    constructor(_injector: Injector, _config: NgxsConfig, _parentFactory: StateFactory, _actions: InternalActions, _actionResults: InternalDispatchedActionResults, _stateContextFactory: StateContextFactory, _initialState: any);
    private _states;
    get states(): MappedStore[];
    private _statesByName;
    get statesByName(): StatesByName;
    private _statePaths;
    private get statePaths();
    getRuntimeSelectorContext: () => RuntimeSelectorContext;
    private static cloneDefaults;
    private static checkStatesAreValid;
    /**
     * Add a new state to the global defs.
     */
    add(stateClasses: StateClassInternal[]): MappedStore[];
    /**
     * Add a set of states to the store and return the defaults
     */
    addAndReturnDefaults(stateClasses: StateClassInternal[]): StatesAndDefaults;
    /**
     * Bind the actions to the handlers
     */
    connectActionHandlers(): void;
    /**
     * Invoke actions on the states.
     */
    invokeActions(actions$: InternalActions, action: any): Observable<unknown[]>;
    private addToStatesMap;
    private addRuntimeInfoToMeta;
    /**
     * @description
     * the method checks if the state has already been added to the tree
     * and completed the life cycle
     * @param name
     * @param path
     */
    private hasBeenMountedAndBootstrapped;
}
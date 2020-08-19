import { StateContext, Store } from '@ngxs/store';
import { NgModuleRef } from '@angular/core';
export declare class HmrStateContextFactory<T, S> {
    store: Store;
    constructor(module: NgModuleRef<T>);
    /**
     * @description
     * must be taken out into  @ngxs/store/internals
     */
    createStateContext(): StateContext<S>;
}

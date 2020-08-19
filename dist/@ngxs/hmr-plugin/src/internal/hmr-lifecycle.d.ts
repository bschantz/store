import { NgxsBootstrapper } from '@ngxs/store/internals';
import { HmrOptionBuilder } from './hmr-options-builder';
import { HmrCallback, NgxsHmrLifeCycle } from '../symbols';
import { HmrStateContextFactory } from './hmr-state-context-factory';
import { HmrStorage } from './hmr-storage';
export declare class HmrLifecycle<T extends Partial<NgxsHmrLifeCycle<S>>, S> {
    private ngAppModule;
    private bootstrap;
    private storage;
    private context;
    private options;
    constructor(ngAppModule: T, bootstrap: NgxsBootstrapper, storage: HmrStorage<S>, context: HmrStateContextFactory<T, S>, options: HmrOptionBuilder);
    hmrNgxsStoreOnInit(hmrAfterOnInit: HmrCallback<S>): void;
    private getModuleHmrInitCallback;
    hmrNgxsStoreBeforeOnDestroy(): Partial<S>;
    private stateEventLoop;
    private detectIvyWithJIT;
}
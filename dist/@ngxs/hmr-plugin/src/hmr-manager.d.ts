import { NgModuleRef } from '@angular/core';
import { HmrStorage } from './internal/hmr-storage';
import { BootstrapModuleFn, NgxsHmrLifeCycle, NgxsHmrOptions, NgxsHmrSnapshot } from './symbols';
import { HmrStateContextFactory } from './internal/hmr-state-context-factory';
import { HmrOptionBuilder } from './internal/hmr-options-builder';
import { HmrLifecycle } from './internal/hmr-lifecycle';
export declare class HmrManager<T extends Partial<NgxsHmrLifeCycle<S>>, S = NgxsHmrSnapshot> {
    storage: HmrStorage<S>;
    context: HmrStateContextFactory<T, S>;
    lifecycle: HmrLifecycle<T, S>;
    optionsBuilder: HmrOptionBuilder;
    private ngModule;
    constructor(options: NgxsHmrOptions, storage: HmrStorage<S>);
    private get applicationRef();
    private get bootstrap();
    hmrModule(bootstrapFn: BootstrapModuleFn<T>, tick: () => void): Promise<NgModuleRef<T>>;
    beforeModuleBootstrap(): void;
    beforeModuleOnDestroy(): Partial<S>;
    createNewModule(): void;
    private createLifecycle;
    private cloneHostsBeforeDestroy;
    private removeNgStyles;
}

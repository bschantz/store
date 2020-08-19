import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgxsStoragePluginOptions } from './symbols';
export declare const USER_OPTIONS: InjectionToken<unknown>;
export declare class NgxsStoragePluginModule {
    static forRoot(options?: NgxsStoragePluginOptions): ModuleWithProviders<NgxsStoragePluginModule>;
}

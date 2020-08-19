import { NgModuleRef } from '@angular/core';
import { BootstrapModuleFn, NgxsHmrOptions, WebpackModule } from './symbols';
/**
 * Hot Module Replacement plugin for NGXS
 * @deprecated As of Angular v10, HMR is no longer supported and will be deprecated.
 * More information [here](https://www.ngxs.io/plugins/hmr).
 */
export declare function hmr<T>(webpackModule: WebpackModule, bootstrapFn: BootstrapModuleFn<T>, options?: NgxsHmrOptions): Promise<NgModuleRef<T>>;

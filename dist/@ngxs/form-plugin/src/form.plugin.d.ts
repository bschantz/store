import { NgxsNextPluginFn, NgxsPlugin } from '@ngxs/store';
export declare class NgxsFormPlugin implements NgxsPlugin {
    handle(state: any, event: any, next: NgxsNextPluginFn): any;
    private joinPathWithPropertyPath;
}

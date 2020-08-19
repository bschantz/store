import { NgxsPlugin, NgxsPluginFn } from './symbols';
export declare class PluginManager {
    private _parentManager;
    private _pluginHandlers;
    plugins: NgxsPluginFn[];
    constructor(_parentManager: PluginManager, _pluginHandlers: NgxsPlugin[]);
    private get rootPlugins();
    private registerHandlers;
    private getPluginHandlers;
}

import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgxsWebsocketPluginOptions } from './symbols';
export declare function websocketOptionsFactory(options: NgxsWebsocketPluginOptions): {
    url?: string | undefined;
    protocol?: string | string[] | undefined;
    binaryType?: "blob" | "arraybuffer" | undefined;
    typeKey: string;
    reconnectInterval: number;
    reconnectAttempts: number;
    serializer: ((data: any) => string) | ((value: any) => string);
    deserializer: ((e: MessageEvent) => any) | ((e: MessageEvent) => any);
};
export declare const USER_OPTIONS: InjectionToken<unknown>;
export declare class NgxsWebsocketPluginModule {
    static forRoot(options?: NgxsWebsocketPluginOptions): ModuleWithProviders<NgxsWebsocketPluginModule>;
}

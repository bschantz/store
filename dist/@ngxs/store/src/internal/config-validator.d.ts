import { NgxsConfig } from '../symbols';
import { HostEnvironment } from '../host-environment/host-environment';
export declare class ConfigValidator {
    private _host;
    private _config;
    constructor(_host: HostEnvironment, _config: NgxsConfig);
    private get isIncorrectProduction();
    private get isIncorrectDevelopment();
    verifyDevMode(): void;
}

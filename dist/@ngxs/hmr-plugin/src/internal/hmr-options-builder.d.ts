import { NgxsHmrOptions } from '../symbols';
export declare class HmrOptionBuilder {
    readonly deferTime: number;
    readonly autoClearLogs: boolean;
    constructor({ deferTime, autoClearLogs }: NgxsHmrOptions);
    clearLogs(): void;
}
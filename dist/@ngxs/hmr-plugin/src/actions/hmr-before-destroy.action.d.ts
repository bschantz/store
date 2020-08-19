import { NgxsHmrSnapshot } from '../symbols';
export declare class HmrBeforeDestroyAction {
    payload: Partial<NgxsHmrSnapshot>;
    static get type(): string;
    constructor(payload: Partial<NgxsHmrSnapshot>);
}

import { NgxsHmrSnapshot } from '../symbols';
export declare class HmrInitAction {
    payload: Partial<NgxsHmrSnapshot>;
    static get type(): string;
    constructor(payload: Partial<NgxsHmrSnapshot>);
}

export declare class HmrStorage<S> {
    private _snapshot;
    constructor(_snapshot?: Partial<S>);
    hasData(): boolean;
    get snapshot(): Partial<S>;
}

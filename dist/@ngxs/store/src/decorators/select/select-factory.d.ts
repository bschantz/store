import { Store } from '../../store';
import { NgxsConfig } from '../../symbols';
/**
 * Allows the select decorator to get access to the DI store.
 * @internal only use in @Select decorator
 * @ignore
 */
export declare class SelectFactory {
    static store: Store | null;
    static config: NgxsConfig | null;
    constructor(store: Store, config: NgxsConfig);
}
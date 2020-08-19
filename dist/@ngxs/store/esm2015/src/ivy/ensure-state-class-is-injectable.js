/**
 * @fileoverview added by tsickle
 * Generated from: src/ivy/ensure-state-class-is-injectable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ivyEnabledInDevMode$ } from './ivy-enabled-in-dev-mode';
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../configs/messages.config';
/**
 * All provided or injected tokens must have `\@Injectable` decorator
 * (previously, injected tokens without `\@Injectable` were allowed
 * if another decorator was used, e.g. pipes).
 * @param {?} target
 * @return {?}
 */
export function ensureStateClassIsInjectable(target) {
    // `ɵprov` is a static property added by the NGCC compiler. It always exists in
    // AOT mode because this property is added before runtime. If an application is running in
    // JIT mode then this property can be added by the `@Injectable()` decorator. The `@Injectable()`
    // decorator has to go after the `@State()` decorator, thus we prevent users from unwanted DI errors.
    ivyEnabledInDevMode$.subscribe((/**
     * @param {?} _ivyEnabledInDevMode
     * @return {?}
     */
    _ivyEnabledInDevMode => {
        if (_ivyEnabledInDevMode) {
            /** @type {?} */
            const ngInjectableDef = target.ɵprov;
            if (!ngInjectableDef) {
                // Don't warn if Ivy is disabled or `ɵprov` exists on the class
                console.warn(CONFIG_MESSAGES[VALIDATION_CODE.UNDECORATED_STATE_IN_IVY](target.name));
            }
        }
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLXN0YXRlLWNsYXNzLWlzLWluamVjdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvaXZ5L2Vuc3VyZS1zdGF0ZS1jbGFzcy1pcy1pbmplY3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7QUFPOUUsTUFBTSxVQUFVLDRCQUE0QixDQUFDLE1BQVc7SUFDdEQsK0VBQStFO0lBQy9FLDBGQUEwRjtJQUMxRixpR0FBaUc7SUFDakcscUdBQXFHO0lBQ3JHLG9CQUFvQixDQUFDLFNBQVM7Ozs7SUFBQyxvQkFBb0IsQ0FBQyxFQUFFO1FBQ3BELElBQUksb0JBQW9CLEVBQUU7O2tCQUNsQixlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUs7WUFDcEMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDcEIsK0RBQStEO2dCQUMvRCxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0RjtTQUNGO0lBQ0gsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXZ5RW5hYmxlZEluRGV2TW9kZSQgfSBmcm9tICcuL2l2eS1lbmFibGVkLWluLWRldi1tb2RlJztcbmltcG9ydCB7IENPTkZJR19NRVNTQUdFUywgVkFMSURBVElPTl9DT0RFIH0gZnJvbSAnLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xuXG4vKipcbiAqIEFsbCBwcm92aWRlZCBvciBpbmplY3RlZCB0b2tlbnMgbXVzdCBoYXZlIGBASW5qZWN0YWJsZWAgZGVjb3JhdG9yXG4gKiAocHJldmlvdXNseSwgaW5qZWN0ZWQgdG9rZW5zIHdpdGhvdXQgYEBJbmplY3RhYmxlYCB3ZXJlIGFsbG93ZWRcbiAqIGlmIGFub3RoZXIgZGVjb3JhdG9yIHdhcyB1c2VkLCBlLmcuIHBpcGVzKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVN0YXRlQ2xhc3NJc0luamVjdGFibGUodGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgLy8gYMm1cHJvdmAgaXMgYSBzdGF0aWMgcHJvcGVydHkgYWRkZWQgYnkgdGhlIE5HQ0MgY29tcGlsZXIuIEl0IGFsd2F5cyBleGlzdHMgaW5cbiAgLy8gQU9UIG1vZGUgYmVjYXVzZSB0aGlzIHByb3BlcnR5IGlzIGFkZGVkIGJlZm9yZSBydW50aW1lLiBJZiBhbiBhcHBsaWNhdGlvbiBpcyBydW5uaW5nIGluXG4gIC8vIEpJVCBtb2RlIHRoZW4gdGhpcyBwcm9wZXJ0eSBjYW4gYmUgYWRkZWQgYnkgdGhlIGBASW5qZWN0YWJsZSgpYCBkZWNvcmF0b3IuIFRoZSBgQEluamVjdGFibGUoKWBcbiAgLy8gZGVjb3JhdG9yIGhhcyB0byBnbyBhZnRlciB0aGUgYEBTdGF0ZSgpYCBkZWNvcmF0b3IsIHRodXMgd2UgcHJldmVudCB1c2VycyBmcm9tIHVud2FudGVkIERJIGVycm9ycy5cbiAgaXZ5RW5hYmxlZEluRGV2TW9kZSQuc3Vic2NyaWJlKF9pdnlFbmFibGVkSW5EZXZNb2RlID0+IHtcbiAgICBpZiAoX2l2eUVuYWJsZWRJbkRldk1vZGUpIHtcbiAgICAgIGNvbnN0IG5nSW5qZWN0YWJsZURlZiA9IHRhcmdldC7JtXByb3Y7XG4gICAgICBpZiAoIW5nSW5qZWN0YWJsZURlZikge1xuICAgICAgICAvLyBEb24ndCB3YXJuIGlmIEl2eSBpcyBkaXNhYmxlZCBvciBgybVwcm92YCBleGlzdHMgb24gdGhlIGNsYXNzXG4gICAgICAgIGNvbnNvbGUud2FybihDT05GSUdfTUVTU0FHRVNbVkFMSURBVElPTl9DT0RFLlVOREVDT1JBVEVEX1NUQVRFX0lOX0lWWV0odGFyZ2V0Lm5hbWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19
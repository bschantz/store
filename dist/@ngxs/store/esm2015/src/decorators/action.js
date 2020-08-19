/**
 * @fileoverview added by tsickle
 * Generated from: src/decorators/action.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureStoreMetadata } from '../internal/internals';
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../configs/messages.config';
/**
 * Decorates a method with a action information.
 * @param {?} actions
 * @param {?=} options
 * @return {?}
 */
export function Action(actions, options) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    (target, name) => {
        /** @type {?} */
        const isStaticMethod = target.hasOwnProperty('prototype');
        if (isStaticMethod) {
            throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.ACTION_DECORATOR]());
        }
        /** @type {?} */
        const meta = ensureStoreMetadata(target.constructor);
        if (!Array.isArray(actions)) {
            actions = [actions];
        }
        for (const action of actions) {
            /** @type {?} */
            const type = action.type;
            if (!meta.actions[type]) {
                meta.actions[type] = [];
            }
            meta.actions[type].push({
                fn: name,
                options: options || {},
                type
            });
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL2RlY29yYXRvcnMvYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQUs5RSxNQUFNLFVBQVUsTUFBTSxDQUNwQixPQUFrQyxFQUNsQyxPQUF1QjtJQUV2Qjs7Ozs7SUFBTyxDQUFDLE1BQVcsRUFBRSxJQUFxQixFQUFRLEVBQUU7O2NBQzVDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUV6RCxJQUFJLGNBQWMsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEU7O2NBRUssSUFBSSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7UUFFRCxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTs7a0JBQ3RCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSTtZQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDekI7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEIsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2dCQUN0QixJQUFJO2FBQ0wsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5zdXJlU3RvcmVNZXRhZGF0YSB9IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBBY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9zeW1ib2xzJztcbmltcG9ydCB7IENPTkZJR19NRVNTQUdFUywgVkFMSURBVElPTl9DT0RFIH0gZnJvbSAnLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xuXG4vKipcbiAqIERlY29yYXRlcyBhIG1ldGhvZCB3aXRoIGEgYWN0aW9uIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQWN0aW9uKFxuICBhY3Rpb25zOiBBY3Rpb25UeXBlIHwgQWN0aW9uVHlwZVtdLFxuICBvcHRpb25zPzogQWN0aW9uT3B0aW9uc1xuKTogTWV0aG9kRGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nIHwgc3ltYm9sKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaXNTdGF0aWNNZXRob2QgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xuXG4gICAgaWYgKGlzU3RhdGljTWV0aG9kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoQ09ORklHX01FU1NBR0VTW1ZBTElEQVRJT05fQ09ERS5BQ1RJT05fREVDT1JBVE9SXSgpKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRhID0gZW5zdXJlU3RvcmVNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFjdGlvbnMpKSB7XG4gICAgICBhY3Rpb25zID0gW2FjdGlvbnNdO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aW9uIG9mIGFjdGlvbnMpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBhY3Rpb24udHlwZTtcblxuICAgICAgaWYgKCFtZXRhLmFjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgbWV0YS5hY3Rpb25zW3R5cGVdID0gW107XG4gICAgICB9XG5cbiAgICAgIG1ldGEuYWN0aW9uc1t0eXBlXS5wdXNoKHtcbiAgICAgICAgZm46IG5hbWUsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgICAgIHR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
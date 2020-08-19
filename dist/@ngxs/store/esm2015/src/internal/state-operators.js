/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/state-operators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
/**
 * @template T
 * @param {?} val
 * @return {?}
 */
export function simplePatch(val) {
    return (/**
     * @param {?} existingState
     * @return {?}
     */
    (existingState) => {
        if (Array.isArray(val)) {
            throw new Error(MESSAGES[CODE.PATCHING_ARRAY]());
        }
        else if (typeof val !== 'object') {
            throw new Error(MESSAGES[CODE.PATCHING_PRIMITIVE]());
        }
        /** @type {?} */
        const newState = Object.assign({}, ((/** @type {?} */ (existingState))));
        for (const key in val) {
            // deep clone for patch compatibility
            // noinspection JSUnfilteredForInLoop (IDE)
            newState[key] = ((/** @type {?} */ (val)))[key];
        }
        return (/** @type {?} */ (newState));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtb3BlcmF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL2ludGVybmFsL3N0YXRlLW9wZXJhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxlQUFlLElBQUksUUFBUSxFQUMzQixlQUFlLElBQUksSUFBSSxFQUN4QixNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFHcEMsTUFBTSxVQUFVLFdBQVcsQ0FBSSxHQUFlO0lBQzVDOzs7O0lBQU8sQ0FBQyxhQUEwQixFQUFFLEVBQUU7UUFDcEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEQ7O2NBRUssUUFBUSxxQkFBYSxDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUU7UUFDbkQsS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDckIscUNBQXFDO1lBQ3JDLDJDQUEyQztZQUMzQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxHQUFHLEVBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxtQkFBQSxRQUFRLEVBQUssQ0FBQztJQUN2QixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ09ORklHX01FU1NBR0VTIGFzIE1FU1NBR0VTLFxuICBWQUxJREFUSU9OX0NPREUgYXMgQ09ERVxufSBmcm9tICcuLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9scyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVQYXRjaDxUPih2YWw6IFBhcnRpYWw8VD4pOiBTdGF0ZU9wZXJhdG9yPFQ+IHtcbiAgcmV0dXJuIChleGlzdGluZ1N0YXRlOiBSZWFkb25seTxUPikgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihNRVNTQUdFU1tDT0RFLlBBVENISU5HX0FSUkFZXSgpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTUVTU0FHRVNbQ09ERS5QQVRDSElOR19QUklNSVRJVkVdKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1N0YXRlOiBhbnkgPSB7IC4uLihleGlzdGluZ1N0YXRlIGFzIGFueSkgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgIC8vIGRlZXAgY2xvbmUgZm9yIHBhdGNoIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3AgKElERSlcbiAgICAgIG5ld1N0YXRlW2tleV0gPSAodmFsIGFzIGFueSlba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGUgYXMgVDtcbiAgfTtcbn1cbiJdfQ==
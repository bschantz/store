/**
 * @fileoverview added by tsickle
 * Generated from: src/internals.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const repeat = (/**
 * @param {?} str
 * @param {?} times
 * @return {?}
 */
(str, times) => new Array(times + 1).join(str));
/** @type {?} */
export const pad = (/**
 * @param {?} num
 * @param {?} maxLength
 * @return {?}
 */
(num, maxLength) => repeat('0', maxLength - num.toString().length) + num);
/**
 * @param {?} time
 * @return {?}
 */
export function formatTime(time) {
    return (pad(time.getHours(), 2) +
        `:` +
        pad(time.getMinutes(), 2) +
        `:` +
        pad(time.getSeconds(), 2) +
        `.` +
        pad(time.getMilliseconds(), 3));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbG9nZ2VyLXBsdWdpbi9zcmMvaW50ZXJuYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sT0FBTyxNQUFNOzs7OztBQUFHLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFcEYsTUFBTSxPQUFPLEdBQUc7Ozs7O0FBQUcsQ0FBQyxHQUFXLEVBQUUsU0FBaUIsRUFBRSxFQUFFLENBQ3BELE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUE7Ozs7O0FBRXRELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBVTtJQUNuQyxPQUFPLENBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkIsR0FBRztRQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLEdBQUc7UUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QixHQUFHO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDL0IsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVwZWF0ID0gKHN0cjogc3RyaW5nLCB0aW1lczogbnVtYmVyKSA9PiBuZXcgQXJyYXkodGltZXMgKyAxKS5qb2luKHN0cik7XG5cbmV4cG9ydCBjb25zdCBwYWQgPSAobnVtOiBudW1iZXIsIG1heExlbmd0aDogbnVtYmVyKSA9PlxuICByZXBlYXQoJzAnLCBtYXhMZW5ndGggLSBudW0udG9TdHJpbmcoKS5sZW5ndGgpICsgbnVtO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lOiBEYXRlKSB7XG4gIHJldHVybiAoXG4gICAgcGFkKHRpbWUuZ2V0SG91cnMoKSwgMikgK1xuICAgIGA6YCArXG4gICAgcGFkKHRpbWUuZ2V0TWludXRlcygpLCAyKSArXG4gICAgYDpgICtcbiAgICBwYWQodGltZS5nZXRTZWNvbmRzKCksIDIpICtcbiAgICBgLmAgK1xuICAgIHBhZCh0aW1lLmdldE1pbGxpc2Vjb25kcygpLCAzKVxuICApO1xufVxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: src/utils/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the type from an action instance/class.
 * @ignore
 * @param {?} action
 * @return {?}
 */
export function getActionTypeFromInstance(action) {
    if (action.constructor && action.constructor.type) {
        return action.constructor.type;
    }
    else {
        return action.type;
    }
}
/**
 * Matches a action
 * @ignore
 * @param {?} action1
 * @return {?}
 */
export function actionMatcher(action1) {
    /** @type {?} */
    const type1 = getActionTypeFromInstance(action1);
    return (/**
     * @param {?} action2
     * @return {?}
     */
    function (action2) {
        return type1 === getActionTypeFromInstance(action2);
    });
}
/**
 * Set a deeply nested value. Example:
 *
 *   setValue({ foo: { bar: { eat: false } } },
 *      'foo.bar.eat', true) //=> { foo: { bar: { eat: true } } }
 *
 * While it traverses it also creates new objects from top down.
 *
 * @ignore
 * @type {?}
 */
export const setValue = (/**
 * @param {?} obj
 * @param {?} prop
 * @param {?} val
 * @return {?}
 */
(obj, prop, val) => {
    obj = Object.assign({}, obj);
    /** @type {?} */
    const split = prop.split('.');
    /** @type {?} */
    const lastIndex = split.length - 1;
    split.reduce((/**
     * @param {?} acc
     * @param {?} part
     * @param {?} index
     * @return {?}
     */
    (acc, part, index) => {
        if (index === lastIndex) {
            acc[part] = val;
        }
        else {
            acc[part] = Array.isArray(acc[part]) ? acc[part].slice() : Object.assign({}, acc[part]);
        }
        return acc && acc[part];
    }), obj);
    return obj;
});
/**
 * Get a deeply nested value. Example:
 *
 *    getValue({ foo: bar: [] }, 'foo.bar') //=> []
 *
 * @ignore
 * @type {?}
 */
export const getValue = (/**
 * @param {?} obj
 * @param {?} prop
 * @return {?}
 */
(obj, prop) => prop.split('.').reduce((/**
 * @param {?} acc
 * @param {?} part
 * @return {?}
 */
(acc, part) => acc && acc[part]), obj));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxNQUFNLFVBQVUseUJBQXlCLENBQUMsTUFBVztJQUNuRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7UUFDakQsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNoQztTQUFNO1FBQ0wsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxhQUFhLENBQUMsT0FBWTs7VUFDbEMsS0FBSyxHQUFHLHlCQUF5QixDQUFDLE9BQU8sQ0FBQztJQUVoRDs7OztJQUFPLFVBQVMsT0FBWTtRQUMxQixPQUFPLEtBQUssS0FBSyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7QUFZRCxNQUFNLE9BQU8sUUFBUTs7Ozs7O0FBQUcsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLEdBQVEsRUFBRSxFQUFFO0lBQzNELEdBQUcscUJBQVEsR0FBRyxDQUFFLENBQUM7O1VBRVgsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztVQUN2QixTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBRWxDLEtBQUssQ0FBQyxNQUFNOzs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQkFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztTQUM3RTtRQUVELE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFFUixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQTs7Ozs7Ozs7O0FBU0QsTUFBTSxPQUFPLFFBQVE7Ozs7O0FBQUcsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFPLEVBQUUsQ0FDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNOzs7OztBQUFDLENBQUMsR0FBUSxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBmcm9tIGFuIGFjdGlvbiBpbnN0YW5jZS9jbGFzcy5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UoYWN0aW9uOiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBpZiAoYWN0aW9uLmNvbnN0cnVjdG9yICYmIGFjdGlvbi5jb25zdHJ1Y3Rvci50eXBlKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5jb25zdHJ1Y3Rvci50eXBlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhY3Rpb24udHlwZTtcbiAgfVxufVxuXG4vKipcbiAqIE1hdGNoZXMgYSBhY3Rpb25cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbk1hdGNoZXIoYWN0aW9uMTogYW55KSB7XG4gIGNvbnN0IHR5cGUxID0gZ2V0QWN0aW9uVHlwZUZyb21JbnN0YW5jZShhY3Rpb24xKTtcblxuICByZXR1cm4gZnVuY3Rpb24oYWN0aW9uMjogYW55KSB7XG4gICAgcmV0dXJuIHR5cGUxID09PSBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKGFjdGlvbjIpO1xuICB9O1xufVxuXG4vKipcbiAqIFNldCBhIGRlZXBseSBuZXN0ZWQgdmFsdWUuIEV4YW1wbGU6XG4gKlxuICogICBzZXRWYWx1ZSh7IGZvbzogeyBiYXI6IHsgZWF0OiBmYWxzZSB9IH0gfSxcbiAqICAgICAgJ2Zvby5iYXIuZWF0JywgdHJ1ZSkgLy89PiB7IGZvbzogeyBiYXI6IHsgZWF0OiB0cnVlIH0gfSB9XG4gKlxuICogV2hpbGUgaXQgdHJhdmVyc2VzIGl0IGFsc28gY3JlYXRlcyBuZXcgb2JqZWN0cyBmcm9tIHRvcCBkb3duLlxuICpcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFZhbHVlID0gKG9iajogYW55LCBwcm9wOiBzdHJpbmcsIHZhbDogYW55KSA9PiB7XG4gIG9iaiA9IHsgLi4ub2JqIH07XG5cbiAgY29uc3Qgc3BsaXQgPSBwcm9wLnNwbGl0KCcuJyk7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHNwbGl0Lmxlbmd0aCAtIDE7XG5cbiAgc3BsaXQucmVkdWNlKChhY2MsIHBhcnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgIGFjY1twYXJ0XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW3BhcnRdID0gQXJyYXkuaXNBcnJheShhY2NbcGFydF0pID8gYWNjW3BhcnRdLnNsaWNlKCkgOiB7IC4uLmFjY1twYXJ0XSB9O1xuICAgIH1cblxuICAgIHJldHVybiBhY2MgJiYgYWNjW3BhcnRdO1xuICB9LCBvYmopO1xuXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIEdldCBhIGRlZXBseSBuZXN0ZWQgdmFsdWUuIEV4YW1wbGU6XG4gKlxuICogICAgZ2V0VmFsdWUoeyBmb286IGJhcjogW10gfSwgJ2Zvby5iYXInKSAvLz0+IFtdXG4gKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWUgPSAob2JqOiBhbnksIHByb3A6IHN0cmluZyk6IGFueSA9PlxuICBwcm9wLnNwbGl0KCcuJykucmVkdWNlKChhY2M6IGFueSwgcGFydDogc3RyaW5nKSA9PiBhY2MgJiYgYWNjW3BhcnRdLCBvYmopO1xuIl19
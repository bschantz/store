/**
 * @fileoverview added by tsickle
 * Generated from: src/utils/compose.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Composes a array of functions from left to right. Example:
 *
 *      compose([fn, final])(state, action);
 *
 * then the funcs have a signature like:
 *
 *      function fn (state, action, next) {
 *          console.log('here', state, action, next);
 *          return next(state, action);
 *      }
 *
 *      function final (state, action) {
 *          console.log('here', state, action);
 *          return state;
 *      }
 *
 * the last function should not call `next`.
 *
 * @ignore
 * @type {?}
 */
export const compose = (/**
 * @param {?} funcs
 * @return {?}
 */
(funcs) => (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    /** @type {?} */
    const curr = (/** @type {?} */ (funcs.shift()));
    return curr(...args, (/**
     * @param {...?} nextArgs
     * @return {?}
     */
    (...nextArgs) => compose(funcs)(...nextArgs)));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy91dGlscy9jb21wb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxNQUFNLE9BQU8sT0FBTzs7OztBQUFHLENBQUMsS0FBZ0IsRUFBRSxFQUFFOzs7O0FBQUMsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFOztVQUN4RCxJQUFJLEdBQUcsbUJBQUEsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFDO0lBQzNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSTs7OztJQUFFLENBQUMsR0FBRyxRQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFDLENBQUM7QUFDNUUsQ0FBQyxDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBTdGF0ZUZuID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5cbi8qKlxuICogQ29tcG9zZXMgYSBhcnJheSBvZiBmdW5jdGlvbnMgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBFeGFtcGxlOlxuICpcbiAqICAgICAgY29tcG9zZShbZm4sIGZpbmFsXSkoc3RhdGUsIGFjdGlvbik7XG4gKlxuICogdGhlbiB0aGUgZnVuY3MgaGF2ZSBhIHNpZ25hdHVyZSBsaWtlOlxuICpcbiAqICAgICAgZnVuY3Rpb24gZm4gKHN0YXRlLCBhY3Rpb24sIG5leHQpIHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJywgc3RhdGUsIGFjdGlvbiwgbmV4dCk7XG4gKiAgICAgICAgICByZXR1cm4gbmV4dChzdGF0ZSwgYWN0aW9uKTtcbiAqICAgICAgfVxuICpcbiAqICAgICAgZnVuY3Rpb24gZmluYWwgKHN0YXRlLCBhY3Rpb24pIHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJywgc3RhdGUsIGFjdGlvbik7XG4gKiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gKiAgICAgIH1cbiAqXG4gKiB0aGUgbGFzdCBmdW5jdGlvbiBzaG91bGQgbm90IGNhbGwgYG5leHRgLlxuICpcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBvc2UgPSAoZnVuY3M6IFN0YXRlRm5bXSkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIGNvbnN0IGN1cnIgPSBmdW5jcy5zaGlmdCgpITtcbiAgcmV0dXJuIGN1cnIoLi4uYXJncywgKC4uLm5leHRBcmdzOiBhbnlbXSkgPT4gY29tcG9zZShmdW5jcykoLi4ubmV4dEFyZ3MpKTtcbn07XG4iXX0=
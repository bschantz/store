/**
 * @fileoverview added by tsickle
 * Generated from: compose.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {...?} operators
 * @return {?}
 */
export function compose(...operators) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function composeOperator(existing) {
        return operators.reduce((/**
         * @param {?} accumulator
         * @param {?} operator
         * @return {?}
         */
        (accumulator, operator) => operator(accumulator)), existing);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL29wZXJhdG9ycy9zcmMvY29tcG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLE9BQU8sQ0FBSSxHQUFHLFNBQTZCO0lBQ3pEOzs7O0lBQU8sU0FBUyxlQUFlLENBQUMsUUFBcUI7UUFDbkQsT0FBTyxTQUFTLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRSxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVPcGVyYXRvciB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2U8VD4oLi4ub3BlcmF0b3JzOiBTdGF0ZU9wZXJhdG9yPFQ+W10pOiBTdGF0ZU9wZXJhdG9yPFQ+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2VPcGVyYXRvcihleGlzdGluZzogUmVhZG9ubHk8VD4pOiBUIHtcbiAgICByZXR1cm4gb3BlcmF0b3JzLnJlZHVjZSgoYWNjdW11bGF0b3IsIG9wZXJhdG9yKSA9PiBvcGVyYXRvcihhY2N1bXVsYXRvciksIGV4aXN0aW5nKTtcbiAgfTtcbn1cbiJdfQ==
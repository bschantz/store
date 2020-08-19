/**
 * @fileoverview added by tsickle
 * Generated from: src/operators/leave-ngxs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
/**
 * Returns operator that will run
 * `subscribe` outside of the ngxs execution context
 * @template T
 * @param {?} ngxsExecutionStrategy
 * @return {?}
 */
export function leaveNgxs(ngxsExecutionStrategy) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new Observable((/**
         * @param {?} sink
         * @return {?}
         */
        (sink) => {
            return source.subscribe({
                /**
                 * @param {?} value
                 * @return {?}
                 */
                next(value) {
                    ngxsExecutionStrategy.leave((/**
                     * @return {?}
                     */
                    () => sink.next(value)));
                },
                /**
                 * @param {?} error
                 * @return {?}
                 */
                error(error) {
                    ngxsExecutionStrategy.leave((/**
                     * @return {?}
                     */
                    () => sink.error(error)));
                },
                /**
                 * @return {?}
                 */
                complete() {
                    ngxsExecutionStrategy.leave((/**
                     * @return {?}
                     */
                    () => sink.complete()));
                }
            });
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmUtbmd4cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9vcGVyYXRvcnMvbGVhdmUtbmd4cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBNEIsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztBQU90RSxNQUFNLFVBQVUsU0FBUyxDQUN2QixxQkFBNEM7SUFFNUM7Ozs7SUFBTyxDQUFDLE1BQXFCLEVBQUUsRUFBRTtRQUMvQixPQUFPLElBQUksVUFBVTs7OztRQUFDLENBQUMsSUFBaUIsRUFBRSxFQUFFO1lBQzFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQzs7Ozs7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLO29CQUNSLHFCQUFxQixDQUFDLEtBQUs7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7Z0JBQ3RELENBQUM7Ozs7O2dCQUNELEtBQUssQ0FBQyxLQUFLO29CQUNULHFCQUFxQixDQUFDLEtBQUs7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7Z0JBQ3ZELENBQUM7Ozs7Z0JBQ0QsUUFBUTtvQkFDTixxQkFBcUIsQ0FBQyxLQUFLOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUM7Z0JBQ3JELENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hzRXhlY3V0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi9leGVjdXRpb24vc3ltYm9scyc7XG5cbi8qKlxuICogUmV0dXJucyBvcGVyYXRvciB0aGF0IHdpbGwgcnVuXG4gKiBgc3Vic2NyaWJlYCBvdXRzaWRlIG9mIHRoZSBuZ3hzIGV4ZWN1dGlvbiBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZWF2ZU5neHM8VD4oXG4gIG5neHNFeGVjdXRpb25TdHJhdGVneTogTmd4c0V4ZWN1dGlvblN0cmF0ZWd5XG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc2luazogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dCh2YWx1ZSkge1xuICAgICAgICAgIG5neHNFeGVjdXRpb25TdHJhdGVneS5sZWF2ZSgoKSA9PiBzaW5rLm5leHQodmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICBuZ3hzRXhlY3V0aW9uU3RyYXRlZ3kubGVhdmUoKCkgPT4gc2luay5lcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgICBuZ3hzRXhlY3V0aW9uU3RyYXRlZ3kubGVhdmUoKCkgPT4gc2luay5jb21wbGV0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG4iXX0=
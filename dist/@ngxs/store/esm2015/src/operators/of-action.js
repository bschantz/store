/**
 * @fileoverview added by tsickle
 * Generated from: src/operators/of-action.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map, filter } from 'rxjs/operators';
import { getActionTypeFromInstance } from '../utils/utils';
/**
 * @record
 * @template T, E
 */
export function ActionCompletion() { }
if (false) {
    /** @type {?} */
    ActionCompletion.prototype.action;
    /** @type {?} */
    ActionCompletion.prototype.result;
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will grab actions that have just been dispatched as well as actions that have completed
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofAction(...allowedTypes) {
    return ofActionOperator(allowedTypes);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been dispatched
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionDispatched(...allowedTypes) {
    return ofActionOperator(allowedTypes, ["DISPATCHED" /* Dispatched */]);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been successfully completed
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionSuccessful(...allowedTypes) {
    return ofActionOperator(allowedTypes, ["SUCCESSFUL" /* Successful */]);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been canceled
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionCanceled(...allowedTypes) {
    return ofActionOperator(allowedTypes, ["CANCELED" /* Canceled */]);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been completed
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionCompleted(...allowedTypes) {
    /** @type {?} */
    const allowedStatuses = [
        "SUCCESSFUL" /* Successful */,
        "CANCELED" /* Canceled */,
        "ERRORED" /* Errored */
    ];
    return ofActionOperator(allowedTypes, allowedStatuses, mapActionResult);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just thrown an error
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionErrored(...allowedTypes) {
    return ofActionOperator(allowedTypes, ["ERRORED" /* Errored */]);
}
/**
 * @param {?} allowedTypes
 * @param {?=} statuses
 * @param {?=} mapOperator
 * @return {?}
 */
function ofActionOperator(allowedTypes, statuses, 
// This actually could've been `OperatorFunction<ActionContext, ActionCompletion | any>`,
// since it maps either to `ctx.action` OR to `ActionCompletion`. But `ActionCompleteion | any`
// defaults to `any`, thus there is no sense from union type.
mapOperator = mapAction) {
    /** @type {?} */
    const allowedMap = createAllowedActionTypesMap(allowedTypes);
    /** @type {?} */
    const allowedStatusMap = statuses && createAllowedStatusesMap(statuses);
    return (/**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return o.pipe(filterStatus(allowedMap, allowedStatusMap), mapOperator());
    });
}
/**
 * @param {?} allowedTypes
 * @param {?=} allowedStatuses
 * @return {?}
 */
function filterStatus(allowedTypes, allowedStatuses) {
    return filter((/**
     * @param {?} ctx
     * @return {?}
     */
    (ctx) => {
        /** @type {?} */
        const actionType = (/** @type {?} */ (getActionTypeFromInstance(ctx.action)));
        /** @type {?} */
        const typeMatch = allowedTypes[actionType];
        /** @type {?} */
        const statusMatch = allowedStatuses ? allowedStatuses[ctx.status] : true;
        return typeMatch && statusMatch;
    }));
}
/**
 * @return {?}
 */
function mapActionResult() {
    return map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ action, status, error }) => {
        return (/** @type {?} */ ({
            action,
            result: {
                successful: "SUCCESSFUL" /* Successful */ === status,
                canceled: "CANCELED" /* Canceled */ === status,
                error
            }
        }));
    }));
}
/**
 * @template T
 * @return {?}
 */
function mapAction() {
    return map((/**
     * @param {?} ctx
     * @return {?}
     */
    (ctx) => (/** @type {?} */ (ctx.action))));
}
/**
 * @record
 */
function FilterMap() { }
/**
 * @param {?} types
 * @return {?}
 */
function createAllowedActionTypesMap(types) {
    return types.reduce((/**
     * @param {?} filterMap
     * @param {?} klass
     * @return {?}
     */
    (filterMap, klass) => {
        filterMap[(/** @type {?} */ (getActionTypeFromInstance(klass)))] = true;
        return filterMap;
    }), (/** @type {?} */ ({})));
}
/**
 * @param {?} statuses
 * @return {?}
 */
function createAllowedStatusesMap(statuses) {
    return statuses.reduce((/**
     * @param {?} filterMap
     * @param {?} status
     * @return {?}
     */
    (filterMap, status) => {
        filterMap[status] = true;
        return filterMap;
    }), (/** @type {?} */ ({})));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL29wZXJhdG9ycy9vZi1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUczRCxzQ0FPQzs7O0lBTkMsa0NBQVU7O0lBQ1Ysa0NBSUU7Ozs7Ozs7OztBQWFKLE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBRyxZQUEwQjtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxHQUFHLFlBQTBCO0lBRTdCLE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLCtCQUF5QixDQUFDLENBQUM7QUFDbkUsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLEdBQUcsWUFBMEI7SUFFN0IsT0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsK0JBQXlCLENBQUMsQ0FBQztBQUNuRSxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsR0FBRyxZQUEwQjtJQUU3QixPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSwyQkFBdUIsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixHQUFHLFlBQTBCOztVQUV2QixlQUFlLEdBQUc7Ozs7S0FJdkI7SUFDRCxPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDMUUsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsZUFBZSxDQUM3QixHQUFHLFlBQTBCO0lBRTdCLE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLHlCQUFzQixDQUFDLENBQUM7QUFDaEUsQ0FBQzs7Ozs7OztBQUVELFNBQVMsZ0JBQWdCLENBQ3ZCLFlBQTBCLEVBQzFCLFFBQXlCO0FBQ3pCLHlGQUF5RjtBQUN6RiwrRkFBK0Y7QUFDL0YsNkRBQTZEO0FBQzdELGNBQTBELFNBQVM7O1VBRTdELFVBQVUsR0FBRywyQkFBMkIsQ0FBQyxZQUFZLENBQUM7O1VBQ3RELGdCQUFnQixHQUFHLFFBQVEsSUFBSSx3QkFBd0IsQ0FBQyxRQUFRLENBQUM7SUFDdkU7Ozs7SUFBTyxVQUFTLENBQTRCO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxTQUFTLFlBQVksQ0FBQyxZQUF1QixFQUFFLGVBQTJCO0lBQ3hFLE9BQU8sTUFBTTs7OztJQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFOztjQUM3QixVQUFVLEdBQUcsbUJBQUEseUJBQXlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDOztjQUNuRCxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQzs7Y0FDcEMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN4RSxPQUFPLFNBQVMsSUFBSSxXQUFXLENBQUM7SUFDbEMsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7O0FBRUQsU0FBUyxlQUFlO0lBQ3RCLE9BQU8sR0FBRzs7OztJQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBaUIsRUFBRSxFQUFFO1FBQ3RELE9BQU8sbUJBQWtCO1lBQ3ZCLE1BQU07WUFDTixNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLGtDQUE0QixNQUFNO2dCQUM5QyxRQUFRLEVBQUUsOEJBQTBCLE1BQU07Z0JBQzFDLEtBQUs7YUFDTjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxTQUFTLFNBQVM7SUFDaEIsT0FBTyxHQUFHOzs7O0lBQUMsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxtQkFBRyxHQUFHLENBQUMsTUFBTSxFQUFBLEVBQUMsQ0FBQztBQUNwRCxDQUFDOzs7O0FBRUQsd0JBRUM7Ozs7O0FBRUQsU0FBUywyQkFBMkIsQ0FBQyxLQUFtQjtJQUN0RCxPQUFPLEtBQUssQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsU0FBb0IsRUFBRSxLQUFVLEVBQUUsRUFBRTtRQUN2RCxTQUFTLENBQUMsbUJBQUEseUJBQXlCLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDLEdBQUUsbUJBQVcsRUFBRSxFQUFBLENBQUMsQ0FBQztBQUNwQixDQUFDOzs7OztBQUVELFNBQVMsd0JBQXdCLENBQUMsUUFBd0I7SUFDeEQsT0FBTyxRQUFRLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLFNBQW9CLEVBQUUsTUFBb0IsRUFBRSxFQUFFO1FBQ3BFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQyxHQUFFLG1CQUFXLEVBQUUsRUFBQSxDQUFDLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vYWN0aW9ucy9zeW1ib2xzJztcbmltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBBY3Rpb25Db250ZXh0LCBBY3Rpb25TdGF0dXMgfSBmcm9tICcuLi9hY3Rpb25zLXN0cmVhbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ29tcGxldGlvbjxUID0gYW55LCBFID0gRXJyb3I+IHtcbiAgYWN0aW9uOiBUO1xuICByZXN1bHQ6IHtcbiAgICBzdWNjZXNzZnVsOiBib29sZWFuO1xuICAgIGNhbmNlbGVkOiBib29sZWFuO1xuICAgIGVycm9yPzogRTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uPFQgPSBhbnk+KGFsbG93ZWRUeXBlOiBBY3Rpb25UeXBlKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBUPjtcbmV4cG9ydCBmdW5jdGlvbiBvZkFjdGlvbjxUID0gYW55PihcbiAgLi4uYWxsb3dlZFR5cGVzOiBBY3Rpb25UeXBlW11cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgVD47XG5cbi8qKlxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxuICpcbiAqIFRoaXMgd2lsbCBncmFiIGFjdGlvbnMgdGhhdCBoYXZlIGp1c3QgYmVlbiBkaXNwYXRjaGVkIGFzIHdlbGwgYXMgYWN0aW9ucyB0aGF0IGhhdmUgY29tcGxldGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvZkFjdGlvbiguLi5hbGxvd2VkVHlwZXM6IEFjdGlvblR5cGVbXSk6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgYW55PiB7XG4gIHJldHVybiBvZkFjdGlvbk9wZXJhdG9yKGFsbG93ZWRUeXBlcyk7XG59XG5cbi8qKlxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxuICpcbiAqIFRoaXMgd2lsbCBPTkxZIGdyYWIgYWN0aW9ucyB0aGF0IGhhdmUganVzdCBiZWVuIGRpc3BhdGNoZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uRGlzcGF0Y2hlZChcbiAgLi4uYWxsb3dlZFR5cGVzOiBBY3Rpb25UeXBlW11cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgYW55PiB7XG4gIHJldHVybiBvZkFjdGlvbk9wZXJhdG9yKGFsbG93ZWRUeXBlcywgW0FjdGlvblN0YXR1cy5EaXNwYXRjaGVkXSk7XG59XG5cbi8qKlxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxuICpcbiAqIFRoaXMgd2lsbCBPTkxZIGdyYWIgYWN0aW9ucyB0aGF0IGhhdmUganVzdCBiZWVuIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uU3VjY2Vzc2Z1bChcbiAgLi4uYWxsb3dlZFR5cGVzOiBBY3Rpb25UeXBlW11cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgYW55PiB7XG4gIHJldHVybiBvZkFjdGlvbk9wZXJhdG9yKGFsbG93ZWRUeXBlcywgW0FjdGlvblN0YXR1cy5TdWNjZXNzZnVsXSk7XG59XG5cbi8qKlxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxuICpcbiAqIFRoaXMgd2lsbCBPTkxZIGdyYWIgYWN0aW9ucyB0aGF0IGhhdmUganVzdCBiZWVuIGNhbmNlbGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvZkFjdGlvbkNhbmNlbGVkKFxuICAuLi5hbGxvd2VkVHlwZXM6IEFjdGlvblR5cGVbXVxuKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBhbnk+IHtcbiAgcmV0dXJuIG9mQWN0aW9uT3BlcmF0b3IoYWxsb3dlZFR5cGVzLCBbQWN0aW9uU3RhdHVzLkNhbmNlbGVkXSk7XG59XG5cbi8qKlxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxuICpcbiAqIFRoaXMgd2lsbCBPTkxZIGdyYWIgYWN0aW9ucyB0aGF0IGhhdmUganVzdCBiZWVuIGNvbXBsZXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZBY3Rpb25Db21wbGV0ZWQoXG4gIC4uLmFsbG93ZWRUeXBlczogQWN0aW9uVHlwZVtdXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbkNvbnRleHQsIEFjdGlvbkNvbXBsZXRpb24+IHtcbiAgY29uc3QgYWxsb3dlZFN0YXR1c2VzID0gW1xuICAgIEFjdGlvblN0YXR1cy5TdWNjZXNzZnVsLFxuICAgIEFjdGlvblN0YXR1cy5DYW5jZWxlZCxcbiAgICBBY3Rpb25TdGF0dXMuRXJyb3JlZFxuICBdO1xuICByZXR1cm4gb2ZBY3Rpb25PcGVyYXRvcihhbGxvd2VkVHlwZXMsIGFsbG93ZWRTdGF0dXNlcywgbWFwQWN0aW9uUmVzdWx0KTtcbn1cblxuLyoqXG4gKiBSeEpTIG9wZXJhdG9yIGZvciBzZWxlY3Rpbmcgb3V0IHNwZWNpZmljIGFjdGlvbnMuXG4gKlxuICogVGhpcyB3aWxsIE9OTFkgZ3JhYiBhY3Rpb25zIHRoYXQgaGF2ZSBqdXN0IHRocm93biBhbiBlcnJvclxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZBY3Rpb25FcnJvcmVkKFxuICAuLi5hbGxvd2VkVHlwZXM6IEFjdGlvblR5cGVbXVxuKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBhbnk+IHtcbiAgcmV0dXJuIG9mQWN0aW9uT3BlcmF0b3IoYWxsb3dlZFR5cGVzLCBbQWN0aW9uU3RhdHVzLkVycm9yZWRdKTtcbn1cblxuZnVuY3Rpb24gb2ZBY3Rpb25PcGVyYXRvcihcbiAgYWxsb3dlZFR5cGVzOiBBY3Rpb25UeXBlW10sXG4gIHN0YXR1c2VzPzogQWN0aW9uU3RhdHVzW10sXG4gIC8vIFRoaXMgYWN0dWFsbHkgY291bGQndmUgYmVlbiBgT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBBY3Rpb25Db21wbGV0aW9uIHwgYW55PmAsXG4gIC8vIHNpbmNlIGl0IG1hcHMgZWl0aGVyIHRvIGBjdHguYWN0aW9uYCBPUiB0byBgQWN0aW9uQ29tcGxldGlvbmAuIEJ1dCBgQWN0aW9uQ29tcGxldGVpb24gfCBhbnlgXG4gIC8vIGRlZmF1bHRzIHRvIGBhbnlgLCB0aHVzIHRoZXJlIGlzIG5vIHNlbnNlIGZyb20gdW5pb24gdHlwZS5cbiAgbWFwT3BlcmF0b3I6ICgpID0+IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgYW55PiA9IG1hcEFjdGlvblxuKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBhbnk+IHtcbiAgY29uc3QgYWxsb3dlZE1hcCA9IGNyZWF0ZUFsbG93ZWRBY3Rpb25UeXBlc01hcChhbGxvd2VkVHlwZXMpO1xuICBjb25zdCBhbGxvd2VkU3RhdHVzTWFwID0gc3RhdHVzZXMgJiYgY3JlYXRlQWxsb3dlZFN0YXR1c2VzTWFwKHN0YXR1c2VzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG86IE9ic2VydmFibGU8QWN0aW9uQ29udGV4dD4pIHtcbiAgICByZXR1cm4gby5waXBlKGZpbHRlclN0YXR1cyhhbGxvd2VkTWFwLCBhbGxvd2VkU3RhdHVzTWFwKSwgbWFwT3BlcmF0b3IoKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlclN0YXR1cyhhbGxvd2VkVHlwZXM6IEZpbHRlck1hcCwgYWxsb3dlZFN0YXR1c2VzPzogRmlsdGVyTWFwKSB7XG4gIHJldHVybiBmaWx0ZXIoKGN0eDogQWN0aW9uQ29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGFjdGlvblR5cGUgPSBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKGN0eC5hY3Rpb24pITtcbiAgICBjb25zdCB0eXBlTWF0Y2ggPSBhbGxvd2VkVHlwZXNbYWN0aW9uVHlwZV07XG4gICAgY29uc3Qgc3RhdHVzTWF0Y2ggPSBhbGxvd2VkU3RhdHVzZXMgPyBhbGxvd2VkU3RhdHVzZXNbY3R4LnN0YXR1c10gOiB0cnVlO1xuICAgIHJldHVybiB0eXBlTWF0Y2ggJiYgc3RhdHVzTWF0Y2g7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXBBY3Rpb25SZXN1bHQoKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBBY3Rpb25Db21wbGV0aW9uPiB7XG4gIHJldHVybiBtYXAoKHsgYWN0aW9uLCBzdGF0dXMsIGVycm9yIH06IEFjdGlvbkNvbnRleHQpID0+IHtcbiAgICByZXR1cm4gPEFjdGlvbkNvbXBsZXRpb24+e1xuICAgICAgYWN0aW9uLFxuICAgICAgcmVzdWx0OiB7XG4gICAgICAgIHN1Y2Nlc3NmdWw6IEFjdGlvblN0YXR1cy5TdWNjZXNzZnVsID09PSBzdGF0dXMsXG4gICAgICAgIGNhbmNlbGVkOiBBY3Rpb25TdGF0dXMuQ2FuY2VsZWQgPT09IHN0YXR1cyxcbiAgICAgICAgZXJyb3JcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFwQWN0aW9uPFQgPSBhbnk+KCk6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgVD4ge1xuICByZXR1cm4gbWFwKChjdHg6IEFjdGlvbkNvbnRleHQpID0+IDxUPmN0eC5hY3Rpb24pO1xufVxuXG5pbnRlcmZhY2UgRmlsdGVyTWFwIHtcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWxsb3dlZEFjdGlvblR5cGVzTWFwKHR5cGVzOiBBY3Rpb25UeXBlW10pOiBGaWx0ZXJNYXAge1xuICByZXR1cm4gdHlwZXMucmVkdWNlKChmaWx0ZXJNYXA6IEZpbHRlck1hcCwga2xhc3M6IGFueSkgPT4ge1xuICAgIGZpbHRlck1hcFtnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKGtsYXNzKSFdID0gdHJ1ZTtcbiAgICByZXR1cm4gZmlsdGVyTWFwO1xuICB9LCA8RmlsdGVyTWFwPnt9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWxsb3dlZFN0YXR1c2VzTWFwKHN0YXR1c2VzOiBBY3Rpb25TdGF0dXNbXSk6IEZpbHRlck1hcCB7XG4gIHJldHVybiBzdGF0dXNlcy5yZWR1Y2UoKGZpbHRlck1hcDogRmlsdGVyTWFwLCBzdGF0dXM6IEFjdGlvblN0YXR1cykgPT4ge1xuICAgIGZpbHRlck1hcFtzdGF0dXNdID0gdHJ1ZTtcbiAgICByZXR1cm4gZmlsdGVyTWFwO1xuICB9LCA8RmlsdGVyTWFwPnt9KTtcbn1cbiJdfQ==
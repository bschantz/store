/**
 * @fileoverview added by tsickle
 * Generated from: src/action-logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getActionTypeFromInstance } from '@ngxs/store';
import { formatTime } from './internals';
export class ActionLogger {
    /**
     * @param {?} action
     * @param {?} store
     * @param {?} logWriter
     */
    constructor(action, store, logWriter) {
        this.action = action;
        this.store = store;
        this.logWriter = logWriter;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    dispatched(state) {
        /** @type {?} */
        const actionName = getActionTypeFromInstance(this.action);
        /** @type {?} */
        const formattedTime = formatTime(new Date());
        /** @type {?} */
        const message = `action ${actionName} @ ${formattedTime}`;
        this.logWriter.startGroup(message);
        // print payload only if at least one property is supplied
        if (this._hasPayload(this.action)) {
            this.logWriter.logGrey('payload', Object.assign({}, this.action));
        }
        this.logWriter.logGrey('prev state', state);
    }
    /**
     * @param {?} nextState
     * @return {?}
     */
    completed(nextState) {
        this.logWriter.logGreen('next state', nextState);
        this.logWriter.endGroup();
    }
    /**
     * @param {?} error
     * @return {?}
     */
    errored(error) {
        this.logWriter.logRedish('next state after error', this.store.snapshot());
        this.logWriter.logRedish('error', error);
        this.logWriter.endGroup();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _hasPayload(event) {
        /** @type {?} */
        const nonEmptyProperties = this._getNonEmptyProperties(event);
        return nonEmptyProperties.length > 0;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _getNonEmptyProperties(event) {
        /** @type {?} */
        const keys = Object.keys(event);
        /** @type {?} */
        const values = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        key => event[key]));
        return values.filter((/**
         * @param {?} value
         * @return {?}
         */
        value => value !== undefined));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.action;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.logWriter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvZ2dlci1wbHVnaW4vc3JjL2FjdGlvbi1sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQVMsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBQ3ZCLFlBQW9CLE1BQVcsRUFBVSxLQUFZLEVBQVUsU0FBb0I7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFdkYsVUFBVSxDQUFDLEtBQVU7O2NBQ2IsVUFBVSxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O2NBQ25ELGFBQWEsR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Y0FFdEMsT0FBTyxHQUFHLFVBQVUsVUFBVSxNQUFNLGFBQWEsRUFBRTtRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQywwREFBMEQ7UUFDMUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLG9CQUFPLElBQUksQ0FBQyxNQUFNLEVBQUcsQ0FBQztTQUN2RDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxTQUFjO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFVOztjQUN0QixrQkFBa0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO1FBQzdELE9BQU8sa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxLQUFVOztjQUNqQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O2NBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBQzFDLE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7Ozs7OztJQXRDYSw4QkFBbUI7Ozs7O0lBQUUsNkJBQW9COzs7OztJQUFFLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgTG9nV3JpdGVyIH0gZnJvbSAnLi9sb2ctd3JpdGVyJztcblxuZXhwb3J0IGNsYXNzIEFjdGlvbkxvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9uOiBhbnksIHByaXZhdGUgc3RvcmU6IFN0b3JlLCBwcml2YXRlIGxvZ1dyaXRlcjogTG9nV3JpdGVyKSB7fVxuXG4gIGRpc3BhdGNoZWQoc3RhdGU6IGFueSkge1xuICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKHRoaXMuYWN0aW9uKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gZm9ybWF0VGltZShuZXcgRGF0ZSgpKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgYWN0aW9uICR7YWN0aW9uTmFtZX0gQCAke2Zvcm1hdHRlZFRpbWV9YDtcbiAgICB0aGlzLmxvZ1dyaXRlci5zdGFydEdyb3VwKG1lc3NhZ2UpO1xuXG4gICAgLy8gcHJpbnQgcGF5bG9hZCBvbmx5IGlmIGF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBpcyBzdXBwbGllZFxuICAgIGlmICh0aGlzLl9oYXNQYXlsb2FkKHRoaXMuYWN0aW9uKSkge1xuICAgICAgdGhpcy5sb2dXcml0ZXIubG9nR3JleSgncGF5bG9hZCcsIHsgLi4udGhpcy5hY3Rpb24gfSk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dXcml0ZXIubG9nR3JleSgncHJldiBzdGF0ZScsIHN0YXRlKTtcbiAgfVxuXG4gIGNvbXBsZXRlZChuZXh0U3RhdGU6IGFueSkge1xuICAgIHRoaXMubG9nV3JpdGVyLmxvZ0dyZWVuKCduZXh0IHN0YXRlJywgbmV4dFN0YXRlKTtcbiAgICB0aGlzLmxvZ1dyaXRlci5lbmRHcm91cCgpO1xuICB9XG5cbiAgZXJyb3JlZChlcnJvcjogYW55KSB7XG4gICAgdGhpcy5sb2dXcml0ZXIubG9nUmVkaXNoKCduZXh0IHN0YXRlIGFmdGVyIGVycm9yJywgdGhpcy5zdG9yZS5zbmFwc2hvdCgpKTtcbiAgICB0aGlzLmxvZ1dyaXRlci5sb2dSZWRpc2goJ2Vycm9yJywgZXJyb3IpO1xuICAgIHRoaXMubG9nV3JpdGVyLmVuZEdyb3VwKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYXNQYXlsb2FkKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBub25FbXB0eVByb3BlcnRpZXMgPSB0aGlzLl9nZXROb25FbXB0eVByb3BlcnRpZXMoZXZlbnQpO1xuICAgIHJldHVybiBub25FbXB0eVByb3BlcnRpZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE5vbkVtcHR5UHJvcGVydGllcyhldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50KTtcbiAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChrZXkgPT4gZXZlbnRba2V5XSk7XG4gICAgcmV0dXJuIHZhbHVlcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn1cbiJdfQ==
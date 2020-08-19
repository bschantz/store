/**
 * @fileoverview added by tsickle
 * Generated from: src/utils/store-validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getStoreMetadata } from '../internal/internals';
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
/**
 * @abstract
 */
export class StoreValidators {
    /**
     * @param {?} name
     * @return {?}
     */
    static stateNameErrorMessage(name) {
        return MESSAGES[CODE.STATE_NAME](name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    static checkCorrectStateName(name) {
        if (!name) {
            throw new Error(MESSAGES[CODE.STATE_NAME_PROPERTY]());
        }
        if (!this.stateNameRegex.test(name)) {
            throw new Error(this.stateNameErrorMessage(name));
        }
    }
    /**
     * @param {?} state
     * @param {?} statesByName
     * @return {?}
     */
    static checkStateNameIsUnique(state, statesByName) {
        /** @type {?} */
        const meta = this.getValidStateMeta(state);
        /** @type {?} */
        const stateName = (/** @type {?} */ ((/** @type {?} */ (meta)).name));
        /** @type {?} */
        const existingState = statesByName[stateName];
        if (existingState && existingState !== state) {
            throw new Error(MESSAGES[CODE.STATE_UNIQUE](stateName, state.name, existingState.name));
        }
        return stateName;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static getValidStateMeta(state) {
        /** @type {?} */
        const meta = getStoreMetadata(state);
        if (!meta) {
            throw new Error(MESSAGES[CODE.STATE_DECORATOR]());
        }
        return meta;
    }
}
StoreValidators.stateNameRegex = new RegExp('^[a-zA-Z0-9_]+$');
if (false) {
    /** @type {?} */
    StoreValidators.stateNameRegex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy91dGlscy9zdG9yZS12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUlqQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFDTCxlQUFlLElBQUksUUFBUSxFQUMzQixlQUFlLElBQUksSUFBSSxFQUN4QixNQUFNLDRCQUE0QixDQUFDOzs7O0FBRXBDLE1BQU0sT0FBZ0IsZUFBZTs7Ozs7SUFHNUIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQVk7UUFDOUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQW1CO1FBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FDbEMsS0FBeUIsRUFDekIsWUFBMEI7O2NBRXBCLElBQUksR0FBa0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQzs7Y0FDbkQsU0FBUyxHQUFXLG1CQUFBLG1CQUFBLElBQUksRUFBQyxDQUFDLElBQUksRUFBVTs7Y0FDeEMsYUFBYSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxhQUFhLElBQUksYUFBYSxLQUFLLEtBQUssRUFBRTtZQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDekY7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUF5Qjs7Y0FDakQsSUFBSSxHQUFrQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O0FBcENhLDhCQUFjLEdBQVcsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7O0lBQXJFLCtCQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldFN0b3JlTWV0YWRhdGEsXG4gIE1ldGFEYXRhTW9kZWwsXG4gIFN0YXRlQ2xhc3NJbnRlcm5hbCxcbiAgU3RhdGVzQnlOYW1lXG59IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XG5pbXBvcnQge1xuICBDT05GSUdfTUVTU0FHRVMgYXMgTUVTU0FHRVMsXG4gIFZBTElEQVRJT05fQ09ERSBhcyBDT0RFXG59IGZyb20gJy4uL2NvbmZpZ3MvbWVzc2FnZXMuY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0b3JlVmFsaWRhdG9ycyB7XG4gIHB1YmxpYyBzdGF0aWMgc3RhdGVOYW1lUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ15bYS16QS1aMC05X10rJCcpO1xuXG4gIHB1YmxpYyBzdGF0aWMgc3RhdGVOYW1lRXJyb3JNZXNzYWdlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBNRVNTQUdFU1tDT0RFLlNUQVRFX05BTUVdKG5hbWUpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjaGVja0NvcnJlY3RTdGF0ZU5hbWUobmFtZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1FU1NBR0VTW0NPREUuU1RBVEVfTkFNRV9QUk9QRVJUWV0oKSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlTmFtZVJlZ2V4LnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnN0YXRlTmFtZUVycm9yTWVzc2FnZShuYW1lKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjaGVja1N0YXRlTmFtZUlzVW5pcXVlKFxuICAgIHN0YXRlOiBTdGF0ZUNsYXNzSW50ZXJuYWwsXG4gICAgc3RhdGVzQnlOYW1lOiBTdGF0ZXNCeU5hbWVcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXRhOiBNZXRhRGF0YU1vZGVsID0gdGhpcy5nZXRWYWxpZFN0YXRlTWV0YShzdGF0ZSk7XG4gICAgY29uc3Qgc3RhdGVOYW1lOiBzdHJpbmcgPSBtZXRhIS5uYW1lIGFzIHN0cmluZztcbiAgICBjb25zdCBleGlzdGluZ1N0YXRlID0gc3RhdGVzQnlOYW1lW3N0YXRlTmFtZV07XG4gICAgaWYgKGV4aXN0aW5nU3RhdGUgJiYgZXhpc3RpbmdTdGF0ZSAhPT0gc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihNRVNTQUdFU1tDT0RFLlNUQVRFX1VOSVFVRV0oc3RhdGVOYW1lLCBzdGF0ZS5uYW1lLCBleGlzdGluZ1N0YXRlLm5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VmFsaWRTdGF0ZU1ldGEoc3RhdGU6IFN0YXRlQ2xhc3NJbnRlcm5hbCk6IE1ldGFEYXRhTW9kZWwge1xuICAgIGNvbnN0IG1ldGE6IE1ldGFEYXRhTW9kZWwgPSBnZXRTdG9yZU1ldGFkYXRhKHN0YXRlKTtcbiAgICBpZiAoIW1ldGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihNRVNTQUdFU1tDT0RFLlNUQVRFX0RFQ09SQVRPUl0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGE7XG4gIH1cbn1cbiJdfQ==
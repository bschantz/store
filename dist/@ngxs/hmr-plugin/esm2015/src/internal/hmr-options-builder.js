/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/hmr-options-builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class HmrOptionBuilder {
    /**
     * @param {?} __0
     */
    constructor({ deferTime, autoClearLogs }) {
        this.deferTime = deferTime || 100;
        this.autoClearLogs = autoClearLogs === undefined ? true : autoClearLogs;
    }
    /**
     * @return {?}
     */
    clearLogs() {
        if (this.autoClearLogs) {
            console.clear();
        }
    }
}
if (false) {
    /** @type {?} */
    HmrOptionBuilder.prototype.deferTime;
    /** @type {?} */
    HmrOptionBuilder.prototype.autoClearLogs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1yLW9wdGlvbnMtYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2htci1wbHVnaW4vc3JjL2ludGVybmFsL2htci1vcHRpb25zLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBSTNCLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFrQjtRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRU0sU0FBUztRQUNkLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0NBQ0Y7OztJQWJDLHFDQUFrQzs7SUFDbEMseUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4c0htck9wdGlvbnMgfSBmcm9tICcuLi9zeW1ib2xzJztcblxuZXhwb3J0IGNsYXNzIEhtck9wdGlvbkJ1aWxkZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgZGVmZXJUaW1lOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBhdXRvQ2xlYXJMb2dzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHsgZGVmZXJUaW1lLCBhdXRvQ2xlYXJMb2dzIH06IE5neHNIbXJPcHRpb25zKSB7XG4gICAgdGhpcy5kZWZlclRpbWUgPSBkZWZlclRpbWUgfHwgMTAwO1xuICAgIHRoaXMuYXV0b0NsZWFyTG9ncyA9IGF1dG9DbGVhckxvZ3MgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhdXRvQ2xlYXJMb2dzO1xuICB9XG5cbiAgcHVibGljIGNsZWFyTG9ncygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xlYXJMb2dzKSB7XG4gICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
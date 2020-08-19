/**
 * @fileoverview added by tsickle
 * Generated from: src/log-writer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class LogWriter {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
        this.options = this.options || (/** @type {?} */ ({}));
        this.logger = options.logger || console;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    startGroup(message) {
        /** @type {?} */
        const startGroupFn = this.options.collapsed
            ? this.logger.groupCollapsed
            : this.logger.group;
        try {
            startGroupFn.call(this.logger, message);
        }
        catch (e) {
            console.log(message);
        }
    }
    /**
     * @return {?}
     */
    endGroup() {
        try {
            this.logger.groupEnd();
        }
        catch (e) {
            this.logger.log('—— log end ——');
        }
    }
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    logGrey(title, payload) {
        /** @type {?} */
        const greyStyle = 'color: #9E9E9E; font-weight: bold';
        this.log(title, greyStyle, payload);
    }
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    logGreen(title, payload) {
        /** @type {?} */
        const greenStyle = 'color: #4CAF50; font-weight: bold';
        this.log(title, greenStyle, payload);
    }
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    logRedish(title, payload) {
        /** @type {?} */
        const redishStyle = 'color: #FD8182; font-weight: bold';
        this.log(title, redishStyle, payload);
    }
    /**
     * @param {?} title
     * @param {?} color
     * @param {?} payload
     * @return {?}
     */
    log(title, color, payload) {
        if (this.isIE()) {
            this.logger.log(title, payload);
        }
        else {
            this.logger.log('%c ' + title, color, payload);
        }
    }
    /**
     * @return {?}
     */
    isIE() {
        /** @type {?} */
        const ua = typeof window !== 'undefined' && window.navigator.userAgent
            ? window.navigator.userAgent
            : '';
        /** @type {?} */
        let msIE = false;
        /** @type {?} */
        const oldIE = ua.indexOf('MSIE ');
        /** @type {?} */
        const newIE = ua.indexOf('Trident/');
        if (oldIE > -1 || newIE > -1) {
            msIE = true;
        }
        return msIE;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogWriter.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    LogWriter.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLXdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvZ2dlci1wbHVnaW4vc3JjL2xvZy13cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxNQUFNLE9BQU8sU0FBUzs7OztJQUdwQixZQUFvQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksbUJBQUssRUFBRSxFQUFBLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFlOztjQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztRQUNyQixJQUFJO1lBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYSxFQUFFLE9BQVk7O2NBQzNCLFNBQVMsR0FBRyxtQ0FBbUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFhLEVBQUUsT0FBWTs7Y0FDNUIsVUFBVSxHQUFHLG1DQUFtQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxPQUFZOztjQUM3QixXQUFXLEdBQUcsbUNBQW1DO1FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsT0FBWTtRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTs7Y0FDSSxFQUFFLEdBQ04sT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUztZQUN6RCxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTO1lBQzVCLENBQUMsQ0FBQyxFQUFFOztZQUNKLElBQUksR0FBRyxLQUFLOztjQUNWLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7Y0FDM0IsS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjs7Ozs7O0lBOURDLDJCQUFvQjs7Ozs7SUFFUiw0QkFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vc3ltYm9scyc7XG5leHBvcnQgY2xhc3MgTG9nV3JpdGVyIHtcbiAgcHJpdmF0ZSBsb2dnZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IDxhbnk+e307XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBjb25zb2xlO1xuICB9XG5cbiAgc3RhcnRHcm91cChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGFydEdyb3VwRm4gPSB0aGlzLm9wdGlvbnMuY29sbGFwc2VkXG4gICAgICA/IHRoaXMubG9nZ2VyLmdyb3VwQ29sbGFwc2VkXG4gICAgICA6IHRoaXMubG9nZ2VyLmdyb3VwO1xuICAgIHRyeSB7XG4gICAgICBzdGFydEdyb3VwRm4uY2FsbCh0aGlzLmxvZ2dlciwgbWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgZW5kR3JvdXAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sb2dnZXIubG9nKCfigJTigJQgbG9nIGVuZCDigJTigJQnKTtcbiAgICB9XG4gIH1cblxuICBsb2dHcmV5KHRpdGxlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIGNvbnN0IGdyZXlTdHlsZSA9ICdjb2xvcjogIzlFOUU5RTsgZm9udC13ZWlnaHQ6IGJvbGQnO1xuICAgIHRoaXMubG9nKHRpdGxlLCBncmV5U3R5bGUsIHBheWxvYWQpO1xuICB9XG5cbiAgbG9nR3JlZW4odGl0bGU6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgY29uc3QgZ3JlZW5TdHlsZSA9ICdjb2xvcjogIzRDQUY1MDsgZm9udC13ZWlnaHQ6IGJvbGQnO1xuICAgIHRoaXMubG9nKHRpdGxlLCBncmVlblN0eWxlLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGxvZ1JlZGlzaCh0aXRsZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICBjb25zdCByZWRpc2hTdHlsZSA9ICdjb2xvcjogI0ZEODE4MjsgZm9udC13ZWlnaHQ6IGJvbGQnO1xuICAgIHRoaXMubG9nKHRpdGxlLCByZWRpc2hTdHlsZSwgcGF5bG9hZCk7XG4gIH1cblxuICBsb2codGl0bGU6IHN0cmluZywgY29sb3I6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNJRSgpKSB7XG4gICAgICB0aGlzLmxvZ2dlci5sb2codGl0bGUsIHBheWxvYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2dlci5sb2coJyVjICcgKyB0aXRsZSwgY29sb3IsIHBheWxvYWQpO1xuICAgIH1cbiAgfVxuXG4gIGlzSUUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdWEgPVxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICA6ICcnO1xuICAgIGxldCBtc0lFID0gZmFsc2U7XG4gICAgY29uc3Qgb2xkSUUgPSB1YS5pbmRleE9mKCdNU0lFICcpO1xuICAgIGNvbnN0IG5ld0lFID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcbiAgICBpZiAob2xkSUUgPiAtMSB8fCBuZXdJRSA+IC0xKSB7XG4gICAgICBtc0lFID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG1zSUU7XG4gIH1cbn1cbiJdfQ==
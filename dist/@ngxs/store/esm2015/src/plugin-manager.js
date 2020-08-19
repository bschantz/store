/**
 * @fileoverview added by tsickle
 * Generated from: src/plugin-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { NGXS_PLUGINS } from './symbols';
export class PluginManager {
    /**
     * @param {?} _parentManager
     * @param {?} _pluginHandlers
     */
    constructor(_parentManager, _pluginHandlers) {
        this._parentManager = _parentManager;
        this._pluginHandlers = _pluginHandlers;
        this.plugins = [];
        this.registerHandlers();
    }
    /**
     * @private
     * @return {?}
     */
    get rootPlugins() {
        return (this._parentManager && this._parentManager.plugins) || this.plugins;
    }
    /**
     * @private
     * @return {?}
     */
    registerHandlers() {
        /** @type {?} */
        const pluginHandlers = this.getPluginHandlers();
        this.rootPlugins.push(...pluginHandlers);
    }
    /**
     * @private
     * @return {?}
     */
    getPluginHandlers() {
        /** @type {?} */
        const handlers = this._pluginHandlers || [];
        return handlers.map((/**
         * @param {?} plugin
         * @return {?}
         */
        (plugin) => (/** @type {?} */ ((plugin.handle ? plugin.handle.bind(plugin) : plugin)))));
    }
}
PluginManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PluginManager.ctorParameters = () => [
    { type: PluginManager, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: Array, decorators: [{ type: Inject, args: [NGXS_PLUGINS,] }, { type: Optional }] }
];
if (false) {
    /** @type {?} */
    PluginManager.prototype.plugins;
    /**
     * @type {?}
     * @private
     */
    PluginManager.prototype._parentManager;
    /**
     * @type {?}
     * @private
     */
    PluginManager.prototype._pluginHandlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvcGx1Z2luLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQTRCLE1BQU0sV0FBVyxDQUFDO0FBR25FLE1BQU0sT0FBTyxhQUFhOzs7OztJQUd4QixZQUdVLGNBQTZCLEVBRzdCLGVBQTZCO1FBSDdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRzdCLG9CQUFlLEdBQWYsZUFBZSxDQUFjO1FBUmhDLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBVWxDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBWSxXQUFXO1FBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVPLGdCQUFnQjs7Y0FDaEIsY0FBYyxHQUFtQixJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVPLGlCQUFpQjs7Y0FDakIsUUFBUSxHQUFpQixJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUU7UUFDekQsT0FBTyxRQUFRLENBQUMsR0FBRzs7OztRQUNqQixDQUFDLE1BQWtCLEVBQUUsRUFBRSxDQUNyQixtQkFBQSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBZ0IsRUFDeEUsQ0FBQztJQUNKLENBQUM7OztZQTlCRixVQUFVOzs7O1lBT2lCLGFBQWEsdUJBRnBDLFFBQVEsWUFDUixRQUFRO3dDQUVSLE1BQU0sU0FBQyxZQUFZLGNBQ25CLFFBQVE7Ozs7SUFQWCxnQ0FBb0M7Ozs7O0lBR2xDLHVDQUVxQzs7Ozs7SUFDckMsd0NBRXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HWFNfUExVR0lOUywgTmd4c1BsdWdpbiwgTmd4c1BsdWdpbkZuIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsdWdpbk1hbmFnZXIge1xuICBwdWJsaWMgcGx1Z2luczogTmd4c1BsdWdpbkZuW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTa2lwU2VsZigpXG4gICAgcHJpdmF0ZSBfcGFyZW50TWFuYWdlcjogUGx1Z2luTWFuYWdlcixcbiAgICBASW5qZWN0KE5HWFNfUExVR0lOUylcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByaXZhdGUgX3BsdWdpbkhhbmRsZXJzOiBOZ3hzUGx1Z2luW11cbiAgKSB7XG4gICAgdGhpcy5yZWdpc3RlckhhbmRsZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCByb290UGx1Z2lucygpOiBOZ3hzUGx1Z2luRm5bXSB7XG4gICAgcmV0dXJuICh0aGlzLl9wYXJlbnRNYW5hZ2VyICYmIHRoaXMuX3BhcmVudE1hbmFnZXIucGx1Z2lucykgfHwgdGhpcy5wbHVnaW5zO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlckhhbmRsZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IHBsdWdpbkhhbmRsZXJzOiBOZ3hzUGx1Z2luRm5bXSA9IHRoaXMuZ2V0UGx1Z2luSGFuZGxlcnMoKTtcbiAgICB0aGlzLnJvb3RQbHVnaW5zLnB1c2goLi4ucGx1Z2luSGFuZGxlcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbHVnaW5IYW5kbGVycygpOiBOZ3hzUGx1Z2luRm5bXSB7XG4gICAgY29uc3QgaGFuZGxlcnM6IE5neHNQbHVnaW5bXSA9IHRoaXMuX3BsdWdpbkhhbmRsZXJzIHx8IFtdO1xuICAgIHJldHVybiBoYW5kbGVycy5tYXAoXG4gICAgICAocGx1Z2luOiBOZ3hzUGx1Z2luKSA9PlxuICAgICAgICAocGx1Z2luLmhhbmRsZSA/IHBsdWdpbi5oYW5kbGUuYmluZChwbHVnaW4pIDogcGx1Z2luKSBhcyBOZ3hzUGx1Z2luRm5cbiAgICApO1xuICB9XG59XG4iXX0=
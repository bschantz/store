/**
 * @fileoverview added by tsickle
 * Generated from: src/hmr-bootstrap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { HmrManager } from './hmr-manager';
import { HmrStorage } from './internal/hmr-storage';
import { markApplicationAsHmrReloaded, setHmrReloadedTo } from './utils/internals';
/**
 * Hot Module Replacement plugin for NGXS
 * @deprecated As of Angular v10, HMR is no longer supported and will be deprecated.
 * More information [here](https://www.ngxs.io/plugins/hmr).
 * @template T
 * @param {?} webpackModule
 * @param {?} bootstrapFn
 * @param {?=} options
 * @return {?}
 * @this {*}
 */
export function hmr(webpackModule, bootstrapFn, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!webpackModule.hot) {
            console.error('Are you using the --hmr flag for ng serve?');
            throw new Error('HMR is not enabled for webpack-dev-server!');
        }
        markApplicationAsHmrReloaded();
        webpackModule.hot.accept();
        /**
         * @record
         */
        function HmrDataTransfer() { }
        if (false) {
            /** @type {?|undefined} */
            HmrDataTransfer.prototype.snapshot;
        }
        /** @type {?} */
        const dataTransfer = webpackModule.hot.data || {};
        /** @type {?} */
        const storage = new HmrStorage(dataTransfer.snapshot || {});
        /** @type {?} */
        const manager = new HmrManager(options, storage);
        return yield manager.hmrModule(bootstrapFn, (/**
         * @return {?}
         */
        () => {
            manager.beforeModuleBootstrap();
            (/** @type {?} */ (webpackModule.hot)).dispose((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                setHmrReloadedTo(true);
                data.snapshot = manager.beforeModuleOnDestroy();
                manager.createNewModule();
            }));
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1yLWJvb3RzdHJhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2htci1wbHVnaW4vc3JjL2htci1ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7OztBQU9uRixNQUFNLFVBQWdCLEdBQUcsQ0FDdkIsYUFBNEIsRUFDNUIsV0FBaUMsRUFDakMsVUFBMEIsRUFBRTs7UUFFNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUVELDRCQUE0QixFQUFFLENBQUM7UUFFL0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7OztRQUUzQiw4QkFFQzs7O1lBREMsbUNBQWU7OztjQUVYLFlBQVksR0FBb0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTs7Y0FFNUQsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFNLFlBQVksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDOztjQUMxRCxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUVuRCxPQUFPLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXOzs7UUFBRSxHQUFHLEVBQUU7WUFDL0MsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFFaEMsbUJBQUEsYUFBYSxDQUFDLEdBQUcsRUFBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtnQkFDbkQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhtck1hbmFnZXIgfSBmcm9tICcuL2htci1tYW5hZ2VyJztcbmltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZUZuLCBOZ3hzSG1yT3B0aW9ucywgV2VicGFja01vZHVsZSB9IGZyb20gJy4vc3ltYm9scyc7XG5pbXBvcnQgeyBIbXJTdG9yYWdlIH0gZnJvbSAnLi9pbnRlcm5hbC9obXItc3RvcmFnZSc7XG5pbXBvcnQgeyBtYXJrQXBwbGljYXRpb25Bc0htclJlbG9hZGVkLCBzZXRIbXJSZWxvYWRlZFRvIH0gZnJvbSAnLi91dGlscy9pbnRlcm5hbHMnO1xuXG4vKipcbiAqIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgcGx1Z2luIGZvciBOR1hTXG4gKiBAZGVwcmVjYXRlZCBBcyBvZiBBbmd1bGFyIHYxMCwgSE1SIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgZGVwcmVjYXRlZC5cbiAqIE1vcmUgaW5mb3JtYXRpb24gW2hlcmVdKGh0dHBzOi8vd3d3Lm5neHMuaW8vcGx1Z2lucy9obXIpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaG1yPFQ+KFxuICB3ZWJwYWNrTW9kdWxlOiBXZWJwYWNrTW9kdWxlLFxuICBib290c3RyYXBGbjogQm9vdHN0cmFwTW9kdWxlRm48VD4sXG4gIG9wdGlvbnM6IE5neHNIbXJPcHRpb25zID0ge31cbik6IFByb21pc2U8TmdNb2R1bGVSZWY8VD4+IHtcbiAgaWYgKCF3ZWJwYWNrTW9kdWxlLmhvdCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FyZSB5b3UgdXNpbmcgdGhlIC0taG1yIGZsYWcgZm9yIG5nIHNlcnZlPycpO1xuICAgIHRocm93IG5ldyBFcnJvcignSE1SIGlzIG5vdCBlbmFibGVkIGZvciB3ZWJwYWNrLWRldi1zZXJ2ZXIhJyk7XG4gIH1cblxuICBtYXJrQXBwbGljYXRpb25Bc0htclJlbG9hZGVkKCk7XG5cbiAgd2VicGFja01vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgaW50ZXJmYWNlIEhtckRhdGFUcmFuc2ZlciB7XG4gICAgc25hcHNob3Q/OiBhbnk7XG4gIH1cbiAgY29uc3QgZGF0YVRyYW5zZmVyOiBIbXJEYXRhVHJhbnNmZXIgPSB3ZWJwYWNrTW9kdWxlLmhvdC5kYXRhIHx8IHt9O1xuXG4gIGNvbnN0IHN0b3JhZ2UgPSBuZXcgSG1yU3RvcmFnZTxhbnk+KGRhdGFUcmFuc2Zlci5zbmFwc2hvdCB8fCB7fSk7XG4gIGNvbnN0IG1hbmFnZXIgPSBuZXcgSG1yTWFuYWdlcjxUPihvcHRpb25zLCBzdG9yYWdlKTtcblxuICByZXR1cm4gYXdhaXQgbWFuYWdlci5obXJNb2R1bGUoYm9vdHN0cmFwRm4sICgpID0+IHtcbiAgICBtYW5hZ2VyLmJlZm9yZU1vZHVsZUJvb3RzdHJhcCgpO1xuXG4gICAgd2VicGFja01vZHVsZS5ob3QhLmRpc3Bvc2UoKGRhdGE6IEhtckRhdGFUcmFuc2ZlcikgPT4ge1xuICAgICAgc2V0SG1yUmVsb2FkZWRUbyh0cnVlKTtcbiAgICAgIGRhdGEuc25hcHNob3QgPSBtYW5hZ2VyLmJlZm9yZU1vZHVsZU9uRGVzdHJveSgpO1xuICAgICAgbWFuYWdlci5jcmVhdGVOZXdNb2R1bGUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=
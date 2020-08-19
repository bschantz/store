/**
 * @fileoverview added by tsickle
 * Generated from: src/decorators/selector/selector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../../configs/messages.config';
import { createSelector } from '../../utils/selector-utils';
/**
 * Decorator for memoizing a state selector.
 * @template T
 * @param {?=} selectors
 * @return {?}
 */
export function Selector(selectors) {
    return (/**
     * @template U
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    (target, key, descriptor) => {
        /** @type {?} */
        const isNotMethod = !(descriptor && descriptor.value !== null);
        if (isNotMethod) {
            throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.SELECTOR_DECORATOR]());
        }
        /** @type {?} */
        const originalFn = descriptor.value;
        /** @type {?} */
        const memoizedFn = createSelector(selectors, (/** @type {?} */ (originalFn)), {
            containerClass: target,
            selectorName: key.toString(),
            /**
             * @return {?}
             */
            getSelectorOptions() {
                return {};
            }
        });
        /** @type {?} */
        const newDescriptor = {
            configurable: true,
            /**
             * @return {?}
             */
            get() {
                return memoizedFn;
            }
        };
        // Add hidden property to descriptor
        ((/** @type {?} */ (newDescriptor)))['originalFn'] = originalFn;
        return newDescriptor;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvZGVjb3JhdG9ycy9zZWxlY3Rvci9zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0FBTTVELE1BQU0sVUFBVSxRQUFRLENBQUksU0FBZTtJQUN6Qzs7Ozs7OztJQUFPLENBQ0wsTUFBVyxFQUNYLEdBQW9CLEVBQ3BCLFVBQXVELEVBQ0gsRUFBRTs7Y0FDaEQsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7UUFFOUQsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEU7O2NBRUssVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLOztjQUM3QixVQUFVLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxtQkFBQSxVQUFVLEVBQU8sRUFBRTtZQUM5RCxjQUFjLEVBQUUsTUFBTTtZQUN0QixZQUFZLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTs7OztZQUM1QixrQkFBa0I7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQztTQUNGLENBQUM7O2NBQ0ksYUFBYSxHQUFHO1lBQ3BCLFlBQVksRUFBRSxJQUFJOzs7O1lBQ2xCLEdBQUc7Z0JBQ0QsT0FBTyxVQUFVLENBQUM7WUFDcEIsQ0FBQztTQUNGO1FBQ0Qsb0NBQW9DO1FBQ3BDLENBQUMsbUJBQUssYUFBYSxFQUFBLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDaEQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTkZJR19NRVNTQUdFUywgVkFMSURBVElPTl9DT0RFIH0gZnJvbSAnLi4vLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi91dGlscy9zZWxlY3Rvci11dGlscyc7XG5pbXBvcnQgeyBTZWxlY3RvclNwZWMsIFNlbGVjdG9yVHlwZSB9IGZyb20gJy4vc3ltYm9scyc7XG5cbi8qKlxuICogRGVjb3JhdG9yIGZvciBtZW1vaXppbmcgYSBzdGF0ZSBzZWxlY3Rvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdG9yPFQ+KHNlbGVjdG9ycz86IFRbXSk6IFNlbGVjdG9yVHlwZTxUPiB7XG4gIHJldHVybiA8VT4oXG4gICAgdGFyZ2V0OiBhbnksXG4gICAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8U2VsZWN0b3JTcGVjPFQsIFU+PlxuICApOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxTZWxlY3RvclNwZWM8VCwgVT4+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgaXNOb3RNZXRob2QgPSAhKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAoaXNOb3RNZXRob2QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihDT05GSUdfTUVTU0FHRVNbVkFMSURBVElPTl9DT0RFLlNFTEVDVE9SX0RFQ09SQVRPUl0oKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JpZ2luYWxGbiA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgY29uc3QgbWVtb2l6ZWRGbiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdG9ycywgb3JpZ2luYWxGbiBhcyBhbnksIHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiB0YXJnZXQsXG4gICAgICBzZWxlY3Rvck5hbWU6IGtleS50b1N0cmluZygpLFxuICAgICAgZ2V0U2VsZWN0b3JPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbmV3RGVzY3JpcHRvciA9IHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkRm47XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBBZGQgaGlkZGVuIHByb3BlcnR5IHRvIGRlc2NyaXB0b3JcbiAgICAoPGFueT5uZXdEZXNjcmlwdG9yKVsnb3JpZ2luYWxGbiddID0gb3JpZ2luYWxGbjtcbiAgICByZXR1cm4gbmV3RGVzY3JpcHRvcjtcbiAgfTtcbn1cbiJdfQ==
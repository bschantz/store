/**
 * @fileoverview added by tsickle
 * Generated from: src/state-token/state-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureSelectorMetadata } from '../internal/internals';
/**
 * @template T
 */
export class StateToken {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
        /** @type {?} */
        const selectorMetadata = ensureSelectorMetadata((/** @type {?} */ (this)));
        selectorMetadata.makeRootSelector = (/**
         * @param {?} runtimeContext
         * @return {?}
         */
        (runtimeContext) => {
            return runtimeContext.getStateGetter(this.name);
        });
    }
    /**
     * @return {?}
     */
    getName() {
        return this.name;
    }
    /**
     * @return {?}
     */
    toString() {
        return `StateToken[${this.name}]`;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StateToken.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtdG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvc3RhdGUtdG9rZW4vc3RhdGUtdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsc0JBQXNCLEVBR3ZCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFL0IsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFBNkIsSUFBa0I7UUFBbEIsU0FBSSxHQUFKLElBQUksQ0FBYzs7Y0FDdkMsZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsbUJBQUssSUFBSSxFQUFBLENBQUM7UUFDMUQsZ0JBQWdCLENBQUMsZ0JBQWdCOzs7O1FBQUcsQ0FDbEMsY0FBc0MsRUFDakIsRUFBRTtZQUN2QixPQUFPLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLGNBQWMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjs7Ozs7O0lBaEJhLDBCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRva2VuTmFtZSB9IGZyb20gJy4vc3ltYm9scyc7XG5pbXBvcnQge1xuICBlbnN1cmVTZWxlY3Rvck1ldGFkYXRhLFxuICBSdW50aW1lU2VsZWN0b3JDb250ZXh0LFxuICBTZWxlY3RGcm9tUm9vdFN0YXRlXG59IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZVRva2VuPFQgPSB2b2lkPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbmFtZTogVG9rZW5OYW1lPFQ+KSB7XG4gICAgY29uc3Qgc2VsZWN0b3JNZXRhZGF0YSA9IGVuc3VyZVNlbGVjdG9yTWV0YWRhdGEoPGFueT50aGlzKTtcbiAgICBzZWxlY3Rvck1ldGFkYXRhLm1ha2VSb290U2VsZWN0b3IgPSAoXG4gICAgICBydW50aW1lQ29udGV4dDogUnVudGltZVNlbGVjdG9yQ29udGV4dFxuICAgICk6IFNlbGVjdEZyb21Sb290U3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHJ1bnRpbWVDb250ZXh0LmdldFN0YXRlR2V0dGVyKHRoaXMubmFtZSk7XG4gICAgfTtcbiAgfVxuXG4gIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFN0YXRlVG9rZW5bJHt0aGlzLm5hbWV9XWA7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: ngxs-bootstrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
export class NgxsBootstrapper {
    constructor() {
        /**
         * Use `ReplaySubject`, thus we can get cached value even if the stream is completed
         */
        this.bootstrap$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    get appBootstrapped$() {
        return this.bootstrap$.asObservable();
    }
    /**
     * This event will be emitted after attaching `ComponentRef` of the root component
     * to the tree of views, that's a signal that application has been fully rendered
     * @return {?}
     */
    bootstrap() {
        this.bootstrap$.next(true);
        this.bootstrap$.complete();
    }
}
NgxsBootstrapper.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Use `ReplaySubject`, thus we can get cached value even if the stream is completed
     * @type {?}
     * @private
     */
    NgxsBootstrapper.prototype.bootstrap$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4cy1ib290c3RyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9pbnRlcm5hbHMvc3JjL25neHMtYm9vdHN0cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2pELE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7Ozs7UUFLVSxlQUFVLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7SUFjckQsQ0FBQzs7OztJQVpDLElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFNRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFsQkYsVUFBVTs7Ozs7Ozs7SUFLVCxzQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hzQm9vdHN0cmFwcGVyIHtcbiAgLyoqXG4gICAqIFVzZSBgUmVwbGF5U3ViamVjdGAsIHRodXMgd2UgY2FuIGdldCBjYWNoZWQgdmFsdWUgZXZlbiBpZiB0aGUgc3RyZWFtIGlzIGNvbXBsZXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBib290c3RyYXAkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG5cbiAgZ2V0IGFwcEJvb3RzdHJhcHBlZCQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IHdpbGwgYmUgZW1pdHRlZCBhZnRlciBhdHRhY2hpbmcgYENvbXBvbmVudFJlZmAgb2YgdGhlIHJvb3QgY29tcG9uZW50XG4gICAqIHRvIHRoZSB0cmVlIG9mIHZpZXdzLCB0aGF0J3MgYSBzaWduYWwgdGhhdCBhcHBsaWNhdGlvbiBoYXMgYmVlbiBmdWxseSByZW5kZXJlZFxuICAgKi9cbiAgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgIHRoaXMuYm9vdHN0cmFwJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuYm9vdHN0cmFwJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
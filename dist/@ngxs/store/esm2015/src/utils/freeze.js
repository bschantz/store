/**
 * @fileoverview added by tsickle
 * Generated from: src/utils/freeze.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object freeze code
 * https://github.com/jsdf/deep-freeze
 * @type {?}
 */
export const deepFreeze = (/**
 * @param {?} o
 * @return {?}
 */
(o) => {
    Object.freeze(o);
    /** @type {?} */
    const oIsFunction = typeof o === 'function';
    /** @type {?} */
    const hasOwnProp = Object.prototype.hasOwnProperty;
    Object.getOwnPropertyNames(o).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        if (hasOwnProp.call(o, prop) &&
            (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    }));
    return o;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc3RvcmUvc3JjL3V0aWxzL2ZyZWV6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsTUFBTSxPQUFPLFVBQVU7Ozs7QUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBRVgsV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLFVBQVU7O1VBQ3JDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWM7SUFFbEQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFTLElBQUk7UUFDakQsSUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDeEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckYsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7WUFDaEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxDQUFDO1lBQzlELENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDekI7WUFDQSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPYmplY3QgZnJlZXplIGNvZGVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RmL2RlZXAtZnJlZXplXG4gKi9cbmV4cG9ydCBjb25zdCBkZWVwRnJlZXplID0gKG86IGFueSkgPT4ge1xuICBPYmplY3QuZnJlZXplKG8pO1xuXG4gIGNvbnN0IG9Jc0Z1bmN0aW9uID0gdHlwZW9mIG8gPT09ICdmdW5jdGlvbic7XG4gIGNvbnN0IGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG8pLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgIGlmIChcbiAgICAgIGhhc093blByb3AuY2FsbChvLCBwcm9wKSAmJlxuICAgICAgKG9Jc0Z1bmN0aW9uID8gcHJvcCAhPT0gJ2NhbGxlcicgJiYgcHJvcCAhPT0gJ2NhbGxlZScgJiYgcHJvcCAhPT0gJ2FyZ3VtZW50cycgOiB0cnVlKSAmJlxuICAgICAgb1twcm9wXSAhPT0gbnVsbCAmJlxuICAgICAgKHR5cGVvZiBvW3Byb3BdID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb1twcm9wXSA9PT0gJ2Z1bmN0aW9uJykgJiZcbiAgICAgICFPYmplY3QuaXNGcm96ZW4ob1twcm9wXSlcbiAgICApIHtcbiAgICAgIGRlZXBGcmVlemUob1twcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbztcbn07XG4iXX0=
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Actions, Store } from '@ngxs/store';
export declare class FormDirective implements OnInit, OnDestroy {
    private _actions$;
    private _store;
    private _formGroupDirective;
    private _cd;
    path: string;
    debounce: number;
    clearDestroy: boolean;
    private readonly _destroy$;
    private _updating;
    constructor(_actions$: Actions, _store: Store, _formGroupDirective: FormGroupDirective, _cd: ChangeDetectorRef);
    ngOnInit(): void;
    updateFormStateWithRawValue(withFormStatus?: boolean): void;
    ngOnDestroy(): void;
    private debounceChange;
    private get form();
    private getStateStream;
}

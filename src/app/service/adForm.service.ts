import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable(  {providedIn: 'root'})
export class adFormService {

    private formOneSource: Subject<FormGroup> = new Subject();
    locationOneForm: Observable<FormGroup> = this.formOneSource.asObservable();

    private formTwoSource: Subject<FormGroup> = new Subject();
    locationTwoForm: Observable<FormGroup> = this.formTwoSource.asObservable();

    private formThreeSource: Subject<FormGroup> = new Subject();
    locationThreeForm: Observable<FormGroup> = this.formThreeSource.asObservable();

    formOneReady(form: FormGroup): void {
        this.formOneSource.next(form);
    }

    formTwoReady(form: FormGroup): void {
        this.formTwoSource.next(form);
    }

    formThreeReady(form: FormGroup): void {
        this.formThreeSource.next(form);
    }

}

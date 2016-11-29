import { Component, OnInit }    from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: "reactive-form",
    templateUrl: "form.component.html"
})

export class FormComponent implements OnInit {
    user: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.user = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9!#$%&/'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?")]]
        })
    }
}
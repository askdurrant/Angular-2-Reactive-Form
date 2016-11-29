import { Component, OnInit }    from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
    moduleId: module.id,
    selector: "reactive-form",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})

export class FormComponent implements OnInit {
    user: FormGroup;
    regexPatterns: any;

    constructor(
        private fb: FormBuilder, 
        private sharedService: SharedService
    ) {}

    ngOnInit() {
        this.regexPatterns = this.sharedService.getRegexPatterns();

        this.user = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.pattern(this.regexPatterns.email)]]
        })
    }
}
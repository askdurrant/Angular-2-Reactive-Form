import 'rxjs/add/operator/toPromise';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent }     from './app.component';
import { FormComponent }    from './form/form.component';

import { SharedService }    from './services/shared.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        FormComponent
    ],
    providers: [
        SharedService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
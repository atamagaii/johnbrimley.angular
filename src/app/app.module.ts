import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        MaterialModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
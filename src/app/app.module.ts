import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './logo/logo.component';
 


@NgModule({
    declarations: [
        AppComponent,
        LogoComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        MaterialModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
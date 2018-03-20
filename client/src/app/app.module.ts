import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BsComponentModule } from './layout/bs-component/bs-component.module';
import { Http, HttpModule } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { ToastContainer } from 'ng2-toastr/src/toast-container.component';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        BsComponentModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ToastModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}

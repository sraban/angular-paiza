import { NgModule } from '@angular/core';
import { APP_BASE_HREF, Location } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModel issue will come if not imported
import { HttpClientModule } from "@angular/common/http";
import { AuthGuardService, RoleGuardService } from "./guards/auth-guard.service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { ServiceComponent } from './frontend/service/service.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { ProductComponent } from './frontend/product/product.component';
import { BlogComponent } from './frontend/blog/blog.component';
import { TechnologyComponent } from './frontend/technology/technology.component';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TreeModule } from 'angular-tree-component';
import { ChartModule } from 'angular2-chartjs';
import {ToasterModule, ToasterService} from 'angular2-toaster';

import { BsDropdownModule, TooltipModule, ModalModule } from 'ngx-bootstrap';

import { CKEditorModule } from 'ng2-ckeditor';

import { NgxEchartsModule } from 'ngx-echarts';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Ng2CompleterModule } from "ng2-completer";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditorModule } from '@tinymce/tinymce-angular';

import * as $ from "jquery";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ProductComponent,
    BlogComponent,
    TechnologyComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    NgxChartsModule,
    TreeModule.forRoot(),
    ChartModule,
    ToasterModule.forRoot(),
    BsDropdownModule.forRoot(),
    //TooltipModule.forRoot(),
    //ModalModule.forRoot(),
    CKEditorModule,
    NgxEchartsModule,
    LeafletModule.forRoot(),
    Ng2CompleterModule,
    Ng2SmartTableModule,
    EditorModule,
    // basic for each project
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  //exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [
     {
      provide: [APP_BASE_HREF, AuthGuardService, RoleGuardService],
      useFactory: getBaseLocation,
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseLocation() {
    const paths: string[] = location.pathname.split('/').splice(1, 1);
    const basePath: string = (paths && paths[0]) || '';
    return '/' + basePath;
}
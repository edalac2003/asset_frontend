import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormRegisterComponent } from './user/form-register/form-register.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarTopComponent } from './component/sidebar-top/sidebar-top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTemplateComponent } from './asset/create-template/create-template.component';
import { CreateAssetComponent } from './asset/create-asset/create-asset.component';
import { FormListAssetComponent } from './asset/form-list-asset/form-list-asset.component';
import { FormDetailAssetComponent } from './asset/form-detail-asset/form-detail-asset.component';
import { DashboardAssetDetailComponent } from './asset/dashboard-asset-detail/dashboard-asset-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegisterComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    SidebarTopComponent,
    CreateTemplateComponent,
    CreateAssetComponent,
    FormListAssetComponent,
    FormDetailAssetComponent,
    DashboardAssetDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

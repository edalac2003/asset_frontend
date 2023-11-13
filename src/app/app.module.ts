import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormRegisterUserComponent } from './user/form-register-user/form-register-user.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarTopComponent } from './component/sidebar-top/sidebar-top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAssetComponent } from './asset/create-asset/create-asset.component';
import { FormListAssetComponent } from './asset/form-list-asset/form-list-asset.component';
import { FormDetailAssetComponent } from './asset/form-detail-asset/form-detail-asset.component';
import { DashboardAssetDetailComponent } from './asset/dashboard-asset-detail/dashboard-asset-detail.component';
import { CreateTemplateComponent } from './template/create-template/create-template.component';
import { ListTemplateComponent } from './template/list-template/list-template.component';
import { DetailTemplateComponent } from './template/detail-template/detail-template.component';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { FormListUserComponent } from './user/form-list-user/form-list-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { FormDetailUserComponent } from './user/form-detail-user/form-detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegisterUserComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    SidebarTopComponent,
    CreateTemplateComponent,
    CreateAssetComponent,
    FormListAssetComponent,
    FormDetailAssetComponent,
    DashboardAssetDetailComponent,
    ListTemplateComponent,
    DetailTemplateComponent,
    LoginComponent,
    FormListUserComponent,
    DetailUserComponent,
    FormDetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }

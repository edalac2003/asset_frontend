// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { FormRegisterComponent } from './user/form-register/form-register.component';
// import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { CreateTemplateComponent } from './template/create-template/create-template.component';
// import { CreateAssetComponent } from './asset/create-asset/create-asset.component';
// import { FormListAssetComponent } from './asset/form-list-asset/form-list-asset.component';
// import { FormDetailAssetComponent } from './asset/form-detail-asset/form-detail-asset.component';
// import { DashboardAssetDetailComponent } from './asset/dashboard-asset-detail/dashboard-asset-detail.component';
// import { UpdateAssetComponent } from './asset/update-asset/update-asset.component';
// import { ListTemplateComponent } from './template/list-template/list-template.component';
// import { DetailTemplateComponent } from './template/detail-template/detail-template.component';
// import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   { path : 'login', component: LoginComponent },
//   { path : 'home', component: HomeComponent },
//   { path : 'register-user', component: FormRegisterComponent },
//   { path : 'dashboard', component: DashboardComponent },
//   { path : 'dashboard-asset', component: DashboardAssetDetailComponent },
//   { path : 'create-asset', component: CreateAssetComponent },
//   { path : 'list-asset', component: FormListAssetComponent },
//   { path : 'update-asset', component: UpdateAssetComponent },
//   { path : 'create-template', component: CreateTemplateComponent },
//   { path : 'detail-template', component: DetailTemplateComponent },
//   { path : 'list-template', component: ListTemplateComponent },
// { path: 'list-user', component: FormListComponent },
//   { path : '', redirectTo: 'login', pathMatch: 'full' }
// ];

// @NgModule({
//   declarations: [],
//   imports: [
//     RouterModule.forRoot(routes),
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule { }

// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterUserComponent } from './user/form-register-user/form-register-user.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTemplateComponent } from './template/create-template/create-template.component';
import { CreateAssetComponent } from './asset/create-asset/create-asset.component';
import { FormListAssetComponent } from './asset/form-list-asset/form-list-asset.component';
import { DashboardAssetDetailComponent } from './asset/dashboard-asset-detail/dashboard-asset-detail.component';
import { UpdateAssetComponent } from './asset/update-asset/update-asset.component';
import { ListTemplateComponent } from './template/list-template/list-template.component';
import { DetailTemplateComponent } from './template/detail-template/detail-template.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FormListUserComponent } from './user/form-list-user/form-list-user.component';
import { FormDetailUserComponent } from './user/form-detail-user/form-detail-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register-user', component: FormRegisterUserComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard-asset', component: DashboardAssetDetailComponent, canActivate: [AuthGuard] },
  { path: 'create-asset', component: CreateAssetComponent, canActivate: [AuthGuard] },
  { path: 'list-asset', component: FormListAssetComponent, canActivate: [AuthGuard] },
  { path: 'update-asset', component: UpdateAssetComponent, canActivate: [AuthGuard] },
  { path: 'create-template', component: CreateTemplateComponent, canActivate: [AuthGuard] },
  { path: 'detail-template', component: DetailTemplateComponent, canActivate: [AuthGuard] },
  { path: 'list-template', component: ListTemplateComponent, canActivate: [AuthGuard] },
  { path: 'list-user', component: FormListUserComponent, canActivate: [AuthGuard] },
  { path: 'detail-user', component: FormDetailUserComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

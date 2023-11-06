import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './user/form-register/form-register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTemplateComponent } from './asset/create-template/create-template.component';
import { CreateAssetComponent } from './asset/create-asset/create-asset.component';
import { FormListAssetComponent } from './asset/form-list-asset/form-list-asset.component';
import { FormDetailAssetComponent } from './asset/form-detail-asset/form-detail-asset.component';
import { DashboardAssetDetailComponent } from './asset/dashboard-asset-detail/dashboard-asset-detail.component';

const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full' },
  { path : 'home', component: HomeComponent },
  { path : 'register-user', component: FormRegisterComponent },
  { path : 'dashboard', component: DashboardComponent },
  { path : 'dashboard-asset', component: DashboardAssetDetailComponent },
  { path : 'create-asset', component: CreateAssetComponent },
  { path : 'create-template', component: CreateTemplateComponent },
  { path : 'list-asset', component: FormListAssetComponent },
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

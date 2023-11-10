import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAssetComponent } from './update-asset.component';

@NgModule({
  declarations: [
    UpdateAssetComponent,
  ],
  imports: [
    // ... otros módulos
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
  ],
})
export class UpdateAssetModule { }
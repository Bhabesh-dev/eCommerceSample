import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUpdateUsersComponent } from './add-update-users/add-update-users.component';
import { AddUpdateProductsComponent } from './add-update-products/add-update-products.component';
import { TrackOrdersComponent } from './track-orders/track-orders.component';


@NgModule({
  declarations: [AddUpdateUsersComponent, AddUpdateProductsComponent, TrackOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

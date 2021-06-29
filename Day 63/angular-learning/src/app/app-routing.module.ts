import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  { path: "editEmp", component: EditEmpComponent },
  { path: "viewEmp", component: ViewEmpComponent },
  { path: "quantityIncrement", component: QuantityIncrementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

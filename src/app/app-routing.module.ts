import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataItemComponent } from './data-item/data-item.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { TestDataComponent } from './test-data/test-data.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test-data' },
  { path: 'test-data', component: TestDataComponent },
  { path: 'data-item/:code', component: DataItemComponent},
  { path: 'bill-detail/:packageId', component: BillDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

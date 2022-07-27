import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataItemComponent } from './data-item/data-item.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { TestDataComponent } from './test-data/test-data.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'test-data', component: TestDataComponent },
  { path: 'data-item/:code', component: DataItemComponent},
  { path: 'bill-detail/:packageId', component: BillDetailComponent},
  { path: 'members/:chamber', component: MembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

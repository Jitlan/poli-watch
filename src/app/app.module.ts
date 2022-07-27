import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GovInfoService } from '../services/gov-info.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDataComponent } from './test-data/test-data.component';
import { DataItemComponent } from './data-item/data-item.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { PropublicaService } from 'src/services/propublica.service';

@NgModule({
  declarations: [
    AppComponent,
    TestDataComponent,
    DataItemComponent,
    BillDetailComponent,
    HomeComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GovInfoService, PropublicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

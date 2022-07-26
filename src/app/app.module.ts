import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GovInfoService } from './services/gov-info.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDataComponent } from './test-data/test-data.component';
import { DataItemComponent } from './data-item/data-item.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDataComponent,
    DataItemComponent,
    BillDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GovInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

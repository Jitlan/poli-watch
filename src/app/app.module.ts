import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GovInfoService } from '../services/gov-info.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { PropublicaService } from 'src/services/propublica.service';
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GovInfoService, PropublicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

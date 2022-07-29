import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { PropublicaService } from 'src/services/propublica.service';
import { MemberDetailComponent } from './member-detail.component';

describe('MemberDetailComponent', () => {
  let component: MemberDetailComponent;
  let fixture: ComponentFixture<MemberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDetailComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [PropublicaService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

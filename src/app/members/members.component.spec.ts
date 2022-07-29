import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { PropublicaService } from 'src/services/propublica.service';
import { MembersComponent } from './members.component';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [PropublicaService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

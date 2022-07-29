import { TestBed } from '@angular/core/testing';
import { PropublicaService } from './propublica.service';
import { HttpClientTestingModule,
         HttpTestingController } from '@angular/common/http/testing';

describe('PropublicaService', () => {
  // We declare the variables that we'll use for the Test Controller and for our Service
  let httpTestingController: HttpTestingController;
  let service: PropublicaService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropublicaService],
      imports: [HttpClientTestingModule]
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PropublicaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // Angular default test added when you generate a service using the CLI
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
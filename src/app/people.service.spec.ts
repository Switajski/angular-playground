import { TestBed, } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;
  let httpMock: HttpTestingController;
  beforeEach(async () =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService]
    }));
  beforeEach(() => {
    service = TestBed.get(PeopleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request people', (done) => {
    // GIVEN
    const people = [{ name: 'Luke' }, { name: 'R2-D2' }];
    const mockedRequest = { 'results': people };

    const req: TestRequest = httpMock.expectOne('https://swapi.co/api/people')
    req.flush(mockedRequest);

    // WHEN
    service.getPeople().subscribe(poepleFromService => {
      // EXPECT
      expect(poepleFromService).toEqual(people);
      done();
    })
    httpMock.verify();
  });
});

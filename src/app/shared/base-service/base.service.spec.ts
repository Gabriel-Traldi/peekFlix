import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { SeriesService } from 'src/app/series/shared/serie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('BaseService', () => {

  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = new SeriesService(TestBed.get(HttpClient));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return url + api', () => {
    expect(service.url).toEqual(`${environment.url}/series`);
  });
});

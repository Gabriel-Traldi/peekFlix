import { TestBed } from '@angular/core/testing';

import { SeriesService } from './serie.service';
import { HttpClient } from '@angular/common/http';

import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('SeriesService', () => {

  let service: SeriesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, use: httpClientSpy }
      ]
    });

    service = new SeriesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected series', () => {

    const expectedSeries = [
      { id: '1', imdbId: 'tt0944947', title: 'Game of Thrones', numberOfSeasons: 8, releaseDate: '2011-05-08' },
      { id: '2', imdbId: 'tt6226232', title: 'Young Sheldon', numberOfSeasons: 4, releaseDate: '2017-09-25' }
    ];

    httpClientSpy.get.and.returnValue(of(expectedSeries));

    service.listSeries().subscribe(
      heroes => expect(heroes).toEqual(expectedSeries, 'expected series'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1);

  });

  it('should return expected seasons', () => {

    const expectedSeasons = [
      { id: '1', numberOfEpisodes: 15, releaseDate: '2017-09-10' },
      { id: '2', numberOfEpisodes: 7, releaseDate: '2018-05-31' }
    ];

    httpClientSpy.get.and.returnValue(of(expectedSeasons));

    service.listSeasonsBySerie(1).subscribe(
      heroes => expect(heroes).toEqual(expectedSeasons, 'expected seasons'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1);

  });

  it('should return expected episodes', () => {

    const expectedEpisodes = [
      { id: '1', imdbId: 'tt6807344', title: 'Efectuar lo acordado', releaseDate: '2017-09-10', duration: '47min' },
      { id: '2', imdbId: 'tt6798708', title: 'Imprudencias letales', releaseDate: '2017-09-17', duration: '41min' }
    ];

    httpClientSpy.get.and.returnValue(of(expectedEpisodes));

    service.listEpisodesBySeason(1, 1).subscribe(
      heroes => expect(heroes).toEqual(expectedEpisodes, 'expected episodes'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1);

  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from 'src/app/shared/base-service/base.service';

import { Season } from 'src/app/core/models/season.model';
import { SeasonHistory } from 'src/app/core/models/season-history.model';
import { Serie } from 'src/app/core/models/serie.model';
import { Episode } from 'src/app/core/models/episode.model';


@Injectable({
  providedIn: 'root'
})
export class SeriesService extends BaseService {

  filterDebounce: Subject<string>;

  constructor(
    private httpClient: HttpClient
  ) {
    super('series');
    this.filterDebounce = new Subject<string>();
  }

  listSeries(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(`${this.url}?mockDate=2019-03-01`);
  }

  listSeasonsBySerie(idSerie: number): Observable<Season[]> {
    return this.httpClient.get<Season[]>(`${this.url}/${idSerie}/seasons?mockDate=2019-03-01`);
  }

  listEpisodesBySeason(idSerie: number, idSeason: number): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(`${this.url}/${idSerie}/seasons/${idSeason}/episodes?mockDate=2019-03-01`);
  }

  getSeasonHistoric(idSerie: number): Observable<SeasonHistory> {
    return this.listSeasonsBySerie(idSerie)
      .pipe(
        map(
          (seasons) => {

            const now = new Date();

            const nextSeason = seasons.find(season => now.getTime() < new Date(season.releaseDate).getTime());
            const pastSeasons = seasons.filter(season => now.getTime() > new Date(season.releaseDate).getTime());

            return {
              nextSeason,
              pastSeasons
            };
          }
        )
      );
  }

  getAllEpisodesBySeason(idSerie: number, infoSeason: SeasonHistory) {
    const requests = infoSeason.pastSeasons.map(season => this.listEpisodesBySeason(idSerie, +season.id));
    return forkJoin<Episode[]>(requests);
  }
}

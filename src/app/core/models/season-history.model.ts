import { Season } from 'src/app/core/models/season.model';

export interface SeasonHistory {

    nextSeason: Season;
    pastSeasons: Season[];
}

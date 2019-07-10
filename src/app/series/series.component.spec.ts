import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComponent } from './series.component';
import { FilterByTitle } from './shared/filter-by-title.pipe';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieComponent } from './serie/serie.component';
import { MatCardModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from './shared/serie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  let serieServiceSpy = jasmine.createSpyObj('SeriesService', ['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterByTitle,
        SerieComponent,
        SerieListComponent,
        SeriesComponent,
      ],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { data: { series: []}}} },
        SeriesService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

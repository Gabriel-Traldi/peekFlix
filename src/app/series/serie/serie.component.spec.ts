import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieComponent } from './serie.component';
import { MatCardModule, MatDialogModule } from '@angular/material';

describe('SerieComponent', () => {
  let component: SerieComponent;
  let fixture: ComponentFixture<SerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerieComponent],
      imports: [
        MatCardModule,
        MatDialogModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;
    component.serie = {
      title: 'Série',
      id: '0',
      imdbId: '0',
      numberOfSeasons: 2,
      releaseDate: '2019-07-09'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

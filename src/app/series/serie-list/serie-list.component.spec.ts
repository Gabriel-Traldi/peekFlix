import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieListComponent } from './serie-list.component';
import { SerieComponent } from '../serie/serie.component';
import { MatCardModule } from '@angular/material';

describe('SerieListComponent', () => {
  let component: SerieListComponent;
  let fixture: ComponentFixture<SerieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SerieComponent,
        SerieListComponent
      ],
      imports: [
        MatCardModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

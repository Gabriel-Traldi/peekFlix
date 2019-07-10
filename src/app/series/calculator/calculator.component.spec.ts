import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatProgressSpinnerModule, MAT_DIALOG_DATA } from '@angular/material';
import { CalculatorService } from '../shared/calculator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  const calculatorServiceSpy =
    jasmine.createSpyObj('CalculatorService', ['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [
        HttpClientTestingModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: CalculatorService, useValue: calculatorServiceSpy },
        { provide: MAT_DIALOG_DATA, useValue: 1 },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

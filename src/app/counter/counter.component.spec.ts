import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment the count when the Plus button is clicked', () => {
    // Arrange
    expect(component.count).toBe(0);

    // Act
    component.increment();

    // Assert
    expect(component.count).toBe(1);
  });

  it('should decrement the count when the Minus button is clicked', () => {
    // Arrange
    component.count = 1; // Start the count at 1
    expect(component.count).toBe(1);

    // Act
    component.decrement();

    // Assert
    expect(component.count).toBe(0);
  });

  it('should display the correct count in the template', () => {
    // Act
    component.increment();
    fixture.detectChanges();

    // Assert
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Count: 1');
  });
});

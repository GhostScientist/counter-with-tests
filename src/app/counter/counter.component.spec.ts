import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { increment, decrement } from './counter.actions';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore<{ count: number }>;
  const initialState = { count: 0 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment the count when the Plus button is clicked', () => {
    const spy = spyOn(store, 'dispatch'); 
    component.increment();
    expect(spy).toHaveBeenCalledWith(increment()); // Check if the correct action was dispatched
  });

  it('should decrement the count when the Minus button is clicked', () => {
    const spy = spyOn(store, 'dispatch'); 
    component.decrement();
    expect(spy).toHaveBeenCalledWith(decrement()); 
  });

  it('should display the correct count in the template', () => {
    store.setState({ count: 1 });
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Count: 1');
  });
});

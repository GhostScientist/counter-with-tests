import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('AppComponent', () => {
  let store: MockStore<{count: number}>;
  const initialState = { count: 0 };

  beforeEach(() => {
    
    TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, CounterComponent],
    providers: [provideMockStore( { initialState })]
  });
  store = TestBed.inject(MockStore);
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'counter-with-tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('counter-with-tests');
  });

  it('should no longer render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    store.setState({ count: 0 });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).not.toContain('counter-with-tests app is running!');
  });

  it('should no longer render title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    store.setState({ count: 0 });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    
    expect(compiled.querySelector('p')?.textContent).toContain('Count: 0');
  });
});

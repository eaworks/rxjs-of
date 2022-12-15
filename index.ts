import { of, map, Observable } from 'rxjs';

// const adlar$ = new Observable<string>((subscriber) => {
//   subscriber.next('Can');
//   subscriber.next('Osman');
//   subscriber.next('Hakan');
//   subscriber.complete();
// });
// adlar$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

// of('Can', 'Osman', 'Hakan').subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed')
// });

of(10, 20, "ersin").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

import { createStore } from 'react-rxjs';
import { merge, Subject } from 'rxjs';
import { map } from "rxjs/operators";

const inc$ = new Subject();
const dec$ = new Subject();

const reducer$ = merge(
    inc$.pipe(map(() => (state) => state = {count: state.count + 1})),
    dec$.pipe(map(() => (state) => state = {count: state.count - 1}))
);

export const store$ = createStore("state tree yggdrasil", reducer$, {count: 0} )

export const inc = () => inc$.next();
export const dec = () => dec$.next();

export default store$;

import {Observable} from 'rxjs';

const asyncTask = new Observable(subscriber => {
    // subscriber.next('Hello');
    // subscriber.next('World');
    // subscriber.complete();
    let i = 0;
    const id = setInterval(()=>{
        subscriber.next('Hello ' + i);
        i++;
        if (i > 10){
            subscriber.complete();
            clearInterval(id);
        }
    }, 1000)
});

asyncTask.subscribe(value => console.log(value));

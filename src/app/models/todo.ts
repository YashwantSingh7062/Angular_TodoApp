import { Time } from '@angular/common';

export interface Todo{
    id : number,
    title : string,
    time : Time,
    relatedTo : string,
    isCompleted : boolean
}

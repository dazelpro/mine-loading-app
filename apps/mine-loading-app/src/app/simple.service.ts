import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SimpleService {
    success = new BehaviorSubject('')
    failed = new BehaviorSubject('')

    getSuccess() {
        return this.success.asObservable()
    }

    getFailed() {
        return this.failed.asObservable()
    }
}
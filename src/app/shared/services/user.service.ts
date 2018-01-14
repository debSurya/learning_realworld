import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { User } from '../models';

@Injectable()
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>(new User());
    private currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(private http: Http, private apiService: ApiService) { }

    setAuth
}
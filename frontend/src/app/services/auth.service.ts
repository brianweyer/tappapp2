import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    public token: string;
    private apiUrl = 'http://localhost:3000';

    constructor(private http: Http) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(email: string, password: string): Observable<boolean | string> {
        const payload = JSON.stringify({ email: email, password: password });
        const httpOptions = {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.apiUrl + '/api/auth/sign_in', payload, httpOptions)
            .pipe(map((response: Response) => {
                const token = response.headers.get('access-token');
                const client = response.headers.get('client');
                if (token && client) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token, client: client }));
                    return true;
                } else {
                    return response['errors'];
                }
            }));
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}

import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

    constructor(@Inject(Http) private http: Http) {}

    getUsers() {
        return this.http.get('assets/users.json')
        .pipe(map(response => response.json()))
        .pipe(map(response => response.cms_users[0].CMS_User))
        .pipe(map(users => {
            return users.map(u => {
                return {
                    fullName: u.LastName + ' ' + u.FirstName,
                    firstName: u.FirstName,
                    middleName: u.MiddleName,
                    lastName: u.LastName,
                    email: u.Email,
                    userName: u.UserName,
                    userID: u.UserID,
                    department: u.Department,
                    company: u.Company,
                    post: u.Post
                }
            })
        }));
    }
    users = []
}
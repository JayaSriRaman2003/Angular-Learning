import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private storageKey = 'users';

  getUsers(): User[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteUser(email: string): void {
    let users = this.getUsers();
    users = users.filter(user => user.email !== email);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}

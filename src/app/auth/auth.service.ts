import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'users';

  registerUser(user: User): boolean {
    const users = this.getUsers();
    const existing = users.find(u => u.email === user.email);
    if (existing) return false;

    
    user.password = CryptoJS.SHA256(user.password).toString();
    user.confirmPassword = CryptoJS.SHA256(user.confirmPassword).toString();

    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }

  loginUser(email: string, password: string): boolean {
    const users = this.getUsers();

    const hashedPassword = CryptoJS.SHA256(password).toString();
    const found = users.find(u => u.email === email && u.password === hashedPassword);

    if (found) {
      localStorage.setItem('currentUser', JSON.stringify(found));
      return true;
    }
    return false;
  }

  getCurrentUser(): User | null {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  forgetUser(email: string, newPass: string): boolean {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) return false;

    const hashedNewPass = CryptoJS.SHA256(newPass).toString();
    users[userIndex].password = hashedNewPass;
    users[userIndex].confirmPassword = hashedNewPass;

    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }

  private getUsers(): User[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}

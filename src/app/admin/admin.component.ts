import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.adminService.getUsers();
    this.filteredUsers = [...this.users];
  }

  searchUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deleteUser(email: string) {
    this.adminService.deleteUser(email);
    this.loadUsers();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent {
  bookmarks = [
    {
      title: 'Angular Tips & Tricks',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      description: 'This is angular tips and tricks'
    },
    {
      title: 'RxJS Cheat Sheet',
      imageUrl: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
      description: 'RxJS Cheet Sheet for free'
    },
    {
      title: 'State Management Guide',
      imageUrl: 'https://ngrx.io/assets/images/badge.svg',
      description: 'State management full course'
    }
  ];
}

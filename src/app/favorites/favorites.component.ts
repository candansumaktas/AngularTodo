import { Component, OnInit } from '@angular/core';
import { Favorite } from './favorite';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoriteComponent implements OnInit {


  favorites:Favorite[]=[]

  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.favorites=this.favoriteService.getFavorite();
  }


}

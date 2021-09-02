import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album/album';
import { FavoriteService } from '../favorites/favorite.service';
import { UserService } from '../services/user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] = []
  
  constructor(private userService:UserService,
              private toastrService: ToastrService,
              private favoriteService: FavoriteService ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users=data
    })
  }

  addToFavorite(album:Album){
    this.toastrService.success("Sepete eklendi", album.title)
    this.favoriteService.addToFavorite(album);

  }

}

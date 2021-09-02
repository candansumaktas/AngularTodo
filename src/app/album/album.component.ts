import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from './album';
import { AlbumService } from '../services/album.service';
import { FavoriteService } from '../favorites/favorite.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private album: AlbumService,
    private toastrService: ToastrService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.album.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  addToFavorite(album: Album) {

      this.favoriteService.addToFavorite(album);
    }
}

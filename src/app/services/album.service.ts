import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../album/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  apiUrl: string = 'http://localhost:3000/albums';

  constructor(private httpClient:HttpClient) {}

  getAlbums():Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.apiUrl)
  }



  getAlbumByUserId(UserId:number): Observable<Album[]>{

    return this.httpClient.get<Album[]>(this.apiUrl + "?categoryId=" + UserId)

  }

  getAlbumById(id:number):Observable<Album>{
    return this.httpClient.get<Album>(this.apiUrl + '/' + id)
  }
  

  
}

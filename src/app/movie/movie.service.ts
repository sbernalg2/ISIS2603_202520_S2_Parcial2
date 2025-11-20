import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Movie } from './Movie'


@Injectable({
    providedIn: 'root'
})

export class MovieService {
    private readonly LIST_URL = 'https://raw.githubusercontent.com/Uniandes-isis2603/ISIS2603_202520_S2_Parcial2_json/refs/heads/main/movies/movie.json'

    // URL template: replace {id} with the movie id
    private readonly DETAIL_URL = 'https://raw.githubusercontent.com/Uniandes-isis2603/ISIS2603_202520_S2_Parcial2_json/refs/heads/main/movies/{id}/movie.json'

    constructor(private http: HttpClient) {}

getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.LIST_URL);
}

getMovieDetails(id : number | string ): Observable<Movie> {
    const url = this.DETAIL_URL.replace('{id}', String(id));
    return this.http.get<Movie>(url);
}
}
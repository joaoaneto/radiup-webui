import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Music {
    name: string;
    artist: string[];
    id: string;
    sourceId: number;
}

@Injectable()
export class MusicService {

    constructor(private http: Http) { }

    getMusics(name: string): Promise<Music[]> {
        return this.http.get('localhost:6868/musics')
            .toPromise()
            .then(response => response.json().data as Music[])
            .catch();
    }

}
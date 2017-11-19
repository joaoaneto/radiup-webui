import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Music } from '../music';

import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

const headerDict = {
    'Authorization': 'Bearer BQDuOQ_mMbeKsjj2cYG7LMM5sRaz5degiF98TPKG_sLndKHDsE7h_LCaXtrUA7puP3pPjZT5fk38dWKDWqiNywF0ZLqHt_l-FozawY9DyvfDl5P40yytCBpDZCJARgEPOD6GUbi32ukEGqhThRUwdqg3KEMJTQwcYg040vXrgAN5Zernik20h7s5-j6xfq35TgM1PLIuyv5y3LR3FO-qgQhQDJdtxBSo15_m4qhmPJvlCFSIUXZtflh9'
}

const headerObj = {
    headers: new Headers(headerDict),
}

@Injectable()
export class MusicService {

    constructor(private http: Http) { }

    searchMusics(name: string): Observable<Music[]> {

        let headers = new Headers();
        let opts = new RequestOptions();

        let apiUrl = `http://localhost:6868/music/${name}`

        headers.append('Authorization', 'Bearer BQDuOQ_mMbeKsjj2cYG7LMM5sRaz5degiF98TPKG_sLndKHDsE7h_LCaXtrUA7puP3pPjZT5fk38dWKDWqiNywF0ZLqHt_l-FozawY9DyvfDl5P40yytCBpDZCJARgEPOD6GUbi32ukEGqhThRUwdqg3KEMJTQwcYg040vXrgAN5Zernik20h7s5-j6xfq35TgM1PLIuyv5y3LR3FO-qgQhQDJdtxBSo15_m4qhmPJvlCFSIUXZtflh9');
        opts.headers = headers;

        /*return this.http.get(apiUrl, opts)
            .map((response) =>  {
                return response.json();
            })*/

        
        return this.http.get(apiUrl, opts) //returns an Observable<Response>
            .map(res => {   // get each response
                return res.json().map(item => { // loop over each item in the result
                    return new Music( // we convert the raw data to Music instance
                        item.Name,
                        item.Artist,
                        item.ID,
                        item.SourceID
                    );
                })
            })
            .catch(e => { console.log(e); return Observable.of(e); });

    }


}
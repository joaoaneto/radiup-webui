import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Music } from '../music';

import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';


const headerDict = {
    'Authorization': 'Bearer BQCzCm8hy48e3iMVOkYfwM1N5FcczZFZgGgwYyJ4Nfpn6XOwbLdZMizbo1RUGv8YVBhLeRlI5wlwCe8ctw_FteZOiBkQ6V3AVXrtJYs5qCOeYATK9I5lL1qxXnNgegWxspF5hcoqTgF1V_bcNoB150zgfQJaDv4rk3q3m_Bf-iMtSvyi6y2c6hBneRfUOB4hdqxRxrhcPKDept5miDIFJu1YsW12GSukvjghxUT8e3Jdqdn_UB-eAdtJSBIWjmB8GPRVr40BxLOsIvwSQn05vUhs5hmgkVHbha1813fLMMhj'
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

        headers.append('Authorization', 'Bearer BQCzCm8hy48e3iMVOkYfwM1N5FcczZFZgGgwYyJ4Nfpn6XOwbLdZMizbo1RUGv8YVBhLeRlI5wlwCe8ctw_FteZOiBkQ6V3AVXrtJYs5qCOeYATK9I5lL1qxXnNgegWxspF5hcoqTgF1V_bcNoB150zgfQJaDv4rk3q3m_Bf-iMtSvyi6y2c6hBneRfUOB4hdqxRxrhcPKDept5miDIFJu1YsW12GSukvjghxUT8e3Jdqdn_UB-eAdtJSBIWjmB8GPRVr40BxLOsIvwSQn05vUhs5hmgkVHbha1813fLMMhj');
        opts.headers = headers;

        return this.http.get(apiUrl, opts) //returns an Observable<Response>
            .map(res => {   // get each response
                return res.json().results.map(item => { // loop over each item in the result
                    return new Music( // we convert the raw data to Music instance
                        item.Name,
                        item.Artist,
                        item.ID,
                        item.SourceID
                    );
                })
            });


    }

}
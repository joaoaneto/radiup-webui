import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

import { Music } from '../music';

import { MusicService } from '../services/music.service';

@Component({
    selector: 'music-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    musics$: Observable<Music[]>

    private searchField: FormControl;
    private results: Observable<Music[]>

    constructor(private musicService: MusicService) { }

    ngOnInit(): void {
        
        this.searchField = new FormControl();

        // emits a search term every time we want to perform a search
        this.results = this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.musicService.searchMusics(term));
    }

}
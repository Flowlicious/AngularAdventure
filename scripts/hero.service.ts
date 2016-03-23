///<reference path="../node_modules/angular2/core.d.ts"/>
import {Injectable} from 'angular2/core'
import {Hero} from './hero'
import {Http} from 'angular2/http';
import 'rxjs/Rx';
@Injectable()
export class HeroService {
    constructor(private _http: Http) { }

    getHeroes() {
        //return Promise.resolve(HEROES);       
        return this._http.get("api/Values/").map(res => res.json())
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        //return new Promise<Hero[]>(resolve =>
        //    setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        //);
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];


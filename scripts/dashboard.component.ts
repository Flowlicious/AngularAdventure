import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: '/views/dashboard.component.html',  
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private _heroService: HeroService, private _router: Router) { }
    ngOnInit() {
        this._heroService.getHeroes().subscribe(
            data => this.heroes = data,
            err => console.log("error" + err),
            () => console.log("fertig")
        );
        //this._heroService.getHeroes().then(heroes => this.heroes);
     
   
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}
﻿///<reference path="../node_modules/angular2/core.d.ts"/>
import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero'
import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';
@Component({
    selector: 'my-hero-detail',
    templateUrl: '/Views/hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }

    hero: Hero;
}
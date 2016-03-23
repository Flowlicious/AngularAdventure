var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../node_modules/angular2/core.d.ts"/>
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/Rx');
var HeroService = (function () {
    function HeroService(_http) {
        this._http = _http;
    }
    HeroService.prototype.getHeroes = function () {
        //return Promise.resolve(HEROES);       
        return this._http.get("api/Values/").map(function (res) { return res.json(); });
    };
    // See the "Take it slow" appendix
    HeroService.prototype.getHeroesSlowly = function () {
        //return new Promise<Hero[]>(resolve =>
        //    setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        //);
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
var HEROES = [
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
//# sourceMappingURL=hero.service.js.map
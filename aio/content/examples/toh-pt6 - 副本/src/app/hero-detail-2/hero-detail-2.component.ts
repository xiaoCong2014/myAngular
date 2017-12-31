import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
// import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail-2',
  templateUrl: './hero-detail-2.component.html',
  styleUrls: [ './hero-detail-2.component.css' ]
})
export class HeroDetail2Component implements OnInit {

  @Input()
  hero: Hero;

  _date = null;

  constructor(
    private route: ActivatedRoute
    // private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {

    // console.info("HeroDetail2Component ngOnInit()");

    const id = +this.route.snapshot.paramMap.get('id');

    // console.info( `${id}` );

  }

  goBack(): void {
    this.location.back();
  }

  myClick(): void {
    console.info( "myClick" );
    alert("myClick alert");
  }

  pickerClick( event ): void {
    // console.info( "pickerClick" );

    // debugger;

    // console.info( "pickerClick" );

    // this.hero;

    if ( this._date != null ) { //  && _date != defined
      // alert(`alert ${this._date}`);
      console.info( `alert ${this._date}`);
    }

  }


// getHero(): void {
//   const id = +this.route.snapshot.paramMap.get('id');
//   this.heroService.getHero(id)
//     .subscribe(hero => this.hero = hero);
// }
//
  //
  //  // #docregion save
  //  save(): void {
  //     this.heroService.updateHero(this.hero)
  //       .subscribe(() => this.goBack());
  //   }
  // //  #enddocregion save

}

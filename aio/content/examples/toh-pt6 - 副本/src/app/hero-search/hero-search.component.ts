// #docplaster
// #docregion
import { Component, OnInit } from '@angular/core';

// #docregion rxjs-imports
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
// #enddocregion rxjs-imports

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  // #docregion heroes-stream

  /**
   * 被搜索出来的
   */
  heroes$: Observable<Hero[]>;
  // #enddocregion heroes-stream
  // #docregion searchTerms

  /**
   * 主题 , 可以被观察的
   * @type {Subject<string>}
   */
  private searchTerms = new Subject<string>();
  // #enddocregion searchTerms

  constructor(private heroService: HeroService) {
    ;
  }

  // #docregion searchTerms

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  // #enddocregion searchTerms

  ngOnInit(): void {
    // 建立订阅关系吧
    // #docregion search
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
    // #enddocregion search
  }
}

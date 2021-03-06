import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',// 调用它，就是调用这个组建, <app-heroes></app-heroes>
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']//@Component 元数据中指定的样式和样式表都是局限于该组件的。 heroes.component.css 中的样式只会作用于 HeroesComponent，既不会影响到组件外的 HTML，也不会影响到其它组件中的 HTML。
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {// ngOnInit() 是一个生命周期钩子
    //组件获取初始数据的好地方
    this.getHeroes();
    console.log('HeroesComponent::ngOnInit function running');
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(result => this.heroes = result);
  }

  clickedHero(hero: Hero) {
    this.router.navigate(['/detail/' + hero.id, {}]);
  }

}

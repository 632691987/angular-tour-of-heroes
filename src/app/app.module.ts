//Angular 需要知道如何把应用程序的各个部分组合到一起，以及该应用需要哪些其它文件和库。
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';// 引入一切
import { FormsModule } from '@angular/forms';// 引入ngModel, 双向绑定

import { AppComponent } from './app.component';

//每个组件都必须声明在（且只能声明在）一个 NgModule 中。
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { StringInitComponent } from './lesson2/string-init/string-init.component';
import { ItemDetailComponent } from './lesson2/item-detail/item-detail.component';
import { ItemListComponent } from './lesson2/item-list/item-list.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson3ItemDetailComponent } from './lesson3/lesson3-item-detail/lesson3-item-detail.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { HighlightDirective } from './lesson5/highlight.directive';
import { Lesson6ParentComponent } from './lesson6/lesson6-parent/lesson6-parent.component';
import { Lesson6ChildComponent } from './lesson6/lesson6-child/lesson6-child.component';
import { AstronautComponent } from './lesson7/astronaut/astronaut.component';
import { MissionControlComponent } from './lesson7/mission-control/mission-control.component';
import { C1Component } from './lesson8/c1/c1.component';
import { C2Component } from './lesson8/c2/c2.component';
import { BannerComponent } from './lesson8/banner/banner.component';
import { AdDirective } from './lesson8/ad.directive';
import { ClickDirective } from './lesson3/click.directive';
import { UnlessDirective } from './lesson5/unless.directive';
import { NestRouteComponent } from './lesson9/nest-route/nest-route.component';
import { SubRount1Component } from './lesson9/sub-rount1/sub-rount1.component';
import { SubRount2Component } from './lesson9/sub-rount2/sub-rount2.component';
import { I18nComponent } from './lesson10/i18n/i18n.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    Lesson1Component,
    Lesson2Component,
    StringInitComponent,
    ItemDetailComponent,
    ItemListComponent,
    Lesson3Component,
    Lesson3ItemDetailComponent,
    Lesson4Component,
    Lesson5Component,
    HighlightDirective,
    Lesson6ParentComponent,
    Lesson6ChildComponent,
    AstronautComponent,
    MissionControlComponent,
    C1Component,
    C2Component,
    BannerComponent,
    AdDirective,
    ClickDirective,
    UnlessDirective,
    NestRouteComponent,
    SubRount1Component,
    SubRount2Component,
    I18nComponent,//每个组件都必须声明在（且只能声明在）一个 NgModule 中。
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

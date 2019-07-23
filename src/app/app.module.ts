import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { ListComponent } from '.list/list.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { LockFilter } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    GridComponent,
    LockFilter
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

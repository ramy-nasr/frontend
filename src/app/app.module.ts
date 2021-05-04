import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposListComponent } from './features/repos-list/repos-list.component';
import { RepoItemComponent } from './features/repo-item/repo-item.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReposEffects } from './features/store/repos.effects';
import { ReposReducer } from './features/store/repos.reducer';
import { ReposService } from './features/repos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DaysDifferencePipe, NumberSuffixPipe } from './shared/pipes';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    RepoItemComponent,
    ReposListComponent,
    DaysDifferencePipe,
    NumberSuffixPipe
  ],
  imports: [
    EffectsModule.forRoot([ReposEffects]),
    StoreModule.forRoot({ repos: ReposReducer }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [ReposService],
  bootstrap: [AppComponent],
  exports:[MatCardModule]
})
export class AppModule { }

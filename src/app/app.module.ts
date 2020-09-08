import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PaginationModule } from './shared/components/pagination/pagination.module';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store/reducers';
import { effects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true,
      closeButton: true,
      progressBar: true
    }),
    PaginationModule,
    StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

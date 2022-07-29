import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowingNowComponent } from './pages';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { menu } from 'src/menu';

@NgModule({
  declarations: [
    AppComponent,
    ShowingNowComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: 'menu', useValue: menu }],
  bootstrap: [AppComponent],
})
export class AppModule {}

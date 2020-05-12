import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatDisplayComponent } from './components/cat-display/cat-display.component';
import { CatcardComponent } from './components/catcard/catcard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchComponent } from './components/search/search.component';
import { CatService } from './service/cat.service';
import { CartService } from './service/cart.service';
import { CartComponent } from './components/cart/cart.component';


const routes:Routes=[
  {path:"",component:CatDisplayComponent},  
  {path:"search/:breed",component:CatDisplayComponent},  
  {path:"catdetails/:id",component:CatDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CatcardComponent,
    NotFoundComponent,
    CatDetailsComponent,
    CatDisplayComponent,
    SearchComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
    NgbModule
    
    
  ],
  providers: [CatService,CartService],
  bootstrap: [AppComponent,RouterModule]
})
export class AppModule { }

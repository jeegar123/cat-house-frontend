import { RouterModule, Routes } from '@angular/router';
import { CatService } from './service/cat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
import { CatcardComponent } from './components/catcard/catcard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatDisplayComponent } from './components/cat-display/cat-display.component';


const routes:Routes=[
  {path:"",component:CatDisplayComponent},  
  {path:"catdetails/:id",component:CatDetailsComponent},
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
    CatDisplayComponent
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
    RouterModule.forRoot(routes)
    
    
  ],
  providers: [CatService],
  bootstrap: [AppComponent,RouterModule]
})
export class AppModule { }

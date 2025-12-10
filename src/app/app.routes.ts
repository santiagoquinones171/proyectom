import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CatalogComponent } from './pages/catalog/catalog';
import { BikeDetailComponent } from './pages/bike-detail/bike-detail';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'bike/:id', component: BikeDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/home' }
];
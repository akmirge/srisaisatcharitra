import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found.component';
import { NavGuruwarComponent } from './nav-guruwar/nav-guruwar.component';
import { ShriRamComponent } from './shri-ram/shri-ram.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'navguruwar', component: NavGuruwarComponent},
  {path: 'shriram', component: ShriRamComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'externalRedirect', canActivate: [externalUrlProvider], component: NotFoundComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_blank');
      },
    },
    {
      provide: deactivateGuard,
      useValue: () => {
        console.log('Guard function is called!');
        return false;
      }
    }
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService, RoleGuardService } from './guards/auth-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { ServiceComponent } from './frontend/service/service.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { ProductComponent } from './frontend/product/product.component';
import { BlogComponent } from './frontend/blog/blog.component';
import { TechnologyComponent } from './frontend/technology/technology.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,  canActivate: [AuthGuardService, RoleGuardService],data: {role: 'Admin'} },
    { path: 'about', component: AboutComponent,  canActivate: [AuthGuardService, RoleGuardService],data: {role: 'Developer'} },
    { path: 'service', component: ServiceComponent,  canActivate: [AuthGuardService, RoleGuardService],data: {role: 'Admin'} },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'tech', component: TechnologyComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
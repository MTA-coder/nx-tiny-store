import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SEOHomePage, SEOProductPage } from '@tajer/core';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'screen'
  },
  {
    path: 'screen',
    data: {
      seo: SEOHomePage
    },
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    data: {
      seo: SEOProductPage
    },
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: '**',
    redirectTo: 'screen'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

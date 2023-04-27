import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { LoremIpsumTextComponent } from './components/template/lorem-ipsum-text/lorem-ipsum-text.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'products', component: ProductCrudComponent } ,
  { path: 'loremipsum', component: LoremIpsumTextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicCrudComponent } from './dynamic-crud/dynamic-crud.component';
import { HomeComponent } from './home/home.component';
import { StaticCrudComponent } from './static-crud/static-crud.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'static-crud', component: StaticCrudComponent},
  {path:'dynamic-crud', component: DynamicCrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

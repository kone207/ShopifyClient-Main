import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './components/Login/login/login.component';
import { RegistrationComponent } from './components/admin/register/registration/registration.component';
import { HomeComponent } from './components/public/home/home.component';

const routes: Routes = [
  {path: "", component: ItemsComponent},
  {path: "home", component: HomeComponent},
  {path: "items", component: ItemsComponent},
  {path: "items/:id", component: ItemDetailsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

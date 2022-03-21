import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FavoritefoodComponent } from './favoritefood/favoritefood.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecomendComponent } from './recomend/recomend.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HeaderComponent},
  {path:'recomendation',canActivate:[AuthGuard],component:RecomendComponent},
  {path:'search',canActivate:[AuthGuard],component:SearchComponent},
  {path:'favoritefood',canActivate:[AuthGuard] ,component:FavoritefoodComponent},
  {path:'logout',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//,canActivate:[AuthGuard]
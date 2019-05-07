import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ControlPageComponent } from './control-page/control-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'control-page', component: ControlPageComponent },
  { path: 'settings-page', component: SettingsPageComponent },
  { path: 'info-page', component: InfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlPageComponent } from './control-page/control-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ModalComponent } from './modal/modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlPageComponent,
    InfoPageComponent,
    MainPageComponent,
    SettingsPageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ], exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }

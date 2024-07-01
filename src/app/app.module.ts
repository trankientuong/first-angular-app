import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ], // The declarations array is for non-Standalone Components
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule], // The imports array can be used for Standalone Components
})
export class AppModule {}

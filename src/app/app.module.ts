import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CanvasComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

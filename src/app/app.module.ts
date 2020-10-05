// Imports automaticos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports de angular
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Imports de nuestros servicios y componentes
import { DataService } from './data-service';
import { PersonaService } from './persona-service';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

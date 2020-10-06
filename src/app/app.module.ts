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


// Los decoradores son funciones que modifican clases de JavaScript.
@NgModule({
  // Las declaraciones son las clases de vista que pertenecen a este módulo.
  declarations: [
    AppComponent,
    PersonasComponent,
    FormularioComponent
  ],

  // Importamos otros módulos cuyas clases exportadas sean necesarias para las
  // plantillas de componentes declaradas en este módulo.

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  // Los proveedores son los creadores de servicios que este módulo contribuye a la
  // recolección global de servicios; Se vuelven accesibles en todas las partes de la
  // aplicación. Esto lo hablitamos cuando invocamos servicios desde una base de datos.
  providers: [PersonaService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

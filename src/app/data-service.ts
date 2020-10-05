import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona.model';

// Debido a que esta clase va a ser un servicio ponemos injectable
@Injectable()
// Esta clase solo se encarga de recuperar la informacion pero no lo administra
export class DataService {
  constructor(private httpClient: HttpClient){}

  urlBase = 'http://localhost:8080/persona-backend-java/webservice/personas';

  cargarPersonas(){
    return this.httpClient.get(this.urlBase);
  }

  agregarPersona(persona: Persona){
    return this.httpClient.post(this.urlBase, persona);
  }

  modificarPersona(idPersona: number, persona: Persona){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.put(url, persona)
      .subscribe(
        (response) => {
          console.log('resultado de modificar persona: ' + response);
        },
        (error) => console.log('Error en modificar Persona' + error)
      );
  }

  eliminarPesona(idPersona: number){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url)
    .subscribe(
      (response) => {
        console.log('resultado de eliminar persona: ' + response);
      },
      (error) => console.log('Error en eliminar Persona' + error)
    );
  }
}

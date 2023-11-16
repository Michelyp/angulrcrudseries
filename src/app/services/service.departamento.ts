import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Personajes } from 'src/models/personajes';
import { Personaje } from 'src/models/personaje';
@Injectable()
export class ServiceSeries{
    constructor(private _http:HttpClient){}
        getSeries(): Observable<any>{
            var request = "api/series";
            var url = environment.urlApiSeries + request; 
            return this._http.get(url);

            
        }
        getDetalleSerie(id:number): Observable<any>{
            var request = "api/series/" +id;
            var url = environment.urlApiSeries + request;
            return this._http.get(url);
 
        }
        getPersonajes(id:number): Observable<any>{
            var request = "api/Series/PersonajesSerie/" +id;
            var url = environment.urlApiSeries + request;
            return this._http.get(url);
        }
        getPersonajesSelect(): Observable<any>{
            var request = "api/personajes";
            var url = environment.urlApiSeries + request;
            return this._http.get(url);
        }
        postNuevoPersonaje(personajes:Personajes):Observable<any>{
                var json = JSON.stringify(personajes);
                var header = new HttpHeaders()
                header = header.set("content-type", "application/json");
                var request = "api/personajes";
                var url = environment.urlApiSeries + request;
                console.log(json);
                
                return this._http.post(url,json,{headers:header})
        }
        putActualizarPersonaje(personaje:Personaje,idpersonaje:number, idserie:number){
    
            var json = JSON.stringify(personaje);
            var header = new HttpHeaders();
            header = header.set("content-type", "application/json");
            var request = "api/personajes/" + idpersonaje +"/"+ idserie;
            var url = environment.urlApiSeries + request;
            console.log(url);
            return this._http.put(url,json,{headers:header});
            
        }    
}
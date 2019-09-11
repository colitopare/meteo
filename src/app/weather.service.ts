import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  // Injection de dépendance HttpClient pour l'utiliser dans ma classe
  constructor(private http: HttpClient) {}

  // Requête à l'API openweathermap qui va me permettre de récupérer la température d'une ville
  getTemp(ville: string) {
    return (
      this.http
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            ville +
            "&appid=8e602b9ea28ed4f9f8fc97a5f6d1105c&units=metric"
        )
        // Le pipe va me permettre de ne récupérer que la température
        .pipe(map((result: any) => result.main.temp as number))
    );
  }
}

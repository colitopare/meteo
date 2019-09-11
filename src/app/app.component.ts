import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WeatherService } from "./weather.service";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h2 class="text-center">APPLI Météo</h2>

      <!-- Formulaire pour la saisie de la ville -->
      <form [formGroup]="form" (ngSubmit)="handleSubmit()">
        <div class="form-group">
          <input
            formControlName="ville"
            class="form-control"
            type="text"
            placeholder="Ville"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-info ">Valider</button>
        </div>
      </form>
    </div>

    <!-- Partie card visible que lorsque le formulaire a été soumis et que la résultat -->
    <div
      *ngIf="temperature"
      class="card border-info mb-3 center"
      style="max-width: 20rem;"
    >
      <div class="card-body">
        <h4 class="card-title">Température :</h4>
        <p class="card-text">
          {{ temperature }}
        </p>
      </div>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // la structure du formulaire avec les validations voulu
  form = new FormGroup({
    ville: new FormControl("", Validators.required)
  });
  // pour récupérer la température pour pouvoir la récup dans la card
  temperature: number;

  constructor(private service: WeatherService) {}

  // quand le formulaire est soumis
  handleSubmit() {
    const ville = this.form.value.ville;
    this.service.getTemp(ville).subscribe(result => {
      this.temperature = result;
    });
  }
}

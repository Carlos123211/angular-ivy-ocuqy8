import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs';
import { PokemonService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;
  pokemons: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private pokeApi: PokemonService
  ) {
    this.createForms();
  }

  ngOnInit() {
    this.loadPokemons();
  }

  private createForms() {
    this.form = this.formBuilder.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      number: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      sex: new FormControl(null, [Validators.required]),
      pokemon: new FormControl(null, [Validators.required]),
    });
  }

  public loadPokemons() {
    this.pokeApi
      .getPokemons()
      .pipe(map((pokemon: any) => pokemon.results))
      .subscribe((response) => {
        console.log(response);
        this.pokemons = response;
      });
  }

  public onSumit() {
    console.log('show data', this.form.value);
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  styleUrls: ['./some-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomePageComponent{
  things = ['Hola', 'Como', 'Estas', 'Nuevo', 'Adios', 'Calmado', 'Venado', 'Palabras', 'Omen', 'Asus Rog'];
}

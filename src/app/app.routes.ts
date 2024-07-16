import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { ObservablesComponent } from './components/observables/observables.component';

export const routes: Routes = [
    {
        path: '',
        component: ObservablesComponent
    },
    {
        path: 'input',
        component: InputComponent
    },
    {
        path: 'form',
        component: FormularioComponent
    },
    {
        path: 'personajes',
        component: ListaPersonajesComponent
    }
];

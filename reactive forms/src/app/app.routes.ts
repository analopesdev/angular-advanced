import {Routes} from '@angular/router';
import {HomeComponent} from './navegacao/home/home.component'
import {ContatoComponent} from './institucional/contato/contato.component';
import {SobreComponent} from './institucional/sobre/sobre.component';
import {DataBindingComponent} from './demos/data-binding/data-binding.component';
import {CadastroComponent} from "./demos/reactiveForms/cadastro/cadastro.component";

export const rootRouterConfig: Routes = [
    //  Quando não tiver rota nenhuma configurar um redirecionamento padrão,
    //  PathhMatch é o redirecionamento por completo
    {path: '', redirectTo: '/home', pathMatch: 'full'},

    //  Path é o domínio
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contato', component: ContatoComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'feature-data-binding',
        component: DataBindingComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    }
];

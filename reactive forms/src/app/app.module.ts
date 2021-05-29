import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import {AppComponent} from './app.component';
import {MenuComponent} from './navegacao/menu/menu.component';
import {HomeComponent} from './navegacao/home/home.component';
import {FooterComponent} from './navegacao/footer/footer.component';
import {SobreComponent} from './institucional/sobre/sobre.component';
import {ContatoComponent} from './institucional/contato/contato.component';
import {rootRouterConfig} from './app.routes';
import {DataBindingComponent} from './demos/data-binding/data-binding.component';
import {CadastroComponent} from './demos/reactiveForms/cadastro/cadastro.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        FooterComponent,
        SobreComponent,
        ContatoComponent,
        DataBindingComponent,
        CadastroComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        //  Import das rotas
        //  useHash = false para tirar o prefixo => "#"
        [RouterModule.forRoot(rootRouterConfig, {useHash: false})],
    ],
    providers: [
        //  Base da minha URL = "/" prefixo de rota
        {provide: APP_BASE_HREF, useValue: '/'}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "./models/usuario";
import {MASKS, NgBrazilValidators} from 'ng-brazil';
import {utilsBr} from 'js-brasil'
import {CustomValidators} from "ng2-validation";

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styles: []
})
export class CadastroComponent implements OnInit {

    cadastroForm: FormGroup;
    usuario: Usuario;
    formResult: string = ''
    MASKS = utilsBr.MASKS;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        // FormGroup
        // this.cadastroForm = new FormGroup({
        //   nome: new FormControl(''),
        //   cpf: new FormControl(''),
        //   email: new FormControl(''),
        //   senha: new FormControl(''),
        //   confirmacaoSenha: new FormControl('')
        // })

        let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])])
        let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)])

        //FormBuilder
        this.cadastroForm = this.fb.group({
                nome: ['', Validators.required, Validators.minLength(2), Validators.maxLength(150)],
                cpf: ['', Validators.required, NgBrazilValidators.cpf],
                email: ['', [Validators.required, Validators.email]],
                senha: senha,
                confirmacaoSenha: senhaConfirm,
            }
        )
    }

    adicionarUsuario() {
        if (this.cadastroForm.dirty && this.cadastroForm.valid) {
            this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
            this.formResult = JSON.stringify(this.cadastroForm.value)
        } else {
            this.formResult = "Não submeteu"
        }
    }
}

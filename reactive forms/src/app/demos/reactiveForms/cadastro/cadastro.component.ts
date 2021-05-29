import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "./models/usuario";

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styles: []
})
export class CadastroComponent implements OnInit {

    cadastroForm: FormGroup;
    usuario: Usuario;
    formResult: string = ''

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

        //FormBuilder
        this.cadastroForm = this.fb.group({
                nome: ['', Validators.required],
                cpf: [''],
                email: ['', [Validators.required, Validators.email]],
                senha: [''],
                confirmacaoSenha:['']
            }
        )
    }

    adicionarUsuario() {
        if(this.cadastroForm.dirty && this.cadastroForm.valid){
            this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
            this.formResult = JSON.stringify(this.cadastroForm.value)
        }else{
            this.formResult = "Não submeteu"
        }
    }
}

import { createHash} from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
};

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }
    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex');
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === this.criaHash(senha)){
            console.log("Login bem-sucedido");
            return true;
        }
            // console.log("Usuário ou senha incorretos");
            return false;
    }
}

const usuario = new Usuario('joao manuel', '9999');

for (let senhaTeste = 0 ; senhaTeste < 10000; senhaTeste++){
if(usuario.autentica("joao manuel", senhaTeste.toString())) {
    console.log(`A senha do usuário é ${senhaTeste}`)
}}
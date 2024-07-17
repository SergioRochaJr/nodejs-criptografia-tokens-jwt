import { createHash} from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
};

console.log(criaHash('uma string qualquer'));

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)){
            console.log("Login bem-sucedido");
            return true;
        }
            console.log("Usuário ou senha incorretos");
            return false;
    }
}

const usuario = new Usuario('joao manuel', 'minhaSenha');

console.log(usuario)

//sucesso
usuario.autentica('joao manuel', 'minhaSenha');

//fracasso
usuario.autentica('joao mnuel', 'minhaSenha');
usuario.autentica('joao manuel', 'minhasenha');

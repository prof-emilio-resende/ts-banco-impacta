import * as rd from "readline";

console.log("Bem vindo ao Banco Impacta!");

const rl = rd.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve, reject) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function main() {
    const usuario = await perguntar("Informe seu usuário ");
    const senha = await perguntar("Informe sua senha ");
    console.log("Bem vindo!");
    console.log(`Usuário: ${usuario}, Senha: ${senha}`);
}


main()
    .catch((erro) => {
        console.error("Ocorreu um erro:", erro);
    })
    .finally(() => {
        rl.close();
        console.log("Encerrando recursos.");
        console.log("Obrigado por usar o Banco Impacta!");
        process.exit(0);
    });
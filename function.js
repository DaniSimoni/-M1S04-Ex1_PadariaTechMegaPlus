/* O seu Manoel gostou do último aplicativo e agora quer inovar.

Ele quer que você construa a aplicação utilizando orientação a objetos.

Construa uma classe chamada CaixaRegistradora.

Defina um atributo que armazene vários produtos no estoque contendo os seguintes campos:
[{
codigoBarra:number;
preco:number;
nome:string;
}]

Defina um método no qual o seu Manoel consiga adicionar novos produtos no estoque. Esse método recebe os mesmos campos do produto, e todos eles são obrigatórios.

Defina um método que inicie o atendimento ao cliente, você deve passar o nome do cliente para iniciar.

Defina um método que receba codigoBarra: number; e quantidade: number; para o seu Manoel conseguir adicionar itens na caixa registradora. **Importante: A aplicação só poderá adicionar itens na caixa, se o código de barra dele existir.

Defina um método que você consiga verificar o valor total da conta do cliente.

Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora. */



class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.caixa = [];
      this.clienteAtual = null;
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const novoProduto = { codigoBarra, preco, nome };
      this.estoque.push(novoProduto);
    }
  
    iniciarAtendimento(cliente) {
      this.clienteAtual = cliente;
      this.caixa = [];
      console.log(`Iniciando atendimento para ${cliente}`);
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
      if (!produto) {
        console.log(`Produto não encontrado com código de barras ${codigoBarra}`);
        return;
      }
      const item = { produto, quantidade };
      this.caixa.push(item);
      console.log(`Adicionando ${quantidade}x ${produto.nome} na caixa registradora`);
    }
  
    calcularValorTotal() {
      let total = 0;
      this.caixa.forEach((item) => {
        const { produto, quantidade } = item;
        total += produto.preco * quantidade;
      });
      console.log(`Valor total da conta de ${this.clienteAtual}: R$${total.toFixed(2)}`);
      return total;
    }
  
    fecharConta(dinheiro) {
      const total = this.calcularValorTotal();
      const troco = dinheiro - total;
      if (troco < 0) {
        console.log(`Dinheiro insuficiente para pagar a conta de R$${total.toFixed(2)}`);
        return;
      }
      console.log(`Troco: R$${troco.toFixed(2)}`);
      this.caixa = [];
    }
  }
  
  
  const caixa = new CaixaRegistradora();
  caixa.adicionarProduto(123, 10.99, 'Arroz');
  caixa.adicionarProduto(456, 5.49, 'Feijão');
  caixa.iniciarAtendimento('João');
  caixa.adicionarItem(123, 2);
  caixa.adicionarItem(456, 1);
  caixa.calcularValorTotal(); 
  caixa.fecharConta(30); 
  caixa.calcularValorTotal(); 
  











/* 
class CaixaRegistradora {
    constructor() {
      this.estoque = [];
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const novoProduto = { codigoBarra, preco, nome };
      this.estoque.push(novoProduto);
    }
  }
  
  // Exemplo de uso:
  const caixa = new CaixaRegistradora();
  caixa.adicionarProduto(123, 10.99, 'Arroz');
  caixa.adicionarProduto(456, 5.49, 'Feijão');
  console.log(caixa.estoque);














 */


/* class CaixaRegistradora {
    codigoBarra;
    preco;
    nome;

    constructor(codigoBarra, preco, nome) {
        this.codigoBarra = codigoBarra;
        this.preco = preco;
        this.nome = nome;
    } 

    adicionar (produto) {
        this.codigoBarra = codigoBarra;
        this.preco = preco;
        this.nome = nome;
    
}


};

const bolo = new CaixaRegistradora(1524, 10, bolo);
bolo.adicionar(); */

















/* 
class NovoProduto extends CaixaRegistradora {
    constructor(codigoBarra, anoFabricacao, nome, preco){
    super(codigoBarra, anoFabricacao, nome)
    this.preco = preco
    }
    get tipo() {
        return 'novoproduto'
    }
}console.log(NovoProduto.value) */






















/* let estoque = [
    { codigoBarra: 6532, anoFabricacao: 2022, nome: 'Bolo', preco: 5 },
    { codigoBarra: 9851, anoFabricacao: 2022, nome: 'Biscoito', preco: 15 },
    { codigoBarra: 1256, anoFabricacao: 2022, nome: 'Pão', preco: 12 },
    { codigoBarra: 7841, anoFabricacao: 2022, nome: 'Geléia', preco: 25 },
    { codigoBarra: 9637, anoFabricacao: 2022, nome: 'Queijo', preco: 15 },
];
console.log(estoque)


function registroProduto() {

    for (let i = 0; i < estoque.length; i++) {
        console.log(estoque[i]);
    };

    const novoCodigo = prompt('Digite o Cód de Barras')
        document.addEventListener('click', function (event) {
        event.preventDefault();
    });
        console.log(`Cód Barras: ${novoCodigo}`)

    const novoAno = prompt('Digite o Ano de Fabricação')
        document.addEventListener('click', function (event) {
        event.preventDefault();
    });
        console.log(`Fabricação: ${novoAno}`)

    const novoNome = prompt('Digite o Nome do Produto')
        document.addEventListener('click', function (event) {
        event.preventDefault();
    });
        console.log(`Produto: ${novoNome}`);

    const novoPreco = prompt('Digite o Preço do Produto')
        document.addEventListener('click', function (event) {
        event.preventDefault();
    });
        console.log(`Preço: ${novoPreco}`);
        /* return registroProduto(); 
        
}; */



/* class CaixaRegistradora {
    constructor(
        codigoBarra = codigoBarra,
        anoFabricacao = anoFabricacao,
        nome = nome,
        preco = preco,
    ) {
        throw new Error('Classe abstrata não pode ser instanciada')
    }
}

        get tipo() {
        throw new Error('Metodo "get tipo()" precisa ser implementado')
}
 */


/* class Produto {
    codigoBarra;
    anoFabricacao;
    nome;
    preco;

    constructor(codigoBarra, anoFabricacao, nome, preco) {
        this.codigoBarra = codigoBarra;
        this.anoFabricacao = anoFabricacao;
        this.nome = nome;
        this.preco = preco;

       
    }
};


class NovoProduto extends Produto {
    constructor(codigoBarra, anoFabricacao, nome, preco) {
        super(codigoBarra, anoFabricacao, nome, preco);
    }
}; 
 */
/* 

function registradora() {

    let cliente = prompt('Qual o nome do cliente?')
    alert(`Bem vindo, ${cliente}`);
    console.log(`Bem vindo, ${cliente}`);
    let valor = prompt('Digite o valor do produto');
    let total = 0;

    console.log(`Valor do Produto: R$ ${valor}`)
    while (valor != 0) {
        let proxValor = prompt('Digite o próximo valor ou 0 para parar');
        let price = parseFloat(proxValor);

        if (price === 0) {
            break;
        } total += price;
        console.log(`Valor do Produto: R$ ${price}`);
    }

    alert("Total: R$ " + total.toFixed(2));
    console.log(`Total: R$ ${total.toFixed(2)}`);


    while (true) {
        let proxValor = prompt("Dinheiro fornecido:");
        let paid = parseFloat(proxValor);

        if (isNaN(paid)) {
            alert("Valor inválido. Tente novamente.");
            console.log(`O valor recebido foi: R$ ${paid}`)
            continue;
        }

        if (paid < total) {
            alert("O dinheiro fornecido é insuficiente.");
            continue;
        }

        let change = paid - total;
        alert("Troco: R$ " + change.toFixed(2));
        console.log(`O valor recebido foi: R$ ${paid.toFixed(2)}`)
        console.log(`Troco: R$ ${change.toFixed(2)}`)
        break;
    };
};
















 */




/* const newProduct = [
    {codigoBarra: `${novoCodigo}`, anoFabricacao: `${novoAno}`, nome: `${novoNome}`, preco: `${novoPreco}`},
    console.log(newProduct)
] */


















/* const macarrao = new NovoProduto(1234, '2022','Macarrão')
console.log(macarrao)
console.log(macarrao.codigoBarra)
console.log(macarrao.anoFabricacao)
console.log(macarrao.nome)

const sabonete = new NovoProduto(4567, '2022','Sabonete')
console.log(sabonete)


const detergente = new NovoProduto(9876, '2022','Detergente')
console.log(detergente)

console.log(NovoProduto) */







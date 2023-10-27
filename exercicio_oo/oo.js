function Veiculo(marca, ano, placa) {
    this.marca = marca;
    this.ano = ano;
    this.placa = placa;
}

function Moto(marca, ano, placa, cilindradas){
    this.cilindradas = cilindradas;

    Veiculo.call(this, marca, ano, placa);
}

function Carro(marca, ano, placa, cambio){
    this.cambio = cambio;

    Veiculo.call(this, marca, ano, placa);
}

veiculo1 = new Veiculo('Nissan', '2021', 'ABC1B34');
carro1 = new Carro('BMW', '2022', 'RIO2A19', 'Automático');
moto1 = new Moto('Honda', '2021', 'TRE3B43', '500');

console.log(moto1);
console.log(carro1);
console.log(veiculo1);
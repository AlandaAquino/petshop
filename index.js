const nomePetshop = "Petshop Avanade";

let pets = [
    {
        nome: 'Garfield',
        tipo: 'gato',
        idade: 5,
        raca: 'persa',
        peso: 3,
        tutor: 'jon',
        contato: '(81) 4002-8922',
        Vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Lulu',
        tipo: 'cachorro',
        idade: 3,
        raca: 'vira-lata',
        peso: 5,
        tutor: 'Maria',
        contato: '(81) 4002-8922',
        Vacinado: false,
        servicos: ['banho', 'tosa']
    },

    {
        nome: 'Luna',
        tipo: 'gato',
        idade: 1,
        raca: 'persa',
        peso: 2,
        tutor: 'Ana',
        contato: '(81) 4002-8922',
        Vacinado: false,
        servicos: ['banho', 'tosa']
    }
];

//console.log(pets);
const listarPets = () => {
    for (let pet of pets){
        //console.log(pets[i].nome);
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}
listarPets();
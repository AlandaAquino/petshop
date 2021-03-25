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
        idade: 5,
        raca: 'vira-lata',
        peso: 3,
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
        tutor: 'jon',
        contato: '(81) 4002-8922',
        Vacinado: false,
        servicos: ['banho', 'tosa']
    }
];

//console.log(pets);
const listarPets = () => {
    for (let i = 0; i < pets.length; i++){
        console.log(pets[i].nome);
    }
}
listarPets();
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
        servicos: ['banho']
    },
    {
        nome: 'Lulu',
        tipo: 'cachorro',
        idade: 3,
        raca: 'vira-lata',
        peso: 5,
        tutor: 'Maria',
        contato: '(81) 4002-8922',
        Vacinado: true,
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
        servicos: ['tosa']
    }
];

//console.log(pets);
const listarPets = () => {
    for (let pet of pets){
        //console.log(pets[i].nome);
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPet = (pet) => {
    if (pet.Vacinado === true) {
        console.log(`${pet.nome} está vacinado`)
    }
    else {
        pet.Vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso`)
    }
    
}


const vacinacaoPets = () => {
    totalVacinados = 0;
    for (let pet of pets) {
        if (pet.Vacinado === false){
            pet.Vacinado = true;
            totalVacinados++;
        }
    }
    console.log(`${totalVacinados} animais foram vacinados nessa campanha.`)
}

const adicionarPet = (nome, tipo, Idade, raca, peso, tutor, contato, 
    vacinado, servicos) => {
    novoPet = {nome, tipo, Idade, raca, peso, tutor, contato, 
        vacinado, servicos};
    pets.push(novoPet);
}

const darBanho = (pet) => {
    pet.servicos.push('banho');
    console.log(`O serviço banho foi realizado no ${pet.nome}`)
}

// const tosarPet = (pet) => {
//     pet.servicos.push('tosar');
//     console.log(`O serviço tosar foi realizado no ${pet.nome}`)
// }

// const dapararUnhasPet = (pet) => {
//     pet.servicos.push('aparar unhas');
//     console.log(`O serviço aparar unha foi realizado no ${pet.nome}`)
// }



adicionarPet('Banguela', 'gato', 4, 'Siamês', 2, 'Tiago', '81 1234-5678', true, []);
darBanho(pets[3]);
console.log(pets);

// listarPets();
// vacinarPet(pets[2]);
// vacinacaoPets();
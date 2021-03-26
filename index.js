const moment = require('moment');
const nomePetshop = "Petshop Avanade";
let database = require ("./database.json")
let pets = database.pets;


//console.log(pets);
const listarPets = () => {
    for (let pet of pets){
        //console.log(pets[i].nome);
        console.log(`O Nome do pet é ${pet.nome}, e o nome do  tutor é ${pet.tutor} e ele ${pet.Vacinado ? "foi vacinado" : "não foi vacinado"}`);
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

const darBanho = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};
const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (pet, servicos) => {
    console.log(`Olá, ${pet.nome}!`); 
    servicos(pet);
    console.log(`Tchau. Até mais!`)
}



// adicionarPet('Banguela', 'gato', 4, 'Siamês', 2, 'Tiago', '81 1234-5678', true, []);
// darBanho(pets[3]);
// apararUnhasPet(pets[2]);
// console.log(pets);
atenderCliente(pets[1], apararUnhasPet)
// listarPets();
// vacinarPet(pets[2]);
// vacinacaoPets();
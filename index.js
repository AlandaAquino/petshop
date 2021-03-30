const moment = require('moment');
const fs = require('fs');
let database = fs.readFileSync("./database.json");
let pets = database.pets;

database = JSON.parse(database);

const atualizarBanco = () => {
    //conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(database, null, 2);
    //atualização do arquivo database.json
    fs.writeFileSync('database.json', petsAtualizado, 'utf-8');
}


const listarPets = () => {

    database.pets.forEach((pet) => {

        console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.Vacinado) ? 'vacinado': 'não vacinado'}`);
    
        pet.servicos.forEach((servico) => {
            console.log(`${servico.data} - ${servico.nome}`);
        })
    })
}
// const listarPets = () => {
//     for (let pet of database.pets){
//         //console.log(pets[i].nome);
//         console.log(`O Nome do pet é ${pet.nome}, e o nome do  tutor é ${pet.tutor} e ele ${pet.Vacinado ? "foi vacinado" : "não foi vacinado"}`);
//     }
// }

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
    console.log("Campanha de vacina 2021");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;

    database.pets = database.pets.map((pet) => {
        if (!pet.Vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }

        return pet;
    });

    // atualizarBanco();
    console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};
//     totalVacinados = 0;
//     for (let pet of database.pets) {
//         if (pet.Vacinado === false){
//             pet.Vacinado = true;
//             totalVacinados++;
//         }
//     }
//     console.log(`${totalVacinados} animais foram vacinados nessa campanha.`)
// }

const adicionarPet = novoPet => {
    database.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

// const adicionarPet = (nome, tipo, Idade, raca, peso, tutor, contato, 
//     vacinado, servicos) => {
//     novoPet = {nome, tipo, Idade, raca, peso, tutor, contato, 
//         vacinado, servicos};
//         database.pets.push(novoPet);
// }

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

const buscarPet = (nomePet) => {

    let petEncontrado = database.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {
    // && E - AND
    // || OU - OR
    // == verifica valores iguais
    // === verifica valores e tipos iguais
    let petsEncontrados = database.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}


// adicionarPet({
//         "nome":"Draco",
//         "tipo":"gato",
//         "idade":5,
//         "raca":"Turkish Van",
//         "peso":10,
//         "tutor":"Ana Maria",
//         "contato":"(11) 2233-4455",
//         "Vacinado":true,
//         "servicos":[]
// })
//adicionarPet('Banguela', 'gato', 4, 'Siamês', 2, 'Tiago', '81 1234-5678', true, []);
// darBanho(database.pets[3]);
// apararUnhasPet(pets[2]);
// console.log(pets);
// atenderCliente(pets[1], apararUnhasPet)
//listarPets();
// vacinarPet(pets[2]);
//vacinacaoPets();

// clientePremium(database.pets[4])
// console.log(buscarPet('Draco'));
// console.log(clientePremium(database.pets[2]));
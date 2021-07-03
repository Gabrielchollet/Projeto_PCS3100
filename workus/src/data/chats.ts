export default {
    id: 'c1', 
    users: [{
        id: 'u1',
        name: 'Rodrigo',
    },{
        id: 'u2',
        name: 'Lucas'
    }],
     messages: [{
         id: 'm1',
         content: 'Sou um pedreiro e posso reformar o seu muro, gostaria de saber mais sobre o serviço',
         user: {
             id: 'u1',
             name: 'Rodrigo',
         },
     }, {
         id: 'm2',
         content: 'O muro da frente da minha casa está precisando de uma cara nova.',
         user: {
             id: 'u2',
             name: 'Lucas'
         },
     }, {
        id: 'm3',
        content: 'Pode ser daqui a uma semana?',
        user: {
            id: 'u1',
            name: 'Rodrigo',
        },
    }, {
        id: 'm4',
        content: 'Sem problema.',
        user: {
            id: 'u2',
            name: 'Lucas'
        },
    }, {
        id: 'm5',
        content: 'Depois decidimos melhor o dia então',
        user: {
            id: 'u1',
            name: 'Rodrigo',
            },
        }, {
        id: 'm6',
        content: 'Ok.',
        user: {
            id: 'u2',
            name: 'Lucas'
        },
     }],
}
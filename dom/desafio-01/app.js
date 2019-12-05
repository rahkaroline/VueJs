new Vue({
    el: '#desafio',
    data: {
        nome: 'Pedro Braga',
        idade: 21,
        imagem: './imagem.jpg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})

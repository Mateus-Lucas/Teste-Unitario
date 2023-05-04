const calculo = require('./calculadora')
describe('Funcoes matematicas', ()=>{
    test('Soma de dois números', ()=>{
        expect(calculo.soma(20, 30)).toBe(50)
    })
})
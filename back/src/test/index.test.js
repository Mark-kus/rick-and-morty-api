const server = require('../server.js');
const session = require('supertest');
const agent = session(app);

// Mock Service Worker, libreria para comunicación mock API, recomendad por react testing library

describe("Test de RUTAS", () => {
    describe("GET rickandmorty/{id}", () => {
        it("Response con status: 200", () => {
            agent.get("/rickandmorty/1").expect(200);
        })
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender' e 'image'", () => {
            return agent.get("/rickandmorty/1").expect(200).then(value => {
                expect(value.id).toBeTruthy();
                expect(value.name).toBeTruthy();
                expect(value.species).toBeTruthy();
                expect(value.gender).toBeTruthy();
                expect(value.image).toBeTruthy();
            });
        })
        it("Si hay un error responde con status: 500", () => {
            agent.get("/rickandmorty/IDqueNoExiste").expect(500);
        })
    })
})
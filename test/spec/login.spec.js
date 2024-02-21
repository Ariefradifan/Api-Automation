const request = require("supertest");
const { expect } = require("chai");
const { describe } = require("mocha");

describe('login feature', () => {
    it('success login', async () =>{
    const response = await request("https://kasir-api.belajarqa.com")
    .post("/authentications")
    .send ({
        "email": "kelontong.murah@gmail.com",
        "password": "SUKAJAYA10",
    })
    //console.log((await response).status);
    //console.log((await response).body);
    
    //ASSERTION
    expect((await response).status).to.equal(201);
    expect((await response).body.data.user.name).to.equal("Kelontong Murah")
    })
})

it('Failed login', async () =>{
    const response = await request("https://kasir-api.belajarqa.com")
    .post("/authentications")
    .send ({
        "email": "arief.murah@gmail.com",
        "password": "SUKAJAYA10123",
    })
    //console.log((await response).status);
    //console.log((await response).body);
    
    //ASSERTION
    expect((await response).status).to.equal(401);
    })

    describe('Get User', ()=>{
        const querypage = 2
        it('success Get User Detail', async () => {
            const response = await request('https://reqres.in')
           .get(`/api/users`+`?page=${querypage}`);
            
        
            console.log((await response).status);
            console.log((await response).body);
    
        })
    })

    
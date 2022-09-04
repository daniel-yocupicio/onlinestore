const http = require('http');
const supertest = require('supertest');
const app = require('../app');
let server;

beforeEach(() => {
    app.set('port', '3000');
    server = http.createServer(app);
    server.listen('3000');
})
 
afterEach(() => {
    server.close();
})

describe('GET /products', () => {
    test('Products are returned as json, getproductsbycategory method ', async () => {
        supertest(server).get('/onlinestore/product/getproductsbycategory/1/0/10')
            .expect(200)
            .expect('Content-type', /aplication\/json/);
    });
    
    test('Products are returned as json, getproducts method', async () => {
        supertest(server).get('/onlinestore/product/getproducts/0/10')
            .expect(200)
            .expect('Content-type', /aplication\/json/);
    });
    
    test('Products are returned as json, search method', async () => {
        supertest(server).get('/onlinestore/product/search/oso/0/10')
            .expect(200)
            .expect('Content-type', /aplication\/json/);
    });

    test('Products return status 400, getproductsbycategory method', async () => {
        supertest(server).get('/onlinestore/product/getproductsbycategory/1/0/')
            .expect(400);
    });
    
    test('Products return status 400, getproducts method', async () => {
        supertest(server).get('/onlinestore/product/getproducts/0/')
            .expect(400);
    });
    
    test('Products return status 400, search method', async () => {
        supertest(server).get('/onlinestore/product/search/oso/0/')
            .expect(400);
    });
})

describe('GET /categories', () => {
    test('Categories are returned as json', async () => {
        supertest(server).get('/onlinestore/category/getcategories')
            .expect(200)
            .expect('Content-type', /aplication\/json/);
    });    
})

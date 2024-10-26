import { describe, it, expect } from '@jest/globals'
import { app } from '..'
import request from 'supertest'

describe('testing POST sum Route', () => {

    // one test case
    it('should return sum of two number', async () => {

        const res = await request(app).post('/sum').send({
            a:50,
            b:5 
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(55); 
    });

    it('should return sum of two number', async () => {

        const res = await request(app).post('/sum').send({
            a:11,
            b:117 
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(128); 
    });

});













// import { describe, expect, test, it } from '@jest/globals'
// import { multiply, power } from '../index'

// describe('testing calculator function', () => {

//     describe('testing multiply function', () => {
//         it('mutilply 10 * 10 to equal 100', () => {
//             expect(multiply(10,10)).toBe(100);
//         });
    
//         it('mutilply 10 * 10 to equal 100', () => {
//             expect(multiply(10,20)).toBe(200);
//         });
    
//         it('mutilply 10 * 10 to equal 100', () => {
//             expect(multiply(10,30)).toBe(300);
//         });
    
//         it('mutilply 10 * 10 to equal 100', () => {
//             expect(multiply(10,40)).toBe(400);
//         });
//     });
    

//     describe('testing power function', () => {
//         it('mutilply 10 ^ 2 to equal 100', () => {
//             expect(power(10,2)).toBe(100);
//         });
    
//         it('mutilply 2 * 3 to equal 8', () => {
//             expect(power(2,3)).toBe(8);
//         });
    
//         it('mutilply 5 * 2 to equal 25', () => {
//             expect(power(5,2)).toBe(25);
//         });
    
//         it('mutilply 3 ^ 3 to equal 100', () => {
//             expect(power(3,3)).toBe(27);
//         });
//     });
// });


// Import the js file to test
import { postData } from '../src/client/js/formHandler'
const fetch = require('node-fetch')

describe("Testing the submit functionality", () => {
    test('Testing the handleSubmit() function', () => {
    const urlToAnal= 'http://www.silviafado.com/';   
        const newLocal = 'http://localhost:8081/api';
    return postData (newLocal, {formText: urlToAnal}).then(allData => {
        expect(allData.agreement).toBe('AGREEMENT');
    })});
});

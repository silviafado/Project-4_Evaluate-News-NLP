// Import the js file to test
import { handleSubmit, postData } from '../src/client/js/formHandler'
const fetch = require('node-fetch')

describe("Testing the submit functionality", () => {
    test('Testing the handleSubmit() function', () => {
    const urlToAnal= 'http://www.silviafado.com/';   
    return postData ('http://localhost:8081/api', {urlToAnal}).then(allData => {
        expect(allData.agreement).toBe('AGREEMENT');
    
        /*expect(handleSubmit).toBeDefined()*/
    })});
});

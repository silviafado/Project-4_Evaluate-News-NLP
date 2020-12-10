function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('input').value;
    if (Client.checkUrl(formText) === true) {
        postData('http://localhost:8081/api', {formText})
            .then(() => {
            updateUI()                
            })
        }
}

const postData = async (url='', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    try {
        const apiData = await response.json();
        console.log('Data received:', apiData);
        return apiData;
    } catch (error) {
        console.log('error',error);
    }
}

const updateUI = async () => {
    const req = await fetch('http://localhost:8081/data')
    try {
        const allData = await req.json();
        document.getElementById('agreement').innerHTML = 'Agreement: ' + allData.agreement;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + allData.subjectivity;
        document.getElementById('confidence').innerHTML = 'Confidence: ' + allData.confidence;
        document.getElementById('irony').innerHTML = 'Irony: ' + allData.irony;
    } catch (error) {
        console.log(error)
    }
}

export { handleSubmit }
export { postData }
export { updateUI }
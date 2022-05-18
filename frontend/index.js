const config = {
    backendUrl: 'http://localhost:3000'
}

const getRandomNumber = async () => {
    alert( (await (await fetch(config.backendUrl + '/random-number')).json()).number);
}

const postTest = async (stuff) => {
   await fetch(config.backendUrl + '/feed-me', {
       method: 'POST',
       body: JSON.stringify({input: stuff}),
       headers: {
           'Content-Type': 'application/json'
       }
   });
}
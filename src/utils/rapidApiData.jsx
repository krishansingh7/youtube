const url = 'https://youtube138.p.rapidapi.com/home/?hl=en&gl=IN';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'eec82a44cemsh2425210af47d7cfp11e804jsn19330de57152',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
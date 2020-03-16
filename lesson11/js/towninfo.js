const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

  for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs'){
    let card = document.createElement('section');
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let image = document.createElement('img');
    


    h2.textContent = towns[i].name;
    h3.textContent = towns[i].motto;
    p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
    p2.textContent = 'Population: ' + towns[i].currentPopulation;
    p3.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
    image.setAttribute('src', 'images/' + towns[i].photo);
    image.setAttribute('alt', towns[i].name);
    card.setAttribute('onclick', 'location.href="' + towns[i].name.replace(' ', '') + '.html"');
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    card.appendChild(article);
    card.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card);
    }
  }
  });

  


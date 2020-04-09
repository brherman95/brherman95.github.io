const requestURL = 'directory/tour-guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    const guides = jsonObject['guides'];

    for (let i = 0; i < guides.length; i++) {
        let card = document.createElement('section');
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
    



        h2.textContent = guides[i].name;
        image.setAttribute('src', guides[i].photo);
        image.setAttribute('alt', 'Portrait of our tour guide ' + guides[i].name);
        p1.textContent = 'Certification Level: ' + guides[i].certification;
        p2.textContent = 'Years of Experience: ' + guides[i].experience;
        p3.textContent = 'Email Address: ' + guides[i].email;
        p4.textContent = 'Biography: ' + guides[i].bio;
     
        article.appendChild(h2);
        article.appendChild(image);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        card.appendChild(article);
        document.querySelector('div.cards').appendChild(card);
      }
    }
  });
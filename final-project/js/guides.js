const requestURL = 'https://brherman95.github.io/final-project/directory/tour-guides.json';

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
        let h3 = document.createElement('h3');
        let image = document.createElement('img');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        let div5 = document.createElement('div');
        let div6 = document.createElement('div');
        let div7 = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
    



        h3.textContent = guides[i].name;
        image.setAttribute('src', guides[i].photo);
        image.setAttribute('alt', 'Portrait of our tour guide ' + guides[i].name);
        div1.setAttribute('class', 'details');
        div2.setAttribute('class', 'label');
        div3.setAttribute('class', 'info');
        div4.setAttribute('class', 'label');
        div5.setAttribute('class', 'info');
        div6.setAttribute('class', 'label');
        div7.setAttribute('class', 'info');
        div2.textContent = 'Certification Level: ';
        div3.textContent = guides[i].certification;
        div4.textContent = 'Years of Experience: ';
        div5.textContent = guides[i].experience;
        div6.textContent = 'Email Address: ';
        div7.textContent = guides[i].email;
        p4.textContent = 'Biography: ' + guides[i].bio;
     
        article.appendChild(h3);
        article.appendChild(image);
        article.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        div1.appendChild(div5);
        div1.appendChild(div6);
        div1.appendChild(div7);
        article.appendChild(p4);
        card.appendChild(article);
        document.querySelector('div.cards').appendChild(card);
      }
    });
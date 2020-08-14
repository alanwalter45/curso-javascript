"use strict";

$.getJSON('/json/data.json', data => {
    let p = document.createElement('p');
    p.innerText = 'Content ...';
    document.body.appendChild(p);
});
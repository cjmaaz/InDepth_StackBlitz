//import './style.css'
import './flexbox.css';

let name = 'Getting Name';
let age = 26;

(async () => {
  let body = await fetch('https://dummyjson.com/users/1');
  let resp = body.json();
  console.log(JSON.stringify(resp));
  name = resp.firstName;
  age = resp.age;
  console.log(name);
  updateDetails();
})();

let updateDetails = () => {
  let details = document.createElement('div');

  details.innerHTML = `<h1>${name}</h1>
                        <h3>${age}</h3>`;

  let app = document.querySelector('#app').append(details);
};

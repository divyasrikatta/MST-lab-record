import { User } from './login.js';
document.getElementById('btn').addEventListener('click',() =>{
let username = document.getElementById('name').value;
let password = document.getElementById('password').value;
let user1 = new User("abc","123");
document.write(user1.validuser(username,password));
});

import Header from "./src/components/Header.js";
import List from "./src/components/List.js";
import Footer from "./src/components/Footer.js";
import {handleAdd, handleChecked, handleDelete, handleEdit, handleClear} from "./src/assets/actions.js";

// key for localstorage
let state = [];

document.querySelector('.date').addEventListener('change', () => {
    const filter = document.querySelector('.date').value;
    const getData = localStorage.getItem(filter);
    if (getData) {
        state = JSON.parse(getData);
        App();
    }
}) 
const date = new Date();
const year = date.getFullYear();
let month = date.getMonth()+1;
if (month<10) month='0'+month;
let day = date.getDate();
if (day<10) day='0'+day;
const key = year+'-'+month+'-'+day;
console.log('state', state)
function App() {    
    const root = document.querySelector('.root');
    root.innerHTML = '';
    root.appendChild(Header(()=>{
        handleAdd(state, key);
        App();
    }));
    root.appendChild(List(state, (id, type)=>{
        if (type === 'checked') {
            state = handleChecked(state, id, key);
        }
        if (type === 'delete') {
            state = handleDelete(state, id, key);
        }
        if (type === 'edit') {
            state = handleEdit(state, id, key);
        }
        
        App();
    })); 
    root.appendChild(Footer(state, ()=>{
        state = handleClear(state, key);
        App();
    }));
}

App();
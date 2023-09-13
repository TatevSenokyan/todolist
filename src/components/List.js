export default function List(data, handleChecked) {
    const container = document.createElement('div');
    data.map((item, i)=>{
       const elem = document.createElement('div');
       elem.innerHTML = `
         <input class='checkbox' type='checkbox' ${item.selected ? 'checked' : ""}/>
         <span>${item.value}</span>
         <button class="edit">Edit</button>
         <button class="delete">delete</button>
       `;
       elem.querySelector("input").addEventListener('change', ()=>handleChecked(item.id, 'checked'));
       elem.querySelector(".delete").addEventListener('click', ()=>handleChecked(item.id, 'delete'));
       elem.querySelector(".edit").addEventListener('click', ()=>handleChecked(item.id, 'edit'));
       container.appendChild(elem);
    });
    return container;
   
}
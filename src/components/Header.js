

export default function Header(handleAdd) {
    const container = document.createElement('div');
    container.innerHTML = `
       <input class='input' type='text'/>
       <button>Add</button>
    `;
    container.querySelector("button").addEventListener('click', ()=>handleAdd());
    return container;
}
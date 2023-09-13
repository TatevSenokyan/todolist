export default function Footer(state, handleClear) {
    const checked = state.filter(item=>item.selected)
    const container = document.createElement('div');
    container.innerHTML = `
       <span>${checked.length}</span>
       <span>/</span>
       <span>${state.length}</span>
       <button>clear</button>

    `
    container.querySelector("button").addEventListener("click", ()=>handleClear());
    return container;
} 
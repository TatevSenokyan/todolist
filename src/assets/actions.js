

export const handleAdd = (state, key) => {
    state.push({id: Math.random(), value: document.querySelector('.input').value, selected: false});
    localStorage.setItem(`${key}`, JSON.stringify(state));
}

export const handleChecked = (state, id, key) => {
    const newState = state.map((item)=>{
        if (id===item.id) {
            return {...item, selected: !item.selected}
        } else {
            return {...item};
        }
    });
    state = newState;
    localStorage.setItem(`${key}`, JSON.stringify(state));
    return state;
  }

  export const handleDelete = (state, id, key) => {
    const newState = state.filter(item=>item.id!==id);
    state = newState;
    localStorage.setItem(`${key}`, JSON.stringify(state));
    return state;
}

export const handleEdit = (state, id, key) => {
    const value = prompt('change value');
    const newState = state.map((item)=>{
        if (item.id === id) {
            return {...item, value:value}
        } else {
            return {...item}
        }
    });
    state = newState;
    localStorage.setItem(`${key}`, JSON.stringify(state));
    return state;
}

export const handleClear = (state, key) => {
    const newState = state.filter((item)=>!item.selected);
    state = newState;
    localStorage.setItem(`${key}`, JSON.stringify(state));
    return state;
}


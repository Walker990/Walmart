const items = [];
const add = () => {
    if (arr.value == '') {
        alert("Haba, no be say you too dey drink garri o wey make you half blind")
    } else {
        items.push(arr.value);
        console.log(items);
        arr.value = '';
        showItems()
        b
        
    }
}


const deleteFirst = () => {
    if (items.length > 0){
        items.shift()
        console.log(items);
        showItems();
    }  else{
        alert("Guy, guy, you fuck up o")
    }
}


const addFirst = () => {
    console.log('mine');
    if (arr.value == ''){
        alert("Just dey play")
        console.log(items);
    }  else{
        items.unshift(arr.value)
        showItems();
        arr.value = ''
    }
}
 
const deleteAll =() => {
    if (items.length > 0) {
        items.splice(0,items.length);
        showItems();
    } else {
     alert('e get one kind knock wey i go give ehh your brain go reset')   
    }
    
    }


const deleteLast =() => {
    if (items.length > 0) {
        items.pop();
        showItems();
    } else {
     alert('you look like your great-grand fathers')   
    }
    
    }

    const dep =() => {
        if (items.length > 0) {
            items.splice(prompt(),prompt());
            showItems();
        } else {
         alert('you think say you dey wise') 
        }
        
        }

    const edit = () => {
        if (items.length> 0){
            items.splice(prompt('what item do you want to change?'),prompt('Amount of item'),prompt('What are you changing it to'))
            showItems()
            arr.value = ''
        }else{alert('werey')}
    }


   const deleteItem = (peace) => {
    console.log(peace);
    items.splice(peace, 1)
    showItems()
   }


   const editItem = () => {
    if (items.length> 0){
        items.splice(prompt('what item do you want to change?'),prompt('Amount of item'),prompt('What are you changing it to'))
        showItems()
        arr.value = ''
    }else{alert('werey')}
}



const showItems = ()=>{
    disp.innerHTML=''
    for(i =0; i< items.length; i++){
        disp.innerHTML += `<p class="border p-2 rounded-pill my-3"> ${i+1}.  ${items[i]} </p> 
        <button class= 'btn btn-light btn-sm' onclick="editItem()">Edit</button>
        <button class= 'btn btn-danger btn-sm' onclick="deleteItem(${i})">delete-Item</button>
        `
    }
}




// const addFirst = () => {
//     console.log('mine');
//     if (arr.value == ''){
//         alert("Just dey play")
//     }  else{
//         items.unshift(arr.value)
//         showItems();
//         arr.value = ''
//     }
// }

// const deleteLast =() => {
// if (items.length > 0) {
//     items.pop();
//     showItems();
// } else {
//  alert('you look like your great-grand fathers')   
// }


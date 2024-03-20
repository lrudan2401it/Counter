let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let todo_wrapper = document.querySelector('.wrapper');
let newTodo = document.querySelector('.todo_name');

let results = [];
let operations = [];
let ordinal = 0;
let tmp = 0;
let ot = true;


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () => {
        let maxR = 0;
        for(let j = 0; j < results.length; j++){
            maxR = j;
        }

        let result = 1;
        if(btn[i].innerHTML == "/2"){
            if(results.length == 0){
                result = 1 / 2;
                results[maxR + 1] = result;
                operations[maxR] = "/2";
                ordinal++;
                tmp = ordinal;
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }else{
                if(tmp < ordinal){
                    result = results[maxR - 1] / 2;
                    results[maxR] = result;
                    tmp++;
                    ot = false;
                }else{
                    result = results[maxR] / 2;
                    results[maxR + 1] = result;
                    ordinal++;
                    tmp = ordinal;
                }
                operations[maxR] = "/2";
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }
        }else if(btn[i].innerHTML == "-1"){
            if(results.length == 0){
                result = 1 - 1;
                results[maxR + 1] = result;
                operations[maxR] = "-1";
                ordinal++;
                tmp = ordinal;
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }else{
                if(tmp < ordinal){
                    result = results[maxR - 1] - 1;
                    results[maxR] = result;
                    tmp++;
                    ot = false;
                }else{
                    result = results[maxR] - 1;
                    results[maxR + 1] = result;
                    ordinal++;
                    tmp = ordinal;
                }
                operations[maxR] = "-1";
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }
        }else if(btn[i].innerHTML == "+1"){
            if(results.length == 0){
                result = 1 + 1;
                results[maxR + 1] = result;
                operations[maxR] = "+1";
                ordinal++;
                tmp = ordinal;
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }else{
                if(tmp < ordinal){
                    result = results[maxR - 1] + 1;
                    results[maxR] = result;
                    tmp++;
                    ot = false;
                }else{
                    result = results[maxR] + 1;
                    results[maxR + 1] = result;
                    ordinal++;
                    tmp = ordinal;
                }
                operations[maxR] = "+1";
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }
        }else if(btn[i].innerHTML == "*2"){
            if(results.length == 0){
                result = 1 * 2;
                results[maxR + 1] = result;
                operations[maxR] = "*2";
                ordinal++;
                tmp = ordinal;
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }else{
                if(tmp < ordinal){
                    result = results[maxR - 1] * 2;
                    results[maxR] = result;
                    tmp++;
                    ot = false;
                }else{
                    result = results[maxR] * 2;
                    results[maxR + 1] = result;
                    ordinal++;
                    tmp = ordinal;
                }
                operations[maxR] = "*2";
                console.log("ordinal: " + ordinal + ", tmp: " + tmp);
            }
        }
        
        console.log("newest result: " + result);

        if(ot){
            let newTodo_list = document.createElement('div');
            newTodo_list.className = 'item';

            newTodo_list.innerHTML = "rezultat: " + results[maxR + 1] + " (operacija: " + operations[maxR] + ")";
            todo_wrapper.appendChild(newTodo_list);
        }else{
            let newTodo_list = document.createElement('div');
            newTodo_list.className = 'item';

            newTodo_list.innerHTML = "rezultat: " + results[maxR + 1] + " (operacija: " + operations[maxR] + ")";
            todo_wrapper.appendChild(newTodo_list);
        }
    })
}




let clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    let item = document.querySelectorAll('.item');
    for(let j = 0; j < item.length; j++){
        todo_wrapper.removeChild(item[j]);
    }
    results = [];
    operations = [];
    ordinal = 0;
    tmp = 0;
    console.log("ordinal: " + ordinal + ", tmp: " + tmp);
})


let undo = document.getElementById('undo');

let max = 0;
undo.addEventListener('click', () => {
    let item = document.querySelectorAll('.item');
    for(let j = 0; j < item.length; j++){
        max = j;
    }
    todo_wrapper.removeChild(item[max]);
    tmp--;
    console.log("ordinal: " + ordinal + ", tmp: " + tmp);
})


let redo = document.getElementById('redo');

redo.addEventListener('click', () => {
    if(tmp < ordinal){
        let newTodo_list = document.createElement('div');
        newTodo_list.className = 'item';

        newTodo_list.innerHTML = "rezultat: " + results[tmp + 1] + " (operacija: " + operations[tmp + 1] + ")";
        todo_wrapper.appendChild(newTodo_list);
        tmp++;
        console.log("ordinal: " + ordinal + ", tmp: " + tmp);
    }
})
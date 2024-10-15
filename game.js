function output(message){
    const output = document.getElementById('terminal-output')
    output.innerHTML += message + '<br>'
}

function clearTerminal(){
    const output = document.getElementById('terminal-output')
    output.innerHTML = '<br>'
}

function handleKeyPress(event) {
    // Get the pressed key code
    const keyCode = event.keyCode
  
    if(keyCode != 13){
        return;
    }

    // Get the input element
    const input = document.getElementById('terminal-input')
    const value = input.value
    input.value = ''

    //tokenise the input

    switch(value){
        case 'clear':
            clearTerminal();
            return;
        case 'help':
            output('clear - Clears the terminal')
            output('help - Shows this help message')
            return;
        default:
            output(value)
            return;
    }
  }

  document.addEventListener("keydown", handleKeyPress);

document.onload = function(){
    document.getElementById('terminal-input').focus();
    const output = document.getElementById('terminal-output')
    output.innerHTML += '<br>'
}

class Room{
    constructor(){
        this.items = [];
        this.entities = [];
        this.rooms = [];
    }

    addItem(item){
        this.items.push(item);
    }

    addEntity(entity){
        this.entities.push(entity);
    }

    removeItem(item){
        this.items = this.items.filter(i => i !== item);
    }

    removeEntity(entity){
        this.entities = this.entities.filter(e => e !== entity);
    }
}

class Item{

}

class Entity{

}

class Player{

}
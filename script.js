let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0; // Índice do item atual

next.onclick = () => {
    // 1. Remove a classe do item anterior
    let activeOld = document.querySelector('.active');
    if (activeOld) activeOld.classList.remove('active');

    // 2. Atualiza o índice (Lógica Matemática)
    active = active + 1;
    
    // Se chegou ao fim, volta para o zero (loop infinito)
    if (active >= count) {
        active = 0;
    }

    // 3. Adiciona a classe ao novo item
    list[active].classList.add('active');
}

prev.onclick = () => {
    // 1. Remove a classe do item anterior
    let activeOld = document.querySelector('.active');
    if (activeOld) activeOld.classList.remove('active');

    // 2. Atualiza o índice (decrementa)
    active = active - 1;

    // Se for menor que zero, vai para o último item
    if (active < 0) {
        active = count - 1;
    }

    // 3. Adiciona a classe ao novo item
    list[active].classList.add('active');
}

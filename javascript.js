addListeners();

function acceptSize(){
    let size = prompt("Enter value");
    let i = 0;
    let j = 0;

    const all_divs = document.querySelector('.alldivs');
    all_divs.replaceChildren();
    console.log('all children removed');
    while (j < size)
    {
        const div = document.createElement('div');
        div.classList.add("container");
        all_divs.appendChild(div);
        console.log("row added");
        j++;
    }
    const container_list = document.querySelectorAll(".container");

    console.log(container_list.length);
    while(i < size)
    {
        container_list.forEach(item => {
            const div = document.createElement('div');
            div.classList.add("cell");
            item.appendChild(div);
            console.log("div added");   
        });
        i++;
    }
    
    addListeners();
}

function addListeners()
{
    const cellList = document.querySelectorAll(".cell");
    cellList.forEach( tile =>
    {
        tile.addEventListener('mouseenter', () => {
            console.log('hover');
            tile.style.backgroundColor = '#000000'}
        );
    }
    );
}

const cellList = document.querySelectorAll(".col");
console.log(cellList.length);
cellList.forEach( tile =>
{
    tile.addEventListener('mouseenter', () => {
        console.log('hover');
        tile.style.backgroundColor = '#000000'}
    );
    tile.addEventListener('mouseleave', () => {tile.style.backgroundColor = '#d0d0d0'}
    );
}
);



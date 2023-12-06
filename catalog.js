async function getResponse(){
    try {
        let response = await fetch("catalog.json");
        let content = await response.json();
        console.log(content);
        content = content.slice(0, 12);
        console.log(content);

        let node_for_insert = document.getElementById("node_for_insert");
        let html = '';
        for(let key in content) {
            html += '<li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">' +
            '<img style="width: 180px" class="align-self-center" src="' + content[key].img + '">' +
            '<p class="card-title"><b>' + content[key].title + '</b><br></p>' +
            '<p class="card-text">' + content[key].description + '.<br> Цена:<br><b> ' + content[key].price + '</b></p>' +
            '<input type="hidden" name="product" value="' + content[key].product + '">' +
            '<p class="card-text" >В корзину&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="w-25" type="number" name="amount" value="0"></p>' +
            '</li>';
        }
        node_for_insert.innerHTML = html;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

getResponse();

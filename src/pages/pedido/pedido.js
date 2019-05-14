var produtos = SQL.Produto.GET(); // buscar produtos da base uma unica vez

var items = [];

$("select#produto").append(produtos.map(p => `<option value="${p.Id}">${p.Name}</option>`));

$("span#minus").click(() => {
    var qtd = parseInt($("label#qtd").text());
    if (qtd === 1) return;
    $("label#qtd").text(--qtd);
});

$("span#plus").click(() => {
    var qtd = parseInt($("label#qtd").text());
    $("label#qtd").text(++qtd);
});

$("button#btn-add").click(() => {
    var id = items.length === 0 ? 1 : items[items.length-1].Id + 1;
    var produto = parseInt($("#produto").val());
    var qtd = parseInt($("#qtd").text());
    var info = $("#info").val();
    items.push({
        "Id": id,
        "ProdutoId": produto,
        "Quantidade": qtd,
        "Info": info
    });
    reloadItems();
    clearFields();
});

function reloadItems() {
    $("ul#items").empty();
    var total = 0.0;
    var lis = items.map(item => {
        var produto = produtos.filter(p => p.Id === item.ProdutoId)[0];
        total += item.Quantidade * produto.Value;
        return `<li data-id="${item.Id}">${item.Quantidade}x ${produto.Name}</li>`;
    });
    $("ul#items").append(lis);
    $("#total").text(`R$ ${total.toFixed(2).toString().replace(".", ",")}`);
}

function clearFields() {
    $("#produto").val("");
    $("#qtd").text("1");
    $("#info").val("");
}
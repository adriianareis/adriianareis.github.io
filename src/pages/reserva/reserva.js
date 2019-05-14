var mesas = SQL.Mesa.GET(); // buscar mesas da base uma unica vez

$("select#mesa").append(mesas.map(m => `<option value="${m.Id}">Mesa ${m.Id} - ${m.Lugares} lugares</option>`));

$("body").on("click", "button#btn-reservar", () => {
    alert(`Mesa ${$("select#mesa").val()} reservada para ${$("#datahora").val()}!`);
});

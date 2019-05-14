$("div#cardapio").append(SQL.Produto.GET().map(p => `
    <div class="col-xs-12">
        <div class="box">
            <div class="row">
                <div class="col-xs-4">
                    <img class="img-responsive" src="res/cardapio/${p.Image}"></img>
                </div>
                <div class="col-xs-8">
                    <div class="row">
                        <div class="col-xs-12"><strong class="nome">${p.Name}</strong></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12"><strong class="valor">R$ ${p.Value}</strong></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <br>
                    <p class="text-justify">${p.Description}</p>
                </div>
            </div>
        </div>
        <br/>
    </div>

`));
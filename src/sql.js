SQL = {
    Produtos: [
        {
            "Id": 1,
            "Name": "Sr Burguer Picanha",
            "Value": 25.00,
            "Type": EProdutoType.Lanche,
            "Image": "picanha.jpg",
            "Description": "Pão, 200g de carne bovina, alface americana, tomate, mussarela e molho vinagrete"
        },
        {
            "Id": 2,
            "Name": "Sr Burguer Fraldinha",
            "Value": 24.00,
            "Type": EProdutoType.Lanche,
            "Image": "fraldinha.jpg",
            "Description": "Pão, 200g de carne bovina, alface americana, tomate, mussarela, queijo prato, chedar e molho barbecue"
        },
        {
            "Id": 3,
            "Name": "Sr Burguer Bacon Egg",
            "Value": 25.00,
            "Type": EProdutoType.Lanche,
            "Image": "baconegg.jpg",
            "Description": "Pão, 200g de carne bovina, alface americana,tomate, mussarela, queijo prato, bacon e ovo"
        },
        {
            "Id": 4,
            "Name": "Sr Burguer Parmegiana",
            "Value": 24.00,
            "Type": EProdutoType.Lanche,
            "Image": "parmegiana.jpg",
            "Description": "Pão, hambúrguer 200g empanado, molho de tomate e mussarela"
        },
        {
            "Id": 5,
            "Name": "Sr Burguer Frangão",
            "Value": 23.00,
            "Type": EProdutoType.Lanche,
            "Image": "frangao.jpg",
            "Description": "Pão, 200g de carne de frango, alface americana, tomate, queijo prato e creme de milho"
        },
        {
            "Id": 6,
            "Name": "Sr Vegeburguer",
            "Value": 23.00,
            "Type": EProdutoType.Lanche,
            "Image": "vegeburguer.jpg",
            "Description": "Pão, 200g de proteína vegetal de soja, alface americana, tomate, mussarela, pasta de berinjela com cebola e pimentão"
        },
        {
            "Id": 7,
            "Name": "Cebola Empanada",
            "Value": 25.00,
            "Type": EProdutoType.Porcao,
            "Image": "cebolaempanada.jpg",
            "Description": "Porção de cebolas empanadas com 300g"
        },
        {
            "Id": 8,
            "Name": "Batata Frita",
            "Value": 25.00,
            "Type": EProdutoType.Porcao,
            "Image": "fritas.jpg",
            "Description": "Porção de batata frita com 300g"
        },
        {
            "Id": 9,
            "Name": "Batata Smile",
            "Value": 11.00,
            "Type": EProdutoType.Porcao,
            "Image": "smile.jpg",
            "Description": "Porção de batatas smiles com 12 unidades (possibilidade de meia porção)"
        },
        {
            "Id": 10,
            "Name": "Batata Australiana",
            "Value": 30.00,
            "Type": EProdutoType.Porcao,
            "Image": "australiana.jpg",
            "Description": "Porção de batata frita com cheddar e bacon com 300g"
        },
        {
            "Id": 11,
            "Name": "Nuggets de Frango",
            "Value": 12.00,
            "Type": EProdutoType.Porcao,
            "Image": "nuggets.jpg",
            "Description": "Porção de nuggets de frango com 12 unidades (possibilidade de meia porção)"
        },
        {
            "Id": 12,
            "Name": "Pavê Trufado",
            "Value": 17.50,
            "Type": EProdutoType.Sobremesa,
            "Image": "pavetrufado.jpg",
            "Description": "Doce brasileiro de inspiração francesa, feito com bolachas, creme e cobertura de chocalate (servido gelado)"
        },
        {
            "Id": 13,
            "Name": "Pudim de Leite",
            "Value": 7.00,
            "Type": EProdutoType.Sobremesa,
            "Image": "pudim.jpg",
            "Description": "Uma das sobremesas mais tradicionais, o clássico pudim de leite contém também ovos e leite condesado"
        },
        {
            "Id": 14,
            "Name": "Milkshake",
            "Value": 15.00,
            "Type": EProdutoType.Bebida,
            "Image": "milkshake.jpg",
            "Description": "Nos sabores chocalate, creme, ovomaltine e sonho de valsa"
        },
        {
            "Id": 15,
            "Name": "Refrigerante Lata",
            "Value": 5.50,
            "Type": EProdutoType.Bebida,
            "Image": "refrigerantelata.jpg",
            "Description": "Coca-cola, Guaraná, Sprite, Soda, Fanta Uva e Fanta Laranja"
        },
        {
            "Id": 16,
            "Name": "Refrigerante 600ml",
            "Value": 7.50,
            "Type": EProdutoType.Bebida,
            "Image": "refrigerante600.jpg",
            "Description": "Coca-cola, Guaraná, Sprite, Soda, Fanta Uva e Fanta Laranja"
        },
        {
            "Id": 17,
            "Name": "Refrigerante 2L",
            "Value": 13.50,
            "Type": EProdutoType.Bebida,
            "Image": "refrigerante2l.jpg",
            "Description": "Coca-cola, Guaraná, Sprite, Soda, Fanta Uva e Fanta Laranja"
        }
    ],
    Pedidos: [
        {
            "Id": 1,
            "Type": EPedidoType.Delivery,
            "Date": new Date(),
            "Address": "Rua Nabuco De Araujo, 63 (52) - Boqueirão - Santos - SP",
            "Schedule": new Date(),
            "UserId": 1,
            "CustomerId": 1,
            "Items": [
                {
                    "Id": 1,
                    "ProdutoId": 1,
                    "Quantidade": 1,
                    "Info": "Sem X"
                },
                {
                    "id": 2,
                    "ProdutoId": 2,
                    "Quantidade": 3,
                    "Info": "Sem Y"
                }
            ]
        }
    ],
    Mesas: [
        {
            "Id": 1,
            "Lugares": 2
        },
        {
            "Id": 2,
            "Lugares": 2
        },
        {
            "Id": 3,
            "Lugares": 2
        },
        {
            "Id": 4,
            "Lugares": 8
        },
        {
            "Id": 5,
            "Lugares": 4
        },
        {
            "Id": 6,
            "Lugares": 4
        },
        {
            "Id": 7,
            "Lugares": 4
        },
        {
            "Id": 8,
            "Lugares": 4
        },
        {
            "Id": 9,
            "Lugares": 6
        },
        {
            "Id": 10,
            "Lugares": 6
        },
        {
            "Id": 11,
            "Lugares": 4
        },
        {
            "Id": 12,
            "Lugares": 4
        },
        {
            "Id": 13,
            "Lugares": 4
        },
        {
            "Id": 14,
            "Lugares": 4
        }
    ],
    Produto: {
        GET: () => {
            return SQL.Produtos;
        }
    },
    Pedido: {
        GET: () => {
            return SQL.Pedidos;
        },
        POST: (pedido) => {
            SQL.Pedidos.push(pedido);
        }
    },
    Mesa: {
        GET: () => {
            return SQL.Mesas;
        }
    }
};

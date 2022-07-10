const arrayPizzas=[
    {
      id:1,
      nombre:"Jamon y Morrones",
      ingredientes:["queso","jamon","morrones"],
      precio:750,
    },
    {
      id:2,
      nombre:"Cebolla",
      ingredientes:["queso","cebolla","oregano"],
      precio:500,
    },
    {
      id:3,
      nombre:"Muzzarella",
      ingredientes:["muzarella","oregano","aceitunas"],
      precio:550,
    },
    {
      id:4,
      nombre:"Bacon",
      ingredientes:["panceta","queso","aceitunas"],
      precio:850,
    },
    {
      id:5,
      nombre:"Albahaca",
      ingredientes:["albahaca","queso","aceitunas"],
      precio:650,
    },{
      id:6,
      nombre:"Tomates",
      ingredientes:["queso","tomate","oregano"],
      precio:550,
    }
    ];

    
    let h2 = document.getElementById("h2");
    let  h4 = document.getElementById("h4");
    let  input = document.getElementById("input");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", chequearId);

    function chequearId() {
        h2.innerHTML = " ";
        h4.innerHTML = " ";

        let numIngresado = input.value

        arrayPizzas.forEach((pizza) => {
            if(pizza.id == numIngresado) {
                h2.innerHTML = `Pizza de ${pizza.nombre}`;
                h4.innerHTML = `Sale $${pizza.precio}`;
            }
        })

        if(numIngresado <1 || numIngresado>6){
            h2.innerHTML = `No tenemos tantas Pizzas`
        }
    }


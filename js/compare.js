class Car {
    constructor(items, classeLista) {
        this.items = items;
        this.lista = document.querySelector(classeLista);

        this.selectedCars = []; // Lista para armazenar os índices dos carros selecionados

        this.items.forEach((item, index) => {
            this.createItem(item, index);
        });

        this.dialog = document.getElementById("compare");
        this.compareBtn = document.getElementById("compare_btn");
        this.closeBtn = document.getElementById("close_compare");

        this.compareBtn.onclick = () => this.ShowCompare();
        this.closeBtn.onclick = () => this.HideCompare();
    }

    createItem(item, index) {
        this.objetoLista = document.createElement("li");
        this.objetoLista.id = item.name;

        this.objetoImagem = document.createElement("img");
        this.objetoImagem.src = item.imagem;
        this.objetoImagem.classList.add("photocar");

        this.infoCarDiv = document.createElement("div");
        this.infoCarDiv.classList.add("infocar");

        this.checkboxDiv = document.createElement("div");

        this.checkboxItem = document.createElement("input");
        this.checkboxItem.type = "checkbox";
        this.checkboxItem.value = index; // Guardar o índice do carro
        this.checkboxItem.classList.add("checkbox");

        // Adiciona o evento de clique ao checkbox
        this.checkboxItem.onclick = (event) => this.SetCarToCompare(index, event);

        this.infoDiv = document.createElement("div");
        this.infoDiv.classList.add("info");

        this.itemModel = document.createElement("span");
        this.itemModel.innerText = item.titulo;
        this.itemModel.classList.add("textmodel");

        this.itemPrice = document.createElement("span");
        this.itemPrice.innerText = `Preço Sugerido: R$ ${item.preco.toLocaleString('pt-BR')}`;
        this.itemPrice.classList.add("textprice");

        this.iconDiv = document.createElement("div");

        this.objetoInfo = document.createElement("img");
        this.objetoInfo.src = "img/info.png";

        this.iconDiv.appendChild(this.objetoInfo);
        this.infoDiv.appendChild(this.itemModel);
        this.infoDiv.appendChild(this.itemPrice);
        this.checkboxDiv.appendChild(this.checkboxItem);
        this.infoCarDiv.appendChild(this.checkboxDiv);
        this.infoCarDiv.appendChild(this.infoDiv);
        this.infoCarDiv.appendChild(this.iconDiv);
        this.objetoLista.appendChild(this.objetoImagem);
        this.objetoLista.appendChild(this.infoCarDiv);
        this.lista.appendChild(this.objetoLista);
    }

    SetCarToCompare(index, event) {
        if (this.selectedCars.includes(index)) {
            // Se o carro já estiver na lista, removê-lo
            this.selectedCars = this.selectedCars.filter(carIndex => carIndex !== index);
        } else {
            if (this.selectedCars.length >= 2) {
                alert("Para comparação, o máximo de itens são dois.");
                event.preventDefault(); // Impede a seleção do terceiro checkbox
                return;
            }
            this.selectedCars.push(index);
        }
    }

    ShowCompare() {
        if (this.selectedCars.length === 2) {
            this.UpdateCompareTable();
            this.dialog.showModal();
        } else {
            alert("Para comparação, é necessário marcar dois itens");
        }
    }

    HideCompare() {
        this.dialog.close();
    }

    UpdateCompareTable() {
        this.car1 = this.items[this.selectedCars[0]];
        this.car2 = this.items[this.selectedCars[1]];
    
        // Atualiza imagens
        document.getElementById("compare_image_0").src = this.car1.imagem;
        document.getElementById("compare_image_1").src = this.car2.imagem;
    
        // Atualiza modelo
        document.getElementById("compare_modelo_0").innerText = this.car1.titulo;
        document.getElementById("compare_modelo_1").innerText = this.car2.titulo;
    
        // Atualiza altura da caçamba
        document.getElementById("compare_alturacacamba_0").innerText = this.car1.alturaCacamba;
        document.getElementById("compare_alturacacamba_1").innerText = this.car2.alturaCacamba;
    
        // Atualiza altura do veículo
        document.getElementById("compare_alturaveiculo_0").innerText = this.car1.alturaVeiculo;
        document.getElementById("compare_alturaveiculo_1").innerText = this.car2.alturaVeiculo;
    
        // Atualiza altura livre do solo
        document.getElementById("compare_alturasolo_0").innerText = this.car1.alturaSolo;
        document.getElementById("compare_alturasolo_1").innerText = this.car2.alturaSolo;
    
        // Atualiza capacidade de carga
        document.getElementById("compare_capacidadecarga_0").innerText = this.car1.capacidadeCarga;
        document.getElementById("compare_capacidadecarga_1").innerText = this.car2.capacidadeCarga;
    
        // Atualiza motor
        document.getElementById("compare_motor_0").innerText = this.car1.motor;
        document.getElementById("compare_motor_1").innerText = this.car2.motor;
    
        // Atualiza potência
        document.getElementById("compare_potencia_0").innerText = this.car1.potencia;
        document.getElementById("compare_potencia_1").innerText = this.car2.potencia;
    
        // Atualiza volume da caçamba
        document.getElementById("compare_volumecacamba_0").innerText = this.car1.volumeCacamba;
        document.getElementById("compare_volumecacamba_1").innerText = this.car2.volumeCacamba;
    
        // Atualiza roda
        document.getElementById("compare_roda_0").innerText = this.car1.roda;
        document.getElementById("compare_roda_1").innerText = this.car2.roda;
    
        // Atualiza preço
        document.getElementById("compare_preco_0").innerText = `R$ ${this.car1.preco.toLocaleString('pt-BR')}`;
        document.getElementById("compare_preco_1").innerText = `R$ ${this.car2.preco.toLocaleString('pt-BR')}`;
    }
    
}

const carros = [
    {
        name: "cabine",
        imagem: "img/XL Cabine.jpg",
        titulo: "XL Cabine Simples 2.2 Diesel 4X4 MT 2022",
        preco: 183850,
        alturaCacamba: 511,
        alturaVeiculo: 1821,
        alturaSolo: 232,
        capacidadeCarga: 1234,
        motor: 2.2,
        potencia: 160,
        volumeCacamba: 1420,
        roda: 'Aço Estampado 16',
    },
    {
        name: "diesel",
        imagem: "img/xls 2.2 diesel.jpg",
        titulo: "XLS 2.2 Diesel 4X4 AT 2022",
        preco: 220690,
        alturaCacamba: 511,
        alturaVeiculo: 1821,
        alturaSolo: 232,
        capacidadeCarga: 1076,
        motor: 2.2,
        potencia: 160,
        volumeCacamba: 1180,
        roda: 'Aço Estampado 16',
    },
    {
        name: "storm",
        imagem: "img/storm.jpg",
        titulo: "Storm 3.2 Diesel 4X4 AT 2022",
        preco: 222790,
        alturaCacamba: 511,
        alturaVeiculo: 1821,
        alturaSolo: 232,
        capacidadeCarga: 1040,
        motor: 3.2,
        potencia: 200,
        volumeCacamba: 1180,
        roda: 'Liga Leve 17',
    },
];

new Car(carros, ".modelcars");

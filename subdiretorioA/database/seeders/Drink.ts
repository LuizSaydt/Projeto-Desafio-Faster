import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Drink from "App/Models/Drink";

export default class extends BaseSeeder {
  public async run () {
    await Drink.createMany([
      {
        name: "Mojito",
        description: "Mojito é um coquetel à base de rum branco originário de Cuba.\n\nEsse coquetel com mais de 100 anos não tem sua origem tão bem documentada quanto o daiquiri ou a cuba-libre. Sabe-se que floresceu na noite de Havana usando ingredientes nativos do Caribe. Os ingredientes são, além do rum, o açúcar (ou xarope), hortelã, limão e água gaseificada.\n\nA mistura de hortelã com bebidas é muito antiga. A exemplo do bullshot, o mojito teria sido criado por um inglês em alto-mar ou na terra. A diferença, nesse caso, é que a história deste drinque era contada nos bares cubanos, em especial no \"La Bodeguita del Medio\", por ninguém menos que o escritor americano Ernest Hemingway. Segundo ele, o almirante e aventureiro inglês Francis Drake, o primeiro homem branco a aportar em inúmeras ilhas do Pacífico Sul, apaixonado pelos aromas da hortelã, teria sido o primeiro a misturar a planta com boas doses de rum.",
        category: "Coquetel Gaseificado"
      },
      {
        name: "Cuba libre",
        description: "Cuba-libre ou cuba-livre é uma bebida alcoólica, ou um coquetel feito à base de rum, refrigerante de cola e limão. Atribui-se a invenção desta bebida aos soldados norte-americanos que ajudaram nas guerras da independência cubana em 1898, o que explicaria seu nome.",
        category: "Coquetel"
      },
      {
        name: "Irish coffe",
        description: "Irish coffee é uma bebida a base de café, uísque irlandês, açúcar e chantilly.",
        category: "Café"
      },
      {
        name: "Sex on the beach",
        description: "Sex on the Beach é uma bebida alcoólica geralmente feita com vodka, schnapps de pêssego, suco de laranja, e suco de oxicoco, apesar de haver variações, como a versão sem álcool nomeada Virgins on the Beach. É um coquetel oficial da International Bartenders Association, servido em copo alto.",
        category: "Coquetel"
      },
      {
        name: "Caipirinha",
        description: "A caipirinha é uma bebida alcoólica brasileira, ou um coquetel de origem paulista, feita com cachaça, açúcar, limão e gelo. Variações incluem a caipiroska - com vodka ao invés de cachaça - e a caipiríssima - com rum.",
        category: "Coquetel"
      },
      {
        name: "Expresso Martini",
        description: "O espresso martini, também conhecido como vodka espresso, é uma bebida alcoólica com cafeína fria feita com espresso, licor de café e vodka. Não é um verdadeiro martini, pois não contém gim nem vermute, mas é uma das muitas bebidas que incorporam o termo martini em seus nomes.",
        category: "Café"
      }
    ]);
  }
}

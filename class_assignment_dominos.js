/*
---------------------------------------------(03/15/22) In-Class Assignment------------------------------
Instructions:

Simulate something on the Domino's menu website using javascript classes

*/

//Soution---Simulate the Domnio's Pizza Builder


class Pizza {
    constructor(passedInCrust, passedInSauce, passedInMeatTopping, passedInVeggies, passedInDippingSauce){
        this.crust = passedInCrust;
        this.sauce = passedInSauce;
        this.meattopping = passedInMeatTopping;
        this.veggies = passedInVeggies;
        this.dippingsauce = passedInDippingSauce;
    }

//Chaging the crust on pizza

    changeCrust(newCrust) {
        this.crust = newCrust;
    }
}

const mackenziesPizza = new Pizza("handmadepan", "normalsauce", "meats", "veggies", "garlic");
mackenziesPizza.changeCrust("handtossed");

console.log(mackenziesPizza);
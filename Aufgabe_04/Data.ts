namespace L04_Homehelper {
    export interface Item {
        name: string;
        value: string;
        price: number;
        unit: string;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Einkauf: [
            { name: "Butter", value: "Butter", price: 0.79, unit: "Stück"},
            { name: "Milch", value: "Milch", price: 1.20, unit: "Liter"},
            { name: "Mehl", value: "Mehl", price: 2.30, unit: "Packung(en)"},
            { name: "Zucker", value: "Zucker", price: 1.99, unit: "Packung(en)"},
            { name: "Eier", value: "Eier", price: 2.99, unit: "Stück"},
            { name: "Salz", value: "Salz", price: 2.50, unit: "Packung(en)"},
            { name: "Brot", value: "Brot", price: 4.00, unit: "Laib"}   
        ],
        Supermarkt: [
            { name: "Edeka", value: "Edeka", price: 0, unit: ""},
            { name: "Aldi", value: "Aldi", price: 0, unit: ""},
            { name: "Lidl", value: "Lidl", price: 0, unit: ""},
            { name: "Rewe", value: "Rewe", price: 0, unit: ""}
        ],
        Haushalt: [
            { name: "Home", value: "Rasen mähen", price: 0, unit: ""},
            { name: "Home", value: "Hund ausführen", price: 0, unit: ""},
            { name: "Home", value: "Staubsaugen", price: 0, unit: ""},
            { name: "Home", value: "Pflanzen gießen", price: 0, unit: ""}
        ],
        Bank: [
            { name: "Bank", value: "Geld abheben", price: 3, unit: ""},
            { name: "Bank", value: "Geld einzahlen", price: 3, unit: ""}
        ],
        Zahlung: [
            { name: "cash", value: "Bar", price: 0, unit: ""},
            { name: "cash", value: "Bankeinzug", price: 0, unit: ""},
            { name: "cash", value: "Überweisung", price: 0, unit: ""}
        ]
    };
}
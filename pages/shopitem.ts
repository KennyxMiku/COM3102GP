export interface Item {
    id: string;
    title: string;
    description: string;
    price: number;
}

export function getAllItems(): readonly Item[] {
    return shopItems;
}

const shopItems = [
    {
        id: '01',
        title: 'Pilot ball point pen',
        description: 'Acroball-black',
        price: 10
    },
    {
        id: '02',
        title: 'Plus Correction Tape',
        description: 'Whiper MR',
        price: 20
    },
    {
        id: '03',
        title: 'KOKUYO notebook',
        description: 'normal notebook',
        price: 40
    },
    {
        id: '04',
        title: 'Pilot eraser',
        description: 'eraser',
        price: 5
    },
    {
        id: '05',
        title: 'MANOK MARK ruler',
        description: '30cm ruler',
        price: 10
    },
    {
        id: '06',
        title: 'MAX HD-10D Stapler',
        description: 'Max paper:10',
        price: 20
    },
    {
        id: '07',
        title: 'DATA BANK E-317 A4 Folder 4-Layer',
        description: 'A4 Folder',
        price: 4
    },
    {
        id: '08',
        title: 'Vita bottle water',
        description: '700ml',
        price: 7
    },  
    {
        id: '09',
        title: 'Vitasoy',
        description: '350ml',
        price: 5
    },
    {
        id: '10',
        title: 'Nestea Peach Grapefruit Oolong Tea',
        description: '480ml',
        price: 11
    },
    {
        id: '11',
        title: 'Minute Maid Orange Juice Drink',
        description: '420ml',
        price: 9
    },
    {
        id: '12',
        title: 'Vita Lemon tea',
        description: 'Bottle 500ml',
        price: 8
    },
    {
        id: '13',
        title: 'Ethnicans Potato Chips',
        description: 'Potato chip 105g',
        price: 15
    },
    {
        id: '14',
        title: 'Snicker',
        description: '51G chocolate bar',
        price: 8
    },
    {
        id: '15',
        title: 'SELECT SALTINE CRACKERS',
        description: '180g',
        price: 11
    },
    {
        id: '16',
        title: 'SELECT DRIED BLUEBERRY',
        description: '100g',
        price: 36
    },
    {
        id: '17',
        title: 'HSU T-shirt',
        description: 'souvenir T-shirt',
        price: 90
    },
    {
        id: '18',
        title: 'HSU hoodie',
        description: 'Sport hoodie with HSU name',
        price: 150
    },
    {
        id: '19',
        title: 'HSU cap',
        description: 'Souvenir cap',
        price: 60
    },
    {
        id: '20',
        title: 'HSU foloder',
        description: 'Souvenir folder, A4 size',
        price: 15
    },
] as const;
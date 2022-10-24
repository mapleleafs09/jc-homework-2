const goods = {
    1: {
        id: 1 ,
        name: 'Бейсболка',
        description: 'Классическая бейсболка',
        sizes: [ 55, 57 ],
        price: 1290 ,
        available: 'Y'
    },
    2: {
        id: 2 ,
        name: 'Бейсболка',
        description: 'Бейсболка с сеткой',
        sizes: [ 55, 57 ],
        price: 1590 ,
        available: 'Y'
    },
    3: {
        id: 3 ,
        name: 'Футболка NHL',
        description: 'Хлопковая футболка',
        sizes: [ 'S', 'M', 'L' ],
        price: 2590 ,
        available: 'Y'
    },
    4: {
        id: 4 ,
        name: 'Толстовка NHL',
        description: 'Толстовка с капюшоном',
        sizes: [ 'S', 'M', 'L' ],
        price: 4590 ,
        available: 'Y'
    },
    5: {
        id: 5 ,
        name: 'Штаны NHL',
        description: 'Штаны',
        sizes: [ 'S', 'M', 'L' ],
        price: 3290 ,
        available: 'Y'
    }
};

const goodInddex = [ goods[1], goods[2], goods[3], goods[4], goods[5] ]

const cart = [
    { 
    good: 2,
    amount: 1    
    },
    {
    good: 3,
    amount: 2
    }
];


function add(id, count) {
    let i = 0;
    for (let position of cart) {
        if (position.good == id) {
            position.amount = position.amount + count;
            i++;
        }; 
        }
    if (i == 0) {
        cart.push({good: id, amount: count});
    }
        
};
    
function del(id, count) {
    for (let position of cart) {
        if (position.good == id) {
            position.amount = position.amount - count;
        }; 
        };
    for (let position of cart) {
        if (position.amount == 0) {
           console.log(cart.indexOf(position));
           delete cart[cart.indexOf(position)]
        }; 
        };
};

function delAll() {
    cart.length = 0;
};

const total = { totalAmount: 0, totalSumm: 0 };

function totalCalc() {
    for (let position of cart) {
        total.totalSumm = total.totalSumm + (goods[position.good].price * position.amount);
        total.totalAmount = total.totalAmount + position.amount;
    };
};

console.log(cart)

// del(3,1)

// console.log(cart)

// delAll()

// console.log(cart)

totalCalc()

console.log(total)

// First Class Event Handler

function ticketAmountHandler(isTicketAmountIncrease) {
    const firstClassInput = document.getElementById('firstClassInput')
    const firstClassInputNumber = parseInt(firstClassInput.value);

    let inputCount = firstClassInputNumber;
    if (isTicketAmountIncrease == true) {
        inputCount = inputCount + 1;
    }
    if (isTicketAmountIncrease == false && inputCount > 0) {
        inputCount = inputCount - 1;

    }
    firstClassInput.value = inputCount;
    const ticketPrice = inputCount * 150
    document.getElementById('ticketPrice').innerText = ticketPrice
    totalAmount();
}



// Economy Class Event Handler is Here


function economyTicketHandler(isEconomyTicketIncrease) {
    const economyInput = document.getElementById('economyInput');
    const newEconomyInput = parseInt(economyInput.value);
    let economyInputCount = newEconomyInput;
    if (isEconomyTicketIncrease == true) {
        economyInputCount = newEconomyInput + 1
    }
    if (isEconomyTicketIncrease == false && economyInputCount > 0) {
        economyInputCount = newEconomyInput - 1;
    }

    economyInput.value = economyInputCount
    const economyTicketPrice = economyInputCount * 100;
    document.getElementById('ticketPrice').innerText = economyTicketPrice;
    totalAmount();
}


// Total Cost Function is Here

function totalAmount() {

    const firstInput = document.getElementById('firstClassInput')
    const firstClassCount = parseInt(firstInput.value)

    const economyInput = document.getElementById('economyInput')
    const economyCount = parseInt(economyInput.value)
    const totalPrice = firstClassCount * 150 + economyCount * 100
    document.getElementById('ticketPrice').innerText = totalPrice;
    const vat = totalPrice * .10;
    document.getElementById('vatAmount').innerText = vat

    const totalCost = vat + totalPrice;
    document.getElementById('totalAmount').innerText = totalPrice
}
// document.getElementById('economyClassAdd').addEventListener('click', function() {

//     const economyInput = document.getElementById('economyInput');
//     const newEconomyInput = parseInt(economyInput.value);
//     const economyInputCount = newEconomyInput + 1;
//     economyInput.value = economyInputCount
//     const economyTicketPrice = economyInputCount * 100;
//     document.getElementById('ticketPrice').innerText = economyTicketPrice;

// })
// document.getElementById('economyClassDecrease').addEventListener('click', function() {

//     const economyInput = document.getElementById('economyInput');
//     const newEconomyInput = parseInt(economyInput.value);
//     const economyInputCount = newEconomyInput - 1;
//     economyInput.value = economyInputCount
//     const economyTicketPrice = economyInputCount * 100;
//     document.getElementById('ticketPrice').innerText = economyTicketPrice;

// })
let tickets = ['129300455', '5559948277', '012334556', '56789', '123456879'];

/// V3
function ticketToBinary(string) {
  let arr = new Array(10).fill(false);
  for (let i = 0; i < 10; i++) {
    let re = new RegExp(i);
    arr[i] = re.test(string) | 0;
  }
  return parseInt(arr.join(''), 2);
}
function checkBitPair(bitTicA, bitTicB) {
  return (bitTicA | bitTicB) === 1023;
}

function winningLotteryTicket(tickets) {
  let binaryTix = tickets.map(ticket => ticketToBinary(ticket));

  return binaryTix.reduce(checkAgainstOtherTickets, 0);

  function checkAgainstOtherTickets(acc, cur, index, arr) {
    for (let i = index + 1; i < arr.length; i++) {
      if (checkBitPair(arr[index], arr[i])) acc++;
    }
    return acc;
  }
}

console.log(winningLotteryTicket(tickets));
// console.log('tic[1]binary: ', ticketToBinary('1234567890').toString(2));
// console.log('tic[1]binary: ', ticketToBinary('17890').toString(2));

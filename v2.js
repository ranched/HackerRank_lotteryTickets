let tickets = ['129300455', '5559948277', '012334556', '56789', '123456879'];

/// V2
function markSetValuesPresent(ticSet, trackingArr) {
  for (let char of ticSet) {
    trackingArr[char] = 1;
  }
}
function checkSetPair(ticA, ticB) {
  let valuesPresent = new Array(10).fill(0);
  let uniquesA = new Set(ticA);
  let uniquesB = new Set(ticB);
  markSetValuesPresent(uniquesA, valuesPresent);
  markSetValuesPresent(uniquesB, valuesPresent);
  return valuesPresent.every(num => num === 1);
}

function winningLotteryTicket(tickets) {
  let sortedTickets = sortTickets(tickets);

  return tickets.reduce(checkAgainstOtherTickets, 0);

  function checkAgainstOtherTickets(acc, cur, index, arr) {
    for (let i = index + 1; i < arr.length; i++) {
      if (checkSetPair(arr[index], arr[i])) acc++;
    }
    return acc;
  }
}

console.log(winningLotteryTicket(tickets));

function sortTickets(tickets) {
  return tickets.map(ticket =>
    ticket
      .split('')
      .sort()
      .join('')
  );
}

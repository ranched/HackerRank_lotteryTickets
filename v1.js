let tickets = ['129300455', '5559948277', '012334556', '56789', '123456879'];

/// V1
function markValuesPresent(tic, trackingArr) {
  for (let i = 0; i < tic.length; i++) {
    let index = tic[i];
    trackingArr[index] = 1;
  }
}
function checkPair(ticA, ticB) {
  let valuesPresent = new Array(10).fill(0);
  markValuesPresent(ticA, valuesPresent);
  markValuesPresent(ticB, valuesPresent);
  return valuesPresent.every(num => num === 1);
}

function winningLotteryTicket(tickets) {
  let sortedTickets = sortTickets(tickets);

  return tickets.reduce(checkAgainstOtherTickets, 0);

  function checkAgainstOtherTickets(acc, cur, index, arr) {
    for (let i = index + 1; i < arr.length; i++) {
      if (checkPair(arr[index], arr[i])) acc++;
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

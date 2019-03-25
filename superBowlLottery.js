let tickets = [
  '129300455',
  '5559948277',
  '012334556',
  '56789',
  '123456879',
  '0123456789',
  '0123456789'
];

function ticketToBinary(string) {
  let arr = new Array(10).fill(false);
  for (let i = 0; i < 10; i++) {
    let re = new RegExp(i);
    arr[i] = re.test(string) | 0;
  }
  return parseInt(arr.join(''), 2);
}

function mapToBinary(arrOfStringTickets) {
  return arrOfStringTickets.map(ticketToBinary);
}

function tallyOccurances(arr) {
  //arr is arrOfBinaryTickets
  let occurances = {};
  for (let i = 0; i < arr.length; i++) {
    let cur = occurances[arr[i]];
    occurances[arr[i]] = cur + 1 || 1;
  }
  return Object.entries(occurances).map(arr => [parseInt(arr[0]), arr[1]]);
}

function checkBitPair(bitTicA, bitTicB) {
  return (bitTicA | bitTicB) === 1023;
}

let allOnesCount = 0;

function checkAgainstOtherTickets(acc, cur, index, arr) {
  if (cur[0] === 1023) allOnesCount = cur[1];
  for (let i = index + 1; i < arr.length; i++) {
    if (checkBitPair(arr[index][0], arr[i][0])) {
      acc += arr[index][1] * arr[i][1];
    }
  }
  return acc;
}

function sumWinningPairs(arr) {
  let count = 0;
  count += arr.reduce(checkAgainstOtherTickets, 0);
  if (allOnesCount) {
    count += (allOnesCount * (allOnesCount - 1)) / 2;
  }
  return count;
}

function winningLotteryTicket(tickets) {
  let transforms = [mapToBinary, tallyOccurances, sumWinningPairs];
  let count = transforms.reduce(function(acc, cur, index, arr) {
    return cur(acc);
  }, tickets);
  return count;
}

console.log(winningLotteryTicket(tickets));
// console.log('tic[1]binary: ', ticketToBinary('1234567890').toString(2));
// console.log('tic[1]binary: ', ticketToBinary('17890').toString(2));

// console.log('31 | 183 ', 31 | 183);
// console.log('31 | 511', 31 | 511);
// console.log('31 | 1009', 31 | 1009);
// console.log('31 | 1016', 31 | 1016);
// console.log('31 | 1023 ', 31 | 1023);
// console.log('');
// console.log('183 | 511', 183 | 511);
// console.log('183 | 1009', 183 | 1009);
// console.log('183 | 1016', 183 | 1016);
// console.log('183 | 1023', 183 | 1023);
// console.log('');
// console.log('511 | 1009', 511 | 1009);
// console.log('511 | 1016', 511 | 1016);
// console.log('511 | 1023', 511 | 1023);
// console.log('');
// console.log('1009 | 1016', 1009 | 1016);
// console.log('1009 | 1023', 1009 | 1023);
// console.log('');
// console.log('1016 | 1023', 1016 | 1023);
// console.log('');
// console.log('1023', 1023);

const Queue = require('./1_queue').Queue;

// pass a hot potato around that removes one from the list of players (elementList) every n time it's passed (num)


function hotPotato(elementslist, num) {
  const queue = new Queue();
  const eliminatedList= [];

  for (let i = 0; i < elementslist.length; i++) {
    queue.enqueue(elementslist[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      let firstElem = queue.dequeue();
      queue.enqueue(firstElem);
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

let players = ['Lela', 'Monica', 'Paige', 'Lilly', 'Jenna', 'Sophie'];

console.log(hotPotato(players, 7));

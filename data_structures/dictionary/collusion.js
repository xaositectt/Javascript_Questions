const HashTable = require('./2_hash_table').HashTable
const hash = new HashTable()

hash.put('Ygritte', 'ygritte@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Jack', 'jack@email.com')
hash.put('Jasmine', 'jasmine@email.com')
hash.put('Jake', 'jake@email.com')
hash.put('Nathan', 'nathan@email.com')
hash.put('Athelstan', 'athelstan@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Aethelwulf', 'aethelwulf@email.com')
hash.put('Sargeras', 'sargeras@email.com')

// some of these names will have the same hashcode, and they will overwrite the previous one
console.log(hash.toString())

// solution: separate chaining


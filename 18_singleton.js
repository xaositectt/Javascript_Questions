'use strict'

//design pattern that restricts the instantiation of a class to one object. A singleton should be immutable by the consuming code.
//with Object.freeze, we make the instance of the class immutable.

class UserStore {
  constructor(){
   if(! UserStore.instance){
     this._data = []
     UserStore.instance = this
   }

   return UserStore.instance
  }

 add(item){
    this._data.push(item)
  }

  get(id){
    return this._data.find(d => d.id === id)
  }
}

const instance = new UserStore()
Object.freeze(instance)

export default instance

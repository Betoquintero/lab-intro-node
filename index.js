class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length
    this.items.sort(function(a, b){
      return a - b ;
    });
    return this.items    
  }

  get(pos) {
    if (pos > this.items.length){
      throw new Error ('OutOfBounds')
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length === 0 ){
    
      throw new Error ('EmptySortedList')
    
    }

    return Math.max (...this.items)
    
  }

  min() {
    if(this.items.length === 0 ){
    
      throw new Error ('EmptySortedList')
    
    }

    return Math.min (...this.items)
  }

  sum() {
    if(this.items.length === 0 ){
    
     return 0
    
    } else {

      return this.items.reduce((a, b) => a + b ,0)
    }

  }

  avg() {
    if(this.items.length === 0 ){
    
      throw new Error ('EmptySortedList')
    
    } else {
      return (this.items.reduce((a, b) => a + b ,0))/this.items.length
    }
  }
}

module.exports = SortedList;

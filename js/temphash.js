/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  result.size = size;
  result.storageLimit = storageLimit;

  
  result.insert = function(k, v){
    this.size++; 
    var i = getIndexBelowMaxForKey(k, this.storageLimit);

    var bucket = result[i];
    if (bucket !== undefined ) {
      for (var j = 0; j < bucket.length; j++) {
        if(bucket[j][0] === k) {
          bucket[j][1] === v;
          this[i] = bucket;
          if(this.size > .75 * this.storageLimit){
            this.resize(this.storageLimit * 2);
          }
          return;
        }
      }
      bucket.push([k,v]);
      this[i]= bucket;
      if(this.size > .75 * this.storageLimit){
        this.resize(this.storageLimit * 2);
      }
      return;
    }else {
      this[i] = [[k,v]];
      if(this.size > .75 * this.storageLimit){
        this.resize(this.storageLimit * 2);
      }
    }
  };

  result.retrieve = function(k){
    var i = getIndexBelowMaxForKey(k, this.storageLimit);
    var bucket = this[i];
    for (var j = 0; j < bucket.length; j++) {
      if(bucket[j][0] ===k) {
        return  bucket[j][1];
      }
    }
    return null;
  };

  result.remove = function(k){
  this.size --;
   var i = getIndexBelowMaxForKey(k, this.storageLimit);
   var bucket = this[i];
   for(var j = 0; j<bucket.length; j++) {
    if(bucket[j][0] === k) {
      bucket[j][1] = null;
      if(this.size < this.storageLimit * .25) {
        this.resize(this.storageLimit/2);
      }
    }
   }
    
  };


  result.resize = function(newSize) {
    var oldStorage = {};
    for(var key in this) {
      oldStorage[key] = this[key];
    }
    for(var key=0; key< oldStorage.storageLimit; key++) {
      if(oldStorage[key]) {
        var bucket = oldStorage[key];
        delete this[key];
      
        for(var j=0; j<bucket.length; j++) {
          if(bucket[j][1] !== null) {
            this.insert(bucket[j][0], bucket[j][1]);
          } 
        }
      }
    }
    console.log(this)
  };
  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {

    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
var t = makeHashTable();
t.insert('sean', 'connor');
console.dir(t);
t.insert('ali', 'bair');
console.dir(t);

console.log(t);
t.insert('mark','b');
t.insert('eb', 'd');
t.insert('bon','f');

console.log(t);
t.remove('bon');
t.remove('eb');
console.log(t)
t.remove('ali');
t.remove('mark');
console.log(t)
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be positive");
    }
    this.capacity = capacity;
    this.map = new Map(); 

    
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

 
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

 
  _add(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
   
    this._remove(node);
    this._add(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
     
      const node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._add(node);
    } else {
      if (this.map.size >= this.capacity) {
      
        const lru = this.tail.prev;
        this._remove(lru);
        this.map.delete(lru.key);
      }
    
      const newNode = new Node(key, value);
      this._add(newNode);
      this.map.set(key, newNode);
    }
  }
}


console.log("=== Running LRU Cache Test ===");
const cache = new LRUCache(2);

cache.put("A", 10);
cache.put("B", 20);
console.log(`cache.get("A") -> ${cache.get("A")}`); 
cache.put("C", 30);                               
console.log(`cache.get("B") -> ${cache.get("B")}`); 
console.log(`cache.get("C") -> ${cache.get("C")}`); 
console.log(`cache.get("A") -> ${cache.get("A")}`); 
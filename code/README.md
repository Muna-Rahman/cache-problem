LRU Cache with TTL Support

A simple LRU (Least Recently Used) cache built with JavaScript and Node.js. It uses a Map and a doubly linked list to keep get() and put() operations fast, with an average time complexity of O(1).

The cache also supports optional TTL, so an item can automatically expire after a certain amount of time.

Features
O(1) average time for get() and put()
Removes the least recently used item when the cache is full
Optional TTL for individual cache entries
Expired items are removed when accessed
How It Works

The cache uses two main data structures:

Map
The Map keeps track of each key and its corresponding node, so entries can be found quickly without searching through the whole cache.

Doubly Linked List
The linked list keeps the cache entries in order of recent use.

The entry after head is the most recently used.
The entry before tail is the least recently used.

When an entry is accessed or updated, it is moved to the front of the list. When the cache reaches its capacity, the entry at the end of the list is removed.

TTL Support

A TTL can be added when putting an item into the cache:

cache.put("user1", "Muna", 5);

This means the item will expire after 5 seconds.

If no TTL is provided, the item stays in the cache until it is removed because of the capacity limit.

Complexity
Operation	Average Time
get(key)	O(1)
put(key, value)	O(1)

Space complexity is O(capacity) because the cache only keeps entries up to its configured limit.

How to Run

Make sure Node.js is installed, then run:

node lru-cache.js

Example output:

=== Running LRU Cache Test ===
cache.get("A") -> 10
cache.get("B") -> -1
cache.get("C") -> 30
cache.get("A") -> 10
Project Structure
code/
├── lru-cache.js
└── README.md

This implementation was kept simple and focused on the main LRU cache logic, with TTL support added as an extra feature.
# LRU Cache with TTL Support

A simple LRU (Least Recently Used) cache implementation in JavaScript using Node.js.

The cache uses a `Map` and a doubly linked list to keep `get()` and `put()` operations at O(1) average time. It also supports optional TTL (Time-To-Live) expiration.

## Features

- O(1) average time for `get()` and `put()`
- Automatically removes the least recently used item when the cache is full
- Optional TTL support for cache entries
- Expired entries are removed when accessed

## Data Structures

### Map

A JavaScript `Map` is used to find cache entries quickly without searching through the entire cache.

### Doubly Linked List

The linked list keeps track of the order in which items are used.

- The item after `head` is the most recently used
- The item before `tail` is the least recently used

This allows items to be moved or removed in O(1) time.

## How It Works

When `get(key)` is called, the cache checks whether the key exists and whether it has expired. If it is valid, the item is moved to the front of the list because it was recently used.

When `put(key, value)` is called, an existing item is updated and moved to the front. If the cache is full, the least recently used item is removed before adding the new one.

## TTL Support

A TTL can be provided when adding an item:

```javascript
cache.put("user1", "Muna", 5);
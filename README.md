# DSA in Python

My practice repository for Data Structures and Algorithms, implemented from scratch in Python. I try each problem on my own first, then compare with other approaches.

## Progress

- [x] Linked List
- [ ] Stack
- [ ] Queue
- [ ] Trees
- [ ] Graphs
- [ ] Sorting & Searching
- [ ] Dynamic Programming

## Linked List

Singly linked list with a `Node` and `LinkedList` class.

### Operations

| Method | Description |
|---|---|
| `add_first(data)` | Insert at the head |
| `add_last(data)` | Insert at the tail |
| `insert_at(index, data)` | Insert at a position |
| `delete_first()` | Remove the head |
| `delete_last()` | Remove the tail |
| `delete_value(value)` | Remove the first node with this value, returns `True`/`False` |
| `delete_at(index)` | Remove the node at a position |
| `search_by_value(value)` | Return the first node with this value, or `None` |
| `update(index, data)` | Update a node's value by position |
| `length()` | Number of nodes |
| `is_empty()` | Check if the list is empty |
| `traverse()` | Print every node |
| `to_list()` | Convert to a Python list |
| `clear()` | Remove all nodes |

### Problems solved

| Problem | Approach | Time | Space |
|---|---|---|---|
| Detect a cycle (`has_cycle_floyd`) | Floyd's slow/fast pointers | O(n) | O(1) |
| Detect a cycle (`has_cycle_set`) | Visited set | O(n) | O(n) |

## Project structure

```
.
├── linked_list/
│   └── singly_linked_list.py
└── README.md
```

New topics get their own folder (for example `stack/`, `trees/`).

## How to run

```bash
python linked_list/singly_linked_list.py
```

Requires Python 3.8 or newer. No external dependencies.

## Notes

- Each solution is written by hand before looking at any video or reference.
- Edge cases I test for: empty structure, single element, duplicates, and invalid indexes.
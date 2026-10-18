class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def add_first(self, data):
        node = Node(data)
        node.next = self.head
        self.head = node

    def delete_first(self):
        if not self.head:
            print("Linked List is Empty")
            return
        self.head = self.head.next

    def add_last(self, data):
        node = Node(data)
        current_node = self.head

        if not current_node:
            self.head = node
        else:
            while current_node:
                if not current_node.next:
                    current_node.next = node
                    break
                current_node = current_node.next

    def delete_last(self):
        current_node = self.head
        # LinkedList is empty
        if not current_node:
            print("Linked List is empty")
            return

        # LinkedList has only one Node
        if not current_node.next:
            self.head = None
            return

        while current_node:
            next_node = current_node.next
            if not next_node.next:
                current_node.next = None
                return
            current_node = current_node.next

    def delete_value(self, value):

        if not self.head:
            return False

        if value == self.head.data:
            self.head = self.head.next
            return True

        current_node = self.head

        while current_node.next:
            if value == current_node.next.data:
                current_node.next = current_node.next.next
                return True

            current_node = current_node.next

        return False

    def search_by_value(self, value):
        current_node = self.head

        if not current_node:
            print("List is empty")
            return None

        while current_node:
            if current_node.data == value:
                return current_node
            current_node = current_node.next

        return None

    def length(self):
        count = 0
        current_node = self.head
        while current_node:
            count += 1
            current_node = current_node.next
        return count

    def is_empty(self):
        return False if self.head else True

    def traverse(self):
        i = 0
        current_node = self.head

        while current_node:
            if i == 30:
                return
            i = i + 1
            print(f"data = {current_node.data}, next = {current_node.next}")
            current_node = current_node.next

    def insert_at(self, index, data):

        node = Node(data)

        length = self.length()

        if index > length or index < 0:
            raise IndexError("index out of range")
        elif index == 0:

            if not self.head:
                self.head = node
            else:
                node.next = self.head
                self.head = node
        else:
            i = 0
            current_node = self.head
            while current_node:
                if i == (index - 1):
                    node.next = current_node.next
                    current_node.next = node
                    break
                current_node = current_node.next
                i = i + 1

    def delete_at(self, index):

        if index < 0 or not self.head or index >= self.length():
            raise IndexError("index out of range")
        elif index == 0:
            self.head = self.head.next
        else:
            i = 0
            current_node = self.head
            while current_node:
                if i == (index - 1):
                    current_node.next = current_node.next.next
                    break
                i = i + 1
                current_node = current_node.next

    def clear(self):
        self.head = None

    def to_list(self):
        items = []
        current_node = self.head
        while current_node:
            items.append(current_node.data)
            current_node = current_node.next
        return items

    def update(self, index, data):

        if index < 0:
            raise IndexError("index out of range")

        i = 0
        current_node = self.head
        while current_node:
            if i == index:
                current_node.data = data
                return
            i = i + 1
            current_node = current_node.next

        raise IndexError("index out of range")

    def create_cycle(self):
        current_node = self.head
        current_node.next = self.head

    def is_cycle(self):
        # Floyd's Cycle Detection
        # Slow Fast Pointer Approach
        slow = self.head
        fast = self.head

        while fast and fast.next:
            for _ in range(2):
                fast = fast.next
                if fast is slow:
                    return True
            slow = slow.next

        return False

    def is_cycle(self):
        # visited-set approach
        current_node = self.head
        seen = set()
        while current_node:
            if current_node in seen:
                return True
            seen.add(current_node)
            current_node = current_node.next
        return False

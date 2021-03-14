from doubly_node import DoublyNode


class DoublyLinkedList:

    def __init__(self):
        self.head = DoublyNode("HEAD")
        self.tail = DoublyNode("TAIL")
        self.head.next = self.tail
        self.tail.previous = self.head
        self.__length = 0

    def __str__(self):
        return f"DoublyLinkedList(len={self.__length} value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        node_value = DoublyNode(value)
        node_value.next = self.head.next
        node_value.previous = self.head
        node_value.next.previous = node_value
        self.head.next = node_value
        self.__length +=1
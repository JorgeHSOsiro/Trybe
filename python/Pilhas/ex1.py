from stack import Stack


class Min_Stack(Stack):
    def min_value(self):
        # return min(self._data)
        lista = self._data
        min_number = self._data[0]
        for item in lista:
            if item < min_number:
                min_number = item
        return min_number


if __name__ == "__main__":
    content_stack = Min_Stack()

    content_stack.push(1)
    content_stack.push(-2)
    content_stack.push(3)
    print(content_stack)
    print(content_stack.min_value())

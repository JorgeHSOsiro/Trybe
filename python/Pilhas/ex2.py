from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limite):
        super().__init__()
        self.limite = limite

    def push(self, valor):
        if self.size() + 1 > self.limite:
            raise StackOverflow()
        else:
            super().push(valor)


if __name__ == "__main__":
    content_stack = LimitStack(2)
    content_stack.push(1)
    print('ok')
    content_stack.push(-2)
    print('ok')

try:
    content_stack.push(3)
    print('ok')
except StackOverflow:
    print("Não é possível adicionar outro item à pilha")

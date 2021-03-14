def print_star(n):
    for linha in range(1, n + 1):
        for coluna in range(1, n + 1):
            print('*', end="")
        print()


print(print_star(5))

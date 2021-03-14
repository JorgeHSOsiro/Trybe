import statistics

# @classmethod decorator que nos faz nao precisar do self
# - referencia a propria class


class Estatistica:
    @classmethod
    def calcula_media(cls, lista):
        result = 0
        for item in lista:
            result += item
        print(result / len(lista))

    @classmethod
    def calcula_mediana(cls, lista):
        print(statistics.median(lista))

    @classmethod
    def calcula_moda(cls, lista):
        print(statistics.mode(lista))

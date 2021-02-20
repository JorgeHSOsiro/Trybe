class tv:
    def __init__(self, volume, canal, tamanho, ligada):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if not self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if not self.__volume >= 0:
            self.__volume -= 1

    def modificar_canal(self, channel):
        if 1 <= channel <= 99:
            self.__canal = channel
            print("mudou de canal")
        else:
            raise ValueError("valor fora dos limites")

    def ligar_desligar(self, switch):
        if switch is True:
            self.__ligada = True
            print("ligou")
        else:
            self.__ligada = False
            print("desligou")

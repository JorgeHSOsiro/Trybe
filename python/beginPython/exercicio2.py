LIST = [1, 9, 2]


def media(list):
    result = 0
    for item in list:
        result += item
        print(result)
    return result/len(list)


print(media(LIST))

#!/bin/bash

read -p "Digite o caminho de um arquivo" arquivo

if [ -d $arquivo ]
then 
    echo "é um diretorio"
elif [ -f $arquivo ] 
then 
    echo "é um arquivo"
else 
    echo "outro arquivo"
fi

ls -l $arquivo
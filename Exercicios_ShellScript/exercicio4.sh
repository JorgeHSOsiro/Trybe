#!/bin/bash

# Vouter muito sucesso na programação

caminho=./zercicio4.sh
if [ -e "$caminho" ]
  then
     echo "O caminho $FILE está habilitado!"
fi
if [ -w "$caminho" ]
  then
    echo "Você tem permissão para editar $caminho"
  else
    echo "Você NÃO foi autorizado a editar $caminho"
fi
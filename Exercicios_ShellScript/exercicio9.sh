#!/bin/bash

param=$1
if [ -d "$param" ]
  then
    x=`ls -l $param | wc -l`
    echo "O $param tem $x arquivos."
else
    echo "O argumento $param não é um diretório!"
fi
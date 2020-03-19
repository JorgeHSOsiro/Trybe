#!/bin/bash

arquivo=$@

for nomes in $arquivo
  do
    if [ -f "$arquivo" ]
      then
        echo "$arquivo é um arquivo comum"
    elif [ -d "$arquivo" ]
      then
        echo "$arquivo é um diretório"
    else
        echo "$arquivo é alguma outra coisa"
    fi
    ls -l $arquivo
  done
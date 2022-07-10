# Nisto Cremos App

![Texto do seu parágrafo](https://user-images.githubusercontent.com/4103305/178159731-28b45902-cf59-48a5-be13-d1a88f4c67d6.png)

## Conteúdo

- [Obrigatoriedades](#obrigatoriedades)
- [Como instalar](#como-instalar)
- [Usando](#usando)
- [Comandos](#comandos)
- [Estrutura de pastas](#estrutura-de-pastas)

## Obrigatoriedades

- Node 16.14.2(usando o Volta ele será instalado automaticanete ao rodar `yarn`)
- Yarn 1.22.18

## Como instalar

1. Execute `yarn` para instalar as dependências

## Usando

1. Execute `yarn start` para abrir o servidor do expo e escolher sua plataforma(iOS/Android)

## Comandos

- `start`: abre um servidor do expo
- `format`: formata o código usando Prettier
- `typecheck`: faz a checagem de tipos
- `clean`: remove a pasta `node_modules`

## Estrutura de pastas

```
src/
├
├─ components/
├
├─ constant/
├
├─ enum/
├
├─ screen/
├
```
- Components: componentes que são utilizados em mais de um lugar
- Constant: lista de crenças e suas informações
- Enum: enum com o nome de cada crença
- Screen: Telas do aplicativo

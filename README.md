# JOBLY

> Projeto semestral de Introdução a Engenharia de Computação desenvolvido com o intuito de aproximar pessoas com qualificações profissionais diversas e potenciais contratantes que podem avaliar o serviço prestado e assim gerar um ecossistema interno capaz de cada vez mais levar a qualidade que desejamos aos nossos usuários

## Sumário:
- [Guias de desenvolvimento](#guide)
- [Sobre](#about)
- [Rotas e Regras](#routesandrules)


## :file_folder: Estrutura do Projeto
<pre>
├──USER                                     ├──Tag                               
├ ├──(PK) ID (uuid)                         ├ ├──(PK) ID (uuid)                
├  ├──name (varchar)                        ├  ├──name (varchar)               
├  ├──name (varchar)                        ├  ├──created_at (Date)            
├  ├──name (varchar)                        ├  ├──updated_at (Date)            
├  ├──email (varchar)                       ⬇ 
├  ├──password (varchar)                    ⬇ 
├  ├──admin (boolean)                       ⬇ 
├  ├──created_at (Date)                     
├  ├──updated_at (Date)                   ├──Compliments                      
⬇                                         ├ ├──(PK) ID (uuid)                 
⬇                                         ├  ├──(FK) user_sender (uuid)        
➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡  ├  ├──(FK) user_receiver (uuid)      
                                          ├  ├──(FK) tag_id (uuid)            
                                          ├  ├──created_at (Date)             


</pre>
<hr>
<h2>:checkered_flag: Sobre o projeto </h2> <a name="about"></a>

<h3>:flags: Rotas da Aplicação </h3> <a name="routesandrules"></a>

<details>
<summary>Expandir</summary>

### JOBLY

#### Rotas de Login e Create User
##### POST
- /users: Criação de usuário
- /login: Autenticação de usuário

#### Rotas de Admin

##### POST
- /tags: Criação de tags

#### Rotas Gerais

##### GET
- /users: Busca todos os usuários
- /tags: Busca todas as tags de elogio

#### Rotas de Envio e Recebido do Usuário Logado

</details>


<h3>:no_entry_sign: Regras de Negócio </h3> <a name="routesandrules"></a>

<details>
<summary>Expandir</summary>

### JOBLY

- Cadastro de usuário
- [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail 
- [x] Não é permitido cadastrar usuário sem e-mail 

- Cadastro de Tag
- [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
- [x] Não é permitido cadastrar tag sem nome
- [x] Não é permitido cadastrar por usuários que não sejam administradores

- Cadastro de propostas de emprego
- [ ] O usuário precisa estar autenticado na aplicação

- Cadastro de avaliações
- [ ] Não é permitido um usuário cadastrar um elogio para si
- [ ] Não é permitido cadastrar elogios para usuários invalidos
- [ ] O usuário precisa estar autenticado na aplicação
</details>

<hr>
<h2>:memo: Guias de desenvolvimento </h2> <a name="about"></a>

> Esta seção é reservada para esclarecer os padrões de desenvolvimento utilizados, a fim de proporcionar um andamento organizado e claro do projeto para todos os envolvidos

<h3> Commits </h3> <a name="guide"></a>

<details>
<summary>Expandir</summary>

#### Use comandos que possam te ajudar

```
$ git commit -m "O titulo" -m "sua descrição"
```

1. No título ou primeira linha escreve-se o comando para o commit no modo Imperativo.

```
$ git commit -m "Adiciona instruções de commit messages" -m "sua descrição"
```

2. Em detalhes ou na terceira linha, resumem-se os detalhes com as seguintes perguntas: O que foi feito? Por quê foi feito?

Usando uma escrita simplificada e objetiva o resultado será:

```
$ git commit -m "Adiciona instruções de commit messages" -m "Descrição Detalhada do Commit, onde você pode detalhar o que foi modificado em seu código e o porque foi modificado"
```
#### Informação nas commit messages:

- Descreva o porque da mudança estar sendo feita.
- Como ele aborda o problema?
- Não presuma que o revisor entende qual era o problema original.
- Descreva quais quer limitações no código atual.

</details>
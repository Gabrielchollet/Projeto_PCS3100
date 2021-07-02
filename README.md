# JOBLY
> Projeto semestral PCS3100
Projeto semestral de Introdução a Engenharia de Computação desenvolvido com o intuito de aproximar pessoas com qualificações profissionais diversas e potenciais contratantes que podem avaliar o serviço prestado e assim gerar um ecossistema interno capaz de cada vez mais levar a qualidade que desejamos aos nossos usuários
## Sumário:
- [Sobre](#about)
- [Rotas e Regras](#routesandrules)
- [Conceitos](#concepts)


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
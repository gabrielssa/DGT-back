# User

## Register

https://<span></span>dgt-back.herokuapp.com/api/user/register/

(Todos os campos devem possuir ao menos 6 caracteres para serem validados)

post

{
	
	"name":"Pedro Neto",

	"email":"pedroneto@gmail.com",

	"password":"pedro123"

}

## Login

https://<span></span>dgt-back.herokuapp.com/api/user/login

post

{
	
	"email":"pedroneto@gmail.com",

	"password":"pedro123"

}

Obs: O login retorna um Bearer Token que deve ser passado na authorization

## LogOut
http://<span></span>dgt-back.herokuapp.com/api/user/logout

post

# Task

## Create

http://<span></span>dgt-back.herokuapp.com/api/tasks/create

post

{

	"name":"Programar",
	"priority":"alta"
	
}

## List all my tasks

http://<span></span>dgt-back.herokuapp.com/api/tasks/

get

## Rename a task

http://<span></span>dgt-back.herokuapp.com/api/tasks/

put

{

	"_id":"5ed566fb0b745b171029ad8f",
	"name":"Programar Muitão"
	
}

## Delete a task

http://<span></span>dgt-back.herokuapp.com/api/tasks/

delete
{

	"_id":"5ed566fb0b745b171029ad8f"
	
}

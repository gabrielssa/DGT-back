# User

## Register

https://<span></span>dgt-back.herokuapp.com/api/user/register/

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
http://<span></span>localhost:5555/api/user/logout

post

# Task

## Create

http://<span></span>localhost:5555/api/tasks/create

post

{
	"name":"Programar",
	"priority":"alta"
}

## List all my tasks

http://<span></span>localhost:5555/api/tasks/

get

## Rename a task

http://<span></span>localhost:5555/api/tasks/

put

{
	"_id":"5ed566fb0b745b171029ad8f",
	"name":"Programar Muitão"
}

## Delete a task

http://<span></span>localhost:5555/api/tasks/

delete
{
	"_id":"5ed566fb0b745b171029ad8f"
}

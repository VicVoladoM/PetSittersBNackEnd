# PetSittersBNackEnd
Prueba Tecnica, Nodejs

1.- Bajar el repositorio
git clone https://github.com/VicVoladoM/PetSittersBNackEnd.git

2.- Instalar Dependencias

cd PetSittersBackEnd

npm install

3.- Ingresar a la siguiente carpeta para mirar los archivos que contienen la BD y los End-points

config/database/
  
  3.1 Carpeta "queries" 
  
  -> petSitterQueries.js -> contiene todas las Querys de la BD
  
  3.2 Carpeta "sql-postman" 
  
  -> PetSitter.postman_collection.json -> contiene todas las URLS END-POINT de la API
  
  -> PetSitter.sql -> contiene toda la informacion del esquema de la BD
  
  4.- Correr la API
  
  npm start
  
  4.1 consultar PetSitter.postman_collection.json en -> config/database/sql-postman/PetSitter.postman_collection.json
  
  4.2 importar PetSitter.postman_collection.json a postman

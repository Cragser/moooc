##
php bin/console doctrine:database:create
php in/console make:entity

php bin/console doctrine:schema:update --force

php bin/console make:controller


## Agregar atributos desde consola

1.Utilizar el comando php bin/console make:entity User, cuando la entidad esta creada permite agregarle mas atributos.
2. Agregar el atributo que tiene la relación, por ejemplo comentarios.
3.Cuando les pida el tipo de dato (string,integer,etc..) deben escribir 'relation' .
4. Deben especificar la entidad con la que va relacionada la columna en ese ejemplo seria la entidad Comentarios.
5.Al especificar la entidad con la que va relacionada les mostrara los tipos de relación, escriben la que necesiten en este caso OneToMany.
6. Especifican el nombre del atributo que estará en la entidad comentarios en este caso 'user' y listo.
7.
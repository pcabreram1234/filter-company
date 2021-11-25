# filter-company

Repositorio para mostrar el filtrado por tipo de compañías de un listado de empresas.

# Problema

Existe un listado de compañías y los asistentes de Networking necesitan contar con una web que les permita filtrar por el tipo de industria.

# Solución

1. Crear una web que cuente con los siguientes componenetes

- **Listado de empresas por tipo de industria**

  - Un elemento list que cuente con una flecha de navegacione
  - Este contenedor debe contar con barras de navegación vertical
  - Todos los elementos de la lista deben estar con opactidad de 60%
  - solo se mostrarán con opacidad 100% aquellos selecciondos
  - Cada uno de los elementos de esta lista deben tener dos tipos de clases CSS
    - Una clase .selected que pondrá el elemento con opacidad 100% y el color de texto en negro
    - Una clase .unselected que pondrá el elmento con opacidad 60% y el color de teto blanco

- **Pantalla de resultados**

  - Se debe mostrar al momento de seleccionar de la lista de empresas por industrias unos elementos tipo Cards que muestren la siguiente informacion de las empresas.
    - Nombre de la empres, Fecha de fundación, tamaño, ubicación, Tipo de industria, y dos links enlanzados al LinkedIn y Website de la empresa.
      - Cada Card debe tener un color de fondo igual que al elemento del listado que se selecionó. Es decir si se elige una empresa del tipo Recursos Humanos y la misma tiene el color de fondo Azul, la Card resultante debe tener ese mismo color de fondo.

- Este contenedor debe contar con barras de navegación vertical

# Herramientas a utilizar

Dentro de las herramienta a utilizar para desarrollar esta solución estan

- Diseño y Maquetado

  1.  Figma
  2.  CSS
  3.  HTML

- Codificación.

1. Javascript
2. ReactJS para realizar la aplicación basada en componentes
3. Webpack para empaquetar todo para producción y poderlo desplegar en cualquier hosting

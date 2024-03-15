# Proyecto de Búsqueda Laboral Local - Frontend

Este proyecto es una plataforma de búsqueda laboral local, desarrollada utilizando tecnologías como Vue 3, Tailwind CSS y Axios. Permite a los usuarios registrados buscar empleo, publicar ofertas de trabajo y establecer conexiones profesionales dentro de su área local.

## Características

- **Registro de Usuarios:** Los usuarios pueden registrarse como empleados o empleadores.
- **Perfiles de Empleados:** Los empleados pueden crear perfiles con información sobre su experiencia laboral, educación y habilidades.
- **Publicación de Puestos de Trabajo:** Los empleadores pueden publicar ofertas de trabajo con detalles sobre el puesto y los requisitos.
- **Postulaciones:** Los empleados pueden postularse a los puestos de trabajo publicados por los empleadores.

## Tecnologías Utilizadas

- **Vue 3:** Framework progresivo para construir interfaces de usuario.
- **Tailwind CSS:** Framework de diseño de componentes CSS.
- **Axios:** Cliente HTTP basado en promesas para el navegador y Node.js.

## Escenarios de Uso

### 1. Creación de Perfil Público de Empleado

**Given:** Un empleado registrado decide crear un perfil y elige la opción de hacerlo público.

**When:** El empleado completa su perfil con información sobre su experiencia laboral, educación y habilidades, y selecciona la opción de hacer su perfil público.

**Then:** El sistema almacena la información del perfil del empleado y lo marca como público, permitiendo que otros usuarios puedan ver su información.

### 2. Publicación de Puesto de Trabajo por Empleador

**Given:** Un empleador registrado desea publicar un nuevo puesto de trabajo en el sistema.

**When:** El empleador completa un formulario con detalles sobre el puesto, incluyendo título, descripción, requisitos y fecha de cierre.

**Then:** El sistema registra el nuevo puesto de trabajo en la base de datos, asociándolo con el empleador que lo publicó. El puesto de trabajo se muestra en la lista de puestos disponibles para los candidatos.

### 3. Postulación de Empleado a Puesto de Trabajo

**Given:** Un empleado registrado encuentra un puesto de trabajo que le interesa y decide postularse.

**When:** El empleado selecciona el puesto de trabajo y completa el formulario de solicitud adjuntando su currículum.

**Then:** El sistema registra la postulación del empleado para el puesto de trabajo seleccionado y notifica al empleador correspondiente sobre la nueva postulación.

## Licencia

Este proyecto está bajo la licencia [MIT License](LICENSE).

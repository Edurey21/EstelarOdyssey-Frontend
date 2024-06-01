# Estelar Odyssey-Frontend

Este proyecto es una aplicación de React con TypeScript utilizando Vite como herramienta de construcción. El proyecto incluye enrutamiento con `react-router-dom` y pruebas con React Testing Library y Jest.


## Descripción

Este proyecto utiliza la siguiente configuración:

- **Vite**: Herramienta de construcción rápida.
- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que agrega tipado estático.
- **React Router**: Biblioteca para enrutamiento en aplicaciones de React.
- **Jest**: Framework de pruebas para JavaScript.
- **React Testing Library**: Conjunto de herramientas para probar componentes de React.


## Instalación

### Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu máquina. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

### Instalación de Dependencias

```bash
npm install
```


### Instalación de Dependencias Adicionales

Para el enrutamiento:

```bash
npm install react-router-dom
```

Para las pruebas:

```bash
npm install @testing-library/react @testing-library/jest-dom
npm install jest ts-jest @types/jest --save-dev
npm install jest-environment-jsdom --save-dev
```

## Ejecución del Proyecto

Primero tenemos que ir al proyecto del backend y ejecutarlo.
Para iniciarlo, ejecuta: 
```bash
node index.js
```

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás ver la aplicación en `http://localhost:3000`.

## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza:

```bash
npm test
```

Esto ejecutará todas las pruebas definidas en el proyecto utilizando Jest.

# Estelar Odyssey: Explorando lo Inexplorado

Este proyecto es una aplicación de React con TypeScript utilizando Vite como herramienta de construcción. El proyecto incluye enrutamiento con `react-router-dom` y pruebas con React Testing Library y Jest.

## Descripción del Proyecto

EstelarOdyssey-Frontend es una aplicación web desarrollada con React y TypeScript utilizando Vite como herramienta de construcción. La aplicación permite a los usuarios dar sugerencias y ver sugerencias relacionadas con el juego de simulación espacial "Estelar Odyssey: Explorando lo Inexplorado". 

### Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
src/
├── components/
│   ├── SuggestionForm.tsx
│   ├── SuggestionList.tsx
│
├── css/
│   ├── App.css
│   ├── AddSuggestion.css
│   ├── Home.css
│   ├── ViewSuggestions.css
│   ├── index.css
│
├── img/
│   ├── logo.png
│   ├── image1.png
│   ├── image2.png
│
├── pages/
│   ├── Home.tsx
│   ├── AddSuggestion.tsx
│   ├── ViewSuggestions.tsx
│
├── tests/
│   ├── SuggestionForm.test.tsx
│
├── App.tsx
├── main.tsx
├── jest.setup.ts
```

### Uso del Proyecto

#### Vistas Principales

1. **Inicio (Home)**
   - **Descripción**: La vista principal de la aplicación donde los usuarios pueden navegar a las secciones de dar una sugerencia o ver sugerencias.
   - **Uso**: 
     - Al ingresar a la aplicación, los usuarios verán la página de inicio con un mensaje de bienvenida y opciones para "Dar una Sugerencia" y "Ver Sugerencias".

2. **Dar una Sugerencia (AddSuggestion)**
   - **Descripción**: Vista donde los usuarios pueden llenar un formulario para enviar sus sugerencias.
   - **Uso**: 
     - Los usuarios llenan los campos del formulario: Nombre, Apellido, Email, Planeta, Nave, Misión, y Recursos.
     - Después de llenar el formulario, hacen clic en el botón "Enviar" para enviar la sugerencia al servidor.

3. **Ver Sugerencias (ViewSuggestions)**
   - **Descripción**: Vista donde los administradores pueden ver todas las sugerencias enviadas por los usuarios.
   - **Uso**: 
     - Los administradores pueden ver una lista de todas las sugerencias con los detalles proporcionados por los usuarios.


### Prototipos de la Vista y Cómo Utilizarlas

#### Inicio (Home)

- **Prototipo**:
  - **Encabezado**: Logo de la aplicación y título "Bienvenido a Estelar Odyssey: Explorando lo Inexplorado".
  - **Opciones**: Botones para "Dar una Sugerencia" y "Ver Sugerencias".
  - **Imagenes**: Imágenes representativas del juego para mejorar la estética.

- **Uso**:
  1. Navega a la página de inicio (`/`).
  2. Haz clic en "Dar una Sugerencia" para ir al formulario de sugerencias.
  3. Haz clic en "Ver Sugerencias" para ver las sugerencias enviadas.

#### Dar una Sugerencia (AddSuggestion)

- **Prototipo**:
  - **Formulario**: Campos para Nombre, Apellido, Email, Planeta, Nave Espacial, Misión, y Recursos.
  - **Botón de Envío**: Botón para enviar la sugerencia.

- **Uso**:
  1. Navega a la página de dar una sugerencia (`/add-suggestion`).
  2. Llena todos los campos del formulario.
  3. Haz clic en "Enviar" para enviar la sugerencia.

#### Ver Sugerencias (ViewSuggestions)

- **Prototipo**:
  - **Lista de Sugerencias**: Cada sugerencia se muestra con sus detalles (Nombre, Apellido, Email, Planeta, Nave, Misión, Recursos).

- **Uso**:
  1. Navega a la página de ver sugerencias (`/view-suggestions`).
  2. Observa la lista de sugerencias enviadas.



### Descripción de las Pruebas y Cómo Ejecutarlas

## Descripción de las Pruebas

Este proyecto incluye pruebas básicas utilizando Jest y React Testing Library para asegurar la funcionalidad correcta de los componentes. Las pruebas están diseñadas para verificar que los componentes se rendericen correctamente y que los datos se manejen de manera adecuada.

### Tipos de Pruebas

1. **Renderizado de Componentes**:
   - Verifica que los componentes se rendericen correctamente con los datos esperados.
   - Ejemplo: La prueba asegura que el formulario de sugerencias (`SuggestionForm`) se renderiza con todos los campos necesarios.

2. **Simulación de Eventos de Usuario**:
   - Simula eventos de usuario como clics y entradas de texto, y verifica el comportamiento resultante.
   - Ejemplo: La prueba verifica que los campos del formulario de sugerencias acepten entradas y que el botón de envío funcione.

### Archivos de Prueba

Las pruebas están ubicadas en la carpeta `tests` dentro del directorio `src`.

**Estructura de las pruebas**:
```
src/
├── tests/
│   ├── SuggestionForm.test.tsx
```

### Cómo Ejecutar las Pruebas

Sigue los pasos a continuación para ejecutar las pruebas en tu entorno local.

#### Instalación de Dependencias de Pruebas

Asegúrate de haber instalado todas las dependencias necesarias para ejecutar las pruebas. Si no lo has hecho, instala las siguientes dependencias:

```bash
npm install @testing-library/react @testing-library/jest-dom
npm install jest ts-jest @types/jest --save-dev
npm install jest-environment-jsdom --save-dev
```

#### Ejecución de las Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm test
```

Este comando ejecutará todas las pruebas definidas en el proyecto utilizando Jest.

# Portafolio Web Profesional

Portafolio web moderno y responsivo con arquitectura limpia, HTML semántico, CSS modular y JavaScript con componentes reutilizables.

## 📋 Características

- ✨ Diseño moderno y responsivo
- 🎨 Arquitectura CSS limpia y modular
- ⚡ JavaScript con componentes reutilizables
- 📱 Totalmente responsivo (móvil, tablet, desktop)
- 🚀 Listo para desplegar en GitHub Pages
- 🎯 Semántica HTML5
- ♿ Accesible
- ⚙️ Fácil de personalizar

## 📁 Estructura del Proyecto

```
portafolio-web/
├── css/
│   ├── main.css                 # Archivo principal CSS
│   ├── components/              # Estilos de componentes
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   └── footer.css
│   └── utils/                   # Utilidades CSS
│       ├── variables.css        # Variables CSS globales
│       └── responsive.css       # Media queries
├── js/
│   ├── main.js                  # Archivo principal JavaScript
│   ├── components/              # Componentes reutilizables
│   │   ├── Navigation.js
│   │   ├── SkillCard.js
│   │   └── ProjectCard.js
│   └── utils/                   # Funciones helper
│       └── helpers.js
├── assets/
│   ├── images/                  # Imágenes del portafolio
│   └── icons/                   # Iconos
├── index.html                   # Página principal
├── projects.html                # Página de proyectos
├── contact.html                 # Página de contacto
└── README.md                    # Este archivo
```

## 🏗️ Arquitectura Limpia

Este proyecto utiliza **arquitectura limpia** con:

### Separación de Responsabilidades
- **CSS modular**: Cada componente tiene su propio archivo de estilos
- **JavaScript modular**: Componentes independientes y reutilizables
- **HTML semántico**: Estructura clara y accesible

### Componentes Reutilizables
- `SkillCard`: Renderiza tarjetas de habilidades
- `ProjectCard`: Renderiza tarjetas de proyectos
- `Navigation`: Maneja la navegación y scroll suave

### Utilidades
- `helpers.js`: Funciones helper para manipulación del DOM
- `variables.css`: Variables CSS globales para colores, espaciado, etc.

## 🎨 Personalización

### Cambiar Colores
Edita `css/utils/variables.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... más variables */
}
```

### Agregar Habilidades
Edita `js/main.js` en el array `skillsData`:
```javascript
const skillsData = [
  {
    icon: '🌐',
    title: 'HTML',
    description: 'Estructura y diseño web semántico'
  },
  // ... agregar más
];
```

### Agregar Proyectos
Edita `js/main.js` en el array `projectsData`:
```javascript
const projectsData = [
  {
    icon: '💼',
    title: 'Proyecto 1',
    description: 'Descripción',
    technologies: ['HTML', 'CSS'],
    links: [
      { label: 'Github', url: '#' },
      { label: 'Demo', url: '#' }
    ]
  },
  // ... agregar más
];
```

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear un repositorio en GitHub
1. Abre [github.com/new](https://github.com/new)
2. Nombre del repositorio: `tu-usuario.github.io` (reemplaza con tu usuario)
3. Selecciona "Public"
4. Haz clic en "Create repository"

### Paso 2: Clonar y empujar el código
```bash
# En tu terminal, en la carpeta del portafolio
git init
git add .
git commit -m "Initial commit: Portafolio web"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
git push -u origin main
```

### Paso 3: Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. En el menú lateral izquierdo, selecciona "Pages"
4. En "Source", selecciona "Deploy from a branch"
5. Elige la rama "main" y la carpeta "/ (root)"
6. Haz clic en "Save"

### Paso 4: ¡Listo!
Tu portafolio estará disponible en: `https://tu-usuario.github.io`

## 📝 Editar tu Información

### Archivo: `index.html`
- Cambia el nombre en la sección "Sobre mí"
- Actualiza tu email en los enlaces
- Modifica la descripción personal

### Archivo: `js/main.js`
- Actualiza el array `skillsData` con tus habilidades
- Actualiza el array `projectsData` con tus proyectos

### Archivo: `contact.html`
- Actualiza tu email
- Actualiza tus redes sociales
- Modifica el formulario si es necesario

## 🛠️ Desarrollo Local

Para ver tu portafolio localmente:

### Opción 1: Usar VS Code
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 2: Usar Python
```bash
cd portafolio-web
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### Opción 3: Usar Node.js
```bash
cd portafolio-web
npx http-server
```

## 🎓 Aprender Más

Este proyecto utiliza:
- HTML5 semántico
- CSS3 con variables y Grid/Flexbox
- JavaScript ES6+ con módulos
- Diseño responsivo con media queries

## 📄 Licencia

Este proyecto es libre de usar y personalizar.

## ✨ Créditos

Portafolio web creado con arquitectura limpia y mejores prácticas de desarrollo.

---

**¿Preguntas o sugerencias?** Crea un issue en el repositorio.

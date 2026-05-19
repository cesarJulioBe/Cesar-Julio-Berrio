# 📚 GUÍA DE DESPLIEGUE EN GITHUB PAGES

Tu portafolio web está listo. Sigue estos pasos para desplegarlo en GitHub Pages.

## 🚀 Pasos para Desplegar

### 1️⃣ Crear repositorio en GitHub
1. Ve a https://github.com/new
2. **Nombre importante**: Debe ser `tu-usuario-github.github.io`
   - Reemplaza `tu-usuario-github` con tu nombre de usuario de GitHub
   - Ejemplo: si tu usuario es "juanperez", será `juanperez.github.io`
3. Selecciona "Public" ✓
4. NO inicialices con README, .gitignore o LICENSE
5. Haz clic en "Create repository"

### 2️⃣ Conectar tu repositorio local con GitHub
```bash
cd portafolio-web

# Añade el repositorio remoto
git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git

# Cambia el nombre de la rama a 'main'
git branch -M main

# Sube los archivos
git push -u origin main
```

**Nota**: Reemplaza `TU-USUARIO` con tu usuario de GitHub en las URLs.

### 3️⃣ Verificar que GitHub Pages está activo
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú izquierdo, selecciona **Pages**
4. Verifica que bajo "Source" esté:
   - **Branch**: main
   - **Folder**: / (root)
5. Haz clic en **Save**

### 4️⃣ ¡Espera a que se despliegue!
GitHub tardará algunos minutos (generalmente 2-5 minutos).
Verás un aviso verde cuando esté listo:
> "Your site is live at https://tu-usuario.github.io"

### 5️⃣ Accede a tu portafolio
Tu portafolio estará disponible en: **https://tu-usuario.github.io**

---

## 🔄 Si ya tienes repositorio

Si ya creaste el repositorio de otras formas:

```bash
# Ver el remoto actual
git remote -v

# Si necesitas cambiar el remoto
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git

# Sube los cambios
git push -u origin main
```

---

## ✏️ PERSONALIZAR TU PORTAFOLIO

### 📝 Cambiar tu información

**Archivo: `index.html`**
```html
<h1>Bienvenido a mi Portafolio</h1>
<!-- Cambia esto a tu nombre -->

<h2>Sobre mí</h2>
<!-- Actualiza tu información aquí -->
```

**Archivo: `js/main.js`**
```javascript
const skillsData = [
  {
    icon: '🌐',
    title: 'HTML',
    description: 'Tu descripción aquí'
  },
  // Agrega más habilidades
];

const projectsData = [
  {
    icon: '💼',
    title: 'Tu Proyecto',
    description: 'Descripción',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Github', url: 'https://github.com/tu-proyecto' },
      { label: 'Demo', url: 'https://demo.ejemplo.com' }
    ]
  },
  // Agrega más proyectos
];
```

### 🎨 Cambiar colores

**Archivo: `css/utils/variables.css`**
```css
:root {
  --primary-color: #667eea;      /* Color principal */
  --secondary-color: #764ba2;    /* Color secundario */
  --accent-color: #f093fb;       /* Color de acentos */
  /* Más variable disponibles... */
}
```

### 📱 Redes Sociales

En `index.html` y `contact.html`:
```html
<a href="https://github.com/tu-usuario" target="_blank">🐙</a>
<a href="https://linkedin.com/in/tu-perfil" target="_blank">💼</a>
<a href="https://twitter.com/tu-usuario" target="_blank">🐦</a>
```

---

## 🧪 PRUEBAS LOCALES

Antes de desplegar, prueba tu portafolio localmente:

### Con Python 3
```bash
cd portafolio-web
python -m http.server 8000
# Abre http://localhost:8000
```

### Con Node.js
```bash
cd portafolio-web
npx http-server
```

### Con VS Code Live Server
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

---

## 🆘 SOLUCIONAR PROBLEMAS

### ❌ El sitio no se ve en GitHub
1. Espera 5-10 minutos
2. Abre en navegador privado/incógnito
3. Borra caché: Ctrl+Shift+Del

### ❌ Error "not found" en GitHub Pages
1. Verifica que el repositorio se llama `usuario.github.io`
2. Verifica que está en "Public"
3. Comprueba Settings > Pages

### ❌ Los estilos no cargan
1. Asegúrate que los paths en HTML sean relativos (no absolutos)
2. Ejemplo: `href="css/main.css"` ✓ (no `/css/main.css`)

---

## 📚 ACTUALIZAR DESPUÉS

Para hacer cambios después del despliegue:

```bash
# Haz cambios en tus archivos

# Añade los cambios
git add .

# Crea un commit con descripción
git commit -m "Actualizo proyectos y habilidades"

# Sube a GitHub
git push origin main
```

GitHub actualizará automáticamente tu sitio en 1-2 minutos.

---

## ✨ ¡Listo!

Tu portafolio está en vivo. Ahora puedes:
- Compartir el link con empresas
- Incluirlo en tu CV
- Mostrar tus proyectos

¡Exito! 🚀

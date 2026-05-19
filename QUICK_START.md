# 🎯 GUÍA RÁPIDA: PASO A PASO

Este archivo te guía paso a paso para poner tu portafolio en vivo.

---

## ✅ PASO 1: Abre GitHub

1. Ve a **https://github.com**
2. Inicia sesión (o crea cuenta si no tienes)
3. Haz clic en el **+** (arriba a la derecha)
4. Selecciona **New repository**

---

## ✅ PASO 2: Configura el Repositorio

**Nombre del repositorio** (IMPORTANTE):
```
tu-usuario-github.github.io
```
Reemplaza `tu-usuario-github` con tu usuario de GitHub.

**Ejemplo:**
- Tu usuario es `juanperez` → Nombre: `juanperez.github.io`
- Tu usuario es `mariagarcia` → Nombre: `mariagarcia.github.io`

**Otros ajustes:**
- ✓ Selecciona **Public**
- ✗ NO inicialices con README, .gitignore o LICENSE
- Haz clic en **Create repository**

---

## ✅ PASO 3: Obtén tu URL

Después de crear, GitHub te mostrará:
```
https://github.com/tu-usuario-github/tu-usuario-github.github.io.git
```

Copia esta URL (la necesitarás en el siguiente paso).

---

## ✅ PASO 4: Abre Terminal en tu Computadora

### En macOS:
1. Abre Spotlight (Cmd + Espacio)
2. Escribe "Terminal"
3. Presiona Enter

### En Windows:
1. Presiona Windows + R
2. Escribe `cmd`
3. Presiona Enter

### En Linux:
Abre tu terminal favorita

---

## ✅ PASO 5: Navega a la Carpeta del Portafolio

En la terminal, escribe:
```bash
cd /private/tmp/portafolio-web
```

Presiona Enter.

---

## ✅ PASO 6: Conecta con GitHub

En la terminal, copia y pega (con tus créditos):

```bash
git remote add origin https://github.com/tu-usuario-github/tu-usuario-github.github.io.git
git branch -M main
git push -u origin main
```

Presiona Enter después de cada línea.

**Nota**: Reemplaza `tu-usuario-github` con tu usuario real.

---

## ✅ PASO 7: Ingresa Credenciales GitHub

GitHub puede pedirte que te identifiques. Tienes 2 opciones:

### Opción A: Personal Access Token (Recomendado)
1. Ve a **https://github.com/settings/tokens**
2. Haz clic en **Generate new token** → **Generate new token (classic)**
3. En **Note** escribe: "portafolio-push"
4. Selecciona todos los permisos (scopes)
5. Haz clic en **Generate token**
6. **COPIA el token** (es una larga cadena de años)
7. En la terminal, cuando pida contraseña, **pega el token**

### Opción B: SSH (Más avanzado)
Sigue esta guía: https://docs.github.com/es/authentication/connecting-to-github-with-ssh

---

## ✅ PASO 8: Espera a que Suba

La terminal mostrará:
```
Enumerating objects: XX, done.
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XX.XX KiB | XX.XX MiB/s, done.
...
To https://github.com/tu-usuario/tu-usuario.github.io.git
 * [new branch]      main -> main
...
```

✅ ¡Éxito! Tu código está en GitHub.

---

## ✅ PASO 9: Activa GitHub Pages

1. Ve a tu repositorio en GitHub:
   ```
   https://github.com/tu-usuario/tu-usuario.github.io
   ```

2. Haz clic en **Settings** (engranaje, arriba a la derecha)

3. En el menú de la izquierda, busca **Pages**

4. Verifica que esté configurado:
   - Branch: **main**
   - Folder: **/ (root)**

5. Haz clic en **Save** si es necesario

---

## ✅ PASO 10: ¡Accede a tu Portafolio!

Tu portafolio estará en vivo en:
```
https://tu-usuario-github.github.io
```

**Ejemplo:**
- Usuario: `juanperez` → URL: `https://juanperez.github.io`
- Usuario: `mariagarcia` → URL: `https://mariagarcia.github.io`

### Primera vez:
- Abre en una pestaña incógnita (Ctrl+Shift+N)
- Si no funciona, espera 5 minutos y recarga

---

## 🎨 PERSONALIZAR TU PORTAFOLIO

### 1. Cambiar tu nombre
Archivo: `index.html`
```html
<h1>Bienvenido a mi Portafolio</h1>  ← Cambia aquí
```

### 2. Cambiar tu información
En `index.html`, en la sección "Sobre mí":
```html
<p>Hola, soy... ← Tu información aquí</p>
```

### 3. Agregar tus habilidades
Archivo: `js/main.js`
```javascript
const skillsData = [
  {
    icon: '⚡',
    title: 'JavaScript',
    description: 'Tu descripción'
  },
  // Agregar más aquí
];
```

### 4. Agregar tus proyectos
Archivo: `js/main.js`
```javascript
const projectsData = [
  {
    icon: '💼',
    title: 'Mi Proyecto',
    description: 'Descripción',
    technologies: ['HTML', 'CSS'],
    links: [
      { label: 'Github', url: 'URL DE TU PROYECTO' },
      { label: 'Demo', url: 'URL DE LA DEMO' }
    ]
  },
  // Agregar más aquí
];
```

### 5. Cambiar colores
Archivo: `css/utils/variables.css`
```css
:root {
  --primary-color: #667eea;      ← Color principal (azul)
  --secondary-color: #764ba2;    ← Color secundario (morado)
  --accent-color: #f093fb;       ← Acento (rosa)
}
```

---

## 📝 VER CAMBIOS LOCALMENTE (ANTES DE SUBIR)

Para ver cómo se ve antes de subirlo a GitHub:

### Con Python:
```bash
cd /private/tmp/portafolio-web
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### Con VS Code:
1. Abre la carpeta en VS Code
2. Instala extensión "Live Server" (si no la tienes)
3. Haz clic derecho en `index.html`
4. Selecciona "Open with Live Server"

---

## 🔄 SUBIR CAMBIOS A GITHUB

Después de personalizar:

```bash
cd /private/tmp/portafolio-web

# Guarda los cambios
git add .
git commit -m "Personalizar portafolio"
git push origin main
```

**¡GitHub actualizará automáticamente tu sitio en 1-2 minutos!**

---

## 🆘 ¿PROBLEMAS?

### No veo mi sitio en GitHub Pages
- Espera 5-10 minutos (es normal que tarde)
- Abre en navegador privado/incógnito
- Presiona Ctrl+F5 para limpiar caché

### Los estilos no cargan
- Asegúrate que los paths sean relativos: `css/main.css` ✓
- NO uses rutas absolutas: `/css/main.css` ✗

### Error al hacer `git push`
- Verifica que copiaste bien la URL del repositorio
- Verifica tus credenciales de GitHub
- Intenta con token en lugar de contraseña

---

## 📚 ARCHIVOS IMPORTANTES

```
portafolio-web/
├── index.html              ← Página principal
├── projects.html           ← Página de proyectos
├── contact.html            ← Página de contacto
├── css/main.css            ← Importa todos los estilos
├── js/main.js              ← Lógica principal
├── README.md               ← Documentación
├── DEPLOY_GUIDE.md         ← Guía de despliegue
└── ARCHITECTURE.md         ← Explicación técnica
```

---

## ✨ ¡LISTO!

Acabas de crear y desplegar un portafolio profesional con:
- ✓ Arquitectura limpia
- ✓ Código organizado
- ✓ Responsivo y moderno
- ✓ Desplegado en GitHub Pages

¡Comparete con amigos y reclutadores! 🚀

---

**¿Preguntas?** Revisa los otros archivos de documentación:
- `README.md` - Información general
- `DEPLOY_GUIDE.md` - Despliegue detallado
- `ARCHITECTURE.md` - Explicación técnica

/**
 * Main.js
 * Archivo principal de JavaScript
 * Inicializa la aplicación y los componentes
 */

import Navigation from './components/Navigation.js';
import SkillCard from './components/SkillCard.js';
import ProjectCard from './components/ProjectCard.js';
import { log, $ } from './utils/helpers.js';

/**
 * Datos de habilidades
 */
const skillsData = [
  {
    icon: '🌐',
    title: 'HTML',
    description: 'Estructura y diseño web semántico'
  },
  {
    icon: '🎨',
    title: 'CSS',
    description: 'Diseño responsivo y estilos modernos'
  },
  {
    icon: '⚡',
    title: 'JavaScript',
    description: 'Interactividad y manipulación del DOM'
  },
  {
    icon: '�',
    title: 'Flutter',
    description: 'Diseños responsivos y apps móviles'
  },
  {
    icon: '🔷',
    title: 'Dart',
    description: 'Programación orientada a objetos'
  },
  {
    icon: '🔥',
    title: 'Firebase',
    description: 'Bases de datos móviles en tiempo real'
  },
  {
    icon: '🗄️',
    title: 'PostgreSQL',
    description: 'Diseño y consultas de bases de datos'
  },
  {
    icon: '📊',
    title: 'Git Hub',
    description: 'Control de versiones y repositorios'
  }
];

/**
 * Datos de proyectos
 */
const projectsData = [
  {
    icon: '�',
    title: 'Supermarket',
    description: 'Sistema de supermercado con gestión de clases y lógica de negocio',
    technologies: ['PHP', 'HTML', 'CSS'],
    links: [
      { label: 'Github', url: 'https://github.com/cesarJulioBe/supermarket' }
    ]
  },
  {
    icon: '🎬',
    title: 'Prueba Películas',
    description: 'Aplicación para explorar y gestionar información de películas',
    technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
    links: [
      { label: 'Github', url: 'https://github.com/cesarJulioBe/prueba_peliculas' }
    ]
  },
  {
    icon: '💰',
    title: 'Cripto Portafolio',
    description: 'Portafolio de criptomonedas con seguimiento de inversiones',
    technologies: ['JavaScript', 'API', 'Firebase'],
    links: [
      { label: 'Github', url: 'https://github.com/cesarJulioBe/Cripto_portafolio' }
    ]
  },
  {
    icon: '🚀',
    title: 'SubeCore',
    description: 'Núcleo del sistema SubeCore con funcionalidades avanzadas',
    technologies: ['Dart', 'Flutter', 'Firebase'],
    links: [
      { label: 'Github', url: 'https://github.com/cesarJulioBe/SubeCore' }
    ]
  }
];

/**
 * Renderiza las habilidades
 */
function renderSkills() {
  const skillsContainer = $('#skills-container');
  if (!skillsContainer) return;

  skillsData.forEach(skillData => {
    const skillCard = new SkillCard(skillData);
    skillsContainer.appendChild(skillCard.render());
  });

  log('Habilidades renderizadas', 'success');
}

/**
 * Renderiza los proyectos
 */
function renderProjects() {
  const projectsContainer = $('#projects-container');
  if (!projectsContainer) return;

  projectsData.forEach(projectData => {
    const projectCard = new ProjectCard(projectData);
    projectsContainer.appendChild(projectCard.render());
  });

  log('Proyectos renderizados', 'success');
}

/**
 * Inicializa la aplicación
 */
function initApp() {
  log('Inicializando aplicación...', 'info');

  // Inicializar navegación
  new Navigation();

  // Renderizar componentes
  renderSkills();
  renderProjects();

  log('Aplicación iniciada correctamente', 'success');
}

/**
 * Ejecutar cuando el DOM esté cargado
 */
document.addEventListener('DOMContentLoaded', initApp);

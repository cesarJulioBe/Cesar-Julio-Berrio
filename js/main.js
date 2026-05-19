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
    icon: '🔷',
    title: 'C#',
    description: 'Programación orientada a objetos'
  },
  {
    icon: '🗄️',
    title: 'PostgreSQL',
    description: 'Diseño y consultas de bases de datos'
  },
  {
    icon: '📊',
    title: 'Análisis',
    description: 'Análisis de sistemas y datos'
  }
];

/**
 * Datos de proyectos
 */
const projectsData = [
  {
    icon: '💼',
    title: 'Proyecto 1',
    description: 'Descripción del primer proyecto destacado',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Github', url: '#' },
      { label: 'Demo', url: '#' }
    ]
  },
  {
    icon: '🎯',
    title: 'Proyecto 2',
    description: 'Descripción del segundo proyecto',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    links: [
      { label: 'Github', url: '#' },
      { label: 'Demo', url: '#' }
    ]
  },
  {
    icon: '🚀',
    title: 'Proyecto 3',
    description: 'Descripción del tercer proyecto',
    technologies: ['C#', 'SQL', 'ASP.NET'],
    links: [
      { label: 'Github', url: '#' }
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

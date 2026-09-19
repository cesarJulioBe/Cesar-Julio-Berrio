/**
 * ProjectCard Component
 * Componente reutilizable para tarjetas de proyectos
 */
class ProjectCard {
  constructor(project) {
    this.project = project;
    this.element = null;
  }

  /**
   * Renderiza la tarjeta de proyecto
   * @returns {HTMLElement}
   */
  render() {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver proyecto ${this.project.title} en GitHub`);
    
    const techTags = this.project.technologies
      .map(tech => `<span class="tech-tag">${tech}</span>`)
      .join('');
    
    const links = this.project.links
      .map(link => `<a href="${link.url}" class="project-link" target="_blank">${link.label}</a>`)
      .join('');

    card.innerHTML = `
      <div class="project-image">${this.project.icon}</div>
      <div class="project-content">
        <h3>${this.project.title}</h3>
        <p>${this.project.description}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-links">${links}</div>
      </div>
    `;

    const projectUrl = this.project.links[0]?.url;
    if (projectUrl) {
      const openProject = (event) => {
        if (event.target.closest('a')) return;
        window.open(projectUrl, '_blank', 'noopener,noreferrer');
      };

      card.addEventListener('click', openProject);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.open(projectUrl, '_blank', 'noopener,noreferrer');
        }
      });
    }
    
    this.element = card;
    return card;
  }

  /**
   * Obtiene el elemento del componente
   * @returns {HTMLElement}
   */
  getElement() {
    return this.element;
  }
}

export default ProjectCard;

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

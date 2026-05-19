/**
 * Navigation Component
 * Maneja la navegación y scroll suave
 */
class Navigation {
  constructor() {
    this.navLinks = document.querySelectorAll('nav a');
    this.init();
  }

  /**
   * Inicializa los event listeners
   */
  init() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });
  }

  /**
   * Maneja el clic en los enlaces de navegación
   * @param {Event} e - Evento de clic
   */
  handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    
    if (targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

export default Navigation;

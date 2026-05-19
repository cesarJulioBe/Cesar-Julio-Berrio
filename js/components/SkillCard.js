/**
 * SkillCard Component
 * Componente reutilizable para trabajar con tarjetas de habilidades
 */
class SkillCard {
  constructor(skill) {
    this.skill = skill;
    this.element = null;
  }

  /**
   * Renderiza la tarjeta de habilidad
   * @returns {HTMLElement} Elemento de la tarjeta
   */
  render() {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="skill-icon">${this.skill.icon}</div>
      <h3>${this.skill.title}</h3>
      <p>${this.skill.description}</p>
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

export default SkillCard;

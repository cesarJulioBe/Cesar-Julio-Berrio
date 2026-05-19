/**
 * Utilidades y funciones helpers
 */

/**
 * Selecciona un elemento del DOM
 * @param {string} selector - Selector CSS
 * @returns {HTMLElement}
 */
export const $ = (selector) => document.querySelector(selector);

/**
 * Selecciona múltiples elementos del DOM
 * @param {string} selector - Selector CSS
 * @returns {NodeList}
 */
export const $$ = (selector) => document.querySelectorAll(selector);

/**
 * Crea un elemento del DOM
 * @param {string} tag - Etiqueta HTML
 * @param {object} attributes - Atributos
 * @param {string} content - Contenido HTML
 * @returns {HTMLElement}
 */
export const createElement = (tag, attributes = {}, content = '') => {
  const element = document.createElement(tag);
  Object.keys(attributes).forEach(key => {
    element.setAttribute(key, attributes[key]);
  });
  if (content) element.innerHTML = content;
  return element;
};

/**
 * Añade una clase a un elemento
 * @param {HTMLElement} element - Elemento
 * @param {string} className - Nombre de clase
 */
export const addClass = (element, className) => {
  element?.classList.add(className);
};

/**
 * Remueve una clase de un elemento
 * @param {HTMLElement} element - Elemento
 * @param {string} className - Nombre de clase
 */
export const removeClass = (element, className) => {
  element?.classList.remove(className);
};

/**
 * Toggle una clase en un elemento
 * @param {HTMLElement} element - Elemento
 * @param {string} className - Nombre de clase
 */
export const toggleClass = (element, className) => {
  element?.classList.toggle(className);
};

/**
 * Añade un event listener
 * @param {HTMLElement} element - Elemento
 * @param {string} event - Tipo de evento
 * @param {Function} handler - Función handler
 */
export const on = (element, event, handler) => {
  element?.addEventListener(event, handler);
};

/**
 * Log con estilo para desarrollo
 * @param {string} message - Mensaje
 * @param {string} type - Tipo (info, success, error, warning)
 */
export const log = (message, type = 'info') => {
  const colors = {
    info: '#667eea',
    success: '#48bb78',
    error: '#f56565',
    warning: '#ed8936'
  };
  console.log(`%c${message}`, `color: ${colors[type]}; font-weight: bold;`);
};

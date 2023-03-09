// VARIABLES
export const html: HTMLElement = document.documentElement,
  body: HTMLElement = document.body,
  head: HTMLElement = document.head;

// FUNCTIONS
/**
 * Modify the class of an HTML element
 * @param {HTMLElement} elem Selected element
 * @param {string} mod Modification - add, delete (del), toggle (tog)
 * @param {string} className Modifier class
 * @return
 */
export function modClass(elem: HTMLElement, mod: string, className: string) {
  const modTab: string[] = ["add", "del", "tog"];

  if (mod === modTab[0]) {
    elem.classList.add(className);
  } else if (mod === modTab[1]) {
    elem.classList.remove(className);
  } else if (mod === modTab[2]) {
    elem.classList.toggle(className);
  }
}

/**
 * Scroll to an element in the viewport
 * @param {HTMLElement} elem Selected element
 * @param {HTMLElement} frame Scroll frame (Closest positioned parent, default: window)
 * @param {number} margeX (Optional) Horizontal margin from left (pixels)
 * @param {number} margeY (Optional) Vertical margin from top (pixels)
 * @return
 */
export function goTo(
  elem: HTMLElement,
  frame: (Window & typeof globalThis) | HTMLElement = window,
  margeX: number = 0,
  margeY: number = 0
) {
  frame.scroll(elem.offsetLeft - margeX, elem.offsetTop - margeY);
}

/**
 * Shuffles string characters
 * @param {string} string String to shuffle
 * @returns
 */
export function shuffle(string: string) {
  let base: string = "";
  for (let i = 0; i < string.length; i++) {
    const random = Math.floor(Math.random() * string.length);
    base += string[random];
  }
  return base;
}

/**
 * Return a formated string (first letter in uppercase and spaces between words instead of hyphens)
 * @param string Initial string
 * @returns
 */
export function formatText(string: string) {
  let base = "";
  const uc = string[0].toUpperCase();
  const remainder = string.substring(1);
  base = `${uc}${remainder}`;

  return base.replaceAll("-", " ").trim();
}

/**
 * Return the first word of a phrase
 * @param string Initial string
 * @returns
 */
export function slug(string: string) {
  return string.match(/\w+/)?.[0];
}

/**
 * Return a random integer number
 * @param {number} max Maximum (exclude)
 * @param {number} min Minimum (include, default: 0)
 * @returns
 */
export function random(max: number, min: number = 0) {
  return Math.floor(Math.random() * max + min);
}

/**
 * Format number
 * @param number Number to format
 * @param format format size (default: 4)
 * @returns
 */
export function formatNumber(number: number, format: number = 4) {
  const num = number.toString();
  let formatedNumber = "";
  let x = 0;

  while (x < num.length) {
    const subString = num.substring(x, x + format);
    formatedNumber += `${subString} `;
    x += format;
  }
  return formatedNumber;
}

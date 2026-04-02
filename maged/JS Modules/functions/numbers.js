import { vat } from "../consts/numbers.js";

export const sum = (...arr) => arr.reduce((n1, n2) => parseFloat(n1) + parseFloat(n2));

export const div = (n1, n2) => pareseFloat(n2) === 0 ? 0 : n1 / n2;

export const pwr = (n1, n2) => n1 * n2;

export const calcVat = price => price + price * vat;

export const calcService = price => price + price * service;
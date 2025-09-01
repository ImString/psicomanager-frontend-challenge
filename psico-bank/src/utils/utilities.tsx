export const addZero = (num: number): string => {
	return num < 10 ? `0${num}` : `${num}`;
};

export const applyMask = (value: string, mask: string): string => {
	let i = 0;
	const digits = value.replace(/\D/g, '');

	let formatted = '';
	for (const char of mask) {
		if (char === '9') {
			if (digits[i]) {
				formatted += digits[i++];
			} else {
				break;
			}
		} else {
			if (digits[i]) {
				formatted += char;
			}
		}
	}

	return formatted;
};

export const validateCPF = (cpf: string): boolean => {
	cpf = cpf.replace(/\D/g, '');
	if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

	let sum = 0;
	for (let i = 0; i < 9; i++) sum += Number(cpf[i]) * (10 - i);
	let remainder = (sum * 10) % 11;
	if (remainder === 10) remainder = 0;
	if (remainder !== Number(cpf[9])) return false;

	sum = 0;
	for (let i = 0; i < 10; i++) sum += Number(cpf[i]) * (11 - i);
	remainder = (sum * 10) % 11;
	if (remainder === 10) remainder = 0;
	return remainder === Number(cpf[10]);
};

export const validateCNPJ = (cnpj: string): boolean => {
	cnpj = cnpj.replace(/\D/g, '');
	if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

	let length = cnpj.length - 2;
	let numbers = cnpj.substring(0, length);
	let digits = cnpj.substring(length);
	let sum = 0;
	let pos = length - 7;

	for (let i = length; i >= 1; i--) {
		sum += Number(numbers[length - i]) * pos--;
		if (pos < 2) pos = 9;
	}
	let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
	if (result !== Number(digits[0])) return false;

	length++;
	numbers = cnpj.substring(0, length);
	sum = 0;
	pos = length - 7;
	for (let i = length; i >= 1; i--) {
		sum += Number(numbers[length - i]) * pos--;
		if (pos < 2) pos = 9;
	}
	result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
	return result === Number(digits[1]);
};

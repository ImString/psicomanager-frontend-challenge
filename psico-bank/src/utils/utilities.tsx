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

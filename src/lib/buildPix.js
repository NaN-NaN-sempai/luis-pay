import {PixSync} from "$lib/buildPix/fazumpix.js";

export default function buildPixPayload(obj) {
	const { key, value, name, city, cep, message } = obj;
	
	return PixSync(
		key,
		name,
		city,
		value,
		message || "",
	);

	
	/* 
	const formatField = (id, value) => {
		const length = value.length.toString().padStart(2, '0');
		return `${id}${length}${value}`;
	};

	// Campos fixos básicos
	const payloadFormatIndicator = formatField('00', '01');
	const pointOfInitiationMethod = value ? formatField('01', '12') : formatField('01', '11'); // 12 se value fixo
	const merchantAccountInfo = formatField(
		'26',
		formatField('00', 'br.gov.bcb.pix') + formatField('01', key)
	);
	const merchantCategoryCode = formatField('52', '0000');
	const transactionCurrency = formatField('53', '986'); // BRL
	const transactionAmount = value ? formatField('54', value) : '';
	const countryCode = formatField('58', 'BR');
	const merchantName = formatField('59', name.slice(0, 25));
	const merchantCity = formatField('60', city.slice(0, 15));
	const additionalDataFieldTemplate = message
		? formatField('62', formatField('05', message.slice(0, 25)))
		: '';

	// Monta o payload sem CRC
	const payload =
		payloadFormatIndicator +
		pointOfInitiationMethod +
		merchantAccountInfo +
		merchantCategoryCode +
		transactionCurrency +
		transactionAmount +
		countryCode +
		merchantName +
		merchantCity +
		additionalDataFieldTemplate;

	// Calcula CRC16-CCITT (vou deixar um exemplo simples depois)
	const crc = calculateCRC16(payload + '6304');

	// Retorna o payload completo com CRC
	return payload + '63' + '04' + crc; */
}

// Função CRC16-CCITT (polinômio 0x1021)
function calculateCRC16(input) {
	let crc = 0xffff;
	for (let i = 0; i < input.length; i++) {
		crc ^= input.charCodeAt(i) << 8;
		for (let j = 0; j < 8; j++) {
			if ((crc & 0x8000) !== 0) {
				crc = (crc << 1) ^ 0x1021;
			} else {
				crc <<= 1;
			}
			crc &= 0xffff;
		}
	}
	return crc.toString(16).toUpperCase().padStart(4, '0');
}

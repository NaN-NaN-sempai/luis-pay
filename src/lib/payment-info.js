import gotoBankList from '$lib/gotoBankList';

const banks = {};

gotoBankList.forEach((bank) => {
    banks[bank.name] = bank;
});

const defaultOwnerCpf = {
	name: 'Luís Henrique de Almeida',
	icon: '/assets/imgs/icon.png',
	bg: 'radial-gradient(circle at 45% 70%, #d14f0e 55%, #e18b3b 55.1%)',
	type: 'cpf',
	code: '***.445.865-**'
};

const defaultOwnerCnpj = {
	...defaultOwnerCpf,
	type: 'cnpj',
	code: 'not yet implemented'
};

const defaultPixData = {
	key: '',
	name: 'LUIS HENRIQUE DE ALMEIDA',
	city: 'SR DO BONFIM',
	cep: "48970000",
};

const paymentData = {
	NU: {
		origin: 'br',
		type: 'pix',
		name: 'Nu Pagamentos S.A.',
		pixData: { ...defaultPixData, key: '07bf70ca-4516-4fda-9e9b-0b39c56dadbe' },
		icon: banks["NU Bank"].img,
		owner: defaultOwnerCpf
	},
	MP: {
		origin: 'br',
		type: 'pix',
		name: 'Mercado Pago',
		pixData: { ...defaultPixData, key: '7972b8ba-250a-4896-b068-da93227b4a25' },
		bg: banks['Mercado Pago'].bg,
		icon: banks['Mercado Pago'].img,
		owner: defaultOwnerCpf
	},
	BB: {
		origin: 'br',
		type: 'pix',
		name: 'Banco do Brasil',
		pixData: { ...defaultPixData, key: '37895364-1c0e-410f-9958-9ba45960a586' },
		icon: '/assets/payments/banks/BB.png',
		owner: defaultOwnerCpf
	},
	SF: {
		origin: 'br',
		type: 'pix',
		name: 'Banco Sofisa',
		pixData: { ...defaultPixData, key: '9b0ec5fd-2d80-40e0-8cdc-53cf48548e89' },
		icon: '/assets/payments/banks/SF.png',
		owner: defaultOwnerCpf
	}
};

export default paymentData;
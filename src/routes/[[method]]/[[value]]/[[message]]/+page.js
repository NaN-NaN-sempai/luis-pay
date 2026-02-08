import paymentData from '$lib/payment-info';

/** @type {import('../../../$types').PageLoad} */
export function load({ params, url, data }) {
	const slugs = {
		method: params.method,
		value: params.value,
		message: params.message && decodeURIComponent(params.message)
	};

	const search = Object.fromEntries(url.searchParams);

	if (slugs.method == "enc") {
		const dec = atob(slugs.value);
		const params = dec.split('/');

		slugs.method = params[0];
		slugs.value = params[1];
		slugs.message = params[2] && decodeURIComponent(params[2]);
	}

	return { slugs, search, paymentData, ...data };
}

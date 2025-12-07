import buildPixPayload from "$lib/buildPix";

export async function POST({ request }) {
    const obj = await request.json();
    
    const { key, value, name, city, message } = obj;
    
    const pixPayload = createStaticPix({
        merchantName: name,
        merchantCity: city,
        pixKey: key,
        transactionAmount: parseFloat(value),
        infoAdicional: message,
    }).toBRCode();

    const pixUrl = `https://api.qrserver.com/v1/create-qr-code/?format=svg&size=200x200&data=${pixPayload}`;

    const res = await fetch(pixUrl);
    const pixSvg = await res.text();

    return new Response(JSON.stringify({
        error: false,
        pixSvg,
        pixPayload
    }));
    
}
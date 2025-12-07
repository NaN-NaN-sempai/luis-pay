import buildPixPayload from "$lib/buildPix";

export async function POST({ request }) {
    const obj = await request.json();
    
    const pixPayload = buildPixPayload({ ...obj });

    const pixUrl = `https://api.qrserver.com/v1/create-qr-code/?format=svg&size=200x200&data=${pixPayload}`;

    const res = await fetch(pixUrl);
    const pixSvg = await res.text();

    return new Response(JSON.stringify({
        error: false,
        pixSvg,
        pixPayload
    }));
    
}
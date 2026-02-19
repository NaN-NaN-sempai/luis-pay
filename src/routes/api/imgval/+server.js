import { ImageResponse } from '@vercel/og';

export async function GET({ url }) {
    const value = url.searchParams.get('v');

    const displayValue = value ? `R$ ${value}` : 'a definir';


    return new ImageResponse(
        {
            type: 'div',
            props: {
                style: {
                    width: '1200px',
                    height: '630px',
                    backgroundImage:
                        'url(https://pay.luishenrique.space/assets/publicShare/banner.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '72px',
                    fontWeight: '700'
                },
                children: [
                    {
                        type: 'span',
                        props: {
                            children: `R$ ${displayValue}`
                        }
                    }
                ]
            }
        },
        { width: 1200, height: 630 }
    );
}
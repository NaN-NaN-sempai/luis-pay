export const share = (url, text = "") => {
    if(navigator.share) {
        navigator.share({
            title: `Pay | Luís Henrique Space`,
            text: `Plataforma de pagamento | Luís Henrique Space${text?"\n"+text:text}`,
            url: url + location.search,
        });

    } else {
        if(navigator.clipboard){
            navigator.clipboard.writeText(url + location.search);
        } else {
            alert("Seu navegador não suporta copiar a função de copiar.");
        }
    }
}
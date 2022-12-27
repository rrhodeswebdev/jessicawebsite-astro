export default function middelware(request: any) {
    const url = new URL(request.url);

    if (url.pathname === '/about/camilla') {
        url.pathname === '/about/';
    }

    return Response.redirect(url);
}
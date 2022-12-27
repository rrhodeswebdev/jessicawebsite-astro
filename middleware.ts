// import { rewrite } from '@vercel/edge';
//
// export default function middelware(request: Request) {
//     const url = new URL(request.url);
//
//     if (url.pathname.startsWith('/about/camilla')) {
//         return rewrite(new URL('/about', request.url));
//     }
// }

export const config = {
    matcher: '/about/camilla'
}

export default function middleware(request: Request) {
    return Response.redirect(new URL('/about', request.url))
}
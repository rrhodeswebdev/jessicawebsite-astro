import { rewrite } from '@vercel/edge';

export default function middelware(request: Request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/about/camilla')) {
        return rewrite(new URL('/about', request.url));
    }
}
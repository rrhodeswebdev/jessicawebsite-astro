export const config = {
    matcher: '/about/camilla'
}

export default function middleware(request: Request) {
    return Response.redirect(new URL('/about', request.url))
}
import { NextResponse, NextRequest, NextFetchEvent } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const { pathname } = req.nextUrl
    if (pathname == '/trade') {
        return NextResponse.redirect('/trade/USDT_cETB')
    }
    return NextResponse.next()
}
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
	basePath: isProd ? '/имя_вашего_репозитория' : '',
	assetPrefix: isProd ? '/имя_вашего_репозитория/' : '',
	trailingSlash: true,
}

export default nextConfig

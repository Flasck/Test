const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	basePath: isProd ? '/Test' : '',
	assetPrefix: isProd ? '/Test/' : '',
	trailingSlash: true,
}

module.exports = nextConfig

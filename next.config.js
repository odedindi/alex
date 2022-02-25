/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');

const nextConfig = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		dest: 'public',
	},
	publicRuntimeConfig: { gaTrackingId: 'GTM-KBL8783' },

	reactStrictMode: true,
	i18n,
});

module.exports = nextConfig;

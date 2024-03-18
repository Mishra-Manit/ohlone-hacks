/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/prospectus',
                destination: '/files/prospectus.pdf',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
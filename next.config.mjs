/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/prospectus',
                destination: '/files/prospectus.pdf',
                permanent: true,
            },
            {
                source: '/medical',
                destination: '/files/medical.pdf',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
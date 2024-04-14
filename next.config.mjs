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
            {
                source: '/presentation',
                destination: '/files/presentation.pdf',
                permanent: true,
            },
            // {
            //     source: '/key',
            //     destination: '/files/api-key.txt',
            //     permanent: true,
            // },
            {
                source: '/location',
                destination: 'https://www.ohlone.edu/campus-information',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
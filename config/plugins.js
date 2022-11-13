// Update here your cloudinary access credential here

module.exports = ({ env }) => ({
    upload: {
        provider: "cloudinary",
        providerOptions: {
            cloud_name: "...",
            api_key: "...",
            api_secret: "...",
        },
    },
});
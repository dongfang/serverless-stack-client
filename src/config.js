const config = {
    STRIPE_KEY: "pk_test_51I0vwaBV16IhzTz3FGdzbo62zR1Q0TX5yLe2CEe5TEd4rEkDXNSAbhzbcSxSJ4wOLJd8eIjFfDC1cPlQGtf6zdWi00Vel8sZc4",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-upload-dongfang",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://1ctxin26c5.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Glln9XY3K",
        APP_CLIENT_ID: "77si1qlhf9534uhh4btu54j1sh",
        IDENTITY_POOL_ID: "us-east-1:50a1859e-17a3-4af2-a52a-734eb3a6070f",
    },
};

export default config;

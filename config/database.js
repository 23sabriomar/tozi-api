// Update here your pgAdmin access credential here & project database name

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
        connector: 'bookshelf',
        settings: {
            client: 'postgres',
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'tozi'),
            username: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'omar1234'),
            ssl: env.bool('DATABASE_SSL', false),
        },
        options: {}
        },
    },
});

/* module.exports = ({ env }) => ({
        connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'tozi'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'postgres'),
            schema: env('DATABASE_SCHEMA', 'public'), // Not required
            ssl: env('DATABASE_SSL', false)
        },
        debug: false,
        },
    }); */
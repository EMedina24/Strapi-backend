const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-3-218-71-191.compute-1.amazonaws.com',
        port: '5432',
        database: 'd2pdv6ptunpavc',
        username: 'etzngtegkcpavm',
        password: '752731f363de6b26321b0c8c42cc3f1a0ca49677c1af678c8935b9c2cc86670e',
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  }

});
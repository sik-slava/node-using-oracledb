import db from 'oracledb';
// import {createPool, Pool, Connection} from 'oracledb';
import { using } from '../src/using';

const credentials: db.ConnectionAttributes = {
  user: 'node',
  password: 'oracledb',
  connectionString: 'database:1521',
};
const connect = () => db.getConnection(credentials);

describe('testing using() function', () => {
  let pool: db.Pool;

  beforeAll(async () => {
    pool = await db.createPool({
      ...credentials,
      poolAlias: 'testing',
      poolMax: 4,
      queueTimeout: 1000,
    });
  });

  afterAll(async () => {
    await pool.close();
    pool = null!;
  });

  it('should resolve connection', async () => {
    const query = (conn: db.Connection) => expect(Promise.resolve(conn)).resolves.toBeDefined();

    await expect(
      using(pool, query),
    ).resolves.not.toThrow();

    await expect(
      using(connect, query),
    ).resolves.not.toThrow();

    await expect(
      using(credentials, query),
    ).resolves.not.toThrow();
  });
});

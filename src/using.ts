/* eslint-disable no-unused-vars */
import db from 'oracledb';

export type Connection = db.Connection;
export type ConnectionAttributes = db.ConnectionAttributes;
export type Pool = db.Pool;
export type Connect = () => Promise<Connection>;
export type Query<T> = (connection: Connection) => Promise<T>;

export async function using<T>(connect: Connect, query: Query<T>): Promise<T>;
export async function using<T>(attributes: ConnectionAttributes, query: Query<T>): Promise<T>;
export async function using<T>(pool: Pool, query: Query<T>): Promise<T>;

export async function using<T>(
  param: Connect | Pool | ConnectionAttributes,
  query: Query<T>,
): Promise<T> {
  const resolve = async (): Promise<Connection> => {
    if ('connectionsInUse' in param) {
      return (param as Pool).getConnection();
    }

    if (!(param instanceof Function)) {
      return db.getConnection(param as ConnectionAttributes);
    }

    return param();
  };

  const release = (conn: Connection) => async () => {
    await conn.close()
      .catch(() => {});
  };

  const connection = await resolve();

  return query(connection)
    .finally(release(connection));
}

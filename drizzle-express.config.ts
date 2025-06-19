const drizzleExpressConfig = {
  version: "0.0.5",
  packageManager: "pnpm",
  latest: false,
  dbDialect: "sqlite",
  dbPackage: "better-sqlite3",
  pkStrategy: "cuid2",
  install: true,
  pluralizeEnabled: true,
};

export default drizzleExpressConfig;

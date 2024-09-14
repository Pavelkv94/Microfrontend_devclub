const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { name, dependencies: deps } = require("./package.json");

const addPlugins = (config) => {
  config.plugins.unshift(
    new ModuleFederationPlugin({
      name,
      shared: {
        ...deps,
      },
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {
        app: "first@http://localhost:3001/remoteEntry.js",
        second: "second@http://localhost:3002/remoteEntry.js",
        // app - Любой ключ,но его надо запомнить он нам еще понадобиться
        //firstMicro - Имя нашего модуля ,в нашем случае имя микрофнта в package.json,
        //http://localhost:3002/remoteEntry.js - адресс на котором развернут микрофронт
      },
    })
  );
  return config;
};

module.exports = [
  (config) => {
    config.output.publicPath = `//localhost:3000/`; // Адрес на котором развернут наще приложение, необходимо в случае , если мы захотим передать наш хост еще куда нибудь
    return addPlugins(config);
  },
];

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { name, dependencies: deps } = require("./package.json");

const addPlugins = (config) => {
  config.plugins.unshift(
    new ModuleFederationPlugin({
      name,
      shared: {
        //todo можем добавлять библиотеки определенных версий
        // "react": {
        //   reqiredVersion: deps.react,
        //   singletron: true
        // }
        ...deps,
      },
      filename: "remoteEntry.js",
      //todo те микрофронты котоыре мы отдаем если мы микрофронт
      exposes: {
        "./App": "./src/App",
        "./App2": "./src/App2"
      },
      //todo те микрофронты котоыре мы принимаем если мы хост
      remotes: {},
    })
  );
  return config;
};

module.exports = [
  (config) => {
    config.output.publicPath = `//localhost:3001/`; //todo Адрес на котором развернут наще приложение, необходимо в случае , если мы захотим передать наш хост еще куда нибудь
    return addPlugins(config);
  },
];

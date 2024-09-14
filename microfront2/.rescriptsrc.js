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
      exposes: {
        "./App": "./src/App"
      },  //todo те микрофронты котоыре мы отдаем если мы микрофронт
      remotes: {}, //todo те микрофронты котоыре мы принимаем если мы хост
    })
  );
  return config;
};

module.exports = [
  (config) => {
    config.output.publicPath = `//localhost:3002/`; //todo Адрес на котором развернут наще приложение, необходимо в случае , если мы захотим передать наш хост еще куда нибудь
    return addPlugins(config);
  },
];

module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};

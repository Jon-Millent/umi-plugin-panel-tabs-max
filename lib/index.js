"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _lodash() {
  const data = _interopRequireDefault(require("@umijs/deps/compiled/lodash"));

  _lodash = function _lodash() {
    return data;
  };

  return data;
}

function _umi() {
  const data = require("umi");

  _umi = function _umi() {
    return data;
  };

  return data;
}

function _fs() {
  const data = require("fs");

  _fs = function _fs() {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function _path() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const add404 = routes => routes.push({
  name: '页面未找到',
  component: '@@/plugin-panel-tabs/Result/404',
  wrappers: ['@@/plugin-panel-tabs/Wrappers/PanelTabsWrapper']
});

const generatorWrappers = useAuth => {
  if (useAuth) {
    return ['@@/plugin-panel-tabs/Wrappers/PanelTabsAndRouteAuthWrapper'];
  }

  return ['@@/plugin-panel-tabs/Wrappers/PanelTabsWrapper'];
};

const modifyRoutes = (routes, topRoute, use404, useAuth, intlMenuKey) => {
  routes.forEach(x => {
    if (x.hideInPanelTab !== true && x.name) {
      x.intlMenuKey = `${intlMenuKey}.${x.name}`;

      if (x.wrappers && x.wrappers.length > 0) {
        x.wrappers.push(...generatorWrappers(useAuth));
      } else {
        x.wrappers = generatorWrappers(useAuth);
      }
    }

    if (x.routes) {
      x.routes = modifyRoutes(x.routes, false, use404, useAuth, x.intlMenuKey || intlMenuKey);
    }
  });

  if (!topRoute) {
    if (use404) {
      add404(routes);
    }
  }

  return routes;
};

function _default(api) {
  var _api$userConfig8, _api$userConfig$panel;

  api.describe({
    key: 'panelTab',
    config: {
      default: {
        use404: true,
        useAuth: false,
        autoI18n: false,
        tabsBarBackgroundColor: '#FFFFFF',
        tabsTagColor: '#1890ff',
        tabsLimit: 10,
        tabsLimitWait: 500,
        tabsLimitWarnTitle: '提示',
        tabsLimitWarnContent: '您当前打开页面过多, 请关闭不使用的页面以减少卡顿!'
      },

      schema(joi) {
        return joi.object({
          use404: joi.boolean(),
          useAuth: joi.boolean(),
          autoI18n: joi.boolean(),
          tabsBarBackgroundColor: joi.string(),
          tabsTagColor: joi.string(),
          tabsLimit: joi.number(),
          tabsLimitWait: joi.number(),
          tabsLimitWarnTitle: joi.string(),
          tabsLimitWarnContent: joi.string()
        });
      },

      onChange: api.ConfigChangeType.regenerateTmpFiles
    },
    enableBy: api.EnableBy.register
  });
  api.modifyRoutes(routes => modifyRoutes(_lodash().default.clone(routes), true, api.config.panelTab.use404, api.config.panelTab.useAuth, 'menu'));
  api.addUmiExports(() => [{
    exportAll: true,
    source: '../plugin-panel-tabs'
  }]);
  api.onGenerateFiles( /*#__PURE__*/_asyncToGenerator(function* () {
    var _api$userConfig, _api$config$panelTab, _api$userConfig2, _api$config$panelTab2, _api$config$panelTab3, _api$config$panelTab4, _api$userConfig3, _api$config$panelTab5, _api$userConfig4, _api$config$panelTab6, _api$userConfig5, _api$config$panelTab7, _api$userConfig6, _api$config$panelTab8, _api$userConfig7, _api$config$panelTab9;

    api.writeTmpFile({
      path: 'plugin-panel-tabs/index.ts',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'index.ts.tpl'), 'utf-8'), {})
    });
    api.writeTmpFile({
      path: 'plugin-panel-tabs/PanelTabs/index.tsx',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'PanelTabs', 'index.tsx.tpl'), 'utf-8'), _objectSpread(_objectSpread({}, api.config.panelTab), {}, {
        useI18n: ((_api$userConfig = api.userConfig) === null || _api$userConfig === void 0 ? void 0 : _api$userConfig.locale) && ((_api$config$panelTab = api.config.panelTab) === null || _api$config$panelTab === void 0 ? void 0 : _api$config$panelTab.autoI18n)
      }), {}, ['{{{', '}}}'])
    });
    api.writeTmpFile({
      path: 'plugin-panel-tabs/PanelTabs/PanelTab.tsx',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'PanelTabs', 'PanelTab.tsx.tpl'), 'utf-8'), _objectSpread(_objectSpread({}, api.config.panelTab), {}, {
        useI18n: ((_api$userConfig2 = api.userConfig) === null || _api$userConfig2 === void 0 ? void 0 : _api$userConfig2.locale) && ((_api$config$panelTab2 = api.config.panelTab) === null || _api$config$panelTab2 === void 0 ? void 0 : _api$config$panelTab2.autoI18n),
        useAntPrimaryColor: // 如果没配置标签颜色，则使用主题色
        ((_api$config$panelTab3 = api.config.panelTab) === null || _api$config$panelTab3 === void 0 ? void 0 : (_api$config$panelTab4 = _api$config$panelTab3.tabsTagColor) === null || _api$config$panelTab4 === void 0 ? void 0 : _api$config$panelTab4.startsWith('#')) !== true
      }), {}, ['{{{', '}}}'])
    });
    api.writeTmpFile({
      path: 'plugin-panel-tabs/PanelTabs/PanelTabHook.ts',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'PanelTabs', 'PanelTabHook.ts.tpl'), 'utf-8'), {
        useI18n: ((_api$userConfig3 = api.userConfig) === null || _api$userConfig3 === void 0 ? void 0 : _api$userConfig3.locale) && ((_api$config$panelTab5 = api.config.panelTab) === null || _api$config$panelTab5 === void 0 ? void 0 : _api$config$panelTab5.autoI18n)
      }, {}, ['{{{', '}}}'])
    });
    api.writeTmpFile({
      path: 'plugin-panel-tabs/Wrappers/PanelTabsWrapper.tsx',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'Wrappers', 'PanelTabsWrapper.tsx.tpl'), 'utf-8'), _objectSpread(_objectSpread({}, api.config.panelTab), {}, {
        useI18n: ((_api$userConfig4 = api.userConfig) === null || _api$userConfig4 === void 0 ? void 0 : _api$userConfig4.locale) && ((_api$config$panelTab6 = api.config.panelTab) === null || _api$config$panelTab6 === void 0 ? void 0 : _api$config$panelTab6.autoI18n)
      }), {}, ['{{{', '}}}'])
    });
    api.writeTmpFile({
      path: 'plugin-panel-tabs/Wrappers/PanelTabsAndRouteAuthWrapper.tsx',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'Wrappers', 'PanelTabsAndRouteAuthWrapper.tsx.tpl'), 'utf-8'), {
        useI18n: ((_api$userConfig5 = api.userConfig) === null || _api$userConfig5 === void 0 ? void 0 : _api$userConfig5.locale) && ((_api$config$panelTab7 = api.config.panelTab) === null || _api$config$panelTab7 === void 0 ? void 0 : _api$config$panelTab7.autoI18n)
      }, {}, ['{{{', '}}}'])
    });
    api.writeTmpFile({
      path: 'plugin-panel-tabs/Wrappers/RouteAuthWrapper.tsx',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'Wrappers', 'RouteAuthWrapper.tsx.tpl'), 'utf-8'), {
        useI18n: ((_api$userConfig6 = api.userConfig) === null || _api$userConfig6 === void 0 ? void 0 : _api$userConfig6.locale) && ((_api$config$panelTab8 = api.config.panelTab) === null || _api$config$panelTab8 === void 0 ? void 0 : _api$config$panelTab8.autoI18n)
      }, {}, ['{{{', '}}}'])
    });
    api.writeTmpFile({
      path: 'plugin-panel-tabs/Result/404.tsx',
      content: _umi().utils.Mustache.render((0, _fs().readFileSync)((0, _path().join)(__dirname, 'Result', '404.tsx.tpl'), 'utf-8'), {
        useI18n: ((_api$userConfig7 = api.userConfig) === null || _api$userConfig7 === void 0 ? void 0 : _api$userConfig7.locale) && ((_api$config$panelTab9 = api.config.panelTab) === null || _api$config$panelTab9 === void 0 ? void 0 : _api$config$panelTab9.autoI18n)
      }, {}, ['{{{', '}}}'])
    });
  }));
  const registerPlugins = [];

  if (!api.hasPlugins(['umi-plugin-keep-alive'])) {
    registerPlugins.push(require.resolve('umi-plugin-keep-alive'));
  }

  if (!api.hasPlugins(['@umijs/plugin-antd'])) {
    registerPlugins.push(require.resolve('@umijs/plugin-antd'));
  }

  if (((_api$userConfig8 = api.userConfig) === null || _api$userConfig8 === void 0 ? void 0 : _api$userConfig8.locale) && ((_api$userConfig$panel = api.userConfig.panelTab) === null || _api$userConfig$panel === void 0 ? void 0 : _api$userConfig$panel.autoI18n) && !api.hasPlugins(['@umijs/plugin-locale'])) {
    registerPlugins.push(require.resolve('@umijs/plugin-locale'));
  }

  if (registerPlugins.length > 0) {
    api.registerPlugins(registerPlugins);
  }

  return {
    plugins: [require.resolve('umi-plugin-keep-alive'), require.resolve('@umijs/plugin-antd')]
  };
}
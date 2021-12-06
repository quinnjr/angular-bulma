/* eslint-disable @typescript-eslint/naming-convention */

import * as webpack from 'webpack';
import {
  CustomWebpackBrowserSchema,
  TargetOptions
} from '@angular-builders/custom-webpack';
import { default as TerserPlugin } from 'terser-webpack-plugin';

export default (
  config: webpack.Configuration,
  _options: CustomWebpackBrowserSchema,
  _targetOptions: TargetOptions
) => {
  if (config.mode === 'production') {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 2017,
            compress: {
              drop_console: true,
              drop_debugger: true,
              ecma: 2017,
              keep_classnames: true,
              keep_fnames: true,
              module: true,
              toplevel: true,
              keep_infinity: true
            },
            mangle: {
              keep_classnames: true,
              keep_fnames: true,
              module: true,
              toplevel: true
            },
            module: true,
            toplevel: true,
            ie8: false,
            keep_classnames: true,
            keep_fnames: true
          }
        })
      ]
    };
  }

  return config;
};

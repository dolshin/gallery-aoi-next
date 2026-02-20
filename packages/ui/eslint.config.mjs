import { config } from "@aoi/eslint-config/react";
import reactRefresh from 'eslint-plugin-react-refresh'

/** @type {import("eslint").Linter.Config} */
export default {
  ...config,
  ...reactRefresh.configs.recommended,
};

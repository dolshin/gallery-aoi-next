import StyleDictionary from 'style-dictionary';
import type { Config } from 'style-dictionary/types';
import { transforms } from './transform';
import { vanillaExtractFormatter } from './formats';

/**
 * Register custom transforms
 */
transforms.forEach((transform) => {
  StyleDictionary.registerTransform(transform);
});

/**
 * Collect custom transform names
 */
const customTransforms = transforms.map((t) => t.name);

/**
 * Register transform group for vanilla-extract
 */
StyleDictionary.registerTransformGroup({
  name: 'custom/vanilla-extract',
  transforms: ['attribute/cti', 'name/kebab', ...customTransforms, 'color/css'],
});

/**
 * Register custom format for vanilla-extract
 */
StyleDictionary.registerFormat({
  name: 'vanilla-extract/theme-object',
  format: vanillaExtractFormatter,
});

/**
 * Style Dictionary Configuration
 */
const StyleDictionaryConfig: Config = {
  source: [
    'src/tokens/primitive.json',
    'src/tokens/semantic.json',
    'src/tokens/component.json',
  ],
  log: {
    verbosity: 'verbose',
  },
  platforms: {
    ts: {
      transformGroup: 'custom/vanilla-extract',
      buildPath: 'src/generated/ts/',
      files: [
        {
          destination: 'defaultThemeValues.ts',
          format: 'vanilla-extract/theme-object',
          filter(token) {
            const filePath = token.filePath || '';
            // Only include tokens from semantic.json and component.json
            return (
              filePath.endsWith('semantic.json') ||
              filePath.endsWith('component.json')
            );
          },
          options: { outputReferences: false },
        },
      ],
    },
  },
};

const sd = await new StyleDictionary().extend(StyleDictionaryConfig);

await sd.buildAllPlatforms();

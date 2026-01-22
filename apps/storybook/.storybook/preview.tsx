import type { Decorator, Preview } from '@storybook/react-vite';
import '@dolshin/ui/theme';
import { defaultThemeClass } from '@dolshin/ui/theme';
import './storybook-base.css';

const withTheme: Decorator = (Story) => {
  return (
    <div className={defaultThemeClass} style={{ padding: '32px 22px' }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

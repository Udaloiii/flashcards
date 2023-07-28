import type { StorybookConfig } from '@storybook/react-vite'
import { themes } from '@storybook/theming/create'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#171717' },
    light: { ...themes.normal, appBg: '#fffdfd' },
  },
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config

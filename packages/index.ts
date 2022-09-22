import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';

const duUiPlugin: Plugin = {
    install(app: App) {
        ButtonPlugin.install?.(app);
    },
};

export default duUiPlugin;

export * from './Button';
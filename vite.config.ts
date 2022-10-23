import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss';
import { viteMockServe } from 'vite-plugin-mock';
import vueJsx from '@vitejs/plugin-vue-jsx';

const resolvePath = (path) => {
    return resolve(__dirname, path);
};
// https://vitejs.dev/config/
export default (): UserConfigExport => ({
    plugins: [vue(), WindiCSS(), viteMockServe(), vueJsx()],
    resolve: {
        alias: [{ find: '@', replacement: resolvePath('src') }],
    },
});

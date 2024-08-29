import { UserConfig, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()] as UserConfig["plugins"],
    test: {
        globals: true,
        environment: 'jsdom',
        root: '.',
        dir: './src/__test__/',
        reporters: ['junit'],

        setupFiles: "./setupTests.ts",
        // you might want to disable it, if you don't have tests that rely on CSS
        // since parsing CSS is slow
        css: false,
    },
});
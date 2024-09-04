import { UserConfig, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()] as UserConfig["plugins"],
    test: {
        globals: true,
        environment: 'jsdom',
        root: '.',
        dir: './lib/__test__/',
        reporters: ['default', 'junit'],
        // outputFile: {
        //     junit: './report.xml'
        // },
        setupFiles: "./lib/__test__/setup.js",
        alias: {
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/fileMock.js',
            '\\.(css|less|scss)$': '<rootDir>/config/styleMock.js',
        },
        // you might want to disable it, if you don't have tests that rely on CSS
        // since parsing CSS is slow
        css: false,
    },
});

import path from "path";
import { glob } from "glob";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { SitemapPlugin } from 'diy-pwa/node';

export default {
    plugins: [
        SitemapPlugin(),
        viteStaticCopy({
            targets: [
                {
                    src: 'README.md',
                    dest: ''
                }
            ]
        })
    ],

    build: {
        outDir: path.join(__dirname, "dist"),
        rollupOptions: {
            input: glob.sync(path.resolve(__dirname, ".", "**/*.html"),
                { ignore: ["dist/**", "src/**", "public/**", "functions/**"] }),

        },
    },
};

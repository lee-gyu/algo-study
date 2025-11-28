import { defineConfig } from "vitest/config";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
    catch: true,
    plugins: [tsconfigPath()],
    test: {
        globals: true,
        setupFiles: [
            "./tests/global.ts"
        ],
    },
});

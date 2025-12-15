import tsConfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.e2e-test.ts"],
    root: "./src",
    cache: false,
    setupFiles: ["./test/setup-e2e.ts"],
  },
  plugins: [tsConfigPaths()],
})

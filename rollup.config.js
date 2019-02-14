import typescript from 'rollup-plugin-typescript'
import { terser } from "rollup-plugin-terser"

/**
 * Rollup configuration
 * @author Bastien Nicoud
 */
export default {
  input: 'src/Game.ts',
  plugins: [
    // Typescript plugin to convert typescript to ES2016s
    typescript(),
    // Terser plugin to minify code
    terser({
      mangle: false
    })
  ],
  output: {
    file: 'dist/game.js',
    format: 'esm'
  }
};
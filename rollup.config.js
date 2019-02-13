import typescript from 'rollup-plugin-typescript';

/**
 * Rollup configuration
 * @author Bastien Nicoud
 */
export default {
  input: 'src/main.ts',
  plugins: [
    typescript()
  ],
  output: {
    file: 'dist/game.mjs',
    format: 'esm'
  }
};
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src.ts',
  output: {file: 'multi-application.js', format: 'cjs'},
  plugins: [resolve(), typescript()]
}
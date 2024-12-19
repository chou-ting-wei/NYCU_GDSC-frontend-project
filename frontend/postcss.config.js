import postcssPrefixwrap from 'postcss-prefixwrap';

export default {
  plugins: [
    postcssPrefixwrap('.bootstrap-scope')
  ]
};
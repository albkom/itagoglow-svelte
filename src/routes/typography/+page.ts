// If you're using a fallback (i.e. SPA mode) you don't need to prerender all
// pages by setting this here, but should prerender as many as possible to
// avoid large performance and SEO impacts
export const prerender = true;
// If trailingSlash is always, a route like /about will result in an about/index.html file, otherwise it will create about.html, mirroring static webserver conventions.
export const trailingSlash = 'always';

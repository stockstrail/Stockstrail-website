// Lightweight compatibility wrapper around react-helmet-async that works in
// both ESM and CJS environments without using top-level await. This avoids
// the SSR/serverless issues we previously had while still giving us a stable
// `Helmet` and `HelmetProvider` API in client and SSG builds.

import * as HelmetNS from "react-helmet-async";

// Some builds expose named exports, some expose only a default that itself
// has the Helmet/HelmetProvider properties.
const ns = HelmetNS;
const def = /** @type {any} */ (ns).default || ns;

// Prefer named exports, then properties on the default export, and finally
// fall back to the module/default itself as a no-op component/provider.
const Helmet =
  /** @type {any} */ (ns).Helmet ||
  /** @type {any} */ (def).Helmet ||
  def ||
  (() => null);

const HelmetProvider =
  /** @type {any} */ (ns).HelmetProvider ||
  /** @type {any} */ (def).HelmetProvider ||
  def ||
  ((props) => props.children);

export { Helmet, HelmetProvider };




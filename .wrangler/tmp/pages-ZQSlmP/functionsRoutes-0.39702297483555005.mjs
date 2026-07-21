import { onRequest as __api_save_js_onRequest } from "/home/adelia/Projects/personal/GitHub/glm-weebly-theme-for-myelektra-v5/cloudflare/functions/api/save.js"

export const routes = [
    {
      routePath: "/api/save",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_save_js_onRequest],
    },
  ]
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to serve the requested asset
    let response = await env.ASSETS.fetch(request);
    
    // If 404, serve index.html for SPA routing
    if (response.status === 404) {
      const indexRequest = new Request(`${url.origin}/index.html`, request);
      response = await env.ASSETS.fetch(indexRequest);
    }
    
    return response;
  }
};

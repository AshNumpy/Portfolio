export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to fetch from the origin (Cloudflare Pages serves assets automatically)
    try {
      const response = await fetch(request);
      
      // If 404, serve index.html for SPA routing
      if (response.status === 404) {
        const indexRequest = new Request(`${url.origin}/index.html`, {
          method: 'GET',
          headers: request.headers
        });
        return await fetch(indexRequest);
      }
      
      return response;
    } catch (e) {
      // Fallback: serve index.html
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/'
        }
      });
    }
  }
};

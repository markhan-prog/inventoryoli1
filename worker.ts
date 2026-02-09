import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
// @ts-ignore
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const assetManifest = JSON.parse(manifestJSON);

export default {
  // Fix: Replaced ExecutionContext with any to resolve compilation error in environments without @cloudflare/workers-types
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const url = new URL(request.url);

    // API Endpoint: Health Check
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "content-type": "application/json" }
      });
    }

    try {
      // Statik dosyaları (React app) servis et
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
        }
      );
    } catch (e) {
      // Dosya bulunamazsa (SPA routing için) index.html'i döndür
      try {
        let notFoundResponse = await getAssetFromKV(
          {
            request,
            waitUntil: ctx.waitUntil.bind(ctx),
          },
          {
            mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/index.html`, req),
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: assetManifest,
          }
        );
        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 200 });
      } catch (e) {
        return new Response("An unexpected error occurred", { status: 500 });
      }
    }
  },
};
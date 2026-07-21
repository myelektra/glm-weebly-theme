/**
 * Cloudflare Pages Function — Save content-config.json to GitHub
 *
 * POST /api/save
 * Body: { ... entire content-config.json ... }
 *
 * Requires env variable GITHUB_TOKEN (Personal Access Token with repo scope)
 * Set in Cloudflare Pages Dashboard → Settings → Environment variables
 */

const REPO_OWNER = 'myelektra';
const REPO_NAME = 'glm-weebly-theme';
const FILE_PATH = 'content-config.json';
const BRANCH = 'master';
const GITHUB_API = 'https://api.github.com';

export async function onRequest(context) {
  const { request, env } = context;

  // CORS headers for the frontend
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  // Only accept POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // Check for token
  const token = env.GITHUB_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: 'GITHUB_TOKEN not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const content = await request.json();

    // Validate it's parseable (it came from JSON.parse already)
    const contentStr = JSON.stringify(content, null, 2);

    // 1) Get current file SHA from GitHub
    const getRes = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}?ref=${BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'myelektra-content-editor',
        },
      }
    );

    let sha = null;
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    } else if (getRes.status !== 404) {
      const err = await getRes.text();
      return new Response(JSON.stringify({ error: 'Failed to get current file: ' + err }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 2) Commit new content
    const commitBody = {
      message: 'Update content-config.json via web editor',
      branch: BRANCH,
      content: btoa(unescape(encodeURIComponent(contentStr))),
    };
    if (sha) commitBody.sha = sha;

    const putRes = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
          'User-Agent': 'myelektra-content-editor',
        },
        body: JSON.stringify(commitBody),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.text();
      return new Response(JSON.stringify({ error: 'Commit failed: ' + err }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const result = await putRes.json();

    return new Response(JSON.stringify({
      success: true,
      commit: result.content?.sha || null,
      message: 'Content saved! GitHub Actions will build the theme automatically.',
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: 'Internal error: ' + e.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

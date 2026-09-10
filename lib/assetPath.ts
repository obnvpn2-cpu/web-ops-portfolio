const githubPagesBasePath = process.env.GITHUB_ACTIONS === "true" ? "/web-ops-portfolio" : "";

export function assetPath(path: string) {
  return `${githubPagesBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}

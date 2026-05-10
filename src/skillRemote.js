const OWNER = "Mugen-Builders";
const REPO = "cartesi-skills";
const BRANCH = "main";

/** GitHub UI link for editing / PRs (blob view). */
export function skillContributeUrl(skillId) {
  return `https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/${encodeURIComponent(skillId)}/SKILL.md`;
}

/** Raw markdown URL for fetch (browser CORS allowed for raw.githubusercontent.com). */
export function skillRawUrl(skillId) {
  return `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${encodeURIComponent(skillId)}/SKILL.md`;
}

/**
 * @param {string} skillId
 * @param {RequestInit} [init]
 * @returns {Promise<string>}
 */
export async function fetchSkillMarkdown(skillId, init) {
  const res = await fetch(skillRawUrl(skillId), init);
  if (!res.ok) {
    const hint =
      res.status === 404
        ? "Not found on GitHub (check branch or skill folder name)."
        : `HTTP ${res.status}`;
    throw new Error(hint);
  }
  return res.text();
}

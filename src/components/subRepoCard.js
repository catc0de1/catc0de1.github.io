export function subRepoCard(item) {
  const card = document.createElement("div");
  card.className = "sub-repo-card";

  card.innerHTML = `
    <h3>${item.repoName}</h3>
    <p>${item.repoDesc}</p>
    <a href="${item.repoUrl}" target="_blank" rel="noopener">
      View Repository →
    </a>
  `;

  return card;
}

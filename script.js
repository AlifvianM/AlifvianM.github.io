document.addEventListener('DOMContentLoaded', () => {
  const username = 'AlifvianM'; // Ganti dengan username GitHub-mu
  const container = document.getElementById('github-projects');
  const rep = ['CryptoAIAnalysis', 'JokeLLM', 'ConversaDoc']; // Nama repo yang ingin ditampilkan

  fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(repos => {
      // Filter repo hanya yang ada di array `rep`
      const filteredRepos = repos.filter(repo => rep.includes(repo.name));
      
      // Jika repo tidak ditemukan
      if (filteredRepos.length === 0) {
        container.innerHTML = '<p>No projects found. Check my <a href="https://github.com/${username}">GitHub</a></p>';
        return;
      }

      // Tampilkan repo yang difilter
      filteredRepos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <h3>
            <i class="fab fa-github"></i>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </h3>
          <p>${repo.description || 'No description available.'}</p>
          <div class="tech">${repo.language || 'Various'}</div>
          <div class="stars">⭐ ${repo.stargazers_count || 0}</div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Error loading GitHub projects:', err);
      container.innerHTML = '<p>Failed to load projects. <a href="https://github.com/${username}">Visit my GitHub</a></p>';
    });
});
(async function loadYouTubeVideos() {
  const API_KEY = "AIzaSyBvuEPxZxqWnC-OT-yVMn-lxdt12fCrYcs";
  const CHANNEL_ID = "UC9RfjDu1HvAVr5PpBnvu4cg";
  const CACHE_KEY = "ccf_yt_videos";
  const CACHE_DURATION = 60 * 60 * 1000; // 1 hora

  function getCache() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;
      const { timestamp, items } = JSON.parse(cached);
      if (Date.now() - timestamp > CACHE_DURATION) return null;
      return items;
    } catch {
      return null;
    }
  }

  function setCache(items) {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), items }),
      );
    } catch {}
  }

  function renderVideos(items) {
    const leftIframe = document.querySelector(".videos-left iframe");
    const leftTitle = document.querySelector(".videos-left h5");
    if (items[0]) {
      if (leftIframe)
        leftIframe.src = `https://www.youtube.com/embed/${items[0].videoId}`;
      if (leftTitle) leftTitle.textContent = items[0].title;
    }

    const rightItems = document.querySelectorAll(".video-right-item");
    [items[1], items[2]].forEach((item, i) => {
      if (!item || !rightItems[i]) return;
      const iframe = rightItems[i].querySelector("iframe");
      const h5 = rightItems[i].querySelector("h5");
      if (iframe) iframe.src = `https://www.youtube.com/embed/${item.videoId}`;
      if (h5) h5.textContent = item.title;
    });
  }

  const cached = getCache();
  if (cached) {
    renderVideos(cached);
    return;
  }

  const uploadsPlaylistId = CHANNEL_ID.replace(/^UC/, "UU");
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.items || !data.items.length) return;

    const items = data.items.map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
    }));

    setCache(items);
    renderVideos(items);
  } catch (e) {
    console.error("Erro ao carregar vídeos do YouTube:", e);
  }
})();

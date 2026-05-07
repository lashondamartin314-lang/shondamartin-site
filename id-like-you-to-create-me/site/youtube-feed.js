/* ============================================
   YouTube Latest Videos Feed
   Auto-pulls latest 3 videos from Shonda's channel
   ============================================ */

const YT_CHANNEL_ID = 'UCklV5v1v9UmPX6IhX_ln1EA';

// We use a public CORS-friendly RSS-to-JSON proxy.
// rss2json.com offers free tier suitable for low-volume sites.
const RSS_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL_ID}`;
const RSS_TO_JSON = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`;

// Fallback static video data — used if the RSS feed is unreachable
// Shows your most relevant recent videos so the site never looks empty
const FALLBACK_VIDEOS = [
  {
    title: 'The Next Credit Era: Preparing For 2026',
    videoId: 'CxCR8GdWGk0',
    pubDate: '2025-11-06T00:00:00Z'
  },
  {
    title: 'Credit Academy is back and BETTER!',
    videoId: 'G_D3emLqzUs',
    pubDate: '2025-02-22T00:00:00Z'
  },
  {
    title: 'Credit Academy | Credit Q+A',
    videoId: '9_SVwSbBvQU',
    pubDate: '2025-02-23T00:00:00Z'
  }
];

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  } catch (e) {
    return '';
  }
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s == null ? '' : s;
  return d.innerHTML;
}

function renderVideos(videos) {
  const grid = document.getElementById('videos-grid');
  if (!grid) return;

  if (!videos || videos.length === 0) {
    grid.innerHTML = '<div class="video-loading">No videos available right now.</div>';
    return;
  }

  // Take the first 3
  const top = videos.slice(0, 3);

  grid.innerHTML = top.map(v => {
    const thumb = `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`;
    const url = `https://www.youtube.com/watch?v=${v.videoId}`;
    return `
      <a href="${url}" target="_blank" rel="noopener" class="video-card" aria-label="${escapeHtml(v.title)}">
        <div class="video-thumb">
          <img src="${thumb}" alt="${escapeHtml(v.title)}" loading="lazy" />
          <div class="video-play-overlay">
            <div class="video-play-icon" aria-hidden="true"></div>
          </div>
        </div>
        <div class="video-info">
          <h3 class="video-title">${escapeHtml(v.title)}</h3>
          <div class="video-date">${escapeHtml(formatDate(v.pubDate))}</div>
        </div>
      </a>
    `;
  }).join('');
}

function loadVideos() {
  fetch(RSS_TO_JSON)
    .then(res => {
      if (!res.ok) throw new Error('RSS fetch failed: ' + res.status);
      return res.json();
    })
    .then(data => {
      if (data.status !== 'ok' || !data.items || data.items.length === 0) {
        throw new Error('RSS data empty');
      }
      // Each item has: title, link, pubDate, guid (contains video ID)
      const videos = data.items.map(item => {
        // Extract video ID from link: https://www.youtube.com/watch?v=VIDEO_ID
        const match = item.link.match(/[?&]v=([^&]+)/);
        return {
          title: item.title,
          videoId: match ? match[1] : '',
          pubDate: item.pubDate
        };
      }).filter(v => v.videoId);

      if (videos.length === 0) {
        renderVideos(FALLBACK_VIDEOS);
      } else {
        renderVideos(videos);
      }
    })
    .catch(err => {
      console.warn('Could not load YouTube feed, using fallback:', err);
      renderVideos(FALLBACK_VIDEOS);
    });
}

// Load on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadVideos);
} else {
  loadVideos();
}

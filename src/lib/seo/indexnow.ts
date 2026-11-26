/**
 * IndexNow Notification Client
 * Automatically informs Bing, Yandex, Seznam, and other participating search engines
 * of new, updated, or deleted URLs.
 */
export const INDEXNOW_KEY = 'c07a4a9840eb4243b74fa8764045f4df';
export const SITE_HOST = 'www.stockstrail.in';
export const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

export async function notifyIndexNow(urls: string | string[]): Promise<boolean> {
  const urlList = Array.isArray(urls) ? urls : [urls];
  if (urlList.length === 0) return true;

  try {
    const payload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList.map((u) => (u.startsWith('http') ? u : `https://${SITE_HOST}${u}`)),
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return res.status === 200 || res.status === 202;
  } catch (err) {
    console.warn('IndexNow notification notice (non-blocking):', err);
    return false;
  }
}

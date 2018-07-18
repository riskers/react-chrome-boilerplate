import { NAME } from '@/common/constants';

console.log(NAME); // eslint-disable-line no-console

function loadScript(url) {
  const s = document.createElement('script');
  s.src = chrome.runtime.getURL(url);

  (document.head || document.body || document.documentElement || document).appendChild(s);
}

loadScript('./lib/log.js');
loadScript('inject.bundle.js');

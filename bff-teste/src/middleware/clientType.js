/**
 * Detecta se a requisição veio de um cliente "mobile" ou "web".
 * O frontend pode enviar o header X-Client: mobile | web.
 * Alternativamente, usa User-Agent (ex.: Android, iPhone, Mobile).
 */
function clientTypeMiddleware(req, res, next) {
  const header = (req.get('X-Client') || '').toLowerCase();
  const ua = (req.get('User-Agent') || '').toLowerCase();

  if (header === 'mobile' || header === 'android' || header === 'ios') {
    req.clientType = 'mobile';
  } else if (header === 'web' || header === 'desktop') {
    req.clientType = 'web';
  } else if (/android|iphone|ipad|mobile|webos|blackberry/i.test(ua)) {
    req.clientType = 'mobile';
  } else {
    req.clientType = 'web'; // default
  }

  next();
}

export { clientTypeMiddleware };

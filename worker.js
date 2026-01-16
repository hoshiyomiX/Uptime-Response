addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const target = 'https://hoshiyomi.web.id'
  
  try {
    const response = await fetch(target, {timeout: 5000})
    return new Response(JSON.stringify({
      status: 'online',
      code: response.status,
      time: new Date().toISOString()
    }), {
      headers: {'content-type': 'application/json'}
    })
  } catch(e) {
    return new Response(JSON.stringify({
      status: 'offline',
      error: e.message
    }), {status: 503})
  }
}
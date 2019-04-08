addEventListener('fetch', event => {
 event.respondWith(handleRequest(event.request))
})

async function addition(a, b) {
  return a + b
}

async function handleRequest(request) {
  const added = await addition(1,3)
  return new Response(`The Sum is ${added}!`)
}

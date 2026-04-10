function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Treat any URI ending with ".<alnum>" as a file request
  var hasExtension = /\.[a-zA-Z0-9]+$/;

  // Never rewrite API/data/static file paths
  if (
    uri.startsWith("/_next/") ||
    uri.startsWith("/data/") ||
    hasExtension.test(uri)
  ) {
    return request;
  }

  // Next static export (without trailingSlash) emits route.html files.
  // Example: /quiz -> /quiz.html, /quiz/nomoi -> /quiz/nomoi.html
  if (uri === "/") {
    request.uri = "/index.html";
    return request;
  }

  if (uri.endsWith("/")) {
    uri = uri.slice(0, -1);
  }

  request.uri = uri + ".html";
  return request;
}

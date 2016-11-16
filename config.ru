use Rack::Static,
  :urls => ["/images", "/js", "/css", "/templates", "/resources", "/json", "/fonts"],
  :root => "src"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('src/index.html', File::RDONLY)
  ]
}

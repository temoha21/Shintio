exports.home = function (req, res) {
  res.render('pages/home', {
      title: 'Дорогие Ёбы'
    , message: 'Это прорыв!!!Shintio рождается'
  })
}
exports.about=function (req, res) {
  res.render('pages/about', {
      title: 'About page'
    , message: 'This is the "about" action of "pages" controller'
  })
}
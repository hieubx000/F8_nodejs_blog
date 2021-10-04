class SiteController {

    //[GET] /
    index(req, res) {
        res.render('news');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController;
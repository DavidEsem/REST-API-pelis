
const { Router } = require("express")
const router = Router();



router.get("/test", (req, res) => {
    const data = {
        "name": "David",
        "website": "pelis.com"
    }
    res.json(data);
});

module.exports = router;
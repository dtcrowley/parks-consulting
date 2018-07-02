import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/aboutus', (req, res) => {
    res.render('aboutus');
});

router.get('/services', (req, res) => {
    res.render('services');
});

router.get('/contactus', (req, res) => {
    res.render('contactus');
});

export default router;
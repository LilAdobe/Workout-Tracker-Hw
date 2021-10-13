const router = require('express').Router();
const path = require('path');

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/exercise.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/stats.html'));
});


//'Homework\Workout-Tracker-Hw\public\exercise.html'

module.exports = router;
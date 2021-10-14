const router = require('express').Router();
const Workout = require('../../models/workout')


// router.get('/api/workouts', (req, res) => {
//     Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         })
// });


router.post('/api/workouts', (req, res) => {
    console.log(req.body)
    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })

});


router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        })
});


router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                    { $sum: '$exercises.duration' },
                totalDistance:
                    { $sum: '$exercises.distance' }
            }
        }
    ]).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts/range', (req,res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                    { $sum: '$exercises.duration' },
                totalDistance:
                    { $sum: '$exercises.distance' }
            },
        }
    ])
    .then(dbWorkout => {
        const workoutdb = dbWorkout.slice(-7);
        console.log(workoutdb)
        res.json(workoutdb);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;

const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('./../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
    let query;

    if (req.query) {
        query = req.query;
    }

    const users = await User.find(query);

    res.status(200).json({
        message: 'success',
        items: users.length,
        data: {
            users,
        },
    });
});
exports.updateUser = catchAsync(async (req, res, next) => {

    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

    res.status(200).json({
        message: 'success',
        data: {
            user,
        },
    });
});
exports.getUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

    res.status(200).json({
        message: 'success',
        data: {
            user,
        },
    });
});
exports.deleteUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

    res.status(200).json({
        message: 'success',
    });
});
exports.getMe = catchAsync(async (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: {
            user: req.user,
        },
    });
});
exports.updateMe = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
    });

    if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

    res.status(200).json({
        message: 'success',
        data: {
            user,
        },
    });
});
exports.deleteMe = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.user.id);

    if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

    res.status(200).json({
        message: 'success',
    });
});
exports.getEventDetails = catchAsync(async (req, res, next) => {
    const users = await User.find().select({name: 1, _id: 0, id: 1, events: 1, email: 1, phone: 1});

    const events = [
        // {
        // 	id: 1,
        // 	name: "Nuts and Bolts",
        // 	img: "",
        // 	desc: "The robotics event will feature two exciting competitions: a line follower and a robot race. The line follower will challenge robots to follow a course without deviating from a black line, while the robot race will test the speed and agility of robots as they navigate an obstacle course.",
        // 	rounds: "2",
        // },
        {
            id: '2',
            name: 'Electroquip',
        },

        {
            id: '3',
            name: 'Illumination ',
        },
        {
            id: '4',
            name: 'Cyber Blame',
        },
        {
            id: '5',
            name: 'Argumentation',
        },
        // {
        // 	id: 6,
        // 	name: "Electrical Quiz ",
        // 	img: "",
        // 	desc: "It would be a quiz event which would be based on general electrical knowledge. Participants would be tested on their knowledge related to everything in the electrical world from history to concepts.",
        // 	rounds: "2",
        // },
        {
            id: '7',
            name: 'Adhayan',
        },
        // {
        // 	id: 8,
        // 	name: "Poster Presentation",
        // 	img: "",
        // 	desc: "It is a platform for students to showcase their work visually. Participants create an informative and visually appealing poster that summarizes their research, findings, and conclusions. Judges assess the posters based on creativity, content, and design, and winners are recognized for their contributions. These competitions provide an opportunity to network, learn, and enhance presentation skills.",
        // },
        // {
        // 	id: 9,
        // 	name: "ElectroSearch",
        // 	img: "",
        // 	desc: "Electrical treasure hunt is a fun-filled event where participants solve clues and puzzles to find hidden electrical components. The event challenges participants to use their knowledge of circuits, power systems, and electrical engineering to locate the hidden treasures. It's a great way to learn while having fun and promotes teamwork and problem-solving skills. ",
        // 	rounds: "2",
        // },
        {
            id: '10',
            name: 'Voltage Voyage',
            
        },
        {
            id: '11',
            name: 'Ace the Race',
            
        },
        {
            id: '12',
            name: 'Tech Trends',
            
        },
        {
            id: '13',
            name: 'Shatranj',
            
        },
        {
            id: '14',
            name: 'Fun Events',
            
        },
        {
            id: '15',
            name: 'Vidyut Gyan',
            
        },
        {
            id: '16',
            name: 'Alumni Convention',
            
        },
        {
            id: '17',
            name: 'Online Gaming',
            
            
        },
    ];

    const details = [];

    events.forEach(event => {
        const eventUsers = users.filter(user => user.events.includes(`${event.id}`));
        console.log(eventUsers);

        // eventUsers.forEach(u => {
        //     u.events = null
        //     delete u['events'];
        // });
        details.push({
            Name: event.name,
            id: event.id,
            "Total Registrations": eventUsers.length,
            participants: eventUsers.map(user => ({name: user.name, email: user.email, phone: user.phone}))
        });
    });

    console.log("DETAILS: ", details);

    res.status(200).json({
        message: "success",
        data: {
            details
        }
    });

})
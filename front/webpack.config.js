module.exports={
    mode:"development",
    entry:{ 
        index: './scripts/index.js',
        films: './scripts/formHandling.js'
},

    output: {
        path:__dirname + "/public",
        filename: "[name].js",

    },

};
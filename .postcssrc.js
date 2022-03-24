// 1.ESM(ecma script module)
// 2.CommonJS(노드)


// 1.import autoprefixer from 'autoprefixer'  대신

//2
//const autoprefixer = require('autoprefixer');


//1.export 대신
// export{
//     plugins:[
//         autoprefixer
//     ]
// }

//2
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
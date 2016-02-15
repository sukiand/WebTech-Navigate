var server_No = 1;
var config = {
    development:{
        server: {
            No:1,
            port:3000,
        },
        database:{
            url: 'mongodb://localhost/navigate',
        },
        disqus:{
            page_url:'PAGE_URL',
            page_identifier:'PAGE_IDENTIFIER',
        },
    },
    production:{
        server: {
            No:server_No,
            port:3000,
        },
        database:{
            url:'mongodb://localhost/navigate',
            //url:'mongodb://172.31.25.186/navigate',
        },
        disqus:{
            page_url:'http://www.webhotpot.com/about',
            page_identifier:'comment',
        },
    }
};

module.exports = config[process.env.NODE_ENV || 'development'];
// module.exports = config[process.env.NODE_ENV || 'production'];

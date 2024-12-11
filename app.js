const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const targetServer = 'https://vanoe325lpp.com'; 
//https://vanoe325lpp.com/play/tt9389998?d=pikachu.app&?sinku
//https://vanoe325lpp.com/play/stt9140554?d=pikachu.app&?sinku&noseasons=1&noepisodes=1
app.use(
    '', 
    createProxyMiddleware({
        target: targetServer,
        changeOrigin: true,  
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "keep-alive",
            "Host": "vanoe325lpp.com",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1",
            "X-Requested-With": "com.offshore.pikachu",
        },
        logLevel: 'debug', 
    })
);

const port = 3000;
app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});

module.exports = app;
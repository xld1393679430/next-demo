const express = require('express');
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        // server.get('/post/[title]', (req, res) => {
        //     const actualPage = "/book/[title]";
        //     const queryParams = { title: req.params.title }
        //     console.log(req.params, 'req.params-2')
        //     app.render(req, res, actualPage, queryParams)
        // })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(6776, err => {
            if (err) {
                console.log('> Ready on http://localhost:6776')
            }
        })
    })
    .catch(err => {
        process.exit(1)
    })

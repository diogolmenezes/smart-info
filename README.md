# Smart Info

This lib provides json information about node process, application and system.

## Install

`npm i smart-info --save`

## Use

To get complete information just send true to info method.

```javascript
var smartInfo = require('smart-info');
var info = smartInfo.info(true);
```

To get minimum information just send false to info method.

```javascript
var smartInfo = require('smart-info');
var info = smartInfo.info(false);
```

### Use inside application route

You can use smart-info inside your application route and protect restrict information using "completeInformation" parameter of  info method.

```javascript
app.get('/hc/:secret?', (req, res, next) => {

    const smartInfo = require('smart-info');

    // show complete info only if route secret is ok
    var completeInfo = req.params.secret === 'my-secret-for-the-route';
    var info = smartInfo.info(completeInfo);

    res.status(200).send(info);
});
```

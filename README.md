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
### Result example

```json
{
   "package":{
      "name":"api",
      "description":"My application",
      "version":"1.0.0",
      "homepage":"-",
      "author":"Diogo Leitão Menezes",
      "bugs":"-",
      "repository":"-",
      "license":"ISC"
   },
   "process":{
      "uptime":"6.036 seconds",
      "memory":{
         "rss":36,
         "heapUsed":9,
         "heapTotal":12,
         "external":0
      },
      "detail":{
         "version":"7.6.0",
         "user":"dmenezes",
         "lang":"pt_BR.UTF-8",
         "arch":"x64",
         "platform":"linux",
         "pid":24723,
         "cwd":"/home/dmenezes/projetos/my-api",
         "versions":{
            "http_parser":"2.7.0",
            "node":"7.6.0",
            "v8":"5.5.372.40",
            "uv":"1.11.0",
            "zlib":"1.2.11",
            "ares":"1.10.1-DEV",
            "modules":"51",
            "openssl":"1.0.2k",
            "icu":"58.2",
            "unicode":"9.0",
            "cldr":"30.0.3",
            "tz":"2016j"
         },
         "env":{
            "LESSOPEN":"| /usr/bin/lesspipe %s",
            "GNOME_KEYRING_PID":"",
            "USER":"dmenezes",
            "LANGUAGE":"pt_BR:pt:en"            
         },
         "config":{
            "variables":{
               "asan":0,
               "coverage":false,
               "debug_devtools":"node",
               "force_dynamic_crt":0,
               "gas_version":"2.23",
               "host_arch":"x64",
               "icu_data_file":"icudt58l.dat",
               "icu_data_in":"../../deps/icu-small/source/data/in/icudt58l.dat",
               "icu_endianness":"l",
               "icu_gyp_path":"tools/icu/icu-generic.gyp",
               "icu_locales":"en,root",
               "icu_path":"deps/icu-small",
               "icu_small":true,
               "icu_ver_major":"58",
               "node_byteorder":"little",
               "node_enable_d8":false,
               "node_enable_v8_vtunejit":false,
               "node_install_npm":true,
               "node_module_version":51,
               "node_no_browser_globals":false,
               "node_prefix":"/",
               "node_release_urlbase":"https://nodejs.org/download/release/",
               "node_shared":false,
               "node_shared_cares":false,
               "node_shared_http_parser":false,
               "node_shared_libuv":false,
               "node_shared_openssl":false,
               "node_shared_zlib":false,
               "node_tag":"",
               "node_use_bundled_v8":true,
               "node_use_dtrace":false,
               "node_use_etw":false,
               "node_use_lttng":false,
               "node_use_openssl":true,
               "node_use_perfctr":false,
               "node_use_v8_platform":true,
               "openssl_fips":"",
               "openssl_no_asm":0,
               "shlib_suffix":"so.51",
               "target_arch":"x64",
               "uv_parent_path":"/deps/uv/",
               "uv_use_dtrace":false,
               "v8_enable_gdbjit":0,
               "v8_enable_i18n_support":1,
               "v8_inspector":true,
               "v8_no_strict_aliasing":1,
               "v8_optimized_debug":0,
               "v8_random_seed":0,
               "v8_use_snapshot":true,
               "want_separate_host_toolset":0,
               "want_separate_host_toolset_mkpeephole":0
            }
         }
      }
   },
   "os":{
      "totalmem":8,
      "freemem":2,
      "core":4,
      "model":"Intel(R) Core(TM) i5-5200U CPU @ 2.20GHz",
      "speed":2432,
      "hostname":"agility"
   },
   "message":"Ok, API is running."
}
```
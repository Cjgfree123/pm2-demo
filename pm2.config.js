module.exports = {
    "apps": [{
        "name": "koaServer", //项目名称
        "cwd": './bin/', //应用的启动路径
        "script": "app.js", //应用的启动文件
        "exec_mode": "cluster", //可选值fork,cluster(开启集群模式实现负载均衡),默认fork
        "instances": "max", //集群模式下启动实例个数,当值为0或者max,启动进程数量为CPU线程数
        "args": "", //传递给脚本的参数
        "interpreter": "node", //指定的脚本解释器,默认node
        "interpreter_args": "", //传递给解释器的参数
        "watch": ['controllers', 'bin'], //监听变化，重启应用。默认true,监听整个项目,false不启用监听,也可指定监听文件夹
        "ignore_watch": ["node_modules", "logs", "static"], //忽略监听的文件夹,支持正则表达式
        "log_date_format": "YYYY-MM-DD HH:mm:ss", //设置日志的时间格式
        "log_type": "json", //输出的日志信息为json格式
        "error_file": "./logs/system/error/error.log", //设置标准错误流日志要写入到哪个文件,代码错误可在此文件查找
        "out_file": "./logs/system/output/console.log", //设置标准输出流日志要写入到哪个文件,如应用的console.log()
        "pid_file": "./logs/system/pid/pid.log", //设置pid要写入到哪个文件
        "min_uptime": 60, //应用运行少于时间被认为是异常启动
        "max_restarts": 10, //最大异常重启次数，即小于min_uptime运行时间重启次数
        "max_memory_restart": "100M", //最大内存限制数,超出自动重启
        "autorestart": false, //默认为true,发生异常的情况下自动重启
        "cron_restart": "", //crontab时间格式重启应用， 目前只支持cluster模式
        "force": false, //默认false， 如果true， 可以重复启动一个脚本,pm2不建议这么做
        "restart_delay": "100ms", //异常重启情况下,延时重启时间
        "env": {
            "NODE_ENV": "development",
            "REMOTE_ADDR": "http://www.example.com/"
        }, //配置开发环境变量
        "env_production": {
            "NODE_ENV": "production",
            "REMOTE_ADDR": "http://wtest.example.com/"
        }, //配置生产环境变量
    }]
}
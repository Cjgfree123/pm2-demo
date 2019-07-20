# pm2

## pm2介绍
    * 开启、停止、删除、重启、启动定制脚本、查看日志、刷新、监控（monitor）等
    * 配置环境声明, 指定: 不同环境连接不同数据库
        * 实现方式: 通过命令行 或 定制文件               
    * 指定进程数, 开启负载均衡
    * 定制: 开机启动, tab命令补全(实际感觉没啥卵用),传入node args
    * 可以在linux上运行

2. 官方教程: http://pm2.keymetrics.io/docs/usage/quick-start

3. 参考文档

* https://blog.csdn.net/ityqing/article/details/89204911

* https://juejin.im/post/5be406705188256dbb5176f9

## 环境配置声明

需求: 不同环境, 连接的数据库地址不同。

说明: 可以通过process.env.REMOTE_ADDR等来读取配置中声明的变量: "http://www.example.com/". 

一、 定制文件

1. 支持.yml , .json , .config.js 结尾的配置文件启动
2. 这里我们把配置文件命名为pm2.config.js，完整配置如下：（可根据项目实际需求进行删减）

```
"env": {
    "NODE_ENV": "development",
    "REMOTE_ADDR": "http://www.example.com/"
}, //配置开发环境变量
"env_production": {
    "NODE_ENV": "production",
    "REMOTE_ADDR": "http://wtest.example.com/"
}, //配置生产环境变量
```

二、通过命令行

```
pm2 start app.js --env dev
```


## 终端命令

#### 开启
```
pm2 start app.js // 启动app.js应用程序

pm2 start app.js  -i  4         # cluster mode 模式启动4个app.js的应用实例     # 4个应用程序会自动进行负载均衡

pm2 start app.js --name="api"   # 启动应用程序并命名为 "api"

pm2 start app.js --watch # 当文件变化时自动重启应用

```

#### 停止

```
pm2 stop all # 停止所有的应用程序

pm2 stop app_name|app_id # 停止指定应用程序 (可以先通过pm2 list获取应用的名字（--name指定的）或者进程id)

```

#### 删除

```
pm2 delete all # 关闭并删除所有应用

pm2 delete 0 # 删除指定应用 id 0

```

#### 重启

```
pm2 reset [app-name] # 重启某个应用

pm2 restart all # 重启所有应用

pm2 start app.js --max-memory-restart 20M # 内存使用超过上限自动重启

pm2 reload all # 重启 cluster mode下的所有应用

pm2 gracefulReload all # 在集群模式下重新加载所有应用程序 ？？？（集群模式，运行报错？）
 
```

#### 启动脚本

```
pm2 start script.sh # 启动 bash 脚本
```

#### 查看详情、日志

```
pm2 list # 列出 PM2 启动的所有的应用程序

pm2 monit # 显示每个应用程序的CPU和内存占用情况

pm2 show [app-name] # 显示应用程序的所有信息

pm2 logs # 显示所有应用程序的日志

pm logs --raw # Display all processes logs in streaming

pm2 logs [app-name] # 显示指定应用程序的日志 (control+c， 退出)

pm2 show 0 或者 # pm2 info 0  # 查看进程详细信息，0为PM2进程id

pm2 flush  # Empty all log file

pm2 reloadLogs  # Reload all logs
```

#### 其他

```
pm2 scale api 10 # 把名字叫api的应用扩展到10个实例

pm2 startup # 创建开机自启动命令

pm2 save # 保存当前应用列表 

pm2 resurrect # 重新加载保存的应用列表

pm2 --help 
```

#### 负载均衡

```
pm2 start app.js -i 3 # 开启三个进程

pm2 start app.js -i max # 根据机器CPU核数，开启对应数目的进程 
```

## 实战吐槽

pm2管理node进程，将不会在控制台打印出正常log。  感觉，项目一开始还是用nodemon,方便调试。后期，接入pm2 + node自动化监控平台。


module.export = {
    configureWebpack: {
        //配置路径别名
        alias: {
            'assets' : '@/assets',
            'common' : '@/common',
            'components' : '@/components',
            'network' : '@/network',
            'store' : '@/store',
            'views' : '@/views'
        }
    }
}
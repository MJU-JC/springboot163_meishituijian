const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",

                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"会员等级类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuiyuandengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"美食类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryMeishi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"美食管理",
                        "menuJump":"列表",
                        "tableName":"meishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"美食评价管理",
                        "menuJump":"列表",
                        "tableName":"meishiCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"美食收藏管理",
                        "menuJump":"列表",
                        "tableName":"meishiCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"美食订单管理",
                        "menuJump":"列表",
                        "tableName":"meishiOrder"
                    }
                ],
                "menu":"美食管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商家管理",
                        "menuJump":"列表",
                        "tableName":"shangjia"
                    }
                ],
                "menu":"商家管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"美食管理",
                        "menuJump":"列表",
                        "tableName":"meishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"美食评价管理",
                        "menuJump":"列表",
                        "tableName":"meishiCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"美食收藏管理",
                        "menuJump":"列表",
                        "tableName":"meishiCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"美食订单管理",
                        "menuJump":"列表",
                        "tableName":"meishiOrder"
                    }
                ],
                "menu":"美食管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"商家",
        "tableName":"shangjia"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"美食管理",
                        "menuJump":"列表",
                        "tableName":"meishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"美食评价管理",
                        "menuJump":"列表",
                        "tableName":"meishiCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"美食收藏管理",
                        "menuJump":"列表",
                        "tableName":"meishiCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"美食订单管理",
                        "menuJump":"列表",
                        "tableName":"meishiOrder"
                    }
                ],
                "menu":"美食管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;

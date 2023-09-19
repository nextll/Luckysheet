let authority = {//当前工作表的权限配置
    selectLockedCells:1, //选定锁定单元格
    selectunLockedCells:1, //选定解除锁定的单元格
    formatCells:0, //设置单元格格式
    formatColumns:0, //设置列格式
    formatRows:0, //设置行格式
    insertColumns:0, //插入列
    insertRows:0, //插入行
    insertHyperlinks:0, //插入超链接
    deleteColumns:0, //删除列
    deleteRows:0, //删除行
    sort:0, //排序
    filter:0, //使用自动筛选
    usePivotTablereports:0, //使用数据透视表和报表
    editObjects:0, //编辑对象
    editScenarios:0, //编辑方案
    sheet:1, //如果为1或true，则该工作表受到保护；如果为0或false，则该工作表不受保护。
    hintText:"禁止编辑非填报项", //弹窗提示的文字
    algorithmName:"None",//加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
    saltValue:null, //密码解密的盐参数，为一个自己定的随机数值

    allowRangeList:[{ //区域保护
            name:"area", //名称
            hintText:"", //提示文字
            algorithmName:"None",//加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
            saltValue:null, //密码解密的盐参数，为一个自己定的随机数值
            sqref:"$B$2:$C$13" //区域范围
        },
        { //区域保护
            name:"area1", //名称
            hintText:"", //提示文字
            algorithmName:"None",//加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
            saltValue:null, //密码解密的盐参数，为一个自己定的随机数值
            sqref:"$G$3:$J$12,$K$18,$A$20:$L$20" //区域范围
        }],
};

let verification = {
    "type": "number",
    "type2": 'gt',
    "value1": '0',
    "value2": null,
    "checked": false,
    "remote": false,
    "prohibitInput": true,
    "hintShow": true,
    "hintText": "必须输入正值小数"
};

let batchVerification = {
    "type": "checkbox",
    "type2": null,
    "value1": '1期,2期,3期,4期,5期',
    "value2": null,
    "checked": true,
    "remote": false,
    "prohibitInput": true,
    "hintShow": false,
    "hintText": "选择正确数值"
};

let techVerification = {
    "type": "dropdown",
    "type2": null,
    "value1": 'A2O,氧化沟,SBR,MBR,生物膜',
    "value2": null,
    "checked": false,
    "remote": false,
    "prohibitInput": true,
    "hintShow": false,
    "hintText": "选择正确数值"
};

let dateVerification = {
    "type": "date",
    "type2": 'naf',
    "value1": '2023-07-20',
    "value2": null,
    "checked": false,
    "remote": false,
    "prohibitInput": false,
    "hintShow": false,
    "hintText": ""
};

let designverification = {
    "type": "number",
    "type2": 'bw',
    "value1": '0.1',
    "value2": '200',
    "checked": false,
    "remote": false,
    "prohibitInput": true,
    "hintShow": true,
    "hintText": "必须输入0.1~100之间的数值"
};

let dataVerification = {
    "1_1": verification,
    "1_2": verification,
    "2_1": verification,
    "2_2": verification,
    "3_1": verification,
    "3_2": verification,
    "4_1": verification,
    "4_2": verification,
    "5_1": verification,
    "5_2": verification,
    "6_1": verification,
    "6_2": verification,
    "7_1": verification,
    "7_2": verification,
    "8_1": verification,
    "8_2": verification,
    "9_1": verification,
    "9_2": verification,
    "10_1": verification,
    "10_2": verification,
    "11_1": verification,
    "11_2": verification,
    "12_1": verification,
    "12_2": verification,
    "13_1": verification,
    "13_2": verification,
    "2_6": batchVerification,
    "3_6": batchVerification,
    "4_6": batchVerification,
    "5_6": batchVerification,
    "6_6": batchVerification,
    "7_6": batchVerification,
    "2_7": techVerification,
    "3_7": techVerification,
    "4_7": techVerification,
    "5_7": techVerification,
    "6_7": techVerification,
    "7_7": techVerification,
    "8_7": techVerification,
    "9_7": techVerification,
    "10_7": techVerification,
    "11_7": techVerification,
    "2_8": dateVerification,
    "3_8": dateVerification,
    "4_8": dateVerification,
    "5_8": dateVerification,
    "6_8": dateVerification,
    "7_8": dateVerification,
    "2_9": designverification,
    "3_9": designverification,
    "4_9": designverification,
    "5_9": designverification,
    "6_9": designverification,
    "7_9": designverification,
};
// "dataVerification": dataVerification,
// "authority": authority,
window.fillData = {
    "dataVerification": dataVerification,
    "name": "FillData",
    "showGridLines": 0,
    "config": {
        // "authority": authority,
        "borderInfo": [
            {
                "rangeType": "range",
                "borderType": "border-top",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            0,
                            13
                        ],
                        "column": [
                            0,
                            2
                        ]
                    }
                ]
            },
            {
                "rangeType": "range",
                "borderType": "border-top",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            0,
                            13
                        ],
                        "column": [
                            0,
                            2
                        ]
                    }
                ]
            },
            {
                "rangeType": "range",
                "borderType": "border-all",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            0,
                            13
                        ],
                        "column": [
                            0,
                            2
                        ]
                    }
                ]
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 0,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "range",
                "borderType": "border-all",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            1,
                            13
                        ],
                        "column": [
                            3,
                            3
                        ]
                    }
                ]
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 2,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 3,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 4,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 5,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 6,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 7,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 8,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 9,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 10,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 11,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 0,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "range",
                "borderType": "border-all",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            0,
                            0
                        ],
                        "column": [
                            0,
                            3
                        ]
                    }
                ]
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 2,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 3,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 4,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 5,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 6,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 7,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 8,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 9,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 10,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 11,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 3,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 13,
                    "col_index": 2,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 13,
                    "col_index": 1,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "range",
                "borderType": "border-all",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            1,
                            11
                        ],
                        "column": [
                            6,
                            9
                        ]
                    }
                ]
            },
            {
                "rangeType": "range",
                "borderType": "border-all",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            0,
                            0
                        ],
                        "column": [
                            6,
                            9
                        ]
                    }
                ]
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 6,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 7,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 8,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 9,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 13,
                    "col_index": 6,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 13,
                    "col_index": 7,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 13,
                    "col_index": 8,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 13,
                    "col_index": 9,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 6,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 7,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 8,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "cell",
                "value": {
                    "row_index": 12,
                    "col_index": 9,
                    "l": {
                        "color": "#000",
                        "style": "1"
                    },
                    "r": {
                        "color": "#000",
                        "style": "1"
                    },
                    "t": {
                        "color": "#000",
                        "style": "1"
                    },
                    "b": {
                        "color": "#000",
                        "style": "1"
                    }
                }
            },
            {
                "rangeType": "range",
                "borderType": "border-all",
                "style": "1",
                "color": "#000",
                "range": [
                    {
                        "row": [
                            17,
                            19
                        ],
                        "column": [
                            6,
                            9
                        ]
                    }
                ]
            }
        ],
        "rowlen": {
            "0": 32,
            "1": 39
        },
        "customHeight": {
            "0": 1,
            "1": 1
        },
        "columnlen": {
            "3": 108,
            "6": 117,
            "7": 87,
            "8": 101,
            "9": 87
        },
        "merge": {
            "0_6": {
                "r": 0,
                "c": 6,
                "rs": 1,
                "cs": 4
            },
            "17_6": {
                "r": 17,
                "c": 6,
                "rs": 1,
                "cs": 4
            }
        },
        "colhidden": {},
        "rowhidden": {},
        "customWidth": {
            "3": 1,
            "6": 1,
            "8": 1,
            "9": 1
        }
    },
    "index": "0",
    "zoomRatio": 1,
    "order": "0",
    "column": 18,
    "row": 36,
    "status": 1,
    "ch_width": 1143,
    "rh_height": 553,
    "luckysheet_select_save": [
        {
            "left": 331,
            "width": 73,
            "top": 73,
            "height": 19,
            "left_move": 331,
            "width_move": 73,
            "top_move": 73,
            "height_move": 19,
            "row": [
                2,
                2
            ],
            "column": [
                4,
                4
            ],
            "row_focus": 2,
            "column_focus": 4
        }
    ],
    "calcChain": [
        {
            "r": 1,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C2/B2*1"
            ]
        },
        {
            "r": 2,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C3/B3*1"
            ]
        },
        {
            "r": 3,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C4/B4*1"
            ]
        },
        {
            "r": 4,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C5/B5*1"
            ]
        },
        {
            "r": 5,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C6/B6*1"
            ]
        },
        {
            "r": 6,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C7/B7*1"
            ]
        },
        {
            "r": 7,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C8/B8*1"
            ]
        },
        {
            "r": 8,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C9/B9*1"
            ]
        },
        {
            "r": 9,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C10/B10*1"
            ]
        },
        {
            "r": 10,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C11/B11*1"
            ]
        },
        {
            "r": 11,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C12/B12*1"
            ]
        },
        {
            "r": 12,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=C13/B13*1"
            ]
        },
        {
            "r": 13,
            "c": 3,
            "index": "0",
            "func": [
                true,
                "#DIV/0!",
                "=SUM(D2:D13)"
            ]
        },
        {
            "r": 13,
            "c": 2,
            "index": "0",
            "func": [
                true,
                0,
                "=SUM(C2:C13)"
            ]
        },
        {
            "r": 13,
            "c": 1,
            "index": "0",
            "func": [
                true,
                0,
                "=SUM(B2:B13)"
            ]
        },
        {
            "r": 13,
            "c": 6,
            "index": "0",
            "func": [
                true,
                0,
                "=COUNTA(G3:G12)"
            ]
        },
        {
            "r": 13,
            "c": 7,
            "index": "0",
            "func": [
                true,
                0,
                "=IF(COUNTA(UNIQUE(H3:H12))-1<0,0, COUNTA(UNIQUE(H3:H12))-1)"
            ]
        },
        {
            "r": 13,
            "c": 8,
            "index": "0",
            "func": [
                true,
                0,
                "=MAX(I3:I12)"
            ]
        },
        {
            "r": 13,
            "c": 9,
            "index": "0",
            "func": [
                true,
                0,
                "=sum(J3:J12)"
            ]
        }
    ],
    "scrollLeft": 0,
    "scrollTop": 0,
    "jfgird_select_save": [],
    "data": [
        [
            {
                "m": "月份",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "月份",
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "v": "水量\r\n(km³)",
                            "bl": 1
                        }
                    ]
                },
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "v": "电量\r\n(kwh)",
                            "bl": 1
                        }
                    ]
                },
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "v": "电单耗\r\n(kwh/km³)",
                            "bl": 1
                        }
                    ]
                },
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            },
            null,
            null,
            {
                "m": "水厂基本信息",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "水厂基本信息",
                "bl": 1,
                "ht": "0",
                "mc": {
                    "r": 0,
                    "c": 6,
                    "rs": 1,
                    "cs": 4
                },
                "bg": "#cfe2f3"
            },
            {
                "mc": {
                    "r": 0,
                    "c": 6
                },
                "bg": "#cfe2f3"
            },
            {
                "mc": {
                    "r": 0,
                    "c": 6
                },
                "bg": "#cfe2f3"
            },
            {
                "mc": {
                    "r": 0,
                    "c": 6
                },
                "bg": "#cfe2f3"
            },
            null,
            null
        ],
        [
            {
                "m": "1月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "1月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                },
                "mark": {
                    "width": 8,
                    "height": 8,
                    "color": "#d1e2f3"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C2/B2*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "m": "期数",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "期数",
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            },
            {
                "v": "工艺类型",
                "ht": "0",
                "bl": 1,
                "m": "工艺类型",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "bg": "#cfe2f3"
            },
            {
                "v": "竣工日期",
                "ht": "0",
                "bl": 1,
                "m": "竣工日期",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "bg": "#cfe2f3"
            },
            {
                "ht": "0",
                "bl": 1,
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "ff": "\"times new roman\"",
                            "fc": "#000000",
                            "fs": 10,
                            "cl": 0,
                            "un": 0,
                            "bl": 1,
                            "it": 0,
                            "v": "设计产能\r\n（万m³/天）",
                            "bg": "#cfe2f3"
                        }
                    ]
                },
                "bg": "#cfe2f3"
            },
            null,
            null
        ],
        [
            {
                "m": "2月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "2月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C3/B3*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "n"
                },
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "3月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "3月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C4/B4*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "4月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "4月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C5/B5*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "5月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "5月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C6/B6*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "6月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "6月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C7/B7*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "7月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "7月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C8/B8*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "8月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "8月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C9/B9*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "9月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "9月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C10/B10*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "10月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "10月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C11/B11*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "11月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "11月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C12/B12*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0"
            },
            {
                "ht": "0"
            },
            {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            },
            {
                "ht": "0"
            },
            null,
            null
        ],
        [
            {
                "m": "12月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "12月",
                "ht": "2"
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            {
                "v": "",
                "f": "=C13/B13*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            },
            null,
            null,
            {
                "ht": "0",
                "bg": "#fff2cc",
                "m": "总期数",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "总期数",
                "bl": 1
            },
            {
                "ht": "0",
                "bg": "#fff2cc",
                "m": "工艺种类数",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "工艺种类数",
                "bl": 1
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "bg": "#fff2cc",
                "m": "最后施工竣工日",
                "v": "最后施工竣工日",
                "bl": 1
            },
            {
                "ht": "0",
                "bg": "#fff2cc",
                "m": "总产能",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "总产能",
                "bl": 1
            },
            null,
            null
        ],
        [
            {
                "m": "总计",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "总计",
                "bl": 1,
                "ht": "0",
                "bg": "#fff2cc"
            },
            {
                "bg": "#fff2cc",
                "f": "=SUM(B2:B13)",
                "m": "0.00",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                },
                "v": 0
            },
            {
                "bg": "#fff2cc",
                "f": "=SUM(C2:C13)",
                "m": "0.00",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                },
                "v": 0
            },
            {
                "bg": "#fff2cc",
                "f": "=SUM(D2:D13)",
                "m": "",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": ""
            },
            null,
            null,
            {
                "ht": "0",
                "bg": "#ffffff",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "f": "=COUNTA(G3:G12)",
                "v": 0,
                "m": "0"
            },
            {
                "ht": "0",
                "bg": "#ffffff",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "f": "=IF(COUNTA(UNIQUE(H3:H12))-1<0,0, COUNTA(UNIQUE(H3:H12))-1)",
                "v": 0,
                "m": "0"
            },
            {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "bg": "#ffffff",
                "f": "=MAX(I3:I12)",
                "v": 0,
                "m": "0"
            },
            {
                "ht": "0",
                "bg": "#ffffff",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "f": "=sum(J3:J12)",
                "v": 0,
                "m": "0"
            },
            null,
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            {
                "m": "污泥外运信息",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "污泥外运信息",
                "mc": {
                    "r": 17,
                    "c": 6,
                    "rs": 1,
                    "cs": 4
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            {
                "mc": {
                    "r": 17,
                    "c": 6
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            {
                "mc": {
                    "r": 17,
                    "c": 6
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            {
                "mc": {
                    "r": 17,
                    "c": 6
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            {
                "v": "添加",
                "bg": "#cccccc",
                "m": "添加",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "isButton": true
            },
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            {
                "m": "外运日期",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "外运日期",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            {
                "m": "负责人",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "负责人",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            {
                "m": "外运公司",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "外运公司",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            {
                "m": "备注",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "备注",
                "bl": 1,
                "bg": "#9fc5e8"
            },
            null,
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            {
                "ct": {
                    "fa": "yyyy-MM-dd hh:mm",
                    "t": "d"
                },
                "v": 45128.5,
                "m": "2023-07-21 12:00"
            },
            null,
            null,
            null,
            {
                "bg": "#cccccc",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "m": "删除",
                "v": "删除",
                "isButton": true
            },
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]
    ],
    "visibledatarow": [
        33,
        73,
        93,
        113,
        133,
        153,
        173,
        193,
        213,
        233,
        253,
        273,
        293,
        313,
        333,
        353,
        373,
        393,
        413,
        433,
        453,
        473
    ],
    "visibledatacolumn": [
        74,
        148,
        222,
        331,
        405,
        479,
        597,
        685,
        787,
        875,
        949,
        1023
    ],
    "luckysheet_selection_range": [],
    "images": {},
    "filter_select": null,
    "filter": null,
    "luckysheet_conditionformat_save": [],
    "luckysheet_alternateformat_save": [],
    "hyperlink": {},
    "celldata": [
        {
            "r": 0,
            "c": 0,
            "v": {
                "m": "月份",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "月份",
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 0,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "v": "水量\r\n(km³)",
                            "bl": 1
                        }
                    ]
                },
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 0,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "v": "电量\r\n(kwh)",
                            "bl": 1
                        }
                    ]
                },
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 0,
            "c": 3,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "v": "电单耗\r\n(kwh/km³)",
                            "bl": 1
                        }
                    ]
                },
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 0,
            "c": 6,
            "v": {
                "m": "水厂基本信息",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "水厂基本信息",
                "bl": 1,
                "ht": "0",
                "mc": {
                    "r": 0,
                    "c": 6,
                    "rs": 1,
                    "cs": 4
                },
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 0,
            "c": 7,
            "v": {
                "mc": {
                    "r": 0,
                    "c": 6
                },
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 0,
            "c": 8,
            "v": {
                "mc": {
                    "r": 0,
                    "c": 6
                },
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 0,
            "c": 9,
            "v": {
                "mc": {
                    "r": 0,
                    "c": 6
                },
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 1,
            "c": 0,
            "v": {
                "m": "1月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "1月",
                "ht": "2"
            }
        },
        {
            "r": 1,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                },
                "mark": {
                    "width": 8,
                    "height": 8,
                    "color": "#d1e2f3"
                }
            }
        },
        {
            "r": 1,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 1,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C2/B2*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 1,
            "c": 6,
            "v": {
                "m": "期数",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "期数",
                "ht": "0",
                "bl": 1,
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 1,
            "c": 7,
            "v": {
                "v": "工艺类型",
                "ht": "0",
                "bl": 1,
                "m": "工艺类型",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 1,
            "c": 8,
            "v": {
                "v": "竣工日期",
                "ht": "0",
                "bl": 1,
                "m": "竣工日期",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 1,
            "c": 9,
            "v": {
                "ht": "0",
                "bl": 1,
                "ct": {
                    "fa": "General",
                    "t": "inlineStr",
                    "s": [
                        {
                            "ff": "\"times new roman\"",
                            "fc": "#000000",
                            "fs": 10,
                            "cl": 0,
                            "un": 0,
                            "bl": 1,
                            "it": 0,
                            "v": "设计产能\r\n（万m³/天）",
                            "bg": "#cfe2f3"
                        }
                    ]
                },
                "bg": "#cfe2f3"
            }
        },
        {
            "r": 2,
            "c": 0,
            "v": {
                "m": "2月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "2月",
                "ht": "2"
            }
        },
        {
            "r": 2,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 2,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 2,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C3/B3*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 2,
            "c": 6,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            }
        },
        {
            "r": 2,
            "c": 7,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            }
        },
        {
            "r": 2,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 2,
            "c": 9,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "n"
                },
                "ht": "0"
            }
        },
        {
            "r": 3,
            "c": 0,
            "v": {
                "m": "3月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "3月",
                "ht": "2"
            }
        },
        {
            "r": 3,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 3,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 3,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C4/B4*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 3,
            "c": 6,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            }
        },
        {
            "r": 3,
            "c": 7,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0"
            }
        },
        {
            "r": 3,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 3,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 4,
            "c": 0,
            "v": {
                "m": "4月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "4月",
                "ht": "2"
            }
        },
        {
            "r": 4,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 4,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 4,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C5/B5*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 4,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 4,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 4,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 4,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 5,
            "c": 0,
            "v": {
                "m": "5月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "5月",
                "ht": "2"
            }
        },
        {
            "r": 5,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 5,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 5,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C6/B6*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 5,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 5,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 5,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 5,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 6,
            "c": 0,
            "v": {
                "m": "6月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "6月",
                "ht": "2"
            }
        },
        {
            "r": 6,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 6,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 6,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C7/B7*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 6,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 6,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 6,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 6,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 7,
            "c": 0,
            "v": {
                "m": "7月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "7月",
                "ht": "2"
            }
        },
        {
            "r": 7,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 7,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 7,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C8/B8*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 7,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 7,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 7,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 7,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 8,
            "c": 0,
            "v": {
                "m": "8月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "8月",
                "ht": "2"
            }
        },
        {
            "r": 8,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 8,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 8,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C9/B9*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 8,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 8,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 8,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 8,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 9,
            "c": 0,
            "v": {
                "m": "9月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "9月",
                "ht": "2"
            }
        },
        {
            "r": 9,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 9,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 9,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C10/B10*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 9,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 9,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 9,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 9,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 10,
            "c": 0,
            "v": {
                "m": "10月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "10月",
                "ht": "2"
            }
        },
        {
            "r": 10,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 10,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 10,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C11/B11*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 10,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 10,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 10,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 10,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 11,
            "c": 0,
            "v": {
                "m": "11月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "11月",
                "ht": "2"
            }
        },
        {
            "r": 11,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 11,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 11,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C12/B12*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 11,
            "c": 6,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 11,
            "c": 7,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 11,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd",
                    "t": "d"
                },
                "ht": "0"
            }
        },
        {
            "r": 11,
            "c": 9,
            "v": {
                "ht": "0"
            }
        },
        {
            "r": 12,
            "c": 0,
            "v": {
                "m": "12月",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "12月",
                "ht": "2"
            }
        },
        {
            "r": 12,
            "c": 1,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 12,
            "c": 2,
            "v": {
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 12,
            "c": 3,
            "v": {
                "v": "",
                "f": "=C13/B13*1",
                "m": "",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                }
            }
        },
        {
            "r": 12,
            "c": 6,
            "v": {
                "ht": "0",
                "bg": "#fff2cc",
                "m": "总期数",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "总期数",
                "bl": 1
            }
        },
        {
            "r": 12,
            "c": 7,
            "v": {
                "ht": "0",
                "bg": "#fff2cc",
                "m": "工艺种类数",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "工艺种类数",
                "bl": 1
            }
        },
        {
            "r": 12,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "bg": "#fff2cc",
                "m": "最后施工竣工日",
                "v": "最后施工竣工日",
                "bl": 1
            }
        },
        {
            "r": 12,
            "c": 9,
            "v": {
                "ht": "0",
                "bg": "#fff2cc",
                "m": "总产能",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "总产能",
                "bl": 1
            }
        },
        {
            "r": 13,
            "c": 0,
            "v": {
                "m": "总计",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "总计",
                "bl": 1,
                "ht": "0",
                "bg": "#fff2cc"
            }
        },
        {
            "r": 13,
            "c": 1,
            "v": {
                "bg": "#fff2cc",
                "f": "=SUM(B2:B13)",
                "m": "0.00",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                },
                "v": 0
            }
        },
        {
            "r": 13,
            "c": 2,
            "v": {
                "bg": "#fff2cc",
                "f": "=SUM(C2:C13)",
                "m": "0.00",
                "ct": {
                    "fa": "##0.00",
                    "t": "n"
                },
                "v": 0
            }
        },
        {
            "r": 13,
            "c": 3,
            "v": {
                "bg": "#fff2cc",
                "f": "=SUM(D2:D13)",
                "m": "",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": ""
            }
        },
        {
            "r": 13,
            "c": 6,
            "v": {
                "ht": "0",
                "bg": "#ffffff",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "f": "=COUNTA(G3:G12)",
                "v": 0,
                "m": "0"
            }
        },
        {
            "r": 13,
            "c": 7,
            "v": {
                "ht": "0",
                "bg": "#ffffff",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "f": "=IF(COUNTA(UNIQUE(H3:H12))-1<0,0, COUNTA(UNIQUE(H3:H12))-1)",
                "v": 0,
                "m": "0"
            }
        },
        {
            "r": 13,
            "c": 8,
            "v": {
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "bg": "#ffffff",
                "f": "=MAX(I3:I12)",
                "v": 0,
                "m": "0"
            }
        },
        {
            "r": 13,
            "c": 9,
            "v": {
                "ht": "0",
                "bg": "#ffffff",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "f": "=sum(J3:J12)",
                "v": 0,
                "m": "0"
            }
        },
        {
            "r": 17,
            "c": 6,
            "v": {
                "m": "污泥外运信息",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "污泥外运信息",
                "mc": {
                    "r": 17,
                    "c": 6,
                    "rs": 1,
                    "cs": 4
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 17,
            "c": 7,
            "v": {
                "mc": {
                    "r": 17,
                    "c": 6
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 17,
            "c": 8,
            "v": {
                "mc": {
                    "r": 17,
                    "c": 6
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 17,
            "c": 9,
            "v": {
                "mc": {
                    "r": 17,
                    "c": 6
                },
                "ht": "0",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 17,
            "c": 10,
            "v": {
                "v": "添加",
                "bg": "#cccccc",
                "m": "添加",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "isButton": true
            }
        },
        {
            "r": 18,
            "c": 6,
            "v": {
                "m": "外运日期",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "外运日期",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 18,
            "c": 7,
            "v": {
                "m": "负责人",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "负责人",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 18,
            "c": 8,
            "v": {
                "m": "外运公司",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "外运公司",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 18,
            "c": 9,
            "v": {
                "m": "备注",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "v": "备注",
                "bl": 1,
                "bg": "#9fc5e8"
            }
        },
        {
            "r": 19,
            "c": 6,
            "v": {
                "ct": {
                    "fa": "yyyy-MM-dd hh:mm",
                    "t": "d"
                },
                "v": 45128.5,
                "m": "2023-07-21 12:00"
            }
        },
        {
            "r": 19,
            "c": 10,
            "v": {
                "bg": "#cccccc",
                "ct": {
                    "fa": "General",
                    "t": "g"
                },
                "ht": "0",
                "m": "删除",
                "v": "删除",
                "isButton": true
            }
        }
    ],
    "dynamicArray": []
}


// export default sheetCell

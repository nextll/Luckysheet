import lodash from "lodash";
import {luckysheet as LuckyExcel} from "../../core";
import store from './Store';


// 工作簿配置模板_level1
const docConfigTemplate = {
    lang: 'zh', hook: {}, cellRightClickConfig: {
        customs: [{
            title: '设置为固定填报区域', onClick: function (clickEvent, event, params) {
                setupNormalFillArea(clickEvent, event, params);
            }
        }, {
            title: '显示固定填报区域', onClick: function (clickEvent, event, params) {
                let fillAreaAxis = store.getItem('fillArea');
                if (fillAreaAxis) {
                    LuckyExcel.setRangeShow(JSON.parse(fillAreaAxis));
                }
            }
        },{
            type: 'separator'
        }, {
            title: '设置行填报区域', onClick: function (clickEvent, event, params) {
                setupRowFillArea();
            }
        },{
            title: '显示行填报区域', onClick: function (clickEvent, event, params) {
                let fillAreaAxis = store.getItem(store.key.rowFillDesignArea);
                if (fillAreaAxis) {
                    LuckyExcel.setRangeShow(JSON.parse(fillAreaAxis));
                }
            }
        },{
            type: 'separator'
        },{
            title: '打印配置', onClick: function (clickEvent, event, params) {
                console.log(LuckyExcel.getAllSheets())
            }
        },{
            title: '切换到填报模式', onClick: function (clickEvent, event, params) {
                store.setItem("model", "fillModel");//将变量存到localStorage里
                location.reload();
            }
        },{
            title: '保存', onClick: function (clickEvent, event, params) {
                console.log(LuckyExcel.getAllSheets())
                let saveInfo = JSON.stringify(LuckyExcel.getAllSheets());  //将JSON转为字符串存到变量里
                store.setItem("sheetSave", saveInfo);//将变量存到localStorage里
            }
        },]
    }, data: [],
};

/**
 * 设置固定式填报单元格区域
 */
const setupNormalFillArea = function () {
    console.log(LuckyExcel.getRangeAxis());

    // 1. 获取选中区域的sheet坐标
    let selRangeAxis = LuckyExcel.getRangeAxis();

    // 2. 填报区域保存至store
    store.setItem('fillArea',  JSON.stringify(selRangeAxis));

};

/**
 * 设置行式填报单元格区域
 */
const setupRowFillArea = function () {
    console.log(LuckyExcel.getRangeAxis());

    // 1. 获取选中区域的sheet坐标
    let selRangeAxis = LuckyExcel.getRangeAxis();

    // 2. 行填报区域保存至store
    store.setItem(store.key.rowFillDesignArea,  JSON.stringify(selRangeAxis));
};


// 工作表配置模板_level2
const sheetConfigTemplate = {//当前工作表的权限配置

    showGridLines: 1, //设计模式下，默认显示框线

};

/**
 * 生成填报模式下，工作簿的配置信息。   方法会将默认配置同参数给定的配置合并。
 * @param saveSheetConfigList    给定要覆盖默认配置的配置json
 * @returns {{hook: {}, data: {}, lang: string, cellRightClickConfig: {customs: [{onClick: onClick, title: string}]}}}
 */
const newDocConfigInstance = function (saveSheetConfigList) {

    // 1. 从模板生成新的doc配置
    let docConfigInstance = lodash.cloneDeep(docConfigTemplate);

    // 2. 合并sheet配置（即data配置）
    if (saveSheetConfigList) {
        for (let saveSheetConfig of saveSheetConfigList){
            docConfigInstance.data.push(newSheetConfigInstance(saveSheetConfig));
        }
    }

    // 3. ret
    return docConfigInstance;
}

// 从sheetConfigTemplate配置变量，深度复制出新的配置实例
const newSheetConfigInstance = function (saveSheetConfig) {

    // 1. 从模板生成新的sheet配置
    let sheetConfigInstance = lodash.cloneDeep(sheetConfigTemplate);

    // 2. 合并保存的sheet信息
    if (saveSheetConfig){
        sheetConfigInstance = lodash.merge(sheetConfigInstance, saveSheetConfig)
    }

    // 3. ret
    return sheetConfigInstance;
}

/**
 * 初始化设计模式工作簿
 * @returns
 */
const init = function (){

    // 1. 获取sheet的设计信息（LuckyConfig）
    let saveSheetConfig = [];
    if (store.getItem("sheetSave")){
        saveSheetConfig = JSON.parse(store.getItem("sheetSave"));
    } else {
        saveSheetConfig.push(window.fillData);
    }

    // 2. 生成Doc配置（LuckyConfig）
    let docConfig =  {docConfigJson : newDocConfigInstance(saveSheetConfig)};

    //3. ret
    return docConfig;

}


export default {
    init,
    newDocConfigInstance,
    newSheetConfigInstance,
};




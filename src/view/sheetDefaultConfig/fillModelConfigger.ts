import lodash from "lodash";
import {luckysheet, luckysheet as LuckyExcel} from "../../core";
import store from './Store';
import {RowFillArea} from './RowFillArea';
import Array from "~/global/array";

export interface FillConfig {
    rowFillMenuShow: any,
    rowFillMenuHidden: any,
    getRowFillMenuWithAxis: any,
    getRowFillMenuIsShow: any,
}

export class FillModelConfigger {

    // -------------------------------->> static >>--------------------------------

    // 工作簿配置模板_level1
    private static docConfigTemplate: object = {
        lang: 'zh',
        hook: {},
        cellRightClickConfig: {
            copy: true, // 复制
            copyAs: true, // 复制为
            paste: true, // 粘贴
            insertRow: false, // 插入行
            insertColumn: false, // 插入列
            deleteRow: false, // 删除选中行
            deleteColumn: false, // 删除选中列
            deleteCell: false, // 删除单元格
            hideRow: false, // 隐藏选中行和显示选中行
            hideColumn: false, // 隐藏选中列和显示选中列
            rowHeight: false, // 行高
            columnWidth: false, // 列宽
            clear: false, // 清除内容
            matrix: false, // 矩阵操作选区
            sort: false, // 排序选区
            filter: false, // 筛选选区
            chart: false, // 图表生成
            image: false, // 插入图片
            link: false, // 插入链接
            data: false, // 数据验证
            cellFormat: false, // 设置单元格格式
            customs: [{
                title: '切换到设计模式',
                onClick: function (clickEvent: any, event: any, params: any) {
                    localStorage.setItem("model", "designModel");//将变量存到localStorage里
                    location.reload();
                }
            }, {
                title: '打印配置',
                onClick: function (clickEvent: any, event: any, params: any) {
                    console.log(LuckyExcel.getAllSheets())
                }
            },]
        },
        data: [],
        _fillConfig: {}
    };

    // 工作表配置模板_level2
    private static sheetConfigTemplate = {//当前工作表的权限配置

        showGridLines: 0, //填报模式下，默认不显示框线
        config: {
            authority: {
                selectLockedCells: 1, //选定锁定单元格
                selectunLockedCells: 1, //选定解除锁定的单元格
                formatCells: 0, //设置单元格格式
                formatColumns: 0, //设置列格式
                formatRows: 0, //设置行格式
                insertColumns: 0, //插入列
                insertRows: 1, //插入行
                insertHyperlinks: 0, //插入超链接
                deleteColumns: 0, //删除列
                deleteRows: 0, //删除行
                sort: 0, //排序
                filter: 0, //使用自动筛选
                usePivotTablereports: 0, //使用数据透视表和报表
                editObjects: 0, //编辑对象
                editScenarios: 0, //编辑方案
                sheet: 1, //如果为1或true，则该工作表受到保护；如果为0或false，则该工作表不受保护。
                hintText: "禁止编辑非填报项", //弹窗提示的文字
                algorithmName: "None",//加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
                saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
                allowRangeList: [],
            },
        },
    };
    // --------------------------------<< static <<--------------------------------

    /**
     * 生成的luckysheet 工作簿配置Json
     * @private
     */
    private _docConfigJson: object;
    get docConfigJson() {
        return this._docConfigJson;
    }

    /**
     * 行填报区域
     * @private
     */
    private rowFillAreaList: Array<RowFillArea> = [];

    private currentRowFillArea: RowFillArea;


    /**
     * 生成填报模式下，工作簿的配置信息。   方法会将默认配置同参数给定的配置合并。
     * @param saveSheetConfigList    给定要覆盖默认配置的配置json
     * @param fillConfig             填报配置，包括一些回调方法等
     * @returns {{hook: {}, data: {}, lang: string, cellRightClickConfig: {customs: [{onClick: onClick, title: string}]}}}
     */
    newDocConfigInstance(saveSheetConfigList: Array<object>, fillConfig: FillConfig) {

        // 1. 从模板生成新的doc配置
        let docConfigInstance = lodash.cloneDeep(FillModelConfigger.docConfigTemplate);

        // 2. 合并sheet配置（即data配置）
        if (saveSheetConfigList) {
            for (let saveSheetConfig of saveSheetConfigList) {
                docConfigInstance.data.push(this.newSheetConfigInstance(saveSheetConfig));
            }
        }

        // 3. 绑定hook方法。用来触发
        docConfigInstance.hook.sheetMousemove = (cell: object, position: any, sheet: object, moveState: object, ctx: object) => {
            // console.log('start_c:',position.start_c)
            // console.log('start_r:',position.start_r)
            this.rowFillProcess(position, fillConfig);
        }

        // 4. ret
        return docConfigInstance;
    }

    /**
     * 鼠标经过填报区域时的处理逻辑
     * @param position
     * @param fillConfig
     * @private
     */
    private rowFillProcess(position: any, fillConfig: FillConfig) {
        let c = position.c;
        let r = position.r;
        let isExists = false;

        // 1. 获取行填报区域
        if (this.rowFillAreaList.length < 1) return;

        // 2. 判断鼠标滑过单元格，是否在行填报区域范围内
        let overRowFillAreaAxisR1, overRowFillAreaAxisR2, overRowFillAreaAxisC1, overRowFillAreaAxisC2;

        for (let rowFillArea of this.rowFillAreaList) {
            let rowFillAreaRange = LuckyExcel.getRangeByTxt(rowFillArea.realityArea || rowFillArea.designArea);

            let overRowFillAreaAxisR1 = rowFillAreaRange.row[0];
            let overRowFillAreaAxisR2 = rowFillAreaRange.row[1];
            let overRowFillAreaAxisC1 = rowFillAreaRange.column[0];
            let overRowFillAreaAxisC2 = rowFillAreaRange.column[1];

            if (r >= overRowFillAreaAxisR1 && r <= overRowFillAreaAxisR2 && c >= overRowFillAreaAxisC1 && c <= overRowFillAreaAxisC2) {
                isExists = true;
                this.currentRowFillArea = rowFillArea;
                break;
            }
        }

        // 3. 如果在填报区域内，显示行填报菜单
        if (isExists) {
            // 调用菜单显示方法,并保存菜单所在的填报区域信息
            fillConfig.rowFillMenuShow(position.start_c, position.start_r + 100);
        } else {

            if (!fillConfig.getRowFillMenuIsShow()) return;

            // 如果菜单显示，则需要离开行填报区域周围100像素后，才隐藏菜单。
            let rowFillAreaRange = LuckyExcel.getRangeByTxt(this.currentRowFillArea.realityArea || this.currentRowFillArea.designArea);
            let overRowFillAreaAxisR1 = rowFillAreaRange.row[0];
            let overRowFillAreaAxisR2 = rowFillAreaRange.row[1];
            let overRowFillAreaAxisC1 = rowFillAreaRange.column[0];
            let overRowFillAreaAxisC2 = rowFillAreaRange.column[1];

            console.log('r:' ,r)
            console.log('c:', c)
            console.log('overRowFillAreaAxisR1:', overRowFillAreaAxisR1 - 2)
            console.log('overRowFillAreaAxisC1:', overRowFillAreaAxisC1 - 1)
            console.log('overRowFillAreaAxisR2:', overRowFillAreaAxisR2 + 1)
            console.log('overRowFillAreaAxisC2:', overRowFillAreaAxisC2 + 1)
            if (r < overRowFillAreaAxisR1 - 2
                || r > overRowFillAreaAxisR2 + 1
                || c < overRowFillAreaAxisC1 - 1
                || c > overRowFillAreaAxisC2 + 1) {
                // 调用菜单隐藏方法
                fillConfig.rowFillMenuHidden();
                // 清空currentRowFillArea
                this.currentRowFillArea = {
                    designArea: '',
                    realityArea: null,
                };
            }


        }
    }

// 从sheetConfigTemplate配置变量，深度复制出新的配置实例
    newSheetConfigInstance(saveSheetConfig: object): object {

        // 1. 从模板生成新的sheet配置
        let sheetConfigInstance = lodash.cloneDeep(FillModelConfigger.sheetConfigTemplate);

        // 2. 合并保存的sheet信息
        if (saveSheetConfig) {
            sheetConfigInstance = lodash.merge(sheetConfigInstance, saveSheetConfig)
        }

        // 3. ret
        return sheetConfigInstance;
    }

    /**
     * 向sheetConfig，设置可编辑区域。
     * @param allowEditRangeAxis    允许编辑的区域范围
     * @param configInstance           被进行设置的配置实例
     * @returns {*}
     */
    setupAllowEditCell(allowEditRangeAxis: string, configInstance: object) {
        let editAreaConfig = { //区域保护
            name: "area", //名称
            hintText: "", //提示文字
            algorithmName: "None",//加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
            saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
            sqref: allowEditRangeAxis //区域范围
        };

        let sheetConfigInstance = configInstance;
        sheetConfigInstance.config.authority.allowRangeList.push(editAreaConfig);
        return sheetConfigInstance;
    }

    addFillRow() {

        //1. 获取当前要操作的行填报区域
        let currentRowFillAreaAxis: any = this.currentRowFillArea;
        if (!this.currentRowFillArea.designArea || this.currentRowFillArea.designArea === '' ) return;

        //2. 获取每个填报行的行数
        let rowFillAreaRange = LuckyExcel.getRangeByTxt(this.currentRowFillArea.realityArea || this.currentRowFillArea.designArea);
        let overRowFillAreaAxisR1 = rowFillAreaRange.row[0];
        let overRowFillAreaAxisR2 = rowFillAreaRange.row[1];
        let overRowFillAreaAxisC1 = rowFillAreaRange.column[0];
        let overRowFillAreaAxisC2 = rowFillAreaRange.column[1];
        let fillRowNum = overRowFillAreaAxisR2 - overRowFillAreaAxisR1 + 1;

        //3. 下移行填报区域下面所有单元格，下移行数为 步骤2得到的行数。
        let sheetMaxRowNum = this._docConfigJson.data[0].data.length;
        LuckyExcel.insertRow(sheetMaxRowNum,{
            number: fillRowNum, // 插入的行数
            needFocus: false,   //插入行后，不需要sheet自动聚焦到新插入的行
        });

        //4. 复制填报行（除数值外）覆盖目标单元格区域


        //5. 将新添加的单元格区域，加入到可编辑区域

        //6. 更新行填报区域_实际填报区域信息

        //7. 刷新行填报菜单信息，防止鼠标在新增行区域时行填报菜单消失

    }

    /**
     * 初始化填报模式工作簿
     * @returns
     */
    constructor(fillConfig: object) {

        // 1. 获取sheet的设计信息（LuckyConfig）
        let saveSheetConfig = [];
        if (store.getItem("sheetSave")) {
            saveSheetConfig = JSON.parse(store.getItem("sheetSave") || '{}');
        }

        // 2. 生成Doc配置（LuckyConfig）
        this._docConfigJson = this.newDocConfigInstance(saveSheetConfig, fillConfig);

        // 3. 获取填报区域配置信息（custConfig）,并合并sheetConfig
        let fillAreaAxis = store.getItem('fillArea');
        if (fillAreaAxis) {
            this.setupAllowEditCell(JSON.parse(fillAreaAxis).join(','), this._docConfigJson.data[0]); // 生成sheetConfig片段
        }

        //4. 获取行填报区域信息,用来作为填报控制使用的fillConfig来使用。
        let rowFillDesignAreaList = JSON.parse(store.getItem(store.key.rowFillDesignArea) || '[]');
        for (let rowFillDesignArea of rowFillDesignAreaList){
            this.rowFillAreaList.push(new RowFillArea(rowFillDesignArea,null));
        }
    }
}




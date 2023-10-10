
export class RowFillArea {
    public designArea: string;

    public realityArea: any
    /**
     *
     * @param designArea 设计的填报设计区域。该数据的形式为"E10:E14"。
     * @param realityArea
     */
    constructor(designArea:string, realityArea:any) {
        this.designArea = designArea;
        this.realityArea= realityArea;
    }

}
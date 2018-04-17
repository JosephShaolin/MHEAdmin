export interface IBusinessUnit {
    airId: string;
    businessCode: string;    
    name: string;
    description: string;
    requestType: string;
    responseEndPoint: string;
    useDefaultTemplate: boolean;
    createdBy: string;
    createdDateTime: Date;
    updatedBy: string;
    updatedDateTime: Date;       
}
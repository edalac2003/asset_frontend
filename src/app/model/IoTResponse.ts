import { IoTProperty } from "./IotProperty";

export class IoTResponse{
    "responseCode": string;
    "msgError": string;
    "data": IoTProperty;
    "listData": IoTProperty[];
}
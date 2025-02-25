import  {  Response } from 'express';

export const response = (res:Response, data:any, message:any, code:number) => {
    res.json({
        statusCode: code,
        data: data,
        message: message,
        date: new Date()
    })
}
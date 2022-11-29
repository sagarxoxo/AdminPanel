import axios from "axios";
import { useEffect, useState } from "react"

interface Params {
    url :string,
    headers?: {},
    body?: {},
    onError: (error: any) => {},
    onSuccess: (data: any) => {}
}

module Api {

    export const Get = async (
        params: Params
    ) => {    
        try{
            const url = params.url;
            const {data} = await axios.get(url,
                {headers: params.headers, withCredentials: true}
            );
            params.onSuccess(data);
        } catch(e){
            params.onError(e.message);
        }
    }

    export const Post = async (
        params: Params
    ) => {
        try{
            const url = params.url;
            const body = params.body;
            const {data} = await axios.post(url, body,
                {headers: params.headers, withCredentials: true},
            );
            params.onSuccess(data);
        } catch(e){
            params.onError(e.message);
        }
    }

    export const Delete = async (
        params: Params
    ) => {
        try{
            const url = params.url;
            const {data} = await axios.delete(url,
                {headers: params.headers, withCredentials: true}
            );
            params.onSuccess(data);
        } catch(e){
            params.onError(e.message);
        }
    }
}

export default Api;
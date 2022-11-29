import Api from "./Api"

const baseUrl : string = process.env.ACCOUNT_URl;

module useAccountService {
    
    /**
     * @Schema : 
     *     @See https://api.patientsinfluence.com/v1/account/webjars/swagger-ui/index.html
     *     
     * @example
     *  import useAccountService from '../Components/Hooks/useAccount';
     *   
     *  useAccountService.getMyAccount(onError:() => {}, onSuccess:(data) => { setData(data)});
     * 
     */


    
    export const getMyAccount = async (onError: () => {}, onSuccess:() => {})=>
    {
        await Api.Get({
                url: `${baseUrl}me`,
                onError: onError,
                onSuccess: onSuccess
        })
    }

    export const getClients = async (onError: ()=>{}, onSuccess: ()=>{}) => {
         await Api.Get({
            url: `${baseUrl}clients`,
            onError: onError,
            onSuccess: onSuccess
        })
    }
    
    export const getClientById = async (id: string, onError: ()=>{}, onSuccess: ()=>{}) => {
         await Api.Get({
            url: `${baseUrl}clients/${id}`,
            onError: onError,
            onSuccess: onSuccess
        })
    }

    export const getInfluencers = async (onError: ()=>{}, onSuccess: ()=>{}) => {
         await Api.Get({
            url: `${baseUrl}influencers`,
            onError: onError,
            onSuccess: onSuccess
        })
    }
    
    export const getInfluencerById = async (id: string, onError: ()=>{}, onSuccess: ()=>{}) => {
         await Api.Get({
            url: `${baseUrl}/${id}`,
            onError: onError,
            onSuccess: onSuccess
        })
    }
    
    export const createClient = async (body:any, onError: ()=>{}, onSuccess: ()=>{}) => {
         await Api.Post({
            url: `${baseUrl}`,
            body: body,
            onError: onError,
            onSuccess: onSuccess
        });
    }
    
    export const createInfluencer = async (body:any, onError: ()=>{}, onSuccess: ()=>{}) => {
        await Api.Post({
            url: `${baseUrl}`,
            body: body,
            onError: onError,
            onSuccess: onSuccess
        });
    }
    
    export const contact = async(body: any, onError: ()=>{}, onSuccess: ()=>{}) => {
        await Api.Post({
            url: "From endpoint",
            body: body,
            onError: onError,
            onSuccess: onSuccess
        })
    }

    export const DeleteAccount = async (id: string, onError: ()=>{}, onSuccess: ()=>{})=>{
        await Api.Delete({
            url:  `${baseUrl}${id}`,
            onError: onError,
            onSuccess: onSuccess
        })
    }
}

export default useAccountService;
import{GET_ALL,GET_US} from './ActionType';

export const setAllContact=(data)=>{
   
    return {
        type:GET_ALL,
        contactAll:data 
    };
}
export const setUS=(data)=>{
    return {
        type:GET_US,
        contactUS:data
    }
}

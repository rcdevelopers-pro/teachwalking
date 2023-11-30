export const getDataByValue =(data,value)=>{
    return data?.filter((values)=>Number(values?.id)===Number(value))
}
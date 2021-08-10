//Action creators  are the functions that dispatch actions
import { Action } from '../actions'
import {ActionType} from '../action-types/index'
import { Dispatch } from 'redux'

export const depositMoney=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
            dispatch({
                type:ActionType.DEPOSIT,
                payload: amount

            })
    }

}

export const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
            dispatch({
                type:ActionType.WITHDRAW,
                payload: amount

            })
    }

}

export const bankruptAccount=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
            dispatch({
                type:ActionType.BANKRUPT
               
            })
    }

}
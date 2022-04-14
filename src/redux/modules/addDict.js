import {db} from "../../firebase"
import { doc, addDoc, collection, getDoc, getDocs, updateDoc, deleteDoc, serverTimestamp, orderBy, query  } from "firebase/firestore";
import { async} from "@firebase/util";

const CREATE = "addDict/CREATE";
const DELETE = "addDict/DELETE"
const UPDATE = "addDict/UPDATE"
const LOAD = "addDict/LOAD"

const initialState = [
];

export function loadDict(dict_list) {
    return {type:LOAD, dict_list}
}

export function createDict(dict) {
    return { type: CREATE, dict }
}

export function deleteDict(index){
    return{ type: DELETE, index}
}

export function updateDict(dict, index){
    return {type: UPDATE, dict,index}
}

export const loadDictBE = () =>{
    return async function(dispatch) {
        const dict_data = await getDocs(
            query(collection(db,"dictionary"), orderBy("date"))
            );
        let dict_list = []
        dict_data.forEach((d) => {
            dict_list.push({id: d.id, ...d.data()})
        })
        dispatch(loadDict(dict_list))
    }
}

export const addDictBE = (dict) => {
    return async function(dispatch) {
        const dict_data = {...dict, date : serverTimestamp()}
        const docRef = await addDoc(collection(db, "dictionary"), dict_data)
        const dict_d = {...dict, id: docRef.id}
        dispatch(createDict(dict_d))
    }
}

export const updateDictBE = (dict, index) => {
    return async function(dispatch) {
        const docRef = doc(db,"dictionary",dict.id);
        await updateDoc(docRef,{...dict})
        dispatch(updateDict(dict,index))
    }
}

export const deleteDictBE = (id, index) => {
    return async function(dispatch){
        const docRef = doc(db, "dictionary",id)
        await deleteDoc(docRef)
        dispatch(deleteDict(index))
    }
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "addDict/LOAD": {
            return action.dict_list
        }
        case "addDict/CREATE": {
            return state.concat(action.dict)
        }
        case "addDict/DELETE": {
            return state.filter((_, i) => i !== action.index)
        }
        case "addDict/UPDATE": {
            return state.map((v, i) => {
                if (i===action.index){
                    return action.dict
                }
                return v
            })
        }
        default: return state;
    }
}

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

let appStore= (set)=> ({
  transactionArray:[],
  setTransactionArray:(transactionArray)=>set(state => ({transactionArray:transactionArray}))
})

appStore = persist(appStore,{name:'cdot_store_api'});
export  const useAppStore = create(appStore)

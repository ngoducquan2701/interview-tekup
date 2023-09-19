import { useContext } from "react"
import StateContext from "../context/StateProvider"


const useStateContext = () => {
    return useContext(StateContext)
}

export default useStateContext
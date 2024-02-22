
// import type { RootState } from '../../Redux/Store'
import {  increment, decrement} from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
 import {showUser} from '../employee/employeeSlice'
export function Counter() {
  const count = useSelector((state:any ) => state.employee.v)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(1))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={()=>dispatch(showUser())}
        >
        Decrement
        </button>
      </div>
    </div>
  )
}
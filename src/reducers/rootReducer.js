// const initialState = {
// 	counter: 0
// }

// export default function rootReducer(state = initialState, action){
// 	switch(action.type){
//      case 'INCREMENT':
//          return { counter: state.counter + 1 }
//      case 'DECREMENT':
//          return { counter: state.counter - 1 }
//      default: 
//          return state;    
// 	}
// }


export default function rootReducer(state = [], action){
	switch(action.type){
		case 'ADD_TODO':
		   return [...state, 
		             { 
		               todo: action.payload, 
		               id: state.length 
		              }
		          ]
		case 'REMOVE_TODO':
		    return state.filter((_, id) => id != action.id )          
		default:
		   return state;   
	}
}


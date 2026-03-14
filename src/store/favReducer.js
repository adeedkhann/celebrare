export const initialState = JSON.parse(localStorage.getItem("favPhotos")) || [];


export const favReducer = (state , action)=>{

    switch(action.type){
        case 'toggleFavourite':
            {
            let newState;
            const exist = state.find(photo => photo.id === action.payload.id);

            if(exist){
                newState = state.filter(photo => photo.id !== action.payload.id)
            }else{
                newState =[...state , action.payload]
            }

            localStorage.setItem("favPhotos" , JSON.stringify(newState))
            return newState;}

            default:
                return state;

    }       




}
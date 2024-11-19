import { createContext, useContext } from "react";
import { useState } from "react";


const AppContext = createContext(null); 

// hook to return context 
export const UseAppContext = () => {
    const context = useContext(AppContext);

     if (context===undefined){
         throw new Error('AppContext must be within the AppContextProvider')
    }
    return context; 
}

const AppContextProvider = ({children})=>{
    const [favorites, setFavorites] = useState([]);
    console.log (favorites);
    const AddToFavorites = (book)=> {
        console.log("Adding to facs", book)
        setFavorites((prevFavorites) => [...prevFavorites,book]);
    };

    const RemoveFromFavorites = (id)=>{
        console.log("Removing favorites:", id); 
        setFavorites((prevFavorites)=>prevFavorites.filter(book=>book.id!==id))
    };
    
    return (
        <AppContext.Provider 
           value ={{favorites, AddToFavorites, RemoveFromFavorites}}>
           {children}
        </AppContext.Provider>
     );
};

export default AppContextProvider; 
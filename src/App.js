import './App.css';
import NewsFeed from './pages/NewsFeed';


function App() {

  
  /*
  // STORE OLUŞTURULACAK

  // ACTION -> count   ++  --
  const arttir= ()=>{
    return{
      type: "ARTTIR"
    }
  }
  const azalt= ()=>{
    return{
      type: "AZALT"
    }
  }
  // REDUCER
  //  -  sayac()-> return = 0  boş kullanırsam
  //  - azalt()-> return type="AZALT"
  //  -- sayac(azalt)-> return = -1
  const sayac= (state=0,action)=>{
    switch(action.type){
      case 'ARTTIR': return state+1
      case 'AZALT': return state-1
      default: return state
    }
  }
  // sayac ı bir stor a dönüştür.
  let store = createStore(sayac)

  // stor u içerik olarka ekrana yazdıralım 
  store.subscribe(()=>console.log(store.getState()))

  // DISPATCH
  store.dispatch(arttir())
  store.dispatch(arttir())
  store.dispatch(arttir())
  store.dispatch(azalt())
  */

  return (

       <NewsFeed />   

  );
}

export default App;

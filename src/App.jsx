import ProductCard from "./components/productCard"
import UserData from "./components/userData"


function App() {
  

  return (
    <>

    <UserData/>
    
    <ProductCard 
    name="Macbook air" 
    image="https://picsum.photos/id/0/200/300" 
    price="1299"
    />
    
    </>
      
  )
}

export default App

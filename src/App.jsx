import ProductCard from './assets/components/productCard';
import UserData from './assets/components/userData';        

function App() {

  return (
    <>
      <h1>My App</h1>
      <ProductCard 
      name="Laptop"
      image="laptop.jpg"
      price="1000"
      />
      <UserData/>
    </>
  )
}

export default App

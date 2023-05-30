import Main from './Main'
import { ProductContextProvider } from './context/ProductContext';
function App() {
  return (
    <>
      <ProductContextProvider>
        <Main />
      </ProductContextProvider>
    </>
  )
}

export default App;
import Main from './Main'
import ProductContextProvider from './Main'
function App() {
  return(
    <>
    <ProductContextProvider>
      <Main/>
    </ProductContextProvider>
    </>
  )
}

export default App;
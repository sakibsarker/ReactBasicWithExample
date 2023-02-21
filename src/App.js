import './App.css';
import PostForm from './components/PostForm';
import Postlist from './components/Postlist';
// import ClickCounterTwo from './page/ClickCounterTwo';
// import ComponentC from './page/ComponentC';
// import ComponentF from './page/ComponentF';
// import Counter from './page/Counter';
// import HoverMouse from './page/HoverMouse';
// import User from './page/User';
// import { UserProvider } from './page/UserContext';
function App() {
  return (
    <div className='input'>
      <PostForm/>
      {/* <Postlist/> */}




      {/* <UserProvider value="Sakib ">
        <ComponentC/>
      </UserProvider> */}
      {/* <Counter
      render={(count,incrementCount)=>(
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}/>
      
      <Counter
      render={(count,incrementCount)=>(
        <HoverMouse count={count} incrementCount={incrementCount}/>
      )}/> */}
      {/* <ClickCounterTwo/>
      <HoverMouse/>
      <User render={(isLoggedIn)=>isLoggedIn?"sakib":"user"}/> */}
      {/* <ClickCounter name="Sakib "/>
      <HoverCounter name="sakib sarker "/> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Superman"/>
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary> */}
    </div>
    
  );
}

export default App;

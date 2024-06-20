import logo from './logo.svg';
import './App.css';
import NavbarVertical from './components/NavbarVertical'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
<div>
	<Routes>
		<Route path="/" element={<NavbarVertical/>}/>
	</Routes>
	
</div>
);
}

export default App;

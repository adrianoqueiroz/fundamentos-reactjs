import { Header } from './components/Header.jsx';
import { Post } from './Post.jsx';

import './styles.css'
function App() {
  return (
    <div>
      <Header />
      
      <Post 
        author="Adriano" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quas adipisci optio fugiat vel animi, quam dicta, aliquid, tempora iusto rerum natus. Sit minima ipsa, nobis quos facilis mollitia magni."
      />
    </div>
  )
}
  
export default App

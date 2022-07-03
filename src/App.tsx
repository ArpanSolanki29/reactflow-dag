import { ReactFlowProvider } from './additional-components';
import './App.css';
import SideBar from './SideBar';

function App() {
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          
        </div>
        <SideBar />
      </ReactFlowProvider>
    </div>
  );
}

export default App;

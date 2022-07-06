import { ReactFlowProvider } from './additional-components';
import './App.css';
import Canvas from './Canvas';
import ReactFlow from './ReactFlow';
import SideBar from './SideBar';

function App() {
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <Canvas/>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default App;

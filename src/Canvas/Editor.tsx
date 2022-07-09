import React from 'react'
import { useDrop } from 'react-dnd';



const Editor = () => {

  const [{}, drop] = useDrop<{kind: string}, void, {}>({
		accept: ["node"],
		drop({ kind }, monitor) {
      console.log(kind);
      const location = monitor.getClientOffset();
			const x = location?.x;
      const y = location?.y;
      
		},
	})




  return (
    <div style={{width: '75%', float: 'left'}} ref={drop}>
        <svg viewBox='0 0 100 100' style={{ fill: '#a1b2d3'}} >
            <rect className='background' fill='#a1b2d3' style={{width: "100%", height: "100%"}}>

            </rect>
        </svg>
    </div>
  )
}

export default Editor;
import React from 'react'



export default function SideBar() {
    
    function handleDrag(ev: React.DragEvent<HTMLDivElement>, nodeType: string): void {
        ev.dataTransfer.setData("application/react-flow", nodeType);
        ev.dataTransfer.effectAllowed = 'move';
    }

    return (
        <aside>
            <div className='description'>
                You can drag these nodes.
            </div>
            <div className='dndnode input' draggable={true} onDragStart={(event) => handleDrag(event, 'input')}>
                Input Node
            </div>

            <div className='dndnode' draggable={true} onDragStart={(event) => handleDrag(event, 'default')}>
                Default Node
            </div>

            <div className='dndnode output' draggable={true} onDragStart={(event) => handleDrag(event, 'output')}>
                Ouput Node
            </div>
        </aside>
    )
}

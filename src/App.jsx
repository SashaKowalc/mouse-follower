import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnableb] = useState(false);
  const [position, setPosition] = useState({ x:0, y:0 });

  useEffect(() => {
    console.log('efect', { enabled });
  
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    }
  
    if(enabled) {
      window.addEventListener('pointermove', handleMove);
    }
  
    //Cleanup
    // --> cuando el componente se desmonta
    // --> cuando cambia las dependendencias, antes de ejecutar 
    return() => {
      window.removeEventListener('pointermove', handleMove);
    }
  
  }, [enabled]);

  return(
  <>
    <div style={{
        position: "absolute",
        background: '#09f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnableb(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
    )
}

function App() {
  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App

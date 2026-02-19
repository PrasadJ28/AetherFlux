import { useEffect, useRef, useState } from "react";
import { Stage } from "react-konva";

const CanvasWorkspace = () => {
  const stageRef = useRef(null);
  function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  const handleSelect = () => {

  }
  const handleCircle = () =>{

  }
  const handleRectangle = () => {}
  const handleLine = () => {}
  const handleColor = () => {}
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, 'stage.png');
  }
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button onClick={handleSelect}>Undo</button>
      <button onClick={handleSelect}>Redo</button>
      <button onClick={handleSelect}>Select</button>
      <button onClick={handleCircle}>Circle</button>
      <button onClick={handleRectangle}>Rectangle</button>
      <button onClick={handleLine}>Line</button>
      <button onClick={handleColor}>Color</button>
      <button onClick={handleExport}>Export</button>
      <Stage ref={stageRef} width={window.innerWidth} height={window.innerHeight}>
      </Stage>
      Hello
    </>
  );
}

export default CanvasWorkspace;

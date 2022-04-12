import React, { useState, useEffect, useRef } from 'react';

function CanvasPic({ verse }) {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const catImage = new Image();
    catImage.src = 'https://thiscatdoesnotexist.com/';
    catImage.onload = () => setImage(catImage);
  }, []);
  useEffect(() => {
    console.log(verse);
    if (canvas.current) {
      const ctx = canvas.current.getContext('2d');
      ctx.fillStyle = '#ccc';
      ctx.fillRect(10, 10, 300, 300);
      ctx.fillStyle = 'black';
      ctx.fillText(verse, 10 / 2, 25);
    }
  }, [verse]);
  return (
    <div>
      <h1>Cat Meme!</h1>

      <div>
        <canvas ref={canvas} width={400} height={400} />
      </div>
    </div>
  );
}

export default CanvasPic;

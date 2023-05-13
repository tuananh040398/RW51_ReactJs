import React, { Component, useEffect, useState } from "react";

export default function Count({ tang, giam }) {
  const [data, setData] = useState(1);

  return (
    <div>
      <button onClick={() => tang(2)}>Tang</button>
      <button onClick={() => giam(1)}>Giam</button>
    </div>
  );
}

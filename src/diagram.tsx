import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
});

const Diagram = React.forwardRef((props: { code: string }, ref: any) => (
  <div className="mermaid" ref={ref}>
    {props.code}
  </div>
));

const DiagramWithExporters = (props: { code: string }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  });

  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Diagram code={props.code} ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </>
  );
};

export default DiagramWithExporters;

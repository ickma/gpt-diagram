import React from "react";
import DiagramWithExporters from "./diagram";

const defaultProps = {
  code: `
    graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    `,
};

export default {
  title: "Mermaid",
  component: DiagramWithExporters,
};

export const Default = () => <DiagramWithExporters {...defaultProps} />;

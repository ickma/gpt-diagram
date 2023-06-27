import React from "react";
import { storiesOf } from "@storybook/react";

import Mermaid from "./mermaid";

const defaultProps = {
  chart: `
    graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    `,
};

export default {
  title: "Mermaid",
  component: Mermaid,
};

export const Default = () => <Mermaid {...defaultProps} />;

import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span style={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
          {explorer.name}
          <br />
        </span>

        <div
          style={{
            display: expand ? "block" : "none",
            cursor: "pointer",
            paddingLeft: 15
          }}
        >
          {explorer.items.map((exp) => (
            <Folder key={exp.name} explorer={exp} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name} <br />{" "}
      </span>
    );
  }
}

export default Folder;

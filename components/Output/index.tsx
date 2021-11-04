import React from "react";

function index({ data }: { data: any }) {
  return (
    <div>
      <div className="output">
        <pre>
          <code>{data}</code>
        </pre>
      </div>
    </div>
  );
}

export default index;

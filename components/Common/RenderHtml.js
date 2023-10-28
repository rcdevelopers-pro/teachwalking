import React from "react";

const RenderHtml = ({content}) => {
  console.log("content",content)
  return (
    <>
     <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </>
  );
};

export default RenderHtml;

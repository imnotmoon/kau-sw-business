import React from "react";
import styled from "styled-components";
import moment from "moment";

function Post({ data }) {
  return (
    <>
      <Title>
        {data.title}
      </Title>
      <div>{data.writer}</div>
      <div>{data.viewCount}</div>
      <div>{moment(data.createdAt).format("YYYY/MM/DD hh:mm:ss A")}</div>
      <div dangerouslySetInnerHTML={{__html: data.content}}></div>
      {data.files.map((file) => <div key={file.id}>{file.name}</div>)}
    </>
  );
}

const Title = styled.div`
  margin: 0 0 20px 10px;
`

export default Post;

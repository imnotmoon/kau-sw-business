const GlobalStyle = (props) => {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            font-family: 'Noto Sans KR', sans-serif;
          }

          .image {
            padding-left: 40px;
          }
        `}
      </style>
    </div>
  );
};

export default GlobalStyle;

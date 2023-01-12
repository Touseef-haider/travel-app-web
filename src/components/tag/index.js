import React from "react";

import * as S from "./styled";

const Tag = (props) => {
  return <S.Tag {...props}>{props.title}</S.Tag>;
};

export default Tag;

import React from "react";

type Props = {
  computedMatch: any;
};

const UserView: React.FC<Props> = ({ computedMatch }) => {
  return <div> Hello UserView! id: {computedMatch.params.id}</div>;
};

export default UserView;

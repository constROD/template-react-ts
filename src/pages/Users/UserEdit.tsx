import React from "react";

type Props = {
  computedMatch: any;
};

const UserEdit: React.FC<Props> = ({ computedMatch }) => {
  return <div> Hello UserEdit! id: {computedMatch.params.id} </div>;
};

export default UserEdit;

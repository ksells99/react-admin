import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    //   Pass in all props as object
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        {/* Edit/Delete knows it'll be a PUT/DEL req to /api/users/:id - no need to specify */}
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  );
};

export default UserList;

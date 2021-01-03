import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostList = (props) => {
  return (
    //   Pass in all props as object
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <DateField source='publishedAt' />
        {/* Edit knows it'll be a PUT req to /api/posts/:id - no need to specify */}
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  );
};

export default PostList;

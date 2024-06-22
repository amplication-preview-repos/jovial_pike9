import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CommandTitle } from "../command/CommandTitle";

export const ResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="command.id" reference="Command" label="command">
          <SelectInput optionText={CommandTitle} />
        </ReferenceInput>
        <TextInput label="responseText" multiline source="responseText" />
        <SelectInput
          source="responseType"
          label="responseType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

import { FunctionComponent } from "react";
import SelectGroupDialog from "@/components/auth/dialogs/SelectGroup";

const SelectGroupModal: FunctionComponent = () => {
  console.log("SelectGroup, intercepted");

  return <SelectGroupDialog />;
};

export default SelectGroupModal;

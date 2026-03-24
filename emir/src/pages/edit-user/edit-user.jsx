import { DropDownMenu } from "@/components/drop-down-menu/drop-down-menu";
import { users } from "@/data/users";
import {
  countryOptions,
  departmentOptions,
  statusesOptions,
  usersOptions,
} from "@/utils/options";
import { useState } from "react";

export function EditUsers() {
  const [selectedUser, setSelectedUser] = useState("");
  const [country, setCountry] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const handleUserChange = (value) => {
    const user = users.find((u) => u.name === value);

    if (!user) return;

    setSelectedUser(value);
    setCountry(user.country.value);
    setDepartment(user.department.value);
    setStatus(user.status.value);
  };

  return (
    <main className="main">
      <span className="main__title">EDIT USER</span>
      <section className="main__editor-menu">
        <div className="main__editor-menu-left">
          <DropDownMenu
            title="User"
            options={usersOptions}
            value={selectedUser}
            onChange={handleUserChange}
          />
          <span className="main__title">User Information</span>
          <DropDownMenu
            title="Full Name"
            options={usersOptions}
            value={selectedUser}
            onChange={handleUserChange}
          />
          <DropDownMenu
            title="Country"
            options={countryOptions}
            value={setCountry}
            onChange={handleUserChange}
          />
        </div>
        <div className="main__editor-menu-right">
          <DropDownMenu
            title="Department"
            options={departmentOptions}
            value={setDepartment}
            onChange={handleUserChange}
          />
          <DropDownMenu
            title="Active"
            options={statusesOptions}
            value={setStatus}
            onChange={status}
          />
        </div>
      </section>
      <div className="main__complete">
        <button className="main__button">Undo</button>
        <button className="main__button">Save</button>
      </div>
    </main>
  );
}

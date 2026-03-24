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
            onChange={setSelectedUser}
          />
          <DropDownMenu
            title="Country"
            options={countryOptions}
            value={country}
            onChange={setCountry}
          />
        </div>
        <div className="main__editor-menu-right">
          <DropDownMenu
            title="Department"
            options={departmentOptions}
            value={department}
            onChange={setDepartment}
          />
          <DropDownMenu
            title="Active"
            options={statusesOptions}
            value={status}
            onChange={setStatus}
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

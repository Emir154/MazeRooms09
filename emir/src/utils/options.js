import { countries } from "@/data/countries";
import { departments } from "@/data/departments";
import { statuses } from "@/data/statuses";
import { users } from "@/data/users";

export const countryOptions = countries.map((c) => ({
  label: c.name,
  value: c.value,
}));

export const departmentOptions = departments.map((d) => ({
  label: d.name,
  value: d.value,
}));

export const statusesOptions = statuses.map((s) => ({
  label: s.name,
  value: s.value,
}));

export const usersOptions = users.map((u) => ({
  label: u.name,
  status: {
    label: u.name,
    value: u.value,
  },
  department: {
    label: u.name,
    value: u.value,
  },
  country: {
    label: u.name,
    value: u.value,
  },
}));

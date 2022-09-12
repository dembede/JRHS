const Users = require("../src/users");
const axios = require("axios");

jest.mock("axios");

test("it should return user with ID: 1", () => {
  const user = { name: "Prior", id: 1 };
  const response = { data: user };

  axios.get, mockImplementationOnce(() => Promise.resolve(response));
  Users.getUsers().then((res) => {
    expect(res.data.id).toEqual(user.id);
  });
});

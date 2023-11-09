import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

import { waitForElement } from "@testing-library/react";

describe("Appointment", () => {
  it("defaults to Monday and changes the schedule when a new dya is selected", () => {
    const { getByText } = render(<Appointment />);

    return waitForElement(() => getByText("Monday"));
  });
})
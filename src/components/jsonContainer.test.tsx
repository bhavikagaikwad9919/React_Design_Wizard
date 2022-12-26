import { render, cleanup } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import ReactDOM from "react-dom";
import { MockedProvider } from "@apollo/react-testing";
import { BrowserRouter } from "react-router-dom";
//import { VideoListWrapper } from "./videoList";
//import { useLocation, Link } from "react-router-dom";
//import { templateCategories } from "../../../../lib/contexts/Queries";
//import { Sidebar } from "./sidebar";
import { JsonContainer } from "./jsonContainer";

Enzyme.configure({ adapter: new EnzymeAdapter() });

afterEach(cleanup);

describe("src/pages/private/dashboard/workspace/jsonContainer.tsx  test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <MockedProvider>
          <JsonContainer />
        </MockedProvider>
      </BrowserRouter>,
      div
    );
    //ReactDOM.unmountComponentAtNode(div);
    //console.log("222222222222222222222222222222222222",div.firstChild?.textContent);
    expect(div.firstChild?.textContent).toContain("JSON Debugger");
  });
});

import Panel from "./Panel";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from "./Link";

function TopBar() {
  return (
    // how do i get the buttons to be on the right

    <Panel className="flex justify-between sticky top-0 items-center bg-gray-900">
      <div className="flex gap-10">
        <div>Logo</div>
        <div className="flex gap-2 group/item items-center text-2lg text-neutral-800 font-semibold font-sans ">
          <Button
            rounded
            className="border-white hover:bg-teal-700 hover:text-white "
          >
            Buy
          </Button>
          <Button
            rounded
            className="border-white hover:bg-teal-700 hover:text-white "
          >
            Rent
          </Button>
          <Button
            rounded
            className="border-white hover:bg-teal-700 hover:text-white "
          >
            Sell
          </Button>
          <Button
            rounded
            className="border-white hover:bg-teal-700 hover:text-white "
          >
            Agent finder
          </Button>
        </div>
      </div>

      <div className="flex gap-2 group/item items-center text-2lg text-neutral-800 font-semibold font-sans ">
        <Button
          rounded
          className="border-white hover:bg-teal-700 hover:text-white "
        >
          Manage your listing
        </Button>
        <Button
          rounded
          className="border-white hover:bg-teal-700 hover:text-white "
        >
          Advertise
        </Button>
        <Button
          rounded
          className="border-white hover:bg-teal-700 hover:text-white "
        >
          Help
        </Button>
        <Button
          rounded
          outline
          className="border-slate-200 hover:bg-gray-300 hover:text-neutral-800 "
        >
          Sign up or Log in
        </Button>
      </div>
    </Panel>
  );
}

export default TopBar;

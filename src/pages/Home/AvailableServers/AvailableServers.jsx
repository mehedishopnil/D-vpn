import { IoImage } from "react-icons/io5";

const AvailableServers = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-">
      <div className="bg-white">
        <h1>Available Servers</h1>

        <div>
          <IoImage />
          <p>United States</p>
        </div>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
      </div>

      <div></div>
    </div>
  );
};

export default AvailableServers;

import QRCode from "react-qr-code";



const Main = ({}) => {
  return (
    <div className="flex relative z-10 flex-col main w-full gap-4 ">
      <table className="w-full border-2 border-sky-300 border-collapse">
        <thead>
          <tr>
            <th>Short Link</th>
            <th> Original Link</th>
            <th> Qr code</th>
            <th> Date Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>www.google.com</p></td>
            <td><p>www.google.com</p></td>
            <td>
              <p><QRCode value="test" className="w-[50px] h-[50px] p-0" /></p>
            </td>
            <td><p>12/12/2003</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;

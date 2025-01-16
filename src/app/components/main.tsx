import QRCode from "react-qr-code";



const Main = ({}) => {
  return (
    <div className="flex relative z-10 flex-col main w-full max-w-[560px] gap-4 ">
      <table>
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
            <td>https://tinyurl.com/2axaab5w</td>
            <td>www.google.com</td>
            <td>
              <QRCode value="test" />
            </td>
            <td>12/12/2003</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;

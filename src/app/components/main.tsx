import QRCode from "react-qr-code";


interface Url {
  shortUrl: string;
  originalUrl: string;
  dateCreated: string;
}

interface MainProps {
  shortenedUrls: Url[];
}

const Main: React.FC<MainProps> = ({
  shortenedUrls,
}) => {
    console.log(shortenedUrls);
  
  return (
    <div className="flex relative z-10 flex-col main w-[100vw] gap-4 ">
      <table className="w-[100vw] backdrop-blur-sm rounded-lg">
        <thead className="bg-[#181E29] rounded-lg text-white ">
          <tr>
            <th className="rounded-bl-lg rounded-tl-lg p-4">
              Short Link
            </th>
            <th> Original Link</th>
            <th> Qr code</th>
            <th className="rounded-br-lg rounded-tr-lg">
              {" "}
              Date Created
            </th>
          </tr>
        </thead>
        <tbody className=" h-fit min-h-96 w-[100vw] overflow-hidden">
          {shortenedUrls.map((url, index) => {
            return(
              <tr key={index} className="">
                <td className="">{url.shortUrl}</td>
                <td>{url.originalUrl}</td>
                <td>
                  <p className="flex items-center justify-center">
                  <QRCode value={url.shortUrl} className="h-[60px]"/>
                  </p>
                </td>
                <td >{new Date(url.dateCreated).toLocaleDateString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;

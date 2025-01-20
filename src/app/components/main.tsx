import QRCode from "react-qr-code";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";


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
  const [textToCopy, setTextToCopy] =
    useState<string>("");
  const notify = () => toast("Copied");

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    notify();
  };



  return (
    <div className="flex relative z-10 flex-col main w-[100vw] gap-4 ">
      <table className="w-[100vw] backdrop-blur-sm rounded-lg p-5">
        <thead className="bg-[#181E29] rounded-lg text-white ">
          <tr className="my-10">
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
        <tbody className=" h-fit  w-[100vw] border-sky-500  backdrop-blur-sm overflow-hidden mt-2">
          {shortenedUrls.length > 0 &&
            shortenedUrls.map((url, index) => {
              return (
                <tr
                  key={index}
                  className="rounded-xl border-2 border-sky-500"
                >
                  <td className="cursor-pointer max-w-[35%] px-4 "title="Copy" onClick={()=>{
                    setTextToCopy(url.shortUrl);
                    handleCopy();
                  }} >
                    <p className="flex items-center justify-center gap-1">
                      {url.shortUrl}
                      <FaCopy className="text-sky-500 text-xl" />
                    </p>
                  </td>
                  <td className="cursor-pointer lg:max-w-[480px] ">
                    {url.originalUrl}
                  </td>
                  <td>
                    <p className="flex items-center justify-center">
                      <QRCode
                        value={url.shortUrl}
                        className="h-[60px]"
                      />
                    </p>
                  </td>
                  <td>
                    {new Date(
                      url.dateCreated
                    ).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
          {shortenedUrls.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className=" text-center"
              >
                <div className="h-44 backdrop-blur-lg ">
                  <h1 className="text-3xl font-bold text-center ">
                    You have not shortened any
                    links yet.
                  </h1>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Main;

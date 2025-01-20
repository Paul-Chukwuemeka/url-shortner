import QRCode from "react-qr-code";
import {
  FaCopy,
  FaAngleDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  ToastContainer,
  toast,
  Bounce,
} from "react-toastify";
import { useWindowSize } from "react-use";

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
  const [expanded, setExpanded] =
    useState<number>(-1);
  const [windowWidth, setWindowWidth] =
    useState<number>(0);
  const { width } = useWindowSize();

  useEffect(() => {
    setWindowWidth(width);
  }, [width]);
  return (
    <div className="flex relative z-10 flex-col main w-[100vw] gap-4 ">
      {windowWidth > 750 && (
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
                    <td
                      className="cursor-pointer max-w-[35%] px-4 "
                      title="Copy"
                      onClick={() => {
                        setTextToCopy(
                          url.shortUrl
                        );
                        handleCopy();
                      }}
                    >
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
      )}
      {windowWidth <= 750 ? (
        <div className="p-4">
          <div className="bg-[#181E29] text-white text-2xl rounded-xl py-4 ">
            <h1>Shortened Links</h1>
          </div>
          <div>
            {shortenedUrls.length > 0 &&
              shortenedUrls.map((url, index) => (
                <div
                  key={index}
                  className="bg-[#181e2944] 
                  flex flex-col items-center justify-between backdrop-blur-sm text-white rounded-xl p-4 px-6 mt-2"
                >
                  <div className="flex items-center justify-between gap-2 w-full ">
                    <p
                      className="cursor-pointer flex gap-2 p-4 items-center "
                      title="Copy"
                      onClick={() => {
                        setTextToCopy(
                          url.shortUrl
                        );
                        handleCopy();
                      }}
                    >
                      {url.shortUrl}{" "}
                      <FaCopy className="text-sky-500 text-2xl" />
                    </p>

                    <FaAngleDown
                      className="text-2xl"
                      onClick={() => {
                        if (expanded === index) {
                          setExpanded(-1);
                        } else {
                          setExpanded(index);
                        }
                      }}
                    />
                  </div>
                  <div>
                    {expanded === index && (
                      <div className="w-full flex flex-col gap-2 ">
                        <p>
                          Original Link: <span className="text-sky-500">{url.originalUrl}</span>
                        </p>
                        <QRCode value={url.shortUrl} size={128}  />
                        <p className="p-2 text-xxl">
                          Date Created: <span className="text-sky-500">{new Date(url.dateCreated).toLocaleDateString()}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : null}
           <ToastContainer
              autoClose={1000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
              className="absolute z-100 h-fit bottom-0 right-0"
            />
    </div>
  );
};

export default Main;

import React from "react";
import Link from "next/link";

const Notification = ({ news }) => {
  const file =
    "https://intranet.wiut.uz/Uploads/CourseworkDescriptionFiles/fabbcb3f-c585-48db-a904-523c79adb7ab.pdf";

  const NewsPanel = (news) => {
    return (
      <div className="notification-area">
        <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="pr-16 sm:text-center sm:px-16">
            <p className="font-medium text-black">
              <a href={file} className="text-black cursor-help">
                <span>
                  <span className="font-bold">Warning:</span>
                  {news}
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <a className="text-black underline">&rarr;</a>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return <>{NewsPanel(news)}</>;
};

export default Notification;

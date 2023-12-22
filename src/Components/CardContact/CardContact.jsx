import { Link } from "react-router-dom";
import { contactCardList } from "../../Constants/Data";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function CardContact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center gap-2 lg:mx-0 w-full">
      {contactCardList.map(({ ContactIcon, title, contact, href }, index) => (
        <Link key={index} to={href} target="_blank">
          <div
            className={`${
              theme === "light"
                ? "bg-white border-b-2 border-Primary"
                : "bg-altSecondary border-b-2 border-altPrimary"
            } flex flex-col justify-center items-center gap-y-3 p-5 w-full rounded-xl shadow-lg hover:scale-105 duration-300`}
          >
            <ContactIcon size={25} className="text-teal-500" />
            <h4
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } font-semibold`}
            >
              {title}
            </h4>
            <p
              className={`${
                theme === "light" ? "text-light" : "text-altLight"
              } font-medium text-sm`}
            >
              {contact}
            </p>
            <p className="text-sm text-teal-500">Send Me A Message</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardContact;

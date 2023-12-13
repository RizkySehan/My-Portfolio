import { Link } from "react-router-dom";
import { contactCardList } from "../../Constants/Data";

function CardContact() {
  return (
    <div className="flex flex-col mx-auto lg:mx-0">
      {contactCardList.map(({ ContactIcon, title, contact, href }, index) => (
        <Link key={index} to={href} target="_blank">
          <div className="flex flex-col justify-center items-center gap-y-3 p-5 border-b-2 w-full lg:w-4/6 border-teal-500 rounded-md shadow-lg hover:scale-105 duration-300">
            <ContactIcon size={25} className="text-teal-500" />
            <h4 className="font-semibold">{title}</h4>
            <p className="font-medium text-sm">{contact}</p>
            <p className="text-sm text-teal-500">Send Me A Message</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardContact;

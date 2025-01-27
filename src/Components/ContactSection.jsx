import WhatsappImage from "../assets/whatsapp.png";
import EmailImage from "../assets/email.png";
import LocationImage from "../assets/location.png";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 my-32 max-w-[1300px] mx-auto px-4 md:px-6">
      {/* Contact Information */}
      <div className="flex-1">
        <p className="text-red-600 text-1xl">-- Contact Us</p>
        <h2 className="text-5xl font-bold mb-6 mt-2">Contact Information</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <img src={WhatsappImage} />
            <div>
              <p>Whatsapp:</p>
              <p>+973 3703 7777</p>
            </div>
          </li>
          <hr />

          <li className="flex items-center gap-4">
            <img src={EmailImage} />
            <div>
              <p>Email:</p>
              <p>info@gulffranchisehub.com</p>
            </div>
          </li>
          <hr />
          <li className="flex items-center gap-4">
            <img src={LocationImage} />
            <div>
              <p>Office:</p>
              <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="flex-1 bg-[#F6F8FA] p-8 rounded-lg shadow-sm">
        <form className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-black font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full p-4 border border-white bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-black font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full p-4 border border-white bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-black font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-white bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-black font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your number"
                className="w-full p-4 border border-white bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-black font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Write your subject"
              className="w-full p-4 border border-white bg-white rounded-lg   focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-2">
              What do you wish to discuss?
            </label>
            <textarea
              placeholder="Write your message"
              className="w-full p-4  border border-white bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;

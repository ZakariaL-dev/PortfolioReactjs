import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { MdTimer } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { useState } from "react";
import { Alert, Slide, Snackbar } from "@mui/material";
import { HiMiniPaperAirplane } from "react-icons/hi2";

const Contact = () => {
  const [Message, setMessage] = useState({
    name: "",
    email: "",
    projectType: "",
    projectDesc: "",
    timestamp: new Date().toLocaleString(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [Snack, setSnack] = useState({
    open: false,
    type: "",
    message: "",
  });

  async function sendJobInfos(e) {
    e.preventDefault();
    setIsSubmitting(true);

    // API
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;
    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;

    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // check Inputs
    if (
      !Message.name ||
      !Message.email ||
      !Message.projectType ||
      !Message.projectDesc
    ) {
      setIsSubmitting(false);
      return setSnack({
        open: true,
        type: "error",
        message: "Please, fill the demanded infos !!!",
      });
    }
    const messageText = `
      <b>--- 📧 New Portfolio Client Message 📧 ---</b>

      <b>Client Name:</b> ${Message.name}
      <b>Email:</b> ${Message.email}
      <b>Project Type:</b> ${Message.projectType}

      <b>Project Details:</b>
      <pre>${Message.projectDesc}</pre>

      <b>Sent At:</b> ${Message.timestamp}
    `;

    try {
      const res = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: messageText,
          parse_mode: "HTML",
        }),
      });
      const result = await res.json();
      if (res.ok && result.ok) {
        setSnack({
          open: true,
          type: "success",
          message: "Message Sent Successfully!",
        });
        setMessage({
          name: "",
          email: "",
          projectType: "",
          projectDesc: "",
        });
        setIsSubmitting(false);
      } else {
        console.error("Telegram API Error:", result);
        setSnack({
          open: true,
          type: "error",
          message: "Failed to send message.",
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      setSnack({
        open: true,
        type: "error",
        message: "An error occurred while connecting to the server.",
      });
      console.error("Fetch Error:", error);
      setIsSubmitting(false);
    }
  }
  return (
    <div className="pt-24">
      <h1 className="text-slate-50 text-center text-4xl font-bold relative after:content-[''] after:bg-teal-700 after:w-[250px] after:h-[5px] after:absolute after:rounded-[20px] after:mt-[50px] after:left-1/2 after:-translate-x-1/2 ">
        Let's Work Together
      </h1>

      <div className="py-14 px-5 flex flex-row justify-around items-start flex-wrap lg:px-20 gap-6">
        {/* <!-- the client coordinnates --> */}
        <form
          id="Client"
          className="bg-slate-50 w-[95%] lg:w-[45%] px-7 pb-4 pt-8 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)]"
          onSubmit={(e) => sendJobInfos(e)}
        >
          <h3 className="font-bold mb-7 text-teal-900">Send Me a Message</h3>

          <p className="underline font-semibold text-teal-700">Your Name</p>
          <input
            type="text"
            id="clientName"
            name="name"
            className="w-full bg-[#B9EDDD] my-2 rounded-xl px-4 py-2 border-green-950 border-2 focus:outline-none"
            placeholder="John Magerita"
            value={Message.name}
            onChange={(e) => setMessage({ ...Message, name: e.target.value })}
          />

          <p className="underline font-semibold text-teal-700">Email Address</p>
          <input
            type="email"
            id="clientEmail"
            name="email"
            className="w-full bg-[#B9EDDD] my-2 rounded-xl px-4 py-2 border-green-950 border-2 focus:outline-none"
            placeholder="john.magerita@gmail.com"
            value={Message.email}
            onChange={(e) => setMessage({ ...Message, email: e.target.value })}
          />

          <p className="underline font-semibold text-teal-700">Project Type</p>
          <input
            type="text"
            id="projectType"
            name="projectType"
            placeholder="e.g: Web design, Brand Identity"
            className="w-full bg-[#B9EDDD] my-2 rounded-xl px-4 py-2 border-green-950 border-2 focus:outline-none"
            value={Message.projectType}
            onChange={(e) =>
              setMessage({ ...Message, projectType: e.target.value })
            }
          />

          <p className="underline font-semibold text-teal-700">
            Project Details
          </p>
          <textarea
            rows="6"
            id="projectDetails"
            name="projectDetails"
            placeholder="Tell me more about your project..."
            className="w-full bg-[#B9EDDD] my-2 rounded-xl px-4 py-2 border-green-950 border-2 focus:outline-none"
            value={Message.projectDesc}
            onChange={(e) =>
              setMessage({ ...Message, projectDesc: e.target.value })
            }
          ></textarea>

          <div className="w-full text-center">
            <button
              type="submit"
              className="bg-[#11694f] my-6 py-3 px-5 rounded-xl cursor-pointer font-bold text-slate-100 w-2/5 btnhvr hover:w-3/5 hover:shadow-xl hover:text-teal-600 hover:bg-[#74ebc7]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <span className="flex items-center justify-center gap-5">
                  Send Message
                  <HiMiniPaperAirplane className="text-lg" />
                </span>
              )}
            </button>
          </div>
        </form>

        {/* <!-- My coordinates --> */}
        <div className="w-full lg:w-[45%] px-4 py-4 rounded-2xl">
          {/* <!-- email --> */}
          <div className="MiniCoor bg-slate-50 mb-4 rounded-lg py-2 px-4 flex items-start gap-5 shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:-translate-y-1">
            <MdOutlineMailOutline className="contact" />
            <div>
              <h2 className="font-bold text-teal-700">Email</h2>
              <p className="wrap-break-words hover:text-teal-600">
                &#122;&#97;&#107;&#97;&#114;&#105;&#97;&#46;&#108;&#97;&#114;&#100;&#106;&#97;&#110;&#101;&#46;&#112;&#114;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
              </p>
            </div>
          </div>
          {/* <!-- phone number --> */}
          <div className="MiniCoor bg-slate-50 mb-4 rounded-lg py-2 px-4 flex items-start gap-5 shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:-translate-y-1">
            <FaPhone className="contact" />
            <div>
              <h2 className="font-bold text-teal-700">Phone Number</h2>
              <p>+213 791 93 10 17</p>
            </div>
          </div>
          {/* <!-- location --> */}
          <div className="MiniCoor bg-slate-50 mb-4 rounded-lg py-2 px-4 flex items-start gap-5 shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:-translate-y-1">
            <SiGooglemaps className="contact" />
            <div>
              <h2 className="font-bold text-teal-700">Location</h2>
              <p>Algiers, Algeria</p>
            </div>
          </div>
          {/* <!-- responce time --> */}
          <div className="MiniCoor bg-slate-50 mb-4 rounded-lg py-2 px-4 flex items-start gap-5 shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:-translate-y-1">
            <MdTimer className="contact" />
            <div>
              <h2 className="font-bold text-teal-700">Response Time</h2>
              <p>Within 24 Hours</p>
            </div>
          </div>
          {/* <!-- socials --> */}
          <div className="MiniCoor bg-slate-50 mb-4 rounded-lg py-2 px-4 flex gap-5 shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:-translate-y-1">
            <IoShareSocial className="contact" />

            <div>
              <h2 className="font-bold text-teal-700">Social Media</h2>
              <ul className="flex items-start flex-wrap flex-row">
                <a
                  href="#"
                  target="_blank"
                  className="mr-3 cursor-pointer transition-all duration-500 ease-in-out hover:text-teal-500"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="mr-3 cursor-pointer transition-all duration-500 ease-in-out hover:text-teal-500"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="mr-3 cursor-pointer transition-all duration-500 ease-in-out hover:text-teal-500"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ZakariaL-dev"
                  target="_blank"
                  className="mr-3 cursor-pointer transition-all duration-500 ease-in-out hover:text-teal-500"
                >
                  GitHub
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={Snack.open}
        autoHideDuration={4500}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        slots={{ transition: Slide }}
        slotProps={{ transition: { direction: "up" } }}
      >
        <Alert
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          severity={Snack.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {Snack.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;

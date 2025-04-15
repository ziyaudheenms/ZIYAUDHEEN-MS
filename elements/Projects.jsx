"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Projects() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center  rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-black/[0.88] pb-5 sm:rounded-3xl overflow-x-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="font-light text-[17px]  text-white text-center md:text-left text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                 
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-400 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="font-light text-[17px]  text-white text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Password Manager Software",
    title: "PW manager",
    src: "/pw.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          In this growing world we all are getting more and more engaged in
          internet, so to keep our various social media , network accounts we
          use various passwords, but there may be some cases where we might
          forget some passwords due to having many . PW MANAGER provides a solid
          solution for that, In PW MANAGER , under a single password you can
          store more complex passwords for your various accounts, by that what
          you needed is to just remember one password to login to PW MANAGER,
          and can create different passwords for different accounts and can save
          in your page.By that you can copy the passwords for your accounts
          whenever you need ,can use them and keep your digital accounts
          secure.You need to create an account in PW MANAGER with username ,
          email ,password for accessing the manager.
        </p>
      );
    },
  },
  {
    description: "Full stack blogging solution",
    title: "Bloweb",
    src: "/bl.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          : Bloweb is my first full stack web application I developed after
          completing my 365 days of STEYP. It is made with react js in fronted,
          Django with rest Api in backend and POSTRESQL as database. This is a
          social media blogging application where we can create , edit, delete
          our posts. FEATURES •Users can create account with their email,
          username etc, •we can view the posts of others, can like them •bloweb
          provides single page for the posts and we can also put comments for
          the blogs we want. .•A well-structured profile page that tracks the no
          of posts we created, the day we created the account, no of comments we
          wrote etc and can view all our posts in the profile page with options
          for deleting and editing the post. •Bloweb provides a page for
          listening all the users of the platform and we can view there profiles
          to. •to customize user experience, we provide two filters 1.category
          filtering 2.search filter of the posts we need.
        </p>
      );
    },
  },

  {
    description: "House Renting Platform",
    title: "Hourent",
    src: "/solve.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Hourent ||full stack house renting platform.Hourent is a fully
          dedicated platform for renting our properties, in another way we can
          say that Hourent is a virtual transparent agent between owner of
          property and his customer. The Platform contains wide variety of
          features including: - 1, We can list our property for small interval
          (SHORT RENTAL) and also for large interval (LONG RENTAL). Hourent
          provides separate sections for listing SHORT TERM RENTAL and LONG-TERM
          RENTAL. 2, Wide variety of filtering including sorting based on: - a,
          no of rooms b, no of baths c, renting rate d, based on parking, pets
          allowed AC facilities. e, based on category (house, apartment, studio,
          cabins) 3, user can request the owner to connect with them for the
          further details and procedures of the properties. Once the owner
          accepts your request user will be provided with the phone no and
          WhatsApp no of the owner. For all these functionalities dedicated
          Inbox feature is added in the project. The Background colour of each
          request box will be in WHITE and once the owner accepts the request
          the inbox message div will have a GREEN colour as background colour so
          that it will helps as to distinguish between the request and accepted
          message. 4, Check Availability feature is included so that once the
          user fills the form and submits, an email will be sent to the owner
          with the name of the user and the dates he wants to have owner's
          property with their number so that to connect them directly or through
          replying to the email. 5, Exact google location will be available with
          the property so that we can get the clear idea about that particular
          locality. 6, Clear and efficient details about the house, address,
          detailed descriptions, photos of interior and exterior of the house,
          so that the user can get a clear idea about the property they want as
          rent.
        </p>
      );
    },
  },
  {
    description: "Gen AI chatbot",
    title: "BLOGGER AI",
    src: "/ai.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Blogger is a AI blog generating platform that I build using powerfull
          framework Langchain powered by python. Langchain is a framework used
          to build applications that uses llms. In this platform we just need to
          provide the topic on which we want to generate content and the AI
          working behind will generate it. Llm used in this project is
          llama-3.3-70b-versatile.
        </p>
      );
    },
  },
];

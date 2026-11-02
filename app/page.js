import Image from "next/image";

export default function Home() {
  const scheduleData1 = [
    {
      title: "Saturday, February 28th",
      items: [
        {event: "Doors open", time: "9:00 AM"},
        {event: "Opening Ceremony", time: "9:30 AM"},
        {event: "Start working on your project!", time: "10:00 AM"},
        {event: "Workshop 1", time: "10:30 AM"},
        {event: "Lunch", time: "12:30 PM"},
        {event: "Activity", time: "2:30 PM"},
        {event: "Workshop 2", time: "4:30 PM"},
        {event: "Dinner", time: "6:00 PM"},
        {event: "1st projects demo", time: "7:30 PM"},
        {event: "Go home and rest", time: "8:00 PM"}
      ]
    }
  ];
  const scheduleData2 = [
    {
      title: "Sunday, March 1st",
      items: [
        {event: "Doors open", time: "9:00 AM"},
        {event: "Breakfast", time: "9:00 AM"},
        {event: "Workshop 3", time: "11:00 AM"},
        {event: "Lunch", time: "12:30 PM"},
        {event: "Activity", time: "2:30 PM"},
        {event: "Submissions close!", time: "4:00 PM"},
        {event: "Demos and judging!", time: "4:30 PM"},
        {event: "Closing ceremony", time: "5:00 PM"},
        {event: "Home!", time: "5:30 PM"}
      ]
    }
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#12372A] font-sans">
      <div className="grid grid-cols-2 w-[90vw] items-center justify-center h-[100vh]">
        <div className="items-start justify-start h-fit w-full flex flex-col">
          <Image src={"/EvergreenLogo1.png"} alt="image" width="1000" height="100" className="w-[80%]"/>
          <p className="text-[#8E9E7B] text-left text-md lg:text-2xl leading-relaxed py-5">
            This fall we invite you and your friends to join us for Evergreen, a hackathon for teenagers in Springfield, Missouri. Over the course of two days, you'll <strong>learn something new, make something you're really proud of, meet new friends,</strong> and go on an incredible adventure together. Everything is <strong>completely free,</strong> including food and merch!
          </p>
          <div className="lg:col-span-2 lg:col-start-2 items-center justify-center flex">
            <a className="z-10 min-w-[40%] h-10 bg-red-500 rounded-xl" target="_blank" rel="noopener noreferrer" href="https://springfieldhackers.fillout.com/evergreen">
              <button className="min-w-[100%] min-h-[100%] bg-[#8E9E7B] cursor-pointer text-black text-2xl rounded-xl px-5">Sign Up</button>
            </a>
          </div>
        </div>
        <div className="items-end justify-center h-full w-full flex flex-col">
          <Image src={"/cover.png"} alt="image" width="1000" height="100" className="w-[80%]"/>
        </div>
      </div>

      <div className="flex flex-col w-full items-start justify-start min-h-[100vh] h-fit bg-[#8E9E7B] px-[5vw] py-20 gap-y-15">
        <div className="grid grid-cols-2 items-start justify-start w-full gap-x-15">
          <div className="items-start justify-start h-fit w-full flex flex-col">
            <Image src={"/Who.png"} alt="image" width="1000" height="100" className="w-[40%]"/>
            <p className="text-[#12372A] text-left text-md lg:text-2xl leading-relaxed py-5">
              Evergeen is open to all teenagers aged 13 to 18, inclusive, who are interested in coding or arts. We welcome everyone of all skill levels and will have workshops for beginners
            </p>
          </div>
          <div className="items-start justify-start h-fit w-full flex flex-col">
            <Image src={"/What.png"} alt="image" width="1000" height="100" className="w-[40%]"/>
            <p className="text-[#12372A] text-left text-md lg:text-2xl leading-relaxed py-5">
              During the hackathon, you will team up with other attendees, attend workshops, create your own coding project (website, game, etc), then win prizes for your projects!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-start justify-start w-full gap-x-15">
          <div className="items-start justify-start h-fit w-full flex flex-col">
            <Image src={"/When.png"} alt="image" width="1000" height="100" className="w-[40%]"/>
            <p className="text-[#12372A] text-left text-md lg:text-2xl leading-relaxed py-5">
              Evergreen will be hosted on November 21st and 22nd at Drury University. You are not required to be at the event the whole time, but we recommend it as it will give you the most time on your project.
            </p>
          </div>
          <div className="items-start justify-start h-fit w-full flex flex-col">
            <Image src={"/HowMuch.png"} alt="image" width="1000" height="100" className="w-[40%]"/>
            <p className="text-[#12372A] text-left text-md lg:text-2xl leading-relaxed py-5">
              We want this hackathon to be accessible to everyone in the area, so it will be 100% free! Meals and snacks will be provided as well. All you need to bring is a laptop (preferably not school-provided) and an open mind!
            </p>
          </div>
        </div>

      </div>

      <div className="flex flex-col w-full items-start justify-start min-h-[100vh] h-fit bg-[#12372A] px-[5vw] py-20">
        <div className="flex flex-col w-full">
          <h1 className="text-center pb-2 text-2xl font-sansation-bold lg:text-4xl">Schedule</h1>
          <p className="text-center pb-10 text-md lg:text-md px-10 lg:px-0">* Participants are not required (but are recommended) to be present for the entirety of the event *</p>
        </div>
        <div className="flex w-full gap-x-10">
          <div className="items-center justify-center bg-[#562C21]/80 lg:bg-[#562C21] rounded-xl border border-3 border-black mb-10 z-10 min-h-80 max-w-200 py-10 mx-auto w-full">
            {scheduleData1.map((day, index) => (
              <div key={index} className="text-white z-20 text-center text-lg lg:text-xl mb-5 lg:mb-10 py-2 px-6 sm:px-10 lg:px-30">{day.title}
                  {day.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-4">
                      <span className="text-white z-20 text-center text-sm lg:text-xl">{item.event}</span>
                      <span className="text-white z-20 text-center text-sm lg:text-xl">{item.time}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div className="items-center justify-center bg-[#562C21]/80 lg:bg-[#562C21] rounded-xl border border-3 border-black mb-10 z-10 min-h-80 max-w-200 py-10 mx-auto w-full">
            {scheduleData2.map((day, index) => (
              <div key={index} className="text-white z-20 text-center text-lg lg:text-xl mb-5 lg:mb-10 py-2 px-6 sm:px-10 lg:px-30">{day.title}
                  {day.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-4">
                      <span className="text-white z-20 text-center text-sm lg:text-xl">{item.event}</span>
                      <span className="text-white z-20 text-center text-sm lg:text-xl">{item.time}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
        
        {/* <div className="flex flex-col w-full h-[200vh] items-center justify-center gap-6 text-center bg-gradient-to-b from-[#12372A] from-70% to-[#70887E]">
          hello
        </div> */}

        {/* <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-6 text-center bg-gradient-to-b from-[#70887E] from-70% to-[#70887E]">
          hello
        </div> */}
        
    </div>
  );
}

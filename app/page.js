import Image from "next/image";

export default function Home() {
  const scheduleData1 = [
    {
      title: "Saturday, November 21st",
      items: [
        {event: "Doors open", time: "9:00 AM"},
        {event: "Opening Ceremony", time: "9:30 AM"},
        {event: "Start working on your project!", time: "10:00 AM"},
        {event: "Workshop 1", time: "10:30 AM"},
        {event: "Lunch", time: "12:30 PM"},
        {event: "Activity", time: "2:30 PM"},
        {event: "Workshop 2", time: "4:30 PM"},
        {event: "Dinner", time: "6:00 PM"},
        {event: "1st projects demo", time: "7:00 PM"},
        {event: "Go home and rest", time: "8:00 PM"}
      ]
    }
  ];
  const scheduleData2 = [
    {
      title: "Sunday, November 22nd",
      items: [
        {event: "Doors open", time: "9:00 AM"},
        {event: "Breakfast", time: "9:00 AM"},
        {event: "Workshop 3", time: "11:00 AM"},
        {event: "Lunch", time: "12:30 PM"},
        {event: "Activity", time: "2:30 PM"},
        {event: "Submissions close!", time: "4:30 PM"},
        {event: "Demos and judging!", time: "5:00 PM"},
        {event: "Closing ceremony", time: "5:30 PM"},
        {event: "Home!", time: "6:00 PM"}
      ]
    }
  ];

  const sponsors = [
    {image: "/images/NPD-Logo-color.png", url: "https://www.beyondthecontract.com/", name: "NorthPoint Development"},
    {image: "/images/Mostly_Serious_logo_Orange.png", url: "https://www.mostlyserious.io/", name: "Mostly Serious"}
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#12372A] font-sansation">
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
              During the hackathon, you will team up with other attendees, attend workshops, create your own original coding project (website, game, etc), then win prizes for your projects!
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

      <div className="items-center justify-center bg-[#25433C] mb-10 z-10 min-h-80 py-10 lg:px-10 mx-auto w-[100%] lg:w-full">
        <h1 className="text-center pb-2 text-xl font-sansation-bold lg:text-4xl">What Will You Make?</h1>
        <h1 className="text-center pb-10 text-md lg:text-xl px-5 lg:px-0">Take a look at the below sample projects made by participants at our last events!</h1>

        <div className="w-100 overflow-x-auto lg:h-full lg:w-full">
          <div className="items-start justify-center h-full flex gap-6  sm:grid lg:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 min-w-max lg:min-w-full lg:w-full">

            <div className="snap-center max-w-60 flex-shrink lg:max-w-full">
              <a href="https://thee-best.itch.io/the-test-of-sacrifice" target="_blank" rel="noopener noreferrer">
                <img src="/images/TheTestOfSacrifice.png" alt="Test Of Sacrifice Game" className="w-full"></img>
              </a>
              <p className="text-white z-20 text-center text-md lg:text-xl font-sansation-bold mt-3 underline">
                <a href="https://thee-best.itch.io/the-test-of-sacrifice" target="_blank" rel="noopener noreferrer">The Test of Sacrifice</a>
              </p>
              <p className="text-white z-20 text-center text-sm lg:text-lg">
                A two-player platformer made in Godot. This game won first place at one of our past hackathons: Daydream Missouri!
              </p>
            </div>

            <div className="snap-center max-w-60 flex-shrink lg:max-w-full">
              <a href="https://thucchi-cs.itch.io/funky-forest" target="_blank" rel="noopener noreferrer">
                <img src="/images/FunkyForest.jpg" alt="FinTrack Website" className="w-full"></img>
              </a>
              <p className="text-white z-20 text-center text-md lg:text-xl font-sansation-bold mt-3 underline">
                <a href="https://thucchi-cs.itch.io/funky-forest" target="_blank" rel="noopener noreferrer">Funky Forest</a>
              </p>
              <p className="text-white z-20 text-center text-sm lg:text-lg">
                A fun rhythm game where you help squirrels catch acorns while they're rocking out! Funky Forest was made with Python's Pygame.
              </p>
            </div>

            <div className="snap-center max-w-60 lg:max-w-full">
              <a href="https://tgs2401.itch.io/just-press-space" target="_blank" rel="noopener noreferrer">
                <img src="/images/justpressspace.png" alt="JustPressSpace Game" className="w-full"></img>
              </a>
              <p className="text-white z-20 text-center text-md lg:text-xl font-sansation-bold mt-3 underline">
                <a href="https://tgs2401.itch.io/just-press-space" target="_blank" rel="noopener noreferrer">Just Press Space</a>
              </p>
              <p className="text-white z-20 text-center text-sm lg:text-lg">
                A survival platformer where you must outrun the aliens. This game was made with Godot and includes original art by the creator.
              </p>
            </div>

            <div className="snap-center max-w-60 flex-shrink lg:max-w-full">
              <a href="https://nerdinator.itch.io/of-stars-and-beats" target="_blank" rel="noopener noreferrer">
                <img src="/images/ofstarsandbeats.png" alt="Of Stars And Beats Game" className="w-full"></img>
              </a>
              <p className="text-white z-20 text-center text-md lg:text-xl font-sansation-bold mt-3 underline">
                <a href="https://nerdinator.itch.io/of-stars-and-beats" target="_blank" rel="noopener noreferrer">Of Stars And Beats</a>
              </p>
              <p className="text-white z-20 text-center text-sm lg:text-lg">
                A space themed multi-level platformer made with Godot. This game won first at our last hackathon: Aurora!
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-start justify-start min-h-[100vh] h-fit bg-[#12372A] px-[5vw] py-20">
        <div className="flex flex-col w-full">
          <h1 className="text-center pb-2 text-2xl font-sansation-bold lg:text-4xl">SCHEDULE</h1>
          <p className="text-center pb-10 text-md lg:text-md px-10 lg:px-0">* Participants are not required (but are recommended) to be present for the entirety of the event *</p>
        </div>
        <div className="flex w-full gap-x-10">
          <div className="items-center justify-center bg-[#562C21]/80 lg:bg-[#562C21] rounded-xl border border-3 border-black z-10 min-h-80 max-w-200 py-10 mx-auto w-full">
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
          <div className="items-center justify-center bg-[#562C21]/80 lg:bg-[#562C21] rounded-xl border border-3 border-black z-10 min-h-80 max-w-200 py-10 mx-auto w-full">
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
        
      <div className="flex flex-col w-full items-start justify-start h-fit bg-[#24353A] px-[5vw] py-20 gap-y-15">
        <div className="flex flex-col w-full">
          <h1 className="text-center py-5 lg:pb-10 text-2xl font-sansation-bold lg:text-4xl">SPONSORS</h1>
          <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
            {sponsors.map((sponsor, index) => (
              <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.image} alt={sponsor.name} className="w-full max-h-30"></img>
              </a>
            ))}
          </div>
          <p className="text-white text-center text-sm lg:text-lg py-10 lg:mt-5">Want to support Evergreen? Email us at <a className="underline" href="mailto:dothucchi@gmail.com">dothucchi@gmail.com</a></p>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-start min-h-[100vh] h-fit bg-[#D6D3B5] px-[5vw] py-20 text-[#12372A]">
        <h1 className="text-center py-5 lg:pb-10 text-2xl font-sansation-bold lg:text-4xl">ABOUT US</h1>
        <p className="text-left text-md lg:text-2xl leading-relaxed py-5">
          We are Springfield Hackers, affiliated with Hack Club, and our mission is to create more free and accessible STEM events such as this one to the teenage community of Springfield Missouri. We are teen-led and we aim to create a welcoming community to all who are interested in the world of tech and coding.
        </p>
        <p className="text-left text-md lg:text-2xl leading-relaxed py-5">
          Hack Club is the world's largest teenage coding community in the US. We host many events like this worldwide to provide free tech education to all. You can learn more about Hack Club at <a href="https://hackclub.com/" target="__blank" className="underline">hackclub.com</a>.
        </p>

        <div className="flex flex-col w-full items-start justify-start pt-10">
          <h1 className="text-left py-5 lg:pt-10 text-2xl font-sansation-bold lg:text-4xl">Our Past Events</h1>
          <p className="text-left text-md lg:text-2xl leading-relaxed">
            Check out the recaps of our last two events! Aurora was hosted in February 2026 at Missouri State University, and Daydream Missouri was hosted in September 2025 at Drury University.
          </p>
          <div className="flex w-full items-start justify-start gap-x-10">
            <a href="/AuroraRecap.pdf" target="_blank" rel="noopener noreferrer" className="w-[40%] hover:shadow-xl transition-shadow duration-300 shadow-black/50 shadow-md">
              <Image src={"/images/aurora.png"} alt="image" width="1000" height="100" className="w-full"/>
            </a>
            <a href="/DaydreamRecap.pdf" target="_blank" rel="noopener noreferrer" className="w-[37%] hover:shadow-xl transition-shadow duration-300 shadow-black/50 shadow-md">
              <Image src={"/images/daydream.png"} alt="image" width="1000" height="100" className="w-full"/>
            </a>
          </div>
        </div>

        <div className="flex flex-col w-full items-start justify-start pt-10">
          <h1 className="text-left py-5 lg:pt-10 text-2xl font-sansation-bold lg:text-4xl">Questions?</h1>
          <p className="text-left text-md lg:text-2xl leading-relaxed">
            Feel free to email our lead organizer, Chi Do, at dothucchi@gmail.com. Also check out our Instagram @springfieldhackers.
          </p>
        </div>
      </div>
        
    </div>
  );
}

const Home = () => {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        {/* navbar */}
        <nav className=" top-0 container mx-auto p-6">
          {/* flex container */}
          <div className="flex items-center justify-between ">
            {/* logo */}
            <div className=" pt-2">
              <Image src="/img/logo.svg" alt="Logo" width={72} height={16} />
            </div>
            {/* logo end */}
  
            {/* menu--items */}
            <div className="hidden md:flex space-x-6 ">
              <a href="" className="hover:text-gray-500">
                Pricing
              </a>
              <a href="" className="hover:text-gray-500">
                About us
              </a>
              <a href="" className="hover:text-gray-500">
                Contact us
              </a>
              <a href="" className="hover:text-gray-500">
                Careers
              </a>
              <a href="" className="hover:text-gray-500">
                Commmunity
              </a>
            </div>
            {/* menu--items end */}
  
            <div className="flex">
              {/* button */}
              <a
                href=""
                className="p-2 px-8 text-button   text-xs font-bold font-clashGroteskSemibold h-8 flex justify-center items-center"
              >
                Sign In
              </a>
              {/* button end*/}
  
              {/* button */}
              <a
                href=""
                className="p-2 px-6 text-white  bg-button rounded-lg text-xs font-bold font-clashGroteskSemibold h-8 flex justify-center items-center"
              >
                Create An Account
              </a>
              {/* button end*/}
            </div>
          </div>
  
          {/* flex container end */}
        </nav>
        {/* nav end */}
  
        <section
          id="hero"
          className=" bg-gradient-to-t from-indigo-100 ... h-screen"
        >
          {/* container wrapping the two sides */}
          <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto space-y-0 mt-10  ">
            {/* left side */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left font-nunito">
                The Smarter Way to Deliver & Grow
              </h1>
              <p className="text-sm font-nunito">
                Sendstack helps businesses grow with ease by providing the most
                reliable, affordable and <br />
                efficient delivery service.
              </p>
              {/* button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href=""
                  className="p-2 px-6 text-white text-sm font-bold bg-button rounded-lg baseline hover:bg-button"
                >
                  Get Started
                </a>
              </div>
              {/* button */}
  
              <div className="flex justify-start items-center space-x-2">
                <h1 className="font-bold font-nunito text-gray-70">
                  Trusted by:
                </h1>
                <Image
                  src="/img/smileypng.png"
                  alt="Logo"
                  width={40}
                  height={16}
                />
                <Image
                  src="/img/frugirlspng.png"
                  alt="Logo"
                  width={40}
                  height={16}
                />
                <Image src="/img/kudapng.png" alt="Logo" width={40} height={16} />
                <Image
                  src="/img/famasipng.png"
                  alt="Logo"
                  width={40}
                  height={16}
                />
              </div>
            </div>
            {/* left side end */}
  
            {/* right side */}
            <div className="flex flex-col mb-32 space-y-12 py-13 md:w-1/2">
              <Image className="object-fit"
                src="/img/sendstack_vendor.png"
                alt="Logo"
                width={580}
                height={200}
              />
            </div>
            {/* right side end*/}
          </div>
          {/* container wrapping the two sides end*/}
        </section>
  
          {/* features section */}
          <section id="features" className="bg-gradient-to-b from-indigo-100 ...">
          {/* container starts here */}
          <div className="container flex flex-col px-4 pt-10 mx-auto space-y-0 md:space-y-0 md:flex-row">
            {/*left side  */}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                Whats differnt about Manage?
              </h2>
              <p className="max-w sm text center text-gray-500 md:text-left">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document or
                a typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
              </p>
            </div>
  
            {/* right side */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* items list 01 */}
              <div className="flex flex-col space-y-3 mt-5 md:mt-0 md:space-y-0 md:space-x-6 md:flex-row">
                {/* heading  */}
  
                <div className="rounded-l-full bg-button md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-button">
                      01
                    </div>
  
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Track Company-wide progress
                    </h3>
                  </div>
                </div>
  
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Track company-wide progress
                  </h3>
  
                  <p className="text-gray-500">
                    In publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a
                    document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is
                    available.
                  </p>
                </div>
              </div>
              {/* items list 01 end */}
  
              {/* items list 02 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* heading  */}
  
                <div className="rounded-l-full bg-button md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-button">
                      02
                    </div>
  
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Track Company-wide progress
                    </h3>
                  </div>
                </div>
  
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Track company-wide progress
                  </h3>
  
                  <p className="text-gray-500">
                    In publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a
                    document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is
                    available.
                  </p>
                </div>
              </div>
              {/* items list 02 end */}
            </div>
            {/* right side end */}
          </div>
          {/* container ends here */}
        </section>
  
        {/* testimonnials */}
        <section id="testimonials" className="bg-gradient-to-t from-indigo-100 ...">
          <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">
              What's Different about Manage
            </h2>
  
            {/* testimmonials container */}
  
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              {/* testimonial 01 */}
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-gray-500">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a document
                  or a typeface without relying on meaningful content.
                </p>
              </div>
  
              {/* testimonial 02 */}
  
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray  md:flex md:w-1/3">
                <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">Ali Bravo</h5>
                <p className="text-sm text-gray-500">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a document
                  or a typeface without relying on meaningful content.
                </p>
              </div>
  
              {/* testimonial 03 */}
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                <img
                  src="img/avatar-richard.png"
                  className="w-16 -mt-14"
                  alt=""
                />
                <h5 className="text-lg font-bold">Richard Watts</h5>
                <p className="text-sm text-gray-500">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a document
                  or a typeface without relying on meaningful content.
                </p>
              </div>
            </div>
            {/* button */}
            <div className="mt-10">
              <a
                href=""
                className="p-2 px-6 text-xs text-white font-bold bg-button rounded-lg baseline hover:bg-button"
              >
                Visit Profiles
              </a>
            </div>
            {/* button */}
          </div>
        </section>
  
        {/* call to action */}
  
        <section id="cta" className="bg-gradient-to-b from-indigo-100 ...">
          <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <h2 className="text-2xl font-bold leading-tight-tight text-center text-gray-700 md:text-4xl md:max-w-xl md:text-left">
              Simplify how your team works today
            </h2>
  
            <div>
              {/* button */}
              <a
                href=""
                className=" text-xs p-2 px-6 font-bold text-white bg-button rounded-lg baseline hover:bg-blue-500"
              >
                learn more ...
              </a>
            </div>
            {/* button */}
          </div>
        </section>
      </div>
    );
  };
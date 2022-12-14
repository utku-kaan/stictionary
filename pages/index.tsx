import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-50">
      <Head>
        <title>Stictionary</title>
        <meta
          name="description"
          content="Stictionary helps you learn the words you look up. It is free, has no ads and works when you are offline."
        />
        <meta name="theme-color" content="#F8FAFC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-b-slate-200 p-4">
        <div className="relative h-11 w-11">
          <Image
            src={"/images/logo.svg"}
            layout="fill"
            draggable={false}
            alt=""
            quality={100}
          />
        </div>
      </header>
      <main className="px-4 lg:px-8">
        <div className="mx-auto mt-8 max-w-7xl lg:mx-20 lg:mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="">
              <h1 className=" text-center text-5xl leading-tight text-slate-800 lg:text-left">
                The dictionary that helps words{" "}
                <span className="relative inline-block">
                  stick
                  <div className="absolute h-[11px] w-[126px]">
                    <Image
                      src={"/images/underline.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                </span>
              </h1>
              <div className="mt-10 grid content-center justify-center lg:block">
                <p className="max-w-md text-center text-lg text-slate-700 lg:text-left">
                  Stictionary helps you learn the words you look up. It is free,
                  has no ads and works when you are offline.
                </p>
              </div>
              <div className="mx-auto mt-8 w-fit lg:mx-0">
                <div className="flex flex-col space-y-2 text-lg">
                  <div className="flex items-center space-x-1">
                    <div className="relative h-6 w-6">
                      <Image
                        src={"/images/tick.svg"}
                        layout="fill"
                        draggable={false}
                        priority={true}
                        alt=""
                      />
                    </div>
                    <p className="text-slate-700">Completely free</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="relative h-6 w-6">
                      <Image
                        src={"/images/tick.svg"}
                        layout="fill"
                        draggable={false}
                        alt=""
                      />
                    </div>
                    <p className="text-slate-700">No ads or tracking</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="relative h-6 w-6">
                      <Image
                        src={"/images/tick.svg"}
                        layout="fill"
                        draggable={false}
                        alt=""
                      />
                    </div>
                    <p className="text-slate-700">Offline support</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="relative h-6 w-6">
                      <Image
                        src={"/images/tick.svg"}
                        layout="fill"
                        draggable={false}
                        alt=""
                      />
                    </div>
                    <p className="text-slate-700">Sync across devices</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-8 w-fit lg:mx-0">
                <div className="flex items-center justify-start space-x-4">
                  <div className=" flex flex-col items-start justify-center space-y-2">
                    <p className="text-sm text-gray-500">Desktop Apps</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="relative h-8 w-8">
                        <Image
                          src={"/images/mac-app-store.svg"}
                          layout="fill"
                          draggable={false}
                          alt=""
                        />
                      </div>
                      <div className="relative h-8 w-8">
                        <Image
                          src={"/images/windows.svg"}
                          layout="fill"
                          draggable={false}
                          alt=""
                        />
                      </div>
                      <div className="relative h-8 w-8">
                        <Image
                          src={"/images/linux.svg"}
                          layout="fill"
                          draggable={false}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-12 w-[1px] bg-slate-300"></div>
                  <div className=" flex flex-col items-start justify-center space-y-2">
                    <p className="text-sm text-gray-500">Mobile Apps</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="relative h-8 w-8">
                        <a
                          target="_blank"
                          href="https://apps.apple.com/us/app/stictionary/id1613214660"
                          rel="noreferrer"
                        >
                          <Image
                            src={"/images/ios-store.svg"}
                            layout="fill"
                            draggable={false}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="relative h-8 w-8">
                        <Image
                          src={"/images/android.svg"}
                          layout="fill"
                          draggable={false}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src={"/images/pastel-gradient.jpg"}
                layout="fill"
                draggable={false}
                alt=""
                className="rounded-2xl"
              />
              <div className="grid h-full content-center justify-center">
                <Image
                  src={"/images/search-feature.png"}
                  height={336}
                  width={273}
                  draggable={false}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 space-y-16 lg:mt-36 lg:grid-cols-3 lg:space-y-0 lg:space-x-16">
          <section className="mx-auto flex max-w-3xl flex-col items-center space-y-4">
            <blockquote className="text-center text-2xl text-slate-600">
              ???
              <span className="bg-indigo-700 text-neutral-50">
                Just what I wanted for years
              </span>{" "}
              but gave up and wrote words on pieces of paper that eventually get
              lost.???
            </blockquote>
            <footer className="flex items-start space-x-2">
              <p className="text-slate-500">tartoran</p>
              <div className="h-6 w-1 rotate-12 rounded bg-sky-700"></div>
              <p className="text-slate-400">Hackernews</p>
            </footer>
          </section>
          <section className="mx-auto flex max-w-3xl flex-col items-center space-y-4">
            <blockquote className="text-center text-2xl text-slate-600">
              ???App looks amazing,{" "}
              <span className="bg-indigo-700 text-neutral-50">
                I didn&apos;t know I wanted this
              </span>{" "}
              but can see myself using it a ton now that I do.???
            </blockquote>
            <footer className="flex items-start space-x-2">
              <p className="text-slate-500">rsaz</p>
              <div className="h-6 w-1 rotate-12 rounded bg-sky-700"></div>
              <p className="text-slate-400">Hackernews</p>
            </footer>
          </section>
          <section className="mx-auto flex max-w-3xl flex-col items-center space-y-4">
            <blockquote className="text-center text-2xl text-slate-600">
              ???I was thinking of building exactly the same app few years ago.{" "}
              <span className="bg-indigo-700 text-neutral-50">
                Great list of features!
              </span>
              ???
            </blockquote>
            <footer className="flex items-start space-x-2">
              <p className="text-slate-500">podviaznikov</p>
              <div className="h-6 w-1 rotate-12 rounded bg-sky-700"></div>
              <p className="text-slate-400">Hackernews</p>
            </footer>
          </section>
        </div>
        <div className="mt-16 space-y-16 lg:mt-36 lg:space-y-36">
          <section className="lg:hidden">
            <div className="relative">
              <Image
                src={"/images/pastel-gradient.jpg"}
                layout="fill"
                draggable={false}
                alt=""
                className="rounded-2xl"
              />
              <div className="grid content-center justify-center py-8">
                <Image
                  src={"/images/search-feature.png"}
                  height={336}
                  width={273}
                  draggable={false}
                  alt=""
                />
              </div>
            </div>
            <h2 className="mt-8 text-2xl text-slate-800">Search as you type</h2>
            <p className="mt-4 text-lg text-slate-600">
              Don&apos;t know exactly how to spell a word? No problem.
              Stictionary shows matching words as you type when you are
              searching.
            </p>
          </section>
          <div className="mx-auto max-w-7xl lg:mt-36">
            <section className="grid grid-rows-[1fr_min-content] gap-8 lg:mx-20 lg:grid-cols-2 lg:grid-rows-1">
              <div className="relative lg:order-last">
                <Image
                  src={"/images/pastel-gradient.jpg"}
                  layout="fill"
                  draggable={false}
                  alt=""
                  className="rounded-2xl"
                />
                <div className="grid content-center justify-center py-8">
                  <Image
                    src={"/images/list-feature.png"}
                    height={336}
                    width={273}
                    draggable={false}
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:order-first lg:my-auto">
                <h2 className="text-2xl text-slate-800 lg:text-4xl">
                  Personalized word lists
                </h2>
                <p className="mt-4 text-lg text-slate-600 lg:max-w-md lg:text-xl">
                  Stictionary remembers every word you look up and can remind
                  you of them to help you retain your newfound vocabulary.
                </p>
              </div>
            </section>
          </div>{" "}
          <div className="mx-auto max-w-7xl lg:mt-36">
            <section className="grid grid-rows-[1fr_min-content] gap-8 lg:mx-20 lg:grid-cols-2 lg:grid-rows-1">
              <div className="relative">
                <Image
                  src={"/images/pastel-gradient.jpg"}
                  layout="fill"
                  draggable={false}
                  alt=""
                  className="rounded-2xl"
                />
                <div className="grid content-center justify-center py-8">
                  <Image
                    src={"/images/wofd-feature.png"}
                    height={336}
                    width={273}
                    draggable={false}
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:my-auto">
                <h2 className="text-2xl text-slate-800 lg:text-4xl">
                  Word of the day
                </h2>
                <p className="mt-4 text-lg text-slate-600 lg:max-w-md lg:text-xl">
                  Want to learn new words? Stictionary has you covered. Every
                  day a new Word of the Day is shown to all users.
                </p>
              </div>
            </section>
          </div>{" "}
          <div className="mx-auto max-w-7xl lg:mt-36">
            <section className="grid grid-rows-[1fr_min-content] gap-8 lg:mx-20 lg:grid-cols-2 lg:grid-rows-1">
              <div className="relative lg:order-last">
                <Image
                  src={"/images/pastel-gradient.jpg"}
                  layout="fill"
                  draggable={false}
                  alt=""
                  className="rounded-2xl"
                />
                <div className="grid content-center justify-center py-8">
                  <Image
                    src={"/images/flashcard-feature.png"}
                    height={336}
                    width={273}
                    draggable={false}
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:order-first lg:my-auto">
                <h2 className="text-2xl text-slate-800 lg:text-4xl">
                  Flashcard support
                </h2>
                <p className="mt-4 text-lg text-slate-600 lg:max-w-md lg:text-xl">
                  Stictionary can turn your word lists into flashcards
                  automatically with no hassle. So you can just enjoy learning
                  new words.
                </p>
              </div>
            </section>
          </div>{" "}
          <div className="mx-auto max-w-7xl lg:mt-36">
            <section className="grid grid-rows-[1fr_min-content] gap-8 lg:mx-20 lg:grid-cols-2 lg:grid-rows-1">
              <div className="relative">
                <Image
                  src={"/images/pastel-gradient.jpg"}
                  layout="fill"
                  draggable={false}
                  alt=""
                  className="rounded-2xl"
                />
                <div className="grid content-center justify-center py-8">
                  <Image
                    src={"/images/dark-feature.png"}
                    height={336}
                    width={273}
                    draggable={false}
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:my-auto">
                <h2 className="text-2xl text-slate-800 lg:text-4xl">
                  Dark mode
                </h2>
                <p className="mt-4 text-lg text-slate-600 lg:max-w-md lg:text-xl">
                  It&apos;s late at night? No problem. Stictionary can be used
                  in dark mode. No need to turn on the lights.
                </p>
              </div>
            </section>
          </div>
        </div>
        <section className="mt-16 lg:mt-32">
          <div>
            <h1 className="text-center font-[Poppins] text-2xl font-bold text-slate-800 lg:text-4xl">
              Start Learning Now.
            </h1>
            <p className="mt-4 text-center font-[Poppins] font-semibold text-slate-500 lg:text-lg">
              Improve your vocabulary for free!
            </p>
          </div>
          <div className="mx-auto mt-8 w-fit">
            <div className="flex items-center justify-start space-x-4">
              <div className=" flex flex-col items-start justify-center space-y-2">
                <p className="text-sm text-gray-500">Desktop Apps</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="relative h-11 w-11">
                    <Image
                      src={"/images/mac-app-store.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                  <div className="relative h-11 w-11">
                    <Image
                      src={"/images/windows.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                  <div className="relative h-11 w-11">
                    <Image
                      src={"/images/linux.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-12 w-[1px] bg-slate-300"></div>
              <div className=" flex flex-col items-start justify-center space-y-2">
                <p className="text-sm text-gray-500">Mobile Apps</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="relative h-11 w-11">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/us/app/stictionary/id1613214660"
                      rel="noreferrer"
                    >
                      <Image
                        src={"/images/ios-store.svg"}
                        layout="fill"
                        draggable={false}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="relative h-11 w-11">
                    <Image
                      src={"/images/android.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="-mx-4 mt-16 overflow-auto text-center lg:-mx-8 lg:mt-32">
          <Image
            layout="fixed"
            width={1280}
            height={692}
            loading="lazy"
            className="mx-auto max-w-7xl"
            alt="mobile showcase"
            src={"/images/mobile-showcase.png"}
          />
        </div>
      </main>
      <footer className="mx-auto mt-16 bg-slate-100 py-8">
        <div>
          <div className="mx-auto w-fit">
            <div className="flex items-center justify-start space-x-4">
              <div className=" flex flex-col items-start justify-center space-y-2">
                <p className="text-sm text-gray-500">Desktop Apps</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="relative h-8 w-8">
                    <Image
                      src={"/images/mac-app-store.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                  <div className="relative h-8 w-8">
                    <Image
                      src={"/images/windows.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                  <div className="relative h-8 w-8">
                    <Image
                      src={"/images/linux.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-12 w-[1px] bg-slate-300"></div>
              <div className=" flex flex-col items-start justify-center space-y-2">
                <p className="text-sm text-gray-500">Mobile Apps</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="relative h-8 w-8">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/us/app/stictionary/id1613214660"
                      rel="noreferrer"
                    >
                      <Image
                        src={"/images/ios-store.svg"}
                        layout="fill"
                        draggable={false}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="relative h-8 w-8">
                    <Image
                      src={"/images/android.svg"}
                      layout="fill"
                      draggable={false}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            ?? 2022 Skyward LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

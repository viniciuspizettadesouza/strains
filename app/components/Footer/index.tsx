import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="grid grid-cols-4 gap-y-10 gap-4 px-5 py-10 mx-auto max-w-screen-2xl justify-items-center ">
        <div>
          <Link href="/">
            <Image
              src="/leafwell.svg"
              width={80}
              height={80}
              alt="leafwell"
            ></Image>
          </Link>
        </div>
        <div>
          <nav className="grid gap-y-3 gap-x-6 grid-cols-2 col-span-3 col-start-4 self-start">
            <Link href="/about/">About Us</Link>
            <Link href="/contact-us/">Contact Us</Link>
            <Link href="/careers/">Careers</Link>
            <Link href="/">Get Involved</Link>
            <Link href="/">Scholarship</Link>
          </nav>
        </div>
        <div className="col-span-2">
          <div>
            <p className="text-right text-neutral-950 text-[19px] font-normal leading-loose">
              Keep updated with our social media
            </p>
            <ul className="flex flex-wrap items-center justify-end  ">
              <li className="mr-3 mt-3">
                <Link href="https://www.instagram.com/leafwell_official/">
                  <Image
                    height={20}
                    width={23}
                    src="https://leafwell.com/social/instagram.svg"
                    alt=""
                  />
                </Link>
              </li>
              <li className="mr-3 mt-3">
                <Link href="https://www.youtube.com/@leafwell/">
                  <Image
                    height={20}
                    width={23}
                    src="https://leafwell.com/social/youtube.svg"
                    alt=""
                  />
                </Link>
              </li>
              <li className="mr-3 mt-3">
                <Link href="https://www.facebook.com/leafwellofficial/">
                  <Image
                    height={20}
                    width={23}
                    src="https://leafwell.com/social/facebook.svg"
                    alt=""
                  />
                </Link>
              </li>
              <li className="mr-3 mt-3">
                <Link href="https://www.linkedin.com/company/leafwellofficial/">
                  <Image
                    height={20}
                    width={23}
                    src="https://leafwell.com/social/linkedin.svg"
                    alt=""
                  />
                </Link>
              </li>
              <li className="mr-3 mt-3">
                <Link href="https://twitter.com/_Leafwell_">
                  <Image
                    height={20}
                    width={23}
                    src="https://leafwell.com/social/twitter.svg"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-neutral-950 text-[14px] leading-snug font-bold">
            Leafwell HQ
          </p>
          <p className="text-neutral-950 text-[14px] font-normal leading-snug">
            Address: 3680 Wilshire Blvd.
            <br />
          </p>
          <p>Los Angeles, California, 90010</p>
          <p>Phone: +1 (800) 660-9085</p>
        </div>
        <div className="col-span-2">
          <p className="text-neutral-950 text-[14px] font-normal leading-snug">
            ©2021 Leafwell . Pepperjam Verification. Note: Information on this
            site does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
